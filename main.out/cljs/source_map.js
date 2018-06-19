// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__2659){
var vec__2660 = p__2659;
var i = cljs.core.nth.call(null,vec__2660,(0),null);
var v = cljs.core.nth.call(null,vec__2660,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__2663 = seg;
var gcol = cljs.core.nth.call(null,vec__2663,(0),null);
var source = cljs.core.nth.call(null,vec__2663,(1),null);
var line = cljs.core.nth.call(null,vec__2663,(2),null);
var col = cljs.core.nth.call(null,vec__2663,(3),null);
var name = cljs.core.nth.call(null,vec__2663,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__2666 = seg;
var gcol = cljs.core.nth.call(null,vec__2666,(0),null);
var source = cljs.core.nth.call(null,vec__2666,(1),null);
var line = cljs.core.nth.call(null,vec__2666,(2),null);
var col = cljs.core.nth.call(null,vec__2666,(3),null);
var name = cljs.core.nth.call(null,vec__2666,(4),null);
var vec__2669 = relseg;
var rgcol = cljs.core.nth.call(null,vec__2669,(0),null);
var rsource = cljs.core.nth.call(null,vec__2669,(1),null);
var rline = cljs.core.nth.call(null,vec__2669,(2),null);
var rcol = cljs.core.nth.call(null,vec__2669,(3),null);
var rname = cljs.core.nth.call(null,vec__2669,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3922__auto__ = source;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3922__auto__ = line;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3922__auto__ = col;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__2672 = segmap;
var map__2672__$1 = ((((!((map__2672 == null)))?(((((map__2672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2672):map__2672);
var gcol = cljs.core.get.call(null,map__2672__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2672__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2672__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2672__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__2672,map__2672__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__2675 = arguments.length;
switch (G__2675) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2676 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2680 = cljs.core.next.call(null,segs__$1);
var G__2681 = nrelseg;
var G__2682 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2680;
relseg__$1 = G__2681;
result__$1 = G__2682;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2676,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2676,(1),null);
var G__2683 = (gline + (1));
var G__2684 = cljs.core.next.call(null,lines__$1);
var G__2685 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2686 = result__$1;
gline = G__2683;
lines__$1 = G__2684;
relseg = G__2685;
result = G__2686;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__2688 = segmap;
var map__2688__$1 = ((((!((map__2688 == null)))?(((((map__2688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2688):map__2688);
var gcol = cljs.core.get.call(null,map__2688__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__2688__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__2688__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__2688__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__2688__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__2688,map__2688__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__2688,map__2688__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__2687_SHARP_){
return cljs.core.conj.call(null,p1__2687_SHARP_,d__$1);
});})(map__2688,map__2688__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__2688,map__2688__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__2691 = arguments.length;
switch (G__2691) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__2692 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__2696 = cljs.core.next.call(null,segs__$1);
var G__2697 = nrelseg;
var G__2698 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__2696;
relseg__$1 = G__2697;
result__$1 = G__2698;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__2692,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__2692,(1),null);
var G__2699 = (gline + (1));
var G__2700 = cljs.core.next.call(null,lines__$1);
var G__2701 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__2702 = result__$1;
gline = G__2699;
lines__$1 = G__2700;
relseg = G__2701;
result = G__2702;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__2703){
var vec__2704 = p__2703;
var _ = cljs.core.nth.call(null,vec__2704,(0),null);
var source = cljs.core.nth.call(null,vec__2704,(1),null);
var line = cljs.core.nth.call(null,vec__2704,(2),null);
var col = cljs.core.nth.call(null,vec__2704,(3),null);
var name = cljs.core.nth.call(null,vec__2704,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__2707){
var vec__2708 = p__2707;
var gcol = cljs.core.nth.call(null,vec__2708,(0),null);
var sidx = cljs.core.nth.call(null,vec__2708,(1),null);
var line = cljs.core.nth.call(null,vec__2708,(2),null);
var col = cljs.core.nth.call(null,vec__2708,(3),null);
var name = cljs.core.nth.call(null,vec__2708,(4),null);
var seg = vec__2708;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__2708,gcol,sidx,line,col,name,seg,relseg){
return (function (p__2711){
var vec__2712 = p__2711;
var _ = cljs.core.nth.call(null,vec__2712,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__2712,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__2712,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__2712,(3),null);
var lname = cljs.core.nth.call(null,vec__2712,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3922__auto__ = name;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__2708,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__2718 = cljs.core.seq.call(null,infos);
var chunk__2719 = null;
var count__2720 = (0);
var i__2721 = (0);
while(true){
if((i__2721 < count__2720)){
var info = cljs.core._nth.call(null,chunk__2719,i__2721);
var segv_2800 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2801 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2802 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2801 > (lc_2802 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2718,chunk__2719,count__2720,i__2721,segv_2800,gline_2801,lc_2802,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2801 - (lc_2802 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2800], null));
});})(seq__2718,chunk__2719,count__2720,i__2721,segv_2800,gline_2801,lc_2802,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2718,chunk__2719,count__2720,i__2721,segv_2800,gline_2801,lc_2802,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2801], null),cljs.core.conj,segv_2800);
});})(seq__2718,chunk__2719,count__2720,i__2721,segv_2800,gline_2801,lc_2802,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2803 = seq__2718;
var G__2804 = chunk__2719;
var G__2805 = count__2720;
var G__2806 = (i__2721 + (1));
seq__2718 = G__2803;
chunk__2719 = G__2804;
count__2720 = G__2805;
i__2721 = G__2806;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__2718);
if(temp__5457__auto__){
var seq__2718__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2718__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2718__$1);
var G__2807 = cljs.core.chunk_rest.call(null,seq__2718__$1);
var G__2808 = c__4319__auto__;
var G__2809 = cljs.core.count.call(null,c__4319__auto__);
var G__2810 = (0);
seq__2718 = G__2807;
chunk__2719 = G__2808;
count__2720 = G__2809;
i__2721 = G__2810;
continue;
} else {
var info = cljs.core.first.call(null,seq__2718__$1);
var segv_2811 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_2812 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_2813 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_2812 > (lc_2813 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__2718,chunk__2719,count__2720,i__2721,segv_2811,gline_2812,lc_2813,info,seq__2718__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_2812 - (lc_2813 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_2811], null));
});})(seq__2718,chunk__2719,count__2720,i__2721,segv_2811,gline_2812,lc_2813,info,seq__2718__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__2718,chunk__2719,count__2720,i__2721,segv_2811,gline_2812,lc_2813,info,seq__2718__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_2812], null),cljs.core.conj,segv_2811);
});})(seq__2718,chunk__2719,count__2720,i__2721,segv_2811,gline_2812,lc_2813,info,seq__2718__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__2814 = cljs.core.next.call(null,seq__2718__$1);
var G__2815 = null;
var G__2816 = (0);
var G__2817 = (0);
seq__2718 = G__2814;
chunk__2719 = G__2815;
count__2720 = G__2816;
i__2721 = G__2817;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__2722_2818 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__2723_2819 = null;
var count__2724_2820 = (0);
var i__2725_2821 = (0);
while(true){
if((i__2725_2821 < count__2724_2820)){
var vec__2726_2822 = cljs.core._nth.call(null,chunk__2723_2819,i__2725_2821);
var source_idx_2823 = cljs.core.nth.call(null,vec__2726_2822,(0),null);
var vec__2729_2824 = cljs.core.nth.call(null,vec__2726_2822,(1),null);
var __2825 = cljs.core.nth.call(null,vec__2729_2824,(0),null);
var lines_2826__$1 = cljs.core.nth.call(null,vec__2729_2824,(1),null);
var seq__2732_2827 = cljs.core.seq.call(null,lines_2826__$1);
var chunk__2733_2828 = null;
var count__2734_2829 = (0);
var i__2735_2830 = (0);
while(true){
if((i__2735_2830 < count__2734_2829)){
var vec__2736_2831 = cljs.core._nth.call(null,chunk__2733_2828,i__2735_2830);
var line_2832 = cljs.core.nth.call(null,vec__2736_2831,(0),null);
var cols_2833 = cljs.core.nth.call(null,vec__2736_2831,(1),null);
var seq__2739_2834 = cljs.core.seq.call(null,cols_2833);
var chunk__2740_2835 = null;
var count__2741_2836 = (0);
var i__2742_2837 = (0);
while(true){
if((i__2742_2837 < count__2741_2836)){
var vec__2743_2838 = cljs.core._nth.call(null,chunk__2740_2835,i__2742_2837);
var col_2839 = cljs.core.nth.call(null,vec__2743_2838,(0),null);
var infos_2840 = cljs.core.nth.call(null,vec__2743_2838,(1),null);
encode_cols.call(null,infos_2840,source_idx_2823,line_2832,col_2839);


var G__2841 = seq__2739_2834;
var G__2842 = chunk__2740_2835;
var G__2843 = count__2741_2836;
var G__2844 = (i__2742_2837 + (1));
seq__2739_2834 = G__2841;
chunk__2740_2835 = G__2842;
count__2741_2836 = G__2843;
i__2742_2837 = G__2844;
continue;
} else {
var temp__5457__auto___2845 = cljs.core.seq.call(null,seq__2739_2834);
if(temp__5457__auto___2845){
var seq__2739_2846__$1 = temp__5457__auto___2845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2739_2846__$1)){
var c__4319__auto___2847 = cljs.core.chunk_first.call(null,seq__2739_2846__$1);
var G__2848 = cljs.core.chunk_rest.call(null,seq__2739_2846__$1);
var G__2849 = c__4319__auto___2847;
var G__2850 = cljs.core.count.call(null,c__4319__auto___2847);
var G__2851 = (0);
seq__2739_2834 = G__2848;
chunk__2740_2835 = G__2849;
count__2741_2836 = G__2850;
i__2742_2837 = G__2851;
continue;
} else {
var vec__2746_2852 = cljs.core.first.call(null,seq__2739_2846__$1);
var col_2853 = cljs.core.nth.call(null,vec__2746_2852,(0),null);
var infos_2854 = cljs.core.nth.call(null,vec__2746_2852,(1),null);
encode_cols.call(null,infos_2854,source_idx_2823,line_2832,col_2853);


var G__2855 = cljs.core.next.call(null,seq__2739_2846__$1);
var G__2856 = null;
var G__2857 = (0);
var G__2858 = (0);
seq__2739_2834 = G__2855;
chunk__2740_2835 = G__2856;
count__2741_2836 = G__2857;
i__2742_2837 = G__2858;
continue;
}
} else {
}
}
break;
}


var G__2859 = seq__2732_2827;
var G__2860 = chunk__2733_2828;
var G__2861 = count__2734_2829;
var G__2862 = (i__2735_2830 + (1));
seq__2732_2827 = G__2859;
chunk__2733_2828 = G__2860;
count__2734_2829 = G__2861;
i__2735_2830 = G__2862;
continue;
} else {
var temp__5457__auto___2863 = cljs.core.seq.call(null,seq__2732_2827);
if(temp__5457__auto___2863){
var seq__2732_2864__$1 = temp__5457__auto___2863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2732_2864__$1)){
var c__4319__auto___2865 = cljs.core.chunk_first.call(null,seq__2732_2864__$1);
var G__2866 = cljs.core.chunk_rest.call(null,seq__2732_2864__$1);
var G__2867 = c__4319__auto___2865;
var G__2868 = cljs.core.count.call(null,c__4319__auto___2865);
var G__2869 = (0);
seq__2732_2827 = G__2866;
chunk__2733_2828 = G__2867;
count__2734_2829 = G__2868;
i__2735_2830 = G__2869;
continue;
} else {
var vec__2749_2870 = cljs.core.first.call(null,seq__2732_2864__$1);
var line_2871 = cljs.core.nth.call(null,vec__2749_2870,(0),null);
var cols_2872 = cljs.core.nth.call(null,vec__2749_2870,(1),null);
var seq__2752_2873 = cljs.core.seq.call(null,cols_2872);
var chunk__2753_2874 = null;
var count__2754_2875 = (0);
var i__2755_2876 = (0);
while(true){
if((i__2755_2876 < count__2754_2875)){
var vec__2756_2877 = cljs.core._nth.call(null,chunk__2753_2874,i__2755_2876);
var col_2878 = cljs.core.nth.call(null,vec__2756_2877,(0),null);
var infos_2879 = cljs.core.nth.call(null,vec__2756_2877,(1),null);
encode_cols.call(null,infos_2879,source_idx_2823,line_2871,col_2878);


var G__2880 = seq__2752_2873;
var G__2881 = chunk__2753_2874;
var G__2882 = count__2754_2875;
var G__2883 = (i__2755_2876 + (1));
seq__2752_2873 = G__2880;
chunk__2753_2874 = G__2881;
count__2754_2875 = G__2882;
i__2755_2876 = G__2883;
continue;
} else {
var temp__5457__auto___2884__$1 = cljs.core.seq.call(null,seq__2752_2873);
if(temp__5457__auto___2884__$1){
var seq__2752_2885__$1 = temp__5457__auto___2884__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2752_2885__$1)){
var c__4319__auto___2886 = cljs.core.chunk_first.call(null,seq__2752_2885__$1);
var G__2887 = cljs.core.chunk_rest.call(null,seq__2752_2885__$1);
var G__2888 = c__4319__auto___2886;
var G__2889 = cljs.core.count.call(null,c__4319__auto___2886);
var G__2890 = (0);
seq__2752_2873 = G__2887;
chunk__2753_2874 = G__2888;
count__2754_2875 = G__2889;
i__2755_2876 = G__2890;
continue;
} else {
var vec__2759_2891 = cljs.core.first.call(null,seq__2752_2885__$1);
var col_2892 = cljs.core.nth.call(null,vec__2759_2891,(0),null);
var infos_2893 = cljs.core.nth.call(null,vec__2759_2891,(1),null);
encode_cols.call(null,infos_2893,source_idx_2823,line_2871,col_2892);


var G__2894 = cljs.core.next.call(null,seq__2752_2885__$1);
var G__2895 = null;
var G__2896 = (0);
var G__2897 = (0);
seq__2752_2873 = G__2894;
chunk__2753_2874 = G__2895;
count__2754_2875 = G__2896;
i__2755_2876 = G__2897;
continue;
}
} else {
}
}
break;
}


var G__2898 = cljs.core.next.call(null,seq__2732_2864__$1);
var G__2899 = null;
var G__2900 = (0);
var G__2901 = (0);
seq__2732_2827 = G__2898;
chunk__2733_2828 = G__2899;
count__2734_2829 = G__2900;
i__2735_2830 = G__2901;
continue;
}
} else {
}
}
break;
}


