## Setup environment
### Nodejs environment:
Install volta: https://docs.volta.sh/guide/getting-started - we use volta to manage nodejs version and also yarn, pnpm
Install nodejs 18: `volta install node@18.17.1`
Pin nodejs version: `volta pin node@18.17.1`

Install pnpm 8.7.4: `volta install pnpm@8.7.4`
### install node_module
run
```
pnpm install
```

### setup husky
we use husky for checking some task before commit code into github
run
```
pnpm run prepare
```

## Run project

### Run in development mode
```
pnpm run dev
```
