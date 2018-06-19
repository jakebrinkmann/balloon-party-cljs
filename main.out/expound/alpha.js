// Compiled by ClojureScript 1.10.238 {}
goog.provide('expound.alpha');
goog.require('cljs.core');
goog.require('expound.paths');
goog.require('expound.problems');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('expound.printer');
goog.require('expound.util');
if(typeof expound.alpha.registry_ref !== 'undefined'){
} else {
expound.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12343){
return ((cljs.core.coll_QMARK_.call(null,G__12343)) && (cljs.core._EQ_.call(null,(1),cljs.core.bounded_count.call(null,(1),G__12343))));
}),new cljs.core.Keyword(null,"count","count",2139924085),(1),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"count","count",2139924085),(1))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","specs","spec/specs",1428018738),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12344){
return cljs.core.coll_QMARK_.call(null,G__12344);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12345){
return cljs.core.vector_QMARK_.call(null,G__12345);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","spec","spec/spec",350016446),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","problem","spec/problem",1166707271),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null),null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__12346){
return cljs.core.map_QMARK_.call(null,G__12346);
}),(function (G__12346){
return cljs.core.contains_QMARK_.call(null,G__12346,new cljs.core.Keyword(null,"via","via",-1904457336));
})], null),(function (G__12346){
return ((cljs.core.map_QMARK_.call(null,G__12346)) && (cljs.core.contains_QMARK_.call(null,G__12346,new cljs.core.Keyword(null,"via","via",-1904457336))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec.problem","via","spec.problem/via",-2031130516)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"via","via",-1904457336)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"via","via",-1904457336)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("spec","problems","spec/problems",2096407970),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","problem","spec/problem",1166707271)),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("spec","problem","spec/problem",1166707271),new cljs.core.Keyword("spec","problem","spec/problem",1166707271),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__12347){
return cljs.core.coll_QMARK_.call(null,G__12347);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("spec","problem","spec/problem",1166707271))], null),null));
expound.alpha.header_size = (35);
expound.alpha.section_size = (25);
expound.alpha._STAR_value_str_fn_STAR_ = (function expound$alpha$_STAR_value_str_fn_STAR_(_,___$1,___$2,___$3){
return "NOT IMPLEMENTED";
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.alpha","value-in-context","expound.alpha/value-in-context",-547735824,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.nilable_impl.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null),null),cljs.core.any_QMARK_,new cljs.core.Keyword("expound","path","expound/path",-1026376555),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594),null], null), null)),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("expound","path","expound/path",-1026376555),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
/**
 * Given a form and a path into that form, returns a string
 * that helps the user understand where that path is located
 * in the form
 */
expound.alpha.value_in_context = (function expound$alpha$value_in_context(opts,spec_name,form,path,value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),spec_name)){
var _STAR_print_namespace_maps_STAR_12348 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return cljs.core.pr_str.call(null,form);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_12348;
}} else {
if(cljs.core._EQ_.call(null,form,value)){
var _STAR_print_namespace_maps_STAR_12349 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str.call(null,value);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_12349;
}} else {
return expound.problems.highlighted_value.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("expound","form","expound/form",-264680632),form,new cljs.core.Keyword("expound","in","expound/in",-1900412298),path], null));
}
}
});
expound.alpha.spec_str = (function expound$alpha$spec_str(spec){
if((spec instanceof cljs.core.Keyword)){
return expound.printer.format.call(null,"%s:\n%s",spec,expound.printer.indent.call(null,expound.printer.pprint_str.call(null,cljs.spec.alpha.form.call(null,spec))));
} else {
return expound.printer.pprint_str.call(null,cljs.spec.alpha.form.call(null,spec));
}
});
expound.alpha.spec_PLUS_via = (function expound$alpha$spec_PLUS_via(problem){
var map__12350 = problem;
var map__12350__$1 = ((((!((map__12350 == null)))?(((((map__12350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12350):map__12350);
var via = cljs.core.get.call(null,map__12350__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var spec = cljs.core.get.call(null,map__12350__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
if((spec instanceof cljs.core.Keyword)){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null),via);
} else {
return via;
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.alpha","specs","expound.alpha/specs",-1617991929,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("spec","specs","spec/specs",1428018738)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"problems","problems",2097327077)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","problems","spec/problems",2096407970)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","problems","spec/problems",2096407970)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("spec","problems","spec/problems",2096407970)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("spec","specs","spec/specs",1428018738),new cljs.core.Keyword("spec","specs","spec/specs",1428018738),null,null),new cljs.core.Keyword("spec","specs","spec/specs",1428018738),null,null,null));
/**
 * Given a collection of problems, returns the specs for those problems, with duplicates removed
 */
expound.alpha.specs = (function expound$alpha$specs(problems){
return cljs.core.distinct.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,expound.alpha.spec_PLUS_via,problems)));
});
expound.alpha.specs_str = (function expound$alpha$specs_str(problems){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,expound.alpha.spec_str,cljs.core.reverse.call(null,expound.alpha.specs.call(null,problems))));
});
expound.alpha.named_QMARK_ = (function expound$alpha$named_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
expound.alpha.pr_pred_STAR_ = (function expound$alpha$pr_pred_STAR_(pred){
if(cljs.core.truth_((function (){var or__3922__auto__ = (pred instanceof cljs.core.Symbol);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return expound.alpha.named_QMARK_.call(null,pred);
}
})())){
return cljs.core.name.call(null,pred);
} else {
if(cljs.core.fn_QMARK_.call(null,pred)){
return expound.printer.pprint_fn.call(null,pred);
} else {
return expound.printer.elide_core_ns.call(null,(function (){var _STAR_print_namespace_maps_STAR_12353 = cljs.core._STAR_print_namespace_maps_STAR_;
cljs.core._STAR_print_namespace_maps_STAR_ = false;

try{return expound.printer.pprint_str.call(null,pred);
}finally {cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR_12353;
}})());

}
}
});
expound.alpha.pr_pred = (function expound$alpha$pr_pred(pred,spec){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),pred)){
return expound.alpha.pr_pred_STAR_.call(null,spec);
} else {
return expound.alpha.pr_pred_STAR_.call(null,pred);
}
});
expound.alpha.show_spec_name = (function expound$alpha$show_spec_name(spec_name,value){
if(cljs.core.truth_(spec_name)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12354 = spec_name;
var G__12354__$1 = (((G__12354 instanceof cljs.core.Keyword))?G__12354.fqn:null);
switch (G__12354__$1) {
case "cljs.spec.alpha/pred":
return "";

break;
case "args":
return "Function arguments\n\n";

break;
case "ret":
return "Return value\n\n";

break;
case "fn":
return "Function arguments and return value\n\n";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12354__$1)].join('')));

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return value;
}
});
expound.alpha.preds = (function expound$alpha$preds(problems){
return clojure.string.join.call(null,"\n\nor\n\n",cljs.core.distinct.call(null,cljs.core.map.call(null,(function (problem){
return expound.printer.indent.call(null,expound.alpha.pr_pred.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem)));
}),problems)));
});
expound.alpha.error_message = (function expound$alpha$error_message(k){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);

return cljs.core.get.call(null,cljs.core.deref.call(null,expound.alpha.registry_ref),k);
});
expound.alpha.spec_w_error_message_QMARK_ = (function expound$alpha$spec_w_error_message_QMARK_(via,pred){
return cljs.core.boolean$.call(null,(function (){var last_spec = cljs.core.last.call(null,via);
var and__3911__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),pred);
if(and__3911__auto__){
var and__3911__auto____$1 = expound.alpha.error_message.call(null,last_spec);
if(cljs.core.truth_(and__3911__auto____$1)){
return cljs.spec.alpha.get_spec.call(null,last_spec);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})());
});
expound.alpha.predicate_errors = (function expound$alpha$predicate_errors(problems){
var vec__12356 = cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,(function (p__12359){
var map__12360 = p__12359;
var map__12360__$1 = ((((!((map__12360 == null)))?(((((map__12360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12360):map__12360);
var via = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword("expound","via","expound/via",-595987777));
var pred = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
return expound.alpha.spec_w_error_message_QMARK_.call(null,via,pred);
}),problems);
var with_msg = cljs.core.nth.call(null,vec__12356,(0),null);
var no_msgs = cljs.core.nth.call(null,vec__12356,(1),null);
return clojure.string.join.call(null,"\n\nor\n\n",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.conj.call(null,cljs.core.keep.call(null,((function (vec__12356,with_msg,no_msgs){
return (function (p__12362){
var map__12363 = p__12362;
var map__12363__$1 = ((((!((map__12363 == null)))?(((((map__12363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12363):map__12363);
var via = cljs.core.get.call(null,map__12363__$1,new cljs.core.Keyword("expound","via","expound/via",-595987777));
return expound.alpha.error_message.call(null,cljs.core.last.call(null,via));
});})(vec__12356,with_msg,no_msgs))
,with_msg),((cljs.core.seq.call(null,no_msgs))?expound.printer.format.call(null,"should satisfy\n\n%s",expound.alpha.preds.call(null,no_msgs)):null))));
});
expound.alpha.label = (function expound$alpha$label(var_args){
var G__12366 = arguments.length;
switch (G__12366) {
case 1:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return expound.alpha.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$1 = (function (size){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,size,"-"));
});

expound.alpha.label.cljs$core$IFn$_invoke$arity$2 = (function (size,s){
var prefix = ["-- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join('');
var chars_left = (size - cljs.core.count.call(null,prefix));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,chars_left,"-")))].join('');
});

expound.alpha.label.cljs$lang$maxFixedArity = 2;

expound.alpha.header_label = cljs.core.partial.call(null,expound.alpha.label,expound.alpha.header_size);
expound.alpha.section_label = cljs.core.partial.call(null,expound.alpha.label,expound.alpha.section_size);
expound.alpha.relevant_specs = (function expound$alpha$relevant_specs(problems){
var sp_str = expound.alpha.specs_str.call(null,problems);
if(clojure.string.blank_QMARK_.call(null,sp_str)){
return "";
} else {
return expound.printer.format.call(null,"%s\n\n%s",expound.alpha.section_label.call(null,"Relevant specs"),sp_str);
}
});
expound.alpha.multi_spec_parts = (function expound$alpha$multi_spec_parts(spec_form){
var vec__12368 = spec_form;
var _multi_spec = cljs.core.nth.call(null,vec__12368,(0),null);
var mm = cljs.core.nth.call(null,vec__12368,(1),null);
var retag = cljs.core.nth.call(null,vec__12368,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mm","mm",-1652850560),mm,new cljs.core.Keyword(null,"retag","retag",-1111558802),retag], null);
});
expound.alpha.missing_spec_QMARK_ = (function expound$alpha$missing_spec_QMARK_(_failure,problem){
return cljs.core._EQ_.call(null,"no method",new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.not_in_set_QMARK_ = (function expound$alpha$not_in_set_QMARK_(_failure,problem){
return cljs.core.set_QMARK_.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.fspec_exception_failure_QMARK_ = (function expound$alpha$fspec_exception_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core._EQ_.call(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem))));
});
expound.alpha.fspec_ret_failure_QMARK_ = (function expound$alpha$fspec_ret_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.alpha.fspec_fn_failure_QMARK_ = (function expound$alpha$fspec_fn_failure_QMARK_(failure,problem){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(problem)))));
});
expound.alpha.missing_key_QMARK_ = (function expound$alpha$missing_key_QMARK_(_failure,problem){
var pred = new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem);
var and__3911__auto__ = cljs.core.seq_QMARK_.call(null,pred);
if(and__3911__auto__){
var and__3911__auto____$1 = ((2) < cljs.core.count.call(null,pred));
if(and__3911__auto____$1){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("spec","contains-key-pred","spec/contains-key-pred",1697210321),cljs.core.nth.call(null,pred,(2)));
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
expound.alpha.insufficient_input_QMARK_ = (function expound$alpha$insufficient_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Insufficient input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.extra_input_QMARK_ = (function expound$alpha$extra_input_QMARK_(_failure,problem){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Extra input",null], null), null),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem));
});
expound.alpha.multi_spec = (function expound$alpha$multi_spec(pred,spec){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12371_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__12371_SHARP_)) && (((2) <= cljs.core.count.call(null,p1__12371_SHARP_))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",-1464710253),cljs.core.keyword.call(null,cljs.core.first.call(null,p1__12371_SHARP_)))) && (cljs.core._EQ_.call(null,pred,cljs.core.second.call(null,p1__12371_SHARP_))));
}),cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,cljs.spec.alpha.form.call(null,spec))));
});
expound.alpha.no_method = (function expound$alpha$no_method(spec_name,val,path,problem){
var sp = cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","last","cljs.core/last",1273893704,null),cljs.core.list(new cljs.core.Keyword("expound","via","expound/via",-595987777),new cljs.core.Symbol(null,"problem","problem",-1486280621,null))),cljs.core.last.call(null,new cljs.core.Keyword("expound","via","expound/via",-595987777).cljs$core$IFn$_invoke$arity$1(problem)),null,null);
var map__12372 = expound.alpha.multi_spec_parts.call(null,expound.alpha.multi_spec.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),sp));
var map__12372__$1 = ((((!((map__12372 == null)))?(((((map__12372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12372):map__12372);
var mm = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"mm","mm",-1652850560));
var retag = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"retag","retag",-1111558802));
return expound.printer.format.call(null,"Cannot find spec for\n\n %s\n\n Spec multimethod:      `%s`\n Dispatch function:     `%s`\n Dispatch value:        `%s`\n ",expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),cljs.core.pr_str.call(null,mm),cljs.core.pr_str.call(null,retag),cljs.core.pr_str.call(null,(cljs.core.truth_(retag)?retag.call(null,expound.problems.value_in.call(null,val,path)):null)));
});
if(typeof expound.alpha.problem_group_str !== 'undefined'){
} else {
expound.alpha.problem_group_str = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expound.alpha","problem-group-str"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (type,spec_name,_val,_path,_problems,_opts){
return type;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
if(typeof expound.alpha.expected_str !== 'undefined'){
} else {
expound.alpha.expected_str = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"expound.alpha","expected-str"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (type,spec_name,_val,_path,_problems,_opts){
return type;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
expound.alpha.explain_missing_keys = (function expound$alpha$explain_missing_keys(problems){
var missing_keys = cljs.core.map.call(null,(function (p1__12374_SHARP_){
return expound.printer.missing_key.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(p1__12374_SHARP_));
}),problems);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.call(null,"should contain %s: %s",((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,missing_keys))) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword,missing_keys))))?"key":"keys"),expound.printer.print_missing_keys.call(null,problems))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5455__auto__ = expound.printer.print_spec_keys.call(null,problems);
if(cljs.core.truth_(temp__5455__auto__)){
var table = temp__5455__auto__;
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(table)].join('');
} else {
return null;
}
})())].join('');
});
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","missing-key","problem/missing-key",794346427),(function (_type,spec_name,val,path,problems,opts){
return expound.alpha.explain_missing_keys.call(null,problems);
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","missing-key","problem/missing-key",794346427),(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","not-in-set","problem/not-in-set",-1518699464),(function (_type,_spec_name,_val,_path,problems,_opts){
var combined_set = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),problems));
return expound.printer.format.call(null,"should be%s: %s",((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined_set)))?"":" one of"),clojure.string.join.call(null,", ",cljs.core.sort.call(null,cljs.core.map.call(null,((function (combined_set){
return (function (p1__12375_SHARP_){
return ["",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,p1__12375_SHARP_)),""].join('');
});})(combined_set))
,combined_set))));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","not-in-set","problem/not-in-set",-1518699464),(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","missing-spec","problem/missing-spec",223748487),(function (_type,spec_name,val,path,problems,opts){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__12376_SHARP_){
return expound.alpha.no_method.call(null,spec_name,val,path,p1__12376_SHARP_);
}),problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","missing-spec","problem/missing-spec",223748487),(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.call(null,"%s\n\n%s",expound.alpha.header_label.call(null,"Missing spec"),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
/**
 * Same as sort-by, but if an error is raised, returns the original unsorted collection
 */
