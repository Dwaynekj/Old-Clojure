goog.provide('hello_compiler.hello');
goog.require('cljs.core');
hello_compiler.hello.main = (function main(){
return document.write("<p>Hello, ClojureScript compiler!</p>");
});
goog.exportSymbol('hello_compiler.hello.main', hello_compiler.hello.main);
