JSON.unflatten = function(data) {
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
    return data;
  var result = {}, cur, prop, parts, idx;
  for(var p in data) {
    cur = result, prop = "";
    parts = p.split(".");
    for(var i=0; i < parts.length; i++) {
      idx = !isNaN(parseInt(parts[i]));
      cur = cur[prop] || (cur[prop] = (idx ? [] : {}));
      prop = parts[i];
    }
    cur[prop] = data[p];
  }
  return result[""];
}

JSON.flatten = function(data) {
  var result = {};
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for(var i=0, l=cur.length; i<l; i++) {
        recurse(cur[i], prop ? prop+"."+i : ""+i);
      }
      if (l == 0) {
        result[prop] = [];
      }
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop+"."+p : p);
      }
      if (isEmpty) {
        result[prop] = {};
      }
    }
  }
  recurse(data, "");
  return result;
}

function benchmark() {
  var tries = 2;
  var count = 5;
  var result = [];
  var time, temp, noOpt;
  for(var x=0; x<tries; x++) {
    noOpt = [];
    time = Date.now();
    for(var i=0; i<count; i++) {
        temp = JSON.parse(JSON.stringify(fillObj({}, 4)));
        touchObj(temp, noOpt);
    }
    time = Date.now() - time;
    result.push("Nested : " + noOpt.length + " : " + time);
    //
    noOpt = [];
    time = Date.now();
    for(var i=0; i<count; i++) {
      temp = JSON.parse(JSON.stringify(fillObj({}, 4)));
      temp = JSON.flatten(temp);
      touchObj(temp, noOpt);
      temp = JSON.unflatten(temp);
    }
    time = Date.now() - time;
    result.push("Flattened : " + noOpt.length + " : " + time);
  }
  alert(result.join("\n"));
}

function fillObj(obj, depth) {
  obj["foo0"] = 1;
  obj["bar0"] = false;
  obj["foo2"] = -99999;
  obj["bar2"] = true;
  obj["foo3"] = 10002525.10002525;
  obj["bar3"] = "test";
  obj["foo4"] = "hello world hello world hello world hello world";
  obj["bar4"] = [1,2,3,4,5,6,7,8,9,0];
  if(depth > 0) {
    obj["foo5"] = {};
    fillObj(obj["foo5"], depth-1);
    obj["bar5"] = [{},{},{},{},{}];
    for(var i=0; i<obj["bar5"].length; i++) {
      fillObj(obj["bar5"][i], depth-1);
    }
  }
  return obj;
}

function touchObj(obj, noOpt) {
  if(Array.isArray(obj)) {
    for(var i=0; i<obj.length; i++) {
      touchObj(obj[i], noOpt);
    }
  } else if(typeof obj === "object" && obj !== null) {
    for(var i in obj) {
      touchObj(obj[i], noOpt);
    }
  } else {
    noOpt.push(true);
  }
  return noOpt;
}
benchmark();
