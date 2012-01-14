(function(){
  var Emitterarchy, e;
  Emitterarchy = require('../lib/emitterarchy').Emitterarchy;
  e = new Emitterarchy();
  console.log("----- PART 1 -----");
  e.on('test', function(){
    console.log("got test");
  });
  e.emit('test');
  console.log("----- PART 2 -----");
  e.define('end').define('error', 'end').define('done', 'end');
  e.on('end', function(){
    console.log("got end");
  });
  e.emit('error');
  console.log("----- PART 3 -----");
  e.define('transient', 'error').define('fatal', 'error');
  e.on('error', function(){
    console.log("got error");
  });
  e.emit('transient');
  console.log("----- PART 4 -----");
  e.define('timeout', 'transient');
  e.on('transient', function(){
    console.log("got transient");
  });
  e.on('timeout', function(){
    console.log("got timeout");
  });
  e.emit('timeout');
}).call(this);