expound.alpha.safe_sort_by = (function expound$alpha$safe_sort_by(key_fn,comp,coll){
try{return cljs.core.sort_by.call(null,key_fn,comp,coll);
}catch (e12377){var e = e12377;
return coll;
}});
expound.alpha.problem_type = (function expound$alpha$problem_type(failure,problem){
if(cljs.core.truth_(expound.alpha.insufficient_input_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","insufficient-input","problem/insufficient-input",-1316420563);
} else {
if(cljs.core.truth_(expound.alpha.extra_input_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","extra-input","problem/extra-input",502180032);
} else {
if(cljs.core.truth_(expound.alpha.not_in_set_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","not-in-set","problem/not-in-set",-1518699464);
} else {
if(cljs.core.truth_(expound.alpha.missing_key_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","missing-key","problem/missing-key",794346427);
} else {
if(cljs.core.truth_(expound.alpha.missing_spec_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","missing-spec","problem/missing-spec",223748487);
} else {
if(cljs.core.truth_(expound.alpha.fspec_exception_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","fspec-exception-failure","problem/fspec-exception-failure",-1937041689);
} else {
if(cljs.core.truth_(expound.alpha.fspec_ret_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","fspec-ret-failure","problem/fspec-ret-failure",-1425006873);
} else {
if(cljs.core.truth_(expound.alpha.fspec_fn_failure_QMARK_.call(null,failure,problem))){
return new cljs.core.Keyword("problem","fspec-fn-failure","problem/fspec-fn-failure",1938393957);
} else {
return new cljs.core.Keyword("problem","unknown","problem/unknown",-1249712246);

}
}
}
}
}
}
}
}
});
expound.alpha.grouped_and_sorted_problems = (function expound$alpha$grouped_and_sorted_problems(failure,problems){
return expound.alpha.safe_sort_by.call(null,cljs.core.first,expound.paths.compare_paths,cljs.core.group_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword("expound","in","expound/in",-1900412298),cljs.core.partial.call(null,expound.alpha.problem_type,failure)),problems));
});
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","insufficient-input","problem/insufficient-input",-1316420563),(function (_type,spec_name,val,path,problems,opts){
var problem = cljs.core.first.call(null,problems);
return expound.printer.format.call(null,"should have additional elements. The next element%s %s",(function (){var temp__5459__auto__ = cljs.core.first.call(null,new cljs.core.Keyword("expound","path","expound/path",-1026376555).cljs$core$IFn$_invoke$arity$1(problem));
if((temp__5459__auto__ == null)){
return "";
} else {
var el_name = temp__5459__auto__;
return [" \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,el_name)),"\""].join('');
}
})(),(function (){var failure = null;
var non_matching_value = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("expound","value-that-should-never-match","expound/value-that-should-never-match",-232021426)], null);
var new_problems = expound.alpha.grouped_and_sorted_problems.call(null,failure,cljs.core.map.call(null,((function (failure,non_matching_value,problem){
return (function (p1__12378_SHARP_){
return cljs.core.dissoc.call(null,p1__12378_SHARP_,new cljs.core.Keyword(null,"reason","reason",-2070751759));
});})(failure,non_matching_value,problem))
,problems));
return clojure.string.join.call(null,"\n\nor ",(function (){var iter__4292__auto__ = ((function (failure,non_matching_value,new_problems,problem){
return (function expound$alpha$iter__12379(s__12380){
return (new cljs.core.LazySeq(null,((function (failure,non_matching_value,new_problems,problem){
return (function (){
var s__12380__$1 = s__12380;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12380__$1);
if(temp__5457__auto__){
var s__12380__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12380__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__12380__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__12382 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__12381 = (0);
while(true){
if((i__12381 < size__4291__auto__)){
var vec__12383 = cljs.core._nth.call(null,c__4290__auto__,i__12381);
var vec__12386 = cljs.core.nth.call(null,vec__12383,(0),null);
var in$ = cljs.core.nth.call(null,vec__12386,(0),null);
var type = cljs.core.nth.call(null,vec__12386,(1),null);
var problems_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12383,(1),null);
cljs.core.chunk_append.call(null,b__12382,expound.alpha.expected_str.call(null,type,new cljs.core.Keyword("expound","no-spec-name","expound/no-spec-name",-718645311),non_matching_value,in$,problems_SINGLEQUOTE_,opts));

var G__12395 = (i__12381 + (1));
i__12381 = G__12395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12382),expound$alpha$iter__12379.call(null,cljs.core.chunk_rest.call(null,s__12380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12382),null);
}
} else {
var vec__12389 = cljs.core.first.call(null,s__12380__$2);
var vec__12392 = cljs.core.nth.call(null,vec__12389,(0),null);
var in$ = cljs.core.nth.call(null,vec__12392,(0),null);
var type = cljs.core.nth.call(null,vec__12392,(1),null);
var problems_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12389,(1),null);
return cljs.core.cons.call(null,expound.alpha.expected_str.call(null,type,new cljs.core.Keyword("expound","no-spec-name","expound/no-spec-name",-718645311),non_matching_value,in$,problems_SINGLEQUOTE_,opts),expound$alpha$iter__12379.call(null,cljs.core.rest.call(null,s__12380__$2)));
}
} else {
return null;
}
break;
}
});})(failure,non_matching_value,new_problems,problem))
,null,null));
});})(failure,non_matching_value,new_problems,problem))
;
return iter__4292__auto__.call(null,new_problems);
})());
})());
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","insufficient-input","problem/insufficient-input",-1316420563),(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Syntax error"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","extra-input","problem/extra-input",502180032),(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first.call(null,problems);
return "has extra input";
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","extra-input","problem/extra-input",502180032),(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Syntax error"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","fspec-exception-failure","problem/fspec-exception-failure",-1937041689),(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first.call(null,problems);
return expound.printer.format.call(null,"threw exception \n\n%s\n\nwith args:\n\n%s",expound.printer.indent.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(problem))),expound.printer.indent.call(null,clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem))));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","fspec-exception-failure","problem/fspec-exception-failure",-1937041689),(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Exception"),expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","fspec-ret-failure","problem/fspec-ret-failure",-1425006873),(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first.call(null,problems);
return expound.printer.format.call(null,"returned an invalid value\n\n%s\n\n%s",expound.printer.indent.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem))),expound.alpha.predicate_errors.call(null,problems));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","fspec-ret-failure","problem/fspec-ret-failure",-1425006873),(function (_type,spec_name,val,path,problems,opts){
return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Function spec failed"),expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","fspec-fn-failure","problem/fspec-fn-failure",1938393957),(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

var problem = cljs.core.first.call(null,problems);
return expound.printer.format.call(null,"failed spec. Function arguments and return value\n\n%s\n\nshould satisfy\n\n%s",expound.printer.indent.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(problem))),expound.printer.indent.call(null,expound.alpha.pr_pred.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(problem),new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(problem))));
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","fspec-fn-failure","problem/fspec-fn-failure",1938393957),(function (_type,spec_name,val,path,problems,opts){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("expound.alpha","singleton","expound.alpha/singleton",531848121),problems);
} else {
}
} else {
}

