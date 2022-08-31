# Movie Review service

## Description

This project uses [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

* Service runs on port **3000**

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Documentation

* Swagger documentation is available at <http://localhost:3000/docs>

## Docker

* Run below command to build image and start container

* Configure .env file with mongodb uri for docker-compose

```bash
docker-compose up
```

> Depends on mongodb, compose file doesn't include mongodb setup

* This docker exposes port 3000, access swagger docs at <http://localhost:3000/docs>
