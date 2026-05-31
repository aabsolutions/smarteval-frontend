import{a as it,b as Bs,c as As,d as Is,e as Rs,f as Ni,g as Ot,h as j,i as Ls,j as Fi,k as Ns,l as Oe}from"./chunk-A6TDIOLW.js";import{k as Xs,l as Kt,m as Gi,o as Js,q as $i,s as Ks,x as er}from"./chunk-LX6PL6U3.js";import{a as Os,b as Dt}from"./chunk-FEL3CPLE.js";import{a as Wi,b as ji,c as zn}from"./chunk-GCV6DLGE.js";import{a as Zs,b as Qs}from"./chunk-KV45QWXJ.js";import{a as Bt}from"./chunk-BLIZIUJW.js";import"./chunk-DZHZUGCV.js";import"./chunk-67HI2W2E.js";import{c as Ys,d as Hs,f as Vs,h as zs}from"./chunk-CJPLD6EO.js";import{a as tt,b as De}from"./chunk-QUYJEXRV.js";import{a as qs}from"./chunk-WJC637KS.js";import{a as Rt,b as Lt,c as Nt,d as at}from"./chunk-GVRTIRAE.js";import{a as Ps}from"./chunk-JKTCNKDX.js";import"./chunk-TSZRK7QO.js";import{a as At}from"./chunk-STS6XHDB.js";import{a as Ws}from"./chunk-RN4SPH57.js";import{a as Ei,d as Fs}from"./chunk-Z44H2R45.js";import{c as $s}from"./chunk-S3AQXLNS.js";import{B as Hi,C as Vi,G as zi,H as js,J as It,K as Ui,M as nt,e as Pi,g as Yi,s as Es,v as Jt}from"./chunk-DHBA5GRK.js";import{b as Gs}from"./chunk-IBU6S2M4.js";import{e as Us}from"./chunk-6262ROMB.js";import{a as Ms,b as Ii,d as Tt,e as et,f as Ri,g as Ss,h as Cs,i as Ts}from"./chunk-JBFCRAWF.js";import{A as ks,D as Ds,E as Li,F as Te,c as ws,f as ys,g as Ce,i as Oi,k as Bi,q as Ct,r as xs,t as Ai,u as _s,w as Hn,x as Vn,y as Ke,z as bs}from"./chunk-RBET3RAZ.js";import{$ as ve,$a as hs,Aa as kt,Bc as P,Ca as we,Cc as ps,D as Ka,Fc as We,G as es,Gc as je,Ha as cs,Hb as he,Ia as qt,Ib as $,Jb as q,Lb as Ve,Mb as ze,Nb as Ue,Ob as w,P as ts,Pb as g,Pc as Di,Qb as m,R as Rn,Rb as k,S as Ln,V as is,Vb as En,Vc as fs,Wb as Pn,Wc as Xt,X as ns,Ya as ye,Yb as be,Z as bi,Zb as ms,Zc as G,_ as z,_a as ds,_c as vs,ab as v,ac as M,ba as K,c as Qa,ca as Xe,cc as D,da as f,dc as Zt,e as Bn,ea as as,eb as Mi,ec as Qt,fa as Nn,fc as Yn,gc as Ci,hc as Mt,ib as Si,ic as St,ja as ce,jb as xe,ka as de,kb as us,la as ss,lb as gs,m as An,mc as ke,n as Xa,na as rs,nc as ue,oa as X,oc as ct,pc as Me,q as Qe,qb as L,qc as C,r as Ja,ra as U,rb as _e,rc as ae,sa as bt,sb as Fn,sc as Se,va as os,vb as ne,wa as ls,wb as lt,xc as Ti,y as In,za as ki,zc as Je}from"./chunk-ES3NKZF7.js";import{a as le,b as _t,c as qa,e as Rd,f as Za}from"./chunk-TSRGIXR5.js";var Zn=Rd((qn,Ft)=>{"use strict";(function(l,d){typeof qn=="object"&&typeof Ft<"u"?Ft.exports=d():typeof define=="function"&&define.amd?define(d):l.moment=d()})(qn,function(){"use strict";var l;function d(){return l.apply(null,arguments)}function i(e){l=e}function r(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function o(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(h(e,t))return!1;return!0}function Y(e){return e===void 0}function Ae(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Et(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Jn(e,t){var n=[],a,s=e.length;for(a=0;a<s;++a)n.push(t(e[a],a));return n}function Ge(e,t){for(var n in t)h(t,n)&&(e[n]=t[n]);return h(t,"toString")&&(e.toString=t.toString),h(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ge(e,t,n,a){return Sa(e,t,n,a,!0).utc()}function Rr(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=Rr()),e._pf}var Xi;Array.prototype.some?Xi=Array.prototype.some:Xi=function(e){var t=Object(this),n=t.length>>>0,a;for(a=0;a<n;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function Ji(e){var t=null,n=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=T(e),n=Xi.call(t.parsedDateParts,function(s){return s!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function ti(e){var t=ge(NaN);return e!=null?Ge(T(t),e):T(t).userInvalidated=!0,t}var Kn=d.momentProperties=[],Ki=!1;function en(e,t){var n,a,s,c=Kn.length;if(Y(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Y(t._i)||(e._i=t._i),Y(t._f)||(e._f=t._f),Y(t._l)||(e._l=t._l),Y(t._strict)||(e._strict=t._strict),Y(t._tzm)||(e._tzm=t._tzm),Y(t._isUTC)||(e._isUTC=t._isUTC),Y(t._offset)||(e._offset=t._offset),Y(t._pf)||(e._pf=T(t)),Y(t._locale)||(e._locale=t._locale),c>0)for(n=0;n<c;n++)a=Kn[n],s=t[a],Y(s)||(e[a]=s);return e}function Pt(e){en(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ki===!1&&(Ki=!0,d.updateOffset(this),Ki=!1)}function se(e){return e instanceof Pt||e!=null&&e._isAMomentObject!=null}function ea(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ee(e,t){var n=!0;return Ge(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),n){var a=[],s,c,u,y=arguments.length;for(c=0;c<y;c++){if(s="",typeof arguments[c]=="object"){s+=`
[`+c+"] ";for(u in arguments[0])h(arguments[0],u)&&(s+=u+": "+arguments[0][u]+", ");s=s.slice(0,-2)}else s=arguments[c];a.push(s)}ea(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var ta={};function ia(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),ta[e]||(ea(t),ta[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function me(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Lr(e){var t,n;for(n in e)h(e,n)&&(t=e[n],me(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function tn(e,t){var n=Ge({},e),a;for(a in t)h(t,a)&&(o(e[a])&&o(t[a])?(n[a]={},Ge(n[a],e[a]),Ge(n[a],t[a])):t[a]!=null?n[a]=t[a]:delete n[a]);for(a in e)h(e,a)&&!h(t,a)&&o(e[a])&&(n[a]=Ge({},n[a]));return n}function nn(e){e!=null&&this.set(e)}var an;Object.keys?an=Object.keys:an=function(e){var t,n=[];for(t in e)h(e,t)&&n.push(t);return n};var Nr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Fr(e,t,n){var a=this._calendar[e]||this._calendar.sameElse;return me(a)?a.call(t,n):a}function pe(e,t,n){var a=""+Math.abs(e),s=t-a.length,c=e>=0;return(c?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+a}var sn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ii=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rn={},ut={};function b(e,t,n,a){var s=a;typeof a=="string"&&(s=function(){return this[a]()}),e&&(ut[e]=s),t&&(ut[t[0]]=function(){return pe(s.apply(this,arguments),t[1],t[2])}),n&&(ut[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Er(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Pr(e){var t=e.match(sn),n,a;for(n=0,a=t.length;n<a;n++)ut[t[n]]?t[n]=ut[t[n]]:t[n]=Er(t[n]);return function(s){var c="",u;for(u=0;u<a;u++)c+=me(t[u])?t[u].call(s,e):t[u];return c}}function ni(e,t){return e.isValid()?(t=na(t,e.localeData()),rn[t]=rn[t]||Pr(t),rn[t](e)):e.localeData().invalidDate()}function na(e,t){var n=5;function a(s){return t.longDateFormat(s)||s}for(ii.lastIndex=0;n>=0&&ii.test(e);)e=e.replace(ii,a),ii.lastIndex=0,n-=1;return e}var Yr={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Hr(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(sn).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Vr="Invalid date";function zr(){return this._invalidDate}var Ur="%d",Wr=/\d{1,2}/;function jr(e){return this._ordinal.replace("%d",e)}var Gr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $r(e,t,n,a){var s=this._relativeTime[n];return me(s)?s(e,t,n,a):s.replace(/%d/i,e)}function qr(e,t){var n=this._relativeTime[e>0?"future":"past"];return me(n)?n(t):n.replace(/%s/i,t)}var aa={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function te(e){return typeof e=="string"?aa[e]||aa[e.toLowerCase()]:void 0}function on(e){var t={},n,a;for(a in e)h(e,a)&&(n=te(a),n&&(t[n]=e[a]));return t}var Zr={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Qr(e){var t=[],n;for(n in e)h(e,n)&&t.push({unit:n,priority:Zr[n]});return t.sort(function(a,s){return a.priority-s.priority}),t}var sa=/\d/,J=/\d\d/,ra=/\d{3}/,ln=/\d{4}/,ai=/[+-]?\d{6}/,N=/\d\d?/,oa=/\d\d\d\d?/,la=/\d\d\d\d\d\d?/,si=/\d{1,3}/,cn=/\d{1,4}/,ri=/[+-]?\d{1,6}/,gt=/\d+/,oi=/[+-]?\d+/,Xr=/Z|[+-]\d\d:?\d\d/gi,li=/Z|[+-]\d\d(?::?\d\d)?/gi,Jr=/[+-]?\d+(\.\d{1,3})?/,Yt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,mt=/^[1-9]\d?/,dn=/^([1-9]\d|\d)/,ci;ci={};function x(e,t,n){ci[e]=me(t)?t:function(a,s){return a&&n?n:t}}function Kr(e,t){return h(ci,e)?ci[e](t._strict,t._locale):new RegExp(eo(e))}function eo(e){return Ie(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,a,s,c){return n||a||s||c}))}function Ie(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ie(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function O(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=ie(t)),n}var hn={};function R(e,t){var n,a=t,s;for(typeof e=="string"&&(e=[e]),Ae(t)&&(a=function(c,u){u[t]=O(c)}),s=e.length,n=0;n<s;n++)hn[e[n]]=a}function Ht(e,t){R(e,function(n,a,s,c){s._w=s._w||{},t(n,s._w,s,c)})}function to(e,t,n){t!=null&&h(hn,e)&&hn[e](t,n._a,n,e)}function di(e){return e%4===0&&e%100!==0||e%400===0}var Z=0,Re=1,fe=2,W=3,re=4,Le=5,st=6,io=7,no=8;b("Y",0,0,function(){var e=this.year();return e<=9999?pe(e,4):"+"+e}),b(0,["YY",2],0,function(){return this.year()%100}),b(0,["YYYY",4],0,"year"),b(0,["YYYYY",5],0,"year"),b(0,["YYYYYY",6,!0],0,"year"),x("Y",oi),x("YY",N,J),x("YYYY",cn,ln),x("YYYYY",ri,ai),x("YYYYYY",ri,ai),R(["YYYYY","YYYYYY"],Z),R("YYYY",function(e,t){t[Z]=e.length===2?d.parseTwoDigitYear(e):O(e)}),R("YY",function(e,t){t[Z]=d.parseTwoDigitYear(e)}),R("Y",function(e,t){t[Z]=parseInt(e,10)});function Vt(e){return di(e)?366:365}d.parseTwoDigitYear=function(e){return O(e)+(O(e)>68?1900:2e3)};var ca=pt("FullYear",!0);function ao(){return di(this.year())}function pt(e,t){return function(n){return n!=null?(da(this,e,n),d.updateOffset(this,t),this):zt(this,e)}}function zt(e,t){if(!e.isValid())return NaN;var n=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return a?n.getUTCSeconds():n.getSeconds();case"Minutes":return a?n.getUTCMinutes():n.getMinutes();case"Hours":return a?n.getUTCHours():n.getHours();case"Date":return a?n.getUTCDate():n.getDate();case"Day":return a?n.getUTCDay():n.getDay();case"Month":return a?n.getUTCMonth():n.getMonth();case"FullYear":return a?n.getUTCFullYear():n.getFullYear();default:return NaN}}function da(e,t,n){var a,s,c,u,y;if(!(!e.isValid()||isNaN(n))){switch(a=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?a.setUTCMilliseconds(n):a.setMilliseconds(n));case"Seconds":return void(s?a.setUTCSeconds(n):a.setSeconds(n));case"Minutes":return void(s?a.setUTCMinutes(n):a.setMinutes(n));case"Hours":return void(s?a.setUTCHours(n):a.setHours(n));case"Date":return void(s?a.setUTCDate(n):a.setDate(n));case"FullYear":break;default:return}c=n,u=e.month(),y=e.date(),y=y===29&&u===1&&!di(c)?28:y,s?a.setUTCFullYear(c,u,y):a.setFullYear(c,u,y)}}function so(e){return e=te(e),me(this[e])?this[e]():this}function ro(e,t){if(typeof e=="object"){e=on(e);var n=Qr(e),a,s=n.length;for(a=0;a<s;a++)this[n[a].unit](e[n[a].unit])}else if(e=te(e),me(this[e]))return this[e](t);return this}function oo(e,t){return(e%t+t)%t}var V;Array.prototype.indexOf?V=Array.prototype.indexOf:V=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function un(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=oo(t,12);return e+=(t-n)/12,n===1?di(e)?29:28:31-n%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1}),b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),b("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("M",N,mt),x("MM",N,J),x("MMM",function(e,t){return t.monthsShortRegex(e)}),x("MMMM",function(e,t){return t.monthsRegex(e)}),R(["M","MM"],function(e,t){t[Re]=O(e)-1}),R(["MMM","MMMM"],function(e,t,n,a){var s=n._locale.monthsParse(e,a,n._strict);s!=null?t[Re]=s:T(n).invalidMonth=e});var lo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ha="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ua=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,co=Yt,ho=Yt;function uo(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ua).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function go(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ua.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function mo(e,t,n){var a,s,c,u=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)c=ge([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(c,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(c,"").toLocaleLowerCase();return n?t==="MMM"?(s=V.call(this._shortMonthsParse,u),s!==-1?s:null):(s=V.call(this._longMonthsParse,u),s!==-1?s:null):t==="MMM"?(s=V.call(this._shortMonthsParse,u),s!==-1?s:(s=V.call(this._longMonthsParse,u),s!==-1?s:null)):(s=V.call(this._longMonthsParse,u),s!==-1?s:(s=V.call(this._shortMonthsParse,u),s!==-1?s:null))}function po(e,t,n){var a,s,c;if(this._monthsParseExact)return mo.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=ge([2e3,a]),n&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!n&&!this._monthsParse[a]&&(c="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[a]=new RegExp(c.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(n&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!n&&this._monthsParse[a].test(e))return a}}function ga(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=O(t);else if(t=e.localeData().monthsParse(t),!Ae(t))return e}var n=t,a=e.date();return a=a<29?a:Math.min(a,un(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,a):e._d.setMonth(n,a),e}function ma(e){return e!=null?(ga(this,e),d.updateOffset(this,!0),this):zt(this,"Month")}function fo(){return un(this.year(),this.month())}function vo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||pa.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=co),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function wo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||pa.call(this),e?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=ho),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pa(){function e(S,B){return B.length-S.length}var t=[],n=[],a=[],s,c,u,y;for(s=0;s<12;s++)c=ge([2e3,s]),u=Ie(this.monthsShort(c,"")),y=Ie(this.months(c,"")),t.push(u),n.push(y),a.push(y),a.push(u);t.sort(e),n.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function yo(e,t,n,a,s,c,u){var y;return e<100&&e>=0?(y=new Date(e+400,t,n,a,s,c,u),isFinite(y.getFullYear())&&y.setFullYear(e)):y=new Date(e,t,n,a,s,c,u),y}function Ut(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function hi(e,t,n){var a=7+t-n,s=(7+Ut(e,0,a).getUTCDay()-t)%7;return-s+a-1}function fa(e,t,n,a,s){var c=(7+n-a)%7,u=hi(e,a,s),y=1+7*(t-1)+c+u,S,B;return y<=0?(S=e-1,B=Vt(S)+y):y>Vt(e)?(S=e+1,B=y-Vt(e)):(S=e,B=y),{year:S,dayOfYear:B}}function Wt(e,t,n){var a=hi(e.year(),t,n),s=Math.floor((e.dayOfYear()-a-1)/7)+1,c,u;return s<1?(u=e.year()-1,c=s+Ne(u,t,n)):s>Ne(e.year(),t,n)?(c=s-Ne(e.year(),t,n),u=e.year()+1):(u=e.year(),c=s),{week:c,year:u}}function Ne(e,t,n){var a=hi(e,t,n),s=hi(e+1,t,n);return(Vt(e)-a+s)/7}b("w",["ww",2],"wo","week"),b("W",["WW",2],"Wo","isoWeek"),x("w",N,mt),x("ww",N,J),x("W",N,mt),x("WW",N,J),Ht(["w","ww","W","WW"],function(e,t,n,a){t[a.substr(0,1)]=O(e)});function xo(e){return Wt(e,this._week.dow,this._week.doy).week}var _o={dow:0,doy:6};function bo(){return this._week.dow}function ko(){return this._week.doy}function Mo(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function So(e){var t=Wt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day"),b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),b("e",0,0,"weekday"),b("E",0,0,"isoWeekday"),x("d",N),x("e",N),x("E",N),x("dd",function(e,t){return t.weekdaysMinRegex(e)}),x("ddd",function(e,t){return t.weekdaysShortRegex(e)}),x("dddd",function(e,t){return t.weekdaysRegex(e)}),Ht(["dd","ddd","dddd"],function(e,t,n,a){var s=n._locale.weekdaysParse(e,a,n._strict);s!=null?t.d=s:T(n).invalidWeekday=e}),Ht(["d","e","E"],function(e,t,n,a){t[a]=O(e)});function Co(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function To(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function gn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Do="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),va="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Oo="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Bo=Yt,Ao=Yt,Io=Yt;function Ro(e,t){var n=r(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?gn(n,this._week.dow):e?n[e.day()]:n}function Lo(e){return e===!0?gn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function No(e){return e===!0?gn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Fo(e,t,n){var a,s,c,u=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)c=ge([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(c,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(c,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(c,"").toLocaleLowerCase();return n?t==="dddd"?(s=V.call(this._weekdaysParse,u),s!==-1?s:null):t==="ddd"?(s=V.call(this._shortWeekdaysParse,u),s!==-1?s:null):(s=V.call(this._minWeekdaysParse,u),s!==-1?s:null):t==="dddd"?(s=V.call(this._weekdaysParse,u),s!==-1||(s=V.call(this._shortWeekdaysParse,u),s!==-1)?s:(s=V.call(this._minWeekdaysParse,u),s!==-1?s:null)):t==="ddd"?(s=V.call(this._shortWeekdaysParse,u),s!==-1||(s=V.call(this._weekdaysParse,u),s!==-1)?s:(s=V.call(this._minWeekdaysParse,u),s!==-1?s:null)):(s=V.call(this._minWeekdaysParse,u),s!==-1||(s=V.call(this._weekdaysParse,u),s!==-1)?s:(s=V.call(this._shortWeekdaysParse,u),s!==-1?s:null))}function Eo(e,t,n){var a,s,c;if(this._weekdaysParseExact)return Fo.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(s=ge([2e3,1]).day(a),n&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(c="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[a]=new RegExp(c.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(n&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(n&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!n&&this._weekdaysParse[a].test(e))return a}}function Po(e){if(!this.isValid())return e!=null?this:NaN;var t=zt(this,"Day");return e!=null?(e=Co(e,this.localeData()),this.add(e-t,"d")):t}function Yo(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ho(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=To(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Vo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=Bo),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function zo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ao),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Uo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||mn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Io),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function mn(){function e(Q,He){return He.length-Q.length}var t=[],n=[],a=[],s=[],c,u,y,S,B;for(c=0;c<7;c++)u=ge([2e3,1]).day(c),y=Ie(this.weekdaysMin(u,"")),S=Ie(this.weekdaysShort(u,"")),B=Ie(this.weekdays(u,"")),t.push(y),n.push(S),a.push(B),s.push(y),s.push(S),s.push(B);t.sort(e),n.sort(e),a.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function pn(){return this.hours()%12||12}function Wo(){return this.hours()||24}b("H",["HH",2],0,"hour"),b("h",["hh",2],0,pn),b("k",["kk",2],0,Wo),b("hmm",0,0,function(){return""+pn.apply(this)+pe(this.minutes(),2)}),b("hmmss",0,0,function(){return""+pn.apply(this)+pe(this.minutes(),2)+pe(this.seconds(),2)}),b("Hmm",0,0,function(){return""+this.hours()+pe(this.minutes(),2)}),b("Hmmss",0,0,function(){return""+this.hours()+pe(this.minutes(),2)+pe(this.seconds(),2)});function wa(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}wa("a",!0),wa("A",!1);function ya(e,t){return t._meridiemParse}x("a",ya),x("A",ya),x("H",N,dn),x("h",N,mt),x("k",N,mt),x("HH",N,J),x("hh",N,J),x("kk",N,J),x("hmm",oa),x("hmmss",la),x("Hmm",oa),x("Hmmss",la),R(["H","HH"],W),R(["k","kk"],function(e,t,n){var a=O(e);t[W]=a===24?0:a}),R(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),R(["h","hh"],function(e,t,n){t[W]=O(e),T(n).bigHour=!0}),R("hmm",function(e,t,n){var a=e.length-2;t[W]=O(e.substr(0,a)),t[re]=O(e.substr(a)),T(n).bigHour=!0}),R("hmmss",function(e,t,n){var a=e.length-4,s=e.length-2;t[W]=O(e.substr(0,a)),t[re]=O(e.substr(a,2)),t[Le]=O(e.substr(s)),T(n).bigHour=!0}),R("Hmm",function(e,t,n){var a=e.length-2;t[W]=O(e.substr(0,a)),t[re]=O(e.substr(a))}),R("Hmmss",function(e,t,n){var a=e.length-4,s=e.length-2;t[W]=O(e.substr(0,a)),t[re]=O(e.substr(a,2)),t[Le]=O(e.substr(s))});function jo(e){return(e+"").toLowerCase().charAt(0)==="p"}var Go=/[ap]\.?m?\.?/i,$o=pt("Hours",!0);function qo(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var xa={calendar:Nr,longDateFormat:Yr,invalidDate:Vr,ordinal:Ur,dayOfMonthOrdinalParse:Wr,relativeTime:Gr,months:lo,monthsShort:ha,week:_o,weekdays:Do,weekdaysMin:Oo,weekdaysShort:va,meridiemParse:Go},E={},jt={},Gt;function Zo(e,t){var n,a=Math.min(e.length,t.length);for(n=0;n<a;n+=1)if(e[n]!==t[n])return n;return a}function _a(e){return e&&e.toLowerCase().replace("_","-")}function Qo(e){for(var t=0,n,a,s,c;t<e.length;){for(c=_a(e[t]).split("-"),n=c.length,a=_a(e[t+1]),a=a?a.split("-"):null;n>0;){if(s=ui(c.slice(0,n).join("-")),s)return s;if(a&&a.length>=n&&Zo(c,a)>=n-1)break;n--}t++}return Gt}function Xo(e){return!!(e&&e.match("^[^/\\\\]*$"))}function ui(e){var t=null,n;if(E[e]===void 0&&typeof Ft<"u"&&Ft&&Ft.exports&&Xo(e))try{t=Gt._abbr,n=qa,n("./locale/"+e),$e(t)}catch(a){E[e]=null}return E[e]}function $e(e,t){var n;return e&&(Y(t)?n=Fe(e):n=fn(e,t),n?Gt=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Gt._abbr}function fn(e,t){if(t!==null){var n,a=xa;if(t.abbr=e,E[e]!=null)ia("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=E[e]._config;else if(t.parentLocale!=null)if(E[t.parentLocale]!=null)a=E[t.parentLocale]._config;else if(n=ui(t.parentLocale),n!=null)a=n._config;else return jt[t.parentLocale]||(jt[t.parentLocale]=[]),jt[t.parentLocale].push({name:e,config:t}),null;return E[e]=new nn(tn(a,t)),jt[e]&&jt[e].forEach(function(s){fn(s.name,s.config)}),$e(e),E[e]}else return delete E[e],null}function Jo(e,t){if(t!=null){var n,a,s=xa;E[e]!=null&&E[e].parentLocale!=null?E[e].set(tn(E[e]._config,t)):(a=ui(e),a!=null&&(s=a._config),t=tn(s,t),a==null&&(t.abbr=e),n=new nn(t),n.parentLocale=E[e],E[e]=n),$e(e)}else E[e]!=null&&(E[e].parentLocale!=null?(E[e]=E[e].parentLocale,e===$e()&&$e(e)):E[e]!=null&&delete E[e]);return E[e]}function Fe(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Gt;if(!r(e)){if(t=ui(e),t)return t;e=[e]}return Qo(e)}function Ko(){return an(E)}function vn(e){var t,n=e._a;return n&&T(e).overflow===-2&&(t=n[Re]<0||n[Re]>11?Re:n[fe]<1||n[fe]>un(n[Z],n[Re])?fe:n[W]<0||n[W]>24||n[W]===24&&(n[re]!==0||n[Le]!==0||n[st]!==0)?W:n[re]<0||n[re]>59?re:n[Le]<0||n[Le]>59?Le:n[st]<0||n[st]>999?st:-1,T(e)._overflowDayOfYear&&(t<Z||t>fe)&&(t=fe),T(e)._overflowWeeks&&t===-1&&(t=io),T(e)._overflowWeekday&&t===-1&&(t=no),T(e).overflow=t),e}var el=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,il=/Z|[+-]\d\d(?::?\d\d)?/,gi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],wn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],nl=/^\/?Date\((-?\d+)/i,al=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,sl={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ba(e){var t,n,a=e._i,s=el.exec(a)||tl.exec(a),c,u,y,S,B=gi.length,Q=wn.length;if(s){for(T(e).iso=!0,t=0,n=B;t<n;t++)if(gi[t][1].exec(s[1])){u=gi[t][0],c=gi[t][2]!==!1;break}if(u==null){e._isValid=!1;return}if(s[3]){for(t=0,n=Q;t<n;t++)if(wn[t][1].exec(s[3])){y=(s[2]||" ")+wn[t][0];break}if(y==null){e._isValid=!1;return}}if(!c&&y!=null){e._isValid=!1;return}if(s[4])if(il.exec(s[4]))S="Z";else{e._isValid=!1;return}e._f=u+(y||"")+(S||""),xn(e)}else e._isValid=!1}function rl(e,t,n,a,s,c){var u=[ol(e),ha.indexOf(t),parseInt(n,10),parseInt(a,10),parseInt(s,10)];return c&&u.push(parseInt(c,10)),u}function ol(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function ll(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function cl(e,t,n){if(e){var a=va.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(a!==s)return T(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function dl(e,t,n){if(e)return sl[e];if(t)return 0;var a=parseInt(n,10),s=a%100,c=(a-s)/100;return c*60+s}function ka(e){var t=al.exec(ll(e._i)),n;if(t){if(n=rl(t[4],t[3],t[2],t[5],t[6],t[7]),!cl(t[1],n,e))return;e._a=n,e._tzm=dl(t[8],t[9],t[10]),e._d=Ut.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function hl(e){var t=nl.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(ba(e),e._isValid===!1)delete e._isValid;else return;if(ka(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=ee("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ft(e,t,n){return e??t??n}function ul(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function yn(e){var t,n,a=[],s,c,u;if(!e._d){for(s=ul(e),e._w&&e._a[fe]==null&&e._a[Re]==null&&gl(e),e._dayOfYear!=null&&(u=ft(e._a[Z],s[Z]),(e._dayOfYear>Vt(u)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),n=Ut(u,0,e._dayOfYear),e._a[Re]=n.getUTCMonth(),e._a[fe]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[W]===24&&e._a[re]===0&&e._a[Le]===0&&e._a[st]===0&&(e._nextDay=!0,e._a[W]=0),e._d=(e._useUTC?Ut:yo).apply(null,a),c=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[W]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==c&&(T(e).weekdayMismatch=!0)}}function gl(e){var t,n,a,s,c,u,y,S,B;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(c=1,u=4,n=ft(t.GG,e._a[Z],Wt(F(),1,4).year),a=ft(t.W,1),s=ft(t.E,1),(s<1||s>7)&&(S=!0)):(c=e._locale._week.dow,u=e._locale._week.doy,B=Wt(F(),c,u),n=ft(t.gg,e._a[Z],B.year),a=ft(t.w,B.week),t.d!=null?(s=t.d,(s<0||s>6)&&(S=!0)):t.e!=null?(s=t.e+c,(t.e<0||t.e>6)&&(S=!0)):s=c),a<1||a>Ne(n,c,u)?T(e)._overflowWeeks=!0:S!=null?T(e)._overflowWeekday=!0:(y=fa(n,a,s,c,u),e._a[Z]=y.year,e._dayOfYear=y.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function xn(e){if(e._f===d.ISO_8601){ba(e);return}if(e._f===d.RFC_2822){ka(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,n,a,s,c,u,y=t.length,S=0,B,Q;for(s=na(e._f,e._locale).match(sn)||[],Q=s.length,n=0;n<Q;n++)c=s[n],a=(t.match(Kr(c,e))||[])[0],a&&(u=t.substr(0,t.indexOf(a)),u.length>0&&T(e).unusedInput.push(u),t=t.slice(t.indexOf(a)+a.length),S+=a.length),ut[c]?(a?T(e).empty=!1:T(e).unusedTokens.push(c),to(c,a,e)):e._strict&&!a&&T(e).unusedTokens.push(c);T(e).charsLeftOver=y-S,t.length>0&&T(e).unusedInput.push(t),e._a[W]<=12&&T(e).bigHour===!0&&e._a[W]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[W]=ml(e._locale,e._a[W],e._meridiem),B=T(e).era,B!==null&&(e._a[Z]=e._locale.erasConvertYear(B,e._a[Z])),yn(e),vn(e)}function ml(e,t,n){var a;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(a=e.isPM(n),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function pl(e){var t,n,a,s,c,u,y=!1,S=e._f.length;if(S===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<S;s++)c=0,u=!1,t=en({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],xn(t),Ji(t)&&(u=!0),c+=T(t).charsLeftOver,c+=T(t).unusedTokens.length*10,T(t).score=c,y?c<a&&(a=c,n=t):(a==null||c<a||u)&&(a=c,n=t,u&&(y=!0));Ge(e,n||t)}function fl(e){if(!e._d){var t=on(e._i),n=t.day===void 0?t.date:t.day;e._a=Jn([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),yn(e)}}function vl(e){var t=new Pt(vn(Ma(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ma(e){var t=e._i,n=e._f;return e._locale=e._locale||Fe(e._l),t===null||n===void 0&&t===""?ti({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),se(t)?new Pt(vn(t)):(Et(t)?e._d=t:r(n)?pl(e):n?xn(e):wl(e),Ji(e)||(e._d=null),e))}function wl(e){var t=e._i;Y(t)?e._d=new Date(d.now()):Et(t)?e._d=new Date(t.valueOf()):typeof t=="string"?hl(e):r(t)?(e._a=Jn(t.slice(0),function(n){return parseInt(n,10)}),yn(e)):o(t)?fl(e):Ae(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Sa(e,t,n,a,s){var c={};return(t===!0||t===!1)&&(a=t,t=void 0),(n===!0||n===!1)&&(a=n,n=void 0),(o(e)&&_(e)||r(e)&&e.length===0)&&(e=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=s,c._l=n,c._i=e,c._f=t,c._strict=a,vl(c)}function F(e,t,n,a){return Sa(e,t,n,a,!1)}var yl=ee("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=F.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:ti()}),xl=ee("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=F.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:ti()});function Ca(e,t){var n,a;if(t.length===1&&r(t[0])&&(t=t[0]),!t.length)return F();for(n=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](n))&&(n=t[a]);return n}function _l(){var e=[].slice.call(arguments,0);return Ca("isBefore",e)}function bl(){var e=[].slice.call(arguments,0);return Ca("isAfter",e)}var kl=function(){return Date.now?Date.now():+new Date},$t=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ml(e){var t,n=!1,a,s=$t.length;for(t in e)if(h(e,t)&&!(V.call($t,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<s;++a)if(e[$t[a]]){if(n)return!1;parseFloat(e[$t[a]])!==O(e[$t[a]])&&(n=!0)}return!0}function Sl(){return this._isValid}function Cl(){return oe(NaN)}function mi(e){var t=on(e),n=t.year||0,a=t.quarter||0,s=t.month||0,c=t.week||t.isoWeek||0,u=t.day||0,y=t.hour||0,S=t.minute||0,B=t.second||0,Q=t.millisecond||0;this._isValid=Ml(t),this._milliseconds=+Q+B*1e3+S*6e4+y*1e3*60*60,this._days=+u+c*7,this._months=+s+a*3+n*12,this._data={},this._locale=Fe(),this._bubble()}function pi(e){return e instanceof mi}function _n(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Tl(e,t,n){var a=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),c=0,u;for(u=0;u<a;u++)(n&&e[u]!==t[u]||!n&&O(e[u])!==O(t[u]))&&c++;return c+s}function Ta(e,t){b(e,0,0,function(){var n=this.utcOffset(),a="+";return n<0&&(n=-n,a="-"),a+pe(~~(n/60),2)+t+pe(~~n%60,2)})}Ta("Z",":"),Ta("ZZ",""),x("Z",li),x("ZZ",li),R(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=bn(li,e)});var Dl=/([\+\-]|\d\d)/gi;function bn(e,t){var n=(t||"").match(e),a,s,c;return n===null?null:(a=n[n.length-1]||[],s=(a+"").match(Dl)||["-",0,0],c=+(s[1]*60)+O(s[2]),c===0?0:s[0]==="+"?c:-c)}function kn(e,t){var n,a;return t._isUTC?(n=t.clone(),a=(se(e)||Et(e)?e.valueOf():F(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+a),d.updateOffset(n,!1),n):F(e).local()}function Mn(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function Ol(e,t,n){var a=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=bn(li,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(s=Mn(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),a!==e&&(!t||this._changeInProgress?Aa(this,oe(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:Mn(this)}function Bl(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Al(e){return this.utcOffset(0,e)}function Il(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Mn(this),"m")),this}function Rl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=bn(Xr,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ll(e){return this.isValid()?(e=e?F(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Nl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Fl(){if(!Y(this._isDSTShifted))return this._isDSTShifted;var e={},t;return en(e,this),e=Ma(e),e._a?(t=e._isUTC?ge(e._a):F(e._a),this._isDSTShifted=this.isValid()&&Tl(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function El(){return this.isValid()?!this._isUTC:!1}function Pl(){return this.isValid()?this._isUTC:!1}function Da(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Hl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function oe(e,t){var n=e,a=null,s,c,u;return pi(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Ae(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(a=Yl.exec(e))?(s=a[1]==="-"?-1:1,n={y:0,d:O(a[fe])*s,h:O(a[W])*s,m:O(a[re])*s,s:O(a[Le])*s,ms:O(_n(a[st]*1e3))*s}):(a=Hl.exec(e))?(s=a[1]==="-"?-1:1,n={y:rt(a[2],s),M:rt(a[3],s),w:rt(a[4],s),d:rt(a[5],s),h:rt(a[6],s),m:rt(a[7],s),s:rt(a[8],s)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(u=Vl(F(n.from),F(n.to)),n={},n.ms=u.milliseconds,n.M=u.months),c=new mi(n),pi(e)&&h(e,"_locale")&&(c._locale=e._locale),pi(e)&&h(e,"_isValid")&&(c._isValid=e._isValid),c}oe.fn=mi.prototype,oe.invalid=Cl;function rt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Oa(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Vl(e,t){var n;return e.isValid()&&t.isValid()?(t=kn(t,e),e.isBefore(t)?n=Oa(e,t):(n=Oa(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ba(e,t){return function(n,a){var s,c;return a!==null&&!isNaN(+a)&&(ia(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),c=n,n=a,a=c),s=oe(n,a),Aa(this,s,e),this}}function Aa(e,t,n,a){var s=t._milliseconds,c=_n(t._days),u=_n(t._months);e.isValid()&&(a=a??!0,u&&ga(e,zt(e,"Month")+u*n),c&&da(e,"Date",zt(e,"Date")+c*n),s&&e._d.setTime(e._d.valueOf()+s*n),a&&d.updateOffset(e,c||u))}var zl=Ba(1,"add"),Ul=Ba(-1,"subtract");function Ia(e){return typeof e=="string"||e instanceof String}function Wl(e){return se(e)||Et(e)||Ia(e)||Ae(e)||Gl(e)||jl(e)||e===null||e===void 0}function jl(e){var t=o(e)&&!_(e),n=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,c,u=a.length;for(s=0;s<u;s+=1)c=a[s],n=n||h(e,c);return t&&n}function Gl(e){var t=r(e),n=!1;return t&&(n=e.filter(function(a){return!Ae(a)&&Ia(e)}).length===0),t&&n}function $l(e){var t=o(e)&&!_(e),n=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,c;for(s=0;s<a.length;s+=1)c=a[s],n=n||h(e,c);return t&&n}function ql(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Zl(e,t){arguments.length===1&&(arguments[0]?Wl(arguments[0])?(e=arguments[0],t=void 0):$l(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||F(),a=kn(n,this).startOf("day"),s=d.calendarFormat(this,a)||"sameElse",c=t&&(me(t[s])?t[s].call(this,n):t[s]);return this.format(c||this.localeData().calendar(s,this,F(n)))}function Ql(){return new Pt(this)}function Xl(e,t){var n=se(e)?e:F(e);return this.isValid()&&n.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function Jl(e,t){var n=se(e)?e:F(e);return this.isValid()&&n.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function Kl(e,t,n,a){var s=se(e)?e:F(e),c=se(t)?t:F(t);return this.isValid()&&s.isValid()&&c.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(s,n):!this.isBefore(s,n))&&(a[1]===")"?this.isBefore(c,n):!this.isAfter(c,n))):!1}function ec(e,t){var n=se(e)?e:F(e),a;return this.isValid()&&n.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(a=n.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function tc(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ic(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function nc(e,t,n){var a,s,c;if(!this.isValid())return NaN;if(a=kn(e,this),!a.isValid())return NaN;switch(s=(a.utcOffset()-this.utcOffset())*6e4,t=te(t),t){case"year":c=fi(this,a)/12;break;case"month":c=fi(this,a);break;case"quarter":c=fi(this,a)/3;break;case"second":c=(this-a)/1e3;break;case"minute":c=(this-a)/6e4;break;case"hour":c=(this-a)/36e5;break;case"day":c=(this-a-s)/864e5;break;case"week":c=(this-a-s)/6048e5;break;default:c=this-a}return n?c:ie(c)}function fi(e,t){if(e.date()<t.date())return-fi(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(n,"months"),s,c;return t-a<0?(s=e.clone().add(n-1,"months"),c=(t-a)/(a-s)):(s=e.clone().add(n+1,"months"),c=(t-a)/(s-a)),-(n+c)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function ac(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function sc(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?ni(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):me(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ni(n,"Z")):ni(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function rc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,a,s,c;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",c=t+'[")]',this.format(n+a+s+c)}function oc(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=ni(this,e);return this.localeData().postformat(t)}function lc(e,t){return this.isValid()&&(se(e)&&e.isValid()||F(e).isValid())?oe({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cc(e){return this.from(F(),e)}function dc(e,t){return this.isValid()&&(se(e)&&e.isValid()||F(e).isValid())?oe({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function hc(e){return this.to(F(),e)}function Ra(e){var t;return e===void 0?this._locale._abbr:(t=Fe(e),t!=null&&(this._locale=t),this)}var La=ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Na(){return this._locale}var vi=1e3,vt=60*vi,wi=60*vt,Fa=(365*400+97)*24*wi;function wt(e,t){return(e%t+t)%t}function Ea(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Fa:new Date(e,t,n).valueOf()}function Pa(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Fa:Date.UTC(e,t,n)}function uc(e){var t,n;if(e=te(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Pa:Ea,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=wt(t+(this._isUTC?0:this.utcOffset()*vt),wi);break;case"minute":t=this._d.valueOf(),t-=wt(t,vt);break;case"second":t=this._d.valueOf(),t-=wt(t,vi);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function gc(e){var t,n;if(e=te(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Pa:Ea,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=wi-wt(t+(this._isUTC?0:this.utcOffset()*vt),wi)-1;break;case"minute":t=this._d.valueOf(),t+=vt-wt(t,vt)-1;break;case"second":t=this._d.valueOf(),t+=vi-wt(t,vi)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function mc(){return this._d.valueOf()-(this._offset||0)*6e4}function pc(){return Math.floor(this.valueOf()/1e3)}function fc(){return new Date(this.valueOf())}function vc(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function wc(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function xc(){return Ji(this)}function _c(){return Ge({},T(this))}function bc(){return T(this).overflow}function kc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr"),b("NN",0,0,"eraAbbr"),b("NNN",0,0,"eraAbbr"),b("NNNN",0,0,"eraName"),b("NNNNN",0,0,"eraNarrow"),b("y",["y",1],"yo","eraYear"),b("y",["yy",2],0,"eraYear"),b("y",["yyy",3],0,"eraYear"),b("y",["yyyy",4],0,"eraYear"),x("N",Sn),x("NN",Sn),x("NNN",Sn),x("NNNN",Lc),x("NNNNN",Nc),R(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,a){var s=n._locale.erasParse(e,a,n._strict);s?T(n).era=s:T(n).invalidEra=e}),x("y",gt),x("yy",gt),x("yyy",gt),x("yyyy",gt),x("yo",Fc),R(["y","yy","yyy","yyyy"],Z),R(["yo"],function(e,t,n,a){var s;n._locale._eraYearOrdinalRegex&&(s=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Z]=n._locale.eraYearOrdinalParse(e,s):t[Z]=parseInt(e,10)});function Mc(e,t){var n,a,s,c=this._eras||Fe("en")._eras;for(n=0,a=c.length;n<a;++n)switch(typeof c[n].since==="string"&&(s=d(c[n].since).startOf("day"),c[n].since=s.valueOf()),typeof c[n].until){case"undefined":c[n].until=1/0;break;case"string":s=d(c[n].until).startOf("day").valueOf(),c[n].until=s.valueOf();break}return c}function Sc(e,t,n){var a,s,c=this.eras(),u,y,S;for(e=e.toUpperCase(),a=0,s=c.length;a<s;++a)if(u=c[a].name.toUpperCase(),y=c[a].abbr.toUpperCase(),S=c[a].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(y===e)return c[a];break;case"NNNN":if(u===e)return c[a];break;case"NNNNN":if(S===e)return c[a];break}else if([u,y,S].indexOf(e)>=0)return c[a]}function Cc(e,t){var n=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*n}function Tc(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].name;return""}function Dc(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].narrow;return""}function Oc(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].abbr;return""}function Bc(){var e,t,n,a,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=s[e].since<=s[e].until?1:-1,a=this.clone().startOf("day").valueOf(),s[e].since<=a&&a<=s[e].until||s[e].until<=a&&a<=s[e].since)return(this.year()-d(s[e].since).year())*n+s[e].offset;return this.year()}function Ac(e){return h(this,"_erasNameRegex")||Cn.call(this),e?this._erasNameRegex:this._erasRegex}function Ic(e){return h(this,"_erasAbbrRegex")||Cn.call(this),e?this._erasAbbrRegex:this._erasRegex}function Rc(e){return h(this,"_erasNarrowRegex")||Cn.call(this),e?this._erasNarrowRegex:this._erasRegex}function Sn(e,t){return t.erasAbbrRegex(e)}function Lc(e,t){return t.erasNameRegex(e)}function Nc(e,t){return t.erasNarrowRegex(e)}function Fc(e,t){return t._eraYearOrdinalRegex||gt}function Cn(){var e=[],t=[],n=[],a=[],s,c,u,y,S,B=this.eras();for(s=0,c=B.length;s<c;++s)u=Ie(B[s].name),y=Ie(B[s].abbr),S=Ie(B[s].narrow),t.push(u),e.push(y),n.push(S),a.push(u),a.push(y),a.push(S);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100}),b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function yi(e,t){b(0,[e,e.length],0,t)}yi("gggg","weekYear"),yi("ggggg","weekYear"),yi("GGGG","isoWeekYear"),yi("GGGGG","isoWeekYear"),x("G",oi),x("g",oi),x("GG",N,J),x("gg",N,J),x("GGGG",cn,ln),x("gggg",cn,ln),x("GGGGG",ri,ai),x("ggggg",ri,ai),Ht(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,a){t[a.substr(0,2)]=O(e)}),Ht(["gg","GG"],function(e,t,n,a){t[a]=d.parseTwoDigitYear(e)});function Ec(e){return Ya.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Pc(e){return Ya.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yc(){return Ne(this.year(),1,4)}function Hc(){return Ne(this.isoWeekYear(),1,4)}function Vc(){var e=this.localeData()._week;return Ne(this.year(),e.dow,e.doy)}function zc(){var e=this.localeData()._week;return Ne(this.weekYear(),e.dow,e.doy)}function Ya(e,t,n,a,s){var c;return e==null?Wt(this,a,s).year:(c=Ne(e,a,s),t>c&&(t=c),Uc.call(this,e,t,n,a,s))}function Uc(e,t,n,a,s){var c=fa(e,t,n,a,s),u=Ut(c.year,0,c.dayOfYear);return this.year(u.getUTCFullYear()),this.month(u.getUTCMonth()),this.date(u.getUTCDate()),this}b("Q",0,"Qo","quarter"),x("Q",sa),R("Q",function(e,t){t[Re]=(O(e)-1)*3});function Wc(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date"),x("D",N,mt),x("DD",N,J),x("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),R(["D","DD"],fe),R("Do",function(e,t){t[fe]=O(e.match(N)[0])});var Ha=pt("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear"),x("DDD",si),x("DDDD",ra),R(["DDD","DDDD"],function(e,t,n){n._dayOfYear=O(e)});function jc(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute"),x("m",N,dn),x("mm",N,J),R(["m","mm"],re);var Gc=pt("Minutes",!1);b("s",["ss",2],0,"second"),x("s",N,dn),x("ss",N,J),R(["s","ss"],Le);var $c=pt("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)}),b(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),b(0,["SSS",3],0,"millisecond"),b(0,["SSSS",4],0,function(){return this.millisecond()*10}),b(0,["SSSSS",5],0,function(){return this.millisecond()*100}),b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),x("S",si,sa),x("SS",si,J),x("SSS",si,ra);var qe,Va;for(qe="SSSS";qe.length<=9;qe+="S")x(qe,gt);function qc(e,t){t[st]=O(("0."+e)*1e3)}for(qe="S";qe.length<=9;qe+="S")R(qe,qc);Va=pt("Milliseconds",!1),b("z",0,0,"zoneAbbr"),b("zz",0,0,"zoneName");function Zc(){return this._isUTC?"UTC":""}function Qc(){return this._isUTC?"Coordinated Universal Time":""}var p=Pt.prototype;p.add=zl,p.calendar=Zl,p.clone=Ql,p.diff=nc,p.endOf=gc,p.format=oc,p.from=lc,p.fromNow=cc,p.to=dc,p.toNow=hc,p.get=so,p.invalidAt=bc,p.isAfter=Xl,p.isBefore=Jl,p.isBetween=Kl,p.isSame=ec,p.isSameOrAfter=tc,p.isSameOrBefore=ic,p.isValid=xc,p.lang=La,p.locale=Ra,p.localeData=Na,p.max=xl,p.min=yl,p.parsingFlags=_c,p.set=ro,p.startOf=uc,p.subtract=Ul,p.toArray=vc,p.toObject=wc,p.toDate=fc,p.toISOString=sc,p.inspect=rc,typeof Symbol<"u"&&Symbol.for!=null&&(p[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),p.toJSON=yc,p.toString=ac,p.unix=pc,p.valueOf=mc,p.creationData=kc,p.eraName=Tc,p.eraNarrow=Dc,p.eraAbbr=Oc,p.eraYear=Bc,p.year=ca,p.isLeapYear=ao,p.weekYear=Ec,p.isoWeekYear=Pc,p.quarter=p.quarters=Wc,p.month=ma,p.daysInMonth=fo,p.week=p.weeks=Mo,p.isoWeek=p.isoWeeks=So,p.weeksInYear=Vc,p.weeksInWeekYear=zc,p.isoWeeksInYear=Yc,p.isoWeeksInISOWeekYear=Hc,p.date=Ha,p.day=p.days=Po,p.weekday=Yo,p.isoWeekday=Ho,p.dayOfYear=jc,p.hour=p.hours=$o,p.minute=p.minutes=Gc,p.second=p.seconds=$c,p.millisecond=p.milliseconds=Va,p.utcOffset=Ol,p.utc=Al,p.local=Il,p.parseZone=Rl,p.hasAlignedHourOffset=Ll,p.isDST=Nl,p.isLocal=El,p.isUtcOffset=Pl,p.isUtc=Da,p.isUTC=Da,p.zoneAbbr=Zc,p.zoneName=Qc,p.dates=ee("dates accessor is deprecated. Use date instead.",Ha),p.months=ee("months accessor is deprecated. Use month instead",ma),p.years=ee("years accessor is deprecated. Use year instead",ca),p.zone=ee("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Bl),p.isDSTShifted=ee("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Fl);function Xc(e){return F(e*1e3)}function Jc(){return F.apply(null,arguments).parseZone()}function za(e){return e}var I=nn.prototype;I.calendar=Fr,I.longDateFormat=Hr,I.invalidDate=zr,I.ordinal=jr,I.preparse=za,I.postformat=za,I.relativeTime=$r,I.pastFuture=qr,I.set=Lr,I.eras=Mc,I.erasParse=Sc,I.erasConvertYear=Cc,I.erasAbbrRegex=Ic,I.erasNameRegex=Ac,I.erasNarrowRegex=Rc,I.months=uo,I.monthsShort=go,I.monthsParse=po,I.monthsRegex=wo,I.monthsShortRegex=vo,I.week=xo,I.firstDayOfYear=ko,I.firstDayOfWeek=bo,I.weekdays=Ro,I.weekdaysMin=No,I.weekdaysShort=Lo,I.weekdaysParse=Eo,I.weekdaysRegex=Vo,I.weekdaysShortRegex=zo,I.weekdaysMinRegex=Uo,I.isPM=jo,I.meridiem=qo;function xi(e,t,n,a){var s=Fe(),c=ge().set(a,t);return s[n](c,e)}function Ua(e,t,n){if(Ae(e)&&(t=e,e=void 0),e=e||"",t!=null)return xi(e,t,n,"month");var a,s=[];for(a=0;a<12;a++)s[a]=xi(e,a,n,"month");return s}function Tn(e,t,n,a){typeof e=="boolean"?(Ae(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Ae(t)&&(n=t,t=void 0),t=t||"");var s=Fe(),c=e?s._week.dow:0,u,y=[];if(n!=null)return xi(t,(n+c)%7,a,"day");for(u=0;u<7;u++)y[u]=xi(t,(u+c)%7,a,"day");return y}function Kc(e,t){return Ua(e,t,"months")}function ed(e,t){return Ua(e,t,"monthsShort")}function td(e,t,n){return Tn(e,t,n,"weekdays")}function id(e,t,n){return Tn(e,t,n,"weekdaysShort")}function nd(e,t,n){return Tn(e,t,n,"weekdaysMin")}$e("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=O(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}}),d.lang=ee("moment.lang is deprecated. Use moment.locale instead.",$e),d.langData=ee("moment.langData is deprecated. Use moment.localeData instead.",Fe);var Ee=Math.abs;function ad(){var e=this._data;return this._milliseconds=Ee(this._milliseconds),this._days=Ee(this._days),this._months=Ee(this._months),e.milliseconds=Ee(e.milliseconds),e.seconds=Ee(e.seconds),e.minutes=Ee(e.minutes),e.hours=Ee(e.hours),e.months=Ee(e.months),e.years=Ee(e.years),this}function Wa(e,t,n,a){var s=oe(t,n);return e._milliseconds+=a*s._milliseconds,e._days+=a*s._days,e._months+=a*s._months,e._bubble()}function sd(e,t){return Wa(this,e,t,1)}function rd(e,t){return Wa(this,e,t,-1)}function ja(e){return e<0?Math.floor(e):Math.ceil(e)}function od(){var e=this._milliseconds,t=this._days,n=this._months,a=this._data,s,c,u,y,S;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=ja(Dn(n)+t)*864e5,t=0,n=0),a.milliseconds=e%1e3,s=ie(e/1e3),a.seconds=s%60,c=ie(s/60),a.minutes=c%60,u=ie(c/60),a.hours=u%24,t+=ie(u/24),S=ie(Ga(t)),n+=S,t-=ja(Dn(S)),y=ie(n/12),n%=12,a.days=t,a.months=n,a.years=y,this}function Ga(e){return e*4800/146097}function Dn(e){return e*146097/4800}function ld(e){if(!this.isValid())return NaN;var t,n,a=this._milliseconds;if(e=te(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,n=this._months+Ga(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function Pe(e){return function(){return this.as(e)}}var $a=Pe("ms"),cd=Pe("s"),dd=Pe("m"),hd=Pe("h"),ud=Pe("d"),gd=Pe("w"),md=Pe("M"),pd=Pe("Q"),fd=Pe("y"),vd=$a;function wd(){return oe(this)}function yd(e){return e=te(e),this.isValid()?this[e+"s"]():NaN}function ot(e){return function(){return this.isValid()?this._data[e]:NaN}}var xd=ot("milliseconds"),_d=ot("seconds"),bd=ot("minutes"),kd=ot("hours"),Md=ot("days"),Sd=ot("months"),Cd=ot("years");function Td(){return ie(this.days()/7)}var Ye=Math.round,yt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Dd(e,t,n,a,s){return s.relativeTime(t||1,!!n,e,a)}function Od(e,t,n,a){var s=oe(e).abs(),c=Ye(s.as("s")),u=Ye(s.as("m")),y=Ye(s.as("h")),S=Ye(s.as("d")),B=Ye(s.as("M")),Q=Ye(s.as("w")),He=Ye(s.as("y")),Ze=c<=n.ss&&["s",c]||c<n.s&&["ss",c]||u<=1&&["m"]||u<n.m&&["mm",u]||y<=1&&["h"]||y<n.h&&["hh",y]||S<=1&&["d"]||S<n.d&&["dd",S];return n.w!=null&&(Ze=Ze||Q<=1&&["w"]||Q<n.w&&["ww",Q]),Ze=Ze||B<=1&&["M"]||B<n.M&&["MM",B]||He<=1&&["y"]||["yy",He],Ze[2]=t,Ze[3]=+e>0,Ze[4]=a,Dd.apply(null,Ze)}function Bd(e){return e===void 0?Ye:typeof e=="function"?(Ye=e,!0):!1}function Ad(e,t){return yt[e]===void 0?!1:t===void 0?yt[e]:(yt[e]=t,e==="s"&&(yt.ss=t-1),!0)}function Id(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,a=yt,s,c;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(a=Object.assign({},yt,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),s=this.localeData(),c=Od(this,!n,a,s),n&&(c=s.pastFuture(+this,c)),s.postformat(c)}var On=Math.abs;function xt(e){return(e>0)-(e<0)||+e}function _i(){if(!this.isValid())return this.localeData().invalidDate();var e=On(this._milliseconds)/1e3,t=On(this._days),n=On(this._months),a,s,c,u,y=this.asSeconds(),S,B,Q,He;return y?(a=ie(e/60),s=ie(a/60),e%=60,a%=60,c=ie(n/12),n%=12,u=e?e.toFixed(3).replace(/\.?0+$/,""):"",S=y<0?"-":"",B=xt(this._months)!==xt(y)?"-":"",Q=xt(this._days)!==xt(y)?"-":"",He=xt(this._milliseconds)!==xt(y)?"-":"",S+"P"+(c?B+c+"Y":"")+(n?B+n+"M":"")+(t?Q+t+"D":"")+(s||a||e?"T":"")+(s?He+s+"H":"")+(a?He+a+"M":"")+(e?He+u+"S":"")):"P0D"}var A=mi.prototype;A.isValid=Sl,A.abs=ad,A.add=sd,A.subtract=rd,A.as=ld,A.asMilliseconds=$a,A.asSeconds=cd,A.asMinutes=dd,A.asHours=hd,A.asDays=ud,A.asWeeks=gd,A.asMonths=md,A.asQuarters=pd,A.asYears=fd,A.valueOf=vd,A._bubble=od,A.clone=wd,A.get=yd,A.milliseconds=xd,A.seconds=_d,A.minutes=bd,A.hours=kd,A.days=Md,A.weeks=Td,A.months=Sd,A.years=Cd,A.humanize=Id,A.toISOString=_i,A.toString=_i,A.toJSON=_i,A.locale=Ra,A.localeData=Na,A.toIsoString=ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",_i),A.lang=La,b("X",0,0,"unix"),b("x",0,0,"valueOf"),x("x",oi),x("X",Jr),R("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)}),R("x",function(e,t,n){n._d=new Date(O(e))});return d.version="2.30.1",i(F),d.fn=p,d.min=_l,d.max=bl,d.now=kl,d.utc=ge,d.unix=Xc,d.months=Kc,d.isDate=Et,d.locale=$e,d.invalid=ti,d.duration=oe,d.isMoment=se,d.weekdays=td,d.parseZone=Jc,d.localeData=Fe,d.isDuration=pi,d.monthsShort=ed,d.weekdaysMin=nd,d.defineLocale=fn,d.updateLocale=Jo,d.locales=Ko,d.weekdaysShort=id,d.normalizeUnits=te,d.relativeTimeRounding=Bd,d.relativeTimeThreshold=Ad,d.calendarFormat=ql,d.prototype=p,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})});function Ld(l,d){if(l&1&&(g(0,"div",3),k(1,"div",4),m()),l&2){let i=D(2);v(),ue("width",i.diameter)("height",i.diameter)}}function Nd(l,d){if(l&1&&k(0,"div",5),l&2){let i=D().ngIf,r=D();ue("background",r.color)("height",r.height)("width",i+"%")}}function Fd(l,d){if(l&1&&(En(0),lt(1,Ld,2,4,"div",1)(2,Nd,1,6,"div",2),Pn()),l&2){let i=D();v(),w("ngIf",i.includeSpinner),v(),w("ngIf",i.includeBar)}}function Ed(l,d){if(l&1&&(g(0,"div",3),k(1,"div",4),m()),l&2){let i=D(2);v(),ue("width",i.diameter)("height",i.diameter)}}function Pd(l,d){if(l&1&&k(0,"div",5),l&2){let i=D().ngIf,r=D();ue("background",r.color)("height",r.height)("width",i+"%")}}function Yd(l,d){if(l&1&&(En(0),lt(1,Ed,2,4,"div",1)(2,Pd,1,6,"div",2),Pn()),l&2){let i=D();v(),w("ngIf",i.includeSpinner),v(),w("ngIf",i.includeBar)}}var Hd="[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Un=class{constructor(d={}){this.config=d,this.state={action:null,value:0,initialValue:0},this.requests=null,this.disabled=!1,this.stream$=new Bn,this._value$=null,this.timer$=i=>{let r=An(i);switch(i.action){case"start":case"increment":case"set":{i.action==="start"&&this.config.latencyThreshold===0&&i.value===0&&(i.value=i.initialValue),this.requests>0&&(r=In(this.config.latencyThreshold,250).pipe(Qe(o=>_t(le({},i),{value:o===0?this.state.value||i.initialValue:this._increment()}))));break}case"complete":case"stop":{r=i.value===0?An(le({},i)):In(0,500).pipe(es(2),Qe(o=>({value:o===0?100:0})));break}}return r.pipe(Qe(o=>_t(le({},o),{action:"set"})),is(o=>this.next(o,!1)))},this.config=le({latencyThreshold:0},d)}get value$(){return this._value$?this._value$:this._value$=this.stream$.pipe(Rn(this.state),Ln(d=>this.timer$(d)),ts(),Qe(d=>d.value))}start(d=2){this.disabled||this.next({action:"start",initialValue:d})}stop(){this.next({action:"stop"})}complete(){this.next({action:"complete"})}disable(){this.disabled=!0}set(d){this.next({action:"set",value:d})}increment(d=0){this.next({action:"increment",value:d})}next(d,i=!0){switch(d.action){case"start":this.requests=(this.requests||0)+1;break;case"complete":if(this.requests=(this.requests||1)-1,this.requests>0)return;break;case"stop":this.requests=0;break;case"increment":d.value=this._increment(d.value);break}this.state=le(_t(le({},this.state),{action:null}),d),i&&this.stream$.next(this.state)}_increment(d=0){let i=this.state.value;return i>=99&&(d=0),d===0&&(i>=0&&i<25?d=Math.random()*3+3:i>=25&&i<65?d=Math.random()*3:i>=65&&i<90?d=Math.random()*2:i>=90&&i<99?d=.5:d=0),d+i}},Vd=new K("LOADING_BAR_CONFIG");var zd=(()=>{class l{get progress$(){return this.value$}constructor(i,r={},o){this.platformId=i,this.config=r,this.zone=o,this.refs={},this.streams$=new Bn,this.value$=this.streams$.pipe(Rn(null),Ln(()=>Ja(Object.keys(this.refs).map(h=>this.refs[h].value$))),Ud(this.zone),Qe(h=>Math.max(0,...h)))}start(i=2){this.useRef().start(i)}set(i){this.useRef().set(i)}increment(i){this.useRef().increment(i)}complete(){this.useRef().complete()}stop(){this.useRef().stop()}useRef(i="default"){return this.refs[i]||(this.refs[i]=new Un(this.config),this.streams$.next(),xs(this.platformId)||this.refs[i].disable()),this.refs[i]}static{this.\u0275fac=function(r){return new(r||l)(Xe(cs),Xe(Vd,8),Xe(bt,8))}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();function Ud(l){return l?d=>new Qa(i=>d.subscribe(r=>l.run(()=>i.next(r)),r=>l.run(()=>i.error(r)),()=>l.run(()=>i.complete()))):d=>d}var Wd=(()=>{class l{get value$(){return this.ref?this.loader.useRef(this.ref).value$:this.loader.value$}constructor(i){this.loader=i,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.color="#29d"}static{this.\u0275fac=function(r){return new(r||l)(us(zd))}}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(he("fixed",o.fixed),ue("color",o.color))},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",color:"color",value:"value",ref:"ref",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(lt(0,Fd,3,2,"ng-container",0),We(1,"async")),r&2&&w("ngIf",o.value!=null?o.value:je(1,1,o.value$))},dependencies:[Bi,Oi],styles:["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],changeDetection:0})}}return l})(),ir=(()=>{class l extends Wd{static{this.\u0275fac=(()=>{let i;return function(o){return(i||(i=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(he("fixed",o.fixed),ue("color",o.color))},standalone:!1,features:[ne],decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(lt(0,Yd,3,2,"ng-container",0),We(1,"async")),r&2&&w("ngIf",o.value!=null?o.value:je(1,1,o.value$))},dependencies:[Oi,Bi],styles:[Hd],changeDetection:0})}}return l})(),nr=(()=>{class l{static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275mod=_e({type:l})}static{this.\u0275inj=ve({imports:[Ct]})}}return l})();var ar=(()=>{class l{constructor(){}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-page-loader"]],decls:1,vars:0,consts:[["color","#3173D6"]],template:function(r,o){r&1&&k(0,"ngx-loading-bar",0)},dependencies:[nr,ir],encapsulation:2})}}return l})();var sr=(()=>{class l{constructor(){this._router=f(et),this._router.events.subscribe(i=>{i instanceof Ms&&(this.currentUrl=i.url.substring(i.url.lastIndexOf("/")+1)),i instanceof Ii,window.scrollTo(0,0)})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-root"]],features:[Je([])],decls:2,vars:0,template:function(r,o){r&1&&k(0,"app-page-loader")(1,"router-outlet")},dependencies:[Ts,Tt,ar],encapsulation:2})}}return l})();var Gd=["switch"],$d=["*"];function qd(l,d){l&1&&(g(0,"span",11),ss(),g(1,"svg",13),k(2,"path",14),m(),g(3,"svg",15),k(4,"path",16),m()())}var Zd=new K("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),qi=class{source;checked;constructor(d,i){this.source=d,this.checked=i}},Wn=(()=>{class l{_elementRef=f(we);_focusMonitor=f(Pi);_changeDetectorRef=f(Xt);defaults=f(Zd);_onChange=i=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(i){return new qi(this,i)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Hi();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(i){this._checked=i,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new U;toggleChange=new U;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){f(Yi).load(Vi);let i=f(new Di("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=i==null?0:parseInt(i)||0,this.color=r.color||"accent",this.id=this._uniqueId=f(Jt).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{i==="keyboard"||i==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):i||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(i){i.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(i){this.checked=!!i}registerOnChange(i){this._onChange=i}registerOnTouched(i){this._onTouched=i}validate(i){return this.required&&i.value!==!0?{required:!0}:null}registerOnValidatorChange(i){this._validatorOnChange=i}setDisabledState(i){this.disabled=i,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new qi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-slide-toggle"]],viewQuery:function(r,o){if(r&1&&Ci(Gd,5),r&2){let h;Mt(h=St())&&(o._switchElement=h.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(r,o){r&2&&(ms("id",o.id),he("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Me(o.color?"mat-"+o.color:""),ct("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",G],color:"color",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",i=>i==null?0:vs(i)],checked:[2,"checked","checked",G],hideIcon:[2,"hideIcon","hideIcon",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Je([{provide:Ei,useExisting:bi(()=>l),multi:!0},{provide:Fs,useExisting:l,multi:!0}]),ki],ngContentSelectors:$d,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,o){if(r&1&&(Zt(),g(0,"div",1)(1,"button",2,0),M("click",function(){return o._handleClick()}),k(3,"div",3)(4,"span",4),g(5,"span",5)(6,"span",6)(7,"span",7),k(8,"span",8),m(),g(9,"span",9),k(10,"span",10),m(),$(11,qd,5,0,"span",11),m()()(),g(12,"label",12),M("click",function(_){return _.stopPropagation()}),Qt(13),m()()),r&2){let h=ke(2);w("labelPosition",o.labelPosition),v(),ct("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),w("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),he("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(9),w("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),v(),q(o.hideIcon?-1:11),v(),w("for",o.buttonId),he("id",o._labelId)}},dependencies:[zi,Ps],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return l})(),rr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=_e({type:l});static \u0275inj=ve({imports:[Wn,Te]})}return l})();var nh=["button"],ah=["*"];function sh(l,d){if(l&1&&(g(0,"div",2),k(1,"mat-pseudo-checkbox",6),m()),l&2){let i=D();v(),w("disabled",i.disabled)}}var or=new K("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),lr=new K("MatButtonToggleGroup"),rh={provide:Ei,useExisting:bi(()=>jn),multi:!0},Zi=class{source;value;constructor(d,i){this.source=d,this.value=i}},jn=(()=>{class l{_changeDetector=f(Xt);_dir=f(Ds,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(i){this._name=i,this._markButtonsForCheck()}_name=f(Jt).getId("mat-button-toggle-group-");vertical=!1;get value(){let i=this._selectionModel?this._selectionModel.selected:[];return this.multiple?i.map(r=>r.value):i[0]?i[0].value:void 0}set value(i){this._setSelectionByValue(i),this.valueChange.emit(this.value)}valueChange=new U;get selected(){let i=this._selectionModel?this._selectionModel.selected:[];return this.multiple?i:i[0]||null}get multiple(){return this._multiple}set multiple(i){this._multiple=i,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(i){this._disabled=i,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(i){this._disabledInteractive=i,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new U;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(i){this._hideSingleSelectionIndicator=i,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(i){this._hideMultipleSelectionIndicator=i,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let i=f(or,{optional:!0});this.appearance=i&&i.appearance?i.appearance:"standard",this._hideSingleSelectionIndicator=i?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=i?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Us(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(i=>i.checked)),this.multiple||this._initializeTabIndex()}writeValue(i){this.value=i,this._changeDetector.markForCheck()}registerOnChange(i){this._controlValueAccessorChangeFn=i}registerOnTouched(i){this._onTouched=i}setDisabledState(i){this.disabled=i}_keydown(i){if(this.multiple||this.disabled||Es(i))return;let o=i.target.id,h=this._buttonToggles.toArray().findIndex(Y=>Y.buttonId===o),_=null;switch(i.keyCode){case 32:case 13:_=this._buttonToggles.get(h)||null;break;case 38:_=this._getNextButton(h,-1);break;case 37:_=this._getNextButton(h,this.dir==="ltr"?-1:1);break;case 40:_=this._getNextButton(h,1);break;case 39:_=this._getNextButton(h,this.dir==="ltr"?1:-1);break;default:return}_&&(i.preventDefault(),_._onButtonClick(),_.focus())}_emitChangeEvent(i){let r=new Zi(i,this.value);this._rawValue=r.value,this._controlValueAccessorChangeFn(r.value),this.change.emit(r)}_syncButtonToggle(i,r,o=!1,h=!1){!this.multiple&&this.selected&&!i.checked&&(this.selected.checked=!1),this._selectionModel?r?this._selectionModel.select(i):this._selectionModel.deselect(i):h=!0,h?Promise.resolve().then(()=>this._updateModelValue(i,o)):this._updateModelValue(i,o)}_isSelected(i){return this._selectionModel&&this._selectionModel.isSelected(i)}_isPrechecked(i){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(r=>i.value!=null&&r===i.value):i.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(i=>{i.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let i=0;i<this._buttonToggles.length;i++){let r=this._buttonToggles.get(i);if(!r.disabled){r.tabIndex=0;break}}}_getNextButton(i,r){let o=this._buttonToggles;for(let h=1;h<=o.length;h++){let _=(i+r*h+o.length)%o.length,Y=o.get(_);if(Y&&!Y.disabled)return Y}return null}_setSelectionByValue(i){if(this._rawValue=i,!this._buttonToggles)return;let r=this._buttonToggles.toArray();if(this.multiple&&i?(Array.isArray(i),this._clearSelection(),i.forEach(o=>this._selectValue(o,r))):(this._clearSelection(),this._selectValue(i,r)),!this.multiple&&r.every(o=>o.tabIndex===-1)){for(let o of r)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(i=>{i.checked=!1,this.multiple||(i.tabIndex=-1)})}_selectValue(i,r){for(let o of r)if(o.value===i){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(i,r){r&&this._emitChangeEvent(i),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(i=>i._markForCheck())}static \u0275fac=function(r){return new(r||l)};static \u0275dir=Fn({type:l,selectors:[["mat-button-toggle-group"]],contentQueries:function(r,o,h){if(r&1&&Yn(h,Qi,5),r&2){let _;Mt(_=St())&&(o._buttonToggles=_)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(r,o){r&1&&M("keydown",function(_){return o._keydown(_)}),r&2&&(he("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),ct("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",G],value:"value",multiple:[2,"multiple","multiple",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",G],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",G]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Je([rh,{provide:lr,useExisting:l}])]})}return l})(),Qi=(()=>{class l{_changeDetectorRef=f(Xt);_elementRef=f(we);_focusMonitor=f(Pi);_idGenerator=f(Jt);_animationDisabled=Hi();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(i){this._tabIndex.set(i)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(i){this._appearance=i}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(i){i!==this._checked&&(this._checked=i,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(i){this._disabled=i}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(i){this._disabledInteractive=i}_disabledInteractive;change=new U;constructor(){f(Yi).load(Vi);let i=f(lr,{optional:!0}),r=f(new Di("tabindex"),{optional:!0})||"",o=f(or,{optional:!0});this._tabIndex=os(parseInt(r)||0),this.buttonToggleGroup=i,this._appearance=o&&o.appearance?o.appearance:"standard",this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let i=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),i&&(i._isPrechecked(this)?this.checked=!0:i._isSelected(this)!==this._checked&&i._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let i=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),i&&i._isSelected(this)&&i._syncButtonToggle(this,!1,!1,!0)}focus(i){this._buttonElement.nativeElement.focus(i)}_onButtonClick(){if(this.disabled)return;let i=this.isSingleSelector()?!0:!this._checked;if(i!==this._checked&&(this._checked=i,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let r=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);r&&(r.tabIndex=-1),this.tabIndex=0}this.change.emit(new Zi(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-button-toggle"]],viewQuery:function(r,o){if(r&1&&Ci(nh,5),r&2){let h;Mt(h=St())&&(o._buttonElement=h.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(r,o){r&1&&M("focus",function(){return o.focus()}),r&2&&(he("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),ct("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",G],appearance:"appearance",checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:ah,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(r,o){if(r&1&&(Zt(),g(0,"button",1,0),M("click",function(){return o._onButtonClick()}),$(2,sh,2,1,"div",2),g(3,"span",3),Qt(4),m()(),k(5,"span",4)(6,"span",5)),r&2){let h=ke(1);w("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),he("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(2),q(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),v(4),w("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[zi,Ws],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return l})(),cr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=_e({type:l});static \u0275inj=ve({imports:[js,Qi,Te]})}return l})();var dt=l=>({active:l}),dr=(()=>{class l extends Oe{constructor(){super(...arguments),this.document=f(X),this.renderer=f(xe),this.elementRef=f(we),this.rightSidebarService=f(Ot),this.configService=f(tt),this.directionService=f(it),this.localStorageService=f(De),this.selectedBgColor="white",this.showpanel=!1,this.isDarkSidebar=!1,this.isDarTheme=!1,this.headerHeight=60,this.isRtl=!1}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.rightSidebarService.sidebarState.subscribe(i=>{this.isOpenSidebar=i}),this.setRightSidebarWindowHeight()}ngAfterViewInit(){this.selectedBgColor=this.localStorageService.get("choose_skin_active"),this.localStorageService.get("menuOption")&&(this.localStorageService.get("menuOption")==="menu_dark"?this.isDarkSidebar=!0:this.localStorageService.get("menuOption")==="menu_light"&&(this.isDarkSidebar=!1)),this.localStorageService.get("theme")&&(this.localStorageService.get("theme")==="dark"?this.isDarTheme=!0:this.localStorageService.get("theme")==="light"&&(this.isDarTheme=!1)),this.localStorageService.get("isRtl")&&(this.isRtl=this.localStorageService.get("isRtl")==="true")}selectTheme(i){this.selectedBgColor=i;let r=this.elementRef.nativeElement.querySelector(".settingSidebar .choose-theme li.active").getAttribute("data-theme");this.renderer.removeClass(this.document.body,"theme-"+r),this.renderer.addClass(this.document.body,"theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin","theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin_active",this.selectedBgColor)}lightSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white");let i="menu_light";this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("menuOption",i)}darkSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black");let i="menu_dark";this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("menuOption",i)}lightThemeBtnClick(){this.renderer.removeClass(this.document.body,"dark"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"light"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"theme-white");let i="light",r="menu_light";this.selectedBgColor="white",this.isDarkSidebar=!1,this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("choose_skin","theme-white"),this.localStorageService.set("theme",i),this.localStorageService.set("menuOption",r)}darkThemeBtnClick(){this.renderer.removeClass(this.document.body,"light"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"dark"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"theme-black");let i="dark",r="menu_dark";this.selectedBgColor="black",this.isDarkSidebar=!0,this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("choose_skin","theme-black"),this.localStorageService.set("theme",i),this.localStorageService.set("menuOption",r)}setRightSidebarWindowHeight(){this.innerHeight=window.innerHeight;let i=this.innerHeight-this.headerHeight;this.maxHeight=i+"",this.maxWidth="500px"}onClickedOutside(i){i.target.id!=="settingBtn"&&this.isOpenSidebar===!0&&this.toggleRightSidebar()}toggleRightSidebar(){this.rightSidebarService.setRightSidebar(this.isOpenSidebar=!this.isOpenSidebar)}switchDirection(i){let r=String(i.checked);r==="false"&&document.getElementsByTagName("html")[0].hasAttribute("dir")?(document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.directionService.updateDirection("ltr")):r==="true"&&!document.getElementsByTagName("html")[0].hasAttribute("dir")&&(document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.directionService.updateDirection("rtl")),this.localStorageService.set("isRtl",r),this.isRtl=i.checked}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.isRtl=!0,this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.isRtl=!1,this.localStorageService.set("isRtl","false")}static{this.\u0275fac=(()=>{let i;return function(o){return(i||(i=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-right-sidebar"]],features:[ne],decls:60,vars:31,consts:[[1,"settingSidebar",3,"ngClass"],["href","javascript:void(0)",1,"settingPanelToggle",3,"click"],[3,"icon"],["visibility","hover"],[1,"settingSidebar-body","ps-container","ps-theme-default"],[1,"fade","show","active"],[1,"setting-panel-header"],[1,"p-15","border-bottom","rightSetting"],[1,"font-medium","m-b-10"],[1,"flex","flex-wrap","hiddenradio"],[1,"flex","flex-col"],["type","radio","name","value","value","light",3,"click","checked"],["src","assets/images/light.png"],[1,"mt-1","text-md","text-center"],[1,"flex","flex-col","mt-3"],["type","radio","name","value","value","dark",3,"click","checked"],["src","assets/images/dark.png"],[1,"rightSetting"],[1,"mt-2",3,"value"],["value","light",3,"click"],["value","dark",3,"click"],[1,"theme-setting-options"],[1,"choose-theme","list-unstyled","mb-0"],["data-theme","white",3,"click","ngClass"],[1,"white"],["data-theme","black",3,"click","ngClass"],[1,"black"],["data-theme","purple",3,"click","ngClass"],[1,"purple"],["data-theme","orange",3,"click","ngClass"],[1,"orange"],["data-theme","cyan",3,"click","ngClass"],[1,"cyan"],["data-theme","green",3,"click","ngClass"],[1,"green"],["data-theme","blue",3,"click","ngClass"],[1,"blue"],[1,"mt-2",3,"change","checked"],[1,"rtl-direction-label"]],template:function(r,o){r&1&&(g(0,"div",0)(1,"a",1),M("click",function(){return o.toggleRightSidebar()}),k(2,"app-feather-icons",2),m(),g(3,"ng-scrollbar",3)(4,"div",4)(5,"div",5)(6,"div",6),C(7,"Setting Panel "),m(),g(8,"div",7)(9,"p",8),C(10,"Select Layout"),m(),g(11,"div",9)(12,"div",10)(13,"label")(14,"input",11),M("click",function(){return o.lightThemeBtnClick()}),m(),k(15,"img",12),m(),g(16,"div",13),C(17," Light "),m()(),g(18,"div",14)(19,"label")(20,"input",15),M("click",function(){return o.darkThemeBtnClick()}),m(),k(21,"img",16),m(),g(22,"div",13),C(23," Dark "),m()()()(),g(24,"div",17)(25,"p",8),C(26,"Sidebar Menu Color"),m(),g(27,"mat-button-toggle-group",18)(28,"mat-button-toggle",19),M("click",function(){return o.lightSidebarBtnClick()}),C(29,"Light"),m(),g(30,"mat-button-toggle",20),M("click",function(){return o.darkSidebarBtnClick()}),C(31,"Dark"),m()()(),g(32,"div",7)(33,"p",8),C(34,"Color Theme"),m(),g(35,"div",21)(36,"ul",22)(37,"li",23),M("click",function(){return o.selectTheme("white")}),k(38,"div",24),m(),g(39,"li",25),M("click",function(){return o.selectTheme("black")}),k(40,"div",26),m(),g(41,"li",27),M("click",function(){return o.selectTheme("purple")}),k(42,"div",28),m(),g(43,"li",29),M("click",function(){return o.selectTheme("orange")}),k(44,"div",30),m(),g(45,"li",31),M("click",function(){return o.selectTheme("cyan")}),k(46,"div",32),m(),g(47,"li",33),M("click",function(){return o.selectTheme("green")}),k(48,"div",34),m(),g(49,"li",35),M("click",function(){return o.selectTheme("blue")}),k(50,"div",36),m()()()(),g(51,"div",17)(52,"p",8),C(53,"RTL Layout"),m(),g(54,"mat-slide-toggle",37),M("change",function(_){return o.switchDirection(_)}),m(),g(55,"div",38)(56,"span"),C(57,"LTR"),m(),g(58,"span"),C(59,"RTL"),m()()()()()()()),r&2&&(w("ngClass",o.isOpenSidebar?"showSettingPanel":""),v(2),Me("setting-sidebar-icon"),w("icon","settings"),v(),ue("height",o.maxHeight+"px"),v(11),w("checked",o.isDarTheme===!1),v(6),w("checked",o.isDarTheme===!0),v(7),w("value",o.isDarkSidebar?"dark":"light"),v(10),w("ngClass",P(17,dt,o.selectedBgColor==="white")),v(2),w("ngClass",P(19,dt,o.selectedBgColor==="black")),v(2),w("ngClass",P(21,dt,o.selectedBgColor==="purple")),v(2),w("ngClass",P(23,dt,o.selectedBgColor==="orange")),v(2),w("ngClass",P(25,dt,o.selectedBgColor==="cyan")),v(2),w("ngClass",P(27,dt,o.selectedBgColor==="green")),v(2),w("ngClass",P(29,dt,o.selectedBgColor==="blue")),v(5),w("checked",o.isRtl))},dependencies:[Ce,At,Bt,cr,jn,Qi,rr,Wn],encapsulation:2,changeDetection:0})}}return l})();var hr=(()=>{class l{constructor(){this.http=f(Ke)}getRouteInfo(){return this.http.get("assets/data/routes.json").pipe(Qe(i=>i.routes))}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Be=l=>[l];function lh(l,d){if(l&1&&(g(0,"div",16),C(1),We(2,"translate"),m()),l&2){let i=D(2).$implicit;v(),ae(je(2,1,i.title))}}function ch(l,d){if(l&1&&(g(0,"span",20),C(1),m()),l&2){let i=D(3).$implicit;w("ngClass",P(2,Be,i.badgeClass)),v(),ae(i.badge)}}function dh(l,d){if(l&1){let i=be();g(0,"a",19),M("click",function(o){ce(i);let h=D(2).$implicit,_=D();return de(_.callToggleMenu(o,h.submenu.length))}),g(1,"i",20),C(2),m(),g(3,"span",14),C(4),We(5,"translate"),m(),$(6,ch,2,4,"span",20),m()}if(l&2){let i=D(2).$implicit;w("routerLink",i.class===""?P(8,Be,i.path):null)("ngClass",P(10,Be,i.class)),v(),w("ngClass",P(12,Be,i.iconType)),v(),ae(i.icon),v(2),Se("",je(5,6,i.title)," "),v(2),q(i.badge!==""?6:-1)}}function hh(l,d){if(l&1){let i=be();g(0,"li",15)(1,"a",21),M("click",function(o){let h=ce(i).$implicit,_=D(8);return de(_.callToggleMenu(o,h.submenu.length))}),C(2),We(3,"translate"),m()()}if(l&2){let i=d.$implicit;w("routerLinkActive",i.submenu.length>0?"":"active"),v(),w("routerLink",i.submenu.length>0?null:P(6,Be,i.path))("ngClass",P(8,Be,i.class)),v(),Se(" ",je(3,4,i.title)," ")}}function uh(l,d){if(l&1&&(g(0,"ul",23),ze(1,hh,4,10,"li",15,Ve),m()),l&2){let i=D().$implicit;v(),Ue(i.submenu)}}function gh(l,d){if(l&1){let i=be();g(0,"li",15)(1,"a",21),M("click",function(o){let h=ce(i).$implicit,_=D(6);return de(_.callToggleMenu(o,h.submenu.length))}),C(2),We(3,"translate"),m(),$(4,uh,3,0,"ul",23),m()}if(l&2){let i=d.$implicit;w("routerLinkActive",i.submenu.length>0?"":"active"),v(),w("routerLink",i.submenu.length>0?null:P(7,Be,i.path))("ngClass",P(9,Be,i.class)),v(),Se(" ",je(3,5,i.title)," "),v(2),q(i.submenu.length>0?4:-1)}}function mh(l,d){if(l&1&&(g(0,"ul",22),ze(1,gh,5,11,"li",15,Ve),m()),l&2){let i=D().$implicit;v(),Ue(i.submenu)}}function ph(l,d){if(l&1){let i=be();g(0,"li",15)(1,"a",21),M("click",function(o){let h=ce(i).$implicit,_=D(4);return de(_.callToggleMenu(o,h.submenu.length))}),C(2),We(3,"translate"),m(),$(4,mh,3,0,"ul",22),m()}if(l&2){let i=d.$implicit;w("routerLinkActive",i.submenu.length>0?"":"active"),v(),w("routerLink",i.submenu.length>0?null:P(7,Be,i.path))("ngClass",P(9,Be,i.class)),v(),Se(" ",je(3,5,i.title)," "),v(2),q(i.submenu.length>0?4:-1)}}function fh(l,d){if(l&1&&(g(0,"ul",18),ze(1,ph,5,11,"li",15,Ve),m()),l&2){let i=D(2).$implicit;v(),Ue(i.submenu)}}function vh(l,d){if(l&1&&(g(0,"li",15),$(1,lh,3,3,"div",16),$(2,dh,7,14,"a",17),$(3,fh,3,0,"ul",18),m()),l&2){let i=D().$implicit;w("routerLinkActive",i.submenu.length!==0?"active":"active-top"),v(),q(i.groupTitle===!0?1:-1),v(),q(i.groupTitle?-1:2),v(),q(i.submenu.length>0?3:-1)}}function wh(l,d){if(l&1&&lt(0,vh,4,4,"ng-template",11),l&2){let i=d.$implicit;w("ngxPermissionsOnly",i.role)}}var ur=(()=>{class l extends Oe{constructor(){super(),this.document=f(X),this.renderer=f(xe),this.elementRef=f(we),this.authService=f(Dt),this.router=f(et),this.sidebarService=f(hr),this.headerHeight=60,this.elementRef.nativeElement.closest("body"),this.subs.sink=this.router.events.subscribe(i=>{i instanceof Ii&&this.renderer.removeClass(this.document.body,"overlay-open")})}windowResizecall(i){this.setMenuHeight(),this.checkStatuForResize(!1)}onGlobalClick(i){this.elementRef.nativeElement.contains(i.target)||this.renderer.removeClass(this.document.body,"overlay-open")}callToggleMenu(i,r){if(r>0){let o=i.target.closest("li");o?.classList.contains("active")?this.renderer.removeClass(o,"active"):this.renderer.addClass(o,"active")}}ngOnInit(){this.subs.sink=this.authService.user$.subscribe(i=>{if(i&&Object.keys(i).length>0){let r=i.roles?.[0]?.name;this.userFullName=i.name||i.firstName+" "+i.lastName,this.userImg="./assets/images/user/"+(i.avatar||"user.jpg"),r===j.Admin?this.userType=this.capitalizeString(j.Admin):r===j.Teacher?this.userType=this.capitalizeString(j.Teacher):r===j.Student?this.userType=this.capitalizeString(j.Student):this.userType=this.capitalizeString(j.Admin)}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.subs.sink=this.sidebarService.getRouteInfo().subscribe(i=>{this.sidebarItems=i}),this.initLeftSidebar(),this.bodyTag=this.document.body}initLeftSidebar(){this.setMenuHeight(),this.checkStatuForResize(!0)}setMenuHeight(){this.innerHeight=window.innerHeight;let i=this.innerHeight-this.headerHeight;this.listMaxHeight=i+"",this.listMaxWidth="500px"}isOpen(){return this.bodyTag.classList.contains("overlay-open")}checkStatuForResize(i){window.innerWidth<1025?this.renderer.addClass(this.document.body,"ls-closed"):this.renderer.removeClass(this.document.body,"ls-closed")}mouseHover(){this.elementRef.nativeElement.closest("body").classList.contains("submenu-closed")&&(this.renderer.addClass(this.document.body,"side-closed-hover"),this.renderer.removeClass(this.document.body,"submenu-closed"))}mouseOut(){this.elementRef.nativeElement.closest("body").classList.contains("side-closed-hover")&&(this.renderer.removeClass(this.document.body,"side-closed-hover"),this.renderer.addClass(this.document.body,"submenu-closed"))}logout(){this.subs.sink=this.authService.logout().subscribe(i=>{i.success||this.router.navigate(["/authentication/signin"])})}capitalizeString(i){return i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-sidebar"]],hostBindings:function(r,o){r&1&&M("resize",function(_){return o.windowResizecall(_)},ds)("mousedown",function(_){return o.onGlobalClick(_)},hs)},features:[ne],decls:22,vars:6,consts:[["id","leftsidebar",1,"sidebar",3,"mouseenter","mouseleave"],[1,"menu"],["visibility","hover"],[1,"list"],[1,"sidebar-user-panel"],[1,"user-panel"],[1,"image"],["alt","User Image",1,"img-circle","user-img-circle",3,"src"],[1,"profile-usertitle"],[1,"sidebar-userpic-name"],[1,"profile-usertitle-job"],[3,"ngxPermissionsOnly"],[1,"menu-top",3,"click"],[1,"material-icons-outlined"],[1,"hide-menu"],[3,"routerLinkActive"],[1,"header"],[1,"menu-top",3,"routerLink","ngClass"],[1,"ml-menu"],[1,"menu-top",3,"click","routerLink","ngClass"],[3,"ngClass"],[3,"click","routerLink","ngClass"],[1,"ml-menu-2"],[1,"ml-menu-3"]],template:function(r,o){r&1&&(g(0,"div")(1,"aside",0),M("mouseenter",function(){return o.mouseHover()})("mouseleave",function(){return o.mouseOut()}),g(2,"div",1)(3,"ng-scrollbar",2)(4,"ul",3)(5,"li",4)(6,"div",5)(7,"div",6),k(8,"img",7),m()(),g(9,"div",8)(10,"div",9),C(11),m(),g(12,"div",10),C(13),m()()(),ze(14,wh,1,1,null,11,Ve),g(16,"li")(17,"a",12),M("click",function(){return o.logout()}),g(18,"i",13),C(19,"power_settings_new"),m(),g(20,"span",14),C(21,"Logout "),m()()()()()()()()),r&2&&(v(3),ue("height",o.listMaxHeight+"px"),v(5),w("src",Ti(o.userImg),ye),v(3),Se("",o.userFullName," "),v(2),Se("",o.userType," "),v(),Ue(o.sidebarItems))},dependencies:[Bt,Ss,Ri,Ce,Rs,Fi,Ls,As],encapsulation:2})}}return l})();var gr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=_e({type:l});static \u0275inj=ve({imports:[Te]})}return l})();var yh=(l,d)=>[l,d],xh=l=>[l];function _h(l,d){if(l&1&&(g(0,"span",3),C(1),m()),l&2){let i=D();v(),ae(i.unreadCount)}}function bh(l,d){if(l&1&&k(0,"img",19),l&2){let i=D().$implicit;w("src",i.userImg,ye)}}function kh(l,d){if(l&1&&(g(0,"i",20),C(1),m()),l&2){let i=D().$implicit;w("ngClass",P(2,xh,i.color)),v(),ae(i.icon)}}function Mh(l,d){if(l&1){let i=be();g(0,"button",27),M("click",function(o){ce(i);let h=D().$implicit,_=D();return o.stopPropagation(),de(_.onActionClick(h))}),C(1),m()}if(l&2){let i=D().$implicit;v(),Se(" ",i.actionLabel," ")}}function Sh(l,d){if(l&1){let i=be();g(0,"button",15),M("click",function(){let o=ce(i).$implicit,h=D();return de(h.markAsRead(o))}),g(1,"span",16)(2,"div",17)(3,"span",18),$(4,bh,1,1,"img",19)(5,kh,2,4,"i",20),m(),g(6,"div")(7,"span",21),C(8),m(),g(9,"span",22)(10,"i",23),C(11,"access_time"),m(),C(12),m(),$(13,Mh,2,1,"button",24),m()()(),g(14,"span",25),M("click",function(o){let h=ce(i).$implicit,_=D();return o.stopPropagation(),de(_.removeNotification(h))}),k(15,"app-feather-icons",26),m()()}if(l&2){let i=d.$implicit,r=D();w("ngClass",ps(9,yh,i.status,r.isRemoving(i)?"notification-removing":""))("@notificationAnimation",r.isRemoving(i)?"void":""),v(4),q(i.userImg?4:5),v(4),ae(i.message),v(4),Se(" ",i.time," "),v(),q(i.actionLabel?13:-1),v(2),Me("user-menu-icons"),w("icon","x")}}var pr=(()=>{class l{constructor(){this.notifications=[],this.markAllAsRead=new U,this.readAll=new U,this.closeNotification=new U,this.actionClick=new U,this.markAsReadEvent=new U,this.removingNotification=null,this.unreadCount=0}ngOnInit(){this.updateUnreadCount()}ngOnChanges(i){i.notifications&&this.updateUnreadCount()}updateUnreadCount(){this.unreadCount=this.notifications.filter(i=>i.status==="msg-unread").length}markAll(){this.markAllAsRead.emit(),this.notifications.forEach(i=>{i.status="msg-read"}),this.updateUnreadCount()}readAllNotifications(){this.readAll.emit(),this.updateUnreadCount()}removeNotification(i){this.removingNotification=i,i.status==="msg-unread"&&(i.status="msg-read",this.updateUnreadCount()),setTimeout(()=>{this.closeNotification.emit(i),this.removingNotification=null},500)}isRemoving(i){return this.removingNotification===i}markAsRead(i){i.status==="msg-unread"&&(i.status="msg-read",this.updateUnreadCount(),this.markAsReadEvent.emit(i))}onActionClick(i){this.actionClick.emit({notification:i,actionType:i.actionType||"default"}),i.status==="msg-unread"&&(i.status="msg-read",this.updateUnreadCount())}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-notification-list"]],inputs:{notifications:"notifications"},outputs:{markAllAsRead:"markAllAsRead",readAll:"readAll",closeNotification:"closeNotification",actionClick:"actionClick",markAsReadEvent:"markAsReadEvent"},features:[ki],decls:21,vars:2,consts:[["notificationMenu","matMenu"],["mat-icon-button","",1,"nav-notification-icons",3,"matMenuTriggerFor"],[1,"material-icons-outlined","icon-color"],[1,"notification-badge"],[1,"notification-menu"],[1,"notification-header"],[1,"mb-0"],[1,"notification-mark-as-read",3,"click"],[1,"notification-dropdown"],["visibility","hover",2,"height","350px"],[1,"noti-list"],[1,"menu"],["mat-menu-item","","onClick","return false;",3,"ngClass"],[1,"notification-footer"],[1,"notification-read-all",3,"click"],["mat-menu-item","","onClick","return false;",3,"click","ngClass"],[1,"menu-info"],[1,"notification-content-row"],[1,"table-img","msg-user"],["alt","User",1,"user-avatar",3,"src"],[1,"material-icons-outlined","notification-type-icon",3,"ngClass"],[1,"menu-title"],[1,"menu-desc"],[1,"material-icons"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2"],[1,"notification-close",3,"click"],[3,"icon"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2",3,"click"]],template:function(r,o){if(r&1&&(g(0,"button",1)(1,"i",2),C(2,"notifications_active"),m(),$(3,_h,2,1,"span",3),m(),g(4,"mat-menu",4,0)(6,"div",5)(7,"h6",6),C(8,"Notifications"),m(),g(9,"a",7),M("click",function(){return o.markAll()}),C(10,"Mark all as read"),m()(),g(11,"div",8)(12,"ng-scrollbar",9)(13,"div",10)(14,"div",11)(15,"div"),ze(16,Sh,16,12,"button",12,Ve),m()()()()(),g(18,"div",13)(19,"a",14),M("click",function(){return o.readAllNotifications()}),C(20,"Read All Notifications"),m()()()),r&2){let h=ke(5);w("matMenuTriggerFor",h),v(3),q(o.unreadCount>0?3:-1),v(13),Ue(o.notifications)}},dependencies:[at,Lt,Rt,Nt,Bt,At,Ct,Ce,nt,Ui,It],styles:[".notification-content-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]{flex-direction:row-reverse;width:100%;justify-content:flex-start}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:none;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .notification-type-icon[_ngcontent-%COMP%]{font-size:26px;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:block;width:100%;text-align:right}.menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.rtl[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]{text-align:right}.notification-action-btn[_ngcontent-%COMP%]{min-width:120px;width:auto;align-self:flex-start}.rtl[_ngcontent-%COMP%]   .notification-action-btn[_ngcontent-%COMP%]{align-self:flex-end;margin-right:auto;margin-left:0}"],data:{animation:[Ys("notificationAnimation",[zs(":leave",[Hs("0.5s ease-out",Vs({opacity:0,transform:"translateX(30px)"}))])])]}})}}return l})();var Ch=l=>({active:l});function Th(l,d){if(l&1&&k(0,"img",2),l&2){let i=D();w("src",i.flagvalue,ye)}}function Dh(l,d){if(l&1&&k(0,"img",2),l&2){let i=D();w("src",i.defaultFlag,ye)}}function Oh(l,d){if(l&1){let i=be();g(0,"div",4)(1,"button",5),M("click",function(){let o=ce(i).$implicit,h=D();return de(h.setLanguage(o))}),k(2,"img",6),g(3,"span",7),C(4),m()()()}if(l&2){let i=d.$implicit,r=D();v(),w("ngClass",P(3,Ch,r.langStoreValue===i.lang)),v(),w("src",i.flag,ye),v(2),ae(i.text)}}var fr=(()=>{class l{constructor(){this.listLang=[],this.languageSelected=new U}setLanguage(i){this.languageSelected.emit(i)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-language-list"]],inputs:{flagvalue:"flagvalue",defaultFlag:"defaultFlag",listLang:"listLang",langStoreValue:"langStoreValue"},outputs:{languageSelected:"languageSelected"},decls:7,vars:2,consts:[["languagemenu","matMenu"],["mat-icon-button","",1,"lang-dropdown","nav-notification-icons",3,"matMenuTriggerFor"],["height","16",3,"src"],[1,"lang-item-menu"],[1,"lang-item"],["mat-menu-item","",1,"dropdown-item","lang-item-list",3,"click","ngClass"],["height","12",1,"flag-img",3,"src"],[1,"align-middle"]],template:function(r,o){if(r&1&&(g(0,"button",1),$(1,Th,1,1,"img",2)(2,Dh,1,1,"img",2),m(),g(3,"mat-menu",3,0),ze(5,Oh,5,5,"div",4,Ve),m()),r&2){let h=ke(4);w("matMenuTriggerFor",h),v(),q(o.flagvalue!==void 0?1:2),v(4),Ue(o.listLang)}},dependencies:[at,Lt,Rt,Nt,Ct,Ce,nt,It],encapsulation:2})}}return l})();var vr=(()=>{class l{constructor(){this.userName="",this.userImg="",this.accountClicked=new U,this.inboxClicked=new U,this.settingsClicked=new U,this.logoutClicked=new U}onAccountClick(){this.accountClicked.emit()}onInboxClick(){this.inboxClicked.emit()}onSettingsClick(){this.settingsClicked.emit()}onLogoutClick(){this.logoutClicked.emit()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-user-profile-menu"]],inputs:{userName:"userName",userImg:"userImg"},outputs:{accountClicked:"accountClicked",inboxClicked:"inboxClicked",settingsClicked:"settingsClicked",logoutClicked:"logoutClicked"},decls:16,vars:9,consts:[["profilemenu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],[1,"user-profile-img"],["width","32","height","32","alt","User",1,"user_img",3,"src"],[1,"profile-menu"],[1,"noti-list"],[1,"menu"],[1,"user_dw_menu"],["mat-menu-item","",1,"user-item-list",3,"click"],[3,"icon"]],template:function(r,o){if(r&1&&(g(0,"button",1)(1,"div",2)(2,"span"),C(3),m(),k(4,"img",3),m()(),g(5,"mat-menu",4,0)(7,"div",5)(8,"div",6)(9,"div",7)(10,"button",8),M("click",function(){return o.onAccountClick()}),k(11,"app-feather-icons",9),C(12," Account "),m(),g(13,"button",8),M("click",function(){return o.onLogoutClick()}),k(14,"app-feather-icons",9),C(15," Logout "),m()()()()()),r&2){let h=ke(6);w("matMenuTriggerFor",h),v(3),ae(o.userName),v(),w("src",o.userImg,ye),v(7),Me("user-menu-icons"),w("icon","user"),v(3),Me("user-menu-icons"),w("icon","log-out")}},dependencies:[at,Lt,Rt,Nt,At,nt,Ui],encapsulation:2})}}return l})();var wr=(()=>{class l{constructor(){this.http=f(Ke)}getNotifications(){return this.http.get("/api/notifications")}markAsRead(i){return this.http.patch(`/api/notifications/${i}/read`,{})}markAllAsRead(){return this.http.patch("/api/notifications/read-all",{})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var yr=(()=>{class l extends Oe{constructor(){super(...arguments),this.document=f(X),this.renderer=f(xe),this.elementRef=f(we),this.rightSidebarService=f(Ot),this.configService=f(tt),this.authService=f(Dt),this.router=f(et),this.languageService=f(Ni),this.localStorageService=f(De),this.notificationsService=f(wr),this.isNavbarCollapsed=!0,this.countryName=[],this.isFullScreen=!1,this.listLang=[{text:"English",flag:"assets/images/flags/us.svg",lang:"en"},{text:"Spanish",flag:"assets/images/flags/spain.svg",lang:"es"},{text:"German",flag:"assets/images/flags/germany.svg",lang:"de"}],this.notifications=[]}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.authService.user$.subscribe(r=>{if(r&&Object.keys(r).length>0){this.userImg="./assets/images/user/"+(r.avatar||"user.jpg");let o=r;this.userName=o.name||(o.firstName?o.firstName+" "+o.lastName:"User");let h=r.roles?.[0]?.name;h===j.Admin?this.homePage="admin/dashboard/main":h===j.Teacher?this.homePage="teacher/dashboard":h===j.Student?this.homePage="student/dashboard":this.homePage="admin/dashboard/main"}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.docElement=document.documentElement,this.langStoreValue=this.localStorageService.get("lang");let i=this.listLang.filter(r=>r.lang===this.langStoreValue);this.countryName=i.map(r=>r.text),i.length===0?this.flagvalue===void 0&&(this.defaultFlag="assets/images/flags/us.svg"):this.flagvalue=i.map(r=>r.flag),this.loadNotifications()}loadNotifications(){this.notificationsService.getNotifications().subscribe(i=>{this.notifications=i.map(r=>({id:r._id,message:r.message,time:new Date(r.createdAt).toLocaleDateString(),icon:r.type==="INFO"?"info":r.type==="SUCCESS"?"check_circle":"warning",color:r.type==="INFO"?"notification-blue":r.type==="SUCCESS"?"notification-green":"notification-red",status:r.read?"msg-read":"msg-unread"}))})}onMarkAllNotificationsRead(){this.notificationsService.markAllAsRead().subscribe(()=>{this.loadNotifications()})}onMarkNotificationRead(i){i.id&&this.notificationsService.markAsRead(i.id).subscribe()}onReadAllNotifications(){alert("Navigating to notifications page to read all")}onRemoveNotification(i){this.notifications=this.notifications.filter(r=>r!==i)}onNotificationActionClick(i){let{notification:r,actionType:o}=i;switch(o){case"view":console.log("Viewing notification:",r);break;case"profile":console.log("Opening profile from notification:",r);break;case"reply":console.log("Replying to notification:",r);break;case"download":console.log("Downloading from notification:",r);break;case"mark-important":console.log("Marking notification as important:",r);break;default:console.log("Default action for notification:",r)}}callFullscreen(){this.isFullScreen?document.exitFullscreen():this.docElement?.requestFullscreen!=null&&this.docElement?.requestFullscreen(),this.isFullScreen=!this.isFullScreen}setLanguage(i,r,o){this.countryName=i,this.flagvalue=o,this.langStoreValue=r,this.languageService.setLanguage(r)}mobileMenuSidebarOpen(i,r){i.target.classList.contains(r)?this.renderer.removeClass(this.document.body,r):this.renderer.addClass(this.document.body,r)}callSidemenuCollapse(){this.document.body.classList.contains("side-closed")?(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","true"))}logout(){this.subs.sink=this.authService.logout().subscribe(i=>{i.success||this.router.navigate(["/authentication/signin"])})}onLanguageChange(i){this.countryName=i.text,this.flagvalue=i.flag,this.langStoreValue=i.lang,this.languageService.setLanguage(i.lang),this.localStorageService.set("lang",i.lang)}onAccountClicked(){let i=this.authService.currentUserValue.roles?.[0]?.name;i===j.Teacher?this.router.navigate(["/teacher/profile"]):i===j.Student?this.router.navigate(["/student/profile"]):this.router.navigate(["/admin/profile"])}onInboxClicked(){this.router.navigate(["/email/inbox"])}onSettingsClicked(){this.router.navigate(["/extra-pages/faqs"])}static{this.\u0275fac=(()=>{let i;return function(o){return(i||(i=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-header"]],features:[ne],decls:27,vars:10,consts:[["navbar",""],[1,"navbar","active"],[1,"container-fluid"],[1,"navbar-header"],["href","#","onClick","return false;","aria-expanded","false",1,"navbar-toggle","collapsed",3,"click"],["href","#","onClick","return false;",1,"bars",3,"click"],[1,"navbar-brand",3,"routerLink"],["src","assets/images/logo.png","alt","",2,"width","40px"],[1,"logo-name"],[1,"collapse","navbar-collapse",3,"ngClass"],[1,"float-start","collapse-menu-icon"],["mat-icon-button","",1,"sidemenu-collapse","nav-notification-icons",3,"click"],[1,"material-icons-outlined","icon-color"],[1,"nav","navbar-nav","navbar-right"],[1,"fullscreen"],["mat-icon-button","",1,"nav-notification-icons",3,"click"],[3,"markAllAsRead","readAll","closeNotification","actionClick","markAsReadEvent","notifications"],[1,"nav-item"],[3,"languageSelected","flagvalue","defaultFlag","listLang","langStoreValue"],[1,"nav-item","user_profile"],[3,"accountClicked","inboxClicked","settingsClicked","logoutClicked","userName","userImg"]],template:function(r,o){r&1&&(g(0,"nav",1,0)(2,"div",2)(3,"div",3)(4,"a",4),M("click",function(){return o.isNavbarCollapsed=!o.isNavbarCollapsed}),m(),g(5,"a",5),M("click",function(_){return o.mobileMenuSidebarOpen(_,"overlay-open")}),m(),g(6,"a",6),k(7,"img",7),g(8,"span",8),C(9,"Smart"),m()()(),g(10,"div",9)(11,"ul",10)(12,"li")(13,"button",11),M("click",function(){return o.callSidemenuCollapse()}),g(14,"i",12),C(15," menu "),m()()()(),g(16,"ul",13)(17,"li",14)(18,"button",15),M("click",function(){return o.callFullscreen()}),g(19,"i",12),C(20," fullscreen "),m()()(),g(21,"li")(22,"app-notification-list",16),M("markAllAsRead",function(){return o.onMarkAllNotificationsRead()})("readAll",function(){return o.onReadAllNotifications()})("closeNotification",function(_){return o.onRemoveNotification(_)})("actionClick",function(_){return o.onNotificationActionClick(_)})("markAsReadEvent",function(_){return o.onMarkNotificationRead(_)}),m()(),g(23,"li",17)(24,"app-language-list",18),M("languageSelected",function(_){return o.onLanguageChange(_)}),m()(),g(25,"li",19)(26,"app-user-profile-menu",20),M("accountClicked",function(){return o.onAccountClicked()})("inboxClicked",function(){return o.onInboxClicked()})("settingsClicked",function(){return o.onSettingsClicked()})("logoutClicked",function(){return o.logout()}),m()()()()()()),r&2&&(v(6),w("routerLink",Ti(o.homePage)),v(4),w("ngClass",o.isNavbarCollapsed?"":"show"),v(12),w("notifications",o.notifications),v(2),w("flagvalue",o.flagvalue)("defaultFlag",o.defaultFlag)("listLang",o.listLang)("langStoreValue",o.langStoreValue),v(2),w("userName",o.userName||"User")("userImg",o.userImg))},dependencies:[Ri,Ce,nt,It,$s,gr,pr,at,fr,vr],encapsulation:2})}}return l})();var xr=(()=>{class l extends Oe{constructor(){super(),this.directoryService=f(it),this.configService=f(tt),this.document=f(X),this.renderer=f(xe),this.localStorageService=f(De),this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(i=>{i?this.direction=i==="ltr"?"ltr":"rtl":this.localStorageService.get("isRtl")?this.direction=this.localStorageService.get("isRtl")==="true"?"rtl":"ltr":this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",this.localStorageService.set("isRtl","true")):(this.direction="ltr",this.localStorageService.set("isRtl","false")))})}ngAfterViewInit(){this.localStorageService.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,this.localStorageService.get("theme"))):(this.renderer.addClass(this.document.body,this.config.layout.variant),this.localStorageService.set("theme",this.config.layout.variant)),this.localStorageService.get("choose_skin")?(this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,this.localStorageService.get("choose_skin")),this.localStorageService.set("choose_skin_active",this.localStorageService.get("choose_skin").substring(6))):(this.renderer.addClass(this.document.body,"theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin","theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin_active",this.config.layout.theme_color)),this.localStorageService.get("isRtl")?this.localStorageService.get("isRtl")==="true"?this.setRTLSettings():this.localStorageService.get("isRtl")==="false"&&this.setLTRSettings():this.config.layout.rtl==!0?this.setRTLSettings():this.setLTRSettings(),this.localStorageService.get("menuOption")?this.renderer.addClass(this.document.body,this.localStorageService.get("menuOption")):(this.renderer.addClass(this.document.body,"menu_"+this.config.layout.sidebar.backgroundColor),this.localStorageService.set("menuOption","menu_"+this.config.layout.sidebar.backgroundColor)),this.localStorageService.get("choose_logoheader")?this.renderer.addClass(this.document.body,this.localStorageService.get("choose_logoheader")):this.renderer.addClass(this.document.body,"logo-"+this.config.layout.logo_bg_color),this.localStorageService.get("collapsed_menu")?this.localStorageService.get("collapsed_menu")==="true"&&(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed")):this.config.layout.sidebar.collapsed==!0?(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false"))}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","false")}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-main-layout"]],features:[Je([Ot]),ne],decls:5,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(k(0,"app-header")(1,"app-sidebar")(2,"app-right-sidebar"),g(3,"div",0),k(4,"router-outlet"),m()),r&2&&(v(3),w("dir",o.direction))},dependencies:[yr,ur,dr,Te,Li,Tt],encapsulation:2})}}return l})();var ei=(()=>{class l{constructor(){this.router=f(et),this.store=f(De)}canActivate(i,r){let o=this.store.get("currentUser");if(o){let h=o.roles?.[0]?.name;return h?i.data.role&&i.data.role.indexOf(h)===-1?(this.router.navigate(["/authentication/signin"]),!1):!0:(this.router.navigate(["/authentication/signin"]),!1)}return this.router.navigate(["/authentication/signin"]),!1}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var _r=(()=>{class l extends Oe{constructor(){super(),this.document=f(X),this.directoryService=f(it),this.configService=f(tt),this.renderer=f(xe),this.localStorageService=f(De);let i=this.localStorageService;this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(r=>{r?this.direction=r==="ltr"?"ltr":"rtl":i.get("isRtl")?i.get("isRtl")==="true"?this.direction="rtl":i.get("isRtl")==="false"&&(this.direction="ltr"):this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",i.set("isRtl","true")):(this.direction="ltr",i.set("isRtl","false")))}),i.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,i.get("theme"))):this.renderer.addClass(this.document.body,this.config.layout.variant)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-auth-layout"]],features:[ne],decls:2,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(g(0,"div",0),k(1,"router-outlet"),m()),r&2&&w("dir",o.direction)},dependencies:[Te,Li,Tt],encapsulation:2})}}return l})();var br=[{path:"",component:xr,canActivate:[ei],children:[{path:"",redirectTo:"/authentication/signin",pathMatch:"full"},{path:"admin",canActivate:[ei],data:{role:[j.Admin,j.SuperAdmin]},loadChildren:()=>import("./chunk-C7THDS4O.js").then(l=>l.ADMIN_ROUTE)},{path:"teacher",canActivate:[ei],data:{role:j.Teacher},loadChildren:()=>import("./chunk-N7R24QOT.js").then(l=>l.TEACHER_ROUTE)},{path:"student",canActivate:[ei],data:{role:j.Student},loadChildren:()=>import("./chunk-WMGDQSSD.js").then(l=>l.STUDENT_ROUTE)},{path:"extra-pages",loadChildren:()=>import("./chunk-PDUNQS5K.js").then(l=>l.EXTRA_PAGES_ROUTE)},{path:"multilevel",loadChildren:()=>import("./chunk-M55OMZ3Z.js").then(l=>l.MULTILEVEL_ROUTE)}]},{path:"authentication",component:_r,loadChildren:()=>import("./chunk-5HX52YQJ.js").then(l=>l.AUTH_ROUTE)},{path:"**",component:qs}];var Ah=(()=>{class l extends $i{constructor(i,r,o){super(i,r,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(r){return new(r||l)(Xe(X),Xe(Kt),Xe(Gi))};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();function Ih(){return new Js}function Rh(){return new er(f(Ai),f($i),f(bt))}var kr=[{provide:Gi,useFactory:Ih},{provide:$i,useClass:Ah},{provide:Si,useFactory:Rh}],Sv=[{provide:Kt,useClass:Xs},{provide:qt,useValue:"NoopAnimations"},...kr],Lh=[{provide:Kt,useFactory:()=>new Ks},{provide:qt,useFactory:()=>"BrowserAnimations"},...kr];function Mr(){return Mi("NgEagerAnimations"),[...Lh]}var Sr=(()=>{class l{constructor(){this.authenticationService=f(Dt)}intercept(i,r){return r.handle(i).pipe(Ka(o=>{o.status===401&&(i.url.includes("/auth/login")||(this.authenticationService.logout(),location.reload()));let h=o.error?.message||o.statusText;return Xa(()=>h)}))}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac})}}return l})();var Cr={production:!0,apiUrl:"https://smarteval-backend-ytpv.onrender.com"};var Tr=(()=>{class l{constructor(){this.tokenService=f(Os)}intercept(i,r){let o=i;i.url.startsWith("/api")&&(o=i.clone({url:`${Cr.apiUrl}${i.url}`}));let h=this.tokenService.getBearerToken();return h&&(o=o.clone({setHeaders:{Authorization:h}})),r.handle(o)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac})}}return l})();var $n=new K("TRANSLATE_HTTP_LOADER_CONFIG"),Nh=(()=>{class l{http;config;constructor(){this.config=le({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},f($n)),this.http=this.config.useHttpBackend?new Ke(f(Vn)):f(Ke)}getTranslation(i){let r=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${i}${this.config.suffix}${r}`)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();function Dr(l={}){let d=l.useHttpBackend??!1;return[{provide:$n,useValue:l},{provide:Bs,useClass:Nh,deps:[d?Vn:Ke,$n]}]}var Fh=Za(Zn(),1),Or=Za(Zn(),1),ht=Or.default||Fh,Eh=new K("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:()=>({useUtc:!1})});function Ph(l,d){let i=Array(l);for(let r=0;r<l;r++)i[r]=d(r);return i}var Br=(()=>{class l extends ji{_options=f(Eh,{optional:!0});_localeData;constructor(){super();let i=f(Wi,{optional:!0});this.setLocale(i||ht.locale())}setLocale(i){super.setLocale(i);let r=ht.localeData(i);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:Ph(31,o=>this.createDate(2017,0,o+1).format("D")),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}getYear(i){return this.clone(i).year()}getMonth(i){return this.clone(i).month()}getDate(i){return this.clone(i).date()}getDayOfWeek(i){return this.clone(i).day()}getMonthNames(i){return i=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(i){return i=="long"?this._localeData.longDaysOfWeek:i=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(i){return this.clone(i).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(i){return this.clone(i).daysInMonth()}clone(i){return i.clone().locale(this.locale)}createDate(i,r,o){let h=this._createMoment({year:i,month:r,date:o}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(i,r){return i&&typeof i=="string"?this._createMoment(i,r,this.locale):i?this._createMoment(i).locale(this.locale):null}format(i,r){return i=this.clone(i),this.isValid(i),i.format(r)}addCalendarYears(i,r){return this.clone(i).add({years:r})}addCalendarMonths(i,r){return this.clone(i).add({months:r})}addCalendarDays(i,r){return this.clone(i).add({days:r})}toIso8601(i){return this.clone(i).format()}deserialize(i){let r;if(i instanceof Date)r=this._createMoment(i).locale(this.locale);else if(this.isDateInstance(i))return this.clone(i);if(typeof i=="string"){if(!i)return null;r=this._createMoment(i,ht.ISO_8601).locale(this.locale)}return r&&this.isValid(r)?this._createMoment(r).locale(this.locale):super.deserialize(i)}isDateInstance(i){return ht.isMoment(i)}isValid(i){return this.clone(i).isValid()}invalid(){return ht.invalid()}setTime(i,r,o,h){return this.clone(i).set({hours:r,minutes:o,seconds:h,milliseconds:0})}getHours(i){return i.hours()}getMinutes(i){return i.minutes()}getSeconds(i){return i.seconds()}parseTime(i,r){return this.parse(i,r)}addSeconds(i,r){return this.clone(i).add({seconds:r})}_createMoment(i,r,o){let{strict:h,useUtc:_}=this._options||{};return _?ht.utc(i,r,o,h):ht(i,r,o,h)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();var Yh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-activity">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>`,Hh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-airplay">
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>
</svg>`,Vh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
</svg>`,zh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
</svg>`,Uh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-triangle">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
</svg>`,Wh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-center">
    <line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>
</svg>`,jh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-justify">
    <line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>
</svg>`,Gh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-left">
    <line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>
</svg>`,$h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-right">
    <line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>
</svg>`,qh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-anchor">
    <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
</svg>`,Zh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-aperture">
    <circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
</svg>`,Qh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-archive">
    <polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>
</svg>`,Xh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>
</svg>`,Jh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-left">
    <line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>
</svg>`,Kh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-right">
    <line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>
</svg>`,e0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down">
    <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
</svg>`,t0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-left-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>
</svg>`,i0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-left">
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
</svg>`,n0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,a0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
</svg>`,s0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>
</svg>`,r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-left">
    <line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>
</svg>`,o0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-right">
    <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
</svg>`,l0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up">
    <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
</svg>`,c0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-at-sign">
    <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
</svg>`,d0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-award">
    <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
</svg>`,h0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bar-chart-2">
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
</svg>`,u0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bar-chart">
    <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
</svg>`,g0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-battery-charging">
    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>
</svg>`,m0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-battery">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>
</svg>`,p0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell-off">
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,f0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>`,v0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bluetooth">
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
</svg>`,w0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bold">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
</svg>`,y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book-open">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>`,x0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
</svg>`,_0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bookmark">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
</svg>`,b0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-box">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,k0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-briefcase">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>`,M0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-calendar">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`,S0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-camera-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
</svg>`,C0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-camera">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>
</svg>`,T0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cast">
    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>
</svg>`,D0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-circle">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>`,O0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-square">
    <polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>`,B0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`,A0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9"></polyline>
</svg>`,I0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-left">
    <polyline points="15 18 9 12 15 6"></polyline>
</svg>`,R0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-right">
    <polyline points="9 18 15 12 9 6"></polyline>
</svg>`,L0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-up">
    <polyline points="18 15 12 9 6 15"></polyline>
</svg>`,N0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-down">
    <polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>
</svg>`,F0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-left">
    <polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>
</svg>`,E0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-right">
    <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
</svg>`,P0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-up">
    <polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>
</svg>`,Y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chrome">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
</svg>`,H0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-circle">
    <circle cx="12" cy="12" r="10"></circle>
</svg>`,V0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clipboard">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
</svg>`,z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clock">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
</svg>`,U0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-drizzle">
    <line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
</svg>`,W0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-lightning">
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>
</svg>`,j0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-off">
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,G0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-rain">
    <line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
</svg>`,$0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-snow">
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>
</svg>`,q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
</svg>`,Z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-code">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
</svg>`,Q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-codepen">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>
</svg>`,X0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-codesandbox">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,J0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-coffee">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
</svg>`,K0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-columns">
    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
</svg>`,e1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-command">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>`,t1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-compass">
    <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>`,i1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-copy">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`,n1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-down-left">
    <polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
</svg>`,a1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-down-right">
    <polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
</svg>`,s1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-left-down">
    <polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
</svg>`,r1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-left-up">
    <polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
</svg>`,o1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-down">
    <polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
</svg>`,l1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-up">
    <polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
</svg>`,c1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-left">
    <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
</svg>`,d1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-right">
    <polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
</svg>`,h1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cpu">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
</svg>`,u1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-credit-card">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
</svg>`,g1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-crop">
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
</svg>`,m1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-crosshair">
    <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>
</svg>`,p1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-database">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>`,f1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-delete">
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>
</svg>`,v1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-disc">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
</svg>`,w1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide-circle">
    <line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>
</svg>`,y1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>
</svg>`,x1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide">
    <circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>
</svg>`,_1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dollar-sign">
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>`,b1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download-cloud">
    <polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
</svg>`,k1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
</svg>`,M1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dribbble">
    <circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
</svg>`,S1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-droplet">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
</svg>`,C1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-2">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>`,T1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-3">
    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>`,D1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>`,O1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-external-link">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
</svg>`,B1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye-off">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,A1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
</svg>`,I1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>`,R1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-fast-forward">
    <polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>
</svg>`,L1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-feather">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>
</svg>`,N1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-figma">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>`,F1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-minus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>
</svg>`,E1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-plus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>
</svg>`,P1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-text">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
</svg>`,Y1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>
</svg>`,H1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-film">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
</svg>`,V1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-filter">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>`,z1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-flag">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>
</svg>`,U1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder-minus">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>
</svg>`,W1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder-plus">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>
</svg>`,j1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>`,G1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-framer">
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
</svg>`,$1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-frown">
    <circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,q1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-gift">
    <polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
</svg>`,Z1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-branch">
    <line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>`,Q1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-commit">
    <circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>
</svg>`,X1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-merge">
    <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>`,J1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-pull-request">
    <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>
</svg>`,K1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-github">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>`,e2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-gitlab">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
</svg>`,t2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-globe">
    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>`,i2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-grid">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
</svg>`,n2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hard-drive">
    <line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>
</svg>`,a2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hash">
    <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
</svg>`,s2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-headphones">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>`,r2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-heart">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>`,o2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-help-circle">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
</svg>`,l2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hexagon">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>`,c2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-home">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>`,d2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-image">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
</svg>`,h2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-inbox">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
</svg>`,u2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-info">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
</svg>`,g2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>`,m2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-italic">
    <line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>
</svg>`,p2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-key">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>`,f2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-layers">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
</svg>`,v2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-layout">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
</svg>`,w2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-life-buoy">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
</svg>`,y2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-link-2">
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,x2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-link">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>`,_2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
</svg>`,b2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-list">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg>`,k2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-loader">
    <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
</svg>`,M2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-lock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>`,S2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-in">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>
</svg>`,C2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
</svg>`,T2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mail">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
</svg>`,D2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
</svg>`,O2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
</svg>`,B2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-maximize-2">
    <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
</svg>`,A2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-maximize">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
</svg>`,I2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-meh">
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,R2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-menu">
    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
</svg>`,L2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-message-circle">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>`,N2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-message-square">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>`,F2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
</svg>`,E2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
</svg>`,P2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize-2">
    <polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>
</svg>`,Y2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize">
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
</svg>`,H2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,V2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,z2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus">
    <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>`,U2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-monitor">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
</svg>`,W2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`,j2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-horizontal">
    <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>`,G2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-vertical">
    <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
</svg>`,$2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mouse-pointer">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>
</svg>`,q2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-move">
    <polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>
</svg>`,Z2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-music">
    <path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>
</svg>`,Q2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation-2">
    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
</svg>`,X2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>`,J2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
</svg>`,K2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-package">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,eu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-paperclip">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>`,tu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pause-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>
</svg>`,iu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pause">
    <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
</svg>`,nu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pen-tool">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
</svg>`,au=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-percent">
    <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>`,su=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-call">
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,ru=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-forwarded">
    <polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,ou=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-incoming">
    <polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,lu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-missed">
    <line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,cu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-off">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>
</svg>`,du=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-outgoing">
    <polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,hu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,uu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pie-chart">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>`,gu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play-circle">
    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>`,mu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>`,pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,fu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,vu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus">
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
</svg>`,wu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pocket">
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>
</svg>`,yu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-power">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
</svg>`,xu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-printer">
    <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
</svg>`,_u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-radio">
    <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
</svg>`,bu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-ccw">
    <polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
</svg>`,ku=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-cw">
    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
</svg>`,Mu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-repeat">
    <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
</svg>`,Su=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rewind">
    <polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>
</svg>`,Cu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rotate-ccw">
    <polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
</svg>`,Tu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rotate-cw">
    <polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
</svg>`,Du=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rss">
    <path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
</svg>`,Ou=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-save">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
</svg>`,Bu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-scissors">
    <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
</svg>`,Au=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-search">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`,Iu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-send">
    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>`,Ru=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-server">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
</svg>`,Lu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-settings">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>`,Nu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share-2">
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
</svg>`,Fu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
</svg>`,Eu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shield-off">
    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shield">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>`,Yu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>`,Hu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-cart">
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>`,Vu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shuffle">
    <polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>
</svg>`,zu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sidebar">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
</svg>`,Uu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-back">
    <polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>
</svg>`,Wu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-forward">
    <polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>
</svg>`,ju=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-slack">
    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
</svg>`,Gu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-slash">
    <circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
</svg>`,$u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sliders">
    <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
</svg>`,qu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-smartphone">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
</svg>`,Zu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-smile">
    <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,Qu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-speaker">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>
</svg>`,Xu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
</svg>`,Ju=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`,Ku=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-stop-circle">
    <circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>
</svg>`,eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sun">
    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`,tg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sunrise">
    <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>
</svg>`,ig=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sunset">
    <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>
</svg>`,ng=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-table">
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
</svg>`,ag=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tablet">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
</svg>`,sg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tag">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
</svg>`,rg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-target">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
</svg>`,og=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-terminal">
    <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
</svg>`,lg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thermometer">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>`,cg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thumbs-down">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
</svg>`,dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thumbs-up">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>`,hg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-toggle-left">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>
</svg>`,ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-toggle-right">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>
</svg>`,gg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tool">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>`,mg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash-2">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
</svg>`,pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
</svg>`,fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trello">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>
</svg>`,vg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-down">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
</svg>`,wg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-up">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
</svg>`,yg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-triangle">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
</svg>`,xg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-truck">
    <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
</svg>`,_g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tv">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>
</svg>`,bg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitch">
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
</svg>`,kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitter">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>`,Mg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-type">
    <polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>
</svg>`,Sg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-umbrella">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
</svg>`,Cg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-underline">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>
</svg>`,Tg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-unlock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
</svg>`,Dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-upload-cloud">
    <polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>
</svg>`,Og=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-upload">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>
</svg>`,Bg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-check">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>
</svg>`,Ag=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-minus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`,Ig=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-plus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`,Rg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-x">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>
</svg>`,Lg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>`,Ng=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-users">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>`,Fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video-off">
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video">
    <polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
</svg>`,Pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-voicemail">
    <circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>
</svg>`,Yg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-1">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
</svg>`,Hg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
</svg>`,Vg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-x">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>
</svg>`,zg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
</svg>`,Ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-watch">
    <circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
</svg>`,Wg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wifi-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
</svg>`,jg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wifi">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
</svg>`,Gg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wind">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
</svg>`,$g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,Zg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>
</svg>`,Qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,Xg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-youtube">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>`,Jg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zap-off">
    <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zap">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>`,em=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zoom-in">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
</svg>`,tm=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zoom-out">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>
</svg>`,Ar={Activity:Yh,Airplay:Hh,AlertCircle:Vh,AlertOctagon:zh,AlertTriangle:Uh,AlignCenter:Wh,AlignJustify:jh,AlignLeft:Gh,AlignRight:$h,Anchor:qh,Aperture:Zh,Archive:Qh,ArrowDownCircle:Xh,ArrowDownLeft:Jh,ArrowDownRight:Kh,ArrowDown:e0,ArrowLeftCircle:t0,ArrowLeft:i0,ArrowRightCircle:n0,ArrowRight:a0,ArrowUpCircle:s0,ArrowUpLeft:r0,ArrowUpRight:o0,ArrowUp:l0,AtSign:c0,Award:d0,BarChart2:h0,BarChart:u0,BatteryCharging:g0,Battery:m0,BellOff:p0,Bell:f0,Bluetooth:v0,Bold:w0,BookOpen:y0,Book:x0,Bookmark:_0,Box:b0,Briefcase:k0,Calendar:M0,CameraOff:S0,Camera:C0,Cast:T0,CheckCircle:D0,CheckSquare:O0,Check:B0,ChevronDown:A0,ChevronLeft:I0,ChevronRight:R0,ChevronUp:L0,ChevronsDown:N0,ChevronsLeft:F0,ChevronsRight:E0,ChevronsUp:P0,Chrome:Y0,Circle:H0,Clipboard:V0,Clock:z0,CloudDrizzle:U0,CloudLightning:W0,CloudOff:j0,CloudRain:G0,CloudSnow:$0,Cloud:q0,Code:Z0,Codepen:Q0,Codesandbox:X0,Coffee:J0,Columns:K0,Command:e1,Compass:t1,Copy:i1,CornerDownLeft:n1,CornerDownRight:a1,CornerLeftDown:s1,CornerLeftUp:r1,CornerRightDown:o1,CornerRightUp:l1,CornerUpLeft:c1,CornerUpRight:d1,Cpu:h1,CreditCard:u1,Crop:g1,Crosshair:m1,Database:p1,Delete:f1,Disc:v1,DivideCircle:w1,DivideSquare:y1,Divide:x1,DollarSign:_1,DownloadCloud:b1,Download:k1,Dribbble:M1,Droplet:S1,Edit2:C1,Edit3:T1,Edit:D1,ExternalLink:O1,EyeOff:B1,Eye:A1,Facebook:I1,FastForward:R1,Feather:L1,Figma:N1,FileMinus:F1,FilePlus:E1,FileText:P1,File:Y1,Film:H1,Filter:V1,Flag:z1,FolderMinus:U1,FolderPlus:W1,Folder:j1,Framer:G1,Frown:$1,Gift:q1,GitBranch:Z1,GitCommit:Q1,GitMerge:X1,GitPullRequest:J1,Github:K1,Gitlab:e2,Globe:t2,Grid:i2,HardDrive:n2,Hash:a2,Headphones:s2,Heart:r2,HelpCircle:o2,Hexagon:l2,Home:c2,Image:d2,Inbox:h2,Info:u2,Instagram:g2,Italic:m2,Key:p2,Layers:f2,Layout:v2,LifeBuoy:w2,Link2:y2,Link:x2,Linkedin:_2,List:b2,Loader:k2,Lock:M2,LogIn:S2,LogOut:C2,Mail:T2,MapPin:D2,Map:O2,Maximize2:B2,Maximize:A2,Meh:I2,Menu:R2,MessageCircle:L2,MessageSquare:N2,MicOff:F2,Mic:E2,Minimize2:P2,Minimize:Y2,MinusCircle:H2,MinusSquare:V2,Minus:z2,Monitor:U2,Moon:W2,MoreHorizontal:j2,MoreVertical:G2,MousePointer:$2,Move:q2,Music:Z2,Navigation2:Q2,Navigation:X2,Octagon:J2,Package:K2,Paperclip:eu,PauseCircle:tu,Pause:iu,PenTool:nu,Percent:au,PhoneCall:su,PhoneForwarded:ru,PhoneIncoming:ou,PhoneMissed:lu,PhoneOff:cu,PhoneOutgoing:du,Phone:hu,PieChart:uu,PlayCircle:gu,Play:mu,PlusCircle:pu,PlusSquare:fu,Plus:vu,Pocket:wu,Power:yu,Printer:xu,Radio:_u,RefreshCcw:bu,RefreshCw:ku,Repeat:Mu,Rewind:Su,RotateCcw:Cu,RotateCw:Tu,Rss:Du,Save:Ou,Scissors:Bu,Search:Au,Send:Iu,Server:Ru,Settings:Lu,Share2:Nu,Share:Fu,ShieldOff:Eu,Shield:Pu,ShoppingBag:Yu,ShoppingCart:Hu,Shuffle:Vu,Sidebar:zu,SkipBack:Uu,SkipForward:Wu,Slack:ju,Slash:Gu,Sliders:$u,Smartphone:qu,Smile:Zu,Speaker:Qu,Square:Xu,Star:Ju,StopCircle:Ku,Sun:eg,Sunrise:tg,Sunset:ig,Table:ng,Tablet:ag,Tag:sg,Target:rg,Terminal:og,Thermometer:lg,ThumbsDown:cg,ThumbsUp:dg,ToggleLeft:hg,ToggleRight:ug,Tool:gg,Trash2:mg,Trash:pg,Trello:fg,TrendingDown:vg,TrendingUp:wg,Triangle:yg,Truck:xg,Tv:_g,Twitch:bg,Twitter:kg,Type:Mg,Umbrella:Sg,Underline:Cg,Unlock:Tg,UploadCloud:Dg,Upload:Og,UserCheck:Bg,UserMinus:Ag,UserPlus:Ig,UserX:Rg,User:Lg,Users:Ng,VideoOff:Fg,Video:Eg,Voicemail:Pg,Volume1:Yg,Volume2:Hg,VolumeX:Vg,Volume:zg,Watch:Ug,WifiOff:Wg,Wifi:jg,Wind:Gg,XCircle:$g,XOctagon:qg,XSquare:Zg,X:Qg,Youtube:Xg,ZapOff:Jg,Zap:Kg,ZoomIn:em,ZoomOut:tm};var im="@",nm=(()=>{class l{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=f(rs);loadingSchedulerFn=f(am,{optional:!0});_engine;constructor(i,r,o,h,_){this.doc=i,this.delegate=r,this.zone=o,this.animationType=h,this.moduleImpl=_}ngOnDestroy(){this._engine?.flush()}loadImpl(){let i=()=>this.moduleImpl??import("./chunk-LMIIPTTC.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(i):r=i(),r.catch(o=>{throw new ns(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:h})=>{this._engine=o(this.animationType,this.doc);let _=new h(this.delegate,this._engine,this.zone);return this.delegate=_,_})}createRenderer(i,r){let o=this.delegate.createRenderer(i,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let h=new Qn(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let Y=_.createRenderer(i,r);h.use(Y),this.scheduler??=this.injector.get(ls,null,{optional:!0}),this.scheduler?.notify(10)}).catch(_=>{h.use(o)}),h}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(i){this._engine?.flush(),this.delegate.componentReplaced?.(i)}static \u0275fac=function(r){gs()};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})(),Qn=class{delegate;replay=[];\u0275type=1;constructor(d){this.delegate=d}use(d){if(this.delegate=d,this.replay!==null){for(let i of this.replay)i(d);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(d,i){return this.delegate.createElement(d,i)}createComment(d){return this.delegate.createComment(d)}createText(d){return this.delegate.createText(d)}get destroyNode(){return this.delegate.destroyNode}appendChild(d,i){this.delegate.appendChild(d,i)}insertBefore(d,i,r,o){this.delegate.insertBefore(d,i,r,o)}removeChild(d,i,r,o){this.delegate.removeChild(d,i,r,o)}selectRootElement(d,i){return this.delegate.selectRootElement(d,i)}parentNode(d){return this.delegate.parentNode(d)}nextSibling(d){return this.delegate.nextSibling(d)}setAttribute(d,i,r,o){this.delegate.setAttribute(d,i,r,o)}removeAttribute(d,i,r){this.delegate.removeAttribute(d,i,r)}addClass(d,i){this.delegate.addClass(d,i)}removeClass(d,i){this.delegate.removeClass(d,i)}setStyle(d,i,r,o){this.delegate.setStyle(d,i,r,o)}removeStyle(d,i,r){this.delegate.removeStyle(d,i,r)}setProperty(d,i,r){this.shouldReplay(i)&&this.replay.push(o=>o.setProperty(d,i,r)),this.delegate.setProperty(d,i,r)}setValue(d,i){this.delegate.setValue(d,i)}listen(d,i,r,o){return this.shouldReplay(i)&&this.replay.push(h=>h.listen(d,i,r,o)),this.delegate.listen(d,i,r,o)}shouldReplay(d){return this.replay!==null&&d.startsWith(im)}},am=new K("");function Ir(l="animations"){return Mi("NgAsyncAnimations"),as([{provide:Si,useFactory:()=>new nm(f(X),f(Ai),f(bt),l)},{provide:qt,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Xn={providers:[bs(ks()),Cs(br),Mr(),{provide:ws,useClass:ys},it,Ni,Is({fallbackLang:"en",loader:Dr({prefix:"./assets/i18n/",suffix:".json"})}),{provide:Wi,useValue:"en-GB"},{provide:ji,useClass:Br},Ns,{provide:zn,useValue:{parse:{dateInput:"YYYY-MM-DD"},display:{dateInput:"YYYY-MM-DD",monthYearLabel:"YYYY MMM",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY MMM"}}},Nn(Gs.pick(Ar)),Nn(Fi.forRoot()),Qs(Zs()),{provide:Hn,useClass:Tr,multi:!0},{provide:Hn,useClass:Sr,multi:!0},Ir()]};_s(sr,_t(le({},Xn),{providers:[fs(),...Xn.providers]})).catch(l=>console.error(l));
