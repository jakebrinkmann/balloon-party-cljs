// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__7378 = arguments.length;
switch (G__7378) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7379 = (function (f,blockable,meta7380){
this.f = f;
this.blockable = blockable;
this.meta7380 = meta7380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7381,meta7380__$1){
var self__ = this;
var _7381__$1 = this;
return (new cljs.core.async.t_cljs$core$async7379(self__.f,self__.blockable,meta7380__$1));
});

cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7381){
var self__ = this;
var _7381__$1 = this;
return self__.meta7380;
});

cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7380","meta7380",1335717852,null)], null);
});

cljs.core.async.t_cljs$core$async7379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7379";

cljs.core.async.t_cljs$core$async7379.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7379");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7379.
 */
cljs.core.async.__GT_t_cljs$core$async7379 = (function cljs$core$async$__GT_t_cljs$core$async7379(f__$1,blockable__$1,meta7380){
return (new cljs.core.async.t_cljs$core$async7379(f__$1,blockable__$1,meta7380));
});

}

return (new cljs.core.async.t_cljs$core$async7379(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__7385 = arguments.length;
switch (G__7385) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__7388 = arguments.length;
switch (G__7388) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__7391 = arguments.length;
switch (G__7391) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7393,ret){
return (function (){
return fn1.call(null,val_7393);
});})(val_7393,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__7395 = arguments.length;
switch (G__7395) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___7397 = n;
var x_7398 = (0);
while(true){
if((x_7398 < n__4376__auto___7397)){
(a[x_7398] = (0));

var G__7399 = (x_7398 + (1));
x_7398 = G__7399;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7400 = (i + (1));
i = G__7400;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7401 = (function (flag,meta7402){
this.flag = flag;
this.meta7402 = meta7402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7403,meta7402__$1){
var self__ = this;
var _7403__$1 = this;
return (new cljs.core.async.t_cljs$core$async7401(self__.flag,meta7402__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7403){
var self__ = this;
var _7403__$1 = this;
return self__.meta7402;
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7402","meta7402",-1172126319,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7401";

cljs.core.async.t_cljs$core$async7401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7401");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7401.
 */
cljs.core.async.__GT_t_cljs$core$async7401 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7401(flag__$1,meta7402){
return (new cljs.core.async.t_cljs$core$async7401(flag__$1,meta7402));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7401(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7404 = (function (flag,cb,meta7405){
this.flag = flag;
this.cb = cb;
this.meta7405 = meta7405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7406,meta7405__$1){
var self__ = this;
var _7406__$1 = this;
return (new cljs.core.async.t_cljs$core$async7404(self__.flag,self__.cb,meta7405__$1));
});

cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7406){
var self__ = this;
var _7406__$1 = this;
return self__.meta7405;
});

cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7404.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7405","meta7405",1108805355,null)], null);
});

cljs.core.async.t_cljs$core$async7404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7404";

cljs.core.async.t_cljs$core$async7404.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7404");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7404.
 */
cljs.core.async.__GT_t_cljs$core$async7404 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7404(flag__$1,cb__$1,meta7405){
return (new cljs.core.async.t_cljs$core$async7404(flag__$1,cb__$1,meta7405));
});

}

return (new cljs.core.async.t_cljs$core$async7404(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7407_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7407_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7408_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7408_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7409 = (i + (1));
i = G__7409;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___7415 = arguments.length;
var i__4500__auto___7416 = (0);
while(true){
if((i__4500__auto___7416 < len__4499__auto___7415)){
args__4502__auto__.push((arguments[i__4500__auto___7416]));

var G__7417 = (i__4500__auto___7416 + (1));
i__4500__auto___7416 = G__7417;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7412){
var map__7413 = p__7412;
var map__7413__$1 = ((((!((map__7413 == null)))?(((((map__7413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7413):map__7413);
var opts = map__7413__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7410){
var G__7411 = cljs.core.first.call(null,seq7410);
var seq7410__$1 = cljs.core.next.call(null,seq7410);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7411,seq7410__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__7419 = arguments.length;
switch (G__7419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7318__auto___7465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___7465){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___7465){
return (function (state_7443){
var state_val_7444 = (state_7443[(1)]);
if((state_val_7444 === (7))){
var inst_7439 = (state_7443[(2)]);
var state_7443__$1 = state_7443;
var statearr_7445_7466 = state_7443__$1;
(statearr_7445_7466[(2)] = inst_7439);

(statearr_7445_7466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (1))){
var state_7443__$1 = state_7443;
var statearr_7446_7467 = state_7443__$1;
(statearr_7446_7467[(2)] = null);

(statearr_7446_7467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (4))){
var inst_7422 = (state_7443[(7)]);
var inst_7422__$1 = (state_7443[(2)]);
var inst_7423 = (inst_7422__$1 == null);
var state_7443__$1 = (function (){var statearr_7447 = state_7443;
(statearr_7447[(7)] = inst_7422__$1);

return statearr_7447;
})();
if(cljs.core.truth_(inst_7423)){
var statearr_7448_7468 = state_7443__$1;
(statearr_7448_7468[(1)] = (5));

} else {
var statearr_7449_7469 = state_7443__$1;
(statearr_7449_7469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (13))){
var state_7443__$1 = state_7443;
var statearr_7450_7470 = state_7443__$1;
(statearr_7450_7470[(2)] = null);

(statearr_7450_7470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (6))){
var inst_7422 = (state_7443[(7)]);
var state_7443__$1 = state_7443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7443__$1,(11),to,inst_7422);
} else {
if((state_val_7444 === (3))){
var inst_7441 = (state_7443[(2)]);
var state_7443__$1 = state_7443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7443__$1,inst_7441);
} else {
if((state_val_7444 === (12))){
var state_7443__$1 = state_7443;
var statearr_7451_7471 = state_7443__$1;
(statearr_7451_7471[(2)] = null);

(statearr_7451_7471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (2))){
var state_7443__$1 = state_7443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7443__$1,(4),from);
} else {
if((state_val_7444 === (11))){
var inst_7432 = (state_7443[(2)]);
var state_7443__$1 = state_7443;
if(cljs.core.truth_(inst_7432)){
var statearr_7452_7472 = state_7443__$1;
(statearr_7452_7472[(1)] = (12));

} else {
var statearr_7453_7473 = state_7443__$1;
(statearr_7453_7473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (9))){
var state_7443__$1 = state_7443;
var statearr_7454_7474 = state_7443__$1;
(statearr_7454_7474[(2)] = null);

(statearr_7454_7474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (5))){
var state_7443__$1 = state_7443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7455_7475 = state_7443__$1;
(statearr_7455_7475[(1)] = (8));

} else {
var statearr_7456_7476 = state_7443__$1;
(statearr_7456_7476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (14))){
var inst_7437 = (state_7443[(2)]);
var state_7443__$1 = state_7443;
var statearr_7457_7477 = state_7443__$1;
(statearr_7457_7477[(2)] = inst_7437);

(statearr_7457_7477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (10))){
var inst_7429 = (state_7443[(2)]);
var state_7443__$1 = state_7443;
var statearr_7458_7478 = state_7443__$1;
(statearr_7458_7478[(2)] = inst_7429);

(statearr_7458_7478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7444 === (8))){
var inst_7426 = cljs.core.async.close_BANG_.call(null,to);
var state_7443__$1 = state_7443;
var statearr_7459_7479 = state_7443__$1;
(statearr_7459_7479[(2)] = inst_7426);

(statearr_7459_7479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___7465))
;
return ((function (switch__7228__auto__,c__7318__auto___7465){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_7460 = [null,null,null,null,null,null,null,null];
(statearr_7460[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_7460[(1)] = (1));

return statearr_7460;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_7443){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7461){if((e7461 instanceof Object)){
var ex__7232__auto__ = e7461;
var statearr_7462_7480 = state_7443;
(statearr_7462_7480[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7481 = state_7443;
state_7443 = G__7481;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_7443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_7443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___7465))
})();
var state__7320__auto__ = (function (){var statearr_7463 = f__7319__auto__.call(null);
(statearr_7463[(6)] = c__7318__auto___7465);

return statearr_7463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___7465))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7482){
var vec__7483 = p__7482;
var v = cljs.core.nth.call(null,vec__7483,(0),null);
var p = cljs.core.nth.call(null,vec__7483,(1),null);
var job = vec__7483;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7318__auto___7654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results){
return (function (state_7490){
var state_val_7491 = (state_7490[(1)]);
if((state_val_7491 === (1))){
var state_7490__$1 = state_7490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7490__$1,(2),res,v);
} else {
if((state_val_7491 === (2))){
var inst_7487 = (state_7490[(2)]);
var inst_7488 = cljs.core.async.close_BANG_.call(null,res);
var state_7490__$1 = (function (){var statearr_7492 = state_7490;
(statearr_7492[(7)] = inst_7487);

return statearr_7492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7490__$1,inst_7488);
} else {
return null;
}
}
});})(c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results))
;
return ((function (switch__7228__auto__,c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_7493 = [null,null,null,null,null,null,null,null];
(statearr_7493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__);

(statearr_7493[(1)] = (1));

return statearr_7493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1 = (function (state_7490){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7494){if((e7494 instanceof Object)){
var ex__7232__auto__ = e7494;
var statearr_7495_7655 = state_7490;
(statearr_7495_7655[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7656 = state_7490;
state_7490 = G__7656;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = function(state_7490){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1.call(this,state_7490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results))
})();
var state__7320__auto__ = (function (){var statearr_7496 = f__7319__auto__.call(null);
(statearr_7496[(6)] = c__7318__auto___7654);

return statearr_7496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___7654,res,vec__7483,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7497){
var vec__7498 = p__7497;
var v = cljs.core.nth.call(null,vec__7498,(0),null);
var p = cljs.core.nth.call(null,vec__7498,(1),null);
var job = vec__7498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___7657 = n;
var __7658 = (0);
while(true){
if((__7658 < n__4376__auto___7657)){
var G__7501_7659 = type;
var G__7501_7660__$1 = (((G__7501_7659 instanceof cljs.core.Keyword))?G__7501_7659.fqn:null);
switch (G__7501_7660__$1) {
case "compute":
var c__7318__auto___7662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7658,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (__7658,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function (state_7514){
var state_val_7515 = (state_7514[(1)]);
if((state_val_7515 === (1))){
var state_7514__$1 = state_7514;
var statearr_7516_7663 = state_7514__$1;
(statearr_7516_7663[(2)] = null);

(statearr_7516_7663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7515 === (2))){
var state_7514__$1 = state_7514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7514__$1,(4),jobs);
} else {
if((state_val_7515 === (3))){
var inst_7512 = (state_7514[(2)]);
var state_7514__$1 = state_7514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7514__$1,inst_7512);
} else {
if((state_val_7515 === (4))){
var inst_7504 = (state_7514[(2)]);
var inst_7505 = process.call(null,inst_7504);
var state_7514__$1 = state_7514;
if(cljs.core.truth_(inst_7505)){
var statearr_7517_7664 = state_7514__$1;
(statearr_7517_7664[(1)] = (5));

} else {
var statearr_7518_7665 = state_7514__$1;
(statearr_7518_7665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7515 === (5))){
var state_7514__$1 = state_7514;
var statearr_7519_7666 = state_7514__$1;
(statearr_7519_7666[(2)] = null);

(statearr_7519_7666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7515 === (6))){
var state_7514__$1 = state_7514;
var statearr_7520_7667 = state_7514__$1;
(statearr_7520_7667[(2)] = null);

(statearr_7520_7667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7515 === (7))){
var inst_7510 = (state_7514[(2)]);
var state_7514__$1 = state_7514;
var statearr_7521_7668 = state_7514__$1;
(statearr_7521_7668[(2)] = inst_7510);

(statearr_7521_7668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7658,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
;
return ((function (__7658,switch__7228__auto__,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_7522 = [null,null,null,null,null,null,null];
(statearr_7522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__);

(statearr_7522[(1)] = (1));

return statearr_7522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1 = (function (state_7514){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7523){if((e7523 instanceof Object)){
var ex__7232__auto__ = e7523;
var statearr_7524_7669 = state_7514;
(statearr_7524_7669[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7670 = state_7514;
state_7514 = G__7670;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = function(state_7514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1.call(this,state_7514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__;
})()
;})(__7658,switch__7228__auto__,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
})();
var state__7320__auto__ = (function (){var statearr_7525 = f__7319__auto__.call(null);
(statearr_7525[(6)] = c__7318__auto___7662);

return statearr_7525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(__7658,c__7318__auto___7662,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
);


break;
case "async":
var c__7318__auto___7671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7658,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (__7658,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function (state_7538){
var state_val_7539 = (state_7538[(1)]);
if((state_val_7539 === (1))){
var state_7538__$1 = state_7538;
var statearr_7540_7672 = state_7538__$1;
(statearr_7540_7672[(2)] = null);

(statearr_7540_7672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7539 === (2))){
var state_7538__$1 = state_7538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7538__$1,(4),jobs);
} else {
if((state_val_7539 === (3))){
var inst_7536 = (state_7538[(2)]);
var state_7538__$1 = state_7538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7538__$1,inst_7536);
} else {
if((state_val_7539 === (4))){
var inst_7528 = (state_7538[(2)]);
var inst_7529 = async.call(null,inst_7528);
var state_7538__$1 = state_7538;
if(cljs.core.truth_(inst_7529)){
var statearr_7541_7673 = state_7538__$1;
(statearr_7541_7673[(1)] = (5));

} else {
var statearr_7542_7674 = state_7538__$1;
(statearr_7542_7674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7539 === (5))){
var state_7538__$1 = state_7538;
var statearr_7543_7675 = state_7538__$1;
(statearr_7543_7675[(2)] = null);

(statearr_7543_7675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7539 === (6))){
var state_7538__$1 = state_7538;
var statearr_7544_7676 = state_7538__$1;
(statearr_7544_7676[(2)] = null);

(statearr_7544_7676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7539 === (7))){
var inst_7534 = (state_7538[(2)]);
var state_7538__$1 = state_7538;
var statearr_7545_7677 = state_7538__$1;
(statearr_7545_7677[(2)] = inst_7534);

(statearr_7545_7677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7658,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
;
return ((function (__7658,switch__7228__auto__,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_7546 = [null,null,null,null,null,null,null];
(statearr_7546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__);

(statearr_7546[(1)] = (1));

return statearr_7546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1 = (function (state_7538){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7547){if((e7547 instanceof Object)){
var ex__7232__auto__ = e7547;
var statearr_7548_7678 = state_7538;
(statearr_7548_7678[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7679 = state_7538;
state_7538 = G__7679;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = function(state_7538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1.call(this,state_7538);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__;
})()
;})(__7658,switch__7228__auto__,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
})();
var state__7320__auto__ = (function (){var statearr_7549 = f__7319__auto__.call(null);
(statearr_7549[(6)] = c__7318__auto___7671);

return statearr_7549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(__7658,c__7318__auto___7671,G__7501_7659,G__7501_7660__$1,n__4376__auto___7657,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7501_7660__$1)].join('')));

}

var G__7680 = (__7658 + (1));
__7658 = G__7680;
continue;
} else {
}
break;
}

var c__7318__auto___7681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___7681,jobs,results,process,async){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___7681,jobs,results,process,async){
return (function (state_7571){
var state_val_7572 = (state_7571[(1)]);
if((state_val_7572 === (1))){
var state_7571__$1 = state_7571;
var statearr_7573_7682 = state_7571__$1;
(statearr_7573_7682[(2)] = null);

(statearr_7573_7682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7572 === (2))){
var state_7571__$1 = state_7571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7571__$1,(4),from);
} else {
if((state_val_7572 === (3))){
var inst_7569 = (state_7571[(2)]);
var state_7571__$1 = state_7571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7571__$1,inst_7569);
} else {
if((state_val_7572 === (4))){
var inst_7552 = (state_7571[(7)]);
var inst_7552__$1 = (state_7571[(2)]);
var inst_7553 = (inst_7552__$1 == null);
var state_7571__$1 = (function (){var statearr_7574 = state_7571;
(statearr_7574[(7)] = inst_7552__$1);

return statearr_7574;
})();
if(cljs.core.truth_(inst_7553)){
var statearr_7575_7683 = state_7571__$1;
(statearr_7575_7683[(1)] = (5));

} else {
var statearr_7576_7684 = state_7571__$1;
(statearr_7576_7684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7572 === (5))){
var inst_7555 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7571__$1 = state_7571;
var statearr_7577_7685 = state_7571__$1;
(statearr_7577_7685[(2)] = inst_7555);

(statearr_7577_7685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7572 === (6))){
var inst_7557 = (state_7571[(8)]);
var inst_7552 = (state_7571[(7)]);
var inst_7557__$1 = cljs.core.async.chan.call(null,(1));
var inst_7558 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7559 = [inst_7552,inst_7557__$1];
var inst_7560 = (new cljs.core.PersistentVector(null,2,(5),inst_7558,inst_7559,null));
var state_7571__$1 = (function (){var statearr_7578 = state_7571;
(statearr_7578[(8)] = inst_7557__$1);

return statearr_7578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7571__$1,(8),jobs,inst_7560);
} else {
if((state_val_7572 === (7))){
var inst_7567 = (state_7571[(2)]);
var state_7571__$1 = state_7571;
var statearr_7579_7686 = state_7571__$1;
(statearr_7579_7686[(2)] = inst_7567);

(statearr_7579_7686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7572 === (8))){
var inst_7557 = (state_7571[(8)]);
var inst_7562 = (state_7571[(2)]);
var state_7571__$1 = (function (){var statearr_7580 = state_7571;
(statearr_7580[(9)] = inst_7562);

return statearr_7580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7571__$1,(9),results,inst_7557);
} else {
if((state_val_7572 === (9))){
var inst_7564 = (state_7571[(2)]);
var state_7571__$1 = (function (){var statearr_7581 = state_7571;
(statearr_7581[(10)] = inst_7564);

return statearr_7581;
})();
var statearr_7582_7687 = state_7571__$1;
(statearr_7582_7687[(2)] = null);

(statearr_7582_7687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___7681,jobs,results,process,async))
;
return ((function (switch__7228__auto__,c__7318__auto___7681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_7583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__);

(statearr_7583[(1)] = (1));

return statearr_7583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1 = (function (state_7571){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7584){if((e7584 instanceof Object)){
var ex__7232__auto__ = e7584;
var statearr_7585_7688 = state_7571;
(statearr_7585_7688[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7689 = state_7571;
state_7571 = G__7689;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = function(state_7571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1.call(this,state_7571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___7681,jobs,results,process,async))
})();
var state__7320__auto__ = (function (){var statearr_7586 = f__7319__auto__.call(null);
(statearr_7586[(6)] = c__7318__auto___7681);

return statearr_7586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___7681,jobs,results,process,async))
);


var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__,jobs,results,process,async){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__,jobs,results,process,async){
return (function (state_7624){
var state_val_7625 = (state_7624[(1)]);
if((state_val_7625 === (7))){
var inst_7620 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
var statearr_7626_7690 = state_7624__$1;
(statearr_7626_7690[(2)] = inst_7620);

(statearr_7626_7690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (20))){
var state_7624__$1 = state_7624;
var statearr_7627_7691 = state_7624__$1;
(statearr_7627_7691[(2)] = null);

(statearr_7627_7691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (1))){
var state_7624__$1 = state_7624;
var statearr_7628_7692 = state_7624__$1;
(statearr_7628_7692[(2)] = null);

(statearr_7628_7692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (4))){
var inst_7589 = (state_7624[(7)]);
var inst_7589__$1 = (state_7624[(2)]);
var inst_7590 = (inst_7589__$1 == null);
var state_7624__$1 = (function (){var statearr_7629 = state_7624;
(statearr_7629[(7)] = inst_7589__$1);

return statearr_7629;
})();
if(cljs.core.truth_(inst_7590)){
var statearr_7630_7693 = state_7624__$1;
(statearr_7630_7693[(1)] = (5));

} else {
var statearr_7631_7694 = state_7624__$1;
(statearr_7631_7694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (15))){
var inst_7602 = (state_7624[(8)]);
var state_7624__$1 = state_7624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7624__$1,(18),to,inst_7602);
} else {
if((state_val_7625 === (21))){
var inst_7615 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
var statearr_7632_7695 = state_7624__$1;
(statearr_7632_7695[(2)] = inst_7615);

(statearr_7632_7695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (13))){
var inst_7617 = (state_7624[(2)]);
var state_7624__$1 = (function (){var statearr_7633 = state_7624;
(statearr_7633[(9)] = inst_7617);

return statearr_7633;
})();
var statearr_7634_7696 = state_7624__$1;
(statearr_7634_7696[(2)] = null);

(statearr_7634_7696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (6))){
var inst_7589 = (state_7624[(7)]);
var state_7624__$1 = state_7624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7624__$1,(11),inst_7589);
} else {
if((state_val_7625 === (17))){
var inst_7610 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
if(cljs.core.truth_(inst_7610)){
var statearr_7635_7697 = state_7624__$1;
(statearr_7635_7697[(1)] = (19));

} else {
var statearr_7636_7698 = state_7624__$1;
(statearr_7636_7698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (3))){
var inst_7622 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7624__$1,inst_7622);
} else {
if((state_val_7625 === (12))){
var inst_7599 = (state_7624[(10)]);
var state_7624__$1 = state_7624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7624__$1,(14),inst_7599);
} else {
if((state_val_7625 === (2))){
var state_7624__$1 = state_7624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7624__$1,(4),results);
} else {
if((state_val_7625 === (19))){
var state_7624__$1 = state_7624;
var statearr_7637_7699 = state_7624__$1;
(statearr_7637_7699[(2)] = null);

(statearr_7637_7699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (11))){
var inst_7599 = (state_7624[(2)]);
var state_7624__$1 = (function (){var statearr_7638 = state_7624;
(statearr_7638[(10)] = inst_7599);

return statearr_7638;
})();
var statearr_7639_7700 = state_7624__$1;
(statearr_7639_7700[(2)] = null);

(statearr_7639_7700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (9))){
var state_7624__$1 = state_7624;
var statearr_7640_7701 = state_7624__$1;
(statearr_7640_7701[(2)] = null);

(statearr_7640_7701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (5))){
var state_7624__$1 = state_7624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7641_7702 = state_7624__$1;
(statearr_7641_7702[(1)] = (8));

} else {
var statearr_7642_7703 = state_7624__$1;
(statearr_7642_7703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (14))){
var inst_7602 = (state_7624[(8)]);
var inst_7604 = (state_7624[(11)]);
var inst_7602__$1 = (state_7624[(2)]);
var inst_7603 = (inst_7602__$1 == null);
var inst_7604__$1 = cljs.core.not.call(null,inst_7603);
var state_7624__$1 = (function (){var statearr_7643 = state_7624;
(statearr_7643[(8)] = inst_7602__$1);

(statearr_7643[(11)] = inst_7604__$1);

return statearr_7643;
})();
if(inst_7604__$1){
var statearr_7644_7704 = state_7624__$1;
(statearr_7644_7704[(1)] = (15));

} else {
var statearr_7645_7705 = state_7624__$1;
(statearr_7645_7705[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (16))){
var inst_7604 = (state_7624[(11)]);
var state_7624__$1 = state_7624;
var statearr_7646_7706 = state_7624__$1;
(statearr_7646_7706[(2)] = inst_7604);

(statearr_7646_7706[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (10))){
var inst_7596 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
var statearr_7647_7707 = state_7624__$1;
(statearr_7647_7707[(2)] = inst_7596);

(statearr_7647_7707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (18))){
var inst_7607 = (state_7624[(2)]);
var state_7624__$1 = state_7624;
var statearr_7648_7708 = state_7624__$1;
(statearr_7648_7708[(2)] = inst_7607);

(statearr_7648_7708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7625 === (8))){
var inst_7593 = cljs.core.async.close_BANG_.call(null,to);
var state_7624__$1 = state_7624;
var statearr_7649_7709 = state_7624__$1;
(statearr_7649_7709[(2)] = inst_7593);

(statearr_7649_7709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto__,jobs,results,process,async))
;
return ((function (switch__7228__auto__,c__7318__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_7650 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__);

(statearr_7650[(1)] = (1));

return statearr_7650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1 = (function (state_7624){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7651){if((e7651 instanceof Object)){
var ex__7232__auto__ = e7651;
var statearr_7652_7710 = state_7624;
(statearr_7652_7710[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7711 = state_7624;
state_7624 = G__7711;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__ = function(state_7624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1.call(this,state_7624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__,jobs,results,process,async))
})();
var state__7320__auto__ = (function (){var statearr_7653 = f__7319__auto__.call(null);
(statearr_7653[(6)] = c__7318__auto__);

return statearr_7653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__,jobs,results,process,async))
);

return c__7318__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__7713 = arguments.length;
switch (G__7713) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__7716 = arguments.length;
switch (G__7716) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__7719 = arguments.length;
switch (G__7719) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7318__auto___7768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___7768,tc,fc){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___7768,tc,fc){
return (function (state_7745){
var state_val_7746 = (state_7745[(1)]);
if((state_val_7746 === (7))){
var inst_7741 = (state_7745[(2)]);
var state_7745__$1 = state_7745;
var statearr_7747_7769 = state_7745__$1;
(statearr_7747_7769[(2)] = inst_7741);

(statearr_7747_7769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (1))){
var state_7745__$1 = state_7745;
var statearr_7748_7770 = state_7745__$1;
(statearr_7748_7770[(2)] = null);

(statearr_7748_7770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (4))){
var inst_7722 = (state_7745[(7)]);
var inst_7722__$1 = (state_7745[(2)]);
var inst_7723 = (inst_7722__$1 == null);
var state_7745__$1 = (function (){var statearr_7749 = state_7745;
(statearr_7749[(7)] = inst_7722__$1);

return statearr_7749;
})();
if(cljs.core.truth_(inst_7723)){
var statearr_7750_7771 = state_7745__$1;
(statearr_7750_7771[(1)] = (5));

} else {
var statearr_7751_7772 = state_7745__$1;
(statearr_7751_7772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (13))){
var state_7745__$1 = state_7745;
var statearr_7752_7773 = state_7745__$1;
(statearr_7752_7773[(2)] = null);

(statearr_7752_7773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (6))){
var inst_7722 = (state_7745[(7)]);
var inst_7728 = p.call(null,inst_7722);
var state_7745__$1 = state_7745;
if(cljs.core.truth_(inst_7728)){
var statearr_7753_7774 = state_7745__$1;
(statearr_7753_7774[(1)] = (9));

} else {
var statearr_7754_7775 = state_7745__$1;
(statearr_7754_7775[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (3))){
var inst_7743 = (state_7745[(2)]);
var state_7745__$1 = state_7745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7745__$1,inst_7743);
} else {
if((state_val_7746 === (12))){
var state_7745__$1 = state_7745;
var statearr_7755_7776 = state_7745__$1;
(statearr_7755_7776[(2)] = null);

(statearr_7755_7776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (2))){
var state_7745__$1 = state_7745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7745__$1,(4),ch);
} else {
if((state_val_7746 === (11))){
var inst_7722 = (state_7745[(7)]);
var inst_7732 = (state_7745[(2)]);
var state_7745__$1 = state_7745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7745__$1,(8),inst_7732,inst_7722);
} else {
if((state_val_7746 === (9))){
var state_7745__$1 = state_7745;
var statearr_7756_7777 = state_7745__$1;
(statearr_7756_7777[(2)] = tc);

(statearr_7756_7777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (5))){
var inst_7725 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7726 = cljs.core.async.close_BANG_.call(null,fc);
var state_7745__$1 = (function (){var statearr_7757 = state_7745;
(statearr_7757[(8)] = inst_7725);

return statearr_7757;
})();
var statearr_7758_7778 = state_7745__$1;
(statearr_7758_7778[(2)] = inst_7726);

(statearr_7758_7778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (14))){
var inst_7739 = (state_7745[(2)]);
var state_7745__$1 = state_7745;
var statearr_7759_7779 = state_7745__$1;
(statearr_7759_7779[(2)] = inst_7739);

(statearr_7759_7779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (10))){
var state_7745__$1 = state_7745;
var statearr_7760_7780 = state_7745__$1;
(statearr_7760_7780[(2)] = fc);

(statearr_7760_7780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7746 === (8))){
var inst_7734 = (state_7745[(2)]);
var state_7745__$1 = state_7745;
if(cljs.core.truth_(inst_7734)){
var statearr_7761_7781 = state_7745__$1;
(statearr_7761_7781[(1)] = (12));

} else {
var statearr_7762_7782 = state_7745__$1;
(statearr_7762_7782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___7768,tc,fc))
;
return ((function (switch__7228__auto__,c__7318__auto___7768,tc,fc){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_7763 = [null,null,null,null,null,null,null,null,null];
(statearr_7763[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_7763[(1)] = (1));

return statearr_7763;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_7745){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7764){if((e7764 instanceof Object)){
var ex__7232__auto__ = e7764;
var statearr_7765_7783 = state_7745;
(statearr_7765_7783[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7784 = state_7745;
state_7745 = G__7784;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_7745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_7745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___7768,tc,fc))
})();
var state__7320__auto__ = (function (){var statearr_7766 = f__7319__auto__.call(null);
(statearr_7766[(6)] = c__7318__auto___7768);

return statearr_7766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___7768,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__){
return (function (state_7805){
var state_val_7806 = (state_7805[(1)]);
if((state_val_7806 === (7))){
var inst_7801 = (state_7805[(2)]);
var state_7805__$1 = state_7805;
var statearr_7807_7825 = state_7805__$1;
(statearr_7807_7825[(2)] = inst_7801);

(statearr_7807_7825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (1))){
var inst_7785 = init;
var state_7805__$1 = (function (){var statearr_7808 = state_7805;
(statearr_7808[(7)] = inst_7785);

return statearr_7808;
})();
var statearr_7809_7826 = state_7805__$1;
(statearr_7809_7826[(2)] = null);

(statearr_7809_7826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (4))){
var inst_7788 = (state_7805[(8)]);
var inst_7788__$1 = (state_7805[(2)]);
var inst_7789 = (inst_7788__$1 == null);
var state_7805__$1 = (function (){var statearr_7810 = state_7805;
(statearr_7810[(8)] = inst_7788__$1);

return statearr_7810;
})();
if(cljs.core.truth_(inst_7789)){
var statearr_7811_7827 = state_7805__$1;
(statearr_7811_7827[(1)] = (5));

} else {
var statearr_7812_7828 = state_7805__$1;
(statearr_7812_7828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (6))){
var inst_7785 = (state_7805[(7)]);
var inst_7788 = (state_7805[(8)]);
var inst_7792 = (state_7805[(9)]);
var inst_7792__$1 = f.call(null,inst_7785,inst_7788);
var inst_7793 = cljs.core.reduced_QMARK_.call(null,inst_7792__$1);
var state_7805__$1 = (function (){var statearr_7813 = state_7805;
(statearr_7813[(9)] = inst_7792__$1);

return statearr_7813;
})();
if(inst_7793){
var statearr_7814_7829 = state_7805__$1;
(statearr_7814_7829[(1)] = (8));

} else {
var statearr_7815_7830 = state_7805__$1;
(statearr_7815_7830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (3))){
var inst_7803 = (state_7805[(2)]);
var state_7805__$1 = state_7805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7805__$1,inst_7803);
} else {
if((state_val_7806 === (2))){
var state_7805__$1 = state_7805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7805__$1,(4),ch);
} else {
if((state_val_7806 === (9))){
var inst_7792 = (state_7805[(9)]);
var inst_7785 = inst_7792;
var state_7805__$1 = (function (){var statearr_7816 = state_7805;
(statearr_7816[(7)] = inst_7785);

return statearr_7816;
})();
var statearr_7817_7831 = state_7805__$1;
(statearr_7817_7831[(2)] = null);

(statearr_7817_7831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (5))){
var inst_7785 = (state_7805[(7)]);
var state_7805__$1 = state_7805;
var statearr_7818_7832 = state_7805__$1;
(statearr_7818_7832[(2)] = inst_7785);

(statearr_7818_7832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (10))){
var inst_7799 = (state_7805[(2)]);
var state_7805__$1 = state_7805;
var statearr_7819_7833 = state_7805__$1;
(statearr_7819_7833[(2)] = inst_7799);

(statearr_7819_7833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7806 === (8))){
var inst_7792 = (state_7805[(9)]);
var inst_7795 = cljs.core.deref.call(null,inst_7792);
var state_7805__$1 = state_7805;
var statearr_7820_7834 = state_7805__$1;
(statearr_7820_7834[(2)] = inst_7795);

(statearr_7820_7834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto__))
;
return ((function (switch__7228__auto__,c__7318__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7229__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7229__auto____0 = (function (){
var statearr_7821 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7821[(0)] = cljs$core$async$reduce_$_state_machine__7229__auto__);

(statearr_7821[(1)] = (1));

return statearr_7821;
});
var cljs$core$async$reduce_$_state_machine__7229__auto____1 = (function (state_7805){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7822){if((e7822 instanceof Object)){
var ex__7232__auto__ = e7822;
var statearr_7823_7835 = state_7805;
(statearr_7823_7835[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7836 = state_7805;
state_7805 = G__7836;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7229__auto__ = function(state_7805){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7229__auto____1.call(this,state_7805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7229__auto____0;
cljs$core$async$reduce_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7229__auto____1;
return cljs$core$async$reduce_$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__))
})();
var state__7320__auto__ = (function (){var statearr_7824 = f__7319__auto__.call(null);
(statearr_7824[(6)] = c__7318__auto__);

return statearr_7824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__))
);

return c__7318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__,f__$1){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__,f__$1){
return (function (state_7842){
var state_val_7843 = (state_7842[(1)]);
if((state_val_7843 === (1))){
var inst_7837 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_7842__$1 = state_7842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7842__$1,(2),inst_7837);
} else {
if((state_val_7843 === (2))){
var inst_7839 = (state_7842[(2)]);
var inst_7840 = f__$1.call(null,inst_7839);
var state_7842__$1 = state_7842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7842__$1,inst_7840);
} else {
return null;
}
}
});})(c__7318__auto__,f__$1))
;
return ((function (switch__7228__auto__,c__7318__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7229__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7229__auto____0 = (function (){
var statearr_7844 = [null,null,null,null,null,null,null];
(statearr_7844[(0)] = cljs$core$async$transduce_$_state_machine__7229__auto__);

(statearr_7844[(1)] = (1));

return statearr_7844;
});
var cljs$core$async$transduce_$_state_machine__7229__auto____1 = (function (state_7842){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7845){if((e7845 instanceof Object)){
var ex__7232__auto__ = e7845;
var statearr_7846_7848 = state_7842;
(statearr_7846_7848[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7849 = state_7842;
state_7842 = G__7849;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7229__auto__ = function(state_7842){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7229__auto____1.call(this,state_7842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7229__auto____0;
cljs$core$async$transduce_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7229__auto____1;
return cljs$core$async$transduce_$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__,f__$1))
})();
var state__7320__auto__ = (function (){var statearr_7847 = f__7319__auto__.call(null);
(statearr_7847[(6)] = c__7318__auto__);

return statearr_7847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__,f__$1))
);

return c__7318__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__7851 = arguments.length;
switch (G__7851) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__){
return (function (state_7876){
var state_val_7877 = (state_7876[(1)]);
if((state_val_7877 === (7))){
var inst_7858 = (state_7876[(2)]);
var state_7876__$1 = state_7876;
var statearr_7878_7899 = state_7876__$1;
(statearr_7878_7899[(2)] = inst_7858);

(statearr_7878_7899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (1))){
var inst_7852 = cljs.core.seq.call(null,coll);
var inst_7853 = inst_7852;
var state_7876__$1 = (function (){var statearr_7879 = state_7876;
(statearr_7879[(7)] = inst_7853);

return statearr_7879;
})();
var statearr_7880_7900 = state_7876__$1;
(statearr_7880_7900[(2)] = null);

(statearr_7880_7900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (4))){
var inst_7853 = (state_7876[(7)]);
var inst_7856 = cljs.core.first.call(null,inst_7853);
var state_7876__$1 = state_7876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7876__$1,(7),ch,inst_7856);
} else {
if((state_val_7877 === (13))){
var inst_7870 = (state_7876[(2)]);
var state_7876__$1 = state_7876;
var statearr_7881_7901 = state_7876__$1;
(statearr_7881_7901[(2)] = inst_7870);

(statearr_7881_7901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (6))){
var inst_7861 = (state_7876[(2)]);
var state_7876__$1 = state_7876;
if(cljs.core.truth_(inst_7861)){
var statearr_7882_7902 = state_7876__$1;
(statearr_7882_7902[(1)] = (8));

} else {
var statearr_7883_7903 = state_7876__$1;
(statearr_7883_7903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (3))){
var inst_7874 = (state_7876[(2)]);
var state_7876__$1 = state_7876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7876__$1,inst_7874);
} else {
if((state_val_7877 === (12))){
var state_7876__$1 = state_7876;
var statearr_7884_7904 = state_7876__$1;
(statearr_7884_7904[(2)] = null);

(statearr_7884_7904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (2))){
var inst_7853 = (state_7876[(7)]);
var state_7876__$1 = state_7876;
if(cljs.core.truth_(inst_7853)){
var statearr_7885_7905 = state_7876__$1;
(statearr_7885_7905[(1)] = (4));

} else {
var statearr_7886_7906 = state_7876__$1;
(statearr_7886_7906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (11))){
var inst_7867 = cljs.core.async.close_BANG_.call(null,ch);
var state_7876__$1 = state_7876;
var statearr_7887_7907 = state_7876__$1;
(statearr_7887_7907[(2)] = inst_7867);

(statearr_7887_7907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (9))){
var state_7876__$1 = state_7876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7888_7908 = state_7876__$1;
(statearr_7888_7908[(1)] = (11));

} else {
var statearr_7889_7909 = state_7876__$1;
(statearr_7889_7909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (5))){
var inst_7853 = (state_7876[(7)]);
var state_7876__$1 = state_7876;
var statearr_7890_7910 = state_7876__$1;
(statearr_7890_7910[(2)] = inst_7853);

(statearr_7890_7910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (10))){
var inst_7872 = (state_7876[(2)]);
var state_7876__$1 = state_7876;
var statearr_7891_7911 = state_7876__$1;
(statearr_7891_7911[(2)] = inst_7872);

(statearr_7891_7911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7877 === (8))){
var inst_7853 = (state_7876[(7)]);
var inst_7863 = cljs.core.next.call(null,inst_7853);
var inst_7853__$1 = inst_7863;
var state_7876__$1 = (function (){var statearr_7892 = state_7876;
(statearr_7892[(7)] = inst_7853__$1);

return statearr_7892;
})();
var statearr_7893_7912 = state_7876__$1;
(statearr_7893_7912[(2)] = null);

(statearr_7893_7912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto__))
;
return ((function (switch__7228__auto__,c__7318__auto__){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_7894 = [null,null,null,null,null,null,null,null];
(statearr_7894[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_7894[(1)] = (1));

return statearr_7894;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_7876){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_7876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e7895){if((e7895 instanceof Object)){
var ex__7232__auto__ = e7895;
var statearr_7896_7913 = state_7876;
(statearr_7896_7913[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7914 = state_7876;
state_7876 = G__7914;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_7876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_7876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__))
})();
var state__7320__auto__ = (function (){var statearr_7897 = f__7319__auto__.call(null);
(statearr_7897[(6)] = c__7318__auto__);

return statearr_7897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__))
);

return c__7318__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async7915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7915 = (function (ch,cs,meta7916){
this.ch = ch;
this.cs = cs;
this.meta7916 = meta7916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_7917,meta7916__$1){
var self__ = this;
var _7917__$1 = this;
return (new cljs.core.async.t_cljs$core$async7915(self__.ch,self__.cs,meta7916__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_7917){
var self__ = this;
var _7917__$1 = this;
return self__.meta7916;
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta7916","meta7916",-1058867480,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async7915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7915";

cljs.core.async.t_cljs$core$async7915.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async7915");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async7915.
 */
cljs.core.async.__GT_t_cljs$core$async7915 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async7915(ch__$1,cs__$1,meta7916){
return (new cljs.core.async.t_cljs$core$async7915(ch__$1,cs__$1,meta7916));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async7915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7318__auto___8137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8137,cs,m,dchan,dctr,done){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8137,cs,m,dchan,dctr,done){
return (function (state_8052){
var state_val_8053 = (state_8052[(1)]);
if((state_val_8053 === (7))){
var inst_8048 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8054_8138 = state_8052__$1;
(statearr_8054_8138[(2)] = inst_8048);

(statearr_8054_8138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (20))){
var inst_7951 = (state_8052[(7)]);
var inst_7963 = cljs.core.first.call(null,inst_7951);
var inst_7964 = cljs.core.nth.call(null,inst_7963,(0),null);
var inst_7965 = cljs.core.nth.call(null,inst_7963,(1),null);
var state_8052__$1 = (function (){var statearr_8055 = state_8052;
(statearr_8055[(8)] = inst_7964);

return statearr_8055;
})();
if(cljs.core.truth_(inst_7965)){
var statearr_8056_8139 = state_8052__$1;
(statearr_8056_8139[(1)] = (22));

} else {
var statearr_8057_8140 = state_8052__$1;
(statearr_8057_8140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (27))){
var inst_7993 = (state_8052[(9)]);
var inst_7995 = (state_8052[(10)]);
var inst_8000 = (state_8052[(11)]);
var inst_7920 = (state_8052[(12)]);
var inst_8000__$1 = cljs.core._nth.call(null,inst_7993,inst_7995);
var inst_8001 = cljs.core.async.put_BANG_.call(null,inst_8000__$1,inst_7920,done);
var state_8052__$1 = (function (){var statearr_8058 = state_8052;
(statearr_8058[(11)] = inst_8000__$1);

return statearr_8058;
})();
if(cljs.core.truth_(inst_8001)){
var statearr_8059_8141 = state_8052__$1;
(statearr_8059_8141[(1)] = (30));

} else {
var statearr_8060_8142 = state_8052__$1;
(statearr_8060_8142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (1))){
var state_8052__$1 = state_8052;
var statearr_8061_8143 = state_8052__$1;
(statearr_8061_8143[(2)] = null);

(statearr_8061_8143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (24))){
var inst_7951 = (state_8052[(7)]);
var inst_7970 = (state_8052[(2)]);
var inst_7971 = cljs.core.next.call(null,inst_7951);
var inst_7929 = inst_7971;
var inst_7930 = null;
var inst_7931 = (0);
var inst_7932 = (0);
var state_8052__$1 = (function (){var statearr_8062 = state_8052;
(statearr_8062[(13)] = inst_7929);

(statearr_8062[(14)] = inst_7932);

(statearr_8062[(15)] = inst_7930);

(statearr_8062[(16)] = inst_7970);

(statearr_8062[(17)] = inst_7931);

return statearr_8062;
})();
var statearr_8063_8144 = state_8052__$1;
(statearr_8063_8144[(2)] = null);

(statearr_8063_8144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (39))){
var state_8052__$1 = state_8052;
var statearr_8067_8145 = state_8052__$1;
(statearr_8067_8145[(2)] = null);

(statearr_8067_8145[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (4))){
var inst_7920 = (state_8052[(12)]);
var inst_7920__$1 = (state_8052[(2)]);
var inst_7921 = (inst_7920__$1 == null);
var state_8052__$1 = (function (){var statearr_8068 = state_8052;
(statearr_8068[(12)] = inst_7920__$1);

return statearr_8068;
})();
if(cljs.core.truth_(inst_7921)){
var statearr_8069_8146 = state_8052__$1;
(statearr_8069_8146[(1)] = (5));

} else {
var statearr_8070_8147 = state_8052__$1;
(statearr_8070_8147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (15))){
var inst_7929 = (state_8052[(13)]);
var inst_7932 = (state_8052[(14)]);
var inst_7930 = (state_8052[(15)]);
var inst_7931 = (state_8052[(17)]);
var inst_7947 = (state_8052[(2)]);
var inst_7948 = (inst_7932 + (1));
var tmp8064 = inst_7929;
var tmp8065 = inst_7930;
var tmp8066 = inst_7931;
var inst_7929__$1 = tmp8064;
var inst_7930__$1 = tmp8065;
var inst_7931__$1 = tmp8066;
var inst_7932__$1 = inst_7948;
var state_8052__$1 = (function (){var statearr_8071 = state_8052;
(statearr_8071[(13)] = inst_7929__$1);

(statearr_8071[(18)] = inst_7947);

(statearr_8071[(14)] = inst_7932__$1);

(statearr_8071[(15)] = inst_7930__$1);

(statearr_8071[(17)] = inst_7931__$1);

return statearr_8071;
})();
var statearr_8072_8148 = state_8052__$1;
(statearr_8072_8148[(2)] = null);

(statearr_8072_8148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (21))){
var inst_7974 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8076_8149 = state_8052__$1;
(statearr_8076_8149[(2)] = inst_7974);

(statearr_8076_8149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (31))){
var inst_8000 = (state_8052[(11)]);
var inst_8004 = done.call(null,null);
var inst_8005 = cljs.core.async.untap_STAR_.call(null,m,inst_8000);
var state_8052__$1 = (function (){var statearr_8077 = state_8052;
(statearr_8077[(19)] = inst_8004);

return statearr_8077;
})();
var statearr_8078_8150 = state_8052__$1;
(statearr_8078_8150[(2)] = inst_8005);

(statearr_8078_8150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (32))){
var inst_7993 = (state_8052[(9)]);
var inst_7992 = (state_8052[(20)]);
var inst_7994 = (state_8052[(21)]);
var inst_7995 = (state_8052[(10)]);
var inst_8007 = (state_8052[(2)]);
var inst_8008 = (inst_7995 + (1));
var tmp8073 = inst_7993;
var tmp8074 = inst_7992;
var tmp8075 = inst_7994;
var inst_7992__$1 = tmp8074;
var inst_7993__$1 = tmp8073;
var inst_7994__$1 = tmp8075;
var inst_7995__$1 = inst_8008;
var state_8052__$1 = (function (){var statearr_8079 = state_8052;
(statearr_8079[(9)] = inst_7993__$1);

(statearr_8079[(20)] = inst_7992__$1);

(statearr_8079[(21)] = inst_7994__$1);

(statearr_8079[(10)] = inst_7995__$1);

(statearr_8079[(22)] = inst_8007);

return statearr_8079;
})();
var statearr_8080_8151 = state_8052__$1;
(statearr_8080_8151[(2)] = null);

(statearr_8080_8151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (40))){
var inst_8020 = (state_8052[(23)]);
var inst_8024 = done.call(null,null);
var inst_8025 = cljs.core.async.untap_STAR_.call(null,m,inst_8020);
var state_8052__$1 = (function (){var statearr_8081 = state_8052;
(statearr_8081[(24)] = inst_8024);

return statearr_8081;
})();
var statearr_8082_8152 = state_8052__$1;
(statearr_8082_8152[(2)] = inst_8025);

(statearr_8082_8152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (33))){
var inst_8011 = (state_8052[(25)]);
var inst_8013 = cljs.core.chunked_seq_QMARK_.call(null,inst_8011);
var state_8052__$1 = state_8052;
if(inst_8013){
var statearr_8083_8153 = state_8052__$1;
(statearr_8083_8153[(1)] = (36));

} else {
var statearr_8084_8154 = state_8052__$1;
(statearr_8084_8154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (13))){
var inst_7941 = (state_8052[(26)]);
var inst_7944 = cljs.core.async.close_BANG_.call(null,inst_7941);
var state_8052__$1 = state_8052;
var statearr_8085_8155 = state_8052__$1;
(statearr_8085_8155[(2)] = inst_7944);

(statearr_8085_8155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (22))){
var inst_7964 = (state_8052[(8)]);
var inst_7967 = cljs.core.async.close_BANG_.call(null,inst_7964);
var state_8052__$1 = state_8052;
var statearr_8086_8156 = state_8052__$1;
(statearr_8086_8156[(2)] = inst_7967);

(statearr_8086_8156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (36))){
var inst_8011 = (state_8052[(25)]);
var inst_8015 = cljs.core.chunk_first.call(null,inst_8011);
var inst_8016 = cljs.core.chunk_rest.call(null,inst_8011);
var inst_8017 = cljs.core.count.call(null,inst_8015);
var inst_7992 = inst_8016;
var inst_7993 = inst_8015;
var inst_7994 = inst_8017;
var inst_7995 = (0);
var state_8052__$1 = (function (){var statearr_8087 = state_8052;
(statearr_8087[(9)] = inst_7993);

(statearr_8087[(20)] = inst_7992);

(statearr_8087[(21)] = inst_7994);

(statearr_8087[(10)] = inst_7995);

return statearr_8087;
})();
var statearr_8088_8157 = state_8052__$1;
(statearr_8088_8157[(2)] = null);

(statearr_8088_8157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (41))){
var inst_8011 = (state_8052[(25)]);
var inst_8027 = (state_8052[(2)]);
var inst_8028 = cljs.core.next.call(null,inst_8011);
var inst_7992 = inst_8028;
var inst_7993 = null;
var inst_7994 = (0);
var inst_7995 = (0);
var state_8052__$1 = (function (){var statearr_8089 = state_8052;
(statearr_8089[(9)] = inst_7993);

(statearr_8089[(20)] = inst_7992);

(statearr_8089[(21)] = inst_7994);

(statearr_8089[(10)] = inst_7995);

(statearr_8089[(27)] = inst_8027);

return statearr_8089;
})();
var statearr_8090_8158 = state_8052__$1;
(statearr_8090_8158[(2)] = null);

(statearr_8090_8158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (43))){
var state_8052__$1 = state_8052;
var statearr_8091_8159 = state_8052__$1;
(statearr_8091_8159[(2)] = null);

(statearr_8091_8159[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (29))){
var inst_8036 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8092_8160 = state_8052__$1;
(statearr_8092_8160[(2)] = inst_8036);

(statearr_8092_8160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (44))){
var inst_8045 = (state_8052[(2)]);
var state_8052__$1 = (function (){var statearr_8093 = state_8052;
(statearr_8093[(28)] = inst_8045);

return statearr_8093;
})();
var statearr_8094_8161 = state_8052__$1;
(statearr_8094_8161[(2)] = null);

(statearr_8094_8161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (6))){
var inst_7984 = (state_8052[(29)]);
var inst_7983 = cljs.core.deref.call(null,cs);
var inst_7984__$1 = cljs.core.keys.call(null,inst_7983);
var inst_7985 = cljs.core.count.call(null,inst_7984__$1);
var inst_7986 = cljs.core.reset_BANG_.call(null,dctr,inst_7985);
var inst_7991 = cljs.core.seq.call(null,inst_7984__$1);
var inst_7992 = inst_7991;
var inst_7993 = null;
var inst_7994 = (0);
var inst_7995 = (0);
var state_8052__$1 = (function (){var statearr_8095 = state_8052;
(statearr_8095[(9)] = inst_7993);

(statearr_8095[(20)] = inst_7992);

(statearr_8095[(21)] = inst_7994);

(statearr_8095[(10)] = inst_7995);

(statearr_8095[(30)] = inst_7986);

(statearr_8095[(29)] = inst_7984__$1);

return statearr_8095;
})();
var statearr_8096_8162 = state_8052__$1;
(statearr_8096_8162[(2)] = null);

(statearr_8096_8162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (28))){
var inst_7992 = (state_8052[(20)]);
var inst_8011 = (state_8052[(25)]);
var inst_8011__$1 = cljs.core.seq.call(null,inst_7992);
var state_8052__$1 = (function (){var statearr_8097 = state_8052;
(statearr_8097[(25)] = inst_8011__$1);

return statearr_8097;
})();
if(inst_8011__$1){
var statearr_8098_8163 = state_8052__$1;
(statearr_8098_8163[(1)] = (33));

} else {
var statearr_8099_8164 = state_8052__$1;
(statearr_8099_8164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (25))){
var inst_7994 = (state_8052[(21)]);
var inst_7995 = (state_8052[(10)]);
var inst_7997 = (inst_7995 < inst_7994);
var inst_7998 = inst_7997;
var state_8052__$1 = state_8052;
if(cljs.core.truth_(inst_7998)){
var statearr_8100_8165 = state_8052__$1;
(statearr_8100_8165[(1)] = (27));

} else {
var statearr_8101_8166 = state_8052__$1;
(statearr_8101_8166[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (34))){
var state_8052__$1 = state_8052;
var statearr_8102_8167 = state_8052__$1;
(statearr_8102_8167[(2)] = null);

(statearr_8102_8167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (17))){
var state_8052__$1 = state_8052;
var statearr_8103_8168 = state_8052__$1;
(statearr_8103_8168[(2)] = null);

(statearr_8103_8168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (3))){
var inst_8050 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8052__$1,inst_8050);
} else {
if((state_val_8053 === (12))){
var inst_7979 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8104_8169 = state_8052__$1;
(statearr_8104_8169[(2)] = inst_7979);

(statearr_8104_8169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (2))){
var state_8052__$1 = state_8052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8052__$1,(4),ch);
} else {
if((state_val_8053 === (23))){
var state_8052__$1 = state_8052;
var statearr_8105_8170 = state_8052__$1;
(statearr_8105_8170[(2)] = null);

(statearr_8105_8170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (35))){
var inst_8034 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8106_8171 = state_8052__$1;
(statearr_8106_8171[(2)] = inst_8034);

(statearr_8106_8171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (19))){
var inst_7951 = (state_8052[(7)]);
var inst_7955 = cljs.core.chunk_first.call(null,inst_7951);
var inst_7956 = cljs.core.chunk_rest.call(null,inst_7951);
var inst_7957 = cljs.core.count.call(null,inst_7955);
var inst_7929 = inst_7956;
var inst_7930 = inst_7955;
var inst_7931 = inst_7957;
var inst_7932 = (0);
var state_8052__$1 = (function (){var statearr_8107 = state_8052;
(statearr_8107[(13)] = inst_7929);

(statearr_8107[(14)] = inst_7932);

(statearr_8107[(15)] = inst_7930);

(statearr_8107[(17)] = inst_7931);

return statearr_8107;
})();
var statearr_8108_8172 = state_8052__$1;
(statearr_8108_8172[(2)] = null);

(statearr_8108_8172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (11))){
var inst_7929 = (state_8052[(13)]);
var inst_7951 = (state_8052[(7)]);
var inst_7951__$1 = cljs.core.seq.call(null,inst_7929);
var state_8052__$1 = (function (){var statearr_8109 = state_8052;
(statearr_8109[(7)] = inst_7951__$1);

return statearr_8109;
})();
if(inst_7951__$1){
var statearr_8110_8173 = state_8052__$1;
(statearr_8110_8173[(1)] = (16));

} else {
var statearr_8111_8174 = state_8052__$1;
(statearr_8111_8174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (9))){
var inst_7981 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8112_8175 = state_8052__$1;
(statearr_8112_8175[(2)] = inst_7981);

(statearr_8112_8175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (5))){
var inst_7927 = cljs.core.deref.call(null,cs);
var inst_7928 = cljs.core.seq.call(null,inst_7927);
var inst_7929 = inst_7928;
var inst_7930 = null;
var inst_7931 = (0);
var inst_7932 = (0);
var state_8052__$1 = (function (){var statearr_8113 = state_8052;
(statearr_8113[(13)] = inst_7929);

(statearr_8113[(14)] = inst_7932);

(statearr_8113[(15)] = inst_7930);

(statearr_8113[(17)] = inst_7931);

return statearr_8113;
})();
var statearr_8114_8176 = state_8052__$1;
(statearr_8114_8176[(2)] = null);

(statearr_8114_8176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (14))){
var state_8052__$1 = state_8052;
var statearr_8115_8177 = state_8052__$1;
(statearr_8115_8177[(2)] = null);

(statearr_8115_8177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (45))){
var inst_8042 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8116_8178 = state_8052__$1;
(statearr_8116_8178[(2)] = inst_8042);

(statearr_8116_8178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (26))){
var inst_7984 = (state_8052[(29)]);
var inst_8038 = (state_8052[(2)]);
var inst_8039 = cljs.core.seq.call(null,inst_7984);
var state_8052__$1 = (function (){var statearr_8117 = state_8052;
(statearr_8117[(31)] = inst_8038);

return statearr_8117;
})();
if(inst_8039){
var statearr_8118_8179 = state_8052__$1;
(statearr_8118_8179[(1)] = (42));

} else {
var statearr_8119_8180 = state_8052__$1;
(statearr_8119_8180[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (16))){
var inst_7951 = (state_8052[(7)]);
var inst_7953 = cljs.core.chunked_seq_QMARK_.call(null,inst_7951);
var state_8052__$1 = state_8052;
if(inst_7953){
var statearr_8120_8181 = state_8052__$1;
(statearr_8120_8181[(1)] = (19));

} else {
var statearr_8121_8182 = state_8052__$1;
(statearr_8121_8182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (38))){
var inst_8031 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8122_8183 = state_8052__$1;
(statearr_8122_8183[(2)] = inst_8031);

(statearr_8122_8183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (30))){
var state_8052__$1 = state_8052;
var statearr_8123_8184 = state_8052__$1;
(statearr_8123_8184[(2)] = null);

(statearr_8123_8184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (10))){
var inst_7932 = (state_8052[(14)]);
var inst_7930 = (state_8052[(15)]);
var inst_7940 = cljs.core._nth.call(null,inst_7930,inst_7932);
var inst_7941 = cljs.core.nth.call(null,inst_7940,(0),null);
var inst_7942 = cljs.core.nth.call(null,inst_7940,(1),null);
var state_8052__$1 = (function (){var statearr_8124 = state_8052;
(statearr_8124[(26)] = inst_7941);

return statearr_8124;
})();
if(cljs.core.truth_(inst_7942)){
var statearr_8125_8185 = state_8052__$1;
(statearr_8125_8185[(1)] = (13));

} else {
var statearr_8126_8186 = state_8052__$1;
(statearr_8126_8186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (18))){
var inst_7977 = (state_8052[(2)]);
var state_8052__$1 = state_8052;
var statearr_8127_8187 = state_8052__$1;
(statearr_8127_8187[(2)] = inst_7977);

(statearr_8127_8187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (42))){
var state_8052__$1 = state_8052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8052__$1,(45),dchan);
} else {
if((state_val_8053 === (37))){
var inst_8011 = (state_8052[(25)]);
var inst_7920 = (state_8052[(12)]);
var inst_8020 = (state_8052[(23)]);
var inst_8020__$1 = cljs.core.first.call(null,inst_8011);
var inst_8021 = cljs.core.async.put_BANG_.call(null,inst_8020__$1,inst_7920,done);
var state_8052__$1 = (function (){var statearr_8128 = state_8052;
(statearr_8128[(23)] = inst_8020__$1);

return statearr_8128;
})();
if(cljs.core.truth_(inst_8021)){
var statearr_8129_8188 = state_8052__$1;
(statearr_8129_8188[(1)] = (39));

} else {
var statearr_8130_8189 = state_8052__$1;
(statearr_8130_8189[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8053 === (8))){
var inst_7932 = (state_8052[(14)]);
var inst_7931 = (state_8052[(17)]);
var inst_7934 = (inst_7932 < inst_7931);
var inst_7935 = inst_7934;
var state_8052__$1 = state_8052;
if(cljs.core.truth_(inst_7935)){
var statearr_8131_8190 = state_8052__$1;
(statearr_8131_8190[(1)] = (10));

} else {
var statearr_8132_8191 = state_8052__$1;
(statearr_8132_8191[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8137,cs,m,dchan,dctr,done))
;
return ((function (switch__7228__auto__,c__7318__auto___8137,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7229__auto__ = null;
var cljs$core$async$mult_$_state_machine__7229__auto____0 = (function (){
var statearr_8133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8133[(0)] = cljs$core$async$mult_$_state_machine__7229__auto__);

(statearr_8133[(1)] = (1));

return statearr_8133;
});
var cljs$core$async$mult_$_state_machine__7229__auto____1 = (function (state_8052){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8134){if((e8134 instanceof Object)){
var ex__7232__auto__ = e8134;
var statearr_8135_8192 = state_8052;
(statearr_8135_8192[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8193 = state_8052;
state_8052 = G__8193;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7229__auto__ = function(state_8052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7229__auto____1.call(this,state_8052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7229__auto____0;
cljs$core$async$mult_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7229__auto____1;
return cljs$core$async$mult_$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8137,cs,m,dchan,dctr,done))
})();
var state__7320__auto__ = (function (){var statearr_8136 = f__7319__auto__.call(null);
(statearr_8136[(6)] = c__7318__auto___8137);

return statearr_8136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8137,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__8195 = arguments.length;
switch (G__8195) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___8207 = arguments.length;
var i__4500__auto___8208 = (0);
while(true){
if((i__4500__auto___8208 < len__4499__auto___8207)){
args__4502__auto__.push((arguments[i__4500__auto___8208]));

var G__8209 = (i__4500__auto___8208 + (1));
i__4500__auto___8208 = G__8209;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8201){
var map__8202 = p__8201;
var map__8202__$1 = ((((!((map__8202 == null)))?(((((map__8202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8202):map__8202);
var opts = map__8202__$1;
var statearr_8204_8210 = state;
(statearr_8204_8210[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__8202,map__8202__$1,opts){
return (function (val){
var statearr_8205_8211 = state;
(statearr_8205_8211[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8202,map__8202__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_8206_8212 = state;
(statearr_8206_8212[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8197){
var G__8198 = cljs.core.first.call(null,seq8197);
var seq8197__$1 = cljs.core.next.call(null,seq8197);
var G__8199 = cljs.core.first.call(null,seq8197__$1);
var seq8197__$2 = cljs.core.next.call(null,seq8197__$1);
var G__8200 = cljs.core.first.call(null,seq8197__$2);
var seq8197__$3 = cljs.core.next.call(null,seq8197__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8198,G__8199,G__8200,seq8197__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8213 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta8214){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta8214 = meta8214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8215,meta8214__$1){
var self__ = this;
var _8215__$1 = this;
return (new cljs.core.async.t_cljs$core$async8213(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta8214__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8215){
var self__ = this;
var _8215__$1 = this;
return self__.meta8214;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta8214","meta8214",-766507937,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8213";

cljs.core.async.t_cljs$core$async8213.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8213");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8213.
 */
cljs.core.async.__GT_t_cljs$core$async8213 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8213(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8214){
return (new cljs.core.async.t_cljs$core$async8213(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta8214));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8213(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7318__auto___8377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8317){
var state_val_8318 = (state_8317[(1)]);
if((state_val_8318 === (7))){
var inst_8232 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8319_8378 = state_8317__$1;
(statearr_8319_8378[(2)] = inst_8232);

(statearr_8319_8378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (20))){
var inst_8244 = (state_8317[(7)]);
var state_8317__$1 = state_8317;
var statearr_8320_8379 = state_8317__$1;
(statearr_8320_8379[(2)] = inst_8244);

(statearr_8320_8379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (27))){
var state_8317__$1 = state_8317;
var statearr_8321_8380 = state_8317__$1;
(statearr_8321_8380[(2)] = null);

(statearr_8321_8380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (1))){
var inst_8219 = (state_8317[(8)]);
var inst_8219__$1 = calc_state.call(null);
var inst_8221 = (inst_8219__$1 == null);
var inst_8222 = cljs.core.not.call(null,inst_8221);
var state_8317__$1 = (function (){var statearr_8322 = state_8317;
(statearr_8322[(8)] = inst_8219__$1);

return statearr_8322;
})();
if(inst_8222){
var statearr_8323_8381 = state_8317__$1;
(statearr_8323_8381[(1)] = (2));

} else {
var statearr_8324_8382 = state_8317__$1;
(statearr_8324_8382[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (24))){
var inst_8268 = (state_8317[(9)]);
var inst_8277 = (state_8317[(10)]);
var inst_8291 = (state_8317[(11)]);
var inst_8291__$1 = inst_8268.call(null,inst_8277);
var state_8317__$1 = (function (){var statearr_8325 = state_8317;
(statearr_8325[(11)] = inst_8291__$1);

return statearr_8325;
})();
if(cljs.core.truth_(inst_8291__$1)){
var statearr_8326_8383 = state_8317__$1;
(statearr_8326_8383[(1)] = (29));

} else {
var statearr_8327_8384 = state_8317__$1;
(statearr_8327_8384[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (4))){
var inst_8235 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8235)){
var statearr_8328_8385 = state_8317__$1;
(statearr_8328_8385[(1)] = (8));

} else {
var statearr_8329_8386 = state_8317__$1;
(statearr_8329_8386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (15))){
var inst_8262 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8262)){
var statearr_8330_8387 = state_8317__$1;
(statearr_8330_8387[(1)] = (19));

} else {
var statearr_8331_8388 = state_8317__$1;
(statearr_8331_8388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (21))){
var inst_8267 = (state_8317[(12)]);
var inst_8267__$1 = (state_8317[(2)]);
var inst_8268 = cljs.core.get.call(null,inst_8267__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8269 = cljs.core.get.call(null,inst_8267__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8270 = cljs.core.get.call(null,inst_8267__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8317__$1 = (function (){var statearr_8332 = state_8317;
(statearr_8332[(13)] = inst_8269);

(statearr_8332[(12)] = inst_8267__$1);

(statearr_8332[(9)] = inst_8268);

return statearr_8332;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8317__$1,(22),inst_8270);
} else {
if((state_val_8318 === (31))){
var inst_8299 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8299)){
var statearr_8333_8389 = state_8317__$1;
(statearr_8333_8389[(1)] = (32));

} else {
var statearr_8334_8390 = state_8317__$1;
(statearr_8334_8390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (32))){
var inst_8276 = (state_8317[(14)]);
var state_8317__$1 = state_8317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8317__$1,(35),out,inst_8276);
} else {
if((state_val_8318 === (33))){
var inst_8267 = (state_8317[(12)]);
var inst_8244 = inst_8267;
var state_8317__$1 = (function (){var statearr_8335 = state_8317;
(statearr_8335[(7)] = inst_8244);

return statearr_8335;
})();
var statearr_8336_8391 = state_8317__$1;
(statearr_8336_8391[(2)] = null);

(statearr_8336_8391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (13))){
var inst_8244 = (state_8317[(7)]);
var inst_8251 = inst_8244.cljs$lang$protocol_mask$partition0$;
var inst_8252 = (inst_8251 & (64));
var inst_8253 = inst_8244.cljs$core$ISeq$;
var inst_8254 = (cljs.core.PROTOCOL_SENTINEL === inst_8253);
var inst_8255 = ((inst_8252) || (inst_8254));
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8255)){
var statearr_8337_8392 = state_8317__$1;
(statearr_8337_8392[(1)] = (16));

} else {
var statearr_8338_8393 = state_8317__$1;
(statearr_8338_8393[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (22))){
var inst_8277 = (state_8317[(10)]);
var inst_8276 = (state_8317[(14)]);
var inst_8275 = (state_8317[(2)]);
var inst_8276__$1 = cljs.core.nth.call(null,inst_8275,(0),null);
var inst_8277__$1 = cljs.core.nth.call(null,inst_8275,(1),null);
var inst_8278 = (inst_8276__$1 == null);
var inst_8279 = cljs.core._EQ_.call(null,inst_8277__$1,change);
var inst_8280 = ((inst_8278) || (inst_8279));
var state_8317__$1 = (function (){var statearr_8339 = state_8317;
(statearr_8339[(10)] = inst_8277__$1);

(statearr_8339[(14)] = inst_8276__$1);

return statearr_8339;
})();
if(cljs.core.truth_(inst_8280)){
var statearr_8340_8394 = state_8317__$1;
(statearr_8340_8394[(1)] = (23));

} else {
var statearr_8341_8395 = state_8317__$1;
(statearr_8341_8395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (36))){
var inst_8267 = (state_8317[(12)]);
var inst_8244 = inst_8267;
var state_8317__$1 = (function (){var statearr_8342 = state_8317;
(statearr_8342[(7)] = inst_8244);

return statearr_8342;
})();
var statearr_8343_8396 = state_8317__$1;
(statearr_8343_8396[(2)] = null);

(statearr_8343_8396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (29))){
var inst_8291 = (state_8317[(11)]);
var state_8317__$1 = state_8317;
var statearr_8344_8397 = state_8317__$1;
(statearr_8344_8397[(2)] = inst_8291);

(statearr_8344_8397[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (6))){
var state_8317__$1 = state_8317;
var statearr_8345_8398 = state_8317__$1;
(statearr_8345_8398[(2)] = false);

(statearr_8345_8398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (28))){
var inst_8287 = (state_8317[(2)]);
var inst_8288 = calc_state.call(null);
var inst_8244 = inst_8288;
var state_8317__$1 = (function (){var statearr_8346 = state_8317;
(statearr_8346[(7)] = inst_8244);

(statearr_8346[(15)] = inst_8287);

return statearr_8346;
})();
var statearr_8347_8399 = state_8317__$1;
(statearr_8347_8399[(2)] = null);

(statearr_8347_8399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (25))){
var inst_8313 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8348_8400 = state_8317__$1;
(statearr_8348_8400[(2)] = inst_8313);

(statearr_8348_8400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (34))){
var inst_8311 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8349_8401 = state_8317__$1;
(statearr_8349_8401[(2)] = inst_8311);

(statearr_8349_8401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (17))){
var state_8317__$1 = state_8317;
var statearr_8350_8402 = state_8317__$1;
(statearr_8350_8402[(2)] = false);

(statearr_8350_8402[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (3))){
var state_8317__$1 = state_8317;
var statearr_8351_8403 = state_8317__$1;
(statearr_8351_8403[(2)] = false);

(statearr_8351_8403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (12))){
var inst_8315 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8317__$1,inst_8315);
} else {
if((state_val_8318 === (2))){
var inst_8219 = (state_8317[(8)]);
var inst_8224 = inst_8219.cljs$lang$protocol_mask$partition0$;
var inst_8225 = (inst_8224 & (64));
var inst_8226 = inst_8219.cljs$core$ISeq$;
var inst_8227 = (cljs.core.PROTOCOL_SENTINEL === inst_8226);
var inst_8228 = ((inst_8225) || (inst_8227));
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8228)){
var statearr_8352_8404 = state_8317__$1;
(statearr_8352_8404[(1)] = (5));

} else {
var statearr_8353_8405 = state_8317__$1;
(statearr_8353_8405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (23))){
var inst_8276 = (state_8317[(14)]);
var inst_8282 = (inst_8276 == null);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8282)){
var statearr_8354_8406 = state_8317__$1;
(statearr_8354_8406[(1)] = (26));

} else {
var statearr_8355_8407 = state_8317__$1;
(statearr_8355_8407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (35))){
var inst_8302 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
if(cljs.core.truth_(inst_8302)){
var statearr_8356_8408 = state_8317__$1;
(statearr_8356_8408[(1)] = (36));

} else {
var statearr_8357_8409 = state_8317__$1;
(statearr_8357_8409[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (19))){
var inst_8244 = (state_8317[(7)]);
var inst_8264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8244);
var state_8317__$1 = state_8317;
var statearr_8358_8410 = state_8317__$1;
(statearr_8358_8410[(2)] = inst_8264);

(statearr_8358_8410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (11))){
var inst_8244 = (state_8317[(7)]);
var inst_8248 = (inst_8244 == null);
var inst_8249 = cljs.core.not.call(null,inst_8248);
var state_8317__$1 = state_8317;
if(inst_8249){
var statearr_8359_8411 = state_8317__$1;
(statearr_8359_8411[(1)] = (13));

} else {
var statearr_8360_8412 = state_8317__$1;
(statearr_8360_8412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (9))){
var inst_8219 = (state_8317[(8)]);
var state_8317__$1 = state_8317;
var statearr_8361_8413 = state_8317__$1;
(statearr_8361_8413[(2)] = inst_8219);

(statearr_8361_8413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (5))){
var state_8317__$1 = state_8317;
var statearr_8362_8414 = state_8317__$1;
(statearr_8362_8414[(2)] = true);

(statearr_8362_8414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (14))){
var state_8317__$1 = state_8317;
var statearr_8363_8415 = state_8317__$1;
(statearr_8363_8415[(2)] = false);

(statearr_8363_8415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (26))){
var inst_8277 = (state_8317[(10)]);
var inst_8284 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8277);
var state_8317__$1 = state_8317;
var statearr_8364_8416 = state_8317__$1;
(statearr_8364_8416[(2)] = inst_8284);

(statearr_8364_8416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (16))){
var state_8317__$1 = state_8317;
var statearr_8365_8417 = state_8317__$1;
(statearr_8365_8417[(2)] = true);

(statearr_8365_8417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (38))){
var inst_8307 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8366_8418 = state_8317__$1;
(statearr_8366_8418[(2)] = inst_8307);

(statearr_8366_8418[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (30))){
var inst_8269 = (state_8317[(13)]);
var inst_8268 = (state_8317[(9)]);
var inst_8277 = (state_8317[(10)]);
var inst_8294 = cljs.core.empty_QMARK_.call(null,inst_8268);
var inst_8295 = inst_8269.call(null,inst_8277);
var inst_8296 = cljs.core.not.call(null,inst_8295);
var inst_8297 = ((inst_8294) && (inst_8296));
var state_8317__$1 = state_8317;
var statearr_8367_8419 = state_8317__$1;
(statearr_8367_8419[(2)] = inst_8297);

(statearr_8367_8419[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (10))){
var inst_8219 = (state_8317[(8)]);
var inst_8240 = (state_8317[(2)]);
var inst_8241 = cljs.core.get.call(null,inst_8240,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8242 = cljs.core.get.call(null,inst_8240,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8243 = cljs.core.get.call(null,inst_8240,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8244 = inst_8219;
var state_8317__$1 = (function (){var statearr_8368 = state_8317;
(statearr_8368[(16)] = inst_8242);

(statearr_8368[(7)] = inst_8244);

(statearr_8368[(17)] = inst_8243);

(statearr_8368[(18)] = inst_8241);

return statearr_8368;
})();
var statearr_8369_8420 = state_8317__$1;
(statearr_8369_8420[(2)] = null);

(statearr_8369_8420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (18))){
var inst_8259 = (state_8317[(2)]);
var state_8317__$1 = state_8317;
var statearr_8370_8421 = state_8317__$1;
(statearr_8370_8421[(2)] = inst_8259);

(statearr_8370_8421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (37))){
var state_8317__$1 = state_8317;
var statearr_8371_8422 = state_8317__$1;
(statearr_8371_8422[(2)] = null);

(statearr_8371_8422[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8318 === (8))){
var inst_8219 = (state_8317[(8)]);
var inst_8237 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8219);
var state_8317__$1 = state_8317;
var statearr_8372_8423 = state_8317__$1;
(statearr_8372_8423[(2)] = inst_8237);

(statearr_8372_8423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7228__auto__,c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7229__auto__ = null;
var cljs$core$async$mix_$_state_machine__7229__auto____0 = (function (){
var statearr_8373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8373[(0)] = cljs$core$async$mix_$_state_machine__7229__auto__);

(statearr_8373[(1)] = (1));

return statearr_8373;
});
var cljs$core$async$mix_$_state_machine__7229__auto____1 = (function (state_8317){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8374){if((e8374 instanceof Object)){
var ex__7232__auto__ = e8374;
var statearr_8375_8424 = state_8317;
(statearr_8375_8424[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8425 = state_8317;
state_8317 = G__8425;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7229__auto__ = function(state_8317){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7229__auto____1.call(this,state_8317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7229__auto____0;
cljs$core$async$mix_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7229__auto____1;
return cljs$core$async$mix_$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7320__auto__ = (function (){var statearr_8376 = f__7319__auto__.call(null);
(statearr_8376[(6)] = c__7318__auto___8377);

return statearr_8376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8377,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__8427 = arguments.length;
switch (G__8427) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__8431 = arguments.length;
switch (G__8431) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__8429_SHARP_){
if(cljs.core.truth_(p1__8429_SHARP_.call(null,topic))){
return p1__8429_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8429_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8432 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8433){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8433 = meta8433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8434,meta8433__$1){
var self__ = this;
var _8434__$1 = this;
return (new cljs.core.async.t_cljs$core$async8432(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8433__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8434){
var self__ = this;
var _8434__$1 = this;
return self__.meta8433;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8433","meta8433",-1798034857,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8432";

cljs.core.async.t_cljs$core$async8432.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8432");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8432.
 */
cljs.core.async.__GT_t_cljs$core$async8432 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8433){
return (new cljs.core.async.t_cljs$core$async8432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8433));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8432(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7318__auto___8552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8552,mults,ensure_mult,p){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8552,mults,ensure_mult,p){
return (function (state_8506){
var state_val_8507 = (state_8506[(1)]);
if((state_val_8507 === (7))){
var inst_8502 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8508_8553 = state_8506__$1;
(statearr_8508_8553[(2)] = inst_8502);

(statearr_8508_8553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (20))){
var state_8506__$1 = state_8506;
var statearr_8509_8554 = state_8506__$1;
(statearr_8509_8554[(2)] = null);

(statearr_8509_8554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (1))){
var state_8506__$1 = state_8506;
var statearr_8510_8555 = state_8506__$1;
(statearr_8510_8555[(2)] = null);

(statearr_8510_8555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (24))){
var inst_8485 = (state_8506[(7)]);
var inst_8494 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8485);
var state_8506__$1 = state_8506;
var statearr_8511_8556 = state_8506__$1;
(statearr_8511_8556[(2)] = inst_8494);

(statearr_8511_8556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (4))){
var inst_8437 = (state_8506[(8)]);
var inst_8437__$1 = (state_8506[(2)]);
var inst_8438 = (inst_8437__$1 == null);
var state_8506__$1 = (function (){var statearr_8512 = state_8506;
(statearr_8512[(8)] = inst_8437__$1);

return statearr_8512;
})();
if(cljs.core.truth_(inst_8438)){
var statearr_8513_8557 = state_8506__$1;
(statearr_8513_8557[(1)] = (5));

} else {
var statearr_8514_8558 = state_8506__$1;
(statearr_8514_8558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (15))){
var inst_8479 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8515_8559 = state_8506__$1;
(statearr_8515_8559[(2)] = inst_8479);

(statearr_8515_8559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (21))){
var inst_8499 = (state_8506[(2)]);
var state_8506__$1 = (function (){var statearr_8516 = state_8506;
(statearr_8516[(9)] = inst_8499);

return statearr_8516;
})();
var statearr_8517_8560 = state_8506__$1;
(statearr_8517_8560[(2)] = null);

(statearr_8517_8560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (13))){
var inst_8461 = (state_8506[(10)]);
var inst_8463 = cljs.core.chunked_seq_QMARK_.call(null,inst_8461);
var state_8506__$1 = state_8506;
if(inst_8463){
var statearr_8518_8561 = state_8506__$1;
(statearr_8518_8561[(1)] = (16));

} else {
var statearr_8519_8562 = state_8506__$1;
(statearr_8519_8562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (22))){
var inst_8491 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
if(cljs.core.truth_(inst_8491)){
var statearr_8520_8563 = state_8506__$1;
(statearr_8520_8563[(1)] = (23));

} else {
var statearr_8521_8564 = state_8506__$1;
(statearr_8521_8564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (6))){
var inst_8437 = (state_8506[(8)]);
var inst_8485 = (state_8506[(7)]);
var inst_8487 = (state_8506[(11)]);
var inst_8485__$1 = topic_fn.call(null,inst_8437);
var inst_8486 = cljs.core.deref.call(null,mults);
var inst_8487__$1 = cljs.core.get.call(null,inst_8486,inst_8485__$1);
var state_8506__$1 = (function (){var statearr_8522 = state_8506;
(statearr_8522[(7)] = inst_8485__$1);

(statearr_8522[(11)] = inst_8487__$1);

return statearr_8522;
})();
if(cljs.core.truth_(inst_8487__$1)){
var statearr_8523_8565 = state_8506__$1;
(statearr_8523_8565[(1)] = (19));

} else {
var statearr_8524_8566 = state_8506__$1;
(statearr_8524_8566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (25))){
var inst_8496 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8525_8567 = state_8506__$1;
(statearr_8525_8567[(2)] = inst_8496);

(statearr_8525_8567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (17))){
var inst_8461 = (state_8506[(10)]);
var inst_8470 = cljs.core.first.call(null,inst_8461);
var inst_8471 = cljs.core.async.muxch_STAR_.call(null,inst_8470);
var inst_8472 = cljs.core.async.close_BANG_.call(null,inst_8471);
var inst_8473 = cljs.core.next.call(null,inst_8461);
var inst_8447 = inst_8473;
var inst_8448 = null;
var inst_8449 = (0);
var inst_8450 = (0);
var state_8506__$1 = (function (){var statearr_8526 = state_8506;
(statearr_8526[(12)] = inst_8472);

(statearr_8526[(13)] = inst_8450);

(statearr_8526[(14)] = inst_8448);

(statearr_8526[(15)] = inst_8447);

(statearr_8526[(16)] = inst_8449);

return statearr_8526;
})();
var statearr_8527_8568 = state_8506__$1;
(statearr_8527_8568[(2)] = null);

(statearr_8527_8568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (3))){
var inst_8504 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8506__$1,inst_8504);
} else {
if((state_val_8507 === (12))){
var inst_8481 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8528_8569 = state_8506__$1;
(statearr_8528_8569[(2)] = inst_8481);

(statearr_8528_8569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (2))){
var state_8506__$1 = state_8506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8506__$1,(4),ch);
} else {
if((state_val_8507 === (23))){
var state_8506__$1 = state_8506;
var statearr_8529_8570 = state_8506__$1;
(statearr_8529_8570[(2)] = null);

(statearr_8529_8570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (19))){
var inst_8437 = (state_8506[(8)]);
var inst_8487 = (state_8506[(11)]);
var inst_8489 = cljs.core.async.muxch_STAR_.call(null,inst_8487);
var state_8506__$1 = state_8506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8506__$1,(22),inst_8489,inst_8437);
} else {
if((state_val_8507 === (11))){
var inst_8447 = (state_8506[(15)]);
var inst_8461 = (state_8506[(10)]);
var inst_8461__$1 = cljs.core.seq.call(null,inst_8447);
var state_8506__$1 = (function (){var statearr_8530 = state_8506;
(statearr_8530[(10)] = inst_8461__$1);

return statearr_8530;
})();
if(inst_8461__$1){
var statearr_8531_8571 = state_8506__$1;
(statearr_8531_8571[(1)] = (13));

} else {
var statearr_8532_8572 = state_8506__$1;
(statearr_8532_8572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (9))){
var inst_8483 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8533_8573 = state_8506__$1;
(statearr_8533_8573[(2)] = inst_8483);

(statearr_8533_8573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (5))){
var inst_8444 = cljs.core.deref.call(null,mults);
var inst_8445 = cljs.core.vals.call(null,inst_8444);
var inst_8446 = cljs.core.seq.call(null,inst_8445);
var inst_8447 = inst_8446;
var inst_8448 = null;
var inst_8449 = (0);
var inst_8450 = (0);
var state_8506__$1 = (function (){var statearr_8534 = state_8506;
(statearr_8534[(13)] = inst_8450);

(statearr_8534[(14)] = inst_8448);

(statearr_8534[(15)] = inst_8447);

(statearr_8534[(16)] = inst_8449);

return statearr_8534;
})();
var statearr_8535_8574 = state_8506__$1;
(statearr_8535_8574[(2)] = null);

(statearr_8535_8574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (14))){
var state_8506__$1 = state_8506;
var statearr_8539_8575 = state_8506__$1;
(statearr_8539_8575[(2)] = null);

(statearr_8539_8575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (16))){
var inst_8461 = (state_8506[(10)]);
var inst_8465 = cljs.core.chunk_first.call(null,inst_8461);
var inst_8466 = cljs.core.chunk_rest.call(null,inst_8461);
var inst_8467 = cljs.core.count.call(null,inst_8465);
var inst_8447 = inst_8466;
var inst_8448 = inst_8465;
var inst_8449 = inst_8467;
var inst_8450 = (0);
var state_8506__$1 = (function (){var statearr_8540 = state_8506;
(statearr_8540[(13)] = inst_8450);

(statearr_8540[(14)] = inst_8448);

(statearr_8540[(15)] = inst_8447);

(statearr_8540[(16)] = inst_8449);

return statearr_8540;
})();
var statearr_8541_8576 = state_8506__$1;
(statearr_8541_8576[(2)] = null);

(statearr_8541_8576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (10))){
var inst_8450 = (state_8506[(13)]);
var inst_8448 = (state_8506[(14)]);
var inst_8447 = (state_8506[(15)]);
var inst_8449 = (state_8506[(16)]);
var inst_8455 = cljs.core._nth.call(null,inst_8448,inst_8450);
var inst_8456 = cljs.core.async.muxch_STAR_.call(null,inst_8455);
var inst_8457 = cljs.core.async.close_BANG_.call(null,inst_8456);
var inst_8458 = (inst_8450 + (1));
var tmp8536 = inst_8448;
var tmp8537 = inst_8447;
var tmp8538 = inst_8449;
var inst_8447__$1 = tmp8537;
var inst_8448__$1 = tmp8536;
var inst_8449__$1 = tmp8538;
var inst_8450__$1 = inst_8458;
var state_8506__$1 = (function (){var statearr_8542 = state_8506;
(statearr_8542[(13)] = inst_8450__$1);

(statearr_8542[(17)] = inst_8457);

(statearr_8542[(14)] = inst_8448__$1);

(statearr_8542[(15)] = inst_8447__$1);

(statearr_8542[(16)] = inst_8449__$1);

return statearr_8542;
})();
var statearr_8543_8577 = state_8506__$1;
(statearr_8543_8577[(2)] = null);

(statearr_8543_8577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (18))){
var inst_8476 = (state_8506[(2)]);
var state_8506__$1 = state_8506;
var statearr_8544_8578 = state_8506__$1;
(statearr_8544_8578[(2)] = inst_8476);

(statearr_8544_8578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8507 === (8))){
var inst_8450 = (state_8506[(13)]);
var inst_8449 = (state_8506[(16)]);
var inst_8452 = (inst_8450 < inst_8449);
var inst_8453 = inst_8452;
var state_8506__$1 = state_8506;
if(cljs.core.truth_(inst_8453)){
var statearr_8545_8579 = state_8506__$1;
(statearr_8545_8579[(1)] = (10));

} else {
var statearr_8546_8580 = state_8506__$1;
(statearr_8546_8580[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8552,mults,ensure_mult,p))
;
return ((function (switch__7228__auto__,c__7318__auto___8552,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_8547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8547[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_8547[(1)] = (1));

return statearr_8547;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_8506){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8548){if((e8548 instanceof Object)){
var ex__7232__auto__ = e8548;
var statearr_8549_8581 = state_8506;
(statearr_8549_8581[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8582 = state_8506;
state_8506 = G__8582;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_8506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_8506);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8552,mults,ensure_mult,p))
})();
var state__7320__auto__ = (function (){var statearr_8550 = f__7319__auto__.call(null);
(statearr_8550[(6)] = c__7318__auto___8552);

return statearr_8550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8552,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__8584 = arguments.length;
switch (G__8584) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__8587 = arguments.length;
switch (G__8587) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__8590 = arguments.length;
switch (G__8590) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7318__auto___8657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_8629){
var state_val_8630 = (state_8629[(1)]);
if((state_val_8630 === (7))){
var state_8629__$1 = state_8629;
var statearr_8631_8658 = state_8629__$1;
(statearr_8631_8658[(2)] = null);

(statearr_8631_8658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (1))){
var state_8629__$1 = state_8629;
var statearr_8632_8659 = state_8629__$1;
(statearr_8632_8659[(2)] = null);

(statearr_8632_8659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (4))){
var inst_8593 = (state_8629[(7)]);
var inst_8595 = (inst_8593 < cnt);
var state_8629__$1 = state_8629;
if(cljs.core.truth_(inst_8595)){
var statearr_8633_8660 = state_8629__$1;
(statearr_8633_8660[(1)] = (6));

} else {
var statearr_8634_8661 = state_8629__$1;
(statearr_8634_8661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (15))){
var inst_8625 = (state_8629[(2)]);
var state_8629__$1 = state_8629;
var statearr_8635_8662 = state_8629__$1;
(statearr_8635_8662[(2)] = inst_8625);

(statearr_8635_8662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (13))){
var inst_8618 = cljs.core.async.close_BANG_.call(null,out);
var state_8629__$1 = state_8629;
var statearr_8636_8663 = state_8629__$1;
(statearr_8636_8663[(2)] = inst_8618);

(statearr_8636_8663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (6))){
var state_8629__$1 = state_8629;
var statearr_8637_8664 = state_8629__$1;
(statearr_8637_8664[(2)] = null);

(statearr_8637_8664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (3))){
var inst_8627 = (state_8629[(2)]);
var state_8629__$1 = state_8629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8629__$1,inst_8627);
} else {
if((state_val_8630 === (12))){
var inst_8615 = (state_8629[(8)]);
var inst_8615__$1 = (state_8629[(2)]);
var inst_8616 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_8615__$1);
var state_8629__$1 = (function (){var statearr_8638 = state_8629;
(statearr_8638[(8)] = inst_8615__$1);

return statearr_8638;
})();
if(cljs.core.truth_(inst_8616)){
var statearr_8639_8665 = state_8629__$1;
(statearr_8639_8665[(1)] = (13));

} else {
var statearr_8640_8666 = state_8629__$1;
(statearr_8640_8666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (2))){
var inst_8592 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_8593 = (0);
var state_8629__$1 = (function (){var statearr_8641 = state_8629;
(statearr_8641[(7)] = inst_8593);

(statearr_8641[(9)] = inst_8592);

return statearr_8641;
})();
var statearr_8642_8667 = state_8629__$1;
(statearr_8642_8667[(2)] = null);

(statearr_8642_8667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (11))){
var inst_8593 = (state_8629[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_8629,(10),Object,null,(9));
var inst_8602 = chs__$1.call(null,inst_8593);
var inst_8603 = done.call(null,inst_8593);
var inst_8604 = cljs.core.async.take_BANG_.call(null,inst_8602,inst_8603);
var state_8629__$1 = state_8629;
var statearr_8643_8668 = state_8629__$1;
(statearr_8643_8668[(2)] = inst_8604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (9))){
var inst_8593 = (state_8629[(7)]);
var inst_8606 = (state_8629[(2)]);
var inst_8607 = (inst_8593 + (1));
var inst_8593__$1 = inst_8607;
var state_8629__$1 = (function (){var statearr_8644 = state_8629;
(statearr_8644[(10)] = inst_8606);

(statearr_8644[(7)] = inst_8593__$1);

return statearr_8644;
})();
var statearr_8645_8669 = state_8629__$1;
(statearr_8645_8669[(2)] = null);

(statearr_8645_8669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (5))){
var inst_8613 = (state_8629[(2)]);
var state_8629__$1 = (function (){var statearr_8646 = state_8629;
(statearr_8646[(11)] = inst_8613);

return statearr_8646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8629__$1,(12),dchan);
} else {
if((state_val_8630 === (14))){
var inst_8615 = (state_8629[(8)]);
var inst_8620 = cljs.core.apply.call(null,f,inst_8615);
var state_8629__$1 = state_8629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8629__$1,(16),out,inst_8620);
} else {
if((state_val_8630 === (16))){
var inst_8622 = (state_8629[(2)]);
var state_8629__$1 = (function (){var statearr_8647 = state_8629;
(statearr_8647[(12)] = inst_8622);

return statearr_8647;
})();
var statearr_8648_8670 = state_8629__$1;
(statearr_8648_8670[(2)] = null);

(statearr_8648_8670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (10))){
var inst_8597 = (state_8629[(2)]);
var inst_8598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_8629__$1 = (function (){var statearr_8649 = state_8629;
(statearr_8649[(13)] = inst_8597);

return statearr_8649;
})();
var statearr_8650_8671 = state_8629__$1;
(statearr_8650_8671[(2)] = inst_8598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8630 === (8))){
var inst_8611 = (state_8629[(2)]);
var state_8629__$1 = state_8629;
var statearr_8651_8672 = state_8629__$1;
(statearr_8651_8672[(2)] = inst_8611);

(statearr_8651_8672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7228__auto__,c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_8652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8652[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_8652[(1)] = (1));

return statearr_8652;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_8629){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8653){if((e8653 instanceof Object)){
var ex__7232__auto__ = e8653;
var statearr_8654_8673 = state_8629;
(statearr_8654_8673[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8674 = state_8629;
state_8629 = G__8674;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_8629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_8629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7320__auto__ = (function (){var statearr_8655 = f__7319__auto__.call(null);
(statearr_8655[(6)] = c__7318__auto___8657);

return statearr_8655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8657,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__8677 = arguments.length;
switch (G__8677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___8731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8731,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8731,out){
return (function (state_8709){
var state_val_8710 = (state_8709[(1)]);
if((state_val_8710 === (7))){
var inst_8688 = (state_8709[(7)]);
var inst_8689 = (state_8709[(8)]);
var inst_8688__$1 = (state_8709[(2)]);
var inst_8689__$1 = cljs.core.nth.call(null,inst_8688__$1,(0),null);
var inst_8690 = cljs.core.nth.call(null,inst_8688__$1,(1),null);
var inst_8691 = (inst_8689__$1 == null);
var state_8709__$1 = (function (){var statearr_8711 = state_8709;
(statearr_8711[(7)] = inst_8688__$1);

(statearr_8711[(9)] = inst_8690);

(statearr_8711[(8)] = inst_8689__$1);

return statearr_8711;
})();
if(cljs.core.truth_(inst_8691)){
var statearr_8712_8732 = state_8709__$1;
(statearr_8712_8732[(1)] = (8));

} else {
var statearr_8713_8733 = state_8709__$1;
(statearr_8713_8733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (1))){
var inst_8678 = cljs.core.vec.call(null,chs);
var inst_8679 = inst_8678;
var state_8709__$1 = (function (){var statearr_8714 = state_8709;
(statearr_8714[(10)] = inst_8679);

return statearr_8714;
})();
var statearr_8715_8734 = state_8709__$1;
(statearr_8715_8734[(2)] = null);

(statearr_8715_8734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (4))){
var inst_8679 = (state_8709[(10)]);
var state_8709__$1 = state_8709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_8709__$1,(7),inst_8679);
} else {
if((state_val_8710 === (6))){
var inst_8705 = (state_8709[(2)]);
var state_8709__$1 = state_8709;
var statearr_8716_8735 = state_8709__$1;
(statearr_8716_8735[(2)] = inst_8705);

(statearr_8716_8735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (3))){
var inst_8707 = (state_8709[(2)]);
var state_8709__$1 = state_8709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8709__$1,inst_8707);
} else {
if((state_val_8710 === (2))){
var inst_8679 = (state_8709[(10)]);
var inst_8681 = cljs.core.count.call(null,inst_8679);
var inst_8682 = (inst_8681 > (0));
var state_8709__$1 = state_8709;
if(cljs.core.truth_(inst_8682)){
var statearr_8718_8736 = state_8709__$1;
(statearr_8718_8736[(1)] = (4));

} else {
var statearr_8719_8737 = state_8709__$1;
(statearr_8719_8737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (11))){
var inst_8679 = (state_8709[(10)]);
var inst_8698 = (state_8709[(2)]);
var tmp8717 = inst_8679;
var inst_8679__$1 = tmp8717;
var state_8709__$1 = (function (){var statearr_8720 = state_8709;
(statearr_8720[(11)] = inst_8698);

(statearr_8720[(10)] = inst_8679__$1);

return statearr_8720;
})();
var statearr_8721_8738 = state_8709__$1;
(statearr_8721_8738[(2)] = null);

(statearr_8721_8738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (9))){
var inst_8689 = (state_8709[(8)]);
var state_8709__$1 = state_8709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8709__$1,(11),out,inst_8689);
} else {
if((state_val_8710 === (5))){
var inst_8703 = cljs.core.async.close_BANG_.call(null,out);
var state_8709__$1 = state_8709;
var statearr_8722_8739 = state_8709__$1;
(statearr_8722_8739[(2)] = inst_8703);

(statearr_8722_8739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (10))){
var inst_8701 = (state_8709[(2)]);
var state_8709__$1 = state_8709;
var statearr_8723_8740 = state_8709__$1;
(statearr_8723_8740[(2)] = inst_8701);

(statearr_8723_8740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8710 === (8))){
var inst_8688 = (state_8709[(7)]);
var inst_8690 = (state_8709[(9)]);
var inst_8689 = (state_8709[(8)]);
var inst_8679 = (state_8709[(10)]);
var inst_8693 = (function (){var cs = inst_8679;
var vec__8684 = inst_8688;
var v = inst_8689;
var c = inst_8690;
return ((function (cs,vec__8684,v,c,inst_8688,inst_8690,inst_8689,inst_8679,state_val_8710,c__7318__auto___8731,out){
return (function (p1__8675_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__8675_SHARP_);
});
;})(cs,vec__8684,v,c,inst_8688,inst_8690,inst_8689,inst_8679,state_val_8710,c__7318__auto___8731,out))
})();
var inst_8694 = cljs.core.filterv.call(null,inst_8693,inst_8679);
var inst_8679__$1 = inst_8694;
var state_8709__$1 = (function (){var statearr_8724 = state_8709;
(statearr_8724[(10)] = inst_8679__$1);

return statearr_8724;
})();
var statearr_8725_8741 = state_8709__$1;
(statearr_8725_8741[(2)] = null);

(statearr_8725_8741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8731,out))
;
return ((function (switch__7228__auto__,c__7318__auto___8731,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_8726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8726[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_8726[(1)] = (1));

return statearr_8726;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_8709){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8727){if((e8727 instanceof Object)){
var ex__7232__auto__ = e8727;
var statearr_8728_8742 = state_8709;
(statearr_8728_8742[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8743 = state_8709;
state_8709 = G__8743;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_8709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_8709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8731,out))
})();
var state__7320__auto__ = (function (){var statearr_8729 = f__7319__auto__.call(null);
(statearr_8729[(6)] = c__7318__auto___8731);

return statearr_8729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8731,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__8745 = arguments.length;
switch (G__8745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___8790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8790,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8790,out){
return (function (state_8769){
var state_val_8770 = (state_8769[(1)]);
if((state_val_8770 === (7))){
var inst_8751 = (state_8769[(7)]);
var inst_8751__$1 = (state_8769[(2)]);
var inst_8752 = (inst_8751__$1 == null);
var inst_8753 = cljs.core.not.call(null,inst_8752);
var state_8769__$1 = (function (){var statearr_8771 = state_8769;
(statearr_8771[(7)] = inst_8751__$1);

return statearr_8771;
})();
if(inst_8753){
var statearr_8772_8791 = state_8769__$1;
(statearr_8772_8791[(1)] = (8));

} else {
var statearr_8773_8792 = state_8769__$1;
(statearr_8773_8792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (1))){
var inst_8746 = (0);
var state_8769__$1 = (function (){var statearr_8774 = state_8769;
(statearr_8774[(8)] = inst_8746);

return statearr_8774;
})();
var statearr_8775_8793 = state_8769__$1;
(statearr_8775_8793[(2)] = null);

(statearr_8775_8793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (4))){
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8769__$1,(7),ch);
} else {
if((state_val_8770 === (6))){
var inst_8764 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8776_8794 = state_8769__$1;
(statearr_8776_8794[(2)] = inst_8764);

(statearr_8776_8794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (3))){
var inst_8766 = (state_8769[(2)]);
var inst_8767 = cljs.core.async.close_BANG_.call(null,out);
var state_8769__$1 = (function (){var statearr_8777 = state_8769;
(statearr_8777[(9)] = inst_8766);

return statearr_8777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8769__$1,inst_8767);
} else {
if((state_val_8770 === (2))){
var inst_8746 = (state_8769[(8)]);
var inst_8748 = (inst_8746 < n);
var state_8769__$1 = state_8769;
if(cljs.core.truth_(inst_8748)){
var statearr_8778_8795 = state_8769__$1;
(statearr_8778_8795[(1)] = (4));

} else {
var statearr_8779_8796 = state_8769__$1;
(statearr_8779_8796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (11))){
var inst_8746 = (state_8769[(8)]);
var inst_8756 = (state_8769[(2)]);
var inst_8757 = (inst_8746 + (1));
var inst_8746__$1 = inst_8757;
var state_8769__$1 = (function (){var statearr_8780 = state_8769;
(statearr_8780[(8)] = inst_8746__$1);

(statearr_8780[(10)] = inst_8756);

return statearr_8780;
})();
var statearr_8781_8797 = state_8769__$1;
(statearr_8781_8797[(2)] = null);

(statearr_8781_8797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (9))){
var state_8769__$1 = state_8769;
var statearr_8782_8798 = state_8769__$1;
(statearr_8782_8798[(2)] = null);

(statearr_8782_8798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (5))){
var state_8769__$1 = state_8769;
var statearr_8783_8799 = state_8769__$1;
(statearr_8783_8799[(2)] = null);

(statearr_8783_8799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (10))){
var inst_8761 = (state_8769[(2)]);
var state_8769__$1 = state_8769;
var statearr_8784_8800 = state_8769__$1;
(statearr_8784_8800[(2)] = inst_8761);

(statearr_8784_8800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8770 === (8))){
var inst_8751 = (state_8769[(7)]);
var state_8769__$1 = state_8769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8769__$1,(11),out,inst_8751);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8790,out))
;
return ((function (switch__7228__auto__,c__7318__auto___8790,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_8785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8785[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_8785[(1)] = (1));

return statearr_8785;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_8769){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8786){if((e8786 instanceof Object)){
var ex__7232__auto__ = e8786;
var statearr_8787_8801 = state_8769;
(statearr_8787_8801[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8802 = state_8769;
state_8769 = G__8802;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_8769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_8769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8790,out))
})();
var state__7320__auto__ = (function (){var statearr_8788 = f__7319__auto__.call(null);
(statearr_8788[(6)] = c__7318__auto___8790);

return statearr_8788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8790,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8804 = (function (f,ch,meta8805){
this.f = f;
this.ch = ch;
this.meta8805 = meta8805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8806,meta8805__$1){
var self__ = this;
var _8806__$1 = this;
return (new cljs.core.async.t_cljs$core$async8804(self__.f,self__.ch,meta8805__$1));
});

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8806){
var self__ = this;
var _8806__$1 = this;
return self__.meta8805;
});

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async8807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8807 = (function (f,ch,meta8805,_,fn1,meta8808){
this.f = f;
this.ch = ch;
this.meta8805 = meta8805;
this._ = _;
this.fn1 = fn1;
this.meta8808 = meta8808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_8809,meta8808__$1){
var self__ = this;
var _8809__$1 = this;
return (new cljs.core.async.t_cljs$core$async8807(self__.f,self__.ch,self__.meta8805,self__._,self__.fn1,meta8808__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_8809){
var self__ = this;
var _8809__$1 = this;
return self__.meta8808;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__8803_SHARP_){
return f1.call(null,(((p1__8803_SHARP_ == null))?null:self__.f.call(null,p1__8803_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8805","meta8805",2089423262,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async8804","cljs.core.async/t_cljs$core$async8804",-936358399,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta8808","meta8808",1841259687,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async8807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8807";

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8807");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8807.
 */
cljs.core.async.__GT_t_cljs$core$async8807 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8807(f__$1,ch__$1,meta8805__$1,___$2,fn1__$1,meta8808){
return (new cljs.core.async.t_cljs$core$async8807(f__$1,ch__$1,meta8805__$1,___$2,fn1__$1,meta8808));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async8807(self__.f,self__.ch,self__.meta8805,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async8804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8805","meta8805",2089423262,null)], null);
});

cljs.core.async.t_cljs$core$async8804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8804";

cljs.core.async.t_cljs$core$async8804.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8804.
 */
cljs.core.async.__GT_t_cljs$core$async8804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async8804(f__$1,ch__$1,meta8805){
return (new cljs.core.async.t_cljs$core$async8804(f__$1,ch__$1,meta8805));
});

}

return (new cljs.core.async.t_cljs$core$async8804(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async8810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8810 = (function (f,ch,meta8811){
this.f = f;
this.ch = ch;
this.meta8811 = meta8811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8812,meta8811__$1){
var self__ = this;
var _8812__$1 = this;
return (new cljs.core.async.t_cljs$core$async8810(self__.f,self__.ch,meta8811__$1));
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8812){
var self__ = this;
var _8812__$1 = this;
return self__.meta8811;
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async8810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8811","meta8811",2126720247,null)], null);
});

cljs.core.async.t_cljs$core$async8810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8810";

cljs.core.async.t_cljs$core$async8810.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8810.
 */
cljs.core.async.__GT_t_cljs$core$async8810 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async8810(f__$1,ch__$1,meta8811){
return (new cljs.core.async.t_cljs$core$async8810(f__$1,ch__$1,meta8811));
});

}

return (new cljs.core.async.t_cljs$core$async8810(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async8813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8813 = (function (p,ch,meta8814){
this.p = p;
this.ch = ch;
this.meta8814 = meta8814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8815,meta8814__$1){
var self__ = this;
var _8815__$1 = this;
return (new cljs.core.async.t_cljs$core$async8813(self__.p,self__.ch,meta8814__$1));
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8815){
var self__ = this;
var _8815__$1 = this;
return self__.meta8814;
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async8813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta8814","meta8814",2115878386,null)], null);
});

cljs.core.async.t_cljs$core$async8813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8813";

cljs.core.async.t_cljs$core$async8813.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async8813");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8813.
 */
cljs.core.async.__GT_t_cljs$core$async8813 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async8813(p__$1,ch__$1,meta8814){
return (new cljs.core.async.t_cljs$core$async8813(p__$1,ch__$1,meta8814));
});

}

return (new cljs.core.async.t_cljs$core$async8813(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__8817 = arguments.length;
switch (G__8817) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___8857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___8857,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___8857,out){
return (function (state_8838){
var state_val_8839 = (state_8838[(1)]);
if((state_val_8839 === (7))){
var inst_8834 = (state_8838[(2)]);
var state_8838__$1 = state_8838;
var statearr_8840_8858 = state_8838__$1;
(statearr_8840_8858[(2)] = inst_8834);

(statearr_8840_8858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (1))){
var state_8838__$1 = state_8838;
var statearr_8841_8859 = state_8838__$1;
(statearr_8841_8859[(2)] = null);

(statearr_8841_8859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (4))){
var inst_8820 = (state_8838[(7)]);
var inst_8820__$1 = (state_8838[(2)]);
var inst_8821 = (inst_8820__$1 == null);
var state_8838__$1 = (function (){var statearr_8842 = state_8838;
(statearr_8842[(7)] = inst_8820__$1);

return statearr_8842;
})();
if(cljs.core.truth_(inst_8821)){
var statearr_8843_8860 = state_8838__$1;
(statearr_8843_8860[(1)] = (5));

} else {
var statearr_8844_8861 = state_8838__$1;
(statearr_8844_8861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (6))){
var inst_8820 = (state_8838[(7)]);
var inst_8825 = p.call(null,inst_8820);
var state_8838__$1 = state_8838;
if(cljs.core.truth_(inst_8825)){
var statearr_8845_8862 = state_8838__$1;
(statearr_8845_8862[(1)] = (8));

} else {
var statearr_8846_8863 = state_8838__$1;
(statearr_8846_8863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (3))){
var inst_8836 = (state_8838[(2)]);
var state_8838__$1 = state_8838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8838__$1,inst_8836);
} else {
if((state_val_8839 === (2))){
var state_8838__$1 = state_8838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8838__$1,(4),ch);
} else {
if((state_val_8839 === (11))){
var inst_8828 = (state_8838[(2)]);
var state_8838__$1 = state_8838;
var statearr_8847_8864 = state_8838__$1;
(statearr_8847_8864[(2)] = inst_8828);

(statearr_8847_8864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (9))){
var state_8838__$1 = state_8838;
var statearr_8848_8865 = state_8838__$1;
(statearr_8848_8865[(2)] = null);

(statearr_8848_8865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (5))){
var inst_8823 = cljs.core.async.close_BANG_.call(null,out);
var state_8838__$1 = state_8838;
var statearr_8849_8866 = state_8838__$1;
(statearr_8849_8866[(2)] = inst_8823);

(statearr_8849_8866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (10))){
var inst_8831 = (state_8838[(2)]);
var state_8838__$1 = (function (){var statearr_8850 = state_8838;
(statearr_8850[(8)] = inst_8831);

return statearr_8850;
})();
var statearr_8851_8867 = state_8838__$1;
(statearr_8851_8867[(2)] = null);

(statearr_8851_8867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8839 === (8))){
var inst_8820 = (state_8838[(7)]);
var state_8838__$1 = state_8838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8838__$1,(11),out,inst_8820);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___8857,out))
;
return ((function (switch__7228__auto__,c__7318__auto___8857,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_8852 = [null,null,null,null,null,null,null,null,null];
(statearr_8852[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_8852[(1)] = (1));

return statearr_8852;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_8838){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8853){if((e8853 instanceof Object)){
var ex__7232__auto__ = e8853;
var statearr_8854_8868 = state_8838;
(statearr_8854_8868[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8869 = state_8838;
state_8838 = G__8869;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_8838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_8838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___8857,out))
})();
var state__7320__auto__ = (function (){var statearr_8855 = f__7319__auto__.call(null);
(statearr_8855[(6)] = c__7318__auto___8857);

return statearr_8855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___8857,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__8871 = arguments.length;
switch (G__8871) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__){
return (function (state_8934){
var state_val_8935 = (state_8934[(1)]);
if((state_val_8935 === (7))){
var inst_8930 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
var statearr_8936_8974 = state_8934__$1;
(statearr_8936_8974[(2)] = inst_8930);

(statearr_8936_8974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (20))){
var inst_8900 = (state_8934[(7)]);
var inst_8911 = (state_8934[(2)]);
var inst_8912 = cljs.core.next.call(null,inst_8900);
var inst_8886 = inst_8912;
var inst_8887 = null;
var inst_8888 = (0);
var inst_8889 = (0);
var state_8934__$1 = (function (){var statearr_8937 = state_8934;
(statearr_8937[(8)] = inst_8886);

(statearr_8937[(9)] = inst_8888);

(statearr_8937[(10)] = inst_8889);

(statearr_8937[(11)] = inst_8887);

(statearr_8937[(12)] = inst_8911);

return statearr_8937;
})();
var statearr_8938_8975 = state_8934__$1;
(statearr_8938_8975[(2)] = null);

(statearr_8938_8975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (1))){
var state_8934__$1 = state_8934;
var statearr_8939_8976 = state_8934__$1;
(statearr_8939_8976[(2)] = null);

(statearr_8939_8976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (4))){
var inst_8875 = (state_8934[(13)]);
var inst_8875__$1 = (state_8934[(2)]);
var inst_8876 = (inst_8875__$1 == null);
var state_8934__$1 = (function (){var statearr_8940 = state_8934;
(statearr_8940[(13)] = inst_8875__$1);

return statearr_8940;
})();
if(cljs.core.truth_(inst_8876)){
var statearr_8941_8977 = state_8934__$1;
(statearr_8941_8977[(1)] = (5));

} else {
var statearr_8942_8978 = state_8934__$1;
(statearr_8942_8978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (15))){
var state_8934__$1 = state_8934;
var statearr_8946_8979 = state_8934__$1;
(statearr_8946_8979[(2)] = null);

(statearr_8946_8979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (21))){
var state_8934__$1 = state_8934;
var statearr_8947_8980 = state_8934__$1;
(statearr_8947_8980[(2)] = null);

(statearr_8947_8980[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (13))){
var inst_8886 = (state_8934[(8)]);
var inst_8888 = (state_8934[(9)]);
var inst_8889 = (state_8934[(10)]);
var inst_8887 = (state_8934[(11)]);
var inst_8896 = (state_8934[(2)]);
var inst_8897 = (inst_8889 + (1));
var tmp8943 = inst_8886;
var tmp8944 = inst_8888;
var tmp8945 = inst_8887;
var inst_8886__$1 = tmp8943;
var inst_8887__$1 = tmp8945;
var inst_8888__$1 = tmp8944;
var inst_8889__$1 = inst_8897;
var state_8934__$1 = (function (){var statearr_8948 = state_8934;
(statearr_8948[(8)] = inst_8886__$1);

(statearr_8948[(9)] = inst_8888__$1);

(statearr_8948[(10)] = inst_8889__$1);

(statearr_8948[(14)] = inst_8896);

(statearr_8948[(11)] = inst_8887__$1);

return statearr_8948;
})();
var statearr_8949_8981 = state_8934__$1;
(statearr_8949_8981[(2)] = null);

(statearr_8949_8981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (22))){
var state_8934__$1 = state_8934;
var statearr_8950_8982 = state_8934__$1;
(statearr_8950_8982[(2)] = null);

(statearr_8950_8982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (6))){
var inst_8875 = (state_8934[(13)]);
var inst_8884 = f.call(null,inst_8875);
var inst_8885 = cljs.core.seq.call(null,inst_8884);
var inst_8886 = inst_8885;
var inst_8887 = null;
var inst_8888 = (0);
var inst_8889 = (0);
var state_8934__$1 = (function (){var statearr_8951 = state_8934;
(statearr_8951[(8)] = inst_8886);

(statearr_8951[(9)] = inst_8888);

(statearr_8951[(10)] = inst_8889);

(statearr_8951[(11)] = inst_8887);

return statearr_8951;
})();
var statearr_8952_8983 = state_8934__$1;
(statearr_8952_8983[(2)] = null);

(statearr_8952_8983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (17))){
var inst_8900 = (state_8934[(7)]);
var inst_8904 = cljs.core.chunk_first.call(null,inst_8900);
var inst_8905 = cljs.core.chunk_rest.call(null,inst_8900);
var inst_8906 = cljs.core.count.call(null,inst_8904);
var inst_8886 = inst_8905;
var inst_8887 = inst_8904;
var inst_8888 = inst_8906;
var inst_8889 = (0);
var state_8934__$1 = (function (){var statearr_8953 = state_8934;
(statearr_8953[(8)] = inst_8886);

(statearr_8953[(9)] = inst_8888);

(statearr_8953[(10)] = inst_8889);

(statearr_8953[(11)] = inst_8887);

return statearr_8953;
})();
var statearr_8954_8984 = state_8934__$1;
(statearr_8954_8984[(2)] = null);

(statearr_8954_8984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (3))){
var inst_8932 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8934__$1,inst_8932);
} else {
if((state_val_8935 === (12))){
var inst_8920 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
var statearr_8955_8985 = state_8934__$1;
(statearr_8955_8985[(2)] = inst_8920);

(statearr_8955_8985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (2))){
var state_8934__$1 = state_8934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8934__$1,(4),in$);
} else {
if((state_val_8935 === (23))){
var inst_8928 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
var statearr_8956_8986 = state_8934__$1;
(statearr_8956_8986[(2)] = inst_8928);

(statearr_8956_8986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (19))){
var inst_8915 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
var statearr_8957_8987 = state_8934__$1;
(statearr_8957_8987[(2)] = inst_8915);

(statearr_8957_8987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (11))){
var inst_8886 = (state_8934[(8)]);
var inst_8900 = (state_8934[(7)]);
var inst_8900__$1 = cljs.core.seq.call(null,inst_8886);
var state_8934__$1 = (function (){var statearr_8958 = state_8934;
(statearr_8958[(7)] = inst_8900__$1);

return statearr_8958;
})();
if(inst_8900__$1){
var statearr_8959_8988 = state_8934__$1;
(statearr_8959_8988[(1)] = (14));

} else {
var statearr_8960_8989 = state_8934__$1;
(statearr_8960_8989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (9))){
var inst_8922 = (state_8934[(2)]);
var inst_8923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_8934__$1 = (function (){var statearr_8961 = state_8934;
(statearr_8961[(15)] = inst_8922);

return statearr_8961;
})();
if(cljs.core.truth_(inst_8923)){
var statearr_8962_8990 = state_8934__$1;
(statearr_8962_8990[(1)] = (21));

} else {
var statearr_8963_8991 = state_8934__$1;
(statearr_8963_8991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (5))){
var inst_8878 = cljs.core.async.close_BANG_.call(null,out);
var state_8934__$1 = state_8934;
var statearr_8964_8992 = state_8934__$1;
(statearr_8964_8992[(2)] = inst_8878);

(statearr_8964_8992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (14))){
var inst_8900 = (state_8934[(7)]);
var inst_8902 = cljs.core.chunked_seq_QMARK_.call(null,inst_8900);
var state_8934__$1 = state_8934;
if(inst_8902){
var statearr_8965_8993 = state_8934__$1;
(statearr_8965_8993[(1)] = (17));

} else {
var statearr_8966_8994 = state_8934__$1;
(statearr_8966_8994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (16))){
var inst_8918 = (state_8934[(2)]);
var state_8934__$1 = state_8934;
var statearr_8967_8995 = state_8934__$1;
(statearr_8967_8995[(2)] = inst_8918);

(statearr_8967_8995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8935 === (10))){
var inst_8889 = (state_8934[(10)]);
var inst_8887 = (state_8934[(11)]);
var inst_8894 = cljs.core._nth.call(null,inst_8887,inst_8889);
var state_8934__$1 = state_8934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8934__$1,(13),out,inst_8894);
} else {
if((state_val_8935 === (18))){
var inst_8900 = (state_8934[(7)]);
var inst_8909 = cljs.core.first.call(null,inst_8900);
var state_8934__$1 = state_8934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8934__$1,(20),out,inst_8909);
} else {
if((state_val_8935 === (8))){
var inst_8888 = (state_8934[(9)]);
var inst_8889 = (state_8934[(10)]);
var inst_8891 = (inst_8889 < inst_8888);
var inst_8892 = inst_8891;
var state_8934__$1 = state_8934;
if(cljs.core.truth_(inst_8892)){
var statearr_8968_8996 = state_8934__$1;
(statearr_8968_8996[(1)] = (10));

} else {
var statearr_8969_8997 = state_8934__$1;
(statearr_8969_8997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto__))
;
return ((function (switch__7228__auto__,c__7318__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____0 = (function (){
var statearr_8970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__);

(statearr_8970[(1)] = (1));

return statearr_8970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____1 = (function (state_8934){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_8934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e8971){if((e8971 instanceof Object)){
var ex__7232__auto__ = e8971;
var statearr_8972_8998 = state_8934;
(statearr_8972_8998[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8999 = state_8934;
state_8934 = G__8999;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__ = function(state_8934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____1.call(this,state_8934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7229__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__))
})();
var state__7320__auto__ = (function (){var statearr_8973 = f__7319__auto__.call(null);
(statearr_8973[(6)] = c__7318__auto__);

return statearr_8973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__))
);

return c__7318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__9001 = arguments.length;
switch (G__9001) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__9004 = arguments.length;
switch (G__9004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__9007 = arguments.length;
switch (G__9007) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___9054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___9054,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___9054,out){
return (function (state_9031){
var state_val_9032 = (state_9031[(1)]);
if((state_val_9032 === (7))){
var inst_9026 = (state_9031[(2)]);
var state_9031__$1 = state_9031;
var statearr_9033_9055 = state_9031__$1;
(statearr_9033_9055[(2)] = inst_9026);

(statearr_9033_9055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (1))){
var inst_9008 = null;
var state_9031__$1 = (function (){var statearr_9034 = state_9031;
(statearr_9034[(7)] = inst_9008);

return statearr_9034;
})();
var statearr_9035_9056 = state_9031__$1;
(statearr_9035_9056[(2)] = null);

(statearr_9035_9056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (4))){
var inst_9011 = (state_9031[(8)]);
var inst_9011__$1 = (state_9031[(2)]);
var inst_9012 = (inst_9011__$1 == null);
var inst_9013 = cljs.core.not.call(null,inst_9012);
var state_9031__$1 = (function (){var statearr_9036 = state_9031;
(statearr_9036[(8)] = inst_9011__$1);

return statearr_9036;
})();
if(inst_9013){
var statearr_9037_9057 = state_9031__$1;
(statearr_9037_9057[(1)] = (5));

} else {
var statearr_9038_9058 = state_9031__$1;
(statearr_9038_9058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (6))){
var state_9031__$1 = state_9031;
var statearr_9039_9059 = state_9031__$1;
(statearr_9039_9059[(2)] = null);

(statearr_9039_9059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (3))){
var inst_9028 = (state_9031[(2)]);
var inst_9029 = cljs.core.async.close_BANG_.call(null,out);
var state_9031__$1 = (function (){var statearr_9040 = state_9031;
(statearr_9040[(9)] = inst_9028);

return statearr_9040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9031__$1,inst_9029);
} else {
if((state_val_9032 === (2))){
var state_9031__$1 = state_9031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9031__$1,(4),ch);
} else {
if((state_val_9032 === (11))){
var inst_9011 = (state_9031[(8)]);
var inst_9020 = (state_9031[(2)]);
var inst_9008 = inst_9011;
var state_9031__$1 = (function (){var statearr_9041 = state_9031;
(statearr_9041[(7)] = inst_9008);

(statearr_9041[(10)] = inst_9020);

return statearr_9041;
})();
var statearr_9042_9060 = state_9031__$1;
(statearr_9042_9060[(2)] = null);

(statearr_9042_9060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (9))){
var inst_9011 = (state_9031[(8)]);
var state_9031__$1 = state_9031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9031__$1,(11),out,inst_9011);
} else {
if((state_val_9032 === (5))){
var inst_9011 = (state_9031[(8)]);
var inst_9008 = (state_9031[(7)]);
var inst_9015 = cljs.core._EQ_.call(null,inst_9011,inst_9008);
var state_9031__$1 = state_9031;
if(inst_9015){
var statearr_9044_9061 = state_9031__$1;
(statearr_9044_9061[(1)] = (8));

} else {
var statearr_9045_9062 = state_9031__$1;
(statearr_9045_9062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (10))){
var inst_9023 = (state_9031[(2)]);
var state_9031__$1 = state_9031;
var statearr_9046_9063 = state_9031__$1;
(statearr_9046_9063[(2)] = inst_9023);

(statearr_9046_9063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9032 === (8))){
var inst_9008 = (state_9031[(7)]);
var tmp9043 = inst_9008;
var inst_9008__$1 = tmp9043;
var state_9031__$1 = (function (){var statearr_9047 = state_9031;
(statearr_9047[(7)] = inst_9008__$1);

return statearr_9047;
})();
var statearr_9048_9064 = state_9031__$1;
(statearr_9048_9064[(2)] = null);

(statearr_9048_9064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___9054,out))
;
return ((function (switch__7228__auto__,c__7318__auto___9054,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_9049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9049[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_9049[(1)] = (1));

return statearr_9049;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_9031){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_9031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e9050){if((e9050 instanceof Object)){
var ex__7232__auto__ = e9050;
var statearr_9051_9065 = state_9031;
(statearr_9051_9065[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9066 = state_9031;
state_9031 = G__9066;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_9031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_9031);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___9054,out))
})();
var state__7320__auto__ = (function (){var statearr_9052 = f__7319__auto__.call(null);
(statearr_9052[(6)] = c__7318__auto___9054);

return statearr_9052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___9054,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__9068 = arguments.length;
switch (G__9068) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___9134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___9134,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___9134,out){
return (function (state_9106){
var state_val_9107 = (state_9106[(1)]);
if((state_val_9107 === (7))){
var inst_9102 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
var statearr_9108_9135 = state_9106__$1;
(statearr_9108_9135[(2)] = inst_9102);

(statearr_9108_9135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (1))){
var inst_9069 = (new Array(n));
var inst_9070 = inst_9069;
var inst_9071 = (0);
var state_9106__$1 = (function (){var statearr_9109 = state_9106;
(statearr_9109[(7)] = inst_9070);

(statearr_9109[(8)] = inst_9071);

return statearr_9109;
})();
var statearr_9110_9136 = state_9106__$1;
(statearr_9110_9136[(2)] = null);

(statearr_9110_9136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (4))){
var inst_9074 = (state_9106[(9)]);
var inst_9074__$1 = (state_9106[(2)]);
var inst_9075 = (inst_9074__$1 == null);
var inst_9076 = cljs.core.not.call(null,inst_9075);
var state_9106__$1 = (function (){var statearr_9111 = state_9106;
(statearr_9111[(9)] = inst_9074__$1);

return statearr_9111;
})();
if(inst_9076){
var statearr_9112_9137 = state_9106__$1;
(statearr_9112_9137[(1)] = (5));

} else {
var statearr_9113_9138 = state_9106__$1;
(statearr_9113_9138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (15))){
var inst_9096 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
var statearr_9114_9139 = state_9106__$1;
(statearr_9114_9139[(2)] = inst_9096);

(statearr_9114_9139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (13))){
var state_9106__$1 = state_9106;
var statearr_9115_9140 = state_9106__$1;
(statearr_9115_9140[(2)] = null);

(statearr_9115_9140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (6))){
var inst_9071 = (state_9106[(8)]);
var inst_9092 = (inst_9071 > (0));
var state_9106__$1 = state_9106;
if(cljs.core.truth_(inst_9092)){
var statearr_9116_9141 = state_9106__$1;
(statearr_9116_9141[(1)] = (12));

} else {
var statearr_9117_9142 = state_9106__$1;
(statearr_9117_9142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (3))){
var inst_9104 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9106__$1,inst_9104);
} else {
if((state_val_9107 === (12))){
var inst_9070 = (state_9106[(7)]);
var inst_9094 = cljs.core.vec.call(null,inst_9070);
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9106__$1,(15),out,inst_9094);
} else {
if((state_val_9107 === (2))){
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9106__$1,(4),ch);
} else {
if((state_val_9107 === (11))){
var inst_9086 = (state_9106[(2)]);
var inst_9087 = (new Array(n));
var inst_9070 = inst_9087;
var inst_9071 = (0);
var state_9106__$1 = (function (){var statearr_9118 = state_9106;
(statearr_9118[(10)] = inst_9086);

(statearr_9118[(7)] = inst_9070);

(statearr_9118[(8)] = inst_9071);

return statearr_9118;
})();
var statearr_9119_9143 = state_9106__$1;
(statearr_9119_9143[(2)] = null);

(statearr_9119_9143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (9))){
var inst_9070 = (state_9106[(7)]);
var inst_9084 = cljs.core.vec.call(null,inst_9070);
var state_9106__$1 = state_9106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9106__$1,(11),out,inst_9084);
} else {
if((state_val_9107 === (5))){
var inst_9070 = (state_9106[(7)]);
var inst_9071 = (state_9106[(8)]);
var inst_9074 = (state_9106[(9)]);
var inst_9079 = (state_9106[(11)]);
var inst_9078 = (inst_9070[inst_9071] = inst_9074);
var inst_9079__$1 = (inst_9071 + (1));
var inst_9080 = (inst_9079__$1 < n);
var state_9106__$1 = (function (){var statearr_9120 = state_9106;
(statearr_9120[(12)] = inst_9078);

(statearr_9120[(11)] = inst_9079__$1);

return statearr_9120;
})();
if(cljs.core.truth_(inst_9080)){
var statearr_9121_9144 = state_9106__$1;
(statearr_9121_9144[(1)] = (8));

} else {
var statearr_9122_9145 = state_9106__$1;
(statearr_9122_9145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (14))){
var inst_9099 = (state_9106[(2)]);
var inst_9100 = cljs.core.async.close_BANG_.call(null,out);
var state_9106__$1 = (function (){var statearr_9124 = state_9106;
(statearr_9124[(13)] = inst_9099);

return statearr_9124;
})();
var statearr_9125_9146 = state_9106__$1;
(statearr_9125_9146[(2)] = inst_9100);

(statearr_9125_9146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (10))){
var inst_9090 = (state_9106[(2)]);
var state_9106__$1 = state_9106;
var statearr_9126_9147 = state_9106__$1;
(statearr_9126_9147[(2)] = inst_9090);

(statearr_9126_9147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9107 === (8))){
var inst_9070 = (state_9106[(7)]);
var inst_9079 = (state_9106[(11)]);
var tmp9123 = inst_9070;
var inst_9070__$1 = tmp9123;
var inst_9071 = inst_9079;
var state_9106__$1 = (function (){var statearr_9127 = state_9106;
(statearr_9127[(7)] = inst_9070__$1);

(statearr_9127[(8)] = inst_9071);

return statearr_9127;
})();
var statearr_9128_9148 = state_9106__$1;
(statearr_9128_9148[(2)] = null);

(statearr_9128_9148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___9134,out))
;
return ((function (switch__7228__auto__,c__7318__auto___9134,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_9129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9129[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_9129[(1)] = (1));

return statearr_9129;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_9106){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_9106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e9130){if((e9130 instanceof Object)){
var ex__7232__auto__ = e9130;
var statearr_9131_9149 = state_9106;
(statearr_9131_9149[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9150 = state_9106;
state_9106 = G__9150;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_9106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_9106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___9134,out))
})();
var state__7320__auto__ = (function (){var statearr_9132 = f__7319__auto__.call(null);
(statearr_9132[(6)] = c__7318__auto___9134);

return statearr_9132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___9134,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__9152 = arguments.length;
switch (G__9152) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7318__auto___9222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto___9222,out){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto___9222,out){
return (function (state_9194){
var state_val_9195 = (state_9194[(1)]);
if((state_val_9195 === (7))){
var inst_9190 = (state_9194[(2)]);
var state_9194__$1 = state_9194;
var statearr_9196_9223 = state_9194__$1;
(statearr_9196_9223[(2)] = inst_9190);

(statearr_9196_9223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (1))){
var inst_9153 = [];
var inst_9154 = inst_9153;
var inst_9155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9194__$1 = (function (){var statearr_9197 = state_9194;
(statearr_9197[(7)] = inst_9154);

(statearr_9197[(8)] = inst_9155);

return statearr_9197;
})();
var statearr_9198_9224 = state_9194__$1;
(statearr_9198_9224[(2)] = null);

(statearr_9198_9224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (4))){
var inst_9158 = (state_9194[(9)]);
var inst_9158__$1 = (state_9194[(2)]);
var inst_9159 = (inst_9158__$1 == null);
var inst_9160 = cljs.core.not.call(null,inst_9159);
var state_9194__$1 = (function (){var statearr_9199 = state_9194;
(statearr_9199[(9)] = inst_9158__$1);

return statearr_9199;
})();
if(inst_9160){
var statearr_9200_9225 = state_9194__$1;
(statearr_9200_9225[(1)] = (5));

} else {
var statearr_9201_9226 = state_9194__$1;
(statearr_9201_9226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (15))){
var inst_9184 = (state_9194[(2)]);
var state_9194__$1 = state_9194;
var statearr_9202_9227 = state_9194__$1;
(statearr_9202_9227[(2)] = inst_9184);

(statearr_9202_9227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (13))){
var state_9194__$1 = state_9194;
var statearr_9203_9228 = state_9194__$1;
(statearr_9203_9228[(2)] = null);

(statearr_9203_9228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (6))){
var inst_9154 = (state_9194[(7)]);
var inst_9179 = inst_9154.length;
var inst_9180 = (inst_9179 > (0));
var state_9194__$1 = state_9194;
if(cljs.core.truth_(inst_9180)){
var statearr_9204_9229 = state_9194__$1;
(statearr_9204_9229[(1)] = (12));

} else {
var statearr_9205_9230 = state_9194__$1;
(statearr_9205_9230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (3))){
var inst_9192 = (state_9194[(2)]);
var state_9194__$1 = state_9194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9194__$1,inst_9192);
} else {
if((state_val_9195 === (12))){
var inst_9154 = (state_9194[(7)]);
var inst_9182 = cljs.core.vec.call(null,inst_9154);
var state_9194__$1 = state_9194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9194__$1,(15),out,inst_9182);
} else {
if((state_val_9195 === (2))){
var state_9194__$1 = state_9194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9194__$1,(4),ch);
} else {
if((state_val_9195 === (11))){
var inst_9158 = (state_9194[(9)]);
var inst_9162 = (state_9194[(10)]);
var inst_9172 = (state_9194[(2)]);
var inst_9173 = [];
var inst_9174 = inst_9173.push(inst_9158);
var inst_9154 = inst_9173;
var inst_9155 = inst_9162;
var state_9194__$1 = (function (){var statearr_9206 = state_9194;
(statearr_9206[(11)] = inst_9172);

(statearr_9206[(12)] = inst_9174);

(statearr_9206[(7)] = inst_9154);

(statearr_9206[(8)] = inst_9155);

return statearr_9206;
})();
var statearr_9207_9231 = state_9194__$1;
(statearr_9207_9231[(2)] = null);

(statearr_9207_9231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (9))){
var inst_9154 = (state_9194[(7)]);
var inst_9170 = cljs.core.vec.call(null,inst_9154);
var state_9194__$1 = state_9194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9194__$1,(11),out,inst_9170);
} else {
if((state_val_9195 === (5))){
var inst_9158 = (state_9194[(9)]);
var inst_9162 = (state_9194[(10)]);
var inst_9155 = (state_9194[(8)]);
var inst_9162__$1 = f.call(null,inst_9158);
var inst_9163 = cljs.core._EQ_.call(null,inst_9162__$1,inst_9155);
var inst_9164 = cljs.core.keyword_identical_QMARK_.call(null,inst_9155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9165 = ((inst_9163) || (inst_9164));
var state_9194__$1 = (function (){var statearr_9208 = state_9194;
(statearr_9208[(10)] = inst_9162__$1);

return statearr_9208;
})();
if(cljs.core.truth_(inst_9165)){
var statearr_9209_9232 = state_9194__$1;
(statearr_9209_9232[(1)] = (8));

} else {
var statearr_9210_9233 = state_9194__$1;
(statearr_9210_9233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (14))){
var inst_9187 = (state_9194[(2)]);
var inst_9188 = cljs.core.async.close_BANG_.call(null,out);
var state_9194__$1 = (function (){var statearr_9212 = state_9194;
(statearr_9212[(13)] = inst_9187);

return statearr_9212;
})();
var statearr_9213_9234 = state_9194__$1;
(statearr_9213_9234[(2)] = inst_9188);

(statearr_9213_9234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (10))){
var inst_9177 = (state_9194[(2)]);
var state_9194__$1 = state_9194;
var statearr_9214_9235 = state_9194__$1;
(statearr_9214_9235[(2)] = inst_9177);

(statearr_9214_9235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9195 === (8))){
var inst_9158 = (state_9194[(9)]);
var inst_9162 = (state_9194[(10)]);
var inst_9154 = (state_9194[(7)]);
var inst_9167 = inst_9154.push(inst_9158);
var tmp9211 = inst_9154;
var inst_9154__$1 = tmp9211;
var inst_9155 = inst_9162;
var state_9194__$1 = (function (){var statearr_9215 = state_9194;
(statearr_9215[(14)] = inst_9167);

(statearr_9215[(7)] = inst_9154__$1);

(statearr_9215[(8)] = inst_9155);

return statearr_9215;
})();
var statearr_9216_9236 = state_9194__$1;
(statearr_9216_9236[(2)] = null);

(statearr_9216_9236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7318__auto___9222,out))
;
return ((function (switch__7228__auto__,c__7318__auto___9222,out){
return (function() {
var cljs$core$async$state_machine__7229__auto__ = null;
var cljs$core$async$state_machine__7229__auto____0 = (function (){
var statearr_9217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9217[(0)] = cljs$core$async$state_machine__7229__auto__);

(statearr_9217[(1)] = (1));

return statearr_9217;
});
var cljs$core$async$state_machine__7229__auto____1 = (function (state_9194){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_9194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e9218){if((e9218 instanceof Object)){
var ex__7232__auto__ = e9218;
var statearr_9219_9237 = state_9194;
(statearr_9219_9237[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9238 = state_9194;
state_9194 = G__9238;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
cljs$core$async$state_machine__7229__auto__ = function(state_9194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7229__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7229__auto____1.call(this,state_9194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7229__auto____0;
cljs$core$async$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7229__auto____1;
return cljs$core$async$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto___9222,out))
})();
var state__7320__auto__ = (function (){var statearr_9220 = f__7319__auto__.call(null);
(statearr_9220[(6)] = c__7318__auto___9222);

return statearr_9220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto___9222,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
