// Compiled by ClojureScript 1.10.238 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9532_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9532_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__5457__auto__)){
var changed__$1 = temp__5457__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9533 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9534 = null;
var count__9535 = (0);
var i__9536 = (0);
while(true){
if((i__9536 < count__9535)){
var s = cljs.core._nth.call(null,chunk__9534,i__9536);
var temp__5457__auto___9537 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___9537)){
var sheet_9538 = temp__5457__auto___9537;
var temp__5457__auto___9539__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9538.href,changed);
if(cljs.core.truth_(temp__5457__auto___9539__$1)){
var href_uri_9540 = temp__5457__auto___9539__$1;
sheet_9538.ownerNode.href = href_uri_9540.makeUnique().toString();
} else {
}
} else {
}


var G__9541 = seq__9533;
var G__9542 = chunk__9534;
var G__9543 = count__9535;
var G__9544 = (i__9536 + (1));
seq__9533 = G__9541;
chunk__9534 = G__9542;
count__9535 = G__9543;
i__9536 = G__9544;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9533);
if(temp__5457__auto__){
var seq__9533__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9533__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9533__$1);
var G__9545 = cljs.core.chunk_rest.call(null,seq__9533__$1);
var G__9546 = c__4319__auto__;
var G__9547 = cljs.core.count.call(null,c__4319__auto__);
var G__9548 = (0);
seq__9533 = G__9545;
chunk__9534 = G__9546;
count__9535 = G__9547;
i__9536 = G__9548;
continue;
} else {
var s = cljs.core.first.call(null,seq__9533__$1);
var temp__5457__auto___9549__$1 = (sheets[s]);
if(cljs.core.truth_(temp__5457__auto___9549__$1)){
var sheet_9550 = temp__5457__auto___9549__$1;
var temp__5457__auto___9551__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9550.href,changed);
if(cljs.core.truth_(temp__5457__auto___9551__$2)){
var href_uri_9552 = temp__5457__auto___9551__$2;
sheet_9550.ownerNode.href = href_uri_9552.makeUnique().toString();
} else {
}
} else {
}


var G__9553 = cljs.core.next.call(null,seq__9533__$1);
var G__9554 = null;
var G__9555 = (0);
var G__9556 = (0);
seq__9533 = G__9553;
chunk__9534 = G__9554;
count__9535 = G__9555;
i__9536 = G__9556;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9557 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9558 = null;
var count__9559 = (0);
var i__9560 = (0);
while(true){
if((i__9560 < count__9559)){
var s = cljs.core._nth.call(null,chunk__9558,i__9560);
var temp__5457__auto___9561 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___9561)){
var image_9562 = temp__5457__auto___9561;
var temp__5457__auto___9563__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9562.src,changed);
if(cljs.core.truth_(temp__5457__auto___9563__$1)){
var href_uri_9564 = temp__5457__auto___9563__$1;
image_9562.src = href_uri_9564.makeUnique().toString();
} else {
}
} else {
}


var G__9565 = seq__9557;
var G__9566 = chunk__9558;
var G__9567 = count__9559;
var G__9568 = (i__9560 + (1));
seq__9557 = G__9565;
chunk__9558 = G__9566;
count__9559 = G__9567;
i__9560 = G__9568;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9557);
if(temp__5457__auto__){
var seq__9557__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9557__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__9557__$1);
var G__9569 = cljs.core.chunk_rest.call(null,seq__9557__$1);
var G__9570 = c__4319__auto__;
var G__9571 = cljs.core.count.call(null,c__4319__auto__);
var G__9572 = (0);
seq__9557 = G__9569;
chunk__9558 = G__9570;
count__9559 = G__9571;
i__9560 = G__9572;
continue;
} else {
var s = cljs.core.first.call(null,seq__9557__$1);
var temp__5457__auto___9573__$1 = (images[s]);
if(cljs.core.truth_(temp__5457__auto___9573__$1)){
var image_9574 = temp__5457__auto___9573__$1;
var temp__5457__auto___9575__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9574.src,changed);
if(cljs.core.truth_(temp__5457__auto___9575__$2)){
var href_uri_9576 = temp__5457__auto___9575__$2;
image_9574.src = href_uri_9576.makeUnique().toString();
} else {
}
} else {
}


