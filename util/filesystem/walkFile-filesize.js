'use strict';

var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var _ = require("lodash");
var path = require("path");
var util = require("util");

function directorySizeInfo(root) {
  var counts = {dirs: 0, files: 0};
  var stats = (function reader(root) {
    return fs.readdirAsync(root).map(function(fileName) {
      var filePath = path.join(root, fileName);
      return fs.statAsync(filePath).then(function(stat) {
        stat.filePath = filePath;
        if (stat.isDirectory()) {
          counts.dirs++;
          return reader(filePath);
        }
        counts.files++;
        return stat;
      });
    }).then(_.flatten);
  })(root).then(_.chain);

  var smallest = stats.call("min", "size").call("pick", "size", "filePath").call("value");
  var largest = stats.call("max", "size").call("pick", "size", "filePath").call("value");
  var totalSize = stats.call("pluck", "size").call("reduce", function(a, b) {
    return a + b;
  }, 0);

  //Promise
  return Promise.props({
    counts: counts,
    smallest: smallest,
    largest: largest,
    totalSize: totalSize
  });
}


directorySizeInfo(process.argv[2] || ".").then(function(sizeInfo) {
  console.log(util.format("                                                \n\
      %d directories, %d files                                             \n\
      Total size: %d bytes                                                 \n\
      Smallest file: %s with %d bytes                                      \n\
      Largest file: %s with %d bytes                                       \n\
  ", sizeInfo.counts.dirs, sizeInfo.counts.files, sizeInfo.totalSize,
      sizeInfo.smallest.filePath, sizeInfo.smallest.size,
      sizeInfo.largest.filePath, sizeInfo.largest.size));
});
