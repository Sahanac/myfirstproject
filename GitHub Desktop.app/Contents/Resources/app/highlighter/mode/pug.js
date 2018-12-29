self.webpackChunk(["mode/pug"],{34:function(a,b,c){(function(a){a(c(0),c(4),c(2),c(5))})(function(a){"use strict";a.defineMode("pug",function(b){function c(){this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=a.startState(W),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.scriptType="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=Infinity,this.indentToken="",this.innerMode=null,this.innerState=null,this.innerModeForLine=!1}function d(a,b){if(a.sol()&&(b.javaScriptLine=!1,b.javaScriptLineExcludesColon=!1),b.javaScriptLine){if(b.javaScriptLineExcludesColon&&":"===a.peek())return b.javaScriptLine=!1,void(b.javaScriptLineExcludesColon=!1);var c=W.token(a,b.jsState);return a.eol()&&(b.javaScriptLine=!1),c||!0}}function e(a,b){if(b.javaScriptArguments){if(0===b.javaScriptArgumentsDepth&&"("!==a.peek())return void(b.javaScriptArguments=!1);if("("===a.peek()?b.javaScriptArgumentsDepth++:")"===a.peek()&&b.javaScriptArgumentsDepth--,0===b.javaScriptArgumentsDepth)return void(b.javaScriptArguments=!1);var c=W.token(a,b.jsState);return c||!0}}function f(a){if(a.match(/^yield\b/))return"keyword"}function g(a){if(a.match(/^(?:doctype) *([^\n]+)?/))return S}function h(a,b){if(a.match("#{"))return b.isInterpolating=!0,b.interpolationNesting=0,"punctuation"}function i(a,b){if(b.isInterpolating){if("}"!==a.peek())"{"===a.peek()&&b.interpolationNesting++;else if(b.interpolationNesting--,0>b.interpolationNesting)return a.next(),b.isInterpolating=!1,"punctuation";return W.token(a,b.jsState)||!0}}function j(a,b){if(a.match(/^case\b/))return b.javaScriptLine=!0,R}function k(a,b){if(a.match(/^when\b/))return b.javaScriptLine=!0,b.javaScriptLineExcludesColon=!0,R}function l(a){if(a.match(/^default\b/))return R}function m(a,b){if(a.match(/^extends?\b/))return b.restOfLine="string",R}function n(a,b){if(a.match(/^append\b/))return b.restOfLine="variable",R}function o(a,b){if(a.match(/^prepend\b/))return b.restOfLine="variable",R}function p(a,b){if(a.match(/^block\b *(?:(prepend|append)\b)?/))return b.restOfLine="variable",R}function q(a,b){if(a.match(/^include\b/))return b.restOfLine="string",R}function r(a,b){if(a.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&a.match("include"))return b.isIncludeFiltered=!0,R}function s(a,b){if(b.isIncludeFiltered){var c=B(a,b);return b.isIncludeFiltered=!1,b.restOfLine="string",c}}function t(a,b){if(a.match(/^mixin\b/))return b.javaScriptLine=!0,R}function u(a,b){return a.match(/^\+([-\w]+)/)?(a.match(/^\( *[-\w]+ *=/,!1)||(b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0),"variable"):a.match(/^\+#{/,!1)?(a.next(),b.mixinCallAfter=!0,h(a,b)):void 0}function v(a,b){if(b.mixinCallAfter)return b.mixinCallAfter=!1,a.match(/^\( *[-\w]+ *=/,!1)||(b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0),!0}function w(a,b){if(a.match(/^(if|unless|else if|else)\b/))return b.javaScriptLine=!0,R}function x(a,b){if(a.match(/^(- *)?(each|for)\b/))return b.isEach=!0,R}function y(a,b){if(b.isEach){if(a.match(/^ in\b/))return b.javaScriptLine=!0,b.isEach=!1,R;if(a.sol()||a.eol())b.isEach=!1;else if(a.next()){for(;!a.match(/^ in\b/,!1)&&a.next(););return"variable"}}}function z(a,b){if(a.match(/^while\b/))return b.javaScriptLine=!0,R}function A(a,b){var c;if(c=a.match(/^(\w(?:[-:\w]*\w)?)\/?/))return b.lastTag=c[1].toLowerCase(),"script"===b.lastTag&&(b.scriptType="application/javascript"),"tag"}function B(c,d){if(c.match(/^:([\w\-]+)/)){var e;return b&&b.innerModes&&(e=b.innerModes(c.current().substring(1))),e||(e=c.current().substring(1)),"string"==typeof e&&(e=a.getMode(b,e)),O(c,d,e),"atom"}}function C(a,b){if(a.match(/^(!?=|-)/))return b.javaScriptLine=!0,"punctuation"}function D(a){if(a.match(/^#([\w-]+)/))return T}function E(a){if(a.match(/^\.([\w-]+)/))return U}function F(a,b){if("("==a.peek())return a.next(),b.isAttrs=!0,b.attrsNest=[],b.inAttributeName=!0,b.attrValue="",b.attributeIsType=!1,"punctuation"}function G(b,c){if(c.isAttrs){if(V[b.peek()]&&c.attrsNest.push(V[b.peek()]),c.attrsNest[c.attrsNest.length-1]===b.peek())c.attrsNest.pop();else if(b.eat(")"))return c.isAttrs=!1,"punctuation";if(c.inAttributeName&&b.match(/^[^=,\)!]+/))return("="===b.peek()||"!"===b.peek())&&(c.inAttributeName=!1,c.jsState=a.startState(W),c.attributeIsType="script"===c.lastTag&&"type"===b.current().trim().toLowerCase()),"attribute";var d=W.token(b,c.jsState);if(c.attributeIsType&&"string"===d&&(c.scriptType=b.current().toString()),0===c.attrsNest.length&&("string"===d||"variable"===d||"keyword"===d))try{return Function("","var x "+c.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),c.inAttributeName=!0,c.attrValue="",b.backUp(b.current().length),G(b,c)}catch(a){}return c.attrValue+=b.current(),d||!0}}function H(a,b){if(a.match(/^&attributes\b/))return b.javaScriptArguments=!0,b.javaScriptArgumentsDepth=0,"keyword"}function I(a){if(a.sol()&&a.eatSpace())return"indent"}function J(a,b){if(a.match(/^ *\/\/(-)?([^\n]*)/))return b.indentOf=a.indentation(),b.indentToken="comment","comment"}function K(a){if(a.match(/^: */))return"colon"}function L(a,b){return a.match(/^(?:\| ?| )([^\n]+)/)?"string":a.match(/^(<[^\n]*)/,!1)?(O(a,b,"htmlmixed"),b.innerModeForLine=!0,P(a,b,!0)):void 0}function M(a,b){if(a.eat(".")){var c=null;return"script"===b.lastTag&&-1!=b.scriptType.toLowerCase().indexOf("javascript")?c=b.scriptType.toLowerCase().replace(/"|'/g,""):"style"===b.lastTag&&(c="css"),O(a,b,c),"dot"}}function N(a){return a.next(),null}function O(c,d,e){e=a.mimeModes[e]||e,e=b.innerModes?b.innerModes(e)||e:e,e=a.mimeModes[e]||e,e=a.getMode(b,e),d.indentOf=c.indentation(),e&&"null"!==e.name?d.innerMode=e:d.indentToken="string"}function P(b,c,d){return b.indentation()>c.indentOf||c.innerModeForLine&&!b.sol()||d?c.innerMode?(c.innerState||(c.innerState=c.innerMode.startState?a.startState(c.innerMode,b.indentation()):{}),b.hideFirstChars(c.indentOf+2,function(){return c.innerMode.token(b,c.innerState)||!0})):(b.skipToEnd(),c.indentToken):void(b.sol()&&(c.indentOf=Infinity,c.indentToken=null,c.innerMode=null,c.innerState=null))}function Q(a,b){if(a.sol()&&(b.restOfLine=""),b.restOfLine){a.skipToEnd();var c=b.restOfLine;return b.restOfLine="",c}}var R="keyword",S="meta",T="builtin",U="qualifier",V={"{":"}","(":")","[":"]"},W=a.getMode(b,"javascript");return c.prototype.copy=function(){var b=new c;return b.javaScriptLine=this.javaScriptLine,b.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,b.javaScriptArguments=this.javaScriptArguments,b.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,b.isInterpolating=this.isInterpolating,b.interpolationNesting=this.interpolationNesting,b.jsState=a.copyState(W,this.jsState),b.innerMode=this.innerMode,this.innerMode&&this.innerState&&(b.innerState=a.copyState(this.innerMode,this.innerState)),b.restOfLine=this.restOfLine,b.isIncludeFiltered=this.isIncludeFiltered,b.isEach=this.isEach,b.lastTag=this.lastTag,b.scriptType=this.scriptType,b.isAttrs=this.isAttrs,b.attrsNest=this.attrsNest.slice(),b.inAttributeName=this.inAttributeName,b.attributeIsType=this.attributeIsType,b.attrValue=this.attrValue,b.indentOf=this.indentOf,b.indentToken=this.indentToken,b.innerModeForLine=this.innerModeForLine,b},{startState:function(){return new c},copyState:function(a){return a.copy()},token:function(a,b){var c=P(a,b)||Q(a,b)||i(a,b)||s(a,b)||y(a,b)||G(a,b)||d(a,b)||e(a,b)||v(a,b)||f(a,b)||g(a,b)||h(a,b)||j(a,b)||k(a,b)||l(a,b)||m(a,b)||n(a,b)||o(a,b)||p(a,b)||q(a,b)||r(a,b)||t(a,b)||u(a,b)||w(a,b)||x(a,b)||z(a,b)||A(a,b)||B(a,b)||C(a,b)||D(a,b)||E(a,b)||F(a,b)||H(a,b)||I(a,b)||L(a,b)||J(a,b)||K(a,b)||M(a,b)||N(a,b);return!0===c?null:c}}},"javascript","css","htmlmixed"),a.defineMIME("text/x-pug","pug"),a.defineMIME("text/x-jade","pug")})}});
//# sourceMappingURL=pug.js.map