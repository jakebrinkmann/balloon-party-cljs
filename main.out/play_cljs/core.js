// Compiled by ClojureScript 1.10.238 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('p5.core');
goog.require('p5.tiled_map');
goog.require('cljs.core.async');
goog.require('play_cljs.options');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_show$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_show$arity$1(screen);
} else {
var x__4211__auto__ = (((screen == null))?null:screen);
var m__4212__auto__ = (play_cljs.core.on_show[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,screen);
} else {
var m__4212__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",screen);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_hide$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_hide$arity$1(screen);
} else {
var x__4211__auto__ = (((screen == null))?null:screen);
var m__4212__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,screen);
} else {
var m__4212__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",screen);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(screen){
if(((!((screen == null))) && (!((screen.play_cljs$core$Screen$on_render$arity$1 == null))))){
return screen.play_cljs$core$Screen$on_render$arity$1(screen);
} else {
var x__4211__auto__ = (((screen == null))?null:screen);
var m__4212__auto__ = (play_cljs.core.on_render[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,screen);
} else {
var m__4212__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",screen);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling `create-game`.
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null))))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.start[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Adds an event listener.
 */
play_cljs.core.listen = (function play_cljs$core$listen(game,listen_type,listener){
if(((!((game == null))) && (!((game.play_cljs$core$Game$listen$arity$3 == null))))){
return game.play_cljs$core$Game$listen$arity$3(game,listen_type,listener);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.listen[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,listen_type,listener);
} else {
var m__4212__auto____$1 = (play_cljs.core.listen["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,listen_type,listener);
} else {
throw cljs.core.missing_protocol.call(null,"Game.listen",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null))))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.render[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,content);
} else {
var m__4212__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an `Image` object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if(((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null))))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,image_name,width,height,content);
} else {
var m__4212__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an `Image` object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null))))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.load_image[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,path);
} else {
var m__4212__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a `TiledMap` object.
 * A tiled map with the provided name must already be loaded
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null))))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,map_name);
} else {
var m__4212__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the `Screen` object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null))))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the `Screen` object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null))))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,screen);
} else {
var m__4212__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null))))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null))))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null))))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null))))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null))))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_width[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null))))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_height[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if(((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null))))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.set_size[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,width,height);
} else {
var m__4212__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if(((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null))))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__4211__auto__ = (((game == null))?null:game);
var m__4212__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,game,name);
} else {
var m__4212__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,game,name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-asset",game);
}
}
}
});

