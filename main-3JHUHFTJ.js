import{k as nr,l as Xt,m as qi,o as ar,q as Zi,s as sr,x as rr}from"./chunk-WRVXSEHM.js";import{a as ke}from"./chunk-3Z5TZLES.js";import{a as ir}from"./chunk-3SN4OUBQ.js";import{a as er,b as tr}from"./chunk-MXAQDYDF.js";import{a as Js,b as Gi,c as $i,d as jn}from"./chunk-2GK6JW36.js";import{a as Bt}from"./chunk-GHMNIWS4.js";import"./chunk-DZHZUGCV.js";import{a as Je,b as Rs,c as Ls,d as Ns,e as Es,f as Fs,g as Ot,h as U,i as Ps,j as Li,k as Ys}from"./chunk-CHFAEZQL.js";import"./chunk-67HI2W2E.js";import{c as Us,d as Ws,f as js,h as Gs}from"./chunk-CJPLD6EO.js";import{a as Wn}from"./chunk-WWMFXZFL.js";import{a as Dt}from"./chunk-P3FHJ6IR.js";import{a as Is}from"./chunk-SGIUPGRF.js";import{a as Xe,b as be}from"./chunk-E4N67DCA.js";import{a as Ks}from"./chunk-2WJVJZOT.js";import"./chunk-TSZRK7QO.js";import{a as At}from"./chunk-RKQRLSYS.js";import{a as Ui,b as Wi,c as ji,d as Rt}from"./chunk-QOBU5Z3I.js";import{a as zs}from"./chunk-EGBKOO67.js";import{a as qs}from"./chunk-BEZQSPL7.js";import"./chunk-KYGW6C6S.js";import{a as Ni,d as Hs}from"./chunk-MGKHC3LK.js";import{b as Qs}from"./chunk-OE5OUFOX.js";import{e as $s,i as Xs}from"./chunk-EMQDV5R4.js";import{a as Ts,b as Ai,d as Tt,e as Qe,f as Ii,g as Ds,h as Os,i as Bs}from"./chunk-LXT3CYVZ.js";import{C as Qt,H as Pi,I as Yi,R as Hi,S as Zs,U as Vi,V as zi,X as It,a as As,b as Ri,c as _e,l as Ei,n as Fi,z as Vs}from"./chunk-36NSL2KV.js";import{a as Bi,b as ks}from"./chunk-FCTGDIHF.js";import{A as Ms,B as zn,C as Un,D as Ct,E as Ss,F as Cs,e as xs,h as _s,i as Ze,k as Ti,n as Di,t as Oi,x as bs}from"./chunk-Z62OWJYX.js";import{$ as W,$b as fs,Aa as _i,Ac as Si,Ba as kt,C as is,Cc as qe,Da as pe,E as Nn,Ec as H,Fc as vs,H as yi,Ia as hs,Ic as Fe,Ja as Gt,Jb as le,Jc as Pe,Kb as Z,Lb as Q,Nb as nt,Ob as at,Pb as st,Q as ns,Qb as _,Rb as m,S as En,Sb as p,Sc as Ci,T as _t,Tb as M,W as as,Xb as Yn,Y as ss,Yb as Hn,Yc as ws,Zc as Zt,_ as xi,_a as je,_b as Ge,aa as me,ab as us,bb as gs,bd as G,c as Ja,ca as K,cb as v,cc as S,cd as ys,da as We,e as In,ea as f,ec as A,f as Ka,fa as rs,fc as $t,ga as Fn,gb as bi,gc as qt,hc as Vn,ic as Mi,jc as Mt,ka as Ne,kb as ki,kc as St,l as es,la as Ee,lb as fe,m as Rn,ma as os,mb as ms,n as xt,nb as ps,oa as ls,oc as $e,pa as X,pc as ce,qc as rt,r as Ue,rc as we,s as ts,sa as j,sb as L,sc as C,ta as bt,tb as ve,tc as ye,ub as Pn,uc as xe,wa as cs,xa as ds,xb as ne,yb as it,z as Ln}from"./chunk-YQEFEBZC.js";import{a as oe,b as yt,c as Qa,e as Nd,g as Xa}from"./chunk-WWX6BADO.js";var Xn=Nd((Qn,Lt)=>{"use strict";(function(l,d){typeof Qn=="object"&&typeof Lt<"u"?Lt.exports=d():typeof define=="function"&&define.amd?define(d):l.moment=d()})(Qn,function(){"use strict";var l;function d(){return l.apply(null,arguments)}function n(e){l=e}function r(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function o(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(h(e,t))return!1;return!0}function P(e){return e===void 0}function Se(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Nt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ea(e,t){var i=[],a,s=e.length;for(a=0;a<s;++a)i.push(t(e[a],a));return i}function Ye(e,t){for(var i in t)h(t,i)&&(e[i]=t[i]);return h(t,"toString")&&(e.toString=t.toString),h(t,"valueOf")&&(e.valueOf=t.valueOf),e}function de(e,t,i,a){return Ta(e,t,i,a,!0).utc()}function Nr(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function T(e){return e._pf==null&&(e._pf=Nr()),e._pf}var Ki;Array.prototype.some?Ki=Array.prototype.some:Ki=function(e){var t=Object(this),i=t.length>>>0,a;for(a=0;a<i;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function en(e){var t=null,i=!1,a=e._d&&!isNaN(e._d.getTime());if(a&&(t=T(e),i=Ki.call(t.parsedDateParts,function(s){return s!=null}),a=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i),e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a;return e._isValid}function Jt(e){var t=de(NaN);return e!=null?Ye(T(t),e):T(t).userInvalidated=!0,t}var ta=d.momentProperties=[],tn=!1;function nn(e,t){var i,a,s,c=ta.length;if(P(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),P(t._i)||(e._i=t._i),P(t._f)||(e._f=t._f),P(t._l)||(e._l=t._l),P(t._strict)||(e._strict=t._strict),P(t._tzm)||(e._tzm=t._tzm),P(t._isUTC)||(e._isUTC=t._isUTC),P(t._offset)||(e._offset=t._offset),P(t._pf)||(e._pf=T(t)),P(t._locale)||(e._locale=t._locale),c>0)for(i=0;i<c;i++)a=ta[i],s=t[a],P(s)||(e[a]=s);return e}function Et(e){nn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),tn===!1&&(tn=!0,d.updateOffset(this),tn=!1)}function ae(e){return e instanceof Et||e!=null&&e._isAMomentObject!=null}function ia(e){d.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function ee(e,t){var i=!0;return Ye(function(){if(d.deprecationHandler!=null&&d.deprecationHandler(null,e),i){var a=[],s,c,u,w=arguments.length;for(c=0;c<w;c++){if(s="",typeof arguments[c]=="object"){s+=`
[`+c+"] ";for(u in arguments[0])h(arguments[0],u)&&(s+=u+": "+arguments[0][u]+", ");s=s.slice(0,-2)}else s=arguments[c];a.push(s)}ia(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),i=!1}return t.apply(this,arguments)},t)}var na={};function aa(e,t){d.deprecationHandler!=null&&d.deprecationHandler(e,t),na[e]||(ia(t),na[e]=!0)}d.suppressDeprecationWarnings=!1,d.deprecationHandler=null;function he(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Er(e){var t,i;for(i in e)h(e,i)&&(t=e[i],he(t)?this[i]=t:this["_"+i]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function an(e,t){var i=Ye({},e),a;for(a in t)h(t,a)&&(o(e[a])&&o(t[a])?(i[a]={},Ye(i[a],e[a]),Ye(i[a],t[a])):t[a]!=null?i[a]=t[a]:delete i[a]);for(a in e)h(e,a)&&!h(t,a)&&o(e[a])&&(i[a]=Ye({},i[a]));return i}function sn(e){e!=null&&this.set(e)}var rn;Object.keys?rn=Object.keys:rn=function(e){var t,i=[];for(t in e)h(e,t)&&i.push(t);return i};var Fr={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Pr(e,t,i){var a=this._calendar[e]||this._calendar.sameElse;return he(a)?a.call(t,i):a}function ue(e,t,i){var a=""+Math.abs(e),s=t-a.length,c=e>=0;return(c?i?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+a}var on=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ln={},dt={};function b(e,t,i,a){var s=a;typeof a=="string"&&(s=function(){return this[a]()}),e&&(dt[e]=s),t&&(dt[t[0]]=function(){return ue(s.apply(this,arguments),t[1],t[2])}),i&&(dt[i]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function Yr(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Hr(e){var t=e.match(on),i,a;for(i=0,a=t.length;i<a;i++)dt[t[i]]?t[i]=dt[t[i]]:t[i]=Yr(t[i]);return function(s){var c="",u;for(u=0;u<a;u++)c+=he(t[u])?t[u].call(s,e):t[u];return c}}function ei(e,t){return e.isValid()?(t=sa(t,e.localeData()),ln[t]=ln[t]||Hr(t),ln[t](e)):e.localeData().invalidDate()}function sa(e,t){var i=5;function a(s){return t.longDateFormat(s)||s}for(Kt.lastIndex=0;i>=0&&Kt.test(e);)e=e.replace(Kt,a),Kt.lastIndex=0,i-=1;return e}var Vr={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function zr(e){var t=this._longDateFormat[e],i=this._longDateFormat[e.toUpperCase()];return t||!i?t:(this._longDateFormat[e]=i.match(on).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Ur="Invalid date";function Wr(){return this._invalidDate}var jr="%d",Gr=/\d{1,2}/;function $r(e){return this._ordinal.replace("%d",e)}var qr={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Zr(e,t,i,a){var s=this._relativeTime[i];return he(s)?s(e,t,i,a):s.replace(/%d/i,e)}function Qr(e,t){var i=this._relativeTime[e>0?"future":"past"];return he(i)?i(t):i.replace(/%s/i,t)}var ra={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function te(e){return typeof e=="string"?ra[e]||ra[e.toLowerCase()]:void 0}function cn(e){var t={},i,a;for(a in e)h(e,a)&&(i=te(a),i&&(t[i]=e[a]));return t}var Xr={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Jr(e){var t=[],i;for(i in e)h(e,i)&&t.push({unit:i,priority:Xr[i]});return t.sort(function(a,s){return a.priority-s.priority}),t}var oa=/\d/,J=/\d\d/,la=/\d{3}/,dn=/\d{4}/,ti=/[+-]?\d{6}/,N=/\d\d?/,ca=/\d\d\d\d?/,da=/\d\d\d\d\d\d?/,ii=/\d{1,3}/,hn=/\d{1,4}/,ni=/[+-]?\d{1,6}/,ht=/\d+/,ai=/[+-]?\d+/,Kr=/Z|[+-]\d\d:?\d\d/gi,si=/Z|[+-]\d\d(?::?\d\d)?/gi,eo=/[+-]?\d+(\.\d{1,3})?/,Ft=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,ut=/^[1-9]\d?/,un=/^([1-9]\d|\d)/,ri;ri={};function y(e,t,i){ri[e]=he(t)?t:function(a,s){return a&&i?i:t}}function to(e,t){return h(ri,e)?ri[e](t._strict,t._locale):new RegExp(io(e))}function io(e){return Ce(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,i,a,s,c){return i||a||s||c}))}function Ce(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ie(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,i=0;return t!==0&&isFinite(t)&&(i=ie(t)),i}var gn={};function R(e,t){var i,a=t,s;for(typeof e=="string"&&(e=[e]),Se(t)&&(a=function(c,u){u[t]=D(c)}),s=e.length,i=0;i<s;i++)gn[e[i]]=a}function Pt(e,t){R(e,function(i,a,s,c){s._w=s._w||{},t(i,s._w,s,c)})}function no(e,t,i){t!=null&&h(gn,e)&&gn[e](t,i._a,i,e)}function oi(e){return e%4===0&&e%100!==0||e%400===0}var $=0,Te=1,ge=2,z=3,se=4,De=5,Ke=6,ao=7,so=8;b("Y",0,0,function(){var e=this.year();return e<=9999?ue(e,4):"+"+e}),b(0,["YY",2],0,function(){return this.year()%100}),b(0,["YYYY",4],0,"year"),b(0,["YYYYY",5],0,"year"),b(0,["YYYYYY",6,!0],0,"year"),y("Y",ai),y("YY",N,J),y("YYYY",hn,dn),y("YYYYY",ni,ti),y("YYYYYY",ni,ti),R(["YYYYY","YYYYYY"],$),R("YYYY",function(e,t){t[$]=e.length===2?d.parseTwoDigitYear(e):D(e)}),R("YY",function(e,t){t[$]=d.parseTwoDigitYear(e)}),R("Y",function(e,t){t[$]=parseInt(e,10)});function Yt(e){return oi(e)?366:365}d.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var ha=gt("FullYear",!0);function ro(){return oi(this.year())}function gt(e,t){return function(i){return i!=null?(ua(this,e,i),d.updateOffset(this,t),this):Ht(this,e)}}function Ht(e,t){if(!e.isValid())return NaN;var i=e._d,a=e._isUTC;switch(t){case"Milliseconds":return a?i.getUTCMilliseconds():i.getMilliseconds();case"Seconds":return a?i.getUTCSeconds():i.getSeconds();case"Minutes":return a?i.getUTCMinutes():i.getMinutes();case"Hours":return a?i.getUTCHours():i.getHours();case"Date":return a?i.getUTCDate():i.getDate();case"Day":return a?i.getUTCDay():i.getDay();case"Month":return a?i.getUTCMonth():i.getMonth();case"FullYear":return a?i.getUTCFullYear():i.getFullYear();default:return NaN}}function ua(e,t,i){var a,s,c,u,w;if(!(!e.isValid()||isNaN(i))){switch(a=e._d,s=e._isUTC,t){case"Milliseconds":return void(s?a.setUTCMilliseconds(i):a.setMilliseconds(i));case"Seconds":return void(s?a.setUTCSeconds(i):a.setSeconds(i));case"Minutes":return void(s?a.setUTCMinutes(i):a.setMinutes(i));case"Hours":return void(s?a.setUTCHours(i):a.setHours(i));case"Date":return void(s?a.setUTCDate(i):a.setDate(i));case"FullYear":break;default:return}c=i,u=e.month(),w=e.date(),w=w===29&&u===1&&!oi(c)?28:w,s?a.setUTCFullYear(c,u,w):a.setFullYear(c,u,w)}}function oo(e){return e=te(e),he(this[e])?this[e]():this}function lo(e,t){if(typeof e=="object"){e=cn(e);var i=Jr(e),a,s=i.length;for(a=0;a<s;a++)this[i[a].unit](e[i[a].unit])}else if(e=te(e),he(this[e]))return this[e](t);return this}function co(e,t){return(e%t+t)%t}var Y;Array.prototype.indexOf?Y=Array.prototype.indexOf:Y=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function mn(e,t){if(isNaN(e)||isNaN(t))return NaN;var i=co(t,12);return e+=(t-i)/12,i===1?oi(e)?29:28:31-i%7%2}b("M",["MM",2],"Mo",function(){return this.month()+1}),b("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),b("MMMM",0,0,function(e){return this.localeData().months(this,e)}),y("M",N,ut),y("MM",N,J),y("MMM",function(e,t){return t.monthsShortRegex(e)}),y("MMMM",function(e,t){return t.monthsRegex(e)}),R(["M","MM"],function(e,t){t[Te]=D(e)-1}),R(["MMM","MMMM"],function(e,t,i,a){var s=i._locale.monthsParse(e,a,i._strict);s!=null?t[Te]=s:T(i).invalidMonth=e});var ho="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ga="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ma=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,uo=Ft,go=Ft;function mo(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ma).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function po(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ma.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function fo(e,t,i){var a,s,c,u=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)c=de([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(c,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(c,"").toLocaleLowerCase();return i?t==="MMM"?(s=Y.call(this._shortMonthsParse,u),s!==-1?s:null):(s=Y.call(this._longMonthsParse,u),s!==-1?s:null):t==="MMM"?(s=Y.call(this._shortMonthsParse,u),s!==-1?s:(s=Y.call(this._longMonthsParse,u),s!==-1?s:null)):(s=Y.call(this._longMonthsParse,u),s!==-1?s:(s=Y.call(this._shortMonthsParse,u),s!==-1?s:null))}function vo(e,t,i){var a,s,c;if(this._monthsParseExact)return fo.call(this,e,t,i);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(s=de([2e3,a]),i&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!i&&!this._monthsParse[a]&&(c="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[a]=new RegExp(c.replace(".",""),"i")),i&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(i&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!i&&this._monthsParse[a].test(e))return a}}function pa(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!Se(t))return e}var i=t,a=e.date();return a=a<29?a:Math.min(a,mn(e.year(),i)),e._isUTC?e._d.setUTCMonth(i,a):e._d.setMonth(i,a),e}function fa(e){return e!=null?(pa(this,e),d.updateOffset(this,!0),this):Ht(this,"Month")}function wo(){return mn(this.year(),this.month())}function yo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||va.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=uo),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function xo(e){return this._monthsParseExact?(h(this,"_monthsRegex")||va.call(this),e?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=go),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function va(){function e(k,O){return O.length-k.length}var t=[],i=[],a=[],s,c,u,w;for(s=0;s<12;s++)c=de([2e3,s]),u=Ce(this.monthsShort(c,"")),w=Ce(this.months(c,"")),t.push(u),i.push(w),a.push(w),a.push(u);t.sort(e),i.sort(e),a.sort(e),this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function _o(e,t,i,a,s,c,u){var w;return e<100&&e>=0?(w=new Date(e+400,t,i,a,s,c,u),isFinite(w.getFullYear())&&w.setFullYear(e)):w=new Date(e,t,i,a,s,c,u),w}function Vt(e){var t,i;return e<100&&e>=0?(i=Array.prototype.slice.call(arguments),i[0]=e+400,t=new Date(Date.UTC.apply(null,i)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function li(e,t,i){var a=7+t-i,s=(7+Vt(e,0,a).getUTCDay()-t)%7;return-s+a-1}function wa(e,t,i,a,s){var c=(7+i-a)%7,u=li(e,a,s),w=1+7*(t-1)+c+u,k,O;return w<=0?(k=e-1,O=Yt(k)+w):w>Yt(e)?(k=e+1,O=w-Yt(e)):(k=e,O=w),{year:k,dayOfYear:O}}function zt(e,t,i){var a=li(e.year(),t,i),s=Math.floor((e.dayOfYear()-a-1)/7)+1,c,u;return s<1?(u=e.year()-1,c=s+Oe(u,t,i)):s>Oe(e.year(),t,i)?(c=s-Oe(e.year(),t,i),u=e.year()+1):(u=e.year(),c=s),{week:c,year:u}}function Oe(e,t,i){var a=li(e,t,i),s=li(e+1,t,i);return(Yt(e)-a+s)/7}b("w",["ww",2],"wo","week"),b("W",["WW",2],"Wo","isoWeek"),y("w",N,ut),y("ww",N,J),y("W",N,ut),y("WW",N,J),Pt(["w","ww","W","WW"],function(e,t,i,a){t[a.substr(0,1)]=D(e)});function bo(e){return zt(e,this._week.dow,this._week.doy).week}var ko={dow:0,doy:6};function Mo(){return this._week.dow}function So(){return this._week.doy}function Co(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function To(e){var t=zt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}b("d",0,"do","day"),b("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),b("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),b("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),b("e",0,0,"weekday"),b("E",0,0,"isoWeekday"),y("d",N),y("e",N),y("E",N),y("dd",function(e,t){return t.weekdaysMinRegex(e)}),y("ddd",function(e,t){return t.weekdaysShortRegex(e)}),y("dddd",function(e,t){return t.weekdaysRegex(e)}),Pt(["dd","ddd","dddd"],function(e,t,i,a){var s=i._locale.weekdaysParse(e,a,i._strict);s!=null?t.d=s:T(i).invalidWeekday=e}),Pt(["d","e","E"],function(e,t,i,a){t[a]=D(e)});function Do(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Oo(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function pn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Bo="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ya="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ao="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Io=Ft,Ro=Ft,Lo=Ft;function No(e,t){var i=r(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?pn(i,this._week.dow):e?i[e.day()]:i}function Eo(e){return e===!0?pn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Fo(e){return e===!0?pn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Po(e,t,i){var a,s,c,u=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)c=de([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(c,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(c,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(c,"").toLocaleLowerCase();return i?t==="dddd"?(s=Y.call(this._weekdaysParse,u),s!==-1?s:null):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,u),s!==-1?s:null):(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null):t==="dddd"?(s=Y.call(this._weekdaysParse,u),s!==-1||(s=Y.call(this._shortWeekdaysParse,u),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null)):t==="ddd"?(s=Y.call(this._shortWeekdaysParse,u),s!==-1||(s=Y.call(this._weekdaysParse,u),s!==-1)?s:(s=Y.call(this._minWeekdaysParse,u),s!==-1?s:null)):(s=Y.call(this._minWeekdaysParse,u),s!==-1||(s=Y.call(this._weekdaysParse,u),s!==-1)?s:(s=Y.call(this._shortWeekdaysParse,u),s!==-1?s:null))}function Yo(e,t,i){var a,s,c;if(this._weekdaysParseExact)return Po.call(this,e,t,i);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(s=de([2e3,1]).day(a),i&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(c="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[a]=new RegExp(c.replace(".",""),"i")),i&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(i&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(i&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!i&&this._weekdaysParse[a].test(e))return a}}function Ho(e){if(!this.isValid())return e!=null?this:NaN;var t=Ht(this,"Day");return e!=null?(e=Do(e,this.localeData()),this.add(e-t,"d")):t}function Vo(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function zo(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Oo(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function Uo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||fn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=Io),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Wo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||fn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ro),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function jo(e){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||fn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Lo),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function fn(){function e(q,Le){return Le.length-q.length}var t=[],i=[],a=[],s=[],c,u,w,k,O;for(c=0;c<7;c++)u=de([2e3,1]).day(c),w=Ce(this.weekdaysMin(u,"")),k=Ce(this.weekdaysShort(u,"")),O=Ce(this.weekdays(u,"")),t.push(w),i.push(k),a.push(O),s.push(w),s.push(k),s.push(O);t.sort(e),i.sort(e),a.sort(e),s.sort(e),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function vn(){return this.hours()%12||12}function Go(){return this.hours()||24}b("H",["HH",2],0,"hour"),b("h",["hh",2],0,vn),b("k",["kk",2],0,Go),b("hmm",0,0,function(){return""+vn.apply(this)+ue(this.minutes(),2)}),b("hmmss",0,0,function(){return""+vn.apply(this)+ue(this.minutes(),2)+ue(this.seconds(),2)}),b("Hmm",0,0,function(){return""+this.hours()+ue(this.minutes(),2)}),b("Hmmss",0,0,function(){return""+this.hours()+ue(this.minutes(),2)+ue(this.seconds(),2)});function xa(e,t){b(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}xa("a",!0),xa("A",!1);function _a(e,t){return t._meridiemParse}y("a",_a),y("A",_a),y("H",N,un),y("h",N,ut),y("k",N,ut),y("HH",N,J),y("hh",N,J),y("kk",N,J),y("hmm",ca),y("hmmss",da),y("Hmm",ca),y("Hmmss",da),R(["H","HH"],z),R(["k","kk"],function(e,t,i){var a=D(e);t[z]=a===24?0:a}),R(["a","A"],function(e,t,i){i._isPm=i._locale.isPM(e),i._meridiem=e}),R(["h","hh"],function(e,t,i){t[z]=D(e),T(i).bigHour=!0}),R("hmm",function(e,t,i){var a=e.length-2;t[z]=D(e.substr(0,a)),t[se]=D(e.substr(a)),T(i).bigHour=!0}),R("hmmss",function(e,t,i){var a=e.length-4,s=e.length-2;t[z]=D(e.substr(0,a)),t[se]=D(e.substr(a,2)),t[De]=D(e.substr(s)),T(i).bigHour=!0}),R("Hmm",function(e,t,i){var a=e.length-2;t[z]=D(e.substr(0,a)),t[se]=D(e.substr(a))}),R("Hmmss",function(e,t,i){var a=e.length-4,s=e.length-2;t[z]=D(e.substr(0,a)),t[se]=D(e.substr(a,2)),t[De]=D(e.substr(s))});function $o(e){return(e+"").toLowerCase().charAt(0)==="p"}var qo=/[ap]\.?m?\.?/i,Zo=gt("Hours",!0);function Qo(e,t,i){return e>11?i?"pm":"PM":i?"am":"AM"}var ba={calendar:Fr,longDateFormat:Vr,invalidDate:Ur,ordinal:jr,dayOfMonthOrdinalParse:Gr,relativeTime:qr,months:ho,monthsShort:ga,week:ko,weekdays:Bo,weekdaysMin:Ao,weekdaysShort:ya,meridiemParse:qo},F={},Ut={},Wt;function Xo(e,t){var i,a=Math.min(e.length,t.length);for(i=0;i<a;i+=1)if(e[i]!==t[i])return i;return a}function ka(e){return e&&e.toLowerCase().replace("_","-")}function Jo(e){for(var t=0,i,a,s,c;t<e.length;){for(c=ka(e[t]).split("-"),i=c.length,a=ka(e[t+1]),a=a?a.split("-"):null;i>0;){if(s=ci(c.slice(0,i).join("-")),s)return s;if(a&&a.length>=i&&Xo(c,a)>=i-1)break;i--}t++}return Wt}function Ko(e){return!!(e&&e.match("^[^/\\\\]*$"))}function ci(e){var t=null,i;if(F[e]===void 0&&typeof Lt<"u"&&Lt&&Lt.exports&&Ko(e))try{t=Wt._abbr,i=Qa,i("./locale/"+e),He(t)}catch(a){F[e]=null}return F[e]}function He(e,t){var i;return e&&(P(t)?i=Be(e):i=wn(e,t),i?Wt=i:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Wt._abbr}function wn(e,t){if(t!==null){var i,a=ba;if(t.abbr=e,F[e]!=null)aa("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=F[e]._config;else if(t.parentLocale!=null)if(F[t.parentLocale]!=null)a=F[t.parentLocale]._config;else if(i=ci(t.parentLocale),i!=null)a=i._config;else return Ut[t.parentLocale]||(Ut[t.parentLocale]=[]),Ut[t.parentLocale].push({name:e,config:t}),null;return F[e]=new sn(an(a,t)),Ut[e]&&Ut[e].forEach(function(s){wn(s.name,s.config)}),He(e),F[e]}else return delete F[e],null}function el(e,t){if(t!=null){var i,a,s=ba;F[e]!=null&&F[e].parentLocale!=null?F[e].set(an(F[e]._config,t)):(a=ci(e),a!=null&&(s=a._config),t=an(s,t),a==null&&(t.abbr=e),i=new sn(t),i.parentLocale=F[e],F[e]=i),He(e)}else F[e]!=null&&(F[e].parentLocale!=null?(F[e]=F[e].parentLocale,e===He()&&He(e)):F[e]!=null&&delete F[e]);return F[e]}function Be(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Wt;if(!r(e)){if(t=ci(e),t)return t;e=[e]}return Jo(e)}function tl(){return rn(F)}function yn(e){var t,i=e._a;return i&&T(e).overflow===-2&&(t=i[Te]<0||i[Te]>11?Te:i[ge]<1||i[ge]>mn(i[$],i[Te])?ge:i[z]<0||i[z]>24||i[z]===24&&(i[se]!==0||i[De]!==0||i[Ke]!==0)?z:i[se]<0||i[se]>59?se:i[De]<0||i[De]>59?De:i[Ke]<0||i[Ke]>999?Ke:-1,T(e)._overflowDayOfYear&&(t<$||t>ge)&&(t=ge),T(e)._overflowWeeks&&t===-1&&(t=ao),T(e)._overflowWeekday&&t===-1&&(t=so),T(e).overflow=t),e}var il=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,nl=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,al=/Z|[+-]\d\d(?::?\d\d)?/,di=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],xn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],sl=/^\/?Date\((-?\d+)/i,rl=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ol={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ma(e){var t,i,a=e._i,s=il.exec(a)||nl.exec(a),c,u,w,k,O=di.length,q=xn.length;if(s){for(T(e).iso=!0,t=0,i=O;t<i;t++)if(di[t][1].exec(s[1])){u=di[t][0],c=di[t][2]!==!1;break}if(u==null){e._isValid=!1;return}if(s[3]){for(t=0,i=q;t<i;t++)if(xn[t][1].exec(s[3])){w=(s[2]||" ")+xn[t][0];break}if(w==null){e._isValid=!1;return}}if(!c&&w!=null){e._isValid=!1;return}if(s[4])if(al.exec(s[4]))k="Z";else{e._isValid=!1;return}e._f=u+(w||"")+(k||""),bn(e)}else e._isValid=!1}function ll(e,t,i,a,s,c){var u=[cl(e),ga.indexOf(t),parseInt(i,10),parseInt(a,10),parseInt(s,10)];return c&&u.push(parseInt(c,10)),u}function cl(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function dl(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function hl(e,t,i){if(e){var a=ya.indexOf(e),s=new Date(t[0],t[1],t[2]).getDay();if(a!==s)return T(i).weekdayMismatch=!0,i._isValid=!1,!1}return!0}function ul(e,t,i){if(e)return ol[e];if(t)return 0;var a=parseInt(i,10),s=a%100,c=(a-s)/100;return c*60+s}function Sa(e){var t=rl.exec(dl(e._i)),i;if(t){if(i=ll(t[4],t[3],t[2],t[5],t[6],t[7]),!hl(t[1],i,e))return;e._a=i,e._tzm=ul(t[8],t[9],t[10]),e._d=Vt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),T(e).rfc2822=!0}else e._isValid=!1}function gl(e){var t=sl.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Ma(e),e._isValid===!1)delete e._isValid;else return;if(Sa(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:d.createFromInputFallback(e)}d.createFromInputFallback=ee("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function mt(e,t,i){return e??t??i}function ml(e){var t=new Date(d.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function _n(e){var t,i,a=[],s,c,u;if(!e._d){for(s=ml(e),e._w&&e._a[ge]==null&&e._a[Te]==null&&pl(e),e._dayOfYear!=null&&(u=mt(e._a[$],s[$]),(e._dayOfYear>Yt(u)||e._dayOfYear===0)&&(T(e)._overflowDayOfYear=!0),i=Vt(u,0,e._dayOfYear),e._a[Te]=i.getUTCMonth(),e._a[ge]=i.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[z]===24&&e._a[se]===0&&e._a[De]===0&&e._a[Ke]===0&&(e._nextDay=!0,e._a[z]=0),e._d=(e._useUTC?Vt:_o).apply(null,a),c=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[z]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==c&&(T(e).weekdayMismatch=!0)}}function pl(e){var t,i,a,s,c,u,w,k,O;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(c=1,u=4,i=mt(t.GG,e._a[$],zt(E(),1,4).year),a=mt(t.W,1),s=mt(t.E,1),(s<1||s>7)&&(k=!0)):(c=e._locale._week.dow,u=e._locale._week.doy,O=zt(E(),c,u),i=mt(t.gg,e._a[$],O.year),a=mt(t.w,O.week),t.d!=null?(s=t.d,(s<0||s>6)&&(k=!0)):t.e!=null?(s=t.e+c,(t.e<0||t.e>6)&&(k=!0)):s=c),a<1||a>Oe(i,c,u)?T(e)._overflowWeeks=!0:k!=null?T(e)._overflowWeekday=!0:(w=wa(i,a,s,c,u),e._a[$]=w.year,e._dayOfYear=w.dayOfYear)}d.ISO_8601=function(){},d.RFC_2822=function(){};function bn(e){if(e._f===d.ISO_8601){Ma(e);return}if(e._f===d.RFC_2822){Sa(e);return}e._a=[],T(e).empty=!0;var t=""+e._i,i,a,s,c,u,w=t.length,k=0,O,q;for(s=sa(e._f,e._locale).match(on)||[],q=s.length,i=0;i<q;i++)c=s[i],a=(t.match(to(c,e))||[])[0],a&&(u=t.substr(0,t.indexOf(a)),u.length>0&&T(e).unusedInput.push(u),t=t.slice(t.indexOf(a)+a.length),k+=a.length),dt[c]?(a?T(e).empty=!1:T(e).unusedTokens.push(c),no(c,a,e)):e._strict&&!a&&T(e).unusedTokens.push(c);T(e).charsLeftOver=w-k,t.length>0&&T(e).unusedInput.push(t),e._a[z]<=12&&T(e).bigHour===!0&&e._a[z]>0&&(T(e).bigHour=void 0),T(e).parsedDateParts=e._a.slice(0),T(e).meridiem=e._meridiem,e._a[z]=fl(e._locale,e._a[z],e._meridiem),O=T(e).era,O!==null&&(e._a[$]=e._locale.erasConvertYear(O,e._a[$])),_n(e),yn(e)}function fl(e,t,i){var a;return i==null?t:e.meridiemHour!=null?e.meridiemHour(t,i):(e.isPM!=null&&(a=e.isPM(i),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function vl(e){var t,i,a,s,c,u,w=!1,k=e._f.length;if(k===0){T(e).invalidFormat=!0,e._d=new Date(NaN);return}for(s=0;s<k;s++)c=0,u=!1,t=nn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[s],bn(t),en(t)&&(u=!0),c+=T(t).charsLeftOver,c+=T(t).unusedTokens.length*10,T(t).score=c,w?c<a&&(a=c,i=t):(a==null||c<a||u)&&(a=c,i=t,u&&(w=!0));Ye(e,i||t)}function wl(e){if(!e._d){var t=cn(e._i),i=t.day===void 0?t.date:t.day;e._a=ea([t.year,t.month,i,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),_n(e)}}function yl(e){var t=new Et(yn(Ca(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ca(e){var t=e._i,i=e._f;return e._locale=e._locale||Be(e._l),t===null||i===void 0&&t===""?Jt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),ae(t)?new Et(yn(t)):(Nt(t)?e._d=t:r(i)?vl(e):i?bn(e):xl(e),en(e)||(e._d=null),e))}function xl(e){var t=e._i;P(t)?e._d=new Date(d.now()):Nt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?gl(e):r(t)?(e._a=ea(t.slice(0),function(i){return parseInt(i,10)}),_n(e)):o(t)?wl(e):Se(t)?e._d=new Date(t):d.createFromInputFallback(e)}function Ta(e,t,i,a,s){var c={};return(t===!0||t===!1)&&(a=t,t=void 0),(i===!0||i===!1)&&(a=i,i=void 0),(o(e)&&x(e)||r(e)&&e.length===0)&&(e=void 0),c._isAMomentObject=!0,c._useUTC=c._isUTC=s,c._l=i,c._i=e,c._f=t,c._strict=a,yl(c)}function E(e,t,i,a){return Ta(e,t,i,a,!1)}var _l=ee("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=E.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Jt()}),bl=ee("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=E.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Jt()});function Da(e,t){var i,a;if(t.length===1&&r(t[0])&&(t=t[0]),!t.length)return E();for(i=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](i))&&(i=t[a]);return i}function kl(){var e=[].slice.call(arguments,0);return Da("isBefore",e)}function Ml(){var e=[].slice.call(arguments,0);return Da("isAfter",e)}var Sl=function(){return Date.now?Date.now():+new Date},jt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Cl(e){var t,i=!1,a,s=jt.length;for(t in e)if(h(e,t)&&!(Y.call(jt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<s;++a)if(e[jt[a]]){if(i)return!1;parseFloat(e[jt[a]])!==D(e[jt[a]])&&(i=!0)}return!0}function Tl(){return this._isValid}function Dl(){return re(NaN)}function hi(e){var t=cn(e),i=t.year||0,a=t.quarter||0,s=t.month||0,c=t.week||t.isoWeek||0,u=t.day||0,w=t.hour||0,k=t.minute||0,O=t.second||0,q=t.millisecond||0;this._isValid=Cl(t),this._milliseconds=+q+O*1e3+k*6e4+w*1e3*60*60,this._days=+u+c*7,this._months=+s+a*3+i*12,this._data={},this._locale=Be(),this._bubble()}function ui(e){return e instanceof hi}function kn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ol(e,t,i){var a=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),c=0,u;for(u=0;u<a;u++)(i&&e[u]!==t[u]||!i&&D(e[u])!==D(t[u]))&&c++;return c+s}function Oa(e,t){b(e,0,0,function(){var i=this.utcOffset(),a="+";return i<0&&(i=-i,a="-"),a+ue(~~(i/60),2)+t+ue(~~i%60,2)})}Oa("Z",":"),Oa("ZZ",""),y("Z",si),y("ZZ",si),R(["Z","ZZ"],function(e,t,i){i._useUTC=!0,i._tzm=Mn(si,e)});var Bl=/([\+\-]|\d\d)/gi;function Mn(e,t){var i=(t||"").match(e),a,s,c;return i===null?null:(a=i[i.length-1]||[],s=(a+"").match(Bl)||["-",0,0],c=+(s[1]*60)+D(s[2]),c===0?0:s[0]==="+"?c:-c)}function Sn(e,t){var i,a;return t._isUTC?(i=t.clone(),a=(ae(e)||Nt(e)?e.valueOf():E(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),d.updateOffset(i,!1),i):E(e).local()}function Cn(e){return-Math.round(e._d.getTimezoneOffset())}d.updateOffset=function(){};function Al(e,t,i){var a=this._offset||0,s;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Mn(si,e),e===null)return this}else Math.abs(e)<16&&!i&&(e=e*60);return!this._isUTC&&t&&(s=Cn(this)),this._offset=e,this._isUTC=!0,s!=null&&this.add(s,"m"),a!==e&&(!t||this._changeInProgress?Ra(this,re(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,d.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:Cn(this)}function Il(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Rl(e){return this.utcOffset(0,e)}function Ll(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Cn(this),"m")),this}function Nl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Mn(Kr,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function El(e){return this.isValid()?(e=e?E(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Fl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Pl(){if(!P(this._isDSTShifted))return this._isDSTShifted;var e={},t;return nn(e,this),e=Ca(e),e._a?(t=e._isUTC?de(e._a):E(e._a),this._isDSTShifted=this.isValid()&&Ol(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Yl(){return this.isValid()?!this._isUTC:!1}function Hl(){return this.isValid()?this._isUTC:!1}function Ba(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Vl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,zl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function re(e,t){var i=e,a=null,s,c,u;return ui(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:Se(e)||!isNaN(+e)?(i={},t?i[t]=+e:i.milliseconds=+e):(a=Vl.exec(e))?(s=a[1]==="-"?-1:1,i={y:0,d:D(a[ge])*s,h:D(a[z])*s,m:D(a[se])*s,s:D(a[De])*s,ms:D(kn(a[Ke]*1e3))*s}):(a=zl.exec(e))?(s=a[1]==="-"?-1:1,i={y:et(a[2],s),M:et(a[3],s),w:et(a[4],s),d:et(a[5],s),h:et(a[6],s),m:et(a[7],s),s:et(a[8],s)}):i==null?i={}:typeof i=="object"&&("from"in i||"to"in i)&&(u=Ul(E(i.from),E(i.to)),i={},i.ms=u.milliseconds,i.M=u.months),c=new hi(i),ui(e)&&h(e,"_locale")&&(c._locale=e._locale),ui(e)&&h(e,"_isValid")&&(c._isValid=e._isValid),c}re.fn=hi.prototype,re.invalid=Dl;function et(e,t){var i=e&&parseFloat(e.replace(",","."));return(isNaN(i)?0:i)*t}function Aa(e,t){var i={};return i.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(i.months,"M").isAfter(t)&&--i.months,i.milliseconds=+t-+e.clone().add(i.months,"M"),i}function Ul(e,t){var i;return e.isValid()&&t.isValid()?(t=Sn(t,e),e.isBefore(t)?i=Aa(e,t):(i=Aa(t,e),i.milliseconds=-i.milliseconds,i.months=-i.months),i):{milliseconds:0,months:0}}function Ia(e,t){return function(i,a){var s,c;return a!==null&&!isNaN(+a)&&(aa(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),c=i,i=a,a=c),s=re(i,a),Ra(this,s,e),this}}function Ra(e,t,i,a){var s=t._milliseconds,c=kn(t._days),u=kn(t._months);e.isValid()&&(a=a??!0,u&&pa(e,Ht(e,"Month")+u*i),c&&ua(e,"Date",Ht(e,"Date")+c*i),s&&e._d.setTime(e._d.valueOf()+s*i),a&&d.updateOffset(e,c||u))}var Wl=Ia(1,"add"),jl=Ia(-1,"subtract");function La(e){return typeof e=="string"||e instanceof String}function Gl(e){return ae(e)||Nt(e)||La(e)||Se(e)||ql(e)||$l(e)||e===null||e===void 0}function $l(e){var t=o(e)&&!x(e),i=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,c,u=a.length;for(s=0;s<u;s+=1)c=a[s],i=i||h(e,c);return t&&i}function ql(e){var t=r(e),i=!1;return t&&(i=e.filter(function(a){return!Se(a)&&La(e)}).length===0),t&&i}function Zl(e){var t=o(e)&&!x(e),i=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,c;for(s=0;s<a.length;s+=1)c=a[s],i=i||h(e,c);return t&&i}function Ql(e,t){var i=e.diff(t,"days",!0);return i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse"}function Xl(e,t){arguments.length===1&&(arguments[0]?Gl(arguments[0])?(e=arguments[0],t=void 0):Zl(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var i=e||E(),a=Sn(i,this).startOf("day"),s=d.calendarFormat(this,a)||"sameElse",c=t&&(he(t[s])?t[s].call(this,i):t[s]);return this.format(c||this.localeData().calendar(s,this,E(i)))}function Jl(){return new Et(this)}function Kl(e,t){var i=ae(e)?e:E(e);return this.isValid()&&i.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()>i.valueOf():i.valueOf()<this.clone().startOf(t).valueOf()):!1}function ec(e,t){var i=ae(e)?e:E(e);return this.isValid()&&i.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()<i.valueOf():this.clone().endOf(t).valueOf()<i.valueOf()):!1}function tc(e,t,i,a){var s=ae(e)?e:E(e),c=ae(t)?t:E(t);return this.isValid()&&s.isValid()&&c.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(s,i):!this.isBefore(s,i))&&(a[1]===")"?this.isBefore(c,i):!this.isAfter(c,i))):!1}function ic(e,t){var i=ae(e)?e:E(e),a;return this.isValid()&&i.isValid()?(t=te(t)||"millisecond",t==="millisecond"?this.valueOf()===i.valueOf():(a=i.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function nc(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ac(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function sc(e,t,i){var a,s,c;if(!this.isValid())return NaN;if(a=Sn(e,this),!a.isValid())return NaN;switch(s=(a.utcOffset()-this.utcOffset())*6e4,t=te(t),t){case"year":c=gi(this,a)/12;break;case"month":c=gi(this,a);break;case"quarter":c=gi(this,a)/3;break;case"second":c=(this-a)/1e3;break;case"minute":c=(this-a)/6e4;break;case"hour":c=(this-a)/36e5;break;case"day":c=(this-a-s)/864e5;break;case"week":c=(this-a-s)/6048e5;break;default:c=this-a}return i?c:ie(c)}function gi(e,t){if(e.date()<t.date())return-gi(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(i,"months"),s,c;return t-a<0?(s=e.clone().add(i-1,"months"),c=(t-a)/(a-s)):(s=e.clone().add(i+1,"months"),c=(t-a)/(s-a)),-(i+c)||0}d.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",d.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function rc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function oc(e){if(!this.isValid())return null;var t=e!==!0,i=t?this.clone().utc():this;return i.year()<0||i.year()>9999?ei(i,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):he(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",ei(i,"Z")):ei(i,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function lc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",i,a,s,c;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),i="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",c=t+'[")]',this.format(i+a+s+c)}function cc(e){e||(e=this.isUtc()?d.defaultFormatUtc:d.defaultFormat);var t=ei(this,e);return this.localeData().postformat(t)}function dc(e,t){return this.isValid()&&(ae(e)&&e.isValid()||E(e).isValid())?re({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function hc(e){return this.from(E(),e)}function uc(e,t){return this.isValid()&&(ae(e)&&e.isValid()||E(e).isValid())?re({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gc(e){return this.to(E(),e)}function Na(e){var t;return e===void 0?this._locale._abbr:(t=Be(e),t!=null&&(this._locale=t),this)}var Ea=ee("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Fa(){return this._locale}var mi=1e3,pt=60*mi,pi=60*pt,Pa=(365*400+97)*24*pi;function ft(e,t){return(e%t+t)%t}function Ya(e,t,i){return e<100&&e>=0?new Date(e+400,t,i)-Pa:new Date(e,t,i).valueOf()}function Ha(e,t,i){return e<100&&e>=0?Date.UTC(e+400,t,i)-Pa:Date.UTC(e,t,i)}function mc(e){var t,i;if(e=te(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ha:Ya,e){case"year":t=i(this.year(),0,1);break;case"quarter":t=i(this.year(),this.month()-this.month()%3,1);break;case"month":t=i(this.year(),this.month(),1);break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=i(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=ft(t+(this._isUTC?0:this.utcOffset()*pt),pi);break;case"minute":t=this._d.valueOf(),t-=ft(t,pt);break;case"second":t=this._d.valueOf(),t-=ft(t,mi);break}return this._d.setTime(t),d.updateOffset(this,!0),this}function pc(e){var t,i;if(e=te(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(i=this._isUTC?Ha:Ya,e){case"year":t=i(this.year()+1,0,1)-1;break;case"quarter":t=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=i(this.year(),this.month()+1,1)-1;break;case"week":t=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=pi-ft(t+(this._isUTC?0:this.utcOffset()*pt),pi)-1;break;case"minute":t=this._d.valueOf(),t+=pt-ft(t,pt)-1;break;case"second":t=this._d.valueOf(),t+=mi-ft(t,mi)-1;break}return this._d.setTime(t),d.updateOffset(this,!0),this}function fc(){return this._d.valueOf()-(this._offset||0)*6e4}function vc(){return Math.floor(this.valueOf()/1e3)}function wc(){return new Date(this.valueOf())}function yc(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function xc(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function _c(){return this.isValid()?this.toISOString():null}function bc(){return en(this)}function kc(){return Ye({},T(this))}function Mc(){return T(this).overflow}function Sc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}b("N",0,0,"eraAbbr"),b("NN",0,0,"eraAbbr"),b("NNN",0,0,"eraAbbr"),b("NNNN",0,0,"eraName"),b("NNNNN",0,0,"eraNarrow"),b("y",["y",1],"yo","eraYear"),b("y",["yy",2],0,"eraYear"),b("y",["yyy",3],0,"eraYear"),b("y",["yyyy",4],0,"eraYear"),y("N",Tn),y("NN",Tn),y("NNN",Tn),y("NNNN",Ec),y("NNNNN",Fc),R(["N","NN","NNN","NNNN","NNNNN"],function(e,t,i,a){var s=i._locale.erasParse(e,a,i._strict);s?T(i).era=s:T(i).invalidEra=e}),y("y",ht),y("yy",ht),y("yyy",ht),y("yyyy",ht),y("yo",Pc),R(["y","yy","yyy","yyyy"],$),R(["yo"],function(e,t,i,a){var s;i._locale._eraYearOrdinalRegex&&(s=e.match(i._locale._eraYearOrdinalRegex)),i._locale.eraYearOrdinalParse?t[$]=i._locale.eraYearOrdinalParse(e,s):t[$]=parseInt(e,10)});function Cc(e,t){var i,a,s,c=this._eras||Be("en")._eras;for(i=0,a=c.length;i<a;++i)switch(typeof c[i].since==="string"&&(s=d(c[i].since).startOf("day"),c[i].since=s.valueOf()),typeof c[i].until){case"undefined":c[i].until=1/0;break;case"string":s=d(c[i].until).startOf("day").valueOf(),c[i].until=s.valueOf();break}return c}function Tc(e,t,i){var a,s,c=this.eras(),u,w,k;for(e=e.toUpperCase(),a=0,s=c.length;a<s;++a)if(u=c[a].name.toUpperCase(),w=c[a].abbr.toUpperCase(),k=c[a].narrow.toUpperCase(),i)switch(t){case"N":case"NN":case"NNN":if(w===e)return c[a];break;case"NNNN":if(u===e)return c[a];break;case"NNNNN":if(k===e)return c[a];break}else if([u,w,k].indexOf(e)>=0)return c[a]}function Dc(e,t){var i=e.since<=e.until?1:-1;return t===void 0?d(e.since).year():d(e.since).year()+(t-e.offset)*i}function Oc(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].name;return""}function Bc(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].narrow;return""}function Ac(){var e,t,i,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(i=this.clone().startOf("day").valueOf(),a[e].since<=i&&i<=a[e].until||a[e].until<=i&&i<=a[e].since)return a[e].abbr;return""}function Ic(){var e,t,i,a,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(i=s[e].since<=s[e].until?1:-1,a=this.clone().startOf("day").valueOf(),s[e].since<=a&&a<=s[e].until||s[e].until<=a&&a<=s[e].since)return(this.year()-d(s[e].since).year())*i+s[e].offset;return this.year()}function Rc(e){return h(this,"_erasNameRegex")||Dn.call(this),e?this._erasNameRegex:this._erasRegex}function Lc(e){return h(this,"_erasAbbrRegex")||Dn.call(this),e?this._erasAbbrRegex:this._erasRegex}function Nc(e){return h(this,"_erasNarrowRegex")||Dn.call(this),e?this._erasNarrowRegex:this._erasRegex}function Tn(e,t){return t.erasAbbrRegex(e)}function Ec(e,t){return t.erasNameRegex(e)}function Fc(e,t){return t.erasNarrowRegex(e)}function Pc(e,t){return t._eraYearOrdinalRegex||ht}function Dn(){var e=[],t=[],i=[],a=[],s,c,u,w,k,O=this.eras();for(s=0,c=O.length;s<c;++s)u=Ce(O[s].name),w=Ce(O[s].abbr),k=Ce(O[s].narrow),t.push(u),e.push(w),i.push(k),a.push(u),a.push(w),a.push(k);this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}b(0,["gg",2],0,function(){return this.weekYear()%100}),b(0,["GG",2],0,function(){return this.isoWeekYear()%100});function fi(e,t){b(0,[e,e.length],0,t)}fi("gggg","weekYear"),fi("ggggg","weekYear"),fi("GGGG","isoWeekYear"),fi("GGGGG","isoWeekYear"),y("G",ai),y("g",ai),y("GG",N,J),y("gg",N,J),y("GGGG",hn,dn),y("gggg",hn,dn),y("GGGGG",ni,ti),y("ggggg",ni,ti),Pt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,i,a){t[a.substr(0,2)]=D(e)}),Pt(["gg","GG"],function(e,t,i,a){t[a]=d.parseTwoDigitYear(e)});function Yc(e){return Va.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function Hc(e){return Va.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Vc(){return Oe(this.year(),1,4)}function zc(){return Oe(this.isoWeekYear(),1,4)}function Uc(){var e=this.localeData()._week;return Oe(this.year(),e.dow,e.doy)}function Wc(){var e=this.localeData()._week;return Oe(this.weekYear(),e.dow,e.doy)}function Va(e,t,i,a,s){var c;return e==null?zt(this,a,s).year:(c=Oe(e,a,s),t>c&&(t=c),jc.call(this,e,t,i,a,s))}function jc(e,t,i,a,s){var c=wa(e,t,i,a,s),u=Vt(c.year,0,c.dayOfYear);return this.year(u.getUTCFullYear()),this.month(u.getUTCMonth()),this.date(u.getUTCDate()),this}b("Q",0,"Qo","quarter"),y("Q",oa),R("Q",function(e,t){t[Te]=(D(e)-1)*3});function Gc(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}b("D",["DD",2],"Do","date"),y("D",N,ut),y("DD",N,J),y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),R(["D","DD"],ge),R("Do",function(e,t){t[ge]=D(e.match(N)[0])});var za=gt("Date",!0);b("DDD",["DDDD",3],"DDDo","dayOfYear"),y("DDD",ii),y("DDDD",la),R(["DDD","DDDD"],function(e,t,i){i._dayOfYear=D(e)});function $c(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}b("m",["mm",2],0,"minute"),y("m",N,un),y("mm",N,J),R(["m","mm"],se);var qc=gt("Minutes",!1);b("s",["ss",2],0,"second"),y("s",N,un),y("ss",N,J),R(["s","ss"],De);var Zc=gt("Seconds",!1);b("S",0,0,function(){return~~(this.millisecond()/100)}),b(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),b(0,["SSS",3],0,"millisecond"),b(0,["SSSS",4],0,function(){return this.millisecond()*10}),b(0,["SSSSS",5],0,function(){return this.millisecond()*100}),b(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3}),b(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4}),b(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5}),b(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6}),y("S",ii,oa),y("SS",ii,J),y("SSS",ii,la);var Ve,Ua;for(Ve="SSSS";Ve.length<=9;Ve+="S")y(Ve,ht);function Qc(e,t){t[Ke]=D(("0."+e)*1e3)}for(Ve="S";Ve.length<=9;Ve+="S")R(Ve,Qc);Ua=gt("Milliseconds",!1),b("z",0,0,"zoneAbbr"),b("zz",0,0,"zoneName");function Xc(){return this._isUTC?"UTC":""}function Jc(){return this._isUTC?"Coordinated Universal Time":""}var g=Et.prototype;g.add=Wl,g.calendar=Xl,g.clone=Jl,g.diff=sc,g.endOf=pc,g.format=cc,g.from=dc,g.fromNow=hc,g.to=uc,g.toNow=gc,g.get=oo,g.invalidAt=Mc,g.isAfter=Kl,g.isBefore=ec,g.isBetween=tc,g.isSame=ic,g.isSameOrAfter=nc,g.isSameOrBefore=ac,g.isValid=bc,g.lang=Ea,g.locale=Na,g.localeData=Fa,g.max=bl,g.min=_l,g.parsingFlags=kc,g.set=lo,g.startOf=mc,g.subtract=jl,g.toArray=yc,g.toObject=xc,g.toDate=wc,g.toISOString=oc,g.inspect=lc,typeof Symbol<"u"&&Symbol.for!=null&&(g[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),g.toJSON=_c,g.toString=rc,g.unix=vc,g.valueOf=fc,g.creationData=Sc,g.eraName=Oc,g.eraNarrow=Bc,g.eraAbbr=Ac,g.eraYear=Ic,g.year=ha,g.isLeapYear=ro,g.weekYear=Yc,g.isoWeekYear=Hc,g.quarter=g.quarters=Gc,g.month=fa,g.daysInMonth=wo,g.week=g.weeks=Co,g.isoWeek=g.isoWeeks=To,g.weeksInYear=Uc,g.weeksInWeekYear=Wc,g.isoWeeksInYear=Vc,g.isoWeeksInISOWeekYear=zc,g.date=za,g.day=g.days=Ho,g.weekday=Vo,g.isoWeekday=zo,g.dayOfYear=$c,g.hour=g.hours=Zo,g.minute=g.minutes=qc,g.second=g.seconds=Zc,g.millisecond=g.milliseconds=Ua,g.utcOffset=Al,g.utc=Rl,g.local=Ll,g.parseZone=Nl,g.hasAlignedHourOffset=El,g.isDST=Fl,g.isLocal=Yl,g.isUtcOffset=Hl,g.isUtc=Ba,g.isUTC=Ba,g.zoneAbbr=Xc,g.zoneName=Jc,g.dates=ee("dates accessor is deprecated. Use date instead.",za),g.months=ee("months accessor is deprecated. Use month instead",fa),g.years=ee("years accessor is deprecated. Use year instead",ha),g.zone=ee("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Il),g.isDSTShifted=ee("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Pl);function Kc(e){return E(e*1e3)}function ed(){return E.apply(null,arguments).parseZone()}function Wa(e){return e}var I=sn.prototype;I.calendar=Pr,I.longDateFormat=zr,I.invalidDate=Wr,I.ordinal=$r,I.preparse=Wa,I.postformat=Wa,I.relativeTime=Zr,I.pastFuture=Qr,I.set=Er,I.eras=Cc,I.erasParse=Tc,I.erasConvertYear=Dc,I.erasAbbrRegex=Lc,I.erasNameRegex=Rc,I.erasNarrowRegex=Nc,I.months=mo,I.monthsShort=po,I.monthsParse=vo,I.monthsRegex=xo,I.monthsShortRegex=yo,I.week=bo,I.firstDayOfYear=So,I.firstDayOfWeek=Mo,I.weekdays=No,I.weekdaysMin=Fo,I.weekdaysShort=Eo,I.weekdaysParse=Yo,I.weekdaysRegex=Uo,I.weekdaysShortRegex=Wo,I.weekdaysMinRegex=jo,I.isPM=$o,I.meridiem=Qo;function vi(e,t,i,a){var s=Be(),c=de().set(a,t);return s[i](c,e)}function ja(e,t,i){if(Se(e)&&(t=e,e=void 0),e=e||"",t!=null)return vi(e,t,i,"month");var a,s=[];for(a=0;a<12;a++)s[a]=vi(e,a,i,"month");return s}function On(e,t,i,a){typeof e=="boolean"?(Se(t)&&(i=t,t=void 0),t=t||""):(t=e,i=t,e=!1,Se(t)&&(i=t,t=void 0),t=t||"");var s=Be(),c=e?s._week.dow:0,u,w=[];if(i!=null)return vi(t,(i+c)%7,a,"day");for(u=0;u<7;u++)w[u]=vi(t,(u+c)%7,a,"day");return w}function td(e,t){return ja(e,t,"months")}function id(e,t){return ja(e,t,"monthsShort")}function nd(e,t,i){return On(e,t,i,"weekdays")}function ad(e,t,i){return On(e,t,i,"weekdaysShort")}function sd(e,t,i){return On(e,t,i,"weekdaysMin")}He("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,i=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+i}}),d.lang=ee("moment.lang is deprecated. Use moment.locale instead.",He),d.langData=ee("moment.langData is deprecated. Use moment.localeData instead.",Be);var Ae=Math.abs;function rd(){var e=this._data;return this._milliseconds=Ae(this._milliseconds),this._days=Ae(this._days),this._months=Ae(this._months),e.milliseconds=Ae(e.milliseconds),e.seconds=Ae(e.seconds),e.minutes=Ae(e.minutes),e.hours=Ae(e.hours),e.months=Ae(e.months),e.years=Ae(e.years),this}function Ga(e,t,i,a){var s=re(t,i);return e._milliseconds+=a*s._milliseconds,e._days+=a*s._days,e._months+=a*s._months,e._bubble()}function od(e,t){return Ga(this,e,t,1)}function ld(e,t){return Ga(this,e,t,-1)}function $a(e){return e<0?Math.floor(e):Math.ceil(e)}function cd(){var e=this._milliseconds,t=this._days,i=this._months,a=this._data,s,c,u,w,k;return e>=0&&t>=0&&i>=0||e<=0&&t<=0&&i<=0||(e+=$a(Bn(i)+t)*864e5,t=0,i=0),a.milliseconds=e%1e3,s=ie(e/1e3),a.seconds=s%60,c=ie(s/60),a.minutes=c%60,u=ie(c/60),a.hours=u%24,t+=ie(u/24),k=ie(qa(t)),i+=k,t-=$a(Bn(k)),w=ie(i/12),i%=12,a.days=t,a.months=i,a.years=w,this}function qa(e){return e*4800/146097}function Bn(e){return e*146097/4800}function dd(e){if(!this.isValid())return NaN;var t,i,a=this._milliseconds;if(e=te(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,i=this._months+qa(t),e){case"month":return i;case"quarter":return i/3;case"year":return i/12}else switch(t=this._days+Math.round(Bn(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function Ie(e){return function(){return this.as(e)}}var Za=Ie("ms"),hd=Ie("s"),ud=Ie("m"),gd=Ie("h"),md=Ie("d"),pd=Ie("w"),fd=Ie("M"),vd=Ie("Q"),wd=Ie("y"),yd=Za;function xd(){return re(this)}function _d(e){return e=te(e),this.isValid()?this[e+"s"]():NaN}function tt(e){return function(){return this.isValid()?this._data[e]:NaN}}var bd=tt("milliseconds"),kd=tt("seconds"),Md=tt("minutes"),Sd=tt("hours"),Cd=tt("days"),Td=tt("months"),Dd=tt("years");function Od(){return ie(this.days()/7)}var Re=Math.round,vt={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Bd(e,t,i,a,s){return s.relativeTime(t||1,!!i,e,a)}function Ad(e,t,i,a){var s=re(e).abs(),c=Re(s.as("s")),u=Re(s.as("m")),w=Re(s.as("h")),k=Re(s.as("d")),O=Re(s.as("M")),q=Re(s.as("w")),Le=Re(s.as("y")),ze=c<=i.ss&&["s",c]||c<i.s&&["ss",c]||u<=1&&["m"]||u<i.m&&["mm",u]||w<=1&&["h"]||w<i.h&&["hh",w]||k<=1&&["d"]||k<i.d&&["dd",k];return i.w!=null&&(ze=ze||q<=1&&["w"]||q<i.w&&["ww",q]),ze=ze||O<=1&&["M"]||O<i.M&&["MM",O]||Le<=1&&["y"]||["yy",Le],ze[2]=t,ze[3]=+e>0,ze[4]=a,Bd.apply(null,ze)}function Id(e){return e===void 0?Re:typeof e=="function"?(Re=e,!0):!1}function Rd(e,t){return vt[e]===void 0?!1:t===void 0?vt[e]:(vt[e]=t,e==="s"&&(vt.ss=t-1),!0)}function Ld(e,t){if(!this.isValid())return this.localeData().invalidDate();var i=!1,a=vt,s,c;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(i=e),typeof t=="object"&&(a=Object.assign({},vt,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),s=this.localeData(),c=Ad(this,!i,a,s),i&&(c=s.pastFuture(+this,c)),s.postformat(c)}var An=Math.abs;function wt(e){return(e>0)-(e<0)||+e}function wi(){if(!this.isValid())return this.localeData().invalidDate();var e=An(this._milliseconds)/1e3,t=An(this._days),i=An(this._months),a,s,c,u,w=this.asSeconds(),k,O,q,Le;return w?(a=ie(e/60),s=ie(a/60),e%=60,a%=60,c=ie(i/12),i%=12,u=e?e.toFixed(3).replace(/\.?0+$/,""):"",k=w<0?"-":"",O=wt(this._months)!==wt(w)?"-":"",q=wt(this._days)!==wt(w)?"-":"",Le=wt(this._milliseconds)!==wt(w)?"-":"",k+"P"+(c?O+c+"Y":"")+(i?O+i+"M":"")+(t?q+t+"D":"")+(s||a||e?"T":"")+(s?Le+s+"H":"")+(a?Le+a+"M":"")+(e?Le+u+"S":"")):"P0D"}var B=hi.prototype;B.isValid=Tl,B.abs=rd,B.add=od,B.subtract=ld,B.as=dd,B.asMilliseconds=Za,B.asSeconds=hd,B.asMinutes=ud,B.asHours=gd,B.asDays=md,B.asWeeks=pd,B.asMonths=fd,B.asQuarters=vd,B.asYears=wd,B.valueOf=yd,B._bubble=cd,B.clone=xd,B.get=_d,B.milliseconds=bd,B.seconds=kd,B.minutes=Md,B.hours=Sd,B.days=Cd,B.weeks=Od,B.months=Td,B.years=Dd,B.humanize=Ld,B.toISOString=wi,B.toString=wi,B.toJSON=wi,B.locale=Na,B.localeData=Fa,B.toIsoString=ee("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",wi),B.lang=Ea,b("X",0,0,"unix"),b("x",0,0,"valueOf"),y("x",ai),y("X",eo),R("X",function(e,t,i){i._d=new Date(parseFloat(e)*1e3)}),R("x",function(e,t,i){i._d=new Date(D(e))});return d.version="2.30.1",n(E),d.fn=g,d.min=kl,d.max=Ml,d.now=Sl,d.utc=de,d.unix=Kc,d.months=td,d.isDate=Nt,d.locale=He,d.invalid=Jt,d.duration=re,d.isMoment=ae,d.weekdays=nd,d.parseZone=ed,d.localeData=Be,d.isDuration=ui,d.monthsShort=id,d.weekdaysMin=sd,d.defineLocale=wn,d.updateLocale=el,d.locales=tl,d.weekdaysShort=ad,d.normalizeUnits=te,d.relativeTimeRounding=Id,d.relativeTimeThreshold=Rd,d.calendarFormat=Ql,d.prototype=g,d.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},d})});function Fd(l,d){if(l&1&&(m(0,"div",3),M(1,"div",4),p()),l&2){let n=A(2);v(),ce("width",n.diameter)("height",n.diameter)}}function Pd(l,d){if(l&1&&M(0,"div",5),l&2){let n=A().ngIf,r=A();ce("background",r.color)("height",r.height)("width",n+"%")}}function Yd(l,d){if(l&1&&(Yn(0),it(1,Fd,2,4,"div",1)(2,Pd,1,6,"div",2),Hn()),l&2){let n=A();v(),_("ngIf",n.includeSpinner),v(),_("ngIf",n.includeBar)}}function Hd(l,d){if(l&1&&(m(0,"div",3),M(1,"div",4),p()),l&2){let n=A(2);v(),ce("width",n.diameter)("height",n.diameter)}}function Vd(l,d){if(l&1&&M(0,"div",5),l&2){let n=A().ngIf,r=A();ce("background",r.color)("height",r.height)("width",n+"%")}}function zd(l,d){if(l&1&&(Yn(0),it(1,Hd,2,4,"div",1)(2,Vd,1,6,"div",2),Hn()),l&2){let n=A();v(),_("ngIf",n.includeSpinner),v(),_("ngIf",n.includeBar)}}var Ud="[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}",Gn=class{constructor(d={}){this.config=d,this.state={action:null,value:0,initialValue:0},this.requests=null,this.disabled=!1,this.stream$=new In,this._value$=null,this.timer$=n=>{let r=Rn(n);switch(n.action){case"start":case"increment":case"set":{n.action==="start"&&this.config.latencyThreshold===0&&n.value===0&&(n.value=n.initialValue),this.requests>0&&(r=Ln(this.config.latencyThreshold,250).pipe(Ue(o=>yt(oe({},n),{value:o===0?this.state.value||n.initialValue:this._increment()}))));break}case"complete":case"stop":{r=n.value===0?Rn(oe({},n)):Ln(0,500).pipe(yi(2),Ue(o=>({value:o===0?100:0})));break}}return r.pipe(Ue(o=>yt(oe({},o),{action:"set"})),as(o=>this.next(o,!1)))},this.config=oe({latencyThreshold:0},d)}get value$(){return this._value$?this._value$:this._value$=this.stream$.pipe(En(this.state),_t(d=>this.timer$(d)),ns(),Ue(d=>d.value))}start(d=2){this.disabled||this.next({action:"start",initialValue:d})}stop(){this.next({action:"stop"})}complete(){this.next({action:"complete"})}disable(){this.disabled=!0}set(d){this.next({action:"set",value:d})}increment(d=0){this.next({action:"increment",value:d})}next(d,n=!0){switch(d.action){case"start":this.requests=(this.requests||0)+1;break;case"complete":if(this.requests=(this.requests||1)-1,this.requests>0)return;break;case"stop":this.requests=0;break;case"increment":d.value=this._increment(d.value);break}this.state=oe(yt(oe({},this.state),{action:null}),d),n&&this.stream$.next(this.state)}_increment(d=0){let n=this.state.value;return n>=99&&(d=0),d===0&&(n>=0&&n<25?d=Math.random()*3+3:n>=25&&n<65?d=Math.random()*3:n>=65&&n<90?d=Math.random()*2:n>=90&&n<99?d=.5:d=0),d+n}},Wd=new K("LOADING_BAR_CONFIG");var jd=(()=>{class l{get progress$(){return this.value$}constructor(n,r={},o){this.platformId=n,this.config=r,this.zone=o,this.refs={},this.streams$=new In,this.value$=this.streams$.pipe(En(null),_t(()=>ts(Object.keys(this.refs).map(h=>this.refs[h].value$))),Gd(this.zone),Ue(h=>Math.max(0,...h)))}start(n=2){this.useRef().start(n)}set(n){this.useRef().set(n)}increment(n){this.useRef().increment(n)}complete(){this.useRef().complete()}stop(){this.useRef().stop()}useRef(n="default"){return this.refs[n]||(this.refs[n]=new Gn(this.config),this.streams$.next(),bs(this.platformId)||this.refs[n].disable()),this.refs[n]}static{this.\u0275fac=function(r){return new(r||l)(We(hs),We(Wd,8),We(bt,8))}}static{this.\u0275prov=W({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();function Gd(l){return l?d=>new Ja(n=>d.subscribe(r=>l.run(()=>n.next(r)),r=>l.run(()=>n.error(r)),()=>l.run(()=>n.complete()))):d=>d}var $d=(()=>{class l{get value$(){return this.ref?this.loader.useRef(this.ref).value$:this.loader.value$}constructor(n){this.loader=n,this.includeSpinner=!0,this.includeBar=!0,this.fixed=!0,this.color="#29d"}static{this.\u0275fac=function(r){return new(r||l)(ms(jd))}}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(le("fixed",o.fixed),ce("color",o.color))},inputs:{includeSpinner:"includeSpinner",includeBar:"includeBar",fixed:"fixed",color:"color",value:"value",ref:"ref",height:"height",diameter:"diameter"},decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(it(0,Yd,3,2,"ng-container",0),Fe(1,"async")),r&2&&_("ngIf",o.value!=null?o.value:Pe(1,1,o.value$))},dependencies:[Di,Ti],styles:["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],changeDetection:0})}}return l})(),or=(()=>{class l extends $d{static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["ngx-loading-bar"]],hostVars:3,hostBindings:function(r,o){r&2&&(le("fixed",o.fixed),ce("color",o.color))},standalone:!1,features:[ne],decls:2,vars:3,consts:[[4,"ngIf"],["class","ngx-spinner",4,"ngIf"],["class","ngx-bar",3,"background","height","width",4,"ngIf"],[1,"ngx-spinner"],[1,"ngx-spinner-icon"],[1,"ngx-bar"]],template:function(r,o){r&1&&(it(0,zd,3,2,"ng-container",0),Fe(1,"async")),r&2&&_("ngIf",o.value!=null?o.value:Pe(1,1,o.value$))},dependencies:[Ti,Di],styles:[Ud],changeDetection:0})}}return l})(),lr=(()=>{class l{static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275mod=ve({type:l})}static{this.\u0275inj=me({imports:[Oi]})}}return l})();var cr=(()=>{class l{constructor(){}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-page-loader"]],decls:1,vars:0,consts:[["color","#3173D6"]],template:function(r,o){r&1&&M(0,"ngx-loading-bar",0)},dependencies:[lr,or],encapsulation:2})}}return l})();var dr=(()=>{class l{constructor(){this._router=f(Qe),this._router.events.subscribe(n=>{n instanceof Ts&&(this.currentUrl=n.url.substring(n.url.lastIndexOf("/")+1)),n instanceof Ai,window.scrollTo(0,0)})}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-root"]],features:[qe([])],decls:2,vars:0,template:function(r,o){r&1&&M(0,"app-page-loader")(1,"router-outlet")},dependencies:[Bs,Tt,cr],encapsulation:2})}}return l})();var Zd=["switch"],Qd=["*"];function Xd(l,d){l&1&&(m(0,"span",11),os(),m(1,"svg",13),M(2,"path",14),p(),m(3,"svg",15),M(4,"path",16),p()())}var Jd=new K("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Qi=class{source;checked;constructor(d,n){this.source=d,this.checked=n}},$n=(()=>{class l{_elementRef=f(pe);_focusMonitor=f(Ei);_changeDetectorRef=f(Zt);defaults=f(Jd);_onChange=n=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(n){return new Qi(this,n)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=Pi();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(n){this._checked=n,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new j;toggleChange=new j;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){f(Fi).load(Yi);let n=f(new Ci("tabindex"),{optional:!0}),r=this.defaults;this.tabIndex=n==null?0:parseInt(n)||0,this.color=r.color||"accent",this.id=this._uniqueId=f(Qt).getId("mat-mdc-slide-toggle-"),this.hideIcon=r.hideIcon??!1,this.disabledInteractive=r.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(n=>{n==="keyboard"||n==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):n||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(n){n.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(n){this.checked=!!n}registerOnChange(n){this._onChange=n}registerOnTouched(n){this._onTouched=n}validate(n){return this.required&&n.value!==!0?{required:!0}:null}registerOnValidatorChange(n){this._validatorOnChange=n}setDisabledState(n){this.disabled=n,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Qi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-slide-toggle"]],viewQuery:function(r,o){if(r&1&&Mi(Zd,5),r&2){let h;Mt(h=St())&&(o._switchElement=h.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(r,o){r&2&&(fs("id",o.id),le("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),we(o.color?"mat-"+o.color:""),rt("mat-mdc-slide-toggle-focused",o._focused)("mat-mdc-slide-toggle-checked",o.checked)("_mat-animation-noopable",o._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",G],color:"color",disabled:[2,"disabled","disabled",G],disableRipple:[2,"disableRipple","disableRipple",G],tabIndex:[2,"tabIndex","tabIndex",n=>n==null?0:ys(n)],checked:[2,"checked","checked",G],hideIcon:[2,"hideIcon","hideIcon",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[qe([{provide:Ni,useExisting:xi(()=>l),multi:!0},{provide:Hs,useExisting:l,multi:!0}]),_i],ngContentSelectors:Qd,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(r,o){if(r&1&&($t(),m(0,"div",1)(1,"button",2,0),S("click",function(){return o._handleClick()}),M(3,"div",3)(4,"span",4),m(5,"span",5)(6,"span",6)(7,"span",7),M(8,"span",8),p(),m(9,"span",9),M(10,"span",10),p(),Z(11,Xd,5,0,"span",11),p()()(),m(12,"label",12),S("click",function(x){return x.stopPropagation()}),qt(13),p()()),r&2){let h=$e(2);_("labelPosition",o.labelPosition),v(),rt("mdc-switch--selected",o.checked)("mdc-switch--unselected",!o.checked)("mdc-switch--checked",o.checked)("mdc-switch--disabled",o.disabled)("mat-mdc-slide-toggle-disabled-interactive",o.disabledInteractive),_("tabIndex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("disabled",o.disabled&&!o.disabledInteractive),le("id",o.buttonId)("name",o.name)("aria-label",o.ariaLabel)("aria-labelledby",o._getAriaLabelledBy())("aria-describedby",o.ariaDescribedby)("aria-required",o.required||null)("aria-checked",o.checked)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(9),_("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)("matRippleCentered",!0),v(),Q(o.hideIcon?-1:11),v(),_("for",o.buttonId),le("id",o._labelId)}},dependencies:[Hi,zs],styles:[`.mdc-switch {
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
`],encapsulation:2,changeDetection:0})}return l})(),hr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=ve({type:l});static \u0275inj=me({imports:[$n,_e]})}return l})();var rh=["button"],oh=["*"];function lh(l,d){if(l&1&&(m(0,"div",2),M(1,"mat-pseudo-checkbox",6),p()),l&2){let n=A();v(),_("disabled",n.disabled)}}var ur=new K("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),gr=new K("MatButtonToggleGroup"),ch={provide:Ni,useExisting:xi(()=>qn),multi:!0},Xi=class{source;value;constructor(d,n){this.source=d,this.value=n}},qn=(()=>{class l{_changeDetector=f(Zt);_dir=f(As,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(n){this._name=n,this._markButtonsForCheck()}_name=f(Qt).getId("mat-button-toggle-group-");vertical=!1;get value(){let n=this._selectionModel?this._selectionModel.selected:[];return this.multiple?n.map(r=>r.value):n[0]?n[0].value:void 0}set value(n){this._setSelectionByValue(n),this.valueChange.emit(this.value)}valueChange=new j;get selected(){let n=this._selectionModel?this._selectionModel.selected:[];return this.multiple?n:n[0]||null}get multiple(){return this._multiple}set multiple(n){this._multiple=n,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new j;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(n){this._hideSingleSelectionIndicator=n,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(n){this._hideMultipleSelectionIndicator=n,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let n=f(ur,{optional:!0});this.appearance=n&&n.appearance?n.appearance:"standard",this._hideSingleSelectionIndicator=n?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=n?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new $s(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(n=>n.checked)),this.multiple||this._initializeTabIndex()}writeValue(n){this.value=n,this._changeDetector.markForCheck()}registerOnChange(n){this._controlValueAccessorChangeFn=n}registerOnTouched(n){this._onTouched=n}setDisabledState(n){this.disabled=n}_keydown(n){if(this.multiple||this.disabled||Vs(n))return;let o=n.target.id,h=this._buttonToggles.toArray().findIndex(P=>P.buttonId===o),x=null;switch(n.keyCode){case 32:case 13:x=this._buttonToggles.get(h)||null;break;case 38:x=this._getNextButton(h,-1);break;case 37:x=this._getNextButton(h,this.dir==="ltr"?-1:1);break;case 40:x=this._getNextButton(h,1);break;case 39:x=this._getNextButton(h,this.dir==="ltr"?1:-1);break;default:return}x&&(n.preventDefault(),x._onButtonClick(),x.focus())}_emitChangeEvent(n){let r=new Xi(n,this.value);this._rawValue=r.value,this._controlValueAccessorChangeFn(r.value),this.change.emit(r)}_syncButtonToggle(n,r,o=!1,h=!1){!this.multiple&&this.selected&&!n.checked&&(this.selected.checked=!1),this._selectionModel?r?this._selectionModel.select(n):this._selectionModel.deselect(n):h=!0,h?Promise.resolve().then(()=>this._updateModelValue(n,o)):this._updateModelValue(n,o)}_isSelected(n){return this._selectionModel&&this._selectionModel.isSelected(n)}_isPrechecked(n){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(r=>n.value!=null&&r===n.value):n.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(n=>{n.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let n=0;n<this._buttonToggles.length;n++){let r=this._buttonToggles.get(n);if(!r.disabled){r.tabIndex=0;break}}}_getNextButton(n,r){let o=this._buttonToggles;for(let h=1;h<=o.length;h++){let x=(n+r*h+o.length)%o.length,P=o.get(x);if(P&&!P.disabled)return P}return null}_setSelectionByValue(n){if(this._rawValue=n,!this._buttonToggles)return;let r=this._buttonToggles.toArray();if(this.multiple&&n?(Array.isArray(n),this._clearSelection(),n.forEach(o=>this._selectValue(o,r))):(this._clearSelection(),this._selectValue(n,r)),!this.multiple&&r.every(o=>o.tabIndex===-1)){for(let o of r)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(n=>{n.checked=!1,this.multiple||(n.tabIndex=-1)})}_selectValue(n,r){for(let o of r)if(o.value===n){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(n,r){r&&this._emitChangeEvent(n),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(n=>n._markForCheck())}static \u0275fac=function(r){return new(r||l)};static \u0275dir=Pn({type:l,selectors:[["mat-button-toggle-group"]],contentQueries:function(r,o,h){if(r&1&&Vn(h,Ji,5),r&2){let x;Mt(x=St())&&(o._buttonToggles=x)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(r,o){r&1&&S("keydown",function(x){return o._keydown(x)}),r&2&&(le("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),rt("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",G],value:"value",multiple:[2,"multiple","multiple",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",G],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",G]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[qe([ch,{provide:gr,useExisting:l}])]})}return l})(),Ji=(()=>{class l{_changeDetectorRef=f(Zt);_elementRef=f(pe);_focusMonitor=f(Ei);_idGenerator=f(Qt);_animationDisabled=Pi();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(n){this._tabIndex.set(n)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(n){this._appearance=n}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(n){n!==this._checked&&(this._checked=n,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(n){this._disabled=n}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(n){this._disabledInteractive=n}_disabledInteractive;change=new j;constructor(){f(Fi).load(Yi);let n=f(gr,{optional:!0}),r=f(new Ci("tabindex"),{optional:!0})||"",o=f(ur,{optional:!0});this._tabIndex=cs(parseInt(r)||0),this.buttonToggleGroup=n,this._appearance=o&&o.appearance?o.appearance:"standard",this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let n=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),n&&(n._isPrechecked(this)?this.checked=!0:n._isSelected(this)!==this._checked&&n._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let n=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),n&&n._isSelected(this)&&n._syncButtonToggle(this,!1,!1,!0)}focus(n){this._buttonElement.nativeElement.focus(n)}_onButtonClick(){if(this.disabled)return;let n=this.isSingleSelector()?!0:!this._checked;if(n!==this._checked&&(this._checked=n,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let r=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);r&&(r.tabIndex=-1),this.tabIndex=0}this.change.emit(new Xi(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=L({type:l,selectors:[["mat-button-toggle"]],viewQuery:function(r,o){if(r&1&&Mi(rh,5),r&2){let h;Mt(h=St())&&(o._buttonElement=h.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(r,o){r&1&&S("focus",function(){return o.focus()}),r&2&&(le("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),rt("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",G],appearance:"appearance",checked:[2,"checked","checked",G],disabled:[2,"disabled","disabled",G],disabledInteractive:[2,"disabledInteractive","disabledInteractive",G]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:oh,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(r,o){if(r&1&&($t(),m(0,"button",1,0),S("click",function(){return o._onButtonClick()}),Z(2,lh,2,1,"div",2),m(3,"span",3),qt(4),p()(),M(5,"span",4)(6,"span",5)),r&2){let h=$e(1);_("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),le("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),v(2),Q(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),v(4),_("matRippleTrigger",h)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Hi,qs],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2,changeDetection:0})}return l})(),mr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=ve({type:l});static \u0275inj=me({imports:[Zs,Ji,_e]})}return l})();var ot=l=>({active:l}),pr=(()=>{class l extends ke{constructor(){super(...arguments),this.document=f(X),this.renderer=f(fe),this.elementRef=f(pe),this.rightSidebarService=f(Ot),this.configService=f(Xe),this.directionService=f(Je),this.localStorageService=f(be),this.selectedBgColor="white",this.showpanel=!1,this.isDarkSidebar=!1,this.isDarTheme=!1,this.headerHeight=60,this.isRtl=!1}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.rightSidebarService.sidebarState.subscribe(n=>{this.isOpenSidebar=n}),this.setRightSidebarWindowHeight()}ngAfterViewInit(){this.selectedBgColor=this.localStorageService.get("choose_skin_active"),this.localStorageService.get("menuOption")&&(this.localStorageService.get("menuOption")==="menu_dark"?this.isDarkSidebar=!0:this.localStorageService.get("menuOption")==="menu_light"&&(this.isDarkSidebar=!1)),this.localStorageService.get("theme")&&(this.localStorageService.get("theme")==="dark"?this.isDarTheme=!0:this.localStorageService.get("theme")==="light"&&(this.isDarTheme=!1)),this.localStorageService.get("isRtl")&&(this.isRtl=this.localStorageService.get("isRtl")==="true")}selectTheme(n){this.selectedBgColor=n;let r=this.elementRef.nativeElement.querySelector(".settingSidebar .choose-theme li.active").getAttribute("data-theme");this.renderer.removeClass(this.document.body,"theme-"+r),this.renderer.addClass(this.document.body,"theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin","theme-"+this.selectedBgColor),this.localStorageService.set("choose_skin_active",this.selectedBgColor)}lightSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white");let n="menu_light";this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("menuOption",n)}darkSidebarBtnClick(){this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black");let n="menu_dark";this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("menuOption",n)}lightThemeBtnClick(){this.renderer.removeClass(this.document.body,"dark"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_dark"),this.renderer.removeClass(this.document.body,"logo-black"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"light"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_light"),this.renderer.addClass(this.document.body,"logo-white"),this.renderer.addClass(this.document.body,"theme-white");let n="light",r="menu_light";this.selectedBgColor="white",this.isDarkSidebar=!1,this.localStorageService.set("choose_logoheader","logo-white"),this.localStorageService.set("choose_skin","theme-white"),this.localStorageService.set("theme",n),this.localStorageService.set("menuOption",r)}darkThemeBtnClick(){this.renderer.removeClass(this.document.body,"light"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.renderer.removeClass(this.document.body,"menu_light"),this.renderer.removeClass(this.document.body,"logo-white"),this.localStorageService.get("choose_skin")?this.renderer.removeClass(this.document.body,this.localStorageService.get("choose_skin")):this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,"dark"),this.renderer.addClass(this.document.body,"submenu-closed"),this.renderer.addClass(this.document.body,"menu_dark"),this.renderer.addClass(this.document.body,"logo-black"),this.renderer.addClass(this.document.body,"theme-black");let n="dark",r="menu_dark";this.selectedBgColor="black",this.isDarkSidebar=!0,this.localStorageService.set("choose_logoheader","logo-black"),this.localStorageService.set("choose_skin","theme-black"),this.localStorageService.set("theme",n),this.localStorageService.set("menuOption",r)}setRightSidebarWindowHeight(){this.innerHeight=window.innerHeight;let n=this.innerHeight-this.headerHeight;this.maxHeight=n+"",this.maxWidth="500px"}onClickedOutside(n){n.target.id!=="settingBtn"&&this.isOpenSidebar===!0&&this.toggleRightSidebar()}toggleRightSidebar(){this.rightSidebarService.setRightSidebar(this.isOpenSidebar=!this.isOpenSidebar)}switchDirection(n){let r=String(n.checked);r==="false"&&document.getElementsByTagName("html")[0].hasAttribute("dir")?(document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.directionService.updateDirection("ltr")):r==="true"&&!document.getElementsByTagName("html")[0].hasAttribute("dir")&&(document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.directionService.updateDirection("rtl")),this.localStorageService.set("isRtl",r),this.isRtl=n.checked}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.isRtl=!0,this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.isRtl=!1,this.localStorageService.set("isRtl","false")}static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-right-sidebar"]],features:[ne],decls:60,vars:31,consts:[[1,"settingSidebar",3,"ngClass"],["href","javascript:void(0)",1,"settingPanelToggle",3,"click"],[3,"icon"],["visibility","hover"],[1,"settingSidebar-body","ps-container","ps-theme-default"],[1,"fade","show","active"],[1,"setting-panel-header"],[1,"p-15","border-bottom","rightSetting"],[1,"font-medium","m-b-10"],[1,"flex","flex-wrap","hiddenradio"],[1,"flex","flex-col"],["type","radio","name","value","value","light",3,"click","checked"],["src","assets/images/light.png"],[1,"mt-1","text-md","text-center"],[1,"flex","flex-col","mt-3"],["type","radio","name","value","value","dark",3,"click","checked"],["src","assets/images/dark.png"],[1,"rightSetting"],[1,"mt-2",3,"value"],["value","light",3,"click"],["value","dark",3,"click"],[1,"theme-setting-options"],[1,"choose-theme","list-unstyled","mb-0"],["data-theme","white",3,"click","ngClass"],[1,"white"],["data-theme","black",3,"click","ngClass"],[1,"black"],["data-theme","purple",3,"click","ngClass"],[1,"purple"],["data-theme","orange",3,"click","ngClass"],[1,"orange"],["data-theme","cyan",3,"click","ngClass"],[1,"cyan"],["data-theme","green",3,"click","ngClass"],[1,"green"],["data-theme","blue",3,"click","ngClass"],[1,"blue"],[1,"mt-2",3,"change","checked"],[1,"rtl-direction-label"]],template:function(r,o){r&1&&(m(0,"div",0)(1,"a",1),S("click",function(){return o.toggleRightSidebar()}),M(2,"app-feather-icons",2),p(),m(3,"ng-scrollbar",3)(4,"div",4)(5,"div",5)(6,"div",6),C(7,"Setting Panel "),p(),m(8,"div",7)(9,"p",8),C(10,"Select Layout"),p(),m(11,"div",9)(12,"div",10)(13,"label")(14,"input",11),S("click",function(){return o.lightThemeBtnClick()}),p(),M(15,"img",12),p(),m(16,"div",13),C(17," Light "),p()(),m(18,"div",14)(19,"label")(20,"input",15),S("click",function(){return o.darkThemeBtnClick()}),p(),M(21,"img",16),p(),m(22,"div",13),C(23," Dark "),p()()()(),m(24,"div",17)(25,"p",8),C(26,"Sidebar Menu Color"),p(),m(27,"mat-button-toggle-group",18)(28,"mat-button-toggle",19),S("click",function(){return o.lightSidebarBtnClick()}),C(29,"Light"),p(),m(30,"mat-button-toggle",20),S("click",function(){return o.darkSidebarBtnClick()}),C(31,"Dark"),p()()(),m(32,"div",7)(33,"p",8),C(34,"Color Theme"),p(),m(35,"div",21)(36,"ul",22)(37,"li",23),S("click",function(){return o.selectTheme("white")}),M(38,"div",24),p(),m(39,"li",25),S("click",function(){return o.selectTheme("black")}),M(40,"div",26),p(),m(41,"li",27),S("click",function(){return o.selectTheme("purple")}),M(42,"div",28),p(),m(43,"li",29),S("click",function(){return o.selectTheme("orange")}),M(44,"div",30),p(),m(45,"li",31),S("click",function(){return o.selectTheme("cyan")}),M(46,"div",32),p(),m(47,"li",33),S("click",function(){return o.selectTheme("green")}),M(48,"div",34),p(),m(49,"li",35),S("click",function(){return o.selectTheme("blue")}),M(50,"div",36),p()()()(),m(51,"div",17)(52,"p",8),C(53,"RTL Layout"),p(),m(54,"mat-slide-toggle",37),S("change",function(x){return o.switchDirection(x)}),p(),m(55,"div",38)(56,"span"),C(57,"LTR"),p(),m(58,"span"),C(59,"RTL"),p()()()()()()()),r&2&&(_("ngClass",o.isOpenSidebar?"showSettingPanel":""),v(2),we("setting-sidebar-icon"),_("icon","settings"),v(),ce("height",o.maxHeight+"px"),v(11),_("checked",o.isDarTheme===!1),v(6),_("checked",o.isDarTheme===!0),v(7),_("value",o.isDarkSidebar?"dark":"light"),v(10),_("ngClass",H(17,ot,o.selectedBgColor==="white")),v(2),_("ngClass",H(19,ot,o.selectedBgColor==="black")),v(2),_("ngClass",H(21,ot,o.selectedBgColor==="purple")),v(2),_("ngClass",H(23,ot,o.selectedBgColor==="orange")),v(2),_("ngClass",H(25,ot,o.selectedBgColor==="cyan")),v(2),_("ngClass",H(27,ot,o.selectedBgColor==="green")),v(2),_("ngClass",H(29,ot,o.selectedBgColor==="blue")),v(5),_("checked",o.isRtl))},dependencies:[Ze,At,Bt,mr,qn,Ji,hr,$n],encapsulation:2,changeDetection:0})}}return l})();var fr=(()=>{class l{constructor(){this.http=f(Ct)}getRouteInfo(){return this.http.get("assets/data/routes.json").pipe(Ue(n=>n.routes))}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=W({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Me=l=>[l];function hh(l,d){if(l&1&&(m(0,"div",16),C(1),Fe(2,"translate"),p()),l&2){let n=A(2).$implicit;v(),ye(Pe(2,1,n.title))}}function uh(l,d){if(l&1&&(m(0,"span",20),C(1),p()),l&2){let n=A(3).$implicit;_("ngClass",H(2,Me,n.badgeClass)),v(),ye(n.badge)}}function gh(l,d){if(l&1){let n=Ge();m(0,"a",19),S("click",function(o){Ne(n);let h=A(2).$implicit,x=A();return Ee(x.callToggleMenu(o,h.submenu.length))}),m(1,"i",20),C(2),p(),m(3,"span",14),C(4),Fe(5,"translate"),p(),Z(6,uh,2,4,"span",20),p()}if(l&2){let n=A(2).$implicit;_("routerLink",n.class===""?H(8,Me,n.path):null)("ngClass",H(10,Me,n.class)),v(),_("ngClass",H(12,Me,n.iconType)),v(),ye(n.icon),v(2),xe("",Pe(5,6,n.title)," "),v(2),Q(n.badge!==""?6:-1)}}function mh(l,d){if(l&1){let n=Ge();m(0,"li",15)(1,"a",21),S("click",function(o){let h=Ne(n).$implicit,x=A(8);return Ee(x.callToggleMenu(o,h.submenu.length))}),C(2),Fe(3,"translate"),p()()}if(l&2){let n=d.$implicit;_("routerLinkActive",n.submenu.length>0?"":"active"),v(),_("routerLink",n.submenu.length>0?null:H(6,Me,n.path))("ngClass",H(8,Me,n.class)),v(),xe(" ",Pe(3,4,n.title)," ")}}function ph(l,d){if(l&1&&(m(0,"ul",23),at(1,mh,4,10,"li",15,nt),p()),l&2){let n=A().$implicit;v(),st(n.submenu)}}function fh(l,d){if(l&1){let n=Ge();m(0,"li",15)(1,"a",21),S("click",function(o){let h=Ne(n).$implicit,x=A(6);return Ee(x.callToggleMenu(o,h.submenu.length))}),C(2),Fe(3,"translate"),p(),Z(4,ph,3,0,"ul",23),p()}if(l&2){let n=d.$implicit;_("routerLinkActive",n.submenu.length>0?"":"active"),v(),_("routerLink",n.submenu.length>0?null:H(7,Me,n.path))("ngClass",H(9,Me,n.class)),v(),xe(" ",Pe(3,5,n.title)," "),v(2),Q(n.submenu.length>0?4:-1)}}function vh(l,d){if(l&1&&(m(0,"ul",22),at(1,fh,5,11,"li",15,nt),p()),l&2){let n=A().$implicit;v(),st(n.submenu)}}function wh(l,d){if(l&1){let n=Ge();m(0,"li",15)(1,"a",21),S("click",function(o){let h=Ne(n).$implicit,x=A(4);return Ee(x.callToggleMenu(o,h.submenu.length))}),C(2),Fe(3,"translate"),p(),Z(4,vh,3,0,"ul",22),p()}if(l&2){let n=d.$implicit;_("routerLinkActive",n.submenu.length>0?"":"active"),v(),_("routerLink",n.submenu.length>0?null:H(7,Me,n.path))("ngClass",H(9,Me,n.class)),v(),xe(" ",Pe(3,5,n.title)," "),v(2),Q(n.submenu.length>0?4:-1)}}function yh(l,d){if(l&1&&(m(0,"ul",18),at(1,wh,5,11,"li",15,nt),p()),l&2){let n=A(2).$implicit;v(),st(n.submenu)}}function xh(l,d){if(l&1&&(m(0,"li",15),Z(1,hh,3,3,"div",16),Z(2,gh,7,14,"a",17),Z(3,yh,3,0,"ul",18),p()),l&2){let n=A().$implicit;_("routerLinkActive",n.submenu.length!==0?"active":"active-top"),v(),Q(n.groupTitle===!0?1:-1),v(),Q(n.groupTitle?-1:2),v(),Q(n.submenu.length>0?3:-1)}}function _h(l,d){if(l&1&&it(0,xh,4,4,"ng-template",11),l&2){let n=d.$implicit;_("ngxPermissionsOnly",n.role)}}var vr=(()=>{class l extends ke{constructor(){super(),this.document=f(X),this.renderer=f(fe),this.elementRef=f(pe),this.authService=f(Dt),this.router=f(Qe),this.sidebarService=f(fr),this.headerHeight=60,this.elementRef.nativeElement.closest("body"),this.subs.sink=this.router.events.subscribe(n=>{n instanceof Ai&&this.renderer.removeClass(this.document.body,"overlay-open")})}windowResizecall(n){this.setMenuHeight(),this.checkStatuForResize(!1)}onGlobalClick(n){this.elementRef.nativeElement.contains(n.target)||this.renderer.removeClass(this.document.body,"overlay-open")}callToggleMenu(n,r){if(r>0){let o=n.target.closest("li");o?.classList.contains("active")?this.renderer.removeClass(o,"active"):this.renderer.addClass(o,"active")}}ngOnInit(){this.subs.sink=this.authService.user$.subscribe(n=>{if(n&&Object.keys(n).length>0){let r=n.roles?.[0]?.name;this.userFullName=n.name||n.firstName+" "+n.lastName,this.userImg=n.avatar?.startsWith("http")?n.avatar:"./assets/images/user/"+(n.avatar||"user.jpg"),r===U.Admin?this.userType=this.capitalizeString(U.Admin):r===U.Teacher?this.userType=this.capitalizeString(U.Teacher):r===U.Student?this.userType=this.capitalizeString(U.Student):this.userType=this.capitalizeString(U.Admin)}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.subs.sink=this.sidebarService.getRouteInfo().subscribe(n=>{this.sidebarItems=n}),this.initLeftSidebar(),this.bodyTag=this.document.body}initLeftSidebar(){this.setMenuHeight(),this.checkStatuForResize(!0)}setMenuHeight(){this.innerHeight=window.innerHeight;let n=this.innerHeight-this.headerHeight;this.listMaxHeight=n+"",this.listMaxWidth="500px"}isOpen(){return this.bodyTag.classList.contains("overlay-open")}checkStatuForResize(n){window.innerWidth<1025?this.renderer.addClass(this.document.body,"ls-closed"):this.renderer.removeClass(this.document.body,"ls-closed")}mouseHover(){this.elementRef.nativeElement.closest("body").classList.contains("submenu-closed")&&(this.renderer.addClass(this.document.body,"side-closed-hover"),this.renderer.removeClass(this.document.body,"submenu-closed"))}mouseOut(){this.elementRef.nativeElement.closest("body").classList.contains("side-closed-hover")&&(this.renderer.removeClass(this.document.body,"side-closed-hover"),this.renderer.addClass(this.document.body,"submenu-closed"))}logout(){this.subs.sink=this.authService.logout().subscribe(n=>{n.success||this.router.navigate(["/authentication/signin"])})}capitalizeString(n){return n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-sidebar"]],hostBindings:function(r,o){r&1&&S("resize",function(x){return o.windowResizecall(x)},us)("mousedown",function(x){return o.onGlobalClick(x)},gs)},features:[ne],decls:22,vars:6,consts:[["id","leftsidebar",1,"sidebar",3,"mouseenter","mouseleave"],[1,"menu"],["visibility","hover"],[1,"list"],[1,"sidebar-user-panel"],[1,"user-panel"],[1,"image"],["alt","User Image",1,"img-circle","user-img-circle",3,"src"],[1,"profile-usertitle"],[1,"sidebar-userpic-name"],[1,"profile-usertitle-job"],[3,"ngxPermissionsOnly"],[1,"menu-top",3,"click"],[1,"material-icons-outlined"],[1,"hide-menu"],[3,"routerLinkActive"],[1,"header"],[1,"menu-top",3,"routerLink","ngClass"],[1,"ml-menu"],[1,"menu-top",3,"click","routerLink","ngClass"],[3,"ngClass"],[3,"click","routerLink","ngClass"],[1,"ml-menu-2"],[1,"ml-menu-3"]],template:function(r,o){r&1&&(m(0,"div")(1,"aside",0),S("mouseenter",function(){return o.mouseHover()})("mouseleave",function(){return o.mouseOut()}),m(2,"div",1)(3,"ng-scrollbar",2)(4,"ul",3)(5,"li",4)(6,"div",5)(7,"div",6),M(8,"img",7),p()(),m(9,"div",8)(10,"div",9),C(11),p(),m(12,"div",10),C(13),p()()(),at(14,_h,1,1,null,11,nt),m(16,"li")(17,"a",12),S("click",function(){return o.logout()}),m(18,"i",13),C(19,"power_settings_new"),p(),m(20,"span",14),C(21,"Logout "),p()()()()()()()()),r&2&&(v(3),ce("height",o.listMaxHeight+"px"),v(5),_("src",Si(o.userImg),je),v(3),xe("",o.userFullName," "),v(2),xe("",o.userType," "),v(),st(o.sidebarItems))},dependencies:[Bt,Ds,Ii,Ze,Es,Li,Ps,Ls],encapsulation:2})}}return l})();var wr=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=ve({type:l});static \u0275inj=me({imports:[_e]})}return l})();var kh=(l,d)=>[l,d],Mh=l=>[l];function Sh(l,d){if(l&1&&(m(0,"span",3),C(1),p()),l&2){let n=A();v(),ye(n.unreadCount)}}function Ch(l,d){if(l&1&&M(0,"img",19),l&2){let n=A().$implicit;_("src",n.userImg,je)}}function Th(l,d){if(l&1&&(m(0,"i",20),C(1),p()),l&2){let n=A().$implicit;_("ngClass",H(2,Mh,n.color)),v(),ye(n.icon)}}function Dh(l,d){if(l&1){let n=Ge();m(0,"button",27),S("click",function(o){Ne(n);let h=A().$implicit,x=A();return o.stopPropagation(),Ee(x.onActionClick(h))}),C(1),p()}if(l&2){let n=A().$implicit;v(),xe(" ",n.actionLabel," ")}}function Oh(l,d){if(l&1){let n=Ge();m(0,"button",15),S("click",function(){let o=Ne(n).$implicit,h=A();return Ee(h.markAsRead(o))}),m(1,"span",16)(2,"div",17)(3,"span",18),Z(4,Ch,1,1,"img",19)(5,Th,2,4,"i",20),p(),m(6,"div")(7,"span",21),C(8),p(),m(9,"span",22)(10,"i",23),C(11,"access_time"),p(),C(12),p(),Z(13,Dh,2,1,"button",24),p()()(),m(14,"span",25),S("click",function(o){let h=Ne(n).$implicit,x=A();return o.stopPropagation(),Ee(x.removeNotification(h))}),M(15,"app-feather-icons",26),p()()}if(l&2){let n=d.$implicit,r=A();_("ngClass",vs(9,kh,n.status,r.isRemoving(n)?"notification-removing":""))("@notificationAnimation",r.isRemoving(n)?"void":""),v(4),Q(n.userImg?4:5),v(4),ye(n.message),v(4),xe(" ",n.time," "),v(),Q(n.actionLabel?13:-1),v(2),we("user-menu-icons"),_("icon","x")}}var xr=(()=>{class l{constructor(){this.notifications=[],this.markAllAsRead=new j,this.readAll=new j,this.closeNotification=new j,this.actionClick=new j,this.markAsReadEvent=new j,this.removingNotification=null,this.unreadCount=0}ngOnInit(){this.updateUnreadCount()}ngOnChanges(n){n.notifications&&this.updateUnreadCount()}updateUnreadCount(){this.unreadCount=this.notifications.filter(n=>n.status==="msg-unread").length}markAll(){this.markAllAsRead.emit(),this.notifications.forEach(n=>{n.status="msg-read"}),this.updateUnreadCount()}readAllNotifications(){this.readAll.emit(),this.updateUnreadCount()}removeNotification(n){this.removingNotification=n,n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount()),setTimeout(()=>{this.closeNotification.emit(n),this.removingNotification=null},500)}isRemoving(n){return this.removingNotification===n}markAsRead(n){n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount(),this.markAsReadEvent.emit(n))}onActionClick(n){this.actionClick.emit({notification:n,actionType:n.actionType||"default"}),n.status==="msg-unread"&&(n.status="msg-read",this.updateUnreadCount())}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-notification-list"]],inputs:{notifications:"notifications"},outputs:{markAllAsRead:"markAllAsRead",readAll:"readAll",closeNotification:"closeNotification",actionClick:"actionClick",markAsReadEvent:"markAsReadEvent"},features:[_i],decls:21,vars:2,consts:[["notificationMenu","matMenu"],["mat-icon-button","",1,"nav-notification-icons",3,"matMenuTriggerFor"],[1,"material-icons-outlined","icon-color"],[1,"notification-badge"],[1,"notification-menu"],[1,"notification-header"],[1,"mb-0"],[1,"notification-mark-as-read",3,"click"],[1,"notification-dropdown"],["visibility","hover",2,"height","350px"],[1,"noti-list"],[1,"menu"],["mat-menu-item","","onClick","return false;",3,"ngClass"],[1,"notification-footer"],[1,"notification-read-all",3,"click"],["mat-menu-item","","onClick","return false;",3,"click","ngClass"],[1,"menu-info"],[1,"notification-content-row"],[1,"table-img","msg-user"],["alt","User",1,"user-avatar",3,"src"],[1,"material-icons-outlined","notification-type-icon",3,"ngClass"],[1,"menu-title"],[1,"menu-desc"],[1,"material-icons"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2"],[1,"notification-close",3,"click"],[3,"icon"],["mat-stroked-button","","color","primary",1,"notification-action-btn","mt-2",3,"click"]],template:function(r,o){if(r&1&&(m(0,"button",1)(1,"i",2),C(2,"notifications_active"),p(),Z(3,Sh,2,1,"span",3),p(),m(4,"mat-menu",4,0)(6,"div",5)(7,"h6",6),C(8,"Notifications"),p(),m(9,"a",7),S("click",function(){return o.markAll()}),C(10,"Mark all as read"),p()(),m(11,"div",8)(12,"ng-scrollbar",9)(13,"div",10)(14,"div",11)(15,"div"),at(16,Oh,16,12,"button",12,nt),p()()()()(),m(18,"div",13)(19,"a",14),S("click",function(){return o.readAllNotifications()}),C(20,"Read All Notifications"),p()()()),r&2){let h=$e(5);_("matMenuTriggerFor",h),v(3),Q(o.unreadCount>0?3:-1),v(13),st(o.notifications)}},dependencies:[Rt,Wi,Ui,ji,Bt,At,Oi,Ze,It,zi,Vi],styles:[".notification-content-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]{flex-direction:row-reverse;width:100%;justify-content:flex-start}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:none;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.notification-content-row[_ngcontent-%COMP%]   .table-img.msg-user[_ngcontent-%COMP%]   .notification-type-icon[_ngcontent-%COMP%]{font-size:26px;height:40px;width:40px}.notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.rtl[_ngcontent-%COMP%]   .notification-content-row[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]{display:block;width:100%;text-align:right}.menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.rtl[_ngcontent-%COMP%]   .menu-info[_ngcontent-%COMP%]{text-align:right}.notification-action-btn[_ngcontent-%COMP%]{min-width:120px;width:auto;align-self:flex-start}.rtl[_ngcontent-%COMP%]   .notification-action-btn[_ngcontent-%COMP%]{align-self:flex-end;margin-right:auto;margin-left:0}"],data:{animation:[Us("notificationAnimation",[Gs(":leave",[Ws("0.5s ease-out",js({opacity:0,transform:"translateX(30px)"}))])])]}})}}return l})();var _r=(()=>{class l{constructor(){this.userName="",this.userImg="",this.accountClicked=new j,this.inboxClicked=new j,this.settingsClicked=new j,this.logoutClicked=new j}onAccountClick(){this.accountClicked.emit()}onInboxClick(){this.inboxClicked.emit()}onSettingsClick(){this.settingsClicked.emit()}onLogoutClick(){this.logoutClicked.emit()}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-user-profile-menu"]],inputs:{userName:"userName",userImg:"userImg"},outputs:{accountClicked:"accountClicked",inboxClicked:"inboxClicked",settingsClicked:"settingsClicked",logoutClicked:"logoutClicked"},decls:16,vars:9,consts:[["profilemenu","matMenu"],["mat-button","",3,"matMenuTriggerFor"],[1,"user-profile-img"],["width","32","height","32","alt","User",1,"user_img",3,"src"],[1,"profile-menu"],[1,"noti-list"],[1,"menu"],[1,"user_dw_menu"],["mat-menu-item","",1,"user-item-list",3,"click"],[3,"icon"]],template:function(r,o){if(r&1&&(m(0,"button",1)(1,"div",2)(2,"span"),C(3),p(),M(4,"img",3),p()(),m(5,"mat-menu",4,0)(7,"div",5)(8,"div",6)(9,"div",7)(10,"button",8),S("click",function(){return o.onAccountClick()}),M(11,"app-feather-icons",9),C(12," Cuenta "),p(),m(13,"button",8),S("click",function(){return o.onLogoutClick()}),M(14,"app-feather-icons",9),C(15," Salir "),p()()()()()),r&2){let h=$e(6);_("matMenuTriggerFor",h),v(3),ye(o.userName),v(),_("src",o.userImg,je),v(7),we("user-menu-icons"),_("icon","user"),v(3),we("user-menu-icons"),_("icon","log-out")}},dependencies:[Rt,Wi,Ui,ji,At,It,zi],encapsulation:2})}}return l})();var br=(()=>{class l extends ke{constructor(){super(...arguments),this.document=f(X),this.renderer=f(fe),this.elementRef=f(pe),this.rightSidebarService=f(Ot),this.configService=f(Xe),this.authService=f(Dt),this.router=f(Qe),this.localStorageService=f(be),this.notificationsService=f(Js),this.institutionLogo="assets/images/logo.png",this.isNavbarCollapsed=!0,this.isFullScreen=!1,this.notifications=[]}ngOnInit(){this.config=this.configService.configData,this.subs.sink=this.authService.user$.subscribe(n=>{if(n&&Object.keys(n).length>0){this.userImg=n.avatar?.startsWith("http")?n.avatar:"./assets/images/user/"+(n.avatar||"user.jpg");let r=n;this.userName=r.name||(r.firstName?r.firstName+" "+r.lastName:"User"),r.institutionLogo?this.institutionLogo=r.institutionLogo.startsWith("http")?r.institutionLogo:`/uploads/${r.institutionLogo}`:this.institutionLogo="assets/images/logo.png";let o=n.roles?.[0]?.name;o===U.Admin?this.homePage="admin/dashboard/main":o===U.Teacher?this.homePage="teacher/dashboard":o===U.Student?this.homePage="student/dashboard":this.homePage="admin/dashboard/main"}}),Object.keys(this.authService.currentUserValue).length>0&&this.authService.user$.next(this.authService.currentUserValue),this.docElement=document.documentElement,this.loadNotifications()}loadNotifications(){this.notificationsService.getNotifications().subscribe(n=>{this.notifications=n.map(r=>({id:r._id,message:r.message,time:new Date(r.createdAt).toLocaleDateString(),icon:r.type==="INFO"?"info":r.type==="SUCCESS"?"check_circle":"warning",color:r.type==="INFO"?"notification-blue":r.type==="SUCCESS"?"notification-green":"notification-red",status:r.read?"msg-read":"msg-unread"}))})}onMarkAllNotificationsRead(){this.notificationsService.markAllAsRead().subscribe(()=>{this.loadNotifications()})}onMarkNotificationRead(n){n.id&&this.notificationsService.markAsRead(n.id).subscribe()}onReadAllNotifications(){alert("Navigating to notifications page to read all")}onRemoveNotification(n){this.notifications=this.notifications.filter(r=>r!==n)}onNotificationActionClick(n){let{notification:r,actionType:o}=n;switch(o){case"view":console.log("Viewing notification:",r);break;case"profile":console.log("Opening profile from notification:",r);break;case"reply":console.log("Replying to notification:",r);break;case"download":console.log("Downloading from notification:",r);break;case"mark-important":console.log("Marking notification as important:",r);break;default:console.log("Default action for notification:",r)}}callFullscreen(){this.isFullScreen?document.exitFullscreen():this.docElement?.requestFullscreen!=null&&this.docElement?.requestFullscreen(),this.isFullScreen=!this.isFullScreen}mobileMenuSidebarOpen(n,r){n.target.classList.contains(r)?this.renderer.removeClass(this.document.body,r):this.renderer.addClass(this.document.body,r)}callSidemenuCollapse(){this.document.body.classList.contains("side-closed")?(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","true"))}logout(){this.subs.sink=this.authService.logout().subscribe(n=>{n.success||this.router.navigate(["/authentication/signin"])})}onAccountClicked(){let n=this.authService.currentUserValue.roles?.[0]?.name;n===U.Teacher?this.router.navigate(["/teacher/profile"]):n===U.Student?this.router.navigate(["/student/profile"]):this.router.navigate(["/admin/profile"])}onInboxClicked(){this.router.navigate(["/email/inbox"])}onSettingsClicked(){this.router.navigate(["/extra-pages/faqs"])}static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=kt(l)))(o||l)}})()}static{this.\u0275cmp=L({type:l,selectors:[["app-header"]],features:[ne],decls:25,vars:7,consts:[["navbar",""],[1,"navbar","active"],[1,"container-fluid"],[1,"navbar-header"],["href","#","onClick","return false;","aria-expanded","false",1,"navbar-toggle","collapsed",3,"click"],["href","#","onClick","return false;",1,"bars",3,"click"],[1,"navbar-brand",3,"routerLink"],["alt","Logo",2,"max-height","40px","max-width","120px","object-fit","contain",3,"src"],[1,"logo-name"],[1,"collapse","navbar-collapse",3,"ngClass"],[1,"float-start","collapse-menu-icon"],["mat-icon-button","",1,"sidemenu-collapse","nav-notification-icons",3,"click"],[1,"material-icons-outlined","icon-color"],[1,"nav","navbar-nav","navbar-right"],[1,"fullscreen"],["mat-icon-button","",1,"nav-notification-icons",3,"click"],[3,"markAllAsRead","readAll","closeNotification","actionClick","markAsReadEvent","notifications"],[1,"nav-item","user_profile"],[3,"accountClicked","inboxClicked","settingsClicked","logoutClicked","userName","userImg"]],template:function(r,o){r&1&&(m(0,"nav",1,0)(2,"div",2)(3,"div",3)(4,"a",4),S("click",function(){return o.isNavbarCollapsed=!o.isNavbarCollapsed}),p(),m(5,"a",5),S("click",function(x){return o.mobileMenuSidebarOpen(x,"overlay-open")}),p(),m(6,"a",6),M(7,"img",7),m(8,"span",8),C(9,"Smart"),p()()(),m(10,"div",9)(11,"ul",10)(12,"li")(13,"button",11),S("click",function(){return o.callSidemenuCollapse()}),m(14,"i",12),C(15," menu "),p()()()(),m(16,"ul",13)(17,"li",14)(18,"button",15),S("click",function(){return o.callFullscreen()}),m(19,"i",12),C(20," fullscreen "),p()()(),m(21,"li")(22,"app-notification-list",16),S("markAllAsRead",function(){return o.onMarkAllNotificationsRead()})("readAll",function(){return o.onReadAllNotifications()})("closeNotification",function(x){return o.onRemoveNotification(x)})("actionClick",function(x){return o.onNotificationActionClick(x)})("markAsReadEvent",function(x){return o.onMarkNotificationRead(x)}),p()(),m(23,"li",17)(24,"app-user-profile-menu",18),S("accountClicked",function(){return o.onAccountClicked()})("inboxClicked",function(){return o.onInboxClicked()})("settingsClicked",function(){return o.onSettingsClicked()})("logoutClicked",function(){return o.logout()}),p()()()()()()),r&2&&(v(6),_("routerLink",Si(o.homePage)),v(),_("src",o.institutionLogo,je),v(3),_("ngClass",o.isNavbarCollapsed?"":"show"),v(12),_("notifications",o.notifications),v(2),_("userName",o.userName||"User")("userImg",o.userImg))},dependencies:[Ii,Ze,It,Vi,Xs,wr,xr,Rt,_r],encapsulation:2})}}return l})();var kr=(()=>{class l extends ke{constructor(){super(),this.directoryService=f(Je),this.configService=f(Xe),this.document=f(X),this.renderer=f(fe),this.localStorageService=f(be),this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(n=>{n?this.direction=n==="ltr"?"ltr":"rtl":this.localStorageService.get("isRtl")?this.direction=this.localStorageService.get("isRtl")==="true"?"rtl":"ltr":this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",this.localStorageService.set("isRtl","true")):(this.direction="ltr",this.localStorageService.set("isRtl","false")))})}ngAfterViewInit(){this.localStorageService.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,this.localStorageService.get("theme"))):(this.renderer.addClass(this.document.body,this.config.layout.variant),this.localStorageService.set("theme",this.config.layout.variant)),this.localStorageService.get("choose_skin")?(this.renderer.removeClass(this.document.body,"theme-"+this.config.layout.theme_color),this.renderer.addClass(this.document.body,this.localStorageService.get("choose_skin")),this.localStorageService.set("choose_skin_active",this.localStorageService.get("choose_skin").substring(6))):(this.renderer.addClass(this.document.body,"theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin","theme-"+this.config.layout.theme_color),this.localStorageService.set("choose_skin_active",this.config.layout.theme_color)),this.localStorageService.get("isRtl")?this.localStorageService.get("isRtl")==="true"?this.setRTLSettings():this.localStorageService.get("isRtl")==="false"&&this.setLTRSettings():this.config.layout.rtl==!0?this.setRTLSettings():this.setLTRSettings(),this.localStorageService.get("menuOption")?this.renderer.addClass(this.document.body,this.localStorageService.get("menuOption")):(this.renderer.addClass(this.document.body,"menu_"+this.config.layout.sidebar.backgroundColor),this.localStorageService.set("menuOption","menu_"+this.config.layout.sidebar.backgroundColor)),this.localStorageService.get("choose_logoheader")?this.renderer.addClass(this.document.body,this.localStorageService.get("choose_logoheader")):this.renderer.addClass(this.document.body,"logo-"+this.config.layout.logo_bg_color),this.localStorageService.get("collapsed_menu")?this.localStorageService.get("collapsed_menu")==="true"&&(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed")):this.config.layout.sidebar.collapsed==!0?(this.renderer.addClass(this.document.body,"side-closed"),this.renderer.addClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false")):(this.renderer.removeClass(this.document.body,"side-closed"),this.renderer.removeClass(this.document.body,"submenu-closed"),this.localStorageService.set("collapsed_menu","false"))}setRTLSettings(){document.getElementsByTagName("html")[0].setAttribute("dir","rtl"),this.renderer.addClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","true")}setLTRSettings(){document.getElementsByTagName("html")[0].removeAttribute("dir"),this.renderer.removeClass(this.document.body,"rtl"),this.localStorageService.set("isRtl","false")}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-main-layout"]],features:[qe([Ot]),ne],decls:5,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(M(0,"app-header")(1,"app-sidebar")(2,"app-right-sidebar"),m(3,"div",0),M(4,"router-outlet"),p()),r&2&&(v(3),_("dir",o.direction))},dependencies:[br,vr,pr,_e,Ri,Tt],encapsulation:2})}}return l})();var lt=(()=>{class l{constructor(){this.router=f(Qe),this.store=f(be)}canActivate(n,r){let o=this.store.get("currentUser");if(o){let h=o.roles?.[0]?.name;if(!h)return this.router.navigate(["/authentication/signin"]),!1;let x=n.data.role;return x&&(!Array.isArray(x)||!x.includes(h))?(this.router.navigate(["/authentication/signin"]),!1):!0}return this.router.navigate(["/authentication/signin"]),!1}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=W({token:l,factory:l.\u0275fac,providedIn:"root"})}}return l})();var Mr=(()=>{class l extends ke{constructor(){super(),this.document=f(X),this.directoryService=f(Je),this.configService=f(Xe),this.renderer=f(fe),this.localStorageService=f(be);let n=this.localStorageService;this.config=this.configService.configData,this.subs.sink=this.directoryService.currentData.subscribe(r=>{r?this.direction=r==="ltr"?"ltr":"rtl":n.get("isRtl")?n.get("isRtl")==="true"?this.direction="rtl":n.get("isRtl")==="false"&&(this.direction="ltr"):this.config&&(this.config.layout.rtl===!0?(this.direction="rtl",n.set("isRtl","true")):(this.direction="ltr",n.set("isRtl","false")))}),n.get("theme")?(this.renderer.removeClass(this.document.body,this.config.layout.variant),this.renderer.addClass(this.document.body,n.get("theme"))):this.renderer.addClass(this.document.body,this.config.layout.variant)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275cmp=L({type:l,selectors:[["app-auth-layout"]],features:[ne],decls:2,vars:1,consts:[[3,"dir"]],template:function(r,o){r&1&&(m(0,"div",0),M(1,"router-outlet"),p()),r&2&&_("dir",o.direction)},dependencies:[_e,Ri,Tt],encapsulation:2})}}return l})();var Sr=[{path:"",component:kr,canActivate:[lt],children:[{path:"",redirectTo:"/authentication/signin",pathMatch:"full"},{path:"admin",canActivate:[lt],data:{role:[U.Admin,U.SuperAdmin]},loadChildren:()=>import("./chunk-M6IWKRFY.js").then(l=>l.ADMIN_ROUTE)},{path:"teacher",canActivate:[lt],data:{role:[U.Teacher]},loadChildren:()=>import("./chunk-SKO27DYF.js").then(l=>l.TEACHER_ROUTE)},{path:"student",canActivate:[lt],data:{role:[U.Student]},loadChildren:()=>import("./chunk-NOJLA7VZ.js").then(l=>l.STUDENT_ROUTE)},{path:"extra-pages",loadChildren:()=>import("./chunk-IG7VEL2N.js").then(l=>l.EXTRA_PAGES_ROUTE)},{path:"multilevel",loadChildren:()=>import("./chunk-PVU3P2K2.js").then(l=>l.MULTILEVEL_ROUTE)}]},{path:"authentication",component:Mr,loadChildren:()=>import("./chunk-64B2TNUW.js").then(l=>l.AUTH_ROUTE)},{path:"live-quiz",canActivate:[lt],children:[{path:"student",loadComponent:()=>import("./chunk-A4MOXOGM.js").then(l=>l.LiveQuizStudentComponent)},{path:"host/:id",loadComponent:()=>import("./chunk-KHN6ZTDX.js").then(l=>l.LiveQuizHostComponent)}]},{path:"word-cloud",canActivate:[lt],children:[{path:"student",loadComponent:()=>import("./chunk-WTBU2I7Z.js").then(l=>l.WordCloudStudentComponent)},{path:"host/:id",loadComponent:()=>import("./chunk-GCX3PQH3.js").then(l=>l.WordCloudHostComponent)}]},{path:"**",component:Ks}];var Ah=(()=>{class l extends Zi{constructor(n,r,o){super(n,r,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(r){return new(r||l)(We(X),We(Xt),We(qi))};static \u0275prov=W({token:l,factory:l.\u0275fac})}return l})();function Ih(){return new ar}function Rh(){return new rr(f(Bi),f(Zi),f(bt))}var Cr=[{provide:qi,useFactory:Ih},{provide:Zi,useClass:Ah},{provide:ki,useFactory:Rh}],uv=[{provide:Xt,useClass:nr},{provide:Gt,useValue:"NoopAnimations"},...Cr],Lh=[{provide:Xt,useFactory:()=>new sr},{provide:Gt,useFactory:()=>"BrowserAnimations"},...Cr];function Tr(){return bi("NgEagerAnimations"),[...Lh]}var Dr=(()=>{class l{constructor(){this.authenticationService=f(Dt),this.authTokenService=f(ir),this.isRefreshing=!1,this.refreshTokenSubject=new Ka(null)}intercept(n,r){return r.handle(n).pipe(Nn(o=>{if(o instanceof Ms&&o.status===401)return n.url.includes("/auth/login")?xt(()=>o):n.url.includes("/auth/refresh")?(this.authenticationService.logout(),location.reload(),xt(()=>o)):this.handle401Error(n,r,o);let h=o.error?.message||o.statusText;return xt(()=>h)}))}handle401Error(n,r,o){return this.isRefreshing?this.refreshTokenSubject.pipe(is(h=>h!=null),yi(1),_t(h=>r.handle(n.clone({setHeaders:{Authorization:`Bearer ${h}`}})))):(this.isRefreshing=!0,this.refreshTokenSubject.next(null),es(this.authTokenService.refresh()).pipe(_t(h=>{if(this.isRefreshing=!1,!h)return this.authenticationService.logout(),location.reload(),xt(()=>new Error("Session expired"));this.refreshTokenSubject.next(h);let x=n.clone({setHeaders:{Authorization:`Bearer ${h}`}});return r.handle(x)}),Nn(h=>(this.isRefreshing=!1,xt(()=>h)))))}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=W({token:l,factory:l.\u0275fac})}}return l})();var Or=(()=>{class l{constructor(){this.tokenService=f(Is)}intercept(n,r){let o=n;n.url.startsWith("/api")&&(o=n.clone({url:`${Wn.apiUrl}${n.url}`}));let h=this.tokenService.getBearerToken(),x=o.url.startsWith(Wn.apiUrl);return h&&x&&(o=o.clone({setHeaders:{Authorization:h}})),r.handle(o)}static{this.\u0275fac=function(r){return new(r||l)}}static{this.\u0275prov=W({token:l,factory:l.\u0275fac})}}return l})();var Zn=new K("TRANSLATE_HTTP_LOADER_CONFIG"),Nh=(()=>{class l{http;config;constructor(){this.config=oe({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},f(Zn)),this.http=this.config.useHttpBackend?new Ct(f(Un)):f(Ct)}getTranslation(n){let r=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${n}${this.config.suffix}${r}`)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=W({token:l,factory:l.\u0275fac})}return l})();function Br(l={}){let d=l.useHttpBackend??!1;return[{provide:Zn,useValue:l},{provide:Rs,useClass:Nh,deps:[d?Un:Ct,Zn]}]}var Eh=Xa(Xn(),1),Ar=Xa(Xn(),1),ct=Ar.default||Eh,Fh=new K("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:()=>({useUtc:!1})});function Ph(l,d){let n=Array(l);for(let r=0;r<l;r++)n[r]=d(r);return n}var Ir=(()=>{class l extends $i{_options=f(Fh,{optional:!0});_localeData;constructor(){super();let n=f(Gi,{optional:!0});this.setLocale(n||ct.locale())}setLocale(n){super.setLocale(n);let r=ct.localeData(n);this._localeData={firstDayOfWeek:r.firstDayOfWeek(),longMonths:r.months(),shortMonths:r.monthsShort(),dates:Ph(31,o=>this.createDate(2017,0,o+1).format("D")),longDaysOfWeek:r.weekdays(),shortDaysOfWeek:r.weekdaysShort(),narrowDaysOfWeek:r.weekdaysMin()}}getYear(n){return this.clone(n).year()}getMonth(n){return this.clone(n).month()}getDate(n){return this.clone(n).date()}getDayOfWeek(n){return this.clone(n).day()}getMonthNames(n){return n=="long"?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(n){return n=="long"?this._localeData.longDaysOfWeek:n=="short"?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(n){return this.clone(n).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(n){return this.clone(n).daysInMonth()}clone(n){return n.clone().locale(this.locale)}createDate(n,r,o){let h=this._createMoment({year:n,month:r,date:o}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(n,r){return n&&typeof n=="string"?this._createMoment(n,r,this.locale):n?this._createMoment(n).locale(this.locale):null}format(n,r){return n=this.clone(n),this.isValid(n),n.format(r)}addCalendarYears(n,r){return this.clone(n).add({years:r})}addCalendarMonths(n,r){return this.clone(n).add({months:r})}addCalendarDays(n,r){return this.clone(n).add({days:r})}toIso8601(n){return this.clone(n).format()}deserialize(n){let r;if(n instanceof Date)r=this._createMoment(n).locale(this.locale);else if(this.isDateInstance(n))return this.clone(n);if(typeof n=="string"){if(!n)return null;r=this._createMoment(n,ct.ISO_8601).locale(this.locale)}return r&&this.isValid(r)?this._createMoment(r).locale(this.locale):super.deserialize(n)}isDateInstance(n){return ct.isMoment(n)}isValid(n){return this.clone(n).isValid()}invalid(){return ct.invalid()}setTime(n,r,o,h){return this.clone(n).set({hours:r,minutes:o,seconds:h,milliseconds:0})}getHours(n){return n.hours()}getMinutes(n){return n.minutes()}getSeconds(n){return n.seconds()}parseTime(n,r){return this.parse(n,r)}addSeconds(n,r){return this.clone(n).add({seconds:r})}_createMoment(n,r,o){let{strict:h,useUtc:x}=this._options||{};return x?ct.utc(n,r,o,h):ct(n,r,o,h)}static \u0275fac=function(r){return new(r||l)};static \u0275prov=W({token:l,factory:l.\u0275fac})}return l})();var Yh=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-activity">
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
</svg>`,E0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-left">
    <polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>
</svg>`,F0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-right">
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
</svg>`,E1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-minus">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>
</svg>`,F1=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-file-plus">
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
</svg>`,E2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic-off">
    <line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>
</svg>`,F2=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mic">
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
</svg>`,Eu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
</svg>`,Fu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shield-off">
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
</svg>`,Eg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video-off">
    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>
</svg>`,Fg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-video">
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
</svg>`,Rr={Activity:Yh,Airplay:Hh,AlertCircle:Vh,AlertOctagon:zh,AlertTriangle:Uh,AlignCenter:Wh,AlignJustify:jh,AlignLeft:Gh,AlignRight:$h,Anchor:qh,Aperture:Zh,Archive:Qh,ArrowDownCircle:Xh,ArrowDownLeft:Jh,ArrowDownRight:Kh,ArrowDown:e0,ArrowLeftCircle:t0,ArrowLeft:i0,ArrowRightCircle:n0,ArrowRight:a0,ArrowUpCircle:s0,ArrowUpLeft:r0,ArrowUpRight:o0,ArrowUp:l0,AtSign:c0,Award:d0,BarChart2:h0,BarChart:u0,BatteryCharging:g0,Battery:m0,BellOff:p0,Bell:f0,Bluetooth:v0,Bold:w0,BookOpen:y0,Book:x0,Bookmark:_0,Box:b0,Briefcase:k0,Calendar:M0,CameraOff:S0,Camera:C0,Cast:T0,CheckCircle:D0,CheckSquare:O0,Check:B0,ChevronDown:A0,ChevronLeft:I0,ChevronRight:R0,ChevronUp:L0,ChevronsDown:N0,ChevronsLeft:E0,ChevronsRight:F0,ChevronsUp:P0,Chrome:Y0,Circle:H0,Clipboard:V0,Clock:z0,CloudDrizzle:U0,CloudLightning:W0,CloudOff:j0,CloudRain:G0,CloudSnow:$0,Cloud:q0,Code:Z0,Codepen:Q0,Codesandbox:X0,Coffee:J0,Columns:K0,Command:e1,Compass:t1,Copy:i1,CornerDownLeft:n1,CornerDownRight:a1,CornerLeftDown:s1,CornerLeftUp:r1,CornerRightDown:o1,CornerRightUp:l1,CornerUpLeft:c1,CornerUpRight:d1,Cpu:h1,CreditCard:u1,Crop:g1,Crosshair:m1,Database:p1,Delete:f1,Disc:v1,DivideCircle:w1,DivideSquare:y1,Divide:x1,DollarSign:_1,DownloadCloud:b1,Download:k1,Dribbble:M1,Droplet:S1,Edit2:C1,Edit3:T1,Edit:D1,ExternalLink:O1,EyeOff:B1,Eye:A1,Facebook:I1,FastForward:R1,Feather:L1,Figma:N1,FileMinus:E1,FilePlus:F1,FileText:P1,File:Y1,Film:H1,Filter:V1,Flag:z1,FolderMinus:U1,FolderPlus:W1,Folder:j1,Framer:G1,Frown:$1,Gift:q1,GitBranch:Z1,GitCommit:Q1,GitMerge:X1,GitPullRequest:J1,Github:K1,Gitlab:e2,Globe:t2,Grid:i2,HardDrive:n2,Hash:a2,Headphones:s2,Heart:r2,HelpCircle:o2,Hexagon:l2,Home:c2,Image:d2,Inbox:h2,Info:u2,Instagram:g2,Italic:m2,Key:p2,Layers:f2,Layout:v2,LifeBuoy:w2,Link2:y2,Link:x2,Linkedin:_2,List:b2,Loader:k2,Lock:M2,LogIn:S2,LogOut:C2,Mail:T2,MapPin:D2,Map:O2,Maximize2:B2,Maximize:A2,Meh:I2,Menu:R2,MessageCircle:L2,MessageSquare:N2,MicOff:E2,Mic:F2,Minimize2:P2,Minimize:Y2,MinusCircle:H2,MinusSquare:V2,Minus:z2,Monitor:U2,Moon:W2,MoreHorizontal:j2,MoreVertical:G2,MousePointer:$2,Move:q2,Music:Z2,Navigation2:Q2,Navigation:X2,Octagon:J2,Package:K2,Paperclip:eu,PauseCircle:tu,Pause:iu,PenTool:nu,Percent:au,PhoneCall:su,PhoneForwarded:ru,PhoneIncoming:ou,PhoneMissed:lu,PhoneOff:cu,PhoneOutgoing:du,Phone:hu,PieChart:uu,PlayCircle:gu,Play:mu,PlusCircle:pu,PlusSquare:fu,Plus:vu,Pocket:wu,Power:yu,Printer:xu,Radio:_u,RefreshCcw:bu,RefreshCw:ku,Repeat:Mu,Rewind:Su,RotateCcw:Cu,RotateCw:Tu,Rss:Du,Save:Ou,Scissors:Bu,Search:Au,Send:Iu,Server:Ru,Settings:Lu,Share2:Nu,Share:Eu,ShieldOff:Fu,Shield:Pu,ShoppingBag:Yu,ShoppingCart:Hu,Shuffle:Vu,Sidebar:zu,SkipBack:Uu,SkipForward:Wu,Slack:ju,Slash:Gu,Sliders:$u,Smartphone:qu,Smile:Zu,Speaker:Qu,Square:Xu,Star:Ju,StopCircle:Ku,Sun:eg,Sunrise:tg,Sunset:ig,Table:ng,Tablet:ag,Tag:sg,Target:rg,Terminal:og,Thermometer:lg,ThumbsDown:cg,ThumbsUp:dg,ToggleLeft:hg,ToggleRight:ug,Tool:gg,Trash2:mg,Trash:pg,Trello:fg,TrendingDown:vg,TrendingUp:wg,Triangle:yg,Truck:xg,Tv:_g,Twitch:bg,Twitter:kg,Type:Mg,Umbrella:Sg,Underline:Cg,Unlock:Tg,UploadCloud:Dg,Upload:Og,UserCheck:Bg,UserMinus:Ag,UserPlus:Ig,UserX:Rg,User:Lg,Users:Ng,VideoOff:Eg,Video:Fg,Voicemail:Pg,Volume1:Yg,Volume2:Hg,VolumeX:Vg,Volume:zg,Watch:Ug,WifiOff:Wg,Wifi:jg,Wind:Gg,XCircle:$g,XOctagon:qg,XSquare:Zg,X:Qg,Youtube:Xg,ZapOff:Jg,Zap:Kg,ZoomIn:em,ZoomOut:tm};var im="@",nm=(()=>{class l{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=f(ls);loadingSchedulerFn=f(am,{optional:!0});_engine;constructor(n,r,o,h,x){this.doc=n,this.delegate=r,this.zone=o,this.animationType=h,this.moduleImpl=x}ngOnDestroy(){this._engine?.flush()}loadImpl(){let n=()=>this.moduleImpl??import("./chunk-IRTJUMND.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(n):r=n(),r.catch(o=>{throw new ss(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:h})=>{this._engine=o(this.animationType,this.doc);let x=new h(this.delegate,this._engine,this.zone);return this.delegate=x,x})}createRenderer(n,r){let o=this.delegate.createRenderer(n,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let h=new Jn(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(x=>{let P=x.createRenderer(n,r);h.use(P),this.scheduler??=this.injector.get(ds,null,{optional:!0}),this.scheduler?.notify(10)}).catch(x=>{h.use(o)}),h}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(n){this._engine?.flush(),this.delegate.componentReplaced?.(n)}static \u0275fac=function(r){ps()};static \u0275prov=W({token:l,factory:l.\u0275fac})}return l})(),Jn=class{delegate;replay=[];\u0275type=1;constructor(d){this.delegate=d}use(d){if(this.delegate=d,this.replay!==null){for(let n of this.replay)n(d);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(d,n){return this.delegate.createElement(d,n)}createComment(d){return this.delegate.createComment(d)}createText(d){return this.delegate.createText(d)}get destroyNode(){return this.delegate.destroyNode}appendChild(d,n){this.delegate.appendChild(d,n)}insertBefore(d,n,r,o){this.delegate.insertBefore(d,n,r,o)}removeChild(d,n,r,o){this.delegate.removeChild(d,n,r,o)}selectRootElement(d,n){return this.delegate.selectRootElement(d,n)}parentNode(d){return this.delegate.parentNode(d)}nextSibling(d){return this.delegate.nextSibling(d)}setAttribute(d,n,r,o){this.delegate.setAttribute(d,n,r,o)}removeAttribute(d,n,r){this.delegate.removeAttribute(d,n,r)}addClass(d,n){this.delegate.addClass(d,n)}removeClass(d,n){this.delegate.removeClass(d,n)}setStyle(d,n,r,o){this.delegate.setStyle(d,n,r,o)}removeStyle(d,n,r){this.delegate.removeStyle(d,n,r)}setProperty(d,n,r){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(d,n,r)),this.delegate.setProperty(d,n,r)}setValue(d,n){this.delegate.setValue(d,n)}listen(d,n,r,o){return this.shouldReplay(n)&&this.replay.push(h=>h.listen(d,n,r,o)),this.delegate.listen(d,n,r,o)}shouldReplay(d){return this.replay!==null&&d.startsWith(im)}},am=new K("");function Lr(l="animations"){return bi("NgAsyncAnimations"),rs([{provide:ki,useFactory:()=>new nm(f(X),f(Bi),f(bt),l)},{provide:Gt,useValue:l==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Kn={providers:[Ss(Cs()),Os(Sr),Tr(),{provide:xs,useClass:_s},Je,Fs,Ns({fallbackLang:"en",loader:Br({prefix:"./assets/i18n/",suffix:".json"})}),{provide:Gi,useValue:"en-GB"},{provide:$i,useClass:Ir},Ys,{provide:jn,useValue:{parse:{dateInput:"YYYY-MM-DD"},display:{dateInput:"YYYY-MM-DD",monthYearLabel:"YYYY MMM",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY MMM"}}},Fn(Qs.pick(Rr)),Fn(Li.forRoot()),tr(er()),{provide:zn,useClass:Or,multi:!0},{provide:zn,useClass:Dr,multi:!0},Lr()]};ks(dr,yt(oe({},Kn),{providers:[ws(),...Kn.providers]})).catch(l=>console.error(l));
