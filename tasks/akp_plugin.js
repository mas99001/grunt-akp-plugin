/*
 * grunt-akp-plugin
 * https://github.com/kumar/grunt-akp-plugin
 *
 * Copyright (c) 2017 Aditya Kumar
 * Licensed under the MIT license.
 */

'use strict';
var _ = require('lodash');
var fs = require('node-fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  console.log('###################################');
  console.log('My akp_plugin Begin 0');

  grunt.registerMultiTask('akp_plugin', 'The best Grunt plugin ever.', function() {
    var options = this.options({
        src: "src/patterns.html",
        dest: "dist/",
        handler: "<!--ABSSBA-->"
    });

    console.log(options.src);
    console.log(options.dest);
    console.log(options.handler);
  
    console.log('My akp_plugin Begin');
    var sourceHtml = fs.readFileSync(options.src, 'utf8');
    console.log(sourceHtml);
    var sourceHtmlgArray = sourceHtml.split(options.handler);
    console.log('sourceHtmlgArray[0]');
    console.log(sourceHtmlgArray[0]);
    console.log('sourceHtmlgArray[1]');
    console.log(sourceHtmlgArray[1]);
    console.log(options.dest+'abc1.html');
    console.log(options.dest+'abc2.html');
    if(!fs.existsSync(options.dest))
      fs.mkdirSync(options.dest);
    fs.writeFileSync(options.dest+'abc1.html', sourceHtmlgArray[0], 'utf-8');
    fs.writeFileSync(options.dest+'abc2.html', sourceHtmlgArray[1], 'utf-8');
    console.log('My akp_plugin End');      
    console.log('###################################');
  });

};
