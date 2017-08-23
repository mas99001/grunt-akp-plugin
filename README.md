# grunt-akp-plugin

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-akp-plugin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-akp-plugin');
```

## The "akp_plugin" task

### Overview
In your project's Gruntfile, add a section named `akp_plugin` to the data object passed into `grunt.initConfig()`.

```js
module.exports = function (grunt) {
    grunt.initConfig({
        akp_plugin: {
          options: {
            src: "src/abc.html",
            dest: "destination/",
            handler: "<!--DS22SD-->"
          },
          files: {
            'dest/default_options': ['src/srcfile', 'src/123'],
          }
        },
      });
    grunt.registerTask('default', ['akp_plugin']);
    grunt.loadNpmTasks('grunt-akp-plugin');
}
```
##Package.json

```js
  "dependencies": {},
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-akp-plugin": "^0.1.1",
    "node-fs": "^0.1.7"
  },
  "engines": {
    "node": ">=0.8.0"
  }
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  akp_plugin: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  akp_plugin: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
