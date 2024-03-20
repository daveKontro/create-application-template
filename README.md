# Create Application Template
This project aims to provide a configured application template for you to build upon.  

All configuration is fully visable and under your control to augment as you see fit.  

The template is a typescript enabled React application with a test suite and code linting.  

See the template running live [here](https://createapplicationtemplate.onrender.com).  

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

run development server and test suite on http://localhost:3333 by default    
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
add new environmental variables via the `.env` file in project  

the following variables exist in the current configuration and can be altered  

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
