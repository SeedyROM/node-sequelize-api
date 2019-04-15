<div align="center">
  <h1>SimpleAPI <small>(node, express, sequelize)</small></h1>
  <p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" width="200">
    <img src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" width="100px">
  </p>
  <p>
    <h5>
      This is a project to create a sane boilerplate for integrating SQL databases and express.<br>
      <i>Mostly a learning tool for me, so take this as is.</i>
    </h5>
  </p>
</div>

## Overview

This project is my attempt at making a semi sane boilerplate working with RDBMS' in Node. It also includes tools / helpers to create an example REST api with JWT authentication. *(JWT is not implemented yet)*

### Databases used per environment:
* SQLite for `development`
* SQLite in memory for `test`
* Any adapter for `production`, this is specified in the `config/config.js` file, default is `postgres`

## Getting started

* Clone this repository:
  * `git clone https://github.com/SeedyROM/node-sequelize-api`
  * or to rename it something else `git clone https://github.com/SeedyROM/node-sequelize-api myproject`
* Then change directories (`cd`) into the cloned repo
* Run `yarn install` or just `yarn` to install dependencies
* Migrate the initial example migrations into the local sqlite development database:
  * `yarn run sequelize db:migrate`
  * You can use `yarn run sequelize ...` to call any `sequelize-cli` commmand you need
* Then run `yarn start` to start a local development server

## Contributing

1. Fork it ( https://github.com/SeedyROM/node-sequelize-api/fork )
2. Create your feature branch (git checkout -b feature/my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin feature/my-new-feature)
5. Create a new Pull Request

## Contributors

- [SeedyROM](https://github.com/SeedyROM) Zack Kollar - creator, maintainer
