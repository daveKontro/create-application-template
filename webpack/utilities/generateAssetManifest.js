module.exports = (seed, files, entrypoints) => {
  const manifestFiles = files.reduce((manifest, file) => {
    manifest[file.name] = file.path

    return manifest
  }, seed)

  const entrypointFiles = entrypoints.main.filter(
    fileName => !fileName.endsWith('.map')
  )

  return {
    files: manifestFiles,
    entrypoints: entrypointFiles,
  }
}
