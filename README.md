# UI Demo
A sample webpage based on a mockup

## Prerequisites
**[Node.js](https://nodejs.org/en/download/)**

**[bower](https://bower.io/)**
```
npm install -g bower
```

## Running the Application

Run the following commands in the project directory
```
npm install
bower install
npm start
```

## Package Information
Typically, AngularJs projects are structured by type, for example
```
app/
----- controllers/
----- directives/
----- services/
views/
```

But because this project will be extended in the future, I chose to organize my project by feature. 
That way, as my project grows, I can quickly locate the target file. 

### Gulpfile.js
The gulpfile contains different tasks used to develop, build, and serve the application.
