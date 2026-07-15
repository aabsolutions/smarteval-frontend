import{k as Ks,l as Xt,m as Xi,o as er,q as Ji,s as tr,x as ir}from"./chunk-LURX3U5C.js";import{a as et,b as As,c as Is,d as Rs,e as Ls,f as Ns,g as Ot,h as W,i as Es,j as Fi,k as Fs,l as Ce}from"./chunk-NDLVSCIZ.js";import{a as Ei,b as Dt}from"./chunk-CAAO7FCI.js";import{a as Zi,b as Qi,c as Gn}from"./chunk-6XIIAJZB.js";import{a as Bt}from"./chunk-NMVON7QV.js";import{a as Xs,b as Js}from"./chunk-2N2TNQY4.js";import"./chunk-DZHZUGCV.js";import"./chunk-67HI2W2E.js";import{c as Vs,d as zs,f as Us,h as Ws}from"./chunk-CJPLD6EO.js";import{a as Ke,b as re}from"./chunk-FS4PEMJP.js";import{a as Qs}from"./chunk-V6CCRWIJ.js";import"./chunk-TSZRK7QO.js";import{a as At}from"./chunk-NRDC2OUG.js";import{a as Gi,b as $i,c as qi,d as Rt}from"./chunk-KQ2SOHHF.js";import{a as Gs}from"./chunk-WSMHGNGB.js";import{a as Hs}from"./chunk-D4EPHYFN.js";import"./chunk-HZH2PUMA.js";import{a as Pi,d as Ps}from"./chunk-7EBQJ34P.js";import{b as qs}from"./chunk-BN55WPIY.js";import{e as js,i as Zs}from"./chunk-G533CEJ2.js";import{a as Cs,b as Ri,d as Tt,e as Je,f as Li,g as Ts,h as Ds,i as Os}from"./chunk-QB36XT7Z.js";import{A as Me,Aa as ji,B as Ms,C as Ss,Ca as It,F as Bs,G as Ni,H as Se,Q as Yi,S as Hi,c as ys,da as Ys,f as xs,g as Xe,ga as Qt,i as Oi,l as Bi,ma as Vi,na as zi,r as Ai,s as _s,u as Ii,v as bs,wa as Ui,x as ks,xa as $s,y as jn,z as Zt,za as Wi}from"./chunk-DJXIJRV5.js";import{$ as ve,$a as us,$c as ws,Aa as Mt,B as ts,Bc as H,Ca as we,Cc as fs,D as Pn,Fc as Ye,G as _i,Gc as He,Ha as ds,Hb as de,Ia as jt,Ib as Q,Jb as X,Lb as ot,Mb as lt,Nb as ct,Ob as x,P as is,Pb as p,Pc as Di,Qb as f,R as Yn,Rb as M,S as bt,V as ns,Vb as zn,Vc as vs,Wb as Un,Wc as qt,X as as,Ya as $e,Yb as qe,Z as bi,Zb as ps,_ as z,_a as hs,_c as G,ab as v,ac as S,ba as te,c as Ja,ca as Ge,cc as A,da as m,dc as Gt,e as Nn,ea as ss,eb as Mi,ec as $t,f as Ka,fa as Hn,fc as Wn,gc as Ci,hc as St,ib as Si,ic as Ct,ja as Fe,jb as ye,ka as Pe,kb as gs,la as rs,lb as ms,m as En,mc as Ze,n as st,na as os,nc as he,oa as J,oc as dt,pc as _e,q as je,qb as L,qc as C,r as es,ra as j,rb as xe,rc as be,sa as kt,sb as Vn,sc as ke,va as ls,vb as se,wa as cs,wb as rt,xc as Ti,y as Fn,za as ki,zc as Qe}from"./chunk-L3WKU6WW.js";import{a as ee,b as We,c as Qa,e as Rd,f as Xa}from"./chunk-TSRGIXR5.js";var Jn=Rd((Xn,Lt)=>{"use strict";(function(l,d){typeof Xn=="object"&&typeof Lt<"u"?Lt.exports=d():typeof define=="function"&&define.amd?define(d):l.moment=d()})(Xn,function(){"use strict";var l;function d(){return l.apply(null,arguments)}function n(e){l=e}function r(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function o(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(h(e,t))return!1;return!0}function P(e){return e===void 0}function $(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function tt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Kt(e,t){var i=[],a,s=e.length;for(a=0;a<s;++a)i.push(t(e[a],a));return i}function ue(e,t){for(var i in t)h(t,i)&&(e[i]=t[i]);return h(t,"toString")&&(e.toString=t.toString),h(t,"valueOf")&&(e.valueOf=t.valueOf),e}function ge(e,t,i,a){return Ta(e,t,i,a,!0).utc()}function Rr(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=Rr()),e._pf}var nn;Array.prototype.some?nn=Array.prototype.some:nn=function(e){var t=Object(this),i=t.length>>>0,a;for(a=0;a<i;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function an(e){var t=null,i=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=T(e),i=nn.call(t.parsedDateParts,function(s){return s!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function ei(e){var t=ge(NaN);return e!=null?ue(T(t),e):T(t).userInvalidated=!0,t}var ta=d.momentProperties=[],sn=!1;function rn(e,t){var i,a,s,c=ta.length;if(P(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),P(t._i)||(e._i=t._i),P(t._f)||(e._f=t._f),P(t._l)||(e._l=t._l),P(t._strict)||(e._strict=t._strict),P(t._tzm)||(e._tzm=t._tzm),P(t._isUTC)||(e._isUTC=t._isUTC),P(t._offset)||(e._offset=t._offset),P(t._pf)||(e._pf=T(t)),P(t._locale)||(e._locale=t._locale),c>0)for(i=0;i<c;i++)a=ta[i],s=t[a],P(s)||(e[a]=s);return e}function Nt(e){rn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),sn===!1&&(sn=!0,d.updateOffset(this),sn=!1)}function oe(e){return e instanceof Nt||e!=null&&e._isAMomentObject!=null}function ia(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ie(e,t){var i=!0;return ue(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),i){var a=[],s,c,u,w=arguments.length;for(c=0;c<w;c++){if(s="",typeof arguments[c]=="object"){s+=`
[`+c+"] ";for(u in arguments[0])h(arguments[0],u)&&(s+=u+": "+arguments[0][u]+", ");s=s.slice(0,-2)}else s=arguments[c];a.push(s)}ia(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),i=!1}return t.apply(this,arguments)},t)}var na={};function aa(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),na[e]||(ia(t),na[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function me(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Lr(e){var t,i;for(i in e)h(e,i)&&(t=e[i],me(t)?this[i]=t:this["_"+i]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function on(e,t){var i=ue({},e),a;for(a in t)h(t,a)&&(o(e[a])&&o(t[a])?(i[a]={},ue(i[a],e[a]),ue(i[a],t[a])):t[a]!=null?i[a]=t[a]:delete i[a]);for(a in e)h(e,a)&&!h(t,a)&&o(e[a])&&(i[a]=ue({},i[a]));return i}function ln(e){e!=null&&this.set(e)}var cn;Object.keys?cn=Object.keys:cn=function(e){var t,i=[];for(t in e)h(e,t)&&i.push(t);return i};var Nr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Er(e,t,i){var a=this._calendar[e]||this._calendar.sameElse;return me(a)?a.call(t,i):a}function pe(e,t,i){var a=""+Math.abs(e),s=t-a.length,c=e>=0;return(c?i?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+a}var dn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ti=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,hn={},gt={};function b(e,t,i,a){var s=a;typeof a=="string"&&(s=function(){return this[a]()}),e&&(gt[e]=s),t&&(gt[t[0]]=function(){return pe(s.apply(this,arguments),t[1],t[2])}),i&&(gt[i]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Fr(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Pr(e){var t=e.match(dn),i,a;for(i=0,a=t.length;i<a;i++)gt[t[i]]?t[i]=gt[t[i]]:t[i]=Fr(t[i]);return function(s){var c="",u;for(u=0;u<a;u++)c+=me(t[u])?t[u].call(s,e):t[u];return c}}function ii(e,t){return e.isValid()?(t=sa(t,e.localeData()),hn[t]=hn[t]||Pr(t),hn[t](e)):e.localeData().invalidDate()}function sa(e,t){var i=5;function a(s){return t.longDateFormat(s)||s}for(ti.lastIndex=0;i>=0&&ti.test(e);)e=e.replace(ti,a),ti.lastIndex=0,i-=1;return e}var Yr={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Hr(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.match(dn).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Vr="Invalid date";function zr(){return this._invalidDate}var Ur="%d",Wr=/\d{1,2}/;function jr(e){return this._ordinal.replace("%d",e)}var Gr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function $r(e,t,i,a){var s=this._relativeTime[i];return me(s)?s(e,t,i,a):s.replace(/%d/i,e)}function qr(e,t){var i=this._relativeTime[e>0?"future":"past"];return me(i)?i(t):i.replace(/%s/i,t)}var ra={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function ne(e){return typeof e=="string"?ra[e]||ra[e.toLowerCase()]:void 0}function un(e){var t={},i,a;for(a in e)h(e,a)&&(i=ne(a),i&&(t[i]=e[a]));return t}var Zr={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Qr(e){var t=[],i;for(i in e)h(e,i)&&t.push({unit:i,priority:Zr[i]});return t.sort(function(a,s){return a.priority-s.priority}),t}var oa=/\d/,K=/\d\d/,la=/\d{3}/,gn=/\d{4}/,ni=/[+-]?\d{6}/,N=/\d\d?/,ca=/\d\d\d\d?/,da=/\d\d\d\d\d\d?/,ai=/\d{1,3}/,mn=/\d{1,4}/,si=/[+-]?\d{1,6}/,mt=/\d+/,ri=/[+-]?\d+/,Xr=/Z|[+-]\d\d:?\d\d/gi,oi=/Z|[+-]\d\d(?::?\d\d)?/gi,Jr=/[+-]?\d+(\.\d{1,3})?/,Et=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,pt=/^[1-9]\d?/,pn=/^([1-9]\d|\d)/,li;li={};function y(e,t,i){li[e]=me(t)?t:function(a,s){return a&&i?i:t}}function Kr(e,t){return h(li,e)?li[e](t._strict,t._locale):new RegExp(eo(e))}function eo(e){return De(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,i,a,s,c){return i||a||s||c}))}function De(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ae(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,i=0;return t!==0&&isFinite(t)&&(i=ae(t)),i}var fn={};function R(e,t){var i,a=t,s;for(typeof e=="string"&&(e=[e]),$(t)&&(a=function(c,u){u[t]=D(c)}),s=e.length,i=0;i<s;i++)fn[e[i]]=a}function Ft(e,t){R(e,function(i,a,s,c){s._w=s._w||{},t(i,s._w,s,c)})}function to(e,t,i){t!=null&&h(fn,e)&&fn[e](t,i._a,i,e)}function ci(e){return e%4===0&&e%100!==0||e%400===0}var q=0,Oe=1,fe=2,U=3,le=4,Be=5,it=6,io=7,no=8;b("Y",0,0,function(){var e=this.year();return e<=9999?pe(e,4):"+"+e}),b(0,["YY",2],0,function(){return this.year()%100}),b(0,["YYYY",4],0,"year"),b(0,["YYYYY",5],0,"year"),b(0,["YYYYYY",6,!0],0,"year"),y("Y",ri),y("YY",N,K),y("YYYY",mn,gn),y("YYYYY",si,ni),y("YYYYYY",si,ni),R(["YYYYY","YYYYYY"],q),R("YYYY",function(e,t){t[q]=e.length===2?d.parseTwoDigitYear(e):D(e)}),R("YY",function(e,t){t[q]=d.parseTwoDigitYear(e)}),R("Y",function(e,t){t[q]=parseInt(e,10)});function Pt(e){return ci(e)?366:365}d.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var ha=ft("FullYear",!0);function ao(){return ci(this.year())}function ft(e,t){return function(i){return i!=null?(ua(this,e,i),d.updateOffset(this,t),this):Yt(this,e)}}function Yt(e,t){if(!e.isValid())return NaN;var i=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?i.getUTCMilliseconds():i.getMilliseconds();case"Seconds":return a?i.getUTCSeconds():i.getSeconds();case"Minutes":return a?i.getUTCMinutes():i.getMinutes();case"Hours":return a?i.getUTCHours():i.getHours();case"Date":return a?i.getUTCDate():i.getDate();case"Day":return a?i.getUTCDay():i.getDay();case"Month":return a?i.getUTCMonth():i.getMonth();case"FullYear":return a?i.getUTCFullYear():i.getFullYear();default:return NaN}}function ua(e,t,i){var a,s,c,u,w;if(!(!e.isValid()||isNaN(i))){switch(a=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?a.setUTCMilliseconds(i):a.setMilliseconds(i));case"Seconds":return void(s?a.setUTCSeconds(i):a.setSeconds(i));case"Minutes":return void(s?a.setUTCMinutes(i):a.setMinutes(i));case"Hours":return void(s?a.setUTCHours(i):a.setHours(i));case"Date":return void(s?a.setUTCDate(i):a.setDate(i));case"FullYear":break;default:return}c=i,u=e.month(),w=e.date(),w=w===29&&u===1&&!ci(c)?28:w,s?a.setUTCFullYear(c,u,w):a.setFullYear(c,u,w)}}function so(e){return e=ne(e),me(this[e])?this[e]():this}function ro(e,t){if(typeof e=="object"){e=un(e);var i=Qr(e),a,s=i.length;for(a=0;a<s;a++)this[i[a].unit](e[i[a].unit])}else if(e=ne(e),me(this[e]))return this[e](t);return this}function oo(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function vn(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=oo(t,12);return e+=(t-i)/12,i===1?ci(e)?29:28:31-i%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1}),b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),b("MMMM",0,0,function(e){return this.localeData().months(this,e)}),y("M",N,pt),y("MM",N,K),y("MMM",function(e,t){return t.monthsShortRegex(e)}),y("MMMM",function(e,t){return t.monthsRegex(e)}),R(["M","MM"],function(e,t){t[Oe]=D(e)-1}),R(["MMM","MMMM"],function(e,t,i,a){var s=i._locale.monthsParse(e,a,i._strict);s!=null?t[Oe]=s:T(i).invalidMonth=e});var lo="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ga="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ma=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,co=Et,ho=Et;function uo(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ma).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function go(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ma.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function mo(e,t,i){var a,s,c,u=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)c=ge([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(c,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(c,"").toLocaleLowerCase();return i?t==="MMM"?(s=Y.call(this._shortMonthsParse,u),s!==-1?s:null):(s=Y.call(this._longMonthsParse,u),s!==-1?s:null):t==="MMM"?(s=Y.call(this._shortMonthsParse,u),s!==-1?s:(s=Y.call(this._longMonthsParse,u),s!==-1?s:null)):(s=Y.call(this._longMonthsParse,u),s!==-1?s:(s=Y.call(this._shortMonthsParse,u),s!==-1?s:null))}function po(e,t,i){var a,s,c;if(this._monthsParseExact)return mo.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=ge([2e3,a]),i&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!i&&!this._monthsParse[a]&&(c="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[a]=new RegExp(c.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(i&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!i&&this._monthsParse[a].test(e))return a}}function pa(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!$(t))return e}var i=t,a=e.date();return a=a<29?a:Math.min(a,vn(e.year(),i)),e._isUTC?e._d.setUTCMonth(i,a):e._d.setMonth(i,a),e}function fa(e){return e!=null?(pa(this,e),d.updateOffset(this,!0),this):Yt(this,"Month")}function fo(){return vn(this.year(),this.month())}function vo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||va.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=co),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function wo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||va.call(this),e?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=ho),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function va(){function e(k,O){return O.length-k.length}var t=[],i=[],a=[],s,c,u,w;for(s=0;s<12;s++)c=ge([2e3,s]),u=De(this.monthsShort(c,"")),w=De(this.months(c,"")),t.push(u),i.push(w),a.push(w),a.push(u);t.sort(e),i.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function yo(e,t,i,a,s,c,u){var w;return e<100&&e>=0?(w=new Date(e+400,t,i,a,s,c,u),isFinite(w.getFullYear())&&w.setFullYear(e)):w=new Date(e,t,i,a,s,c,u),w}function Ht(e){var t,i;return e<100&&e>=0?(i=Array.prototype.slice.call(arguments),i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function di(e,t,i){var a=7+t-i,s=(7+Ht(e,0,a).getUTCDay()-t)%7;return-s+a-1}function wa(e,t,i,a,s){var c=(7+i-a)%7,u=di(e,a,s),w=1+7*(t-1)+c+u,k,O;return w<=0?(k=e-1,O=Pt(k)+w):w>Pt(e)?(k=e+1,O=w-Pt(e)):(k=e,O=w),{year:k,dayOfYear:O}}function Vt(e,t,i){var a=di(e.year(),t,i),s=Math.floor((e.dayOfYear()-a-1)/7)+1,c,u;return s<1?(u=e.year()-1,c=s+Ae(u,t,i)):s>Ae(e.year(),t,i)?(c=s-Ae(e.year(),t,i),u=e.year()+1):(u=e.year(),c=s),{week:c,year:u}}function Ae(e,t,i){var a=di(e,t,i),s=di(e+1,t,i);return(Pt(e)-a+s)/7}b("w",["ww",2],"wo","week"),b("W",["WW",2],"Wo","isoWeek"),y("w",N,pt),y("ww",N,K),y("W",N,pt),y("WW",N,K),Ft(["w","ww","W","WW"],function(e,t,i,a){t[a.substr(0,1)]=D(e)});function xo(e){return Vt(e,this._week.dow,this._week.doy).week}var _o={dow:0,doy:6};function bo(){return this._week.dow}function ko(){return this._week.doy}function Mo(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function So(e){var t=Vt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day"),b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),b("e",0,0,"weekday"),b("E",0,0,"isoWeekday"),y("d",N),y("e",N),y("E",N),y("dd",function(e,t){return t.weekdaysMinRegex(e)}),y("ddd",function(e,t){return t.weekdaysShortRegex(e)}),y("dddd",function(e,t){return t.weekdaysRegex(e)}),Ft(["dd","ddd","dddd"],function(e,t,i,a){var s=i._locale.weekdaysParse(e,a,i._strict);s!=null?t.d=s:T(i).invalidWeekday=e}),Ft(["d","e","E"],function(e,t,i,a){t[a]=D(e)});function Co(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function To(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function wn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Do="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ya="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Oo="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Bo=Et,Ao=Et,Io=Et;function Ro(e,t){var i=r(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?wn(i,this._week.dow):e?i[e.day()]:i}function Lo(e){return e===!0?wn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function No(e){return e===!0?wn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Eo(e,t,i){var a,s,c,u=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)c=ge([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(c,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(c,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(c,"").toLocaleLowerCase();return i?t==="dddd"?(s=Y.call(this._weekdaysParse,u),s!==-1?s:null):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,u),s!==-1?s:null):(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null):t==="dddd"?(s=Y.call(this._weekdaysParse,u),s!==-1||(s=Y.call(this._shortWeekdaysParse,u),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null)):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,u),s!==-1||(s=Y.call(this._weekdaysParse,u),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null)):(s=Y.call(this._minWeekdaysParse,u),s!==-1||(s=Y.call(this._weekdaysParse,u),s!==-1)?s:(s=Y.call(this._shortWeekdaysParse,u),s!==-1?s:null))}function Fo(e,t,i){var a,s,c;if(this._weekdaysParseExact)return Eo.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(s=ge([2e3,1]).day(a),i&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(c="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[a]=new RegExp(c.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(i&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(i&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!i&&this._weekdaysParse[a].test(e))return a}}function Po(e){if(!this.isValid())return e!=null?this:NaN;var t=Yt(this,"Day");return e!=null?(e=Co(e,this.localeData()),this.add(e-t,"d")):t}function Yo(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ho(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=To(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Vo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||yn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=Bo),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function zo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||yn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ao),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Uo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||yn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Io),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function yn(){function e(Z,Ee){return Ee.length-Z.length}var t=[],i=[],a=[],s=[],c,u,w,k,O;for(c=0;c<7;c++)u=ge([2e3,1]).day(c),w=De(this.weekdaysMin(u,"")),k=De(this.weekdaysShort(u,"")),O=De(this.weekdays(u,"")),t.push(w),i.push(k),a.push(O),s.push(w),s.push(k),s.push(O);t.sort(e),i.sort(e),a.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function xn(){return this.hours()%12||12}function Wo(){return this.hours()||24}b("H",["HH",2],0,"hour"),b("h",["hh",2],0,xn),b("k",["kk",2],0,Wo),b("hmm",0,0,function(){return""+xn.apply(this)+pe(this.minutes(),2)}),b("hmmss",0,0,function(){return""+xn.apply(this)+pe(this.minutes(),2)+pe(this.seconds(),2)}),b("Hmm",0,0,function(){return""+this.hours()+pe(this.minutes(),2)}),b("Hmmss",0,0,function(){return""+this.hours()+pe(this.minutes(),2)+pe(this.seconds(),2)});function xa(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}xa("a",!0),xa("A",!1);function _a(e,t){return t._meridiemParse}y("a",_a),y("A",_a),y("H",N,pn),y("h",N,pt),y("k",N,pt),y("HH",N,K),y("hh",N,K),y("kk",N,K),y("hmm",ca),y("hmmss",da),y("Hmm",ca),y("Hmmss",da),R(["H","HH"],U),R(["k","kk"],function(e,t,i){var a=D(e);t[U]=a===24?0:a}),R(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e}),R(["h","hh"],function(e,t,i){t[U]=D(e),T(i).bigHour=!0}),R("hmm",function(e,t,i){var a=e.length-2;t[U]=D(e.substr(0,a)),t[le]=D(e.substr(a)),T(i).bigHour=!0}),R("hmmss",function(e,t,i){var a=e.length-4,s=e.length-2;t[U]=D(e.substr(0,a)),t[le]=D(e.substr(a,2)),t[Be]=D(e.substr(s)),T(i).bigHour=!0}),R("Hmm",function(e,t,i){var a=e.length-2;t[U]=D(e.substr(0,a)),t[le]=D(e.substr(a))}),R("Hmmss",function(e,t,i){var a=e.length-4,s=e.length-2;t[U]=D(e.substr(0,a)),t[le]=D(e.substr(a,2)),t[Be]=D(e.substr(s))});function jo(e){return(e+"").toLowerCase().charAt(0)==="p"}var Go=/[ap]\.?m?\.?/i,$o=ft("Hours",!0);function qo(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var ba={calendar:Nr,longDateFormat:Yr,invalidDate:Vr,ordinal:Ur,dayOfMonthOrdinalParse:Wr,relativeTime:Gr,months:lo,monthsShort:ga,week:_o,weekdays:Do,weekdaysMin:Oo,weekdaysShort:ya,meridiemParse:Go},F={},zt={},Ut;function Zo(e,t){var i,a=Math.min(e.length,t.length);for(i=0;i<a;i+=1)if(e[i]!==t[i])return i;return a}function ka(e){return e&&e.toLowerCase().replace("_","-")}function Qo(e){for(var t=0,i,a,s,c;t<e.length;){for(c=ka(e[t]).split("-"),i=c.length,a=ka(e[t+1]),a=a?a.split("-"):null;i>0;){if(s=hi(c.slice(0,i).join("-")),s)return s;if(a&&a.length>=i&&Zo(c,a)>=i-1)break;i--}t++}return Ut}function Xo(e){return!!(e&&e.match("^[^/\\\\]*$"))}function hi(e){var t=null,i;if(F[e]===void 0&&typeof Lt<"u"&&Lt&&Lt.exports&&Xo(e))try{t=Ut._abbr,i=Qa,i("./locale/"+e),Ve(t)}catch(a){F[e]=null}return F[e]}function Ve(e,t){var i;return e&&(P(t)?i=Ie(e):i=_n(e,t),i?Ut=i:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Ut._abbr}function _n(e,t){if(t!==null){var i,a=ba;if(t.abbr=e,F[e]!=null)aa("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=F[e]._config;else if(t.parentLocale!=null)if(F[t.parentLocale]!=null)a=F[t.parentLocale]._config;else if(i=hi(t.parentLocale),i!=null)a=i._config;else return zt[t.parentLocale]||(zt[t.parentLocale]=[]),zt[t.parentLocale].push({name:e,config:t}),null;return F[e]=new ln(on(a,t)),zt[e]&&zt[e].forEach(function(s){_n(s.name,s.config)}),Ve(e),F[e]}else return delete F[e],null}function Jo(e,t){if(t!=null){var i,a,s=ba;F[e]!=null&&F[e].parentLocale!=null?F[e].set(on(F[e]._config,t)):(a=hi(e),a!=null&&(s=a._config),t=on(s,t),a==null&&(t.abbr=e),i=new ln(t),i.parentLocale=F[e],F[e]=i),Ve(e)}else F[e]!=null&&(F[e].parentLocale!=null?(F[e]=F[e].parentLocale,e===Ve()&&Ve(e)):F[e]!=null&&delete F[e]);return F[e]}function Ie(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Ut;if(!r(e)){if(t=hi(e),t)return t;e=[e]}return Qo(e)}function Ko(){return cn(F)}function bn(e){var t,i=e._a;return i&&T(e).overflow===-2&&(t=i[Oe]<0||i[Oe]>11?Oe:i[fe]<1||i[fe]>vn(i[q],i[Oe])?fe:i[U]<0||i[U]>24||i[U]===24&&(i[le]!==0||i[Be]!==0||i[it]!==0)?U:i[le]<0||i[le]>59?le:i[Be]<0||i[Be]>59?Be:i[it]<0||i[it]>999?it:-1,T(e)._overflowDayOfYear&&(t<q||t>fe)&&(t=fe),T(e)._overflowWeeks&&t===-1&&(t=io),T(e)._overflowWeekday&&t===-1&&(t=no),T(e).overflow=t),e}var el=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,tl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,il=/Z|[+-]\d\d(?::?\d\d)?/,ui=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],kn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],nl=/^\/?Date\((-?\d+)/i,al=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,sl={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ma(e){var t,i,a=e._i,s=el.exec(a)||tl.exec(a),c,u,w,k,O=ui.length,Z=kn.length;if(s){for(T(e).iso=!0,t=0,i=O;t<i;t++)if(ui[t][1].exec(s[1])){u=ui[t][0],c=ui[t][2]!==!1;break}if(u==null){e._isValid=!1;return}if(s[3]){for(t=0,i=Z;t<i;t++)if(kn[t][1].exec(s[3])){w=(s[2]||" ")+kn[t][0];break}if(w==null){e._isValid=!1;return}}if(!c&&w!=null){e._isValid=!1;return}if(s[4])if(il.exec(s[4]))k="Z";else{e._isValid=!1;return}e._f=u+(w||"")+(k||""),Sn(e)}else e._isValid=!1}function rl(e,t,i,a,s,c){var u=[ol(e),ga.indexOf(t),parseInt(i,10),parseInt(a,10),parseInt(s,10)];return c&&u.push(parseInt(c,10)),u}function ol(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function ll(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function cl(e,t,i){if(e){var a=ya.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(a!==s)return T(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function dl(e,t,i){if(e)return sl[e];if(t)return 0;var a=parseInt(i,10),s=a%100,c=(a-s)/100;return c*60+s}function Sa(e){var t=al.exec(ll(e._i)),i;if(t){if(i=rl(t[4],t[3],t[2],t[5],t[6],t[7]),!cl(t[1],i,e))return;e._a=i,e._tzm=dl(t[8],t[9],t[10]),e._d=Ht.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function hl(e){var t=nl.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Ma(e),e._isValid===!1)delete e._isValid;else return;if(Sa(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=ie("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function vt(e,t,i){return e??t??i}function ul(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Mn(e){var t,i,a=[],s,c,u;if(!e._d){for(s=ul(e),e._w&&e._a[fe]==null&&e._a[Oe]==null&&gl(e),e._dayOfYear!=null&&(u=vt(e._a[q],s[q]),(e._dayOfYear>Pt(u)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),i=Ht(u,0,e._dayOfYear),e._a[Oe]=i.getUTCMonth(),e._a[fe]=i.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[U]===24&&e._a[le]===0&&e._a[Be]===0&&e._a[it]===0&&(e._nextDay=!0,e._a[U]=0),e._d=(e._useUTC?Ht:yo).apply(null,a),c=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[U]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==c&&(T(e).weekdayMismatch=!0)}}function gl(e){var t,i,a,s,c,u,w,k,O;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(c=1,u=4,i=vt(t.GG,e._a[q],Vt(E(),1,4).year),a=vt(t.W,1),s=vt(t.E,1),(s<1||s>7)&&(k=!0)):(c=e._locale._week.dow,u=e._locale._week.doy,O=Vt(E(),c,u),i=vt(t.gg,e._a[q],O.year),a=vt(t.w,O.week),t.d!=null?(s=t.d,(s<0||s>6)&&(k=!0)):t.e!=null?(s=t.e+c,(t.e<0||t.e>6)&&(k=!0)):s=c),a<1||a>Ae(i,c,u)?T(e)._overflowWeeks=!0:k!=null?T(e)._overflowWeekday=!0:(w=wa(i,a,s,c,u),e._a[q]=w.year,e._dayOfYear=w.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function Sn(e){if(e._f===d.ISO_8601){Ma(e);return}if(e._f===d.RFC_2822){Sa(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,i,a,s,c,u,w=t.length,k=0,O,Z;for(s=sa(e._f,e._locale).match(dn)||[],Z=s.length,i=0;i<Z;i++)c=s[i],a=(t.match(Kr(c,e))||[])[0],a&&(u=t.substr(0,t.indexOf(a)),u.length>0&&T(e).unusedInput.push(u),t=t.slice(t.indexOf(a)+a.length),k+=a.length),gt[c]?(a?T(e).empty=!1:T(e).unusedTokens.push(c),to(c,a,e)):e._strict&&!a&&T(e).unusedTokens.push(c);T(e).charsLeftOver=w-k,t.length>0&&T(e).unusedInput.push(t),e._a[U]<=12&&T(e).bigHour===!0&&e._a[U]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[U]=ml(e._locale,e._a[U],e._meridiem),O=T(e).era,O!==null&&(e._a[q]=e._locale.erasConvertYear(O,e._a[q])),Mn(e),bn(e)}function ml(e,t,i){var a;return i==null?t:e.meridiemHour!=null?e.meridiemHour(t,i):(e.isPM!=null&&(a=e.isPM(i),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function pl(e){var t,i,a,s,c,u,w=!1,k=e._f.length;if(k===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<k;s++)c=0,u=!1,t=rn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],Sn(t),an(t)&&(u=!0),c+=T(t).charsLeftOver,c+=T(t).unusedTokens.length*10,T(t).score=c,w?c<a&&(a=c,i=t):(a==null||c<a||u)&&(a=c,i=t,u&&(w=!0));ue(e,i||t)}function fl(e){if(!e._d){var t=un(e._i),i=t.day===void 0?t.date:t.day;e._a=Kt([t.year,t.month,i,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),Mn(e)}}function vl(e){var t=new Nt(bn(Ca(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ca(e){var t=e._i,i=e._f;return e._locale=e._locale||Ie(e._l),t===null||i===void 0&&t===""?ei({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),oe(t)?new Nt(bn(t)):(tt(t)?e._d=t:r(i)?pl(e):i?Sn(e):wl(e),an(e)||(e._d=null),e))}function wl(e){var t=e._i;P(t)?e._d=new Date(d.now()):tt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?hl(e):r(t)?(e._a=Kt(t.slice(0),function(i){return parseInt(i,10)}),Mn(e)):o(t)?fl(e):$(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Ta(e,t,i,a,s){var c={};return(t===!0||t===!1)&&(a=t,t=void 0),(i===!0||i===!1)&&(a=i,i=void 0),(o(e)&&_(e)||r(e)&&e.length===0)&&(e=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=s,c._l=i,c._i=e,c._f=t,c._strict=a,vl(c)}function E(e,t,i,a){return Ta(e,t,i,a,!1)}var yl=ie("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=E.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:ei()}),xl=ie("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=E.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:ei()});function Da(e,t){var i,a;if(t.length===1&&r(t[0])&&(t=t[0]),!t.length)return E();for(i=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](i))&&(i=t[a]);return i}function _l(){var e=[].slice.call(arguments,0);return Da("isBefore",e)}function bl(){var e=[].slice.call(arguments,0);return Da("isAfter",e)}var kl=function(){return Date.now?Date.now():+new Date},Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ml(e){var t,i=!1,a,s=Wt.length;for(t in e)if(h(e,t)&&!(Y.call(Wt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<s;++a)if(e[Wt[a]]){if(i)return!1;parseFloat(e[Wt[a]])!==D(e[Wt[a]])&&(i=!0)}return!0}function Sl(){return this._isValid}function Cl(){return ce(NaN)}function gi(e){var t=un(e),i=t.year||0,a=t.quarter||0,s=t.month||0,c=t.week||t.isoWeek||0,u=t.day||0,w=t.hour||0,k=t.minute||0,O=t.second||0,Z=t.millisecond||0;this._isValid=Ml(t),this._milliseconds=+Z+O*1e3+k*6e4+w*1e3*60*60,this._days=+u+c*7,this._months=+s+a*3+i*12,this._data={},this._locale=Ie(),this._bubble()}function mi(e){return e instanceof gi}function Cn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Tl(e,t,i){var a=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),c=0,u;for(u=0;u<a;u++)(i&&e[u]!==t[u]||!i&&D(e[u])!==D(t[u]))&&c++;return c+s}function Oa(e,t){b(e,0,0,function(){var i=this.utcOffset(),a="+";return i<0&&(i=-i,a="-"),a+pe(~~(i/60),2)+t+pe(~~i%60,2)})}Oa("Z",":"),Oa("ZZ",""),y("Z",oi),y("ZZ",oi),R(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=Tn(oi,e)});var Dl=/([\+\-]|\d\d)/gi;function Tn(e,t){var i=(t||"").match(e),a,s,c;return i===null?null:(a=i[i.length-1]||[],s=(a+"").match(Dl)||["-",0,0],c=+(s[1]*60)+D(s[2]),c===0?0:s[0]==="+"?c:-c)}function Dn(e,t){var i,a;return t._isUTC?(i=t.clone(),a=(oe(e)||tt(e)?e.valueOf():E(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),d.updateOffset(i,!1),i):E(e).local()}function On(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function Ol(e,t,i){var a=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Tn(oi,e),e===null)return this}else Math.abs(e)<16&&!i&&(e=e*60);return!this._isUTC&&t&&(s=On(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),a!==e&&(!t||this._changeInProgress?Ra(this,ce(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:On(this)}function Bl(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Al(e){return this.utcOffset(0,e)}function Il(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(On(this),"m")),this}function Rl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Tn(Xr,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ll(e){return this.isValid()?(e=e?E(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Nl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function El(){if(!P(this._isDSTShifted))return this._isDSTShifted;var e={},t;return rn(e,this),e=Ca(e),e._a?(t=e._isUTC?ge(e._a):E(e._a),this._isDSTShifted=this.isValid()&&Tl(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Fl(){return this.isValid()?!this._isUTC:!1}function Pl(){return this.isValid()?this._isUTC:!1}function Ba(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Hl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ce(e,t){var i=e,a=null,s,c,u;return mi(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:$(e)||!isNaN(+e)?(i={},t?i[t]=+e:i.milliseconds=+e):(a=Yl.exec(e))?(s=a[1]==="-"?-1:1,i={y:0,d:D(a[fe])*s,h:D(a[U])*s,m:D(a[le])*s,s:D(a[Be])*s,ms:D(Cn(a[it]*1e3))*s}):(a=Hl.exec(e))?(s=a[1]==="-"?-1:1,i={y:nt(a[2],s),M:nt(a[3],s),w:nt(a[4],s),d:nt(a[5],s),h:nt(a[6],s),m:nt(a[7],s),s:nt(a[8],s)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(u=Vl(E(i.from),E(i.to)),i={},i.ms=u.milliseconds,i.M=u.months),c=new gi(i),mi(e)&&h(e,"_locale")&&(c._locale=e._locale),mi(e)&&h(e,"_isValid")&&(c._isValid=e._isValid),c}ce.fn=gi.prototype,ce.invalid=Cl;function nt(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function Aa(e,t){var i={};return i.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function Vl(e,t){var i;return e.isValid()&&t.isValid()?(t=Dn(t,e),e.isBefore(t)?i=Aa(e,t):(i=Aa(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Ia(e,t){return function(i,a){var s,c;return a!==null&&!isNaN(+a)&&(aa(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),c=i,i=a,a=c),s=ce(i,a),Ra(this,s,e),this}}function Ra(e,t,i,a){var s=t._milliseconds,c=Cn(t._days),u=Cn(t._months);e.isValid()&&(a=a??!0,u&&pa(e,Yt(e,"Month")+u*i),c&&ua(e,"Date",Yt(e,"Date")+c*i),s&&e._d.setTime(e._d.valueOf()+s*i),a&&d.updateOffset(e,c||u))}var zl=Ia(1,"add"),Ul=Ia(-1,"subtract");function La(e){return typeof e=="string"||e instanceof String}function Wl(e){return oe(e)||tt(e)||La(e)||$(e)||Gl(e)||jl(e)||e===null||e===void 0}function jl(e){var t=o(e)&&!_(e),i=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,c,u=a.length;for(s=0;s<u;s+=1)c=a[s],i=i||h(e,c);return t&&i}function Gl(e){var t=r(e),i=!1;return t&&(i=e.filter(function(a){return!$(a)&&La(e)}).length===0),t&&i}function $l(e){var t=o(e)&&!_(e),i=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,c;for(s=0;s<a.length;s+=1)c=a[s],i=i||h(e,c);return t&&i}function ql(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function Zl(e,t){arguments.length===1&&(arguments[0]?Wl(arguments[0])?(e=arguments[0],t=void 0):$l(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var i=e||E(),a=Dn(i,this).startOf("day"),s=d.calendarFormat(this,a)||"sameElse",c=t&&(me(t[s])?t[s].call(this,i):t[s]);return this.format(c||this.localeData().calendar(s,this,E(i)))}function Ql(){return new Nt(this)}function Xl(e,t){var i=oe(e)?e:E(e);return this.isValid()&&i.isValid()?(t=ne(t)||"millisecond",t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function Jl(e,t){var i=oe(e)?e:E(e);return this.isValid()&&i.isValid()?(t=ne(t)||"millisecond",t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function Kl(e,t,i,a){var s=oe(e)?e:E(e),c=oe(t)?t:E(t);return this.isValid()&&s.isValid()&&c.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(s,i):!this.isBefore(s,i))&&(a[1]===")"?this.isBefore(c,i):!this.isAfter(c,i))):!1}function ec(e,t){var i=oe(e)?e:E(e),a;return this.isValid()&&i.isValid()?(t=ne(t)||"millisecond",t==="millisecond"?this.valueOf()===i.valueOf():(a=i.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function tc(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ic(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function nc(e,t,i){var a,s,c;if(!this.isValid())return NaN;if(a=Dn(e,this),!a.isValid())return NaN;switch(s=(a.utcOffset()-this.utcOffset())*6e4,t=ne(t),t){case"year":c=pi(this,a)/12;break;case"month":c=pi(this,a);break;case"quarter":c=pi(this,a)/3;break;case"second":c=(this-a)/1e3;break;case"minute":c=(this-a)/6e4;break;case"hour":c=(this-a)/36e5;break;case"day":c=(this-a-s)/864e5;break;case"week":c=(this-a-s)/6048e5;break;default:c=this-a}return i?c:ae(c)}function pi(e,t){if(e.date()<t.date())return-pi(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(i,"months"),s,c;return t-a<0?(s=e.clone().add(i-1,"months"),c=(t-a)/(a-s)):(s=e.clone().add(i+1,"months"),c=(t-a)/(s-a)),-(i+c)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function ac(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function sc(e){if(!this.isValid())return null;var t=e!==!0,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?ii(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):me(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ii(i,"Z")):ii(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function rc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",i,a,s,c;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),i="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",c=t+'[")]',this.format(i+a+s+c)}function oc(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=ii(this,e);return this.localeData().postformat(t)}function lc(e,t){return this.isValid()&&(oe(e)&&e.isValid()||E(e).isValid())?ce({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function cc(e){return this.from(E(),e)}function dc(e,t){return this.isValid()&&(oe(e)&&e.isValid()||E(e).isValid())?ce({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function hc(e){return this.to(E(),e)}function Na(e){var t;return e===void 0?this._locale._abbr:(t=Ie(e),t!=null&&(this._locale=t),this)}var Ea=ie("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Fa(){return this._locale}var fi=1e3,wt=60*fi,vi=60*wt,Pa=(365*400+97)*24*vi;function yt(e,t){return(e%t+t)%t}function Ya(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-Pa:new Date(e,t,i).valueOf()}function Ha(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-Pa:Date.UTC(e,t,i)}function uc(e){var t,i;if(e=ne(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ha:Ya,e){case"year":t=i(this.year(),0,1);break;case"quarter":t=i(this.year(),this.month()-this.month()%3,1);break;case"month":t=i(this.year(),this.month(),1);break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=i(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=yt(t+(this._isUTC?0:this.utcOffset()*wt),vi);break;case"minute":t=this._d.valueOf(),t-=yt(t,wt);break;case"second":t=this._d.valueOf(),t-=yt(t,fi);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function gc(e){var t,i;if(e=ne(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ha:Ya,e){case"year":t=i(this.year()+1,0,1)-1;break;case"quarter":t=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=i(this.year(),this.month()+1,1)-1;break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=vi-yt(t+(this._isUTC?0:this.utcOffset()*wt),vi)-1;break;case"minute":t=this._d.valueOf(),t+=wt-yt(t,wt)-1;break;case"second":t=this._d.valueOf(),t+=fi-yt(t,fi)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function mc(){return this._d.valueOf()-(this._offset||0)*6e4}function pc(){return Math.floor(this.valueOf()/1e3)}function fc(){return new Date(this.valueOf())}function vc(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function wc(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function xc(){return an(this)}function _c(){return ue({},T(this))}function bc(){return T(this).overflow}function kc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr"),b("NN",0,0,"eraAbbr"),b("NNN",0,0,"eraAbbr"),b("NNNN",0,0,"eraName"),b("NNNNN",0,0,"eraNarrow"),b("y",["y",1],"yo","eraYear"),b("y",["yy",2],0,"eraYear"),b("y",["yyy",3],0,"eraYear"),b("y",["yyyy",4],0,"eraYear"),y("N",Bn),y("NN",Bn),y("NNN",Bn),y("NNNN",Lc),y("NNNNN",Nc),R(["N","NN","NNN","NNNN","NNNNN"],function(e,t,i,a){var s=i._locale.erasParse(e,a,i._strict);s?T(i).era=s:T(i).invalidEra=e}),y("y",mt),y("yy",mt),y("yyy",mt),y("yyyy",mt),y("yo",Ec),R(["y","yy","yyy","yyyy"],q),R(["yo"],function(e,t,i,a){var s;i._locale._eraYearOrdinalRegex&&(s=e.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?t[q]=i._locale.eraYearOrdinalParse(e,s):t[q]=parseInt(e,10)});function Mc(e,t){var i,a,s,c=this._eras||Ie("en")._eras;for(i=0,a=c.length;i<a;++i)switch(typeof c[i].since==="string"&&(s=d(c[i].since).startOf("day"),c[i].since=s.valueOf()),typeof c[i].until){case"undefined":c[i].until=1/0;break;case"string":s=d(c[i].until).startOf("day").valueOf(),c[i].until=s.valueOf();break}return c}function Sc(e,t,i){var a,s,c=this.eras(),u,w,k;for(e=e.toUpperCase(),a=0,s=c.length;a<s;++a)if(u=c[a].name.toUpperCase(),w=c[a].abbr.toUpperCase(),k=c[a].narrow.toUpperCase(),i)switch(t){case"N":case"NN":case"NNN":if(w===e)return c[a];break;case"NNNN":if(u===e)return c[a];break;case"NNNNN":if(k===e)return c[a];break}else if([u,w,k].indexOf(e)>=0)return c[a]}function Cc(e,t){var i=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*i}function Tc(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].name;return""}function Dc(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].narrow;return""}function Oc(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].abbr;return""}function Bc(){var e,t,i,a,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=s[e].since<=s[e].until?1:-1,a=this.clone().startOf("day").valueOf(),s[e].since<=a&&a<=s[e].until||s[e].until<=a&&a<=s[e].since)return(this.year()-d(s[e].since).year())*i+s[e].offset;return this.year()}function Ac(e){return h(this,"_erasNameRegex")||An.call(this),e?this._erasNameRegex:this._erasRegex}function Ic(e){return h(this,"_erasAbbrRegex")||An.call(this),e?this._erasAbbrRegex:this._erasRegex}function Rc(e){return h(this,"_erasNarrowRegex")||An.call(this),e?this._erasNarrowRegex:this._erasRegex}function Bn(e,t){return t.erasAbbrRegex(e)}function Lc(e,t){return t.erasNameRegex(e)}function Nc(e,t){return t.erasNarrowRegex(e)}function Ec(e,t){return t._eraYearOrdinalRegex||mt}function An(){var e=[],t=[],i=[],a=[],s,c,u,w,k,O=this.eras();for(s=0,c=O.length;s<c;++s)u=De(O[s].name),w=De(O[s].abbr),k=De(O[s].narrow),t.push(u),e.push(w),i.push(k),a.push(u),a.push(w),a.push(k);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100}),b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function wi(e,t){b(0,[e,e.length],0,t)}wi("gggg","weekYear"),wi("ggggg","weekYear"),wi("GGGG","isoWeekYear"),wi("GGGGG","isoWeekYear"),y("G",ri),y("g",ri),y("GG",N,K),y("gg",N,K),y("GGGG",mn,gn),y("gggg",mn,gn),y("GGGGG",si,ni),y("ggggg",si,ni),Ft(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,a){t[a.substr(0,2)]=D(e)}),Ft(["gg","GG"],function(e,t,i,a){t[a]=d.parseTwoDigitYear(e)});function Fc(e){return Va.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Pc(e){return Va.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Yc(){return Ae(this.year(),1,4)}function Hc(){return Ae(this.isoWeekYear(),1,4)}function Vc(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)}function zc(){var e=this.localeData()._week;return Ae(this.weekYear(),e.dow,e.doy)}function Va(e,t,i,a,s){var c;return e==null?Vt(this,a,s).year:(c=Ae(e,a,s),t>c&&(t=c),Uc.call(this,e,t,i,a,s))}function Uc(e,t,i,a,s){var c=wa(e,t,i,a,s),u=Ht(c.year,0,c.dayOfYear);return this.year(u.getUTCFullYear()),this.month(u.getUTCMonth()),this.date(u.getUTCDate()),this}b("Q",0,"Qo","quarter"),y("Q",oa),R("Q",function(e,t){t[Oe]=(D(e)-1)*3});function Wc(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date"),y("D",N,pt),y("DD",N,K),y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),R(["D","DD"],fe),R("Do",function(e,t){t[fe]=D(e.match(N)[0])});var za=ft("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear"),y("DDD",ai),y("DDDD",la),R(["DDD","DDDD"],function(e,t,i){i._dayOfYear=D(e)});function jc(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute"),y("m",N,pn),y("mm",N,K),R(["m","mm"],le);var Gc=ft("Minutes",!1);b("s",["ss",2],0,"second"),y("s",N,pn),y("ss",N,K),R(["s","ss"],Be);var $c=ft("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)}),b(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),b(0,["SSS",3],0,"millisecond"),b(0,["SSSS",4],0,function(){return this.millisecond()*10}),b(0,["SSSSS",5],0,function(){return this.millisecond()*100}),b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),y("S",ai,oa),y("SS",ai,K),y("SSS",ai,la);var ze,Ua;for(ze="SSSS";ze.length<=9;ze+="S")y(ze,mt);function qc(e,t){t[it]=D(("0."+e)*1e3)}for(ze="S";ze.length<=9;ze+="S")R(ze,qc);Ua=ft("Milliseconds",!1),b("z",0,0,"zoneAbbr"),b("zz",0,0,"zoneName");function Zc(){return this._isUTC?"UTC":""}function Qc(){return this._isUTC?"Coordinated Universal Time":""}var g=Nt.prototype;g.add=zl,g.calendar=Zl,g.clone=Ql,g.diff=nc,g.endOf=gc,g.format=oc,g.from=lc,g.fromNow=cc,g.to=dc,g.toNow=hc,g.get=so,g.invalidAt=bc,g.isAfter=Xl,g.isBefore=Jl,g.isBetween=Kl,g.isSame=ec,g.isSameOrAfter=tc,g.isSameOrBefore=ic,g.isValid=xc,g.lang=Ea,g.locale=Na,g.localeData=Fa,g.max=xl,g.min=yl,g.parsingFlags=_c,g.set=ro,g.startOf=uc,g.subtract=Ul,g.toArray=vc,g.toObject=wc,g.toDate=fc,g.toISOString=sc,g.inspect=rc,typeof Symbol<"u"&&Symbol.for!=null&&(g[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),g.toJSON=yc,g.toString=ac,g.unix=pc,g.valueOf=mc,g.creationData=kc,g.eraName=Tc,g.eraNarrow=Dc,g.eraAbbr=Oc,g.eraYear=Bc,g.year=ha,g.isLeapYear=ao,g.weekYear=Fc,g.isoWeekYear=Pc,g.quarter=g.quarters=Wc,g.month=fa,g.daysInMonth=fo,g.week=g.weeks=Mo,g.isoWeek=g.isoWeeks=So,g.weeksInYear=Vc,g.weeksInWeekYear=zc,g.isoWeeksInYear=Yc,g.isoWeeksInISOWeekYear=Hc,g.date=za,g.day=g.days=Po,g.weekday=Yo,g.isoWeekday=Ho,g.dayOfYear=jc,g.hour=g.hours=$o,g.minute=g.minutes=Gc,g.second=g.seconds=$c,g.millisecond=g.milliseconds=Ua,g.utcOffset=Ol,g.utc=Al,g.local=Il,g.parseZone=Rl,g.hasAlignedHourOffset=Ll,g.isDST=Nl,g.isLocal=Fl,g.isUtcOffset=Pl,g.isUtc=Ba,g.isUTC=Ba,g.zoneAbbr=Zc,g.zoneName=Qc,g.dates=ie("dates accessor is deprecated. Use date instead.",za),g.months=ie("months accessor is deprecated. Use month instead",fa),g.years=ie("years accessor is deprecated. Use year instead",ha),g.zone=ie("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Bl),g.isDSTShifted=ie("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",El);function Xc(e){return E(e*1e3)}function Jc(){return E.apply(null,arguments).parseZone()}function Wa(e){return e}var I=ln.prototype;I.calendar=Er,I.longDateFormat=Hr,I.invalidDate=zr,I.ordinal=jr,I.preparse=Wa,I.postformat=Wa,I.relativeTime=$r,I.pastFuture=qr,I.set=Lr,I.eras=Mc,I.erasParse=Sc,I.erasConvertYear=Cc,I.erasAbbrRegex=Ic,I.erasNameRegex=Ac,I.erasNarrowRegex=Rc,I.months=uo,I.monthsShort=go,I.monthsParse=po,I.monthsRegex=wo,I.monthsShortRegex=vo,I.week=xo,I.firstDayOfYear=ko,I.firstDayOfWeek=bo,I.weekdays=Ro,I.weekdaysMin=No,I.weekdaysShort=Lo,I.weekdaysParse=Fo,I.weekdaysRegex=Vo,I.weekdaysShortRegex=zo,I.weekdaysMinRegex=Uo,I.isPM=jo,I.meridiem=qo;function yi(e,t,i,a){var s=Ie(),c=ge().set(a,t);return s[i](c,e)}function ja(e,t,i){if($(e)&&(t=e,e=void 0),e=e||"",t!=null)return yi(e,t,i,"month");var a,s=[];for(a=0;a<12;a++)s[a]=yi(e,a,i,"month");return s}function In(e,t,i,a){typeof e=="boolean"?($(t)&&(i=t,t=void 0),t=t||""):(t=e,i=t,e=!1,$(t)&&(i=t,t=void 0),t=t||"");var s=Ie(),c=e?s._week.dow:0,u,w=[];if(i!=null)return yi(t,(i+c)%7,a,"day");for(u=0;u<7;u++)w[u]=yi(t,(u+c)%7,a,"day");return w}function Kc(e,t){return ja(e,t,"months")}function ed(e,t){return ja(e,t,"monthsShort")}function td(e,t,i){return In(e,t,i,"weekdays")}function id(e,t,i){return In(e,t,i,"weekdaysShort")}function nd(e,t,i){return In(e,t,i,"weekdaysMin")}Ve("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+i}}),d.lang=ie("moment.lang is deprecated. Use moment.locale instead.",Ve),d.langData=ie("moment.langData is deprecated. Use moment.localeData instead.",Ie);var Re=Math.abs;function ad(){var e=this._data;return this._milliseconds=Re(this._milliseconds),this._days=Re(this._days),this._months=Re(this._months),e.milliseconds=Re(e.milliseconds),e.seconds=Re(e.seconds),e.minutes=Re(e.minutes),e.hours=Re(e.hours),e.months=Re(e.months),e.years=Re(e.years),this}function Ga(e,t,i,a){var s=ce(t,i);return e._milliseconds+=a*s._milliseconds,e._days+=a*s._days,e._months+=a*s._months,e._bubble()}function sd(e,t){return Ga(this,e,t,1)}function rd(e,t){return Ga(this,e,t,-1)}function $a(e){return e<0?Math.floor(e):Math.ceil(e)}function od(){var e=this._milliseconds,t=this._days,i=this._months,a=this._data,s,c,u,w,k;return e>=0&&t>=0&&i>=0||e<=0&&t<=0&&i<=0||(e+=$a(Rn(i)+t)*864e5,t=0,i=0),a.milliseconds=e%1e3,s=ae(e/1e3),a.seconds=s%60,c=ae(s/60),a.minutes=c%60,u=ae(c/60),a.hours=u%24,t+=ae(u/24),k=ae(qa(t)),i+=k,t-=$a(Rn(k)),w=ae(i/12),i%=12,a.days=t,a.months=i,a.years=w,this}function qa(e){return e*4800/146097}function Rn(e){return e*146097/4800}function ld(e){if(!this.isValid())return NaN;var t,i,a=this._milliseconds;if(e=ne(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,i=this._months+qa(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(Rn(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function Le(e){return function(){return this.as(e)}}var Za=Le("ms"),cd=Le("s"),dd=Le("m"),hd=Le("h"),ud=Le("d"),gd=Le("w"),md=Le("M"),pd=Le("Q"),fd=Le("y"),vd=Za;function wd(){return ce(this)}function yd(e){return e=ne(e),this.isValid()?this[e+"s"]():NaN}function at(e){return function(){return this.isValid()?this._data[e]:NaN}}var xd=at("milliseconds"),_d=at("seconds"),bd=at("minutes"),kd=at("hours"),Md=at("days"),Sd=at("months"),Cd=at("years");function Td(){return ae(this.days()/7)}var Ne=Math.round,xt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Dd(e,t,i,a,s){return s.relativeTime(t||1,!!i,e,a)}function Od(e,t,i,a){var s=ce(e).abs(),c=Ne(s.as("s")),u=Ne(s.as("m")),w=Ne(s.as("h")),k=Ne(s.as("d")),O=Ne(s.as("M")),Z=Ne(s.as("w")),Ee=Ne(s.as("y")),Ue=c<=i.ss&&["s",c]||c<i.s&&["ss",c]||u<=1&&["m"]||u<i.m&&["mm",u]||w<=1&&["h"]||w<i.h&&["hh",w]||k<=1&&["d"]||k<i.d&&["dd",k];return i.w!=null&&(Ue=Ue||Z<=1&&["w"]||Z<i.w&&["ww",Z]),Ue=Ue||O<=1&&["M"]||O<i.M&&["MM",O]||Ee<=1&&["y"]||["yy",Ee],Ue[2]=t,Ue[3]=+e>0,Ue[4]=a,Dd.apply(null,Ue)}function Bd(e){return e===void 0?Ne:typeof e=="function"?(Ne=e,!0):!1}function Ad(e,t){return xt[e]===void 0?!1:t===void 0?xt[e]:(xt[e]=t,e==="s"&&(xt.ss=t-1),!0)}function Id(e,t){if(!this.isValid())return this.localeData().invalidDate();var i=!1,a=xt,s,c;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(i=e),typeof t=="object"&&(a=Object.assign({},xt,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),s=this.localeData(),c=Od(this,!i,a,s),i&&(c=s.pastFuture(+this,c)),s.postformat(c)}var Ln=Math.abs;function _t(e){return(e>0)-(e<0)||+e}function xi(){if(!this.isValid())return this.localeData().invalidDate();var e=Ln(this._milliseconds)/1e3,t=Ln(this._days),i=Ln(this._months),a,s,c,u,w=this.asSeconds(),k,O,Z,Ee;return w?(a=ae(e/60),s=ae(a/60),e%=60,a%=60,c=ae(i/12),i%=12,u=e?e.toFixed(3).replace(/\.?0+$/,""):"",k=w<0?"-":"",O=_t(this._months)!==_t(w)?"-":"",Z=_t(this._days)!==_t(w)?"-":"",Ee=_t(this._milliseconds)!==_t(w)?"-":"",k+"P"+(c?O+c+"Y":"")+(i?O+i+"M":"")+(t?Z+t+"D":"")+(s||a||e?"T":"")+(s?Ee+s+"H":"")+(a?Ee+a+"M":"")+(e?Ee+u+"S":"")):"P0D"}var B=gi.prototype;B.isValid=Sl,B.abs=ad,B.add=sd,B.subtract=rd,B.as=ld,B.asMilliseconds=Za,B.asSeconds=cd,B.asMinutes=dd,B.asHours=hd,B.asDays=ud,B.asWeeks=gd,B.asMonths=md,B.asQuarters=pd,B.asYears=fd,B.valueOf=vd,B._bubble=od,B.clone=wd,B.get=yd,B.milliseconds=xd,B.seconds=_d,B.minutes=bd,B.hours=kd,B.days=Md,B.weeks=Td,B.months=Sd,B.years=Cd,B.humanize=Id,B.toISOString=xi,B.toString=xi,B.toJSON=xi,B.locale=Na,B.localeData=Fa,B.toIsoString=ie("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",xi),B.lang=Ea,b("X",0,0,"unix"),b("x",0,0,"valueOf"),y("x",ri),y("X",Jr),R("X",function(e,t,i){i._d=new Date(parseFloat(e)*1e3)}),R("x",function(e,t,i){i._d=new Date(D(e))});return d.version="2.30.1",n(E),d.fn=g,d.min=_l,d.max=bl,d.now=kl,d.utc=ge,d.unix=Xc,d.months=Kc,d.isDate=tt,d.locale=Ve,d.invalid=ei,d.duration=ce,d.isMoment=oe,d.weekdays=td,d.parseZone=Jc,d.localeData=Ie,d.isDuration=mi,d.monthsShort=ed,d.weekdaysMin=nd,d.defineLocale=_n,d.updateLocale=Jo,d.locales=Ko,d.weekdaysShort=id,d.normalizeUnits=ne,d.relativeTimeRounding=Bd,d.relativeTimeThreshold=Ad,d.calendarFormat=ql,d.prototype=g,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})});function Nd(l,d){if(l&1&&(p(0,"div",3),M(1,"div",4),f()),l&2){let n=A(2);v(),he("width",n.diameter)("height",n.diameter)}}function Ed(l,d){if(l&1&&M(0,"div",5),l&2){let n=A().ngIf,r=A();he("background",r.color)("height",r.height)("width",n+"%")}}function Fd(l,d){if(l&1&&(zn(0),rt(1,Nd,2,4,"div",1)(2,Ed,1,6,"div",2),Un()),l&2){let n=A();v(),x("ngIf",n.includeSpinner),v(),x("ngIf",n.includeBar)}}function Pd(l,d){if(l&1&&(p(0,"div",3),M(1,"div",4),f()),l&2){let n=A(2);v(),he("width",n.diameter)("height",n.diameter)}}function Yd(l,d){if(l&1&&M(0,"div",5),l&2){let n=A().ngIf,r=A();he("background",r.color)("height",r.height)("width",n+"%")}}function Hd(l,d){if(l&1&&(zn(0),rt(1,Pd,2,4,"div",1)(2,Yd,1,6,"div",2),Un()),l&2){let n=A();v(),x("ngIf",n.includeSpinner),v(),x("ngIf",n.includeBar)}}var Vd="[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",$n=class{constructor(d={}){this.config=d,this.state={action:null,value:0,initialValue:0},this.requests=null,this.disabled=!1,this.stream$=new Nn,this._value$=null,this.timer$=n=>{let r=En(n);switch(n.action){case"start":case"increment":case"set":{n.action==="start"&&this.config.latencyThreshold===0&&n.value===0&&(n.value=n.initialValue),this.requests>0&&(r=Fn(this.config.latencyThreshold,250).pipe(je(o=>We(ee({},n),{value:o===0?this.state.value||n.initialValue:this._increment()}))));break}case"complete":case"stop":{r=n.value===0?En(ee({},n)):Fn(0,500).pipe(_i(2),je(o=>({value:o===0?100:0})));break}}return r.pipe(je(o=>We(ee({},o),{action:"set"})),ns(o=>this.next(o,!1)))},this.config=ee({latencyThreshold:0},d)}get value$(){return this._value$?this._value$:this._value$=this.stream$.pipe(Yn(this.state),bt(d=>this.timer$(d)),is(),je(d=>d.value))}start(d=2){this.disabled||this.next({action:"start",initialValue:d})}stop(){this.next({action:"stop"})}complete(){this.next({action:"complete"})}disable(){this.disabled=!0}set(d){this.next({action:"set",value:d})}increment(d=0){this.next({action:"increment",value:d})}next(d,n=!0){switch(d.action){case"start":this.requests=(this.requests||0)+1;break;case"complete":if(this.requests=(this.requests||1)-1,this.requests>0)return;break;case"stop":this.requests=0;break;case"increment":d.value=this._increment(d.value);break}this.state=ee(We(ee({},this.state),{action:null}),d),n&&this.stream$.next(this.state)}_increment(d=0){let n=this.state.value;return n>=99&&(d=0),d===0&&(n>=0&&n<25?d=Math.random()*3+3:n>=25&&n<65?d=Math.random()*3:n>=65&&n<90?d=Math.random()*2:n>=90&&n<99?d=.5:d=0),d+n}},zd=new te("LOADING_BAR_CONFIG");var Ud=(()=>{class l{get progress$(){return this.value$}constructor(n,r={},o){this.platformId=n,this.config=r,this.zone=o,this.refs={},this.streams$=new Nn,this.value$=this.streams$.pipe(Yn(null),bt(()=>es(Object.keys(this.refs).map(h=>this.refs[h].value$))),Wd(this.zone),je(h=>Math.max(0,...h)))}start(n=2){this.useRef().start(n)}set(n){this.useRef().set(n)}increment(n){this.useRef().increment(n)}complete(){this.useRef().complete()}stop(){this.useRef().stop()}useRef(n="default"){return this.refs[n]||(this.refs[n]=new $n(this.config),this.streams$.next(),_s(this.platformId)||this.refs[n].disable()),this.refs[n]}static{this.\u0275fac=function(r){return new(r||l)(Ge(ds),Ge(zd,8),Ge(kt,8))}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();function Wd(l){return l?d=>new Ja(n=>d.subscribe(r=>l.run(()=>n.next(r)),r=>l.run(()=>n.error(r)),()=>l.run(()=>n.complete()))):d=>d}var jd=(()=>{class l{get value$(){return this.ref?this.loader.useRef(this.ref).value$:this.loader.value$}constructor(n){this.loader=n,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.color="#29d"}static{this.\u0275fac=function(r){return new(r||l)(gs(Ud))}}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(de("fixed",o.fixed),he("color",o.color))},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",color:"color",value:"value",ref:"ref",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(rt(0,Fd,3,2,"ng-container",0),Ye(1,"async")),r&2&&x("ngIf",o.value!=null?o.value:He(1,1,o.value$))},dependencies:[Bi,Oi],styles:["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],changeDetection:0})}}return l})(),nr=(()=>{class l extends jd{static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=Mt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(de("fixed",o.fixed),he("color",o.color))},standalone:!1,features:[se],decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(rt(0,Hd,3,2,"ng-container",0),Ye(1,"async")),r&2&&x("ngIf",o.value!=null?o.value:He(1,1,o.value$))},dependencies:[Oi,Bi],styles:[Vd],changeDetection:0})}}return l})(),ar=(()=>{class l{static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275mod=xe({type:l})}static{this.\u0275inj=ve({imports:[Ai]})}}return l})();var sr=(()=>{class l{constructor(){}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-page-loader"]],decls:1,vars:0,consts:[["color","#3173D6"]],template:function(r,o){r&1&&M(0,"ngx-loading-bar",0)},dependencies:[ar,nr],encapsulation:2})}}return l})();var rr=(()=>{class l{constructor(){this._router=m(Je),this._router.events.subscribe(n=>{n instanceof Cs&&(this.currentUrl=n.url.substring(n.url.lastIndexOf("/")+1)),n instanceof Ri,window.scrollTo(0,0)})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-root"]],features:[Qe([])],decls:2,vars:0,template:function(r,o){r&1&&M(0,"app-page-loader")(1,"router-outlet")},dependencies:[Os,Tt,sr],encapsulation:2})}}return l})();var $d=["switch"],qd=["*"];function Zd(l,d){l&1&&(p(0,"span",11),rs(),p(1,"svg",13),M(2,"path",14),f(),p(3,"svg",15),M(4,"path",16),f()())}var Qd=new te("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Ki=class{source;checked;constructor(d,n){this.source=d,this.checked=n}},qn=(()=>{class l{_elementRef=m(we);_focusMonitor=m(Yi);_changeDetectorRef=m(qt);defaults=m(Qd);_onChange=n=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(n){return new Ki(this,n)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Vi();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(n){this._checked=n,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new j;toggleChange=new j;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){m(Hi).load(zi);let n=m(new Di("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=n==null?0:parseInt(n)||0,this.color=r.color||"accent",this.id=this._uniqueId=m(Qt).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(n=>{n==="keyboard"||n==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):n||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(n){n.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(n){this.checked=!!n}registerOnChange(n){this._onChange=n}registerOnTouched(n){this._onTouched=n}validate(n){return this.required&&n.value!==!0?{required:!0}:null}registerOnValidatorChange(n){this._validatorOnChange=n}setDisabledState(n){this.disabled=n,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Ki(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-slide-toggle"]],viewQuery:function(r,o){if(r&1&&Ci($d,5),r&2){let h;St(h=Ct())&&(o._switchElement=h.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(r,o){r&2&&(ps("id",o.id),de("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),_e(o.color?"mat-"+o.color:""),dt("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",G],color:"color",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",n=>n==null?0:ws(n)],checked:[2,"checked","checked",G],hideIcon:[2,"hideIcon","hideIcon",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[Qe([{provide:Pi,useExisting:bi(()=>l),multi:!0},{provide:Ps,useExisting:l,multi:!0}]),ki],ngContentSelectors:qd,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,o){if(r&1&&(Gt(),p(0,"div",1)(1,"button",2,0),S("click",function(){return o._handleClick()}),M(3,"div",3)(4,"span",4),p(5,"span",5)(6,"span",6)(7,"span",7),M(8,"span",8),f(),p(9,"span",9),M(10,"span",10),f(),Q(11,Zd,5,0,"span",11),f()()(),p(12,"label",12),S("click",function(_){return _.stopPropagation()}),$t(13),f()()),r&2){let h=Ze(2);x("labelPosition",o.labelPosition),v(),dt("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),x("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),de("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(9),x("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),v(),X(o.hideIcon?-1:11),v(),x("for",o.buttonId),de("id",o._labelId)}},dependencies:[Ui,Hs],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return l})(),or=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=xe({type:l});static \u0275inj=ve({imports:[qn,Se]})}return l})();var ah=["button"],sh=["*"];function rh(l,d){if(l&1&&(p(0,"div",2),M(1,"mat-pseudo-checkbox",6),f()),l&2){let n=A();v(),x("disabled",n.disabled)}}var lr=new te("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),cr=new te("MatButtonToggleGroup"),oh={provide:Pi,useExisting:bi(()=>Zn),multi:!0},en=class{source;value;constructor(d,n){this.source=d,this.value=n}},Zn=(()=>{class l{_changeDetector=m(qt);_dir=m(Bs,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(n){this._name=n,this._markButtonsForCheck()}_name=m(Qt).getId("mat-button-toggle-group-");vertical=!1;get value(){let n=this._selectionModel?this._selectionModel.selected:[];return this.multiple?n.map(r=>r.value):n[0]?n[0].value:void 0}set value(n){this._setSelectionByValue(n),this.valueChange.emit(this.value)}valueChange=new j;get selected(){let n=this._selectionModel?this._selectionModel.selected:[];return this.multiple?n:n[0]||null}get multiple(){return this._multiple}set multiple(n){this._multiple=n,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new j;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(n){this._hideSingleSelectionIndicator=n,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(n){this._hideMultipleSelectionIndicator=n,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let n=m(lr,{optional:!0});this.appearance=n&&n.appearance?n.appearance:"standard",this._hideSingleSelectionIndicator=n?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=n?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new js(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(n=>n.checked)),this.multiple||this._initializeTabIndex()}writeValue(n){this.value=n,this._changeDetector.markForCheck()}registerOnChange(n){this._controlValueAccessorChangeFn=n}registerOnTouched(n){this._onTouched=n}setDisabledState(n){this.disabled=n}_keydown(n){if(this.multiple||this.disabled||Ys(n))return;let o=n.target.id,h=this._buttonToggles.toArray().findIndex(P=>P.buttonId===o),_=null;switch(n.keyCode){case 32:case 13:_=this._buttonToggles.get(h)||null;break;case 38:_=this._getNextButton(h,-1);break;case 37:_=this._getNextButton(h,this.dir==="ltr"?-1:1);break;case 40:_=this._getNextButton(h,1);break;case 39:_=this._getNextButton(h,this.dir==="ltr"?1:-1);break;default:return}_&&(n.preventDefault(),_._onButtonClick(),_.focus())}_emitChangeEvent(n){let r=new en(n,this.value);this._rawValue=r.value,this._controlValueAccessorChangeFn(r.value),this.change.emit(r)}_syncButtonToggle(n,r,o=!1,h=!1){!this.multiple&&this.selected&&!n.checked&&(this.selected.checked=!1),this._selectionModel?r?this._selectionModel.select(n):this._selectionModel.deselect(n):h=!0,h?Promise.resolve().then(()=>this._updateModelValue(n,o)):this._updateModelValue(n,o)}_isSelected(n){return this._selectionModel&&this._selectionModel.isSelected(n)}_isPrechecked(n){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(r=>n.value!=null&&r===n.value):n.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(n=>{n.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let n=0;n<this._buttonToggles.length;n++){let r=this._buttonToggles.get(n);if(!r.disabled){r.tabIndex=0;break}}}_getNextButton(n,r){let o=this._buttonToggles;for(let h=1;h<=o.length;h++){let _=(n+r*h+o.length)%o.length,P=o.get(_);if(P&&!P.disabled)return P}return null}_setSelectionByValue(n){if(this._rawValue=n,!this._buttonToggles)return;let r=this._buttonToggles.toArray();if(this.multiple&&n?(Array.isArray(n),this._clearSelection(),n.forEach(o=>this._selectValue(o,r))):(this._clearSelection(),this._selectValue(n,r)),!this.multiple&&r.every(o=>o.tabIndex===-1)){for(let o of r)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(n=>{n.checked=!1,this.multiple||(n.tabIndex=-1)})}_selectValue(n,r){for(let o of r)if(o.value===n){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(n,r){r&&this._emitChangeEvent(n),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(n=>n._markForCheck())}static \u0275fac=function(r){return new(r||l)};static \u0275dir=Vn({type:l,selectors:[["mat-button-toggle-group"]],contentQueries:function(r,o,h){if(r&1&&Wn(h,tn,5),r&2){let _;St(_=Ct())&&(o._buttonToggles=_)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(r,o){r&1&&S("keydown",function(_){return o._keydown(_)}),r&2&&(de("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),dt("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",G],value:"value",multiple:[2,"multiple","multiple",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",G],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",G]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Qe([oh,{provide:cr,useExisting:l}])]})}return l})(),tn=(()=>{class l{_changeDetectorRef=m(qt);_elementRef=m(we);_focusMonitor=m(Yi);_idGenerator=m(Qt);_animationDisabled=Vi();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(n){this._tabIndex.set(n)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(n){this._appearance=n}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(n){n!==this._checked&&(this._checked=n,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(n){this._disabled=n}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n}_disabledInteractive;change=new j;constructor(){m(Hi).load(zi);let n=m(cr,{optional:!0}),r=m(new Di("tabindex"),{optional:!0})||"",o=m(lr,{optional:!0});this._tabIndex=ls(parseInt(r)||0),this.buttonToggleGroup=n,this._appearance=o&&o.appearance?o.appearance:"standard",this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let n=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),n&&(n._isPrechecked(this)?this.checked=!0:n._isSelected(this)!==this._checked&&n._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let n=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),n&&n._isSelected(this)&&n._syncButtonToggle(this,!1,!1,!0)}focus(n){this._buttonElement.nativeElement.focus(n)}_onButtonClick(){if(this.disabled)return;let n=this.isSingleSelector()?!0:!this._checked;if(n!==this._checked&&(this._checked=n,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let r=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);r&&(r.tabIndex=-1),this.tabIndex=0}this.change.emit(new en(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-button-toggle"]],viewQuery:function(r,o){if(r&1&&Ci(ah,5),r&2){let h;St(h=Ct())&&(o._buttonElement=h.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(r,o){r&1&&S("focus",function(){return o.focus()}),r&2&&(de("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),dt("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",G],appearance:"appearance",checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:sh,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(r,o){if(r&1&&(Gt(),p(0,"button",1,0),S("click",function(){return o._onButtonClick()}),Q(2,rh,2,1,"div",2),p(3,"span",3),$t(4),f()(),M(5,"span",4)(6,"span",5)),r&2){let h=Ze(1);x("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),de("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(2),X(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),v(4),x("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Ui,Gs],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return l})(),dr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=xe({type:l});static \u0275inj=ve({imports:[$s,tn,Se]})}return l})();var ht=l=>({active:l}),hr=(()=>{class l extends Ce{constructor(){super(...arguments),this.document=m(J),this.renderer=m(ye),this.elementRef=m(we),this.rightSidebarService=m(Ot),this.configService=m(Ke),this.directionService=m(et),this.localStorageService=m(re),this.selectedBgColor="white",this.showpanel=!1,this.isDarkSidebar=!1,this.isDarTheme=!1,this.headerHeight=60,this.isRtl=!1}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.rightSidebarService.sidebarState.subscribe(n=>{this.isOpenSidebar=n}),this.setRightSidebarWindowHeight()}ngAfterViewInit(){this.selectedBgColor=this.localStorageService.get("choose_skin_active"),this.localStorageService.get("menuOption")&&(this.localStorageService.get("menuOption")==="menu_dark"?this.isDarkSidebar=!0:this.localStorageService.get("menuOption")==="menu_light"&&(this.isDarkSidebar=!1)),this.localStorageService.get("theme")&&(this.localStorageService.get("theme")==="dark"?this.isDarTheme=!0:this.localStorageService.get("theme")==="light"&&(this.isDarTheme=!1)),this.localStorageService.get("isRtl")&&(this.isRtl=this.localStorageService.get("isRtl")==="true")}selectTheme(n){this.selectedBgColor=n;let r=this.elementRef.nativeElement.querySelector(".settingSidebar .choose-theme li.active").getAttribute("data-theme");this.renderer.removeClass(this.document.body,"theme-"+r),this.renderer.addClass(this.document.body,"theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin","theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin_active",this.selectedBgColor)}lightSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white");let n="menu_light";this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("menuOption",n)}darkSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black");let n="menu_dark";this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("menuOption",n)}lightThemeBtnClick(){this.renderer.removeClass(this.document.body,"dark"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"light"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"theme-white");let n="light",r="menu_light";this.selectedBgColor="white",this.isDarkSidebar=!1,this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("choose_skin","theme-white"),this.localStorageService.set("theme",n),this.localStorageService.set("menuOption",r)}darkThemeBtnClick(){this.renderer.removeClass(this.document.body,"light"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"dark"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"theme-black");let n="dark",r="menu_dark";this.selectedBgColor="black",this.isDarkSidebar=!0,this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("choose_skin","theme-black"),this.localStorageService.set("theme",n),this.localStorageService.set("menuOption",r)}setRightSidebarWindowHeight(){this.innerHeight=window.innerHeight;let n=this.innerHeight-this.headerHeight;this.maxHeight=n+"",this.maxWidth="500px"}onClickedOutside(n){n.target.id!=="settingBtn"&&this.isOpenSidebar===!0&&this.toggleRightSidebar()}toggleRightSidebar(){this.rightSidebarService.setRightSidebar(this.isOpenSidebar=!this.isOpenSidebar)}switchDirection(n){let r=String(n.checked);r==="false"&&document.getElementsByTagName("html")[0].hasAttribute("dir")?(document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.directionService.updateDirection("ltr")):r==="true"&&!document.getElementsByTagName("html")[0].hasAttribute("dir")&&(document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.directionService.updateDirection("rtl")),this.localStorageService.set("isRtl",r),this.isRtl=n.checked}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.isRtl=!0,this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.isRtl=!1,this.localStorageService.set("isRtl","false")}static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=Mt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-right-sidebar"]],features:[se],decls:60,vars:31,consts:[[1,"settingSidebar",3,"ngClass"],["href","javascript:void(0)",1,"settingPanelToggle",3,"click"],[3,"icon"],["visibility","hover"],[1,"settingSidebar-body","ps-container","ps-theme-default"],[1,"fade","show","active"],[1,"setting-panel-header"],[1,"p-15","border-bottom","rightSetting"],[1,"font-medium","m-b-10"],[1,"flex","flex-wrap","hiddenradio"],[1,"flex","flex-col"],["type","radio","name","value","value","light",3,"click","checked"],["src","assets/images/light.png"],[1,"mt-1","text-md","text-center"],[1,"flex","flex-col","mt-3"],["type","radio","name","value","value","dark",3,"click","checked"],["src","assets/images/dark.png"],[1,"rightSetting"],[1,"mt-2",3,"value"],["value","light",3,"click"],["value","dark",3,"click"],[1,"theme-setting-options"],[1,"choose-theme","list-unstyled","mb-0"],["data-theme","white",3,"click","ngClass"],[1,"white"],["data-theme","black",3,"click","ngClass"],[1,"black"],["data-theme","purple",3,"click","ngClass"],[1,"purple"],["data-theme","orange",3,"click","ngClass"],[1,"orange"],["data-theme","cyan",3,"click","ngClass"],[1,"cyan"],["data-theme","green",3,"click","ngClass"],[1,"green"],["data-theme","blue",3,"click","ngClass"],[1,"blue"],[1,"mt-2",3,"change","checked"],[1,"rtl-direction-label"]],template:function(r,o){r&1&&(p(0,"div",0)(1,"a",1),S("click",function(){return o.toggleRightSidebar()}),M(2,"app-feather-icons",2),f(),p(3,"ng-scrollbar",3)(4,"div",4)(5,"div",5)(6,"div",6),C(7,"Setting Panel "),f(),p(8,"div",7)(9,"p",8),C(10,"Select Layout"),f(),p(11,"div",9)(12,"div",10)(13,"label")(14,"input",11),S("click",function(){return o.lightThemeBtnClick()}),f(),M(15,"img",12),f(),p(16,"div",13),C(17," Light "),f()(),p(18,"div",14)(19,"label")(20,"input",15),S("click",function(){return o.darkThemeBtnClick()}),f(),M(21,"img",16),f(),p(22,"div",13),C(23," Dark "),f()()()(),p(24,"div",17)(25,"p",8),C(26,"Sidebar Menu Color"),f(),p(27,"mat-button-toggle-group",18)(28,"mat-button-toggle",19),S("click",function(){return o.lightSidebarBtnClick()}),C(29,"Light"),f(),p(30,"mat-button-toggle",20),S("click",function(){return o.darkSidebarBtnClick()}),C(31,"Dark"),f()()(),p(32,"div",7)(33,"p",8),C(34,"Color Theme"),f(),p(35,"div",21)(36,"ul",22)(37,"li",23),S("click",function(){return o.selectTheme("white")}),M(38,"div",24),f(),p(39,"li",25),S("click",function(){return o.selectTheme("black")}),M(40,"div",26),f(),p(41,"li",27),S("click",function(){return o.selectTheme("purple")}),M(42,"div",28),f(),p(43,"li",29),S("click",function(){return o.selectTheme("orange")}),M(44,"div",30),f(),p(45,"li",31),S("click",function(){return o.selectTheme("cyan")}),M(46,"div",32),f(),p(47,"li",33),S("click",function(){return o.selectTheme("green")}),M(48,"div",34),f(),p(49,"li",35),S("click",function(){return o.selectTheme("blue")}),M(50,"div",36),f()()()(),p(51,"div",17)(52,"p",8),C(53,"RTL Layout"),f(),p(54,"mat-slide-toggle",37),S("change",function(_){return o.switchDirection(_)}),f(),p(55,"div",38)(56,"span"),C(57,"LTR"),f(),p(58,"span"),C(59,"RTL"),f()()()()()()()),r&2&&(x("ngClass",o.isOpenSidebar?"showSettingPanel":""),v(2),_e("setting-sidebar-icon"),x("icon","settings"),v(),he("height",o.maxHeight+"px"),v(11),x("checked",o.isDarTheme===!1),v(6),x("checked",o.isDarTheme===!0),v(7),x("value",o.isDarkSidebar?"dark":"light"),v(10),x("ngClass",H(17,ht,o.selectedBgColor==="white")),v(2),x("ngClass",H(19,ht,o.selectedBgColor==="black")),v(2),x("ngClass",H(21,ht,o.selectedBgColor==="purple")),v(2),x("ngClass",H(23,ht,o.selectedBgColor==="orange")),v(2),x("ngClass",H(25,ht,o.selectedBgColor==="cyan")),v(2),x("ngClass",H(27,ht,o.selectedBgColor==="green")),v(2),x("ngClass",H(29,ht,o.selectedBgColor==="blue")),v(5),x("checked",o.isRtl))},dependencies:[Xe,At,Bt,dr,Zn,tn,or,qn],encapsulation:2,changeDetection:0})}}return l})();var ur=(()=>{class l{constructor(){this.http=m(Me)}getRouteInfo(){return this.http.get("assets/data/routes.json").pipe(je(n=>n.routes))}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Te=l=>[l];function ch(l,d){if(l&1&&(p(0,"div",16),C(1),Ye(2,"translate"),f()),l&2){let n=A(2).$implicit;v(),be(He(2,1,n.title))}}function dh(l,d){if(l&1&&(p(0,"span",20),C(1),f()),l&2){let n=A(3).$implicit;x("ngClass",H(2,Te,n.badgeClass)),v(),be(n.badge)}}function hh(l,d){if(l&1){let n=qe();p(0,"a",19),S("click",function(o){Fe(n);let h=A(2).$implicit,_=A();return Pe(_.callToggleMenu(o,h.submenu.length))}),p(1,"i",20),C(2),f(),p(3,"span",14),C(4),Ye(5,"translate"),f(),Q(6,dh,2,4,"span",20),f()}if(l&2){let n=A(2).$implicit;x("routerLink",n.class===""?H(8,Te,n.path):null)("ngClass",H(10,Te,n.class)),v(),x("ngClass",H(12,Te,n.iconType)),v(),be(n.icon),v(2),ke("",He(5,6,n.title)," "),v(2),X(n.badge!==""?6:-1)}}function uh(l,d){if(l&1){let n=qe();p(0,"li",15)(1,"a",21),S("click",function(o){let h=Fe(n).$implicit,_=A(8);return Pe(_.callToggleMenu(o,h.submenu.length))}),C(2),Ye(3,"translate"),f()()}if(l&2){let n=d.$implicit;x("routerLinkActive",n.submenu.length>0?"":"active"),v(),x("routerLink",n.submenu.length>0?null:H(6,Te,n.path))("ngClass",H(8,Te,n.class)),v(),ke(" ",He(3,4,n.title)," ")}}function gh(l,d){if(l&1&&(p(0,"ul",23),lt(1,uh,4,10,"li",15,ot),f()),l&2){let n=A().$implicit;v(),ct(n.submenu)}}function mh(l,d){if(l&1){let n=qe();p(0,"li",15)(1,"a",21),S("click",function(o){let h=Fe(n).$implicit,_=A(6);return Pe(_.callToggleMenu(o,h.submenu.length))}),C(2),Ye(3,"translate"),f(),Q(4,gh,3,0,"ul",23),f()}if(l&2){let n=d.$implicit;x("routerLinkActive",n.submenu.length>0?"":"active"),v(),x("routerLink",n.submenu.length>0?null:H(7,Te,n.path))("ngClass",H(9,Te,n.class)),v(),ke(" ",He(3,5,n.title)," "),v(2),X(n.submenu.length>0?4:-1)}}function ph(l,d){if(l&1&&(p(0,"ul",22),lt(1,mh,5,11,"li",15,ot),f()),l&2){let n=A().$implicit;v(),ct(n.submenu)}}function fh(l,d){if(l&1){let n=qe();p(0,"li",15)(1,"a",21),S("click",function(o){let h=Fe(n).$implicit,_=A(4);return Pe(_.callToggleMenu(o,h.submenu.length))}),C(2),Ye(3,"translate"),f(),Q(4,ph,3,0,"ul",22),f()}if(l&2){let n=d.$implicit;x("routerLinkActive",n.submenu.length>0?"":"active"),v(),x("routerLink",n.submenu.length>0?null:H(7,Te,n.path))("ngClass",H(9,Te,n.class)),v(),ke(" ",He(3,5,n.title)," "),v(2),X(n.submenu.length>0?4:-1)}}function vh(l,d){if(l&1&&(p(0,"ul",18),lt(1,fh,5,11,"li",15,ot),f()),l&2){let n=A(2).$implicit;v(),ct(n.submenu)}}function wh(l,d){if(l&1&&(p(0,"li",15),Q(1,ch,3,3,"div",16),Q(2,hh,7,14,"a",17),Q(3,vh,3,0,"ul",18),f()),l&2){let n=A().$implicit;x("routerLinkActive",n.submenu.length!==0?"active":"active-top"),v(),X(n.groupTitle===!0?1:-1),v(),X(n.groupTitle?-1:2),v(),X(n.submenu.length>0?3:-1)}}function yh(l,d){if(l&1&&rt(0,wh,4,4,"ng-template",11),l&2){let n=d.$implicit;x("ngxPermissionsOnly",n.role)}}var gr=(()=>{class l extends Ce{constructor(){super(),this.document=m(J),this.renderer=m(ye),this.elementRef=m(we),this.authService=m(Dt),this.router=m(Je),this.sidebarService=m(ur),this.headerHeight=60,this.elementRef.nativeElement.closest("body"),this.subs.sink=this.router.events.subscribe(n=>{n instanceof Ri&&this.renderer.removeClass(this.document.body,"overlay-open")})}windowResizecall(n){this.setMenuHeight(),this.checkStatuForResize(!1)}onGlobalClick(n){this.elementRef.nativeElement.contains(n.target)||this.renderer.removeClass(this.document.body,"overlay-open")}callToggleMenu(n,r){if(r>0){let o=n.target.closest("li");o?.classList.contains("active")?this.renderer.removeClass(o,"active"):this.renderer.addClass(o,"active")}}ngOnInit(){this.subs.sink=this.authService.user$.subscribe(n=>{if(n&&Object.keys(n).length>0){let r=n.roles?.[0]?.name;this.userFullName=n.name||n.firstName+" "+n.lastName,this.userImg=n.avatar?.startsWith("http")?n.avatar:"./assets/images/user/"+(n.avatar||"user.jpg"),r===W.Admin?this.userType=this.capitalizeString(W.Admin):r===W.Teacher?this.userType=this.capitalizeString(W.Teacher):r===W.Student?this.userType=this.capitalizeString(W.Student):this.userType=this.capitalizeString(W.Admin)}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.subs.sink=this.sidebarService.getRouteInfo().subscribe(n=>{this.sidebarItems=n}),this.initLeftSidebar(),this.bodyTag=this.document.body}initLeftSidebar(){this.setMenuHeight(),this.checkStatuForResize(!0)}setMenuHeight(){this.innerHeight=window.innerHeight;let n=this.innerHeight-this.headerHeight;this.listMaxHeight=n+"",this.listMaxWidth="500px"}isOpen(){return this.bodyTag.classList.contains("overlay-open")}checkStatuForResize(n){window.innerWidth<1025?this.renderer.addClass(this.document.body,"ls-closed"):this.renderer.removeClass(this.document.body,"ls-closed")}mouseHover(){this.elementRef.nativeElement.closest("body").classList.contains("submenu-closed")&&(this.renderer.addClass(this.document.body,"side-closed-hover"),this.renderer.removeClass(this.document.body,"submenu-closed"))}mouseOut(){this.elementRef.nativeElement.closest("body").classList.contains("side-closed-hover")&&(this.renderer.removeClass(this.document.body,"side-closed-hover"),this.renderer.addClass(this.document.body,"submenu-closed"))}logout(){this.subs.sink=this.authService.logout().subscribe(n=>{n.success||this.router.navigate(["/authentication/signin"])})}capitalizeString(n){return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-sidebar"]],hostBindings:function(r,o){r&1&&S("resize",function(_){return o.windowResizecall(_)},hs)("mousedown",function(_){return o.onGlobalClick(_)},us)},features:[se],decls:22,vars:6,consts:[["id","leftsidebar",1,"sidebar",3,"mouseenter","mouseleave"],[1,"menu"],["visibility","hover"],[1,"list"],[1,"sidebar-user-panel"],[1,"user-panel"],[1,"image"],["alt","User Image",1,"img-circle","user-img-circle",3,"src"],[1,"profile-usertitle"],[1,"sidebar-userpic-name"],[1,"profile-usertitle-job"],[3,"ngxPermissionsOnly"],[1,"menu-top",3,"click"],[1,"material-icons-outlined"],[1,"hide-menu"],[3,"routerLinkActive"],[1,"header"],[1,"menu-top",3,"routerLink","ngClass"],[1,"ml-menu"],[1,"menu-top",3,"click","routerLink","ngClass"],[3,"ngClass"],[3,"click","routerLink","ngClass"],[1,"ml-menu-2"],[1,"ml-menu-3"]],template:function(r,o){r&1&&(p(0,"div")(1,"aside",0),S("mouseenter",function(){return o.mouseHover()})("mouseleave",function(){return o.mouseOut()}),p(2,"div",1)(3,"ng-scrollbar",2)(4,"ul",3)(5,"li",4)(6,"div",5)(7,"div",6),M(8,"img",7),f()(),p(9,"div",8)(10,"div",9),C(11),f(),p(12,"div",10),C(13),f()()(),lt(14,yh,1,1,null,11,ot),p(16,"li")(17,"a",12),S("click",function(){return o.logout()}),p(18,"i",13),C(19,"power_settings_new"),f(),p(20,"span",14),C(21,"Logout "),f()()()()()()()()),r&2&&(v(3),he("height",o.listMaxHeight+"px"),v(5),x("src",Ti(o.userImg),$e),v(3),ke("",o.userFullName," "),v(2),ke("",o.userType," "),v(),ct(o.sidebarItems))},dependencies:[Bt,Ts,Li,Xe,Ls,Fi,Es,Is],encapsulation:2})}}return l})();var mr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=xe({type:l});static \u0275inj=ve({imports:[Se]})}return l})();var _h=(l,d)=>[l,d],bh=l=>[l];function kh(l,d){if(l&1&&(p(0,"span",3),C(1),f()),l&2){let n=A();v(),be(n.unreadCount)}}function Mh(l,d){if(l&1&&M(0,"img",19),l&2){let n=A().$implicit;x("src",n.userImg,$e)}}function Sh(l,d){if(l&1&&(p(0,"i",20),C(1),f()),l&2){let n=A().$implicit;x("ngClass",H(2,bh,n.color)),v(),be(n.icon)}}function Ch(l,d){if(l&1){let n=qe();p(0,"button",27),S("click",function(o){Fe(n);let h=A().$implicit,_=A();return o.stopPropagation(),Pe(_.onActionClick(h))}),C(1),f()}if(l&2){let n=A().$implicit;v(),ke(" ",n.actionLabel," ")}}function Th(l,d){if(l&1){let n=qe();p(0,"button",15),S("click",function(){let o=Fe(n).$implicit,h=A();return Pe(h.markAsRead(o))}),p(1,"span",16)(2,"div",17)(3,"span",18),Q(4,Mh,1,1,"img",19)(5,Sh,2,4,"i",20),f(),p(6,"div")(7,"span",21),C(8),f(),p(9,"span",22)(10,"i",23),C(11,"access_time"),f(),C(12),f(),Q(13,Ch,2,1,"button",24),f()()(),p(14,"span",25),S("click",function(o){let h=Fe(n).$implicit,_=A();return o.stopPropagation(),Pe(_.removeNotification(h))}),M(15,"app-feather-icons",26),f()()}if(l&2){let n=d.$implicit,r=A();x("ngClass",fs(9,_h,n.status,r.isRemoving(n)?"notification-removing":""))("@notificationAnimation",r.isRemoving(n)?"void":""),v(4),X(n.userImg?4:5),v(4),be(n.message),v(4),ke(" ",n.time," "),v(),X(n.actionLabel?13:-1),v(2),_e("user-menu-icons"),x("icon","x")}}var fr=(()=>{class l{constructor(){this.notifications=[],this.markAllAsRead=new j,this.readAll=new j,this.closeNotification=new j,this.actionClick=new j,this.markAsReadEvent=new j,this.removingNotification=null,this.unreadCount=0}ngOnInit(){this.updateUnreadCount()}ngOnChanges(n){n.notifications&&this.updateUnreadCount()}updateUnreadCount(){this.unreadCount=this.notifications.filter(n=>n.status==="msg-unread").length}markAll(){this.markAllAsRead.emit(),this.notifications.forEach(n=>{n.status="msg-read"}),this.updateUnreadCount()}readAllNotifications(){this.readAll.emit(),this.updateUnreadCount()}removeNotification(n){this.removingNotification=n,n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount()),setTimeout(()=>{this.closeNotification.emit(n),this.removingNotification=null},500)}isRemoving(n){return this.removingNotification===n}markAsRead(n){n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount(),this.markAsReadEvent.emit(n))}onActionClick(n){this.actionClick.emit({notification:n,actionType:n.actionType||"default"}),n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount())}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-notification-list"]],inputs:{notifications:"notifications"},outputs:{markAllAsRead:"markAllAsRead",readAll:"readAll",closeNotification:"closeNotification",actionClick:"actionClick",markAsReadEvent:"markAsReadEvent"},features:[ki],decls:21,vars:2,consts:[["notificationMenu","matMenu"],["mat-icon-button","",1,"nav-notification-icons",3,"matMenuTriggerFor"],[1,"material-icons-outlined","icon-color"],[1,"notification-badge"],[1,"notification-menu"],[1,"notification-header"],[1,"mb-0"],[1,"notification-mark-as-read",3,"click"],[1,"notification-dropdown"],["visibility","hover",2,"height","350px"],[1,"noti-list"],[1,"menu"],["mat-menu-item","","onClick","return false;",3,"ngClass"],[1,"notification-footer"],[1,"notification-read-all",3,"click"],["mat-menu-item","","onClick","return false;",3,"click","ngClass"],[1,"menu-info"],[1,"notification-content-row"],[1,"table-img","msg-user"],["alt","User",1,"user-avatar",3,"src"],[1,"material-icons-outlined","notification-type-icon",3,"ngClass"],[1,"menu-title"],[1,"menu-desc"],[1,"material-icons"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2"],[1,"notification-close",3,"click"],[3,"icon"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2",3,"click"]],template:function(r,o){if(r&1&&(p(0,"button",1)(1,"i",2),C(2,"notifications_active"),f(),Q(3,kh,2,1,"span",3),f(),p(4,"mat-menu",4,0)(6,"div",5)(7,"h6",6),C(8,"Notifications"),f(),p(9,"a",7),S("click",function(){return o.markAll()}),C(10,"Mark all as read"),f()(),p(11,"div",8)(12,"ng-scrollbar",9)(13,"div",10)(14,"div",11)(15,"div"),lt(16,Th,16,12,"button",12,ot),f()()()()(),p(18,"div",13)(19,"a",14),S("click",function(){return o.readAllNotifications()}),C(20,"Read All Notifications"),f()()()),r&2){let h=Ze(5);x("matMenuTriggerFor",h),v(3),X(o.unreadCount>0?3:-1),v(13),ct(o.notifications)}},dependencies:[Rt,$i,Gi,qi,Bt,At,Ai,Xe,It,ji,Wi],styles:[".notification-content-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]{flex-direction:row-reverse;width:100%;justify-content:flex-start}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:none;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .notification-type-icon[_ngcontent-%COMP%]{font-size:26px;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:block;width:100%;text-align:right}.menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.rtl[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]{text-align:right}.notification-action-btn[_ngcontent-%COMP%]{min-width:120px;width:auto;align-self:flex-start}.rtl[_ngcontent-%COMP%]   .notification-action-btn[_ngcontent-%COMP%]{align-self:flex-end;margin-right:auto;margin-left:0}"],data:{animation:[Vs("notificationAnimation",[Ws(":leave",[zs("0.5s ease-out",Us({opacity:0,transform:"translateX(30px)"}))])])]}})}}return l})();var vr=(()=>{class l{constructor(){this.userName="",this.userImg="",this.accountClicked=new j,this.inboxClicked=new j,this.settingsClicked=new j,this.logoutClicked=new j}onAccountClick(){this.accountClicked.emit()}onInboxClick(){this.inboxClicked.emit()}onSettingsClick(){this.settingsClicked.emit()}onLogoutClick(){this.logoutClicked.emit()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-user-profile-menu"]],inputs:{userName:"userName",userImg:"userImg"},outputs:{accountClicked:"accountClicked",inboxClicked:"inboxClicked",settingsClicked:"settingsClicked",logoutClicked:"logoutClicked"},decls:16,vars:9,consts:[["profilemenu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],[1,"user-profile-img"],["width","32","height","32","alt","User",1,"user_img",3,"src"],[1,"profile-menu"],[1,"noti-list"],[1,"menu"],[1,"user_dw_menu"],["mat-menu-item","",1,"user-item-list",3,"click"],[3,"icon"]],template:function(r,o){if(r&1&&(p(0,"button",1)(1,"div",2)(2,"span"),C(3),f(),M(4,"img",3),f()(),p(5,"mat-menu",4,0)(7,"div",5)(8,"div",6)(9,"div",7)(10,"button",8),S("click",function(){return o.onAccountClick()}),M(11,"app-feather-icons",9),C(12," Cuenta "),f(),p(13,"button",8),S("click",function(){return o.onLogoutClick()}),M(14,"app-feather-icons",9),C(15," Salir "),f()()()()()),r&2){let h=Ze(6);x("matMenuTriggerFor",h),v(3),be(o.userName),v(),x("src",o.userImg,$e),v(7),_e("user-menu-icons"),x("icon","user"),v(3),_e("user-menu-icons"),x("icon","log-out")}},dependencies:[Rt,$i,Gi,qi,At,It,ji],encapsulation:2})}}return l})();var wr=(()=>{class l{constructor(){this.http=m(Me)}getNotifications(){return this.http.get("/api/notifications")}markAsRead(n){return this.http.patch(`/api/notifications/${n}/read`,{})}markAllAsRead(){return this.http.patch("/api/notifications/read-all",{})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var yr=(()=>{class l extends Ce{constructor(){super(...arguments),this.document=m(J),this.renderer=m(ye),this.elementRef=m(we),this.rightSidebarService=m(Ot),this.configService=m(Ke),this.authService=m(Dt),this.router=m(Je),this.localStorageService=m(re),this.notificationsService=m(wr),this.institutionLogo="assets/images/logo.png",this.isNavbarCollapsed=!0,this.isFullScreen=!1,this.notifications=[]}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.authService.user$.subscribe(n=>{if(n&&Object.keys(n).length>0){this.userImg=n.avatar?.startsWith("http")?n.avatar:"./assets/images/user/"+(n.avatar||"user.jpg");let r=n;this.userName=r.name||(r.firstName?r.firstName+" "+r.lastName:"User"),r.institutionLogo?this.institutionLogo=r.institutionLogo.startsWith("http")?r.institutionLogo:`/uploads/${r.institutionLogo}`:this.institutionLogo="assets/images/logo.png";let o=n.roles?.[0]?.name;o===W.Admin?this.homePage="admin/dashboard/main":o===W.Teacher?this.homePage="teacher/dashboard":o===W.Student?this.homePage="student/dashboard":this.homePage="admin/dashboard/main"}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.docElement=document.documentElement,this.loadNotifications()}loadNotifications(){this.notificationsService.getNotifications().subscribe(n=>{this.notifications=n.map(r=>({id:r._id,message:r.message,time:new Date(r.createdAt).toLocaleDateString(),icon:r.type==="INFO"?"info":r.type==="SUCCESS"?"check_circle":"warning",color:r.type==="INFO"?"notification-blue":r.type==="SUCCESS"?"notification-green":"notification-red",status:r.read?"msg-read":"msg-unread"}))})}onMarkAllNotificationsRead(){this.notificationsService.markAllAsRead().subscribe(()=>{this.loadNotifications()})}onMarkNotificationRead(n){n.id&&this.notificationsService.markAsRead(n.id).subscribe()}onReadAllNotifications(){alert("Navigating to notifications page to read all")}onRemoveNotification(n){this.notifications=this.notifications.filter(r=>r!==n)}onNotificationActionClick(n){let{notification:r,actionType:o}=n;switch(o){case"view":console.log("Viewing notification:",r);break;case"profile":console.log("Opening profile from notification:",r);break;case"reply":console.log("Replying to notification:",r);break;case"download":console.log("Downloading from notification:",r);break;case"mark-important":console.log("Marking notification as important:",r);break;default:console.log("Default action for notification:",r)}}callFullscreen(){this.isFullScreen?document.exitFullscreen():this.docElement?.requestFullscreen!=null&&this.docElement?.requestFullscreen(),this.isFullScreen=!this.isFullScreen}mobileMenuSidebarOpen(n,r){n.target.classList.contains(r)?this.renderer.removeClass(this.document.body,r):this.renderer.addClass(this.document.body,r)}callSidemenuCollapse(){this.document.body.classList.contains("side-closed")?(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","true"))}logout(){this.subs.sink=this.authService.logout().subscribe(n=>{n.success||this.router.navigate(["/authentication/signin"])})}onAccountClicked(){let n=this.authService.currentUserValue.roles?.[0]?.name;n===W.Teacher?this.router.navigate(["/teacher/profile"]):n===W.Student?this.router.navigate(["/student/profile"]):this.router.navigate(["/admin/profile"])}onInboxClicked(){this.router.navigate(["/email/inbox"])}onSettingsClicked(){this.router.navigate(["/extra-pages/faqs"])}static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=Mt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-header"]],features:[se],decls:25,vars:7,consts:[["navbar",""],[1,"navbar","active"],[1,"container-fluid"],[1,"navbar-header"],["href","#","onClick","return false;","aria-expanded","false",1,"navbar-toggle","collapsed",3,"click"],["href","#","onClick","return false;",1,"bars",3,"click"],[1,"navbar-brand",3,"routerLink"],["alt","Logo",2,"max-height","40px","max-width","120px","object-fit","contain",3,"src"],[1,"logo-name"],[1,"collapse","navbar-collapse",3,"ngClass"],[1,"float-start","collapse-menu-icon"],["mat-icon-button","",1,"sidemenu-collapse","nav-notification-icons",3,"click"],[1,"material-icons-outlined","icon-color"],[1,"nav","navbar-nav","navbar-right"],[1,"fullscreen"],["mat-icon-button","",1,"nav-notification-icons",3,"click"],[3,"markAllAsRead","readAll","closeNotification","actionClick","markAsReadEvent","notifications"],[1,"nav-item","user_profile"],[3,"accountClicked","inboxClicked","settingsClicked","logoutClicked","userName","userImg"]],template:function(r,o){r&1&&(p(0,"nav",1,0)(2,"div",2)(3,"div",3)(4,"a",4),S("click",function(){return o.isNavbarCollapsed=!o.isNavbarCollapsed}),f(),p(5,"a",5),S("click",function(_){return o.mobileMenuSidebarOpen(_,"overlay-open")}),f(),p(6,"a",6),M(7,"img",7),p(8,"span",8),C(9,"Smart"),f()()(),p(10,"div",9)(11,"ul",10)(12,"li")(13,"button",11),S("click",function(){return o.callSidemenuCollapse()}),p(14,"i",12),C(15," menu "),f()()()(),p(16,"ul",13)(17,"li",14)(18,"button",15),S("click",function(){return o.callFullscreen()}),p(19,"i",12),C(20," fullscreen "),f()()(),p(21,"li")(22,"app-notification-list",16),S("markAllAsRead",function(){return o.onMarkAllNotificationsRead()})("readAll",function(){return o.onReadAllNotifications()})("closeNotification",function(_){return o.onRemoveNotification(_)})("actionClick",function(_){return o.onNotificationActionClick(_)})("markAsReadEvent",function(_){return o.onMarkNotificationRead(_)}),f()(),p(23,"li",17)(24,"app-user-profile-menu",18),S("accountClicked",function(){return o.onAccountClicked()})("inboxClicked",function(){return o.onInboxClicked()})("settingsClicked",function(){return o.onSettingsClicked()})("logoutClicked",function(){return o.logout()}),f()()()()()()),r&2&&(v(6),x("routerLink",Ti(o.homePage)),v(),x("src",o.institutionLogo,$e),v(3),x("ngClass",o.isNavbarCollapsed?"":"show"),v(12),x("notifications",o.notifications),v(2),x("userName",o.userName||"User")("userImg",o.userImg))},dependencies:[Li,Xe,It,Wi,Zs,mr,fr,Rt,vr],encapsulation:2})}}return l})();var xr=(()=>{class l extends Ce{constructor(){super(),this.directoryService=m(et),this.configService=m(Ke),this.document=m(J),this.renderer=m(ye),this.localStorageService=m(re),this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(n=>{n?this.direction=n==="ltr"?"ltr":"rtl":this.localStorageService.get("isRtl")?this.direction=this.localStorageService.get("isRtl")==="true"?"rtl":"ltr":this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",this.localStorageService.set("isRtl","true")):(this.direction="ltr",this.localStorageService.set("isRtl","false")))})}ngAfterViewInit(){this.localStorageService.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,this.localStorageService.get("theme"))):(this.renderer.addClass(this.document.body,this.config.layout.variant),this.localStorageService.set("theme",this.config.layout.variant)),this.localStorageService.get("choose_skin")?(this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,this.localStorageService.get("choose_skin")),this.localStorageService.set("choose_skin_active",this.localStorageService.get("choose_skin").substring(6))):(this.renderer.addClass(this.document.body,"theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin","theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin_active",this.config.layout.theme_color)),this.localStorageService.get("isRtl")?this.localStorageService.get("isRtl")==="true"?this.setRTLSettings():this.localStorageService.get("isRtl")==="false"&&this.setLTRSettings():this.config.layout.rtl==!0?this.setRTLSettings():this.setLTRSettings(),this.localStorageService.get("menuOption")?this.renderer.addClass(this.document.body,this.localStorageService.get("menuOption")):(this.renderer.addClass(this.document.body,"menu_"+this.config.layout.sidebar.backgroundColor),this.localStorageService.set("menuOption","menu_"+this.config.layout.sidebar.backgroundColor)),this.localStorageService.get("choose_logoheader")?this.renderer.addClass(this.document.body,this.localStorageService.get("choose_logoheader")):this.renderer.addClass(this.document.body,"logo-"+this.config.layout.logo_bg_color),this.localStorageService.get("collapsed_menu")?this.localStorageService.get("collapsed_menu")==="true"&&(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed")):this.config.layout.sidebar.collapsed==!0?(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false"))}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","false")}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-main-layout"]],features:[Qe([Ot]),se],decls:5,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(M(0,"app-header")(1,"app-sidebar")(2,"app-right-sidebar"),p(3,"div",0),M(4,"router-outlet"),f()),r&2&&(v(3),x("dir",o.direction))},dependencies:[yr,gr,hr,Se,Ni,Tt],encapsulation:2})}}return l})();var Jt=(()=>{class l{constructor(){this.router=m(Je),this.store=m(re)}canActivate(n,r){let o=this.store.get("currentUser");if(o){let h=o.roles?.[0]?.name;return h?n.data.role&&n.data.role.indexOf(h)===-1?(this.router.navigate(["/authentication/signin"]),!1):!0:(this.router.navigate(["/authentication/signin"]),!1)}return this.router.navigate(["/authentication/signin"]),!1}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var _r=(()=>{class l extends Ce{constructor(){super(),this.document=m(J),this.directoryService=m(et),this.configService=m(Ke),this.renderer=m(ye),this.localStorageService=m(re);let n=this.localStorageService;this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(r=>{r?this.direction=r==="ltr"?"ltr":"rtl":n.get("isRtl")?n.get("isRtl")==="true"?this.direction="rtl":n.get("isRtl")==="false"&&(this.direction="ltr"):this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",n.set("isRtl","true")):(this.direction="ltr",n.set("isRtl","false")))}),n.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,n.get("theme"))):this.renderer.addClass(this.document.body,this.config.layout.variant)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-auth-layout"]],features:[se],decls:2,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(p(0,"div",0),M(1,"router-outlet"),f()),r&2&&x("dir",o.direction)},dependencies:[Se,Ni,Tt],encapsulation:2})}}return l})();var br=[{path:"",component:xr,canActivate:[Jt],children:[{path:"",redirectTo:"/authentication/signin",pathMatch:"full"},{path:"admin",canActivate:[Jt],data:{role:[W.Admin,W.SuperAdmin]},loadChildren:()=>import("./chunk-OSV4TAY7.js").then(l=>l.ADMIN_ROUTE)},{path:"teacher",canActivate:[Jt],data:{role:W.Teacher},loadChildren:()=>import("./chunk-LQLEQV24.js").then(l=>l.TEACHER_ROUTE)},{path:"student",canActivate:[Jt],data:{role:W.Student},loadChildren:()=>import("./chunk-PNOKI5IB.js").then(l=>l.STUDENT_ROUTE)},{path:"extra-pages",loadChildren:()=>import("./chunk-UJ7BKWLC.js").then(l=>l.EXTRA_PAGES_ROUTE)},{path:"multilevel",loadChildren:()=>import("./chunk-RIPSYS4T.js").then(l=>l.MULTILEVEL_ROUTE)}]},{path:"authentication",component:_r,loadChildren:()=>import("./chunk-WOVJECJK.js").then(l=>l.AUTH_ROUTE)},{path:"**",component:Qs}];var Oh=(()=>{class l extends Ji{constructor(n,r,o){super(n,r,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(r){return new(r||l)(Ge(J),Ge(Xt),Ge(Xi))};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();function Bh(){return new er}function Ah(){return new ir(m(Ii),m(Ji),m(kt))}var kr=[{provide:Xi,useFactory:Bh},{provide:Ji,useClass:Oh},{provide:Si,useFactory:Ah}],mv=[{provide:Xt,useClass:Ks},{provide:jt,useValue:"NoopAnimations"},...kr],Ih=[{provide:Xt,useFactory:()=>new tr},{provide:jt,useFactory:()=>"BrowserAnimations"},...kr];function Mr(){return Mi("NgEagerAnimations"),[...Ih]}var Sr=(()=>{class l{constructor(){this.authenticationService=m(Dt),this.tokenService=m(Ei),this.store=m(re),this.httpBackend=m(Zt),this.isRefreshing=!1,this.refreshTokenSubject=new Ka(null)}intercept(n,r){return r.handle(n).pipe(Pn(o=>{if(o instanceof ks&&o.status===401)return n.url.includes("/auth/login")?st(()=>o):n.url.includes("/auth/refresh")?(this.authenticationService.logout(),location.reload(),st(()=>o)):this.handle401Error(n,r,o);let h=o.error?.message||o.statusText;return st(()=>h)}))}handle401Error(n,r,o){if(this.isRefreshing)return this.refreshTokenSubject.pipe(ts(h=>h!=null),_i(1),bt(h=>r.handle(n.clone({setHeaders:{Authorization:`Bearer ${h}`}}))));{this.isRefreshing=!0,this.refreshTokenSubject.next(null);let _=this.store.get("redstar-token")?.refresh_token;return _?new Me(this.httpBackend).post("/api/auth/refresh",{refresh_token:_}).pipe(bt($=>{if(this.isRefreshing=!1,$?.access_token){let tt=this.store.get("redstar-token"),Kt=We(ee({},tt),{access_token:$.access_token,expires_in:$.expires_in});this.tokenService.set(Kt),this.refreshTokenSubject.next($.access_token);let ue=n.clone({setHeaders:{Authorization:`Bearer ${$.access_token}`}});return r.handle(ue)}return this.authenticationService.logout(),location.reload(),st(()=>new Error("Session expired"))}),Pn($=>(this.isRefreshing=!1,this.authenticationService.logout(),location.reload(),st(()=>$)))):(this.isRefreshing=!1,this.authenticationService.logout(),location.reload(),st(()=>new Error("No refresh token")))}}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac})}}return l})();var Cr={production:!0,apiUrl:"https://smarteval-backend-ytpv.onrender.com"};var Tr=(()=>{class l{constructor(){this.tokenService=m(Ei)}intercept(n,r){let o=n;n.url.startsWith("/api")&&(o=n.clone({url:`${Cr.apiUrl}${n.url}`}));let h=this.tokenService.getBearerToken();return h&&(o=o.clone({setHeaders:{Authorization:h}})),r.handle(o)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=z({token:l,factory:l.\u0275fac})}}return l})();var Qn=new te("TRANSLATE_HTTP_LOADER_CONFIG"),Rh=(()=>{class l{http;config;constructor(){this.config=ee({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},m(Qn)),this.http=this.config.useHttpBackend?new Me(m(Zt)):m(Me)}getTranslation(n){let r=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${n}${this.config.suffix}${r}`)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();function Dr(l={}){let d=l.useHttpBackend??!1;return[{provide:Qn,useValue:l},{provide:As,useClass:Rh,deps:[d?Zt:Me,Qn]}]}var Lh=Xa(Jn(),1),Or=Xa(Jn(),1),ut=Or.default||Lh,Nh=new te("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:()=>({useUtc:!1})});function Eh(l,d){let n=Array(l);for(let r=0;r<l;r++)n[r]=d(r);return n}var Br=(()=>{class l extends Qi{_options=m(Nh,{optional:!0});_localeData;constructor(){super();let n=m(Zi,{optional:!0});this.setLocale(n||ut.locale())}setLocale(n){super.setLocale(n);let r=ut.localeData(n);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:Eh(31,o=>this.createDate(2017,0,o+1).format("D")),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}getYear(n){return this.clone(n).year()}getMonth(n){return this.clone(n).month()}getDate(n){return this.clone(n).date()}getDayOfWeek(n){return this.clone(n).day()}getMonthNames(n){return n=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(n){return n=="long"?this._localeData.longDaysOfWeek:n=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(n){return this.clone(n).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(n){return this.clone(n).daysInMonth()}clone(n){return n.clone().locale(this.locale)}createDate(n,r,o){let h=this._createMoment({year:n,month:r,date:o}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(n,r){return n&&typeof n=="string"?this._createMoment(n,r,this.locale):n?this._createMoment(n).locale(this.locale):null}format(n,r){return n=this.clone(n),this.isValid(n),n.format(r)}addCalendarYears(n,r){return this.clone(n).add({years:r})}addCalendarMonths(n,r){return this.clone(n).add({months:r})}addCalendarDays(n,r){return this.clone(n).add({days:r})}toIso8601(n){return this.clone(n).format()}deserialize(n){let r;if(n instanceof Date)r=this._createMoment(n).locale(this.locale);else if(this.isDateInstance(n))return this.clone(n);if(typeof n=="string"){if(!n)return null;r=this._createMoment(n,ut.ISO_8601).locale(this.locale)}return r&&this.isValid(r)?this._createMoment(r).locale(this.locale):super.deserialize(n)}isDateInstance(n){return ut.isMoment(n)}isValid(n){return this.clone(n).isValid()}invalid(){return ut.invalid()}setTime(n,r,o,h){return this.clone(n).set({hours:r,minutes:o,seconds:h,milliseconds:0})}getHours(n){return n.hours()}getMinutes(n){return n.minutes()}getSeconds(n){return n.seconds()}parseTime(n,r){return this.parse(n,r)}addSeconds(n,r){return this.clone(n).add({seconds:r})}_createMoment(n,r,o){let{strict:h,useUtc:_}=this._options||{};return _?ut.utc(n,r,o,h):ut(n,r,o,h)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})();var Fh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-activity">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>`,Ph=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-airplay">
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>
</svg>`,Yh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
</svg>`,Hh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
</svg>`,Vh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-triangle">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>
</svg>`,zh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-center">
    <line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>
</svg>`,Uh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-justify">
    <line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>
</svg>`,Wh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-left">
    <line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>
</svg>`,jh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-align-right">
    <line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>
</svg>`,Gh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-anchor">
    <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
</svg>`,$h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-aperture">
    <circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
</svg>`,qh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-archive">
    <polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>
</svg>`,Zh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>
</svg>`,Qh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-left">
    <line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>
</svg>`,Xh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-right">
    <line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>
</svg>`,Jh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down">
    <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
</svg>`,Kh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-left-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>
</svg>`,e0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-left">
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
</svg>`,t0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,i0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
</svg>`,n0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>
</svg>`,a0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-left">
    <line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>
</svg>`,s0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-right">
    <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
</svg>`,r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up">
    <line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>
</svg>`,o0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-at-sign">
    <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
</svg>`,l0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-award">
    <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
</svg>`,c0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bar-chart-2">
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
</svg>`,d0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bar-chart">
    <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
</svg>`,h0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-battery-charging">
    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>
</svg>`,u0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-battery">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>
</svg>`,g0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell-off">
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,m0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>`,p0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bluetooth">
    <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
</svg>`,f0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bold">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
</svg>`,v0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book-open">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>`,w0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-book">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
</svg>`,y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bookmark">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
</svg>`,x0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-box">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,_0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-briefcase">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>`,b0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-calendar">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
</svg>`,k0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-camera-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
</svg>`,M0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-camera">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>
</svg>`,S0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cast">
    <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>
</svg>`,C0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-circle">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>`,T0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-square">
    <polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>`,D0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`,O0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9"></polyline>
</svg>`,B0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-left">
    <polyline points="15 18 9 12 15 6"></polyline>
</svg>`,A0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-right">
    <polyline points="9 18 15 12 9 6"></polyline>
</svg>`,I0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-up">
    <polyline points="18 15 12 9 6 15"></polyline>
</svg>`,R0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-down">
    <polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>
</svg>`,L0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-left">
    <polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>
</svg>`,N0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-right">
    <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
</svg>`,E0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-up">
    <polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>
</svg>`,F0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chrome">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
</svg>`,P0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-circle">
    <circle cx="12" cy="12" r="10"></circle>
</svg>`,Y0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clipboard">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
</svg>`,H0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clock">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
</svg>`,V0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-drizzle">
    <line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
</svg>`,z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-lightning">
    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>
</svg>`,U0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-off">
    <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,W0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-rain">
    <line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
</svg>`,j0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud-snow">
    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>
</svg>`,G0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cloud">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
</svg>`,$0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-code">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
</svg>`,q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-codepen">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>
</svg>`,Z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-codesandbox">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,Q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-coffee">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
</svg>`,X0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-columns">
    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
</svg>`,J0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-command">
    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
</svg>`,K0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-compass">
    <circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
</svg>`,e1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-copy">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>`,t1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-down-left">
    <polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
</svg>`,i1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-down-right">
    <polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
</svg>`,n1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-left-down">
    <polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
</svg>`,a1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-left-up">
    <polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
</svg>`,s1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-down">
    <polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
</svg>`,r1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-up">
    <polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
</svg>`,o1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-left">
    <polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
</svg>`,l1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-up-right">
    <polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
</svg>`,c1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-cpu">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
</svg>`,d1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-credit-card">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
</svg>`,h1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-crop">
    <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
</svg>`,u1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-crosshair">
    <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>
</svg>`,g1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-database">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>`,m1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-delete">
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>
</svg>`,p1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-disc">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>
</svg>`,f1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide-circle">
    <line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>
</svg>`,v1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>
</svg>`,w1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-divide">
    <circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>
</svg>`,y1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dollar-sign">
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>`,x1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download-cloud">
    <polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
</svg>`,_1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-download">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
</svg>`,b1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-dribbble">
    <circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
</svg>`,k1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-droplet">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
</svg>`,M1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-2">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>`,S1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-3">
    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>`,C1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>`,T1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-external-link">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
</svg>`,D1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye-off">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,O1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-eye">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
</svg>`,B1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>`,A1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-fast-forward">
    <polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>
</svg>`,I1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-feather">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>
</svg>`,R1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-figma">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>`,L1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-minus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>
</svg>`,N1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-plus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>
</svg>`,E1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-text">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
</svg>`,F1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file">
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>
</svg>`,P1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-film">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>
</svg>`,Y1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-filter">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>`,H1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-flag">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>
</svg>`,V1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder-minus">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>
</svg>`,z1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder-plus">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>
</svg>`,U1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-folder">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
</svg>`,W1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-framer">
    <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
</svg>`,j1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-frown">
    <circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,G1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-gift">
    <polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
</svg>`,$1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-branch">
    <line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>
</svg>`,q1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-commit">
    <circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>
</svg>`,Z1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-merge">
    <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>
</svg>`,Q1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-pull-request">
    <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>
</svg>`,X1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-github">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
</svg>`,J1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-gitlab">
    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
</svg>`,K1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-globe">
    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>`,e2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-grid">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
</svg>`,t2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hard-drive">
    <line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>
</svg>`,i2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hash">
    <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
</svg>`,n2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-headphones">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>`,a2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-heart">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>`,s2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-help-circle">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
</svg>`,r2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-hexagon">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>`,o2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-home">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>`,l2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-image">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
</svg>`,c2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-inbox">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
</svg>`,d2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-info">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
</svg>`,h2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-instagram">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
</svg>`,u2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-italic">
    <line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>
</svg>`,g2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-key">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>`,m2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-layers">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>
</svg>`,p2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-layout">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
</svg>`,f2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-life-buoy">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
</svg>`,v2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-link-2">
    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,w2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-link">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</svg>`,y2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
</svg>`,x2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-list">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
</svg>`,_2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-loader">
    <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
</svg>`,b2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-lock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>`,k2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-in">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>
</svg>`,M2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
</svg>`,S2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mail">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
</svg>`,C2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
</svg>`,T2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
</svg>`,D2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-maximize-2">
    <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>
</svg>`,O2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-maximize">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
</svg>`,B2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-meh">
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,A2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-menu">
    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
</svg>`,I2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-message-circle">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>`,R2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-message-square">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>`,L2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
</svg>`,N2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
</svg>`,E2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize-2">
    <polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>
</svg>`,F2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minimize">
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
</svg>`,P2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,Y2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,H2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-minus">
    <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>`,V2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-monitor">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
</svg>`,z2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`,U2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-horizontal">
    <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>`,W2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-more-vertical">
    <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
</svg>`,j2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mouse-pointer">
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>
</svg>`,G2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-move">
    <polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>
</svg>`,$2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-music">
    <path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>
</svg>`,q2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation-2">
    <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
</svg>`,Z2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-navigation">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
</svg>`,Q2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
</svg>`,X2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-package">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>`,J2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-paperclip">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>`,K2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pause-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>
</svg>`,eu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pause">
    <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
</svg>`,tu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pen-tool">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
</svg>`,iu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-percent">
    <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
</svg>`,nu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-call">
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,au=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-forwarded">
    <polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,su=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-incoming">
    <polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,ru=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-missed">
    <line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,ou=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-off">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>
</svg>`,lu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone-outgoing">
    <polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,cu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-phone">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>`,du=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pie-chart">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>`,hu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play-circle">
    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>`,uu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>`,gu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,mu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
</svg>`,pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus">
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
</svg>`,fu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pocket">
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>
</svg>`,vu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-power">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
</svg>`,wu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-printer">
    <polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>
</svg>`,yu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-radio">
    <circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
</svg>`,xu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-ccw">
    <polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
</svg>`,_u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-refresh-cw">
    <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
</svg>`,bu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-repeat">
    <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
</svg>`,ku=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rewind">
    <polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>
</svg>`,Mu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rotate-ccw">
    <polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
</svg>`,Su=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rotate-cw">
    <polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
</svg>`,Cu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-rss">
    <path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>
</svg>`,Tu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-save">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>
</svg>`,Du=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-scissors">
    <circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>
</svg>`,Ou=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-search">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>`,Bu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-send">
    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>`,Au=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-server">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>
</svg>`,Iu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-settings">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>`,Ru=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share-2">
    <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
</svg>`,Lu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
</svg>`,Nu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shield-off">
    <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Eu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shield">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>`,Fu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>`,Pu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-cart">
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>`,Yu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shuffle">
    <polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>
</svg>`,Hu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sidebar">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
</svg>`,Vu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-back">
    <polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>
</svg>`,zu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-forward">
    <polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>
</svg>`,Uu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-slack">
    <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
</svg>`,Wu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-slash">
    <circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
</svg>`,ju=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sliders">
    <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
</svg>`,Gu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-smartphone">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
</svg>`,$u=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-smile">
    <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`,qu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-speaker">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>
</svg>`,Zu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
</svg>`,Qu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>`,Xu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-stop-circle">
    <circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>
</svg>`,Ju=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sun">
    <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`,Ku=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sunrise">
    <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>
</svg>`,eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sunset">
    <path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>
</svg>`,tg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-table">
    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
</svg>`,ig=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tablet">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
</svg>`,ng=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tag">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
</svg>`,ag=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-target">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
</svg>`,sg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-terminal">
    <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
</svg>`,rg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thermometer">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>`,og=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thumbs-down">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
</svg>`,lg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thumbs-up">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>`,cg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-toggle-left">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>
</svg>`,dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-toggle-right">
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>
</svg>`,hg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tool">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
</svg>`,ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash-2">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
</svg>`,gg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trash">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
</svg>`,mg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trello">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>
</svg>`,pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-down">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
</svg>`,fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-up">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
</svg>`,vg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-triangle">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
</svg>`,wg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-truck">
    <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
</svg>`,yg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tv">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>
</svg>`,xg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitch">
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
</svg>`,_g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitter">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>`,bg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-type">
    <polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>
</svg>`,kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-umbrella">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
</svg>`,Mg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-underline">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>
</svg>`,Sg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-unlock">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
</svg>`,Cg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-upload-cloud">
    <polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>
</svg>`,Tg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-upload">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>
</svg>`,Dg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-check">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>
</svg>`,Og=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-minus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`,Bg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-plus">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
</svg>`,Ag=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-x">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>
</svg>`,Ig=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
</svg>`,Rg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-users">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>`,Lg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video-off">
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Ng=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video">
    <polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
</svg>`,Eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-voicemail">
    <circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>
</svg>`,Fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-1">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
</svg>`,Pg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
</svg>`,Yg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-x">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>
</svg>`,Hg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
</svg>`,Vg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-watch">
    <circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
</svg>`,zg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wifi-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
</svg>`,Ug=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wifi">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
</svg>`,Wg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-wind">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
</svg>`,jg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,Gg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-octagon">
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,$g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>
</svg>`,qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`,Zg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-youtube">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
</svg>`,Qg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zap-off">
    <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Xg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zap">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>`,Jg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zoom-in">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>
</svg>`,Kg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zoom-out">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>
</svg>`,Ar={Activity:Fh,Airplay:Ph,AlertCircle:Yh,AlertOctagon:Hh,AlertTriangle:Vh,AlignCenter:zh,AlignJustify:Uh,AlignLeft:Wh,AlignRight:jh,Anchor:Gh,Aperture:$h,Archive:qh,ArrowDownCircle:Zh,ArrowDownLeft:Qh,ArrowDownRight:Xh,ArrowDown:Jh,ArrowLeftCircle:Kh,ArrowLeft:e0,ArrowRightCircle:t0,ArrowRight:i0,ArrowUpCircle:n0,ArrowUpLeft:a0,ArrowUpRight:s0,ArrowUp:r0,AtSign:o0,Award:l0,BarChart2:c0,BarChart:d0,BatteryCharging:h0,Battery:u0,BellOff:g0,Bell:m0,Bluetooth:p0,Bold:f0,BookOpen:v0,Book:w0,Bookmark:y0,Box:x0,Briefcase:_0,Calendar:b0,CameraOff:k0,Camera:M0,Cast:S0,CheckCircle:C0,CheckSquare:T0,Check:D0,ChevronDown:O0,ChevronLeft:B0,ChevronRight:A0,ChevronUp:I0,ChevronsDown:R0,ChevronsLeft:L0,ChevronsRight:N0,ChevronsUp:E0,Chrome:F0,Circle:P0,Clipboard:Y0,Clock:H0,CloudDrizzle:V0,CloudLightning:z0,CloudOff:U0,CloudRain:W0,CloudSnow:j0,Cloud:G0,Code:$0,Codepen:q0,Codesandbox:Z0,Coffee:Q0,Columns:X0,Command:J0,Compass:K0,Copy:e1,CornerDownLeft:t1,CornerDownRight:i1,CornerLeftDown:n1,CornerLeftUp:a1,CornerRightDown:s1,CornerRightUp:r1,CornerUpLeft:o1,CornerUpRight:l1,Cpu:c1,CreditCard:d1,Crop:h1,Crosshair:u1,Database:g1,Delete:m1,Disc:p1,DivideCircle:f1,DivideSquare:v1,Divide:w1,DollarSign:y1,DownloadCloud:x1,Download:_1,Dribbble:b1,Droplet:k1,Edit2:M1,Edit3:S1,Edit:C1,ExternalLink:T1,EyeOff:D1,Eye:O1,Facebook:B1,FastForward:A1,Feather:I1,Figma:R1,FileMinus:L1,FilePlus:N1,FileText:E1,File:F1,Film:P1,Filter:Y1,Flag:H1,FolderMinus:V1,FolderPlus:z1,Folder:U1,Framer:W1,Frown:j1,Gift:G1,GitBranch:$1,GitCommit:q1,GitMerge:Z1,GitPullRequest:Q1,Github:X1,Gitlab:J1,Globe:K1,Grid:e2,HardDrive:t2,Hash:i2,Headphones:n2,Heart:a2,HelpCircle:s2,Hexagon:r2,Home:o2,Image:l2,Inbox:c2,Info:d2,Instagram:h2,Italic:u2,Key:g2,Layers:m2,Layout:p2,LifeBuoy:f2,Link2:v2,Link:w2,Linkedin:y2,List:x2,Loader:_2,Lock:b2,LogIn:k2,LogOut:M2,Mail:S2,MapPin:C2,Map:T2,Maximize2:D2,Maximize:O2,Meh:B2,Menu:A2,MessageCircle:I2,MessageSquare:R2,MicOff:L2,Mic:N2,Minimize2:E2,Minimize:F2,MinusCircle:P2,MinusSquare:Y2,Minus:H2,Monitor:V2,Moon:z2,MoreHorizontal:U2,MoreVertical:W2,MousePointer:j2,Move:G2,Music:$2,Navigation2:q2,Navigation:Z2,Octagon:Q2,Package:X2,Paperclip:J2,PauseCircle:K2,Pause:eu,PenTool:tu,Percent:iu,PhoneCall:nu,PhoneForwarded:au,PhoneIncoming:su,PhoneMissed:ru,PhoneOff:ou,PhoneOutgoing:lu,Phone:cu,PieChart:du,PlayCircle:hu,Play:uu,PlusCircle:gu,PlusSquare:mu,Plus:pu,Pocket:fu,Power:vu,Printer:wu,Radio:yu,RefreshCcw:xu,RefreshCw:_u,Repeat:bu,Rewind:ku,RotateCcw:Mu,RotateCw:Su,Rss:Cu,Save:Tu,Scissors:Du,Search:Ou,Send:Bu,Server:Au,Settings:Iu,Share2:Ru,Share:Lu,ShieldOff:Nu,Shield:Eu,ShoppingBag:Fu,ShoppingCart:Pu,Shuffle:Yu,Sidebar:Hu,SkipBack:Vu,SkipForward:zu,Slack:Uu,Slash:Wu,Sliders:ju,Smartphone:Gu,Smile:$u,Speaker:qu,Square:Zu,Star:Qu,StopCircle:Xu,Sun:Ju,Sunrise:Ku,Sunset:eg,Table:tg,Tablet:ig,Tag:ng,Target:ag,Terminal:sg,Thermometer:rg,ThumbsDown:og,ThumbsUp:lg,ToggleLeft:cg,ToggleRight:dg,Tool:hg,Trash2:ug,Trash:gg,Trello:mg,TrendingDown:pg,TrendingUp:fg,Triangle:vg,Truck:wg,Tv:yg,Twitch:xg,Twitter:_g,Type:bg,Umbrella:kg,Underline:Mg,Unlock:Sg,UploadCloud:Cg,Upload:Tg,UserCheck:Dg,UserMinus:Og,UserPlus:Bg,UserX:Ag,User:Ig,Users:Rg,VideoOff:Lg,Video:Ng,Voicemail:Eg,Volume1:Fg,Volume2:Pg,VolumeX:Yg,Volume:Hg,Watch:Vg,WifiOff:zg,Wifi:Ug,Wind:Wg,XCircle:jg,XOctagon:Gg,XSquare:$g,X:qg,Youtube:Zg,ZapOff:Qg,Zap:Xg,ZoomIn:Jg,ZoomOut:Kg};var em="@",tm=(()=>{class l{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=m(os);loadingSchedulerFn=m(im,{optional:!0});_engine;constructor(n,r,o,h,_){this.doc=n,this.delegate=r,this.zone=o,this.animationType=h,this.moduleImpl=_}ngOnDestroy(){this._engine?.flush()}loadImpl(){let n=()=>this.moduleImpl??import("./chunk-UWFBM2EA.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(n):r=n(),r.catch(o=>{throw new as(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:h})=>{this._engine=o(this.animationType,this.doc);let _=new h(this.delegate,this._engine,this.zone);return this.delegate=_,_})}createRenderer(n,r){let o=this.delegate.createRenderer(n,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let h=new Kn(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let P=_.createRenderer(n,r);h.use(P),this.scheduler??=this.injector.get(cs,null,{optional:!0}),this.scheduler?.notify(10)}).catch(_=>{h.use(o)}),h}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(n){this._engine?.flush(),this.delegate.componentReplaced?.(n)}static \u0275fac=function(r){ms()};static \u0275prov=z({token:l,factory:l.\u0275fac})}return l})(),Kn=class{delegate;replay=[];\u0275type=1;constructor(d){this.delegate=d}use(d){if(this.delegate=d,this.replay!==null){for(let n of this.replay)n(d);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(d,n){return this.delegate.createElement(d,n)}createComment(d){return this.delegate.createComment(d)}createText(d){return this.delegate.createText(d)}get destroyNode(){return this.delegate.destroyNode}appendChild(d,n){this.delegate.appendChild(d,n)}insertBefore(d,n,r,o){this.delegate.insertBefore(d,n,r,o)}removeChild(d,n,r,o){this.delegate.removeChild(d,n,r,o)}selectRootElement(d,n){return this.delegate.selectRootElement(d,n)}parentNode(d){return this.delegate.parentNode(d)}nextSibling(d){return this.delegate.nextSibling(d)}setAttribute(d,n,r,o){this.delegate.setAttribute(d,n,r,o)}removeAttribute(d,n,r){this.delegate.removeAttribute(d,n,r)}addClass(d,n){this.delegate.addClass(d,n)}removeClass(d,n){this.delegate.removeClass(d,n)}setStyle(d,n,r,o){this.delegate.setStyle(d,n,r,o)}removeStyle(d,n,r){this.delegate.removeStyle(d,n,r)}setProperty(d,n,r){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(d,n,r)),this.delegate.setProperty(d,n,r)}setValue(d,n){this.delegate.setValue(d,n)}listen(d,n,r,o){return this.shouldReplay(n)&&this.replay.push(h=>h.listen(d,n,r,o)),this.delegate.listen(d,n,r,o)}shouldReplay(d){return this.replay!==null&&d.startsWith(em)}},im=new te("");function Ir(l="animations"){return Mi("NgAsyncAnimations"),ss([{provide:Si,useFactory:()=>new tm(m(J),m(Ii),m(kt),l)},{provide:jt,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ea={providers:[Ms(Ss()),Ds(br),Mr(),{provide:ys,useClass:xs},et,Ns,Rs({fallbackLang:"en",loader:Dr({prefix:"./assets/i18n/",suffix:".json"})}),{provide:Zi,useValue:"en-GB"},{provide:Qi,useClass:Br},Fs,{provide:Gn,useValue:{parse:{dateInput:"YYYY-MM-DD"},display:{dateInput:"YYYY-MM-DD",monthYearLabel:"YYYY MMM",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY MMM"}}},Hn(qs.pick(Ar)),Hn(Fi.forRoot()),Js(Xs()),{provide:jn,useClass:Tr,multi:!0},{provide:jn,useClass:Sr,multi:!0},Ir()]};bs(rr,We(ee({},ea),{providers:[vs(),...ea.providers]})).catch(l=>console.error(l));
