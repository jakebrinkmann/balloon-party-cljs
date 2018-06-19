// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__3281 = s;
var map__3281__$1 = ((((!((map__3281 == null)))?(((((map__3281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3281):map__3281);
var name = cljs.core.get.call(null,map__3281__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3281__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__3284 = info;
var map__3285 = G__3284;
var map__3285__$1 = ((((!((map__3285 == null)))?(((((map__3285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3285):map__3285);
var shadow = cljs.core.get.call(null,map__3285__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__3284__$1 = G__3284;
while(true){
var d__$2 = d__$1;
var map__3287 = G__3284__$1;
var map__3287__$1 = ((((!((map__3287 == null)))?(((((map__3287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3287):map__3287);
var shadow__$1 = cljs.core.get.call(null,map__3287__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__3289 = (d__$2 + (1));
var G__3290 = shadow__$1;
d__$1 = G__3289;
G__3284__$1 = G__3290;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__3291){
var map__3292 = p__3291;
var map__3292__$1 = ((((!((map__3292 == null)))?(((((map__3292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3292):map__3292);
var name_var = map__3292__$1;
var name = cljs.core.get.call(null,map__3292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3292__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__3294 = info;
var map__3294__$1 = ((((!((map__3294 == null)))?(((((map__3294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3294):map__3294);
var ns = cljs.core.get.call(null,map__3294__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__3294__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__3297 = arguments.length;
switch (G__3297) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__3299 = cp;
switch (G__3299) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__3301_3305 = cljs.core.seq.call(null,s);
var chunk__3302_3306 = null;
var count__3303_3307 = (0);
var i__3304_3308 = (0);
while(true){
if((i__3304_3308 < count__3303_3307)){
var c_3309 = cljs.core._nth.call(null,chunk__3302_3306,i__3304_3308);
sb.append(cljs.compiler.escape_char.call(null,c_3309));


var G__3310 = seq__3301_3305;
var G__3311 = chunk__3302_3306;
var G__3312 = count__3303_3307;
var G__3313 = (i__3304_3308 + (1));
seq__3301_3305 = G__3310;
chunk__3302_3306 = G__3311;
count__3303_3307 = G__3312;
i__3304_3308 = G__3313;
continue;
} else {
var temp__5457__auto___3314 = cljs.core.seq.call(null,seq__3301_3305);
if(temp__5457__auto___3314){
var seq__3301_3315__$1 = temp__5457__auto___3314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3301_3315__$1)){
var c__4319__auto___3316 = cljs.core.chunk_first.call(null,seq__3301_3315__$1);
var G__3317 = cljs.core.chunk_rest.call(null,seq__3301_3315__$1);
var G__3318 = c__4319__auto___3316;
var G__3319 = cljs.core.count.call(null,c__4319__auto___3316);
var G__3320 = (0);
seq__3301_3305 = G__3317;
chunk__3302_3306 = G__3318;
count__3303_3307 = G__3319;
i__3304_3308 = G__3320;
continue;
} else {
var c_3321 = cljs.core.first.call(null,seq__3301_3315__$1);
sb.append(cljs.compiler.escape_char.call(null,c_3321));


var G__3322 = cljs.core.next.call(null,seq__3301_3315__$1);
var G__3323 = null;
var G__3324 = (0);
var G__3325 = (0);
seq__3301_3305 = G__3322;
chunk__3302_3306 = G__3323;
count__3303_3307 = G__3324;
i__3304_3308 = G__3325;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__1675__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__1675__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__3326_3331 = ast;
var map__3326_3332__$1 = ((((!((map__3326_3331 == null)))?(((((map__3326_3331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3326_3331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3326_3331):map__3326_3331);
var env_3333 = cljs.core.get.call(null,map__3326_3332__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_3333))){
var map__3328_3334 = env_3333;
var map__3328_3335__$1 = ((((!((map__3328_3334 == null)))?(((((map__3328_3334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3328_3334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3328_3334):map__3328_3334);
var line_3336 = cljs.core.get.call(null,map__3328_3335__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_3337 = cljs.core.get.call(null,map__3328_3335__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__){
return (function (m){
var minfo = (function (){var G__3330 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__3330,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__3330;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_3336 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_3337)?(column_3337 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__3328_3334,map__3328_3335__$1,line_3336,column_3337,map__3326_3331,map__3326_3332__$1,env_3333,val__1675__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__1675__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3344 = arguments.length;
var i__4500__auto___3345 = (0);
while(true){
if((i__4500__auto___3345 < len__4499__auto___3344)){
args__4502__auto__.push((arguments[i__4500__auto___3345]));

var G__3346 = (i__4500__auto___3345 + (1));
i__4500__auto___3345 = G__3346;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__3340_3347 = cljs.core.seq.call(null,xs);
var chunk__3341_3348 = null;
var count__3342_3349 = (0);
var i__3343_3350 = (0);
while(true){
if((i__3343_3350 < count__3342_3349)){
var x_3351 = cljs.core._nth.call(null,chunk__3341_3348,i__3343_3350);
if((x_3351 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3351)){
cljs.compiler.emit.call(null,x_3351);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3351)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3351);
} else {
if(goog.isFunction(x_3351)){
x_3351.call(null);
} else {
var s_3352 = cljs.core.print_str.call(null,x_3351);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3340_3347,chunk__3341_3348,count__3342_3349,i__3343_3350,s_3352,x_3351){
return (function (p1__3338_SHARP_){
return (p1__3338_SHARP_ + cljs.core.count.call(null,s_3352));
});})(seq__3340_3347,chunk__3341_3348,count__3342_3349,i__3343_3350,s_3352,x_3351))
);
}

cljs.core.print.call(null,s_3352);

}
}
}
}


var G__3353 = seq__3340_3347;
var G__3354 = chunk__3341_3348;
var G__3355 = count__3342_3349;
var G__3356 = (i__3343_3350 + (1));
seq__3340_3347 = G__3353;
chunk__3341_3348 = G__3354;
count__3342_3349 = G__3355;
i__3343_3350 = G__3356;
continue;
} else {
var temp__5457__auto___3357 = cljs.core.seq.call(null,seq__3340_3347);
if(temp__5457__auto___3357){
var seq__3340_3358__$1 = temp__5457__auto___3357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3340_3358__$1)){
var c__4319__auto___3359 = cljs.core.chunk_first.call(null,seq__3340_3358__$1);
var G__3360 = cljs.core.chunk_rest.call(null,seq__3340_3358__$1);
var G__3361 = c__4319__auto___3359;
var G__3362 = cljs.core.count.call(null,c__4319__auto___3359);
var G__3363 = (0);
seq__3340_3347 = G__3360;
chunk__3341_3348 = G__3361;
count__3342_3349 = G__3362;
i__3343_3350 = G__3363;
continue;
} else {
var x_3364 = cljs.core.first.call(null,seq__3340_3358__$1);
if((x_3364 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_3364)){
cljs.compiler.emit.call(null,x_3364);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_3364)){
cljs.core.apply.call(null,cljs.compiler.emits,x_3364);
} else {
if(goog.isFunction(x_3364)){
x_3364.call(null);
} else {
var s_3365 = cljs.core.print_str.call(null,x_3364);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__3340_3347,chunk__3341_3348,count__3342_3349,i__3343_3350,s_3365,x_3364,seq__3340_3358__$1,temp__5457__auto___3357){
return (function (p1__3338_SHARP_){
return (p1__3338_SHARP_ + cljs.core.count.call(null,s_3365));
});})(seq__3340_3347,chunk__3341_3348,count__3342_3349,i__3343_3350,s_3365,x_3364,seq__3340_3358__$1,temp__5457__auto___3357))
);
}

cljs.core.print.call(null,s_3365);

}
}
}
}


var G__3366 = cljs.core.next.call(null,seq__3340_3358__$1);
var G__3367 = null;
var G__3368 = (0);
var G__3369 = (0);
seq__3340_3347 = G__3366;
chunk__3341_3348 = G__3367;
count__3342_3349 = G__3368;
i__3343_3350 = G__3369;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq3339){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3339));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3375 = arguments.length;
var i__4500__auto___3376 = (0);
while(true){
if((i__4500__auto___3376 < len__4499__auto___3375)){
args__4502__auto__.push((arguments[i__4500__auto___3376]));

var G__3377 = (i__4500__auto___3376 + (1));
i__4500__auto___3376 = G__3377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_3371_3378 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_3371_3378;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__3372){
var map__3373 = p__3372;
var map__3373__$1 = ((((!((map__3373 == null)))?(((((map__3373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3373):map__3373);
var m = map__3373__$1;
var gen_line = cljs.core.get.call(null,map__3373__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq3370){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3370));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_3379_3381 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_3380_3382 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_3379_3381,_STAR_print_fn_STAR_3380_3382,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_3379_3381,_STAR_print_fn_STAR_3380_3382,sb__4430__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_3380_3382;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_3379_3381;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__3383 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__3383,(0),null);
var flags = cljs.core.nth.call(null,vec__3383,(1),null);
var pattern = cljs.core.nth.call(null,vec__3383,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3911__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__3387){
var map__3388 = p__3387;
var map__3388__$1 = ((((!((map__3388 == null)))?(((((map__3388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3388):map__3388);
var ast = map__3388__$1;
var info = cljs.core.get.call(null,map__3388__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__3388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__3388__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__3390 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__3390__$1 = ((((!((map__3390 == null)))?(((((map__3390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3390):map__3390);
var cenv = map__3390__$1;
var options = cljs.core.get.call(null,map__3390__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3922__auto__ = js_module_name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__3392 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3911__auto__;
}
})())){
return clojure.set.difference.call(null,G__3392,cljs.analyzer.es5_allowed);
} else {
return G__3392;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3922__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__3393 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__3393,reserved);
} else {
return G__3393;
}
})();
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__3394_3395 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__3394_3396__$1 = (((G__3394_3395 instanceof cljs.core.Keyword))?G__3394_3395.fqn:null);
switch (G__3394_3396__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__3398){
var map__3399 = p__3398;
var map__3399__$1 = ((((!((map__3399 == null)))?(((((map__3399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3399):map__3399);
var arg = map__3399__$1;
var env = cljs.core.get.call(null,map__3399__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__3399__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__3399__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__3399__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__3401 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__3401__$1 = ((((!((map__3401 == null)))?(((((map__3401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3401):map__3401);
var name = cljs.core.get.call(null,map__3401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__3403){
var map__3404 = p__3403;
var map__3404__$1 = ((((!((map__3404 == null)))?(((((map__3404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3404):map__3404);
var expr = cljs.core.get.call(null,map__3404__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__3404__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__3404__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__3406_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3406_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__3407){
var map__3408 = p__3407;
var map__3408__$1 = ((((!((map__3408 == null)))?(((((map__3408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3408):map__3408);
var env = cljs.core.get.call(null,map__3408__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__3408__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3408__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__3410){
var map__3411 = p__3410;
var map__3411__$1 = ((((!((map__3411 == null)))?(((((map__3411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3411):map__3411);
var items = cljs.core.get.call(null,map__3411__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__3413){
var map__3414 = p__3413;
var map__3414__$1 = ((((!((map__3414 == null)))?(((((map__3414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3414):map__3414);
var items = cljs.core.get.call(null,map__3414__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3414__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_3416 = cljs.core.count.call(null,items);
if((cnt_3416 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_3416,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__3417_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3417_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__3418){
var map__3419 = p__3418;
var map__3419__$1 = ((((!((map__3419 == null)))?(((((map__3419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3419):map__3419);
var items = cljs.core.get.call(null,map__3419__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3419__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__3421){
var map__3422 = p__3421;
var map__3422__$1 = ((((!((map__3422 == null)))?(((((map__3422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3422):map__3422);
var items = cljs.core.get.call(null,map__3422__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__3422__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__3422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___3440 = cljs.core.seq.call(null,items);
if(temp__5457__auto___3440){
var items_3441__$1 = temp__5457__auto___3440;
var vec__3424_3442 = items_3441__$1;
var seq__3425_3443 = cljs.core.seq.call(null,vec__3424_3442);
var first__3426_3444 = cljs.core.first.call(null,seq__3425_3443);
var seq__3425_3445__$1 = cljs.core.next.call(null,seq__3425_3443);
var vec__3427_3446 = first__3426_3444;
var k_3447 = cljs.core.nth.call(null,vec__3427_3446,(0),null);
var v_3448 = cljs.core.nth.call(null,vec__3427_3446,(1),null);
var r_3449 = seq__3425_3445__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_3447),"\": ",v_3448);

var seq__3430_3450 = cljs.core.seq.call(null,r_3449);
var chunk__3431_3451 = null;
var count__3432_3452 = (0);
var i__3433_3453 = (0);
while(true){
if((i__3433_3453 < count__3432_3452)){
var vec__3434_3454 = cljs.core._nth.call(null,chunk__3431_3451,i__3433_3453);
var k_3455__$1 = cljs.core.nth.call(null,vec__3434_3454,(0),null);
var v_3456__$1 = cljs.core.nth.call(null,vec__3434_3454,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3455__$1),"\": ",v_3456__$1);


var G__3457 = seq__3430_3450;
var G__3458 = chunk__3431_3451;
var G__3459 = count__3432_3452;
var G__3460 = (i__3433_3453 + (1));
seq__3430_3450 = G__3457;
chunk__3431_3451 = G__3458;
count__3432_3452 = G__3459;
i__3433_3453 = G__3460;
continue;
} else {
var temp__5457__auto___3461__$1 = cljs.core.seq.call(null,seq__3430_3450);
if(temp__5457__auto___3461__$1){
var seq__3430_3462__$1 = temp__5457__auto___3461__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3430_3462__$1)){
var c__4319__auto___3463 = cljs.core.chunk_first.call(null,seq__3430_3462__$1);
var G__3464 = cljs.core.chunk_rest.call(null,seq__3430_3462__$1);
var G__3465 = c__4319__auto___3463;
var G__3466 = cljs.core.count.call(null,c__4319__auto___3463);
var G__3467 = (0);
seq__3430_3450 = G__3464;
chunk__3431_3451 = G__3465;
count__3432_3452 = G__3466;
i__3433_3453 = G__3467;
continue;
} else {
var vec__3437_3468 = cljs.core.first.call(null,seq__3430_3462__$1);
var k_3469__$1 = cljs.core.nth.call(null,vec__3437_3468,(0),null);
var v_3470__$1 = cljs.core.nth.call(null,vec__3437_3468,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3469__$1),"\": ",v_3470__$1);


var G__3471 = cljs.core.next.call(null,seq__3430_3462__$1);
var G__3472 = null;
var G__3473 = (0);
var G__3474 = (0);
seq__3430_3450 = G__3471;
chunk__3431_3451 = G__3472;
count__3432_3452 = G__3473;
i__3433_3453 = G__3474;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__3475){
var map__3476 = p__3475;
var map__3476__$1 = ((((!((map__3476 == null)))?(((((map__3476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3476):map__3476);
var items = cljs.core.get.call(null,map__3476__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__3476__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__3476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3476__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__3478){
var map__3479 = p__3478;
var map__3479__$1 = ((((!((map__3479 == null)))?(((((map__3479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3479):map__3479);
var form = cljs.core.get.call(null,map__3479__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__3479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__3481){
var map__3482 = p__3481;
var map__3482__$1 = ((((!((map__3482 == null)))?(((((map__3482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3482):map__3482);
var op = cljs.core.get.call(null,map__3482__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3482__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3482__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = (function (){var and__3911__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__3911__auto__){
var and__3911__auto____$1 = form;
if(cljs.core.truth_(and__3911__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__3484){
var map__3485 = p__3484;
var map__3485__$1 = ((((!((map__3485 == null)))?(((((map__3485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3485):map__3485);
var op = cljs.core.get.call(null,map__3485__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3485__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3485__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3922__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (((form === false) || ((form == null)))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = !((const_expr == null));
if(and__3911__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3911__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__3487){
var map__3488 = p__3487;
var map__3488__$1 = ((((!((map__3488 == null)))?(((((map__3488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3488):map__3488);
var test = cljs.core.get.call(null,map__3488__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__3488__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__3488__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__3488__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__3488__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3922__auto__ = unchecked;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__3490){
var map__3491 = p__3490;
var map__3491__$1 = ((((!((map__3491 == null)))?(((((map__3491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3491):map__3491);
var v = cljs.core.get.call(null,map__3491__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__3491__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__3491__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__3491__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__3491__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__3493_3511 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__3494_3512 = null;
var count__3495_3513 = (0);
var i__3496_3514 = (0);
while(true){
if((i__3496_3514 < count__3495_3513)){
var vec__3497_3515 = cljs.core._nth.call(null,chunk__3494_3512,i__3496_3514);
var ts_3516 = cljs.core.nth.call(null,vec__3497_3515,(0),null);
var then_3517 = cljs.core.nth.call(null,vec__3497_3515,(1),null);
var seq__3500_3518 = cljs.core.seq.call(null,ts_3516);
var chunk__3501_3519 = null;
var count__3502_3520 = (0);
var i__3503_3521 = (0);
while(true){
if((i__3503_3521 < count__3502_3520)){
var test_3522 = cljs.core._nth.call(null,chunk__3501_3519,i__3503_3521);
cljs.compiler.emitln.call(null,"case ",test_3522,":");


var G__3523 = seq__3500_3518;
var G__3524 = chunk__3501_3519;
var G__3525 = count__3502_3520;
var G__3526 = (i__3503_3521 + (1));
seq__3500_3518 = G__3523;
chunk__3501_3519 = G__3524;
count__3502_3520 = G__3525;
i__3503_3521 = G__3526;
continue;
} else {
var temp__5457__auto___3527 = cljs.core.seq.call(null,seq__3500_3518);
if(temp__5457__auto___3527){
var seq__3500_3528__$1 = temp__5457__auto___3527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3500_3528__$1)){
var c__4319__auto___3529 = cljs.core.chunk_first.call(null,seq__3500_3528__$1);
var G__3530 = cljs.core.chunk_rest.call(null,seq__3500_3528__$1);
var G__3531 = c__4319__auto___3529;
var G__3532 = cljs.core.count.call(null,c__4319__auto___3529);
var G__3533 = (0);
seq__3500_3518 = G__3530;
chunk__3501_3519 = G__3531;
count__3502_3520 = G__3532;
i__3503_3521 = G__3533;
continue;
} else {
var test_3534 = cljs.core.first.call(null,seq__3500_3528__$1);
cljs.compiler.emitln.call(null,"case ",test_3534,":");


var G__3535 = cljs.core.next.call(null,seq__3500_3528__$1);
var G__3536 = null;
var G__3537 = (0);
var G__3538 = (0);
seq__3500_3518 = G__3535;
chunk__3501_3519 = G__3536;
count__3502_3520 = G__3537;
i__3503_3521 = G__3538;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3517);
} else {
cljs.compiler.emitln.call(null,then_3517);
}

cljs.compiler.emitln.call(null,"break;");


var G__3539 = seq__3493_3511;
var G__3540 = chunk__3494_3512;
var G__3541 = count__3495_3513;
var G__3542 = (i__3496_3514 + (1));
seq__3493_3511 = G__3539;
chunk__3494_3512 = G__3540;
count__3495_3513 = G__3541;
i__3496_3514 = G__3542;
continue;
} else {
var temp__5457__auto___3543 = cljs.core.seq.call(null,seq__3493_3511);
if(temp__5457__auto___3543){
var seq__3493_3544__$1 = temp__5457__auto___3543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3493_3544__$1)){
var c__4319__auto___3545 = cljs.core.chunk_first.call(null,seq__3493_3544__$1);
var G__3546 = cljs.core.chunk_rest.call(null,seq__3493_3544__$1);
var G__3547 = c__4319__auto___3545;
var G__3548 = cljs.core.count.call(null,c__4319__auto___3545);
var G__3549 = (0);
seq__3493_3511 = G__3546;
chunk__3494_3512 = G__3547;
count__3495_3513 = G__3548;
i__3496_3514 = G__3549;
continue;
} else {
var vec__3504_3550 = cljs.core.first.call(null,seq__3493_3544__$1);
var ts_3551 = cljs.core.nth.call(null,vec__3504_3550,(0),null);
var then_3552 = cljs.core.nth.call(null,vec__3504_3550,(1),null);
var seq__3507_3553 = cljs.core.seq.call(null,ts_3551);
var chunk__3508_3554 = null;
var count__3509_3555 = (0);
var i__3510_3556 = (0);
while(true){
if((i__3510_3556 < count__3509_3555)){
var test_3557 = cljs.core._nth.call(null,chunk__3508_3554,i__3510_3556);
cljs.compiler.emitln.call(null,"case ",test_3557,":");


var G__3558 = seq__3507_3553;
var G__3559 = chunk__3508_3554;
var G__3560 = count__3509_3555;
var G__3561 = (i__3510_3556 + (1));
seq__3507_3553 = G__3558;
chunk__3508_3554 = G__3559;
count__3509_3555 = G__3560;
i__3510_3556 = G__3561;
continue;
} else {
var temp__5457__auto___3562__$1 = cljs.core.seq.call(null,seq__3507_3553);
if(temp__5457__auto___3562__$1){
var seq__3507_3563__$1 = temp__5457__auto___3562__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3507_3563__$1)){
var c__4319__auto___3564 = cljs.core.chunk_first.call(null,seq__3507_3563__$1);
var G__3565 = cljs.core.chunk_rest.call(null,seq__3507_3563__$1);
var G__3566 = c__4319__auto___3564;
var G__3567 = cljs.core.count.call(null,c__4319__auto___3564);
var G__3568 = (0);
seq__3507_3553 = G__3565;
chunk__3508_3554 = G__3566;
count__3509_3555 = G__3567;
i__3510_3556 = G__3568;
continue;
} else {
var test_3569 = cljs.core.first.call(null,seq__3507_3563__$1);
cljs.compiler.emitln.call(null,"case ",test_3569,":");


var G__3570 = cljs.core.next.call(null,seq__3507_3563__$1);
var G__3571 = null;
var G__3572 = (0);
var G__3573 = (0);
seq__3507_3553 = G__3570;
chunk__3508_3554 = G__3571;
count__3509_3555 = G__3572;
i__3510_3556 = G__3573;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3552);
} else {
cljs.compiler.emitln.call(null,then_3552);
}

cljs.compiler.emitln.call(null,"break;");


var G__3574 = cljs.core.next.call(null,seq__3493_3544__$1);
var G__3575 = null;
var G__3576 = (0);
var G__3577 = (0);
seq__3493_3511 = G__3574;
chunk__3494_3512 = G__3575;
count__3495_3513 = G__3576;
i__3496_3514 = G__3577;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__3578){
var map__3579 = p__3578;
var map__3579__$1 = ((((!((map__3579 == null)))?(((((map__3579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3579):map__3579);
var throw$ = cljs.core.get.call(null,map__3579__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__3579__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__3582 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__3582,(0),null);
var rstr = cljs.core.nth.call(null,vec__3582,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__3582,fstr,rstr,ret_t,axstr){
return (function (p1__3581_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3581_SHARP_);
});})(idx,vec__3582,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__3585 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3585),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__3585;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__3586_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3586_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__3587 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3588 = cljs.core.seq.call(null,vec__3587);
var first__3589 = cljs.core.first.call(null,seq__3588);
var seq__3588__$1 = cljs.core.next.call(null,seq__3588);
var p = first__3589;
var first__3589__$1 = cljs.core.first.call(null,seq__3588__$1);
var seq__3588__$2 = cljs.core.next.call(null,seq__3588__$1);
var ts = first__3589__$1;
var first__3589__$2 = cljs.core.first.call(null,seq__3588__$2);
var seq__3588__$3 = cljs.core.next.call(null,seq__3588__$2);
var n = first__3589__$2;
var xs = seq__3588__$3;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__3590 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3591 = cljs.core.seq.call(null,vec__3590);
var first__3592 = cljs.core.first.call(null,seq__3591);
var seq__3591__$1 = cljs.core.next.call(null,seq__3591);
var p = first__3592;
var first__3592__$1 = cljs.core.first.call(null,seq__3591__$1);
var seq__3591__$2 = cljs.core.next.call(null,seq__3591__$1);
var ts = first__3592__$1;
var xs = seq__3591__$2;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3911__auto__){
var and__3911__auto____$1 = ts;
if(cljs.core.truth_(and__3911__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__3595 = arguments.length;
switch (G__3595) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__3603 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__3593_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__3593_SHARP_);
} else {
return p1__3593_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__3604 = cljs.core.seq.call(null,vec__3603);
var first__3605 = cljs.core.first.call(null,seq__3604);
var seq__3604__$1 = cljs.core.next.call(null,seq__3604);
var x = first__3605;
var ys = seq__3604__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__3606 = cljs.core.seq.call(null,ys);
var chunk__3607 = null;
var count__3608 = (0);
var i__3609 = (0);
while(true){
if((i__3609 < count__3608)){
var next_line = cljs.core._nth.call(null,chunk__3607,i__3609);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3615 = seq__3606;
var G__3616 = chunk__3607;
var G__3617 = count__3608;
var G__3618 = (i__3609 + (1));
seq__3606 = G__3615;
chunk__3607 = G__3616;
count__3608 = G__3617;
i__3609 = G__3618;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__3606);
if(temp__5457__auto__){
var seq__3606__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3606__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3606__$1);
var G__3619 = cljs.core.chunk_rest.call(null,seq__3606__$1);
var G__3620 = c__4319__auto__;
var G__3621 = cljs.core.count.call(null,c__4319__auto__);
var G__3622 = (0);
seq__3606 = G__3619;
chunk__3607 = G__3620;
count__3608 = G__3621;
i__3609 = G__3622;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__3606__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3623 = cljs.core.next.call(null,seq__3606__$1);
var G__3624 = null;
var G__3625 = (0);
var G__3626 = (0);
seq__3606 = G__3623;
chunk__3607 = G__3624;
count__3608 = G__3625;
i__3609 = G__3626;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__3610_3627 = cljs.core.seq.call(null,docs__$2);
var chunk__3611_3628 = null;
var count__3612_3629 = (0);
var i__3613_3630 = (0);
while(true){
if((i__3613_3630 < count__3612_3629)){
var e_3631 = cljs.core._nth.call(null,chunk__3611_3628,i__3613_3630);
if(cljs.core.truth_(e_3631)){
print_comment_lines.call(null,e_3631);
} else {
}


var G__3632 = seq__3610_3627;
var G__3633 = chunk__3611_3628;
var G__3634 = count__3612_3629;
var G__3635 = (i__3613_3630 + (1));
seq__3610_3627 = G__3632;
chunk__3611_3628 = G__3633;
count__3612_3629 = G__3634;
i__3613_3630 = G__3635;
continue;
} else {
var temp__5457__auto___3636 = cljs.core.seq.call(null,seq__3610_3627);
if(temp__5457__auto___3636){
var seq__3610_3637__$1 = temp__5457__auto___3636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3610_3637__$1)){
var c__4319__auto___3638 = cljs.core.chunk_first.call(null,seq__3610_3637__$1);
var G__3639 = cljs.core.chunk_rest.call(null,seq__3610_3637__$1);
var G__3640 = c__4319__auto___3638;
var G__3641 = cljs.core.count.call(null,c__4319__auto___3638);
var G__3642 = (0);
seq__3610_3627 = G__3639;
chunk__3611_3628 = G__3640;
count__3612_3629 = G__3641;
i__3613_3630 = G__3642;
continue;
} else {
var e_3643 = cljs.core.first.call(null,seq__3610_3637__$1);
if(cljs.core.truth_(e_3643)){
print_comment_lines.call(null,e_3643);
} else {
}


var G__3644 = cljs.core.next.call(null,seq__3610_3637__$1);
var G__3645 = null;
var G__3646 = (0);
var G__3647 = (0);
seq__3610_3627 = G__3644;
chunk__3611_3628 = G__3645;
count__3612_3629 = G__3646;
i__3613_3630 = G__3647;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3911__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__3649_SHARP_){
return goog.string.startsWith(p1__3649_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = opts;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3911__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__3650){
var map__3651 = p__3650;
var map__3651__$1 = ((((!((map__3651 == null)))?(((((map__3651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3651):map__3651);
var name = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__3651__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3922__auto__ = init;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3911__auto__){
return test;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__3653){
var map__3654 = p__3653;
var map__3654__$1 = ((((!((map__3654 == null)))?(((((map__3654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3654):map__3654);
var name = cljs.core.get.call(null,map__3654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3654__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__3656_3674 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__3657_3675 = null;
var count__3658_3676 = (0);
var i__3659_3677 = (0);
while(true){
if((i__3659_3677 < count__3658_3676)){
var vec__3660_3678 = cljs.core._nth.call(null,chunk__3657_3675,i__3659_3677);
var i_3679 = cljs.core.nth.call(null,vec__3660_3678,(0),null);
var param_3680 = cljs.core.nth.call(null,vec__3660_3678,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3680);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3681 = seq__3656_3674;
var G__3682 = chunk__3657_3675;
var G__3683 = count__3658_3676;
var G__3684 = (i__3659_3677 + (1));
seq__3656_3674 = G__3681;
chunk__3657_3675 = G__3682;
count__3658_3676 = G__3683;
i__3659_3677 = G__3684;
continue;
} else {
var temp__5457__auto___3685 = cljs.core.seq.call(null,seq__3656_3674);
if(temp__5457__auto___3685){
var seq__3656_3686__$1 = temp__5457__auto___3685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3656_3686__$1)){
var c__4319__auto___3687 = cljs.core.chunk_first.call(null,seq__3656_3686__$1);
var G__3688 = cljs.core.chunk_rest.call(null,seq__3656_3686__$1);
var G__3689 = c__4319__auto___3687;
var G__3690 = cljs.core.count.call(null,c__4319__auto___3687);
var G__3691 = (0);
seq__3656_3674 = G__3688;
chunk__3657_3675 = G__3689;
count__3658_3676 = G__3690;
i__3659_3677 = G__3691;
continue;
} else {
var vec__3663_3692 = cljs.core.first.call(null,seq__3656_3686__$1);
var i_3693 = cljs.core.nth.call(null,vec__3663_3692,(0),null);
var param_3694 = cljs.core.nth.call(null,vec__3663_3692,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3694);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3695 = cljs.core.next.call(null,seq__3656_3686__$1);
var G__3696 = null;
var G__3697 = (0);
var G__3698 = (0);
seq__3656_3674 = G__3695;
chunk__3657_3675 = G__3696;
count__3658_3676 = G__3697;
i__3659_3677 = G__3698;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3666_3699 = cljs.core.seq.call(null,params);
var chunk__3667_3700 = null;
var count__3668_3701 = (0);
var i__3669_3702 = (0);
while(true){
if((i__3669_3702 < count__3668_3701)){
var param_3703 = cljs.core._nth.call(null,chunk__3667_3700,i__3669_3702);
cljs.compiler.emit.call(null,param_3703);

if(cljs.core._EQ_.call(null,param_3703,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3704 = seq__3666_3699;
var G__3705 = chunk__3667_3700;
var G__3706 = count__3668_3701;
var G__3707 = (i__3669_3702 + (1));
seq__3666_3699 = G__3704;
chunk__3667_3700 = G__3705;
count__3668_3701 = G__3706;
i__3669_3702 = G__3707;
continue;
} else {
var temp__5457__auto___3708 = cljs.core.seq.call(null,seq__3666_3699);
if(temp__5457__auto___3708){
var seq__3666_3709__$1 = temp__5457__auto___3708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3666_3709__$1)){
var c__4319__auto___3710 = cljs.core.chunk_first.call(null,seq__3666_3709__$1);
var G__3711 = cljs.core.chunk_rest.call(null,seq__3666_3709__$1);
var G__3712 = c__4319__auto___3710;
var G__3713 = cljs.core.count.call(null,c__4319__auto___3710);
var G__3714 = (0);
seq__3666_3699 = G__3711;
chunk__3667_3700 = G__3712;
count__3668_3701 = G__3713;
i__3669_3702 = G__3714;
continue;
} else {
var param_3715 = cljs.core.first.call(null,seq__3666_3709__$1);
cljs.compiler.emit.call(null,param_3715);

if(cljs.core._EQ_.call(null,param_3715,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3716 = cljs.core.next.call(null,seq__3666_3709__$1);
var G__3717 = null;
var G__3718 = (0);
var G__3719 = (0);
seq__3666_3699 = G__3716;
chunk__3667_3700 = G__3717;
count__3668_3701 = G__3718;
i__3669_3702 = G__3719;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__3670_3720 = cljs.core.seq.call(null,params);
var chunk__3671_3721 = null;
var count__3672_3722 = (0);
var i__3673_3723 = (0);
while(true){
if((i__3673_3723 < count__3672_3722)){
var param_3724 = cljs.core._nth.call(null,chunk__3671_3721,i__3673_3723);
cljs.compiler.emit.call(null,param_3724);

if(cljs.core._EQ_.call(null,param_3724,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3725 = seq__3670_3720;
var G__3726 = chunk__3671_3721;
var G__3727 = count__3672_3722;
var G__3728 = (i__3673_3723 + (1));
seq__3670_3720 = G__3725;
chunk__3671_3721 = G__3726;
count__3672_3722 = G__3727;
i__3673_3723 = G__3728;
continue;
} else {
var temp__5457__auto___3729 = cljs.core.seq.call(null,seq__3670_3720);
if(temp__5457__auto___3729){
var seq__3670_3730__$1 = temp__5457__auto___3729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3670_3730__$1)){
var c__4319__auto___3731 = cljs.core.chunk_first.call(null,seq__3670_3730__$1);
var G__3732 = cljs.core.chunk_rest.call(null,seq__3670_3730__$1);
var G__3733 = c__4319__auto___3731;
var G__3734 = cljs.core.count.call(null,c__4319__auto___3731);
var G__3735 = (0);
seq__3670_3720 = G__3732;
chunk__3671_3721 = G__3733;
count__3672_3722 = G__3734;
i__3673_3723 = G__3735;
continue;
} else {
var param_3736 = cljs.core.first.call(null,seq__3670_3730__$1);
cljs.compiler.emit.call(null,param_3736);

if(cljs.core._EQ_.call(null,param_3736,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3737 = cljs.core.next.call(null,seq__3670_3730__$1);
var G__3738 = null;
var G__3739 = (0);
var G__3740 = (0);
seq__3670_3720 = G__3737;
chunk__3671_3721 = G__3738;
count__3672_3722 = G__3739;
i__3673_3723 = G__3740;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__3741 = cljs.core.seq.call(null,params);
var chunk__3742 = null;
var count__3743 = (0);
var i__3744 = (0);
while(true){
if((i__3744 < count__3743)){
var param = cljs.core._nth.call(null,chunk__3742,i__3744);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3745 = seq__3741;
var G__3746 = chunk__3742;
var G__3747 = count__3743;
var G__3748 = (i__3744 + (1));
seq__3741 = G__3745;
chunk__3742 = G__3746;
count__3743 = G__3747;
i__3744 = G__3748;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__3741);
if(temp__5457__auto__){
var seq__3741__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3741__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3741__$1);
var G__3749 = cljs.core.chunk_rest.call(null,seq__3741__$1);
var G__3750 = c__4319__auto__;
var G__3751 = cljs.core.count.call(null,c__4319__auto__);
var G__3752 = (0);
seq__3741 = G__3749;
chunk__3742 = G__3750;
count__3743 = G__3751;
i__3744 = G__3752;
continue;
} else {
var param = cljs.core.first.call(null,seq__3741__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3753 = cljs.core.next.call(null,seq__3741__$1);
var G__3754 = null;
var G__3755 = (0);
var G__3756 = (0);
seq__3741 = G__3753;
chunk__3742 = G__3754;
count__3743 = G__3755;
i__3744 = G__3756;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__3757){
var map__3758 = p__3757;
var map__3758__$1 = ((((!((map__3758 == null)))?(((((map__3758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3758):map__3758);
var type = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3758__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__3760){
var map__3761 = p__3760;
var map__3761__$1 = ((((!((map__3761 == null)))?(((((map__3761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3761):map__3761);
var f = map__3761__$1;
var type = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__3761__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_3771__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3772 = cljs.compiler.munge.call(null,name_3771__$1);
var delegate_name_3773 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3772),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_3773," = function (");

var seq__3763_3774 = cljs.core.seq.call(null,params);
var chunk__3764_3775 = null;
var count__3765_3776 = (0);
var i__3766_3777 = (0);
while(true){
if((i__3766_3777 < count__3765_3776)){
var param_3778 = cljs.core._nth.call(null,chunk__3764_3775,i__3766_3777);
cljs.compiler.emit.call(null,param_3778);

if(cljs.core._EQ_.call(null,param_3778,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3779 = seq__3763_3774;
var G__3780 = chunk__3764_3775;
var G__3781 = count__3765_3776;
var G__3782 = (i__3766_3777 + (1));
seq__3763_3774 = G__3779;
chunk__3764_3775 = G__3780;
count__3765_3776 = G__3781;
i__3766_3777 = G__3782;
continue;
} else {
var temp__5457__auto___3783 = cljs.core.seq.call(null,seq__3763_3774);
if(temp__5457__auto___3783){
var seq__3763_3784__$1 = temp__5457__auto___3783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3763_3784__$1)){
var c__4319__auto___3785 = cljs.core.chunk_first.call(null,seq__3763_3784__$1);
var G__3786 = cljs.core.chunk_rest.call(null,seq__3763_3784__$1);
var G__3787 = c__4319__auto___3785;
var G__3788 = cljs.core.count.call(null,c__4319__auto___3785);
var G__3789 = (0);
seq__3763_3774 = G__3786;
chunk__3764_3775 = G__3787;
count__3765_3776 = G__3788;
i__3766_3777 = G__3789;
continue;
} else {
var param_3790 = cljs.core.first.call(null,seq__3763_3784__$1);
cljs.compiler.emit.call(null,param_3790);

if(cljs.core._EQ_.call(null,param_3790,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3791 = cljs.core.next.call(null,seq__3763_3784__$1);
var G__3792 = null;
var G__3793 = (0);
var G__3794 = (0);
seq__3763_3774 = G__3791;
chunk__3764_3775 = G__3792;
count__3765_3776 = G__3793;
i__3766_3777 = G__3794;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_3772," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_3795 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_3795,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_3773,".call(this,");

var seq__3767_3796 = cljs.core.seq.call(null,params);
var chunk__3768_3797 = null;
var count__3769_3798 = (0);
var i__3770_3799 = (0);
while(true){
if((i__3770_3799 < count__3769_3798)){
var param_3800 = cljs.core._nth.call(null,chunk__3768_3797,i__3770_3799);
cljs.compiler.emit.call(null,param_3800);

if(cljs.core._EQ_.call(null,param_3800,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3801 = seq__3767_3796;
var G__3802 = chunk__3768_3797;
var G__3803 = count__3769_3798;
var G__3804 = (i__3770_3799 + (1));
seq__3767_3796 = G__3801;
chunk__3768_3797 = G__3802;
count__3769_3798 = G__3803;
i__3770_3799 = G__3804;
continue;
} else {
var temp__5457__auto___3805 = cljs.core.seq.call(null,seq__3767_3796);
if(temp__5457__auto___3805){
var seq__3767_3806__$1 = temp__5457__auto___3805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3767_3806__$1)){
var c__4319__auto___3807 = cljs.core.chunk_first.call(null,seq__3767_3806__$1);
var G__3808 = cljs.core.chunk_rest.call(null,seq__3767_3806__$1);
var G__3809 = c__4319__auto___3807;
var G__3810 = cljs.core.count.call(null,c__4319__auto___3807);
var G__3811 = (0);
seq__3767_3796 = G__3808;
chunk__3768_3797 = G__3809;
count__3769_3798 = G__3810;
i__3770_3799 = G__3811;
continue;
} else {
var param_3812 = cljs.core.first.call(null,seq__3767_3806__$1);
cljs.compiler.emit.call(null,param_3812);

if(cljs.core._EQ_.call(null,param_3812,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3813 = cljs.core.next.call(null,seq__3767_3806__$1);
var G__3814 = null;
var G__3815 = (0);
var G__3816 = (0);
seq__3767_3796 = G__3813;
chunk__3768_3797 = G__3814;
count__3769_3798 = G__3815;
i__3770_3799 = G__3816;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_3772,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_3772,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_3771__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_3772,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_3773,";");

cljs.compiler.emitln.call(null,"return ",mname_3772,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__3820){
var map__3821 = p__3820;
var map__3821__$1 = ((((!((map__3821 == null)))?(((((map__3821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3821):map__3821);
var name = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__3821__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3817_SHARP_){
var and__3911__auto__ = p1__3817_SHARP_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__3817_SHARP_));
} else {
return and__3911__auto__;
}
});})(map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_3856__$1 = (function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3857 = cljs.compiler.munge.call(null,name_3856__$1);
var maxparams_3858 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_3859 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_3856__$1,mname_3857,maxparams_3858,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3857),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_3856__$1,mname_3857,maxparams_3858,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_3860 = cljs.core.sort_by.call(null,((function (name_3856__$1,mname_3857,maxparams_3858,mmap_3859,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3818_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__3818_SHARP_)));
});})(name_3856__$1,mname_3857,maxparams_3858,mmap_3859,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_3859));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_3857," = null;");

var seq__3823_3861 = cljs.core.seq.call(null,ms_3860);
var chunk__3824_3862 = null;
var count__3825_3863 = (0);
var i__3826_3864 = (0);
while(true){
if((i__3826_3864 < count__3825_3863)){
var vec__3827_3865 = cljs.core._nth.call(null,chunk__3824_3862,i__3826_3864);
var n_3866 = cljs.core.nth.call(null,vec__3827_3865,(0),null);
var meth_3867 = cljs.core.nth.call(null,vec__3827_3865,(1),null);
cljs.compiler.emits.call(null,"var ",n_3866," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3867))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3867);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3867);
}

cljs.compiler.emitln.call(null,";");


var G__3868 = seq__3823_3861;
var G__3869 = chunk__3824_3862;
var G__3870 = count__3825_3863;
var G__3871 = (i__3826_3864 + (1));
seq__3823_3861 = G__3868;
chunk__3824_3862 = G__3869;
count__3825_3863 = G__3870;
i__3826_3864 = G__3871;
continue;
} else {
var temp__5457__auto___3872 = cljs.core.seq.call(null,seq__3823_3861);
if(temp__5457__auto___3872){
var seq__3823_3873__$1 = temp__5457__auto___3872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3823_3873__$1)){
var c__4319__auto___3874 = cljs.core.chunk_first.call(null,seq__3823_3873__$1);
var G__3875 = cljs.core.chunk_rest.call(null,seq__3823_3873__$1);
var G__3876 = c__4319__auto___3874;
var G__3877 = cljs.core.count.call(null,c__4319__auto___3874);
var G__3878 = (0);
seq__3823_3861 = G__3875;
chunk__3824_3862 = G__3876;
count__3825_3863 = G__3877;
i__3826_3864 = G__3878;
continue;
} else {
var vec__3830_3879 = cljs.core.first.call(null,seq__3823_3873__$1);
var n_3880 = cljs.core.nth.call(null,vec__3830_3879,(0),null);
var meth_3881 = cljs.core.nth.call(null,vec__3830_3879,(1),null);
cljs.compiler.emits.call(null,"var ",n_3880," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3881))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3881);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3881);
}

cljs.compiler.emitln.call(null,";");


var G__3882 = cljs.core.next.call(null,seq__3823_3873__$1);
var G__3883 = null;
var G__3884 = (0);
var G__3885 = (0);
seq__3823_3861 = G__3882;
chunk__3824_3862 = G__3883;
count__3825_3863 = G__3884;
i__3826_3864 = G__3885;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_3857," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_3858),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_3858)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_3858));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__3833_3886 = cljs.core.seq.call(null,ms_3860);
var chunk__3834_3887 = null;
var count__3835_3888 = (0);
var i__3836_3889 = (0);
while(true){
if((i__3836_3889 < count__3835_3888)){
var vec__3837_3890 = cljs.core._nth.call(null,chunk__3834_3887,i__3836_3889);
var n_3891 = cljs.core.nth.call(null,vec__3837_3890,(0),null);
var meth_3892 = cljs.core.nth.call(null,vec__3837_3890,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3892))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3893 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3893," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3894 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3893," = new cljs.core.IndexedSeq(",a_3894,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3891,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3858)),(((cljs.core.count.call(null,maxparams_3858) > (1)))?", ":null),restarg_3893,");");
} else {
var pcnt_3895 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3892));
cljs.compiler.emitln.call(null,"case ",pcnt_3895,":");

cljs.compiler.emitln.call(null,"return ",n_3891,".call(this",(((pcnt_3895 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3895,maxparams_3858)),null,(1),null)),(2),null))),");");
}


var G__3896 = seq__3833_3886;
var G__3897 = chunk__3834_3887;
var G__3898 = count__3835_3888;
var G__3899 = (i__3836_3889 + (1));
seq__3833_3886 = G__3896;
chunk__3834_3887 = G__3897;
count__3835_3888 = G__3898;
i__3836_3889 = G__3899;
continue;
} else {
var temp__5457__auto___3900 = cljs.core.seq.call(null,seq__3833_3886);
if(temp__5457__auto___3900){
var seq__3833_3901__$1 = temp__5457__auto___3900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3833_3901__$1)){
var c__4319__auto___3902 = cljs.core.chunk_first.call(null,seq__3833_3901__$1);
var G__3903 = cljs.core.chunk_rest.call(null,seq__3833_3901__$1);
var G__3904 = c__4319__auto___3902;
var G__3905 = cljs.core.count.call(null,c__4319__auto___3902);
var G__3906 = (0);
seq__3833_3886 = G__3903;
chunk__3834_3887 = G__3904;
count__3835_3888 = G__3905;
i__3836_3889 = G__3906;
continue;
} else {
var vec__3840_3907 = cljs.core.first.call(null,seq__3833_3901__$1);
var n_3908 = cljs.core.nth.call(null,vec__3840_3907,(0),null);
var meth_3909 = cljs.core.nth.call(null,vec__3840_3907,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3909))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3910 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3910," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3911 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3910," = new cljs.core.IndexedSeq(",a_3911,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3908,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3858)),(((cljs.core.count.call(null,maxparams_3858) > (1)))?", ":null),restarg_3910,");");
} else {
var pcnt_3912 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3909));
cljs.compiler.emitln.call(null,"case ",pcnt_3912,":");

cljs.compiler.emitln.call(null,"return ",n_3908,".call(this",(((pcnt_3912 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3912,maxparams_3858)),null,(1),null)),(2),null))),");");
}


var G__3913 = cljs.core.next.call(null,seq__3833_3901__$1);
var G__3914 = null;
var G__3915 = (0);
var G__3916 = (0);
seq__3833_3886 = G__3913;
chunk__3834_3887 = G__3914;
count__3835_3888 = G__3915;
i__3836_3889 = G__3916;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + (arguments.length - 1)));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_3857,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_3857,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_3856__$1,mname_3857,maxparams_3858,mmap_3859,ms_3860,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__3819_SHARP_){
var vec__3843 = p1__3819_SHARP_;
var n = cljs.core.nth.call(null,vec__3843,(0),null);
var m = cljs.core.nth.call(null,vec__3843,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_3856__$1,mname_3857,maxparams_3858,mmap_3859,ms_3860,loop_locals,map__3821,map__3821__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_3860),".cljs$lang$applyTo;");
} else {
}

var seq__3846_3917 = cljs.core.seq.call(null,ms_3860);
var chunk__3847_3918 = null;
var count__3848_3919 = (0);
var i__3849_3920 = (0);
while(true){
if((i__3849_3920 < count__3848_3919)){
var vec__3850_3921 = cljs.core._nth.call(null,chunk__3847_3918,i__3849_3920);
var n_3922 = cljs.core.nth.call(null,vec__3850_3921,(0),null);
var meth_3923 = cljs.core.nth.call(null,vec__3850_3921,(1),null);
var c_3924 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3923));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3923))){
cljs.compiler.emitln.call(null,mname_3857,".cljs$core$IFn$_invoke$arity$variadic = ",n_3922,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3857,".cljs$core$IFn$_invoke$arity$",c_3924," = ",n_3922,";");
}


var G__3925 = seq__3846_3917;
var G__3926 = chunk__3847_3918;
var G__3927 = count__3848_3919;
var G__3928 = (i__3849_3920 + (1));
seq__3846_3917 = G__3925;
chunk__3847_3918 = G__3926;
count__3848_3919 = G__3927;
i__3849_3920 = G__3928;
continue;
} else {
var temp__5457__auto___3929 = cljs.core.seq.call(null,seq__3846_3917);
if(temp__5457__auto___3929){
var seq__3846_3930__$1 = temp__5457__auto___3929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3846_3930__$1)){
var c__4319__auto___3931 = cljs.core.chunk_first.call(null,seq__3846_3930__$1);
var G__3932 = cljs.core.chunk_rest.call(null,seq__3846_3930__$1);
var G__3933 = c__4319__auto___3931;
var G__3934 = cljs.core.count.call(null,c__4319__auto___3931);
var G__3935 = (0);
seq__3846_3917 = G__3932;
chunk__3847_3918 = G__3933;
count__3848_3919 = G__3934;
i__3849_3920 = G__3935;
continue;
} else {
var vec__3853_3936 = cljs.core.first.call(null,seq__3846_3930__$1);
var n_3937 = cljs.core.nth.call(null,vec__3853_3936,(0),null);
var meth_3938 = cljs.core.nth.call(null,vec__3853_3936,(1),null);
var c_3939 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3938));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_3938))){
cljs.compiler.emitln.call(null,mname_3857,".cljs$core$IFn$_invoke$arity$variadic = ",n_3937,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3857,".cljs$core$IFn$_invoke$arity$",c_3939," = ",n_3937,";");
}


var G__3940 = cljs.core.next.call(null,seq__3846_3930__$1);
var G__3941 = null;
var G__3942 = (0);
var G__3943 = (0);
seq__3846_3917 = G__3940;
chunk__3847_3918 = G__3941;
count__3848_3919 = G__3942;
i__3849_3920 = G__3943;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_3857,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__3944){
var map__3945 = p__3944;
var map__3945__$1 = ((((!((map__3945 == null)))?(((((map__3945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3945):map__3945);
var statements = cljs.core.get.call(null,map__3945__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__3945__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__3945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__3947_3951 = cljs.core.seq.call(null,statements);
var chunk__3948_3952 = null;
var count__3949_3953 = (0);
var i__3950_3954 = (0);
while(true){
if((i__3950_3954 < count__3949_3953)){
var s_3955 = cljs.core._nth.call(null,chunk__3948_3952,i__3950_3954);
cljs.compiler.emitln.call(null,s_3955);


var G__3956 = seq__3947_3951;
var G__3957 = chunk__3948_3952;
var G__3958 = count__3949_3953;
var G__3959 = (i__3950_3954 + (1));
seq__3947_3951 = G__3956;
chunk__3948_3952 = G__3957;
count__3949_3953 = G__3958;
i__3950_3954 = G__3959;
continue;
} else {
var temp__5457__auto___3960 = cljs.core.seq.call(null,seq__3947_3951);
if(temp__5457__auto___3960){
var seq__3947_3961__$1 = temp__5457__auto___3960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3947_3961__$1)){
var c__4319__auto___3962 = cljs.core.chunk_first.call(null,seq__3947_3961__$1);
var G__3963 = cljs.core.chunk_rest.call(null,seq__3947_3961__$1);
var G__3964 = c__4319__auto___3962;
var G__3965 = cljs.core.count.call(null,c__4319__auto___3962);
var G__3966 = (0);
seq__3947_3951 = G__3963;
chunk__3948_3952 = G__3964;
count__3949_3953 = G__3965;
i__3950_3954 = G__3966;
continue;
} else {
var s_3967 = cljs.core.first.call(null,seq__3947_3961__$1);
cljs.compiler.emitln.call(null,s_3967);


var G__3968 = cljs.core.next.call(null,seq__3947_3961__$1);
var G__3969 = null;
var G__3970 = (0);
var G__3971 = (0);
seq__3947_3951 = G__3968;
chunk__3948_3952 = G__3969;
count__3949_3953 = G__3970;
i__3950_3954 = G__3971;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3911__auto__ = statements;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__3972){
var map__3973 = p__3972;
var map__3973__$1 = ((((!((map__3973 == null)))?(((((map__3973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3973):map__3973);
var env = cljs.core.get.call(null,map__3973__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__3973__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__3973__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__3973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__3973__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :constant (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__3975,is_loop){
var map__3976 = p__3975;
var map__3976__$1 = ((((!((map__3976 == null)))?(((((map__3976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3976):map__3976);
var bindings = cljs.core.get.call(null,map__3976__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__3976__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__3976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_3978_3987 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_3978_3987,context,map__3976,map__3976__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_3978_3987,context,map__3976,map__3976__$1,bindings,expr,env))
,bindings):null));

try{var seq__3979_3988 = cljs.core.seq.call(null,bindings);
var chunk__3980_3989 = null;
var count__3981_3990 = (0);
var i__3982_3991 = (0);
while(true){
if((i__3982_3991 < count__3981_3990)){
var map__3983_3992 = cljs.core._nth.call(null,chunk__3980_3989,i__3982_3991);
var map__3983_3993__$1 = ((((!((map__3983_3992 == null)))?(((((map__3983_3992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3983_3992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3983_3992):map__3983_3992);
var binding_3994 = map__3983_3993__$1;
var init_3995 = cljs.core.get.call(null,map__3983_3993__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_3994);

cljs.compiler.emitln.call(null," = ",init_3995,";");


var G__3996 = seq__3979_3988;
var G__3997 = chunk__3980_3989;
var G__3998 = count__3981_3990;
var G__3999 = (i__3982_3991 + (1));
seq__3979_3988 = G__3996;
chunk__3980_3989 = G__3997;
count__3981_3990 = G__3998;
i__3982_3991 = G__3999;
continue;
} else {
var temp__5457__auto___4000 = cljs.core.seq.call(null,seq__3979_3988);
if(temp__5457__auto___4000){
var seq__3979_4001__$1 = temp__5457__auto___4000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3979_4001__$1)){
var c__4319__auto___4002 = cljs.core.chunk_first.call(null,seq__3979_4001__$1);
var G__4003 = cljs.core.chunk_rest.call(null,seq__3979_4001__$1);
var G__4004 = c__4319__auto___4002;
var G__4005 = cljs.core.count.call(null,c__4319__auto___4002);
var G__4006 = (0);
seq__3979_3988 = G__4003;
chunk__3980_3989 = G__4004;
count__3981_3990 = G__4005;
i__3982_3991 = G__4006;
continue;
} else {
var map__3985_4007 = cljs.core.first.call(null,seq__3979_4001__$1);
var map__3985_4008__$1 = ((((!((map__3985_4007 == null)))?(((((map__3985_4007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3985_4007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3985_4007):map__3985_4007);
var binding_4009 = map__3985_4008__$1;
var init_4010 = cljs.core.get.call(null,map__3985_4008__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_4009);

cljs.compiler.emitln.call(null," = ",init_4010,";");


var G__4011 = cljs.core.next.call(null,seq__3979_4001__$1);
var G__4012 = null;
var G__4013 = (0);
var G__4014 = (0);
seq__3979_3988 = G__4011;
chunk__3980_3989 = G__4012;
count__3981_3990 = G__4013;
i__3982_3991 = G__4014;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_3978_3987;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__4015){
var map__4016 = p__4015;
var map__4016__$1 = ((((!((map__4016 == null)))?(((((map__4016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4016):map__4016);
var frame = cljs.core.get.call(null,map__4016__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__4016__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__4016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4376__auto___4018 = cljs.core.count.call(null,exprs);
var i_4019 = (0);
while(true){
if((i_4019 < n__4376__auto___4018)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_4019)," = ",exprs.call(null,i_4019),";");

var G__4020 = (i_4019 + (1));
i_4019 = G__4020;
continue;
} else {
}
break;
}

var n__4376__auto___4021 = cljs.core.count.call(null,exprs);
var i_4022 = (0);
while(true){
if((i_4022 < n__4376__auto___4021)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_4022))," = ",temps.call(null,i_4022),";");

var G__4023 = (i_4022 + (1));
i_4022 = G__4023;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__4024){
var map__4025 = p__4024;
var map__4025__$1 = ((((!((map__4025 == null)))?(((((map__4025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4025):map__4025);
var bindings = cljs.core.get.call(null,map__4025__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__4025__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__4025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__4027_4035 = cljs.core.seq.call(null,bindings);
var chunk__4028_4036 = null;
var count__4029_4037 = (0);
var i__4030_4038 = (0);
while(true){
if((i__4030_4038 < count__4029_4037)){
var map__4031_4039 = cljs.core._nth.call(null,chunk__4028_4036,i__4030_4038);
var map__4031_4040__$1 = ((((!((map__4031_4039 == null)))?(((((map__4031_4039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4031_4039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4031_4039):map__4031_4039);
var binding_4041 = map__4031_4040__$1;
var init_4042 = cljs.core.get.call(null,map__4031_4040__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4041)," = ",init_4042,";");


var G__4043 = seq__4027_4035;
var G__4044 = chunk__4028_4036;
var G__4045 = count__4029_4037;
var G__4046 = (i__4030_4038 + (1));
seq__4027_4035 = G__4043;
chunk__4028_4036 = G__4044;
count__4029_4037 = G__4045;
i__4030_4038 = G__4046;
continue;
} else {
var temp__5457__auto___4047 = cljs.core.seq.call(null,seq__4027_4035);
if(temp__5457__auto___4047){
var seq__4027_4048__$1 = temp__5457__auto___4047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4027_4048__$1)){
var c__4319__auto___4049 = cljs.core.chunk_first.call(null,seq__4027_4048__$1);
var G__4050 = cljs.core.chunk_rest.call(null,seq__4027_4048__$1);
var G__4051 = c__4319__auto___4049;
var G__4052 = cljs.core.count.call(null,c__4319__auto___4049);
var G__4053 = (0);
seq__4027_4035 = G__4050;
chunk__4028_4036 = G__4051;
count__4029_4037 = G__4052;
i__4030_4038 = G__4053;
continue;
} else {
var map__4033_4054 = cljs.core.first.call(null,seq__4027_4048__$1);
var map__4033_4055__$1 = ((((!((map__4033_4054 == null)))?(((((map__4033_4054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4033_4054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4033_4054):map__4033_4054);
var binding_4056 = map__4033_4055__$1;
var init_4057 = cljs.core.get.call(null,map__4033_4055__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_4056)," = ",init_4057,";");


var G__4058 = cljs.core.next.call(null,seq__4027_4048__$1);
var G__4059 = null;
var G__4060 = (0);
var G__4061 = (0);
seq__4027_4035 = G__4058;
chunk__4028_4036 = G__4059;
count__4029_4037 = G__4060;
i__4030_4038 = G__4061;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__4064){
var map__4065 = p__4064;
var map__4065__$1 = ((((!((map__4065 == null)))?(((((map__4065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4065):map__4065);
var expr = map__4065__$1;
var f = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3911__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3911__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3911__auto__ = protocol;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = tag;
if(cljs.core.truth_(and__3911__auto____$1)){
var or__3922__auto__ = (function (){var and__3911__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3911__auto____$2){
var and__3911__auto____$3 = protocol;
if(cljs.core.truth_(and__3911__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3911__auto____$3;
}
} else {
return and__3911__auto____$2;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto____$2 = (function (){var or__3922__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3911__auto____$2)){
var or__3922__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var and__3911__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3911__auto____$3){
var and__3911__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3911__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3911__auto____$4;
}
} else {
return and__3911__auto____$3;
}
}
} else {
return and__3911__auto____$2;
}
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3922__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__4067 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return (arity > mfa);
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env){
return (function (p1__4062_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4062_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env){
return (function (p1__4063_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__4063_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__4065,map__4065__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__4067,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__4067,(1),null);
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_4070 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_4070,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_4071 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_4071,args)),(((mfa_4071 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_4071,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = js_QMARK_;
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_4072 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_4072," ? ",f__$1,fprop_4072,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_4072," ? ",f__$1,fprop_4072,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__4073){
var map__4074 = p__4073;
var map__4074__$1 = ((((!((map__4074 == null)))?(((((map__4074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4074):map__4074);
var ctor = cljs.core.get.call(null,map__4074__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__4074__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__4076){
var map__4077 = p__4076;
var map__4077__$1 = ((((!((map__4077 == null)))?(((((map__4077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4077):map__4077);
var target = cljs.core.get.call(null,map__4077__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__4077__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__4077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__4079 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__4079__$1 = ((((!((map__4079 == null)))?(((((map__4079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4079):map__4079);
var options = cljs.core.get.call(null,map__4079__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__4079__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__4080 = options;
var map__4080__$1 = ((((!((map__4080 == null)))?(((((map__4080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4080):map__4080);
var target = cljs.core.get.call(null,map__4080__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__4080__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__4081 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__4086 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__4086__$1 = ((((!((map__4086 == null)))?(((((map__4086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4086):map__4086);
var node_libs = cljs.core.get.call(null,map__4086__$1,true);
var libs_to_load = cljs.core.get.call(null,map__4086__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__4081,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__4081,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__4088_4104 = cljs.core.seq.call(null,libs_to_load);
var chunk__4089_4105 = null;
var count__4090_4106 = (0);
var i__4091_4107 = (0);
while(true){
if((i__4091_4107 < count__4090_4106)){
var lib_4108 = cljs.core._nth.call(null,chunk__4089_4105,i__4091_4107);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4108)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4108),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4108),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4108),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4108),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4108),"');");

}
}
}


var G__4109 = seq__4088_4104;
var G__4110 = chunk__4089_4105;
var G__4111 = count__4090_4106;
var G__4112 = (i__4091_4107 + (1));
seq__4088_4104 = G__4109;
chunk__4089_4105 = G__4110;
count__4090_4106 = G__4111;
i__4091_4107 = G__4112;
continue;
} else {
var temp__5457__auto___4113 = cljs.core.seq.call(null,seq__4088_4104);
if(temp__5457__auto___4113){
var seq__4088_4114__$1 = temp__5457__auto___4113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4088_4114__$1)){
var c__4319__auto___4115 = cljs.core.chunk_first.call(null,seq__4088_4114__$1);
var G__4116 = cljs.core.chunk_rest.call(null,seq__4088_4114__$1);
var G__4117 = c__4319__auto___4115;
var G__4118 = cljs.core.count.call(null,c__4319__auto___4115);
var G__4119 = (0);
seq__4088_4104 = G__4116;
chunk__4089_4105 = G__4117;
count__4090_4106 = G__4118;
i__4091_4107 = G__4119;
continue;
} else {
var lib_4120 = cljs.core.first.call(null,seq__4088_4114__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4120)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4120),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4120),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4120),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4120),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4120),"');");

}
}
}


var G__4121 = cljs.core.next.call(null,seq__4088_4114__$1);
var G__4122 = null;
var G__4123 = (0);
var G__4124 = (0);
seq__4088_4104 = G__4121;
chunk__4089_4105 = G__4122;
count__4090_4106 = G__4123;
i__4091_4107 = G__4124;
continue;
}
} else {
}
}
break;
}

var seq__4092_4125 = cljs.core.seq.call(null,node_libs);
var chunk__4093_4126 = null;
var count__4094_4127 = (0);
var i__4095_4128 = (0);
while(true){
if((i__4095_4128 < count__4094_4127)){
var lib_4129 = cljs.core._nth.call(null,chunk__4093_4126,i__4095_4128);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4129)," = require('",lib_4129,"');");


var G__4130 = seq__4092_4125;
var G__4131 = chunk__4093_4126;
var G__4132 = count__4094_4127;
var G__4133 = (i__4095_4128 + (1));
seq__4092_4125 = G__4130;
chunk__4093_4126 = G__4131;
count__4094_4127 = G__4132;
i__4095_4128 = G__4133;
continue;
} else {
var temp__5457__auto___4134 = cljs.core.seq.call(null,seq__4092_4125);
if(temp__5457__auto___4134){
var seq__4092_4135__$1 = temp__5457__auto___4134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4092_4135__$1)){
var c__4319__auto___4136 = cljs.core.chunk_first.call(null,seq__4092_4135__$1);
var G__4137 = cljs.core.chunk_rest.call(null,seq__4092_4135__$1);
var G__4138 = c__4319__auto___4136;
var G__4139 = cljs.core.count.call(null,c__4319__auto___4136);
var G__4140 = (0);
seq__4092_4125 = G__4137;
chunk__4093_4126 = G__4138;
count__4094_4127 = G__4139;
i__4095_4128 = G__4140;
continue;
} else {
var lib_4141 = cljs.core.first.call(null,seq__4092_4135__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4141)," = require('",lib_4141,"');");


var G__4142 = cljs.core.next.call(null,seq__4092_4135__$1);
var G__4143 = null;
var G__4144 = (0);
var G__4145 = (0);
seq__4092_4125 = G__4142;
chunk__4093_4126 = G__4143;
count__4094_4127 = G__4144;
i__4095_4128 = G__4145;
continue;
}
} else {
}
}
break;
}

var seq__4096_4146 = cljs.core.seq.call(null,global_exports_libs);
var chunk__4097_4147 = null;
var count__4098_4148 = (0);
var i__4099_4149 = (0);
while(true){
if((i__4099_4149 < count__4098_4148)){
var lib_4150 = cljs.core._nth.call(null,chunk__4097_4147,i__4099_4149);
var map__4100_4151 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4150));
var map__4100_4152__$1 = ((((!((map__4100_4151 == null)))?(((((map__4100_4151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4100_4151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4100_4151):map__4100_4151);
var global_exports_4153 = cljs.core.get.call(null,map__4100_4152__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_4150)," = goog.global.",cljs.core.get.call(null,global_exports_4153,cljs.core.symbol.call(null,lib_4150)),";");


var G__4154 = seq__4096_4146;
var G__4155 = chunk__4097_4147;
var G__4156 = count__4098_4148;
var G__4157 = (i__4099_4149 + (1));
seq__4096_4146 = G__4154;
chunk__4097_4147 = G__4155;
count__4098_4148 = G__4156;
i__4099_4149 = G__4157;
continue;
} else {
var temp__5457__auto___4158 = cljs.core.seq.call(null,seq__4096_4146);
if(temp__5457__auto___4158){
var seq__4096_4159__$1 = temp__5457__auto___4158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4096_4159__$1)){
var c__4319__auto___4160 = cljs.core.chunk_first.call(null,seq__4096_4159__$1);
var G__4161 = cljs.core.chunk_rest.call(null,seq__4096_4159__$1);
var G__4162 = c__4319__auto___4160;
var G__4163 = cljs.core.count.call(null,c__4319__auto___4160);
var G__4164 = (0);
seq__4096_4146 = G__4161;
chunk__4097_4147 = G__4162;
count__4098_4148 = G__4163;
i__4099_4149 = G__4164;
continue;
} else {
var lib_4165 = cljs.core.first.call(null,seq__4096_4159__$1);
var map__4102_4166 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4165));
var map__4102_4167__$1 = ((((!((map__4102_4166 == null)))?(((((map__4102_4166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4102_4166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4102_4166):map__4102_4166);
var global_exports_4168 = cljs.core.get.call(null,map__4102_4167__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_4165)," = goog.global.",cljs.core.get.call(null,global_exports_4168,cljs.core.symbol.call(null,lib_4165)),";");


var G__4169 = cljs.core.next.call(null,seq__4096_4159__$1);
var G__4170 = null;
var G__4171 = (0);
var G__4172 = (0);
seq__4096_4146 = G__4169;
chunk__4097_4147 = G__4170;
count__4098_4148 = G__4171;
i__4099_4149 = G__4172;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__4173){
var map__4174 = p__4173;
var map__4174__$1 = ((((!((map__4174 == null)))?(((((map__4174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4174):map__4174);
var name = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4174__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__4176){
var map__4177 = p__4176;
var map__4177__$1 = ((((!((map__4177 == null)))?(((((map__4177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4177):map__4177);
var name = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4177__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__4179){
var map__4180 = p__4179;
var map__4180__$1 = ((((!((map__4180 == null)))?(((((map__4180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4180):map__4180);
var t = cljs.core.get.call(null,map__4180__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4180__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4180__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4180__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4180__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4182_4200 = cljs.core.seq.call(null,protocols);
var chunk__4183_4201 = null;
var count__4184_4202 = (0);
var i__4185_4203 = (0);
while(true){
if((i__4185_4203 < count__4184_4202)){
var protocol_4204 = cljs.core._nth.call(null,chunk__4183_4201,i__4185_4203);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4204)].join('')),"}");


var G__4205 = seq__4182_4200;
var G__4206 = chunk__4183_4201;
var G__4207 = count__4184_4202;
var G__4208 = (i__4185_4203 + (1));
seq__4182_4200 = G__4205;
chunk__4183_4201 = G__4206;
count__4184_4202 = G__4207;
i__4185_4203 = G__4208;
continue;
} else {
var temp__5457__auto___4209 = cljs.core.seq.call(null,seq__4182_4200);
if(temp__5457__auto___4209){
var seq__4182_4210__$1 = temp__5457__auto___4209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4182_4210__$1)){
var c__4319__auto___4211 = cljs.core.chunk_first.call(null,seq__4182_4210__$1);
var G__4212 = cljs.core.chunk_rest.call(null,seq__4182_4210__$1);
var G__4213 = c__4319__auto___4211;
var G__4214 = cljs.core.count.call(null,c__4319__auto___4211);
var G__4215 = (0);
seq__4182_4200 = G__4212;
chunk__4183_4201 = G__4213;
count__4184_4202 = G__4214;
i__4185_4203 = G__4215;
continue;
} else {
var protocol_4216 = cljs.core.first.call(null,seq__4182_4210__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4216)].join('')),"}");


var G__4217 = cljs.core.next.call(null,seq__4182_4210__$1);
var G__4218 = null;
var G__4219 = (0);
var G__4220 = (0);
seq__4182_4200 = G__4217;
chunk__4183_4201 = G__4218;
count__4184_4202 = G__4219;
i__4185_4203 = G__4220;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4186_4221 = cljs.core.seq.call(null,fields__$1);
var chunk__4187_4222 = null;
var count__4188_4223 = (0);
var i__4189_4224 = (0);
while(true){
if((i__4189_4224 < count__4188_4223)){
var fld_4225 = cljs.core._nth.call(null,chunk__4187_4222,i__4189_4224);
cljs.compiler.emitln.call(null,"this.",fld_4225," = ",fld_4225,";");


var G__4226 = seq__4186_4221;
var G__4227 = chunk__4187_4222;
var G__4228 = count__4188_4223;
var G__4229 = (i__4189_4224 + (1));
seq__4186_4221 = G__4226;
chunk__4187_4222 = G__4227;
count__4188_4223 = G__4228;
i__4189_4224 = G__4229;
continue;
} else {
var temp__5457__auto___4230 = cljs.core.seq.call(null,seq__4186_4221);
if(temp__5457__auto___4230){
var seq__4186_4231__$1 = temp__5457__auto___4230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4186_4231__$1)){
var c__4319__auto___4232 = cljs.core.chunk_first.call(null,seq__4186_4231__$1);
var G__4233 = cljs.core.chunk_rest.call(null,seq__4186_4231__$1);
var G__4234 = c__4319__auto___4232;
var G__4235 = cljs.core.count.call(null,c__4319__auto___4232);
var G__4236 = (0);
seq__4186_4221 = G__4233;
chunk__4187_4222 = G__4234;
count__4188_4223 = G__4235;
i__4189_4224 = G__4236;
continue;
} else {
var fld_4237 = cljs.core.first.call(null,seq__4186_4231__$1);
cljs.compiler.emitln.call(null,"this.",fld_4237," = ",fld_4237,";");


var G__4238 = cljs.core.next.call(null,seq__4186_4231__$1);
var G__4239 = null;
var G__4240 = (0);
var G__4241 = (0);
seq__4186_4221 = G__4238;
chunk__4187_4222 = G__4239;
count__4188_4223 = G__4240;
i__4189_4224 = G__4241;
continue;
}
} else {
}
}
break;
}

var seq__4190_4242 = cljs.core.seq.call(null,pmasks);
var chunk__4191_4243 = null;
var count__4192_4244 = (0);
var i__4193_4245 = (0);
while(true){
if((i__4193_4245 < count__4192_4244)){
var vec__4194_4246 = cljs.core._nth.call(null,chunk__4191_4243,i__4193_4245);
var pno_4247 = cljs.core.nth.call(null,vec__4194_4246,(0),null);
var pmask_4248 = cljs.core.nth.call(null,vec__4194_4246,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4247,"$ = ",pmask_4248,";");


var G__4249 = seq__4190_4242;
var G__4250 = chunk__4191_4243;
var G__4251 = count__4192_4244;
var G__4252 = (i__4193_4245 + (1));
seq__4190_4242 = G__4249;
chunk__4191_4243 = G__4250;
count__4192_4244 = G__4251;
i__4193_4245 = G__4252;
continue;
} else {
var temp__5457__auto___4253 = cljs.core.seq.call(null,seq__4190_4242);
if(temp__5457__auto___4253){
var seq__4190_4254__$1 = temp__5457__auto___4253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4190_4254__$1)){
var c__4319__auto___4255 = cljs.core.chunk_first.call(null,seq__4190_4254__$1);
var G__4256 = cljs.core.chunk_rest.call(null,seq__4190_4254__$1);
var G__4257 = c__4319__auto___4255;
var G__4258 = cljs.core.count.call(null,c__4319__auto___4255);
var G__4259 = (0);
seq__4190_4242 = G__4256;
chunk__4191_4243 = G__4257;
count__4192_4244 = G__4258;
i__4193_4245 = G__4259;
continue;
} else {
var vec__4197_4260 = cljs.core.first.call(null,seq__4190_4254__$1);
var pno_4261 = cljs.core.nth.call(null,vec__4197_4260,(0),null);
var pmask_4262 = cljs.core.nth.call(null,vec__4197_4260,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4261,"$ = ",pmask_4262,";");


var G__4263 = cljs.core.next.call(null,seq__4190_4254__$1);
var G__4264 = null;
var G__4265 = (0);
var G__4266 = (0);
seq__4190_4242 = G__4263;
chunk__4191_4243 = G__4264;
count__4192_4244 = G__4265;
i__4193_4245 = G__4266;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__4267){
var map__4268 = p__4267;
var map__4268__$1 = ((((!((map__4268 == null)))?(((((map__4268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4268):map__4268);
var t = cljs.core.get.call(null,map__4268__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4268__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4268__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4268__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4268__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4270_4288 = cljs.core.seq.call(null,protocols);
var chunk__4271_4289 = null;
var count__4272_4290 = (0);
var i__4273_4291 = (0);
while(true){
if((i__4273_4291 < count__4272_4290)){
var protocol_4292 = cljs.core._nth.call(null,chunk__4271_4289,i__4273_4291);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4292)].join('')),"}");


var G__4293 = seq__4270_4288;
var G__4294 = chunk__4271_4289;
var G__4295 = count__4272_4290;
var G__4296 = (i__4273_4291 + (1));
seq__4270_4288 = G__4293;
chunk__4271_4289 = G__4294;
count__4272_4290 = G__4295;
i__4273_4291 = G__4296;
continue;
} else {
var temp__5457__auto___4297 = cljs.core.seq.call(null,seq__4270_4288);
if(temp__5457__auto___4297){
var seq__4270_4298__$1 = temp__5457__auto___4297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4270_4298__$1)){
var c__4319__auto___4299 = cljs.core.chunk_first.call(null,seq__4270_4298__$1);
var G__4300 = cljs.core.chunk_rest.call(null,seq__4270_4298__$1);
var G__4301 = c__4319__auto___4299;
var G__4302 = cljs.core.count.call(null,c__4319__auto___4299);
var G__4303 = (0);
seq__4270_4288 = G__4300;
chunk__4271_4289 = G__4301;
count__4272_4290 = G__4302;
i__4273_4291 = G__4303;
continue;
} else {
var protocol_4304 = cljs.core.first.call(null,seq__4270_4298__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4304)].join('')),"}");


var G__4305 = cljs.core.next.call(null,seq__4270_4298__$1);
var G__4306 = null;
var G__4307 = (0);
var G__4308 = (0);
seq__4270_4288 = G__4305;
chunk__4271_4289 = G__4306;
count__4272_4290 = G__4307;
i__4273_4291 = G__4308;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4274_4309 = cljs.core.seq.call(null,fields__$1);
var chunk__4275_4310 = null;
var count__4276_4311 = (0);
var i__4277_4312 = (0);
while(true){
if((i__4277_4312 < count__4276_4311)){
var fld_4313 = cljs.core._nth.call(null,chunk__4275_4310,i__4277_4312);
cljs.compiler.emitln.call(null,"this.",fld_4313," = ",fld_4313,";");


var G__4314 = seq__4274_4309;
var G__4315 = chunk__4275_4310;
var G__4316 = count__4276_4311;
var G__4317 = (i__4277_4312 + (1));
seq__4274_4309 = G__4314;
chunk__4275_4310 = G__4315;
count__4276_4311 = G__4316;
i__4277_4312 = G__4317;
continue;
} else {
var temp__5457__auto___4318 = cljs.core.seq.call(null,seq__4274_4309);
if(temp__5457__auto___4318){
var seq__4274_4319__$1 = temp__5457__auto___4318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4274_4319__$1)){
var c__4319__auto___4320 = cljs.core.chunk_first.call(null,seq__4274_4319__$1);
var G__4321 = cljs.core.chunk_rest.call(null,seq__4274_4319__$1);
var G__4322 = c__4319__auto___4320;
var G__4323 = cljs.core.count.call(null,c__4319__auto___4320);
var G__4324 = (0);
seq__4274_4309 = G__4321;
chunk__4275_4310 = G__4322;
count__4276_4311 = G__4323;
i__4277_4312 = G__4324;
continue;
} else {
var fld_4325 = cljs.core.first.call(null,seq__4274_4319__$1);
cljs.compiler.emitln.call(null,"this.",fld_4325," = ",fld_4325,";");


var G__4326 = cljs.core.next.call(null,seq__4274_4319__$1);
var G__4327 = null;
var G__4328 = (0);
var G__4329 = (0);
seq__4274_4309 = G__4326;
chunk__4275_4310 = G__4327;
count__4276_4311 = G__4328;
i__4277_4312 = G__4329;
continue;
}
} else {
}
}
break;
}

var seq__4278_4330 = cljs.core.seq.call(null,pmasks);
var chunk__4279_4331 = null;
var count__4280_4332 = (0);
var i__4281_4333 = (0);
while(true){
if((i__4281_4333 < count__4280_4332)){
var vec__4282_4334 = cljs.core._nth.call(null,chunk__4279_4331,i__4281_4333);
var pno_4335 = cljs.core.nth.call(null,vec__4282_4334,(0),null);
var pmask_4336 = cljs.core.nth.call(null,vec__4282_4334,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4335,"$ = ",pmask_4336,";");


var G__4337 = seq__4278_4330;
var G__4338 = chunk__4279_4331;
var G__4339 = count__4280_4332;
var G__4340 = (i__4281_4333 + (1));
seq__4278_4330 = G__4337;
chunk__4279_4331 = G__4338;
count__4280_4332 = G__4339;
i__4281_4333 = G__4340;
continue;
} else {
var temp__5457__auto___4341 = cljs.core.seq.call(null,seq__4278_4330);
if(temp__5457__auto___4341){
var seq__4278_4342__$1 = temp__5457__auto___4341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4278_4342__$1)){
var c__4319__auto___4343 = cljs.core.chunk_first.call(null,seq__4278_4342__$1);
var G__4344 = cljs.core.chunk_rest.call(null,seq__4278_4342__$1);
var G__4345 = c__4319__auto___4343;
var G__4346 = cljs.core.count.call(null,c__4319__auto___4343);
var G__4347 = (0);
seq__4278_4330 = G__4344;
chunk__4279_4331 = G__4345;
count__4280_4332 = G__4346;
i__4281_4333 = G__4347;
continue;
} else {
var vec__4285_4348 = cljs.core.first.call(null,seq__4278_4342__$1);
var pno_4349 = cljs.core.nth.call(null,vec__4285_4348,(0),null);
var pmask_4350 = cljs.core.nth.call(null,vec__4285_4348,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4349,"$ = ",pmask_4350,";");


var G__4351 = cljs.core.next.call(null,seq__4278_4342__$1);
var G__4352 = null;
var G__4353 = (0);
var G__4354 = (0);
seq__4278_4330 = G__4351;
chunk__4279_4331 = G__4352;
count__4280_4332 = G__4353;
i__4281_4333 = G__4354;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__4355){
var map__4356 = p__4355;
var map__4356__$1 = ((((!((map__4356 == null)))?(((((map__4356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4356):map__4356);
var target = cljs.core.get.call(null,map__4356__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__4356__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__4356__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__4356__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4356__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__4358){
var map__4359 = p__4358;
var map__4359__$1 = ((((!((map__4359 == null)))?(((((map__4359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4359):map__4359);
var op = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__4359__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3911__auto__ = code;
if(cljs.core.truth_(and__3911__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3911__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__3273__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3273__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__4364 = cljs.core.seq.call(null,table);
var chunk__4365 = null;
var count__4366 = (0);
var i__4367 = (0);
while(true){
if((i__4367 < count__4366)){
var vec__4368 = cljs.core._nth.call(null,chunk__4365,i__4367);
var sym = cljs.core.nth.call(null,vec__4368,(0),null);
var value = cljs.core.nth.call(null,vec__4368,(1),null);
var ns_4374 = cljs.core.namespace.call(null,sym);
var name_4375 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4376 = seq__4364;
var G__4377 = chunk__4365;
var G__4378 = count__4366;
var G__4379 = (i__4367 + (1));
seq__4364 = G__4376;
chunk__4365 = G__4377;
count__4366 = G__4378;
i__4367 = G__4379;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__4364);
if(temp__5457__auto__){
var seq__4364__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4364__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__4364__$1);
var G__4380 = cljs.core.chunk_rest.call(null,seq__4364__$1);
var G__4381 = c__4319__auto__;
var G__4382 = cljs.core.count.call(null,c__4319__auto__);
var G__4383 = (0);
seq__4364 = G__4380;
chunk__4365 = G__4381;
count__4366 = G__4382;
i__4367 = G__4383;
continue;
} else {
var vec__4371 = cljs.core.first.call(null,seq__4364__$1);
var sym = cljs.core.nth.call(null,vec__4371,(0),null);
var value = cljs.core.nth.call(null,vec__4371,(1),null);
var ns_4384 = cljs.core.namespace.call(null,sym);
var name_4385 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__4386 = cljs.core.next.call(null,seq__4364__$1);
var G__4387 = null;
var G__4388 = (0);
var G__4389 = (0);
seq__4364 = G__4386;
chunk__4365 = G__4387;
count__4366 = G__4388;
i__4367 = G__4389;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__4391 = arguments.length;
switch (G__4391) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_4396 = cljs.core.first.call(null,ks);
var vec__4392_4397 = cljs.core.conj.call(null,prefix,k_4396);
var top_4398 = cljs.core.nth.call(null,vec__4392_4397,(0),null);
var prefix_SINGLEQUOTE__4399 = vec__4392_4397;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_4396)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__4399) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_4398)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_4398))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4399)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_4398);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4399)),";");
}
} else {
}

var m_4400 = cljs.core.get.call(null,externs,k_4396);
if(cljs.core.empty_QMARK_.call(null,m_4400)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__4399,m_4400,top_level,known_externs);
}

var G__4401 = cljs.core.next.call(null,ks);
ks = G__4401;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
