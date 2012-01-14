(function(){
  var EventEmitter2, ex, Emitterarchy, __slice = [].slice;
  EventEmitter2 = require('eventemitter2').EventEmitter2;
  ex = typeof exports === 'undefined' && window || exports;
  ex.Emitterarchy = Emitterarchy = (function(superclass){
    Emitterarchy.displayName = 'Emitterarchy';
    var prototype = __extend(Emitterarchy, superclass).prototype, constructor = Emitterarchy;
    function Emitterarchy(opts){
      var _ref;
      superclass.call(this, (_ref = opts || {}, _ref.wildcard = true, _ref));
    }
    prototype.define = function(ev, par){
      (this.defs || (this.defs = {}))[ev] = par;
      return this;
    };
    prototype._nsev = function(ev){
      var nsev;
      nsev = ev;
      while (ev = (this.defs || (this.defs = {}))[ev]) {
        nsev = ev + "." + nsev;
      }
      return nsev;
    };
    prototype.on = function(ev, lis){
      ev = this._nsev(ev);
      superclass.prototype.on.call(this, ev, lis);
      superclass.prototype.on.call(this, ev + ".**", lis);
      return this;
    };
    prototype.emit = function(ev){
      var args;
      args = __slice.call(arguments, 1);
      ev = this._nsev(ev);
      superclass.prototype.emit.apply(this, [ev].concat(__slice.call(args)));
      return this;
    };
    return Emitterarchy;
  }(EventEmitter2));
  function __extend(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
}).call(this);
