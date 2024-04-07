![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template%2Fmain%2Fpackage.json&query=%24.version&label=version&labelColor=%23454145&color=%23cec2eb)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FdaveKontro%2Fcreate-application-template%2Fmain%2Fpackage.json&query=%24.engines.node&label=node&labelColor=%23454145&color=%23cec2eb)
![Static Badge](https://img.shields.io/badge/npm-v10.2.4-%23cec2eb?labelColor=%23454145)

# Create Application Template
This project aims to provide a configured application template for you to build upon.  

All configuration is fully visable and under your control to augment as you see fit.  

The template is a typescript enabled React application with a test suite and code linting.  

See the template running live [here](https://www.createapplicationtemplate.com/).  

## installation
first install globally  
```
npm install -g create-application-template
```

then create your project  
```
npx create-application-template --name={my-project}
```

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
focused on type checking; using babel for transpiling  

## pre-commit
scripts in `.husky/pre-commit` are run to check commits  

add or remove scripts as you see fit  

## test suite
to create a test follow this file naming format: `*.{spec,test}.{ts,tsx}`  

run the test suite stand alone like so  
```
npm run test
```

## code linting
linting rules are in `.eslintrc.js`; install the ESLint pluggin if using vscode  
```
npm run lint
```

css linting rules are in `.stylelintrc.js`; install the Stylelint pluggin if using vscode  
```
npm run stylelint
```

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