var G__2902 = seq__2722_2818;
var G__2903 = chunk__2723_2819;
var G__2904 = count__2724_2820;
var G__2905 = (i__2725_2821 + (1));
seq__2722_2818 = G__2902;
chunk__2723_2819 = G__2903;
count__2724_2820 = G__2904;
i__2725_2821 = G__2905;
continue;
} else {
var temp__5457__auto___2906 = cljs.core.seq.call(null,seq__2722_2818);
if(temp__5457__auto___2906){
var seq__2722_2907__$1 = temp__5457__auto___2906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2722_2907__$1)){
var c__4319__auto___2908 = cljs.core.chunk_first.call(null,seq__2722_2907__$1);
var G__2909 = cljs.core.chunk_rest.call(null,seq__2722_2907__$1);
var G__2910 = c__4319__auto___2908;
var G__2911 = cljs.core.count.call(null,c__4319__auto___2908);
var G__2912 = (0);
seq__2722_2818 = G__2909;
chunk__2723_2819 = G__2910;
count__2724_2820 = G__2911;
i__2725_2821 = G__2912;
continue;
} else {
var vec__2762_2913 = cljs.core.first.call(null,seq__2722_2907__$1);
var source_idx_2914 = cljs.core.nth.call(null,vec__2762_2913,(0),null);
var vec__2765_2915 = cljs.core.nth.call(null,vec__2762_2913,(1),null);
var __2916 = cljs.core.nth.call(null,vec__2765_2915,(0),null);
var lines_2917__$1 = cljs.core.nth.call(null,vec__2765_2915,(1),null);
var seq__2768_2918 = cljs.core.seq.call(null,lines_2917__$1);
var chunk__2769_2919 = null;
var count__2770_2920 = (0);
var i__2771_2921 = (0);
while(true){
if((i__2771_2921 < count__2770_2920)){
var vec__2772_2922 = cljs.core._nth.call(null,chunk__2769_2919,i__2771_2921);
var line_2923 = cljs.core.nth.call(null,vec__2772_2922,(0),null);
var cols_2924 = cljs.core.nth.call(null,vec__2772_2922,(1),null);
var seq__2775_2925 = cljs.core.seq.call(null,cols_2924);
var chunk__2776_2926 = null;
var count__2777_2927 = (0);
var i__2778_2928 = (0);
while(true){
if((i__2778_2928 < count__2777_2927)){
var vec__2779_2929 = cljs.core._nth.call(null,chunk__2776_2926,i__2778_2928);
var col_2930 = cljs.core.nth.call(null,vec__2779_2929,(0),null);
var infos_2931 = cljs.core.nth.call(null,vec__2779_2929,(1),null);
encode_cols.call(null,infos_2931,source_idx_2914,line_2923,col_2930);


var G__2932 = seq__2775_2925;
var G__2933 = chunk__2776_2926;
var G__2934 = count__2777_2927;
var G__2935 = (i__2778_2928 + (1));
seq__2775_2925 = G__2932;
chunk__2776_2926 = G__2933;
count__2777_2927 = G__2934;
i__2778_2928 = G__2935;
continue;
} else {
var temp__5457__auto___2936__$1 = cljs.core.seq.call(null,seq__2775_2925);
if(temp__5457__auto___2936__$1){
var seq__2775_2937__$1 = temp__5457__auto___2936__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2775_2937__$1)){
var c__4319__auto___2938 = cljs.core.chunk_first.call(null,seq__2775_2937__$1);
var G__2939 = cljs.core.chunk_rest.call(null,seq__2775_2937__$1);
var G__2940 = c__4319__auto___2938;
var G__2941 = cljs.core.count.call(null,c__4319__auto___2938);
var G__2942 = (0);
seq__2775_2925 = G__2939;
chunk__2776_2926 = G__2940;
count__2777_2927 = G__2941;
i__2778_2928 = G__2942;
continue;
} else {
var vec__2782_2943 = cljs.core.first.call(null,seq__2775_2937__$1);
var col_2944 = cljs.core.nth.call(null,vec__2782_2943,(0),null);
var infos_2945 = cljs.core.nth.call(null,vec__2782_2943,(1),null);
encode_cols.call(null,infos_2945,source_idx_2914,line_2923,col_2944);


var G__2946 = cljs.core.next.call(null,seq__2775_2937__$1);
var G__2947 = null;
var G__2948 = (0);
var G__2949 = (0);
seq__2775_2925 = G__2946;
chunk__2776_2926 = G__2947;
count__2777_2927 = G__2948;
i__2778_2928 = G__2949;
continue;
}
} else {
}
}
break;
}


var G__2950 = seq__2768_2918;
var G__2951 = chunk__2769_2919;
var G__2952 = count__2770_2920;
var G__2953 = (i__2771_2921 + (1));
seq__2768_2918 = G__2950;
chunk__2769_2919 = G__2951;
count__2770_2920 = G__2952;
i__2771_2921 = G__2953;
continue;
} else {
var temp__5457__auto___2954__$1 = cljs.core.seq.call(null,seq__2768_2918);
if(temp__5457__auto___2954__$1){
var seq__2768_2955__$1 = temp__5457__auto___2954__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2768_2955__$1)){
var c__4319__auto___2956 = cljs.core.chunk_first.call(null,seq__2768_2955__$1);
var G__2957 = cljs.core.chunk_rest.call(null,seq__2768_2955__$1);
var G__2958 = c__4319__auto___2956;
var G__2959 = cljs.core.count.call(null,c__4319__auto___2956);
var G__2960 = (0);
seq__2768_2918 = G__2957;
chunk__2769_2919 = G__2958;
count__2770_2920 = G__2959;
i__2771_2921 = G__2960;
continue;
} else {
var vec__2785_2961 = cljs.core.first.call(null,seq__2768_2955__$1);
var line_2962 = cljs.core.nth.call(null,vec__2785_2961,(0),null);
var cols_2963 = cljs.core.nth.call(null,vec__2785_2961,(1),null);
var seq__2788_2964 = cljs.core.seq.call(null,cols_2963);
var chunk__2789_2965 = null;
var count__2790_2966 = (0);
var i__2791_2967 = (0);
while(true){
if((i__2791_2967 < count__2790_2966)){
var vec__2792_2968 = cljs.core._nth.call(null,chunk__2789_2965,i__2791_2967);
var col_2969 = cljs.core.nth.call(null,vec__2792_2968,(0),null);
var infos_2970 = cljs.core.nth.call(null,vec__2792_2968,(1),null);
encode_cols.call(null,infos_2970,source_idx_2914,line_2962,col_2969);


var G__2971 = seq__2788_2964;
var G__2972 = chunk__2789_2965;
var G__2973 = count__2790_2966;
var G__2974 = (i__2791_2967 + (1));
seq__2788_2964 = G__2971;
chunk__2789_2965 = G__2972;
count__2790_2966 = G__2973;
i__2791_2967 = G__2974;
continue;
} else {
var temp__5457__auto___2975__$2 = cljs.core.seq.call(null,seq__2788_2964);
if(temp__5457__auto___2975__$2){
var seq__2788_2976__$1 = temp__5457__auto___2975__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2788_2976__$1)){
var c__4319__auto___2977 = cljs.core.chunk_first.call(null,seq__2788_2976__$1);
var G__2978 = cljs.core.chunk_rest.call(null,seq__2788_2976__$1);
var G__2979 = c__4319__auto___2977;
var G__2980 = cljs.core.count.call(null,c__4319__auto___2977);
var G__2981 = (0);
seq__2788_2964 = G__2978;
chunk__2789_2965 = G__2979;
count__2790_2966 = G__2980;
i__2791_2967 = G__2981;
continue;
} else {
var vec__2795_2982 = cljs.core.first.call(null,seq__2788_2976__$1);
var col_2983 = cljs.core.nth.call(null,vec__2795_2982,(0),null);
var infos_2984 = cljs.core.nth.call(null,vec__2795_2982,(1),null);
encode_cols.call(null,infos_2984,source_idx_2914,line_2962,col_2983);


var G__2985 = cljs.core.next.call(null,seq__2788_2976__$1);
var G__2986 = null;
var G__2987 = (0);
var G__2988 = (0);
seq__2788_2964 = G__2985;
chunk__2789_2965 = G__2986;
count__2790_2966 = G__2987;
i__2791_2967 = G__2988;
continue;
}
} else {
}
}
break;
}


