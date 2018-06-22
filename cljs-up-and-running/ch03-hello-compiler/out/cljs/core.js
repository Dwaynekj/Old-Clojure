goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6901 = (((x == null))?null:x);
if((p[goog.typeOf(x__6901)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6902__delegate = function (array,i,idxs){
return cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs);
};
var G__6902 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6902__delegate.call(this, array, i, idxs);
};
G__6902.cljs$lang$maxFixedArity = 2;
G__6902.cljs$lang$applyTo = (function (arglist__6903){
var array = cljs.core.first(arglist__6903);
var i = cljs.core.first(cljs.core.next(arglist__6903));
var idxs = cljs.core.rest(cljs.core.next(arglist__6903));
return G__6902__delegate(array, i, idxs);
});
G__6902.cljs$lang$arity$variadic = G__6902__delegate;
return G__6902;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto____6988 = this$;
if(and__3941__auto____6988)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto____6988;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__3146__auto____6989 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6990 = (cljs.core._invoke[goog.typeOf(x__3146__auto____6989)]);
if(or__3943__auto____6990)
{return or__3943__auto____6990;
} else
{var or__3943__auto____6991 = (cljs.core._invoke["_"]);
if(or__3943__auto____6991)
{return or__3943__auto____6991;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto____6992 = this$;
if(and__3941__auto____6992)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto____6992;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__3146__auto____6993 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6994 = (cljs.core._invoke[goog.typeOf(x__3146__auto____6993)]);
if(or__3943__auto____6994)
{return or__3943__auto____6994;
} else
{var or__3943__auto____6995 = (cljs.core._invoke["_"]);
if(or__3943__auto____6995)
{return or__3943__auto____6995;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto____6996 = this$;
if(and__3941__auto____6996)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto____6996;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__3146__auto____6997 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6998 = (cljs.core._invoke[goog.typeOf(x__3146__auto____6997)]);
if(or__3943__auto____6998)
{return or__3943__auto____6998;
} else
{var or__3943__auto____6999 = (cljs.core._invoke["_"]);
if(or__3943__auto____6999)
{return or__3943__auto____6999;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto____7000 = this$;
if(and__3941__auto____7000)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto____7000;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__3146__auto____7001 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7002 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7001)]);
if(or__3943__auto____7002)
{return or__3943__auto____7002;
} else
{var or__3943__auto____7003 = (cljs.core._invoke["_"]);
if(or__3943__auto____7003)
{return or__3943__auto____7003;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto____7004 = this$;
if(and__3941__auto____7004)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto____7004;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__3146__auto____7005 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7006 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7005)]);
if(or__3943__auto____7006)
{return or__3943__auto____7006;
} else
{var or__3943__auto____7007 = (cljs.core._invoke["_"]);
if(or__3943__auto____7007)
{return or__3943__auto____7007;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto____7008 = this$;
if(and__3941__auto____7008)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto____7008;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__3146__auto____7009 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7010 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7009)]);
if(or__3943__auto____7010)
{return or__3943__auto____7010;
} else
{var or__3943__auto____7011 = (cljs.core._invoke["_"]);
if(or__3943__auto____7011)
{return or__3943__auto____7011;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto____7012 = this$;
if(and__3941__auto____7012)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto____7012;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__3146__auto____7013 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7014 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7013)]);
if(or__3943__auto____7014)
{return or__3943__auto____7014;
} else
{var or__3943__auto____7015 = (cljs.core._invoke["_"]);
if(or__3943__auto____7015)
{return or__3943__auto____7015;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto____7016 = this$;
if(and__3941__auto____7016)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto____7016;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__3146__auto____7017 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7018 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7017)]);
if(or__3943__auto____7018)
{return or__3943__auto____7018;
} else
{var or__3943__auto____7019 = (cljs.core._invoke["_"]);
if(or__3943__auto____7019)
{return or__3943__auto____7019;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto____7020 = this$;
if(and__3941__auto____7020)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto____7020;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__3146__auto____7021 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7022 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7021)]);
if(or__3943__auto____7022)
{return or__3943__auto____7022;
} else
{var or__3943__auto____7023 = (cljs.core._invoke["_"]);
if(or__3943__auto____7023)
{return or__3943__auto____7023;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto____7024 = this$;
if(and__3941__auto____7024)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto____7024;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__3146__auto____7025 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7026 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7025)]);
if(or__3943__auto____7026)
{return or__3943__auto____7026;
} else
{var or__3943__auto____7027 = (cljs.core._invoke["_"]);
if(or__3943__auto____7027)
{return or__3943__auto____7027;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto____7028 = this$;
if(and__3941__auto____7028)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto____7028;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__3146__auto____7029 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7030 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7029)]);
if(or__3943__auto____7030)
{return or__3943__auto____7030;
} else
{var or__3943__auto____7031 = (cljs.core._invoke["_"]);
if(or__3943__auto____7031)
{return or__3943__auto____7031;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto____7032 = this$;
if(and__3941__auto____7032)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto____7032;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__3146__auto____7033 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7034 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7033)]);
if(or__3943__auto____7034)
{return or__3943__auto____7034;
} else
{var or__3943__auto____7035 = (cljs.core._invoke["_"]);
if(or__3943__auto____7035)
{return or__3943__auto____7035;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto____7036 = this$;
if(and__3941__auto____7036)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto____7036;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__3146__auto____7037 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7038 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7037)]);
if(or__3943__auto____7038)
{return or__3943__auto____7038;
} else
{var or__3943__auto____7039 = (cljs.core._invoke["_"]);
if(or__3943__auto____7039)
{return or__3943__auto____7039;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto____7040 = this$;
if(and__3941__auto____7040)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto____7040;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__3146__auto____7041 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7042 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7041)]);
if(or__3943__auto____7042)
{return or__3943__auto____7042;
} else
{var or__3943__auto____7043 = (cljs.core._invoke["_"]);
if(or__3943__auto____7043)
{return or__3943__auto____7043;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto____7044 = this$;
if(and__3941__auto____7044)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto____7044;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__3146__auto____7045 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7046 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7045)]);
if(or__3943__auto____7046)
{return or__3943__auto____7046;
} else
{var or__3943__auto____7047 = (cljs.core._invoke["_"]);
if(or__3943__auto____7047)
{return or__3943__auto____7047;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto____7048 = this$;
if(and__3941__auto____7048)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto____7048;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__3146__auto____7049 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7050 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7049)]);
if(or__3943__auto____7050)
{return or__3943__auto____7050;
} else
{var or__3943__auto____7051 = (cljs.core._invoke["_"]);
if(or__3943__auto____7051)
{return or__3943__auto____7051;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto____7052 = this$;
if(and__3941__auto____7052)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto____7052;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__3146__auto____7053 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7054 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7053)]);
if(or__3943__auto____7054)
{return or__3943__auto____7054;
} else
{var or__3943__auto____7055 = (cljs.core._invoke["_"]);
if(or__3943__auto____7055)
{return or__3943__auto____7055;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto____7056 = this$;
if(and__3941__auto____7056)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto____7056;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__3146__auto____7057 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7058 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7057)]);
if(or__3943__auto____7058)
{return or__3943__auto____7058;
} else
{var or__3943__auto____7059 = (cljs.core._invoke["_"]);
if(or__3943__auto____7059)
{return or__3943__auto____7059;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto____7060 = this$;
if(and__3941__auto____7060)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto____7060;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__3146__auto____7061 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7062 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7061)]);
if(or__3943__auto____7062)
{return or__3943__auto____7062;
} else
{var or__3943__auto____7063 = (cljs.core._invoke["_"]);
if(or__3943__auto____7063)
{return or__3943__auto____7063;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto____7064 = this$;
if(and__3941__auto____7064)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto____7064;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__3146__auto____7065 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7066 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7065)]);
if(or__3943__auto____7066)
{return or__3943__auto____7066;
} else
{var or__3943__auto____7067 = (cljs.core._invoke["_"]);
if(or__3943__auto____7067)
{return or__3943__auto____7067;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto____7068 = this$;
if(and__3941__auto____7068)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto____7068;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__3146__auto____7069 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7070 = (cljs.core._invoke[goog.typeOf(x__3146__auto____7069)]);
if(or__3943__auto____7070)
{return or__3943__auto____7070;
} else
{var or__3943__auto____7071 = (cljs.core._invoke["_"]);
if(or__3943__auto____7071)
{return or__3943__auto____7071;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto____7076 = coll;
if(and__3941__auto____7076)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto____7076;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__3146__auto____7077 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7078 = (cljs.core._count[goog.typeOf(x__3146__auto____7077)]);
if(or__3943__auto____7078)
{return or__3943__auto____7078;
} else
{var or__3943__auto____7079 = (cljs.core._count["_"]);
if(or__3943__auto____7079)
{return or__3943__auto____7079;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto____7084 = coll;
if(and__3941__auto____7084)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto____7084;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__3146__auto____7085 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7086 = (cljs.core._empty[goog.typeOf(x__3146__auto____7085)]);
if(or__3943__auto____7086)
{return or__3943__auto____7086;
} else
{var or__3943__auto____7087 = (cljs.core._empty["_"]);
if(or__3943__auto____7087)
{return or__3943__auto____7087;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto____7092 = coll;
if(and__3941__auto____7092)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto____7092;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__3146__auto____7093 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7094 = (cljs.core._conj[goog.typeOf(x__3146__auto____7093)]);
if(or__3943__auto____7094)
{return or__3943__auto____7094;
} else
{var or__3943__auto____7095 = (cljs.core._conj["_"]);
if(or__3943__auto____7095)
{return or__3943__auto____7095;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto____7104 = coll;
if(and__3941__auto____7104)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto____7104;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__3146__auto____7105 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7106 = (cljs.core._nth[goog.typeOf(x__3146__auto____7105)]);
if(or__3943__auto____7106)
{return or__3943__auto____7106;
} else
{var or__3943__auto____7107 = (cljs.core._nth["_"]);
if(or__3943__auto____7107)
{return or__3943__auto____7107;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto____7108 = coll;
if(and__3941__auto____7108)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto____7108;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__3146__auto____7109 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7110 = (cljs.core._nth[goog.typeOf(x__3146__auto____7109)]);
if(or__3943__auto____7110)
{return or__3943__auto____7110;
} else
{var or__3943__auto____7111 = (cljs.core._nth["_"]);
if(or__3943__auto____7111)
{return or__3943__auto____7111;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto____7116 = coll;
if(and__3941__auto____7116)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto____7116;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__3146__auto____7117 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7118 = (cljs.core._first[goog.typeOf(x__3146__auto____7117)]);
if(or__3943__auto____7118)
{return or__3943__auto____7118;
} else
{var or__3943__auto____7119 = (cljs.core._first["_"]);
if(or__3943__auto____7119)
{return or__3943__auto____7119;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto____7124 = coll;
if(and__3941__auto____7124)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto____7124;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__3146__auto____7125 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7126 = (cljs.core._rest[goog.typeOf(x__3146__auto____7125)]);
if(or__3943__auto____7126)
{return or__3943__auto____7126;
} else
{var or__3943__auto____7127 = (cljs.core._rest["_"]);
if(or__3943__auto____7127)
{return or__3943__auto____7127;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto____7132 = coll;
if(and__3941__auto____7132)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto____7132;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__3146__auto____7133 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7134 = (cljs.core._next[goog.typeOf(x__3146__auto____7133)]);
if(or__3943__auto____7134)
{return or__3943__auto____7134;
} else
{var or__3943__auto____7135 = (cljs.core._next["_"]);
if(or__3943__auto____7135)
{return or__3943__auto____7135;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto____7144 = o;
if(and__3941__auto____7144)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto____7144;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__3146__auto____7145 = (((o == null))?null:o);
return (function (){var or__3943__auto____7146 = (cljs.core._lookup[goog.typeOf(x__3146__auto____7145)]);
if(or__3943__auto____7146)
{return or__3943__auto____7146;
} else
{var or__3943__auto____7147 = (cljs.core._lookup["_"]);
if(or__3943__auto____7147)
{return or__3943__auto____7147;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto____7148 = o;
if(and__3941__auto____7148)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto____7148;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__3146__auto____7149 = (((o == null))?null:o);
return (function (){var or__3943__auto____7150 = (cljs.core._lookup[goog.typeOf(x__3146__auto____7149)]);
if(or__3943__auto____7150)
{return or__3943__auto____7150;
} else
{var or__3943__auto____7151 = (cljs.core._lookup["_"]);
if(or__3943__auto____7151)
{return or__3943__auto____7151;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto____7156 = coll;
if(and__3941__auto____7156)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto____7156;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__3146__auto____7157 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7158 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__3146__auto____7157)]);
if(or__3943__auto____7158)
{return or__3943__auto____7158;
} else
{var or__3943__auto____7159 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____7159)
{return or__3943__auto____7159;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto____7164 = coll;
if(and__3941__auto____7164)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto____7164;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__3146__auto____7165 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7166 = (cljs.core._assoc[goog.typeOf(x__3146__auto____7165)]);
if(or__3943__auto____7166)
{return or__3943__auto____7166;
} else
{var or__3943__auto____7167 = (cljs.core._assoc["_"]);
if(or__3943__auto____7167)
{return or__3943__auto____7167;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto____7172 = coll;
if(and__3941__auto____7172)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto____7172;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__3146__auto____7173 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7174 = (cljs.core._dissoc[goog.typeOf(x__3146__auto____7173)]);
if(or__3943__auto____7174)
{return or__3943__auto____7174;
} else
{var or__3943__auto____7175 = (cljs.core._dissoc["_"]);
if(or__3943__auto____7175)
{return or__3943__auto____7175;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto____7180 = coll;
if(and__3941__auto____7180)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto____7180;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__3146__auto____7181 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7182 = (cljs.core._key[goog.typeOf(x__3146__auto____7181)]);
if(or__3943__auto____7182)
{return or__3943__auto____7182;
} else
{var or__3943__auto____7183 = (cljs.core._key["_"]);
if(or__3943__auto____7183)
{return or__3943__auto____7183;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto____7188 = coll;
if(and__3941__auto____7188)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto____7188;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__3146__auto____7189 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7190 = (cljs.core._val[goog.typeOf(x__3146__auto____7189)]);
if(or__3943__auto____7190)
{return or__3943__auto____7190;
} else
{var or__3943__auto____7191 = (cljs.core._val["_"]);
if(or__3943__auto____7191)
{return or__3943__auto____7191;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto____7196 = coll;
if(and__3941__auto____7196)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto____7196;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__3146__auto____7197 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7198 = (cljs.core._disjoin[goog.typeOf(x__3146__auto____7197)]);
if(or__3943__auto____7198)
{return or__3943__auto____7198;
} else
{var or__3943__auto____7199 = (cljs.core._disjoin["_"]);
if(or__3943__auto____7199)
{return or__3943__auto____7199;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto____7204 = coll;
if(and__3941__auto____7204)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto____7204;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__3146__auto____7205 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7206 = (cljs.core._peek[goog.typeOf(x__3146__auto____7205)]);
if(or__3943__auto____7206)
{return or__3943__auto____7206;
} else
{var or__3943__auto____7207 = (cljs.core._peek["_"]);
if(or__3943__auto____7207)
{return or__3943__auto____7207;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto____7212 = coll;
if(and__3941__auto____7212)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto____7212;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__3146__auto____7213 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7214 = (cljs.core._pop[goog.typeOf(x__3146__auto____7213)]);
if(or__3943__auto____7214)
{return or__3943__auto____7214;
} else
{var or__3943__auto____7215 = (cljs.core._pop["_"]);
if(or__3943__auto____7215)
{return or__3943__auto____7215;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto____7220 = coll;
if(and__3941__auto____7220)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto____7220;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__3146__auto____7221 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7222 = (cljs.core._assoc_n[goog.typeOf(x__3146__auto____7221)]);
if(or__3943__auto____7222)
{return or__3943__auto____7222;
} else
{var or__3943__auto____7223 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____7223)
{return or__3943__auto____7223;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto____7228 = o;
if(and__3941__auto____7228)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto____7228;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__3146__auto____7229 = (((o == null))?null:o);
return (function (){var or__3943__auto____7230 = (cljs.core._deref[goog.typeOf(x__3146__auto____7229)]);
if(or__3943__auto____7230)
{return or__3943__auto____7230;
} else
{var or__3943__auto____7231 = (cljs.core._deref["_"]);
if(or__3943__auto____7231)
{return or__3943__auto____7231;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto____7236 = o;
if(and__3941__auto____7236)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto____7236;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__3146__auto____7237 = (((o == null))?null:o);
return (function (){var or__3943__auto____7238 = (cljs.core._deref_with_timeout[goog.typeOf(x__3146__auto____7237)]);
if(or__3943__auto____7238)
{return or__3943__auto____7238;
} else
{var or__3943__auto____7239 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____7239)
{return or__3943__auto____7239;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto____7244 = o;
if(and__3941__auto____7244)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto____7244;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__3146__auto____7245 = (((o == null))?null:o);
return (function (){var or__3943__auto____7246 = (cljs.core._meta[goog.typeOf(x__3146__auto____7245)]);
if(or__3943__auto____7246)
{return or__3943__auto____7246;
} else
{var or__3943__auto____7247 = (cljs.core._meta["_"]);
if(or__3943__auto____7247)
{return or__3943__auto____7247;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto____7252 = o;
if(and__3941__auto____7252)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto____7252;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__3146__auto____7253 = (((o == null))?null:o);
return (function (){var or__3943__auto____7254 = (cljs.core._with_meta[goog.typeOf(x__3146__auto____7253)]);
if(or__3943__auto____7254)
{return or__3943__auto____7254;
} else
{var or__3943__auto____7255 = (cljs.core._with_meta["_"]);
if(or__3943__auto____7255)
{return or__3943__auto____7255;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto____7264 = coll;
if(and__3941__auto____7264)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto____7264;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__3146__auto____7265 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7266 = (cljs.core._reduce[goog.typeOf(x__3146__auto____7265)]);
if(or__3943__auto____7266)
{return or__3943__auto____7266;
} else
{var or__3943__auto____7267 = (cljs.core._reduce["_"]);
if(or__3943__auto____7267)
{return or__3943__auto____7267;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto____7268 = coll;
if(and__3941__auto____7268)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto____7268;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__3146__auto____7269 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7270 = (cljs.core._reduce[goog.typeOf(x__3146__auto____7269)]);
if(or__3943__auto____7270)
{return or__3943__auto____7270;
} else
{var or__3943__auto____7271 = (cljs.core._reduce["_"]);
if(or__3943__auto____7271)
{return or__3943__auto____7271;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto____7276 = coll;
if(and__3941__auto____7276)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto____7276;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__3146__auto____7277 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7278 = (cljs.core._kv_reduce[goog.typeOf(x__3146__auto____7277)]);
if(or__3943__auto____7278)
{return or__3943__auto____7278;
} else
{var or__3943__auto____7279 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____7279)
{return or__3943__auto____7279;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto____7284 = o;
if(and__3941__auto____7284)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto____7284;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__3146__auto____7285 = (((o == null))?null:o);
return (function (){var or__3943__auto____7286 = (cljs.core._equiv[goog.typeOf(x__3146__auto____7285)]);
if(or__3943__auto____7286)
{return or__3943__auto____7286;
} else
{var or__3943__auto____7287 = (cljs.core._equiv["_"]);
if(or__3943__auto____7287)
{return or__3943__auto____7287;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto____7292 = o;
if(and__3941__auto____7292)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto____7292;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__3146__auto____7293 = (((o == null))?null:o);
return (function (){var or__3943__auto____7294 = (cljs.core._hash[goog.typeOf(x__3146__auto____7293)]);
if(or__3943__auto____7294)
{return or__3943__auto____7294;
} else
{var or__3943__auto____7295 = (cljs.core._hash["_"]);
if(or__3943__auto____7295)
{return or__3943__auto____7295;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto____7300 = o;
if(and__3941__auto____7300)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto____7300;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__3146__auto____7301 = (((o == null))?null:o);
return (function (){var or__3943__auto____7302 = (cljs.core._seq[goog.typeOf(x__3146__auto____7301)]);
if(or__3943__auto____7302)
{return or__3943__auto____7302;
} else
{var or__3943__auto____7303 = (cljs.core._seq["_"]);
if(or__3943__auto____7303)
{return or__3943__auto____7303;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto____7308 = coll;
if(and__3941__auto____7308)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto____7308;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__3146__auto____7309 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7310 = (cljs.core._rseq[goog.typeOf(x__3146__auto____7309)]);
if(or__3943__auto____7310)
{return or__3943__auto____7310;
} else
{var or__3943__auto____7311 = (cljs.core._rseq["_"]);
if(or__3943__auto____7311)
{return or__3943__auto____7311;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto____7316 = coll;
if(and__3941__auto____7316)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto____7316;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__3146__auto____7317 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7318 = (cljs.core._sorted_seq[goog.typeOf(x__3146__auto____7317)]);
if(or__3943__auto____7318)
{return or__3943__auto____7318;
} else
{var or__3943__auto____7319 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____7319)
{return or__3943__auto____7319;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto____7324 = coll;
if(and__3941__auto____7324)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto____7324;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__3146__auto____7325 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7326 = (cljs.core._sorted_seq_from[goog.typeOf(x__3146__auto____7325)]);
if(or__3943__auto____7326)
{return or__3943__auto____7326;
} else
{var or__3943__auto____7327 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____7327)
{return or__3943__auto____7327;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto____7332 = coll;
if(and__3941__auto____7332)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto____7332;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__3146__auto____7333 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7334 = (cljs.core._entry_key[goog.typeOf(x__3146__auto____7333)]);
if(or__3943__auto____7334)
{return or__3943__auto____7334;
} else
{var or__3943__auto____7335 = (cljs.core._entry_key["_"]);
if(or__3943__auto____7335)
{return or__3943__auto____7335;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto____7340 = coll;
if(and__3941__auto____7340)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto____7340;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__3146__auto____7341 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7342 = (cljs.core._comparator[goog.typeOf(x__3146__auto____7341)]);
if(or__3943__auto____7342)
{return or__3943__auto____7342;
} else
{var or__3943__auto____7343 = (cljs.core._comparator["_"]);
if(or__3943__auto____7343)
{return or__3943__auto____7343;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto____7348 = o;
if(and__3941__auto____7348)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto____7348;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__3146__auto____7349 = (((o == null))?null:o);
return (function (){var or__3943__auto____7350 = (cljs.core._pr_seq[goog.typeOf(x__3146__auto____7349)]);
if(or__3943__auto____7350)
{return or__3943__auto____7350;
} else
{var or__3943__auto____7351 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____7351)
{return or__3943__auto____7351;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto____7356 = d;
if(and__3941__auto____7356)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto____7356;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__3146__auto____7357 = (((d == null))?null:d);
return (function (){var or__3943__auto____7358 = (cljs.core._realized_QMARK_[goog.typeOf(x__3146__auto____7357)]);
if(or__3943__auto____7358)
{return or__3943__auto____7358;
} else
{var or__3943__auto____7359 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____7359)
{return or__3943__auto____7359;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto____7364 = this$;
if(and__3941__auto____7364)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto____7364;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__3146__auto____7365 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7366 = (cljs.core._notify_watches[goog.typeOf(x__3146__auto____7365)]);
if(or__3943__auto____7366)
{return or__3943__auto____7366;
} else
{var or__3943__auto____7367 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____7367)
{return or__3943__auto____7367;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto____7372 = this$;
if(and__3941__auto____7372)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto____7372;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__3146__auto____7373 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7374 = (cljs.core._add_watch[goog.typeOf(x__3146__auto____7373)]);
if(or__3943__auto____7374)
{return or__3943__auto____7374;
} else
{var or__3943__auto____7375 = (cljs.core._add_watch["_"]);
if(or__3943__auto____7375)
{return or__3943__auto____7375;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto____7380 = this$;
if(and__3941__auto____7380)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto____7380;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__3146__auto____7381 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____7382 = (cljs.core._remove_watch[goog.typeOf(x__3146__auto____7381)]);
if(or__3943__auto____7382)
{return or__3943__auto____7382;
} else
{var or__3943__auto____7383 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____7383)
{return or__3943__auto____7383;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto____7388 = coll;
if(and__3941__auto____7388)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto____7388;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__3146__auto____7389 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7390 = (cljs.core._as_transient[goog.typeOf(x__3146__auto____7389)]);
if(or__3943__auto____7390)
{return or__3943__auto____7390;
} else
{var or__3943__auto____7391 = (cljs.core._as_transient["_"]);
if(or__3943__auto____7391)
{return or__3943__auto____7391;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto____7396 = tcoll;
if(and__3941__auto____7396)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto____7396;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__3146__auto____7397 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7398 = (cljs.core._conj_BANG_[goog.typeOf(x__3146__auto____7397)]);
if(or__3943__auto____7398)
{return or__3943__auto____7398;
} else
{var or__3943__auto____7399 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____7399)
{return or__3943__auto____7399;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto____7404 = tcoll;
if(and__3941__auto____7404)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto____7404;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__3146__auto____7405 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7406 = (cljs.core._persistent_BANG_[goog.typeOf(x__3146__auto____7405)]);
if(or__3943__auto____7406)
{return or__3943__auto____7406;
} else
{var or__3943__auto____7407 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____7407)
{return or__3943__auto____7407;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto____7412 = tcoll;
if(and__3941__auto____7412)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto____7412;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__3146__auto____7413 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7414 = (cljs.core._assoc_BANG_[goog.typeOf(x__3146__auto____7413)]);
if(or__3943__auto____7414)
{return or__3943__auto____7414;
} else
{var or__3943__auto____7415 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____7415)
{return or__3943__auto____7415;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto____7420 = tcoll;
if(and__3941__auto____7420)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto____7420;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__3146__auto____7421 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7422 = (cljs.core._dissoc_BANG_[goog.typeOf(x__3146__auto____7421)]);
if(or__3943__auto____7422)
{return or__3943__auto____7422;
} else
{var or__3943__auto____7423 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____7423)
{return or__3943__auto____7423;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto____7428 = tcoll;
if(and__3941__auto____7428)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto____7428;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__3146__auto____7429 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7430 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__3146__auto____7429)]);
if(or__3943__auto____7430)
{return or__3943__auto____7430;
} else
{var or__3943__auto____7431 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____7431)
{return or__3943__auto____7431;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto____7436 = tcoll;
if(and__3941__auto____7436)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto____7436;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__3146__auto____7437 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7438 = (cljs.core._pop_BANG_[goog.typeOf(x__3146__auto____7437)]);
if(or__3943__auto____7438)
{return or__3943__auto____7438;
} else
{var or__3943__auto____7439 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____7439)
{return or__3943__auto____7439;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto____7444 = tcoll;
if(and__3941__auto____7444)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto____7444;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__3146__auto____7445 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____7446 = (cljs.core._disjoin_BANG_[goog.typeOf(x__3146__auto____7445)]);
if(or__3943__auto____7446)
{return or__3943__auto____7446;
} else
{var or__3943__auto____7447 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____7447)
{return or__3943__auto____7447;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto____7452 = x;
if(and__3941__auto____7452)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto____7452;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__3146__auto____7453 = (((x == null))?null:x);
return (function (){var or__3943__auto____7454 = (cljs.core._compare[goog.typeOf(x__3146__auto____7453)]);
if(or__3943__auto____7454)
{return or__3943__auto____7454;
} else
{var or__3943__auto____7455 = (cljs.core._compare["_"]);
if(or__3943__auto____7455)
{return or__3943__auto____7455;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto____7460 = coll;
if(and__3941__auto____7460)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto____7460;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__3146__auto____7461 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7462 = (cljs.core._drop_first[goog.typeOf(x__3146__auto____7461)]);
if(or__3943__auto____7462)
{return or__3943__auto____7462;
} else
{var or__3943__auto____7463 = (cljs.core._drop_first["_"]);
if(or__3943__auto____7463)
{return or__3943__auto____7463;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto____7468 = coll;
if(and__3941__auto____7468)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto____7468;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__3146__auto____7469 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7470 = (cljs.core._chunked_first[goog.typeOf(x__3146__auto____7469)]);
if(or__3943__auto____7470)
{return or__3943__auto____7470;
} else
{var or__3943__auto____7471 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____7471)
{return or__3943__auto____7471;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto____7476 = coll;
if(and__3941__auto____7476)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto____7476;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__3146__auto____7477 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7478 = (cljs.core._chunked_rest[goog.typeOf(x__3146__auto____7477)]);
if(or__3943__auto____7478)
{return or__3943__auto____7478;
} else
{var or__3943__auto____7479 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____7479)
{return or__3943__auto____7479;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto____7484 = coll;
if(and__3941__auto____7484)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto____7484;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__3146__auto____7485 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____7486 = (cljs.core._chunked_next[goog.typeOf(x__3146__auto____7485)]);
if(or__3943__auto____7486)
{return or__3943__auto____7486;
} else
{var or__3943__auto____7487 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____7487)
{return or__3943__auto____7487;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto____7489 = (x === y);
if(or__3943__auto____7489)
{return or__3943__auto____7489;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__7490__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7491 = y;
var G__7492 = cljs.core.first(more);
var G__7493 = cljs.core.next(more);
x = G__7491;
y = G__7492;
more = G__7493;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7490 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7490__delegate.call(this, x, y, more);
};
G__7490.cljs$lang$maxFixedArity = 2;
G__7490.cljs$lang$applyTo = (function (arglist__7494){
var x = cljs.core.first(arglist__7494);
var y = cljs.core.first(cljs.core.next(arglist__7494));
var more = cljs.core.rest(cljs.core.next(arglist__7494));
return G__7490__delegate(x, y, more);
});
G__7490.cljs$lang$arity$variadic = G__7490__delegate;
return G__7490;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7495 = null;
var G__7495__2 = (function (o,k){
return null;
});
var G__7495__3 = (function (o,k,not_found){
return not_found;
});
G__7495 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7495__2.call(this,o,k);
case 3:
return G__7495__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7495;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.cljs$lang$arity$variadic(cljs.core.array_seq([k,v], 0));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.cljs$lang$arity$1(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7496 = null;
var G__7496__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__7496__3 = (function (_,f,start){
return start;
});
G__7496 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7496__2.call(this,_,f);
case 3:
return G__7496__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7496;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.cljs$lang$arity$1("nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.cljs$lang$arity$0();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7497 = null;
var G__7497__2 = (function (_,n){
return null;
});
var G__7497__3 = (function (_,n,not_found){
return not_found;
});
G__7497 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7497__2.call(this,_,n);
case 3:
return G__7497__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7497;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto____7498 = cljs.core.instance_QMARK_(Date,other);
if(and__3941__auto____7498)
{return (o.toString() === other.toString());
} else
{return and__3941__auto____7498;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7511 = cljs.core._count(cicoll);
if((cnt__7511 === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7512 = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n__7513 = 1;
while(true){
if((n__7513 < cnt__7511))
{var nval__7514 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7512,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7513)) : f.call(null,val__7512,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7513)));
if(cljs.core.reduced_QMARK_(nval__7514))
{return cljs.core.deref(nval__7514);
} else
{{
var G__7523 = nval__7514;
var G__7524 = (n__7513 + 1);
val__7512 = G__7523;
n__7513 = G__7524;
continue;
}
}
} else
{return val__7512;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7515 = cljs.core._count(cicoll);
var val__7516 = val;
var n__7517 = 0;
while(true){
if((n__7517 < cnt__7515))
{var nval__7518 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7516,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7517)) : f.call(null,val__7516,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7517)));
if(cljs.core.reduced_QMARK_(nval__7518))
{return cljs.core.deref(nval__7518);
} else
{{
var G__7525 = nval__7518;
var G__7526 = (n__7517 + 1);
val__7516 = G__7525;
n__7517 = G__7526;
continue;
}
}
} else
{return val__7516;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7519 = cljs.core._count(cicoll);
var val__7520 = val;
var n__7521 = idx;
while(true){
if((n__7521 < cnt__7519))
{var nval__7522 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7520,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7521)) : f.call(null,val__7520,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7521)));
if(cljs.core.reduced_QMARK_(nval__7522))
{return cljs.core.deref(nval__7522);
} else
{{
var G__7527 = nval__7522;
var G__7528 = (n__7521 + 1);
val__7520 = G__7527;
n__7521 = G__7528;
continue;
}
}
} else
{return val__7520;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7541 = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7542 = (arr[0]);
var n__7543 = 1;
while(true){
if((n__7543 < cnt__7541))
{var nval__7544 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7542,(arr[n__7543])) : f.call(null,val__7542,(arr[n__7543])));
if(cljs.core.reduced_QMARK_(nval__7544))
{return cljs.core.deref(nval__7544);
} else
{{
var G__7553 = nval__7544;
var G__7554 = (n__7543 + 1);
val__7542 = G__7553;
n__7543 = G__7554;
continue;
}
}
} else
{return val__7542;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7545 = arr.length;
var val__7546 = val;
var n__7547 = 0;
while(true){
if((n__7547 < cnt__7545))
{var nval__7548 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7546,(arr[n__7547])) : f.call(null,val__7546,(arr[n__7547])));
if(cljs.core.reduced_QMARK_(nval__7548))
{return cljs.core.deref(nval__7548);
} else
{{
var G__7555 = nval__7548;
var G__7556 = (n__7547 + 1);
val__7546 = G__7555;
n__7547 = G__7556;
continue;
}
}
} else
{return val__7546;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7549 = arr.length;
var val__7550 = val;
var n__7551 = idx;
while(true){
if((n__7551 < cnt__7549))
{var nval__7552 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7550,(arr[n__7551])) : f.call(null,val__7550,(arr[n__7551])));
if(cljs.core.reduced_QMARK_(nval__7552))
{return cljs.core.deref(nval__7552);
} else
{{
var G__7557 = nval__7552;
var G__7558 = (n__7551 + 1);
val__7550 = G__7557;
n__7551 = G__7558;
continue;
}
}
} else
{return val__7550;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7559 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7560 = this;
if(((this__7560.i + 1) < this__7560.a.length))
{return (new cljs.core.IndexedSeq(this__7560.a,(this__7560.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7561 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7562 = this;
var c__7563 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7563 > 0))
{return (new cljs.core.RSeq(coll,(c__7563 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7564 = this;
var this__7565 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7565], 0));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7566 = this;
if(cljs.core.counted_QMARK_(this__7566.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7566.a,f,(this__7566.a[this__7566.i]),(this__7566.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__7566.a[this__7566.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7567 = this;
if(cljs.core.counted_QMARK_(this__7567.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7567.a,f,start,this__7567.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7568 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7569 = this;
return (this__7569.a.length - this__7569.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7570 = this;
return (this__7570.a[this__7570.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7571 = this;
if(((this__7571.i + 1) < this__7571.a.length))
{return (new cljs.core.IndexedSeq(this__7571.a,(this__7571.i + 1)));
} else
{return cljs.core.list.cljs$lang$arity$0();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7572 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7573 = this;
var i__7574 = (n + this__7573.i);
if((i__7574 < this__7573.a.length))
{return (this__7573.a[i__7574]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7575 = this;
var i__7576 = (n + this__7575.i);
if((i__7576 < this__7575.a.length))
{return (this__7575.a[i__7576]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7577 = null;
var G__7577__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__7577__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__7577 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7577__2.call(this,array,f);
case 3:
return G__7577__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7577;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7578 = null;
var G__7578__2 = (function (array,k){
return (array[k]);
});
var G__7578__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__7578 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7578__2.call(this,array,k);
case 3:
return G__7578__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7578;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7579 = null;
var G__7579__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7579__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7579 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7579__2.call(this,array,n);
case 3:
return G__7579__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7579;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7580 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7581 = this;
return cljs.core.cons(o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7582 = this;
var this__7583 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7583], 0));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7584 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7585 = this;
return (this__7585.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7586 = this;
return cljs.core._nth.cljs$lang$arity$2(this__7586.ci,this__7586.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7587 = this;
if((this__7587.i > 0))
{return (new cljs.core.RSeq(this__7587.ci,(this__7587.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7588 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7589 = this;
return (new cljs.core.RSeq(this__7589.ci,this__7589.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7590 = this;
return this__7590.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7594__7595 = coll;
if(G__7594__7595)
{if((function (){var or__3943__auto____7596 = (G__7594__7595.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto____7596)
{return or__3943__auto____7596;
} else
{return G__7594__7595.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7594__7595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7594__7595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7594__7595);
}
})())
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7601__7602 = coll;
if(G__7601__7602)
{if((function (){var or__3943__auto____7603 = (G__7601__7602.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____7603)
{return or__3943__auto____7603;
} else
{return G__7601__7602.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7601__7602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7601__7602);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7601__7602);
}
})())
{return cljs.core._first(coll);
} else
{var s__7604 = cljs.core.seq(coll);
if((s__7604 == null))
{return null;
} else
{return cljs.core._first(s__7604);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7609__7610 = coll;
if(G__7609__7610)
{if((function (){var or__3943__auto____7611 = (G__7609__7610.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____7611)
{return or__3943__auto____7611;
} else
{return G__7609__7610.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7609__7610.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7609__7610);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7609__7610);
}
})())
{return cljs.core._rest(coll);
} else
{var s__7612 = cljs.core.seq(coll);
if(!((s__7612 == null)))
{return cljs.core._rest(s__7612);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7616__7617 = coll;
if(G__7616__7617)
{if((function (){var or__3943__auto____7618 = (G__7616__7617.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto____7618)
{return or__3943__auto____7618;
} else
{return G__7616__7617.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7616__7617.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__7616__7617);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__7616__7617);
}
})())
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7620 = cljs.core.next(s);
if(!((sn__7620 == null)))
{{
var G__7621 = sn__7620;
s = G__7621;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__7622__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7623 = conj.cljs$lang$arity$2(coll,x);
var G__7624 = cljs.core.first(xs);
var G__7625 = cljs.core.next(xs);
coll = G__7623;
x = G__7624;
xs = G__7625;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__7622 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7622__delegate.call(this, coll, x, xs);
};
G__7622.cljs$lang$maxFixedArity = 2;
G__7622.cljs$lang$applyTo = (function (arglist__7626){
var coll = cljs.core.first(arglist__7626);
var x = cljs.core.first(cljs.core.next(arglist__7626));
var xs = cljs.core.rest(cljs.core.next(arglist__7626));
return G__7622__delegate(coll, x, xs);
});
G__7622.cljs$lang$arity$variadic = G__7622__delegate;
return G__7622;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7629 = cljs.core.seq(coll);
var acc__7630 = 0;
while(true){
if(cljs.core.counted_QMARK_(s__7629))
{return (acc__7630 + cljs.core._count(s__7629));
} else
{{
var G__7631 = cljs.core.next(s__7629);
var G__7632 = (acc__7630 + 1);
s__7629 = G__7631;
acc__7630 = G__7632;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$2(cljs.core.next(coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$3(cljs.core.next(coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7639__7640 = coll;
if(G__7639__7640)
{if((function (){var or__3943__auto____7641 = (G__7639__7640.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____7641)
{return or__3943__auto____7641;
} else
{return G__7639__7640.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7639__7640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7639__7640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7639__7640);
}
})())
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7642__7643 = coll;
if(G__7642__7643)
{if((function (){var or__3943__auto____7644 = (G__7642__7643.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____7644)
{return or__3943__auto____7644;
} else
{return G__7642__7643.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7642__7643.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7642__7643);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7642__7643);
}
})())
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__7647__delegate = function (coll,k,v,kvs){
while(true){
var ret__7646 = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7648 = ret__7646;
var G__7649 = cljs.core.first(kvs);
var G__7650 = cljs.core.second(kvs);
var G__7651 = cljs.core.nnext(kvs);
coll = G__7648;
k = G__7649;
v = G__7650;
kvs = G__7651;
continue;
}
} else
{return ret__7646;
}
break;
}
};
var G__7647 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7647__delegate.call(this, coll, k, v, kvs);
};
G__7647.cljs$lang$maxFixedArity = 3;
G__7647.cljs$lang$applyTo = (function (arglist__7652){
var coll = cljs.core.first(arglist__7652);
var k = cljs.core.first(cljs.core.next(arglist__7652));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7652)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7652)));
return G__7647__delegate(coll, k, v, kvs);
});
G__7647.cljs$lang$arity$variadic = G__7647__delegate;
return G__7647;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__7655__delegate = function (coll,k,ks){
while(true){
var ret__7654 = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7656 = ret__7654;
var G__7657 = cljs.core.first(ks);
var G__7658 = cljs.core.next(ks);
coll = G__7656;
k = G__7657;
ks = G__7658;
continue;
}
} else
{return ret__7654;
}
break;
}
};
var G__7655 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7655__delegate.call(this, coll, k, ks);
};
G__7655.cljs$lang$maxFixedArity = 2;
G__7655.cljs$lang$applyTo = (function (arglist__7659){
var coll = cljs.core.first(arglist__7659);
var k = cljs.core.first(cljs.core.next(arglist__7659));
var ks = cljs.core.rest(cljs.core.next(arglist__7659));
return G__7655__delegate(coll, k, ks);
});
G__7655.cljs$lang$arity$variadic = G__7655__delegate;
return G__7655;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7663__7664 = o;
if(G__7663__7664)
{if((function (){var or__3943__auto____7665 = (G__7663__7664.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____7665)
{return or__3943__auto____7665;
} else
{return G__7663__7664.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7663__7664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7663__7664);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7663__7664);
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__7668__delegate = function (coll,k,ks){
while(true){
var ret__7667 = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7669 = ret__7667;
var G__7670 = cljs.core.first(ks);
var G__7671 = cljs.core.next(ks);
coll = G__7669;
k = G__7670;
ks = G__7671;
continue;
}
} else
{return ret__7667;
}
break;
}
};
var G__7668 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7668__delegate.call(this, coll, k, ks);
};
G__7668.cljs$lang$maxFixedArity = 2;
G__7668.cljs$lang$applyTo = (function (arglist__7672){
var coll = cljs.core.first(arglist__7672);
var k = cljs.core.first(cljs.core.next(arglist__7672));
var ks = cljs.core.rest(cljs.core.next(arglist__7672));
return G__7668__delegate(coll, k, ks);
});
G__7668.cljs$lang$arity$variadic = G__7668__delegate;
return G__7668;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7674 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7674);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7674;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7676 = (cljs.core.string_hash_cache[k]);
if(!((h__7676 == null)))
{return h__7676;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto____7678 = goog.isString(o);
if(and__3941__auto____7678)
{return check_cache;
} else
{return and__3941__auto____7678;
}
})())
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7682__7683 = x;
if(G__7682__7683)
{if((function (){var or__3943__auto____7684 = (G__7682__7683.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto____7684)
{return or__3943__auto____7684;
} else
{return G__7682__7683.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7682__7683.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7682__7683);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7682__7683);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7688__7689 = x;
if(G__7688__7689)
{if((function (){var or__3943__auto____7690 = (G__7688__7689.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto____7690)
{return or__3943__auto____7690;
} else
{return G__7688__7689.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7688__7689.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7688__7689);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7688__7689);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7694__7695 = x;
if(G__7694__7695)
{if((function (){var or__3943__auto____7696 = (G__7694__7695.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto____7696)
{return or__3943__auto____7696;
} else
{return G__7694__7695.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7694__7695.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7694__7695);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7694__7695);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7700__7701 = x;
if(G__7700__7701)
{if((function (){var or__3943__auto____7702 = (G__7700__7701.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto____7702)
{return or__3943__auto____7702;
} else
{return G__7700__7701.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7700__7701.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7700__7701);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7700__7701);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7706__7707 = x;
if(G__7706__7707)
{if((function (){var or__3943__auto____7708 = (G__7706__7707.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto____7708)
{return or__3943__auto____7708;
} else
{return G__7706__7707.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7706__7707.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7706__7707);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7706__7707);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7712__7713 = x;
if(G__7712__7713)
{if((function (){var or__3943__auto____7714 = (G__7712__7713.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____7714)
{return or__3943__auto____7714;
} else
{return G__7712__7713.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7712__7713.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7712__7713);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7712__7713);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7718__7719 = x;
if(G__7718__7719)
{if((function (){var or__3943__auto____7720 = (G__7718__7719.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____7720)
{return or__3943__auto____7720;
} else
{return G__7718__7719.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7718__7719.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7718__7719);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7718__7719);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7724__7725 = x;
if(G__7724__7725)
{if((function (){var or__3943__auto____7726 = (G__7724__7725.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto____7726)
{return or__3943__auto____7726;
} else
{return G__7724__7725.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7724__7725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7724__7725);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7724__7725);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7730__7731 = x;
if(G__7730__7731)
{if((function (){var or__3943__auto____7732 = (G__7730__7731.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto____7732)
{return or__3943__auto____7732;
} else
{return G__7730__7731.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7730__7731.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7730__7731);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7730__7731);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7736__7737 = x;
if(G__7736__7737)
{if(cljs.core.truth_((function (){var or__3943__auto____7738 = null;
if(cljs.core.truth_(or__3943__auto____7738))
{return or__3943__auto____7738;
} else
{return G__7736__7737.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7736__7737.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7736__7737);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7736__7737);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7739__delegate = function (keyvals){
return cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals);
};
var G__7739 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7739__delegate.call(this, keyvals);
};
G__7739.cljs$lang$maxFixedArity = 0;
G__7739.cljs$lang$applyTo = (function (arglist__7740){
var keyvals = cljs.core.seq(arglist__7740);;
return G__7739__delegate(keyvals);
});
G__7739.cljs$lang$arity$variadic = G__7739__delegate;
return G__7739;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7742 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7742.push(key);
}));
return keys__7742;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7746 = i;
var j__7747 = j;
var len__7748 = len;
while(true){
if((len__7748 === 0))
{return to;
} else
{(to[j__7747] = (from[i__7746]));
{
var G__7749 = (i__7746 + 1);
var G__7750 = (j__7747 + 1);
var G__7751 = (len__7748 - 1);
i__7746 = G__7749;
j__7747 = G__7750;
len__7748 = G__7751;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7755 = (i + (len - 1));
var j__7756 = (j + (len - 1));
var len__7757 = len;
while(true){
if((len__7757 === 0))
{return to;
} else
{(to[j__7756] = (from[i__7755]));
{
var G__7758 = (i__7755 - 1);
var G__7759 = (j__7756 - 1);
var G__7760 = (len__7757 - 1);
i__7755 = G__7758;
j__7756 = G__7759;
len__7757 = G__7760;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7764__7765 = s;
if(G__7764__7765)
{if((function (){var or__3943__auto____7766 = (G__7764__7765.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____7766)
{return or__3943__auto____7766;
} else
{return G__7764__7765.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7764__7765.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7764__7765);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7764__7765);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7770__7771 = s;
if(G__7770__7771)
{if((function (){var or__3943__auto____7772 = (G__7770__7771.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____7772)
{return or__3943__auto____7772;
} else
{return G__7770__7771.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7770__7771.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7770__7771);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7770__7771);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto____7775 = goog.isString(x);
if(and__3941__auto____7775)
{return !((function (){var or__3943__auto____7776 = (x.charAt(0) === "\uFDD0");
if(or__3943__auto____7776)
{return or__3943__auto____7776;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto____7775;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto____7778 = goog.isString(x);
if(and__3941__auto____7778)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto____7778;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto____7780 = goog.isString(x);
if(and__3941__auto____7780)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto____7780;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto____7785 = cljs.core.fn_QMARK_(f);
if(or__3943__auto____7785)
{return or__3943__auto____7785;
} else
{var G__7786__7787 = f;
if(G__7786__7787)
{if((function (){var or__3943__auto____7788 = (G__7786__7787.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____7788)
{return or__3943__auto____7788;
} else
{return G__7786__7787.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7786__7787.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7786__7787);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7786__7787);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto____7790 = cljs.core.number_QMARK_(n);
if(and__3941__auto____7790)
{return (n == n.toFixed());
} else
{return and__3941__auto____7790;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto____7793 = coll;
if(cljs.core.truth_(and__3941__auto____7793))
{var and__3941__auto____7794 = cljs.core.associative_QMARK_(coll);
if(and__3941__auto____7794)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3941__auto____7794;
}
} else
{return and__3941__auto____7793;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7803__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s__7799 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7800 = more;
while(true){
var x__7801 = cljs.core.first(xs__7800);
var etc__7802 = cljs.core.next(xs__7800);
if(cljs.core.truth_(xs__7800))
{if(cljs.core.contains_QMARK_(s__7799,x__7801))
{return false;
} else
{{
var G__7804 = cljs.core.conj.cljs$lang$arity$2(s__7799,x__7801);
var G__7805 = etc__7802;
s__7799 = G__7804;
xs__7800 = G__7805;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7803 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7803__delegate.call(this, x, y, more);
};
G__7803.cljs$lang$maxFixedArity = 2;
G__7803.cljs$lang$applyTo = (function (arglist__7806){
var x = cljs.core.first(arglist__7806);
var y = cljs.core.first(cljs.core.next(arglist__7806));
var more = cljs.core.rest(cljs.core.next(arglist__7806));
return G__7803__delegate(x, y, more);
});
G__7803.cljs$lang$arity$variadic = G__7803__delegate;
return G__7803;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__7810__7811 = x;
if(G__7810__7811)
{if(cljs.core.truth_((function (){var or__3943__auto____7812 = null;
if(cljs.core.truth_(or__3943__auto____7812))
{return or__3943__auto____7812;
} else
{return G__7810__7811.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7810__7811.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7810__7811);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7810__7811);
}
})())
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7817 = cljs.core.count(xs);
var yl__7818 = cljs.core.count(ys);
if((xl__7817 < yl__7818))
{return -1;
} else
{if((xl__7817 > yl__7818))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl__7817,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7819 = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if((function (){var and__3941__auto____7820 = (d__7819 === 0);
if(and__3941__auto____7820)
{return ((n + 1) < len);
} else
{return and__3941__auto____7820;
}
})())
{{
var G__7821 = xs;
var G__7822 = ys;
var G__7823 = len;
var G__7824 = (n + 1);
xs = G__7821;
ys = G__7822;
len = G__7823;
n = G__7824;
continue;
}
} else
{return d__7819;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7826 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r__7826))
{return r__7826;
} else
{if(cljs.core.truth_(r__7826))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a__7828 = cljs.core.to_array(coll);
goog.array.stableSort(a__7828,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__7828);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto____7834 = cljs.core.seq(coll);
if(temp__4090__auto____7834)
{var s__7835 = temp__4090__auto____7834;
return cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s__7835),cljs.core.next(s__7835));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7836 = val;
var coll__7837 = cljs.core.seq(coll);
while(true){
if(coll__7837)
{var nval__7838 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7836,cljs.core.first(coll__7837)) : f.call(null,val__7836,cljs.core.first(coll__7837)));
if(cljs.core.reduced_QMARK_(nval__7838))
{return cljs.core.deref(nval__7838);
} else
{{
var G__7839 = nval__7838;
var G__7840 = cljs.core.next(coll__7837);
val__7836 = G__7839;
coll__7837 = G__7840;
continue;
}
}
} else
{return val__7836;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7842 = cljs.core.to_array(coll);
goog.array.shuffle(a__7842);
return cljs.core.vec(a__7842);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7849__7850 = coll;
if(G__7849__7850)
{if((function (){var or__3943__auto____7851 = (G__7849__7850.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____7851)
{return or__3943__auto____7851;
} else
{return G__7849__7850.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7849__7850.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7849__7850);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7849__7850);
}
})())
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7852__7853 = coll;
if(G__7852__7853)
{if((function (){var or__3943__auto____7854 = (G__7852__7853.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____7854)
{return or__3943__auto____7854;
} else
{return G__7852__7853.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7852__7853.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7852__7853);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7852__7853);
}
})())
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7855 = this;
return this__7855.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7856__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__7856 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7856__delegate.call(this, x, y, more);
};
G__7856.cljs$lang$maxFixedArity = 2;
G__7856.cljs$lang$applyTo = (function (arglist__7857){
var x = cljs.core.first(arglist__7857);
var y = cljs.core.first(cljs.core.next(arglist__7857));
var more = cljs.core.rest(cljs.core.next(arglist__7857));
return G__7856__delegate(x, y, more);
});
G__7856.cljs$lang$arity$variadic = G__7856__delegate;
return G__7856;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7858__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__7858 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7858__delegate.call(this, x, y, more);
};
G__7858.cljs$lang$maxFixedArity = 2;
G__7858.cljs$lang$applyTo = (function (arglist__7859){
var x = cljs.core.first(arglist__7859);
var y = cljs.core.first(cljs.core.next(arglist__7859));
var more = cljs.core.rest(cljs.core.next(arglist__7859));
return G__7858__delegate(x, y, more);
});
G__7858.cljs$lang$arity$variadic = G__7858__delegate;
return G__7858;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7860__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__7860 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7860__delegate.call(this, x, y, more);
};
G__7860.cljs$lang$maxFixedArity = 2;
G__7860.cljs$lang$applyTo = (function (arglist__7861){
var x = cljs.core.first(arglist__7861);
var y = cljs.core.first(cljs.core.next(arglist__7861));
var more = cljs.core.rest(cljs.core.next(arglist__7861));
return G__7860__delegate(x, y, more);
});
G__7860.cljs$lang$arity$variadic = G__7860__delegate;
return G__7860;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7862__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__7862 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7862__delegate.call(this, x, y, more);
};
G__7862.cljs$lang$maxFixedArity = 2;
G__7862.cljs$lang$applyTo = (function (arglist__7863){
var x = cljs.core.first(arglist__7863);
var y = cljs.core.first(cljs.core.next(arglist__7863));
var more = cljs.core.rest(cljs.core.next(arglist__7863));
return G__7862__delegate(x, y, more);
});
G__7862.cljs$lang$arity$variadic = G__7862__delegate;
return G__7862;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7864__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__7865 = y;
var G__7866 = cljs.core.first(more);
var G__7867 = cljs.core.next(more);
x = G__7865;
y = G__7866;
more = G__7867;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7864 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7864__delegate.call(this, x, y, more);
};
G__7864.cljs$lang$maxFixedArity = 2;
G__7864.cljs$lang$applyTo = (function (arglist__7868){
var x = cljs.core.first(arglist__7868);
var y = cljs.core.first(cljs.core.next(arglist__7868));
var more = cljs.core.rest(cljs.core.next(arglist__7868));
return G__7864__delegate(x, y, more);
});
G__7864.cljs$lang$arity$variadic = G__7864__delegate;
return G__7864;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7869__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__7870 = y;
var G__7871 = cljs.core.first(more);
var G__7872 = cljs.core.next(more);
x = G__7870;
y = G__7871;
more = G__7872;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7869 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7869__delegate.call(this, x, y, more);
};
G__7869.cljs$lang$maxFixedArity = 2;
G__7869.cljs$lang$applyTo = (function (arglist__7873){
var x = cljs.core.first(arglist__7873);
var y = cljs.core.first(cljs.core.next(arglist__7873));
var more = cljs.core.rest(cljs.core.next(arglist__7873));
return G__7869__delegate(x, y, more);
});
G__7869.cljs$lang$arity$variadic = G__7869__delegate;
return G__7869;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7874__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__7875 = y;
var G__7876 = cljs.core.first(more);
var G__7877 = cljs.core.next(more);
x = G__7875;
y = G__7876;
more = G__7877;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7874 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7874__delegate.call(this, x, y, more);
};
G__7874.cljs$lang$maxFixedArity = 2;
G__7874.cljs$lang$applyTo = (function (arglist__7878){
var x = cljs.core.first(arglist__7878);
var y = cljs.core.first(cljs.core.next(arglist__7878));
var more = cljs.core.rest(cljs.core.next(arglist__7878));
return G__7874__delegate(x, y, more);
});
G__7874.cljs$lang$arity$variadic = G__7874__delegate;
return G__7874;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7879__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__7880 = y;
var G__7881 = cljs.core.first(more);
var G__7882 = cljs.core.next(more);
x = G__7880;
y = G__7881;
more = G__7882;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7879 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7879__delegate.call(this, x, y, more);
};
G__7879.cljs$lang$maxFixedArity = 2;
G__7879.cljs$lang$applyTo = (function (arglist__7883){
var x = cljs.core.first(arglist__7883);
var y = cljs.core.first(cljs.core.next(arglist__7883));
var more = cljs.core.rest(cljs.core.next(arglist__7883));
return G__7879__delegate(x, y, more);
});
G__7879.cljs$lang$arity$variadic = G__7879__delegate;
return G__7879;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7884__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__7884 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7884__delegate.call(this, x, y, more);
};
G__7884.cljs$lang$maxFixedArity = 2;
G__7884.cljs$lang$applyTo = (function (arglist__7885){
var x = cljs.core.first(arglist__7885);
var y = cljs.core.first(cljs.core.next(arglist__7885));
var more = cljs.core.rest(cljs.core.next(arglist__7885));
return G__7884__delegate(x, y, more);
});
G__7884.cljs$lang$arity$variadic = G__7884__delegate;
return G__7884;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7886__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__7886 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7886__delegate.call(this, x, y, more);
};
G__7886.cljs$lang$maxFixedArity = 2;
G__7886.cljs$lang$applyTo = (function (arglist__7887){
var x = cljs.core.first(arglist__7887);
var y = cljs.core.first(cljs.core.next(arglist__7887));
var more = cljs.core.rest(cljs.core.next(arglist__7887));
return G__7886__delegate(x, y, more);
});
G__7886.cljs$lang$arity$variadic = G__7886__delegate;
return G__7886;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7889 = (n % d);
return cljs.core.fix(((n - rem__7889) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7891 = cljs.core.quot(n,d);
return (n - (d * q__7891));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7894 = (v - ((v >> 1) & 1431655765));
var v__7895 = ((v__7894 & 858993459) + ((v__7894 >> 2) & 858993459));
return ((((v__7895 + (v__7895 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7896__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7897 = y;
var G__7898 = cljs.core.first(more);
var G__7899 = cljs.core.next(more);
x = G__7897;
y = G__7898;
more = G__7899;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7896 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7896__delegate.call(this, x, y, more);
};
G__7896.cljs$lang$maxFixedArity = 2;
G__7896.cljs$lang$applyTo = (function (arglist__7900){
var x = cljs.core.first(arglist__7900);
var y = cljs.core.first(cljs.core.next(arglist__7900));
var more = cljs.core.rest(cljs.core.next(arglist__7900));
return G__7896__delegate(x, y, more);
});
G__7896.cljs$lang$arity$variadic = G__7896__delegate;
return G__7896;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7904 = n;
var xs__7905 = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7906 = xs__7905;
if(and__3941__auto____7906)
{return (n__7904 > 0);
} else
{return and__3941__auto____7906;
}
})()))
{{
var G__7907 = (n__7904 - 1);
var G__7908 = cljs.core.next(xs__7905);
n__7904 = G__7907;
xs__7905 = G__7908;
continue;
}
} else
{return xs__7905;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7909__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7910 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__7911 = cljs.core.next(more);
sb = G__7910;
more = G__7911;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__7909 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7909__delegate.call(this, x, ys);
};
G__7909.cljs$lang$maxFixedArity = 1;
G__7909.cljs$lang$applyTo = (function (arglist__7912){
var x = cljs.core.first(arglist__7912);
var ys = cljs.core.rest(arglist__7912);
return G__7909__delegate(x, ys);
});
G__7909.cljs$lang$arity$variadic = G__7909__delegate;
return G__7909;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7913__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7914 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__7915 = cljs.core.next(more);
sb = G__7914;
more = G__7915;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__7913 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7913__delegate.call(this, x, ys);
};
G__7913.cljs$lang$maxFixedArity = 1;
G__7913.cljs$lang$applyTo = (function (arglist__7916){
var x = cljs.core.first(arglist__7916);
var ys = cljs.core.rest(arglist__7916);
return G__7913__delegate(x, ys);
});
G__7913.cljs$lang$arity$variadic = G__7913__delegate;
return G__7913;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7917){
var fmt = cljs.core.first(arglist__7917);
var args = cljs.core.rest(arglist__7917);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{name;
} else
{if(cljs.core.keyword_QMARK_(name))
{cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{}
}
return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__7920 = cljs.core.seq(x);
var ys__7921 = cljs.core.seq(y);
while(true){
if((xs__7920 == null))
{return (ys__7921 == null);
} else
{if((ys__7921 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs__7920),cljs.core.first(ys__7921)))
{{
var G__7922 = cljs.core.next(xs__7920);
var G__7923 = cljs.core.next(ys__7921);
xs__7920 = G__7922;
ys__7921 = G__7923;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__7924_SHARP_,p2__7925_SHARP_){
return cljs.core.hash_combine(p1__7924_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__7925_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7929 = 0;
var s__7930 = cljs.core.seq(m);
while(true){
if(s__7930)
{var e__7931 = cljs.core.first(s__7930);
{
var G__7932 = ((h__7929 + (cljs.core.hash.cljs$lang$arity$1(cljs.core.key(e__7931)) ^ cljs.core.hash.cljs$lang$arity$1(cljs.core.val(e__7931)))) % 4503599627370496);
var G__7933 = cljs.core.next(s__7930);
h__7929 = G__7932;
s__7930 = G__7933;
continue;
}
} else
{return h__7929;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7937 = 0;
var s__7938 = cljs.core.seq(s);
while(true){
if(s__7938)
{var e__7939 = cljs.core.first(s__7938);
{
var G__7940 = ((h__7937 + cljs.core.hash.cljs$lang$arity$1(e__7939)) % 4503599627370496);
var G__7941 = cljs.core.next(s__7938);
h__7937 = G__7940;
s__7938 = G__7941;
continue;
}
} else
{return h__7937;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7962__7963 = cljs.core.seq(fn_map);
if(G__7962__7963)
{var G__7965__7967 = cljs.core.first(G__7962__7963);
var vec__7966__7968 = G__7965__7967;
var key_name__7969 = cljs.core.nth.cljs$lang$arity$3(vec__7966__7968,0,null);
var f__7970 = cljs.core.nth.cljs$lang$arity$3(vec__7966__7968,1,null);
var G__7962__7971 = G__7962__7963;
var G__7965__7972 = G__7965__7967;
var G__7962__7973 = G__7962__7971;
while(true){
var vec__7974__7975 = G__7965__7972;
var key_name__7976 = cljs.core.nth.cljs$lang$arity$3(vec__7974__7975,0,null);
var f__7977 = cljs.core.nth.cljs$lang$arity$3(vec__7974__7975,1,null);
var G__7962__7978 = G__7962__7973;
var str_name__7979 = cljs.core.name(key_name__7976);
(obj[str_name__7979] = f__7977);
var temp__4092__auto____7980 = cljs.core.next(G__7962__7978);
if(temp__4092__auto____7980)
{var G__7962__7981 = temp__4092__auto____7980;
{
var G__7982 = cljs.core.first(G__7962__7981);
var G__7983 = G__7962__7981;
G__7965__7972 = G__7982;
G__7962__7973 = G__7983;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7984 = this;
var h__2975__auto____7985 = this__7984.__hash;
if(!((h__2975__auto____7985 == null)))
{return h__2975__auto____7985;
} else
{var h__2975__auto____7986 = cljs.core.hash_coll(coll);
this__7984.__hash = h__2975__auto____7986;
return h__2975__auto____7986;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7987 = this;
if((this__7987.count === 1))
{return null;
} else
{return this__7987.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7988 = this;
return (new cljs.core.List(this__7988.meta,o,coll,(this__7988.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7989 = this;
var this__7990 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7990], 0));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7991 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7992 = this;
return this__7992.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7993 = this;
return this__7993.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7994 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7995 = this;
return this__7995.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7996 = this;
if((this__7996.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7996.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7997 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7998 = this;
return (new cljs.core.List(meta,this__7998.first,this__7998.rest,this__7998.count,this__7998.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7999 = this;
return this__7999.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8000 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8001 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8002 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8003 = this;
return (new cljs.core.List(this__8003.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8004 = this;
var this__8005 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8005], 0));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8006 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8007 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8008 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8009 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8010 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8011 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8012 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8013 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8014 = this;
return this__8014.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8015 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8019__8020 = coll;
if(G__8019__8020)
{if((function (){var or__3943__auto____8021 = (G__8019__8020.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto____8021)
{return or__3943__auto____8021;
} else
{return G__8019__8020.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8019__8020.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__8019__8020);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__8019__8020);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__8022__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__8022 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8022__delegate.call(this, x, y, z, items);
};
G__8022.cljs$lang$maxFixedArity = 3;
G__8022.cljs$lang$applyTo = (function (arglist__8023){
var x = cljs.core.first(arglist__8023);
var y = cljs.core.first(cljs.core.next(arglist__8023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8023)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8023)));
return G__8022__delegate(x, y, z, items);
});
G__8022.cljs$lang$arity$variadic = G__8022__delegate;
return G__8022;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8024 = this;
var h__2975__auto____8025 = this__8024.__hash;
if(!((h__2975__auto____8025 == null)))
{return h__2975__auto____8025;
} else
{var h__2975__auto____8026 = cljs.core.hash_coll(coll);
this__8024.__hash = h__2975__auto____8026;
return h__2975__auto____8026;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8027 = this;
if((this__8027.rest == null))
{return null;
} else
{return cljs.core._seq(this__8027.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8028 = this;
return (new cljs.core.Cons(null,o,coll,this__8028.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8029 = this;
var this__8030 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8030], 0));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8031 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8032 = this;
return this__8032.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8033 = this;
if((this__8033.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8033.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8034 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8035 = this;
return (new cljs.core.Cons(meta,this__8035.first,this__8035.rest,this__8035.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8036 = this;
return this__8036.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8037 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8037.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto____8042 = (coll == null);
if(or__3943__auto____8042)
{return or__3943__auto____8042;
} else
{var G__8043__8044 = coll;
if(G__8043__8044)
{if((function (){var or__3943__auto____8045 = (G__8043__8044.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8045)
{return or__3943__auto____8045;
} else
{return G__8043__8044.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8043__8044.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__8043__8044);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__8043__8044);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8049__8050 = x;
if(G__8049__8050)
{if((function (){var or__3943__auto____8051 = (G__8049__8050.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____8051)
{return or__3943__auto____8051;
} else
{return G__8049__8050.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8049__8050.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__8049__8050);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__8049__8050);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8052 = null;
var G__8052__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__8052__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__8052 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8052__2.call(this,string,f);
case 3:
return G__8052__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8052;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8053 = null;
var G__8053__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__8053__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__8053 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8053__2.call(this,string,k);
case 3:
return G__8053__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8053;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8054 = null;
var G__8054__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8054__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8054 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8054__2.call(this,string,n);
case 3:
return G__8054__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8054;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__8066 = null;
var G__8066__2 = (function (this_sym8057,coll){
var this__8059 = this;
var this_sym8057__8060 = this;
var ___8061 = this_sym8057__8060;
if((coll == null))
{return null;
} else
{var strobj__8062 = coll.strobj;
if((strobj__8062 == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__8059.k,null);
} else
{return (strobj__8062[this__8059.k]);
}
}
});
var G__8066__3 = (function (this_sym8058,coll,not_found){
var this__8059 = this;
var this_sym8058__8063 = this;
var ___8064 = this_sym8058__8063;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__8059.k,not_found);
}
});
G__8066 = function(this_sym8058,coll,not_found){
switch(arguments.length){
case 2:
return G__8066__2.call(this,this_sym8058,coll);
case 3:
return G__8066__3.call(this,this_sym8058,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8066;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym8055,args8056){
var this__8065 = this;
return this_sym8055.call.apply(this_sym8055,[this_sym8055].concat(args8056.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8075 = null;
var G__8075__2 = (function (this_sym8069,coll){
var this_sym8069__8071 = this;
var this__8072 = this_sym8069__8071;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__8072.toString(),null);
});
var G__8075__3 = (function (this_sym8070,coll,not_found){
var this_sym8070__8073 = this;
var this__8074 = this_sym8070__8073;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__8074.toString(),not_found);
});
G__8075 = function(this_sym8070,coll,not_found){
switch(arguments.length){
case 2:
return G__8075__2.call(this,this_sym8070,coll);
case 3:
return G__8075__3.call(this,this_sym8070,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8075;
})()
;
String.prototype.apply = (function (this_sym8067,args8068){
return this_sym8067.call.apply(this_sym8067,[this_sym8067].concat(args8068.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8077 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8077;
} else
{lazy_seq.x = (x__8077.cljs$lang$arity$0 ? x__8077.cljs$lang$arity$0() : x__8077.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8078 = this;
var h__2975__auto____8079 = this__8078.__hash;
if(!((h__2975__auto____8079 == null)))
{return h__2975__auto____8079;
} else
{var h__2975__auto____8080 = cljs.core.hash_coll(coll);
this__8078.__hash = h__2975__auto____8080;
return h__2975__auto____8080;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8081 = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8082 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8083 = this;
var this__8084 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8084], 0));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8085 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8086 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8087 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8088 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8089 = this;
return (new cljs.core.LazySeq(meta,this__8089.realized,this__8089.x,this__8089.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8090 = this;
return this__8090.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8091 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__8091.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8092 = this;
return this__8092.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8093 = this;
var ___8094 = this;
(this__8093.buf[this__8093.end] = o);
return this__8093.end = (this__8093.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8095 = this;
var ___8096 = this;
var ret__8097 = (new cljs.core.ArrayChunk(this__8095.buf,0,this__8095.end));
this__8095.buf = null;
return ret__8097;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8098 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__8098.arr[this__8098.off]),(this__8098.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8099 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,this__8099.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8100 = this;
if((this__8100.off === this__8100.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8100.arr,(this__8100.off + 1),this__8100.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8101 = this;
return (this__8101.arr[(this__8101.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8102 = this;
if((function (){var and__3941__auto____8103 = (i >= 0);
if(and__3941__auto____8103)
{return (i < (this__8102.end - this__8102.off));
} else
{return and__3941__auto____8103;
}
})())
{return (this__8102.arr[(this__8102.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8104 = this;
return (this__8104.end - this__8104.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8105 = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8106 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8107 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8107.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8108 = this;
if((cljs.core._count(this__8108.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(this__8108.chunk),this__8108.more,this__8108.meta));
} else
{if((this__8108.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8108.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8109 = this;
if((this__8109.more == null))
{return null;
} else
{return this__8109.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8110 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8111 = this;
return (new cljs.core.ChunkedCons(this__8111.chunk,this__8111.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8112 = this;
return this__8112.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8113 = this;
return this__8113.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8114 = this;
if((this__8114.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8114.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8118__8119 = s;
if(G__8118__8119)
{if(cljs.core.truth_((function (){var or__3943__auto____8120 = null;
if(cljs.core.truth_(or__3943__auto____8120))
{return or__3943__auto____8120;
} else
{return G__8118__8119.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8118__8119.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__8118__8119);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__8118__8119);
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8123 = [];
var s__8124 = s;
while(true){
if(cljs.core.seq(s__8124))
{ary__8123.push(cljs.core.first(s__8124));
{
var G__8125 = cljs.core.next(s__8124);
s__8124 = G__8125;
continue;
}
} else
{return ary__8123;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8129 = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i__8130 = 0;
var xs__8131 = cljs.core.seq(coll);
while(true){
if(xs__8131)
{(ret__8129[i__8130] = cljs.core.to_array(cljs.core.first(xs__8131)));
{
var G__8132 = (i__8130 + 1);
var G__8133 = cljs.core.next(xs__8131);
i__8130 = G__8132;
xs__8131 = G__8133;
continue;
}
} else
{}
break;
}
return ret__8129;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8141 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8142 = cljs.core.seq(init_val_or_seq);
var i__8143 = 0;
var s__8144 = s__8142;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8145 = s__8144;
if(and__3941__auto____8145)
{return (i__8143 < size);
} else
{return and__3941__auto____8145;
}
})()))
{(a__8141[i__8143] = cljs.core.first(s__8144));
{
var G__8148 = (i__8143 + 1);
var G__8149 = cljs.core.next(s__8144);
i__8143 = G__8148;
s__8144 = G__8149;
continue;
}
} else
{return a__8141;
}
break;
}
} else
{var n__3310__auto____8146 = size;
var i__8147 = 0;
while(true){
if((i__8147 < n__3310__auto____8146))
{(a__8141[i__8147] = init_val_or_seq);
{
var G__8150 = (i__8147 + 1);
i__8147 = G__8150;
continue;
}
} else
{}
break;
}
return a__8141;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8158 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8159 = cljs.core.seq(init_val_or_seq);
var i__8160 = 0;
var s__8161 = s__8159;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8162 = s__8161;
if(and__3941__auto____8162)
{return (i__8160 < size);
} else
{return and__3941__auto____8162;
}
})()))
{(a__8158[i__8160] = cljs.core.first(s__8161));
{
var G__8165 = (i__8160 + 1);
var G__8166 = cljs.core.next(s__8161);
i__8160 = G__8165;
s__8161 = G__8166;
continue;
}
} else
{return a__8158;
}
break;
}
} else
{var n__3310__auto____8163 = size;
var i__8164 = 0;
while(true){
if((i__8164 < n__3310__auto____8163))
{(a__8158[i__8164] = init_val_or_seq);
{
var G__8167 = (i__8164 + 1);
i__8164 = G__8167;
continue;
}
} else
{}
break;
}
return a__8158;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8175 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8176 = cljs.core.seq(init_val_or_seq);
var i__8177 = 0;
var s__8178 = s__8176;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8179 = s__8178;
if(and__3941__auto____8179)
{return (i__8177 < size);
} else
{return and__3941__auto____8179;
}
})()))
{(a__8175[i__8177] = cljs.core.first(s__8178));
{
var G__8182 = (i__8177 + 1);
var G__8183 = cljs.core.next(s__8178);
i__8177 = G__8182;
s__8178 = G__8183;
continue;
}
} else
{return a__8175;
}
break;
}
} else
{var n__3310__auto____8180 = size;
var i__8181 = 0;
while(true){
if((i__8181 < n__3310__auto____8180))
{(a__8175[i__8181] = init_val_or_seq);
{
var G__8184 = (i__8181 + 1);
i__8181 = G__8184;
continue;
}
} else
{}
break;
}
return a__8175;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__8189 = s;
var i__8190 = n;
var sum__8191 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8192 = (i__8190 > 0);
if(and__3941__auto____8192)
{return cljs.core.seq(s__8189);
} else
{return and__3941__auto____8192;
}
})()))
{{
var G__8193 = cljs.core.next(s__8189);
var G__8194 = (i__8190 - 1);
var G__8195 = (sum__8191 + 1);
s__8189 = G__8193;
i__8190 = G__8194;
sum__8191 = G__8195;
continue;
}
} else
{return sum__8191;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8200 = cljs.core.seq(x);
if(s__8200)
{if(cljs.core.chunked_seq_QMARK_(s__8200))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s__8200),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s__8200),y));
} else
{return cljs.core.cons(cljs.core.first(s__8200),concat.cljs$lang$arity$2(cljs.core.rest(s__8200),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8204__delegate = function (x,y,zs){
var cat__8203 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8202 = cljs.core.seq(xys);
if(xys__8202)
{if(cljs.core.chunked_seq_QMARK_(xys__8202))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__8202),cat(cljs.core.chunk_rest(xys__8202),zs));
} else
{return cljs.core.cons(cljs.core.first(xys__8202),cat(cljs.core.rest(xys__8202),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat(cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
}),null));
});
return (cat__8203.cljs$lang$arity$2 ? cat__8203.cljs$lang$arity$2(concat.cljs$lang$arity$2(x,y),zs) : cat__8203.call(null,concat.cljs$lang$arity$2(x,y),zs));
};
var G__8204 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8204__delegate.call(this, x, y, zs);
};
G__8204.cljs$lang$maxFixedArity = 2;
G__8204.cljs$lang$applyTo = (function (arglist__8205){
var x = cljs.core.first(arglist__8205);
var y = cljs.core.first(cljs.core.next(arglist__8205));
var zs = cljs.core.rest(cljs.core.next(arglist__8205));
return G__8204__delegate(x, y, zs);
});
G__8204.cljs$lang$arity$variadic = G__8204__delegate;
return G__8204;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__8206__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__8206 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8206__delegate.call(this, a, b, c, d, more);
};
G__8206.cljs$lang$maxFixedArity = 4;
G__8206.cljs$lang$applyTo = (function (arglist__8207){
var a = cljs.core.first(arglist__8207);
var b = cljs.core.first(cljs.core.next(arglist__8207));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8207)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8207))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8207))));
return G__8206__delegate(a, b, c, d, more);
});
G__8206.cljs$lang$arity$variadic = G__8206__delegate;
return G__8206;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8249 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a__8250 = cljs.core._first(args__8249);
var args__8251 = cljs.core._rest(args__8249);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8250);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a__8250) : f.call(null,a__8250));
}
} else
{var b__8252 = cljs.core._first(args__8251);
var args__8253 = cljs.core._rest(args__8251);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8250,b__8252);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a__8250,b__8252) : f.call(null,a__8250,b__8252));
}
} else
{var c__8254 = cljs.core._first(args__8253);
var args__8255 = cljs.core._rest(args__8253);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8250,b__8252,c__8254);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a__8250,b__8252,c__8254) : f.call(null,a__8250,b__8252,c__8254));
}
} else
{var d__8256 = cljs.core._first(args__8255);
var args__8257 = cljs.core._rest(args__8255);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8250,b__8252,c__8254,d__8256);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a__8250,b__8252,c__8254,d__8256) : f.call(null,a__8250,b__8252,c__8254,d__8256));
}
} else
{var e__8258 = cljs.core._first(args__8257);
var args__8259 = cljs.core._rest(args__8257);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8250,b__8252,c__8254,d__8256,e__8258);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a__8250,b__8252,c__8254,d__8256,e__8258) : f.call(null,a__8250,b__8252,c__8254,d__8256,e__8258));
}
} else
{var f__8260 = cljs.core._first(args__8259);
var args__8261 = cljs.core._rest(args__8259);
if((argc === 6))
{if(f__8260.cljs$lang$arity$6)
{return f__8260.cljs$lang$arity$6(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260);
} else
{return (f__8260.cljs$lang$arity$6 ? f__8260.cljs$lang$arity$6(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260));
}
} else
{var g__8262 = cljs.core._first(args__8261);
var args__8263 = cljs.core._rest(args__8261);
if((argc === 7))
{if(f__8260.cljs$lang$arity$7)
{return f__8260.cljs$lang$arity$7(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262);
} else
{return (f__8260.cljs$lang$arity$7 ? f__8260.cljs$lang$arity$7(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262));
}
} else
{var h__8264 = cljs.core._first(args__8263);
var args__8265 = cljs.core._rest(args__8263);
if((argc === 8))
{if(f__8260.cljs$lang$arity$8)
{return f__8260.cljs$lang$arity$8(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264);
} else
{return (f__8260.cljs$lang$arity$8 ? f__8260.cljs$lang$arity$8(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264));
}
} else
{var i__8266 = cljs.core._first(args__8265);
var args__8267 = cljs.core._rest(args__8265);
if((argc === 9))
{if(f__8260.cljs$lang$arity$9)
{return f__8260.cljs$lang$arity$9(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266);
} else
{return (f__8260.cljs$lang$arity$9 ? f__8260.cljs$lang$arity$9(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266));
}
} else
{var j__8268 = cljs.core._first(args__8267);
var args__8269 = cljs.core._rest(args__8267);
if((argc === 10))
{if(f__8260.cljs$lang$arity$10)
{return f__8260.cljs$lang$arity$10(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268);
} else
{return (f__8260.cljs$lang$arity$10 ? f__8260.cljs$lang$arity$10(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268));
}
} else
{var k__8270 = cljs.core._first(args__8269);
var args__8271 = cljs.core._rest(args__8269);
if((argc === 11))
{if(f__8260.cljs$lang$arity$11)
{return f__8260.cljs$lang$arity$11(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270);
} else
{return (f__8260.cljs$lang$arity$11 ? f__8260.cljs$lang$arity$11(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270));
}
} else
{var l__8272 = cljs.core._first(args__8271);
var args__8273 = cljs.core._rest(args__8271);
if((argc === 12))
{if(f__8260.cljs$lang$arity$12)
{return f__8260.cljs$lang$arity$12(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272);
} else
{return (f__8260.cljs$lang$arity$12 ? f__8260.cljs$lang$arity$12(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272));
}
} else
{var m__8274 = cljs.core._first(args__8273);
var args__8275 = cljs.core._rest(args__8273);
if((argc === 13))
{if(f__8260.cljs$lang$arity$13)
{return f__8260.cljs$lang$arity$13(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274);
} else
{return (f__8260.cljs$lang$arity$13 ? f__8260.cljs$lang$arity$13(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274));
}
} else
{var n__8276 = cljs.core._first(args__8275);
var args__8277 = cljs.core._rest(args__8275);
if((argc === 14))
{if(f__8260.cljs$lang$arity$14)
{return f__8260.cljs$lang$arity$14(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276);
} else
{return (f__8260.cljs$lang$arity$14 ? f__8260.cljs$lang$arity$14(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276));
}
} else
{var o__8278 = cljs.core._first(args__8277);
var args__8279 = cljs.core._rest(args__8277);
if((argc === 15))
{if(f__8260.cljs$lang$arity$15)
{return f__8260.cljs$lang$arity$15(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278);
} else
{return (f__8260.cljs$lang$arity$15 ? f__8260.cljs$lang$arity$15(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278));
}
} else
{var p__8280 = cljs.core._first(args__8279);
var args__8281 = cljs.core._rest(args__8279);
if((argc === 16))
{if(f__8260.cljs$lang$arity$16)
{return f__8260.cljs$lang$arity$16(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280);
} else
{return (f__8260.cljs$lang$arity$16 ? f__8260.cljs$lang$arity$16(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280));
}
} else
{var q__8282 = cljs.core._first(args__8281);
var args__8283 = cljs.core._rest(args__8281);
if((argc === 17))
{if(f__8260.cljs$lang$arity$17)
{return f__8260.cljs$lang$arity$17(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282);
} else
{return (f__8260.cljs$lang$arity$17 ? f__8260.cljs$lang$arity$17(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282));
}
} else
{var r__8284 = cljs.core._first(args__8283);
var args__8285 = cljs.core._rest(args__8283);
if((argc === 18))
{if(f__8260.cljs$lang$arity$18)
{return f__8260.cljs$lang$arity$18(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284);
} else
{return (f__8260.cljs$lang$arity$18 ? f__8260.cljs$lang$arity$18(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284));
}
} else
{var s__8286 = cljs.core._first(args__8285);
var args__8287 = cljs.core._rest(args__8285);
if((argc === 19))
{if(f__8260.cljs$lang$arity$19)
{return f__8260.cljs$lang$arity$19(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286);
} else
{return (f__8260.cljs$lang$arity$19 ? f__8260.cljs$lang$arity$19(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286));
}
} else
{var t__8288 = cljs.core._first(args__8287);
var args__8289 = cljs.core._rest(args__8287);
if((argc === 20))
{if(f__8260.cljs$lang$arity$20)
{return f__8260.cljs$lang$arity$20(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286,t__8288);
} else
{return (f__8260.cljs$lang$arity$20 ? f__8260.cljs$lang$arity$20(a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286,t__8288) : f__8260.call(null,a__8250,b__8252,c__8254,d__8256,e__8258,f__8260,g__8262,h__8264,i__8266,j__8268,k__8270,l__8272,m__8274,n__8276,o__8278,p__8280,q__8282,r__8284,s__8286,t__8288));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8304 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8305 = cljs.core.bounded_count(args,(fixed_arity__8304 + 1));
if((bc__8305 <= fixed_arity__8304))
{return cljs.core.apply_to(f,bc__8305,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8306 = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity__8307 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8308 = cljs.core.bounded_count(arglist__8306,(fixed_arity__8307 + 1));
if((bc__8308 <= fixed_arity__8307))
{return cljs.core.apply_to(f,bc__8308,arglist__8306);
} else
{return f.cljs$lang$applyTo(arglist__8306);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8306));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8309 = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity__8310 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8311 = cljs.core.bounded_count(arglist__8309,(fixed_arity__8310 + 1));
if((bc__8311 <= fixed_arity__8310))
{return cljs.core.apply_to(f,bc__8311,arglist__8309);
} else
{return f.cljs$lang$applyTo(arglist__8309);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8309));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8312 = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity__8313 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8314 = cljs.core.bounded_count(arglist__8312,(fixed_arity__8313 + 1));
if((bc__8314 <= fixed_arity__8313))
{return cljs.core.apply_to(f,bc__8314,arglist__8312);
} else
{return f.cljs$lang$applyTo(arglist__8312);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8312));
}
});
var apply__6 = (function() { 
var G__8318__delegate = function (f,a,b,c,d,args){
var arglist__8315 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__8316 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8317 = cljs.core.bounded_count(arglist__8315,(fixed_arity__8316 + 1));
if((bc__8317 <= fixed_arity__8316))
{return cljs.core.apply_to(f,bc__8317,arglist__8315);
} else
{return f.cljs$lang$applyTo(arglist__8315);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8315));
}
};
var G__8318 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8318__delegate.call(this, f, a, b, c, d, args);
};
G__8318.cljs$lang$maxFixedArity = 5;
G__8318.cljs$lang$applyTo = (function (arglist__8319){
var f = cljs.core.first(arglist__8319);
var a = cljs.core.first(cljs.core.next(arglist__8319));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8319)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8319))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8319)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8319)))));
return G__8318__delegate(f, a, b, c, d, args);
});
G__8318.cljs$lang$arity$variadic = G__8318__delegate;
return G__8318;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8320){
var obj = cljs.core.first(arglist__8320);
var f = cljs.core.first(cljs.core.next(arglist__8320));
var args = cljs.core.rest(cljs.core.next(arglist__8320));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__8321__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__8321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8321__delegate.call(this, x, y, more);
};
G__8321.cljs$lang$maxFixedArity = 2;
G__8321.cljs$lang$applyTo = (function (arglist__8322){
var x = cljs.core.first(arglist__8322);
var y = cljs.core.first(cljs.core.next(arglist__8322));
var more = cljs.core.rest(cljs.core.next(arglist__8322));
return G__8321__delegate(x, y, more);
});
G__8321.cljs$lang$arity$variadic = G__8321__delegate;
return G__8321;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__8323 = pred;
var G__8324 = cljs.core.next(coll);
pred = G__8323;
coll = G__8324;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3943__auto____8326 = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3943__auto____8326))
{return or__3943__auto____8326;
} else
{{
var G__8327 = pred;
var G__8328 = cljs.core.next(coll);
pred = G__8327;
coll = G__8328;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8329 = null;
var G__8329__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__8329__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__8329__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__8329__3 = (function() { 
var G__8330__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__8330 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8330__delegate.call(this, x, y, zs);
};
G__8330.cljs$lang$maxFixedArity = 2;
G__8330.cljs$lang$applyTo = (function (arglist__8331){
var x = cljs.core.first(arglist__8331);
var y = cljs.core.first(cljs.core.next(arglist__8331));
var zs = cljs.core.rest(cljs.core.next(arglist__8331));
return G__8330__delegate(x, y, zs);
});
G__8330.cljs$lang$arity$variadic = G__8330__delegate;
return G__8330;
})()
;
G__8329 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8329__0.call(this);
case 1:
return G__8329__1.call(this,x);
case 2:
return G__8329__2.call(this,x,y);
default:
return G__8329__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8329.cljs$lang$maxFixedArity = 2;
G__8329.cljs$lang$applyTo = G__8329__3.cljs$lang$applyTo;
return G__8329;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8332__delegate = function (args){
return x;
};
var G__8332 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8332__delegate.call(this, args);
};
G__8332.cljs$lang$maxFixedArity = 0;
G__8332.cljs$lang$applyTo = (function (arglist__8333){
var args = cljs.core.seq(arglist__8333);;
return G__8332__delegate(args);
});
G__8332.cljs$lang$arity$variadic = G__8332__delegate;
return G__8332;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8340 = null;
var G__8340__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__8340__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__8340__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__8340__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__8340__4 = (function() { 
var G__8341__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__8341 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8341__delegate.call(this, x, y, z, args);
};
G__8341.cljs$lang$maxFixedArity = 3;
G__8341.cljs$lang$applyTo = (function (arglist__8342){
var x = cljs.core.first(arglist__8342);
var y = cljs.core.first(cljs.core.next(arglist__8342));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8342)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8342)));
return G__8341__delegate(x, y, z, args);
});
G__8341.cljs$lang$arity$variadic = G__8341__delegate;
return G__8341;
})()
;
G__8340 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8340__0.call(this);
case 1:
return G__8340__1.call(this,x);
case 2:
return G__8340__2.call(this,x,y);
case 3:
return G__8340__3.call(this,x,y,z);
default:
return G__8340__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8340.cljs$lang$maxFixedArity = 3;
G__8340.cljs$lang$applyTo = G__8340__4.cljs$lang$applyTo;
return G__8340;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8343 = null;
var G__8343__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__8343__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__8343__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__8343__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__8343__4 = (function() { 
var G__8344__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__8344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8344__delegate.call(this, x, y, z, args);
};
G__8344.cljs$lang$maxFixedArity = 3;
G__8344.cljs$lang$applyTo = (function (arglist__8345){
var x = cljs.core.first(arglist__8345);
var y = cljs.core.first(cljs.core.next(arglist__8345));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8345)));
return G__8344__delegate(x, y, z, args);
});
G__8344.cljs$lang$arity$variadic = G__8344__delegate;
return G__8344;
})()
;
G__8343 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8343__0.call(this);
case 1:
return G__8343__1.call(this,x);
case 2:
return G__8343__2.call(this,x,y);
case 3:
return G__8343__3.call(this,x,y,z);
default:
return G__8343__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8343.cljs$lang$maxFixedArity = 3;
G__8343.cljs$lang$applyTo = G__8343__4.cljs$lang$applyTo;
return G__8343;
})()
});
var comp__4 = (function() { 
var G__8346__delegate = function (f1,f2,f3,fs){
var fs__8337 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__8347__delegate = function (args){
var ret__8338 = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__8337),args);
var fs__8339 = cljs.core.next(fs__8337);
while(true){
if(fs__8339)
{{
var G__8348 = cljs.core.first(fs__8339).call(null,ret__8338);
var G__8349 = cljs.core.next(fs__8339);
ret__8338 = G__8348;
fs__8339 = G__8349;
continue;
}
} else
{return ret__8338;
}
break;
}
};
var G__8347 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8347__delegate.call(this, args);
};
G__8347.cljs$lang$maxFixedArity = 0;
G__8347.cljs$lang$applyTo = (function (arglist__8350){
var args = cljs.core.seq(arglist__8350);;
return G__8347__delegate(args);
});
G__8347.cljs$lang$arity$variadic = G__8347__delegate;
return G__8347;
})()
;
};
var G__8346 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8346__delegate.call(this, f1, f2, f3, fs);
};
G__8346.cljs$lang$maxFixedArity = 3;
G__8346.cljs$lang$applyTo = (function (arglist__8351){
var f1 = cljs.core.first(arglist__8351);
var f2 = cljs.core.first(cljs.core.next(arglist__8351));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8351)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8351)));
return G__8346__delegate(f1, f2, f3, fs);
});
G__8346.cljs$lang$arity$variadic = G__8346__delegate;
return G__8346;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8352__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__8352 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8352__delegate.call(this, args);
};
G__8352.cljs$lang$maxFixedArity = 0;
G__8352.cljs$lang$applyTo = (function (arglist__8353){
var args = cljs.core.seq(arglist__8353);;
return G__8352__delegate(args);
});
G__8352.cljs$lang$arity$variadic = G__8352__delegate;
return G__8352;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8354__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__8354 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8354__delegate.call(this, args);
};
G__8354.cljs$lang$maxFixedArity = 0;
G__8354.cljs$lang$applyTo = (function (arglist__8355){
var args = cljs.core.seq(arglist__8355);;
return G__8354__delegate(args);
});
G__8354.cljs$lang$arity$variadic = G__8354__delegate;
return G__8354;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8356__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__8356 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8356__delegate.call(this, args);
};
G__8356.cljs$lang$maxFixedArity = 0;
G__8356.cljs$lang$applyTo = (function (arglist__8357){
var args = cljs.core.seq(arglist__8357);;
return G__8356__delegate(args);
});
G__8356.cljs$lang$arity$variadic = G__8356__delegate;
return G__8356;
})()
;
});
var partial__5 = (function() { 
var G__8358__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8359__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__8359 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8359__delegate.call(this, args);
};
G__8359.cljs$lang$maxFixedArity = 0;
G__8359.cljs$lang$applyTo = (function (arglist__8360){
var args = cljs.core.seq(arglist__8360);;
return G__8359__delegate(args);
});
G__8359.cljs$lang$arity$variadic = G__8359__delegate;
return G__8359;
})()
;
};
var G__8358 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8358__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8358.cljs$lang$maxFixedArity = 4;
G__8358.cljs$lang$applyTo = (function (arglist__8361){
var f = cljs.core.first(arglist__8361);
var arg1 = cljs.core.first(cljs.core.next(arglist__8361));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8361)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8361))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8361))));
return G__8358__delegate(f, arg1, arg2, arg3, more);
});
G__8358.cljs$lang$arity$variadic = G__8358__delegate;
return G__8358;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8362 = null;
var G__8362__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__8362__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__8362__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__8362__4 = (function() { 
var G__8363__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__8363 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8363__delegate.call(this, a, b, c, ds);
};
G__8363.cljs$lang$maxFixedArity = 3;
G__8363.cljs$lang$applyTo = (function (arglist__8364){
var a = cljs.core.first(arglist__8364);
var b = cljs.core.first(cljs.core.next(arglist__8364));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8364)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8364)));
return G__8363__delegate(a, b, c, ds);
});
G__8363.cljs$lang$arity$variadic = G__8363__delegate;
return G__8363;
})()
;
G__8362 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8362__1.call(this,a);
case 2:
return G__8362__2.call(this,a,b);
case 3:
return G__8362__3.call(this,a,b,c);
default:
return G__8362__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8362.cljs$lang$maxFixedArity = 3;
G__8362.cljs$lang$applyTo = G__8362__4.cljs$lang$applyTo;
return G__8362;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8365 = null;
var G__8365__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8365__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__8365__4 = (function() { 
var G__8366__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8366 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8366__delegate.call(this, a, b, c, ds);
};
G__8366.cljs$lang$maxFixedArity = 3;
G__8366.cljs$lang$applyTo = (function (arglist__8367){
var a = cljs.core.first(arglist__8367);
var b = cljs.core.first(cljs.core.next(arglist__8367));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8367)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8367)));
return G__8366__delegate(a, b, c, ds);
});
G__8366.cljs$lang$arity$variadic = G__8366__delegate;
return G__8366;
})()
;
G__8365 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8365__2.call(this,a,b);
case 3:
return G__8365__3.call(this,a,b,c);
default:
return G__8365__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8365.cljs$lang$maxFixedArity = 3;
G__8365.cljs$lang$applyTo = G__8365__4.cljs$lang$applyTo;
return G__8365;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8368 = null;
var G__8368__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8368__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__8368__4 = (function() { 
var G__8369__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8369 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8369__delegate.call(this, a, b, c, ds);
};
G__8369.cljs$lang$maxFixedArity = 3;
G__8369.cljs$lang$applyTo = (function (arglist__8370){
var a = cljs.core.first(arglist__8370);
var b = cljs.core.first(cljs.core.next(arglist__8370));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8370)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8370)));
return G__8369__delegate(a, b, c, ds);
});
G__8369.cljs$lang$arity$variadic = G__8369__delegate;
return G__8369;
})()
;
G__8368 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8368__2.call(this,a,b);
case 3:
return G__8368__3.call(this,a,b,c);
default:
return G__8368__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8368.cljs$lang$maxFixedArity = 3;
G__8368.cljs$lang$applyTo = G__8368__4.cljs$lang$applyTo;
return G__8368;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8386 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8394 = cljs.core.seq(coll);
if(temp__4092__auto____8394)
{var s__8395 = temp__4092__auto____8394;
if(cljs.core.chunked_seq_QMARK_(s__8395))
{var c__8396 = cljs.core.chunk_first(s__8395);
var size__8397 = cljs.core.count(c__8396);
var b__8398 = cljs.core.chunk_buffer(size__8397);
var n__3310__auto____8399 = size__8397;
var i__8400 = 0;
while(true){
if((i__8400 < n__3310__auto____8399))
{cljs.core.chunk_append(b__8398,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8400),cljs.core._nth.cljs$lang$arity$2(c__8396,i__8400)) : f.call(null,(idx + i__8400),cljs.core._nth.cljs$lang$arity$2(c__8396,i__8400))));
{
var G__8401 = (i__8400 + 1);
i__8400 = G__8401;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8398),mapi((idx + size__8397),cljs.core.chunk_rest(s__8395)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8395)) : f.call(null,idx,cljs.core.first(s__8395))),mapi((idx + 1),cljs.core.rest(s__8395)));
}
} else
{return null;
}
}),null));
});
return (mapi__8386.cljs$lang$arity$2 ? mapi__8386.cljs$lang$arity$2(0,coll) : mapi__8386.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8411 = cljs.core.seq(coll);
if(temp__4092__auto____8411)
{var s__8412 = temp__4092__auto____8411;
if(cljs.core.chunked_seq_QMARK_(s__8412))
{var c__8413 = cljs.core.chunk_first(s__8412);
var size__8414 = cljs.core.count(c__8413);
var b__8415 = cljs.core.chunk_buffer(size__8414);
var n__3310__auto____8416 = size__8414;
var i__8417 = 0;
while(true){
if((i__8417 < n__3310__auto____8416))
{var x__8418 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8413,i__8417)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8413,i__8417)));
if((x__8418 == null))
{} else
{cljs.core.chunk_append(b__8415,x__8418);
}
{
var G__8420 = (i__8417 + 1);
i__8417 = G__8420;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8415),keep(f,cljs.core.chunk_rest(s__8412)));
} else
{var x__8419 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8412)) : f.call(null,cljs.core.first(s__8412)));
if((x__8419 == null))
{return keep(f,cljs.core.rest(s__8412));
} else
{return cljs.core.cons(x__8419,keep(f,cljs.core.rest(s__8412)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8446 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8456 = cljs.core.seq(coll);
if(temp__4092__auto____8456)
{var s__8457 = temp__4092__auto____8456;
if(cljs.core.chunked_seq_QMARK_(s__8457))
{var c__8458 = cljs.core.chunk_first(s__8457);
var size__8459 = cljs.core.count(c__8458);
var b__8460 = cljs.core.chunk_buffer(size__8459);
var n__3310__auto____8461 = size__8459;
var i__8462 = 0;
while(true){
if((i__8462 < n__3310__auto____8461))
{var x__8463 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8462),cljs.core._nth.cljs$lang$arity$2(c__8458,i__8462)) : f.call(null,(idx + i__8462),cljs.core._nth.cljs$lang$arity$2(c__8458,i__8462)));
if((x__8463 == null))
{} else
{cljs.core.chunk_append(b__8460,x__8463);
}
{
var G__8465 = (i__8462 + 1);
i__8462 = G__8465;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8460),keepi((idx + size__8459),cljs.core.chunk_rest(s__8457)));
} else
{var x__8464 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8457)) : f.call(null,idx,cljs.core.first(s__8457)));
if((x__8464 == null))
{return keepi((idx + 1),cljs.core.rest(s__8457));
} else
{return cljs.core.cons(x__8464,keepi((idx + 1),cljs.core.rest(s__8457)));
}
}
} else
{return null;
}
}),null));
});
return (keepi__8446.cljs$lang$arity$2 ? keepi__8446.cljs$lang$arity$2(0,coll) : keepi__8446.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto____8551 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3941__auto____8551))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3941__auto____8551;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto____8552 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3941__auto____8552))
{var and__3941__auto____8553 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3941__auto____8553))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3941__auto____8553;
}
} else
{return and__3941__auto____8552;
}
})());
});
var ep1__4 = (function() { 
var G__8622__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto____8554 = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto____8554))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3941__auto____8554;
}
})());
};
var G__8622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8622__delegate.call(this, x, y, z, args);
};
G__8622.cljs$lang$maxFixedArity = 3;
G__8622.cljs$lang$applyTo = (function (arglist__8623){
var x = cljs.core.first(arglist__8623);
var y = cljs.core.first(cljs.core.next(arglist__8623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8623)));
return G__8622__delegate(x, y, z, args);
});
G__8622.cljs$lang$arity$variadic = G__8622__delegate;
return G__8622;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3941__auto____8566 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8566))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3941__auto____8566;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto____8567 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8567))
{var and__3941__auto____8568 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____8568))
{var and__3941__auto____8569 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____8569))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3941__auto____8569;
}
} else
{return and__3941__auto____8568;
}
} else
{return and__3941__auto____8567;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto____8570 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8570))
{var and__3941__auto____8571 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____8571))
{var and__3941__auto____8572 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3941__auto____8572))
{var and__3941__auto____8573 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____8573))
{var and__3941__auto____8574 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____8574))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3941__auto____8574;
}
} else
{return and__3941__auto____8573;
}
} else
{return and__3941__auto____8572;
}
} else
{return and__3941__auto____8571;
}
} else
{return and__3941__auto____8570;
}
})());
});
var ep2__4 = (function() { 
var G__8624__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto____8575 = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto____8575))
{return cljs.core.every_QMARK_((function (p1__8421_SHARP_){
var and__3941__auto____8576 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8421_SHARP_) : p1.call(null,p1__8421_SHARP_));
if(cljs.core.truth_(and__3941__auto____8576))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8421_SHARP_) : p2.call(null,p1__8421_SHARP_));
} else
{return and__3941__auto____8576;
}
}),args);
} else
{return and__3941__auto____8575;
}
})());
};
var G__8624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8624__delegate.call(this, x, y, z, args);
};
G__8624.cljs$lang$maxFixedArity = 3;
G__8624.cljs$lang$applyTo = (function (arglist__8625){
var x = cljs.core.first(arglist__8625);
var y = cljs.core.first(cljs.core.next(arglist__8625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8625)));
return G__8624__delegate(x, y, z, args);
});
G__8624.cljs$lang$arity$variadic = G__8624__delegate;
return G__8624;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3941__auto____8595 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8595))
{var and__3941__auto____8596 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____8596))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3941__auto____8596;
}
} else
{return and__3941__auto____8595;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3941__auto____8597 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8597))
{var and__3941__auto____8598 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____8598))
{var and__3941__auto____8599 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3941__auto____8599))
{var and__3941__auto____8600 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____8600))
{var and__3941__auto____8601 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____8601))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3941__auto____8601;
}
} else
{return and__3941__auto____8600;
}
} else
{return and__3941__auto____8599;
}
} else
{return and__3941__auto____8598;
}
} else
{return and__3941__auto____8597;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3941__auto____8602 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3941__auto____8602))
{var and__3941__auto____8603 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3941__auto____8603))
{var and__3941__auto____8604 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3941__auto____8604))
{var and__3941__auto____8605 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3941__auto____8605))
{var and__3941__auto____8606 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3941__auto____8606))
{var and__3941__auto____8607 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3941__auto____8607))
{var and__3941__auto____8608 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3941__auto____8608))
{var and__3941__auto____8609 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3941__auto____8609))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3941__auto____8609;
}
} else
{return and__3941__auto____8608;
}
} else
{return and__3941__auto____8607;
}
} else
{return and__3941__auto____8606;
}
} else
{return and__3941__auto____8605;
}
} else
{return and__3941__auto____8604;
}
} else
{return and__3941__auto____8603;
}
} else
{return and__3941__auto____8602;
}
})());
});
var ep3__4 = (function() { 
var G__8626__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto____8610 = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto____8610))
{return cljs.core.every_QMARK_((function (p1__8422_SHARP_){
var and__3941__auto____8611 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8422_SHARP_) : p1.call(null,p1__8422_SHARP_));
if(cljs.core.truth_(and__3941__auto____8611))
{var and__3941__auto____8612 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8422_SHARP_) : p2.call(null,p1__8422_SHARP_));
if(cljs.core.truth_(and__3941__auto____8612))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8422_SHARP_) : p3.call(null,p1__8422_SHARP_));
} else
{return and__3941__auto____8612;
}
} else
{return and__3941__auto____8611;
}
}),args);
} else
{return and__3941__auto____8610;
}
})());
};
var G__8626 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8626__delegate.call(this, x, y, z, args);
};
G__8626.cljs$lang$maxFixedArity = 3;
G__8626.cljs$lang$applyTo = (function (arglist__8627){
var x = cljs.core.first(arglist__8627);
var y = cljs.core.first(cljs.core.next(arglist__8627));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8627)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8627)));
return G__8626__delegate(x, y, z, args);
});
G__8626.cljs$lang$arity$variadic = G__8626__delegate;
return G__8626;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8628__delegate = function (p1,p2,p3,ps){
var ps__8613 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__8423_SHARP_){
return (p1__8423_SHARP_.cljs$lang$arity$1 ? p1__8423_SHARP_.cljs$lang$arity$1(x) : p1__8423_SHARP_.call(null,x));
}),ps__8613);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__8424_SHARP_){
var and__3941__auto____8618 = (p1__8424_SHARP_.cljs$lang$arity$1 ? p1__8424_SHARP_.cljs$lang$arity$1(x) : p1__8424_SHARP_.call(null,x));
if(cljs.core.truth_(and__3941__auto____8618))
{return (p1__8424_SHARP_.cljs$lang$arity$1 ? p1__8424_SHARP_.cljs$lang$arity$1(y) : p1__8424_SHARP_.call(null,y));
} else
{return and__3941__auto____8618;
}
}),ps__8613);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__8425_SHARP_){
var and__3941__auto____8619 = (p1__8425_SHARP_.cljs$lang$arity$1 ? p1__8425_SHARP_.cljs$lang$arity$1(x) : p1__8425_SHARP_.call(null,x));
if(cljs.core.truth_(and__3941__auto____8619))
{var and__3941__auto____8620 = (p1__8425_SHARP_.cljs$lang$arity$1 ? p1__8425_SHARP_.cljs$lang$arity$1(y) : p1__8425_SHARP_.call(null,y));
if(cljs.core.truth_(and__3941__auto____8620))
{return (p1__8425_SHARP_.cljs$lang$arity$1 ? p1__8425_SHARP_.cljs$lang$arity$1(z) : p1__8425_SHARP_.call(null,z));
} else
{return and__3941__auto____8620;
}
} else
{return and__3941__auto____8619;
}
}),ps__8613);
});
var epn__4 = (function() { 
var G__8629__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3941__auto____8621 = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3941__auto____8621))
{return cljs.core.every_QMARK_((function (p1__8426_SHARP_){
return cljs.core.every_QMARK_(p1__8426_SHARP_,args);
}),ps__8613);
} else
{return and__3941__auto____8621;
}
})());
};
var G__8629 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8629__delegate.call(this, x, y, z, args);
};
G__8629.cljs$lang$maxFixedArity = 3;
G__8629.cljs$lang$applyTo = (function (arglist__8630){
var x = cljs.core.first(arglist__8630);
var y = cljs.core.first(cljs.core.next(arglist__8630));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8630)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8630)));
return G__8629__delegate(x, y, z, args);
});
G__8629.cljs$lang$arity$variadic = G__8629__delegate;
return G__8629;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8628 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8628__delegate.call(this, p1, p2, p3, ps);
};
G__8628.cljs$lang$maxFixedArity = 3;
G__8628.cljs$lang$applyTo = (function (arglist__8631){
var p1 = cljs.core.first(arglist__8631);
var p2 = cljs.core.first(cljs.core.next(arglist__8631));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8631)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8631)));
return G__8628__delegate(p1, p2, p3, ps);
});
G__8628.cljs$lang$arity$variadic = G__8628__delegate;
return G__8628;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3943__auto____8712 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3943__auto____8712))
{return or__3943__auto____8712;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto____8713 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3943__auto____8713))
{return or__3943__auto____8713;
} else
{var or__3943__auto____8714 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3943__auto____8714))
{return or__3943__auto____8714;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__8783__delegate = function (x,y,z,args){
var or__3943__auto____8715 = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto____8715))
{return or__3943__auto____8715;
} else
{return cljs.core.some(p,args);
}
};
var G__8783 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8783__delegate.call(this, x, y, z, args);
};
G__8783.cljs$lang$maxFixedArity = 3;
G__8783.cljs$lang$applyTo = (function (arglist__8784){
var x = cljs.core.first(arglist__8784);
var y = cljs.core.first(cljs.core.next(arglist__8784));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8784)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8784)));
return G__8783__delegate(x, y, z, args);
});
G__8783.cljs$lang$arity$variadic = G__8783__delegate;
return G__8783;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto____8727 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8727))
{return or__3943__auto____8727;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3943__auto____8728 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8728))
{return or__3943__auto____8728;
} else
{var or__3943__auto____8729 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____8729))
{return or__3943__auto____8729;
} else
{var or__3943__auto____8730 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____8730))
{return or__3943__auto____8730;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto____8731 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8731))
{return or__3943__auto____8731;
} else
{var or__3943__auto____8732 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____8732))
{return or__3943__auto____8732;
} else
{var or__3943__auto____8733 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3943__auto____8733))
{return or__3943__auto____8733;
} else
{var or__3943__auto____8734 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____8734))
{return or__3943__auto____8734;
} else
{var or__3943__auto____8735 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____8735))
{return or__3943__auto____8735;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8785__delegate = function (x,y,z,args){
var or__3943__auto____8736 = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto____8736))
{return or__3943__auto____8736;
} else
{return cljs.core.some((function (p1__8466_SHARP_){
var or__3943__auto____8737 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8466_SHARP_) : p1.call(null,p1__8466_SHARP_));
if(cljs.core.truth_(or__3943__auto____8737))
{return or__3943__auto____8737;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8466_SHARP_) : p2.call(null,p1__8466_SHARP_));
}
}),args);
}
};
var G__8785 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8785__delegate.call(this, x, y, z, args);
};
G__8785.cljs$lang$maxFixedArity = 3;
G__8785.cljs$lang$applyTo = (function (arglist__8786){
var x = cljs.core.first(arglist__8786);
var y = cljs.core.first(cljs.core.next(arglist__8786));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8786)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8786)));
return G__8785__delegate(x, y, z, args);
});
G__8785.cljs$lang$arity$variadic = G__8785__delegate;
return G__8785;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto____8756 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8756))
{return or__3943__auto____8756;
} else
{var or__3943__auto____8757 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____8757))
{return or__3943__auto____8757;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto____8758 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8758))
{return or__3943__auto____8758;
} else
{var or__3943__auto____8759 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____8759))
{return or__3943__auto____8759;
} else
{var or__3943__auto____8760 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3943__auto____8760))
{return or__3943__auto____8760;
} else
{var or__3943__auto____8761 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____8761))
{return or__3943__auto____8761;
} else
{var or__3943__auto____8762 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____8762))
{return or__3943__auto____8762;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto____8763 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3943__auto____8763))
{return or__3943__auto____8763;
} else
{var or__3943__auto____8764 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3943__auto____8764))
{return or__3943__auto____8764;
} else
{var or__3943__auto____8765 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3943__auto____8765))
{return or__3943__auto____8765;
} else
{var or__3943__auto____8766 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3943__auto____8766))
{return or__3943__auto____8766;
} else
{var or__3943__auto____8767 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3943__auto____8767))
{return or__3943__auto____8767;
} else
{var or__3943__auto____8768 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3943__auto____8768))
{return or__3943__auto____8768;
} else
{var or__3943__auto____8769 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3943__auto____8769))
{return or__3943__auto____8769;
} else
{var or__3943__auto____8770 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3943__auto____8770))
{return or__3943__auto____8770;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8787__delegate = function (x,y,z,args){
var or__3943__auto____8771 = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto____8771))
{return or__3943__auto____8771;
} else
{return cljs.core.some((function (p1__8467_SHARP_){
var or__3943__auto____8772 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8467_SHARP_) : p1.call(null,p1__8467_SHARP_));
if(cljs.core.truth_(or__3943__auto____8772))
{return or__3943__auto____8772;
} else
{var or__3943__auto____8773 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8467_SHARP_) : p2.call(null,p1__8467_SHARP_));
if(cljs.core.truth_(or__3943__auto____8773))
{return or__3943__auto____8773;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8467_SHARP_) : p3.call(null,p1__8467_SHARP_));
}
}
}),args);
}
};
var G__8787 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8787__delegate.call(this, x, y, z, args);
};
G__8787.cljs$lang$maxFixedArity = 3;
G__8787.cljs$lang$applyTo = (function (arglist__8788){
var x = cljs.core.first(arglist__8788);
var y = cljs.core.first(cljs.core.next(arglist__8788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8788)));
return G__8787__delegate(x, y, z, args);
});
G__8787.cljs$lang$arity$variadic = G__8787__delegate;
return G__8787;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8789__delegate = function (p1,p2,p3,ps){
var ps__8774 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__8468_SHARP_){
return (p1__8468_SHARP_.cljs$lang$arity$1 ? p1__8468_SHARP_.cljs$lang$arity$1(x) : p1__8468_SHARP_.call(null,x));
}),ps__8774);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__8469_SHARP_){
var or__3943__auto____8779 = (p1__8469_SHARP_.cljs$lang$arity$1 ? p1__8469_SHARP_.cljs$lang$arity$1(x) : p1__8469_SHARP_.call(null,x));
if(cljs.core.truth_(or__3943__auto____8779))
{return or__3943__auto____8779;
} else
{return (p1__8469_SHARP_.cljs$lang$arity$1 ? p1__8469_SHARP_.cljs$lang$arity$1(y) : p1__8469_SHARP_.call(null,y));
}
}),ps__8774);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__8470_SHARP_){
var or__3943__auto____8780 = (p1__8470_SHARP_.cljs$lang$arity$1 ? p1__8470_SHARP_.cljs$lang$arity$1(x) : p1__8470_SHARP_.call(null,x));
if(cljs.core.truth_(or__3943__auto____8780))
{return or__3943__auto____8780;
} else
{var or__3943__auto____8781 = (p1__8470_SHARP_.cljs$lang$arity$1 ? p1__8470_SHARP_.cljs$lang$arity$1(y) : p1__8470_SHARP_.call(null,y));
if(cljs.core.truth_(or__3943__auto____8781))
{return or__3943__auto____8781;
} else
{return (p1__8470_SHARP_.cljs$lang$arity$1 ? p1__8470_SHARP_.cljs$lang$arity$1(z) : p1__8470_SHARP_.call(null,z));
}
}
}),ps__8774);
});
var spn__4 = (function() { 
var G__8790__delegate = function (x,y,z,args){
var or__3943__auto____8782 = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3943__auto____8782))
{return or__3943__auto____8782;
} else
{return cljs.core.some((function (p1__8471_SHARP_){
return cljs.core.some(p1__8471_SHARP_,args);
}),ps__8774);
}
};
var G__8790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8790__delegate.call(this, x, y, z, args);
};
G__8790.cljs$lang$maxFixedArity = 3;
G__8790.cljs$lang$applyTo = (function (arglist__8791){
var x = cljs.core.first(arglist__8791);
var y = cljs.core.first(cljs.core.next(arglist__8791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8791)));
return G__8790__delegate(x, y, z, args);
});
G__8790.cljs$lang$arity$variadic = G__8790__delegate;
return G__8790;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8789 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8789__delegate.call(this, p1, p2, p3, ps);
};
G__8789.cljs$lang$maxFixedArity = 3;
G__8789.cljs$lang$applyTo = (function (arglist__8792){
var p1 = cljs.core.first(arglist__8792);
var p2 = cljs.core.first(cljs.core.next(arglist__8792));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8792)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8792)));
return G__8789__delegate(p1, p2, p3, ps);
});
G__8789.cljs$lang$arity$variadic = G__8789__delegate;
return G__8789;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8811 = cljs.core.seq(coll);
if(temp__4092__auto____8811)
{var s__8812 = temp__4092__auto____8811;
if(cljs.core.chunked_seq_QMARK_(s__8812))
{var c__8813 = cljs.core.chunk_first(s__8812);
var size__8814 = cljs.core.count(c__8813);
var b__8815 = cljs.core.chunk_buffer(size__8814);
var n__3310__auto____8816 = size__8814;
var i__8817 = 0;
while(true){
if((i__8817 < n__3310__auto____8816))
{cljs.core.chunk_append(b__8815,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8813,i__8817)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8813,i__8817))));
{
var G__8829 = (i__8817 + 1);
i__8817 = G__8829;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8815),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s__8812)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8812)) : f.call(null,cljs.core.first(s__8812))),map.cljs$lang$arity$2(f,cljs.core.rest(s__8812)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8818 = cljs.core.seq(c1);
var s2__8819 = cljs.core.seq(c2);
if((function (){var and__3941__auto____8820 = s1__8818;
if(and__3941__auto____8820)
{return s2__8819;
} else
{return and__3941__auto____8820;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1__8818),cljs.core.first(s2__8819)) : f.call(null,cljs.core.first(s1__8818),cljs.core.first(s2__8819))),map.cljs$lang$arity$3(f,cljs.core.rest(s1__8818),cljs.core.rest(s2__8819)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8821 = cljs.core.seq(c1);
var s2__8822 = cljs.core.seq(c2);
var s3__8823 = cljs.core.seq(c3);
if((function (){var and__3941__auto____8824 = s1__8821;
if(and__3941__auto____8824)
{var and__3941__auto____8825 = s2__8822;
if(and__3941__auto____8825)
{return s3__8823;
} else
{return and__3941__auto____8825;
}
} else
{return and__3941__auto____8824;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1__8821),cljs.core.first(s2__8822),cljs.core.first(s3__8823)) : f.call(null,cljs.core.first(s1__8821),cljs.core.first(s2__8822),cljs.core.first(s3__8823))),map.cljs$lang$arity$4(f,cljs.core.rest(s1__8821),cljs.core.rest(s2__8822),cljs.core.rest(s3__8823)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8830__delegate = function (f,c1,c2,c3,colls){
var step__8828 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8827 = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8827))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss__8827),step(map.cljs$lang$arity$2(cljs.core.rest,ss__8827)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__8632_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__8632_SHARP_);
}),(step__8828.cljs$lang$arity$1 ? step__8828.cljs$lang$arity$1(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))) : step__8828.call(null,cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0)))));
};
var G__8830 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8830__delegate.call(this, f, c1, c2, c3, colls);
};
G__8830.cljs$lang$maxFixedArity = 4;
G__8830.cljs$lang$applyTo = (function (arglist__8831){
var f = cljs.core.first(arglist__8831);
var c1 = cljs.core.first(cljs.core.next(arglist__8831));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8831)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8831))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8831))));
return G__8830__delegate(f, c1, c2, c3, colls);
});
G__8830.cljs$lang$arity$variadic = G__8830__delegate;
return G__8830;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto____8834 = cljs.core.seq(coll);
if(temp__4092__auto____8834)
{var s__8835 = temp__4092__auto____8834;
return cljs.core.cons(cljs.core.first(s__8835),take((n - 1),cljs.core.rest(s__8835)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8841 = (function (n,coll){
while(true){
var s__8839 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3941__auto____8840 = (n > 0);
if(and__3941__auto____8840)
{return s__8839;
} else
{return and__3941__auto____8840;
}
})()))
{{
var G__8842 = (n - 1);
var G__8843 = cljs.core.rest(s__8839);
n = G__8842;
coll = G__8843;
continue;
}
} else
{return s__8839;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8841.cljs$lang$arity$2 ? step__8841.cljs$lang$arity$2(n,coll) : step__8841.call(null,n,coll));
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8846 = cljs.core.seq(coll);
var lead__8847 = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead__8847)
{{
var G__8848 = cljs.core.next(s__8846);
var G__8849 = cljs.core.next(lead__8847);
s__8846 = G__8848;
lead__8847 = G__8849;
continue;
}
} else
{return s__8846;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8855 = (function (pred,coll){
while(true){
var s__8853 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3941__auto____8854 = s__8853;
if(and__3941__auto____8854)
{return (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__8853)) : pred.call(null,cljs.core.first(s__8853)));
} else
{return and__3941__auto____8854;
}
})()))
{{
var G__8856 = pred;
var G__8857 = cljs.core.rest(s__8853);
pred = G__8856;
coll = G__8857;
continue;
}
} else
{return s__8853;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8855.cljs$lang$arity$2 ? step__8855.cljs$lang$arity$2(pred,coll) : step__8855.call(null,pred,coll));
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8860 = cljs.core.seq(coll);
if(temp__4092__auto____8860)
{var s__8861 = temp__4092__auto____8860;
return cljs.core.concat.cljs$lang$arity$2(s__8861,cycle(s__8861));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8866 = cljs.core.seq(c1);
var s2__8867 = cljs.core.seq(c2);
if((function (){var and__3941__auto____8868 = s1__8866;
if(and__3941__auto____8868)
{return s2__8867;
} else
{return and__3941__auto____8868;
}
})())
{return cljs.core.cons(cljs.core.first(s1__8866),cljs.core.cons(cljs.core.first(s2__8867),interleave.cljs$lang$arity$2(cljs.core.rest(s1__8866),cljs.core.rest(s2__8867))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8870__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8869 = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8869))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss__8869),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss__8869)));
} else
{return null;
}
}),null));
};
var G__8870 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8870__delegate.call(this, c1, c2, colls);
};
G__8870.cljs$lang$maxFixedArity = 2;
G__8870.cljs$lang$applyTo = (function (arglist__8871){
var c1 = cljs.core.first(arglist__8871);
var c2 = cljs.core.first(cljs.core.next(arglist__8871));
var colls = cljs.core.rest(cljs.core.next(arglist__8871));
return G__8870__delegate(c1, c2, colls);
});
G__8870.cljs$lang$arity$variadic = G__8870__delegate;
return G__8870;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8881 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____8879 = cljs.core.seq(coll);
if(temp__4090__auto____8879)
{var coll__8880 = temp__4090__auto____8879;
return cljs.core.cons(cljs.core.first(coll__8880),cat(cljs.core.rest(coll__8880),colls));
} else
{if(cljs.core.seq(colls))
{return cat(cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
}),null));
});
return (cat__8881.cljs$lang$arity$2 ? cat__8881.cljs$lang$arity$2(null,colls) : cat__8881.call(null,null,colls));
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__8882__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__8882 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8882__delegate.call(this, f, coll, colls);
};
G__8882.cljs$lang$maxFixedArity = 2;
G__8882.cljs$lang$applyTo = (function (arglist__8883){
var f = cljs.core.first(arglist__8883);
var coll = cljs.core.first(cljs.core.next(arglist__8883));
var colls = cljs.core.rest(cljs.core.next(arglist__8883));
return G__8882__delegate(f, coll, colls);
});
G__8882.cljs$lang$arity$variadic = G__8882__delegate;
return G__8882;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8893 = cljs.core.seq(coll);
if(temp__4092__auto____8893)
{var s__8894 = temp__4092__auto____8893;
if(cljs.core.chunked_seq_QMARK_(s__8894))
{var c__8895 = cljs.core.chunk_first(s__8894);
var size__8896 = cljs.core.count(c__8895);
var b__8897 = cljs.core.chunk_buffer(size__8896);
var n__3310__auto____8898 = size__8896;
var i__8899 = 0;
while(true){
if((i__8899 < n__3310__auto____8898))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8895,i__8899)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c__8895,i__8899)))))
{cljs.core.chunk_append(b__8897,cljs.core._nth.cljs$lang$arity$2(c__8895,i__8899));
} else
{}
{
var G__8902 = (i__8899 + 1);
i__8899 = G__8902;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8897),filter(pred,cljs.core.chunk_rest(s__8894)));
} else
{var f__8900 = cljs.core.first(s__8894);
var r__8901 = cljs.core.rest(s__8894);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f__8900) : pred.call(null,f__8900))))
{return cljs.core.cons(f__8900,filter(pred,r__8901));
} else
{return filter(pred,r__8901);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8905 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return (walk__8905.cljs$lang$arity$1 ? walk__8905.cljs$lang$arity$1(root) : walk__8905.call(null,root));
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__8903_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__8903_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8909__8910 = to;
if(G__8909__8910)
{if((function (){var or__3943__auto____8911 = (G__8909__8910.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3943__auto____8911)
{return or__3943__auto____8911;
} else
{return G__8909__8910.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8909__8910.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8909__8910);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8909__8910);
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8912__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__8912 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8912__delegate.call(this, f, c1, c2, c3, colls);
};
G__8912.cljs$lang$maxFixedArity = 4;
G__8912.cljs$lang$applyTo = (function (arglist__8913){
var f = cljs.core.first(arglist__8913);
var c1 = cljs.core.first(cljs.core.next(arglist__8913));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8913)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8913))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8913))));
return G__8912__delegate(f, c1, c2, c3, colls);
});
G__8912.cljs$lang$arity$variadic = G__8912__delegate;
return G__8912;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8920 = cljs.core.seq(coll);
if(temp__4092__auto____8920)
{var s__8921 = temp__4092__auto____8920;
var p__8922 = cljs.core.take(n,s__8921);
if((n === cljs.core.count(p__8922)))
{return cljs.core.cons(p__8922,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__8921)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8923 = cljs.core.seq(coll);
if(temp__4092__auto____8923)
{var s__8924 = temp__4092__auto____8923;
var p__8925 = cljs.core.take(n,s__8924);
if((n === cljs.core.count(p__8925)))
{return cljs.core.cons(p__8925,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s__8924)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p__8925,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8930 = cljs.core.lookup_sentinel;
var m__8931 = m;
var ks__8932 = cljs.core.seq(ks);
while(true){
if(ks__8932)
{var m__8933 = cljs.core._lookup.cljs$lang$arity$3(m__8931,cljs.core.first(ks__8932),sentinel__8930);
if((sentinel__8930 === m__8933))
{return not_found;
} else
{{
var G__8934 = sentinel__8930;
var G__8935 = m__8933;
var G__8936 = cljs.core.next(ks__8932);
sentinel__8930 = G__8934;
m__8931 = G__8935;
ks__8932 = G__8936;
continue;
}
}
} else
{return m__8931;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8937,v){
var vec__8942__8943 = p__8937;
var k__8944 = cljs.core.nth.cljs$lang$arity$3(vec__8942__8943,0,null);
var ks__8945 = cljs.core.nthnext(vec__8942__8943,1);
if(cljs.core.truth_(ks__8945))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8944,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k__8944,null),ks__8945,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8944,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8946,f,args){
var vec__8951__8952 = p__8946;
var k__8953 = cljs.core.nth.cljs$lang$arity$3(vec__8951__8952,0,null);
var ks__8954 = cljs.core.nthnext(vec__8951__8952,1);
if(cljs.core.truth_(ks__8954))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8953,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k__8953,null),ks__8954,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8953,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k__8953,null),args));
}
};
var update_in = function (m,p__8946,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8946, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8955){
var m = cljs.core.first(arglist__8955);
var p__8946 = cljs.core.first(cljs.core.next(arglist__8955));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8955)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8955)));
return update_in__delegate(m, p__8946, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8958 = this;
var h__2975__auto____8959 = this__8958.__hash;
if(!((h__2975__auto____8959 == null)))
{return h__2975__auto____8959;
} else
{var h__2975__auto____8960 = cljs.core.hash_coll(coll);
this__8958.__hash = h__2975__auto____8960;
return h__2975__auto____8960;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8961 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8962 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8963 = this;
var new_array__8964 = this__8963.array.slice();
(new_array__8964[k] = v);
return (new cljs.core.Vector(this__8963.meta,new_array__8964,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8995 = null;
var G__8995__2 = (function (this_sym8965,k){
var this__8967 = this;
var this_sym8965__8968 = this;
var coll__8969 = this_sym8965__8968;
return coll__8969.cljs$core$ILookup$_lookup$arity$2(coll__8969,k);
});
var G__8995__3 = (function (this_sym8966,k,not_found){
var this__8967 = this;
var this_sym8966__8970 = this;
var coll__8971 = this_sym8966__8970;
return coll__8971.cljs$core$ILookup$_lookup$arity$3(coll__8971,k,not_found);
});
G__8995 = function(this_sym8966,k,not_found){
switch(arguments.length){
case 2:
return G__8995__2.call(this,this_sym8966,k);
case 3:
return G__8995__3.call(this,this_sym8966,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8995;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8956,args8957){
var this__8972 = this;
return this_sym8956.call.apply(this_sym8956,[this_sym8956].concat(args8957.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8973 = this;
var new_array__8974 = this__8973.array.slice();
new_array__8974.push(o);
return (new cljs.core.Vector(this__8973.meta,new_array__8974,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8975 = this;
var this__8976 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8976], 0));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8977 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(this__8977.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8978 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(this__8978.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8979 = this;
if((this__8979.array.length > 0))
{var vector_seq__8980 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8979.array.length))
{return cljs.core.cons((this__8979.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return (vector_seq__8980.cljs$lang$arity$1 ? vector_seq__8980.cljs$lang$arity$1(0) : vector_seq__8980.call(null,0));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8981 = this;
return this__8981.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8982 = this;
var count__8983 = this__8982.array.length;
if((count__8983 > 0))
{return (this__8982.array[(count__8983 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8984 = this;
if((this__8984.array.length > 0))
{var new_array__8985 = this__8984.array.slice();
new_array__8985.pop();
return (new cljs.core.Vector(this__8984.meta,new_array__8985,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8986 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8987 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8988 = this;
return (new cljs.core.Vector(meta,this__8988.array,this__8988.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8989 = this;
return this__8989.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8990 = this;
if((function (){var and__3941__auto____8991 = (0 <= n);
if(and__3941__auto____8991)
{return (n < this__8990.array.length);
} else
{return and__3941__auto____8991;
}
})())
{return (this__8990.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8992 = this;
if((function (){var and__3941__auto____8993 = (0 <= n);
if(and__3941__auto____8993)
{return (n < this__8992.array.length);
} else
{return and__3941__auto____8993;
}
})())
{return (this__8992.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8994 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__8994.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__3093__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8997 = pv.cnt;
if((cnt__8997 < 32))
{return 0;
} else
{return (((cnt__8997 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9003 = level;
var ret__9004 = node;
while(true){
if((ll__9003 === 0))
{return ret__9004;
} else
{var embed__9005 = ret__9004;
var r__9006 = cljs.core.pv_fresh_node(edit);
var ___9007 = cljs.core.pv_aset(r__9006,0,embed__9005);
{
var G__9008 = (ll__9003 - 5);
var G__9009 = r__9006;
ll__9003 = G__9008;
ret__9004 = G__9009;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9015 = cljs.core.pv_clone_node(parent);
var subidx__9016 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret__9015,subidx__9016,tailnode);
return ret__9015;
} else
{var child__9017 = cljs.core.pv_aget(parent,subidx__9016);
if(!((child__9017 == null)))
{var node_to_insert__9018 = push_tail(pv,(level - 5),child__9017,tailnode);
cljs.core.pv_aset(ret__9015,subidx__9016,node_to_insert__9018);
return ret__9015;
} else
{var node_to_insert__9019 = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret__9015,subidx__9016,node_to_insert__9019);
return ret__9015;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto____9023 = (0 <= i);
if(and__3941__auto____9023)
{return (i < pv.cnt);
} else
{return and__3941__auto____9023;
}
})())
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node__9024 = pv.root;
var level__9025 = pv.shift;
while(true){
if((level__9025 > 0))
{{
var G__9026 = cljs.core.pv_aget(node__9024,((i >>> level__9025) & 31));
var G__9027 = (level__9025 - 5);
node__9024 = G__9026;
level__9025 = G__9027;
continue;
}
} else
{return node__9024.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9030 = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret__9030,(i & 31),val);
return ret__9030;
} else
{var subidx__9031 = ((i >>> level) & 31);
cljs.core.pv_aset(ret__9030,subidx__9031,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx__9031),i,val));
return ret__9030;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9037 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9038 = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx__9037));
if((function (){var and__3941__auto____9039 = (new_child__9038 == null);
if(and__3941__auto____9039)
{return (subidx__9037 === 0);
} else
{return and__3941__auto____9039;
}
})())
{return null;
} else
{var ret__9040 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__9040,subidx__9037,new_child__9038);
return ret__9040;
}
} else
{if((subidx__9037 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9041 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__9041,subidx__9037,null);
return ret__9041;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9044 = this;
return (new cljs.core.TransientVector(this__9044.cnt,this__9044.shift,cljs.core.tv_editable_root(this__9044.root),cljs.core.tv_editable_tail(this__9044.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9045 = this;
var h__2975__auto____9046 = this__9045.__hash;
if(!((h__2975__auto____9046 == null)))
{return h__2975__auto____9046;
} else
{var h__2975__auto____9047 = cljs.core.hash_coll(coll);
this__9045.__hash = h__2975__auto____9047;
return h__2975__auto____9047;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9048 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9049 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9050 = this;
if((function (){var and__3941__auto____9051 = (0 <= k);
if(and__3941__auto____9051)
{return (k < this__9050.cnt);
} else
{return and__3941__auto____9051;
}
})())
{if((cljs.core.tail_off(coll) <= k))
{var new_tail__9052 = this__9050.tail.slice();
(new_tail__9052[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9050.meta,this__9050.cnt,this__9050.shift,this__9050.root,new_tail__9052,null));
} else
{return (new cljs.core.PersistentVector(this__9050.meta,this__9050.cnt,this__9050.shift,cljs.core.do_assoc(coll,this__9050.shift,this__9050.root,k,v),this__9050.tail,null));
}
} else
{if((k === this__9050.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9050.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9100 = null;
var G__9100__2 = (function (this_sym9053,k){
var this__9055 = this;
var this_sym9053__9056 = this;
var coll__9057 = this_sym9053__9056;
return coll__9057.cljs$core$ILookup$_lookup$arity$2(coll__9057,k);
});
var G__9100__3 = (function (this_sym9054,k,not_found){
var this__9055 = this;
var this_sym9054__9058 = this;
var coll__9059 = this_sym9054__9058;
return coll__9059.cljs$core$ILookup$_lookup$arity$3(coll__9059,k,not_found);
});
G__9100 = function(this_sym9054,k,not_found){
switch(arguments.length){
case 2:
return G__9100__2.call(this,this_sym9054,k);
case 3:
return G__9100__3.call(this,this_sym9054,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9100;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9042,args9043){
var this__9060 = this;
return this_sym9042.call.apply(this_sym9042,[this_sym9042].concat(args9043.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9061 = this;
var step_init__9062 = [0,init];
var i__9063 = 0;
while(true){
if((i__9063 < this__9061.cnt))
{var arr__9064 = cljs.core.array_for(v,i__9063);
var len__9065 = arr__9064.length;
var init__9069 = (function (){var j__9066 = 0;
var init__9067 = (step_init__9062[1]);
while(true){
if((j__9066 < len__9065))
{var init__9068 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9067,(j__9066 + i__9063),(arr__9064[j__9066])) : f.call(null,init__9067,(j__9066 + i__9063),(arr__9064[j__9066])));
if(cljs.core.reduced_QMARK_(init__9068))
{return init__9068;
} else
{{
var G__9101 = (j__9066 + 1);
var G__9102 = init__9068;
j__9066 = G__9101;
init__9067 = G__9102;
continue;
}
}
} else
{(step_init__9062[0] = len__9065);
(step_init__9062[1] = init__9067);
return init__9067;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__9069))
{return cljs.core.deref(init__9069);
} else
{{
var G__9103 = (i__9063 + (step_init__9062[0]));
i__9063 = G__9103;
continue;
}
}
} else
{return (step_init__9062[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9070 = this;
if(((this__9070.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail__9071 = this__9070.tail.slice();
new_tail__9071.push(o);
return (new cljs.core.PersistentVector(this__9070.meta,(this__9070.cnt + 1),this__9070.shift,this__9070.root,new_tail__9071,null));
} else
{var root_overflow_QMARK___9072 = ((this__9070.cnt >>> 5) > (1 << this__9070.shift));
var new_shift__9073 = ((root_overflow_QMARK___9072)?(this__9070.shift + 5):this__9070.shift);
var new_root__9075 = ((root_overflow_QMARK___9072)?(function (){var n_r__9074 = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r__9074,0,this__9070.root);
cljs.core.pv_aset(n_r__9074,1,cljs.core.new_path(null,this__9070.shift,(new cljs.core.VectorNode(null,this__9070.tail))));
return n_r__9074;
})():cljs.core.push_tail(coll,this__9070.shift,this__9070.root,(new cljs.core.VectorNode(null,this__9070.tail))));
return (new cljs.core.PersistentVector(this__9070.meta,(this__9070.cnt + 1),new_shift__9073,new_root__9075,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9076 = this;
if((this__9076.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9076.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9077 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9078 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9079 = this;
var this__9080 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9080], 0));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9081 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9082 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9083 = this;
if((this__9083.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9084 = this;
return this__9084.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9085 = this;
if((this__9085.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9085.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9086 = this;
if((this__9086.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9086.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__9086.meta);
} else
{if((1 < (this__9086.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(this__9086.meta,(this__9086.cnt - 1),this__9086.shift,this__9086.root,this__9086.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9087 = cljs.core.array_for(coll,(this__9086.cnt - 2));
var nr__9088 = cljs.core.pop_tail(coll,this__9086.shift,this__9086.root);
var new_root__9089 = (((nr__9088 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9088);
var cnt_1__9090 = (this__9086.cnt - 1);
if((function (){var and__3941__auto____9091 = (5 < this__9086.shift);
if(and__3941__auto____9091)
{return (cljs.core.pv_aget(new_root__9089,1) == null);
} else
{return and__3941__auto____9091;
}
})())
{return (new cljs.core.PersistentVector(this__9086.meta,cnt_1__9090,(this__9086.shift - 5),cljs.core.pv_aget(new_root__9089,0),new_tail__9087,null));
} else
{return (new cljs.core.PersistentVector(this__9086.meta,cnt_1__9090,this__9086.shift,new_root__9089,new_tail__9087,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9092 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9093 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9094 = this;
return (new cljs.core.PersistentVector(meta,this__9094.cnt,this__9094.shift,this__9094.root,this__9094.tail,this__9094.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9095 = this;
return this__9095.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9096 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9097 = this;
if((function (){var and__3941__auto____9098 = (0 <= n);
if(and__3941__auto____9098)
{return (n < this__9097.cnt);
} else
{return and__3941__auto____9098;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9099 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__9099.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9104 = xs.length;
var xs__9105 = (((no_clone === true))?xs:xs.slice());
if((l__9104 < 32))
{return (new cljs.core.PersistentVector(null,l__9104,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9105,null));
} else
{var node__9106 = xs__9105.slice(0,32);
var v__9107 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9106,null));
var i__9108 = 32;
var out__9109 = cljs.core._as_transient(v__9107);
while(true){
if((i__9108 < l__9104))
{{
var G__9110 = (i__9108 + 1);
var G__9111 = cljs.core.conj_BANG_(out__9109,(xs__9105[i__9108]));
i__9108 = G__9110;
out__9109 = G__9111;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9109);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9112){
var args = cljs.core.seq(arglist__9112);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9113 = this;
if(((this__9113.off + 1) < this__9113.node.length))
{var s__9114 = cljs.core.chunked_seq.cljs$lang$arity$4(this__9113.vec,this__9113.node,this__9113.i,(this__9113.off + 1));
if((s__9114 == null))
{return null;
} else
{return s__9114;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9115 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9116 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9117 = this;
return (this__9117.node[this__9117.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9118 = this;
if(((this__9118.off + 1) < this__9118.node.length))
{var s__9119 = cljs.core.chunked_seq.cljs$lang$arity$4(this__9118.vec,this__9118.node,this__9118.i,(this__9118.off + 1));
if((s__9119 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9119;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9120 = this;
var l__9121 = this__9120.node.length;
var s__9122 = ((((this__9120.i + l__9121) < cljs.core._count(this__9120.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__9120.vec,(this__9120.i + l__9121),0):null);
if((s__9122 == null))
{return null;
} else
{return s__9122;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9123 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9124 = this;
return cljs.core.chunked_seq.cljs$lang$arity$5(this__9124.vec,this__9124.node,this__9124.i,this__9124.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9125 = this;
return this__9125.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9126 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__9126.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9127 = this;
return cljs.core.array_chunk.cljs$lang$arity$2(this__9127.node,this__9127.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9128 = this;
var l__9129 = this__9128.node.length;
var s__9130 = ((((this__9128.i + l__9129) < cljs.core._count(this__9128.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__9128.vec,(this__9128.i + l__9129),0):null);
if((s__9130 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9130;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9133 = this;
var h__2975__auto____9134 = this__9133.__hash;
if(!((h__2975__auto____9134 == null)))
{return h__2975__auto____9134;
} else
{var h__2975__auto____9135 = cljs.core.hash_coll(coll);
this__9133.__hash = h__2975__auto____9135;
return h__2975__auto____9135;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9136 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9137 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9138 = this;
var v_pos__9139 = (this__9138.start + key);
return (new cljs.core.Subvec(this__9138.meta,cljs.core._assoc(this__9138.v,v_pos__9139,val),this__9138.start,((this__9138.end > (v_pos__9139 + 1)) ? this__9138.end : (v_pos__9139 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9165 = null;
var G__9165__2 = (function (this_sym9140,k){
var this__9142 = this;
var this_sym9140__9143 = this;
var coll__9144 = this_sym9140__9143;
return coll__9144.cljs$core$ILookup$_lookup$arity$2(coll__9144,k);
});
var G__9165__3 = (function (this_sym9141,k,not_found){
var this__9142 = this;
var this_sym9141__9145 = this;
var coll__9146 = this_sym9141__9145;
return coll__9146.cljs$core$ILookup$_lookup$arity$3(coll__9146,k,not_found);
});
G__9165 = function(this_sym9141,k,not_found){
switch(arguments.length){
case 2:
return G__9165__2.call(this,this_sym9141,k);
case 3:
return G__9165__3.call(this,this_sym9141,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9165;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9131,args9132){
var this__9147 = this;
return this_sym9131.call.apply(this_sym9131,[this_sym9131].concat(args9132.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9148 = this;
return (new cljs.core.Subvec(this__9148.meta,cljs.core._assoc_n(this__9148.v,this__9148.end,o),this__9148.start,(this__9148.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9149 = this;
var this__9150 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9150], 0));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9151 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9152 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9153 = this;
var subvec_seq__9154 = (function subvec_seq(i){
if((i === this__9153.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(this__9153.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return (subvec_seq__9154.cljs$lang$arity$1 ? subvec_seq__9154.cljs$lang$arity$1(this__9153.start) : subvec_seq__9154.call(null,this__9153.start));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9155 = this;
return (this__9155.end - this__9155.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9156 = this;
return cljs.core._nth.cljs$lang$arity$2(this__9156.v,(this__9156.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9157 = this;
if((this__9157.start === this__9157.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9157.meta,this__9157.v,this__9157.start,(this__9157.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9158 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9159 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9160 = this;
return (new cljs.core.Subvec(meta,this__9160.v,this__9160.start,this__9160.end,this__9160.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9161 = this;
return this__9161.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9162 = this;
return cljs.core._nth.cljs$lang$arity$2(this__9162.v,(this__9162.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9163 = this;
return cljs.core._nth.cljs$lang$arity$3(this__9163.v,(this__9163.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9164 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__9164.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9167 = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret__9167,0,tl.length);
return ret__9167;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9171 = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx__9172 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret__9171,subidx__9172,(((level === 5))?tail_node:(function (){var child__9173 = cljs.core.pv_aget(ret__9171,subidx__9172);
if(!((child__9173 == null)))
{return tv_push_tail(tv,(level - 5),child__9173,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9171;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9178 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx__9179 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9180 = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__9178,subidx__9179));
if((function (){var and__3941__auto____9181 = (new_child__9180 == null);
if(and__3941__auto____9181)
{return (subidx__9179 === 0);
} else
{return and__3941__auto____9181;
}
})())
{return null;
} else
{cljs.core.pv_aset(node__9178,subidx__9179,new_child__9180);
return node__9178;
}
} else
{if((subidx__9179 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset(node__9178,subidx__9179,null);
return node__9178;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto____9186 = (0 <= i);
if(and__3941__auto____9186)
{return (i < tv.cnt);
} else
{return and__3941__auto____9186;
}
})())
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root__9187 = tv.root;
var node__9188 = root__9187;
var level__9189 = tv.shift;
while(true){
if((level__9189 > 0))
{{
var G__9190 = cljs.core.tv_ensure_editable(root__9187.edit,cljs.core.pv_aget(node__9188,((i >>> level__9189) & 31)));
var G__9191 = (level__9189 - 5);
node__9188 = G__9190;
level__9189 = G__9191;
continue;
}
} else
{return node__9188.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9231 = null;
var G__9231__2 = (function (this_sym9194,k){
var this__9196 = this;
var this_sym9194__9197 = this;
var coll__9198 = this_sym9194__9197;
return coll__9198.cljs$core$ILookup$_lookup$arity$2(coll__9198,k);
});
var G__9231__3 = (function (this_sym9195,k,not_found){
var this__9196 = this;
var this_sym9195__9199 = this;
var coll__9200 = this_sym9195__9199;
return coll__9200.cljs$core$ILookup$_lookup$arity$3(coll__9200,k,not_found);
});
G__9231 = function(this_sym9195,k,not_found){
switch(arguments.length){
case 2:
return G__9231__2.call(this,this_sym9195,k);
case 3:
return G__9231__3.call(this,this_sym9195,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9231;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9192,args9193){
var this__9201 = this;
return this_sym9192.call.apply(this_sym9192,[this_sym9192].concat(args9193.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9202 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9203 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9204 = this;
if(this__9204.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9205 = this;
if((function (){var and__3941__auto____9206 = (0 <= n);
if(and__3941__auto____9206)
{return (n < this__9205.cnt);
} else
{return and__3941__auto____9206;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9207 = this;
if(this__9207.root.edit)
{return this__9207.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9208 = this;
if(this__9208.root.edit)
{if((function (){var and__3941__auto____9209 = (0 <= n);
if(and__3941__auto____9209)
{return (n < this__9208.cnt);
} else
{return and__3941__auto____9209;
}
})())
{if((cljs.core.tail_off(tcoll) <= n))
{(this__9208.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9214 = (function go(level,node){
var node__9212 = cljs.core.tv_ensure_editable(this__9208.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__9212,(n & 31),val);
return node__9212;
} else
{var subidx__9213 = ((n >>> level) & 31);
cljs.core.pv_aset(node__9212,subidx__9213,go((level - 5),cljs.core.pv_aget(node__9212,subidx__9213)));
return node__9212;
}
}).call(null,this__9208.shift,this__9208.root);
this__9208.root = new_root__9214;
return tcoll;
}
} else
{if((n === this__9208.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9208.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9215 = this;
if(this__9215.root.edit)
{if((this__9215.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9215.cnt))
{this__9215.cnt = 0;
return tcoll;
} else
{if((((this__9215.cnt - 1) & 31) > 0))
{this__9215.cnt = (this__9215.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9216 = cljs.core.editable_array_for(tcoll,(this__9215.cnt - 2));
var new_root__9218 = (function (){var nr__9217 = cljs.core.tv_pop_tail(tcoll,this__9215.shift,this__9215.root);
if(!((nr__9217 == null)))
{return nr__9217;
} else
{return (new cljs.core.VectorNode(this__9215.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if((function (){var and__3941__auto____9219 = (5 < this__9215.shift);
if(and__3941__auto____9219)
{return (cljs.core.pv_aget(new_root__9218,1) == null);
} else
{return and__3941__auto____9219;
}
})())
{var new_root__9220 = cljs.core.tv_ensure_editable(this__9215.root.edit,cljs.core.pv_aget(new_root__9218,0));
this__9215.root = new_root__9220;
this__9215.shift = (this__9215.shift - 5);
this__9215.cnt = (this__9215.cnt - 1);
this__9215.tail = new_tail__9216;
return tcoll;
} else
{this__9215.root = new_root__9218;
this__9215.cnt = (this__9215.cnt - 1);
this__9215.tail = new_tail__9216;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9221 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9222 = this;
if(this__9222.root.edit)
{if(((this__9222.cnt - cljs.core.tail_off(tcoll)) < 32))
{(this__9222.tail[(this__9222.cnt & 31)] = o);
this__9222.cnt = (this__9222.cnt + 1);
return tcoll;
} else
{var tail_node__9223 = (new cljs.core.VectorNode(this__9222.root.edit,this__9222.tail));
var new_tail__9224 = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail__9224[0] = o);
this__9222.tail = new_tail__9224;
if(((this__9222.cnt >>> 5) > (1 << this__9222.shift)))
{var new_root_array__9225 = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift__9226 = (this__9222.shift + 5);
(new_root_array__9225[0] = this__9222.root);
(new_root_array__9225[1] = cljs.core.new_path(this__9222.root.edit,this__9222.shift,tail_node__9223));
this__9222.root = (new cljs.core.VectorNode(this__9222.root.edit,new_root_array__9225));
this__9222.shift = new_shift__9226;
this__9222.cnt = (this__9222.cnt + 1);
return tcoll;
} else
{var new_root__9227 = cljs.core.tv_push_tail(tcoll,this__9222.shift,this__9222.root,tail_node__9223);
this__9222.root = new_root__9227;
this__9222.cnt = (this__9222.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9228 = this;
if(this__9228.root.edit)
{this__9228.root.edit = null;
var len__9229 = (this__9228.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail__9230 = cljs.core.make_array.cljs$lang$arity$1(len__9229);
cljs.core.array_copy(this__9228.tail,0,trimmed_tail__9230,0,len__9229);
return (new cljs.core.PersistentVector(null,this__9228.cnt,this__9228.shift,this__9228.root,trimmed_tail__9230,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9232 = this;
var h__2975__auto____9233 = this__9232.__hash;
if(!((h__2975__auto____9233 == null)))
{return h__2975__auto____9233;
} else
{var h__2975__auto____9234 = cljs.core.hash_coll(coll);
this__9232.__hash = h__2975__auto____9234;
return h__2975__auto____9234;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9235 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9236 = this;
var this__9237 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9237], 0));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9238 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9239 = this;
return cljs.core._first(this__9239.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9240 = this;
var temp__4090__auto____9241 = cljs.core.next(this__9240.front);
if(temp__4090__auto____9241)
{var f1__9242 = temp__4090__auto____9241;
return (new cljs.core.PersistentQueueSeq(this__9240.meta,f1__9242,this__9240.rear,null));
} else
{if((this__9240.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9240.meta,this__9240.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9243 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9244 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9244.front,this__9244.rear,this__9244.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9245 = this;
return this__9245.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9246 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9246.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9247 = this;
var h__2975__auto____9248 = this__9247.__hash;
if(!((h__2975__auto____9248 == null)))
{return h__2975__auto____9248;
} else
{var h__2975__auto____9249 = cljs.core.hash_coll(coll);
this__9247.__hash = h__2975__auto____9249;
return h__2975__auto____9249;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9250 = this;
if(cljs.core.truth_(this__9250.front))
{return (new cljs.core.PersistentQueue(this__9250.meta,(this__9250.count + 1),this__9250.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3943__auto____9251 = this__9250.rear;
if(cljs.core.truth_(or__3943__auto____9251))
{return or__3943__auto____9251;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9250.meta,(this__9250.count + 1),cljs.core.conj.cljs$lang$arity$2(this__9250.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9252 = this;
var this__9253 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9253], 0));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9254 = this;
var rear__9255 = cljs.core.seq(this__9254.rear);
if(cljs.core.truth_((function (){var or__3943__auto____9256 = this__9254.front;
if(cljs.core.truth_(or__3943__auto____9256))
{return or__3943__auto____9256;
} else
{return rear__9255;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9254.front,cljs.core.seq(rear__9255),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9257 = this;
return this__9257.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9258 = this;
return cljs.core._first(this__9258.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9259 = this;
if(cljs.core.truth_(this__9259.front))
{var temp__4090__auto____9260 = cljs.core.next(this__9259.front);
if(temp__4090__auto____9260)
{var f1__9261 = temp__4090__auto____9260;
return (new cljs.core.PersistentQueue(this__9259.meta,(this__9259.count - 1),f1__9261,this__9259.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9259.meta,(this__9259.count - 1),cljs.core.seq(this__9259.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9262 = this;
return cljs.core.first(this__9262.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9263 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9264 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9265 = this;
return (new cljs.core.PersistentQueue(meta,this__9265.count,this__9265.front,this__9265.rear,this__9265.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9266 = this;
return this__9266.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9267 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9268 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9271 = array.length;
var i__9272 = 0;
while(true){
if((i__9272 < len__9271))
{if((k === (array[i__9272])))
{return i__9272;
} else
{{
var G__9273 = (i__9272 + incr);
i__9272 = G__9273;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9276 = cljs.core.hash.cljs$lang$arity$1(a);
var b__9277 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__9276 < b__9277))
{return -1;
} else
{if((a__9276 > b__9277))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9285 = m.keys;
var len__9286 = ks__9285.length;
var so__9287 = m.strobj;
var out__9288 = cljs.core.with_meta(cljs.core.PersistentHashMap.EMPTY,cljs.core.meta(m));
var i__9289 = 0;
var out__9290 = cljs.core.transient$(out__9288);
while(true){
if((i__9289 < len__9286))
{var k__9291 = (ks__9285[i__9289]);
{
var G__9292 = (i__9289 + 1);
var G__9293 = cljs.core.assoc_BANG_(out__9290,k__9291,(so__9287[k__9291]));
i__9289 = G__9292;
out__9290 = G__9293;
continue;
}
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out__9290,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9299 = {};
var l__9300 = ks.length;
var i__9301 = 0;
while(true){
if((i__9301 < l__9300))
{var k__9302 = (ks[i__9301]);
(new_obj__9299[k__9302] = (obj[k__9302]));
{
var G__9303 = (i__9301 + 1);
i__9301 = G__9303;
continue;
}
} else
{}
break;
}
return new_obj__9299;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9306 = this;
return cljs.core.transient$(cljs.core.into(cljs.core.hash_map(),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9307 = this;
var h__2975__auto____9308 = this__9307.__hash;
if(!((h__2975__auto____9308 == null)))
{return h__2975__auto____9308;
} else
{var h__2975__auto____9309 = cljs.core.hash_imap(coll);
this__9307.__hash = h__2975__auto____9309;
return h__2975__auto____9309;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9310 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9311 = this;
if((function (){var and__3941__auto____9312 = goog.isString(k);
if(and__3941__auto____9312)
{return !((cljs.core.scan_array(1,k,this__9311.keys) == null));
} else
{return and__3941__auto____9312;
}
})())
{return (this__9311.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9313 = this;
if(goog.isString(k))
{if((function (){var or__3943__auto____9314 = (this__9313.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto____9314)
{return or__3943__auto____9314;
} else
{return (this__9313.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,this__9313.keys) == null)))
{var new_strobj__9315 = cljs.core.obj_clone(this__9313.strobj,this__9313.keys);
(new_strobj__9315[k] = v);
return (new cljs.core.ObjMap(this__9313.meta,this__9313.keys,new_strobj__9315,(this__9313.update_count + 1),null));
} else
{var new_strobj__9316 = cljs.core.obj_clone(this__9313.strobj,this__9313.keys);
var new_keys__9317 = this__9313.keys.slice();
(new_strobj__9316[k] = v);
new_keys__9317.push(k);
return (new cljs.core.ObjMap(this__9313.meta,new_keys__9317,new_strobj__9316,(this__9313.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9318 = this;
if((function (){var and__3941__auto____9319 = goog.isString(k);
if(and__3941__auto____9319)
{return !((cljs.core.scan_array(1,k,this__9318.keys) == null));
} else
{return and__3941__auto____9319;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9341 = null;
var G__9341__2 = (function (this_sym9320,k){
var this__9322 = this;
var this_sym9320__9323 = this;
var coll__9324 = this_sym9320__9323;
return coll__9324.cljs$core$ILookup$_lookup$arity$2(coll__9324,k);
});
var G__9341__3 = (function (this_sym9321,k,not_found){
var this__9322 = this;
var this_sym9321__9325 = this;
var coll__9326 = this_sym9321__9325;
return coll__9326.cljs$core$ILookup$_lookup$arity$3(coll__9326,k,not_found);
});
G__9341 = function(this_sym9321,k,not_found){
switch(arguments.length){
case 2:
return G__9341__2.call(this,this_sym9321,k);
case 3:
return G__9341__3.call(this,this_sym9321,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9341;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9304,args9305){
var this__9327 = this;
return this_sym9304.call.apply(this_sym9304,[this_sym9304].concat(args9305.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9328 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9329 = this;
var this__9330 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9330], 0));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9331 = this;
if((this__9331.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__9294_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__9294_SHARP_,(this__9331.strobj[p1__9294_SHARP_])], 0));
}),this__9331.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9332 = this;
return this__9332.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9333 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9334 = this;
return (new cljs.core.ObjMap(meta,this__9334.keys,this__9334.strobj,this__9334.update_count,this__9334.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9335 = this;
return this__9335.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9336 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__9336.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9337 = this;
if((function (){var and__3941__auto____9338 = goog.isString(k);
if(and__3941__auto____9338)
{return !((cljs.core.scan_array(1,k,this__9337.keys) == null));
} else
{return and__3941__auto____9338;
}
})())
{var new_keys__9339 = this__9337.keys.slice();
var new_strobj__9340 = cljs.core.obj_clone(this__9337.strobj,this__9337.keys);
new_keys__9339.splice(cljs.core.scan_array(1,k,new_keys__9339),1);
cljs.core.js_delete(new_strobj__9340,k);
return (new cljs.core.ObjMap(this__9337.meta,new_keys__9339,new_strobj__9340,(this__9337.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9345 = this;
var h__2975__auto____9346 = this__9345.__hash;
if(!((h__2975__auto____9346 == null)))
{return h__2975__auto____9346;
} else
{var h__2975__auto____9347 = cljs.core.hash_imap(coll);
this__9345.__hash = h__2975__auto____9347;
return h__2975__auto____9347;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9348 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9349 = this;
var bucket__9350 = (this__9349.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9351 = (cljs.core.truth_(bucket__9350)?cljs.core.scan_array(2,k,bucket__9350):null);
if(cljs.core.truth_(i__9351))
{return (bucket__9350[(i__9351 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9352 = this;
var h__9353 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9354 = (this__9352.hashobj[h__9353]);
if(cljs.core.truth_(bucket__9354))
{var new_bucket__9355 = bucket__9354.slice();
var new_hashobj__9356 = goog.object.clone(this__9352.hashobj);
(new_hashobj__9356[h__9353] = new_bucket__9355);
var temp__4090__auto____9357 = cljs.core.scan_array(2,k,new_bucket__9355);
if(cljs.core.truth_(temp__4090__auto____9357))
{var i__9358 = temp__4090__auto____9357;
(new_bucket__9355[(i__9358 + 1)] = v);
return (new cljs.core.HashMap(this__9352.meta,this__9352.count,new_hashobj__9356,null));
} else
{new_bucket__9355.push(k,v);
return (new cljs.core.HashMap(this__9352.meta,(this__9352.count + 1),new_hashobj__9356,null));
}
} else
{var new_hashobj__9359 = goog.object.clone(this__9352.hashobj);
(new_hashobj__9359[h__9353] = [k,v]);
return (new cljs.core.HashMap(this__9352.meta,(this__9352.count + 1),new_hashobj__9359,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9360 = this;
var bucket__9361 = (this__9360.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9362 = (cljs.core.truth_(bucket__9361)?cljs.core.scan_array(2,k,bucket__9361):null);
if(cljs.core.truth_(i__9362))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9387 = null;
var G__9387__2 = (function (this_sym9363,k){
var this__9365 = this;
var this_sym9363__9366 = this;
var coll__9367 = this_sym9363__9366;
return coll__9367.cljs$core$ILookup$_lookup$arity$2(coll__9367,k);
});
var G__9387__3 = (function (this_sym9364,k,not_found){
var this__9365 = this;
var this_sym9364__9368 = this;
var coll__9369 = this_sym9364__9368;
return coll__9369.cljs$core$ILookup$_lookup$arity$3(coll__9369,k,not_found);
});
G__9387 = function(this_sym9364,k,not_found){
switch(arguments.length){
case 2:
return G__9387__2.call(this,this_sym9364,k);
case 3:
return G__9387__3.call(this,this_sym9364,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9387;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9343,args9344){
var this__9370 = this;
return this_sym9343.call.apply(this_sym9343,[this_sym9343].concat(args9344.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9371 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9372 = this;
var this__9373 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9373], 0));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9374 = this;
if((this__9374.count > 0))
{var hashes__9375 = cljs.core.js_keys(this__9374.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__9342_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(this__9374.hashobj[p1__9342_SHARP_])));
}),hashes__9375);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9376 = this;
return this__9376.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9377 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9378 = this;
return (new cljs.core.HashMap(meta,this__9378.count,this__9378.hashobj,this__9378.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9379 = this;
return this__9379.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9380 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__9380.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9381 = this;
var h__9382 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9383 = (this__9381.hashobj[h__9382]);
var i__9384 = (cljs.core.truth_(bucket__9383)?cljs.core.scan_array(2,k,bucket__9383):null);
if(cljs.core.not(i__9384))
{return coll;
} else
{var new_hashobj__9385 = goog.object.clone(this__9381.hashobj);
if((3 > bucket__9383.length))
{cljs.core.js_delete(new_hashobj__9385,h__9382);
} else
{var new_bucket__9386 = bucket__9383.slice();
new_bucket__9386.splice(i__9384,2);
(new_hashobj__9385[h__9382] = new_bucket__9386);
}
return (new cljs.core.HashMap(this__9381.meta,(this__9381.count - 1),new_hashobj__9385,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9388 = ks.length;
var i__9389 = 0;
var out__9390 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9389 < len__9388))
{{
var G__9391 = (i__9389 + 1);
var G__9392 = cljs.core.assoc.cljs$lang$arity$3(out__9390,(ks[i__9389]),(vs[i__9389]));
i__9389 = G__9391;
out__9390 = G__9392;
continue;
}
} else
{return out__9390;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9396 = m.arr;
var len__9397 = arr__9396.length;
var i__9398 = 0;
while(true){
if((len__9397 <= i__9398))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr__9396[i__9398]),k))
{return i__9398;
} else
{if("\uFDD0'else")
{{
var G__9399 = (i__9398 + 2);
i__9398 = G__9399;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9402 = this;
return (new cljs.core.TransientArrayMap({},this__9402.arr.length,this__9402.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9403 = this;
var h__2975__auto____9404 = this__9403.__hash;
if(!((h__2975__auto____9404 == null)))
{return h__2975__auto____9404;
} else
{var h__2975__auto____9405 = cljs.core.hash_imap(coll);
this__9403.__hash = h__2975__auto____9405;
return h__2975__auto____9405;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9406 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9407 = this;
var idx__9408 = cljs.core.array_map_index_of(coll,k);
if((idx__9408 === -1))
{return not_found;
} else
{return (this__9407.arr[(idx__9408 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9409 = this;
var idx__9410 = cljs.core.array_map_index_of(coll,k);
if((idx__9410 === -1))
{if((this__9409.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9409.meta,(this__9409.cnt + 1),(function (){var G__9411__9412 = this__9409.arr.slice();
G__9411__9412.push(k);
G__9411__9412.push(v);
return G__9411__9412;
})(),null));
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9409.arr[(idx__9410 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9409.meta,this__9409.cnt,(function (){var G__9413__9414 = this__9409.arr.slice();
(G__9413__9414[(idx__9410 + 1)] = v);
return G__9413__9414;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9415 = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9447 = null;
var G__9447__2 = (function (this_sym9416,k){
var this__9418 = this;
var this_sym9416__9419 = this;
var coll__9420 = this_sym9416__9419;
return coll__9420.cljs$core$ILookup$_lookup$arity$2(coll__9420,k);
});
var G__9447__3 = (function (this_sym9417,k,not_found){
var this__9418 = this;
var this_sym9417__9421 = this;
var coll__9422 = this_sym9417__9421;
return coll__9422.cljs$core$ILookup$_lookup$arity$3(coll__9422,k,not_found);
});
G__9447 = function(this_sym9417,k,not_found){
switch(arguments.length){
case 2:
return G__9447__2.call(this,this_sym9417,k);
case 3:
return G__9447__3.call(this,this_sym9417,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9447;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9400,args9401){
var this__9423 = this;
return this_sym9400.call.apply(this_sym9400,[this_sym9400].concat(args9401.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9424 = this;
var len__9425 = this__9424.arr.length;
var i__9426 = 0;
var init__9427 = init;
while(true){
if((i__9426 < len__9425))
{var init__9428 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9427,(this__9424.arr[i__9426]),(this__9424.arr[(i__9426 + 1)])) : f.call(null,init__9427,(this__9424.arr[i__9426]),(this__9424.arr[(i__9426 + 1)])));
if(cljs.core.reduced_QMARK_(init__9428))
{return cljs.core.deref(init__9428);
} else
{{
var G__9448 = (i__9426 + 2);
var G__9449 = init__9428;
i__9426 = G__9448;
init__9427 = G__9449;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9429 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9430 = this;
var this__9431 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9431], 0));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9432 = this;
if((this__9432.cnt > 0))
{var len__9433 = this__9432.arr.length;
var array_map_seq__9434 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9433))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(this__9432.arr[i]),(this__9432.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
}),null));
});
return (array_map_seq__9434.cljs$lang$arity$1 ? array_map_seq__9434.cljs$lang$arity$1(0) : array_map_seq__9434.call(null,0));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9435 = this;
return this__9435.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9436 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9437 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9437.cnt,this__9437.arr,this__9437.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9438 = this;
return this__9438.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9439 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,this__9439.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9440 = this;
var idx__9441 = cljs.core.array_map_index_of(coll,k);
if((idx__9441 >= 0))
{var len__9442 = this__9440.arr.length;
var new_len__9443 = (len__9442 - 2);
if((new_len__9443 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9444 = cljs.core.make_array.cljs$lang$arity$1(new_len__9443);
var s__9445 = 0;
var d__9446 = 0;
while(true){
if((s__9445 >= len__9442))
{return (new cljs.core.PersistentArrayMap(this__9440.meta,(this__9440.cnt - 1),new_arr__9444,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(this__9440.arr[s__9445])))
{{
var G__9450 = (s__9445 + 2);
var G__9451 = d__9446;
s__9445 = G__9450;
d__9446 = G__9451;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9444[d__9446] = (this__9440.arr[s__9445]));
(new_arr__9444[(d__9446 + 1)] = (this__9440.arr[(s__9445 + 1)]));
{
var G__9452 = (s__9445 + 2);
var G__9453 = (d__9446 + 2);
s__9445 = G__9452;
d__9446 = G__9453;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9454 = cljs.core.count(ks);
var i__9455 = 0;
var out__9456 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9455 < len__9454))
{{
var G__9457 = (i__9455 + 1);
var G__9458 = cljs.core.assoc_BANG_(out__9456,(ks[i__9455]),(vs[i__9455]));
i__9455 = G__9457;
out__9456 = G__9458;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9456);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9459 = this;
if(cljs.core.truth_(this__9459.editable_QMARK_))
{var idx__9460 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9460 >= 0))
{(this__9459.arr[idx__9460] = (this__9459.arr[(this__9459.len - 2)]));
(this__9459.arr[(idx__9460 + 1)] = (this__9459.arr[(this__9459.len - 1)]));
var G__9461__9462 = this__9459.arr;
G__9461__9462.pop();
G__9461__9462.pop();
G__9461__9462;
this__9459.len = (this__9459.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9463 = this;
if(cljs.core.truth_(this__9463.editable_QMARK_))
{var idx__9464 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9464 === -1))
{if(((this__9463.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9463.len = (this__9463.len + 2);
this__9463.arr.push(key);
this__9463.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_(cljs.core.array__GT_transient_hash_map(this__9463.len,this__9463.arr),key,val);
}
} else
{if((val === (this__9463.arr[(idx__9464 + 1)])))
{return tcoll;
} else
{(this__9463.arr[(idx__9464 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9465 = this;
if(cljs.core.truth_(this__9465.editable_QMARK_))
{if((function (){var G__9466__9467 = o;
if(G__9466__9467)
{if((function (){var or__3943__auto____9468 = (G__9466__9467.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____9468)
{return or__3943__auto____9468;
} else
{return G__9466__9467.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9466__9467.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9466__9467);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9466__9467);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key(o),cljs.core.val(o));
} else
{var es__9469 = cljs.core.seq(o);
var tcoll__9470 = tcoll;
while(true){
var temp__4090__auto____9471 = cljs.core.first(es__9469);
if(cljs.core.truth_(temp__4090__auto____9471))
{var e__9472 = temp__4090__auto____9471;
{
var G__9478 = cljs.core.next(es__9469);
var G__9479 = tcoll__9470.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9470,cljs.core.key(e__9472),cljs.core.val(e__9472));
es__9469 = G__9478;
tcoll__9470 = G__9479;
continue;
}
} else
{return tcoll__9470;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9473 = this;
if(cljs.core.truth_(this__9473.editable_QMARK_))
{this__9473.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(this__9473.len,2),this__9473.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9474 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9475 = this;
if(cljs.core.truth_(this__9475.editable_QMARK_))
{var idx__9476 = cljs.core.array_map_index_of(tcoll,k);
if((idx__9476 === -1))
{return not_found;
} else
{return (this__9475.arr[(idx__9476 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9477 = this;
if(cljs.core.truth_(this__9477.editable_QMARK_))
{return cljs.core.quot(this__9477.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9482 = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i__9483 = 0;
while(true){
if((i__9483 < len))
{{
var G__9484 = cljs.core.assoc_BANG_(out__9482,(arr[i__9483]),(arr[(i__9483 + 1)]));
var G__9485 = (i__9483 + 2);
out__9482 = G__9484;
i__9483 = G__9485;
continue;
}
} else
{return out__9482;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__3093__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9490__9491 = arr.slice();
(G__9490__9491[i] = a);
return G__9490__9491;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9492__9493 = arr.slice();
(G__9492__9493[i] = a);
(G__9492__9493[j] = b);
return G__9492__9493;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9495 = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr__9495,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr__9495,(2 * i),(new_arr__9495.length - (2 * i)));
return new_arr__9495;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9498 = inode.ensure_editable(edit);
(editable__9498.arr[i] = a);
return editable__9498;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9499 = inode.ensure_editable(edit);
(editable__9499.arr[i] = a);
(editable__9499.arr[j] = b);
return editable__9499;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9506 = arr.length;
var i__9507 = 0;
var init__9508 = init;
while(true){
if((i__9507 < len__9506))
{var init__9511 = (function (){var k__9509 = (arr[i__9507]);
if(!((k__9509 == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9508,k__9509,(arr[(i__9507 + 1)])) : f.call(null,init__9508,k__9509,(arr[(i__9507 + 1)])));
} else
{var node__9510 = (arr[(i__9507 + 1)]);
if(!((node__9510 == null)))
{return node__9510.kv_reduce(f,init__9508);
} else
{return init__9508;
}
}
})();
if(cljs.core.reduced_QMARK_(init__9511))
{return cljs.core.deref(init__9511);
} else
{{
var G__9512 = (i__9507 + 2);
var G__9513 = init__9511;
i__9507 = G__9512;
init__9508 = G__9513;
continue;
}
}
} else
{return init__9508;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9514 = this;
var inode__9515 = this;
if((this__9514.bitmap === bit))
{return null;
} else
{var editable__9516 = inode__9515.ensure_editable(e);
var earr__9517 = editable__9516.arr;
var len__9518 = earr__9517.length;
editable__9516.bitmap = (bit ^ editable__9516.bitmap);
cljs.core.array_copy(earr__9517,(2 * (i + 1)),earr__9517,(2 * i),(len__9518 - (2 * (i + 1))));
(earr__9517[(len__9518 - 2)] = null);
(earr__9517[(len__9518 - 1)] = null);
return editable__9516;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9519 = this;
var inode__9520 = this;
var bit__9521 = (1 << ((hash >>> shift) & 0x01f));
var idx__9522 = cljs.core.bitmap_indexed_node_index(this__9519.bitmap,bit__9521);
if(((this__9519.bitmap & bit__9521) === 0))
{var n__9523 = cljs.core.bit_count(this__9519.bitmap);
if(((2 * n__9523) < this__9519.arr.length))
{var editable__9524 = inode__9520.ensure_editable(edit);
var earr__9525 = editable__9524.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr__9525,(2 * idx__9522),earr__9525,(2 * (idx__9522 + 1)),(2 * (n__9523 - idx__9522)));
(earr__9525[(2 * idx__9522)] = key);
(earr__9525[((2 * idx__9522) + 1)] = val);
editable__9524.bitmap = (editable__9524.bitmap | bit__9521);
return editable__9524;
} else
{if((n__9523 >= 16))
{var nodes__9526 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9527 = ((hash >>> shift) & 0x01f);
(nodes__9526[jdx__9527] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9528 = 0;
var j__9529 = 0;
while(true){
if((i__9528 < 32))
{if((((this__9519.bitmap >>> i__9528) & 1) === 0))
{{
var G__9582 = (i__9528 + 1);
var G__9583 = j__9529;
i__9528 = G__9582;
j__9529 = G__9583;
continue;
}
} else
{(nodes__9526[i__9528] = ((!(((this__9519.arr[j__9529]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9519.arr[j__9529])),(this__9519.arr[j__9529]),(this__9519.arr[(j__9529 + 1)]),added_leaf_QMARK_):(this__9519.arr[(j__9529 + 1)])));
{
var G__9584 = (i__9528 + 1);
var G__9585 = (j__9529 + 2);
i__9528 = G__9584;
j__9529 = G__9585;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9523 + 1),nodes__9526));
} else
{if("\uFDD0'else")
{var new_arr__9530 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9523 + 4)));
cljs.core.array_copy(this__9519.arr,0,new_arr__9530,0,(2 * idx__9522));
(new_arr__9530[(2 * idx__9522)] = key);
(new_arr__9530[((2 * idx__9522) + 1)] = val);
cljs.core.array_copy(this__9519.arr,(2 * idx__9522),new_arr__9530,(2 * (idx__9522 + 1)),(2 * (n__9523 - idx__9522)));
added_leaf_QMARK_.val = true;
var editable__9531 = inode__9520.ensure_editable(edit);
editable__9531.arr = new_arr__9530;
editable__9531.bitmap = (editable__9531.bitmap | bit__9521);
return editable__9531;
} else
{return null;
}
}
}
} else
{var key_or_nil__9532 = (this__9519.arr[(2 * idx__9522)]);
var val_or_node__9533 = (this__9519.arr[((2 * idx__9522) + 1)]);
if((key_or_nil__9532 == null))
{var n__9534 = val_or_node__9533.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9534 === val_or_node__9533))
{return inode__9520;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9520,edit,((2 * idx__9522) + 1),n__9534);
}
} else
{if(cljs.core.key_test(key,key_or_nil__9532))
{if((val === val_or_node__9533))
{return inode__9520;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9520,edit,((2 * idx__9522) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode__9520,edit,(2 * idx__9522),null,((2 * idx__9522) + 1),cljs.core.create_node.cljs$lang$arity$7(edit,(shift + 5),key_or_nil__9532,val_or_node__9533,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9535 = this;
var inode__9536 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9535.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9537 = this;
var inode__9538 = this;
var bit__9539 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9537.bitmap & bit__9539) === 0))
{return inode__9538;
} else
{var idx__9540 = cljs.core.bitmap_indexed_node_index(this__9537.bitmap,bit__9539);
var key_or_nil__9541 = (this__9537.arr[(2 * idx__9540)]);
var val_or_node__9542 = (this__9537.arr[((2 * idx__9540) + 1)]);
if((key_or_nil__9541 == null))
{var n__9543 = val_or_node__9542.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9543 === val_or_node__9542))
{return inode__9538;
} else
{if(!((n__9543 == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9538,edit,((2 * idx__9540) + 1),n__9543);
} else
{if((this__9537.bitmap === bit__9539))
{return null;
} else
{if("\uFDD0'else")
{return inode__9538.edit_and_remove_pair(edit,bit__9539,idx__9540);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9541))
{(removed_leaf_QMARK_[0] = true);
return inode__9538.edit_and_remove_pair(edit,bit__9539,idx__9540);
} else
{if("\uFDD0'else")
{return inode__9538;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9544 = this;
var inode__9545 = this;
if((e === this__9544.edit))
{return inode__9545;
} else
{var n__9546 = cljs.core.bit_count(this__9544.bitmap);
var new_arr__9547 = cljs.core.make_array.cljs$lang$arity$1((((n__9546 < 0))?4:(2 * (n__9546 + 1))));
cljs.core.array_copy(this__9544.arr,0,new_arr__9547,0,(2 * n__9546));
return (new cljs.core.BitmapIndexedNode(e,this__9544.bitmap,new_arr__9547));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9548 = this;
var inode__9549 = this;
return cljs.core.inode_kv_reduce(this__9548.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9550 = this;
var inode__9551 = this;
var bit__9552 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9550.bitmap & bit__9552) === 0))
{return not_found;
} else
{var idx__9553 = cljs.core.bitmap_indexed_node_index(this__9550.bitmap,bit__9552);
var key_or_nil__9554 = (this__9550.arr[(2 * idx__9553)]);
var val_or_node__9555 = (this__9550.arr[((2 * idx__9553) + 1)]);
if((key_or_nil__9554 == null))
{return val_or_node__9555.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9554))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9554,val_or_node__9555], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9556 = this;
var inode__9557 = this;
var bit__9558 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9556.bitmap & bit__9558) === 0))
{return inode__9557;
} else
{var idx__9559 = cljs.core.bitmap_indexed_node_index(this__9556.bitmap,bit__9558);
var key_or_nil__9560 = (this__9556.arr[(2 * idx__9559)]);
var val_or_node__9561 = (this__9556.arr[((2 * idx__9559) + 1)]);
if((key_or_nil__9560 == null))
{var n__9562 = val_or_node__9561.inode_without((shift + 5),hash,key);
if((n__9562 === val_or_node__9561))
{return inode__9557;
} else
{if(!((n__9562 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9556.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9556.arr,((2 * idx__9559) + 1),n__9562)));
} else
{if((this__9556.bitmap === bit__9558))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9556.bitmap ^ bit__9558),cljs.core.remove_pair(this__9556.arr,idx__9559)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9560))
{return (new cljs.core.BitmapIndexedNode(null,(this__9556.bitmap ^ bit__9558),cljs.core.remove_pair(this__9556.arr,idx__9559)));
} else
{if("\uFDD0'else")
{return inode__9557;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9563 = this;
var inode__9564 = this;
var bit__9565 = (1 << ((hash >>> shift) & 0x01f));
var idx__9566 = cljs.core.bitmap_indexed_node_index(this__9563.bitmap,bit__9565);
if(((this__9563.bitmap & bit__9565) === 0))
{var n__9567 = cljs.core.bit_count(this__9563.bitmap);
if((n__9567 >= 16))
{var nodes__9568 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9569 = ((hash >>> shift) & 0x01f);
(nodes__9568[jdx__9569] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9570 = 0;
var j__9571 = 0;
while(true){
if((i__9570 < 32))
{if((((this__9563.bitmap >>> i__9570) & 1) === 0))
{{
var G__9586 = (i__9570 + 1);
var G__9587 = j__9571;
i__9570 = G__9586;
j__9571 = G__9587;
continue;
}
} else
{(nodes__9568[i__9570] = ((!(((this__9563.arr[j__9571]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9563.arr[j__9571])),(this__9563.arr[j__9571]),(this__9563.arr[(j__9571 + 1)]),added_leaf_QMARK_):(this__9563.arr[(j__9571 + 1)])));
{
var G__9588 = (i__9570 + 1);
var G__9589 = (j__9571 + 2);
i__9570 = G__9588;
j__9571 = G__9589;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9567 + 1),nodes__9568));
} else
{var new_arr__9572 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9567 + 1)));
cljs.core.array_copy(this__9563.arr,0,new_arr__9572,0,(2 * idx__9566));
(new_arr__9572[(2 * idx__9566)] = key);
(new_arr__9572[((2 * idx__9566) + 1)] = val);
cljs.core.array_copy(this__9563.arr,(2 * idx__9566),new_arr__9572,(2 * (idx__9566 + 1)),(2 * (n__9567 - idx__9566)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9563.bitmap | bit__9565),new_arr__9572));
}
} else
{var key_or_nil__9573 = (this__9563.arr[(2 * idx__9566)]);
var val_or_node__9574 = (this__9563.arr[((2 * idx__9566) + 1)]);
if((key_or_nil__9573 == null))
{var n__9575 = val_or_node__9574.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9575 === val_or_node__9574))
{return inode__9564;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9563.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9563.arr,((2 * idx__9566) + 1),n__9575)));
}
} else
{if(cljs.core.key_test(key,key_or_nil__9573))
{if((val === val_or_node__9574))
{return inode__9564;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9563.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9563.arr,((2 * idx__9566) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9563.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(this__9563.arr,(2 * idx__9566),null,((2 * idx__9566) + 1),cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil__9573,val_or_node__9574,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9576 = this;
var inode__9577 = this;
var bit__9578 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9576.bitmap & bit__9578) === 0))
{return not_found;
} else
{var idx__9579 = cljs.core.bitmap_indexed_node_index(this__9576.bitmap,bit__9578);
var key_or_nil__9580 = (this__9576.arr[(2 * idx__9579)]);
var val_or_node__9581 = (this__9576.arr[((2 * idx__9579) + 1)]);
if((key_or_nil__9580 == null))
{return val_or_node__9581.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9580))
{return val_or_node__9581;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9597 = array_node.arr;
var len__9598 = (2 * (array_node.cnt - 1));
var new_arr__9599 = cljs.core.make_array.cljs$lang$arity$1(len__9598);
var i__9600 = 0;
var j__9601 = 1;
var bitmap__9602 = 0;
while(true){
if((i__9600 < len__9598))
{if((function (){var and__3941__auto____9603 = !((i__9600 === idx));
if(and__3941__auto____9603)
{return !(((arr__9597[i__9600]) == null));
} else
{return and__3941__auto____9603;
}
})())
{(new_arr__9599[j__9601] = (arr__9597[i__9600]));
{
var G__9604 = (i__9600 + 1);
var G__9605 = (j__9601 + 2);
var G__9606 = (bitmap__9602 | (1 << i__9600));
i__9600 = G__9604;
j__9601 = G__9605;
bitmap__9602 = G__9606;
continue;
}
} else
{{
var G__9607 = (i__9600 + 1);
var G__9608 = j__9601;
var G__9609 = bitmap__9602;
i__9600 = G__9607;
j__9601 = G__9608;
bitmap__9602 = G__9609;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9602,new_arr__9599));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9610 = this;
var inode__9611 = this;
var idx__9612 = ((hash >>> shift) & 0x01f);
var node__9613 = (this__9610.arr[idx__9612]);
if((node__9613 == null))
{var editable__9614 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9611,edit,idx__9612,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9614.cnt = (editable__9614.cnt + 1);
return editable__9614;
} else
{var n__9615 = node__9613.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9615 === node__9613))
{return inode__9611;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9611,edit,idx__9612,n__9615);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9616 = this;
var inode__9617 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$1(this__9616.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9618 = this;
var inode__9619 = this;
var idx__9620 = ((hash >>> shift) & 0x01f);
var node__9621 = (this__9618.arr[idx__9620]);
if((node__9621 == null))
{return inode__9619;
} else
{var n__9622 = node__9621.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9622 === node__9621))
{return inode__9619;
} else
{if((n__9622 == null))
{if((this__9618.cnt <= 8))
{return cljs.core.pack_array_node(inode__9619,edit,idx__9620);
} else
{var editable__9623 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9619,edit,idx__9620,n__9622);
editable__9623.cnt = (editable__9623.cnt - 1);
return editable__9623;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9619,edit,idx__9620,n__9622);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9624 = this;
var inode__9625 = this;
if((e === this__9624.edit))
{return inode__9625;
} else
{return (new cljs.core.ArrayNode(e,this__9624.cnt,this__9624.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9626 = this;
var inode__9627 = this;
var len__9628 = this__9626.arr.length;
var i__9629 = 0;
var init__9630 = init;
while(true){
if((i__9629 < len__9628))
{var node__9631 = (this__9626.arr[i__9629]);
if(!((node__9631 == null)))
{var init__9632 = node__9631.kv_reduce(f,init__9630);
if(cljs.core.reduced_QMARK_(init__9632))
{return cljs.core.deref(init__9632);
} else
{{
var G__9651 = (i__9629 + 1);
var G__9652 = init__9632;
i__9629 = G__9651;
init__9630 = G__9652;
continue;
}
}
} else
{return null;
}
} else
{return init__9630;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9633 = this;
var inode__9634 = this;
var idx__9635 = ((hash >>> shift) & 0x01f);
var node__9636 = (this__9633.arr[idx__9635]);
if(!((node__9636 == null)))
{return node__9636.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9637 = this;
var inode__9638 = this;
var idx__9639 = ((hash >>> shift) & 0x01f);
var node__9640 = (this__9637.arr[idx__9639]);
if(!((node__9640 == null)))
{var n__9641 = node__9640.inode_without((shift + 5),hash,key);
if((n__9641 === node__9640))
{return inode__9638;
} else
{if((n__9641 == null))
{if((this__9637.cnt <= 8))
{return cljs.core.pack_array_node(inode__9638,null,idx__9639);
} else
{return (new cljs.core.ArrayNode(null,(this__9637.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9637.arr,idx__9639,n__9641)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9637.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9637.arr,idx__9639,n__9641)));
} else
{return null;
}
}
}
} else
{return inode__9638;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9642 = this;
var inode__9643 = this;
var idx__9644 = ((hash >>> shift) & 0x01f);
var node__9645 = (this__9642.arr[idx__9644]);
if((node__9645 == null))
{return (new cljs.core.ArrayNode(null,(this__9642.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9642.arr,idx__9644,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9646 = node__9645.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9646 === node__9645))
{return inode__9643;
} else
{return (new cljs.core.ArrayNode(null,this__9642.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9642.arr,idx__9644,n__9646)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9647 = this;
var inode__9648 = this;
var idx__9649 = ((hash >>> shift) & 0x01f);
var node__9650 = (this__9647.arr[idx__9649]);
if(!((node__9650 == null)))
{return node__9650.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9655 = (2 * cnt);
var i__9656 = 0;
while(true){
if((i__9656 < lim__9655))
{if(cljs.core.key_test(key,(arr[i__9656])))
{return i__9656;
} else
{{
var G__9657 = (i__9656 + 2);
i__9656 = G__9657;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9658 = this;
var inode__9659 = this;
if((hash === this__9658.collision_hash))
{var idx__9660 = cljs.core.hash_collision_node_find_index(this__9658.arr,this__9658.cnt,key);
if((idx__9660 === -1))
{if((this__9658.arr.length > (2 * this__9658.cnt)))
{var editable__9661 = cljs.core.edit_and_set.cljs$lang$arity$6(inode__9659,edit,(2 * this__9658.cnt),key,((2 * this__9658.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9661.cnt = (editable__9661.cnt + 1);
return editable__9661;
} else
{var len__9662 = this__9658.arr.length;
var new_arr__9663 = cljs.core.make_array.cljs$lang$arity$1((len__9662 + 2));
cljs.core.array_copy(this__9658.arr,0,new_arr__9663,0,len__9662);
(new_arr__9663[len__9662] = key);
(new_arr__9663[(len__9662 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9659.ensure_editable_array(edit,(this__9658.cnt + 1),new_arr__9663);
}
} else
{if(((this__9658.arr[(idx__9660 + 1)]) === val))
{return inode__9659;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9659,edit,(idx__9660 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9658.collision_hash >>> shift) & 0x01f)),[null,inode__9659,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9664 = this;
var inode__9665 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9664.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9666 = this;
var inode__9667 = this;
var idx__9668 = cljs.core.hash_collision_node_find_index(this__9666.arr,this__9666.cnt,key);
if((idx__9668 === -1))
{return inode__9667;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9666.cnt === 1))
{return null;
} else
{var editable__9669 = inode__9667.ensure_editable(edit);
var earr__9670 = editable__9669.arr;
(earr__9670[idx__9668] = (earr__9670[((2 * this__9666.cnt) - 2)]));
(earr__9670[(idx__9668 + 1)] = (earr__9670[((2 * this__9666.cnt) - 1)]));
(earr__9670[((2 * this__9666.cnt) - 1)] = null);
(earr__9670[((2 * this__9666.cnt) - 2)] = null);
editable__9669.cnt = (editable__9669.cnt - 1);
return editable__9669;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9671 = this;
var inode__9672 = this;
if((e === this__9671.edit))
{return inode__9672;
} else
{var new_arr__9673 = cljs.core.make_array.cljs$lang$arity$1((2 * (this__9671.cnt + 1)));
cljs.core.array_copy(this__9671.arr,0,new_arr__9673,0,(2 * this__9671.cnt));
return (new cljs.core.HashCollisionNode(e,this__9671.collision_hash,this__9671.cnt,new_arr__9673));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9674 = this;
var inode__9675 = this;
return cljs.core.inode_kv_reduce(this__9674.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9676 = this;
var inode__9677 = this;
var idx__9678 = cljs.core.hash_collision_node_find_index(this__9676.arr,this__9676.cnt,key);
if((idx__9678 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9676.arr[idx__9678])))
{return cljs.core.PersistentVector.fromArray([(this__9676.arr[idx__9678]),(this__9676.arr[(idx__9678 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9679 = this;
var inode__9680 = this;
var idx__9681 = cljs.core.hash_collision_node_find_index(this__9679.arr,this__9679.cnt,key);
if((idx__9681 === -1))
{return inode__9680;
} else
{if((this__9679.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9679.collision_hash,(this__9679.cnt - 1),cljs.core.remove_pair(this__9679.arr,cljs.core.quot(idx__9681,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9682 = this;
var inode__9683 = this;
if((hash === this__9682.collision_hash))
{var idx__9684 = cljs.core.hash_collision_node_find_index(this__9682.arr,this__9682.cnt,key);
if((idx__9684 === -1))
{var len__9685 = this__9682.arr.length;
var new_arr__9686 = cljs.core.make_array.cljs$lang$arity$1((len__9685 + 2));
cljs.core.array_copy(this__9682.arr,0,new_arr__9686,0,len__9685);
(new_arr__9686[len__9685] = key);
(new_arr__9686[(len__9685 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9682.collision_hash,(this__9682.cnt + 1),new_arr__9686));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((this__9682.arr[idx__9684]),val))
{return inode__9683;
} else
{return (new cljs.core.HashCollisionNode(null,this__9682.collision_hash,this__9682.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9682.arr,(idx__9684 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9682.collision_hash >>> shift) & 0x01f)),[null,inode__9683])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9687 = this;
var inode__9688 = this;
var idx__9689 = cljs.core.hash_collision_node_find_index(this__9687.arr,this__9687.cnt,key);
if((idx__9689 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9687.arr[idx__9689])))
{return (this__9687.arr[(idx__9689 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9690 = this;
var inode__9691 = this;
if((e === this__9690.edit))
{this__9690.arr = array;
this__9690.cnt = count;
return inode__9691;
} else
{return (new cljs.core.HashCollisionNode(this__9690.edit,this__9690.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9696 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9696 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9696,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9697 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9696,key1,val1,added_leaf_QMARK___9697).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9697);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9698 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9698 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9698,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9699 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9698,key1,val1,added_leaf_QMARK___9699).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9699);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9700 = this;
var h__2975__auto____9701 = this__9700.__hash;
if(!((h__2975__auto____9701 == null)))
{return h__2975__auto____9701;
} else
{var h__2975__auto____9702 = cljs.core.hash_coll(coll);
this__9700.__hash = h__2975__auto____9702;
return h__2975__auto____9702;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9703 = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9704 = this;
var this__9705 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9705], 0));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9706 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9707 = this;
if((this__9707.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9707.nodes[this__9707.i]),(this__9707.nodes[(this__9707.i + 1)])], true);
} else
{return cljs.core.first(this__9707.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9708 = this;
if((this__9708.s == null))
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9708.nodes,(this__9708.i + 2),null);
} else
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9708.nodes,this__9708.i,cljs.core.next(this__9708.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9709 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9710 = this;
return (new cljs.core.NodeSeq(meta,this__9710.nodes,this__9710.i,this__9710.s,this__9710.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9711 = this;
return this__9711.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9712 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9712.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9719 = nodes.length;
var j__9720 = i;
while(true){
if((j__9720 < len__9719))
{if(!(((nodes[j__9720]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9720,null,null));
} else
{var temp__4090__auto____9721 = (nodes[(j__9720 + 1)]);
if(cljs.core.truth_(temp__4090__auto____9721))
{var node__9722 = temp__4090__auto____9721;
var temp__4090__auto____9723 = node__9722.inode_seq();
if(cljs.core.truth_(temp__4090__auto____9723))
{var node_seq__9724 = temp__4090__auto____9723;
return (new cljs.core.NodeSeq(null,nodes,(j__9720 + 2),node_seq__9724,null));
} else
{{
var G__9725 = (j__9720 + 2);
j__9720 = G__9725;
continue;
}
}
} else
{{
var G__9726 = (j__9720 + 2);
j__9720 = G__9726;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9727 = this;
var h__2975__auto____9728 = this__9727.__hash;
if(!((h__2975__auto____9728 == null)))
{return h__2975__auto____9728;
} else
{var h__2975__auto____9729 = cljs.core.hash_coll(coll);
this__9727.__hash = h__2975__auto____9729;
return h__2975__auto____9729;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9730 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9731 = this;
var this__9732 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9732], 0));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9733 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9734 = this;
return cljs.core.first(this__9734.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9735 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$4(null,this__9735.nodes,this__9735.i,cljs.core.next(this__9735.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9736 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9737 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9737.nodes,this__9737.i,this__9737.s,this__9737.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9738 = this;
return this__9738.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9739 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9739.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9746 = nodes.length;
var j__9747 = i;
while(true){
if((j__9747 < len__9746))
{var temp__4090__auto____9748 = (nodes[j__9747]);
if(cljs.core.truth_(temp__4090__auto____9748))
{var nj__9749 = temp__4090__auto____9748;
var temp__4090__auto____9750 = nj__9749.inode_seq();
if(cljs.core.truth_(temp__4090__auto____9750))
{var ns__9751 = temp__4090__auto____9750;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9747 + 1),ns__9751,null));
} else
{{
var G__9752 = (j__9747 + 1);
j__9747 = G__9752;
continue;
}
}
} else
{{
var G__9753 = (j__9747 + 1);
j__9747 = G__9753;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9756 = this;
return (new cljs.core.TransientHashMap({},this__9756.root,this__9756.cnt,this__9756.has_nil_QMARK_,this__9756.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9757 = this;
var h__2975__auto____9758 = this__9757.__hash;
if(!((h__2975__auto____9758 == null)))
{return h__2975__auto____9758;
} else
{var h__2975__auto____9759 = cljs.core.hash_imap(coll);
this__9757.__hash = h__2975__auto____9759;
return h__2975__auto____9759;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9760 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9761 = this;
if((k == null))
{if(this__9761.has_nil_QMARK_)
{return this__9761.nil_val;
} else
{return not_found;
}
} else
{if((this__9761.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9761.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9762 = this;
if((k == null))
{if((function (){var and__3941__auto____9763 = this__9762.has_nil_QMARK_;
if(and__3941__auto____9763)
{return (v === this__9762.nil_val);
} else
{return and__3941__auto____9763;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9762.meta,((this__9762.has_nil_QMARK_)?this__9762.cnt:(this__9762.cnt + 1)),this__9762.root,true,v,null));
}
} else
{var added_leaf_QMARK___9764 = (new cljs.core.Box(false));
var new_root__9765 = (((this__9762.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9762.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9764);
if((new_root__9765 === this__9762.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9762.meta,((added_leaf_QMARK___9764.val)?(this__9762.cnt + 1):this__9762.cnt),new_root__9765,this__9762.has_nil_QMARK_,this__9762.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9766 = this;
if((k == null))
{return this__9766.has_nil_QMARK_;
} else
{if((this__9766.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9766.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9789 = null;
var G__9789__2 = (function (this_sym9767,k){
var this__9769 = this;
var this_sym9767__9770 = this;
var coll__9771 = this_sym9767__9770;
return coll__9771.cljs$core$ILookup$_lookup$arity$2(coll__9771,k);
});
var G__9789__3 = (function (this_sym9768,k,not_found){
var this__9769 = this;
var this_sym9768__9772 = this;
var coll__9773 = this_sym9768__9772;
return coll__9773.cljs$core$ILookup$_lookup$arity$3(coll__9773,k,not_found);
});
G__9789 = function(this_sym9768,k,not_found){
switch(arguments.length){
case 2:
return G__9789__2.call(this,this_sym9768,k);
case 3:
return G__9789__3.call(this,this_sym9768,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9789;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9754,args9755){
var this__9774 = this;
return this_sym9754.call.apply(this_sym9754,[this_sym9754].concat(args9755.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9775 = this;
var init__9776 = ((this__9775.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,this__9775.nil_val) : f.call(null,init,null,this__9775.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__9776))
{return cljs.core.deref(init__9776);
} else
{if(!((this__9775.root == null)))
{return this__9775.root.kv_reduce(f,init__9776);
} else
{if("\uFDD0'else")
{return init__9776;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9777 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9778 = this;
var this__9779 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9779], 0));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9780 = this;
if((this__9780.cnt > 0))
{var s__9781 = ((!((this__9780.root == null)))?this__9780.root.inode_seq():null);
if(this__9780.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,this__9780.nil_val], true),s__9781);
} else
{return s__9781;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9782 = this;
return this__9782.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9783 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9784 = this;
return (new cljs.core.PersistentHashMap(meta,this__9784.cnt,this__9784.root,this__9784.has_nil_QMARK_,this__9784.nil_val,this__9784.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9785 = this;
return this__9785.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9786 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,this__9786.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9787 = this;
if((k == null))
{if(this__9787.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9787.meta,(this__9787.cnt - 1),this__9787.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9787.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9788 = this__9787.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root__9788 === this__9787.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9787.meta,(this__9787.cnt - 1),new_root__9788,this__9787.has_nil_QMARK_,this__9787.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9790 = ks.length;
var i__9791 = 0;
var out__9792 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9791 < len__9790))
{{
var G__9793 = (i__9791 + 1);
var G__9794 = cljs.core.assoc_BANG_(out__9792,(ks[i__9791]),(vs[i__9791]));
i__9791 = G__9793;
out__9792 = G__9794;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9792);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9795 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9796 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9797 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9798 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9799 = this;
if((k == null))
{if(this__9799.has_nil_QMARK_)
{return this__9799.nil_val;
} else
{return null;
}
} else
{if((this__9799.root == null))
{return null;
} else
{return this__9799.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9800 = this;
if((k == null))
{if(this__9800.has_nil_QMARK_)
{return this__9800.nil_val;
} else
{return not_found;
}
} else
{if((this__9800.root == null))
{return not_found;
} else
{return this__9800.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9801 = this;
if(this__9801.edit)
{return this__9801.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9802 = this;
var tcoll__9803 = this;
if(this__9802.edit)
{if((function (){var G__9804__9805 = o;
if(G__9804__9805)
{if((function (){var or__3943__auto____9806 = (G__9804__9805.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____9806)
{return or__3943__auto____9806;
} else
{return G__9804__9805.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9804__9805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9804__9805);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9804__9805);
}
})())
{return tcoll__9803.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else
{var es__9807 = cljs.core.seq(o);
var tcoll__9808 = tcoll__9803;
while(true){
var temp__4090__auto____9809 = cljs.core.first(es__9807);
if(cljs.core.truth_(temp__4090__auto____9809))
{var e__9810 = temp__4090__auto____9809;
{
var G__9821 = cljs.core.next(es__9807);
var G__9822 = tcoll__9808.assoc_BANG_(cljs.core.key(e__9810),cljs.core.val(e__9810));
es__9807 = G__9821;
tcoll__9808 = G__9822;
continue;
}
} else
{return tcoll__9808;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9811 = this;
var tcoll__9812 = this;
if(this__9811.edit)
{if((k == null))
{if((this__9811.nil_val === v))
{} else
{this__9811.nil_val = v;
}
if(this__9811.has_nil_QMARK_)
{} else
{this__9811.count = (this__9811.count + 1);
this__9811.has_nil_QMARK_ = true;
}
return tcoll__9812;
} else
{var added_leaf_QMARK___9813 = (new cljs.core.Box(false));
var node__9814 = (((this__9811.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9811.root).inode_assoc_BANG_(this__9811.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9813);
if((node__9814 === this__9811.root))
{} else
{this__9811.root = node__9814;
}
if(added_leaf_QMARK___9813.val)
{this__9811.count = (this__9811.count + 1);
} else
{}
return tcoll__9812;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9815 = this;
var tcoll__9816 = this;
if(this__9815.edit)
{if((k == null))
{if(this__9815.has_nil_QMARK_)
{this__9815.has_nil_QMARK_ = false;
this__9815.nil_val = null;
this__9815.count = (this__9815.count - 1);
return tcoll__9816;
} else
{return tcoll__9816;
}
} else
{if((this__9815.root == null))
{return tcoll__9816;
} else
{var removed_leaf_QMARK___9817 = (new cljs.core.Box(false));
var node__9818 = this__9815.root.inode_without_BANG_(this__9815.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK___9817);
if((node__9818 === this__9815.root))
{} else
{this__9815.root = node__9818;
}
if(cljs.core.truth_((removed_leaf_QMARK___9817[0])))
{this__9815.count = (this__9815.count - 1);
} else
{}
return tcoll__9816;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9819 = this;
var tcoll__9820 = this;
if(this__9819.edit)
{this__9819.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9819.count,this__9819.root,this__9819.has_nil_QMARK_,this__9819.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9825 = node;
var stack__9826 = stack;
while(true){
if(!((t__9825 == null)))
{{
var G__9827 = ((ascending_QMARK_)?t__9825.left:t__9825.right);
var G__9828 = cljs.core.conj.cljs$lang$arity$2(stack__9826,t__9825);
t__9825 = G__9827;
stack__9826 = G__9828;
continue;
}
} else
{return stack__9826;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9829 = this;
var h__2975__auto____9830 = this__9829.__hash;
if(!((h__2975__auto____9830 == null)))
{return h__2975__auto____9830;
} else
{var h__2975__auto____9831 = cljs.core.hash_coll(coll);
this__9829.__hash = h__2975__auto____9831;
return h__2975__auto____9831;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9832 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9833 = this;
var this__9834 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9834], 0));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9835 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9836 = this;
if((this__9836.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return this__9836.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9837 = this;
return cljs.core.peek(this__9837.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9838 = this;
var t__9839 = cljs.core.first(this__9838.stack);
var next_stack__9840 = cljs.core.tree_map_seq_push(((this__9838.ascending_QMARK_)?t__9839.right:t__9839.left),cljs.core.next(this__9838.stack),this__9838.ascending_QMARK_);
if(!((next_stack__9840 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9840,this__9838.ascending_QMARK_,(this__9838.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9841 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9842 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9842.stack,this__9842.ascending_QMARK_,this__9842.cnt,this__9842.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9843 = this;
return this__9843.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if((function (){var and__3941__auto____9845 = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3941__auto____9845)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3941__auto____9845;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto____9847 = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3941__auto____9847)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3941__auto____9847;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9851 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,node.key,node.val) : f.call(null,init,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__9851))
{return cljs.core.deref(init__9851);
} else
{var init__9852 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init__9851):init__9851);
if(cljs.core.reduced_QMARK_(init__9852))
{return cljs.core.deref(init__9852);
} else
{var init__9853 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__9852):init__9852);
if(cljs.core.reduced_QMARK_(init__9853))
{return cljs.core.deref(init__9853);
} else
{return init__9853;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9856 = this;
var h__2975__auto____9857 = this__9856.__hash;
if(!((h__2975__auto____9857 == null)))
{return h__2975__auto____9857;
} else
{var h__2975__auto____9858 = cljs.core.hash_coll(coll);
this__9856.__hash = h__2975__auto____9858;
return h__2975__auto____9858;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9859 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9860 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9861 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9861.key,this__9861.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9909 = null;
var G__9909__2 = (function (this_sym9862,k){
var this__9864 = this;
var this_sym9862__9865 = this;
var node__9866 = this_sym9862__9865;
return node__9866.cljs$core$ILookup$_lookup$arity$2(node__9866,k);
});
var G__9909__3 = (function (this_sym9863,k,not_found){
var this__9864 = this;
var this_sym9863__9867 = this;
var node__9868 = this_sym9863__9867;
return node__9868.cljs$core$ILookup$_lookup$arity$3(node__9868,k,not_found);
});
G__9909 = function(this_sym9863,k,not_found){
switch(arguments.length){
case 2:
return G__9909__2.call(this,this_sym9863,k);
case 3:
return G__9909__3.call(this,this_sym9863,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9909;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9854,args9855){
var this__9869 = this;
return this_sym9854.call.apply(this_sym9854,[this_sym9854].concat(args9855.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9870 = this;
return cljs.core.PersistentVector.fromArray([this__9870.key,this__9870.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9871 = this;
return this__9871.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9872 = this;
return this__9872.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9873 = this;
var node__9874 = this;
return ins.balance_right(node__9874);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9875 = this;
var node__9876 = this;
return (new cljs.core.RedNode(this__9875.key,this__9875.val,this__9875.left,this__9875.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9877 = this;
var node__9878 = this;
return cljs.core.balance_right_del(this__9877.key,this__9877.val,this__9877.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9879 = this;
var node__9880 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9881 = this;
var node__9882 = this;
return cljs.core.tree_map_kv_reduce(node__9882,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9883 = this;
var node__9884 = this;
return cljs.core.balance_left_del(this__9883.key,this__9883.val,del,this__9883.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9885 = this;
var node__9886 = this;
return ins.balance_left(node__9886);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9887 = this;
var node__9888 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9888,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9910 = null;
var G__9910__0 = (function (){
var this__9889 = this;
var this__9891 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9891], 0));
});
G__9910 = function(){
switch(arguments.length){
case 0:
return G__9910__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9910;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9892 = this;
var node__9893 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9893,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9894 = this;
var node__9895 = this;
return node__9895;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9896 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9897 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9898 = this;
return cljs.core.list.cljs$lang$arity$2(this__9898.key,this__9898.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9899 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9900 = this;
return this__9900.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9901 = this;
return cljs.core.PersistentVector.fromArray([this__9901.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9902 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9902.key,this__9902.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9903 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9904 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9904.key,this__9904.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9905 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9906 = this;
if((n === 0))
{return this__9906.key;
} else
{if((n === 1))
{return this__9906.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9907 = this;
if((n === 0))
{return this__9907.key;
} else
{if((n === 1))
{return this__9907.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9908 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9913 = this;
var h__2975__auto____9914 = this__9913.__hash;
if(!((h__2975__auto____9914 == null)))
{return h__2975__auto____9914;
} else
{var h__2975__auto____9915 = cljs.core.hash_coll(coll);
this__9913.__hash = h__2975__auto____9915;
return h__2975__auto____9915;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9916 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9917 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9918 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9918.key,this__9918.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9966 = null;
var G__9966__2 = (function (this_sym9919,k){
var this__9921 = this;
var this_sym9919__9922 = this;
var node__9923 = this_sym9919__9922;
return node__9923.cljs$core$ILookup$_lookup$arity$2(node__9923,k);
});
var G__9966__3 = (function (this_sym9920,k,not_found){
var this__9921 = this;
var this_sym9920__9924 = this;
var node__9925 = this_sym9920__9924;
return node__9925.cljs$core$ILookup$_lookup$arity$3(node__9925,k,not_found);
});
G__9966 = function(this_sym9920,k,not_found){
switch(arguments.length){
case 2:
return G__9966__2.call(this,this_sym9920,k);
case 3:
return G__9966__3.call(this,this_sym9920,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9966;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9911,args9912){
var this__9926 = this;
return this_sym9911.call.apply(this_sym9911,[this_sym9911].concat(args9912.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9927 = this;
return cljs.core.PersistentVector.fromArray([this__9927.key,this__9927.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9928 = this;
return this__9928.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9929 = this;
return this__9929.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9930 = this;
var node__9931 = this;
return (new cljs.core.RedNode(this__9930.key,this__9930.val,this__9930.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9932 = this;
var node__9933 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9934 = this;
var node__9935 = this;
return (new cljs.core.RedNode(this__9934.key,this__9934.val,this__9934.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9936 = this;
var node__9937 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9938 = this;
var node__9939 = this;
return cljs.core.tree_map_kv_reduce(node__9939,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9940 = this;
var node__9941 = this;
return (new cljs.core.RedNode(this__9940.key,this__9940.val,del,this__9940.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9942 = this;
var node__9943 = this;
return (new cljs.core.RedNode(this__9942.key,this__9942.val,ins,this__9942.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9944 = this;
var node__9945 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9944.left))
{return (new cljs.core.RedNode(this__9944.key,this__9944.val,this__9944.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9944.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9944.right))
{return (new cljs.core.RedNode(this__9944.right.key,this__9944.right.val,(new cljs.core.BlackNode(this__9944.key,this__9944.val,this__9944.left,this__9944.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9944.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9945,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9967 = null;
var G__9967__0 = (function (){
var this__9946 = this;
var this__9948 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9948], 0));
});
G__9967 = function(){
switch(arguments.length){
case 0:
return G__9967__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9967;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9949 = this;
var node__9950 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9949.right))
{return (new cljs.core.RedNode(this__9949.key,this__9949.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9949.left,null)),this__9949.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9949.left))
{return (new cljs.core.RedNode(this__9949.left.key,this__9949.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9949.left.left,null)),(new cljs.core.BlackNode(this__9949.key,this__9949.val,this__9949.left.right,this__9949.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9950,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9951 = this;
var node__9952 = this;
return (new cljs.core.BlackNode(this__9951.key,this__9951.val,this__9951.left,this__9951.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9953 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9954 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9955 = this;
return cljs.core.list.cljs$lang$arity$2(this__9955.key,this__9955.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9956 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9957 = this;
return this__9957.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9958 = this;
return cljs.core.PersistentVector.fromArray([this__9958.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9959 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9959.key,this__9959.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9960 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9961 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9961.key,this__9961.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9962 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9963 = this;
if((n === 0))
{return this__9963.key;
} else
{if((n === 1))
{return this__9963.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9964 = this;
if((n === 0))
{return this__9964.key;
} else
{if((n === 1))
{return this__9964.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9965 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9971 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9971 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9971 < 0))
{var ins__9972 = tree_map_add(comp,tree.left,k,v,found);
if(!((ins__9972 == null)))
{return tree.add_left(ins__9972);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9973 = tree_map_add(comp,tree.right,k,v,found);
if(!((ins__9973 == null)))
{return tree.add_right(ins__9973);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app__9976 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9976))
{return (new cljs.core.RedNode(app__9976.key,app__9976.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9976.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9976.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9976,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9977 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9977))
{return (new cljs.core.RedNode(app__9977.key,app__9977.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9977.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9977.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9977,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9983 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9983 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c__9983 < 0))
{var del__9984 = tree_map_remove(comp,tree.left,k,found);
if((function (){var or__3943__auto____9985 = !((del__9984 == null));
if(or__3943__auto____9985)
{return or__3943__auto____9985;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del__9984,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9984,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9986 = tree_map_remove(comp,tree.right,k,found);
if((function (){var or__3943__auto____9987 = !((del__9986 == null));
if(or__3943__auto____9987)
{return or__3943__auto____9987;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del__9986);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9986,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9990 = tree.key;
var c__9991 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk__9990) : comp.call(null,k,tk__9990));
if((c__9991 === 0))
{return tree.replace(tk__9990,v,tree.left,tree.right);
} else
{if((c__9991 < 0))
{return tree.replace(tk__9990,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9990,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9994 = this;
var h__2975__auto____9995 = this__9994.__hash;
if(!((h__2975__auto____9995 == null)))
{return h__2975__auto____9995;
} else
{var h__2975__auto____9996 = cljs.core.hash_imap(coll);
this__9994.__hash = h__2975__auto____9996;
return h__2975__auto____9996;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9997 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9998 = this;
var n__9999 = coll.entry_at(k);
if(!((n__9999 == null)))
{return n__9999.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10000 = this;
var found__10001 = [null];
var t__10002 = cljs.core.tree_map_add(this__10000.comp,this__10000.tree,k,v,found__10001);
if((t__10002 == null))
{var found_node__10003 = cljs.core.nth.cljs$lang$arity$2(found__10001,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node__10003.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10000.comp,cljs.core.tree_map_replace(this__10000.comp,this__10000.tree,k,v),this__10000.cnt,this__10000.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10000.comp,t__10002.blacken(),(this__10000.cnt + 1),this__10000.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10004 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10038 = null;
var G__10038__2 = (function (this_sym10005,k){
var this__10007 = this;
var this_sym10005__10008 = this;
var coll__10009 = this_sym10005__10008;
return coll__10009.cljs$core$ILookup$_lookup$arity$2(coll__10009,k);
});
var G__10038__3 = (function (this_sym10006,k,not_found){
var this__10007 = this;
var this_sym10006__10010 = this;
var coll__10011 = this_sym10006__10010;
return coll__10011.cljs$core$ILookup$_lookup$arity$3(coll__10011,k,not_found);
});
G__10038 = function(this_sym10006,k,not_found){
switch(arguments.length){
case 2:
return G__10038__2.call(this,this_sym10006,k);
case 3:
return G__10038__3.call(this,this_sym10006,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10038;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9992,args9993){
var this__10012 = this;
return this_sym9992.call.apply(this_sym9992,[this_sym9992].concat(args9993.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10013 = this;
if(!((this__10013.tree == null)))
{return cljs.core.tree_map_kv_reduce(this__10013.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10014 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10015 = this;
if((this__10015.cnt > 0))
{return cljs.core.create_tree_map_seq(this__10015.tree,false,this__10015.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10016 = this;
var this__10017 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10017], 0));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10018 = this;
var coll__10019 = this;
var t__10020 = this__10018.tree;
while(true){
if(!((t__10020 == null)))
{var c__10021 = (this__10018.comp.cljs$lang$arity$2 ? this__10018.comp.cljs$lang$arity$2(k,t__10020.key) : this__10018.comp.call(null,k,t__10020.key));
if((c__10021 === 0))
{return t__10020;
} else
{if((c__10021 < 0))
{{
var G__10039 = t__10020.left;
t__10020 = G__10039;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10040 = t__10020.right;
t__10020 = G__10040;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10022 = this;
if((this__10022.cnt > 0))
{return cljs.core.create_tree_map_seq(this__10022.tree,ascending_QMARK_,this__10022.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10023 = this;
if((this__10023.cnt > 0))
{var stack__10024 = null;
var t__10025 = this__10023.tree;
while(true){
if(!((t__10025 == null)))
{var c__10026 = (this__10023.comp.cljs$lang$arity$2 ? this__10023.comp.cljs$lang$arity$2(k,t__10025.key) : this__10023.comp.call(null,k,t__10025.key));
if((c__10026 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack__10024,t__10025),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10026 < 0))
{{
var G__10041 = cljs.core.conj.cljs$lang$arity$2(stack__10024,t__10025);
var G__10042 = t__10025.left;
stack__10024 = G__10041;
t__10025 = G__10042;
continue;
}
} else
{{
var G__10043 = stack__10024;
var G__10044 = t__10025.right;
stack__10024 = G__10043;
t__10025 = G__10044;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10026 > 0))
{{
var G__10045 = cljs.core.conj.cljs$lang$arity$2(stack__10024,t__10025);
var G__10046 = t__10025.right;
stack__10024 = G__10045;
t__10025 = G__10046;
continue;
}
} else
{{
var G__10047 = stack__10024;
var G__10048 = t__10025.left;
stack__10024 = G__10047;
t__10025 = G__10048;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10024 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10024,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10027 = this;
return cljs.core.key(entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10028 = this;
return this__10028.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10029 = this;
if((this__10029.cnt > 0))
{return cljs.core.create_tree_map_seq(this__10029.tree,true,this__10029.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10030 = this;
return this__10030.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10031 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10032 = this;
return (new cljs.core.PersistentTreeMap(this__10032.comp,this__10032.tree,this__10032.cnt,meta,this__10032.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10033 = this;
return this__10033.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10034 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,this__10034.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10035 = this;
var found__10036 = [null];
var t__10037 = cljs.core.tree_map_remove(this__10035.comp,this__10035.tree,k,found__10036);
if((t__10037 == null))
{if((cljs.core.nth.cljs$lang$arity$2(found__10036,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10035.comp,null,0,this__10035.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10035.comp,t__10037.blacken(),(this__10035.cnt - 1),this__10035.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10051 = cljs.core.seq(keyvals);
var out__10052 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10051)
{{
var G__10053 = cljs.core.nnext(in__10051);
var G__10054 = cljs.core.assoc_BANG_(out__10052,cljs.core.first(in__10051),cljs.core.second(in__10051));
in__10051 = G__10053;
out__10052 = G__10054;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10052);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10055){
var keyvals = cljs.core.seq(arglist__10055);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10056){
var keyvals = cljs.core.seq(arglist__10056);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__10060 = [];
var obj__10061 = {};
var kvs__10062 = cljs.core.seq(keyvals);
while(true){
if(kvs__10062)
{ks__10060.push(cljs.core.first(kvs__10062));
(obj__10061[cljs.core.first(kvs__10062)] = cljs.core.second(kvs__10062));
{
var G__10063 = cljs.core.nnext(kvs__10062);
kvs__10062 = G__10063;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks__10060,obj__10061) : cljs.core.ObjMap.fromObject.call(null,ks__10060,obj__10061));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__10064){
var keyvals = cljs.core.seq(arglist__10064);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10067 = cljs.core.seq(keyvals);
var out__10068 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10067)
{{
var G__10069 = cljs.core.nnext(in__10067);
var G__10070 = cljs.core.assoc.cljs$lang$arity$3(out__10068,cljs.core.first(in__10067),cljs.core.second(in__10067));
in__10067 = G__10069;
out__10068 = G__10070;
continue;
}
} else
{return out__10068;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10071){
var keyvals = cljs.core.seq(arglist__10071);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10074 = cljs.core.seq(keyvals);
var out__10075 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10074)
{{
var G__10076 = cljs.core.nnext(in__10074);
var G__10077 = cljs.core.assoc.cljs$lang$arity$3(out__10075,cljs.core.first(in__10074),cljs.core.second(in__10074));
in__10074 = G__10076;
out__10075 = G__10077;
continue;
}
} else
{return out__10075;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10078){
var comparator = cljs.core.first(arglist__10078);
var keyvals = cljs.core.rest(arglist__10078);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__10079_SHARP_,p2__10080_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3943__auto____10082 = p1__10079_SHARP_;
if(cljs.core.truth_(or__3943__auto____10082))
{return or__3943__auto____10082;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10080_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10083){
var maps = cljs.core.seq(arglist__10083);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__10091 = (function (m,e){
var k__10089 = cljs.core.first(e);
var v__10090 = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k__10089))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__10089,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k__10089,null),v__10090) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k__10089,null),v__10090)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__10089,v__10090);
}
});
var merge2__10093 = (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry__10091,(function (){var or__3943__auto____10092 = m1;
if(cljs.core.truth_(or__3943__auto____10092))
{return or__3943__auto____10092;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$lang$arity$2(merge2__10093,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10094){
var f = cljs.core.first(arglist__10094);
var maps = cljs.core.rest(arglist__10094);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10099 = cljs.core.ObjMap.EMPTY;
var keys__10100 = cljs.core.seq(keyseq);
while(true){
if(keys__10100)
{var key__10101 = cljs.core.first(keys__10100);
var entry__10102 = cljs.core._lookup.cljs$lang$arity$3(map,key__10101,"\uFDD0'cljs.core/not-found");
{
var G__10103 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry__10102,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret__10099,key__10101,entry__10102):ret__10099);
var G__10104 = cljs.core.next(keys__10100);
ret__10099 = G__10103;
keys__10100 = G__10104;
continue;
}
} else
{return ret__10099;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10108 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(this__10108.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10109 = this;
var h__2975__auto____10110 = this__10109.__hash;
if(!((h__2975__auto____10110 == null)))
{return h__2975__auto____10110;
} else
{var h__2975__auto____10111 = cljs.core.hash_iset(coll);
this__10109.__hash = h__2975__auto____10111;
return h__2975__auto____10111;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10112 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10113 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__10113.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10134 = null;
var G__10134__2 = (function (this_sym10114,k){
var this__10116 = this;
var this_sym10114__10117 = this;
var coll__10118 = this_sym10114__10117;
return coll__10118.cljs$core$ILookup$_lookup$arity$2(coll__10118,k);
});
var G__10134__3 = (function (this_sym10115,k,not_found){
var this__10116 = this;
var this_sym10115__10119 = this;
var coll__10120 = this_sym10115__10119;
return coll__10120.cljs$core$ILookup$_lookup$arity$3(coll__10120,k,not_found);
});
G__10134 = function(this_sym10115,k,not_found){
switch(arguments.length){
case 2:
return G__10134__2.call(this,this_sym10115,k);
case 3:
return G__10134__3.call(this,this_sym10115,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10134;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10106,args10107){
var this__10121 = this;
return this_sym10106.call.apply(this_sym10106,[this_sym10106].concat(args10107.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10122 = this;
return (new cljs.core.PersistentHashSet(this__10122.meta,cljs.core.assoc.cljs$lang$arity$3(this__10122.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10123 = this;
var this__10124 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10124], 0));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10125 = this;
return cljs.core.keys(this__10125.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10126 = this;
return (new cljs.core.PersistentHashSet(this__10126.meta,cljs.core.dissoc.cljs$lang$arity$2(this__10126.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10127 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10128 = this;
var and__3941__auto____10129 = cljs.core.set_QMARK_(other);
if(and__3941__auto____10129)
{var and__3941__auto____10130 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3941__auto____10130)
{return cljs.core.every_QMARK_((function (p1__10105_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__10105_SHARP_);
}),other);
} else
{return and__3941__auto____10130;
}
} else
{return and__3941__auto____10129;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10131 = this;
return (new cljs.core.PersistentHashSet(meta,this__10131.hash_map,this__10131.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10132 = this;
return this__10132.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10133 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,this__10133.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__10135 = cljs.core.count(items);
var i__10136 = 0;
var out__10137 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__10136 < len__10135))
{{
var G__10138 = (i__10136 + 1);
var G__10139 = cljs.core.conj_BANG_(out__10137,(items[i__10136]));
i__10136 = G__10138;
out__10137 = G__10139;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10137);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10157 = null;
var G__10157__2 = (function (this_sym10143,k){
var this__10145 = this;
var this_sym10143__10146 = this;
var tcoll__10147 = this_sym10143__10146;
if((cljs.core._lookup.cljs$lang$arity$3(this__10145.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10157__3 = (function (this_sym10144,k,not_found){
var this__10145 = this;
var this_sym10144__10148 = this;
var tcoll__10149 = this_sym10144__10148;
if((cljs.core._lookup.cljs$lang$arity$3(this__10145.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10157 = function(this_sym10144,k,not_found){
switch(arguments.length){
case 2:
return G__10157__2.call(this,this_sym10144,k);
case 3:
return G__10157__3.call(this,this_sym10144,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10157;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10141,args10142){
var this__10150 = this;
return this_sym10141.call.apply(this_sym10141,[this_sym10141].concat(args10142.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10151 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10152 = this;
if((cljs.core._lookup.cljs$lang$arity$3(this__10152.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10153 = this;
return cljs.core.count(this__10153.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10154 = this;
this__10154.transient_map = cljs.core.dissoc_BANG_(this__10154.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10155 = this;
this__10155.transient_map = cljs.core.assoc_BANG_(this__10155.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10156 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(this__10156.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10160 = this;
var h__2975__auto____10161 = this__10160.__hash;
if(!((h__2975__auto____10161 == null)))
{return h__2975__auto____10161;
} else
{var h__2975__auto____10162 = cljs.core.hash_iset(coll);
this__10160.__hash = h__2975__auto____10162;
return h__2975__auto____10162;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10163 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10164 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__10164.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10190 = null;
var G__10190__2 = (function (this_sym10165,k){
var this__10167 = this;
var this_sym10165__10168 = this;
var coll__10169 = this_sym10165__10168;
return coll__10169.cljs$core$ILookup$_lookup$arity$2(coll__10169,k);
});
var G__10190__3 = (function (this_sym10166,k,not_found){
var this__10167 = this;
var this_sym10166__10170 = this;
var coll__10171 = this_sym10166__10170;
return coll__10171.cljs$core$ILookup$_lookup$arity$3(coll__10171,k,not_found);
});
G__10190 = function(this_sym10166,k,not_found){
switch(arguments.length){
case 2:
return G__10190__2.call(this,this_sym10166,k);
case 3:
return G__10190__3.call(this,this_sym10166,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10190;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10158,args10159){
var this__10172 = this;
return this_sym10158.call.apply(this_sym10158,[this_sym10158].concat(args10159.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10173 = this;
return (new cljs.core.PersistentTreeSet(this__10173.meta,cljs.core.assoc.cljs$lang$arity$3(this__10173.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10174 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(this__10174.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10175 = this;
var this__10176 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10176], 0));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10177 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(this__10177.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10178 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(this__10178.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10179 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10180 = this;
return cljs.core._comparator(this__10180.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10181 = this;
return cljs.core.keys(this__10181.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10182 = this;
return (new cljs.core.PersistentTreeSet(this__10182.meta,cljs.core.dissoc.cljs$lang$arity$2(this__10182.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10183 = this;
return cljs.core.count(this__10183.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10184 = this;
var and__3941__auto____10185 = cljs.core.set_QMARK_(other);
if(and__3941__auto____10185)
{var and__3941__auto____10186 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3941__auto____10186)
{return cljs.core.every_QMARK_((function (p1__10140_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__10140_SHARP_);
}),other);
} else
{return and__3941__auto____10186;
}
} else
{return and__3941__auto____10185;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10187 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10187.tree_map,this__10187.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10188 = this;
return this__10188.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10189 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,this__10189.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10195__delegate = function (keys){
var in__10193 = cljs.core.seq(keys);
var out__10194 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in__10193))
{{
var G__10196 = cljs.core.next(in__10193);
var G__10197 = cljs.core.conj_BANG_(out__10194,cljs.core.first(in__10193));
in__10193 = G__10196;
out__10194 = G__10197;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10194);
}
break;
}
};
var G__10195 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10195__delegate.call(this, keys);
};
G__10195.cljs$lang$maxFixedArity = 0;
G__10195.cljs$lang$applyTo = (function (arglist__10198){
var keys = cljs.core.seq(arglist__10198);;
return G__10195__delegate(keys);
});
G__10195.cljs$lang$arity$variadic = G__10195__delegate;
return G__10195;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10199){
var keys = cljs.core.seq(arglist__10199);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10201){
var comparator = cljs.core.first(arglist__10201);
var keys = cljs.core.rest(arglist__10201);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n__10207 = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__4090__auto____10208 = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__4090__auto____10208))
{var e__10209 = temp__4090__auto____10208;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e__10209));
} else
{return v;
}
}),coll,cljs.core.take(n__10207,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__10200_SHARP_){
var temp__4090__auto____10210 = cljs.core.find(smap,p1__10200_SHARP_);
if(cljs.core.truth_(temp__4090__auto____10210))
{var e__10211 = temp__4090__auto____10210;
return cljs.core.second(e__10211);
} else
{return p1__10200_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10241 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10234,seen){
while(true){
var vec__10235__10236 = p__10234;
var f__10237 = cljs.core.nth.cljs$lang$arity$3(vec__10235__10236,0,null);
var xs__10238 = vec__10235__10236;
var temp__4092__auto____10239 = cljs.core.seq(xs__10238);
if(temp__4092__auto____10239)
{var s__10240 = temp__4092__auto____10239;
if(cljs.core.contains_QMARK_(seen,f__10237))
{{
var G__10242 = cljs.core.rest(s__10240);
var G__10243 = seen;
p__10234 = G__10242;
seen = G__10243;
continue;
}
} else
{return cljs.core.cons(f__10237,step(cljs.core.rest(s__10240),cljs.core.conj.cljs$lang$arity$2(seen,f__10237)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return (step__10241.cljs$lang$arity$2 ? step__10241.cljs$lang$arity$2(coll,cljs.core.PersistentHashSet.EMPTY) : step__10241.call(null,coll,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.butlast = (function butlast(s){
var ret__10246 = cljs.core.PersistentVector.EMPTY;
var s__10247 = s;
while(true){
if(cljs.core.next(s__10247))
{{
var G__10248 = cljs.core.conj.cljs$lang$arity$2(ret__10246,cljs.core.first(s__10247));
var G__10249 = cljs.core.next(s__10247);
ret__10246 = G__10248;
s__10247 = G__10249;
continue;
}
} else
{return cljs.core.seq(ret__10246);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if((function (){var or__3943__auto____10252 = cljs.core.keyword_QMARK_(x);
if(or__3943__auto____10252)
{return or__3943__auto____10252;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10253 = x.lastIndexOf("/");
if((i__10253 < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i__10253 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3943__auto____10256 = cljs.core.keyword_QMARK_(x);
if(or__3943__auto____10256)
{return or__3943__auto____10256;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10257 = x.lastIndexOf("/");
if((i__10257 > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i__10257);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10264 = cljs.core.ObjMap.EMPTY;
var ks__10265 = cljs.core.seq(keys);
var vs__10266 = cljs.core.seq(vals);
while(true){
if((function (){var and__3941__auto____10267 = ks__10265;
if(and__3941__auto____10267)
{return vs__10266;
} else
{return and__3941__auto____10267;
}
})())
{{
var G__10268 = cljs.core.assoc.cljs$lang$arity$3(map__10264,cljs.core.first(ks__10265),cljs.core.first(vs__10266));
var G__10269 = cljs.core.next(ks__10265);
var G__10270 = cljs.core.next(vs__10266);
map__10264 = G__10268;
ks__10265 = G__10269;
vs__10266 = G__10270;
continue;
}
} else
{return map__10264;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10273__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10258_SHARP_,p2__10259_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__10258_SHARP_,p2__10259_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10273 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10273__delegate.call(this, k, x, y, more);
};
G__10273.cljs$lang$maxFixedArity = 3;
G__10273.cljs$lang$applyTo = (function (arglist__10274){
var k = cljs.core.first(arglist__10274);
var x = cljs.core.first(cljs.core.next(arglist__10274));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10274)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10274)));
return G__10273__delegate(k, x, y, more);
});
G__10273.cljs$lang$arity$variadic = G__10273__delegate;
return G__10273;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10275__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10271_SHARP_,p2__10272_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__10271_SHARP_,p2__10272_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10275 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10275__delegate.call(this, k, x, y, more);
};
G__10275.cljs$lang$maxFixedArity = 3;
G__10275.cljs$lang$applyTo = (function (arglist__10276){
var k = cljs.core.first(arglist__10276);
var x = cljs.core.first(cljs.core.next(arglist__10276));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10276)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10276)));
return G__10275__delegate(k, x, y, more);
});
G__10275.cljs$lang$arity$variadic = G__10275__delegate;
return G__10275;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10279 = cljs.core.seq(coll);
if(temp__4092__auto____10279)
{var s__10280 = temp__4092__auto____10279;
return cljs.core.cons(cljs.core.take(n,s__10280),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__10280)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10283 = cljs.core.seq(coll);
if(temp__4092__auto____10283)
{var s__10284 = temp__4092__auto____10283;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__10284)) : pred.call(null,cljs.core.first(s__10284)))))
{return cljs.core.cons(cljs.core.first(s__10284),take_while(pred,cljs.core.rest(s__10284)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10286 = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp__10286.cljs$lang$arity$2 ? comp__10286.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10286.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp__10286.cljs$lang$arity$2 ? comp__10286.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10286.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10298 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto____10299 = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__4092__auto____10299))
{var vec__10300__10301 = temp__4092__auto____10299;
var e__10302 = cljs.core.nth.cljs$lang$arity$3(vec__10300__10301,0,null);
var s__10303 = vec__10300__10301;
if(cljs.core.truth_((include__10298.cljs$lang$arity$1 ? include__10298.cljs$lang$arity$1(e__10302) : include__10298.call(null,e__10302))))
{return s__10303;
} else
{return cljs.core.next(s__10303);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10298,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10304 = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto____10304))
{var vec__10305__10306 = temp__4092__auto____10304;
var e__10307 = cljs.core.nth.cljs$lang$arity$3(vec__10305__10306,0,null);
var s__10308 = vec__10305__10306;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e__10307))?s__10308:cljs.core.next(s__10308)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10320 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto____10321 = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__4092__auto____10321))
{var vec__10322__10323 = temp__4092__auto____10321;
var e__10324 = cljs.core.nth.cljs$lang$arity$3(vec__10322__10323,0,null);
var s__10325 = vec__10322__10323;
if(cljs.core.truth_((include__10320.cljs$lang$arity$1 ? include__10320.cljs$lang$arity$1(e__10324) : include__10320.call(null,e__10324))))
{return s__10325;
} else
{return cljs.core.next(s__10325);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10320,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10326 = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto____10326))
{var vec__10327__10328 = temp__4092__auto____10326;
var e__10329 = cljs.core.nth.cljs$lang$arity$3(vec__10327__10328,0,null);
var s__10330 = vec__10327__10328;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e__10329))?s__10330:cljs.core.next(s__10330)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10331 = this;
var h__2975__auto____10332 = this__10331.__hash;
if(!((h__2975__auto____10332 == null)))
{return h__2975__auto____10332;
} else
{var h__2975__auto____10333 = cljs.core.hash_coll(rng);
this__10331.__hash = h__2975__auto____10333;
return h__2975__auto____10333;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10334 = this;
if((this__10334.step > 0))
{if(((this__10334.start + this__10334.step) < this__10334.end))
{return (new cljs.core.Range(this__10334.meta,(this__10334.start + this__10334.step),this__10334.end,this__10334.step,null));
} else
{return null;
}
} else
{if(((this__10334.start + this__10334.step) > this__10334.end))
{return (new cljs.core.Range(this__10334.meta,(this__10334.start + this__10334.step),this__10334.end,this__10334.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10335 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10336 = this;
var this__10337 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10337], 0));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10338 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10339 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10340 = this;
if((this__10340.step > 0))
{if((this__10340.start < this__10340.end))
{return rng;
} else
{return null;
}
} else
{if((this__10340.start > this__10340.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10341 = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10341.end - this__10341.start) / this__10341.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10342 = this;
return this__10342.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10343 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10343.meta,(this__10343.start + this__10343.step),this__10343.end,this__10343.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10344 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10345 = this;
return (new cljs.core.Range(meta,this__10345.start,this__10345.end,this__10345.step,this__10345.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10346 = this;
return this__10346.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10347 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10347.start + (n * this__10347.step));
} else
{if((function (){var and__3941__auto____10348 = (this__10347.start > this__10347.end);
if(and__3941__auto____10348)
{return (this__10347.step === 0);
} else
{return and__3941__auto____10348;
}
})())
{return this__10347.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10349 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10349.start + (n * this__10349.step));
} else
{if((function (){var and__3941__auto____10350 = (this__10349.start > this__10349.end);
if(and__3941__auto____10350)
{return (this__10349.step === 0);
} else
{return and__3941__auto____10350;
}
})())
{return this__10349.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10351 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__10351.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10354 = cljs.core.seq(coll);
if(temp__4092__auto____10354)
{var s__10355 = temp__4092__auto____10354;
return cljs.core.cons(cljs.core.first(s__10355),take_nth(n,cljs.core.drop(n,s__10355)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10362 = cljs.core.seq(coll);
if(temp__4092__auto____10362)
{var s__10363 = temp__4092__auto____10362;
var fst__10364 = cljs.core.first(s__10363);
var fv__10365 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst__10364) : f.call(null,fst__10364));
var run__10366 = cljs.core.cons(fst__10364,cljs.core.take_while((function (p1__10356_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv__10365,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__10356_SHARP_) : f.call(null,p1__10356_SHARP_)));
}),cljs.core.next(s__10363)));
return cljs.core.cons(run__10366,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__10366),s__10363))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____10381 = cljs.core.seq(coll);
if(temp__4090__auto____10381)
{var s__10382 = temp__4090__auto____10381;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s__10382),cljs.core.rest(s__10382));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10383 = cljs.core.seq(coll);
if(temp__4092__auto____10383)
{var s__10384 = temp__4092__auto____10383;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s__10384)) : f.call(null,init,cljs.core.first(s__10384))),cljs.core.rest(s__10384));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10387 = null;
var G__10387__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__10387__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__10387__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__10387__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__10387__4 = (function() { 
var G__10388__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__10388 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10388__delegate.call(this, x, y, z, args);
};
G__10388.cljs$lang$maxFixedArity = 3;
G__10388.cljs$lang$applyTo = (function (arglist__10389){
var x = cljs.core.first(arglist__10389);
var y = cljs.core.first(cljs.core.next(arglist__10389));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10389)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10389)));
return G__10388__delegate(x, y, z, args);
});
G__10388.cljs$lang$arity$variadic = G__10388__delegate;
return G__10388;
})()
;
G__10387 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10387__0.call(this);
case 1:
return G__10387__1.call(this,x);
case 2:
return G__10387__2.call(this,x,y);
case 3:
return G__10387__3.call(this,x,y,z);
default:
return G__10387__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10387.cljs$lang$maxFixedArity = 3;
G__10387.cljs$lang$applyTo = G__10387__4.cljs$lang$applyTo;
return G__10387;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10390 = null;
var G__10390__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__10390__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__10390__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__10390__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__10390__4 = (function() { 
var G__10391__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__10391 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10391__delegate.call(this, x, y, z, args);
};
G__10391.cljs$lang$maxFixedArity = 3;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var x = cljs.core.first(arglist__10392);
var y = cljs.core.first(cljs.core.next(arglist__10392));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10392)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10392)));
return G__10391__delegate(x, y, z, args);
});
G__10391.cljs$lang$arity$variadic = G__10391__delegate;
return G__10391;
})()
;
G__10390 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10390__0.call(this);
case 1:
return G__10390__1.call(this,x);
case 2:
return G__10390__2.call(this,x,y);
case 3:
return G__10390__3.call(this,x,y,z);
default:
return G__10390__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10390.cljs$lang$maxFixedArity = 3;
G__10390.cljs$lang$applyTo = G__10390__4.cljs$lang$applyTo;
return G__10390;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10393 = null;
var G__10393__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__10393__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__10393__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__10393__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__10393__4 = (function() { 
var G__10394__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__10394 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10394__delegate.call(this, x, y, z, args);
};
G__10394.cljs$lang$maxFixedArity = 3;
G__10394.cljs$lang$applyTo = (function (arglist__10395){
var x = cljs.core.first(arglist__10395);
var y = cljs.core.first(cljs.core.next(arglist__10395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10395)));
return G__10394__delegate(x, y, z, args);
});
G__10394.cljs$lang$arity$variadic = G__10394__delegate;
return G__10394;
})()
;
G__10393 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10393__0.call(this);
case 1:
return G__10393__1.call(this,x);
case 2:
return G__10393__2.call(this,x,y);
case 3:
return G__10393__3.call(this,x,y,z);
default:
return G__10393__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10393.cljs$lang$maxFixedArity = 3;
G__10393.cljs$lang$applyTo = G__10393__4.cljs$lang$applyTo;
return G__10393;
})()
});
var juxt__4 = (function() { 
var G__10396__delegate = function (f,g,h,fs){
var fs__10386 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__10397 = null;
var G__10397__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10367_SHARP_,p2__10368_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10367_SHARP_,(p2__10368_SHARP_.cljs$lang$arity$0 ? p2__10368_SHARP_.cljs$lang$arity$0() : p2__10368_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__10386);
});
var G__10397__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10369_SHARP_,p2__10370_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10369_SHARP_,(p2__10370_SHARP_.cljs$lang$arity$1 ? p2__10370_SHARP_.cljs$lang$arity$1(x) : p2__10370_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__10386);
});
var G__10397__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10371_SHARP_,p2__10372_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10371_SHARP_,(p2__10372_SHARP_.cljs$lang$arity$2 ? p2__10372_SHARP_.cljs$lang$arity$2(x,y) : p2__10372_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__10386);
});
var G__10397__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10373_SHARP_,p2__10374_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10373_SHARP_,(p2__10374_SHARP_.cljs$lang$arity$3 ? p2__10374_SHARP_.cljs$lang$arity$3(x,y,z) : p2__10374_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__10386);
});
var G__10397__4 = (function() { 
var G__10398__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10375_SHARP_,p2__10376_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10375_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__10376_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10386);
};
var G__10398 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10398__delegate.call(this, x, y, z, args);
};
G__10398.cljs$lang$maxFixedArity = 3;
G__10398.cljs$lang$applyTo = (function (arglist__10399){
var x = cljs.core.first(arglist__10399);
var y = cljs.core.first(cljs.core.next(arglist__10399));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10399)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10399)));
return G__10398__delegate(x, y, z, args);
});
G__10398.cljs$lang$arity$variadic = G__10398__delegate;
return G__10398;
})()
;
G__10397 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10397__0.call(this);
case 1:
return G__10397__1.call(this,x);
case 2:
return G__10397__2.call(this,x,y);
case 3:
return G__10397__3.call(this,x,y,z);
default:
return G__10397__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10397.cljs$lang$maxFixedArity = 3;
G__10397.cljs$lang$applyTo = G__10397__4.cljs$lang$applyTo;
return G__10397;
})()
};
var G__10396 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10396__delegate.call(this, f, g, h, fs);
};
G__10396.cljs$lang$maxFixedArity = 3;
G__10396.cljs$lang$applyTo = (function (arglist__10400){
var f = cljs.core.first(arglist__10400);
var g = cljs.core.first(cljs.core.next(arglist__10400));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10400)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10400)));
return G__10396__delegate(f, g, h, fs);
});
G__10396.cljs$lang$arity$variadic = G__10396__delegate;
return G__10396;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__10403 = cljs.core.next(coll);
coll = G__10403;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____10402 = cljs.core.seq(coll);
if(and__3941__auto____10402)
{return (n > 0);
} else
{return and__3941__auto____10402;
}
})()))
{{
var G__10404 = (n - 1);
var G__10405 = cljs.core.next(coll);
n = G__10404;
coll = G__10405;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10407 = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches__10407),s))
{if((cljs.core.count(matches__10407) === 1))
{return cljs.core.first(matches__10407);
} else
{return cljs.core.vec(matches__10407);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10409 = re.exec(s);
if((matches__10409 == null))
{return null;
} else
{if((cljs.core.count(matches__10409) === 1))
{return cljs.core.first(matches__10409);
} else
{return cljs.core.vec(matches__10409);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10414 = cljs.core.re_find(re,s);
var match_idx__10415 = s.search(re);
var match_str__10416 = ((cljs.core.coll_QMARK_(match_data__10414))?cljs.core.first(match_data__10414):match_data__10414);
var post_match__10417 = cljs.core.subs.cljs$lang$arity$2(s,(match_idx__10415 + cljs.core.count(match_str__10416)));
if(cljs.core.truth_(match_data__10414))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__10414,re_seq(re,post_match__10417));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10424__10425 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10426 = cljs.core.nth.cljs$lang$arity$3(vec__10424__10425,0,null);
var flags__10427 = cljs.core.nth.cljs$lang$arity$3(vec__10424__10425,1,null);
var pattern__10428 = cljs.core.nth.cljs$lang$arity$3(vec__10424__10425,2,null);
return (new RegExp(pattern__10428,flags__10427));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__10418_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__10418_SHARP_,opts) : print_one.call(null,p1__10418_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3941__auto____10438 = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto____10438))
{var and__3941__auto____10442 = (function (){var G__10439__10440 = obj;
if(G__10439__10440)
{if((function (){var or__3943__auto____10441 = (G__10439__10440.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____10441)
{return or__3943__auto____10441;
} else
{return G__10439__10440.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10439__10440.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10439__10440);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10439__10440);
}
})();
if(cljs.core.truth_(and__3941__auto____10442))
{return cljs.core.meta(obj);
} else
{return and__3941__auto____10442;
}
} else
{return and__3941__auto____10438;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(((function (){var and__3941__auto____10443 = !((obj == null));
if(and__3941__auto____10443)
{return obj.cljs$lang$type;
} else
{return and__3941__auto____10443;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10444__10445 = obj;
if(G__10444__10445)
{if((function (){var or__3943__auto____10446 = (G__10444__10445.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto____10446)
{return or__3943__auto____10446;
} else
{return G__10444__10445.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10444__10445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10444__10445);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10444__10445);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10466 = (new goog.string.StringBuffer());
var G__10467__10468 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10467__10468)
{var string__10469 = cljs.core.first(G__10467__10468);
var G__10467__10470 = G__10467__10468;
while(true){
sb__10466.append(string__10469);
var temp__4092__auto____10471 = cljs.core.next(G__10467__10470);
if(temp__4092__auto____10471)
{var G__10467__10472 = temp__4092__auto____10471;
{
var G__10485 = cljs.core.first(G__10467__10472);
var G__10486 = G__10467__10472;
string__10469 = G__10485;
G__10467__10470 = G__10486;
continue;
}
} else
{}
break;
}
} else
{}
var G__10473__10474 = cljs.core.seq(cljs.core.next(objs));
if(G__10473__10474)
{var obj__10475 = cljs.core.first(G__10473__10474);
var G__10473__10476 = G__10473__10474;
while(true){
sb__10466.append(" ");
var G__10477__10478 = cljs.core.seq(cljs.core.pr_seq(obj__10475,opts));
if(G__10477__10478)
{var string__10479 = cljs.core.first(G__10477__10478);
var G__10477__10480 = G__10477__10478;
while(true){
sb__10466.append(string__10479);
var temp__4092__auto____10481 = cljs.core.next(G__10477__10480);
if(temp__4092__auto____10481)
{var G__10477__10482 = temp__4092__auto____10481;
{
var G__10487 = cljs.core.first(G__10477__10482);
var G__10488 = G__10477__10482;
string__10479 = G__10487;
G__10477__10480 = G__10488;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10483 = cljs.core.next(G__10473__10476);
if(temp__4092__auto____10483)
{var G__10473__10484 = temp__4092__auto____10483;
{
var G__10489 = cljs.core.first(G__10473__10484);
var G__10490 = G__10473__10484;
obj__10475 = G__10489;
G__10473__10476 = G__10490;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10466;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb(objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10492 = cljs.core.pr_sb(objs,opts);
sb__10492.append("\n");
return [cljs.core.str(sb__10492)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10511__10512 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10511__10512)
{var string__10513 = cljs.core.first(G__10511__10512);
var G__10511__10514 = G__10511__10512;
while(true){
cljs.core.string_print(string__10513);
var temp__4092__auto____10515 = cljs.core.next(G__10511__10514);
if(temp__4092__auto____10515)
{var G__10511__10516 = temp__4092__auto____10515;
{
var G__10529 = cljs.core.first(G__10511__10516);
var G__10530 = G__10511__10516;
string__10513 = G__10529;
G__10511__10514 = G__10530;
continue;
}
} else
{}
break;
}
} else
{}
var G__10517__10518 = cljs.core.seq(cljs.core.next(objs));
if(G__10517__10518)
{var obj__10519 = cljs.core.first(G__10517__10518);
var G__10517__10520 = G__10517__10518;
while(true){
cljs.core.string_print(" ");
var G__10521__10522 = cljs.core.seq(cljs.core.pr_seq(obj__10519,opts));
if(G__10521__10522)
{var string__10523 = cljs.core.first(G__10521__10522);
var G__10521__10524 = G__10521__10522;
while(true){
cljs.core.string_print(string__10523);
var temp__4092__auto____10525 = cljs.core.next(G__10521__10524);
if(temp__4092__auto____10525)
{var G__10521__10526 = temp__4092__auto____10525;
{
var G__10531 = cljs.core.first(G__10521__10526);
var G__10532 = G__10521__10526;
string__10523 = G__10531;
G__10521__10524 = G__10532;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10527 = cljs.core.next(G__10517__10520);
if(temp__4092__auto____10527)
{var G__10517__10528 = temp__4092__auto____10527;
{
var G__10533 = cljs.core.first(G__10517__10528);
var G__10534 = G__10517__10528;
obj__10519 = G__10533;
G__10517__10520 = G__10534;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10535){
var objs = cljs.core.seq(arglist__10535);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10536){
var objs = cljs.core.seq(arglist__10536);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10537){
var objs = cljs.core.seq(arglist__10537);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10538){
var objs = cljs.core.seq(arglist__10538);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10539){
var objs = cljs.core.seq(arglist__10539);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10540){
var objs = cljs.core.seq(arglist__10540);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10541){
var objs = cljs.core.seq(arglist__10541);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10542){
var objs = cljs.core.seq(arglist__10542);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10543){
var fmt = cljs.core.first(arglist__10543);
var args = cljs.core.rest(arglist__10543);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10544 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10544,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10545 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10545,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10546 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10546,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto____10547 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto____10547))
{var nspc__10548 = temp__4092__auto____10547;
return [cljs.core.str(nspc__10548),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__4092__auto____10549 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__4092__auto____10549))
{var nspc__10550 = temp__4092__auto____10549;
return [cljs.core.str(nspc__10550),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10551 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10551,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10553 = (function (n,len){
var ns__10552 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns__10552) < len))
{{
var G__10555 = [cljs.core.str("0"),cljs.core.str(ns__10552)].join('');
ns__10552 = G__10555;
continue;
}
} else
{return ns__10552;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2((d.getUTCMonth() + 1),2) : normalize__10553.call(null,(d.getUTCMonth() + 1),2))),cljs.core.str("-"),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2(d.getUTCDate(),2) : normalize__10553.call(null,d.getUTCDate(),2))),cljs.core.str("T"),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2(d.getUTCHours(),2) : normalize__10553.call(null,d.getUTCHours(),2))),cljs.core.str(":"),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2(d.getUTCMinutes(),2) : normalize__10553.call(null,d.getUTCMinutes(),2))),cljs.core.str(":"),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2(d.getUTCSeconds(),2) : normalize__10553.call(null,d.getUTCSeconds(),2))),cljs.core.str("."),cljs.core.str((normalize__10553.cljs$lang$arity$2 ? normalize__10553.cljs$lang$arity$2(d.getUTCMilliseconds(),3) : normalize__10553.call(null,d.getUTCMilliseconds(),3))),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10554 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10554,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10556 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10557 = this;
var G__10558__10559 = cljs.core.seq(this__10557.watches);
if(G__10558__10559)
{var G__10561__10563 = cljs.core.first(G__10558__10559);
var vec__10562__10564 = G__10561__10563;
var key__10565 = cljs.core.nth.cljs$lang$arity$3(vec__10562__10564,0,null);
var f__10566 = cljs.core.nth.cljs$lang$arity$3(vec__10562__10564,1,null);
var G__10558__10567 = G__10558__10559;
var G__10561__10568 = G__10561__10563;
var G__10558__10569 = G__10558__10567;
while(true){
var vec__10570__10571 = G__10561__10568;
var key__10572 = cljs.core.nth.cljs$lang$arity$3(vec__10570__10571,0,null);
var f__10573 = cljs.core.nth.cljs$lang$arity$3(vec__10570__10571,1,null);
var G__10558__10574 = G__10558__10569;
(f__10573.cljs$lang$arity$4 ? f__10573.cljs$lang$arity$4(key__10572,this$,oldval,newval) : f__10573.call(null,key__10572,this$,oldval,newval));
var temp__4092__auto____10575 = cljs.core.next(G__10558__10574);
if(temp__4092__auto____10575)
{var G__10558__10576 = temp__4092__auto____10575;
{
var G__10583 = cljs.core.first(G__10558__10576);
var G__10584 = G__10558__10576;
G__10561__10568 = G__10583;
G__10558__10569 = G__10584;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10577 = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(this__10577.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10578 = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(this__10578.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10579 = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(this__10579.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10580 = this;
return this__10580.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10581 = this;
return this__10581.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10582 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10596__delegate = function (x,p__10585){
var map__10591__10592 = p__10585;
var map__10591__10593 = ((cljs.core.seq_QMARK_(map__10591__10592))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10591__10592):map__10591__10592);
var validator__10594 = cljs.core._lookup.cljs$lang$arity$3(map__10591__10593,"\uFDD0'validator",null);
var meta__10595 = cljs.core._lookup.cljs$lang$arity$3(map__10591__10593,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10595,validator__10594,null));
};
var G__10596 = function (x,var_args){
var p__10585 = null;
if (goog.isDef(var_args)) {
  p__10585 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10596__delegate.call(this, x, p__10585);
};
G__10596.cljs$lang$maxFixedArity = 1;
G__10596.cljs$lang$applyTo = (function (arglist__10597){
var x = cljs.core.first(arglist__10597);
var p__10585 = cljs.core.rest(arglist__10597);
return G__10596__delegate(x, p__10585);
});
G__10596.cljs$lang$arity$variadic = G__10596__delegate;
return G__10596;
})()
;
atom = function(x,var_args){
var p__10585 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto____10601 = a.validator;
if(cljs.core.truth_(temp__4092__auto____10601))
{var validate__10602 = temp__4092__auto____10601;
if(cljs.core.truth_((validate__10602.cljs$lang$arity$1 ? validate__10602.cljs$lang$arity$1(new_value) : validate__10602.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))], 0)))].join('')));
}
} else
{}
var old_value__10603 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value__10603,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__10604__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__10604 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10604__delegate.call(this, a, f, x, y, z, more);
};
G__10604.cljs$lang$maxFixedArity = 5;
G__10604.cljs$lang$applyTo = (function (arglist__10605){
var a = cljs.core.first(arglist__10605);
var f = cljs.core.first(cljs.core.next(arglist__10605));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10605)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10605))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10605)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10605)))));
return G__10604__delegate(a, f, x, y, z, more);
});
G__10604.cljs$lang$arity$variadic = G__10604__delegate;
return G__10604;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10606){
var iref = cljs.core.first(arglist__10606);
var f = cljs.core.first(cljs.core.next(arglist__10606));
var args = cljs.core.rest(cljs.core.next(arglist__10606));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10607 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref(this__10607.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10608 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(this__10608.state,(function (p__10609){
var map__10610__10611 = p__10609;
var map__10610__10612 = ((cljs.core.seq_QMARK_(map__10610__10611))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10610__10611):map__10610__10611);
var curr_state__10613 = map__10610__10612;
var done__10614 = cljs.core._lookup.cljs$lang$arity$3(map__10610__10612,"\uFDD0'done",null);
if(cljs.core.truth_(done__10614))
{return curr_state__10613;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":(this__10608.f.cljs$lang$arity$0 ? this__10608.f.cljs$lang$arity$0() : this__10608.f.call(null))});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10643__10644 = options;
var map__10643__10645 = ((cljs.core.seq_QMARK_(map__10643__10644))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10643__10644):map__10643__10644);
var keywordize_keys__10646 = cljs.core._lookup.cljs$lang$arity$3(map__10643__10645,"\uFDD0'keywordize-keys",null);
var keyfn__10647 = (cljs.core.truth_(keywordize_keys__10646)?cljs.core.keyword:cljs.core.str);
var f__10670 = (function thisfn(x){
if(cljs.core.seq_QMARK_(x))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if((cljs.core.type(x) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__3245__auto____10669 = (function iter__10659(s__10660){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10660__10665 = s__10660;
while(true){
var temp__4092__auto____10666 = cljs.core.seq(s__10660__10665);
if(temp__4092__auto____10666)
{var xs__4579__auto____10667 = temp__4092__auto____10666;
var k__10668 = cljs.core.first(xs__4579__auto____10667);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn__10647.cljs$lang$arity$1 ? keyfn__10647.cljs$lang$arity$1(k__10668) : keyfn__10647.call(null,k__10668)),thisfn((x[k__10668]))], true),iter__10659(cljs.core.rest(s__10660__10665)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__3245__auto____10669.cljs$lang$arity$1 ? iter__3245__auto____10669.cljs$lang$arity$1(cljs.core.js_keys(x)) : iter__3245__auto____10669.call(null,cljs.core.js_keys(x)));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return (f__10670.cljs$lang$arity$1 ? f__10670.cljs$lang$arity$1(x) : f__10670.call(null,x));
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10671){
var x = cljs.core.first(arglist__10671);
var options = cljs.core.rest(arglist__10671);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10676 = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10680__delegate = function (args){
var temp__4090__auto____10677 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem__10676),args,null);
if(cljs.core.truth_(temp__4090__auto____10677))
{var v__10678 = temp__4090__auto____10677;
return v__10678;
} else
{var ret__10679 = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem__10676,cljs.core.assoc,args,ret__10679);
return ret__10679;
}
};
var G__10680 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10680__delegate.call(this, args);
};
G__10680.cljs$lang$maxFixedArity = 0;
G__10680.cljs$lang$applyTo = (function (arglist__10681){
var args = cljs.core.seq(arglist__10681);;
return G__10680__delegate(args);
});
G__10680.cljs$lang$arity$variadic = G__10680__delegate;
return G__10680;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10683 = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret__10683))
{{
var G__10684 = ret__10683;
f = G__10684;
continue;
}
} else
{return ret__10683;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10685__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__10685 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10685__delegate.call(this, f, args);
};
G__10685.cljs$lang$maxFixedArity = 1;
G__10685.cljs$lang$applyTo = (function (arglist__10686){
var f = cljs.core.first(arglist__10686);
var args = cljs.core.rest(arglist__10686);
return G__10685__delegate(f, args);
});
G__10685.cljs$lang$arity$variadic = G__10685__delegate;
return G__10685;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k__10688 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k__10688,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k__10688,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto____10697 = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3943__auto____10697)
{return or__3943__auto____10697;
} else
{var or__3943__auto____10698 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____10698)
{return or__3943__auto____10698;
} else
{var and__3941__auto____10699 = cljs.core.vector_QMARK_(parent);
if(and__3941__auto____10699)
{var and__3941__auto____10700 = cljs.core.vector_QMARK_(child);
if(and__3941__auto____10700)
{var and__3941__auto____10701 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3941__auto____10701)
{var ret__10702 = true;
var i__10703 = 0;
while(true){
if((function (){var or__3943__auto____10704 = cljs.core.not(ret__10702);
if(or__3943__auto____10704)
{return or__3943__auto____10704;
} else
{return (i__10703 === cljs.core.count(parent));
}
})())
{return ret__10702;
} else
{{
var G__10705 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i__10703) : child.call(null,i__10703)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i__10703) : parent.call(null,i__10703)));
var G__10706 = (i__10703 + 1);
ret__10702 = G__10705;
i__10703 = G__10706;
continue;
}
}
break;
}
} else
{return and__3941__auto____10701;
}
} else
{return and__3941__auto____10700;
}
} else
{return and__3941__auto____10699;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))], 0)))].join('')));
}
var tp__10715 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10716 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10717 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10718 = (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
}),m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});
var or__3943__auto____10719 = ((cljs.core.contains_QMARK_((tp__10715.cljs$lang$arity$1 ? tp__10715.cljs$lang$arity$1(tag) : tp__10715.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta__10717.cljs$lang$arity$1 ? ta__10717.cljs$lang$arity$1(tag) : ta__10717.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta__10717.cljs$lang$arity$1 ? ta__10717.cljs$lang$arity$1(parent) : ta__10717.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp__10715,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":(tf__10718.cljs$lang$arity$5 ? tf__10718.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10716,parent,ta__10717) : tf__10718.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10716,parent,ta__10717)),"\uFDD0'descendants":(tf__10718.cljs$lang$arity$5 ? tf__10718.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10717,tag,td__10716) : tf__10718.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10717,tag,td__10716))});
})());
if(cljs.core.truth_(or__3943__auto____10719))
{return or__3943__auto____10719;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10724 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10725 = (cljs.core.truth_((parentMap__10724.cljs$lang$arity$1 ? parentMap__10724.cljs$lang$arity$1(tag) : parentMap__10724.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap__10724.cljs$lang$arity$1 ? parentMap__10724.cljs$lang$arity$1(tag) : parentMap__10724.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10726 = (cljs.core.truth_(cljs.core.not_empty(childsParents__10725))?cljs.core.assoc.cljs$lang$arity$3(parentMap__10724,tag,childsParents__10725):cljs.core.dissoc.cljs$lang$arity$2(parentMap__10724,tag));
var deriv_seq__10727 = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2((function (p1__10707_SHARP_){
return cljs.core.cons(cljs.core.first(p1__10707_SHARP_),cljs.core.interpose(cljs.core.first(p1__10707_SHARP_),cljs.core.second(p1__10707_SHARP_)));
}),cljs.core.seq(newParents__10726)));
if(cljs.core.contains_QMARK_((parentMap__10724.cljs$lang$arity$1 ? parentMap__10724.cljs$lang$arity$1(tag) : parentMap__10724.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__10708_SHARP_,p2__10709_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__10708_SHARP_,p2__10709_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq__10727));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10735 = cljs.core.deref(prefer_table).call(null,x);
var or__3943__auto____10737 = (cljs.core.truth_((function (){var and__3941__auto____10736 = xprefs__10735;
if(cljs.core.truth_(and__3941__auto____10736))
{return (xprefs__10735.cljs$lang$arity$1 ? xprefs__10735.cljs$lang$arity$1(y) : xprefs__10735.call(null,y));
} else
{return and__3941__auto____10736;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto____10737))
{return or__3943__auto____10737;
} else
{var or__3943__auto____10739 = (function (){var ps__10738 = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps__10738) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps__10738),prefer_table)))
{} else
{}
{
var G__10742 = cljs.core.rest(ps__10738);
ps__10738 = G__10742;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____10739))
{return or__3943__auto____10739;
} else
{var or__3943__auto____10741 = (function (){var ps__10740 = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps__10740) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps__10740),y,prefer_table)))
{} else
{}
{
var G__10743 = cljs.core.rest(ps__10740);
ps__10740 = G__10743;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____10741))
{return or__3943__auto____10741;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto____10745 = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto____10745))
{return or__3943__auto____10745;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10763 = cljs.core.reduce.cljs$lang$arity$3((function (be,p__10755){
var vec__10756__10757 = p__10755;
var k__10758 = cljs.core.nth.cljs$lang$arity$3(vec__10756__10757,0,null);
var ___10759 = cljs.core.nth.cljs$lang$arity$3(vec__10756__10757,1,null);
var e__10760 = vec__10756__10757;
if(cljs.core.isa_QMARK_.cljs$lang$arity$2(dispatch_val,k__10758))
{var be2__10762 = (cljs.core.truth_((function (){var or__3943__auto____10761 = (be == null);
if(or__3943__auto____10761)
{return or__3943__auto____10761;
} else
{return cljs.core.dominates(k__10758,cljs.core.first(be),prefer_table);
}
})())?e__10760:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__10762),k__10758,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10758),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2__10762)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10762;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry__10763))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__10763));
return cljs.core.second(best_entry__10763);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto____10768 = mf;
if(and__3941__auto____10768)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto____10768;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__3146__auto____10769 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10770 = (cljs.core._reset[goog.typeOf(x__3146__auto____10769)]);
if(or__3943__auto____10770)
{return or__3943__auto____10770;
} else
{var or__3943__auto____10771 = (cljs.core._reset["_"]);
if(or__3943__auto____10771)
{return or__3943__auto____10771;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto____10776 = mf;
if(and__3941__auto____10776)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto____10776;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__3146__auto____10777 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10778 = (cljs.core._add_method[goog.typeOf(x__3146__auto____10777)]);
if(or__3943__auto____10778)
{return or__3943__auto____10778;
} else
{var or__3943__auto____10779 = (cljs.core._add_method["_"]);
if(or__3943__auto____10779)
{return or__3943__auto____10779;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto____10784 = mf;
if(and__3941__auto____10784)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto____10784;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__3146__auto____10785 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10786 = (cljs.core._remove_method[goog.typeOf(x__3146__auto____10785)]);
if(or__3943__auto____10786)
{return or__3943__auto____10786;
} else
{var or__3943__auto____10787 = (cljs.core._remove_method["_"]);
if(or__3943__auto____10787)
{return or__3943__auto____10787;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto____10792 = mf;
if(and__3941__auto____10792)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto____10792;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__3146__auto____10793 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10794 = (cljs.core._prefer_method[goog.typeOf(x__3146__auto____10793)]);
if(or__3943__auto____10794)
{return or__3943__auto____10794;
} else
{var or__3943__auto____10795 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____10795)
{return or__3943__auto____10795;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto____10800 = mf;
if(and__3941__auto____10800)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto____10800;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__3146__auto____10801 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10802 = (cljs.core._get_method[goog.typeOf(x__3146__auto____10801)]);
if(or__3943__auto____10802)
{return or__3943__auto____10802;
} else
{var or__3943__auto____10803 = (cljs.core._get_method["_"]);
if(or__3943__auto____10803)
{return or__3943__auto____10803;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto____10808 = mf;
if(and__3941__auto____10808)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto____10808;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__3146__auto____10809 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10810 = (cljs.core._methods[goog.typeOf(x__3146__auto____10809)]);
if(or__3943__auto____10810)
{return or__3943__auto____10810;
} else
{var or__3943__auto____10811 = (cljs.core._methods["_"]);
if(or__3943__auto____10811)
{return or__3943__auto____10811;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto____10816 = mf;
if(and__3941__auto____10816)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto____10816;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__3146__auto____10817 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10818 = (cljs.core._prefers[goog.typeOf(x__3146__auto____10817)]);
if(or__3943__auto____10818)
{return or__3943__auto____10818;
} else
{var or__3943__auto____10819 = (cljs.core._prefers["_"]);
if(or__3943__auto____10819)
{return or__3943__auto____10819;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto____10824 = mf;
if(and__3941__auto____10824)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto____10824;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__3146__auto____10825 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10826 = (cljs.core._dispatch[goog.typeOf(x__3146__auto____10825)]);
if(or__3943__auto____10826)
{return or__3943__auto____10826;
} else
{var or__3943__auto____10827 = (cljs.core._dispatch["_"]);
if(or__3943__auto____10827)
{return or__3943__auto____10827;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10830 = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn__10831 = cljs.core._get_method(mf,dispatch_val__10830);
if(cljs.core.truth_(target_fn__10831))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10830)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn__10831,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10832 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10833 = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10833.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10833.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10833.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10833.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10834 = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(this__10834.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__10834.method_cache,this__10834.method_table,this__10834.cached_hierarchy,this__10834.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10835 = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(this__10835.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__10835.method_cache,this__10835.method_table,this__10835.cached_hierarchy,this__10835.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10836 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(this__10836.cached_hierarchy),cljs.core.deref(this__10836.hierarchy)))
{} else
{cljs.core.reset_cache(this__10836.method_cache,this__10836.method_table,this__10836.cached_hierarchy,this__10836.hierarchy);
}
var temp__4090__auto____10837 = cljs.core.deref(this__10836.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto____10837))
{var target_fn__10838 = temp__4090__auto____10837;
return target_fn__10838;
} else
{var temp__4090__auto____10839 = cljs.core.find_and_cache_best_method(this__10836.name,dispatch_val,this__10836.hierarchy,this__10836.method_table,this__10836.prefer_table,this__10836.method_cache,this__10836.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____10839))
{var target_fn__10840 = temp__4090__auto____10839;
return target_fn__10840;
} else
{return cljs.core.deref(this__10836.method_table).call(null,this__10836.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10841 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__10841.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10841.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10841.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(this__10841.method_cache,this__10841.method_table,this__10841.cached_hierarchy,this__10841.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10842 = this;
return cljs.core.deref(this__10842.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10843 = this;
return cljs.core.deref(this__10843.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10844 = this;
return cljs.core.do_dispatch(mf,this__10844.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10846__delegate = function (_,args){
var self__10845 = this;
return cljs.core._dispatch(self__10845,args);
};
var G__10846 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10846__delegate.call(this, _, args);
};
G__10846.cljs$lang$maxFixedArity = 1;
G__10846.cljs$lang$applyTo = (function (arglist__10847){
var _ = cljs.core.first(arglist__10847);
var args = cljs.core.rest(arglist__10847);
return G__10846__delegate(_, args);
});
G__10846.cljs$lang$arity$variadic = G__10846__delegate;
return G__10846;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10848 = this;
return cljs.core._dispatch(self__10848,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__3092__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10849 = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10851,_){
var this__10850 = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(this__10850.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10852 = this;
var and__3941__auto____10853 = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3941__auto____10853)
{return (this__10852.uuid === other.uuid);
} else
{return and__3941__auto____10853;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10854 = this;
var this__10855 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10855], 0));
});
cljs.core.UUID;
