// Compiled by ClojureScript 1.10.238 {}
goog.provide('expound.paths');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('expound.util');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),cljs.core.sequential_QMARK_);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyPathSegment = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

expound.paths.KeyPathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k12272,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__12276 = k12272;
var G__12276__$1 = (((G__12276 instanceof cljs.core.Keyword))?G__12276.fqn:null);
switch (G__12276__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12272,else__4175__auto__);

}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#expound.paths.KeyPathSegment{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12271){
var self__ = this;
var G__12271__$1 = this;
return (new cljs.core.RecordIter((0),G__12271__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,self__.__extmap,self__.__hash));
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (233526946 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12273,other12274){
var self__ = this;
var this12273__$1 = this;
return ((!((other12274 == null))) && ((this12273__$1.constructor === other12274.constructor)) && (cljs.core._EQ_.call(null,this12273__$1.key,other12274.key)) && (cljs.core._EQ_.call(null,this12273__$1.__extmap,other12274.__extmap)));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__12271){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__12277 = cljs.core.keyword_identical_QMARK_;
var expr__12278 = k__4180__auto__;
if(cljs.core.truth_(pred__12277.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__12278))){
return (new expound.paths.KeyPathSegment(G__12271,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyPathSegment(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__12271),null));
}
});

expound.paths.KeyPathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
});

expound.paths.KeyPathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__12271){
var self__ = this;
var this__4171__auto____$1 = this;
return (new expound.paths.KeyPathSegment(self__.key,G__12271,self__.__extmap,self__.__hash));
});

expound.paths.KeyPathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

expound.paths.KeyPathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

expound.paths.KeyPathSegment.cljs$lang$type = true;

expound.paths.KeyPathSegment.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"expound.paths/KeyPathSegment",null,(1),null));
});

expound.paths.KeyPathSegment.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"expound.paths/KeyPathSegment");
});

/**
 * Positional factory function for expound.paths/KeyPathSegment.
 */
expound.paths.__GT_KeyPathSegment = (function expound$paths$__GT_KeyPathSegment(key){
return (new expound.paths.KeyPathSegment(key,null,null,null));
});

/**
 * Factory function for expound.paths/KeyPathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyPathSegment = (function expound$paths$map__GT_KeyPathSegment(G__12275){
return (new expound.paths.KeyPathSegment(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__12275),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12275,new cljs.core.Keyword(null,"key","key",-1516042587))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
expound.paths.KeyValuePathSegment = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k12282,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__12286 = k12282;
var G__12286__$1 = (((G__12286 instanceof cljs.core.Keyword))?G__12286.fqn:null);
switch (G__12286__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12282,else__4175__auto__);

}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#expound.paths.KeyValuePathSegment{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12281){
var self__ = this;
var G__12281__$1 = this;
return (new cljs.core.RecordIter((0),G__12281__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1269438429 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12283,other12284){
var self__ = this;
var this12283__$1 = this;
return ((!((other12284 == null))) && ((this12283__$1.constructor === other12284.constructor)) && (cljs.core._EQ_.call(null,this12283__$1.idx,other12284.idx)) && (cljs.core._EQ_.call(null,this12283__$1.__extmap,other12284.__extmap)));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__12281){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__12287 = cljs.core.keyword_identical_QMARK_;
var expr__12288 = k__4180__auto__;
if(cljs.core.truth_(pred__12287.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__12288))){
return (new expound.paths.KeyValuePathSegment(G__12281,self__.__meta,self__.__extmap,null));
} else {
return (new expound.paths.KeyValuePathSegment(self__.idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__12281),null));
}
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__12281){
var self__ = this;
var this__4171__auto____$1 = this;
return (new expound.paths.KeyValuePathSegment(self__.idx,G__12281,self__.__extmap,self__.__hash));
});

expound.paths.KeyValuePathSegment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

expound.paths.KeyValuePathSegment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
});

expound.paths.KeyValuePathSegment.cljs$lang$type = true;

expound.paths.KeyValuePathSegment.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"expound.paths/KeyValuePathSegment",null,(1),null));
});

expound.paths.KeyValuePathSegment.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"expound.paths/KeyValuePathSegment");
});

/**
 * Positional factory function for expound.paths/KeyValuePathSegment.
 */
expound.paths.__GT_KeyValuePathSegment = (function expound$paths$__GT_KeyValuePathSegment(idx){
return (new expound.paths.KeyValuePathSegment(idx,null,null,null));
});

/**
 * Factory function for expound.paths/KeyValuePathSegment, taking a map of keywords to field values.
 */
expound.paths.map__GT_KeyValuePathSegment = (function expound$paths$map__GT_KeyValuePathSegment(G__12285){
return (new expound.paths.KeyValuePathSegment(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__12285),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12285,new cljs.core.Keyword(null,"idx","idx",1053688473))),null));
});

