#! /usr/bin/env node
const { writeFile } = require('fs/promises')
const { execSync } = require('child_process')
const path = require('path')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const packageJson = require('../package.json')

const run = async () => {
  const repo = 'https://github.com/daveKontro/create-application-template/tarball/main'

  const execCommand = (command) => {
    try {
      execSync(command, { stdio: 'inherit' })
    } catch (error) {
      console.error(`${command} failed`, error)
      process.exit(1)
    }

    return true
  }

  // consume arguments
  const argv = yargs(hideBin(process.argv)).argv

  if (!argv.name) {
    console.error('WARNING add a project name like so: npx create-application-template --name={my-project}')
    process.exit(1)
  }

  const projectPaths = {
    root: path.resolve('.', argv.name),
    get bin() { return path.resolve(this.root, 'bin') },
    get src() { return path.resolve(this.root, 'src') },
    get ccrate() { return path.resolve(this.root, 'ccrate') },
    get env() { return path.resolve(this.root, '.env') },
    get packageJson() { return path.resolve(this.root, 'package.json') },
    get subDirFiles() {
      const src = path.resolve(this.root, 'src')
      const assets = path.resolve(src, 'assets')
      const styles = path.resolve(src, 'styles')
      const components = path.resolve(src, 'components')

      const srcDirs = {
        assets: {
          faviconIco: path.resolve(assets, 'favicon.ico'),
          logoSvg: path.resolve(assets, 'logo.svg'),
        },
        components: {
          appSpecTsx: path.resolve(components, 'App.spec.tsx'),
          appTsx: path.resolve(components, 'App.tsx'),
        },
        styles: {
          logoStyledTs: path.resolve(styles, 'Logo.styled.ts'),
          themeTs: path.resolve(styles, 'theme.ts'),
        },
      }

      const webpackDirs = {
        webpack: {
          webpackCommonJs:
            path.resolve(this.root, 'webpack', 'webpack.common.js'),
        },
      }

      const getCcratePaths = (obj) => {
        return Object.entries(obj).reduce((acc, [key, value]) => {
          if (typeof value === 'object' && value !== null) {
            acc[key] = getCcratePaths(value)
          } else if (typeof value === 'string') {
            acc[key] = value
              .replace(/\/src/g, '/ccrate/src')
              .replace(/\/webpack\//g, '/ccrate/webpack/')
          }

          return acc
        }, {})
      }

      const paths = { ...srcDirs, ...webpackDirs }

      return {
        src: { ...paths },
        ccrate: { ...getCcratePaths({ ...paths }),
        },
      }
    },
  }

  const isNameDotCommand = (argv.name === '.')
  const projectName = isNameDotCommand ? path.basename(process.cwd()) : argv.name

  console.info('')
  console.info(`Your project name is: ${projectName}`)
  console.info('')

  // create project
  execCommand(`curl -L ${repo} | tar zx --one-top-level=${argv.name} --strip-components 1`)

  // groom project
  if (packageJson.hasOwnProperty('name')) packageJson.name = projectName
  if (packageJson.hasOwnProperty('version')) packageJson.version = '1.0.0'
  if (packageJson.hasOwnProperty('description')) packageJson.description = ''
  if (packageJson.hasOwnProperty('author')) packageJson.author = ''
  if (packageJson.hasOwnProperty('bin')) delete packageJson.bin
  if (packageJson.hasOwnProperty('repository')) delete packageJson.repository
  if (packageJson.dependencies.hasOwnProperty('yargs')) delete packageJson.dependencies.yargs

  if (argv.ccrate) {
    console.info('Running CCrATE sequence...')

    const { src, ccrate } = projectPaths.subDirFiles

    execCommand(`cp ${ccrate.assets.faviconIco} ${src.assets.faviconIco}`)
    execCommand(`cp ${ccrate.assets.logoSvg} ${src.assets.logoSvg}`)
    execCommand(`cp ${ccrate.components.appSpecTsx} ${src.components.appSpecTsx}`)
    execCommand(`cp ${ccrate.components.appTsx} ${src.components.appTsx}`)
    execCommand(`cp ${ccrate.styles.logoStyledTs} ${src.styles.logoStyledTs}`)
    execCommand(`cp ${ccrate.styles.themeTs} ${src.styles.themeTs}`)

    execCommand(`cp ${ccrate.webpack.webpackCommonJs} ${src.webpack.webpackCommonJs}`)
  }

  execCommand(`rm ${projectPaths.packageJson}`)
  execCommand(`rm -rf ${projectPaths.bin}`)
  execCommand(`rm -rf ${projectPaths.ccrate}`)

  try {
    await writeFile(projectPaths.packageJson, JSON.stringify(packageJson, null, 2), {
      encoding: 'utf8',
    })
  } catch (error) {
    console.error('package.json creation failed', error)
    process.exit(1)
  }

  execCommand(`touch ${projectPaths.env}`)

  // install project dependencies
  execCommand(`npm --prefix ${projectPaths.root} install`)

  // run scripts
  if (argv.ccrate) {
    execCommand(`npm --prefix ${projectPaths.root} run test:updateSnapshot`)
  }

  // finish up
  console.info('')
  console.info('Thanks for using Create Application Template!')

  process.exit(0)
}

run()
