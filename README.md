# Create Application Template
This project aims to provide a configured application template for you to build upon.  
All configuration is fully visable and under your control to augment as you see fit.  

## install
```
npm install -g create-application-template

npx create-application-template --name={my-project}
```

## tsconfig
- focused on type checking; using babel for transpiling

## pre-commit
- scripts in `.husky/pre-commit` are run to check commits

## environmental settings
- add variables via a `.env` file created in project root
- access set variables like so: `console.log(process.env.PORT)`

### current variables

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