play_cljs.core.start_example_game = (function play_cljs$core$start_example_game(game,card,_STAR_state){
var G__12459 = game;
play_cljs.core.start.call(null,G__12459);

play_cljs.core.set_size.call(null,G__12459,card.clientWidth,card.clientHeight);

play_cljs.core.listen.call(null,G__12459,"mousemove",((function (G__12459){
return (function (event){
var bounds = card.getBoundingClientRect();
var x = (event.clientX - bounds.left);
var y = (event.clientY - bounds.top);
return cljs.core.swap_BANG_.call(null,_STAR_state,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y);
});})(G__12459))
);

play_cljs.core.listen.call(null,G__12459,"resize",((function (G__12459){
return (function (event){
return play_cljs.core.set_size.call(null,game,card.clientWidth,card.clientHeight);
});})(G__12459))
);

return G__12459;
});
if(typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined'){
} else {
/**
 * Internal multimethod for drawing entities. Extending this will allow you
 * to define new entity types.
 */
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.core","draw-sketch!"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (game,renderer,content,parent_opts){
var k = cljs.core.first.call(null,content);
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.sequential_QMARK_.call(null,k)){
return new cljs.core.Keyword("play-cljs.core","multiple","play-cljs.core/multiple",-959817429);
} else {
return null;
}
}
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword("play-cljs.core","multiple","play-cljs.core/multiple",-959817429),(function (game,renderer,content,parent_opts){
return cljs.core.run_BANG_.call(null,(function (p1__12460_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__12460_SHARP_,parent_opts);
}),content);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (game,renderer,content,parent_opts){
var temp__5457__auto__ = cljs.core.first.call(null,content);
if(cljs.core.truth_(temp__5457__auto__)){
var name = temp__5457__auto__;
throw (new Error(["Command not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')));
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (game,renderer,content,parent_opts){
var vec__12461 = content;
var seq__12462 = cljs.core.seq.call(null,vec__12461);
var first__12463 = cljs.core.first.call(null,seq__12462);
var seq__12462__$1 = cljs.core.next.call(null,seq__12462);
var _ = first__12463;
var first__12463__$1 = cljs.core.first.call(null,seq__12462__$1);
var seq__12462__$2 = cljs.core.next.call(null,seq__12462__$1);
var opts = first__12463__$1;
var children = seq__12462__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","basic-opts","play-cljs.options/basic-opts",1575435453),opts__$1);
} else {
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__12464 = content;
var seq__12465 = cljs.core.seq.call(null,vec__12464);
var first__12466 = cljs.core.first.call(null,seq__12465);
var seq__12465__$1 = cljs.core.next.call(null,seq__12465);
var _ = first__12466;
var first__12466__$1 = cljs.core.first.call(null,seq__12465__$1);
var seq__12465__$2 = cljs.core.next.call(null,seq__12465__$1);
var opts = first__12466__$1;
var children = seq__12465__$2;
var map__12467 = play_cljs.options.update_opts.call(null,opts,parent_opts,play_cljs.options.text_defaults);
var map__12467__$1 = ((((!((map__12467 == null)))?(((((map__12467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12467):map__12467);
var opts__$1 = map__12467__$1;
var value = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__12467__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","text-opts","play-cljs.options/text-opts",80485593),opts__$1);
} else {
}

var G__12469_12470 = renderer;
G__12469_12470.textSize(size);

G__12469_12470.textFont(font);

G__12469_12470.textAlign(play_cljs.options.halign__GT_constant.call(null,renderer,halign),play_cljs.options.valign__GT_constant.call(null,renderer,valign));

G__12469_12470.textLeading(leading);

G__12469_12470.textStyle(play_cljs.options.style__GT_constant.call(null,renderer,style));

G__12469_12470.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__12471 = content;
var seq__12472 = cljs.core.seq.call(null,vec__12471);
var first__12473 = cljs.core.first.call(null,seq__12472);
var seq__12472__$1 = cljs.core.next.call(null,seq__12472);
var _ = first__12473;
var first__12473__$1 = cljs.core.first.call(null,seq__12472__$1);
var seq__12472__$2 = cljs.core.next.call(null,seq__12472__$1);
var opts = first__12473__$1;
var children = seq__12472__$2;
var map__12474 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12474__$1 = ((((!((map__12474 == null)))?(((((map__12474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12474):map__12474);
var opts__$1 = map__12474__$1;
var x = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","arc-opts","play-cljs.options/arc-opts",-2061724142),opts__$1);
} else {
}

renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__12476 = content;
var seq__12477 = cljs.core.seq.call(null,vec__12476);
var first__12478 = cljs.core.first.call(null,seq__12477);
var seq__12477__$1 = cljs.core.next.call(null,seq__12477);
var _ = first__12478;
var first__12478__$1 = cljs.core.first.call(null,seq__12477__$1);
var seq__12477__$2 = cljs.core.next.call(null,seq__12477__$1);
var opts = first__12478__$1;
var children = seq__12477__$2;
var map__12479 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12479__$1 = ((((!((map__12479 == null)))?(((((map__12479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12479):map__12479);
var opts__$1 = map__12479__$1;
var x = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12479__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","ellipse-opts","play-cljs.options/ellipse-opts",-2019187814),opts__$1);
} else {
}

renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__12481 = content;
var seq__12482 = cljs.core.seq.call(null,vec__12481);
var first__12483 = cljs.core.first.call(null,seq__12482);
var seq__12482__$1 = cljs.core.next.call(null,seq__12482);
var _ = first__12483;
var first__12483__$1 = cljs.core.first.call(null,seq__12482__$1);
var seq__12482__$2 = cljs.core.next.call(null,seq__12482__$1);
var opts = first__12483__$1;
var children = seq__12482__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","line-opts","play-cljs.options/line-opts",-1922464746),opts__$1):null);
var map__12484 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12484__$1 = ((((!((map__12484 == null)))?(((((map__12484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12484):map__12484);
var opts__$2 = map__12484__$1;
var x1 = cljs.core.get.call(null,map__12484__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12484__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12484__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12484__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__12486 = content;
var seq__12487 = cljs.core.seq.call(null,vec__12486);
var first__12488 = cljs.core.first.call(null,seq__12487);
var seq__12487__$1 = cljs.core.next.call(null,seq__12487);
var _ = first__12488;
var first__12488__$1 = cljs.core.first.call(null,seq__12487__$1);
var seq__12487__$2 = cljs.core.next.call(null,seq__12487__$1);
var opts = first__12488__$1;
var children = seq__12487__$2;
var map__12489 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12489__$1 = ((((!((map__12489 == null)))?(((((map__12489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12489):map__12489);
var opts__$1 = map__12489__$1;
var x = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12489__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","point-opts","play-cljs.options/point-opts",-2087468248),opts__$1);
} else {
}

renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__12491 = content;
var seq__12492 = cljs.core.seq.call(null,vec__12491);
var first__12493 = cljs.core.first.call(null,seq__12492);
var seq__12492__$1 = cljs.core.next.call(null,seq__12492);
var _ = first__12493;
var first__12493__$1 = cljs.core.first.call(null,seq__12492__$1);
var seq__12492__$2 = cljs.core.next.call(null,seq__12492__$1);
var opts = first__12493__$1;
var children = seq__12492__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","quad-opts","play-cljs.options/quad-opts",-218754219),opts__$1):null);
var map__12494 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12494__$1 = ((((!((map__12494 == null)))?(((((map__12494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12494):map__12494);
var opts__$2 = map__12494__$1;
var x1 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__12494__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__12496 = content;
var seq__12497 = cljs.core.seq.call(null,vec__12496);
var first__12498 = cljs.core.first.call(null,seq__12497);
var seq__12497__$1 = cljs.core.next.call(null,seq__12497);
var _ = first__12498;
var first__12498__$1 = cljs.core.first.call(null,seq__12497__$1);
var seq__12497__$2 = cljs.core.next.call(null,seq__12497__$1);
var opts = first__12498__$1;
var children = seq__12497__$2;
var map__12499 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12499__$1 = ((((!((map__12499 == null)))?(((((map__12499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12499):map__12499);
var opts__$1 = map__12499__$1;
var x = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12499__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","rect-opts","play-cljs.options/rect-opts",804210777),opts__$1);
} else {
}

renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__12501 = content;
var seq__12502 = cljs.core.seq.call(null,vec__12501);
var first__12503 = cljs.core.first.call(null,seq__12502);
var seq__12502__$1 = cljs.core.next.call(null,seq__12502);
var _ = first__12503;
var first__12503__$1 = cljs.core.first.call(null,seq__12502__$1);
var seq__12502__$2 = cljs.core.next.call(null,seq__12502__$1);
var opts = first__12503__$1;
var children = seq__12502__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","triangle-opts","play-cljs.options/triangle-opts",-1559275569),opts__$1):null);
var map__12504 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12504__$1 = ((((!((map__12504 == null)))?(((((map__12504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12504):map__12504);
var opts__$2 = map__12504__$1;
var x1 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__12506 = content;
var seq__12507 = cljs.core.seq.call(null,vec__12506);
var first__12508 = cljs.core.first.call(null,seq__12507);
var seq__12507__$1 = cljs.core.next.call(null,seq__12507);
var _ = first__12508;
var first__12508__$1 = cljs.core.first.call(null,seq__12507__$1);
var seq__12507__$2 = cljs.core.next.call(null,seq__12507__$1);
var opts = first__12508__$1;
var children = seq__12507__$2;
var map__12509 = play_cljs.options.update_opts.call(null,opts,parent_opts,play_cljs.options.image_defaults);
var map__12509__$1 = ((((!((map__12509 == null)))?(((((map__12509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12509):map__12509);
var opts__$1 = map__12509__$1;
var x = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var flip_x = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var sheight = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var flip_y = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var y = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__12509__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","image-opts","play-cljs.options/image-opts",-1345787416),opts__$1):null);
var value__$1 = (function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return play_cljs.core.load_image.call(null,game,name);
}
}
})();
var swidth__$1 = (function (){var or__3922__auto__ = swidth;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__3922__auto__ = sheight;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value__$1.height;
}
})();
renderer.push();

renderer.translate(x,y);

renderer.scale(scale_x,scale_y);

if(cljs.core.truth_(flip_x)){
renderer.scale((-1),(1));

renderer.translate((- swidth__$1),(0));
} else {
}

if(cljs.core.truth_(flip_y)){
renderer.scale((1),(-1));

renderer.translate((0),(- sheight__$1));
} else {
}

renderer.image(value__$1,(0),(0),(function (){var or__3922__auto__ = width;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__3922__auto__ = height;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (game,renderer,content,parent_opts){
var vec__12511 = content;
var seq__12512 = cljs.core.seq.call(null,vec__12511);
var first__12513 = cljs.core.first.call(null,seq__12512);
var seq__12512__$1 = cljs.core.next.call(null,seq__12512);
var _ = first__12513;
var first__12513__$1 = cljs.core.first.call(null,seq__12512__$1);
var seq__12512__$2 = cljs.core.next.call(null,seq__12512__$1);
var opts = first__12513__$1;
var children = seq__12512__$2;
var map__12514 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12514__$1 = ((((!((map__12514 == null)))?(((((map__12514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12514):map__12514);
var opts__$1 = map__12514__$1;
var duration = cljs.core.get.call(null,map__12514__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","animation-opts","play-cljs.options/animation-opts",-1011684308),opts__$1):null);
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__12516 = content;
var seq__12517 = cljs.core.seq.call(null,vec__12516);
var first__12518 = cljs.core.first.call(null,seq__12517);
var seq__12517__$1 = cljs.core.next.call(null,seq__12517);
var _ = first__12518;
var first__12518__$1 = cljs.core.first.call(null,seq__12517__$1);
var seq__12517__$2 = cljs.core.next.call(null,seq__12517__$1);
var opts = first__12518__$1;
var children = seq__12517__$2;
var map__12519 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12519__$1 = ((((!((map__12519 == null)))?(((((map__12519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12519):map__12519);
var opts__$1 = map__12519__$1;
var grayscale = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12519__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","fill-opts","play-cljs.options/fill-opts",-1853833407),opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12521_12524 = colors;
var n1_12525 = cljs.core.nth.call(null,vec__12521_12524,(0),null);
var n2_12526 = cljs.core.nth.call(null,vec__12521_12524,(1),null);
var n3_12527 = cljs.core.nth.call(null,vec__12521_12524,(2),null);
var a_12528 = cljs.core.nth.call(null,vec__12521_12524,(3),null);
renderer.fill(n1_12525,n2_12526,n3_12527,a_12528);
} else {
renderer.noFill();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__12529 = content;
var seq__12530 = cljs.core.seq.call(null,vec__12529);
var first__12531 = cljs.core.first.call(null,seq__12530);
var seq__12530__$1 = cljs.core.next.call(null,seq__12530);
var _ = first__12531;
var first__12531__$1 = cljs.core.first.call(null,seq__12530__$1);
var seq__12530__$2 = cljs.core.next.call(null,seq__12530__$1);
var opts = first__12531__$1;
var children = seq__12530__$2;
var map__12532 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12532__$1 = ((((!((map__12532 == null)))?(((((map__12532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12532):map__12532);
var opts__$1 = map__12532__$1;
var grayscale = cljs.core.get.call(null,map__12532__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12532__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12532__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","stroke-opts","play-cljs.options/stroke-opts",-656452964),opts__$1);
} else {
}

renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12534_12537 = colors;
var n1_12538 = cljs.core.nth.call(null,vec__12534_12537,(0),null);
var n2_12539 = cljs.core.nth.call(null,vec__12534_12537,(1),null);
var n3_12540 = cljs.core.nth.call(null,vec__12534_12537,(2),null);
renderer.stroke(n1_12538,n2_12539,n3_12540);
} else {
renderer.noStroke();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__12541 = content;
var seq__12542 = cljs.core.seq.call(null,vec__12541);
var first__12543 = cljs.core.first.call(null,seq__12542);
var seq__12542__$1 = cljs.core.next.call(null,seq__12542);
var _ = first__12543;
var first__12543__$1 = cljs.core.first.call(null,seq__12542__$1);
var seq__12542__$2 = cljs.core.next.call(null,seq__12542__$1);
var opts = first__12543__$1;
var children = seq__12542__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","bezier-opts","play-cljs.options/bezier-opts",1503466583),opts__$1):null);
var map__12544 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12544__$1 = ((((!((map__12544 == null)))?(((((map__12544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12544):map__12544);
var opts__$2 = map__12544__$1;
var x1 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12544__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__3911__auto__ = z1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = z2;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = z3;
if(cljs.core.truth_(and__3911__auto____$2)){
return z4;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
renderer.bezier(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (game,renderer,content,parent_opts){
var vec__12546 = content;
var seq__12547 = cljs.core.seq.call(null,vec__12546);
var first__12548 = cljs.core.first.call(null,seq__12547);
var seq__12547__$1 = cljs.core.next.call(null,seq__12547);
var _ = first__12548;
var first__12548__$1 = cljs.core.first.call(null,seq__12547__$1);
var seq__12547__$2 = cljs.core.next.call(null,seq__12547__$1);
var opts = first__12548__$1;
var children = seq__12547__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","curve-opts","play-cljs.options/curve-opts",-423348601),opts__$1):null);
var map__12549 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12549__$1 = ((((!((map__12549 == null)))?(((((map__12549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12549):map__12549);
var opts__$2 = map__12549__$1;
var x1 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12549__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__3911__auto__ = z1;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = z2;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = z3;
if(cljs.core.truth_(and__3911__auto____$2)){
return z4;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
renderer.curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
} else {
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (game,renderer,content,parent_opts){
var vec__12551 = content;
var seq__12552 = cljs.core.seq.call(null,vec__12551);
var first__12553 = cljs.core.first.call(null,seq__12552);
var seq__12552__$1 = cljs.core.next.call(null,seq__12552);
var _ = first__12553;
var first__12553__$1 = cljs.core.first.call(null,seq__12552__$1);
var seq__12552__$2 = cljs.core.next.call(null,seq__12552__$1);
var opts = first__12553__$1;
var children = seq__12552__$2;
var map__12554 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12554__$1 = ((((!((map__12554 == null)))?(((((map__12554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12554):map__12554);
var opts__$1 = map__12554__$1;
var max_r = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12554__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","rgb-opts","play-cljs.options/rgb-opts",-409658223),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__12556 = content;
var seq__12557 = cljs.core.seq.call(null,vec__12556);
var first__12558 = cljs.core.first.call(null,seq__12557);
var seq__12557__$1 = cljs.core.next.call(null,seq__12557);
var _ = first__12558;
var first__12558__$1 = cljs.core.first.call(null,seq__12557__$1);
var seq__12557__$2 = cljs.core.next.call(null,seq__12557__$1);
var opts = first__12558__$1;
var children = seq__12557__$2;
var map__12559 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12559__$1 = ((((!((map__12559 == null)))?(((((map__12559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12559):map__12559);
var opts__$1 = map__12559__$1;
var max_h = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12559__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","hsb-opts","play-cljs.options/hsb-opts",-765339474),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsl","hsl",-1282948596),(function (game,renderer,content,parent_opts){
var vec__12561 = content;
var seq__12562 = cljs.core.seq.call(null,vec__12561);
var first__12563 = cljs.core.first.call(null,seq__12562);
var seq__12562__$1 = cljs.core.next.call(null,seq__12562);
var _ = first__12563;
var first__12563__$1 = cljs.core.first.call(null,seq__12562__$1);
var seq__12562__$2 = cljs.core.next.call(null,seq__12562__$1);
var opts = first__12563__$1;
var children = seq__12562__$2;
var map__12564 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12564__$1 = ((((!((map__12564 == null)))?(((((map__12564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12564):map__12564);
var opts__$1 = map__12564__$1;
var max_h = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_l = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"max-l","max-l",1178950767));
var max_a = cljs.core.get.call(null,map__12564__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","hsl-opts","play-cljs.options/hsl-opts",1927794012),opts__$1);
} else {
}

renderer.push();

renderer.colorMode(renderer.HSL,max_h,max_s,max_l,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__12566 = content;
var seq__12567 = cljs.core.seq.call(null,vec__12566);
var first__12568 = cljs.core.first.call(null,seq__12567);
var seq__12567__$1 = cljs.core.next.call(null,seq__12567);
var _ = first__12568;
var first__12568__$1 = cljs.core.first.call(null,seq__12567__$1);
var seq__12567__$2 = cljs.core.next.call(null,seq__12567__$1);
var opts = first__12568__$1;
var children = seq__12567__$2;
var map__12569 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
var map__12569__$1 = ((((!((map__12569 == null)))?(((((map__12569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12569):map__12569);
var opts__$1 = map__12569__$1;
var value = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12569__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))?play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","tiled-map-opts","play-cljs.options/tiled-map-opts",-2722244),opts__$1):null);
var value__$1 = (function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return play_cljs.core.load_tiled_map.call(null,game,name);
}
}
})();
value__$1.draw(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (game,renderer,content,parent_opts){
var vec__12571 = content;
var seq__12572 = cljs.core.seq.call(null,vec__12571);
var first__12573 = cljs.core.first.call(null,seq__12572);
var seq__12572__$1 = cljs.core.next.call(null,seq__12572);
var _ = first__12573;
var first__12573__$1 = cljs.core.first.call(null,seq__12572__$1);
var seq__12572__$2 = cljs.core.next.call(null,seq__12572__$1);
var opts = first__12573__$1;
var children = seq__12572__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","shape-opts","play-cljs.options/shape-opts",2031031834),opts__$1);
} else {
}

renderer.beginShape();

var G__12577_12584 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__12578_12585 = G__12577_12584;
var seq__12579_12586 = cljs.core.seq.call(null,vec__12578_12585);
var first__12580_12587 = cljs.core.first.call(null,seq__12579_12586);
var seq__12579_12588__$1 = cljs.core.next.call(null,seq__12579_12586);
var x_12589 = first__12580_12587;
var first__12580_12590__$1 = cljs.core.first.call(null,seq__12579_12588__$1);
var seq__12579_12591__$2 = cljs.core.next.call(null,seq__12579_12588__$1);
var y_12592 = first__12580_12590__$1;
var rest_12593 = seq__12579_12591__$2;
var G__12577_12594__$1 = G__12577_12584;
while(true){
var vec__12581_12595 = G__12577_12594__$1;
var seq__12582_12596 = cljs.core.seq.call(null,vec__12581_12595);
var first__12583_12597 = cljs.core.first.call(null,seq__12582_12596);
var seq__12582_12598__$1 = cljs.core.next.call(null,seq__12582_12596);
var x_12599__$1 = first__12583_12597;
var first__12583_12600__$1 = cljs.core.first.call(null,seq__12582_12598__$1);
var seq__12582_12601__$2 = cljs.core.next.call(null,seq__12582_12598__$1);
var y_12602__$1 = first__12583_12600__$1;
var rest_12603__$1 = seq__12582_12601__$2;
renderer.vertex(x_12599__$1,y_12602__$1);

if(rest_12603__$1){
var G__12604 = rest_12603__$1;
G__12577_12594__$1 = G__12604;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endShape(renderer.CLOSE);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (game,renderer,content,parent_opts){
var vec__12605 = content;
var seq__12606 = cljs.core.seq.call(null,vec__12605);
var first__12607 = cljs.core.first.call(null,seq__12606);
var seq__12606__$1 = cljs.core.next.call(null,seq__12606);
var _ = first__12607;
var first__12607__$1 = cljs.core.first.call(null,seq__12606__$1);
var seq__12606__$2 = cljs.core.next.call(null,seq__12606__$1);
var opts = first__12607__$1;
var children = seq__12606__$2;
var opts__$1 = play_cljs.options.update_opts.call(null,opts,parent_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(opts__$1))){
play_cljs.options.check_opts.call(null,new cljs.core.Keyword("play-cljs.options","contour-opts","play-cljs.options/contour-opts",-426100605),opts__$1);
} else {
}

renderer.beginContour();

var G__12611_12618 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
var vec__12612_12619 = G__12611_12618;
var seq__12613_12620 = cljs.core.seq.call(null,vec__12612_12619);
var first__12614_12621 = cljs.core.first.call(null,seq__12613_12620);
var seq__12613_12622__$1 = cljs.core.next.call(null,seq__12613_12620);
var x_12623 = first__12614_12621;
var first__12614_12624__$1 = cljs.core.first.call(null,seq__12613_12622__$1);
var seq__12613_12625__$2 = cljs.core.next.call(null,seq__12613_12622__$1);
var y_12626 = first__12614_12624__$1;
var rest_12627 = seq__12613_12625__$2;
var G__12611_12628__$1 = G__12611_12618;
while(true){
var vec__12615_12629 = G__12611_12628__$1;
var seq__12616_12630 = cljs.core.seq.call(null,vec__12615_12629);
var first__12617_12631 = cljs.core.first.call(null,seq__12616_12630);
var seq__12616_12632__$1 = cljs.core.next.call(null,seq__12616_12630);
var x_12633__$1 = first__12617_12631;
var first__12617_12634__$1 = cljs.core.first.call(null,seq__12616_12632__$1);
var seq__12616_12635__$2 = cljs.core.next.call(null,seq__12616_12632__$1);
var y_12636__$1 = first__12617_12634__$1;
var rest_12637__$1 = seq__12616_12635__$2;
renderer.vertex(x_12633__$1,y_12636__$1);

if(rest_12637__$1){
var G__12638 = rest_12637__$1;
G__12611_12628__$1 = G__12638;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endContour(renderer.CLOSE);
}));
/**
 * Returns a game object. You can pass an options map with the following:
 *   
 *   :parent  -  A DOM element in which to place the canvas
 *   :debug?  -  Whether or not to enable debug mode
 *            (defaults to true if :optimizations are set to :none)
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(var_args){
var G__12640 = arguments.length;
switch (G__12640) {
case 2:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return play_cljs.core.create_game.call(null,width,height,cljs.core.PersistentArrayMap.EMPTY);
});

play_cljs.core.create_game.cljs$core$IFn$_invoke$arity$3 = (function (width,height,p__12641){
var map__12642 = p__12641;
var map__12642__$1 = ((((!((map__12642 == null)))?(((((map__12642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12642):map__12642);
var opts = map__12642__$1;
var parent = cljs.core.get.call(null,map__12642__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var debug_QMARK_ = cljs.core.get.call(null,map__12642__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),cljs.core.not.call(null,COMPILED));
if(cljs.core.truth_(debug_QMARK_)){
console.log(["Debug mode is enabled. If things are slow, try passing ","{:debug? false} to the third argument of create-game."].join(''));
} else {
p5.disableFriendlyErrors = true;
}

var _STAR_hidden_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var parent_opts = (cljs.core.truth_(debug_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),true], null):cljs.core.PersistentArrayMap.EMPTY);
if(typeof play_cljs.core.t_play_cljs$core12644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core12644 = (function (map__12642,setup_finished_QMARK_,height,_STAR_hidden_state,parent,parent_opts,width,debug_QMARK_,p__12641,opts,meta12645){
this.map__12642 = map__12642;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.height = height;
this._STAR_hidden_state = _STAR_hidden_state;
this.parent = parent;
this.parent_opts = parent_opts;
this.width = width;
this.debug_QMARK_ = debug_QMARK_;
this.p__12641 = p__12641;
this.opts = opts;
this.meta12645 = meta12645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
play_cljs.core.t_play_cljs$core12644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (_12646,meta12645__$1){
var self__ = this;
var _12646__$1 = this;
return (new play_cljs.core.t_play_cljs$core12644(self__.map__12642,self__.setup_finished_QMARK_,self__.height,self__._STAR_hidden_state,self__.parent,self__.parent_opts,self__.width,self__.debug_QMARK_,self__.p__12641,self__.opts,meta12645__$1));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (_12646){
var self__ = this;
var _12646__$1 = this;
return self__.meta12645;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.resizeCanvas(width__$1,height__$1);
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,self__.parent_opts);

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadImage(path,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.width;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__._STAR_hidden_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return renderer.height;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$start$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto___12685 = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto___12685)){
var renderer_12686 = temp__5457__auto___12685;
renderer_12686.remove();
} else {
}

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state)));

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY);

(new p5(((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (renderer){
renderer.setup = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
var canvas_wrapper_12687 = (function (){var G__12647 = renderer.createCanvas(self__.width,self__.height);
if(cljs.core.truth_(self__.parent)){
return G__12647.parent(self__.parent);
} else {
return G__12647;
}
})();
var canvas_12688 = canvas_wrapper_12687.canvas;
canvas_12688.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_12688);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

return renderer.draw = ((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (hidden_state){
var time = renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);

renderer.clear();

var G__12648 = this$__$1;
var G__12648__$1 = (((G__12648 == null))?null:play_cljs.core.get_screen.call(null,G__12648));
if((G__12648__$1 == null)){
return null;
} else {
return play_cljs.core.on_render.call(null,G__12648__$1);
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
));

play_cljs.core.listen.call(null,this$__$1,"keydown",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);

play_cljs.core.listen.call(null,this$__$1,"keyup",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);

return play_cljs.core.listen.call(null,this$__$1,"blur",((function (this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$render$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,renderer,content,self__.parent_opts);
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$listen$arity$3 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,listen_type,listener){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.conj,goog.events.listen(window,listen_type,listener));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var temp__5457__auto__ = play_cljs.core.get_renderer.call(null,this$__$1);
if(cljs.core.truth_(temp__5457__auto__)){
var renderer = temp__5457__auto__;
var object = renderer.loadTiledMap(map_name,((function (renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
return null;
});})(renderer,temp__5457__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);
cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
} else {
return null;
}
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__7318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
var f__7319__auto__ = (function (){var switch__7228__auto__ = ((function (c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (state_12667){
var state_val_12668 = (state_12667[(1)]);
if((state_val_12668 === (1))){
var state_12667__$1 = state_12667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12667__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_12668 === (2))){
var inst_12650 = (state_12667[(2)]);
var inst_12652 = (this$__$1 == null);
var state_12667__$1 = (function (){var statearr_12669 = state_12667;
(statearr_12669[(7)] = inst_12650);

return statearr_12669;
})();
if(cljs.core.truth_(inst_12652)){
var statearr_12670_12689 = state_12667__$1;
(statearr_12670_12689[(1)] = (3));

} else {
var statearr_12671_12690 = state_12667__$1;
(statearr_12671_12690[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (3))){
var state_12667__$1 = state_12667;
var statearr_12672_12691 = state_12667__$1;
(statearr_12672_12691[(2)] = null);

(statearr_12672_12691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (4))){
var inst_12655 = play_cljs.core.get_screen.call(null,this$__$1);
var state_12667__$1 = state_12667;
var statearr_12673_12692 = state_12667__$1;
(statearr_12673_12692[(2)] = inst_12655);

(statearr_12673_12692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (5))){
var inst_12657 = (state_12667[(8)]);
var inst_12657__$1 = (state_12667[(2)]);
var inst_12658 = (inst_12657__$1 == null);
var state_12667__$1 = (function (){var statearr_12674 = state_12667;
(statearr_12674[(8)] = inst_12657__$1);

return statearr_12674;
})();
if(cljs.core.truth_(inst_12658)){
var statearr_12675_12693 = state_12667__$1;
(statearr_12675_12693[(1)] = (6));

} else {
var statearr_12676_12694 = state_12667__$1;
(statearr_12676_12694[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (6))){
var state_12667__$1 = state_12667;
var statearr_12677_12695 = state_12667__$1;
(statearr_12677_12695[(2)] = null);

(statearr_12677_12695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (7))){
var inst_12657 = (state_12667[(8)]);
var inst_12661 = play_cljs.core.on_hide.call(null,inst_12657);
var state_12667__$1 = state_12667;
var statearr_12678_12696 = state_12667__$1;
(statearr_12678_12696[(2)] = inst_12661);

(statearr_12678_12696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (8))){
var inst_12663 = (state_12667[(2)]);
var inst_12664 = cljs.core.swap_BANG_.call(null,self__._STAR_hidden_state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_12665 = play_cljs.core.on_show.call(null,screen);
var state_12667__$1 = (function (){var statearr_12679 = state_12667;
(statearr_12679[(9)] = inst_12663);

(statearr_12679[(10)] = inst_12664);

return statearr_12679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12667__$1,inst_12665);
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
});})(c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;
return ((function (switch__7228__auto__,c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function() {
var play_cljs$core$state_machine__7229__auto__ = null;
var play_cljs$core$state_machine__7229__auto____0 = (function (){
var statearr_12680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12680[(0)] = play_cljs$core$state_machine__7229__auto__);

(statearr_12680[(1)] = (1));

return statearr_12680;
});
var play_cljs$core$state_machine__7229__auto____1 = (function (state_12667){
while(true){
var ret_value__7230__auto__ = (function (){try{while(true){
var result__7231__auto__ = switch__7228__auto__.call(null,state_12667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7231__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7231__auto__;
}
break;
}
}catch (e12681){if((e12681 instanceof Object)){
var ex__7232__auto__ = e12681;
var statearr_12682_12697 = state_12667;
(statearr_12682_12697[(5)] = ex__7232__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7230__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12698 = state_12667;
state_12667 = G__12698;
continue;
} else {
return ret_value__7230__auto__;
}
break;
}
});
play_cljs$core$state_machine__7229__auto__ = function(state_12667){
switch(arguments.length){
case 0:
return play_cljs$core$state_machine__7229__auto____0.call(this);
case 1:
return play_cljs$core$state_machine__7229__auto____1.call(this,state_12667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
play_cljs$core$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$state_machine__7229__auto____0;
play_cljs$core$state_machine__7229__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$state_machine__7229__auto____1;
return play_cljs$core$state_machine__7229__auto__;
})()
;})(switch__7228__auto__,c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
})();
var state__7320__auto__ = (function (){var statearr_12683 = f__7319__auto__.call(null);
(statearr_12683[(6)] = c__7318__auto__);

return statearr_12683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7320__auto__);
});})(c__7318__auto__,this$__$1,_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
);

return c__7318__auto__;
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__._STAR_hidden_state));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.getBasis = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__12642","map__12642",-521706432,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"*hidden-state","*hidden-state",1793576007,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"parent-opts","parent-opts",1877883663,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"debug?","debug?",-191224646,null),new cljs.core.Symbol(null,"p__12641","p__12641",505713947,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta12645","meta12645",1670007546,null)], null);
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

play_cljs.core.t_play_cljs$core12644.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core12644.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core12644";

play_cljs.core.t_play_cljs$core12644.cljs$lang$ctorPrWriter = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"play-cljs.core/t_play_cljs$core12644");
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

/**
 * Positional factory function for play-cljs.core/t_play_cljs$core12644.
 */
play_cljs.core.__GT_t_play_cljs$core12644 = ((function (_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_){
return (function play_cljs$core$__GT_t_play_cljs$core12644(map__12642__$2,setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,parent__$1,parent_opts__$1,width__$1,debug_QMARK___$1,p__12641__$1,opts__$1,meta12645){
return (new play_cljs.core.t_play_cljs$core12644(map__12642__$2,setup_finished_QMARK___$1,height__$1,_STAR_hidden_state__$1,parent__$1,parent_opts__$1,width__$1,debug_QMARK___$1,p__12641__$1,opts__$1,meta12645));
});})(_STAR_hidden_state,setup_finished_QMARK_,parent_opts,map__12642,map__12642__$1,opts,parent,debug_QMARK_))
;

}

return (new play_cljs.core.t_play_cljs$core12644(map__12642__$1,setup_finished_QMARK_,height,_STAR_hidden_state,parent,parent_opts,width,debug_QMARK_,p__12641,opts,cljs.core.PersistentArrayMap.EMPTY));
});

play_cljs.core.create_game.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
