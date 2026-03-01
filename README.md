> This package has moved to @epic-effx/create-application-template. Please install @epic-effx/create-application-template instead.

# Create Application Template
This project aims to provide a configured application template for you to build upon.  

All configuration is fully visible and under your control to augment as you see fit.  

The template is a typescript enabled React application with a test suite and code linting.  

See the template running live [here](https://www.createapplicationtemplate.com/).  

## installation
first install globally  
```
npm install -g create-application-template@latest
```
_or_
```
npm install -g create-application-template@beta
```

then create your project  
```
npx create-application-template --name={my-project}
```

## newest features 🚀
React 19 with [React Compiler](https://react.dev/learn/react-compiler/introduction) opt-in

this version takes advantage of the React Compiler's automatic optimization

it also includes the React Compiler's ESLint integration

## usage
webpack is used for code bundling and the development server  

run development server and test suite (on http://localhost:3333 by default)  
```
npm run dev
```

build static bundle  
```
npm run build
```

## tsconfig
focused on type checking; babel is used for transpiling  

## pre-commit
scripts in `.husky/pre-commit` are run on commits for quality control  

add or remove scripts you'd like run before code is committed  

## test suite
to create a test follow this file naming format: `*.{spec,test}.{ts,tsx}`  

run the test suite stand alone like so  
```
npm run test
```

## code linting
linting rules are in `.eslintrc.js`; install the ESLint plugin if using vscode  
```
npm run lint
```

css linting rules are in `.stylelintrc.js`; install the Stylelint plugin if using vscode  
```
npm run stylelint
```

## styles
styling is done using the style-components module, but straight CSS is supported

after instillation it is recommended to proceed using styled-components or CSS, but not both

if you proceed with styled-components: 
  - remove the single `.css` example in `/src/styles/`
  - that's it!

if you prefer CSS: 
  - alter `.stylelintrc.js` and `.husky/pre-commit` per the files' notes
  - remove `.ts` files from `/src/styles/` or "recreate" them in `.css`

## environmental settings
access environmental variables in code like so  
```
console.log(process.env.PORT)
```

### `NODE_ENV` settings
automatically set to `production` for build; `develop` for dev server  

### `.env` variables
add new or alter existing environmental variables via the `.env` file  

the following variables exist in the default configuration and can be altered  

#### develop (dev server)
```
# optional
PORT={port number}
INLINE_SIZE_LIMIT={default is 10000}
```

#### production (build)
```
# optional
INLINE_SIZE_LIMIT={default is 10000}
```

## dependency overrides

this version includes minimal npm `overrides` to patch known transitive vulnerabilities in webpack tooling

they are intentionally limited to patch-level upgrades within the same major

you can remove them in the future by:

  1. running `npm update`
  2. removing the `overrides` section
  3. reinstalling dependencies
  4. running `npm audit`
