# AngularMaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



I have implemented json server for creating db.json mock file for crud operations

  //using json server and file is db.json 
  url="http://localhost:3000/users";
  we have to run command
  >json-server --watch db.json
   to run js0n server
 

Also taken mock API Since some time JSON SERVER is down
  //mock API
  url3="https://dummy-json.mock.beeceptor.com/users";

  to run angular projet we have to run command
  >ng serve

  for setup of  angular these steps I have followed:

  step 1.Installed node.js library

  step 2.>npm install -g @angular/cli

  step 3.>npm install bootstrap(To install bootstrap)
  and it has to be added into angular.json file from node_modules folder

  step 4.>npm install json-server (installing json server )



All fields validation I have done for Reactive Forms