return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Function spec failed"),expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
cljs.core._add_method.call(null,expound.alpha.expected_str,new cljs.core.Keyword("problem","unknown","problem/unknown",-1249712246),(function (_type,spec_name,val,path,problems,opts){
return expound.alpha.predicate_errors.call(null,problems);
}));
cljs.core._add_method.call(null,expound.alpha.problem_group_str,new cljs.core.Keyword("problem","unknown","problem/unknown",-1249712246),(function (_type,spec_name,val,path,problems,opts){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,new cljs.core.Keyword(null,"val","val",128701612),problems)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),": All values should be the same, but they are ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problems)].join('')),"\n","(apply = (map :val problems))"].join('')));
}

return expound.printer.format.call(null,"%s\n\n%s\n\n%s",expound.alpha.header_label.call(null,"Spec failed"),expound.alpha.show_spec_name.call(null,spec_name,expound.printer.indent.call(null,expound.alpha._STAR_value_str_fn_STAR_.call(null,spec_name,val,path,expound.problems.value_in.call(null,val,path)))),expound.alpha.expected_str.call(null,_type,spec_name,val,path,problems,opts));
}));
expound.alpha.problem_group_str1 = (function expound$alpha$problem_group_str1(type,spec_name,val,path,problems,opts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.problem_group_str.call(null,type,spec_name,val,path,problems,opts)),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677).cljs$core$IFn$_invoke$arity$1(opts))?expound.alpha.relevant_specs.call(null,problems):""))].join('');
});
expound.alpha.instrumentation_info = (function expound$alpha$instrumentation_info(failure,caller){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),failure)){
return expound.printer.format.call(null,"%s:%s\n\n",new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$2(caller,"<filename missing>"),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$2(caller,"<line number missing>"));
} else {
return "";
}
});
expound.alpha.spec_name = (function expound$alpha$spec_name(ed){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instrument","instrument",-960698844),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(ed)))){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed))));
} else {
return null;
}
});
expound.alpha.printer_str = (function expound$alpha$printer_str(opts,explain_data){
var opts_SINGLEQUOTE_ = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-valid-values?","show-valid-values?",-587258094),false,new cljs.core.Keyword(null,"print-specs?","print-specs?",146397677),true], null),opts);
if(cljs.core.not.call(null,explain_data)){
return "Success!\n";
} else {
var _STAR_value_str_fn_STAR_12396 = expound.alpha._STAR_value_str_fn_STAR_;
expound.alpha._STAR_value_str_fn_STAR_ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"value-str-fn","value-str-fn",1124137860),cljs.core.partial.call(null,expound.alpha.value_in_context,opts_SINGLEQUOTE_));

try{var map__12397 = explain_data;
var map__12397__$1 = ((((!((map__12397 == null)))?(((((map__12397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12397):map__12397);
var fn = cljs.core.get.call(null,map__12397__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var failure = cljs.core.get.call(null,map__12397__$1,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592));
var explain_data_SINGLEQUOTE_ = expound.problems.annotate.call(null,explain_data);
var caller = new cljs.core.Keyword("expound","caller","expound/caller",-503638870).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var form = new cljs.core.Keyword("expound","form","expound/form",-264680632).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_);
var problems = expound.alpha.grouped_and_sorted_problems.call(null,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592).cljs$core$IFn$_invoke$arity$1(explain_data),expound.problems.leaf_only.call(null,new cljs.core.Keyword("expound","problems","expound/problems",1257773984).cljs$core$IFn$_invoke$arity$1(explain_data_SINGLEQUOTE_)));
return expound.printer.no_trailing_whitespace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.alpha.instrumentation_info.call(null,failure,caller)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.printer.format.call(null,"%s\n\n%s\nDetected %s %s\n",clojure.string.join.call(null,"\n\n",(function (){var iter__4292__auto__ = ((function (map__12397,map__12397__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_12396,opts_SINGLEQUOTE_){
return (function expound$alpha$printer_str_$_iter__12399(s__12400){
return (new cljs.core.LazySeq(null,((function (map__12397,map__12397__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_12396,opts_SINGLEQUOTE_){
return (function (){
var s__12400__$1 = s__12400;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12400__$1);
if(temp__5457__auto__){
var s__12400__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12400__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__12400__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__12402 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__12401 = (0);
while(true){
if((i__12401 < size__4291__auto__)){
var vec__12403 = cljs.core._nth.call(null,c__4290__auto__,i__12401);
var vec__12406 = cljs.core.nth.call(null,vec__12403,(0),null);
var in$ = cljs.core.nth.call(null,vec__12406,(0),null);
var type = cljs.core.nth.call(null,vec__12406,(1),null);
var probs = cljs.core.nth.call(null,vec__12403,(1),null);
cljs.core.chunk_append.call(null,b__12402,expound.alpha.problem_group_str1.call(null,type,expound.alpha.spec_name.call(null,explain_data),form,in$,probs,opts_SINGLEQUOTE_));

var G__12415 = (i__12401 + (1));
i__12401 = G__12415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),expound$alpha$printer_str_$_iter__12399.call(null,cljs.core.chunk_rest.call(null,s__12400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),null);
}
} else {
var vec__12409 = cljs.core.first.call(null,s__12400__$2);
var vec__12412 = cljs.core.nth.call(null,vec__12409,(0),null);
var in$ = cljs.core.nth.call(null,vec__12412,(0),null);
var type = cljs.core.nth.call(null,vec__12412,(1),null);
var probs = cljs.core.nth.call(null,vec__12409,(1),null);
return cljs.core.cons.call(null,expound.alpha.problem_group_str1.call(null,type,expound.alpha.spec_name.call(null,explain_data),form,in$,probs,opts_SINGLEQUOTE_),expound$alpha$printer_str_$_iter__12399.call(null,cljs.core.rest.call(null,s__12400__$2)));
}
} else {
return null;
}
break;
}
});})(map__12397,map__12397__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_12396,opts_SINGLEQUOTE_))
,null,null));
});})(map__12397,map__12397__$1,fn,failure,explain_data_SINGLEQUOTE_,caller,form,problems,_STAR_value_str_fn_STAR_12396,opts_SINGLEQUOTE_))
;
return iter__4292__auto__.call(null,problems);
})()),expound.alpha.section_label.call(null),cljs.core.count.call(null,problems),((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,problems)))?"error":"errors")))].join(''));
}finally {expound.alpha._STAR_value_str_fn_STAR_ = _STAR_value_str_fn_STAR_12396;
}}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.alpha","foo","expound.alpha/foo",612670619),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
/**
 * Returns a printer, configured via opts
 */