var G__2989 = cljs.core.next.call(null,seq__2768_2955__$1);
var G__2990 = null;
var G__2991 = (0);
var G__2992 = (0);
seq__2768_2918 = G__2989;
chunk__2769_2919 = G__2990;
count__2770_2920 = G__2991;
i__2771_2921 = G__2992;
continue;
}
} else {
}
}
break;
}


var G__2993 = cljs.core.next.call(null,seq__2722_2907__$1);
var G__2994 = null;
var G__2995 = (0);
var G__2996 = (0);
seq__2722_2818 = G__2993;
chunk__2723_2819 = G__2994;
count__2724_2820 = G__2995;
i__2725_2821 = G__2996;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__2798 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2715_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2715_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2716_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__2716_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__2717_SHARP_){
return clojure.string.join.call(null,",",p1__2717_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__2799 = G__2798;
goog.object.set(G__2799,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__2799;
} else {
return G__2798;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__2997 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__2997,(0),null);
var col_map = cljs.core.nth.call(null,vec__2997,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__3000 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__3000,(0),null);
var infos = cljs.core.nth.call(null,vec__3000,(1),null);
var G__3006 = cljs.core.next.call(null,col_map_seq);
var G__3007 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__3000,col,infos,vec__2997,line,col_map){
return (function (v,p__3003){
var map__3004 = p__3003;
var map__3004__$1 = ((((!((map__3004 == null)))?(((((map__3004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3004):map__3004);
var gline = cljs.core.get.call(null,map__3004__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__3004__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__3000,col,infos,vec__2997,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__3006;
new_cols = G__3007;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__3008 = cljs.core.next.call(null,line_map_seq);
var G__3009 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__3008;
new_lines = G__3009;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__3010_3072 = cljs.core.seq.call(null,reverse_map);
var chunk__3011_3073 = null;
var count__3012_3074 = (0);
var i__3013_3075 = (0);
while(true){
if((i__3013_3075 < count__3012_3074)){
var vec__3014_3076 = cljs.core._nth.call(null,chunk__3011_3073,i__3013_3075);
var line_3077 = cljs.core.nth.call(null,vec__3014_3076,(0),null);
var columns_3078 = cljs.core.nth.call(null,vec__3014_3076,(1),null);
var seq__3017_3079 = cljs.core.seq.call(null,columns_3078);
var chunk__3018_3080 = null;
var count__3019_3081 = (0);
var i__3020_3082 = (0);
while(true){
if((i__3020_3082 < count__3019_3081)){
var vec__3021_3083 = cljs.core._nth.call(null,chunk__3018_3080,i__3020_3082);
var column_3084 = cljs.core.nth.call(null,vec__3021_3083,(0),null);
var column_info_3085 = cljs.core.nth.call(null,vec__3021_3083,(1),null);
var seq__3024_3086 = cljs.core.seq.call(null,column_info_3085);
var chunk__3025_3087 = null;
var count__3026_3088 = (0);
var i__3027_3089 = (0);
while(true){
if((i__3027_3089 < count__3026_3088)){
var map__3028_3090 = cljs.core._nth.call(null,chunk__3025_3087,i__3027_3089);
var map__3028_3091__$1 = ((((!((map__3028_3090 == null)))?(((((map__3028_3090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3028_3090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3028_3090):map__3028_3090);
var gline_3092 = cljs.core.get.call(null,map__3028_3091__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3093 = cljs.core.get.call(null,map__3028_3091__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3094 = cljs.core.get.call(null,map__3028_3091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3092], null),cljs.core.fnil.call(null,((function (seq__3024_3086,chunk__3025_3087,count__3026_3088,i__3027_3089,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3028_3090,map__3028_3091__$1,gline_3092,gcol_3093,name_3094,vec__3021_3083,column_3084,column_info_3085,vec__3014_3076,line_3077,columns_3078,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3093], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3077,new cljs.core.Keyword(null,"col","col",-1959363084),column_3084,new cljs.core.Keyword(null,"name","name",1843675177),name_3094], null));
});})(seq__3024_3086,chunk__3025_3087,count__3026_3088,i__3027_3089,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3028_3090,map__3028_3091__$1,gline_3092,gcol_3093,name_3094,vec__3021_3083,column_3084,column_info_3085,vec__3014_3076,line_3077,columns_3078,inverted))
,cljs.core.sorted_map.call(null)));


var G__3095 = seq__3024_3086;
var G__3096 = chunk__3025_3087;
var G__3097 = count__3026_3088;
var G__3098 = (i__3027_3089 + (1));
seq__3024_3086 = G__3095;
chunk__3025_3087 = G__3096;
count__3026_3088 = G__3097;
i__3027_3089 = G__3098;
continue;
} else {
var temp__5457__auto___3099 = cljs.core.seq.call(null,seq__3024_3086);
if(temp__5457__auto___3099){
var seq__3024_3100__$1 = temp__5457__auto___3099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3024_3100__$1)){
var c__4319__auto___3101 = cljs.core.chunk_first.call(null,seq__3024_3100__$1);
var G__3102 = cljs.core.chunk_rest.call(null,seq__3024_3100__$1);
var G__3103 = c__4319__auto___3101;
var G__3104 = cljs.core.count.call(null,c__4319__auto___3101);
var G__3105 = (0);
seq__3024_3086 = G__3102;
chunk__3025_3087 = G__3103;
count__3026_3088 = G__3104;
i__3027_3089 = G__3105;
continue;
} else {
var map__3030_3106 = cljs.core.first.call(null,seq__3024_3100__$1);
var map__3030_3107__$1 = ((((!((map__3030_3106 == null)))?(((((map__3030_3106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3030_3106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3030_3106):map__3030_3106);
var gline_3108 = cljs.core.get.call(null,map__3030_3107__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3109 = cljs.core.get.call(null,map__3030_3107__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3110 = cljs.core.get.call(null,map__3030_3107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3108], null),cljs.core.fnil.call(null,((function (seq__3024_3086,chunk__3025_3087,count__3026_3088,i__3027_3089,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3030_3106,map__3030_3107__$1,gline_3108,gcol_3109,name_3110,seq__3024_3100__$1,temp__5457__auto___3099,vec__3021_3083,column_3084,column_info_3085,vec__3014_3076,line_3077,columns_3078,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3109], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3077,new cljs.core.Keyword(null,"col","col",-1959363084),column_3084,new cljs.core.Keyword(null,"name","name",1843675177),name_3110], null));
});})(seq__3024_3086,chunk__3025_3087,count__3026_3088,i__3027_3089,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3030_3106,map__3030_3107__$1,gline_3108,gcol_3109,name_3110,seq__3024_3100__$1,temp__5457__auto___3099,vec__3021_3083,column_3084,column_info_3085,vec__3014_3076,line_3077,columns_3078,inverted))
,cljs.core.sorted_map.call(null)));


var G__3111 = cljs.core.next.call(null,seq__3024_3100__$1);
var G__3112 = null;
var G__3113 = (0);
var G__3114 = (0);
seq__3024_3086 = G__3111;
chunk__3025_3087 = G__3112;
count__3026_3088 = G__3113;
i__3027_3089 = G__3114;
continue;
}
} else {
}
}
break;
}


var G__3115 = seq__3017_3079;
var G__3116 = chunk__3018_3080;
var G__3117 = count__3019_3081;
var G__3118 = (i__3020_3082 + (1));
seq__3017_3079 = G__3115;
chunk__3018_3080 = G__3116;
count__3019_3081 = G__3117;
i__3020_3082 = G__3118;
continue;
} else {
var temp__5457__auto___3119 = cljs.core.seq.call(null,seq__3017_3079);
if(temp__5457__auto___3119){
var seq__3017_3120__$1 = temp__5457__auto___3119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3017_3120__$1)){
var c__4319__auto___3121 = cljs.core.chunk_first.call(null,seq__3017_3120__$1);
var G__3122 = cljs.core.chunk_rest.call(null,seq__3017_3120__$1);
var G__3123 = c__4319__auto___3121;
var G__3124 = cljs.core.count.call(null,c__4319__auto___3121);
var G__3125 = (0);
seq__3017_3079 = G__3122;
chunk__3018_3080 = G__3123;
count__3019_3081 = G__3124;
i__3020_3082 = G__3125;
continue;
} else {
var vec__3032_3126 = cljs.core.first.call(null,seq__3017_3120__$1);
var column_3127 = cljs.core.nth.call(null,vec__3032_3126,(0),null);
var column_info_3128 = cljs.core.nth.call(null,vec__3032_3126,(1),null);
var seq__3035_3129 = cljs.core.seq.call(null,column_info_3128);
var chunk__3036_3130 = null;
var count__3037_3131 = (0);
var i__3038_3132 = (0);
while(true){
if((i__3038_3132 < count__3037_3131)){
var map__3039_3133 = cljs.core._nth.call(null,chunk__3036_3130,i__3038_3132);
var map__3039_3134__$1 = ((((!((map__3039_3133 == null)))?(((((map__3039_3133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3039_3133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3039_3133):map__3039_3133);
var gline_3135 = cljs.core.get.call(null,map__3039_3134__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3136 = cljs.core.get.call(null,map__3039_3134__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3137 = cljs.core.get.call(null,map__3039_3134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3135], null),cljs.core.fnil.call(null,((function (seq__3035_3129,chunk__3036_3130,count__3037_3131,i__3038_3132,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3039_3133,map__3039_3134__$1,gline_3135,gcol_3136,name_3137,vec__3032_3126,column_3127,column_info_3128,seq__3017_3120__$1,temp__5457__auto___3119,vec__3014_3076,line_3077,columns_3078,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3136], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3077,new cljs.core.Keyword(null,"col","col",-1959363084),column_3127,new cljs.core.Keyword(null,"name","name",1843675177),name_3137], null));
});})(seq__3035_3129,chunk__3036_3130,count__3037_3131,i__3038_3132,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3039_3133,map__3039_3134__$1,gline_3135,gcol_3136,name_3137,vec__3032_3126,column_3127,column_info_3128,seq__3017_3120__$1,temp__5457__auto___3119,vec__3014_3076,line_3077,columns_3078,inverted))
,cljs.core.sorted_map.call(null)));


var G__3138 = seq__3035_3129;
var G__3139 = chunk__3036_3130;
var G__3140 = count__3037_3131;
var G__3141 = (i__3038_3132 + (1));
seq__3035_3129 = G__3138;
chunk__3036_3130 = G__3139;
count__3037_3131 = G__3140;
i__3038_3132 = G__3141;
continue;
} else {
var temp__5457__auto___3142__$1 = cljs.core.seq.call(null,seq__3035_3129);
if(temp__5457__auto___3142__$1){
var seq__3035_3143__$1 = temp__5457__auto___3142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3035_3143__$1)){
var c__4319__auto___3144 = cljs.core.chunk_first.call(null,seq__3035_3143__$1);
var G__3145 = cljs.core.chunk_rest.call(null,seq__3035_3143__$1);
var G__3146 = c__4319__auto___3144;
var G__3147 = cljs.core.count.call(null,c__4319__auto___3144);
var G__3148 = (0);
seq__3035_3129 = G__3145;
chunk__3036_3130 = G__3146;
count__3037_3131 = G__3147;
i__3038_3132 = G__3148;
continue;
} else {
var map__3041_3149 = cljs.core.first.call(null,seq__3035_3143__$1);
var map__3041_3150__$1 = ((((!((map__3041_3149 == null)))?(((((map__3041_3149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3041_3149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3041_3149):map__3041_3149);
var gline_3151 = cljs.core.get.call(null,map__3041_3150__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3152 = cljs.core.get.call(null,map__3041_3150__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3153 = cljs.core.get.call(null,map__3041_3150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3151], null),cljs.core.fnil.call(null,((function (seq__3035_3129,chunk__3036_3130,count__3037_3131,i__3038_3132,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3041_3149,map__3041_3150__$1,gline_3151,gcol_3152,name_3153,seq__3035_3143__$1,temp__5457__auto___3142__$1,vec__3032_3126,column_3127,column_info_3128,seq__3017_3120__$1,temp__5457__auto___3119,vec__3014_3076,line_3077,columns_3078,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3152], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3077,new cljs.core.Keyword(null,"col","col",-1959363084),column_3127,new cljs.core.Keyword(null,"name","name",1843675177),name_3153], null));
});})(seq__3035_3129,chunk__3036_3130,count__3037_3131,i__3038_3132,seq__3017_3079,chunk__3018_3080,count__3019_3081,i__3020_3082,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3041_3149,map__3041_3150__$1,gline_3151,gcol_3152,name_3153,seq__3035_3143__$1,temp__5457__auto___3142__$1,vec__3032_3126,column_3127,column_info_3128,seq__3017_3120__$1,temp__5457__auto___3119,vec__3014_3076,line_3077,columns_3078,inverted))
,cljs.core.sorted_map.call(null)));


var G__3154 = cljs.core.next.call(null,seq__3035_3143__$1);
var G__3155 = null;
var G__3156 = (0);
var G__3157 = (0);
seq__3035_3129 = G__3154;
chunk__3036_3130 = G__3155;
count__3037_3131 = G__3156;
i__3038_3132 = G__3157;
continue;
}
} else {
}
}
break;
}


var G__3158 = cljs.core.next.call(null,seq__3017_3120__$1);
var G__3159 = null;
var G__3160 = (0);
var G__3161 = (0);
seq__3017_3079 = G__3158;
chunk__3018_3080 = G__3159;
count__3019_3081 = G__3160;
i__3020_3082 = G__3161;
continue;
}
} else {
}
}
break;
}


var G__3162 = seq__3010_3072;
var G__3163 = chunk__3011_3073;
var G__3164 = count__3012_3074;
var G__3165 = (i__3013_3075 + (1));
seq__3010_3072 = G__3162;
chunk__3011_3073 = G__3163;
count__3012_3074 = G__3164;
i__3013_3075 = G__3165;
continue;
} else {
var temp__5457__auto___3166 = cljs.core.seq.call(null,seq__3010_3072);
if(temp__5457__auto___3166){
var seq__3010_3167__$1 = temp__5457__auto___3166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3010_3167__$1)){
var c__4319__auto___3168 = cljs.core.chunk_first.call(null,seq__3010_3167__$1);
var G__3169 = cljs.core.chunk_rest.call(null,seq__3010_3167__$1);
var G__3170 = c__4319__auto___3168;
var G__3171 = cljs.core.count.call(null,c__4319__auto___3168);
var G__3172 = (0);
seq__3010_3072 = G__3169;
chunk__3011_3073 = G__3170;
count__3012_3074 = G__3171;
i__3013_3075 = G__3172;
continue;
} else {
var vec__3043_3173 = cljs.core.first.call(null,seq__3010_3167__$1);
var line_3174 = cljs.core.nth.call(null,vec__3043_3173,(0),null);
var columns_3175 = cljs.core.nth.call(null,vec__3043_3173,(1),null);
var seq__3046_3176 = cljs.core.seq.call(null,columns_3175);
var chunk__3047_3177 = null;
var count__3048_3178 = (0);
var i__3049_3179 = (0);
while(true){
if((i__3049_3179 < count__3048_3178)){
var vec__3050_3180 = cljs.core._nth.call(null,chunk__3047_3177,i__3049_3179);
var column_3181 = cljs.core.nth.call(null,vec__3050_3180,(0),null);
var column_info_3182 = cljs.core.nth.call(null,vec__3050_3180,(1),null);
var seq__3053_3183 = cljs.core.seq.call(null,column_info_3182);
var chunk__3054_3184 = null;
var count__3055_3185 = (0);
var i__3056_3186 = (0);
while(true){
if((i__3056_3186 < count__3055_3185)){
var map__3057_3187 = cljs.core._nth.call(null,chunk__3054_3184,i__3056_3186);
var map__3057_3188__$1 = ((((!((map__3057_3187 == null)))?(((((map__3057_3187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3057_3187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3057_3187):map__3057_3187);
var gline_3189 = cljs.core.get.call(null,map__3057_3188__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3190 = cljs.core.get.call(null,map__3057_3188__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3191 = cljs.core.get.call(null,map__3057_3188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3189], null),cljs.core.fnil.call(null,((function (seq__3053_3183,chunk__3054_3184,count__3055_3185,i__3056_3186,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3057_3187,map__3057_3188__$1,gline_3189,gcol_3190,name_3191,vec__3050_3180,column_3181,column_info_3182,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3190], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3174,new cljs.core.Keyword(null,"col","col",-1959363084),column_3181,new cljs.core.Keyword(null,"name","name",1843675177),name_3191], null));
});})(seq__3053_3183,chunk__3054_3184,count__3055_3185,i__3056_3186,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3057_3187,map__3057_3188__$1,gline_3189,gcol_3190,name_3191,vec__3050_3180,column_3181,column_info_3182,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted))
,cljs.core.sorted_map.call(null)));


var G__3192 = seq__3053_3183;
var G__3193 = chunk__3054_3184;
var G__3194 = count__3055_3185;
var G__3195 = (i__3056_3186 + (1));
seq__3053_3183 = G__3192;
chunk__3054_3184 = G__3193;
count__3055_3185 = G__3194;
i__3056_3186 = G__3195;
continue;
} else {
var temp__5457__auto___3196__$1 = cljs.core.seq.call(null,seq__3053_3183);
if(temp__5457__auto___3196__$1){
var seq__3053_3197__$1 = temp__5457__auto___3196__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3053_3197__$1)){
var c__4319__auto___3198 = cljs.core.chunk_first.call(null,seq__3053_3197__$1);
var G__3199 = cljs.core.chunk_rest.call(null,seq__3053_3197__$1);
var G__3200 = c__4319__auto___3198;
var G__3201 = cljs.core.count.call(null,c__4319__auto___3198);
var G__3202 = (0);
seq__3053_3183 = G__3199;
chunk__3054_3184 = G__3200;
count__3055_3185 = G__3201;
i__3056_3186 = G__3202;
continue;
} else {
var map__3059_3203 = cljs.core.first.call(null,seq__3053_3197__$1);
var map__3059_3204__$1 = ((((!((map__3059_3203 == null)))?(((((map__3059_3203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3059_3203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3059_3203):map__3059_3203);
var gline_3205 = cljs.core.get.call(null,map__3059_3204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3206 = cljs.core.get.call(null,map__3059_3204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3207 = cljs.core.get.call(null,map__3059_3204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3205], null),cljs.core.fnil.call(null,((function (seq__3053_3183,chunk__3054_3184,count__3055_3185,i__3056_3186,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3059_3203,map__3059_3204__$1,gline_3205,gcol_3206,name_3207,seq__3053_3197__$1,temp__5457__auto___3196__$1,vec__3050_3180,column_3181,column_info_3182,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3206], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3174,new cljs.core.Keyword(null,"col","col",-1959363084),column_3181,new cljs.core.Keyword(null,"name","name",1843675177),name_3207], null));
});})(seq__3053_3183,chunk__3054_3184,count__3055_3185,i__3056_3186,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3059_3203,map__3059_3204__$1,gline_3205,gcol_3206,name_3207,seq__3053_3197__$1,temp__5457__auto___3196__$1,vec__3050_3180,column_3181,column_info_3182,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted))
,cljs.core.sorted_map.call(null)));


var G__3208 = cljs.core.next.call(null,seq__3053_3197__$1);
var G__3209 = null;
var G__3210 = (0);
var G__3211 = (0);
seq__3053_3183 = G__3208;
chunk__3054_3184 = G__3209;
count__3055_3185 = G__3210;
i__3056_3186 = G__3211;
continue;
}
} else {
}
}
break;
}


var G__3212 = seq__3046_3176;
var G__3213 = chunk__3047_3177;
var G__3214 = count__3048_3178;
var G__3215 = (i__3049_3179 + (1));
seq__3046_3176 = G__3212;
chunk__3047_3177 = G__3213;
count__3048_3178 = G__3214;
i__3049_3179 = G__3215;
continue;
} else {
var temp__5457__auto___3216__$1 = cljs.core.seq.call(null,seq__3046_3176);
if(temp__5457__auto___3216__$1){
var seq__3046_3217__$1 = temp__5457__auto___3216__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3046_3217__$1)){
var c__4319__auto___3218 = cljs.core.chunk_first.call(null,seq__3046_3217__$1);
var G__3219 = cljs.core.chunk_rest.call(null,seq__3046_3217__$1);
var G__3220 = c__4319__auto___3218;
var G__3221 = cljs.core.count.call(null,c__4319__auto___3218);
var G__3222 = (0);
seq__3046_3176 = G__3219;
chunk__3047_3177 = G__3220;
count__3048_3178 = G__3221;
i__3049_3179 = G__3222;
continue;
} else {
var vec__3061_3223 = cljs.core.first.call(null,seq__3046_3217__$1);
var column_3224 = cljs.core.nth.call(null,vec__3061_3223,(0),null);
var column_info_3225 = cljs.core.nth.call(null,vec__3061_3223,(1),null);
var seq__3064_3226 = cljs.core.seq.call(null,column_info_3225);
var chunk__3065_3227 = null;
var count__3066_3228 = (0);
var i__3067_3229 = (0);
while(true){
if((i__3067_3229 < count__3066_3228)){
var map__3068_3230 = cljs.core._nth.call(null,chunk__3065_3227,i__3067_3229);
var map__3068_3231__$1 = ((((!((map__3068_3230 == null)))?(((((map__3068_3230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3068_3230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3068_3230):map__3068_3230);
var gline_3232 = cljs.core.get.call(null,map__3068_3231__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3233 = cljs.core.get.call(null,map__3068_3231__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3234 = cljs.core.get.call(null,map__3068_3231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3232], null),cljs.core.fnil.call(null,((function (seq__3064_3226,chunk__3065_3227,count__3066_3228,i__3067_3229,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3068_3230,map__3068_3231__$1,gline_3232,gcol_3233,name_3234,vec__3061_3223,column_3224,column_info_3225,seq__3046_3217__$1,temp__5457__auto___3216__$1,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3233], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3174,new cljs.core.Keyword(null,"col","col",-1959363084),column_3224,new cljs.core.Keyword(null,"name","name",1843675177),name_3234], null));
});})(seq__3064_3226,chunk__3065_3227,count__3066_3228,i__3067_3229,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3068_3230,map__3068_3231__$1,gline_3232,gcol_3233,name_3234,vec__3061_3223,column_3224,column_info_3225,seq__3046_3217__$1,temp__5457__auto___3216__$1,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted))
,cljs.core.sorted_map.call(null)));


var G__3235 = seq__3064_3226;
var G__3236 = chunk__3065_3227;
var G__3237 = count__3066_3228;
var G__3238 = (i__3067_3229 + (1));
seq__3064_3226 = G__3235;
chunk__3065_3227 = G__3236;
count__3066_3228 = G__3237;
i__3067_3229 = G__3238;
continue;
} else {
var temp__5457__auto___3239__$2 = cljs.core.seq.call(null,seq__3064_3226);
if(temp__5457__auto___3239__$2){
var seq__3064_3240__$1 = temp__5457__auto___3239__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3064_3240__$1)){
var c__4319__auto___3241 = cljs.core.chunk_first.call(null,seq__3064_3240__$1);
var G__3242 = cljs.core.chunk_rest.call(null,seq__3064_3240__$1);
var G__3243 = c__4319__auto___3241;
var G__3244 = cljs.core.count.call(null,c__4319__auto___3241);
var G__3245 = (0);
seq__3064_3226 = G__3242;
chunk__3065_3227 = G__3243;
count__3066_3228 = G__3244;
i__3067_3229 = G__3245;
continue;
} else {
var map__3070_3246 = cljs.core.first.call(null,seq__3064_3240__$1);
var map__3070_3247__$1 = ((((!((map__3070_3246 == null)))?(((((map__3070_3246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3070_3246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3070_3246):map__3070_3246);
var gline_3248 = cljs.core.get.call(null,map__3070_3247__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_3249 = cljs.core.get.call(null,map__3070_3247__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_3250 = cljs.core.get.call(null,map__3070_3247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_3248], null),cljs.core.fnil.call(null,((function (seq__3064_3226,chunk__3065_3227,count__3066_3228,i__3067_3229,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3070_3246,map__3070_3247__$1,gline_3248,gcol_3249,name_3250,seq__3064_3240__$1,temp__5457__auto___3239__$2,vec__3061_3223,column_3224,column_info_3225,seq__3046_3217__$1,temp__5457__auto___3216__$1,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_3249], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_3174,new cljs.core.Keyword(null,"col","col",-1959363084),column_3224,new cljs.core.Keyword(null,"name","name",1843675177),name_3250], null));
});})(seq__3064_3226,chunk__3065_3227,count__3066_3228,i__3067_3229,seq__3046_3176,chunk__3047_3177,count__3048_3178,i__3049_3179,seq__3010_3072,chunk__3011_3073,count__3012_3074,i__3013_3075,map__3070_3246,map__3070_3247__$1,gline_3248,gcol_3249,name_3250,seq__3064_3240__$1,temp__5457__auto___3239__$2,vec__3061_3223,column_3224,column_info_3225,seq__3046_3217__$1,temp__5457__auto___3216__$1,vec__3043_3173,line_3174,columns_3175,seq__3010_3167__$1,temp__5457__auto___3166,inverted))
,cljs.core.sorted_map.call(null)));


var G__3251 = cljs.core.next.call(null,seq__3064_3240__$1);
var G__3252 = null;
var G__3253 = (0);
var G__3254 = (0);
seq__3064_3226 = G__3251;
chunk__3065_3227 = G__3252;
count__3066_3228 = G__3253;
i__3067_3229 = G__3254;
continue;
}
} else {
}
}
break;
}


var G__3255 = cljs.core.next.call(null,seq__3046_3217__$1);
var G__3256 = null;
var G__3257 = (0);
var G__3258 = (0);
seq__3046_3176 = G__3255;
chunk__3047_3177 = G__3256;
count__3048_3178 = G__3257;
i__3049_3179 = G__3258;
continue;
}
} else {
}
}
break;
}


var G__3259 = cljs.core.next.call(null,seq__3010_3167__$1);
var G__3260 = null;
var G__3261 = (0);
var G__3262 = (0);
seq__3010_3072 = G__3259;
chunk__3011_3073 = G__3260;
count__3012_3074 = G__3261;
i__3013_3075 = G__3262;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
