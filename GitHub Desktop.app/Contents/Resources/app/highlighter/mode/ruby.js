self.webpackChunk(["mode/ruby"],{15:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("ruby",function(a){function b(a){for(var b={},c=0,d=a.length;c<d;++c)b[a[c]]=!0;return b}function c(a,b,c){return c.tokenize.push(a),a(b,c)}function d(a,b){if(a.sol()&&a.match("=begin")&&a.eol())return b.tokenize.push(j),"comment";if(a.eatSpace())return null;var d,f=a.next();if("`"==f||"'"==f||"\""==f)return c(h(f,"string","\""==f||"`"==f),a,b);if("/"==f)return e(a)?c(h(f,"string-2",!0),a,b):"operator";if("%"==f){var g="string",l=!0;a.eat("s")?g="atom":a.eat(/[WQ]/)?g="string":a.eat(/[r]/)?g="string-2":a.eat(/[wxq]/)&&(g="string",l=!1);var m=a.eat(/[^\w\s=]/);return m?(o.propertyIsEnumerable(m)&&(m=o[m]),c(h(m,g,l,!0),a,b)):"operator"}if("#"==f)return a.skipToEnd(),"comment";if("<"==f&&(d=a.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return c(i(d[1]),a,b);if("0"==f)return a.eat("x")?a.eatWhile(/[\da-fA-F]/):a.eat("b")?a.eatWhile(/[01]/):a.eatWhile(/[0-7]/),"number";if(/\d/.test(f))return a.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==f){for(;a.match(/^\\[CM]-/););return a.eat("\\")?a.eatWhile(/\w/):a.next(),"string"}if(":"==f)return a.eat("'")?c(h("'","atom",!1),a,b):a.eat("\"")?c(h("\"","atom",!0),a,b):a.eat(/[\<\>]/)?(a.eat(/[\<\>]/),"atom"):a.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":a.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(a.eatWhile(/[\w$\xa1-\uffff]/),a.eat(/[\?\!\=]/),"atom"):"operator";if("@"==f&&a.match(/^@?[a-zA-Z_\xa1-\uffff]/))return a.eat("@"),a.eatWhile(/[\w\xa1-\uffff]/),"variable-2";if("$"==f)return a.eat(/[a-zA-Z_]/)?a.eatWhile(/[\w]/):a.eat(/\d/)?a.eat(/\d/):a.next(),"variable-3";if(/[a-zA-Z_\xa1-\uffff]/.test(f))return a.eatWhile(/[\w\xa1-\uffff]/),a.eat(/[\?\!]/),a.eat(":")?"atom":"ident";if("|"==f&&(b.varList||"{"==b.lastTok||"do"==b.lastTok))return k="|",null;if(/[\(\)\[\]{}\\;]/.test(f))return k=f,null;if("-"==f&&a.eat(">"))return"arrow";if(/[=+\-\/*:\.^%<>~|]/.test(f)){var n=a.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=f||n||(k="."),"operator"}return null}function e(a){for(var b,c=a.pos,d=0,e=!1,f=!1;null!=(b=a.next());)if(!f){if(-1<"[{(".indexOf(b))d++;else if(-1<"]})".indexOf(b)){if(d--,0>d)break;}else if("/"==b&&0==d){e=!0;break}f="\\"==b}else f=!1;return a.backUp(a.pos-c),e}function f(a){return a||(a=1),function(b,c){if("}"==b.peek()){if(1==a)return c.tokenize.pop(),c.tokenize[c.tokenize.length-1](b,c);c.tokenize[c.tokenize.length-1]=f(a-1)}else"{"==b.peek()&&(c.tokenize[c.tokenize.length-1]=f(a+1));return d(b,c)}}function g(){var a=!1;return function(b,c){return a?(c.tokenize.pop(),c.tokenize[c.tokenize.length-1](b,c)):(a=!0,d(b,c))}}function h(a,b,c,d){return function(e,h){var i,j=!1;for("read-quoted-paused"===h.context.type&&(h.context=h.context.prev,e.eat("}"));null!=(i=e.next());){if(i==a&&(d||!j)){h.tokenize.pop();break}if(c&&"#"==i&&!j)if(e.eat("{")){"}"==a&&(h.context={prev:h.context,type:"read-quoted-paused"}),h.tokenize.push(f());break}else if(/[@\$]/.test(e.peek())){h.tokenize.push(g());break}j=!j&&"\\"==i}return b}}function i(a){return function(b,c){return b.match(a)?c.tokenize.pop():b.skipToEnd(),"string"}}function j(a,b){return a.sol()&&a.match("=end")&&a.eol()&&b.tokenize.pop(),a.skipToEnd(),"comment"}var k,l=b(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]),m=b(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),n=b(["end","until"]),o={"[":"]","{":"}","(":")"};return{startState:function(){return{tokenize:[d],indented:0,context:{type:"top",indented:-a.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(a,b){k=null,a.sol()&&(b.indented=a.indentation());var c,d=b.tokenize[b.tokenize.length-1](a,b),e=k;if("ident"==d){var f=a.current();d="."==b.lastTok?"property":l.propertyIsEnumerable(a.current())?"keyword":/^[A-Z]/.test(f)?"tag":"def"==b.lastTok||"class"==b.lastTok||b.varList?"def":"variable","keyword"==d&&(e=f,m.propertyIsEnumerable(f)?c="indent":n.propertyIsEnumerable(f)?c="dedent":("if"==f||"unless"==f)&&a.column()==a.indentation()?c="indent":"do"==f&&b.context.indented<b.indented&&(c="indent"))}return(k||d&&"comment"!=d)&&(b.lastTok=e),"|"==k&&(b.varList=!b.varList),"indent"==c||/[\(\[\{]/.test(k)?b.context={prev:b.context,type:k||d,indented:b.indented}:("dedent"==c||/[\)\]\}]/.test(k))&&b.context.prev&&(b.context=b.context.prev),a.eol()&&(b.continuedLine="\\"==k||"operator"==d),d},indent:function(b,c){if(b.tokenize[b.tokenize.length-1]!=d)return 0;var e=c&&c.charAt(0),f=b.context,g=f.type==o[e]||"keyword"==f.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(c);return f.indented+(g?0:a.indentUnit)+(b.continuedLine?a.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}}),a.defineMIME("text/x-ruby","ruby")})}});
//# sourceMappingURL=ruby.js.map