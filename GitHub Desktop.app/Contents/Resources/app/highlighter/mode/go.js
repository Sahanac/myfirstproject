self.webpackChunk(["mode/go"],{19:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("go",function(b){function c(a,b){var c=a.next();if("\""==c||"'"==c||"`"==c)return b.tokenize=d(c),b.tokenize(a,b);if(/[\d\.]/.test(c))return"."==c?a.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==c?a.match(/^[xX][0-9a-fA-F]+/)||a.match(/^0[0-7]+/):a.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(c))return i=c,null;if("/"==c){if(a.eat("*"))return b.tokenize=e,e(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(m.test(c))return a.eatWhile(m),"operator";a.eatWhile(/[\w\$_\xa1-\uffff]/);var f=a.current();return k.propertyIsEnumerable(f)?(("case"==f||"default"==f)&&(i="case"),"keyword"):l.propertyIsEnumerable(f)?"atom":"variable"}function d(a){return function(b,d){for(var e,f=!1,g=!1;null!=(e=b.next());){if(e==a&&!f){g=!0;break}f=!f&&"`"!=a&&"\\"==e}return(g||!(f||"`"==a))&&(d.tokenize=c),"string"}}function e(a,b){for(var d,e=!1;d=a.next();){if("/"==d&&e){b.tokenize=c;break}e="*"==d}return"comment"}function f(a,b,c,d,e){this.indented=a,this.column=b,this.type=c,this.align=d,this.prev=e}function g(a,b,c){return a.context=new f(a.indented,b,c,null,a.context)}function h(a){if(a.context.prev){var b=a.context.type;return(")"==b||"]"==b||"}"==b)&&(a.indented=a.context.indented),a.context=a.context.prev}}var i,j=b.indentUnit,k={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0},l={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},m=/[+\-*&^%:=<>!|\/]/;return{startState:function(a){return{tokenize:null,context:new f((a||0)-j,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var d=b.context;if(a.sol()&&(null==d.align&&(d.align=!1),b.indented=a.indentation(),b.startOfLine=!0,"case"==d.type&&(d.type="}")),a.eatSpace())return null;i=null;var e=(b.tokenize||c)(a,b);return"comment"==e?e:(null==d.align&&(d.align=!0),"{"==i?g(b,a.column(),"}"):"["==i?g(b,a.column(),"]"):"("==i?g(b,a.column(),")"):"case"==i?d.type="case":"}"==i&&"}"==d.type?h(b):i==d.type&&h(b),b.startOfLine=!1,e)},indent:function(b,d){if(b.tokenize!=c&&null!=b.tokenize)return a.Pass;var e=b.context,f=d&&d.charAt(0);if("case"==e.type&&/^(?:case|default)\b/.test(d))return b.context.type="}",e.indented;var g=f==e.type;return e.align?e.column+(g?0:1):e.indented+(g?0:j)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),a.defineMIME("text/x-go","go")})}});
//# sourceMappingURL=go.js.map