var G__9577 = cljs.core.next.call(null,seq__9557__$1);
var G__9578 = null;
var G__9579 = (0);
var G__9580 = (0);
seq__9557 = G__9577;
chunk__9558 = G__9578;
count__9559 = G__9579;
i__9560 = G__9580;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if(typeof goog.net.jsloader.safeLoadMany !== 'undefined'){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__9581_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__9581_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if(typeof goog.net.jsloader.loadMany !== 'undefined'){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9584){
var map__9585 = p__9584;
var map__9585__$1 = ((((!((map__9585 == null)))?(((((map__9585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9585):map__9585);
var on_jsload = cljs.core.get.call(null,map__9585__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9585,map__9585__$1,on_jsload){
return (function (p1__9582_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9582_SHARP_,".js");
});})(map__9585,map__9585__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__9585,map__9585__$1,on_jsload){
return (function (p1__9583_SHARP_){
return goog.Uri.parse(p1__9583_SHARP_).makeUnique();
});})(js_files,map__9585,map__9585__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__9585,map__9585__$1,on_jsload){
return (function() { 
var G__9587__delegate = function (_){
return on_jsload.call(null);
};
var G__9587 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9588__i = 0, G__9588__a = new Array(arguments.length -  0);
while (G__9588__i < G__9588__a.length) {G__9588__a[G__9588__i] = arguments[G__9588__i + 0]; ++G__9588__i;}
  _ = new cljs.core.IndexedSeq(G__9588__a,0,null);
} 
return G__9587__delegate.call(this,_);};
G__9587.cljs$lang$maxFixedArity = 0;
G__9587.cljs$lang$applyTo = (function (arglist__9589){
var _ = cljs.core.seq(arglist__9589);
return G__9587__delegate(_);
});
G__9587.cljs$core$IFn$_invoke$arity$variadic = G__9587__delegate;
return G__9587;
})()
;})(js_files,map__9585,map__9585__$1,on_jsload))
,((function (js_files,map__9585,map__9585__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9585,map__9585__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9590_9594 = cljs.core.seq.call(null,things_to_log);
var chunk__9591_9595 = null;
var count__9592_9596 = (0);
var i__9593_9597 = (0);
while(true){
if((i__9593_9597 < count__9592_9596)){
var t_9598 = cljs.core._nth.call(null,chunk__9591_9595,i__9593_9597);
console.log(t_9598);


var G__9599 = seq__9590_9594;
var G__9600 = chunk__9591_9595;
var G__9601 = count__9592_9596;
var G__9602 = (i__9593_9597 + (1));
seq__9590_9594 = G__9599;
chunk__9591_9595 = G__9600;
count__9592_9596 = G__9601;
i__9593_9597 = G__9602;
continue;
} else {
var temp__5457__auto___9603 = cljs.core.seq.call(null,seq__9590_9594);
if(temp__5457__auto___9603){
var seq__9590_9604__$1 = temp__5457__auto___9603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9590_9604__$1)){
var c__4319__auto___9605 = cljs.core.chunk_first.call(null,seq__9590_9604__$1);
var G__9606 = cljs.core.chunk_rest.call(null,seq__9590_9604__$1);
var G__9607 = c__4319__auto___9605;
var G__9608 = cljs.core.count.call(null,c__4319__auto___9605);
var G__9609 = (0);
seq__9590_9594 = G__9606;
chunk__9591_9595 = G__9607;
count__9592_9596 = G__9608;
i__9593_9597 = G__9609;
continue;
} else {
var t_9610 = cljs.core.first.call(null,seq__9590_9604__$1);
console.log(t_9610);


var G__9611 = cljs.core.next.call(null,seq__9590_9604__$1);
var G__9612 = null;
var G__9613 = (0);
var G__9614 = (0);
seq__9590_9594 = G__9611;
chunk__9591_9595 = G__9612;
count__9592_9596 = G__9613;
i__9593_9597 = G__9614;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return ((typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined'));
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9615_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9615_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9616){
var map__9617 = p__9616;
var map__9617__$1 = ((((!((map__9617 == null)))?(((((map__9617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9617):map__9617);
var canonical_path = cljs.core.get.call(null,map__9617__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9617__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9619 = window;
var G__9619__$1 = (((G__9619 == null))?null:G__9619.location);
if((G__9619__$1 == null)){
return null;
} else {
return G__9619__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9620 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9620);

adzerk.boot_reload.reload.reload_css.call(null,G__9620);

adzerk.boot_reload.reload.reload_img.call(null,G__9620);

return G__9620;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
