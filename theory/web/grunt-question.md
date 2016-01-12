### 1. What is Grunt?

* Grunt is a JavaScript task runner, which can automate tasks like minification, compilation, unit testing, checking js errors. Once configured, one doesn’t have to worry about these tasks.

### 2. How do you install Grunt?

* Grunt and Grunt plugins are installed and managed via npm, the Node.js package manager. To install grunt, first ensure the npm is installed properly. And then run following command.
```
npm install grunt --save-dev //--save-dev is optional
```

### 3. How do you setup/configure Grunt?

Once installed, you need to add 2 files to setup Grunt.

* (1) **package.json:** This file is used by npm to store metadata for projects published as npm modules. So basically, there will be list of all Grunt plugins, along with grunt which your project is using.
* (2) **Gruntfile:** This file is named Gruntfile.js and is used to configure or define tasks and load Grunt plugins.

### 4. What is --save-dev option while installing the grunt?

"package.json" file holds the metadata for grunt plugins. So when grunt is installed using --save-dev option, the metadata is added to package.json. So you don’t have to add it manually. And this is how your package.json will look like,
```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

### 5. What is the difference between --save and --save-dev?


**devDependencies**

- For development purposes

- Eg: unit testing, packaging scripts, documentation generation, etc. where dependencies are required for production use, and assumed required for dev as well. As for example, you can include some plugin which you require during development like (for debugging or unit testing) but you don’t need them on production.

So **--save** adds packages under dependencies and **--save-dev** adds under devdependencies section.
```
{
  "name": "my-project-name",
  "version": "0.1.0",
  "dependencies": { //save
    "grunt": "~0.4.5",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
  "devDependencies": { //--save-dev
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
  }
}
```

### 6. Semver in npm?

* **~** -- most recent minor version (the middle number). ~1.2.3 will match all 1.2.x versions but will miss 1.3.0

* **^** -- more relaxed. It will update you to the most recent major version (the first number). ^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

* ***** -- latest version

* **"1.3.5"** -- might use exact version as the given eg

### 7. Installation commands

```javascript
npm install <module> --save-dev

npm install grunt-contrib-uglify --save-dev

npm install <module>@version --save-dev //install exact version

npm uninstall grunt

npm uninstall --save-dev grunt //remove freom package.json

```

### 8. What is Grunt-cli?

* Grunt cli is command line interface to run grunt commands.

```
npm install -g grunt-cli //install grunt globally
```

### 9. How does Gruntfile.js uses package.json?

* Task configuration is specified in your Gruntfile via the grunt.initConfig method. Inside of grunt.initConfig(), we read the information from package.json and saved it to a pkg property. With this, we can use the attributes from our package.json file. We can call the name of our project using pkg.name and the version with pkg.version.

```javascript
//Define a configuration of grunt plug in
//Ex: configuration for concat and uglify JS
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    // concat task configuration goes here.
    },
   uglify: {
    // uglify task configuration goes here.
   }
  });
};
```
Above code configures concat and uglify tasks.

### 10. Can you override default settings of a plugin? If yes, then how?

* Yes, we can override. Inside a task configuration, an options property may be specified to override built-in defaults. In addition, each target may have an options property which is specific to that target.

```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
     options: {
        separator: ';'
      }
    }
  });
};
```

### 11. What is a task in Grunt?
```javascript
//The following has 2 tasks
//and configured to run differently on dev and prod mode
grunt.initConfig({
  concat: {
    development: {
      // concat task "development" target options and files go here.
    },
    production: {
      // concat task "production" target options and files go here.
    },
  },
  uglify: {
    development: {
      // uglify task "development" target options and files go here.
    },
  },
});

### 12. Command execute grunt task?

```javascript
grunt concat //To execute task with particular target

grunt concat:development
```
### 13. How do we load grunt plugins in Gruntfile.js?

* Use **grunt.loadNpmTasks()** is used for loading grunt plugins.
```javascript
grunt.loadNpmTasks('grunt-contrib-uglify');
```

### 13. How to run multiple tasks together in grunt?

```javascript
grunt.registerTask('development', ['jshint:development', 'concat:development', 'uglify:development']);

grunt.registerTask('production', ['jshint:production', 'concat:production', 'uglify:production']);

grunt.registerTask('default', ['jshint', 'uglify', 'concat']);

```

### 14. How to get a stack trace when an error occurs?

* Use the --stack option to see stack traces: **grunt task –stack**

### 15. Which are the most used grunt plugins?

* watch: Run predefined tasks whenever watched file patterns are added, changed or deleted.
* jshint: Validate files with JSHint
* uglify: Minify files with UglifyJS
* concat: Concatenate files.
* cssmin: Minify CSS
* less: Compile LESS files to CSS.
