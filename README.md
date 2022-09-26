# goit-nodejs-hw-01

![GitHub actions settings](./img/screen.png)
Step 1
Initialize npm in a project
At the root of the project, create an index.js file
Install the nodemon package as a development dependency (devDependencies)
In package.json file add "scripts" to run index.js
start script that starts index.js with node
start:dev script that starts index.js with nodemon
Step 2
In the root of the project, create a folder db. To store contacts, download and use the contacts.json file, putting it in the db folder.

At the root of the project, create a contacts.js file.

Make imports of fs and path modules to work with the file system
Create a contactsPath variable and write the path to the contacts.json file into it. To compose a path, use the methods of the path module.
Add functions to work with a collection of contacts. In functions, use the fs module and its readFile() and writeFile() methods
Make the export of the created functions through module.exports
Step 3
Make an import of the contacts.js module in the index.js file and check the functionality of the functions for working with contacts.

Step 4
The index.js file imports the yargs package for convenient parsing of command line arguments. Use the ready-made invokeAction() function, which receives the type of action to be performed and the necessary arguments. The function calls the corresponding method from the contacts.js file, passing it the necessary arguments.
Also, you can use the commander module to parse command line arguments. This is a more popular alternative to the yargs module
Step 5
Run the commands in the terminal and take a separate screenshot of the result of each command.
Step 6 - Turn in your homework
Command execution screenshots can be uploaded to any free cloud image storage service (Example: monosnap, imgbb.com) and the corresponding links must be added to the README.md file. Create this file at the root of the project.

Admission criteria
Homework repository created - CLI application
The code corresponds to the terms of reference of the project
No unhandled errors occur when executing code
The names of variables, properties, and methods begin with a lowercase letter and are written in CamelCase notation. English nouns are used
The name of a function or method contains a verb
There are no commented sections of code in the code
The project works correctly in the current LTS version of Node
