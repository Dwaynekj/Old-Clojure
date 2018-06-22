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
var x__6179 = (((x == null))?null:x);
if((p[goog.typeOf(x__6179)]))
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
return make_array.call(null,size);
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
var G__6180__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__6180 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6180__delegate.call(this, array, i, idxs);
};
G__6180.cljs$lang$maxFixedArity = 2;
G__6180.cljs$lang$applyTo = (function (arglist__6181){
var array = cljs.core.first(arglist__6181);
var i = cljs.core.first(cljs.core.next(arglist__6181));
var idxs = cljs.core.rest(cljs.core.next(arglist__6181));
return G__6180__delegate(array, i, idxs);
});
G__6180.cljs$lang$arity$variadic = G__6180__delegate;
return G__6180;
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
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
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
if((function (){var and__3941__auto____6266 = this$;
if(and__3941__auto____6266)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto____6266;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2424__auto____6267 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6268 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6267)]);
if(or__3943__auto____6268)
{return or__3943__auto____6268;
} else
{var or__3943__auto____6269 = (cljs.core._invoke["_"]);
if(or__3943__auto____6269)
{return or__3943__auto____6269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto____6270 = this$;
if(and__3941__auto____6270)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto____6270;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2424__auto____6271 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6272 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6271)]);
if(or__3943__auto____6272)
{return or__3943__auto____6272;
} else
{var or__3943__auto____6273 = (cljs.core._invoke["_"]);
if(or__3943__auto____6273)
{return or__3943__auto____6273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto____6274 = this$;
if(and__3941__auto____6274)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto____6274;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2424__auto____6275 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6276 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6275)]);
if(or__3943__auto____6276)
{return or__3943__auto____6276;
} else
{var or__3943__auto____6277 = (cljs.core._invoke["_"]);
if(or__3943__auto____6277)
{return or__3943__auto____6277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto____6278 = this$;
if(and__3941__auto____6278)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto____6278;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2424__auto____6279 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6280 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6279)]);
if(or__3943__auto____6280)
{return or__3943__auto____6280;
} else
{var or__3943__auto____6281 = (cljs.core._invoke["_"]);
if(or__3943__auto____6281)
{return or__3943__auto____6281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto____6282 = this$;
if(and__3941__auto____6282)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto____6282;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2424__auto____6283 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6284 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6283)]);
if(or__3943__auto____6284)
{return or__3943__auto____6284;
} else
{var or__3943__auto____6285 = (cljs.core._invoke["_"]);
if(or__3943__auto____6285)
{return or__3943__auto____6285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto____6286 = this$;
if(and__3941__auto____6286)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto____6286;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2424__auto____6287 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6288 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6287)]);
if(or__3943__auto____6288)
{return or__3943__auto____6288;
} else
{var or__3943__auto____6289 = (cljs.core._invoke["_"]);
if(or__3943__auto____6289)
{return or__3943__auto____6289;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto____6290 = this$;
if(and__3941__auto____6290)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto____6290;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2424__auto____6291 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6292 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6291)]);
if(or__3943__auto____6292)
{return or__3943__auto____6292;
} else
{var or__3943__auto____6293 = (cljs.core._invoke["_"]);
if(or__3943__auto____6293)
{return or__3943__auto____6293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto____6294 = this$;
if(and__3941__auto____6294)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto____6294;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2424__auto____6295 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6296 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6295)]);
if(or__3943__auto____6296)
{return or__3943__auto____6296;
} else
{var or__3943__auto____6297 = (cljs.core._invoke["_"]);
if(or__3943__auto____6297)
{return or__3943__auto____6297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto____6298 = this$;
if(and__3941__auto____6298)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto____6298;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2424__auto____6299 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6300 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6299)]);
if(or__3943__auto____6300)
{return or__3943__auto____6300;
} else
{var or__3943__auto____6301 = (cljs.core._invoke["_"]);
if(or__3943__auto____6301)
{return or__3943__auto____6301;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto____6302 = this$;
if(and__3941__auto____6302)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto____6302;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2424__auto____6303 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6304 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6303)]);
if(or__3943__auto____6304)
{return or__3943__auto____6304;
} else
{var or__3943__auto____6305 = (cljs.core._invoke["_"]);
if(or__3943__auto____6305)
{return or__3943__auto____6305;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto____6306 = this$;
if(and__3941__auto____6306)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto____6306;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2424__auto____6307 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6308 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6307)]);
if(or__3943__auto____6308)
{return or__3943__auto____6308;
} else
{var or__3943__auto____6309 = (cljs.core._invoke["_"]);
if(or__3943__auto____6309)
{return or__3943__auto____6309;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto____6310 = this$;
if(and__3941__auto____6310)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto____6310;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2424__auto____6311 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6312 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6311)]);
if(or__3943__auto____6312)
{return or__3943__auto____6312;
} else
{var or__3943__auto____6313 = (cljs.core._invoke["_"]);
if(or__3943__auto____6313)
{return or__3943__auto____6313;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto____6314 = this$;
if(and__3941__auto____6314)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto____6314;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2424__auto____6315 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6316 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6315)]);
if(or__3943__auto____6316)
{return or__3943__auto____6316;
} else
{var or__3943__auto____6317 = (cljs.core._invoke["_"]);
if(or__3943__auto____6317)
{return or__3943__auto____6317;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto____6318 = this$;
if(and__3941__auto____6318)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto____6318;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2424__auto____6319 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6320 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6319)]);
if(or__3943__auto____6320)
{return or__3943__auto____6320;
} else
{var or__3943__auto____6321 = (cljs.core._invoke["_"]);
if(or__3943__auto____6321)
{return or__3943__auto____6321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto____6322 = this$;
if(and__3941__auto____6322)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto____6322;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2424__auto____6323 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6324 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6323)]);
if(or__3943__auto____6324)
{return or__3943__auto____6324;
} else
{var or__3943__auto____6325 = (cljs.core._invoke["_"]);
if(or__3943__auto____6325)
{return or__3943__auto____6325;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto____6326 = this$;
if(and__3941__auto____6326)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto____6326;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2424__auto____6327 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6328 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6327)]);
if(or__3943__auto____6328)
{return or__3943__auto____6328;
} else
{var or__3943__auto____6329 = (cljs.core._invoke["_"]);
if(or__3943__auto____6329)
{return or__3943__auto____6329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto____6330 = this$;
if(and__3941__auto____6330)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto____6330;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2424__auto____6331 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6332 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6331)]);
if(or__3943__auto____6332)
{return or__3943__auto____6332;
} else
{var or__3943__auto____6333 = (cljs.core._invoke["_"]);
if(or__3943__auto____6333)
{return or__3943__auto____6333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto____6334 = this$;
if(and__3941__auto____6334)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto____6334;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2424__auto____6335 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6336 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6335)]);
if(or__3943__auto____6336)
{return or__3943__auto____6336;
} else
{var or__3943__auto____6337 = (cljs.core._invoke["_"]);
if(or__3943__auto____6337)
{return or__3943__auto____6337;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto____6338 = this$;
if(and__3941__auto____6338)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto____6338;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2424__auto____6339 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6340 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6339)]);
if(or__3943__auto____6340)
{return or__3943__auto____6340;
} else
{var or__3943__auto____6341 = (cljs.core._invoke["_"]);
if(or__3943__auto____6341)
{return or__3943__auto____6341;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto____6342 = this$;
if(and__3941__auto____6342)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto____6342;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2424__auto____6343 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6344 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6343)]);
if(or__3943__auto____6344)
{return or__3943__auto____6344;
} else
{var or__3943__auto____6345 = (cljs.core._invoke["_"]);
if(or__3943__auto____6345)
{return or__3943__auto____6345;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto____6346 = this$;
if(and__3941__auto____6346)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto____6346;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2424__auto____6347 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6348 = (cljs.core._invoke[goog.typeOf(x__2424__auto____6347)]);
if(or__3943__auto____6348)
{return or__3943__auto____6348;
} else
{var or__3943__auto____6349 = (cljs.core._invoke["_"]);
if(or__3943__auto____6349)
{return or__3943__auto____6349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
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
if((function (){var and__3941__auto____6354 = coll;
if(and__3941__auto____6354)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto____6354;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2424__auto____6355 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6356 = (cljs.core._count[goog.typeOf(x__2424__auto____6355)]);
if(or__3943__auto____6356)
{return or__3943__auto____6356;
} else
{var or__3943__auto____6357 = (cljs.core._count["_"]);
if(or__3943__auto____6357)
{return or__3943__auto____6357;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto____6362 = coll;
if(and__3941__auto____6362)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto____6362;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2424__auto____6363 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6364 = (cljs.core._empty[goog.typeOf(x__2424__auto____6363)]);
if(or__3943__auto____6364)
{return or__3943__auto____6364;
} else
{var or__3943__auto____6365 = (cljs.core._empty["_"]);
if(or__3943__auto____6365)
{return or__3943__auto____6365;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto____6370 = coll;
if(and__3941__auto____6370)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto____6370;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2424__auto____6371 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6372 = (cljs.core._conj[goog.typeOf(x__2424__auto____6371)]);
if(or__3943__auto____6372)
{return or__3943__auto____6372;
} else
{var or__3943__auto____6373 = (cljs.core._conj["_"]);
if(or__3943__auto____6373)
{return or__3943__auto____6373;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto____6382 = coll;
if(and__3941__auto____6382)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto____6382;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2424__auto____6383 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6384 = (cljs.core._nth[goog.typeOf(x__2424__auto____6383)]);
if(or__3943__auto____6384)
{return or__3943__auto____6384;
} else
{var or__3943__auto____6385 = (cljs.core._nth["_"]);
if(or__3943__auto____6385)
{return or__3943__auto____6385;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto____6386 = coll;
if(and__3941__auto____6386)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto____6386;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2424__auto____6387 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6388 = (cljs.core._nth[goog.typeOf(x__2424__auto____6387)]);
if(or__3943__auto____6388)
{return or__3943__auto____6388;
} else
{var or__3943__auto____6389 = (cljs.core._nth["_"]);
if(or__3943__auto____6389)
{return or__3943__auto____6389;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
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
if((function (){var and__3941__auto____6394 = coll;
if(and__3941__auto____6394)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto____6394;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2424__auto____6395 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6396 = (cljs.core._first[goog.typeOf(x__2424__auto____6395)]);
if(or__3943__auto____6396)
{return or__3943__auto____6396;
} else
{var or__3943__auto____6397 = (cljs.core._first["_"]);
if(or__3943__auto____6397)
{return or__3943__auto____6397;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto____6402 = coll;
if(and__3941__auto____6402)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto____6402;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2424__auto____6403 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6404 = (cljs.core._rest[goog.typeOf(x__2424__auto____6403)]);
if(or__3943__auto____6404)
{return or__3943__auto____6404;
} else
{var or__3943__auto____6405 = (cljs.core._rest["_"]);
if(or__3943__auto____6405)
{return or__3943__auto____6405;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto____6410 = coll;
if(and__3941__auto____6410)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto____6410;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2424__auto____6411 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6412 = (cljs.core._next[goog.typeOf(x__2424__auto____6411)]);
if(or__3943__auto____6412)
{return or__3943__auto____6412;
} else
{var or__3943__auto____6413 = (cljs.core._next["_"]);
if(or__3943__auto____6413)
{return or__3943__auto____6413;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto____6422 = o;
if(and__3941__auto____6422)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto____6422;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2424__auto____6423 = (((o == null))?null:o);
return (function (){var or__3943__auto____6424 = (cljs.core._lookup[goog.typeOf(x__2424__auto____6423)]);
if(or__3943__auto____6424)
{return or__3943__auto____6424;
} else
{var or__3943__auto____6425 = (cljs.core._lookup["_"]);
if(or__3943__auto____6425)
{return or__3943__auto____6425;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto____6426 = o;
if(and__3941__auto____6426)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto____6426;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2424__auto____6427 = (((o == null))?null:o);
return (function (){var or__3943__auto____6428 = (cljs.core._lookup[goog.typeOf(x__2424__auto____6427)]);
if(or__3943__auto____6428)
{return or__3943__auto____6428;
} else
{var or__3943__auto____6429 = (cljs.core._lookup["_"]);
if(or__3943__auto____6429)
{return or__3943__auto____6429;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
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
if((function (){var and__3941__auto____6434 = coll;
if(and__3941__auto____6434)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto____6434;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2424__auto____6435 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6436 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2424__auto____6435)]);
if(or__3943__auto____6436)
{return or__3943__auto____6436;
} else
{var or__3943__auto____6437 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____6437)
{return or__3943__auto____6437;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto____6442 = coll;
if(and__3941__auto____6442)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto____6442;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2424__auto____6443 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6444 = (cljs.core._assoc[goog.typeOf(x__2424__auto____6443)]);
if(or__3943__auto____6444)
{return or__3943__auto____6444;
} else
{var or__3943__auto____6445 = (cljs.core._assoc["_"]);
if(or__3943__auto____6445)
{return or__3943__auto____6445;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto____6450 = coll;
if(and__3941__auto____6450)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto____6450;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2424__auto____6451 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6452 = (cljs.core._dissoc[goog.typeOf(x__2424__auto____6451)]);
if(or__3943__auto____6452)
{return or__3943__auto____6452;
} else
{var or__3943__auto____6453 = (cljs.core._dissoc["_"]);
if(or__3943__auto____6453)
{return or__3943__auto____6453;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto____6458 = coll;
if(and__3941__auto____6458)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto____6458;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2424__auto____6459 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6460 = (cljs.core._key[goog.typeOf(x__2424__auto____6459)]);
if(or__3943__auto____6460)
{return or__3943__auto____6460;
} else
{var or__3943__auto____6461 = (cljs.core._key["_"]);
if(or__3943__auto____6461)
{return or__3943__auto____6461;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto____6466 = coll;
if(and__3941__auto____6466)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto____6466;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2424__auto____6467 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6468 = (cljs.core._val[goog.typeOf(x__2424__auto____6467)]);
if(or__3943__auto____6468)
{return or__3943__auto____6468;
} else
{var or__3943__auto____6469 = (cljs.core._val["_"]);
if(or__3943__auto____6469)
{return or__3943__auto____6469;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto____6474 = coll;
if(and__3941__auto____6474)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto____6474;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2424__auto____6475 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6476 = (cljs.core._disjoin[goog.typeOf(x__2424__auto____6475)]);
if(or__3943__auto____6476)
{return or__3943__auto____6476;
} else
{var or__3943__auto____6477 = (cljs.core._disjoin["_"]);
if(or__3943__auto____6477)
{return or__3943__auto____6477;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto____6482 = coll;
if(and__3941__auto____6482)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto____6482;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2424__auto____6483 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6484 = (cljs.core._peek[goog.typeOf(x__2424__auto____6483)]);
if(or__3943__auto____6484)
{return or__3943__auto____6484;
} else
{var or__3943__auto____6485 = (cljs.core._peek["_"]);
if(or__3943__auto____6485)
{return or__3943__auto____6485;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto____6490 = coll;
if(and__3941__auto____6490)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto____6490;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2424__auto____6491 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6492 = (cljs.core._pop[goog.typeOf(x__2424__auto____6491)]);
if(or__3943__auto____6492)
{return or__3943__auto____6492;
} else
{var or__3943__auto____6493 = (cljs.core._pop["_"]);
if(or__3943__auto____6493)
{return or__3943__auto____6493;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto____6498 = coll;
if(and__3941__auto____6498)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto____6498;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2424__auto____6499 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6500 = (cljs.core._assoc_n[goog.typeOf(x__2424__auto____6499)]);
if(or__3943__auto____6500)
{return or__3943__auto____6500;
} else
{var or__3943__auto____6501 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____6501)
{return or__3943__auto____6501;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto____6506 = o;
if(and__3941__auto____6506)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto____6506;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2424__auto____6507 = (((o == null))?null:o);
return (function (){var or__3943__auto____6508 = (cljs.core._deref[goog.typeOf(x__2424__auto____6507)]);
if(or__3943__auto____6508)
{return or__3943__auto____6508;
} else
{var or__3943__auto____6509 = (cljs.core._deref["_"]);
if(or__3943__auto____6509)
{return or__3943__auto____6509;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto____6514 = o;
if(and__3941__auto____6514)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto____6514;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2424__auto____6515 = (((o == null))?null:o);
return (function (){var or__3943__auto____6516 = (cljs.core._deref_with_timeout[goog.typeOf(x__2424__auto____6515)]);
if(or__3943__auto____6516)
{return or__3943__auto____6516;
} else
{var or__3943__auto____6517 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____6517)
{return or__3943__auto____6517;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto____6522 = o;
if(and__3941__auto____6522)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto____6522;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2424__auto____6523 = (((o == null))?null:o);
return (function (){var or__3943__auto____6524 = (cljs.core._meta[goog.typeOf(x__2424__auto____6523)]);
if(or__3943__auto____6524)
{return or__3943__auto____6524;
} else
{var or__3943__auto____6525 = (cljs.core._meta["_"]);
if(or__3943__auto____6525)
{return or__3943__auto____6525;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto____6530 = o;
if(and__3941__auto____6530)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto____6530;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2424__auto____6531 = (((o == null))?null:o);
return (function (){var or__3943__auto____6532 = (cljs.core._with_meta[goog.typeOf(x__2424__auto____6531)]);
if(or__3943__auto____6532)
{return or__3943__auto____6532;
} else
{var or__3943__auto____6533 = (cljs.core._with_meta["_"]);
if(or__3943__auto____6533)
{return or__3943__auto____6533;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto____6542 = coll;
if(and__3941__auto____6542)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto____6542;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2424__auto____6543 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6544 = (cljs.core._reduce[goog.typeOf(x__2424__auto____6543)]);
if(or__3943__auto____6544)
{return or__3943__auto____6544;
} else
{var or__3943__auto____6545 = (cljs.core._reduce["_"]);
if(or__3943__auto____6545)
{return or__3943__auto____6545;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto____6546 = coll;
if(and__3941__auto____6546)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto____6546;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2424__auto____6547 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6548 = (cljs.core._reduce[goog.typeOf(x__2424__auto____6547)]);
if(or__3943__auto____6548)
{return or__3943__auto____6548;
} else
{var or__3943__auto____6549 = (cljs.core._reduce["_"]);
if(or__3943__auto____6549)
{return or__3943__auto____6549;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
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
if((function (){var and__3941__auto____6554 = coll;
if(and__3941__auto____6554)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto____6554;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2424__auto____6555 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6556 = (cljs.core._kv_reduce[goog.typeOf(x__2424__auto____6555)]);
if(or__3943__auto____6556)
{return or__3943__auto____6556;
} else
{var or__3943__auto____6557 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____6557)
{return or__3943__auto____6557;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto____6562 = o;
if(and__3941__auto____6562)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto____6562;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2424__auto____6563 = (((o == null))?null:o);
return (function (){var or__3943__auto____6564 = (cljs.core._equiv[goog.typeOf(x__2424__auto____6563)]);
if(or__3943__auto____6564)
{return or__3943__auto____6564;
} else
{var or__3943__auto____6565 = (cljs.core._equiv["_"]);
if(or__3943__auto____6565)
{return or__3943__auto____6565;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto____6570 = o;
if(and__3941__auto____6570)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto____6570;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2424__auto____6571 = (((o == null))?null:o);
return (function (){var or__3943__auto____6572 = (cljs.core._hash[goog.typeOf(x__2424__auto____6571)]);
if(or__3943__auto____6572)
{return or__3943__auto____6572;
} else
{var or__3943__auto____6573 = (cljs.core._hash["_"]);
if(or__3943__auto____6573)
{return or__3943__auto____6573;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto____6578 = o;
if(and__3941__auto____6578)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto____6578;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2424__auto____6579 = (((o == null))?null:o);
return (function (){var or__3943__auto____6580 = (cljs.core._seq[goog.typeOf(x__2424__auto____6579)]);
if(or__3943__auto____6580)
{return or__3943__auto____6580;
} else
{var or__3943__auto____6581 = (cljs.core._seq["_"]);
if(or__3943__auto____6581)
{return or__3943__auto____6581;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
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
if((function (){var and__3941__auto____6586 = coll;
if(and__3941__auto____6586)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto____6586;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2424__auto____6587 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6588 = (cljs.core._rseq[goog.typeOf(x__2424__auto____6587)]);
if(or__3943__auto____6588)
{return or__3943__auto____6588;
} else
{var or__3943__auto____6589 = (cljs.core._rseq["_"]);
if(or__3943__auto____6589)
{return or__3943__auto____6589;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto____6594 = coll;
if(and__3941__auto____6594)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto____6594;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2424__auto____6595 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6596 = (cljs.core._sorted_seq[goog.typeOf(x__2424__auto____6595)]);
if(or__3943__auto____6596)
{return or__3943__auto____6596;
} else
{var or__3943__auto____6597 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____6597)
{return or__3943__auto____6597;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto____6602 = coll;
if(and__3941__auto____6602)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto____6602;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2424__auto____6603 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6604 = (cljs.core._sorted_seq_from[goog.typeOf(x__2424__auto____6603)]);
if(or__3943__auto____6604)
{return or__3943__auto____6604;
} else
{var or__3943__auto____6605 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____6605)
{return or__3943__auto____6605;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto____6610 = coll;
if(and__3941__auto____6610)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto____6610;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2424__auto____6611 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6612 = (cljs.core._entry_key[goog.typeOf(x__2424__auto____6611)]);
if(or__3943__auto____6612)
{return or__3943__auto____6612;
} else
{var or__3943__auto____6613 = (cljs.core._entry_key["_"]);
if(or__3943__auto____6613)
{return or__3943__auto____6613;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto____6618 = coll;
if(and__3941__auto____6618)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto____6618;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2424__auto____6619 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6620 = (cljs.core._comparator[goog.typeOf(x__2424__auto____6619)]);
if(or__3943__auto____6620)
{return or__3943__auto____6620;
} else
{var or__3943__auto____6621 = (cljs.core._comparator["_"]);
if(or__3943__auto____6621)
{return or__3943__auto____6621;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto____6626 = o;
if(and__3941__auto____6626)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto____6626;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2424__auto____6627 = (((o == null))?null:o);
return (function (){var or__3943__auto____6628 = (cljs.core._pr_seq[goog.typeOf(x__2424__auto____6627)]);
if(or__3943__auto____6628)
{return or__3943__auto____6628;
} else
{var or__3943__auto____6629 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____6629)
{return or__3943__auto____6629;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto____6634 = d;
if(and__3941__auto____6634)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto____6634;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2424__auto____6635 = (((d == null))?null:d);
return (function (){var or__3943__auto____6636 = (cljs.core._realized_QMARK_[goog.typeOf(x__2424__auto____6635)]);
if(or__3943__auto____6636)
{return or__3943__auto____6636;
} else
{var or__3943__auto____6637 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____6637)
{return or__3943__auto____6637;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto____6642 = this$;
if(and__3941__auto____6642)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto____6642;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2424__auto____6643 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6644 = (cljs.core._notify_watches[goog.typeOf(x__2424__auto____6643)]);
if(or__3943__auto____6644)
{return or__3943__auto____6644;
} else
{var or__3943__auto____6645 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____6645)
{return or__3943__auto____6645;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto____6650 = this$;
if(and__3941__auto____6650)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto____6650;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2424__auto____6651 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6652 = (cljs.core._add_watch[goog.typeOf(x__2424__auto____6651)]);
if(or__3943__auto____6652)
{return or__3943__auto____6652;
} else
{var or__3943__auto____6653 = (cljs.core._add_watch["_"]);
if(or__3943__auto____6653)
{return or__3943__auto____6653;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto____6658 = this$;
if(and__3941__auto____6658)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto____6658;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2424__auto____6659 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____6660 = (cljs.core._remove_watch[goog.typeOf(x__2424__auto____6659)]);
if(or__3943__auto____6660)
{return or__3943__auto____6660;
} else
{var or__3943__auto____6661 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____6661)
{return or__3943__auto____6661;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto____6666 = coll;
if(and__3941__auto____6666)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto____6666;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2424__auto____6667 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6668 = (cljs.core._as_transient[goog.typeOf(x__2424__auto____6667)]);
if(or__3943__auto____6668)
{return or__3943__auto____6668;
} else
{var or__3943__auto____6669 = (cljs.core._as_transient["_"]);
if(or__3943__auto____6669)
{return or__3943__auto____6669;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto____6674 = tcoll;
if(and__3941__auto____6674)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto____6674;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2424__auto____6675 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6676 = (cljs.core._conj_BANG_[goog.typeOf(x__2424__auto____6675)]);
if(or__3943__auto____6676)
{return or__3943__auto____6676;
} else
{var or__3943__auto____6677 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____6677)
{return or__3943__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto____6682 = tcoll;
if(and__3941__auto____6682)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto____6682;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2424__auto____6683 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6684 = (cljs.core._persistent_BANG_[goog.typeOf(x__2424__auto____6683)]);
if(or__3943__auto____6684)
{return or__3943__auto____6684;
} else
{var or__3943__auto____6685 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____6685)
{return or__3943__auto____6685;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto____6690 = tcoll;
if(and__3941__auto____6690)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto____6690;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2424__auto____6691 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6692 = (cljs.core._assoc_BANG_[goog.typeOf(x__2424__auto____6691)]);
if(or__3943__auto____6692)
{return or__3943__auto____6692;
} else
{var or__3943__auto____6693 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____6693)
{return or__3943__auto____6693;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto____6698 = tcoll;
if(and__3941__auto____6698)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto____6698;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2424__auto____6699 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6700 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2424__auto____6699)]);
if(or__3943__auto____6700)
{return or__3943__auto____6700;
} else
{var or__3943__auto____6701 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____6701)
{return or__3943__auto____6701;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto____6706 = tcoll;
if(and__3941__auto____6706)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto____6706;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2424__auto____6707 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6708 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2424__auto____6707)]);
if(or__3943__auto____6708)
{return or__3943__auto____6708;
} else
{var or__3943__auto____6709 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____6709)
{return or__3943__auto____6709;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto____6714 = tcoll;
if(and__3941__auto____6714)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto____6714;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2424__auto____6715 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6716 = (cljs.core._pop_BANG_[goog.typeOf(x__2424__auto____6715)]);
if(or__3943__auto____6716)
{return or__3943__auto____6716;
} else
{var or__3943__auto____6717 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____6717)
{return or__3943__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto____6722 = tcoll;
if(and__3941__auto____6722)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto____6722;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2424__auto____6723 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____6724 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2424__auto____6723)]);
if(or__3943__auto____6724)
{return or__3943__auto____6724;
} else
{var or__3943__auto____6725 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____6725)
{return or__3943__auto____6725;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto____6730 = x;
if(and__3941__auto____6730)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto____6730;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2424__auto____6731 = (((x == null))?null:x);
return (function (){var or__3943__auto____6732 = (cljs.core._compare[goog.typeOf(x__2424__auto____6731)]);
if(or__3943__auto____6732)
{return or__3943__auto____6732;
} else
{var or__3943__auto____6733 = (cljs.core._compare["_"]);
if(or__3943__auto____6733)
{return or__3943__auto____6733;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto____6738 = coll;
if(and__3941__auto____6738)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto____6738;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2424__auto____6739 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6740 = (cljs.core._drop_first[goog.typeOf(x__2424__auto____6739)]);
if(or__3943__auto____6740)
{return or__3943__auto____6740;
} else
{var or__3943__auto____6741 = (cljs.core._drop_first["_"]);
if(or__3943__auto____6741)
{return or__3943__auto____6741;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto____6746 = coll;
if(and__3941__auto____6746)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto____6746;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2424__auto____6747 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6748 = (cljs.core._chunked_first[goog.typeOf(x__2424__auto____6747)]);
if(or__3943__auto____6748)
{return or__3943__auto____6748;
} else
{var or__3943__auto____6749 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____6749)
{return or__3943__auto____6749;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto____6754 = coll;
if(and__3941__auto____6754)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto____6754;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2424__auto____6755 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6756 = (cljs.core._chunked_rest[goog.typeOf(x__2424__auto____6755)]);
if(or__3943__auto____6756)
{return or__3943__auto____6756;
} else
{var or__3943__auto____6757 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____6757)
{return or__3943__auto____6757;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto____6762 = coll;
if(and__3941__auto____6762)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto____6762;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2424__auto____6763 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____6764 = (cljs.core._chunked_next[goog.typeOf(x__2424__auto____6763)]);
if(or__3943__auto____6764)
{return or__3943__auto____6764;
} else
{var or__3943__auto____6765 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____6765)
{return or__3943__auto____6765;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
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
var or__3943__auto____6767 = (x === y);
if(or__3943__auto____6767)
{return or__3943__auto____6767;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6768__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6769 = y;
var G__6770 = cljs.core.first.call(null,more);
var G__6771 = cljs.core.next.call(null,more);
x = G__6769;
y = G__6770;
more = G__6771;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6768 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6768__delegate.call(this, x, y, more);
};
G__6768.cljs$lang$maxFixedArity = 2;
G__6768.cljs$lang$applyTo = (function (arglist__6772){
var x = cljs.core.first(arglist__6772);
var y = cljs.core.first(cljs.core.next(arglist__6772));
var more = cljs.core.rest(cljs.core.next(arglist__6772));
return G__6768__delegate(x, y, more);
});
G__6768.cljs$lang$arity$variadic = G__6768__delegate;
return G__6768;
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
var G__6773 = null;
var G__6773__2 = (function (o,k){
return null;
});
var G__6773__3 = (function (o,k,not_found){
return not_found;
});
G__6773 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6773__2.call(this,o,k);
case 3:
return G__6773__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6773;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6774 = null;
var G__6774__2 = (function (_,f){
return f.call(null);
});
var G__6774__3 = (function (_,f,start){
return start;
});
G__6774 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6774__2.call(this,_,f);
case 3:
return G__6774__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6774;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
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
return cljs.core.list.call(null);
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
var G__6775 = null;
var G__6775__2 = (function (_,n){
return null;
});
var G__6775__3 = (function (_,n,not_found){
return not_found;
});
G__6775 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6775__2.call(this,_,n);
case 3:
return G__6775__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6775;
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
var and__3941__auto____6776 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto____6776)
{return (o.toString() === other.toString());
} else
{return and__3941__auto____6776;
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
var cnt__6789 = cljs.core._count.call(null,cicoll);
if((cnt__6789 === 0))
{return f.call(null);
} else
{var val__6790 = cljs.core._nth.call(null,cicoll,0);
var n__6791 = 1;
while(true){
if((n__6791 < cnt__6789))
{var nval__6792 = f.call(null,val__6790,cljs.core._nth.call(null,cicoll,n__6791));
if(cljs.core.reduced_QMARK_.call(null,nval__6792))
{return cljs.core.deref.call(null,nval__6792);
} else
{{
var G__6801 = nval__6792;
var G__6802 = (n__6791 + 1);
val__6790 = G__6801;
n__6791 = G__6802;
continue;
}
}
} else
{return val__6790;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6793 = cljs.core._count.call(null,cicoll);
var val__6794 = val;
var n__6795 = 0;
while(true){
if((n__6795 < cnt__6793))
{var nval__6796 = f.call(null,val__6794,cljs.core._nth.call(null,cicoll,n__6795));
if(cljs.core.reduced_QMARK_.call(null,nval__6796))
{return cljs.core.deref.call(null,nval__6796);
} else
{{
var G__6803 = nval__6796;
var G__6804 = (n__6795 + 1);
val__6794 = G__6803;
n__6795 = G__6804;
continue;
}
}
} else
{return val__6794;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6797 = cljs.core._count.call(null,cicoll);
var val__6798 = val;
var n__6799 = idx;
while(true){
if((n__6799 < cnt__6797))
{var nval__6800 = f.call(null,val__6798,cljs.core._nth.call(null,cicoll,n__6799));
if(cljs.core.reduced_QMARK_.call(null,nval__6800))
{return cljs.core.deref.call(null,nval__6800);
} else
{{
var G__6805 = nval__6800;
var G__6806 = (n__6799 + 1);
val__6798 = G__6805;
n__6799 = G__6806;
continue;
}
}
} else
{return val__6798;
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
var cnt__6819 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6820 = (arr[0]);
var n__6821 = 1;
while(true){
if((n__6821 < cnt__6819))
{var nval__6822 = f.call(null,val__6820,(arr[n__6821]));
if(cljs.core.reduced_QMARK_.call(null,nval__6822))
{return cljs.core.deref.call(null,nval__6822);
} else
{{
var G__6831 = nval__6822;
var G__6832 = (n__6821 + 1);
val__6820 = G__6831;
n__6821 = G__6832;
continue;
}
}
} else
{return val__6820;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6823 = arr.length;
var val__6824 = val;
var n__6825 = 0;
while(true){
if((n__6825 < cnt__6823))
{var nval__6826 = f.call(null,val__6824,(arr[n__6825]));
if(cljs.core.reduced_QMARK_.call(null,nval__6826))
{return cljs.core.deref.call(null,nval__6826);
} else
{{
var G__6833 = nval__6826;
var G__6834 = (n__6825 + 1);
val__6824 = G__6833;
n__6825 = G__6834;
continue;
}
}
} else
{return val__6824;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6827 = arr.length;
var val__6828 = val;
var n__6829 = idx;
while(true){
if((n__6829 < cnt__6827))
{var nval__6830 = f.call(null,val__6828,(arr[n__6829]));
if(cljs.core.reduced_QMARK_.call(null,nval__6830))
{return cljs.core.deref.call(null,nval__6830);
} else
{{
var G__6835 = nval__6830;
var G__6836 = (n__6829 + 1);
val__6828 = G__6835;
n__6829 = G__6836;
continue;
}
}
} else
{return val__6828;
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
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6837 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6838 = this;
if(((this__6838.i + 1) < this__6838.a.length))
{return (new cljs.core.IndexedSeq(this__6838.a,(this__6838.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6839 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6840 = this;
var c__6841 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6841 > 0))
{return (new cljs.core.RSeq(coll,(c__6841 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6842 = this;
var this__6843 = this;
return cljs.core.pr_str.call(null,this__6843);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6844 = this;
if(cljs.core.counted_QMARK_.call(null,this__6844.a))
{return cljs.core.ci_reduce.call(null,this__6844.a,f,(this__6844.a[this__6844.i]),(this__6844.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6844.a[this__6844.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6845 = this;
if(cljs.core.counted_QMARK_.call(null,this__6845.a))
{return cljs.core.ci_reduce.call(null,this__6845.a,f,start,this__6845.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6846 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6847 = this;
return (this__6847.a.length - this__6847.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6848 = this;
return (this__6848.a[this__6848.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6849 = this;
if(((this__6849.i + 1) < this__6849.a.length))
{return (new cljs.core.IndexedSeq(this__6849.a,(this__6849.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6850 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6851 = this;
var i__6852 = (n + this__6851.i);
if((i__6852 < this__6851.a.length))
{return (this__6851.a[i__6852]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6853 = this;
var i__6854 = (n + this__6853.i);
if((i__6854 < this__6853.a.length))
{return (this__6853.a[i__6854]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
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
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
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
var G__6855 = null;
var G__6855__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6855__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6855 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6855__2.call(this,array,f);
case 3:
return G__6855__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6855;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6856 = null;
var G__6856__2 = (function (array,k){
return (array[k]);
});
var G__6856__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6856 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6856__2.call(this,array,k);
case 3:
return G__6856__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6856;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6857 = null;
var G__6857__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6857__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6857 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6857__2.call(this,array,n);
case 3:
return G__6857__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6857;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
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
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6859 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6860 = this;
var this__6861 = this;
return cljs.core.pr_str.call(null,this__6861);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6862 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6863 = this;
return (this__6863.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6864 = this;
return cljs.core._nth.call(null,this__6864.ci,this__6864.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6865 = this;
if((this__6865.i > 0))
{return (new cljs.core.RSeq(this__6865.ci,(this__6865.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6866 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6867 = this;
return (new cljs.core.RSeq(this__6867.ci,this__6867.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6868 = this;
return this__6868.meta;
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
{if((function (){var G__6872__6873 = coll;
if(G__6872__6873)
{if((function (){var or__3943__auto____6874 = (G__6872__6873.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto____6874)
{return or__3943__auto____6874;
} else
{return G__6872__6873.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6872__6873.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6872__6873);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6872__6873);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
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
{if((function (){var G__6879__6880 = coll;
if(G__6879__6880)
{if((function (){var or__3943__auto____6881 = (G__6879__6880.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____6881)
{return or__3943__auto____6881;
} else
{return G__6879__6880.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6879__6880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6879__6880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6879__6880);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6882 = cljs.core.seq.call(null,coll);
if((s__6882 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6882);
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
{if((function (){var G__6887__6888 = coll;
if(G__6887__6888)
{if((function (){var or__3943__auto____6889 = (G__6887__6888.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____6889)
{return or__3943__auto____6889;
} else
{return G__6887__6888.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6887__6888.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6887__6888);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6887__6888);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6890 = cljs.core.seq.call(null,coll);
if(!((s__6890 == null)))
{return cljs.core._rest.call(null,s__6890);
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
{if((function (){var G__6894__6895 = coll;
if(G__6894__6895)
{if((function (){var or__3943__auto____6896 = (G__6894__6895.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto____6896)
{return or__3943__auto____6896;
} else
{return G__6894__6895.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6894__6895.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6894__6895);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6894__6895);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6898 = cljs.core.next.call(null,s);
if(!((sn__6898 == null)))
{{
var G__6899 = sn__6898;
s = G__6899;
continue;
}
} else
{return cljs.core.first.call(null,s);
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
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6900__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6901 = conj.call(null,coll,x);
var G__6902 = cljs.core.first.call(null,xs);
var G__6903 = cljs.core.next.call(null,xs);
coll = G__6901;
x = G__6902;
xs = G__6903;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6900 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6900__delegate.call(this, coll, x, xs);
};
G__6900.cljs$lang$maxFixedArity = 2;
G__6900.cljs$lang$applyTo = (function (arglist__6904){
var coll = cljs.core.first(arglist__6904);
var x = cljs.core.first(cljs.core.next(arglist__6904));
var xs = cljs.core.rest(cljs.core.next(arglist__6904));
return G__6900__delegate(coll, x, xs);
});
G__6900.cljs$lang$arity$variadic = G__6900__delegate;
return G__6900;
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
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6907 = cljs.core.seq.call(null,coll);
var acc__6908 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6907))
{return (acc__6908 + cljs.core._count.call(null,s__6907));
} else
{{
var G__6909 = cljs.core.next.call(null,s__6907);
var G__6910 = (acc__6908 + 1);
s__6907 = G__6909;
acc__6908 = G__6910;
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
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
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
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
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
{if((function (){var G__6917__6918 = coll;
if(G__6917__6918)
{if((function (){var or__3943__auto____6919 = (G__6917__6918.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____6919)
{return or__3943__auto____6919;
} else
{return G__6917__6918.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6917__6918.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6917__6918);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6917__6918);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6920__6921 = coll;
if(G__6920__6921)
{if((function (){var or__3943__auto____6922 = (G__6920__6921.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____6922)
{return or__3943__auto____6922;
} else
{return G__6920__6921.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6920__6921.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6920__6921);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6920__6921);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
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
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
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
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6925__delegate = function (coll,k,v,kvs){
while(true){
var ret__6924 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6926 = ret__6924;
var G__6927 = cljs.core.first.call(null,kvs);
var G__6928 = cljs.core.second.call(null,kvs);
var G__6929 = cljs.core.nnext.call(null,kvs);
coll = G__6926;
k = G__6927;
v = G__6928;
kvs = G__6929;
continue;
}
} else
{return ret__6924;
}
break;
}
};
var G__6925 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6925__delegate.call(this, coll, k, v, kvs);
};
G__6925.cljs$lang$maxFixedArity = 3;
G__6925.cljs$lang$applyTo = (function (arglist__6930){
var coll = cljs.core.first(arglist__6930);
var k = cljs.core.first(cljs.core.next(arglist__6930));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6930)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6930)));
return G__6925__delegate(coll, k, v, kvs);
});
G__6925.cljs$lang$arity$variadic = G__6925__delegate;
return G__6925;
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
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6933__delegate = function (coll,k,ks){
while(true){
var ret__6932 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6934 = ret__6932;
var G__6935 = cljs.core.first.call(null,ks);
var G__6936 = cljs.core.next.call(null,ks);
coll = G__6934;
k = G__6935;
ks = G__6936;
continue;
}
} else
{return ret__6932;
}
break;
}
};
var G__6933 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6933__delegate.call(this, coll, k, ks);
};
G__6933.cljs$lang$maxFixedArity = 2;
G__6933.cljs$lang$applyTo = (function (arglist__6937){
var coll = cljs.core.first(arglist__6937);
var k = cljs.core.first(cljs.core.next(arglist__6937));
var ks = cljs.core.rest(cljs.core.next(arglist__6937));
return G__6933__delegate(coll, k, ks);
});
G__6933.cljs$lang$arity$variadic = G__6933__delegate;
return G__6933;
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
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6941__6942 = o;
if(G__6941__6942)
{if((function (){var or__3943__auto____6943 = (G__6941__6942.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____6943)
{return or__3943__auto____6943;
} else
{return G__6941__6942.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6941__6942.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6941__6942);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6941__6942);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
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
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6946__delegate = function (coll,k,ks){
while(true){
var ret__6945 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6947 = ret__6945;
var G__6948 = cljs.core.first.call(null,ks);
var G__6949 = cljs.core.next.call(null,ks);
coll = G__6947;
k = G__6948;
ks = G__6949;
continue;
}
} else
{return ret__6945;
}
break;
}
};
var G__6946 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6946__delegate.call(this, coll, k, ks);
};
G__6946.cljs$lang$maxFixedArity = 2;
G__6946.cljs$lang$applyTo = (function (arglist__6950){
var coll = cljs.core.first(arglist__6950);
var k = cljs.core.first(cljs.core.next(arglist__6950));
var ks = cljs.core.rest(cljs.core.next(arglist__6950));
return G__6946__delegate(coll, k, ks);
});
G__6946.cljs$lang$arity$variadic = G__6946__delegate;
return G__6946;
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
var h__6952 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6952);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6952;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6954 = (cljs.core.string_hash_cache[k]);
if(!((h__6954 == null)))
{return h__6954;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto____6956 = goog.isString(o);
if(and__3941__auto____6956)
{return check_cache;
} else
{return and__3941__auto____6956;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
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
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6960__6961 = x;
if(G__6960__6961)
{if((function (){var or__3943__auto____6962 = (G__6960__6961.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto____6962)
{return or__3943__auto____6962;
} else
{return G__6960__6961.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6960__6961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6960__6961);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6960__6961);
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
{var G__6966__6967 = x;
if(G__6966__6967)
{if((function (){var or__3943__auto____6968 = (G__6966__6967.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto____6968)
{return or__3943__auto____6968;
} else
{return G__6966__6967.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6966__6967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6966__6967);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6966__6967);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6972__6973 = x;
if(G__6972__6973)
{if((function (){var or__3943__auto____6974 = (G__6972__6973.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto____6974)
{return or__3943__auto____6974;
} else
{return G__6972__6973.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6972__6973.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6972__6973);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6972__6973);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6978__6979 = x;
if(G__6978__6979)
{if((function (){var or__3943__auto____6980 = (G__6978__6979.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto____6980)
{return or__3943__auto____6980;
} else
{return G__6978__6979.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6978__6979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6978__6979);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6978__6979);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6984__6985 = x;
if(G__6984__6985)
{if((function (){var or__3943__auto____6986 = (G__6984__6985.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto____6986)
{return or__3943__auto____6986;
} else
{return G__6984__6985.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6984__6985.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6984__6985);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6984__6985);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6990__6991 = x;
if(G__6990__6991)
{if((function (){var or__3943__auto____6992 = (G__6990__6991.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____6992)
{return or__3943__auto____6992;
} else
{return G__6990__6991.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6990__6991.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6990__6991);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6990__6991);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6996__6997 = x;
if(G__6996__6997)
{if((function (){var or__3943__auto____6998 = (G__6996__6997.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____6998)
{return or__3943__auto____6998;
} else
{return G__6996__6997.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6996__6997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6996__6997);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6996__6997);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7002__7003 = x;
if(G__7002__7003)
{if((function (){var or__3943__auto____7004 = (G__7002__7003.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto____7004)
{return or__3943__auto____7004;
} else
{return G__7002__7003.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7002__7003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7002__7003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__7002__7003);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7008__7009 = x;
if(G__7008__7009)
{if((function (){var or__3943__auto____7010 = (G__7008__7009.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto____7010)
{return or__3943__auto____7010;
} else
{return G__7008__7009.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7008__7009.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7008__7009);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__7008__7009);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7014__7015 = x;
if(G__7014__7015)
{if(cljs.core.truth_((function (){var or__3943__auto____7016 = null;
if(cljs.core.truth_(or__3943__auto____7016))
{return or__3943__auto____7016;
} else
{return G__7014__7015.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7014__7015.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7014__7015);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__7014__7015);
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
var G__7017__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__7017 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7017__delegate.call(this, keyvals);
};
G__7017.cljs$lang$maxFixedArity = 0;
G__7017.cljs$lang$applyTo = (function (arglist__7018){
var keyvals = cljs.core.seq(arglist__7018);;
return G__7017__delegate(keyvals);
});
G__7017.cljs$lang$arity$variadic = G__7017__delegate;
return G__7017;
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
var keys__7020 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7020.push(key);
}));
return keys__7020;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7024 = i;
var j__7025 = j;
var len__7026 = len;
while(true){
if((len__7026 === 0))
{return to;
} else
{(to[j__7025] = (from[i__7024]));
{
var G__7027 = (i__7024 + 1);
var G__7028 = (j__7025 + 1);
var G__7029 = (len__7026 - 1);
i__7024 = G__7027;
j__7025 = G__7028;
len__7026 = G__7029;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7033 = (i + (len - 1));
var j__7034 = (j + (len - 1));
var len__7035 = len;
while(true){
if((len__7035 === 0))
{return to;
} else
{(to[j__7034] = (from[i__7033]));
{
var G__7036 = (i__7033 - 1);
var G__7037 = (j__7034 - 1);
var G__7038 = (len__7035 - 1);
i__7033 = G__7036;
j__7034 = G__7037;
len__7035 = G__7038;
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
{var G__7042__7043 = s;
if(G__7042__7043)
{if((function (){var or__3943__auto____7044 = (G__7042__7043.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____7044)
{return or__3943__auto____7044;
} else
{return G__7042__7043.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7042__7043.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7042__7043);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7042__7043);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7048__7049 = s;
if(G__7048__7049)
{if((function (){var or__3943__auto____7050 = (G__7048__7049.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____7050)
{return or__3943__auto____7050;
} else
{return G__7048__7049.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7048__7049.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7048__7049);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__7048__7049);
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
var and__3941__auto____7053 = goog.isString(x);
if(and__3941__auto____7053)
{return !((function (){var or__3943__auto____7054 = (x.charAt(0) === "\uFDD0");
if(or__3943__auto____7054)
{return or__3943__auto____7054;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto____7053;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto____7056 = goog.isString(x);
if(and__3941__auto____7056)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto____7056;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto____7058 = goog.isString(x);
if(and__3941__auto____7058)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto____7058;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto____7063 = cljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto____7063)
{return or__3943__auto____7063;
} else
{var G__7064__7065 = f;
if(G__7064__7065)
{if((function (){var or__3943__auto____7066 = (G__7064__7065.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____7066)
{return or__3943__auto____7066;
} else
{return G__7064__7065.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7064__7065.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7064__7065);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__7064__7065);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto____7068 = cljs.core.number_QMARK_.call(null,n);
if(and__3941__auto____7068)
{return (n == n.toFixed());
} else
{return and__3941__auto____7068;
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
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto____7071 = coll;
if(cljs.core.truth_(and__3941__auto____7071))
{var and__3941__auto____7072 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____7072)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____7072;
}
} else
{return and__3941__auto____7071;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
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
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7081__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__7077 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7078 = more;
while(true){
var x__7079 = cljs.core.first.call(null,xs__7078);
var etc__7080 = cljs.core.next.call(null,xs__7078);
if(cljs.core.truth_(xs__7078))
{if(cljs.core.contains_QMARK_.call(null,s__7077,x__7079))
{return false;
} else
{{
var G__7082 = cljs.core.conj.call(null,s__7077,x__7079);
var G__7083 = etc__7080;
s__7077 = G__7082;
xs__7078 = G__7083;
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
var G__7081 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7081__delegate.call(this, x, y, more);
};
G__7081.cljs$lang$maxFixedArity = 2;
G__7081.cljs$lang$applyTo = (function (arglist__7084){
var x = cljs.core.first(arglist__7084);
var y = cljs.core.first(cljs.core.next(arglist__7084));
var more = cljs.core.rest(cljs.core.next(arglist__7084));
return G__7081__delegate(x, y, more);
});
G__7081.cljs$lang$arity$variadic = G__7081__delegate;
return G__7081;
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
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__7088__7089 = x;
if(G__7088__7089)
{if(cljs.core.truth_((function (){var or__3943__auto____7090 = null;
if(cljs.core.truth_(or__3943__auto____7090))
{return or__3943__auto____7090;
} else
{return G__7088__7089.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7088__7089.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7088__7089);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__7088__7089);
}
})())
{return cljs.core._compare.call(null,x,y);
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
var xl__7095 = cljs.core.count.call(null,xs);
var yl__7096 = cljs.core.count.call(null,ys);
if((xl__7095 < yl__7096))
{return -1;
} else
{if((xl__7095 > yl__7096))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__7095,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7097 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto____7098 = (d__7097 === 0);
if(and__3941__auto____7098)
{return ((n + 1) < len);
} else
{return and__3941__auto____7098;
}
})())
{{
var G__7099 = xs;
var G__7100 = ys;
var G__7101 = len;
var G__7102 = (n + 1);
xs = G__7099;
ys = G__7100;
len = G__7101;
n = G__7102;
continue;
}
} else
{return d__7097;
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
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7104 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__7104))
{return r__7104;
} else
{if(cljs.core.truth_(r__7104))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
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
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__7106 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__7106,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7106);
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
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
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
var temp__4090__auto____7112 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____7112)
{var s__7113 = temp__4090__auto____7112;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7113),cljs.core.next.call(null,s__7113));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7114 = val;
var coll__7115 = cljs.core.seq.call(null,coll);
while(true){
if(coll__7115)
{var nval__7116 = f.call(null,val__7114,cljs.core.first.call(null,coll__7115));
if(cljs.core.reduced_QMARK_.call(null,nval__7116))
{return cljs.core.deref.call(null,nval__7116);
} else
{{
var G__7117 = nval__7116;
var G__7118 = cljs.core.next.call(null,coll__7115);
val__7114 = G__7117;
coll__7115 = G__7118;
continue;
}
}
} else
{return val__7114;
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
var a__7120 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__7120);
return cljs.core.vec.call(null,a__7120);
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
if((function (){var G__7127__7128 = coll;
if(G__7127__7128)
{if((function (){var or__3943__auto____7129 = (G__7127__7128.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____7129)
{return or__3943__auto____7129;
} else
{return G__7127__7128.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7127__7128.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7127__7128);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7127__7128);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7130__7131 = coll;
if(G__7130__7131)
{if((function (){var or__3943__auto____7132 = (G__7130__7131.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____7132)
{return or__3943__auto____7132;
} else
{return G__7130__7131.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7130__7131.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7130__7131);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__7130__7131);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
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
return cljs.core._kv_reduce.call(null,coll,f,init);
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
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7133 = this;
return this__7133.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
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
var G__7134__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7134 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7134__delegate.call(this, x, y, more);
};
G__7134.cljs$lang$maxFixedArity = 2;
G__7134.cljs$lang$applyTo = (function (arglist__7135){
var x = cljs.core.first(arglist__7135);
var y = cljs.core.first(cljs.core.next(arglist__7135));
var more = cljs.core.rest(cljs.core.next(arglist__7135));
return G__7134__delegate(x, y, more);
});
G__7134.cljs$lang$arity$variadic = G__7134__delegate;
return G__7134;
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
var G__7136__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7136__delegate.call(this, x, y, more);
};
G__7136.cljs$lang$maxFixedArity = 2;
G__7136.cljs$lang$applyTo = (function (arglist__7137){
var x = cljs.core.first(arglist__7137);
var y = cljs.core.first(cljs.core.next(arglist__7137));
var more = cljs.core.rest(cljs.core.next(arglist__7137));
return G__7136__delegate(x, y, more);
});
G__7136.cljs$lang$arity$variadic = G__7136__delegate;
return G__7136;
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
var G__7138__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7138 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7138__delegate.call(this, x, y, more);
};
G__7138.cljs$lang$maxFixedArity = 2;
G__7138.cljs$lang$applyTo = (function (arglist__7139){
var x = cljs.core.first(arglist__7139);
var y = cljs.core.first(cljs.core.next(arglist__7139));
var more = cljs.core.rest(cljs.core.next(arglist__7139));
return G__7138__delegate(x, y, more);
});
G__7138.cljs$lang$arity$variadic = G__7138__delegate;
return G__7138;
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
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7140__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7140__delegate.call(this, x, y, more);
};
G__7140.cljs$lang$maxFixedArity = 2;
G__7140.cljs$lang$applyTo = (function (arglist__7141){
var x = cljs.core.first(arglist__7141);
var y = cljs.core.first(cljs.core.next(arglist__7141));
var more = cljs.core.rest(cljs.core.next(arglist__7141));
return G__7140__delegate(x, y, more);
});
G__7140.cljs$lang$arity$variadic = G__7140__delegate;
return G__7140;
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
var G__7142__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__7143 = y;
var G__7144 = cljs.core.first.call(null,more);
var G__7145 = cljs.core.next.call(null,more);
x = G__7143;
y = G__7144;
more = G__7145;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7142__delegate.call(this, x, y, more);
};
G__7142.cljs$lang$maxFixedArity = 2;
G__7142.cljs$lang$applyTo = (function (arglist__7146){
var x = cljs.core.first(arglist__7146);
var y = cljs.core.first(cljs.core.next(arglist__7146));
var more = cljs.core.rest(cljs.core.next(arglist__7146));
return G__7142__delegate(x, y, more);
});
G__7142.cljs$lang$arity$variadic = G__7142__delegate;
return G__7142;
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
var G__7147__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__7148 = y;
var G__7149 = cljs.core.first.call(null,more);
var G__7150 = cljs.core.next.call(null,more);
x = G__7148;
y = G__7149;
more = G__7150;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7147__delegate.call(this, x, y, more);
};
G__7147.cljs$lang$maxFixedArity = 2;
G__7147.cljs$lang$applyTo = (function (arglist__7151){
var x = cljs.core.first(arglist__7151);
var y = cljs.core.first(cljs.core.next(arglist__7151));
var more = cljs.core.rest(cljs.core.next(arglist__7151));
return G__7147__delegate(x, y, more);
});
G__7147.cljs$lang$arity$variadic = G__7147__delegate;
return G__7147;
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
var G__7152__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__7153 = y;
var G__7154 = cljs.core.first.call(null,more);
var G__7155 = cljs.core.next.call(null,more);
x = G__7153;
y = G__7154;
more = G__7155;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7152__delegate.call(this, x, y, more);
};
G__7152.cljs$lang$maxFixedArity = 2;
G__7152.cljs$lang$applyTo = (function (arglist__7156){
var x = cljs.core.first(arglist__7156);
var y = cljs.core.first(cljs.core.next(arglist__7156));
var more = cljs.core.rest(cljs.core.next(arglist__7156));
return G__7152__delegate(x, y, more);
});
G__7152.cljs$lang$arity$variadic = G__7152__delegate;
return G__7152;
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
var G__7157__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__7158 = y;
var G__7159 = cljs.core.first.call(null,more);
var G__7160 = cljs.core.next.call(null,more);
x = G__7158;
y = G__7159;
more = G__7160;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7157__delegate.call(this, x, y, more);
};
G__7157.cljs$lang$maxFixedArity = 2;
G__7157.cljs$lang$applyTo = (function (arglist__7161){
var x = cljs.core.first(arglist__7161);
var y = cljs.core.first(cljs.core.next(arglist__7161));
var more = cljs.core.rest(cljs.core.next(arglist__7161));
return G__7157__delegate(x, y, more);
});
G__7157.cljs$lang$arity$variadic = G__7157__delegate;
return G__7157;
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
var G__7162__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7162 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7162__delegate.call(this, x, y, more);
};
G__7162.cljs$lang$maxFixedArity = 2;
G__7162.cljs$lang$applyTo = (function (arglist__7163){
var x = cljs.core.first(arglist__7163);
var y = cljs.core.first(cljs.core.next(arglist__7163));
var more = cljs.core.rest(cljs.core.next(arglist__7163));
return G__7162__delegate(x, y, more);
});
G__7162.cljs$lang$arity$variadic = G__7162__delegate;
return G__7162;
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
var G__7164__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7164 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7164__delegate.call(this, x, y, more);
};
G__7164.cljs$lang$maxFixedArity = 2;
G__7164.cljs$lang$applyTo = (function (arglist__7165){
var x = cljs.core.first(arglist__7165);
var y = cljs.core.first(cljs.core.next(arglist__7165));
var more = cljs.core.rest(cljs.core.next(arglist__7165));
return G__7164__delegate(x, y, more);
});
G__7164.cljs$lang$arity$variadic = G__7164__delegate;
return G__7164;
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
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
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
var rem__7167 = (n % d);
return cljs.core.fix.call(null,((n - rem__7167) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7169 = cljs.core.quot.call(null,n,d);
return (n - (d * q__7169));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
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
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
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
var v__7172 = (v - ((v >> 1) & 1431655765));
var v__7173 = ((v__7172 & 858993459) + ((v__7172 >> 2) & 858993459));
return ((((v__7173 + (v__7173 >> 4)) & 252645135) * 16843009) >> 24);
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
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7174__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7175 = y;
var G__7176 = cljs.core.first.call(null,more);
var G__7177 = cljs.core.next.call(null,more);
x = G__7175;
y = G__7176;
more = G__7177;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7174 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7174__delegate.call(this, x, y, more);
};
G__7174.cljs$lang$maxFixedArity = 2;
G__7174.cljs$lang$applyTo = (function (arglist__7178){
var x = cljs.core.first(arglist__7178);
var y = cljs.core.first(cljs.core.next(arglist__7178));
var more = cljs.core.rest(cljs.core.next(arglist__7178));
return G__7174__delegate(x, y, more);
});
G__7174.cljs$lang$arity$variadic = G__7174__delegate;
return G__7174;
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
var n__7182 = n;
var xs__7183 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7184 = xs__7183;
if(and__3941__auto____7184)
{return (n__7182 > 0);
} else
{return and__3941__auto____7184;
}
})()))
{{
var G__7185 = (n__7182 - 1);
var G__7186 = cljs.core.next.call(null,xs__7183);
n__7182 = G__7185;
xs__7183 = G__7186;
continue;
}
} else
{return xs__7183;
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
var G__7187__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7188 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7189 = cljs.core.next.call(null,more);
sb = G__7188;
more = G__7189;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7187 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7187__delegate.call(this, x, ys);
};
G__7187.cljs$lang$maxFixedArity = 1;
G__7187.cljs$lang$applyTo = (function (arglist__7190){
var x = cljs.core.first(arglist__7190);
var ys = cljs.core.rest(arglist__7190);
return G__7187__delegate(x, ys);
});
G__7187.cljs$lang$arity$variadic = G__7187__delegate;
return G__7187;
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
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
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
var G__7191__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7192 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__7193 = cljs.core.next.call(null,more);
sb = G__7192;
more = G__7193;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__7191 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7191__delegate.call(this, x, ys);
};
G__7191.cljs$lang$maxFixedArity = 1;
G__7191.cljs$lang$applyTo = (function (arglist__7194){
var x = cljs.core.first(arglist__7194);
var ys = cljs.core.rest(arglist__7194);
return G__7191__delegate(x, ys);
});
G__7191.cljs$lang$arity$variadic = G__7191__delegate;
return G__7191;
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
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7195){
var fmt = cljs.core.first(arglist__7195);
var args = cljs.core.rest(arglist__7195);
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
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
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
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7198 = cljs.core.seq.call(null,x);
var ys__7199 = cljs.core.seq.call(null,y);
while(true){
if((xs__7198 == null))
{return (ys__7199 == null);
} else
{if((ys__7199 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7198),cljs.core.first.call(null,ys__7199)))
{{
var G__7200 = cljs.core.next.call(null,xs__7198);
var G__7201 = cljs.core.next.call(null,ys__7199);
xs__7198 = G__7200;
ys__7199 = G__7201;
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
return cljs.core.reduce.call(null,(function (p1__7202_SHARP_,p2__7203_SHARP_){
return cljs.core.hash_combine.call(null,p1__7202_SHARP_,cljs.core.hash.call(null,p2__7203_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7207 = 0;
var s__7208 = cljs.core.seq.call(null,m);
while(true){
if(s__7208)
{var e__7209 = cljs.core.first.call(null,s__7208);
{
var G__7210 = ((h__7207 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__7209)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__7209)))) % 4503599627370496);
var G__7211 = cljs.core.next.call(null,s__7208);
h__7207 = G__7210;
s__7208 = G__7211;
continue;
}
} else
{return h__7207;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7215 = 0;
var s__7216 = cljs.core.seq.call(null,s);
while(true){
if(s__7216)
{var e__7217 = cljs.core.first.call(null,s__7216);
{
var G__7218 = ((h__7215 + cljs.core.hash.call(null,e__7217)) % 4503599627370496);
var G__7219 = cljs.core.next.call(null,s__7216);
h__7215 = G__7218;
s__7216 = G__7219;
continue;
}
} else
{return h__7215;
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
var G__7240__7241 = cljs.core.seq.call(null,fn_map);
if(G__7240__7241)
{var G__7243__7245 = cljs.core.first.call(null,G__7240__7241);
var vec__7244__7246 = G__7243__7245;
var key_name__7247 = cljs.core.nth.call(null,vec__7244__7246,0,null);
var f__7248 = cljs.core.nth.call(null,vec__7244__7246,1,null);
var G__7240__7249 = G__7240__7241;
var G__7243__7250 = G__7243__7245;
var G__7240__7251 = G__7240__7249;
while(true){
var vec__7252__7253 = G__7243__7250;
var key_name__7254 = cljs.core.nth.call(null,vec__7252__7253,0,null);
var f__7255 = cljs.core.nth.call(null,vec__7252__7253,1,null);
var G__7240__7256 = G__7240__7251;
var str_name__7257 = cljs.core.name.call(null,key_name__7254);
(obj[str_name__7257] = f__7255);
var temp__4092__auto____7258 = cljs.core.next.call(null,G__7240__7256);
if(temp__4092__auto____7258)
{var G__7240__7259 = temp__4092__auto____7258;
{
var G__7260 = cljs.core.first.call(null,G__7240__7259);
var G__7261 = G__7240__7259;
G__7243__7250 = G__7260;
G__7240__7251 = G__7261;
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
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7262 = this;
var h__2253__auto____7263 = this__7262.__hash;
if(!((h__2253__auto____7263 == null)))
{return h__2253__auto____7263;
} else
{var h__2253__auto____7264 = cljs.core.hash_coll.call(null,coll);
this__7262.__hash = h__2253__auto____7264;
return h__2253__auto____7264;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7265 = this;
if((this__7265.count === 1))
{return null;
} else
{return this__7265.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7266 = this;
return (new cljs.core.List(this__7266.meta,o,coll,(this__7266.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7267 = this;
var this__7268 = this;
return cljs.core.pr_str.call(null,this__7268);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7269 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7270 = this;
return this__7270.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7271 = this;
return this__7271.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7272 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7273 = this;
return this__7273.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7274 = this;
if((this__7274.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7274.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7275 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7276 = this;
return (new cljs.core.List(meta,this__7276.first,this__7276.rest,this__7276.count,this__7276.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7277 = this;
return this__7277.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7278 = this;
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
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7279 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7280 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7281 = this;
return (new cljs.core.List(this__7281.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7282 = this;
var this__7283 = this;
return cljs.core.pr_str.call(null,this__7283);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7284 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7285 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7286 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7287 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7288 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7289 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7290 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7291 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7292 = this;
return this__7292.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7293 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7297__7298 = coll;
if(G__7297__7298)
{if((function (){var or__3943__auto____7299 = (G__7297__7298.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto____7299)
{return or__3943__auto____7299;
} else
{return G__7297__7298.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7297__7298.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7297__7298);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__7297__7298);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
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
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__7300__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__7300 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7300__delegate.call(this, x, y, z, items);
};
G__7300.cljs$lang$maxFixedArity = 3;
G__7300.cljs$lang$applyTo = (function (arglist__7301){
var x = cljs.core.first(arglist__7301);
var y = cljs.core.first(cljs.core.next(arglist__7301));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7301)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7301)));
return G__7300__delegate(x, y, z, items);
});
G__7300.cljs$lang$arity$variadic = G__7300__delegate;
return G__7300;
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
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7302 = this;
var h__2253__auto____7303 = this__7302.__hash;
if(!((h__2253__auto____7303 == null)))
{return h__2253__auto____7303;
} else
{var h__2253__auto____7304 = cljs.core.hash_coll.call(null,coll);
this__7302.__hash = h__2253__auto____7304;
return h__2253__auto____7304;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7305 = this;
if((this__7305.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__7305.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7306 = this;
return (new cljs.core.Cons(null,o,coll,this__7306.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7307 = this;
var this__7308 = this;
return cljs.core.pr_str.call(null,this__7308);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7309 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7310 = this;
return this__7310.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7311 = this;
if((this__7311.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7311.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7312 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7313 = this;
return (new cljs.core.Cons(meta,this__7313.first,this__7313.rest,this__7313.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7314 = this;
return this__7314.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7315 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7315.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto____7320 = (coll == null);
if(or__3943__auto____7320)
{return or__3943__auto____7320;
} else
{var G__7321__7322 = coll;
if(G__7321__7322)
{if((function (){var or__3943__auto____7323 = (G__7321__7322.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____7323)
{return or__3943__auto____7323;
} else
{return G__7321__7322.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7321__7322.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7321__7322);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__7321__7322);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7327__7328 = x;
if(G__7327__7328)
{if((function (){var or__3943__auto____7329 = (G__7327__7328.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____7329)
{return or__3943__auto____7329;
} else
{return G__7327__7328.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7327__7328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7327__7328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__7327__7328);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7330 = null;
var G__7330__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__7330__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__7330 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7330__2.call(this,string,f);
case 3:
return G__7330__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7330;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7331 = null;
var G__7331__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__7331__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__7331 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7331__2.call(this,string,k);
case 3:
return G__7331__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7331;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7332 = null;
var G__7332__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7332__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7332 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7332__2.call(this,string,n);
case 3:
return G__7332__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7332;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
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
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7344 = null;
var G__7344__2 = (function (this_sym7335,coll){
var this__7337 = this;
var this_sym7335__7338 = this;
var ___7339 = this_sym7335__7338;
if((coll == null))
{return null;
} else
{var strobj__7340 = coll.strobj;
if((strobj__7340 == null))
{return cljs.core._lookup.call(null,coll,this__7337.k,null);
} else
{return (strobj__7340[this__7337.k]);
}
}
});
var G__7344__3 = (function (this_sym7336,coll,not_found){
var this__7337 = this;
var this_sym7336__7341 = this;
var ___7342 = this_sym7336__7341;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__7337.k,not_found);
}
});
G__7344 = function(this_sym7336,coll,not_found){
switch(arguments.length){
case 2:
return G__7344__2.call(this,this_sym7336,coll);
case 3:
return G__7344__3.call(this,this_sym7336,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7344;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7333,args7334){
var this__7343 = this;
return this_sym7333.call.apply(this_sym7333,[this_sym7333].concat(args7334.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7353 = null;
var G__7353__2 = (function (this_sym7347,coll){
var this_sym7347__7349 = this;
var this__7350 = this_sym7347__7349;
return cljs.core._lookup.call(null,coll,this__7350.toString(),null);
});
var G__7353__3 = (function (this_sym7348,coll,not_found){
var this_sym7348__7351 = this;
var this__7352 = this_sym7348__7351;
return cljs.core._lookup.call(null,coll,this__7352.toString(),not_found);
});
G__7353 = function(this_sym7348,coll,not_found){
switch(arguments.length){
case 2:
return G__7353__2.call(this,this_sym7348,coll);
case 3:
return G__7353__3.call(this,this_sym7348,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7353;
})()
;
String.prototype.apply = (function (this_sym7345,args7346){
return this_sym7345.call.apply(this_sym7345,[this_sym7345].concat(args7346.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7355 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7355;
} else
{lazy_seq.x = x__7355.call(null);
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
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7356 = this;
var h__2253__auto____7357 = this__7356.__hash;
if(!((h__2253__auto____7357 == null)))
{return h__2253__auto____7357;
} else
{var h__2253__auto____7358 = cljs.core.hash_coll.call(null,coll);
this__7356.__hash = h__2253__auto____7358;
return h__2253__auto____7358;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7359 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7360 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7361 = this;
var this__7362 = this;
return cljs.core.pr_str.call(null,this__7362);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7363 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7364 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7365 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7367 = this;
return (new cljs.core.LazySeq(meta,this__7367.realized,this__7367.x,this__7367.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7368 = this;
return this__7368.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7369 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__7369.meta);
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
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7370 = this;
return this__7370.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7371 = this;
var ___7372 = this;
(this__7371.buf[this__7371.end] = o);
return this__7371.end = (this__7371.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7373 = this;
var ___7374 = this;
var ret__7375 = (new cljs.core.ArrayChunk(this__7373.buf,0,this__7373.end));
this__7373.buf = null;
return ret__7375;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
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
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7376 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__7376.arr[this__7376.off]),(this__7376.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7377 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__7377.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7378 = this;
if((this__7378.off === this__7378.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7378.arr,(this__7378.off + 1),this__7378.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7379 = this;
return (this__7379.arr[(this__7379.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7380 = this;
if((function (){var and__3941__auto____7381 = (i >= 0);
if(and__3941__auto____7381)
{return (i < (this__7380.end - this__7380.off));
} else
{return and__3941__auto____7381;
}
})())
{return (this__7380.arr[(this__7380.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7382 = this;
return (this__7382.end - this__7382.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
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
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7383 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7384 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7385 = this;
return cljs.core._nth.call(null,this__7385.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7386 = this;
if((cljs.core._count.call(null,this__7386.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__7386.chunk),this__7386.more,this__7386.meta));
} else
{if((this__7386.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7386.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7387 = this;
if((this__7387.more == null))
{return null;
} else
{return this__7387.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7389 = this;
return (new cljs.core.ChunkedCons(this__7389.chunk,this__7389.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7390 = this;
return this__7390.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7391 = this;
return this__7391.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7392 = this;
if((this__7392.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7392.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
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
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7396__7397 = s;
if(G__7396__7397)
{if(cljs.core.truth_((function (){var or__3943__auto____7398 = null;
if(cljs.core.truth_(or__3943__auto____7398))
{return or__3943__auto____7398;
} else
{return G__7396__7397.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7396__7397.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7396__7397);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__7396__7397);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7401 = [];
var s__7402 = s;
while(true){
if(cljs.core.seq.call(null,s__7402))
{ary__7401.push(cljs.core.first.call(null,s__7402));
{
var G__7403 = cljs.core.next.call(null,s__7402);
s__7402 = G__7403;
continue;
}
} else
{return ary__7401;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7407 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__7408 = 0;
var xs__7409 = cljs.core.seq.call(null,coll);
while(true){
if(xs__7409)
{(ret__7407[i__7408] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__7409)));
{
var G__7410 = (i__7408 + 1);
var G__7411 = cljs.core.next.call(null,xs__7409);
i__7408 = G__7410;
xs__7409 = G__7411;
continue;
}
} else
{}
break;
}
return ret__7407;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
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
var a__7419 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7420 = cljs.core.seq.call(null,init_val_or_seq);
var i__7421 = 0;
var s__7422 = s__7420;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7423 = s__7422;
if(and__3941__auto____7423)
{return (i__7421 < size);
} else
{return and__3941__auto____7423;
}
})()))
{(a__7419[i__7421] = cljs.core.first.call(null,s__7422));
{
var G__7426 = (i__7421 + 1);
var G__7427 = cljs.core.next.call(null,s__7422);
i__7421 = G__7426;
s__7422 = G__7427;
continue;
}
} else
{return a__7419;
}
break;
}
} else
{var n__2588__auto____7424 = size;
var i__7425 = 0;
while(true){
if((i__7425 < n__2588__auto____7424))
{(a__7419[i__7425] = init_val_or_seq);
{
var G__7428 = (i__7425 + 1);
i__7425 = G__7428;
continue;
}
} else
{}
break;
}
return a__7419;
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
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
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
var a__7436 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7437 = cljs.core.seq.call(null,init_val_or_seq);
var i__7438 = 0;
var s__7439 = s__7437;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7440 = s__7439;
if(and__3941__auto____7440)
{return (i__7438 < size);
} else
{return and__3941__auto____7440;
}
})()))
{(a__7436[i__7438] = cljs.core.first.call(null,s__7439));
{
var G__7443 = (i__7438 + 1);
var G__7444 = cljs.core.next.call(null,s__7439);
i__7438 = G__7443;
s__7439 = G__7444;
continue;
}
} else
{return a__7436;
}
break;
}
} else
{var n__2588__auto____7441 = size;
var i__7442 = 0;
while(true){
if((i__7442 < n__2588__auto____7441))
{(a__7436[i__7442] = init_val_or_seq);
{
var G__7445 = (i__7442 + 1);
i__7442 = G__7445;
continue;
}
} else
{}
break;
}
return a__7436;
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
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
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
var a__7453 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7454 = cljs.core.seq.call(null,init_val_or_seq);
var i__7455 = 0;
var s__7456 = s__7454;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7457 = s__7456;
if(and__3941__auto____7457)
{return (i__7455 < size);
} else
{return and__3941__auto____7457;
}
})()))
{(a__7453[i__7455] = cljs.core.first.call(null,s__7456));
{
var G__7460 = (i__7455 + 1);
var G__7461 = cljs.core.next.call(null,s__7456);
i__7455 = G__7460;
s__7456 = G__7461;
continue;
}
} else
{return a__7453;
}
break;
}
} else
{var n__2588__auto____7458 = size;
var i__7459 = 0;
while(true){
if((i__7459 < n__2588__auto____7458))
{(a__7453[i__7459] = init_val_or_seq);
{
var G__7462 = (i__7459 + 1);
i__7459 = G__7462;
continue;
}
} else
{}
break;
}
return a__7453;
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
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7467 = s;
var i__7468 = n;
var sum__7469 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____7470 = (i__7468 > 0);
if(and__3941__auto____7470)
{return cljs.core.seq.call(null,s__7467);
} else
{return and__3941__auto____7470;
}
})()))
{{
var G__7471 = cljs.core.next.call(null,s__7467);
var G__7472 = (i__7468 - 1);
var G__7473 = (sum__7469 + 1);
s__7467 = G__7471;
i__7468 = G__7472;
sum__7469 = G__7473;
continue;
}
} else
{return sum__7469;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
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
var s__7478 = cljs.core.seq.call(null,x);
if(s__7478)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7478))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7478),concat.call(null,cljs.core.chunk_rest.call(null,s__7478),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7478),concat.call(null,cljs.core.rest.call(null,s__7478),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7482__delegate = function (x,y,zs){
var cat__7481 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7480 = cljs.core.seq.call(null,xys);
if(xys__7480)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7480))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7480),cat.call(null,cljs.core.chunk_rest.call(null,xys__7480),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7480),cat.call(null,cljs.core.rest.call(null,xys__7480),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7481.call(null,concat.call(null,x,y),zs);
};
var G__7482 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7482__delegate.call(this, x, y, zs);
};
G__7482.cljs$lang$maxFixedArity = 2;
G__7482.cljs$lang$applyTo = (function (arglist__7483){
var x = cljs.core.first(arglist__7483);
var y = cljs.core.first(cljs.core.next(arglist__7483));
var zs = cljs.core.rest(cljs.core.next(arglist__7483));
return G__7482__delegate(x, y, zs);
});
G__7482.cljs$lang$arity$variadic = G__7482__delegate;
return G__7482;
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
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7484__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7484 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7484__delegate.call(this, a, b, c, d, more);
};
G__7484.cljs$lang$maxFixedArity = 4;
G__7484.cljs$lang$applyTo = (function (arglist__7485){
var a = cljs.core.first(arglist__7485);
var b = cljs.core.first(cljs.core.next(arglist__7485));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7485)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7485))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7485))));
return G__7484__delegate(a, b, c, d, more);
});
G__7484.cljs$lang$arity$variadic = G__7484__delegate;
return G__7484;
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
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7527 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7528 = cljs.core._first.call(null,args__7527);
var args__7529 = cljs.core._rest.call(null,args__7527);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7528);
} else
{return f.call(null,a__7528);
}
} else
{var b__7530 = cljs.core._first.call(null,args__7529);
var args__7531 = cljs.core._rest.call(null,args__7529);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7528,b__7530);
} else
{return f.call(null,a__7528,b__7530);
}
} else
{var c__7532 = cljs.core._first.call(null,args__7531);
var args__7533 = cljs.core._rest.call(null,args__7531);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7528,b__7530,c__7532);
} else
{return f.call(null,a__7528,b__7530,c__7532);
}
} else
{var d__7534 = cljs.core._first.call(null,args__7533);
var args__7535 = cljs.core._rest.call(null,args__7533);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7528,b__7530,c__7532,d__7534);
} else
{return f.call(null,a__7528,b__7530,c__7532,d__7534);
}
} else
{var e__7536 = cljs.core._first.call(null,args__7535);
var args__7537 = cljs.core._rest.call(null,args__7535);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7528,b__7530,c__7532,d__7534,e__7536);
} else
{return f.call(null,a__7528,b__7530,c__7532,d__7534,e__7536);
}
} else
{var f__7538 = cljs.core._first.call(null,args__7537);
var args__7539 = cljs.core._rest.call(null,args__7537);
if((argc === 6))
{if(f__7538.cljs$lang$arity$6)
{return f__7538.cljs$lang$arity$6(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538);
}
} else
{var g__7540 = cljs.core._first.call(null,args__7539);
var args__7541 = cljs.core._rest.call(null,args__7539);
if((argc === 7))
{if(f__7538.cljs$lang$arity$7)
{return f__7538.cljs$lang$arity$7(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540);
}
} else
{var h__7542 = cljs.core._first.call(null,args__7541);
var args__7543 = cljs.core._rest.call(null,args__7541);
if((argc === 8))
{if(f__7538.cljs$lang$arity$8)
{return f__7538.cljs$lang$arity$8(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542);
}
} else
{var i__7544 = cljs.core._first.call(null,args__7543);
var args__7545 = cljs.core._rest.call(null,args__7543);
if((argc === 9))
{if(f__7538.cljs$lang$arity$9)
{return f__7538.cljs$lang$arity$9(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544);
}
} else
{var j__7546 = cljs.core._first.call(null,args__7545);
var args__7547 = cljs.core._rest.call(null,args__7545);
if((argc === 10))
{if(f__7538.cljs$lang$arity$10)
{return f__7538.cljs$lang$arity$10(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546);
}
} else
{var k__7548 = cljs.core._first.call(null,args__7547);
var args__7549 = cljs.core._rest.call(null,args__7547);
if((argc === 11))
{if(f__7538.cljs$lang$arity$11)
{return f__7538.cljs$lang$arity$11(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548);
}
} else
{var l__7550 = cljs.core._first.call(null,args__7549);
var args__7551 = cljs.core._rest.call(null,args__7549);
if((argc === 12))
{if(f__7538.cljs$lang$arity$12)
{return f__7538.cljs$lang$arity$12(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550);
}
} else
{var m__7552 = cljs.core._first.call(null,args__7551);
var args__7553 = cljs.core._rest.call(null,args__7551);
if((argc === 13))
{if(f__7538.cljs$lang$arity$13)
{return f__7538.cljs$lang$arity$13(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552);
}
} else
{var n__7554 = cljs.core._first.call(null,args__7553);
var args__7555 = cljs.core._rest.call(null,args__7553);
if((argc === 14))
{if(f__7538.cljs$lang$arity$14)
{return f__7538.cljs$lang$arity$14(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554);
}
} else
{var o__7556 = cljs.core._first.call(null,args__7555);
var args__7557 = cljs.core._rest.call(null,args__7555);
if((argc === 15))
{if(f__7538.cljs$lang$arity$15)
{return f__7538.cljs$lang$arity$15(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556);
}
} else
{var p__7558 = cljs.core._first.call(null,args__7557);
var args__7559 = cljs.core._rest.call(null,args__7557);
if((argc === 16))
{if(f__7538.cljs$lang$arity$16)
{return f__7538.cljs$lang$arity$16(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558);
}
} else
{var q__7560 = cljs.core._first.call(null,args__7559);
var args__7561 = cljs.core._rest.call(null,args__7559);
if((argc === 17))
{if(f__7538.cljs$lang$arity$17)
{return f__7538.cljs$lang$arity$17(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560);
}
} else
{var r__7562 = cljs.core._first.call(null,args__7561);
var args__7563 = cljs.core._rest.call(null,args__7561);
if((argc === 18))
{if(f__7538.cljs$lang$arity$18)
{return f__7538.cljs$lang$arity$18(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562);
}
} else
{var s__7564 = cljs.core._first.call(null,args__7563);
var args__7565 = cljs.core._rest.call(null,args__7563);
if((argc === 19))
{if(f__7538.cljs$lang$arity$19)
{return f__7538.cljs$lang$arity$19(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562,s__7564);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562,s__7564);
}
} else
{var t__7566 = cljs.core._first.call(null,args__7565);
var args__7567 = cljs.core._rest.call(null,args__7565);
if((argc === 20))
{if(f__7538.cljs$lang$arity$20)
{return f__7538.cljs$lang$arity$20(a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562,s__7564,t__7566);
} else
{return f__7538.call(null,a__7528,b__7530,c__7532,d__7534,e__7536,f__7538,g__7540,h__7542,i__7544,j__7546,k__7548,l__7550,m__7552,n__7554,o__7556,p__7558,q__7560,r__7562,s__7564,t__7566);
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
var fixed_arity__7582 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7583 = cljs.core.bounded_count.call(null,args,(fixed_arity__7582 + 1));
if((bc__7583 <= fixed_arity__7582))
{return cljs.core.apply_to.call(null,f,bc__7583,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7584 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7585 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7586 = cljs.core.bounded_count.call(null,arglist__7584,(fixed_arity__7585 + 1));
if((bc__7586 <= fixed_arity__7585))
{return cljs.core.apply_to.call(null,f,bc__7586,arglist__7584);
} else
{return f.cljs$lang$applyTo(arglist__7584);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7584));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7587 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7588 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7589 = cljs.core.bounded_count.call(null,arglist__7587,(fixed_arity__7588 + 1));
if((bc__7589 <= fixed_arity__7588))
{return cljs.core.apply_to.call(null,f,bc__7589,arglist__7587);
} else
{return f.cljs$lang$applyTo(arglist__7587);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7587));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7590 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7591 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7592 = cljs.core.bounded_count.call(null,arglist__7590,(fixed_arity__7591 + 1));
if((bc__7592 <= fixed_arity__7591))
{return cljs.core.apply_to.call(null,f,bc__7592,arglist__7590);
} else
{return f.cljs$lang$applyTo(arglist__7590);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7590));
}
});
var apply__6 = (function() { 
var G__7596__delegate = function (f,a,b,c,d,args){
var arglist__7593 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7594 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7595 = cljs.core.bounded_count.call(null,arglist__7593,(fixed_arity__7594 + 1));
if((bc__7595 <= fixed_arity__7594))
{return cljs.core.apply_to.call(null,f,bc__7595,arglist__7593);
} else
{return f.cljs$lang$applyTo(arglist__7593);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7593));
}
};
var G__7596 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7596__delegate.call(this, f, a, b, c, d, args);
};
G__7596.cljs$lang$maxFixedArity = 5;
G__7596.cljs$lang$applyTo = (function (arglist__7597){
var f = cljs.core.first(arglist__7597);
var a = cljs.core.first(cljs.core.next(arglist__7597));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7597)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7597))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7597)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7597)))));
return G__7596__delegate(f, a, b, c, d, args);
});
G__7596.cljs$lang$arity$variadic = G__7596__delegate;
return G__7596;
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
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7598){
var obj = cljs.core.first(arglist__7598);
var f = cljs.core.first(cljs.core.next(arglist__7598));
var args = cljs.core.rest(cljs.core.next(arglist__7598));
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
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7599__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7599 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7599__delegate.call(this, x, y, more);
};
G__7599.cljs$lang$maxFixedArity = 2;
G__7599.cljs$lang$applyTo = (function (arglist__7600){
var x = cljs.core.first(arglist__7600);
var y = cljs.core.first(cljs.core.next(arglist__7600));
var more = cljs.core.rest(cljs.core.next(arglist__7600));
return G__7599__delegate(x, y, more);
});
G__7599.cljs$lang$arity$variadic = G__7599__delegate;
return G__7599;
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
if(cljs.core.seq.call(null,coll))
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
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7601 = pred;
var G__7602 = cljs.core.next.call(null,coll);
pred = G__7601;
coll = G__7602;
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
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3943__auto____7604 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3943__auto____7604))
{return or__3943__auto____7604;
} else
{{
var G__7605 = pred;
var G__7606 = cljs.core.next.call(null,coll);
pred = G__7605;
coll = G__7606;
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
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
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
var G__7607 = null;
var G__7607__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7607__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7607__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7607__3 = (function() { 
var G__7608__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7608 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7608__delegate.call(this, x, y, zs);
};
G__7608.cljs$lang$maxFixedArity = 2;
G__7608.cljs$lang$applyTo = (function (arglist__7609){
var x = cljs.core.first(arglist__7609);
var y = cljs.core.first(cljs.core.next(arglist__7609));
var zs = cljs.core.rest(cljs.core.next(arglist__7609));
return G__7608__delegate(x, y, zs);
});
G__7608.cljs$lang$arity$variadic = G__7608__delegate;
return G__7608;
})()
;
G__7607 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7607__0.call(this);
case 1:
return G__7607__1.call(this,x);
case 2:
return G__7607__2.call(this,x,y);
default:
return G__7607__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7607.cljs$lang$maxFixedArity = 2;
G__7607.cljs$lang$applyTo = G__7607__3.cljs$lang$applyTo;
return G__7607;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7610__delegate = function (args){
return x;
};
var G__7610 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7610__delegate.call(this, args);
};
G__7610.cljs$lang$maxFixedArity = 0;
G__7610.cljs$lang$applyTo = (function (arglist__7611){
var args = cljs.core.seq(arglist__7611);;
return G__7610__delegate(args);
});
G__7610.cljs$lang$arity$variadic = G__7610__delegate;
return G__7610;
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
var G__7618 = null;
var G__7618__0 = (function (){
return f.call(null,g.call(null));
});
var G__7618__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7618__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7618__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7618__4 = (function() { 
var G__7619__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7619__delegate.call(this, x, y, z, args);
};
G__7619.cljs$lang$maxFixedArity = 3;
G__7619.cljs$lang$applyTo = (function (arglist__7620){
var x = cljs.core.first(arglist__7620);
var y = cljs.core.first(cljs.core.next(arglist__7620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7620)));
return G__7619__delegate(x, y, z, args);
});
G__7619.cljs$lang$arity$variadic = G__7619__delegate;
return G__7619;
})()
;
G__7618 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7618__0.call(this);
case 1:
return G__7618__1.call(this,x);
case 2:
return G__7618__2.call(this,x,y);
case 3:
return G__7618__3.call(this,x,y,z);
default:
return G__7618__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7618.cljs$lang$maxFixedArity = 3;
G__7618.cljs$lang$applyTo = G__7618__4.cljs$lang$applyTo;
return G__7618;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7621 = null;
var G__7621__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7621__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7621__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7621__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7621__4 = (function() { 
var G__7622__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7622__delegate.call(this, x, y, z, args);
};
G__7622.cljs$lang$maxFixedArity = 3;
G__7622.cljs$lang$applyTo = (function (arglist__7623){
var x = cljs.core.first(arglist__7623);
var y = cljs.core.first(cljs.core.next(arglist__7623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7623)));
return G__7622__delegate(x, y, z, args);
});
G__7622.cljs$lang$arity$variadic = G__7622__delegate;
return G__7622;
})()
;
G__7621 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7621__0.call(this);
case 1:
return G__7621__1.call(this,x);
case 2:
return G__7621__2.call(this,x,y);
case 3:
return G__7621__3.call(this,x,y,z);
default:
return G__7621__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7621.cljs$lang$maxFixedArity = 3;
G__7621.cljs$lang$applyTo = G__7621__4.cljs$lang$applyTo;
return G__7621;
})()
});
var comp__4 = (function() { 
var G__7624__delegate = function (f1,f2,f3,fs){
var fs__7615 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7625__delegate = function (args){
var ret__7616 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7615),args);
var fs__7617 = cljs.core.next.call(null,fs__7615);
while(true){
if(fs__7617)
{{
var G__7626 = cljs.core.first.call(null,fs__7617).call(null,ret__7616);
var G__7627 = cljs.core.next.call(null,fs__7617);
ret__7616 = G__7626;
fs__7617 = G__7627;
continue;
}
} else
{return ret__7616;
}
break;
}
};
var G__7625 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7625__delegate.call(this, args);
};
G__7625.cljs$lang$maxFixedArity = 0;
G__7625.cljs$lang$applyTo = (function (arglist__7628){
var args = cljs.core.seq(arglist__7628);;
return G__7625__delegate(args);
});
G__7625.cljs$lang$arity$variadic = G__7625__delegate;
return G__7625;
})()
;
};
var G__7624 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7624__delegate.call(this, f1, f2, f3, fs);
};
G__7624.cljs$lang$maxFixedArity = 3;
G__7624.cljs$lang$applyTo = (function (arglist__7629){
var f1 = cljs.core.first(arglist__7629);
var f2 = cljs.core.first(cljs.core.next(arglist__7629));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7629)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7629)));
return G__7624__delegate(f1, f2, f3, fs);
});
G__7624.cljs$lang$arity$variadic = G__7624__delegate;
return G__7624;
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
var G__7630__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7630 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7630__delegate.call(this, args);
};
G__7630.cljs$lang$maxFixedArity = 0;
G__7630.cljs$lang$applyTo = (function (arglist__7631){
var args = cljs.core.seq(arglist__7631);;
return G__7630__delegate(args);
});
G__7630.cljs$lang$arity$variadic = G__7630__delegate;
return G__7630;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7632__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7632 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7632__delegate.call(this, args);
};
G__7632.cljs$lang$maxFixedArity = 0;
G__7632.cljs$lang$applyTo = (function (arglist__7633){
var args = cljs.core.seq(arglist__7633);;
return G__7632__delegate(args);
});
G__7632.cljs$lang$arity$variadic = G__7632__delegate;
return G__7632;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7634__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7634 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7634__delegate.call(this, args);
};
G__7634.cljs$lang$maxFixedArity = 0;
G__7634.cljs$lang$applyTo = (function (arglist__7635){
var args = cljs.core.seq(arglist__7635);;
return G__7634__delegate(args);
});
G__7634.cljs$lang$arity$variadic = G__7634__delegate;
return G__7634;
})()
;
});
var partial__5 = (function() { 
var G__7636__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7637__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7637 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7637__delegate.call(this, args);
};
G__7637.cljs$lang$maxFixedArity = 0;
G__7637.cljs$lang$applyTo = (function (arglist__7638){
var args = cljs.core.seq(arglist__7638);;
return G__7637__delegate(args);
});
G__7637.cljs$lang$arity$variadic = G__7637__delegate;
return G__7637;
})()
;
};
var G__7636 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7636__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7636.cljs$lang$maxFixedArity = 4;
G__7636.cljs$lang$applyTo = (function (arglist__7639){
var f = cljs.core.first(arglist__7639);
var arg1 = cljs.core.first(cljs.core.next(arglist__7639));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7639)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7639))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7639))));
return G__7636__delegate(f, arg1, arg2, arg3, more);
});
G__7636.cljs$lang$arity$variadic = G__7636__delegate;
return G__7636;
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
var G__7640 = null;
var G__7640__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7640__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7640__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7640__4 = (function() { 
var G__7641__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7641 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7641__delegate.call(this, a, b, c, ds);
};
G__7641.cljs$lang$maxFixedArity = 3;
G__7641.cljs$lang$applyTo = (function (arglist__7642){
var a = cljs.core.first(arglist__7642);
var b = cljs.core.first(cljs.core.next(arglist__7642));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7642)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7642)));
return G__7641__delegate(a, b, c, ds);
});
G__7641.cljs$lang$arity$variadic = G__7641__delegate;
return G__7641;
})()
;
G__7640 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7640__1.call(this,a);
case 2:
return G__7640__2.call(this,a,b);
case 3:
return G__7640__3.call(this,a,b,c);
default:
return G__7640__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7640.cljs$lang$maxFixedArity = 3;
G__7640.cljs$lang$applyTo = G__7640__4.cljs$lang$applyTo;
return G__7640;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7643 = null;
var G__7643__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7643__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7643__4 = (function() { 
var G__7644__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7644 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7644__delegate.call(this, a, b, c, ds);
};
G__7644.cljs$lang$maxFixedArity = 3;
G__7644.cljs$lang$applyTo = (function (arglist__7645){
var a = cljs.core.first(arglist__7645);
var b = cljs.core.first(cljs.core.next(arglist__7645));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7645)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7645)));
return G__7644__delegate(a, b, c, ds);
});
G__7644.cljs$lang$arity$variadic = G__7644__delegate;
return G__7644;
})()
;
G__7643 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7643__2.call(this,a,b);
case 3:
return G__7643__3.call(this,a,b,c);
default:
return G__7643__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7643.cljs$lang$maxFixedArity = 3;
G__7643.cljs$lang$applyTo = G__7643__4.cljs$lang$applyTo;
return G__7643;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7646 = null;
var G__7646__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7646__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7646__4 = (function() { 
var G__7647__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7647 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7647__delegate.call(this, a, b, c, ds);
};
G__7647.cljs$lang$maxFixedArity = 3;
G__7647.cljs$lang$applyTo = (function (arglist__7648){
var a = cljs.core.first(arglist__7648);
var b = cljs.core.first(cljs.core.next(arglist__7648));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7648)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7648)));
return G__7647__delegate(a, b, c, ds);
});
G__7647.cljs$lang$arity$variadic = G__7647__delegate;
return G__7647;
})()
;
G__7646 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7646__2.call(this,a,b);
case 3:
return G__7646__3.call(this,a,b,c);
default:
return G__7646__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7646.cljs$lang$maxFixedArity = 3;
G__7646.cljs$lang$applyTo = G__7646__4.cljs$lang$applyTo;
return G__7646;
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
var mapi__7664 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____7672 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____7672)
{var s__7673 = temp__4092__auto____7672;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7673))
{var c__7674 = cljs.core.chunk_first.call(null,s__7673);
var size__7675 = cljs.core.count.call(null,c__7674);
var b__7676 = cljs.core.chunk_buffer.call(null,size__7675);
var n__2588__auto____7677 = size__7675;
var i__7678 = 0;
while(true){
if((i__7678 < n__2588__auto____7677))
{cljs.core.chunk_append.call(null,b__7676,f.call(null,(idx + i__7678),cljs.core._nth.call(null,c__7674,i__7678)));
{
var G__7679 = (i__7678 + 1);
i__7678 = G__7679;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7676),mapi.call(null,(idx + size__7675),cljs.core.chunk_rest.call(null,s__7673)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7673)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7673)));
}
} else
{return null;
}
}),null));
});
return mapi__7664.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____7689 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____7689)
{var s__7690 = temp__4092__auto____7689;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7690))
{var c__7691 = cljs.core.chunk_first.call(null,s__7690);
var size__7692 = cljs.core.count.call(null,c__7691);
var b__7693 = cljs.core.chunk_buffer.call(null,size__7692);
var n__2588__auto____7694 = size__7692;
var i__7695 = 0;
while(true){
if((i__7695 < n__2588__auto____7694))
{var x__7696 = f.call(null,cljs.core._nth.call(null,c__7691,i__7695));
if((x__7696 == null))
{} else
{cljs.core.chunk_append.call(null,b__7693,x__7696);
}
{
var G__7698 = (i__7695 + 1);
i__7695 = G__7698;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7693),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7690)));
} else
{var x__7697 = f.call(null,cljs.core.first.call(null,s__7690));
if((x__7697 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7690));
} else
{return cljs.core.cons.call(null,x__7697,keep.call(null,f,cljs.core.rest.call(null,s__7690)));
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
var keepi__7724 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____7734 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____7734)
{var s__7735 = temp__4092__auto____7734;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7735))
{var c__7736 = cljs.core.chunk_first.call(null,s__7735);
var size__7737 = cljs.core.count.call(null,c__7736);
var b__7738 = cljs.core.chunk_buffer.call(null,size__7737);
var n__2588__auto____7739 = size__7737;
var i__7740 = 0;
while(true){
if((i__7740 < n__2588__auto____7739))
{var x__7741 = f.call(null,(idx + i__7740),cljs.core._nth.call(null,c__7736,i__7740));
if((x__7741 == null))
{} else
{cljs.core.chunk_append.call(null,b__7738,x__7741);
}
{
var G__7743 = (i__7740 + 1);
i__7740 = G__7743;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7738),keepi.call(null,(idx + size__7737),cljs.core.chunk_rest.call(null,s__7735)));
} else
{var x__7742 = f.call(null,idx,cljs.core.first.call(null,s__7735));
if((x__7742 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7735));
} else
{return cljs.core.cons.call(null,x__7742,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7735)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7724.call(null,0,coll);
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
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7829 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____7829))
{return p.call(null,y);
} else
{return and__3941__auto____7829;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7830 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____7830))
{var and__3941__auto____7831 = p.call(null,y);
if(cljs.core.truth_(and__3941__auto____7831))
{return p.call(null,z);
} else
{return and__3941__auto____7831;
}
} else
{return and__3941__auto____7830;
}
})());
});
var ep1__4 = (function() { 
var G__7900__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7832 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____7832))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto____7832;
}
})());
};
var G__7900 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7900__delegate.call(this, x, y, z, args);
};
G__7900.cljs$lang$maxFixedArity = 3;
G__7900.cljs$lang$applyTo = (function (arglist__7901){
var x = cljs.core.first(arglist__7901);
var y = cljs.core.first(cljs.core.next(arglist__7901));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7901)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7901)));
return G__7900__delegate(x, y, z, args);
});
G__7900.cljs$lang$arity$variadic = G__7900__delegate;
return G__7900;
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
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7844 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7844))
{return p2.call(null,x);
} else
{return and__3941__auto____7844;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7845 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7845))
{var and__3941__auto____7846 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____7846))
{var and__3941__auto____7847 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____7847))
{return p2.call(null,y);
} else
{return and__3941__auto____7847;
}
} else
{return and__3941__auto____7846;
}
} else
{return and__3941__auto____7845;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7848 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7848))
{var and__3941__auto____7849 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____7849))
{var and__3941__auto____7850 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____7850))
{var and__3941__auto____7851 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____7851))
{var and__3941__auto____7852 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____7852))
{return p2.call(null,z);
} else
{return and__3941__auto____7852;
}
} else
{return and__3941__auto____7851;
}
} else
{return and__3941__auto____7850;
}
} else
{return and__3941__auto____7849;
}
} else
{return and__3941__auto____7848;
}
})());
});
var ep2__4 = (function() { 
var G__7902__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7853 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____7853))
{return cljs.core.every_QMARK_.call(null,(function (p1__7699_SHARP_){
var and__3941__auto____7854 = p1.call(null,p1__7699_SHARP_);
if(cljs.core.truth_(and__3941__auto____7854))
{return p2.call(null,p1__7699_SHARP_);
} else
{return and__3941__auto____7854;
}
}),args);
} else
{return and__3941__auto____7853;
}
})());
};
var G__7902 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7902__delegate.call(this, x, y, z, args);
};
G__7902.cljs$lang$maxFixedArity = 3;
G__7902.cljs$lang$applyTo = (function (arglist__7903){
var x = cljs.core.first(arglist__7903);
var y = cljs.core.first(cljs.core.next(arglist__7903));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7903)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7903)));
return G__7902__delegate(x, y, z, args);
});
G__7902.cljs$lang$arity$variadic = G__7902__delegate;
return G__7902;
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
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7873 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7873))
{var and__3941__auto____7874 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____7874))
{return p3.call(null,x);
} else
{return and__3941__auto____7874;
}
} else
{return and__3941__auto____7873;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7875 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7875))
{var and__3941__auto____7876 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____7876))
{var and__3941__auto____7877 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____7877))
{var and__3941__auto____7878 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____7878))
{var and__3941__auto____7879 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____7879))
{return p3.call(null,y);
} else
{return and__3941__auto____7879;
}
} else
{return and__3941__auto____7878;
}
} else
{return and__3941__auto____7877;
}
} else
{return and__3941__auto____7876;
}
} else
{return and__3941__auto____7875;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7880 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____7880))
{var and__3941__auto____7881 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____7881))
{var and__3941__auto____7882 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____7882))
{var and__3941__auto____7883 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____7883))
{var and__3941__auto____7884 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____7884))
{var and__3941__auto____7885 = p3.call(null,y);
if(cljs.core.truth_(and__3941__auto____7885))
{var and__3941__auto____7886 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____7886))
{var and__3941__auto____7887 = p2.call(null,z);
if(cljs.core.truth_(and__3941__auto____7887))
{return p3.call(null,z);
} else
{return and__3941__auto____7887;
}
} else
{return and__3941__auto____7886;
}
} else
{return and__3941__auto____7885;
}
} else
{return and__3941__auto____7884;
}
} else
{return and__3941__auto____7883;
}
} else
{return and__3941__auto____7882;
}
} else
{return and__3941__auto____7881;
}
} else
{return and__3941__auto____7880;
}
})());
});
var ep3__4 = (function() { 
var G__7904__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7888 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____7888))
{return cljs.core.every_QMARK_.call(null,(function (p1__7700_SHARP_){
var and__3941__auto____7889 = p1.call(null,p1__7700_SHARP_);
if(cljs.core.truth_(and__3941__auto____7889))
{var and__3941__auto____7890 = p2.call(null,p1__7700_SHARP_);
if(cljs.core.truth_(and__3941__auto____7890))
{return p3.call(null,p1__7700_SHARP_);
} else
{return and__3941__auto____7890;
}
} else
{return and__3941__auto____7889;
}
}),args);
} else
{return and__3941__auto____7888;
}
})());
};
var G__7904 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7904__delegate.call(this, x, y, z, args);
};
G__7904.cljs$lang$maxFixedArity = 3;
G__7904.cljs$lang$applyTo = (function (arglist__7905){
var x = cljs.core.first(arglist__7905);
var y = cljs.core.first(cljs.core.next(arglist__7905));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7905)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7905)));
return G__7904__delegate(x, y, z, args);
});
G__7904.cljs$lang$arity$variadic = G__7904__delegate;
return G__7904;
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
var G__7906__delegate = function (p1,p2,p3,ps){
var ps__7891 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7701_SHARP_){
return p1__7701_SHARP_.call(null,x);
}),ps__7891);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7702_SHARP_){
var and__3941__auto____7896 = p1__7702_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____7896))
{return p1__7702_SHARP_.call(null,y);
} else
{return and__3941__auto____7896;
}
}),ps__7891);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7703_SHARP_){
var and__3941__auto____7897 = p1__7703_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____7897))
{var and__3941__auto____7898 = p1__7703_SHARP_.call(null,y);
if(cljs.core.truth_(and__3941__auto____7898))
{return p1__7703_SHARP_.call(null,z);
} else
{return and__3941__auto____7898;
}
} else
{return and__3941__auto____7897;
}
}),ps__7891);
});
var epn__4 = (function() { 
var G__7907__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____7899 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____7899))
{return cljs.core.every_QMARK_.call(null,(function (p1__7704_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7704_SHARP_,args);
}),ps__7891);
} else
{return and__3941__auto____7899;
}
})());
};
var G__7907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7907__delegate.call(this, x, y, z, args);
};
G__7907.cljs$lang$maxFixedArity = 3;
G__7907.cljs$lang$applyTo = (function (arglist__7908){
var x = cljs.core.first(arglist__7908);
var y = cljs.core.first(cljs.core.next(arglist__7908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7908)));
return G__7907__delegate(x, y, z, args);
});
G__7907.cljs$lang$arity$variadic = G__7907__delegate;
return G__7907;
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
var G__7906 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7906__delegate.call(this, p1, p2, p3, ps);
};
G__7906.cljs$lang$maxFixedArity = 3;
G__7906.cljs$lang$applyTo = (function (arglist__7909){
var p1 = cljs.core.first(arglist__7909);
var p2 = cljs.core.first(cljs.core.next(arglist__7909));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7909)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7909)));
return G__7906__delegate(p1, p2, p3, ps);
});
G__7906.cljs$lang$arity$variadic = G__7906__delegate;
return G__7906;
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
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto____7990 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____7990))
{return or__3943__auto____7990;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto____7991 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____7991))
{return or__3943__auto____7991;
} else
{var or__3943__auto____7992 = p.call(null,y);
if(cljs.core.truth_(or__3943__auto____7992))
{return or__3943__auto____7992;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__8061__delegate = function (x,y,z,args){
var or__3943__auto____7993 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____7993))
{return or__3943__auto____7993;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__8061 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8061__delegate.call(this, x, y, z, args);
};
G__8061.cljs$lang$maxFixedArity = 3;
G__8061.cljs$lang$applyTo = (function (arglist__8062){
var x = cljs.core.first(arglist__8062);
var y = cljs.core.first(cljs.core.next(arglist__8062));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8062)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8062)));
return G__8061__delegate(x, y, z, args);
});
G__8061.cljs$lang$arity$variadic = G__8061__delegate;
return G__8061;
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
var or__3943__auto____8005 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8005))
{return or__3943__auto____8005;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto____8006 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8006))
{return or__3943__auto____8006;
} else
{var or__3943__auto____8007 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____8007))
{return or__3943__auto____8007;
} else
{var or__3943__auto____8008 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____8008))
{return or__3943__auto____8008;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto____8009 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8009))
{return or__3943__auto____8009;
} else
{var or__3943__auto____8010 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____8010))
{return or__3943__auto____8010;
} else
{var or__3943__auto____8011 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____8011))
{return or__3943__auto____8011;
} else
{var or__3943__auto____8012 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____8012))
{return or__3943__auto____8012;
} else
{var or__3943__auto____8013 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____8013))
{return or__3943__auto____8013;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8063__delegate = function (x,y,z,args){
var or__3943__auto____8014 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____8014))
{return or__3943__auto____8014;
} else
{return cljs.core.some.call(null,(function (p1__7744_SHARP_){
var or__3943__auto____8015 = p1.call(null,p1__7744_SHARP_);
if(cljs.core.truth_(or__3943__auto____8015))
{return or__3943__auto____8015;
} else
{return p2.call(null,p1__7744_SHARP_);
}
}),args);
}
};
var G__8063 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8063__delegate.call(this, x, y, z, args);
};
G__8063.cljs$lang$maxFixedArity = 3;
G__8063.cljs$lang$applyTo = (function (arglist__8064){
var x = cljs.core.first(arglist__8064);
var y = cljs.core.first(cljs.core.next(arglist__8064));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8064)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8064)));
return G__8063__delegate(x, y, z, args);
});
G__8063.cljs$lang$arity$variadic = G__8063__delegate;
return G__8063;
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
var or__3943__auto____8034 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8034))
{return or__3943__auto____8034;
} else
{var or__3943__auto____8035 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____8035))
{return or__3943__auto____8035;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto____8036 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8036))
{return or__3943__auto____8036;
} else
{var or__3943__auto____8037 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____8037))
{return or__3943__auto____8037;
} else
{var or__3943__auto____8038 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____8038))
{return or__3943__auto____8038;
} else
{var or__3943__auto____8039 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____8039))
{return or__3943__auto____8039;
} else
{var or__3943__auto____8040 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____8040))
{return or__3943__auto____8040;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto____8041 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____8041))
{return or__3943__auto____8041;
} else
{var or__3943__auto____8042 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____8042))
{return or__3943__auto____8042;
} else
{var or__3943__auto____8043 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____8043))
{return or__3943__auto____8043;
} else
{var or__3943__auto____8044 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____8044))
{return or__3943__auto____8044;
} else
{var or__3943__auto____8045 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____8045))
{return or__3943__auto____8045;
} else
{var or__3943__auto____8046 = p3.call(null,y);
if(cljs.core.truth_(or__3943__auto____8046))
{return or__3943__auto____8046;
} else
{var or__3943__auto____8047 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____8047))
{return or__3943__auto____8047;
} else
{var or__3943__auto____8048 = p2.call(null,z);
if(cljs.core.truth_(or__3943__auto____8048))
{return or__3943__auto____8048;
} else
{return p3.call(null,z);
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
var G__8065__delegate = function (x,y,z,args){
var or__3943__auto____8049 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____8049))
{return or__3943__auto____8049;
} else
{return cljs.core.some.call(null,(function (p1__7745_SHARP_){
var or__3943__auto____8050 = p1.call(null,p1__7745_SHARP_);
if(cljs.core.truth_(or__3943__auto____8050))
{return or__3943__auto____8050;
} else
{var or__3943__auto____8051 = p2.call(null,p1__7745_SHARP_);
if(cljs.core.truth_(or__3943__auto____8051))
{return or__3943__auto____8051;
} else
{return p3.call(null,p1__7745_SHARP_);
}
}
}),args);
}
};
var G__8065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8065__delegate.call(this, x, y, z, args);
};
G__8065.cljs$lang$maxFixedArity = 3;
G__8065.cljs$lang$applyTo = (function (arglist__8066){
var x = cljs.core.first(arglist__8066);
var y = cljs.core.first(cljs.core.next(arglist__8066));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8066)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8066)));
return G__8065__delegate(x, y, z, args);
});
G__8065.cljs$lang$arity$variadic = G__8065__delegate;
return G__8065;
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
var G__8067__delegate = function (p1,p2,p3,ps){
var ps__8052 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7746_SHARP_){
return p1__7746_SHARP_.call(null,x);
}),ps__8052);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7747_SHARP_){
var or__3943__auto____8057 = p1__7747_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____8057))
{return or__3943__auto____8057;
} else
{return p1__7747_SHARP_.call(null,y);
}
}),ps__8052);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7748_SHARP_){
var or__3943__auto____8058 = p1__7748_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____8058))
{return or__3943__auto____8058;
} else
{var or__3943__auto____8059 = p1__7748_SHARP_.call(null,y);
if(cljs.core.truth_(or__3943__auto____8059))
{return or__3943__auto____8059;
} else
{return p1__7748_SHARP_.call(null,z);
}
}
}),ps__8052);
});
var spn__4 = (function() { 
var G__8068__delegate = function (x,y,z,args){
var or__3943__auto____8060 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____8060))
{return or__3943__auto____8060;
} else
{return cljs.core.some.call(null,(function (p1__7749_SHARP_){
return cljs.core.some.call(null,p1__7749_SHARP_,args);
}),ps__8052);
}
};
var G__8068 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8068__delegate.call(this, x, y, z, args);
};
G__8068.cljs$lang$maxFixedArity = 3;
G__8068.cljs$lang$applyTo = (function (arglist__8069){
var x = cljs.core.first(arglist__8069);
var y = cljs.core.first(cljs.core.next(arglist__8069));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8069)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8069)));
return G__8068__delegate(x, y, z, args);
});
G__8068.cljs$lang$arity$variadic = G__8068__delegate;
return G__8068;
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
var G__8067 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8067__delegate.call(this, p1, p2, p3, ps);
};
G__8067.cljs$lang$maxFixedArity = 3;
G__8067.cljs$lang$applyTo = (function (arglist__8070){
var p1 = cljs.core.first(arglist__8070);
var p2 = cljs.core.first(cljs.core.next(arglist__8070));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8070)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8070)));
return G__8067__delegate(p1, p2, p3, ps);
});
G__8067.cljs$lang$arity$variadic = G__8067__delegate;
return G__8067;
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
var temp__4092__auto____8089 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8089)
{var s__8090 = temp__4092__auto____8089;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8090))
{var c__8091 = cljs.core.chunk_first.call(null,s__8090);
var size__8092 = cljs.core.count.call(null,c__8091);
var b__8093 = cljs.core.chunk_buffer.call(null,size__8092);
var n__2588__auto____8094 = size__8092;
var i__8095 = 0;
while(true){
if((i__8095 < n__2588__auto____8094))
{cljs.core.chunk_append.call(null,b__8093,f.call(null,cljs.core._nth.call(null,c__8091,i__8095)));
{
var G__8107 = (i__8095 + 1);
i__8095 = G__8107;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8093),map.call(null,f,cljs.core.chunk_rest.call(null,s__8090)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__8090)),map.call(null,f,cljs.core.rest.call(null,s__8090)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8096 = cljs.core.seq.call(null,c1);
var s2__8097 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____8098 = s1__8096;
if(and__3941__auto____8098)
{return s2__8097;
} else
{return and__3941__auto____8098;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8096),cljs.core.first.call(null,s2__8097)),map.call(null,f,cljs.core.rest.call(null,s1__8096),cljs.core.rest.call(null,s2__8097)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8099 = cljs.core.seq.call(null,c1);
var s2__8100 = cljs.core.seq.call(null,c2);
var s3__8101 = cljs.core.seq.call(null,c3);
if((function (){var and__3941__auto____8102 = s1__8099;
if(and__3941__auto____8102)
{var and__3941__auto____8103 = s2__8100;
if(and__3941__auto____8103)
{return s3__8101;
} else
{return and__3941__auto____8103;
}
} else
{return and__3941__auto____8102;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__8099),cljs.core.first.call(null,s2__8100),cljs.core.first.call(null,s3__8101)),map.call(null,f,cljs.core.rest.call(null,s1__8099),cljs.core.rest.call(null,s2__8100),cljs.core.rest.call(null,s3__8101)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8108__delegate = function (f,c1,c2,c3,colls){
var step__8106 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8105 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8105))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__8105),step.call(null,map.call(null,cljs.core.rest,ss__8105)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7910_SHARP_){
return cljs.core.apply.call(null,f,p1__7910_SHARP_);
}),step__8106.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__8108 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8108__delegate.call(this, f, c1, c2, c3, colls);
};
G__8108.cljs$lang$maxFixedArity = 4;
G__8108.cljs$lang$applyTo = (function (arglist__8109){
var f = cljs.core.first(arglist__8109);
var c1 = cljs.core.first(cljs.core.next(arglist__8109));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8109)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8109))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8109))));
return G__8108__delegate(f, c1, c2, c3, colls);
});
G__8108.cljs$lang$arity$variadic = G__8108__delegate;
return G__8108;
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
{var temp__4092__auto____8112 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8112)
{var s__8113 = temp__4092__auto____8112;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__8113),take.call(null,(n - 1),cljs.core.rest.call(null,s__8113)));
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
var step__8119 = (function (n,coll){
while(true){
var s__8117 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____8118 = (n > 0);
if(and__3941__auto____8118)
{return s__8117;
} else
{return and__3941__auto____8118;
}
})()))
{{
var G__8120 = (n - 1);
var G__8121 = cljs.core.rest.call(null,s__8117);
n = G__8120;
coll = G__8121;
continue;
}
} else
{return s__8117;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8119.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
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
var s__8124 = cljs.core.seq.call(null,coll);
var lead__8125 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__8125)
{{
var G__8126 = cljs.core.next.call(null,s__8124);
var G__8127 = cljs.core.next.call(null,lead__8125);
s__8124 = G__8126;
lead__8125 = G__8127;
continue;
}
} else
{return s__8124;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8133 = (function (pred,coll){
while(true){
var s__8131 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____8132 = s__8131;
if(and__3941__auto____8132)
{return pred.call(null,cljs.core.first.call(null,s__8131));
} else
{return and__3941__auto____8132;
}
})()))
{{
var G__8134 = pred;
var G__8135 = cljs.core.rest.call(null,s__8131);
pred = G__8134;
coll = G__8135;
continue;
}
} else
{return s__8131;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__8133.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8138 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8138)
{var s__8139 = temp__4092__auto____8138;
return cljs.core.concat.call(null,s__8139,cycle.call(null,s__8139));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
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
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
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
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
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
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
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
var s1__8144 = cljs.core.seq.call(null,c1);
var s2__8145 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____8146 = s1__8144;
if(and__3941__auto____8146)
{return s2__8145;
} else
{return and__3941__auto____8146;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__8144),cljs.core.cons.call(null,cljs.core.first.call(null,s2__8145),interleave.call(null,cljs.core.rest.call(null,s1__8144),cljs.core.rest.call(null,s2__8145))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8148__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8147 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__8147))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__8147),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__8147)));
} else
{return null;
}
}),null));
};
var G__8148 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8148__delegate.call(this, c1, c2, colls);
};
G__8148.cljs$lang$maxFixedArity = 2;
G__8148.cljs$lang$applyTo = (function (arglist__8149){
var c1 = cljs.core.first(arglist__8149);
var c2 = cljs.core.first(cljs.core.next(arglist__8149));
var colls = cljs.core.rest(cljs.core.next(arglist__8149));
return G__8148__delegate(c1, c2, colls);
});
G__8148.cljs$lang$arity$variadic = G__8148__delegate;
return G__8148;
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
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8159 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____8157 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____8157)
{var coll__8158 = temp__4090__auto____8157;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__8158),cat.call(null,cljs.core.rest.call(null,coll__8158),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__8159.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__8160__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__8160 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8160__delegate.call(this, f, coll, colls);
};
G__8160.cljs$lang$maxFixedArity = 2;
G__8160.cljs$lang$applyTo = (function (arglist__8161){
var f = cljs.core.first(arglist__8161);
var coll = cljs.core.first(cljs.core.next(arglist__8161));
var colls = cljs.core.rest(cljs.core.next(arglist__8161));
return G__8160__delegate(f, coll, colls);
});
G__8160.cljs$lang$arity$variadic = G__8160__delegate;
return G__8160;
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
var temp__4092__auto____8171 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8171)
{var s__8172 = temp__4092__auto____8171;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8172))
{var c__8173 = cljs.core.chunk_first.call(null,s__8172);
var size__8174 = cljs.core.count.call(null,c__8173);
var b__8175 = cljs.core.chunk_buffer.call(null,size__8174);
var n__2588__auto____8176 = size__8174;
var i__8177 = 0;
while(true){
if((i__8177 < n__2588__auto____8176))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__8173,i__8177))))
{cljs.core.chunk_append.call(null,b__8175,cljs.core._nth.call(null,c__8173,i__8177));
} else
{}
{
var G__8180 = (i__8177 + 1);
i__8177 = G__8180;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8175),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__8172)));
} else
{var f__8178 = cljs.core.first.call(null,s__8172);
var r__8179 = cljs.core.rest.call(null,s__8172);
if(cljs.core.truth_(pred.call(null,f__8178)))
{return cljs.core.cons.call(null,f__8178,filter.call(null,pred,r__8179));
} else
{return filter.call(null,pred,r__8179);
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
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
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
var walk__8183 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__8183.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__8181_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__8181_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8187__8188 = to;
if(G__8187__8188)
{if((function (){var or__3943__auto____8189 = (G__8187__8188.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3943__auto____8189)
{return or__3943__auto____8189;
} else
{return G__8187__8188.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8187__8188.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8187__8188);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__8187__8188);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
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
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8190__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__8190 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8190__delegate.call(this, f, c1, c2, c3, colls);
};
G__8190.cljs$lang$maxFixedArity = 4;
G__8190.cljs$lang$applyTo = (function (arglist__8191){
var f = cljs.core.first(arglist__8191);
var c1 = cljs.core.first(cljs.core.next(arglist__8191));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8191)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8191))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8191))));
return G__8190__delegate(f, c1, c2, c3, colls);
});
G__8190.cljs$lang$arity$variadic = G__8190__delegate;
return G__8190;
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
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
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
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8198 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8198)
{var s__8199 = temp__4092__auto____8198;
var p__8200 = cljs.core.take.call(null,n,s__8199);
if((n === cljs.core.count.call(null,p__8200)))
{return cljs.core.cons.call(null,p__8200,partition.call(null,n,step,cljs.core.drop.call(null,step,s__8199)));
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
var temp__4092__auto____8201 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8201)
{var s__8202 = temp__4092__auto____8201;
var p__8203 = cljs.core.take.call(null,n,s__8202);
if((n === cljs.core.count.call(null,p__8203)))
{return cljs.core.cons.call(null,p__8203,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__8202)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__8203,pad)));
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
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8208 = cljs.core.lookup_sentinel;
var m__8209 = m;
var ks__8210 = cljs.core.seq.call(null,ks);
while(true){
if(ks__8210)
{var m__8211 = cljs.core._lookup.call(null,m__8209,cljs.core.first.call(null,ks__8210),sentinel__8208);
if((sentinel__8208 === m__8211))
{return not_found;
} else
{{
var G__8212 = sentinel__8208;
var G__8213 = m__8211;
var G__8214 = cljs.core.next.call(null,ks__8210);
sentinel__8208 = G__8212;
m__8209 = G__8213;
ks__8210 = G__8214;
continue;
}
}
} else
{return m__8209;
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
cljs.core.assoc_in = (function assoc_in(m,p__8215,v){
var vec__8220__8221 = p__8215;
var k__8222 = cljs.core.nth.call(null,vec__8220__8221,0,null);
var ks__8223 = cljs.core.nthnext.call(null,vec__8220__8221,1);
if(cljs.core.truth_(ks__8223))
{return cljs.core.assoc.call(null,m,k__8222,assoc_in.call(null,cljs.core._lookup.call(null,m,k__8222,null),ks__8223,v));
} else
{return cljs.core.assoc.call(null,m,k__8222,v);
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
var update_in__delegate = function (m,p__8224,f,args){
var vec__8229__8230 = p__8224;
var k__8231 = cljs.core.nth.call(null,vec__8229__8230,0,null);
var ks__8232 = cljs.core.nthnext.call(null,vec__8229__8230,1);
if(cljs.core.truth_(ks__8232))
{return cljs.core.assoc.call(null,m,k__8231,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__8231,null),ks__8232,f,args));
} else
{return cljs.core.assoc.call(null,m,k__8231,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__8231,null),args));
}
};
var update_in = function (m,p__8224,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8224, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8233){
var m = cljs.core.first(arglist__8233);
var p__8224 = cljs.core.first(cljs.core.next(arglist__8233));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8233)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8233)));
return update_in__delegate(m, p__8224, f, args);
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
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8236 = this;
var h__2253__auto____8237 = this__8236.__hash;
if(!((h__2253__auto____8237 == null)))
{return h__2253__auto____8237;
} else
{var h__2253__auto____8238 = cljs.core.hash_coll.call(null,coll);
this__8236.__hash = h__2253__auto____8238;
return h__2253__auto____8238;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8239 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8240 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8241 = this;
var new_array__8242 = this__8241.array.slice();
(new_array__8242[k] = v);
return (new cljs.core.Vector(this__8241.meta,new_array__8242,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8273 = null;
var G__8273__2 = (function (this_sym8243,k){
var this__8245 = this;
var this_sym8243__8246 = this;
var coll__8247 = this_sym8243__8246;
return coll__8247.cljs$core$ILookup$_lookup$arity$2(coll__8247,k);
});
var G__8273__3 = (function (this_sym8244,k,not_found){
var this__8245 = this;
var this_sym8244__8248 = this;
var coll__8249 = this_sym8244__8248;
return coll__8249.cljs$core$ILookup$_lookup$arity$3(coll__8249,k,not_found);
});
G__8273 = function(this_sym8244,k,not_found){
switch(arguments.length){
case 2:
return G__8273__2.call(this,this_sym8244,k);
case 3:
return G__8273__3.call(this,this_sym8244,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8273;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8234,args8235){
var this__8250 = this;
return this_sym8234.call.apply(this_sym8234,[this_sym8234].concat(args8235.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8251 = this;
var new_array__8252 = this__8251.array.slice();
new_array__8252.push(o);
return (new cljs.core.Vector(this__8251.meta,new_array__8252,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8253 = this;
var this__8254 = this;
return cljs.core.pr_str.call(null,this__8254);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8255 = this;
return cljs.core.ci_reduce.call(null,this__8255.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8256 = this;
return cljs.core.ci_reduce.call(null,this__8256.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8257 = this;
if((this__8257.array.length > 0))
{var vector_seq__8258 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8257.array.length))
{return cljs.core.cons.call(null,(this__8257.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__8258.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8259 = this;
return this__8259.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8260 = this;
var count__8261 = this__8260.array.length;
if((count__8261 > 0))
{return (this__8260.array[(count__8261 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8262 = this;
if((this__8262.array.length > 0))
{var new_array__8263 = this__8262.array.slice();
new_array__8263.pop();
return (new cljs.core.Vector(this__8262.meta,new_array__8263,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8264 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8266 = this;
return (new cljs.core.Vector(meta,this__8266.array,this__8266.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8267 = this;
return this__8267.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8268 = this;
if((function (){var and__3941__auto____8269 = (0 <= n);
if(and__3941__auto____8269)
{return (n < this__8268.array.length);
} else
{return and__3941__auto____8269;
}
})())
{return (this__8268.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8270 = this;
if((function (){var and__3941__auto____8271 = (0 <= n);
if(and__3941__auto____8271)
{return (n < this__8270.array.length);
} else
{return and__3941__auto____8271;
}
})())
{return (this__8270.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8272 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8272.meta);
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2371__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
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
var cnt__8275 = pv.cnt;
if((cnt__8275 < 32))
{return 0;
} else
{return (((cnt__8275 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8281 = level;
var ret__8282 = node;
while(true){
if((ll__8281 === 0))
{return ret__8282;
} else
{var embed__8283 = ret__8282;
var r__8284 = cljs.core.pv_fresh_node.call(null,edit);
var ___8285 = cljs.core.pv_aset.call(null,r__8284,0,embed__8283);
{
var G__8286 = (ll__8281 - 5);
var G__8287 = r__8284;
ll__8281 = G__8286;
ret__8282 = G__8287;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8293 = cljs.core.pv_clone_node.call(null,parent);
var subidx__8294 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__8293,subidx__8294,tailnode);
return ret__8293;
} else
{var child__8295 = cljs.core.pv_aget.call(null,parent,subidx__8294);
if(!((child__8295 == null)))
{var node_to_insert__8296 = push_tail.call(null,pv,(level - 5),child__8295,tailnode);
cljs.core.pv_aset.call(null,ret__8293,subidx__8294,node_to_insert__8296);
return ret__8293;
} else
{var node_to_insert__8297 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__8293,subidx__8294,node_to_insert__8297);
return ret__8293;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto____8301 = (0 <= i);
if(and__3941__auto____8301)
{return (i < pv.cnt);
} else
{return and__3941__auto____8301;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__8302 = pv.root;
var level__8303 = pv.shift;
while(true){
if((level__8303 > 0))
{{
var G__8304 = cljs.core.pv_aget.call(null,node__8302,((i >>> level__8303) & 31));
var G__8305 = (level__8303 - 5);
node__8302 = G__8304;
level__8303 = G__8305;
continue;
}
} else
{return node__8302.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8308 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__8308,(i & 31),val);
return ret__8308;
} else
{var subidx__8309 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8308,subidx__8309,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8309),i,val));
return ret__8308;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8315 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8316 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__8315));
if((function (){var and__3941__auto____8317 = (new_child__8316 == null);
if(and__3941__auto____8317)
{return (subidx__8315 === 0);
} else
{return and__3941__auto____8317;
}
})())
{return null;
} else
{var ret__8318 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8318,subidx__8315,new_child__8316);
return ret__8318;
}
} else
{if((subidx__8315 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8319 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__8319,subidx__8315,null);
return ret__8319;
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
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8322 = this;
return (new cljs.core.TransientVector(this__8322.cnt,this__8322.shift,cljs.core.tv_editable_root.call(null,this__8322.root),cljs.core.tv_editable_tail.call(null,this__8322.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8323 = this;
var h__2253__auto____8324 = this__8323.__hash;
if(!((h__2253__auto____8324 == null)))
{return h__2253__auto____8324;
} else
{var h__2253__auto____8325 = cljs.core.hash_coll.call(null,coll);
this__8323.__hash = h__2253__auto____8325;
return h__2253__auto____8325;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8326 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8327 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8328 = this;
if((function (){var and__3941__auto____8329 = (0 <= k);
if(and__3941__auto____8329)
{return (k < this__8328.cnt);
} else
{return and__3941__auto____8329;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__8330 = this__8328.tail.slice();
(new_tail__8330[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8328.meta,this__8328.cnt,this__8328.shift,this__8328.root,new_tail__8330,null));
} else
{return (new cljs.core.PersistentVector(this__8328.meta,this__8328.cnt,this__8328.shift,cljs.core.do_assoc.call(null,coll,this__8328.shift,this__8328.root,k,v),this__8328.tail,null));
}
} else
{if((k === this__8328.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8328.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8378 = null;
var G__8378__2 = (function (this_sym8331,k){
var this__8333 = this;
var this_sym8331__8334 = this;
var coll__8335 = this_sym8331__8334;
return coll__8335.cljs$core$ILookup$_lookup$arity$2(coll__8335,k);
});
var G__8378__3 = (function (this_sym8332,k,not_found){
var this__8333 = this;
var this_sym8332__8336 = this;
var coll__8337 = this_sym8332__8336;
return coll__8337.cljs$core$ILookup$_lookup$arity$3(coll__8337,k,not_found);
});
G__8378 = function(this_sym8332,k,not_found){
switch(arguments.length){
case 2:
return G__8378__2.call(this,this_sym8332,k);
case 3:
return G__8378__3.call(this,this_sym8332,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8378;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8320,args8321){
var this__8338 = this;
return this_sym8320.call.apply(this_sym8320,[this_sym8320].concat(args8321.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8339 = this;
var step_init__8340 = [0,init];
var i__8341 = 0;
while(true){
if((i__8341 < this__8339.cnt))
{var arr__8342 = cljs.core.array_for.call(null,v,i__8341);
var len__8343 = arr__8342.length;
var init__8347 = (function (){var j__8344 = 0;
var init__8345 = (step_init__8340[1]);
while(true){
if((j__8344 < len__8343))
{var init__8346 = f.call(null,init__8345,(j__8344 + i__8341),(arr__8342[j__8344]));
if(cljs.core.reduced_QMARK_.call(null,init__8346))
{return init__8346;
} else
{{
var G__8379 = (j__8344 + 1);
var G__8380 = init__8346;
j__8344 = G__8379;
init__8345 = G__8380;
continue;
}
}
} else
{(step_init__8340[0] = len__8343);
(step_init__8340[1] = init__8345);
return init__8345;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8347))
{return cljs.core.deref.call(null,init__8347);
} else
{{
var G__8381 = (i__8341 + (step_init__8340[0]));
i__8341 = G__8381;
continue;
}
}
} else
{return (step_init__8340[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8348 = this;
if(((this__8348.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__8349 = this__8348.tail.slice();
new_tail__8349.push(o);
return (new cljs.core.PersistentVector(this__8348.meta,(this__8348.cnt + 1),this__8348.shift,this__8348.root,new_tail__8349,null));
} else
{var root_overflow_QMARK___8350 = ((this__8348.cnt >>> 5) > (1 << this__8348.shift));
var new_shift__8351 = ((root_overflow_QMARK___8350)?(this__8348.shift + 5):this__8348.shift);
var new_root__8353 = ((root_overflow_QMARK___8350)?(function (){var n_r__8352 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__8352,0,this__8348.root);
cljs.core.pv_aset.call(null,n_r__8352,1,cljs.core.new_path.call(null,null,this__8348.shift,(new cljs.core.VectorNode(null,this__8348.tail))));
return n_r__8352;
})():cljs.core.push_tail.call(null,coll,this__8348.shift,this__8348.root,(new cljs.core.VectorNode(null,this__8348.tail))));
return (new cljs.core.PersistentVector(this__8348.meta,(this__8348.cnt + 1),new_shift__8351,new_root__8353,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8354 = this;
if((this__8354.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8354.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8355 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8356 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8357 = this;
var this__8358 = this;
return cljs.core.pr_str.call(null,this__8358);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8359 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8360 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8361 = this;
if((this__8361.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8362 = this;
return this__8362.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8363 = this;
if((this__8363.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8363.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8364 = this;
if((this__8364.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8364.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8364.meta);
} else
{if((1 < (this__8364.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__8364.meta,(this__8364.cnt - 1),this__8364.shift,this__8364.root,this__8364.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8365 = cljs.core.array_for.call(null,coll,(this__8364.cnt - 2));
var nr__8366 = cljs.core.pop_tail.call(null,coll,this__8364.shift,this__8364.root);
var new_root__8367 = (((nr__8366 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8366);
var cnt_1__8368 = (this__8364.cnt - 1);
if((function (){var and__3941__auto____8369 = (5 < this__8364.shift);
if(and__3941__auto____8369)
{return (cljs.core.pv_aget.call(null,new_root__8367,1) == null);
} else
{return and__3941__auto____8369;
}
})())
{return (new cljs.core.PersistentVector(this__8364.meta,cnt_1__8368,(this__8364.shift - 5),cljs.core.pv_aget.call(null,new_root__8367,0),new_tail__8365,null));
} else
{return (new cljs.core.PersistentVector(this__8364.meta,cnt_1__8368,this__8364.shift,new_root__8367,new_tail__8365,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8370 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8371 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8372 = this;
return (new cljs.core.PersistentVector(meta,this__8372.cnt,this__8372.shift,this__8372.root,this__8372.tail,this__8372.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8373 = this;
return this__8373.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8374 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8375 = this;
if((function (){var and__3941__auto____8376 = (0 <= n);
if(and__3941__auto____8376)
{return (n < this__8375.cnt);
} else
{return and__3941__auto____8376;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8377 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8377.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8382 = xs.length;
var xs__8383 = (((no_clone === true))?xs:xs.slice());
if((l__8382 < 32))
{return (new cljs.core.PersistentVector(null,l__8382,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8383,null));
} else
{var node__8384 = xs__8383.slice(0,32);
var v__8385 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8384,null));
var i__8386 = 32;
var out__8387 = cljs.core._as_transient.call(null,v__8385);
while(true){
if((i__8386 < l__8382))
{{
var G__8388 = (i__8386 + 1);
var G__8389 = cljs.core.conj_BANG_.call(null,out__8387,(xs__8383[i__8386]));
i__8386 = G__8388;
out__8387 = G__8389;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8387);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8390){
var args = cljs.core.seq(arglist__8390);;
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
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8391 = this;
if(((this__8391.off + 1) < this__8391.node.length))
{var s__8392 = cljs.core.chunked_seq.call(null,this__8391.vec,this__8391.node,this__8391.i,(this__8391.off + 1));
if((s__8392 == null))
{return null;
} else
{return s__8392;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8393 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8394 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8395 = this;
return (this__8395.node[this__8395.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8396 = this;
if(((this__8396.off + 1) < this__8396.node.length))
{var s__8397 = cljs.core.chunked_seq.call(null,this__8396.vec,this__8396.node,this__8396.i,(this__8396.off + 1));
if((s__8397 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8397;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8398 = this;
var l__8399 = this__8398.node.length;
var s__8400 = ((((this__8398.i + l__8399) < cljs.core._count.call(null,this__8398.vec)))?cljs.core.chunked_seq.call(null,this__8398.vec,(this__8398.i + l__8399),0):null);
if((s__8400 == null))
{return null;
} else
{return s__8400;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8401 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8402 = this;
return cljs.core.chunked_seq.call(null,this__8402.vec,this__8402.node,this__8402.i,this__8402.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8403 = this;
return this__8403.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8404 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__8404.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8405 = this;
return cljs.core.array_chunk.call(null,this__8405.node,this__8405.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8406 = this;
var l__8407 = this__8406.node.length;
var s__8408 = ((((this__8406.i + l__8407) < cljs.core._count.call(null,this__8406.vec)))?cljs.core.chunked_seq.call(null,this__8406.vec,(this__8406.i + l__8407),0):null);
if((s__8408 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8408;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
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
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8411 = this;
var h__2253__auto____8412 = this__8411.__hash;
if(!((h__2253__auto____8412 == null)))
{return h__2253__auto____8412;
} else
{var h__2253__auto____8413 = cljs.core.hash_coll.call(null,coll);
this__8411.__hash = h__2253__auto____8413;
return h__2253__auto____8413;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8414 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8415 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8416 = this;
var v_pos__8417 = (this__8416.start + key);
return (new cljs.core.Subvec(this__8416.meta,cljs.core._assoc.call(null,this__8416.v,v_pos__8417,val),this__8416.start,((this__8416.end > (v_pos__8417 + 1)) ? this__8416.end : (v_pos__8417 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__8443 = null;
var G__8443__2 = (function (this_sym8418,k){
var this__8420 = this;
var this_sym8418__8421 = this;
var coll__8422 = this_sym8418__8421;
return coll__8422.cljs$core$ILookup$_lookup$arity$2(coll__8422,k);
});
var G__8443__3 = (function (this_sym8419,k,not_found){
var this__8420 = this;
var this_sym8419__8423 = this;
var coll__8424 = this_sym8419__8423;
return coll__8424.cljs$core$ILookup$_lookup$arity$3(coll__8424,k,not_found);
});
G__8443 = function(this_sym8419,k,not_found){
switch(arguments.length){
case 2:
return G__8443__2.call(this,this_sym8419,k);
case 3:
return G__8443__3.call(this,this_sym8419,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8443;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8409,args8410){
var this__8425 = this;
return this_sym8409.call.apply(this_sym8409,[this_sym8409].concat(args8410.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8426 = this;
return (new cljs.core.Subvec(this__8426.meta,cljs.core._assoc_n.call(null,this__8426.v,this__8426.end,o),this__8426.start,(this__8426.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8427 = this;
var this__8428 = this;
return cljs.core.pr_str.call(null,this__8428);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8429 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8430 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8431 = this;
var subvec_seq__8432 = (function subvec_seq(i){
if((i === this__8431.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__8431.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__8432.call(null,this__8431.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8433 = this;
return (this__8433.end - this__8433.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8434 = this;
return cljs.core._nth.call(null,this__8434.v,(this__8434.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8435 = this;
if((this__8435.start === this__8435.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8435.meta,this__8435.v,this__8435.start,(this__8435.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8436 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8437 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8438 = this;
return (new cljs.core.Subvec(meta,this__8438.v,this__8438.start,this__8438.end,this__8438.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8439 = this;
return this__8439.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8440 = this;
return cljs.core._nth.call(null,this__8440.v,(this__8440.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8441 = this;
return cljs.core._nth.call(null,this__8441.v,(this__8441.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8442 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__8442.meta);
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
return subvec.call(null,v,start,cljs.core.count.call(null,v));
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
var ret__8445 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__8445,0,tl.length);
return ret__8445;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8449 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8450 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8449,subidx__8450,(((level === 5))?tail_node:(function (){var child__8451 = cljs.core.pv_aget.call(null,ret__8449,subidx__8450);
if(!((child__8451 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8451,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8449;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8456 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8457 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8458 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8456,subidx__8457));
if((function (){var and__3941__auto____8459 = (new_child__8458 == null);
if(and__3941__auto____8459)
{return (subidx__8457 === 0);
} else
{return and__3941__auto____8459;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8456,subidx__8457,new_child__8458);
return node__8456;
}
} else
{if((subidx__8457 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8456,subidx__8457,null);
return node__8456;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto____8464 = (0 <= i);
if(and__3941__auto____8464)
{return (i < tv.cnt);
} else
{return and__3941__auto____8464;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8465 = tv.root;
var node__8466 = root__8465;
var level__8467 = tv.shift;
while(true){
if((level__8467 > 0))
{{
var G__8468 = cljs.core.tv_ensure_editable.call(null,root__8465.edit,cljs.core.pv_aget.call(null,node__8466,((i >>> level__8467) & 31)));
var G__8469 = (level__8467 - 5);
node__8466 = G__8468;
level__8467 = G__8469;
continue;
}
} else
{return node__8466.arr;
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
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8509 = null;
var G__8509__2 = (function (this_sym8472,k){
var this__8474 = this;
var this_sym8472__8475 = this;
var coll__8476 = this_sym8472__8475;
return coll__8476.cljs$core$ILookup$_lookup$arity$2(coll__8476,k);
});
var G__8509__3 = (function (this_sym8473,k,not_found){
var this__8474 = this;
var this_sym8473__8477 = this;
var coll__8478 = this_sym8473__8477;
return coll__8478.cljs$core$ILookup$_lookup$arity$3(coll__8478,k,not_found);
});
G__8509 = function(this_sym8473,k,not_found){
switch(arguments.length){
case 2:
return G__8509__2.call(this,this_sym8473,k);
case 3:
return G__8509__3.call(this,this_sym8473,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8509;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8470,args8471){
var this__8479 = this;
return this_sym8470.call.apply(this_sym8470,[this_sym8470].concat(args8471.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8480 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8481 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8482 = this;
if(this__8482.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8483 = this;
if((function (){var and__3941__auto____8484 = (0 <= n);
if(and__3941__auto____8484)
{return (n < this__8483.cnt);
} else
{return and__3941__auto____8484;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8485 = this;
if(this__8485.root.edit)
{return this__8485.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8486 = this;
if(this__8486.root.edit)
{if((function (){var and__3941__auto____8487 = (0 <= n);
if(and__3941__auto____8487)
{return (n < this__8486.cnt);
} else
{return and__3941__auto____8487;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8486.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8492 = (function go(level,node){
var node__8490 = cljs.core.tv_ensure_editable.call(null,this__8486.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8490,(n & 31),val);
return node__8490;
} else
{var subidx__8491 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8490,subidx__8491,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8490,subidx__8491)));
return node__8490;
}
}).call(null,this__8486.shift,this__8486.root);
this__8486.root = new_root__8492;
return tcoll;
}
} else
{if((n === this__8486.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8486.cnt)].join('')));
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
var this__8493 = this;
if(this__8493.root.edit)
{if((this__8493.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8493.cnt))
{this__8493.cnt = 0;
return tcoll;
} else
{if((((this__8493.cnt - 1) & 31) > 0))
{this__8493.cnt = (this__8493.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8494 = cljs.core.editable_array_for.call(null,tcoll,(this__8493.cnt - 2));
var new_root__8496 = (function (){var nr__8495 = cljs.core.tv_pop_tail.call(null,tcoll,this__8493.shift,this__8493.root);
if(!((nr__8495 == null)))
{return nr__8495;
} else
{return (new cljs.core.VectorNode(this__8493.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto____8497 = (5 < this__8493.shift);
if(and__3941__auto____8497)
{return (cljs.core.pv_aget.call(null,new_root__8496,1) == null);
} else
{return and__3941__auto____8497;
}
})())
{var new_root__8498 = cljs.core.tv_ensure_editable.call(null,this__8493.root.edit,cljs.core.pv_aget.call(null,new_root__8496,0));
this__8493.root = new_root__8498;
this__8493.shift = (this__8493.shift - 5);
this__8493.cnt = (this__8493.cnt - 1);
this__8493.tail = new_tail__8494;
return tcoll;
} else
{this__8493.root = new_root__8496;
this__8493.cnt = (this__8493.cnt - 1);
this__8493.tail = new_tail__8494;
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
var this__8499 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8500 = this;
if(this__8500.root.edit)
{if(((this__8500.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8500.tail[(this__8500.cnt & 31)] = o);
this__8500.cnt = (this__8500.cnt + 1);
return tcoll;
} else
{var tail_node__8501 = (new cljs.core.VectorNode(this__8500.root.edit,this__8500.tail));
var new_tail__8502 = cljs.core.make_array.call(null,32);
(new_tail__8502[0] = o);
this__8500.tail = new_tail__8502;
if(((this__8500.cnt >>> 5) > (1 << this__8500.shift)))
{var new_root_array__8503 = cljs.core.make_array.call(null,32);
var new_shift__8504 = (this__8500.shift + 5);
(new_root_array__8503[0] = this__8500.root);
(new_root_array__8503[1] = cljs.core.new_path.call(null,this__8500.root.edit,this__8500.shift,tail_node__8501));
this__8500.root = (new cljs.core.VectorNode(this__8500.root.edit,new_root_array__8503));
this__8500.shift = new_shift__8504;
this__8500.cnt = (this__8500.cnt + 1);
return tcoll;
} else
{var new_root__8505 = cljs.core.tv_push_tail.call(null,tcoll,this__8500.shift,this__8500.root,tail_node__8501);
this__8500.root = new_root__8505;
this__8500.cnt = (this__8500.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8506 = this;
if(this__8506.root.edit)
{this__8506.root.edit = null;
var len__8507 = (this__8506.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8508 = cljs.core.make_array.call(null,len__8507);
cljs.core.array_copy.call(null,this__8506.tail,0,trimmed_tail__8508,0,len__8507);
return (new cljs.core.PersistentVector(null,this__8506.cnt,this__8506.shift,this__8506.root,trimmed_tail__8508,null));
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
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8510 = this;
var h__2253__auto____8511 = this__8510.__hash;
if(!((h__2253__auto____8511 == null)))
{return h__2253__auto____8511;
} else
{var h__2253__auto____8512 = cljs.core.hash_coll.call(null,coll);
this__8510.__hash = h__2253__auto____8512;
return h__2253__auto____8512;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8513 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8514 = this;
var this__8515 = this;
return cljs.core.pr_str.call(null,this__8515);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8516 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8517 = this;
return cljs.core._first.call(null,this__8517.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8518 = this;
var temp__4090__auto____8519 = cljs.core.next.call(null,this__8518.front);
if(temp__4090__auto____8519)
{var f1__8520 = temp__4090__auto____8519;
return (new cljs.core.PersistentQueueSeq(this__8518.meta,f1__8520,this__8518.rear,null));
} else
{if((this__8518.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8518.meta,this__8518.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8522 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8522.front,this__8522.rear,this__8522.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8523 = this;
return this__8523.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8524 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8524.meta);
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
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8525 = this;
var h__2253__auto____8526 = this__8525.__hash;
if(!((h__2253__auto____8526 == null)))
{return h__2253__auto____8526;
} else
{var h__2253__auto____8527 = cljs.core.hash_coll.call(null,coll);
this__8525.__hash = h__2253__auto____8527;
return h__2253__auto____8527;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8528 = this;
if(cljs.core.truth_(this__8528.front))
{return (new cljs.core.PersistentQueue(this__8528.meta,(this__8528.count + 1),this__8528.front,cljs.core.conj.call(null,(function (){var or__3943__auto____8529 = this__8528.rear;
if(cljs.core.truth_(or__3943__auto____8529))
{return or__3943__auto____8529;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8528.meta,(this__8528.count + 1),cljs.core.conj.call(null,this__8528.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8530 = this;
var this__8531 = this;
return cljs.core.pr_str.call(null,this__8531);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8532 = this;
var rear__8533 = cljs.core.seq.call(null,this__8532.rear);
if(cljs.core.truth_((function (){var or__3943__auto____8534 = this__8532.front;
if(cljs.core.truth_(or__3943__auto____8534))
{return or__3943__auto____8534;
} else
{return rear__8533;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8532.front,cljs.core.seq.call(null,rear__8533),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8535 = this;
return this__8535.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8536 = this;
return cljs.core._first.call(null,this__8536.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8537 = this;
if(cljs.core.truth_(this__8537.front))
{var temp__4090__auto____8538 = cljs.core.next.call(null,this__8537.front);
if(temp__4090__auto____8538)
{var f1__8539 = temp__4090__auto____8538;
return (new cljs.core.PersistentQueue(this__8537.meta,(this__8537.count - 1),f1__8539,this__8537.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8537.meta,(this__8537.count - 1),cljs.core.seq.call(null,this__8537.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8540 = this;
return cljs.core.first.call(null,this__8540.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8541 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8542 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8543 = this;
return (new cljs.core.PersistentQueue(meta,this__8543.count,this__8543.front,this__8543.rear,this__8543.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8544 = this;
return this__8544.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8545 = this;
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
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8546 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8549 = array.length;
var i__8550 = 0;
while(true){
if((i__8550 < len__8549))
{if((k === (array[i__8550])))
{return i__8550;
} else
{{
var G__8551 = (i__8550 + incr);
i__8550 = G__8551;
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
var a__8554 = cljs.core.hash.call(null,a);
var b__8555 = cljs.core.hash.call(null,b);
if((a__8554 < b__8555))
{return -1;
} else
{if((a__8554 > b__8555))
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
var ks__8563 = m.keys;
var len__8564 = ks__8563.length;
var so__8565 = m.strobj;
var out__8566 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8567 = 0;
var out__8568 = cljs.core.transient$.call(null,out__8566);
while(true){
if((i__8567 < len__8564))
{var k__8569 = (ks__8563[i__8567]);
{
var G__8570 = (i__8567 + 1);
var G__8571 = cljs.core.assoc_BANG_.call(null,out__8568,k__8569,(so__8565[k__8569]));
i__8567 = G__8570;
out__8568 = G__8571;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8568,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8577 = {};
var l__8578 = ks.length;
var i__8579 = 0;
while(true){
if((i__8579 < l__8578))
{var k__8580 = (ks[i__8579]);
(new_obj__8577[k__8580] = (obj[k__8580]));
{
var G__8581 = (i__8579 + 1);
i__8579 = G__8581;
continue;
}
} else
{}
break;
}
return new_obj__8577;
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
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8584 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8585 = this;
var h__2253__auto____8586 = this__8585.__hash;
if(!((h__2253__auto____8586 == null)))
{return h__2253__auto____8586;
} else
{var h__2253__auto____8587 = cljs.core.hash_imap.call(null,coll);
this__8585.__hash = h__2253__auto____8587;
return h__2253__auto____8587;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8588 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8589 = this;
if((function (){var and__3941__auto____8590 = goog.isString(k);
if(and__3941__auto____8590)
{return !((cljs.core.scan_array.call(null,1,k,this__8589.keys) == null));
} else
{return and__3941__auto____8590;
}
})())
{return (this__8589.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8591 = this;
if(goog.isString(k))
{if((function (){var or__3943__auto____8592 = (this__8591.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto____8592)
{return or__3943__auto____8592;
} else
{return (this__8591.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8591.keys) == null)))
{var new_strobj__8593 = cljs.core.obj_clone.call(null,this__8591.strobj,this__8591.keys);
(new_strobj__8593[k] = v);
return (new cljs.core.ObjMap(this__8591.meta,this__8591.keys,new_strobj__8593,(this__8591.update_count + 1),null));
} else
{var new_strobj__8594 = cljs.core.obj_clone.call(null,this__8591.strobj,this__8591.keys);
var new_keys__8595 = this__8591.keys.slice();
(new_strobj__8594[k] = v);
new_keys__8595.push(k);
return (new cljs.core.ObjMap(this__8591.meta,new_keys__8595,new_strobj__8594,(this__8591.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8596 = this;
if((function (){var and__3941__auto____8597 = goog.isString(k);
if(and__3941__auto____8597)
{return !((cljs.core.scan_array.call(null,1,k,this__8596.keys) == null));
} else
{return and__3941__auto____8597;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8619 = null;
var G__8619__2 = (function (this_sym8598,k){
var this__8600 = this;
var this_sym8598__8601 = this;
var coll__8602 = this_sym8598__8601;
return coll__8602.cljs$core$ILookup$_lookup$arity$2(coll__8602,k);
});
var G__8619__3 = (function (this_sym8599,k,not_found){
var this__8600 = this;
var this_sym8599__8603 = this;
var coll__8604 = this_sym8599__8603;
return coll__8604.cljs$core$ILookup$_lookup$arity$3(coll__8604,k,not_found);
});
G__8619 = function(this_sym8599,k,not_found){
switch(arguments.length){
case 2:
return G__8619__2.call(this,this_sym8599,k);
case 3:
return G__8619__3.call(this,this_sym8599,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8619;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8582,args8583){
var this__8605 = this;
return this_sym8582.call.apply(this_sym8582,[this_sym8582].concat(args8583.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8606 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8607 = this;
var this__8608 = this;
return cljs.core.pr_str.call(null,this__8608);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8609 = this;
if((this__8609.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8572_SHARP_){
return cljs.core.vector.call(null,p1__8572_SHARP_,(this__8609.strobj[p1__8572_SHARP_]));
}),this__8609.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8610 = this;
return this__8610.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8611 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8612 = this;
return (new cljs.core.ObjMap(meta,this__8612.keys,this__8612.strobj,this__8612.update_count,this__8612.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8613 = this;
return this__8613.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8614 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8614.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8615 = this;
if((function (){var and__3941__auto____8616 = goog.isString(k);
if(and__3941__auto____8616)
{return !((cljs.core.scan_array.call(null,1,k,this__8615.keys) == null));
} else
{return and__3941__auto____8616;
}
})())
{var new_keys__8617 = this__8615.keys.slice();
var new_strobj__8618 = cljs.core.obj_clone.call(null,this__8615.strobj,this__8615.keys);
new_keys__8617.splice(cljs.core.scan_array.call(null,1,k,new_keys__8617),1);
cljs.core.js_delete.call(null,new_strobj__8618,k);
return (new cljs.core.ObjMap(this__8615.meta,new_keys__8617,new_strobj__8618,(this__8615.update_count + 1),null));
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
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8623 = this;
var h__2253__auto____8624 = this__8623.__hash;
if(!((h__2253__auto____8624 == null)))
{return h__2253__auto____8624;
} else
{var h__2253__auto____8625 = cljs.core.hash_imap.call(null,coll);
this__8623.__hash = h__2253__auto____8625;
return h__2253__auto____8625;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8626 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8627 = this;
var bucket__8628 = (this__8627.hashobj[cljs.core.hash.call(null,k)]);
var i__8629 = (cljs.core.truth_(bucket__8628)?cljs.core.scan_array.call(null,2,k,bucket__8628):null);
if(cljs.core.truth_(i__8629))
{return (bucket__8628[(i__8629 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8630 = this;
var h__8631 = cljs.core.hash.call(null,k);
var bucket__8632 = (this__8630.hashobj[h__8631]);
if(cljs.core.truth_(bucket__8632))
{var new_bucket__8633 = bucket__8632.slice();
var new_hashobj__8634 = goog.object.clone(this__8630.hashobj);
(new_hashobj__8634[h__8631] = new_bucket__8633);
var temp__4090__auto____8635 = cljs.core.scan_array.call(null,2,k,new_bucket__8633);
if(cljs.core.truth_(temp__4090__auto____8635))
{var i__8636 = temp__4090__auto____8635;
(new_bucket__8633[(i__8636 + 1)] = v);
return (new cljs.core.HashMap(this__8630.meta,this__8630.count,new_hashobj__8634,null));
} else
{new_bucket__8633.push(k,v);
return (new cljs.core.HashMap(this__8630.meta,(this__8630.count + 1),new_hashobj__8634,null));
}
} else
{var new_hashobj__8637 = goog.object.clone(this__8630.hashobj);
(new_hashobj__8637[h__8631] = [k,v]);
return (new cljs.core.HashMap(this__8630.meta,(this__8630.count + 1),new_hashobj__8637,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8638 = this;
var bucket__8639 = (this__8638.hashobj[cljs.core.hash.call(null,k)]);
var i__8640 = (cljs.core.truth_(bucket__8639)?cljs.core.scan_array.call(null,2,k,bucket__8639):null);
if(cljs.core.truth_(i__8640))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8665 = null;
var G__8665__2 = (function (this_sym8641,k){
var this__8643 = this;
var this_sym8641__8644 = this;
var coll__8645 = this_sym8641__8644;
return coll__8645.cljs$core$ILookup$_lookup$arity$2(coll__8645,k);
});
var G__8665__3 = (function (this_sym8642,k,not_found){
var this__8643 = this;
var this_sym8642__8646 = this;
var coll__8647 = this_sym8642__8646;
return coll__8647.cljs$core$ILookup$_lookup$arity$3(coll__8647,k,not_found);
});
G__8665 = function(this_sym8642,k,not_found){
switch(arguments.length){
case 2:
return G__8665__2.call(this,this_sym8642,k);
case 3:
return G__8665__3.call(this,this_sym8642,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8665;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8621,args8622){
var this__8648 = this;
return this_sym8621.call.apply(this_sym8621,[this_sym8621].concat(args8622.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8649 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8650 = this;
var this__8651 = this;
return cljs.core.pr_str.call(null,this__8651);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8652 = this;
if((this__8652.count > 0))
{var hashes__8653 = cljs.core.js_keys.call(null,this__8652.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8620_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8652.hashobj[p1__8620_SHARP_])));
}),hashes__8653);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8654 = this;
return this__8654.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8655 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8656 = this;
return (new cljs.core.HashMap(meta,this__8656.count,this__8656.hashobj,this__8656.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8657 = this;
return this__8657.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8658 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8658.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8659 = this;
var h__8660 = cljs.core.hash.call(null,k);
var bucket__8661 = (this__8659.hashobj[h__8660]);
var i__8662 = (cljs.core.truth_(bucket__8661)?cljs.core.scan_array.call(null,2,k,bucket__8661):null);
if(cljs.core.not.call(null,i__8662))
{return coll;
} else
{var new_hashobj__8663 = goog.object.clone(this__8659.hashobj);
if((3 > bucket__8661.length))
{cljs.core.js_delete.call(null,new_hashobj__8663,h__8660);
} else
{var new_bucket__8664 = bucket__8661.slice();
new_bucket__8664.splice(i__8662,2);
(new_hashobj__8663[h__8660] = new_bucket__8664);
}
return (new cljs.core.HashMap(this__8659.meta,(this__8659.count - 1),new_hashobj__8663,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8666 = ks.length;
var i__8667 = 0;
var out__8668 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8667 < len__8666))
{{
var G__8669 = (i__8667 + 1);
var G__8670 = cljs.core.assoc.call(null,out__8668,(ks[i__8667]),(vs[i__8667]));
i__8667 = G__8669;
out__8668 = G__8670;
continue;
}
} else
{return out__8668;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8674 = m.arr;
var len__8675 = arr__8674.length;
var i__8676 = 0;
while(true){
if((len__8675 <= i__8676))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8674[i__8676]),k))
{return i__8676;
} else
{if("\uFDD0'else")
{{
var G__8677 = (i__8676 + 2);
i__8676 = G__8677;
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
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8680 = this;
return (new cljs.core.TransientArrayMap({},this__8680.arr.length,this__8680.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8681 = this;
var h__2253__auto____8682 = this__8681.__hash;
if(!((h__2253__auto____8682 == null)))
{return h__2253__auto____8682;
} else
{var h__2253__auto____8683 = cljs.core.hash_imap.call(null,coll);
this__8681.__hash = h__2253__auto____8683;
return h__2253__auto____8683;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8684 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8685 = this;
var idx__8686 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8686 === -1))
{return not_found;
} else
{return (this__8685.arr[(idx__8686 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8687 = this;
var idx__8688 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8688 === -1))
{if((this__8687.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8687.meta,(this__8687.cnt + 1),(function (){var G__8689__8690 = this__8687.arr.slice();
G__8689__8690.push(k);
G__8689__8690.push(v);
return G__8689__8690;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8687.arr[(idx__8688 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8687.meta,this__8687.cnt,(function (){var G__8691__8692 = this__8687.arr.slice();
(G__8691__8692[(idx__8688 + 1)] = v);
return G__8691__8692;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8693 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8725 = null;
var G__8725__2 = (function (this_sym8694,k){
var this__8696 = this;
var this_sym8694__8697 = this;
var coll__8698 = this_sym8694__8697;
return coll__8698.cljs$core$ILookup$_lookup$arity$2(coll__8698,k);
});
var G__8725__3 = (function (this_sym8695,k,not_found){
var this__8696 = this;
var this_sym8695__8699 = this;
var coll__8700 = this_sym8695__8699;
return coll__8700.cljs$core$ILookup$_lookup$arity$3(coll__8700,k,not_found);
});
G__8725 = function(this_sym8695,k,not_found){
switch(arguments.length){
case 2:
return G__8725__2.call(this,this_sym8695,k);
case 3:
return G__8725__3.call(this,this_sym8695,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8725;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8678,args8679){
var this__8701 = this;
return this_sym8678.call.apply(this_sym8678,[this_sym8678].concat(args8679.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8702 = this;
var len__8703 = this__8702.arr.length;
var i__8704 = 0;
var init__8705 = init;
while(true){
if((i__8704 < len__8703))
{var init__8706 = f.call(null,init__8705,(this__8702.arr[i__8704]),(this__8702.arr[(i__8704 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8706))
{return cljs.core.deref.call(null,init__8706);
} else
{{
var G__8726 = (i__8704 + 2);
var G__8727 = init__8706;
i__8704 = G__8726;
init__8705 = G__8727;
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
var this__8707 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8708 = this;
var this__8709 = this;
return cljs.core.pr_str.call(null,this__8709);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8710 = this;
if((this__8710.cnt > 0))
{var len__8711 = this__8710.arr.length;
var array_map_seq__8712 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8711))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8710.arr[i]),(this__8710.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8712.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8713 = this;
return this__8713.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8714 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8715 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8715.cnt,this__8715.arr,this__8715.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8716 = this;
return this__8716.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8717 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8717.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8718 = this;
var idx__8719 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8719 >= 0))
{var len__8720 = this__8718.arr.length;
var new_len__8721 = (len__8720 - 2);
if((new_len__8721 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8722 = cljs.core.make_array.call(null,new_len__8721);
var s__8723 = 0;
var d__8724 = 0;
while(true){
if((s__8723 >= len__8720))
{return (new cljs.core.PersistentArrayMap(this__8718.meta,(this__8718.cnt - 1),new_arr__8722,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8718.arr[s__8723])))
{{
var G__8728 = (s__8723 + 2);
var G__8729 = d__8724;
s__8723 = G__8728;
d__8724 = G__8729;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8722[d__8724] = (this__8718.arr[s__8723]));
(new_arr__8722[(d__8724 + 1)] = (this__8718.arr[(s__8723 + 1)]));
{
var G__8730 = (s__8723 + 2);
var G__8731 = (d__8724 + 2);
s__8723 = G__8730;
d__8724 = G__8731;
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
var len__8732 = cljs.core.count.call(null,ks);
var i__8733 = 0;
var out__8734 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8733 < len__8732))
{{
var G__8735 = (i__8733 + 1);
var G__8736 = cljs.core.assoc_BANG_.call(null,out__8734,(ks[i__8733]),(vs[i__8733]));
i__8733 = G__8735;
out__8734 = G__8736;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8734);
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
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8737 = this;
if(cljs.core.truth_(this__8737.editable_QMARK_))
{var idx__8738 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8738 >= 0))
{(this__8737.arr[idx__8738] = (this__8737.arr[(this__8737.len - 2)]));
(this__8737.arr[(idx__8738 + 1)] = (this__8737.arr[(this__8737.len - 1)]));
var G__8739__8740 = this__8737.arr;
G__8739__8740.pop();
G__8739__8740.pop();
G__8739__8740;
this__8737.len = (this__8737.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8741 = this;
if(cljs.core.truth_(this__8741.editable_QMARK_))
{var idx__8742 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8742 === -1))
{if(((this__8741.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8741.len = (this__8741.len + 2);
this__8741.arr.push(key);
this__8741.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8741.len,this__8741.arr),key,val);
}
} else
{if((val === (this__8741.arr[(idx__8742 + 1)])))
{return tcoll;
} else
{(this__8741.arr[(idx__8742 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8743 = this;
if(cljs.core.truth_(this__8743.editable_QMARK_))
{if((function (){var G__8744__8745 = o;
if(G__8744__8745)
{if((function (){var or__3943__auto____8746 = (G__8744__8745.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____8746)
{return or__3943__auto____8746;
} else
{return G__8744__8745.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8744__8745.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8744__8745);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8744__8745);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8747 = cljs.core.seq.call(null,o);
var tcoll__8748 = tcoll;
while(true){
var temp__4090__auto____8749 = cljs.core.first.call(null,es__8747);
if(cljs.core.truth_(temp__4090__auto____8749))
{var e__8750 = temp__4090__auto____8749;
{
var G__8756 = cljs.core.next.call(null,es__8747);
var G__8757 = tcoll__8748.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8748,cljs.core.key.call(null,e__8750),cljs.core.val.call(null,e__8750));
es__8747 = G__8756;
tcoll__8748 = G__8757;
continue;
}
} else
{return tcoll__8748;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8751 = this;
if(cljs.core.truth_(this__8751.editable_QMARK_))
{this__8751.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8751.len,2),this__8751.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8752 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8753 = this;
if(cljs.core.truth_(this__8753.editable_QMARK_))
{var idx__8754 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8754 === -1))
{return not_found;
} else
{return (this__8753.arr[(idx__8754 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8755 = this;
if(cljs.core.truth_(this__8755.editable_QMARK_))
{return cljs.core.quot.call(null,this__8755.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8760 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8761 = 0;
while(true){
if((i__8761 < len))
{{
var G__8762 = cljs.core.assoc_BANG_.call(null,out__8760,(arr[i__8761]),(arr[(i__8761 + 1)]));
var G__8763 = (i__8761 + 2);
out__8760 = G__8762;
i__8761 = G__8763;
continue;
}
} else
{return out__8760;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2371__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8768__8769 = arr.slice();
(G__8768__8769[i] = a);
return G__8768__8769;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8770__8771 = arr.slice();
(G__8770__8771[i] = a);
(G__8770__8771[j] = b);
return G__8770__8771;
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
var new_arr__8773 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8773,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8773,(2 * i),(new_arr__8773.length - (2 * i)));
return new_arr__8773;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8776 = inode.ensure_editable(edit);
(editable__8776.arr[i] = a);
return editable__8776;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8777 = inode.ensure_editable(edit);
(editable__8777.arr[i] = a);
(editable__8777.arr[j] = b);
return editable__8777;
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
var len__8784 = arr.length;
var i__8785 = 0;
var init__8786 = init;
while(true){
if((i__8785 < len__8784))
{var init__8789 = (function (){var k__8787 = (arr[i__8785]);
if(!((k__8787 == null)))
{return f.call(null,init__8786,k__8787,(arr[(i__8785 + 1)]));
} else
{var node__8788 = (arr[(i__8785 + 1)]);
if(!((node__8788 == null)))
{return node__8788.kv_reduce(f,init__8786);
} else
{return init__8786;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8789))
{return cljs.core.deref.call(null,init__8789);
} else
{{
var G__8790 = (i__8785 + 2);
var G__8791 = init__8789;
i__8785 = G__8790;
init__8786 = G__8791;
continue;
}
}
} else
{return init__8786;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8792 = this;
var inode__8793 = this;
if((this__8792.bitmap === bit))
{return null;
} else
{var editable__8794 = inode__8793.ensure_editable(e);
var earr__8795 = editable__8794.arr;
var len__8796 = earr__8795.length;
editable__8794.bitmap = (bit ^ editable__8794.bitmap);
cljs.core.array_copy.call(null,earr__8795,(2 * (i + 1)),earr__8795,(2 * i),(len__8796 - (2 * (i + 1))));
(earr__8795[(len__8796 - 2)] = null);
(earr__8795[(len__8796 - 1)] = null);
return editable__8794;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8797 = this;
var inode__8798 = this;
var bit__8799 = (1 << ((hash >>> shift) & 0x01f));
var idx__8800 = cljs.core.bitmap_indexed_node_index.call(null,this__8797.bitmap,bit__8799);
if(((this__8797.bitmap & bit__8799) === 0))
{var n__8801 = cljs.core.bit_count.call(null,this__8797.bitmap);
if(((2 * n__8801) < this__8797.arr.length))
{var editable__8802 = inode__8798.ensure_editable(edit);
var earr__8803 = editable__8802.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8803,(2 * idx__8800),earr__8803,(2 * (idx__8800 + 1)),(2 * (n__8801 - idx__8800)));
(earr__8803[(2 * idx__8800)] = key);
(earr__8803[((2 * idx__8800) + 1)] = val);
editable__8802.bitmap = (editable__8802.bitmap | bit__8799);
return editable__8802;
} else
{if((n__8801 >= 16))
{var nodes__8804 = cljs.core.make_array.call(null,32);
var jdx__8805 = ((hash >>> shift) & 0x01f);
(nodes__8804[jdx__8805] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8806 = 0;
var j__8807 = 0;
while(true){
if((i__8806 < 32))
{if((((this__8797.bitmap >>> i__8806) & 1) === 0))
{{
var G__8860 = (i__8806 + 1);
var G__8861 = j__8807;
i__8806 = G__8860;
j__8807 = G__8861;
continue;
}
} else
{(nodes__8804[i__8806] = ((!(((this__8797.arr[j__8807]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8797.arr[j__8807])),(this__8797.arr[j__8807]),(this__8797.arr[(j__8807 + 1)]),added_leaf_QMARK_):(this__8797.arr[(j__8807 + 1)])));
{
var G__8862 = (i__8806 + 1);
var G__8863 = (j__8807 + 2);
i__8806 = G__8862;
j__8807 = G__8863;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8801 + 1),nodes__8804));
} else
{if("\uFDD0'else")
{var new_arr__8808 = cljs.core.make_array.call(null,(2 * (n__8801 + 4)));
cljs.core.array_copy.call(null,this__8797.arr,0,new_arr__8808,0,(2 * idx__8800));
(new_arr__8808[(2 * idx__8800)] = key);
(new_arr__8808[((2 * idx__8800) + 1)] = val);
cljs.core.array_copy.call(null,this__8797.arr,(2 * idx__8800),new_arr__8808,(2 * (idx__8800 + 1)),(2 * (n__8801 - idx__8800)));
added_leaf_QMARK_.val = true;
var editable__8809 = inode__8798.ensure_editable(edit);
editable__8809.arr = new_arr__8808;
editable__8809.bitmap = (editable__8809.bitmap | bit__8799);
return editable__8809;
} else
{return null;
}
}
}
} else
{var key_or_nil__8810 = (this__8797.arr[(2 * idx__8800)]);
var val_or_node__8811 = (this__8797.arr[((2 * idx__8800) + 1)]);
if((key_or_nil__8810 == null))
{var n__8812 = val_or_node__8811.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8812 === val_or_node__8811))
{return inode__8798;
} else
{return cljs.core.edit_and_set.call(null,inode__8798,edit,((2 * idx__8800) + 1),n__8812);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8810))
{if((val === val_or_node__8811))
{return inode__8798;
} else
{return cljs.core.edit_and_set.call(null,inode__8798,edit,((2 * idx__8800) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8798,edit,(2 * idx__8800),null,((2 * idx__8800) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8810,val_or_node__8811,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8813 = this;
var inode__8814 = this;
return cljs.core.create_inode_seq.call(null,this__8813.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8815 = this;
var inode__8816 = this;
var bit__8817 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8815.bitmap & bit__8817) === 0))
{return inode__8816;
} else
{var idx__8818 = cljs.core.bitmap_indexed_node_index.call(null,this__8815.bitmap,bit__8817);
var key_or_nil__8819 = (this__8815.arr[(2 * idx__8818)]);
var val_or_node__8820 = (this__8815.arr[((2 * idx__8818) + 1)]);
if((key_or_nil__8819 == null))
{var n__8821 = val_or_node__8820.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8821 === val_or_node__8820))
{return inode__8816;
} else
{if(!((n__8821 == null)))
{return cljs.core.edit_and_set.call(null,inode__8816,edit,((2 * idx__8818) + 1),n__8821);
} else
{if((this__8815.bitmap === bit__8817))
{return null;
} else
{if("\uFDD0'else")
{return inode__8816.edit_and_remove_pair(edit,bit__8817,idx__8818);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8819))
{(removed_leaf_QMARK_[0] = true);
return inode__8816.edit_and_remove_pair(edit,bit__8817,idx__8818);
} else
{if("\uFDD0'else")
{return inode__8816;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8822 = this;
var inode__8823 = this;
if((e === this__8822.edit))
{return inode__8823;
} else
{var n__8824 = cljs.core.bit_count.call(null,this__8822.bitmap);
var new_arr__8825 = cljs.core.make_array.call(null,(((n__8824 < 0))?4:(2 * (n__8824 + 1))));
cljs.core.array_copy.call(null,this__8822.arr,0,new_arr__8825,0,(2 * n__8824));
return (new cljs.core.BitmapIndexedNode(e,this__8822.bitmap,new_arr__8825));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8826 = this;
var inode__8827 = this;
return cljs.core.inode_kv_reduce.call(null,this__8826.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8828 = this;
var inode__8829 = this;
var bit__8830 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8828.bitmap & bit__8830) === 0))
{return not_found;
} else
{var idx__8831 = cljs.core.bitmap_indexed_node_index.call(null,this__8828.bitmap,bit__8830);
var key_or_nil__8832 = (this__8828.arr[(2 * idx__8831)]);
var val_or_node__8833 = (this__8828.arr[((2 * idx__8831) + 1)]);
if((key_or_nil__8832 == null))
{return val_or_node__8833.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8832))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8832,val_or_node__8833], true);
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
var this__8834 = this;
var inode__8835 = this;
var bit__8836 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8834.bitmap & bit__8836) === 0))
{return inode__8835;
} else
{var idx__8837 = cljs.core.bitmap_indexed_node_index.call(null,this__8834.bitmap,bit__8836);
var key_or_nil__8838 = (this__8834.arr[(2 * idx__8837)]);
var val_or_node__8839 = (this__8834.arr[((2 * idx__8837) + 1)]);
if((key_or_nil__8838 == null))
{var n__8840 = val_or_node__8839.inode_without((shift + 5),hash,key);
if((n__8840 === val_or_node__8839))
{return inode__8835;
} else
{if(!((n__8840 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8834.bitmap,cljs.core.clone_and_set.call(null,this__8834.arr,((2 * idx__8837) + 1),n__8840)));
} else
{if((this__8834.bitmap === bit__8836))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8834.bitmap ^ bit__8836),cljs.core.remove_pair.call(null,this__8834.arr,idx__8837)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8838))
{return (new cljs.core.BitmapIndexedNode(null,(this__8834.bitmap ^ bit__8836),cljs.core.remove_pair.call(null,this__8834.arr,idx__8837)));
} else
{if("\uFDD0'else")
{return inode__8835;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8841 = this;
var inode__8842 = this;
var bit__8843 = (1 << ((hash >>> shift) & 0x01f));
var idx__8844 = cljs.core.bitmap_indexed_node_index.call(null,this__8841.bitmap,bit__8843);
if(((this__8841.bitmap & bit__8843) === 0))
{var n__8845 = cljs.core.bit_count.call(null,this__8841.bitmap);
if((n__8845 >= 16))
{var nodes__8846 = cljs.core.make_array.call(null,32);
var jdx__8847 = ((hash >>> shift) & 0x01f);
(nodes__8846[jdx__8847] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8848 = 0;
var j__8849 = 0;
while(true){
if((i__8848 < 32))
{if((((this__8841.bitmap >>> i__8848) & 1) === 0))
{{
var G__8864 = (i__8848 + 1);
var G__8865 = j__8849;
i__8848 = G__8864;
j__8849 = G__8865;
continue;
}
} else
{(nodes__8846[i__8848] = ((!(((this__8841.arr[j__8849]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8841.arr[j__8849])),(this__8841.arr[j__8849]),(this__8841.arr[(j__8849 + 1)]),added_leaf_QMARK_):(this__8841.arr[(j__8849 + 1)])));
{
var G__8866 = (i__8848 + 1);
var G__8867 = (j__8849 + 2);
i__8848 = G__8866;
j__8849 = G__8867;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8845 + 1),nodes__8846));
} else
{var new_arr__8850 = cljs.core.make_array.call(null,(2 * (n__8845 + 1)));
cljs.core.array_copy.call(null,this__8841.arr,0,new_arr__8850,0,(2 * idx__8844));
(new_arr__8850[(2 * idx__8844)] = key);
(new_arr__8850[((2 * idx__8844) + 1)] = val);
cljs.core.array_copy.call(null,this__8841.arr,(2 * idx__8844),new_arr__8850,(2 * (idx__8844 + 1)),(2 * (n__8845 - idx__8844)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8841.bitmap | bit__8843),new_arr__8850));
}
} else
{var key_or_nil__8851 = (this__8841.arr[(2 * idx__8844)]);
var val_or_node__8852 = (this__8841.arr[((2 * idx__8844) + 1)]);
if((key_or_nil__8851 == null))
{var n__8853 = val_or_node__8852.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8853 === val_or_node__8852))
{return inode__8842;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8841.bitmap,cljs.core.clone_and_set.call(null,this__8841.arr,((2 * idx__8844) + 1),n__8853)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8851))
{if((val === val_or_node__8852))
{return inode__8842;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8841.bitmap,cljs.core.clone_and_set.call(null,this__8841.arr,((2 * idx__8844) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8841.bitmap,cljs.core.clone_and_set.call(null,this__8841.arr,(2 * idx__8844),null,((2 * idx__8844) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8851,val_or_node__8852,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8854 = this;
var inode__8855 = this;
var bit__8856 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8854.bitmap & bit__8856) === 0))
{return not_found;
} else
{var idx__8857 = cljs.core.bitmap_indexed_node_index.call(null,this__8854.bitmap,bit__8856);
var key_or_nil__8858 = (this__8854.arr[(2 * idx__8857)]);
var val_or_node__8859 = (this__8854.arr[((2 * idx__8857) + 1)]);
if((key_or_nil__8858 == null))
{return val_or_node__8859.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8858))
{return val_or_node__8859;
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
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8875 = array_node.arr;
var len__8876 = (2 * (array_node.cnt - 1));
var new_arr__8877 = cljs.core.make_array.call(null,len__8876);
var i__8878 = 0;
var j__8879 = 1;
var bitmap__8880 = 0;
while(true){
if((i__8878 < len__8876))
{if((function (){var and__3941__auto____8881 = !((i__8878 === idx));
if(and__3941__auto____8881)
{return !(((arr__8875[i__8878]) == null));
} else
{return and__3941__auto____8881;
}
})())
{(new_arr__8877[j__8879] = (arr__8875[i__8878]));
{
var G__8882 = (i__8878 + 1);
var G__8883 = (j__8879 + 2);
var G__8884 = (bitmap__8880 | (1 << i__8878));
i__8878 = G__8882;
j__8879 = G__8883;
bitmap__8880 = G__8884;
continue;
}
} else
{{
var G__8885 = (i__8878 + 1);
var G__8886 = j__8879;
var G__8887 = bitmap__8880;
i__8878 = G__8885;
j__8879 = G__8886;
bitmap__8880 = G__8887;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8880,new_arr__8877));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8888 = this;
var inode__8889 = this;
var idx__8890 = ((hash >>> shift) & 0x01f);
var node__8891 = (this__8888.arr[idx__8890]);
if((node__8891 == null))
{var editable__8892 = cljs.core.edit_and_set.call(null,inode__8889,edit,idx__8890,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8892.cnt = (editable__8892.cnt + 1);
return editable__8892;
} else
{var n__8893 = node__8891.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8893 === node__8891))
{return inode__8889;
} else
{return cljs.core.edit_and_set.call(null,inode__8889,edit,idx__8890,n__8893);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8894 = this;
var inode__8895 = this;
return cljs.core.create_array_node_seq.call(null,this__8894.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8896 = this;
var inode__8897 = this;
var idx__8898 = ((hash >>> shift) & 0x01f);
var node__8899 = (this__8896.arr[idx__8898]);
if((node__8899 == null))
{return inode__8897;
} else
{var n__8900 = node__8899.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8900 === node__8899))
{return inode__8897;
} else
{if((n__8900 == null))
{if((this__8896.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8897,edit,idx__8898);
} else
{var editable__8901 = cljs.core.edit_and_set.call(null,inode__8897,edit,idx__8898,n__8900);
editable__8901.cnt = (editable__8901.cnt - 1);
return editable__8901;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8897,edit,idx__8898,n__8900);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8902 = this;
var inode__8903 = this;
if((e === this__8902.edit))
{return inode__8903;
} else
{return (new cljs.core.ArrayNode(e,this__8902.cnt,this__8902.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8904 = this;
var inode__8905 = this;
var len__8906 = this__8904.arr.length;
var i__8907 = 0;
var init__8908 = init;
while(true){
if((i__8907 < len__8906))
{var node__8909 = (this__8904.arr[i__8907]);
if(!((node__8909 == null)))
{var init__8910 = node__8909.kv_reduce(f,init__8908);
if(cljs.core.reduced_QMARK_.call(null,init__8910))
{return cljs.core.deref.call(null,init__8910);
} else
{{
var G__8929 = (i__8907 + 1);
var G__8930 = init__8910;
i__8907 = G__8929;
init__8908 = G__8930;
continue;
}
}
} else
{return null;
}
} else
{return init__8908;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8911 = this;
var inode__8912 = this;
var idx__8913 = ((hash >>> shift) & 0x01f);
var node__8914 = (this__8911.arr[idx__8913]);
if(!((node__8914 == null)))
{return node__8914.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8915 = this;
var inode__8916 = this;
var idx__8917 = ((hash >>> shift) & 0x01f);
var node__8918 = (this__8915.arr[idx__8917]);
if(!((node__8918 == null)))
{var n__8919 = node__8918.inode_without((shift + 5),hash,key);
if((n__8919 === node__8918))
{return inode__8916;
} else
{if((n__8919 == null))
{if((this__8915.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8916,null,idx__8917);
} else
{return (new cljs.core.ArrayNode(null,(this__8915.cnt - 1),cljs.core.clone_and_set.call(null,this__8915.arr,idx__8917,n__8919)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8915.cnt,cljs.core.clone_and_set.call(null,this__8915.arr,idx__8917,n__8919)));
} else
{return null;
}
}
}
} else
{return inode__8916;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8920 = this;
var inode__8921 = this;
var idx__8922 = ((hash >>> shift) & 0x01f);
var node__8923 = (this__8920.arr[idx__8922]);
if((node__8923 == null))
{return (new cljs.core.ArrayNode(null,(this__8920.cnt + 1),cljs.core.clone_and_set.call(null,this__8920.arr,idx__8922,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8924 = node__8923.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8924 === node__8923))
{return inode__8921;
} else
{return (new cljs.core.ArrayNode(null,this__8920.cnt,cljs.core.clone_and_set.call(null,this__8920.arr,idx__8922,n__8924)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8925 = this;
var inode__8926 = this;
var idx__8927 = ((hash >>> shift) & 0x01f);
var node__8928 = (this__8925.arr[idx__8927]);
if(!((node__8928 == null)))
{return node__8928.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8933 = (2 * cnt);
var i__8934 = 0;
while(true){
if((i__8934 < lim__8933))
{if(cljs.core.key_test.call(null,key,(arr[i__8934])))
{return i__8934;
} else
{{
var G__8935 = (i__8934 + 2);
i__8934 = G__8935;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8936 = this;
var inode__8937 = this;
if((hash === this__8936.collision_hash))
{var idx__8938 = cljs.core.hash_collision_node_find_index.call(null,this__8936.arr,this__8936.cnt,key);
if((idx__8938 === -1))
{if((this__8936.arr.length > (2 * this__8936.cnt)))
{var editable__8939 = cljs.core.edit_and_set.call(null,inode__8937,edit,(2 * this__8936.cnt),key,((2 * this__8936.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8939.cnt = (editable__8939.cnt + 1);
return editable__8939;
} else
{var len__8940 = this__8936.arr.length;
var new_arr__8941 = cljs.core.make_array.call(null,(len__8940 + 2));
cljs.core.array_copy.call(null,this__8936.arr,0,new_arr__8941,0,len__8940);
(new_arr__8941[len__8940] = key);
(new_arr__8941[(len__8940 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8937.ensure_editable_array(edit,(this__8936.cnt + 1),new_arr__8941);
}
} else
{if(((this__8936.arr[(idx__8938 + 1)]) === val))
{return inode__8937;
} else
{return cljs.core.edit_and_set.call(null,inode__8937,edit,(idx__8938 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8936.collision_hash >>> shift) & 0x01f)),[null,inode__8937,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8942 = this;
var inode__8943 = this;
return cljs.core.create_inode_seq.call(null,this__8942.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8944 = this;
var inode__8945 = this;
var idx__8946 = cljs.core.hash_collision_node_find_index.call(null,this__8944.arr,this__8944.cnt,key);
if((idx__8946 === -1))
{return inode__8945;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8944.cnt === 1))
{return null;
} else
{var editable__8947 = inode__8945.ensure_editable(edit);
var earr__8948 = editable__8947.arr;
(earr__8948[idx__8946] = (earr__8948[((2 * this__8944.cnt) - 2)]));
(earr__8948[(idx__8946 + 1)] = (earr__8948[((2 * this__8944.cnt) - 1)]));
(earr__8948[((2 * this__8944.cnt) - 1)] = null);
(earr__8948[((2 * this__8944.cnt) - 2)] = null);
editable__8947.cnt = (editable__8947.cnt - 1);
return editable__8947;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8949 = this;
var inode__8950 = this;
if((e === this__8949.edit))
{return inode__8950;
} else
{var new_arr__8951 = cljs.core.make_array.call(null,(2 * (this__8949.cnt + 1)));
cljs.core.array_copy.call(null,this__8949.arr,0,new_arr__8951,0,(2 * this__8949.cnt));
return (new cljs.core.HashCollisionNode(e,this__8949.collision_hash,this__8949.cnt,new_arr__8951));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8952 = this;
var inode__8953 = this;
return cljs.core.inode_kv_reduce.call(null,this__8952.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8954 = this;
var inode__8955 = this;
var idx__8956 = cljs.core.hash_collision_node_find_index.call(null,this__8954.arr,this__8954.cnt,key);
if((idx__8956 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8954.arr[idx__8956])))
{return cljs.core.PersistentVector.fromArray([(this__8954.arr[idx__8956]),(this__8954.arr[(idx__8956 + 1)])], true);
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
var this__8957 = this;
var inode__8958 = this;
var idx__8959 = cljs.core.hash_collision_node_find_index.call(null,this__8957.arr,this__8957.cnt,key);
if((idx__8959 === -1))
{return inode__8958;
} else
{if((this__8957.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8957.collision_hash,(this__8957.cnt - 1),cljs.core.remove_pair.call(null,this__8957.arr,cljs.core.quot.call(null,idx__8959,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8960 = this;
var inode__8961 = this;
if((hash === this__8960.collision_hash))
{var idx__8962 = cljs.core.hash_collision_node_find_index.call(null,this__8960.arr,this__8960.cnt,key);
if((idx__8962 === -1))
{var len__8963 = this__8960.arr.length;
var new_arr__8964 = cljs.core.make_array.call(null,(len__8963 + 2));
cljs.core.array_copy.call(null,this__8960.arr,0,new_arr__8964,0,len__8963);
(new_arr__8964[len__8963] = key);
(new_arr__8964[(len__8963 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8960.collision_hash,(this__8960.cnt + 1),new_arr__8964));
} else
{if(cljs.core._EQ_.call(null,(this__8960.arr[idx__8962]),val))
{return inode__8961;
} else
{return (new cljs.core.HashCollisionNode(null,this__8960.collision_hash,this__8960.cnt,cljs.core.clone_and_set.call(null,this__8960.arr,(idx__8962 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8960.collision_hash >>> shift) & 0x01f)),[null,inode__8961])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8965 = this;
var inode__8966 = this;
var idx__8967 = cljs.core.hash_collision_node_find_index.call(null,this__8965.arr,this__8965.cnt,key);
if((idx__8967 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8965.arr[idx__8967])))
{return (this__8965.arr[(idx__8967 + 1)]);
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
var this__8968 = this;
var inode__8969 = this;
if((e === this__8968.edit))
{this__8968.arr = array;
this__8968.cnt = count;
return inode__8969;
} else
{return (new cljs.core.HashCollisionNode(this__8968.edit,this__8968.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8974 = cljs.core.hash.call(null,key1);
if((key1hash__8974 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8974,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8975 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8974,key1,val1,added_leaf_QMARK___8975).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8975);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8976 = cljs.core.hash.call(null,key1);
if((key1hash__8976 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8976,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8977 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8976,key1,val1,added_leaf_QMARK___8977).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8977);
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
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8978 = this;
var h__2253__auto____8979 = this__8978.__hash;
if(!((h__2253__auto____8979 == null)))
{return h__2253__auto____8979;
} else
{var h__2253__auto____8980 = cljs.core.hash_coll.call(null,coll);
this__8978.__hash = h__2253__auto____8980;
return h__2253__auto____8980;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8981 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8982 = this;
var this__8983 = this;
return cljs.core.pr_str.call(null,this__8983);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8984 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8985 = this;
if((this__8985.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8985.nodes[this__8985.i]),(this__8985.nodes[(this__8985.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8985.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8986 = this;
if((this__8986.s == null))
{return cljs.core.create_inode_seq.call(null,this__8986.nodes,(this__8986.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8986.nodes,this__8986.i,cljs.core.next.call(null,this__8986.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8988 = this;
return (new cljs.core.NodeSeq(meta,this__8988.nodes,this__8988.i,this__8988.s,this__8988.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8989 = this;
return this__8989.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8990 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8990.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8997 = nodes.length;
var j__8998 = i;
while(true){
if((j__8998 < len__8997))
{if(!(((nodes[j__8998]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8998,null,null));
} else
{var temp__4090__auto____8999 = (nodes[(j__8998 + 1)]);
if(cljs.core.truth_(temp__4090__auto____8999))
{var node__9000 = temp__4090__auto____8999;
var temp__4090__auto____9001 = node__9000.inode_seq();
if(cljs.core.truth_(temp__4090__auto____9001))
{var node_seq__9002 = temp__4090__auto____9001;
return (new cljs.core.NodeSeq(null,nodes,(j__8998 + 2),node_seq__9002,null));
} else
{{
var G__9003 = (j__8998 + 2);
j__8998 = G__9003;
continue;
}
}
} else
{{
var G__9004 = (j__8998 + 2);
j__8998 = G__9004;
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
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9005 = this;
var h__2253__auto____9006 = this__9005.__hash;
if(!((h__2253__auto____9006 == null)))
{return h__2253__auto____9006;
} else
{var h__2253__auto____9007 = cljs.core.hash_coll.call(null,coll);
this__9005.__hash = h__2253__auto____9007;
return h__2253__auto____9007;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9008 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9009 = this;
var this__9010 = this;
return cljs.core.pr_str.call(null,this__9010);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9011 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9012 = this;
return cljs.core.first.call(null,this__9012.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9013 = this;
return cljs.core.create_array_node_seq.call(null,null,this__9013.nodes,this__9013.i,cljs.core.next.call(null,this__9013.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9015 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9015.nodes,this__9015.i,this__9015.s,this__9015.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9016 = this;
return this__9016.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9017 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9017.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9024 = nodes.length;
var j__9025 = i;
while(true){
if((j__9025 < len__9024))
{var temp__4090__auto____9026 = (nodes[j__9025]);
if(cljs.core.truth_(temp__4090__auto____9026))
{var nj__9027 = temp__4090__auto____9026;
var temp__4090__auto____9028 = nj__9027.inode_seq();
if(cljs.core.truth_(temp__4090__auto____9028))
{var ns__9029 = temp__4090__auto____9028;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9025 + 1),ns__9029,null));
} else
{{
var G__9030 = (j__9025 + 1);
j__9025 = G__9030;
continue;
}
}
} else
{{
var G__9031 = (j__9025 + 1);
j__9025 = G__9031;
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
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9034 = this;
return (new cljs.core.TransientHashMap({},this__9034.root,this__9034.cnt,this__9034.has_nil_QMARK_,this__9034.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9035 = this;
var h__2253__auto____9036 = this__9035.__hash;
if(!((h__2253__auto____9036 == null)))
{return h__2253__auto____9036;
} else
{var h__2253__auto____9037 = cljs.core.hash_imap.call(null,coll);
this__9035.__hash = h__2253__auto____9037;
return h__2253__auto____9037;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9038 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9039 = this;
if((k == null))
{if(this__9039.has_nil_QMARK_)
{return this__9039.nil_val;
} else
{return not_found;
}
} else
{if((this__9039.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9039.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9040 = this;
if((k == null))
{if((function (){var and__3941__auto____9041 = this__9040.has_nil_QMARK_;
if(and__3941__auto____9041)
{return (v === this__9040.nil_val);
} else
{return and__3941__auto____9041;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9040.meta,((this__9040.has_nil_QMARK_)?this__9040.cnt:(this__9040.cnt + 1)),this__9040.root,true,v,null));
}
} else
{var added_leaf_QMARK___9042 = (new cljs.core.Box(false));
var new_root__9043 = (((this__9040.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9040.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9042);
if((new_root__9043 === this__9040.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9040.meta,((added_leaf_QMARK___9042.val)?(this__9040.cnt + 1):this__9040.cnt),new_root__9043,this__9040.has_nil_QMARK_,this__9040.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9044 = this;
if((k == null))
{return this__9044.has_nil_QMARK_;
} else
{if((this__9044.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9044.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9067 = null;
var G__9067__2 = (function (this_sym9045,k){
var this__9047 = this;
var this_sym9045__9048 = this;
var coll__9049 = this_sym9045__9048;
return coll__9049.cljs$core$ILookup$_lookup$arity$2(coll__9049,k);
});
var G__9067__3 = (function (this_sym9046,k,not_found){
var this__9047 = this;
var this_sym9046__9050 = this;
var coll__9051 = this_sym9046__9050;
return coll__9051.cljs$core$ILookup$_lookup$arity$3(coll__9051,k,not_found);
});
G__9067 = function(this_sym9046,k,not_found){
switch(arguments.length){
case 2:
return G__9067__2.call(this,this_sym9046,k);
case 3:
return G__9067__3.call(this,this_sym9046,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9067;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9032,args9033){
var this__9052 = this;
return this_sym9032.call.apply(this_sym9032,[this_sym9032].concat(args9033.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9053 = this;
var init__9054 = ((this__9053.has_nil_QMARK_)?f.call(null,init,null,this__9053.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__9054))
{return cljs.core.deref.call(null,init__9054);
} else
{if(!((this__9053.root == null)))
{return this__9053.root.kv_reduce(f,init__9054);
} else
{if("\uFDD0'else")
{return init__9054;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9055 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9056 = this;
var this__9057 = this;
return cljs.core.pr_str.call(null,this__9057);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9058 = this;
if((this__9058.cnt > 0))
{var s__9059 = ((!((this__9058.root == null)))?this__9058.root.inode_seq():null);
if(this__9058.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__9058.nil_val], true),s__9059);
} else
{return s__9059;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9060 = this;
return this__9060.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9061 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9062 = this;
return (new cljs.core.PersistentHashMap(meta,this__9062.cnt,this__9062.root,this__9062.has_nil_QMARK_,this__9062.nil_val,this__9062.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9063 = this;
return this__9063.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9064 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__9064.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9065 = this;
if((k == null))
{if(this__9065.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9065.meta,(this__9065.cnt - 1),this__9065.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9065.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9066 = this__9065.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__9066 === this__9065.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9065.meta,(this__9065.cnt - 1),new_root__9066,this__9065.has_nil_QMARK_,this__9065.nil_val,null));
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
var len__9068 = ks.length;
var i__9069 = 0;
var out__9070 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9069 < len__9068))
{{
var G__9071 = (i__9069 + 1);
var G__9072 = cljs.core.assoc_BANG_.call(null,out__9070,(ks[i__9069]),(vs[i__9069]));
i__9069 = G__9071;
out__9070 = G__9072;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9070);
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
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9073 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9074 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9075 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9076 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9077 = this;
if((k == null))
{if(this__9077.has_nil_QMARK_)
{return this__9077.nil_val;
} else
{return null;
}
} else
{if((this__9077.root == null))
{return null;
} else
{return this__9077.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9078 = this;
if((k == null))
{if(this__9078.has_nil_QMARK_)
{return this__9078.nil_val;
} else
{return not_found;
}
} else
{if((this__9078.root == null))
{return not_found;
} else
{return this__9078.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9079 = this;
if(this__9079.edit)
{return this__9079.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9080 = this;
var tcoll__9081 = this;
if(this__9080.edit)
{if((function (){var G__9082__9083 = o;
if(G__9082__9083)
{if((function (){var or__3943__auto____9084 = (G__9082__9083.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____9084)
{return or__3943__auto____9084;
} else
{return G__9082__9083.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9082__9083.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9082__9083);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9082__9083);
}
})())
{return tcoll__9081.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9085 = cljs.core.seq.call(null,o);
var tcoll__9086 = tcoll__9081;
while(true){
var temp__4090__auto____9087 = cljs.core.first.call(null,es__9085);
if(cljs.core.truth_(temp__4090__auto____9087))
{var e__9088 = temp__4090__auto____9087;
{
var G__9099 = cljs.core.next.call(null,es__9085);
var G__9100 = tcoll__9086.assoc_BANG_(cljs.core.key.call(null,e__9088),cljs.core.val.call(null,e__9088));
es__9085 = G__9099;
tcoll__9086 = G__9100;
continue;
}
} else
{return tcoll__9086;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9089 = this;
var tcoll__9090 = this;
if(this__9089.edit)
{if((k == null))
{if((this__9089.nil_val === v))
{} else
{this__9089.nil_val = v;
}
if(this__9089.has_nil_QMARK_)
{} else
{this__9089.count = (this__9089.count + 1);
this__9089.has_nil_QMARK_ = true;
}
return tcoll__9090;
} else
{var added_leaf_QMARK___9091 = (new cljs.core.Box(false));
var node__9092 = (((this__9089.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9089.root).inode_assoc_BANG_(this__9089.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___9091);
if((node__9092 === this__9089.root))
{} else
{this__9089.root = node__9092;
}
if(added_leaf_QMARK___9091.val)
{this__9089.count = (this__9089.count + 1);
} else
{}
return tcoll__9090;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9093 = this;
var tcoll__9094 = this;
if(this__9093.edit)
{if((k == null))
{if(this__9093.has_nil_QMARK_)
{this__9093.has_nil_QMARK_ = false;
this__9093.nil_val = null;
this__9093.count = (this__9093.count - 1);
return tcoll__9094;
} else
{return tcoll__9094;
}
} else
{if((this__9093.root == null))
{return tcoll__9094;
} else
{var removed_leaf_QMARK___9095 = (new cljs.core.Box(false));
var node__9096 = this__9093.root.inode_without_BANG_(this__9093.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___9095);
if((node__9096 === this__9093.root))
{} else
{this__9093.root = node__9096;
}
if(cljs.core.truth_((removed_leaf_QMARK___9095[0])))
{this__9093.count = (this__9093.count - 1);
} else
{}
return tcoll__9094;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9097 = this;
var tcoll__9098 = this;
if(this__9097.edit)
{this__9097.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9097.count,this__9097.root,this__9097.has_nil_QMARK_,this__9097.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9103 = node;
var stack__9104 = stack;
while(true){
if(!((t__9103 == null)))
{{
var G__9105 = ((ascending_QMARK_)?t__9103.left:t__9103.right);
var G__9106 = cljs.core.conj.call(null,stack__9104,t__9103);
t__9103 = G__9105;
stack__9104 = G__9106;
continue;
}
} else
{return stack__9104;
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
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9107 = this;
var h__2253__auto____9108 = this__9107.__hash;
if(!((h__2253__auto____9108 == null)))
{return h__2253__auto____9108;
} else
{var h__2253__auto____9109 = cljs.core.hash_coll.call(null,coll);
this__9107.__hash = h__2253__auto____9109;
return h__2253__auto____9109;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9110 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9111 = this;
var this__9112 = this;
return cljs.core.pr_str.call(null,this__9112);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9113 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9114 = this;
if((this__9114.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__9114.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9115 = this;
return cljs.core.peek.call(null,this__9115.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9116 = this;
var t__9117 = cljs.core.first.call(null,this__9116.stack);
var next_stack__9118 = cljs.core.tree_map_seq_push.call(null,((this__9116.ascending_QMARK_)?t__9117.right:t__9117.left),cljs.core.next.call(null,this__9116.stack),this__9116.ascending_QMARK_);
if(!((next_stack__9118 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9118,this__9116.ascending_QMARK_,(this__9116.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9119 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9120 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9120.stack,this__9120.ascending_QMARK_,this__9120.cnt,this__9120.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9121 = this;
return this__9121.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
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
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
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
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto____9123 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3941__auto____9123)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3941__auto____9123;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
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
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto____9125 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3941__auto____9125)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3941__auto____9125;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
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
var init__9129 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__9129))
{return cljs.core.deref.call(null,init__9129);
} else
{var init__9130 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__9129):init__9129);
if(cljs.core.reduced_QMARK_.call(null,init__9130))
{return cljs.core.deref.call(null,init__9130);
} else
{var init__9131 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__9130):init__9130);
if(cljs.core.reduced_QMARK_.call(null,init__9131))
{return cljs.core.deref.call(null,init__9131);
} else
{return init__9131;
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
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9134 = this;
var h__2253__auto____9135 = this__9134.__hash;
if(!((h__2253__auto____9135 == null)))
{return h__2253__auto____9135;
} else
{var h__2253__auto____9136 = cljs.core.hash_coll.call(null,coll);
this__9134.__hash = h__2253__auto____9136;
return h__2253__auto____9136;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9137 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9138 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9139 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9139.key,this__9139.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9187 = null;
var G__9187__2 = (function (this_sym9140,k){
var this__9142 = this;
var this_sym9140__9143 = this;
var node__9144 = this_sym9140__9143;
return node__9144.cljs$core$ILookup$_lookup$arity$2(node__9144,k);
});
var G__9187__3 = (function (this_sym9141,k,not_found){
var this__9142 = this;
var this_sym9141__9145 = this;
var node__9146 = this_sym9141__9145;
return node__9146.cljs$core$ILookup$_lookup$arity$3(node__9146,k,not_found);
});
G__9187 = function(this_sym9141,k,not_found){
switch(arguments.length){
case 2:
return G__9187__2.call(this,this_sym9141,k);
case 3:
return G__9187__3.call(this,this_sym9141,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9187;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9132,args9133){
var this__9147 = this;
return this_sym9132.call.apply(this_sym9132,[this_sym9132].concat(args9133.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9148 = this;
return cljs.core.PersistentVector.fromArray([this__9148.key,this__9148.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9149 = this;
return this__9149.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9150 = this;
return this__9150.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9151 = this;
var node__9152 = this;
return ins.balance_right(node__9152);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9153 = this;
var node__9154 = this;
return (new cljs.core.RedNode(this__9153.key,this__9153.val,this__9153.left,this__9153.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9155 = this;
var node__9156 = this;
return cljs.core.balance_right_del.call(null,this__9155.key,this__9155.val,this__9155.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9157 = this;
var node__9158 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9159 = this;
var node__9160 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9160,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9161 = this;
var node__9162 = this;
return cljs.core.balance_left_del.call(null,this__9161.key,this__9161.val,del,this__9161.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9163 = this;
var node__9164 = this;
return ins.balance_left(node__9164);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9165 = this;
var node__9166 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9166,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9188 = null;
var G__9188__0 = (function (){
var this__9167 = this;
var this__9169 = this;
return cljs.core.pr_str.call(null,this__9169);
});
G__9188 = function(){
switch(arguments.length){
case 0:
return G__9188__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9188;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9170 = this;
var node__9171 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9171,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9172 = this;
var node__9173 = this;
return node__9173;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9174 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9175 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9176 = this;
return cljs.core.list.call(null,this__9176.key,this__9176.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9177 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9178 = this;
return this__9178.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9179 = this;
return cljs.core.PersistentVector.fromArray([this__9179.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9180 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9180.key,this__9180.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9181 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9182 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9182.key,this__9182.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9183 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9184 = this;
if((n === 0))
{return this__9184.key;
} else
{if((n === 1))
{return this__9184.val;
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
var this__9185 = this;
if((n === 0))
{return this__9185.key;
} else
{if((n === 1))
{return this__9185.val;
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
var this__9186 = this;
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
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9191 = this;
var h__2253__auto____9192 = this__9191.__hash;
if(!((h__2253__auto____9192 == null)))
{return h__2253__auto____9192;
} else
{var h__2253__auto____9193 = cljs.core.hash_coll.call(null,coll);
this__9191.__hash = h__2253__auto____9193;
return h__2253__auto____9193;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9194 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9195 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9196 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__9196.key,this__9196.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9244 = null;
var G__9244__2 = (function (this_sym9197,k){
var this__9199 = this;
var this_sym9197__9200 = this;
var node__9201 = this_sym9197__9200;
return node__9201.cljs$core$ILookup$_lookup$arity$2(node__9201,k);
});
var G__9244__3 = (function (this_sym9198,k,not_found){
var this__9199 = this;
var this_sym9198__9202 = this;
var node__9203 = this_sym9198__9202;
return node__9203.cljs$core$ILookup$_lookup$arity$3(node__9203,k,not_found);
});
G__9244 = function(this_sym9198,k,not_found){
switch(arguments.length){
case 2:
return G__9244__2.call(this,this_sym9198,k);
case 3:
return G__9244__3.call(this,this_sym9198,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9244;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9189,args9190){
var this__9204 = this;
return this_sym9189.call.apply(this_sym9189,[this_sym9189].concat(args9190.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9205 = this;
return cljs.core.PersistentVector.fromArray([this__9205.key,this__9205.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9206 = this;
return this__9206.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9207 = this;
return this__9207.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9208 = this;
var node__9209 = this;
return (new cljs.core.RedNode(this__9208.key,this__9208.val,this__9208.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9210 = this;
var node__9211 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9212 = this;
var node__9213 = this;
return (new cljs.core.RedNode(this__9212.key,this__9212.val,this__9212.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9214 = this;
var node__9215 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9216 = this;
var node__9217 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__9217,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9218 = this;
var node__9219 = this;
return (new cljs.core.RedNode(this__9218.key,this__9218.val,del,this__9218.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9220 = this;
var node__9221 = this;
return (new cljs.core.RedNode(this__9220.key,this__9220.val,ins,this__9220.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9222 = this;
var node__9223 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9222.left))
{return (new cljs.core.RedNode(this__9222.key,this__9222.val,this__9222.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9222.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9222.right))
{return (new cljs.core.RedNode(this__9222.right.key,this__9222.right.val,(new cljs.core.BlackNode(this__9222.key,this__9222.val,this__9222.left,this__9222.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9222.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9223,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9245 = null;
var G__9245__0 = (function (){
var this__9224 = this;
var this__9226 = this;
return cljs.core.pr_str.call(null,this__9226);
});
G__9245 = function(){
switch(arguments.length){
case 0:
return G__9245__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9245;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9227 = this;
var node__9228 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9227.right))
{return (new cljs.core.RedNode(this__9227.key,this__9227.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9227.left,null)),this__9227.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__9227.left))
{return (new cljs.core.RedNode(this__9227.left.key,this__9227.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9227.left.left,null)),(new cljs.core.BlackNode(this__9227.key,this__9227.val,this__9227.left.right,this__9227.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9228,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9229 = this;
var node__9230 = this;
return (new cljs.core.BlackNode(this__9229.key,this__9229.val,this__9229.left,this__9229.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9231 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9232 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9233 = this;
return cljs.core.list.call(null,this__9233.key,this__9233.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9234 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9235 = this;
return this__9235.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9236 = this;
return cljs.core.PersistentVector.fromArray([this__9236.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9237 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__9237.key,this__9237.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9239 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__9239.key,this__9239.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9240 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9241 = this;
if((n === 0))
{return this__9241.key;
} else
{if((n === 1))
{return this__9241.val;
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
var this__9242 = this;
if((n === 0))
{return this__9242.key;
} else
{if((n === 1))
{return this__9242.val;
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
var this__9243 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9249 = comp.call(null,k,tree.key);
if((c__9249 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9249 < 0))
{var ins__9250 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__9250 == null)))
{return tree.add_left(ins__9250);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9251 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__9251 == null)))
{return tree.add_right(ins__9251);
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
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__9254 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9254))
{return (new cljs.core.RedNode(app__9254.key,app__9254.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9254.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9254.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9254,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9255 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__9255))
{return (new cljs.core.RedNode(app__9255.key,app__9255.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9255.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9255.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9255,right.right,null)));
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
{var c__9261 = comp.call(null,k,tree.key);
if((c__9261 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__9261 < 0))
{var del__9262 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto____9263 = !((del__9262 == null));
if(or__3943__auto____9263)
{return or__3943__auto____9263;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__9262,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9262,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9264 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto____9265 = !((del__9264 == null));
if(or__3943__auto____9265)
{return or__3943__auto____9265;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__9264);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9264,null));
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
var tk__9268 = tree.key;
var c__9269 = comp.call(null,k,tk__9268);
if((c__9269 === 0))
{return tree.replace(tk__9268,v,tree.left,tree.right);
} else
{if((c__9269 < 0))
{return tree.replace(tk__9268,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9268,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9272 = this;
var h__2253__auto____9273 = this__9272.__hash;
if(!((h__2253__auto____9273 == null)))
{return h__2253__auto____9273;
} else
{var h__2253__auto____9274 = cljs.core.hash_imap.call(null,coll);
this__9272.__hash = h__2253__auto____9274;
return h__2253__auto____9274;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9275 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9276 = this;
var n__9277 = coll.entry_at(k);
if(!((n__9277 == null)))
{return n__9277.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9278 = this;
var found__9279 = [null];
var t__9280 = cljs.core.tree_map_add.call(null,this__9278.comp,this__9278.tree,k,v,found__9279);
if((t__9280 == null))
{var found_node__9281 = cljs.core.nth.call(null,found__9279,0);
if(cljs.core._EQ_.call(null,v,found_node__9281.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9278.comp,cljs.core.tree_map_replace.call(null,this__9278.comp,this__9278.tree,k,v),this__9278.cnt,this__9278.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9278.comp,t__9280.blacken(),(this__9278.cnt + 1),this__9278.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9282 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9316 = null;
var G__9316__2 = (function (this_sym9283,k){
var this__9285 = this;
var this_sym9283__9286 = this;
var coll__9287 = this_sym9283__9286;
return coll__9287.cljs$core$ILookup$_lookup$arity$2(coll__9287,k);
});
var G__9316__3 = (function (this_sym9284,k,not_found){
var this__9285 = this;
var this_sym9284__9288 = this;
var coll__9289 = this_sym9284__9288;
return coll__9289.cljs$core$ILookup$_lookup$arity$3(coll__9289,k,not_found);
});
G__9316 = function(this_sym9284,k,not_found){
switch(arguments.length){
case 2:
return G__9316__2.call(this,this_sym9284,k);
case 3:
return G__9316__3.call(this,this_sym9284,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9316;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9270,args9271){
var this__9290 = this;
return this_sym9270.call.apply(this_sym9270,[this_sym9270].concat(args9271.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9291 = this;
if(!((this__9291.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__9291.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9292 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9293 = this;
if((this__9293.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9293.tree,false,this__9293.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9294 = this;
var this__9295 = this;
return cljs.core.pr_str.call(null,this__9295);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9296 = this;
var coll__9297 = this;
var t__9298 = this__9296.tree;
while(true){
if(!((t__9298 == null)))
{var c__9299 = this__9296.comp.call(null,k,t__9298.key);
if((c__9299 === 0))
{return t__9298;
} else
{if((c__9299 < 0))
{{
var G__9317 = t__9298.left;
t__9298 = G__9317;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9318 = t__9298.right;
t__9298 = G__9318;
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
var this__9300 = this;
if((this__9300.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9300.tree,ascending_QMARK_,this__9300.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9301 = this;
if((this__9301.cnt > 0))
{var stack__9302 = null;
var t__9303 = this__9301.tree;
while(true){
if(!((t__9303 == null)))
{var c__9304 = this__9301.comp.call(null,k,t__9303.key);
if((c__9304 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__9302,t__9303),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9304 < 0))
{{
var G__9319 = cljs.core.conj.call(null,stack__9302,t__9303);
var G__9320 = t__9303.left;
stack__9302 = G__9319;
t__9303 = G__9320;
continue;
}
} else
{{
var G__9321 = stack__9302;
var G__9322 = t__9303.right;
stack__9302 = G__9321;
t__9303 = G__9322;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9304 > 0))
{{
var G__9323 = cljs.core.conj.call(null,stack__9302,t__9303);
var G__9324 = t__9303.right;
stack__9302 = G__9323;
t__9303 = G__9324;
continue;
}
} else
{{
var G__9325 = stack__9302;
var G__9326 = t__9303.left;
stack__9302 = G__9325;
t__9303 = G__9326;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9302 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9302,ascending_QMARK_,-1,null));
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
var this__9305 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9306 = this;
return this__9306.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9307 = this;
if((this__9307.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__9307.tree,true,this__9307.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9308 = this;
return this__9308.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9309 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9310 = this;
return (new cljs.core.PersistentTreeMap(this__9310.comp,this__9310.tree,this__9310.cnt,meta,this__9310.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9311 = this;
return this__9311.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9312 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__9312.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9313 = this;
var found__9314 = [null];
var t__9315 = cljs.core.tree_map_remove.call(null,this__9313.comp,this__9313.tree,k,found__9314);
if((t__9315 == null))
{if((cljs.core.nth.call(null,found__9314,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9313.comp,null,0,this__9313.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9313.comp,t__9315.blacken(),(this__9313.cnt - 1),this__9313.meta,null));
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
var in__9329 = cljs.core.seq.call(null,keyvals);
var out__9330 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9329)
{{
var G__9331 = cljs.core.nnext.call(null,in__9329);
var G__9332 = cljs.core.assoc_BANG_.call(null,out__9330,cljs.core.first.call(null,in__9329),cljs.core.second.call(null,in__9329));
in__9329 = G__9331;
out__9330 = G__9332;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9330);
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
hash_map.cljs$lang$applyTo = (function (arglist__9333){
var keyvals = cljs.core.seq(arglist__9333);;
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
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9334){
var keyvals = cljs.core.seq(arglist__9334);;
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
var ks__9338 = [];
var obj__9339 = {};
var kvs__9340 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__9340)
{ks__9338.push(cljs.core.first.call(null,kvs__9340));
(obj__9339[cljs.core.first.call(null,kvs__9340)] = cljs.core.second.call(null,kvs__9340));
{
var G__9341 = cljs.core.nnext.call(null,kvs__9340);
kvs__9340 = G__9341;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__9338,obj__9339);
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
obj_map.cljs$lang$applyTo = (function (arglist__9342){
var keyvals = cljs.core.seq(arglist__9342);;
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
var in__9345 = cljs.core.seq.call(null,keyvals);
var out__9346 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9345)
{{
var G__9347 = cljs.core.nnext.call(null,in__9345);
var G__9348 = cljs.core.assoc.call(null,out__9346,cljs.core.first.call(null,in__9345),cljs.core.second.call(null,in__9345));
in__9345 = G__9347;
out__9346 = G__9348;
continue;
}
} else
{return out__9346;
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
sorted_map.cljs$lang$applyTo = (function (arglist__9349){
var keyvals = cljs.core.seq(arglist__9349);;
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
var in__9352 = cljs.core.seq.call(null,keyvals);
var out__9353 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9352)
{{
var G__9354 = cljs.core.nnext.call(null,in__9352);
var G__9355 = cljs.core.assoc.call(null,out__9353,cljs.core.first.call(null,in__9352),cljs.core.second.call(null,in__9352));
in__9352 = G__9354;
out__9353 = G__9355;
continue;
}
} else
{return out__9353;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__9356){
var comparator = cljs.core.first(arglist__9356);
var keyvals = cljs.core.rest(arglist__9356);
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
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__9357_SHARP_,p2__9358_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3943__auto____9360 = p1__9357_SHARP_;
if(cljs.core.truth_(or__3943__auto____9360))
{return or__3943__auto____9360;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9358_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__9361){
var maps = cljs.core.seq(arglist__9361);;
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
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__9369 = (function (m,e){
var k__9367 = cljs.core.first.call(null,e);
var v__9368 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__9367))
{return cljs.core.assoc.call(null,m,k__9367,f.call(null,cljs.core._lookup.call(null,m,k__9367,null),v__9368));
} else
{return cljs.core.assoc.call(null,m,k__9367,v__9368);
}
});
var merge2__9371 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__9369,(function (){var or__3943__auto____9370 = m1;
if(cljs.core.truth_(or__3943__auto____9370))
{return or__3943__auto____9370;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__9371,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__9372){
var f = cljs.core.first(arglist__9372);
var maps = cljs.core.rest(arglist__9372);
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
var ret__9377 = cljs.core.ObjMap.EMPTY;
var keys__9378 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__9378)
{var key__9379 = cljs.core.first.call(null,keys__9378);
var entry__9380 = cljs.core._lookup.call(null,map,key__9379,"\uFDD0'cljs.core/not-found");
{
var G__9381 = ((cljs.core.not_EQ_.call(null,entry__9380,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__9377,key__9379,entry__9380):ret__9377);
var G__9382 = cljs.core.next.call(null,keys__9378);
ret__9377 = G__9381;
keys__9378 = G__9382;
continue;
}
} else
{return ret__9377;
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
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9386 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__9386.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9387 = this;
var h__2253__auto____9388 = this__9387.__hash;
if(!((h__2253__auto____9388 == null)))
{return h__2253__auto____9388;
} else
{var h__2253__auto____9389 = cljs.core.hash_iset.call(null,coll);
this__9387.__hash = h__2253__auto____9389;
return h__2253__auto____9389;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9390 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9391 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9391.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9412 = null;
var G__9412__2 = (function (this_sym9392,k){
var this__9394 = this;
var this_sym9392__9395 = this;
var coll__9396 = this_sym9392__9395;
return coll__9396.cljs$core$ILookup$_lookup$arity$2(coll__9396,k);
});
var G__9412__3 = (function (this_sym9393,k,not_found){
var this__9394 = this;
var this_sym9393__9397 = this;
var coll__9398 = this_sym9393__9397;
return coll__9398.cljs$core$ILookup$_lookup$arity$3(coll__9398,k,not_found);
});
G__9412 = function(this_sym9393,k,not_found){
switch(arguments.length){
case 2:
return G__9412__2.call(this,this_sym9393,k);
case 3:
return G__9412__3.call(this,this_sym9393,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9412;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9384,args9385){
var this__9399 = this;
return this_sym9384.call.apply(this_sym9384,[this_sym9384].concat(args9385.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9400 = this;
return (new cljs.core.PersistentHashSet(this__9400.meta,cljs.core.assoc.call(null,this__9400.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9401 = this;
var this__9402 = this;
return cljs.core.pr_str.call(null,this__9402);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9403 = this;
return cljs.core.keys.call(null,this__9403.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9404 = this;
return (new cljs.core.PersistentHashSet(this__9404.meta,cljs.core.dissoc.call(null,this__9404.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9405 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9406 = this;
var and__3941__auto____9407 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____9407)
{var and__3941__auto____9408 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____9408)
{return cljs.core.every_QMARK_.call(null,(function (p1__9383_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9383_SHARP_);
}),other);
} else
{return and__3941__auto____9408;
}
} else
{return and__3941__auto____9407;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9409 = this;
return (new cljs.core.PersistentHashSet(meta,this__9409.hash_map,this__9409.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9410 = this;
return this__9410.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9411 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__9411.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9413 = cljs.core.count.call(null,items);
var i__9414 = 0;
var out__9415 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9414 < len__9413))
{{
var G__9416 = (i__9414 + 1);
var G__9417 = cljs.core.conj_BANG_.call(null,out__9415,(items[i__9414]));
i__9414 = G__9416;
out__9415 = G__9417;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9415);
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
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9435 = null;
var G__9435__2 = (function (this_sym9421,k){
var this__9423 = this;
var this_sym9421__9424 = this;
var tcoll__9425 = this_sym9421__9424;
if((cljs.core._lookup.call(null,this__9423.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9435__3 = (function (this_sym9422,k,not_found){
var this__9423 = this;
var this_sym9422__9426 = this;
var tcoll__9427 = this_sym9422__9426;
if((cljs.core._lookup.call(null,this__9423.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9435 = function(this_sym9422,k,not_found){
switch(arguments.length){
case 2:
return G__9435__2.call(this,this_sym9422,k);
case 3:
return G__9435__3.call(this,this_sym9422,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9435;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9419,args9420){
var this__9428 = this;
return this_sym9419.call.apply(this_sym9419,[this_sym9419].concat(args9420.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9429 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9430 = this;
if((cljs.core._lookup.call(null,this__9430.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9431 = this;
return cljs.core.count.call(null,this__9431.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9432 = this;
this__9432.transient_map = cljs.core.dissoc_BANG_.call(null,this__9432.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9433 = this;
this__9433.transient_map = cljs.core.assoc_BANG_.call(null,this__9433.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9434 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__9434.transient_map),null));
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
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9438 = this;
var h__2253__auto____9439 = this__9438.__hash;
if(!((h__2253__auto____9439 == null)))
{return h__2253__auto____9439;
} else
{var h__2253__auto____9440 = cljs.core.hash_iset.call(null,coll);
this__9438.__hash = h__2253__auto____9440;
return h__2253__auto____9440;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9441 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9442 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__9442.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9468 = null;
var G__9468__2 = (function (this_sym9443,k){
var this__9445 = this;
var this_sym9443__9446 = this;
var coll__9447 = this_sym9443__9446;
return coll__9447.cljs$core$ILookup$_lookup$arity$2(coll__9447,k);
});
var G__9468__3 = (function (this_sym9444,k,not_found){
var this__9445 = this;
var this_sym9444__9448 = this;
var coll__9449 = this_sym9444__9448;
return coll__9449.cljs$core$ILookup$_lookup$arity$3(coll__9449,k,not_found);
});
G__9468 = function(this_sym9444,k,not_found){
switch(arguments.length){
case 2:
return G__9468__2.call(this,this_sym9444,k);
case 3:
return G__9468__3.call(this,this_sym9444,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9468;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9436,args9437){
var this__9450 = this;
return this_sym9436.call.apply(this_sym9436,[this_sym9436].concat(args9437.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9451 = this;
return (new cljs.core.PersistentTreeSet(this__9451.meta,cljs.core.assoc.call(null,this__9451.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9452 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__9452.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__9453 = this;
var this__9454 = this;
return cljs.core.pr_str.call(null,this__9454);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9455 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__9455.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9456 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__9456.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9457 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9458 = this;
return cljs.core._comparator.call(null,this__9458.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9459 = this;
return cljs.core.keys.call(null,this__9459.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9460 = this;
return (new cljs.core.PersistentTreeSet(this__9460.meta,cljs.core.dissoc.call(null,this__9460.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9461 = this;
return cljs.core.count.call(null,this__9461.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9462 = this;
var and__3941__auto____9463 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____9463)
{var and__3941__auto____9464 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____9464)
{return cljs.core.every_QMARK_.call(null,(function (p1__9418_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__9418_SHARP_);
}),other);
} else
{return and__3941__auto____9464;
}
} else
{return and__3941__auto____9463;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9465 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9465.tree_map,this__9465.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9466 = this;
return this__9466.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9467 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9467.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__9473__delegate = function (keys){
var in__9471 = cljs.core.seq.call(null,keys);
var out__9472 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9471))
{{
var G__9474 = cljs.core.next.call(null,in__9471);
var G__9475 = cljs.core.conj_BANG_.call(null,out__9472,cljs.core.first.call(null,in__9471));
in__9471 = G__9474;
out__9472 = G__9475;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9472);
}
break;
}
};
var G__9473 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9473__delegate.call(this, keys);
};
G__9473.cljs$lang$maxFixedArity = 0;
G__9473.cljs$lang$applyTo = (function (arglist__9476){
var keys = cljs.core.seq(arglist__9476);;
return G__9473__delegate(keys);
});
G__9473.cljs$lang$arity$variadic = G__9473__delegate;
return G__9473;
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
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9477){
var keys = cljs.core.seq(arglist__9477);;
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
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9479){
var comparator = cljs.core.first(arglist__9479);
var keys = cljs.core.rest(arglist__9479);
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
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9485 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto____9486 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4090__auto____9486))
{var e__9487 = temp__4090__auto____9486;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9487));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9485,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9478_SHARP_){
var temp__4090__auto____9488 = cljs.core.find.call(null,smap,p1__9478_SHARP_);
if(cljs.core.truth_(temp__4090__auto____9488))
{var e__9489 = temp__4090__auto____9488;
return cljs.core.second.call(null,e__9489);
} else
{return p1__9478_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9519 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9512,seen){
while(true){
var vec__9513__9514 = p__9512;
var f__9515 = cljs.core.nth.call(null,vec__9513__9514,0,null);
var xs__9516 = vec__9513__9514;
var temp__4092__auto____9517 = cljs.core.seq.call(null,xs__9516);
if(temp__4092__auto____9517)
{var s__9518 = temp__4092__auto____9517;
if(cljs.core.contains_QMARK_.call(null,seen,f__9515))
{{
var G__9520 = cljs.core.rest.call(null,s__9518);
var G__9521 = seen;
p__9512 = G__9520;
seen = G__9521;
continue;
}
} else
{return cljs.core.cons.call(null,f__9515,step.call(null,cljs.core.rest.call(null,s__9518),cljs.core.conj.call(null,seen,f__9515)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9519.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__9524 = cljs.core.PersistentVector.EMPTY;
var s__9525 = s;
while(true){
if(cljs.core.next.call(null,s__9525))
{{
var G__9526 = cljs.core.conj.call(null,ret__9524,cljs.core.first.call(null,s__9525));
var G__9527 = cljs.core.next.call(null,s__9525);
ret__9524 = G__9526;
s__9525 = G__9527;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9524);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3943__auto____9530 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____9530)
{return or__3943__auto____9530;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9531 = x.lastIndexOf("/");
if((i__9531 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9531 + 1));
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
if((function (){var or__3943__auto____9534 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____9534)
{return or__3943__auto____9534;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9535 = x.lastIndexOf("/");
if((i__9535 > -1))
{return cljs.core.subs.call(null,x,2,i__9535);
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
var map__9542 = cljs.core.ObjMap.EMPTY;
var ks__9543 = cljs.core.seq.call(null,keys);
var vs__9544 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto____9545 = ks__9543;
if(and__3941__auto____9545)
{return vs__9544;
} else
{return and__3941__auto____9545;
}
})())
{{
var G__9546 = cljs.core.assoc.call(null,map__9542,cljs.core.first.call(null,ks__9543),cljs.core.first.call(null,vs__9544));
var G__9547 = cljs.core.next.call(null,ks__9543);
var G__9548 = cljs.core.next.call(null,vs__9544);
map__9542 = G__9546;
ks__9543 = G__9547;
vs__9544 = G__9548;
continue;
}
} else
{return map__9542;
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
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9551__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9536_SHARP_,p2__9537_SHARP_){
return max_key.call(null,k,p1__9536_SHARP_,p2__9537_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9551 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9551__delegate.call(this, k, x, y, more);
};
G__9551.cljs$lang$maxFixedArity = 3;
G__9551.cljs$lang$applyTo = (function (arglist__9552){
var k = cljs.core.first(arglist__9552);
var x = cljs.core.first(cljs.core.next(arglist__9552));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9552)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9552)));
return G__9551__delegate(k, x, y, more);
});
G__9551.cljs$lang$arity$variadic = G__9551__delegate;
return G__9551;
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
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9553__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9549_SHARP_,p2__9550_SHARP_){
return min_key.call(null,k,p1__9549_SHARP_,p2__9550_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9553 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9553__delegate.call(this, k, x, y, more);
};
G__9553.cljs$lang$maxFixedArity = 3;
G__9553.cljs$lang$applyTo = (function (arglist__9554){
var k = cljs.core.first(arglist__9554);
var x = cljs.core.first(cljs.core.next(arglist__9554));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9554)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9554)));
return G__9553__delegate(k, x, y, more);
});
G__9553.cljs$lang$arity$variadic = G__9553__delegate;
return G__9553;
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
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9557 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9557)
{var s__9558 = temp__4092__auto____9557;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9558),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9558)));
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
var temp__4092__auto____9561 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9561)
{var s__9562 = temp__4092__auto____9561;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9562))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9562),take_while.call(null,pred,cljs.core.rest.call(null,s__9562)));
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
var comp__9564 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9564.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__9576 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto____9577 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4092__auto____9577))
{var vec__9578__9579 = temp__4092__auto____9577;
var e__9580 = cljs.core.nth.call(null,vec__9578__9579,0,null);
var s__9581 = vec__9578__9579;
if(cljs.core.truth_(include__9576.call(null,e__9580)))
{return s__9581;
} else
{return cljs.core.next.call(null,s__9581);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9576,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____9582 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto____9582))
{var vec__9583__9584 = temp__4092__auto____9582;
var e__9585 = cljs.core.nth.call(null,vec__9583__9584,0,null);
var s__9586 = vec__9583__9584;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9585))?s__9586:cljs.core.next.call(null,s__9586)));
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
var include__9598 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto____9599 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4092__auto____9599))
{var vec__9600__9601 = temp__4092__auto____9599;
var e__9602 = cljs.core.nth.call(null,vec__9600__9601,0,null);
var s__9603 = vec__9600__9601;
if(cljs.core.truth_(include__9598.call(null,e__9602)))
{return s__9603;
} else
{return cljs.core.next.call(null,s__9603);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9598,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____9604 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto____9604))
{var vec__9605__9606 = temp__4092__auto____9604;
var e__9607 = cljs.core.nth.call(null,vec__9605__9606,0,null);
var s__9608 = vec__9605__9606;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9607))?s__9608:cljs.core.next.call(null,s__9608)));
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
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9609 = this;
var h__2253__auto____9610 = this__9609.__hash;
if(!((h__2253__auto____9610 == null)))
{return h__2253__auto____9610;
} else
{var h__2253__auto____9611 = cljs.core.hash_coll.call(null,rng);
this__9609.__hash = h__2253__auto____9611;
return h__2253__auto____9611;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9612 = this;
if((this__9612.step > 0))
{if(((this__9612.start + this__9612.step) < this__9612.end))
{return (new cljs.core.Range(this__9612.meta,(this__9612.start + this__9612.step),this__9612.end,this__9612.step,null));
} else
{return null;
}
} else
{if(((this__9612.start + this__9612.step) > this__9612.end))
{return (new cljs.core.Range(this__9612.meta,(this__9612.start + this__9612.step),this__9612.end,this__9612.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9613 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9614 = this;
var this__9615 = this;
return cljs.core.pr_str.call(null,this__9615);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9616 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9617 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9618 = this;
if((this__9618.step > 0))
{if((this__9618.start < this__9618.end))
{return rng;
} else
{return null;
}
} else
{if((this__9618.start > this__9618.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9619 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9619.end - this__9619.start) / this__9619.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9620 = this;
return this__9620.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9621 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9621.meta,(this__9621.start + this__9621.step),this__9621.end,this__9621.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9622 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9623 = this;
return (new cljs.core.Range(meta,this__9623.start,this__9623.end,this__9623.step,this__9623.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9624 = this;
return this__9624.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9625 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9625.start + (n * this__9625.step));
} else
{if((function (){var and__3941__auto____9626 = (this__9625.start > this__9625.end);
if(and__3941__auto____9626)
{return (this__9625.step === 0);
} else
{return and__3941__auto____9626;
}
})())
{return this__9625.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9627 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9627.start + (n * this__9627.step));
} else
{if((function (){var and__3941__auto____9628 = (this__9627.start > this__9627.end);
if(and__3941__auto____9628)
{return (this__9627.step === 0);
} else
{return and__3941__auto____9628;
}
})())
{return this__9627.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9629 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9629.meta);
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
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
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
var temp__4092__auto____9632 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9632)
{var s__9633 = temp__4092__auto____9632;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9633),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9633)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9640 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9640)
{var s__9641 = temp__4092__auto____9640;
var fst__9642 = cljs.core.first.call(null,s__9641);
var fv__9643 = f.call(null,fst__9642);
var run__9644 = cljs.core.cons.call(null,fst__9642,cljs.core.take_while.call(null,(function (p1__9634_SHARP_){
return cljs.core._EQ_.call(null,fv__9643,f.call(null,p1__9634_SHARP_));
}),cljs.core.next.call(null,s__9641)));
return cljs.core.cons.call(null,run__9644,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9644),s__9641))));
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
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____9659 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____9659)
{var s__9660 = temp__4090__auto____9659;
return reductions.call(null,f,cljs.core.first.call(null,s__9660),cljs.core.rest.call(null,s__9660));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9661 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9661)
{var s__9662 = temp__4092__auto____9661;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9662)),cljs.core.rest.call(null,s__9662));
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
var G__9665 = null;
var G__9665__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9665__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9665__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9665__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9665__4 = (function() { 
var G__9666__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9666__delegate.call(this, x, y, z, args);
};
G__9666.cljs$lang$maxFixedArity = 3;
G__9666.cljs$lang$applyTo = (function (arglist__9667){
var x = cljs.core.first(arglist__9667);
var y = cljs.core.first(cljs.core.next(arglist__9667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9667)));
return G__9666__delegate(x, y, z, args);
});
G__9666.cljs$lang$arity$variadic = G__9666__delegate;
return G__9666;
})()
;
G__9665 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9665__0.call(this);
case 1:
return G__9665__1.call(this,x);
case 2:
return G__9665__2.call(this,x,y);
case 3:
return G__9665__3.call(this,x,y,z);
default:
return G__9665__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9665.cljs$lang$maxFixedArity = 3;
G__9665.cljs$lang$applyTo = G__9665__4.cljs$lang$applyTo;
return G__9665;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9668 = null;
var G__9668__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9668__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9668__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9668__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9668__4 = (function() { 
var G__9669__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9669 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9669__delegate.call(this, x, y, z, args);
};
G__9669.cljs$lang$maxFixedArity = 3;
G__9669.cljs$lang$applyTo = (function (arglist__9670){
var x = cljs.core.first(arglist__9670);
var y = cljs.core.first(cljs.core.next(arglist__9670));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9670)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9670)));
return G__9669__delegate(x, y, z, args);
});
G__9669.cljs$lang$arity$variadic = G__9669__delegate;
return G__9669;
})()
;
G__9668 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9668__0.call(this);
case 1:
return G__9668__1.call(this,x);
case 2:
return G__9668__2.call(this,x,y);
case 3:
return G__9668__3.call(this,x,y,z);
default:
return G__9668__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9668.cljs$lang$maxFixedArity = 3;
G__9668.cljs$lang$applyTo = G__9668__4.cljs$lang$applyTo;
return G__9668;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9671 = null;
var G__9671__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9671__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9671__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9671__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9671__4 = (function() { 
var G__9672__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9672 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9672__delegate.call(this, x, y, z, args);
};
G__9672.cljs$lang$maxFixedArity = 3;
G__9672.cljs$lang$applyTo = (function (arglist__9673){
var x = cljs.core.first(arglist__9673);
var y = cljs.core.first(cljs.core.next(arglist__9673));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9673)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9673)));
return G__9672__delegate(x, y, z, args);
});
G__9672.cljs$lang$arity$variadic = G__9672__delegate;
return G__9672;
})()
;
G__9671 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9671__0.call(this);
case 1:
return G__9671__1.call(this,x);
case 2:
return G__9671__2.call(this,x,y);
case 3:
return G__9671__3.call(this,x,y,z);
default:
return G__9671__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9671.cljs$lang$maxFixedArity = 3;
G__9671.cljs$lang$applyTo = G__9671__4.cljs$lang$applyTo;
return G__9671;
})()
});
var juxt__4 = (function() { 
var G__9674__delegate = function (f,g,h,fs){
var fs__9664 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9675 = null;
var G__9675__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9645_SHARP_,p2__9646_SHARP_){
return cljs.core.conj.call(null,p1__9645_SHARP_,p2__9646_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9664);
});
var G__9675__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9647_SHARP_,p2__9648_SHARP_){
return cljs.core.conj.call(null,p1__9647_SHARP_,p2__9648_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9664);
});
var G__9675__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9649_SHARP_,p2__9650_SHARP_){
return cljs.core.conj.call(null,p1__9649_SHARP_,p2__9650_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9664);
});
var G__9675__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9651_SHARP_,p2__9652_SHARP_){
return cljs.core.conj.call(null,p1__9651_SHARP_,p2__9652_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9664);
});
var G__9675__4 = (function() { 
var G__9676__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9653_SHARP_,p2__9654_SHARP_){
return cljs.core.conj.call(null,p1__9653_SHARP_,cljs.core.apply.call(null,p2__9654_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9664);
};
var G__9676 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9676__delegate.call(this, x, y, z, args);
};
G__9676.cljs$lang$maxFixedArity = 3;
G__9676.cljs$lang$applyTo = (function (arglist__9677){
var x = cljs.core.first(arglist__9677);
var y = cljs.core.first(cljs.core.next(arglist__9677));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9677)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9677)));
return G__9676__delegate(x, y, z, args);
});
G__9676.cljs$lang$arity$variadic = G__9676__delegate;
return G__9676;
})()
;
G__9675 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9675__0.call(this);
case 1:
return G__9675__1.call(this,x);
case 2:
return G__9675__2.call(this,x,y);
case 3:
return G__9675__3.call(this,x,y,z);
default:
return G__9675__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9675.cljs$lang$maxFixedArity = 3;
G__9675.cljs$lang$applyTo = G__9675__4.cljs$lang$applyTo;
return G__9675;
})()
};
var G__9674 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9674__delegate.call(this, f, g, h, fs);
};
G__9674.cljs$lang$maxFixedArity = 3;
G__9674.cljs$lang$applyTo = (function (arglist__9678){
var f = cljs.core.first(arglist__9678);
var g = cljs.core.first(cljs.core.next(arglist__9678));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9678)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9678)));
return G__9674__delegate(f, g, h, fs);
});
G__9674.cljs$lang$arity$variadic = G__9674__delegate;
return G__9674;
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
if(cljs.core.seq.call(null,coll))
{{
var G__9681 = cljs.core.next.call(null,coll);
coll = G__9681;
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
if(cljs.core.truth_((function (){var and__3941__auto____9680 = cljs.core.seq.call(null,coll);
if(and__3941__auto____9680)
{return (n > 0);
} else
{return and__3941__auto____9680;
}
})()))
{{
var G__9682 = (n - 1);
var G__9683 = cljs.core.next.call(null,coll);
n = G__9682;
coll = G__9683;
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
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
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
var matches__9685 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9685),s))
{if((cljs.core.count.call(null,matches__9685) === 1))
{return cljs.core.first.call(null,matches__9685);
} else
{return cljs.core.vec.call(null,matches__9685);
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
var matches__9687 = re.exec(s);
if((matches__9687 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9687) === 1))
{return cljs.core.first.call(null,matches__9687);
} else
{return cljs.core.vec.call(null,matches__9687);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9692 = cljs.core.re_find.call(null,re,s);
var match_idx__9693 = s.search(re);
var match_str__9694 = ((cljs.core.coll_QMARK_.call(null,match_data__9692))?cljs.core.first.call(null,match_data__9692):match_data__9692);
var post_match__9695 = cljs.core.subs.call(null,s,(match_idx__9693 + cljs.core.count.call(null,match_str__9694)));
if(cljs.core.truth_(match_data__9692))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9692,re_seq.call(null,re,post_match__9695));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9702__9703 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9704 = cljs.core.nth.call(null,vec__9702__9703,0,null);
var flags__9705 = cljs.core.nth.call(null,vec__9702__9703,1,null);
var pattern__9706 = cljs.core.nth.call(null,vec__9702__9703,2,null);
return (new RegExp(pattern__9706,flags__9705));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9696_SHARP_){
return print_one.call(null,p1__9696_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3941__auto____9716 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto____9716))
{var and__3941__auto____9720 = (function (){var G__9717__9718 = obj;
if(G__9717__9718)
{if((function (){var or__3943__auto____9719 = (G__9717__9718.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____9719)
{return or__3943__auto____9719;
} else
{return G__9717__9718.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9717__9718.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9717__9718);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9717__9718);
}
})();
if(cljs.core.truth_(and__3941__auto____9720))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____9720;
}
} else
{return and__3941__auto____9716;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto____9721 = !((obj == null));
if(and__3941__auto____9721)
{return obj.cljs$lang$type;
} else
{return and__3941__auto____9721;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9722__9723 = obj;
if(G__9722__9723)
{if((function (){var or__3943__auto____9724 = (G__9722__9723.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto____9724)
{return or__3943__auto____9724;
} else
{return G__9722__9723.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9722__9723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9722__9723);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9722__9723);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__9744 = (new goog.string.StringBuffer());
var G__9745__9746 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9745__9746)
{var string__9747 = cljs.core.first.call(null,G__9745__9746);
var G__9745__9748 = G__9745__9746;
while(true){
sb__9744.append(string__9747);
var temp__4092__auto____9749 = cljs.core.next.call(null,G__9745__9748);
if(temp__4092__auto____9749)
{var G__9745__9750 = temp__4092__auto____9749;
{
var G__9763 = cljs.core.first.call(null,G__9745__9750);
var G__9764 = G__9745__9750;
string__9747 = G__9763;
G__9745__9748 = G__9764;
continue;
}
} else
{}
break;
}
} else
{}
var G__9751__9752 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9751__9752)
{var obj__9753 = cljs.core.first.call(null,G__9751__9752);
var G__9751__9754 = G__9751__9752;
while(true){
sb__9744.append(" ");
var G__9755__9756 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9753,opts));
if(G__9755__9756)
{var string__9757 = cljs.core.first.call(null,G__9755__9756);
var G__9755__9758 = G__9755__9756;
while(true){
sb__9744.append(string__9757);
var temp__4092__auto____9759 = cljs.core.next.call(null,G__9755__9758);
if(temp__4092__auto____9759)
{var G__9755__9760 = temp__4092__auto____9759;
{
var G__9765 = cljs.core.first.call(null,G__9755__9760);
var G__9766 = G__9755__9760;
string__9757 = G__9765;
G__9755__9758 = G__9766;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____9761 = cljs.core.next.call(null,G__9751__9754);
if(temp__4092__auto____9761)
{var G__9751__9762 = temp__4092__auto____9761;
{
var G__9767 = cljs.core.first.call(null,G__9751__9762);
var G__9768 = G__9751__9762;
obj__9753 = G__9767;
G__9751__9754 = G__9768;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9744;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9770 = cljs.core.pr_sb.call(null,objs,opts);
sb__9770.append("\n");
return [cljs.core.str(sb__9770)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__9789__9790 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__9789__9790)
{var string__9791 = cljs.core.first.call(null,G__9789__9790);
var G__9789__9792 = G__9789__9790;
while(true){
cljs.core.string_print.call(null,string__9791);
var temp__4092__auto____9793 = cljs.core.next.call(null,G__9789__9792);
if(temp__4092__auto____9793)
{var G__9789__9794 = temp__4092__auto____9793;
{
var G__9807 = cljs.core.first.call(null,G__9789__9794);
var G__9808 = G__9789__9794;
string__9791 = G__9807;
G__9789__9792 = G__9808;
continue;
}
} else
{}
break;
}
} else
{}
var G__9795__9796 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__9795__9796)
{var obj__9797 = cljs.core.first.call(null,G__9795__9796);
var G__9795__9798 = G__9795__9796;
while(true){
cljs.core.string_print.call(null," ");
var G__9799__9800 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9797,opts));
if(G__9799__9800)
{var string__9801 = cljs.core.first.call(null,G__9799__9800);
var G__9799__9802 = G__9799__9800;
while(true){
cljs.core.string_print.call(null,string__9801);
var temp__4092__auto____9803 = cljs.core.next.call(null,G__9799__9802);
if(temp__4092__auto____9803)
{var G__9799__9804 = temp__4092__auto____9803;
{
var G__9809 = cljs.core.first.call(null,G__9799__9804);
var G__9810 = G__9799__9804;
string__9801 = G__9809;
G__9799__9802 = G__9810;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____9805 = cljs.core.next.call(null,G__9795__9798);
if(temp__4092__auto____9805)
{var G__9795__9806 = temp__4092__auto____9805;
{
var G__9811 = cljs.core.first.call(null,G__9795__9806);
var G__9812 = G__9795__9806;
obj__9797 = G__9811;
G__9795__9798 = G__9812;
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
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
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
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9813){
var objs = cljs.core.seq(arglist__9813);;
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
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9814){
var objs = cljs.core.seq(arglist__9814);;
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9815){
var objs = cljs.core.seq(arglist__9815);;
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
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9816){
var objs = cljs.core.seq(arglist__9816);;
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
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9817){
var objs = cljs.core.seq(arglist__9817);;
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
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9818){
var objs = cljs.core.seq(arglist__9818);;
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
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9819){
var objs = cljs.core.seq(arglist__9819);;
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
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9820){
var objs = cljs.core.seq(arglist__9820);;
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
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__9821){
var fmt = cljs.core.first(arglist__9821);
var args = cljs.core.rest(arglist__9821);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9822 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9822,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9823 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9823,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9824 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9824,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto____9825 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____9825))
{var nspc__9826 = temp__4092__auto____9825;
return [cljs.core.str(nspc__9826),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4092__auto____9827 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____9827))
{var nspc__9828 = temp__4092__auto____9827;
return [cljs.core.str(nspc__9828),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9829 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9829,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9831 = (function (n,len){
var ns__9830 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9830) < len))
{{
var G__9833 = [cljs.core.str("0"),cljs.core.str(ns__9830)].join('');
ns__9830 = G__9833;
continue;
}
} else
{return ns__9830;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9831.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9831.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9831.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9831.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9831.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9831.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9832 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9832,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
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
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9834 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9835 = this;
var G__9836__9837 = cljs.core.seq.call(null,this__9835.watches);
if(G__9836__9837)
{var G__9839__9841 = cljs.core.first.call(null,G__9836__9837);
var vec__9840__9842 = G__9839__9841;
var key__9843 = cljs.core.nth.call(null,vec__9840__9842,0,null);
var f__9844 = cljs.core.nth.call(null,vec__9840__9842,1,null);
var G__9836__9845 = G__9836__9837;
var G__9839__9846 = G__9839__9841;
var G__9836__9847 = G__9836__9845;
while(true){
var vec__9848__9849 = G__9839__9846;
var key__9850 = cljs.core.nth.call(null,vec__9848__9849,0,null);
var f__9851 = cljs.core.nth.call(null,vec__9848__9849,1,null);
var G__9836__9852 = G__9836__9847;
f__9851.call(null,key__9850,this$,oldval,newval);
var temp__4092__auto____9853 = cljs.core.next.call(null,G__9836__9852);
if(temp__4092__auto____9853)
{var G__9836__9854 = temp__4092__auto____9853;
{
var G__9861 = cljs.core.first.call(null,G__9836__9854);
var G__9862 = G__9836__9854;
G__9839__9846 = G__9861;
G__9836__9847 = G__9862;
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
var this__9855 = this;
return this$.watches = cljs.core.assoc.call(null,this__9855.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9856 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9856.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9857 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9857.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9858 = this;
return this__9858.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9859 = this;
return this__9859.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9860 = this;
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
var G__9874__delegate = function (x,p__9863){
var map__9869__9870 = p__9863;
var map__9869__9871 = ((cljs.core.seq_QMARK_.call(null,map__9869__9870))?cljs.core.apply.call(null,cljs.core.hash_map,map__9869__9870):map__9869__9870);
var validator__9872 = cljs.core._lookup.call(null,map__9869__9871,"\uFDD0'validator",null);
var meta__9873 = cljs.core._lookup.call(null,map__9869__9871,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9873,validator__9872,null));
};
var G__9874 = function (x,var_args){
var p__9863 = null;
if (goog.isDef(var_args)) {
  p__9863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9874__delegate.call(this, x, p__9863);
};
G__9874.cljs$lang$maxFixedArity = 1;
G__9874.cljs$lang$applyTo = (function (arglist__9875){
var x = cljs.core.first(arglist__9875);
var p__9863 = cljs.core.rest(arglist__9875);
return G__9874__delegate(x, p__9863);
});
G__9874.cljs$lang$arity$variadic = G__9874__delegate;
return G__9874;
})()
;
atom = function(x,var_args){
var p__9863 = var_args;
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
var temp__4092__auto____9879 = a.validator;
if(cljs.core.truth_(temp__4092__auto____9879))
{var validate__9880 = temp__4092__auto____9879;
if(cljs.core.truth_(validate__9880.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__9881 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9881,new_value);
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
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9882__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9882 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9882__delegate.call(this, a, f, x, y, z, more);
};
G__9882.cljs$lang$maxFixedArity = 5;
G__9882.cljs$lang$applyTo = (function (arglist__9883){
var a = cljs.core.first(arglist__9883);
var f = cljs.core.first(cljs.core.next(arglist__9883));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9883)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9883))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9883)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9883)))));
return G__9882__delegate(a, f, x, y, z, more);
});
G__9882.cljs$lang$arity$variadic = G__9882__delegate;
return G__9882;
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
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
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
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9884){
var iref = cljs.core.first(arglist__9884);
var f = cljs.core.first(cljs.core.next(arglist__9884));
var args = cljs.core.rest(cljs.core.next(arglist__9884));
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
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
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
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
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
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9885 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9885.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9886 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9886.state,(function (p__9887){
var map__9888__9889 = p__9887;
var map__9888__9890 = ((cljs.core.seq_QMARK_.call(null,map__9888__9889))?cljs.core.apply.call(null,cljs.core.hash_map,map__9888__9889):map__9888__9889);
var curr_state__9891 = map__9888__9890;
var done__9892 = cljs.core._lookup.call(null,map__9888__9890,"\uFDD0'done",null);
if(cljs.core.truth_(done__9892))
{return curr_state__9891;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9886.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
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
var map__9921__9922 = options;
var map__9921__9923 = ((cljs.core.seq_QMARK_.call(null,map__9921__9922))?cljs.core.apply.call(null,cljs.core.hash_map,map__9921__9922):map__9921__9922);
var keywordize_keys__9924 = cljs.core._lookup.call(null,map__9921__9923,"\uFDD0'keywordize-keys",null);
var keyfn__9925 = (cljs.core.truth_(keywordize_keys__9924)?cljs.core.keyword:cljs.core.str);
var f__9948 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2523__auto____9947 = (function iter__9937(s__9938){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9938__9943 = s__9938;
while(true){
var temp__4092__auto____9944 = cljs.core.seq.call(null,s__9938__9943);
if(temp__4092__auto____9944)
{var xs__4579__auto____9945 = temp__4092__auto____9944;
var k__9946 = cljs.core.first.call(null,xs__4579__auto____9945);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9925.call(null,k__9946),thisfn.call(null,(x[k__9946]))], true),iter__9937.call(null,cljs.core.rest.call(null,s__9938__9943)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2523__auto____9947.call(null,cljs.core.js_keys.call(null,x));
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
return f__9948.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9949){
var x = cljs.core.first(arglist__9949);
var options = cljs.core.rest(arglist__9949);
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
var mem__9954 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9958__delegate = function (args){
var temp__4090__auto____9955 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9954),args,null);
if(cljs.core.truth_(temp__4090__auto____9955))
{var v__9956 = temp__4090__auto____9955;
return v__9956;
} else
{var ret__9957 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9954,cljs.core.assoc,args,ret__9957);
return ret__9957;
}
};
var G__9958 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9958__delegate.call(this, args);
};
G__9958.cljs$lang$maxFixedArity = 0;
G__9958.cljs$lang$applyTo = (function (arglist__9959){
var args = cljs.core.seq(arglist__9959);;
return G__9958__delegate(args);
});
G__9958.cljs$lang$arity$variadic = G__9958__delegate;
return G__9958;
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
var ret__9961 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9961))
{{
var G__9962 = ret__9961;
f = G__9962;
continue;
}
} else
{return ret__9961;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9963__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9963 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9963__delegate.call(this, f, args);
};
G__9963.cljs$lang$maxFixedArity = 1;
G__9963.cljs$lang$applyTo = (function (arglist__9964){
var f = cljs.core.first(arglist__9964);
var args = cljs.core.rest(arglist__9964);
return G__9963__delegate(f, args);
});
G__9963.cljs$lang$arity$variadic = G__9963__delegate;
return G__9963;
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
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
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
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9966 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9966,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9966,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
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
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto____9975 = cljs.core._EQ_.call(null,child,parent);
if(or__3943__auto____9975)
{return or__3943__auto____9975;
} else
{var or__3943__auto____9976 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____9976)
{return or__3943__auto____9976;
} else
{var and__3941__auto____9977 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto____9977)
{var and__3941__auto____9978 = cljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____9978)
{var and__3941__auto____9979 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3941__auto____9979)
{var ret__9980 = true;
var i__9981 = 0;
while(true){
if((function (){var or__3943__auto____9982 = cljs.core.not.call(null,ret__9980);
if(or__3943__auto____9982)
{return or__3943__auto____9982;
} else
{return (i__9981 === cljs.core.count.call(null,parent));
}
})())
{return ret__9980;
} else
{{
var G__9983 = isa_QMARK_.call(null,h,child.call(null,i__9981),parent.call(null,i__9981));
var G__9984 = (i__9981 + 1);
ret__9980 = G__9983;
i__9981 = G__9984;
continue;
}
}
break;
}
} else
{return and__3941__auto____9979;
}
} else
{return and__3941__auto____9978;
}
} else
{return and__3941__auto____9977;
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
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
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
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
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
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
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
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))))].join('')));
}
var tp__9993 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9994 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9995 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9996 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto____9997 = ((cljs.core.contains_QMARK_.call(null,tp__9993.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9995.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9995.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9993,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__9996.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9994,parent,ta__9995),"\uFDD0'descendants":tf__9996.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9995,tag,td__9994)});
})());
if(cljs.core.truth_(or__3943__auto____9997))
{return or__3943__auto____9997;
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
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10002 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10003 = (cljs.core.truth_(parentMap__10002.call(null,tag))?cljs.core.disj.call(null,parentMap__10002.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10004 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__10003))?cljs.core.assoc.call(null,parentMap__10002,tag,childsParents__10003):cljs.core.dissoc.call(null,parentMap__10002,tag));
var deriv_seq__10005 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9985_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9985_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9985_SHARP_),cljs.core.second.call(null,p1__9985_SHARP_)));
}),cljs.core.seq.call(null,newParents__10004)));
if(cljs.core.contains_QMARK_.call(null,parentMap__10002.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9986_SHARP_,p2__9987_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9986_SHARP_,p2__9987_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__10005));
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
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10013 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto____10015 = (cljs.core.truth_((function (){var and__3941__auto____10014 = xprefs__10013;
if(cljs.core.truth_(and__3941__auto____10014))
{return xprefs__10013.call(null,y);
} else
{return and__3941__auto____10014;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto____10015))
{return or__3943__auto____10015;
} else
{var or__3943__auto____10017 = (function (){var ps__10016 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__10016) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__10016),prefer_table)))
{} else
{}
{
var G__10020 = cljs.core.rest.call(null,ps__10016);
ps__10016 = G__10020;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____10017))
{return or__3943__auto____10017;
} else
{var or__3943__auto____10019 = (function (){var ps__10018 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__10018) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__10018),y,prefer_table)))
{} else
{}
{
var G__10021 = cljs.core.rest.call(null,ps__10018);
ps__10018 = G__10021;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____10019))
{return or__3943__auto____10019;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto____10023 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto____10023))
{return or__3943__auto____10023;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10041 = cljs.core.reduce.call(null,(function (be,p__10033){
var vec__10034__10035 = p__10033;
var k__10036 = cljs.core.nth.call(null,vec__10034__10035,0,null);
var ___10037 = cljs.core.nth.call(null,vec__10034__10035,1,null);
var e__10038 = vec__10034__10035;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__10036))
{var be2__10040 = (cljs.core.truth_((function (){var or__3943__auto____10039 = (be == null);
if(or__3943__auto____10039)
{return or__3943__auto____10039;
} else
{return cljs.core.dominates.call(null,k__10036,cljs.core.first.call(null,be),prefer_table);
}
})())?e__10038:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__10040),k__10036,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10036),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__10040)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10040;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__10041))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__10041));
return cljs.core.second.call(null,best_entry__10041);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto____10046 = mf;
if(and__3941__auto____10046)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto____10046;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2424__auto____10047 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10048 = (cljs.core._reset[goog.typeOf(x__2424__auto____10047)]);
if(or__3943__auto____10048)
{return or__3943__auto____10048;
} else
{var or__3943__auto____10049 = (cljs.core._reset["_"]);
if(or__3943__auto____10049)
{return or__3943__auto____10049;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto____10054 = mf;
if(and__3941__auto____10054)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto____10054;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2424__auto____10055 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10056 = (cljs.core._add_method[goog.typeOf(x__2424__auto____10055)]);
if(or__3943__auto____10056)
{return or__3943__auto____10056;
} else
{var or__3943__auto____10057 = (cljs.core._add_method["_"]);
if(or__3943__auto____10057)
{return or__3943__auto____10057;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto____10062 = mf;
if(and__3941__auto____10062)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto____10062;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2424__auto____10063 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10064 = (cljs.core._remove_method[goog.typeOf(x__2424__auto____10063)]);
if(or__3943__auto____10064)
{return or__3943__auto____10064;
} else
{var or__3943__auto____10065 = (cljs.core._remove_method["_"]);
if(or__3943__auto____10065)
{return or__3943__auto____10065;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto____10070 = mf;
if(and__3941__auto____10070)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto____10070;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2424__auto____10071 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10072 = (cljs.core._prefer_method[goog.typeOf(x__2424__auto____10071)]);
if(or__3943__auto____10072)
{return or__3943__auto____10072;
} else
{var or__3943__auto____10073 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____10073)
{return or__3943__auto____10073;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto____10078 = mf;
if(and__3941__auto____10078)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto____10078;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2424__auto____10079 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10080 = (cljs.core._get_method[goog.typeOf(x__2424__auto____10079)]);
if(or__3943__auto____10080)
{return or__3943__auto____10080;
} else
{var or__3943__auto____10081 = (cljs.core._get_method["_"]);
if(or__3943__auto____10081)
{return or__3943__auto____10081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto____10086 = mf;
if(and__3941__auto____10086)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto____10086;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2424__auto____10087 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10088 = (cljs.core._methods[goog.typeOf(x__2424__auto____10087)]);
if(or__3943__auto____10088)
{return or__3943__auto____10088;
} else
{var or__3943__auto____10089 = (cljs.core._methods["_"]);
if(or__3943__auto____10089)
{return or__3943__auto____10089;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto____10094 = mf;
if(and__3941__auto____10094)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto____10094;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2424__auto____10095 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10096 = (cljs.core._prefers[goog.typeOf(x__2424__auto____10095)]);
if(or__3943__auto____10096)
{return or__3943__auto____10096;
} else
{var or__3943__auto____10097 = (cljs.core._prefers["_"]);
if(or__3943__auto____10097)
{return or__3943__auto____10097;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto____10102 = mf;
if(and__3941__auto____10102)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto____10102;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2424__auto____10103 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____10104 = (cljs.core._dispatch[goog.typeOf(x__2424__auto____10103)]);
if(or__3943__auto____10104)
{return or__3943__auto____10104;
} else
{var or__3943__auto____10105 = (cljs.core._dispatch["_"]);
if(or__3943__auto____10105)
{return or__3943__auto____10105;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10108 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__10109 = cljs.core._get_method.call(null,mf,dispatch_val__10108);
if(cljs.core.truth_(target_fn__10109))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10108)].join('')));
}
return cljs.core.apply.call(null,target_fn__10109,args);
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
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10110 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10111 = this;
cljs.core.swap_BANG_.call(null,this__10111.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10111.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10111.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__10111.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10112 = this;
cljs.core.swap_BANG_.call(null,this__10112.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__10112.method_cache,this__10112.method_table,this__10112.cached_hierarchy,this__10112.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10113 = this;
cljs.core.swap_BANG_.call(null,this__10113.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__10113.method_cache,this__10113.method_table,this__10113.cached_hierarchy,this__10113.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10114 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__10114.cached_hierarchy),cljs.core.deref.call(null,this__10114.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__10114.method_cache,this__10114.method_table,this__10114.cached_hierarchy,this__10114.hierarchy);
}
var temp__4090__auto____10115 = cljs.core.deref.call(null,this__10114.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto____10115))
{var target_fn__10116 = temp__4090__auto____10115;
return target_fn__10116;
} else
{var temp__4090__auto____10117 = cljs.core.find_and_cache_best_method.call(null,this__10114.name,dispatch_val,this__10114.hierarchy,this__10114.method_table,this__10114.prefer_table,this__10114.method_cache,this__10114.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____10117))
{var target_fn__10118 = temp__4090__auto____10117;
return target_fn__10118;
} else
{return cljs.core.deref.call(null,this__10114.method_table).call(null,this__10114.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10119 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__10119.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10119.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__10119.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__10119.method_cache,this__10119.method_table,this__10119.cached_hierarchy,this__10119.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10120 = this;
return cljs.core.deref.call(null,this__10120.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10121 = this;
return cljs.core.deref.call(null,this__10121.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10122 = this;
return cljs.core.do_dispatch.call(null,mf,this__10122.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10124__delegate = function (_,args){
var self__10123 = this;
return cljs.core._dispatch.call(null,self__10123,args);
};
var G__10124 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10124__delegate.call(this, _, args);
};
G__10124.cljs$lang$maxFixedArity = 1;
G__10124.cljs$lang$applyTo = (function (arglist__10125){
var _ = cljs.core.first(arglist__10125);
var args = cljs.core.rest(arglist__10125);
return G__10124__delegate(_, args);
});
G__10124.cljs$lang$arity$variadic = G__10124__delegate;
return G__10124;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10126 = this;
return cljs.core._dispatch.call(null,self__10126,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
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
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2370__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10127 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10129,_){
var this__10128 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__10128.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10130 = this;
var and__3941__auto____10131 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3941__auto____10131)
{return (this__10130.uuid === other.uuid);
} else
{return and__3941__auto____10131;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10132 = this;
var this__10133 = this;
return cljs.core.pr_str.call(null,this__10133);
});
cljs.core.UUID;