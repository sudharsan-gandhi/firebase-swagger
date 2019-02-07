# FireBase Functions With Swagger Auto Generator based on Comments
This project is the boiler plate to start with API Documentation for Firebase Functions(go Serverless...)

Clone the Boilerplate
[git-repo-url]: <https://github.com/sudharsan-gandhi-ces/firebase_swagger.git>
```sh
$ git clone https://github.com/sudharsan-gandhi-ces/firebase_swagger.git
$ cd firebase_swagger
```
## Project Folder
```sh
.
├── .firebaserc  # Stores data about firebase project
├── firebase.json # firebase configuration and scripts
├── functions 
│   ├── config.js # contains the initial swagger document code
│   ├── example.json # Example for swagger doc
│   ├── index.js # Main file where You need to add your firebase functions
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   └── swagger.json # This file will be generated using the script
├── Readme.md
├── script.sh # run this script to generate the new swagger doc based on the comments in index.js and                                  # deploy the new functions in firebase
└── swagger # This directory is standalone and serves static pages for the swagger UI.
    ├── assets
    ├── index.html
    ├── swagger-init.js # Swagger end point URL needs to updated here
    ├── swagger-standalone.js
    ├── swagger-ui-bundle.js
    └── swagger-ui.css
```
    
### Get Started with Firebase
Install firebase tools to start with the project then authenticate the firebase console using the following command.

```sh
$ npm install -g firebase-tools
$ firebase login # will redirect you to firebase console login... login there and comeback here to continue
$ firebase use --clear # this will clear all project ids added to this project if previously added
$ firebase use '$projectid' # get project ID from console.firebase.google.com
```
**note:** Check your '.firebaserc' file to see if the project id is added correctly.

### Run the application

Use npm to install the dependencies in the local and add write the necessary functions.
Add The Swagger related comments on to each api end points(firebase functions)
Maintain the format of swagger comments as in index.js or in example.json

```
$ npm i
```

### Deploy firebase functions

To Deploy firebase functions without generating the swagger doc

```
$ firebase deploy
$ # or
$ firebase deploy --only functions # this deploys only changes with firebase functions
```
To Generate and deploy the firebase functions. run the below script

```
$ ./scripts.sh
```

### Getting the URL from firebase
Open firebase console and go to the project -> functions
You will be seeing the list of API Endpoints deployed with there URL.
[Example]: https://us-central1-swagger-78c31.cloudfunctions.net/swagger
Copy the swagger end point and paste the URL in **swagger-init.js** So the api will be available on **swagger/index.html** when loaded.


### The Swagger UI
Swagger provides static files for the UI. This can served from Any server or CDN.
[Example]: https://sudharsan-gandhi-ces.github.io/firebase_swagger/swagger/ 


### workflow
![workflow](https://github.com/sudharsan-gandhi-ces/firebase_swagger/blob/master/workflow.jpg)