expound.alpha.custom_printer = (function expound$alpha$custom_printer(opts){
return (function (explain_data){
return cljs.core.print.call(null,expound.alpha.printer_str.call(null,opts,explain_data));
});
});
/**
 * Prints explain-data in a human-readable format
 */
expound.alpha.printer = (function expound$alpha$printer(explain_data){
return expound.alpha.custom_printer.call(null,cljs.core.PersistentArrayMap.EMPTY).call(null,explain_data);
});
/**
 * Given a spec and a value, either returns success message or returns a human-readable explanation as a string.
 */
expound.alpha.expound_str = (function expound$alpha$expound_str(spec,form){
var explain_data = cljs.spec.alpha.explain_data.call(null,spec,form);
return expound.alpha.printer_str.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(explain_data)?cljs.core.assoc.call(null,explain_data,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),form):null));
});
/**
 * Given a spec and a value, either prints a success message or prints a human-readable explanation as a string.
 */
expound.alpha.expound = (function expound$alpha$expound(spec,form){
return cljs.core.print.call(null,expound.alpha.expound_str.call(null,spec,form));
});
expound.alpha.defmsg = (function expound$alpha$defmsg(k,error_message){
cljs.core.swap_BANG_.call(null,expound.alpha.registry_ref,cljs.core.assoc,k,error_message);

return null;
});

//# sourceMappingURL=alpha.js.map
