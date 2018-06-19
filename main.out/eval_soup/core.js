// Compiled by ClojureScript 1.10.238 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var G__9288 = arguments.length;
switch (G__9288) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__5455__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__5455__auto__)){
var extension = temp__5455__auto__;
try{return goog.net.XhrIo.send([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join(''),((function (extension,temp__5455__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__5455__auto__))
);
}catch (e9289){if((e9289 instanceof Error)){
var _ = e9289;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e9289;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(ns_sym,s){
try{var _STAR_ns_STAR_9292 = cljs.core._STAR_ns_STAR_;
cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns_sym);

try{return cljs.tools.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null),s);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_9292;
}}catch (e9291){if((e9291 instanceof Error)){
var _ = e9291;
return null;
} else {
throw e9291;

}
}});
eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,_STAR_state,_STAR_current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var _STAR_forms = cljs.core.atom.call(null,forms);
var _STAR_results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (state_9386){
var state_val_9387 = (state_9386[(1)]);
if((state_val_9387 === (7))){
var inst_9337 = (state_9386[(2)]);
var inst_9338 = cljs.core.swap_BANG_.call(null,_STAR_forms,cljs.core.rest);
var state_9386__$1 = (function (){var statearr_9388 = state_9386;
(statearr_9388[(7)] = inst_9338);

(statearr_9388[(8)] = inst_9337);

return statearr_9388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9386__$1,(19),channel);
} else {
if((state_val_9387 === (20))){
var inst_9341 = (state_9386[(9)]);
var inst_9346 = inst_9341.cljs$lang$protocol_mask$partition0$;
var inst_9347 = (inst_9346 & (64));
var inst_9348 = inst_9341.cljs$core$ISeq$;
var inst_9349 = (cljs.core.PROTOCOL_SENTINEL === inst_9348);
var inst_9350 = ((inst_9347) || (inst_9349));
var state_9386__$1 = state_9386;
if(cljs.core.truth_(inst_9350)){
var statearr_9389_9437 = state_9386__$1;
(statearr_9389_9437[(1)] = (23));

} else {
var statearr_9390_9438 = state_9386__$1;
(statearr_9390_9438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (27))){
var inst_9341 = (state_9386[(9)]);
var state_9386__$1 = state_9386;
var statearr_9391_9439 = state_9386__$1;
(statearr_9391_9439[(2)] = inst_9341);

(statearr_9391_9439[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (1))){
var state_9386__$1 = state_9386;
var statearr_9392_9440 = state_9386__$1;
(statearr_9392_9440[(2)] = null);

(statearr_9392_9440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (24))){
var state_9386__$1 = state_9386;
var statearr_9393_9441 = state_9386__$1;
(statearr_9393_9441[(2)] = false);

(statearr_9393_9441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (4))){
var state_9386__$1 = state_9386;
var statearr_9394_9442 = state_9386__$1;
(statearr_9394_9442[(2)] = null);

(statearr_9394_9442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (15))){
var inst_9321 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9395_9443 = state_9386__$1;
(statearr_9395_9443[(2)] = inst_9321);

(statearr_9395_9443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (21))){
var state_9386__$1 = state_9386;
var statearr_9396_9444 = state_9386__$1;
(statearr_9396_9444[(2)] = false);

(statearr_9396_9444[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (31))){
var inst_9373 = (state_9386[(2)]);
var inst_9374 = cljs.core.swap_BANG_.call(null,_STAR_results,cljs.core.conj,inst_9373);
var state_9386__$1 = (function (){var statearr_9397 = state_9386;
(statearr_9397[(10)] = inst_9374);

return statearr_9397;
})();
var statearr_9398_9445 = state_9386__$1;
(statearr_9398_9445[(2)] = null);

(statearr_9398_9445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (32))){
var inst_9366 = (state_9386[(11)]);
var inst_9368 = (state_9386[(2)]);
var inst_9369 = [inst_9368];
var inst_9370 = cljs.core.PersistentHashMap.fromArrays(inst_9366,inst_9369);
var state_9386__$1 = state_9386;
var statearr_9399_9446 = state_9386__$1;
(statearr_9399_9446[(2)] = inst_9370);

(statearr_9399_9446[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (13))){
var inst_9309 = (state_9386[(12)]);
var inst_9317 = cljs.core.second.call(null,inst_9309);
var inst_9318 = cljs.core.reset_BANG_.call(null,_STAR_current_ns,inst_9317);
var state_9386__$1 = state_9386;
var statearr_9400_9447 = state_9386__$1;
(statearr_9400_9447[(2)] = inst_9318);

(statearr_9400_9447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (22))){
var inst_9357 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
if(cljs.core.truth_(inst_9357)){
var statearr_9401_9448 = state_9386__$1;
(statearr_9401_9448[(1)] = (26));

} else {
var statearr_9402_9449 = state_9386__$1;
(statearr_9402_9449[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (29))){
var inst_9363 = (state_9386[(13)]);
var inst_9366 = [new cljs.core.Keyword(null,"value","value",305978217)];
var state_9386__$1 = (function (){var statearr_9403 = state_9386;
(statearr_9403[(11)] = inst_9366);

return statearr_9403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9386__$1,(32),inst_9363);
} else {
if((state_val_9387 === (6))){
var inst_9378 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9404_9450 = state_9386__$1;
(statearr_9404_9450[(2)] = inst_9378);

(statearr_9404_9450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (28))){
var inst_9362 = (state_9386[(14)]);
var inst_9363 = (state_9386[(13)]);
var inst_9362__$1 = (state_9386[(2)]);
var inst_9363__$1 = cljs.core.get.call(null,inst_9362__$1,new cljs.core.Keyword(null,"value","value",305978217));
var inst_9364 = (inst_9363__$1 instanceof cljs.core.async.impl.channels.ManyToManyChannel);
var state_9386__$1 = (function (){var statearr_9405 = state_9386;
(statearr_9405[(14)] = inst_9362__$1);

(statearr_9405[(13)] = inst_9363__$1);

return statearr_9405;
})();
if(cljs.core.truth_(inst_9364)){
var statearr_9406_9451 = state_9386__$1;
(statearr_9406_9451[(1)] = (29));

} else {
var statearr_9407_9452 = state_9386__$1;
(statearr_9407_9452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (25))){
var inst_9354 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9408_9453 = state_9386__$1;
(statearr_9408_9453[(2)] = inst_9354);

(statearr_9408_9453[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (17))){
var inst_9309 = (state_9386[(12)]);
var inst_9307 = (state_9386[(15)]);
var inst_9310 = (state_9386[(16)]);
var inst_9332 = (function (){var current_ns = inst_9307;
var form = inst_9309;
var opts__$1 = inst_9310;
return ((function (current_ns,form,opts__$1,inst_9309,inst_9307,inst_9310,state_val_9387,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__9293_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__9293_SHARP_);
});
;})(current_ns,form,opts__$1,inst_9309,inst_9307,inst_9310,state_val_9387,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_9333 = cljs.js.eval.call(null,_STAR_state,inst_9309,inst_9310,inst_9332);
var state_9386__$1 = state_9386;
var statearr_9409_9454 = state_9386__$1;
(statearr_9409_9454[(2)] = inst_9333);

(statearr_9409_9454[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (3))){
var inst_9380 = (state_9386[(2)]);
var inst_9381 = (function (){return ((function (inst_9380,state_val_9387,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function (p1__9294_SHARP_){
var or__3922__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__9294_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__9294_SHARP_);
}
});
;})(inst_9380,state_val_9387,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var inst_9382 = cljs.core.deref.call(null,_STAR_results);
var inst_9383 = cljs.core.mapv.call(null,inst_9381,inst_9382);
var inst_9384 = cb.call(null,inst_9383);
var state_9386__$1 = (function (){var statearr_9410 = state_9386;
(statearr_9410[(17)] = inst_9380);

return statearr_9410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9386__$1,inst_9384);
} else {
if((state_val_9387 === (12))){
var inst_9309 = (state_9386[(12)]);
var inst_9324 = (state_9386[(2)]);
var inst_9325 = (inst_9309 instanceof Error);
var state_9386__$1 = (function (){var statearr_9411 = state_9386;
(statearr_9411[(18)] = inst_9324);

return statearr_9411;
})();
if(cljs.core.truth_(inst_9325)){
var statearr_9412_9455 = state_9386__$1;
(statearr_9412_9455[(1)] = (16));

} else {
var statearr_9413_9456 = state_9386__$1;
(statearr_9413_9456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (2))){
var inst_9296 = cljs.core.deref.call(null,_STAR_forms);
var inst_9297 = cljs.core.seq.call(null,inst_9296);
var state_9386__$1 = state_9386;
if(inst_9297){
var statearr_9414_9457 = state_9386__$1;
(statearr_9414_9457[(1)] = (4));

} else {
var statearr_9415_9458 = state_9386__$1;
(statearr_9415_9458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (23))){
var state_9386__$1 = state_9386;
var statearr_9416_9459 = state_9386__$1;
(statearr_9416_9459[(2)] = true);

(statearr_9416_9459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (19))){
var inst_9341 = (state_9386[(9)]);
var inst_9341__$1 = (state_9386[(2)]);
var inst_9343 = (inst_9341__$1 == null);
var inst_9344 = cljs.core.not.call(null,inst_9343);
var state_9386__$1 = (function (){var statearr_9417 = state_9386;
(statearr_9417[(9)] = inst_9341__$1);

return statearr_9417;
})();
if(inst_9344){
var statearr_9418_9460 = state_9386__$1;
(statearr_9418_9460[(1)] = (20));

} else {
var statearr_9419_9461 = state_9386__$1;
(statearr_9419_9461[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (11))){
var state_9386__$1 = state_9386;
var statearr_9420_9462 = state_9386__$1;
(statearr_9420_9462[(2)] = null);

(statearr_9420_9462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (9))){
var inst_9309 = (state_9386[(12)]);
var inst_9307 = (state_9386[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9386,(8),Error,null,(7));
var inst_9307__$1 = cljs.core.deref.call(null,_STAR_current_ns);
var inst_9308 = cljs.core.deref.call(null,_STAR_forms);
var inst_9309__$1 = cljs.core.first.call(null,inst_9308);
var inst_9310 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_9307__$1);
var inst_9311 = cljs.core.list_QMARK_.call(null,inst_9309__$1);
var state_9386__$1 = (function (){var statearr_9421 = state_9386;
(statearr_9421[(12)] = inst_9309__$1);

(statearr_9421[(15)] = inst_9307__$1);

(statearr_9421[(16)] = inst_9310);

return statearr_9421;
})();
if(inst_9311){
var statearr_9422_9463 = state_9386__$1;
(statearr_9422_9463[(1)] = (10));

} else {
var statearr_9423_9464 = state_9386__$1;
(statearr_9423_9464[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (5))){
var state_9386__$1 = state_9386;
var statearr_9424_9465 = state_9386__$1;
(statearr_9424_9465[(2)] = null);

(statearr_9424_9465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (14))){
var state_9386__$1 = state_9386;
var statearr_9425_9466 = state_9386__$1;
(statearr_9425_9466[(2)] = null);

(statearr_9425_9466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (26))){
var inst_9341 = (state_9386[(9)]);
var inst_9359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9341);
var state_9386__$1 = state_9386;
var statearr_9426_9467 = state_9386__$1;
(statearr_9426_9467[(2)] = inst_9359);

(statearr_9426_9467[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (16))){
var inst_9309 = (state_9386[(12)]);
var inst_9327 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_9328 = [inst_9309];
var inst_9329 = cljs.core.PersistentHashMap.fromArrays(inst_9327,inst_9328);
var inst_9330 = cljs.core.async.put_BANG_.call(null,channel,inst_9329);
var state_9386__$1 = state_9386;
var statearr_9427_9468 = state_9386__$1;
(statearr_9427_9468[(2)] = inst_9330);

(statearr_9427_9468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (30))){
var inst_9362 = (state_9386[(14)]);
var state_9386__$1 = state_9386;
var statearr_9428_9469 = state_9386__$1;
(statearr_9428_9469[(2)] = inst_9362);

(statearr_9428_9469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (10))){
var inst_9309 = (state_9386[(12)]);
var inst_9313 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_9314 = cljs.core.first.call(null,inst_9309);
var inst_9315 = cljs.core._EQ_.call(null,inst_9313,inst_9314);
var state_9386__$1 = state_9386;
if(inst_9315){
var statearr_9429_9470 = state_9386__$1;
(statearr_9429_9470[(1)] = (13));

} else {
var statearr_9430_9471 = state_9386__$1;
(statearr_9430_9471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (18))){
var inst_9335 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9431_9472 = state_9386__$1;
(statearr_9431_9472[(2)] = inst_9335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9386__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (8))){
var inst_9299 = (state_9386[(2)]);
var inst_9300 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_9301 = [inst_9299];
var inst_9302 = cljs.core.PersistentHashMap.fromArrays(inst_9300,inst_9301);
var inst_9303 = cljs.core.async.put_BANG_.call(null,channel,inst_9302);
var state_9386__$1 = state_9386;
var statearr_9432_9473 = state_9386__$1;
(statearr_9432_9473[(2)] = inst_9303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9386__$1);

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
});})(c__7318__auto__,opts,channel,_STAR_forms,_STAR_results))
;
return ((function (switch__7228__auto__,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__7229__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__7229__auto____0 = (function (){
var statearr_9433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9433[(0)] = eval_soup$core$eval_forms_$_state_machine__7229__auto__);

(statearr_9433[(1)] = (1));

return statearr_9433;
});
var eval_soup$core$eval_forms_$_state_machine__7229__auto____1 = (function (state_9386){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_9386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e9434){if((e9434 instanceof Object)){
var ex__7232__auto__ = e9434;
var statearr_9435_9474 = state_9386;
(statearr_9435_9474[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9475 = state_9386;
state_9386 = G__9475;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__7229__auto__ = function(state_9386){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__7229__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__7229__auto____1.call(this,state_9386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
eval_soup$core$eval_forms_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__7229__auto____0;
eval_soup$core$eval_forms_$_state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__7229__auto____1;
return eval_soup$core$eval_forms_$_state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__,opts,channel,_STAR_forms,_STAR_results))
})();
var state__7320__auto__ = (function (){var statearr_9436 = f__7319__auto__.call(null);
(statearr_9436[(6)] = c__7318__auto__);

return statearr_9436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__,opts,channel,_STAR_forms,_STAR_results))
);

return c__7318__auto__;
});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null)),null,(1),null)),(2),null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null)),(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(timeout,form){
if(((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form))))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,cljs.core.partial.call(null,eval_soup.core.add_timeout_checks,timeout),cljs.core.identity,form);
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1))))){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null),(new cljs.core.List(null,timeout,null,(1),null)),(2),null)),(new cljs.core.List(null,form__$1,null,(1),null)),(2),null)),(3),null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(timeout,forms,expanded_forms){
var iter__4292__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__9476(s__9477){
return (new cljs.core.LazySeq(null,(function (){
var s__9477__$1 = s__9477;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9477__$1);
if(temp__5457__auto__){
var s__9477__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9477__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9477__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9479 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9478 = (0);
while(true){
if((i__9478 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__9478);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__9479,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__9480 = (i__9478 + (1));
i__9478 = G__9480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9479),eval_soup$core$add_timeouts_if_necessary_$_iter__9476.call(null,cljs.core.chunk_rest.call(null,s__9477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9479),null);
}
} else {
var i = cljs.core.first.call(null,s__9477__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,((((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null)))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,timeout,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__9476.call(null,cljs.core.rest.call(null,s__9477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core._STAR_cljs_state !== 'undefined'){
} else {
eval_soup.core._STAR_cljs_state = cljs.js.empty_state.call(null);
}
/**
 * Evaluates each form, providing the results in a callback.
 *   If any of the forms are strings, it will read them first.
 */
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var G__9483 = arguments.length;
switch (G__9483) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__9484){
var map__9485 = p__9484;
var map__9485__$1 = ((((!((map__9485 == null)))?(((((map__9485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9485):map__9485);
var opts = map__9485__$1;
var _STAR_current_ns = cljs.core.get.call(null,map__9485__$1,new cljs.core.Keyword(null,"*current-ns","*current-ns",547476271),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var _STAR_state = cljs.core.get.call(null,map__9485__$1,new cljs.core.Keyword(null,"*state","*state",471581315),eval_soup.core._STAR_cljs_state);
var custom_load = cljs.core.get.call(null,map__9485__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108),eval_soup.core.custom_load_BANG_);
var timeout = cljs.core.get.call(null,map__9485__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(4000));
var disable_timeout_QMARK_ = cljs.core.get.call(null,map__9485__$1,new cljs.core.Keyword(null,"disable-timeout?","disable-timeout?",-760039639),false);
var forms__$1 = cljs.core.mapv.call(null,((function (map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (p1__9481_SHARP_){
if(typeof p1__9481_SHARP_ === 'string'){
return eval_soup.core.str__GT_form.call(null,cljs.core.deref.call(null,_STAR_current_ns),p1__9481_SHARP_);
} else {
return p1__9481_SHARP_;
}
});})(map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
,forms);
var init_forms = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null))], null),(cljs.core.truth_(disable_timeout_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out."))))], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),(new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(new cljs.core.List(null,cljs.core.deref.call(null,_STAR_current_ns),null,(1),null)),(2),null))], null)));
var timeout_cb = ((function (forms__$1,init_forms,map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,timeout,forms__$1,results),cb,_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
var init_cb = ((function (forms__$1,init_forms,timeout_cb,map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_){
return (function (results){
return eval_soup.core.eval_forms.call(null,(cljs.core.truth_(disable_timeout_QMARK_)?forms__$1:cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1)),(cljs.core.truth_(disable_timeout_QMARK_)?cb:timeout_cb),_STAR_state,_STAR_current_ns,custom_load);
});})(forms__$1,init_forms,timeout_cb,map__9485,map__9485__$1,opts,_STAR_current_ns,_STAR_state,custom_load,timeout,disable_timeout_QMARK_))
;
return eval_soup.core.eval_forms.call(null,init_forms,init_cb,_STAR_state,_STAR_current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
