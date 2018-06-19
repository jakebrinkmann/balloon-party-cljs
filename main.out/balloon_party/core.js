// Compiled by ClojureScript 1.10.238 {}
goog.provide('balloon_party.core');
goog.require('cljs.core');
goog.require('play_cljs.core');
goog.require('goog.events');
if(typeof balloon_party.core.game !== 'undefined'){
} else {
balloon_party.core.game = play_cljs.core.create_game.call(null,window.innerWidth,window.innerHeight);
}
if(typeof balloon_party.core.state !== 'undefined'){
} else {
balloon_party.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
balloon_party.core.main_screen = (function (){
if(typeof balloon_party.core.t_balloon_party$core29071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
balloon_party.core.t_balloon_party$core29071 = (function (meta29072){
this.meta29072 = meta29072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
balloon_party.core.t_balloon_party$core29071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29073,meta29072__$1){
var self__ = this;
var _29073__$1 = this;
return (new balloon_party.core.t_balloon_party$core29071(meta29072__$1));
});

balloon_party.core.t_balloon_party$core29071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29073){
var self__ = this;
var _29073__$1 = this;
return self__.meta29072;
});

balloon_party.core.t_balloon_party$core29071.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

balloon_party.core.t_balloon_party$core29071.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,balloon_party.core.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-x","text-x",-1791964043),(20),new cljs.core.Keyword(null,"text-y","text-y",-1680264360),(30)], null));
});

balloon_party.core.t_balloon_party$core29071.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

balloon_party.core.t_balloon_party$core29071.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,balloon_party.core.game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightblue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),window.innerWidth,new cljs.core.Keyword(null,"height","height",1025178622),window.innerHeight], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightgreen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((window.innerWidth / (2)) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),((window.innerHeight / (2)) | (0)),new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)),new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(70)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (0)),new cljs.core.Keyword(null,"y1","y1",589123466),(new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (0)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (0)),new cljs.core.Keyword(null,"y2","y2",-718691301),(new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (25)),new cljs.core.Keyword(null,"x3","x3",-1314178287),(new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (35)),new cljs.core.Keyword(null,"y3","y3",-42815418),(new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (50)),new cljs.core.Keyword(null,"x4","x4",1510536137),(new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) - (70)),new cljs.core.Keyword(null,"y4","y4",1391924217),(new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,balloon_party.core.state)) + (99))], null)], null)], null)], null));
});

balloon_party.core.t_balloon_party$core29071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29072","meta29072",664860802,null)], null);
});

balloon_party.core.t_balloon_party$core29071.cljs$lang$type = true;

balloon_party.core.t_balloon_party$core29071.cljs$lang$ctorStr = "balloon-party.core/t_balloon_party$core29071";

balloon_party.core.t_balloon_party$core29071.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"balloon-party.core/t_balloon_party$core29071");
});

/**
 * Positional factory function for balloon-party.core/t_balloon_party$core29071.
 */
balloon_party.core.__GT_t_balloon_party$core29071 = (function balloon_party$core$__GT_t_balloon_party$core29071(meta29072){
return (new balloon_party.core.t_balloon_party$core29071(meta29072));
});

}

return (new balloon_party.core.t_balloon_party$core29071(cljs.core.PersistentArrayMap.EMPTY));
})()
;
goog.events.listen(window,"mousemove",(function (event){
return cljs.core.swap_BANG_.call(null,balloon_party.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"text-x","text-x",-1791964043),event.clientX,new cljs.core.Keyword(null,"text-y","text-y",-1680264360),event.clientY);
}));
goog.events.listen(window,"resize",(function (event){
return play_cljs.core.set_size.call(null,balloon_party.core.game,window.innerWidth,window.innerHeight);
}));
var G__29074_29075 = balloon_party.core.game;
play_cljs.core.start.call(null,G__29074_29075);

play_cljs.core.set_screen.call(null,G__29074_29075,balloon_party.core.main_screen);


//# sourceMappingURL=core.js.map