expound.paths.kps_QMARK_ = (function expound$paths$kps_QMARK_(x){
return (x instanceof expound.paths.KeyPathSegment);
});
expound.paths.kvps_QMARK_ = (function expound$paths$kvps_QMARK_(x){
return (x instanceof expound.paths.KeyValuePathSegment);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","prefix-path?","expound.paths/prefix-path?",-1893707133,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword(null,"partial-path","partial-path",213994140)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword("expound","path","expound/path",-1026376555)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"partial-path","partial-path",213994140),new cljs.core.Keyword("expound","path","expound/path",-1026376555)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
/**
 * True if partial-path is a prefix of full-path.
 */
expound.paths.prefix_path_QMARK_ = (function expound$paths$prefix_path_QMARK_(partial_path,full_path){
return (((cljs.core.count.call(null,partial_path) < cljs.core.count.call(null,full_path))) && (cljs.core._EQ_.call(null,partial_path,cljs.core.subvec.call(null,full_path,(0),cljs.core.count.call(null,partial_path)))));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","kps-path?","expound.paths/kps-path?",581831806,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
/**
 * True if path points to a key
 */
expound.paths.kps_path_QMARK_ = (function expound$paths$kps_path_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__3911__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__3911__auto__){
return expound.paths.kps_QMARK_.call(null,cljs.core.last.call(null,x));
} else {
return and__3911__auto__;
}
})());
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.paths","kvps-path?","expound.paths/kvps-path?",991506987,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_,null,null),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),null,null,null));
/**
 * True if path points to a key/value pair
 */
expound.paths.kvps_path_QMARK_ = (function expound$paths$kvps_path_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__3911__auto__ = cljs.core.vector_QMARK_.call(null,x);
if(and__3911__auto__){
return cljs.core.some.call(null,expound.paths.kvps_QMARK_,x);
} else {
return and__3911__auto__;
}
})());
});
expound.paths.fn_equal = (function expound$paths$fn_equal(x,y){
return ((cljs.core.fn_QMARK_.call(null,x)) && (cljs.core.fn_QMARK_.call(null,y)) && (cljs.core._EQ_.call(null,cljs.core.pr_str.call(null,x),cljs.core.pr_str.call(null,y))));
});
expound.paths.both_nan_QMARK_ = (function expound$paths$both_nan_QMARK_(x,y){
var and__3911__auto__ = expound.util.nan_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return expound.util.nan_QMARK_.call(null,y);
} else {
return and__3911__auto__;
}
});
expound.paths.equalish_QMARK_ = (function expound$paths$equalish_QMARK_(x,y){
var or__3922__auto__ = cljs.core._EQ_.call(null,x,y);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = expound.paths.fn_equal.call(null,x,y);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return expound.paths.both_nan_QMARK_.call(null,x,y);
}
}
});
expound.paths.in_with_kps_maps_as_seqs = (function expound$paths$in_with_kps_maps_as_seqs(form,val,in$,in_SINGLEQUOTE_){
var vec__12291 = in$;
var seq__12292 = cljs.core.seq.call(null,vec__12291);
var first__12293 = cljs.core.first.call(null,seq__12292);
var seq__12292__$1 = cljs.core.next.call(null,seq__12292);
var k = first__12293;
var rst = seq__12292__$1;
var vec__12294 = rst;
var seq__12295 = cljs.core.seq.call(null,vec__12294);
var first__12296 = cljs.core.first.call(null,seq__12295);
var seq__12295__$1 = cljs.core.next.call(null,seq__12295);
var idx = first__12296;
var rst2 = seq__12295__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),form)){
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__3911__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__3911__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core.nat_int_QMARK_.call(null,k)) && ((k < cljs.core.count.call(null,cljs.core.seq.call(null,form)))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core.nat_int_QMARK_.call(null,k)) && (cljs.core.int_QMARK_.call(null,idx)) && ((k < cljs.core.count.call(null,cljs.core.seq.call(null,form)))) && ((idx < cljs.core.count.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k)))))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k),idx),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyValuePathSegment.call(null,k),idx));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_fuzzy_match_for_regex_failures = (function expound$paths$in_with_kps_fuzzy_match_for_regex_failures(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__12297 = in$;
var seq__12298 = cljs.core.seq.call(null,vec__12297);
var first__12299 = cljs.core.first.call(null,seq__12298);
var seq__12298__$1 = cljs.core.next.call(null,seq__12298);
var k = first__12299;
var rst = seq__12298__$1;
if(((cljs.core.empty_QMARK_.call(null,in$)) && (cljs.core.seqable_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,val,cljs.core.List.EMPTY)))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.empty_QMARK_.call(null,in$)) && (((cljs.core.seq_QMARK_.call(null,val)) && (cljs.core._EQ_.call(null,form,cljs.core.first.call(null,val))))))){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.nat_int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_keys = (function expound$paths$in_with_kps_ints_are_keys(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__12300 = in$;
var seq__12301 = cljs.core.seq.call(null,vec__12300);
var first__12302 = cljs.core.first.call(null,seq__12301);
var seq__12301__$1 = cljs.core.next.call(null,seq__12301);
var k = first__12302;
var rst = seq__12301__$1;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__3911__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__3911__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(cljs.core.associative_QMARK_.call(null,form)){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
if(((cljs.core.int_QMARK_.call(null,k)) && (cljs.core.seqable_QMARK_.call(null,form)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,form),k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_ints_are_key_value_indicators = (function expound$paths$in_with_kps_ints_are_key_value_indicators(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,form,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795))){
return form;
} else {
var vec__12303 = in$;
var seq__12304 = cljs.core.seq.call(null,vec__12303);
var first__12305 = cljs.core.first.call(null,seq__12304);
var seq__12304__$1 = cljs.core.next.call(null,seq__12304);
var k = first__12305;
var rst = seq__12304__$1;
var vec__12306 = rst;
var seq__12307 = cljs.core.seq.call(null,vec__12306);
var first__12308 = cljs.core.first.call(null,seq__12307);
var seq__12307__$1 = cljs.core.next.call(null,seq__12307);
var idx = first__12308;
var rst2 = seq__12307__$1;
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.empty_QMARK_.call(null,in$);
if(and__3911__auto__){
return expound.paths.equalish_QMARK_.call(null,form,val);
} else {
return and__3911__auto__;
}
})())){
return in_SINGLEQUOTE_;
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(0),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,k,val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,expound.paths.__GT_KeyPathSegment.call(null,k)));
} else {
if(((cljs.core.map_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,(1),idx)))){
return expound.paths.in_with_kps_STAR_.call(null,cljs.core.get.call(null,form,k,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795)),val,rst2,cljs.core.conj.call(null,in_SINGLEQUOTE_,k));
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);

}
}
}
}
});
expound.paths.in_with_kps_STAR_ = (function expound$paths$in_with_kps_STAR_(form,val,in$,in_SINGLEQUOTE_){
if(cljs.core.fn_QMARK_.call(null,form)){
return in_SINGLEQUOTE_;
} else {
var br1 = expound.paths.in_with_kps_ints_are_key_value_indicators.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br1)){
return br1;
} else {
var br2 = expound.paths.in_with_kps_maps_as_seqs.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br2)){
return br2;
} else {
var br3 = expound.paths.in_with_kps_ints_are_keys.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br3)){
return br3;
} else {
var br4 = expound.paths.in_with_kps_fuzzy_match_for_regex_failures.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),br4)){
return br4;
} else {
return new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795);
}
}
}
}
}
});
expound.paths.in_with_kps = (function expound$paths$in_with_kps(form,val,in$,in_SINGLEQUOTE_){
var res = expound.paths.in_with_kps_STAR_.call(null,form,val,in$,in_SINGLEQUOTE_);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("expound.paths","not-found","expound.paths/not-found",-195785795),res)){
throw cljs.core.ex_info.call(null,"Cannot convert path. This can be caused by using conformers to transform values, which is not supported in Expound",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"in'","in'",1281266374),in_SINGLEQUOTE_], null));
} else {
return res;
}
});
expound.paths.compare_path_segment = (function expound$paths$compare_path_segment(x,y){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.int_QMARK_.call(null,x);
if(and__3911__auto__){
return expound.paths.kvps_QMARK_.call(null,y);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.compare.call(null,x,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(y));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = expound.paths.kvps_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.int_QMARK_.call(null,y);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.compare.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(x),y);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = expound.paths.kps_QMARK_.call(null,x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,expound.paths.kps_QMARK_.call(null,y));
} else {
return and__3911__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,expound.paths.kps_QMARK_.call(null,x));
if(and__3911__auto__){
return expound.paths.kps_QMARK_.call(null,y);
} else {
return and__3911__auto__;
}
})())){
return (1);
} else {
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core.vector_QMARK_.call(null,y)))){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12309_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__12309_SHARP_);
}),cljs.core.map.call(null,expound.paths.compare_path_segment,x,y)));
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
}
}
});
expound.paths.compare_paths = (function expound$paths$compare_paths(path1,path2){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12310_SHARP_){
return cljs.core.not_EQ_.call(null,(0),p1__12310_SHARP_);
}),cljs.core.map.call(null,expound.paths.compare_path_segment,path1,path2)));
});

//# sourceMappingURL=paths.js.map
