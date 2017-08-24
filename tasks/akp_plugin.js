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
  grunt.registerMultiTask('akp_plugin', 'The best Grunt plugin ever.', function() {
    var options = this.options({
        src: "src/",
        dest: "dist/",
        handler: "<!--DS22SD-->"
    });
    var data = fs.readdirSync(options.src);
      console.log(data);
      data.forEach(function(element) {
        console.log(element);
        var filename = element.replace(/^.*[\\\/]/, '')
        console.log(filename);
          var sourceHtml = fs.readFileSync(options.src+element, 'utf8');
          var sourceHtmlgArray = sourceHtml.split(options.handler);
          if(!fs.existsSync(options.dest))
            fs.mkdirSync(options.dest);
            var index = 0;
            sourceHtmlgArray.forEach(function(ele){
              fs.writeFileSync(options.dest+filename.replace(".html", "_" + index + ".html"), sourceHtmlgArray[index], 'utf-8');
              index += 1;
            })
        }, this);
      });
};
