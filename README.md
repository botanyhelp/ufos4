# ufos-4

> ufosightings app with feathersjs and vue3


### feathersjs ufos4

The initial setup was run as shown below:

```
ubuntu:~$ mkdir ufos4

ubuntu:~$ cd ufos4

ubuntu:~/ufos4$ feathers generate app

? Do you want to use JavaScript or TypeScript? JavaScript
? Project name ufos-4
? Description ufosightings app with feathersjs and vue3
? What folder should the source files live in? src
? Which package manager are you using (has to be installed globally)? npm
? What type of API are you making? REST, Realtime via Socket.io
? Which testing framework do you prefer? Mocha + assert
? This app uses authentication No
? Which coding style do you want to use? ESLint
   create package.json
   create config/default.json
   create public/favicon.ico
   create public/index.html
   create .editorconfig
   create src/app.hooks.js
   create src/channels.js
   create src/index.js
   create src/logger.js
   create src/middleware/index.js
   create src/services/index.js
   create .gitignore
   create README.md
   create src/app.js
   create test/app.test.js
   create .eslintrc.json
   create config/production.json
   create config/test.json
```
..and **feathers generate service**
```
ubuntu:~/ufos4$ feathers generate service
? What kind of service is it? Mongoose
? What is the name of the service? ufosightings
? Which path should the service be registered on? /ufosightings
? What is the database connection string? mongodb://sekret:sekret2@localhost:27017/ufos?authSource=admin
    force config/default.json
   create src/services/ufosightings/ufosightings.service.js
    force src/services/index.js
   create src/mongoose.js
   create src/services/ufosightings/ufosightings.class.js
   create src/models/ufosightings.model.js
   create src/services/ufosightings/ufosightings.hooks.js
   create test/services/ufosightings.test.js
    force src/app.js
```
..which makes this file:
```
ubuntu:~/ufos4$ cat config/default.json
{
  "host": "localhost",
  "port": 3030,
  "public": "../public/",
  "paginate": {
    "default": 10,
    "max": 50
  },
  "mongodb": "mongodb://sekret:sekret2@localhost:27017/ufos?authSource=admin"
}
```


## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/ufos-4
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
