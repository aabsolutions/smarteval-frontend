import{$ as k,$b as F,Ab as Br,B as Ce,Bb as Ur,Ca as B,Da as cn,E as gr,Ea as Tr,F as Te,Fa as ge,Fb as dn,G as br,Ga as Ir,Ha as Ie,Hb as Dt,I as yr,Ia as Mr,Ja as Me,K as rn,Lc as fn,Ma as bt,Mc as hn,Na as be,Oa as Se,Pa as Sr,Q as ht,Qa as Fr,R as vr,Ra as Rr,S as _r,Sa as xr,Sb as ln,T as pt,Ta as Or,Tb as mn,Ua as Nr,Ub as de,V as Dr,Va as Lr,Wa as ne,Wc as pn,X as D,Xc as $r,Y as $e,Yc as Vr,Zc as K,_ as l,_b as H,_c as gn,a as mr,ad as Hr,ba as h,bb as Fe,c as Ae,ca as p,cb as Pr,da as c,db as yt,dc as We,e as P,ea as on,ec as re,f as fr,ga as Er,gb as kr,ha as Ve,hb as un,ia as wr,ib as Re,jb as He,kb as z,m as ze,mb as vt,na as j,oa as y,oc as ve,pc as jr,q as W,qb as X,r as hr,ra as ue,rb as U,sa as S,sb as O,ta as an,tb as ye,u as pr,ua as Ar,va as pe,vb as Ge,xa as sn,ya as Cr,za as gt,zb as _t,zc as zr}from"./chunk-ES3NKZF7.js";import{a as C,b as mt,g as ft}from"./chunk-TSRGIXR5.js";var Gr=null;function ie(){return Gr}function bn(t){Gr??=t}var Ke=class{},le=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>c(Wr),providedIn:"platform"})}return t})(),Ro=new h(""),Wr=(()=>{class t extends le{_location;_history;_doc=c(y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ie().getBaseHref(this._doc)}onPopState(e){let n=ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ie().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Et(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Kr(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function J(t){return t&&t[0]!=="?"?`?${t}`:t}var xe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:()=>c(Yr),providedIn:"root"})}return t})(),wt=new h(""),Yr=(()=>{class t extends xe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Et(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+J(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+J(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+J(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(p(le),p(wt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xr=(()=>{class t{_subject=new P;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=No(Kr(Zr(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+J(n))}normalize(e){return t.stripTrailingSlash(Oo(this._basePath,Zr(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+J(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+J(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=J;static joinWithSlash=Et;static stripTrailingSlash=Kr;static \u0275fac=function(n){return new(n||t)(p(xe))};static \u0275prov=l({token:t,factory:()=>xo(),providedIn:"root"})}return t})();function xo(){return new Xr(p(xe))}function Oo(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Zr(t){return t.replace(/\/index.html$/,"")}function No(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Lo=(()=>{class t extends xe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=Et(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,i,o){let a=this.prepareExternalUrl(i+J(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,a)}replaceState(e,n,i,o){let a=this.prepareExternalUrl(i+J(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(p(le),p(wt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();var Tn=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(Tn||{});var N=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(N||{}),E=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(E||{}),$=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})($||{}),V={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function ni(t){return H(t)[F.LocaleId]}function ri(t,r,e){let n=H(t),i=[n[F.DayPeriodsFormat],n[F.DayPeriodsStandalone]],o=Z(i,r);return Z(o,e)}function ii(t,r,e){let n=H(t),i=[n[F.DaysFormat],n[F.DaysStandalone]],o=Z(i,r);return Z(o,e)}function oi(t,r,e){let n=H(t),i=[n[F.MonthsFormat],n[F.MonthsStandalone]],o=Z(i,r);return Z(o,e)}function ai(t,r){let n=H(t)[F.Eras];return Z(n,r)}function Ze(t,r){let e=H(t);return Z(e[F.DateFormat],r)}function Ye(t,r){let e=H(t);return Z(e[F.TimeFormat],r)}function Xe(t,r){let n=H(t)[F.DateTimeFormat];return Z(n,r)}function ee(t,r){let e=H(t),n=e[F.NumberSymbols][r];if(typeof n>"u"){if(r===V.CurrencyDecimal)return e[F.NumberSymbols][V.Decimal];if(r===V.CurrencyGroup)return e[F.NumberSymbols][V.Group]}return n}function si(t,r){return H(t)[F.NumberFormats][r]}function ci(t){if(!t[F.ExtraData])throw new D(2303,!1)}function ui(t){let r=H(t);return ci(r),(r[F.ExtraData][2]||[]).map(n=>typeof n=="string"?yn(n):[yn(n[0]),yn(n[1])])}function di(t,r,e){let n=H(t);ci(n);let i=[n[F.ExtraData][0],n[F.ExtraData][1]],o=Z(i,r)||[];return Z(o,e)||[]}function Z(t,r){for(let e=r;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new D(2304,!1)}function yn(t){let[r,e]=t.split(":");return{hours:+r,minutes:+e}}var Po=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,At={},ko=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function li(t,r,e,n){let i=Wo(t);r=oe(e,r)||r;let a=[],s;for(;r;)if(s=ko.exec(r),s){a=a.concat(s.slice(1));let m=a.pop();if(!m)break;r=m}else{a.push(r);break}let u=i.getTimezoneOffset();n&&(u=fi(n,u),i=Go(i,n));let d="";return a.forEach(m=>{let f=Vo(m);d+=f?f(i,e,u):m==="''"?"'":m.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),d}function St(t,r,e){let n=new Date(0);return n.setFullYear(t,r,e),n.setHours(0,0,0),n}function oe(t,r){let e=ni(t);if(At[e]??={},At[e][r])return At[e][r];let n="";switch(r){case"shortDate":n=Ze(t,$.Short);break;case"mediumDate":n=Ze(t,$.Medium);break;case"longDate":n=Ze(t,$.Long);break;case"fullDate":n=Ze(t,$.Full);break;case"shortTime":n=Ye(t,$.Short);break;case"mediumTime":n=Ye(t,$.Medium);break;case"longTime":n=Ye(t,$.Long);break;case"fullTime":n=Ye(t,$.Full);break;case"short":let i=oe(t,"shortTime"),o=oe(t,"shortDate");n=Ct(Xe(t,$.Short),[i,o]);break;case"medium":let a=oe(t,"mediumTime"),s=oe(t,"mediumDate");n=Ct(Xe(t,$.Medium),[a,s]);break;case"long":let u=oe(t,"longTime"),d=oe(t,"longDate");n=Ct(Xe(t,$.Long),[u,d]);break;case"full":let m=oe(t,"fullTime"),f=oe(t,"fullDate");n=Ct(Xe(t,$.Full),[m,f]);break}return n&&(At[e][r]=n),n}function Ct(t,r){return r&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return r!=null&&n in r?r[n]:e})),t}function q(t,r,e="-",n,i){let o="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<r;)a="0"+a;return n&&(a=a.slice(a.length-r)),o+a}function Bo(t,r){return q(t,3).substring(0,r)}function R(t,r,e=0,n=!1,i=!1){return function(o,a){let s=Uo(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return Bo(s,r);let u=ee(a,V.MinusSign);return q(s,r,u,n,i)}}function Uo(t,r){switch(t){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new D(2301,!1)}}function w(t,r,e=N.Format,n=!1){return function(i,o){return jo(i,o,t,r,e,n)}}function jo(t,r,e,n,i,o){switch(e){case 2:return oi(r,i,n)[t.getMonth()];case 1:return ii(r,i,n)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let d=ui(r),m=di(r,i,n),f=d.findIndex(v=>{if(Array.isArray(v)){let[_,A]=v,x=a>=_.hours&&s>=_.minutes,g=a<A.hours||a===A.hours&&s<A.minutes;if(_.hours<A.hours){if(x&&g)return!0}else if(x||g)return!0}else if(v.hours===a&&v.minutes===s)return!0;return!1});if(f!==-1)return m[f]}return ri(r,i,n)[a<12?0:1];case 3:return ai(r,n)[t.getFullYear()<=0?0:1];default:let u=e;throw new D(2302,!1)}}function Tt(t){return function(r,e,n){let i=-1*n,o=ee(e,V.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+q(a,2,o)+q(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+q(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+q(a,2,o)+":"+q(Math.abs(i%60),2,o);case 3:return n===0?"Z":(i>=0?"+":"")+q(a,2,o)+":"+q(Math.abs(i%60),2,o);default:throw new D(2310,!1)}}}var zo=0,Mt=4;function $o(t){let r=St(t,zo,1).getDay();return St(t,0,1+(r<=Mt?Mt:Mt+7)-r)}function mi(t){let r=t.getDay(),e=r===0?-3:Mt-r;return St(t.getFullYear(),t.getMonth(),t.getDate()+e)}function vn(t,r=!1){return function(e,n){let i;if(r){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=mi(e),a=$o(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return q(i,t,ee(n,V.MinusSign))}}function It(t,r=!1){return function(e,n){let o=mi(e).getFullYear();return q(o,t,ee(n,V.MinusSign),r)}}var _n={};function Vo(t){if(_n[t])return _n[t];let r;switch(t){case"G":case"GG":case"GGG":r=w(3,E.Abbreviated);break;case"GGGG":r=w(3,E.Wide);break;case"GGGGG":r=w(3,E.Narrow);break;case"y":r=R(0,1,0,!1,!0);break;case"yy":r=R(0,2,0,!0,!0);break;case"yyy":r=R(0,3,0,!1,!0);break;case"yyyy":r=R(0,4,0,!1,!0);break;case"Y":r=It(1);break;case"YY":r=It(2,!0);break;case"YYY":r=It(3);break;case"YYYY":r=It(4);break;case"M":case"L":r=R(1,1,1);break;case"MM":case"LL":r=R(1,2,1);break;case"MMM":r=w(2,E.Abbreviated);break;case"MMMM":r=w(2,E.Wide);break;case"MMMMM":r=w(2,E.Narrow);break;case"LLL":r=w(2,E.Abbreviated,N.Standalone);break;case"LLLL":r=w(2,E.Wide,N.Standalone);break;case"LLLLL":r=w(2,E.Narrow,N.Standalone);break;case"w":r=vn(1);break;case"ww":r=vn(2);break;case"W":r=vn(1,!0);break;case"d":r=R(2,1);break;case"dd":r=R(2,2);break;case"c":case"cc":r=R(7,1);break;case"ccc":r=w(1,E.Abbreviated,N.Standalone);break;case"cccc":r=w(1,E.Wide,N.Standalone);break;case"ccccc":r=w(1,E.Narrow,N.Standalone);break;case"cccccc":r=w(1,E.Short,N.Standalone);break;case"E":case"EE":case"EEE":r=w(1,E.Abbreviated);break;case"EEEE":r=w(1,E.Wide);break;case"EEEEE":r=w(1,E.Narrow);break;case"EEEEEE":r=w(1,E.Short);break;case"a":case"aa":case"aaa":r=w(0,E.Abbreviated);break;case"aaaa":r=w(0,E.Wide);break;case"aaaaa":r=w(0,E.Narrow);break;case"b":case"bb":case"bbb":r=w(0,E.Abbreviated,N.Standalone,!0);break;case"bbbb":r=w(0,E.Wide,N.Standalone,!0);break;case"bbbbb":r=w(0,E.Narrow,N.Standalone,!0);break;case"B":case"BB":case"BBB":r=w(0,E.Abbreviated,N.Format,!0);break;case"BBBB":r=w(0,E.Wide,N.Format,!0);break;case"BBBBB":r=w(0,E.Narrow,N.Format,!0);break;case"h":r=R(3,1,-12);break;case"hh":r=R(3,2,-12);break;case"H":r=R(3,1);break;case"HH":r=R(3,2);break;case"m":r=R(4,1);break;case"mm":r=R(4,2);break;case"s":r=R(5,1);break;case"ss":r=R(5,2);break;case"S":r=R(6,1);break;case"SS":r=R(6,2);break;case"SSS":r=R(6,3);break;case"Z":case"ZZ":case"ZZZ":r=Tt(0);break;case"ZZZZZ":r=Tt(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=Tt(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=Tt(2);break;default:return null}return _n[t]=r,r}function fi(t,r){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?r:e}function Ho(t,r){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+r),t}function Go(t,r,e){let i=t.getTimezoneOffset(),o=fi(r,i);return Ho(t,-1*(o-i))}function Wo(t){if(Jr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,a=1]=t.split("-").map(s=>+s);return St(i,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Po))return Ko(n)}let r=new Date(t);if(!Jr(r))throw new D(2311,!1);return r}function Ko(t){let r=new Date(0),e=0,n=0,i=t[8]?r.setUTCFullYear:r.setFullYear,o=t[8]?r.setUTCHours:r.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(r,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-n,u=Number(t[6]||0),d=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(r,a,s,u,d),r}function Jr(t){return t instanceof Date&&!isNaN(t.valueOf())}var Zo=/^(\d+)?\.((\d+)(-(\d+))?)?$/,qr=22,Ft=".",Je="0",Yo=";",Xo=",",Dn="#";function Jo(t,r,e,n,i,o,a=!1){let s="",u=!1;if(!isFinite(t))s=ee(e,V.Infinity);else{let d=ea(t);a&&(d=Qo(d));let m=r.minInt,f=r.minFrac,v=r.maxFrac;if(o){let M=o.match(Zo);if(M===null)throw new D(2306,!1);let G=M[1],I=M[3],ce=M[5];G!=null&&(m=En(G)),I!=null&&(f=En(I)),ce!=null?v=En(ce):I!=null&&f>v&&(v=f)}ta(d,f,v);let _=d.digits,A=d.integerLen,x=d.exponent,g=[];for(u=_.every(M=>!M);A<m;A++)_.unshift(0);for(;A<0;A++)_.unshift(0);A>0?g=_.splice(A,_.length):(g=_,_=[0]);let b=[];for(_.length>=r.lgSize&&b.unshift(_.splice(-r.lgSize,_.length).join(""));_.length>r.gSize;)b.unshift(_.splice(-r.gSize,_.length).join(""));_.length&&b.unshift(_.join("")),s=b.join(ee(e,n)),g.length&&(s+=ee(e,i)+g.join("")),x&&(s+=ee(e,V.Exponential)+"+"+x)}return t<0&&!u?s=r.negPre+s+r.negSuf:s=r.posPre+s+r.posSuf,s}function hi(t,r,e){let n=si(r,Tn.Decimal),i=qo(n,ee(r,V.MinusSign));return Jo(t,i,r,V.Group,V.Decimal,e)}function qo(t,r="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Yo),i=n[0],o=n[1],a=i.indexOf(Ft)!==-1?i.split(Ft):[i.substring(0,i.lastIndexOf(Je)+1),i.substring(i.lastIndexOf(Je)+1)],s=a[0],u=a[1]||"";e.posPre=s.substring(0,s.indexOf(Dn));for(let m=0;m<u.length;m++){let f=u.charAt(m);f===Je?e.minFrac=e.maxFrac=m+1:f===Dn?e.maxFrac=m+1:e.posSuf+=f}let d=s.split(Xo);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let m=i.length-e.posPre.length-e.posSuf.length,f=o.indexOf(Dn);e.negPre=o.substring(0,f).replace(/'/g,""),e.negSuf=o.slice(f+m).replace(/'/g,"")}else e.negPre=r+e.posPre,e.negSuf=e.posSuf;return e}function Qo(t){if(t.digits[0]===0)return t;let r=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(r===0?t.digits.push(0,0):r===1&&t.digits.push(0),t.integerLen+=2),t}function ea(t){let r=Math.abs(t)+"",e=0,n,i,o,a,s;for((i=r.indexOf(Ft))>-1&&(r=r.replace(Ft,"")),(o=r.search(/e/i))>0?(i<0&&(i=o),i+=+r.slice(o+1),r=r.substring(0,o)):i<0&&(i=r.length),o=0;r.charAt(o)===Je;o++);if(o===(s=r.length))n=[0],i=1;else{for(s--;r.charAt(s)===Je;)s--;for(i-=o,n=[],a=0;o<=s;o++,a++)n[a]=Number(r.charAt(o))}return i>qr&&(n=n.splice(0,qr-1),e=i-1,i=1),{digits:n,exponent:e,integerLen:i}}function ta(t,r,e){if(r>e)throw new D(2307,!1);let n=t.digits,i=n.length-t.integerLen,o=Math.min(Math.max(r,i),e),a=o+t.integerLen,s=n[a];if(a>0){n.splice(Math.max(t.integerLen,a));for(let f=a;f<n.length;f++)n[f]=0}else{i=Math.max(0,i),t.integerLen=1,n.length=Math.max(1,a=o+1),n[0]=0;for(let f=1;f<a;f++)n[f]=0}if(s>=5)if(a-1<0){for(let f=0;f>a;f--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[a-1]++;for(;i<Math.max(0,o);i++)n.push(0);let u=o!==0,d=r+t.integerLen,m=n.reduceRight(function(f,v,_,A){return v=v+f,A[_]=v<10?v:v-10,u&&(A[_]===0&&_>=d?A.pop():u=!1),v>=10?1:0},0);m&&(n.unshift(m),t.integerLen++)}function En(t){let r=parseInt(t);if(isNaN(r))throw new D(2305,!1);return r}var wn=/\s+/,Qr=[],na=(()=>{class t{_ngEl;_renderer;initialClasses=Qr;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(wn):Qr}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(wn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==n&&(i.changed=!0,i.enabled=n),i.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],i=e[1];i.changed?(this._toggleClass(n,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),i.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(wn).forEach(i=>{n?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static \u0275fac=function(n){return new(n||t)(z(B),z(He))};static \u0275dir=O({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Rt=class{$implicit;ngForOf;index;count;constructor(r,e,n,i){this.$implicit=r,this.ngForOf=e,this.index=n,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},pi=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,i){this._viewContainer=e,this._template=n,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((i,o,a)=>{if(i.previousIndex==null)n.createEmbeddedView(this._template,new Rt(i.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)n.remove(o===null?void 0:o);else if(o!==null){let s=n.get(o);n.move(s,a),ei(s,i)}});for(let i=0,o=n.length;i<o;i++){let s=n.get(i).context;s.index=i,s.count=o,s.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let o=n.get(i.currentIndex);ei(o,i)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(z(vt),z(un),z($r))};static \u0275dir=O({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function ei(t,r){t.context.$implicit=r.item}var ra=(()=>{class t{_viewContainer;_context=new xt;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ti(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ti(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(z(vt),z(un))};static \u0275dir=O({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),xt=class{$implicit=null;ngIf=null};function ti(t,r){if(t&&!t.createEmbeddedView)throw new D(2020,!1)}var ia=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(j);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(z(vt))};static \u0275dir=O({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[gt]})}return t})();function qe(t,r){return new D(2100,!1)}var An=class{createSubscription(r,e,n){return hn(()=>r.subscribe({next:e,error:n}))}dispose(r){hn(()=>r.unsubscribe())}},Cn=class{createSubscription(r,e,n){return r.then(i=>e?.(i),i=>n?.(i)),{unsubscribe:()=>{e=null,n=null}}}dispose(r){r.unsubscribe()}},oa=new Cn,aa=new An,sa=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=c(Ar);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Br(e))return oa;if(Ur(e))return aa;throw qe(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(z(pn,16))};static \u0275pipe=ye({name:"async",type:t,pure:!1})}return t})();var ca=/(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g,ua=(()=>{class t{transform(e){return e==null?null:(gi(t,e),e.replace(ca,n=>n[0].toUpperCase()+n.slice(1).toLowerCase()))}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=ye({name:"titlecase",type:t,pure:!0})}return t})(),da=(()=>{class t{transform(e){return e==null?null:(gi(t,e),e.toUpperCase())}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=ye({name:"uppercase",type:t,pure:!0})}return t})();function gi(t,r){if(typeof r!="string")throw qe(t,r)}var la="mediumDate",bi=new h(""),yi=new h(""),ma=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,i){this.locale=e,this.defaultTimezone=n,this.defaultOptions=i}transform(e,n,i,o){if(e==null||e===""||e!==e)return null;try{let a=n??this.defaultOptions?.dateFormat??la,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return li(e,a,o||this.locale,s)}catch(a){throw qe(t,a.message)}}static \u0275fac=function(n){return new(n||t)(z(fn,16),z(bi,24),z(yi,24))};static \u0275pipe=ye({name:"date",type:t,pure:!0})}return t})();var fa=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,i){if(!ha(e))return null;i||=this._locale;try{let o=pa(e);return hi(o,i,n)}catch(o){throw qe(t,o.message)}}static \u0275fac=function(n){return new(n||t)(z(fn,16))};static \u0275pipe=ye({name:"number",type:t,pure:!0})}return t})();function ha(t){return!(t==null||t===""||t!==t)}function pa(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new D(2309,!1);return t}var ga=(()=>{class t{transform(e,n,i){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw qe(t,e);return e.slice(n,i)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=ye({name:"slice",type:t,pure:!1})}return t})();var vi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({})}return t})();function Qe(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var _e=class{};var Mn="browser";function _i(t){return t===Mn}var yu=(()=>{class t{static \u0275prov=l({token:t,providedIn:"root",factory:()=>new In(c(y),window)})}return t})(),In=class{document;window;offset=()=>[0,0];constructor(r,e){this.document=r,this.window=e}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r,e){this.window.scrollTo(mt(C({},e),{left:r[0],top:r[1]}))}scrollToAnchor(r,e){let n=_a(this.document,r);n&&(this.scrollToElement(n,e),n.focus({preventScroll:!0}))}setHistoryScrollRestoration(r){try{this.window.history.scrollRestoration=r}catch(e){console.warn($e(2400,!1))}}scrollToElement(r,e){let n=r.getBoundingClientRect(),i=n.left+this.window.pageXOffset,o=n.top+this.window.pageYOffset,a=this.offset();this.window.scrollTo(mt(C({},e),{left:i-a[0],top:o-a[1]}))}};function _a(t,r){let e=t.getElementById(r)||t.getElementsByName(r)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),i=n.currentNode;for(;i;){let o=i.shadowRoot;if(o){let a=o.getElementById(r)||o.querySelector(`[name="${r}"]`);if(a)return a}i=n.nextNode()}}return null}var et=class{_doc;constructor(r){this._doc=r}manager},Ot=(()=>{class t extends et{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(p(y))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Pt=new h(""),xn=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof Ot));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof Ot);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new D(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(p(Pt),p(S))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Sn="ng-app-id";function Di(t){for(let r of t)r.remove()}function Ei(t,r){let e=r.createElement("style");return e.textContent=t,e}function Da(t,r,e,n){let i=t.head?.querySelectorAll(`style[${Sn}="${r}"],link[${Sn}="${r}"]`);if(i)for(let o of i)o.removeAttribute(Sn),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Rn(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var On=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,Da(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Ei);n?.forEach(i=>this.addUsage(i,this.external,Rn))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(Di(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Di(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Ei(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,Rn(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(p(y),p(ge),p(Me,8),p(Ie))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Fn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Nn=/%COMP%/g;var Ai="%COMP%",Ea=`_nghost-${Ai}`,wa=`_ngcontent-${Ai}`,Aa=!0,Ca=new h("",{factory:()=>Aa});function Ta(t){return wa.replace(Nn,t)}function Ia(t){return Ea.replace(Nn,t)}function Ci(t,r){return r.map(e=>e.replace(Nn,t))}var Ln=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,a,s,u=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=u,this.tracingService=d,this.defaultRenderer=new tt(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof Lt?i.applyToHost(e):i instanceof nt&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let a=this.doc,s=this.ngZone,u=this.eventManager,d=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case bt.Emulated:o=new Lt(u,d,n,this.appId,m,a,s,f);break;case bt.ShadowDom:return new Nt(u,e,n,a,s,this.nonce,f,d);case bt.ExperimentalIsolatedShadowDom:return new Nt(u,e,n,a,s,this.nonce,f);default:o=new nt(u,d,n,m,a,s,f);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(p(xn),p(On),p(ge),p(Ca),p(y),p(S),p(Me),p(yt,8))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),tt=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(Fn[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(wi(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(wi(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new D(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=Fn[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=Fn[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){i&(Fe.DashCase|Fe.Important)?r.style.setProperty(e,n,i&Fe.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&Fe.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=ie().getGlobalEventTarget(this.doc,r),!r))throw new D(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function wi(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Nt=class extends tt{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,a,s,u){super(r,i,o,s),this.hostEl=e,this.sharedStylesHost=u,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=Ci(n.id,d);for(let f of d){let v=document.createElement("style");a&&v.setAttribute("nonce",a),v.textContent=f,this.shadowRoot.appendChild(v)}let m=n.getExternalStyles?.();if(m)for(let f of m){let v=Rn(f,i);a&&v.setAttribute("nonce",a),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},nt=class extends tt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,a,s,u){super(r,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=n.styles;this.styles=u?Ci(u,d):d,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Pr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Lt=class extends nt{contentAttr;hostAttr;constructor(r,e,n,i,o,a,s,u){let d=i+"-"+n.id;super(r,e,n,o,a,s,u,d),this.contentAttr=Ta(d),this.hostAttr=Ia(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var kt=class t extends Ke{supportsDOMEvents=!0;static makeCurrent(){bn(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Sa();return e==null?null:Fa(e)}resetBaseElement(){rt=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Qe(document.cookie,r)}},rt=null;function Sa(){return rt=rt||document.head.querySelector("base"),rt?rt.getAttribute("href"):null}function Fa(t){return new URL(t,document.baseURI).pathname}var Ra=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})(),Ti=["alt","control","meta","shift"],xa={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Oa={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ii=(()=>{class t extends et{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ie().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),Ti.forEach(d=>{let m=n.indexOf(d);m>-1&&(n.splice(m,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let u={};return u.domEventName=i,u.fullKey=a,u}static matchEventFullKeyCode(e,n){let i=xa[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Ti.forEach(a=>{if(a!==i){let s=Oa[a];s(e)&&(o+=a+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(p(y))};static \u0275prov=l({token:t,factory:t.\u0275fac})}return t})();function Na(t,r,e){return ft(this,null,function*(){let n=C({rootComponent:t},La(r,e));return Vr(n)})}function La(t,r){return{platformRef:r?.platformRef,appProviders:[...ja,...t?.providers??[]],platformProviders:Ua}}function Pa(){kt.makeCurrent()}function ka(){return new an}function Ba(){return Tr(document),document}var Ua=[{provide:Ie,useValue:Mn},{provide:Ir,useValue:Pa,multi:!0},{provide:y,useFactory:Ba}];var ja=[{provide:Er,useValue:"root"},{provide:an,useFactory:ka},{provide:Pt,useClass:Ot,multi:!0},{provide:Pt,useClass:Ii,multi:!0},Ln,On,xn,{provide:Re,useExisting:Ln},{provide:_e,useClass:Ra},[]];var me=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var Ut=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},jt=class{encodeKey(r){return Mi(r)}encodeValue(r){return Mi(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function za(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],u=e.get(a)||[];u.push(s),e.set(a,u)}),e}var $a=/%(\d[a-f0-9])/gi,Va={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Mi(t){return encodeURIComponent(t).replace($a,(r,e)=>Va[e]??r)}function Bt(t){return`${t}`}var ae=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new jt,r.fromString){if(r.fromObject)throw new D(2805,!1);this.map=za(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(Bt):[Bt(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(Bt(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(Bt(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function Ha(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Si(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Fi(t){return typeof Blob<"u"&&t instanceof Blob}function Ri(t){return typeof FormData<"u"&&t instanceof FormData}function Ga(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var xi="Content-Type",Oi="Accept",Li="text/plain",Pi="application/json",Wa=`${Pi}, ${Li}, */*`,Oe=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(Ha(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new D(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new me,this.context??=new Ut,!this.params)this.params=new ae,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),u=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+u+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Si(this.body)||Fi(this.body)||Ri(this.body)||Ga(this.body)?this.body:this.body instanceof ae?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ri(this.body)?null:Fi(this.body)?this.body.type||null:Si(this.body)?null:typeof this.body=="string"?Li:this.body instanceof ae?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Pi:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,a=r.priority||this.priority,s=r.cache||this.cache,u=r.mode||this.mode,d=r.redirect||this.redirect,m=r.credentials||this.credentials,f=r.referrer||this.referrer,v=r.integrity||this.integrity,_=r.referrerPolicy||this.referrerPolicy,A=r.transferCache??this.transferCache,x=r.timeout??this.timeout,g=r.body!==void 0?r.body:this.body,b=r.withCredentials??this.withCredentials,M=r.reportProgress??this.reportProgress,G=r.headers||this.headers,I=r.params||this.params,ce=r.context??this.context;return r.setHeaders!==void 0&&(G=Object.keys(r.setHeaders).reduce((je,he)=>je.set(he,r.setHeaders[he]),G)),r.setParams&&(I=Object.keys(r.setParams).reduce((je,he)=>je.set(he,r.setParams[he]),I)),new t(e,n,g,{params:I,headers:G,context:ce,reportProgress:M,responseType:i,withCredentials:b,transferCache:A,keepalive:o,cache:s,priority:a,timeout:x,mode:u,redirect:d,credentials:m,referrer:f,integrity:v,referrerPolicy:_})}},De=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(De||{}),Le=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new me,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},zt=class t extends Le{constructor(r={}){super(r)}type=De.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},it=class t extends Le{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=De.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Ne=class extends Le{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Ka=200,Za=204;var Ya=new h("");var Xa=/^\)\]\}',?\n/;var kn=(()=>{class t{xhrFactory;tracingService=c(yt,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new D(-2800,!1);let n=this.xhrFactory;return ze(null).pipe(_r(()=>new Ae(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((g,b)=>a.setRequestHeader(g,b.join(","))),e.headers.has(Oi)||a.setRequestHeader(Oi,Wa),!e.headers.has(xi)){let g=e.detectContentTypeHeader();g!==null&&a.setRequestHeader(xi,g)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();a.responseType=g!=="json"?g:"text"}let s=e.serializeBody(),u=null,d=()=>{if(u!==null)return u;let g=a.statusText||"OK",b=new me(a.getAllResponseHeaders()),M=a.responseURL||e.url;return u=new zt({headers:b,status:a.status,statusText:g,url:M}),u},m=this.maybePropagateTrace(()=>{let{headers:g,status:b,statusText:M,url:G}=d(),I=null;b!==Za&&(I=typeof a.response>"u"?a.responseText:a.response),b===0&&(b=I?Ka:0);let ce=b>=200&&b<300;if(e.responseType==="json"&&typeof I=="string"){let je=I;I=I.replace(Xa,"");try{I=I!==""?JSON.parse(I):null}catch(he){I=je,ce&&(ce=!1,I={error:he,text:I})}}ce?(o.next(new it({body:I,headers:g,status:b,statusText:M,url:G||void 0})),o.complete()):o.error(new Ne({error:I,headers:g,status:b,statusText:M,url:G||void 0}))}),f=this.maybePropagateTrace(g=>{let{url:b}=d(),M=new Ne({error:g,status:a.status||0,statusText:a.statusText||"Unknown Error",url:b||void 0});o.error(M)}),v=f;e.timeout&&(v=this.maybePropagateTrace(g=>{let{url:b}=d(),M=new Ne({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:b||void 0});o.error(M)}));let _=!1,A=this.maybePropagateTrace(g=>{_||(o.next(d()),_=!0);let b={type:De.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),e.responseType==="text"&&a.responseText&&(b.partialText=a.responseText),o.next(b)}),x=this.maybePropagateTrace(g=>{let b={type:De.UploadProgress,loaded:g.loaded};g.lengthComputable&&(b.total=g.total),o.next(b)});return a.addEventListener("load",m),a.addEventListener("error",f),a.addEventListener("timeout",v),a.addEventListener("abort",f),e.reportProgress&&(a.addEventListener("progress",A),s!==null&&a.upload&&a.upload.addEventListener("progress",x)),a.send(s),o.next({type:De.Sent}),()=>{a.removeEventListener("error",f),a.removeEventListener("abort",f),a.removeEventListener("load",m),a.removeEventListener("timeout",v),e.reportProgress&&(a.removeEventListener("progress",A),s!==null&&a.upload&&a.upload.removeEventListener("progress",x)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(p(_e))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ki(t,r){return r(t)}function Ja(t,r){return(e,n)=>r.intercept(e,{handle:i=>t(i,n)})}function qa(t,r,e){return(n,i)=>wr(e,()=>r(n,o=>t(o,i)))}var Bi=new h(""),Bn=new h("",{factory:()=>[]}),Ui=new h(""),Un=new h("",{factory:()=>!0});function Qa(){let t=null;return(r,e)=>{t===null&&(t=(c(Bi,{optional:!0})??[]).reduceRight(Ja,ki));let n=c(sn);if(c(Un)){let o=n.add();return t(r,e).pipe(rn(o))}else return t(r,e)}}var jn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=p(kn),i},providedIn:"root"})}return t})();var $t=(()=>{class t{backend;injector;chain=null;pendingTasks=c(sn);contributeToStability=c(Un);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Bn),...this.injector.get(Ui,[])]));this.chain=n.reduceRight((i,o)=>qa(i,o,this.injector),ki)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(rn(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(p(jn),p(Ve))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=p($t),i},providedIn:"root"})}return t})();function Pn(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var ji=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Oe)o=e;else{let u;i.headers instanceof me?u=i.headers:u=new me(i.headers);let d;i.params&&(i.params instanceof ae?d=i.params:d=new ae({fromObject:i.params})),o=new Oe(e,n,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:d,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=ze(o).pipe(gr(u=>this.handler.handle(u)));if(e instanceof Oe||i.observe==="events")return a;let s=a.pipe(Ce(u=>u instanceof it));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(W(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new D(2806,!1);return u.body}));case"blob":return s.pipe(W(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new D(2807,!1);return u.body}));case"text":return s.pipe(W(u=>{if(u.body!==null&&typeof u.body!="string")throw new D(2808,!1);return u.body}));default:return s.pipe(W(u=>u.body))}case"response":return s;default:throw new D(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new ae().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Pn(i,n))}post(e,n,i={}){return this.request("POST",e,Pn(i,n))}put(e,n,i={}){return this.request("PUT",e,Pn(i,n))}static \u0275fac=function(n){return new(n||t)(p(zn))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var es=new h("",{factory:()=>!0}),ts="XSRF-TOKEN",ns=new h("",{factory:()=>ts}),rs="X-XSRF-TOKEN",is=new h("",{factory:()=>rs}),os=(()=>{class t{cookieName=c(ns);doc=c(y);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Qe(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=p(os),i},providedIn:"root"})}return t})();function as(t,r){if(!c(es)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=c(le).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return r(t)}catch(i){return r(t)}let e=c(zi).getToken(),n=c(is);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}var $n=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})($n||{});function ss(t,r){return{\u0275kind:t,\u0275providers:r}}function cs(...t){let r=[ji,$t,{provide:zn,useExisting:$t},{provide:jn,useFactory:()=>c(Ya,{optional:!0})??c(kn)},{provide:Bn,useValue:as,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return on(r)}var Ni=new h("");function us(){return ss($n.LegacyInterceptors,[{provide:Ni,useFactory:Qa},{provide:Bn,useExisting:Ni,multi:!0}])}var Kd=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(p(y))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=p(ds),i},providedIn:"root"})}return t})(),ds=(()=>{class t extends Vn{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case ne.NONE:return n;case ne.HTML:return Se(n,"HTML")?be(n):Lr(this._doc,String(n)).toString();case ne.STYLE:return Se(n,"Style")?be(n):n;case ne.SCRIPT:if(Se(n,"Script"))return be(n);throw new D(5200,!1);case ne.URL:return Se(n,"URL")?be(n):Nr(String(n));case ne.RESOURCE_URL:if(Se(n,"ResourceURL"))return be(n);throw new D(5201,!1);default:throw new D(5202,!1)}}bypassSecurityTrustHtml(e){return Sr(e)}bypassSecurityTrustStyle(e){return Fr(e)}bypassSecurityTrustScript(e){return Rr(e)}bypassSecurityTrustUrl(e){return xr(e)}bypassSecurityTrustResourceUrl(e){return Or(e)}static \u0275fac=function(n){return new(n||t)(p(y))};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ot(t){return t.buttons===0||t.detail===0}function at(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Hn;function $i(){if(Hn==null){let t=typeof document<"u"?document.head:null;Hn=!!(t&&(t.createShadowRoot||t.attachShadow))}return Hn}function Gn(t){if($i()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function Wn(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}function Q(t){return t.composedPath?t.composedPath()[0]:t.target}var Kn;try{Kn=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){Kn=!1}var L=(()=>{class t{_platformId=c(Ie);isBrowser=this._platformId?_i(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var st;function Vi(){if(st==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>st=!0}))}finally{st=st||!1}return st}function Pe(t){return Vi()?t:!!t.capture}function Zn(t,r=0){return Hi(t)?Number(t):arguments.length===2?r:0}function Hi(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function te(t){return t instanceof B?t.nativeElement:t}var Gi=new h("cdk-input-modality-detector-options"),Wi={ignoreKeys:[18,17,224,91,16]},Ki=650,Yn={passive:!0,capture:!0},Zi=(()=>{class t{_platform=c(L);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new fr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Q(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ki||(this._modality.next(ot(e)?"keyboard":"mouse"),this._mostRecentTarget=Q(e))};_onTouchstart=e=>{if(at(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Q(e)};constructor(){let e=c(S),n=c(y),i=c(Gi,{optional:!0});if(this._options=C(C({},Wi),i),this.modalityDetected=this._modality.pipe(ht(1)),this.modalityChanged=this.modalityDetected.pipe(yr()),this._platform.isBrowser){let o=c(Re).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Yn),o.listen(n,"mousedown",this._onMousedown,Yn),o.listen(n,"touchstart",this._onTouchstart,Yn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ct=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ct||{}),Yi=new h("cdk-focus-monitor-default-options"),Vt=Pe({passive:!0,capture:!0}),Ht=(()=>{class t{_ngZone=c(S);_platform=c(L);_inputModalityDetector=c(Zi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(y);_stopInputModalityDetector=new P;constructor(){let e=c(Yi,{optional:!0});this._detectionMode=e?.detectionMode||ct.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Q(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=te(e);if(!this._platform.isBrowser||i.nodeType!==1)return ze();let o=Gn(i)||this._document,a=this._elementInfo.get(i);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new P,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=te(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=te(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,u])=>this._originChanged(s,n,u)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ct.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===ct.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Ki:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=Q(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Vt),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Vt)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Vt),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Vt),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ls=(()=>{class t{_elementRef=c(B);_focusMonitor=c(Ht);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new ue;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(n=>{this._focusOrigin=n,this.cdkFocusChange.emit(n)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return t})();var Gt=new WeakMap,se=(()=>{class t{_appRef;_injector=c(j);_environmentInjector=c(Ve);load(e){let n=this._appRef=this._appRef||this._injector.get(dn),i=Gt.get(n);i||(i={loaders:new Set,refs:[]},Gt.set(n,i),n.onDestroy(()=>{Gt.get(n)?.refs.forEach(o=>o.destroy()),Gt.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Hr(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Wt;function ms(){if(Wt===void 0&&(Wt=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Wt=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Wt}function fs(t){return ms()?.createHTML(t)||t}function Xi(t,r,e){let n=e.sanitize(ne.HTML,r);t.innerHTML=fs(n||"")}function Xn(t){return Array.isArray(t)?t:[t]}var Ji=new Set,Ee,Zt=(()=>{class t{_platform=c(L);_nonce=c(Me,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ps}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&hs(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hs(t,r){if(!Ji.has(t))try{Ee||(Ee=document.createElement("style"),r&&Ee.setAttribute("nonce",r),Ee.setAttribute("type","text/css"),document.head.appendChild(Ee)),Ee.sheet&&(Ee.sheet.insertRule(`@media ${t} {body{ }}`,0),Ji.add(t))}catch(e){console.error(e)}}function ps(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Jn=(()=>{class t{_mediaMatcher=c(Zt);_zone=c(S);_queries=new Map;_destroySubject=new P;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return qi(Xn(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=qi(Xn(e)).map(a=>this._registerQuery(a).observable),o=hr(i);return o=pr(o.pipe(br(1)),o.pipe(ht(1),Te(0))),o.pipe(W(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:u,query:d})=>{s.matches=s.matches||u,s.breakpoints[d]=u}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new Ae(a=>{let s=u=>this._zone.run(()=>a.next(u));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(vr(n),W(({matches:a})=>({query:e,matches:a})),pt(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function qi(t){return t.map(r=>r.split(",")).reduce((r,e)=>r.concat(e)).map(r=>r.trim())}function gs(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}var Qi=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eo=(()=>{class t{_mutationObserverFactory=c(Qi);_observedElements=new Map;_ngZone=c(S);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=te(e);return new Ae(i=>{let a=this._observeElement(n).pipe(W(s=>s.filter(u=>!gs(u))),Ce(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{i.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new P,i=this._mutationObserverFactory.create(o=>n.next(o));i&&i.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:i,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:i}=this._observedElements.get(e);n&&n.disconnect(),i.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Yl=(()=>{class t{_contentObserver=c(eo);_elementRef=c(B);event=new ue;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Zn(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Te(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",K],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),to=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({providers:[Qi]})}return t})();var oo=(()=>{class t{_platform=c(L);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return ys(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=bs(Ts(e));if(n&&(no(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),o=no(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!As(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Cs(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bs(t){try{return t.frameElement}catch(r){return null}}function ys(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function vs(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function _s(t){return Es(t)&&t.type=="hidden"}function Ds(t){return ws(t)&&t.hasAttribute("href")}function Es(t){return t.nodeName.toLowerCase()=="input"}function ws(t){return t.nodeName.toLowerCase()=="a"}function ao(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function no(t){if(!ao(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function As(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function Cs(t){return _s(t)?!1:vs(t)||Ds(t)||t.hasAttribute("contenteditable")||ao(t)}function Ts(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Yt=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,i,o=!1,a){this._element=r,this._checker=e,this._ngZone=n,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?kr(r,{injector:this._injector}):setTimeout(r)}},so=(()=>{class t{_checker=c(oo);_ngZone=c(S);_document=c(y);_injector=c(j);constructor(){c(se).load(Kt)}create(e,n=!1){return new Yt(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Is=(()=>{class t{_elementRef=c(B);_focusTrapFactory=c(so);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){c(L).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let n=e.autoCapture;n&&!n.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Wn(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",K],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",K]},exportAs:["cdkTrapFocus"],features:[gt]})}return t})(),co=new h("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),uo=new h("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ms=0,Ss=(()=>{class t{_ngZone=c(S);_defaultOptions=c(uo,{optional:!0});_liveElement;_document=c(y);_sanitizer=c(Vn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(co,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let i=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=i&&i.politeness?i.politeness:"polite"),a==null&&i&&(a=i.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Xi(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),i=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return i.classList.add(e),i.classList.add("cdk-visually-hidden"),i.setAttribute("aria-atomic","true"),i.setAttribute("aria-live","polite"),i.id=`cdk-live-announcer-${Ms++}`,this._document.body.appendChild(i),i}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<n.length;i++){let o=n[i],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fe=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(fe||{}),ro="cdk-high-contrast-black-on-white",io="cdk-high-contrast-white-on-black",qn="cdk-high-contrast-active",lo=(()=>{class t{_platform=c(L);_hasCheckedHighContrastMode=!1;_document=c(y);_breakpointSubscription;constructor(){this._breakpointSubscription=c(Jn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return fe.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,i=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return fe.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return fe.BLACK_ON_WHITE}return fe.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(qn,ro,io),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===fe.BLACK_ON_WHITE?e.add(qn,ro):n===fe.WHITE_ON_BLACK&&e.add(qn,io)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fs=(()=>{class t{constructor(){c(lo)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({imports:[to]})}return t})();var Rs=200,Xt=class{_letterKeyStream=new P;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new P;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:Rs;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(Dr(e=>this._pressedLetters.push(e)),Te(r),Ce(()=>this._pressedLetters.length>0),W(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function mo(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ke=class{_items;_activeItemIndex=pe(-1);_activeItem=pe(null);_wrap=!1;_typeaheadSubscription=mr.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof cn?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):_t(r)&&(this._effectRef=Cr(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new P;change=new P;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Xt(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||mo(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r=="number"?r:e.indexOf(r),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+r*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return _t(this._items)?this._items():this._items instanceof cn?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Qn=class extends ke{setActiveItem(r){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(r),this.activeItem&&this.activeItem.setActiveStyles()}};var er=class extends ke{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var tr={},nr=class t{_appId=c(ge);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),tr.hasOwnProperty(r)||(tr[r]=0),`${r}${e?t._infix+"-":""}${tr[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})};var ho=" ";function xs(t,r,e){let n=qt(t,r);e=e.trim(),!n.some(i=>i.trim()===e)&&(n.push(e),t.setAttribute(r,n.join(ho)))}function Os(t,r,e){let n=qt(t,r);e=e.trim();let i=n.filter(o=>o!==e);i.length?t.setAttribute(r,i.join(ho)):t.removeAttribute(r)}function qt(t,r){return t.getAttribute(r)?.match(/\S+/g)??[]}var po="cdk-describedby-message",Jt="cdk-describedby-host",ir=0,Km=(()=>{class t{_platform=c(L);_document=c(y);_messageRegistry=new Map;_messagesContainer=null;_id=`${ir++}`;constructor(){c(se).load(Kt),this._id=c(ge)+"-"+ir++}describe(e,n,i){if(!this._canBeDescribed(e,n))return;let o=rr(n,i);typeof n!="string"?(fo(n,this._id),this._messageRegistry.set(o,{messageElement:n,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(n,i),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,n,i){if(!n||!this._isElementNode(e))return;let o=rr(n,i);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof n=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Jt}="${this._id}"]`);for(let n=0;n<e.length;n++)this._removeCdkDescribedByReferenceIds(e[n]),e[n].removeAttribute(Jt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,n){let i=this._document.createElement("div");fo(i,this._id),i.textContent=e,n&&i.setAttribute("role",n),this._createMessagesContainer(),this._messagesContainer.appendChild(i),this._messageRegistry.set(rr(e,n),{messageElement:i,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",n=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<n.length;o++)n[o].remove();let i=this._document.createElement("div");i.style.visibility="hidden",i.classList.add(e),i.classList.add("cdk-visually-hidden"),this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._messagesContainer=i}_removeCdkDescribedByReferenceIds(e){let n=qt(e,"aria-describedby").filter(i=>i.indexOf(po)!=0);e.setAttribute("aria-describedby",n.join(" "))}_addMessageReference(e,n){let i=this._messageRegistry.get(n);xs(e,"aria-describedby",i.messageElement.id),e.setAttribute(Jt,this._id),i.referenceCount++}_removeMessageReference(e,n){let i=this._messageRegistry.get(n);i.referenceCount--,Os(e,"aria-describedby",i.messageElement.id),e.removeAttribute(Jt)}_isElementDescribedByMessage(e,n){let i=qt(e,"aria-describedby"),o=this._messageRegistry.get(n),a=o&&o.messageElement.id;return!!a&&i.indexOf(a)!=-1}_canBeDescribed(e,n){if(!this._isElementNode(e))return!1;if(n&&typeof n=="object")return!0;let i=n==null?"":`${n}`.trim(),o=e.getAttribute("aria-label");return i?!o||o.trim()!==i:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function rr(t,r){return typeof t=="string"?`${r||""}/${t}`:t}function fo(t,r){t.id||(t.id=`${po}-${r}-${ir++}`)}var ut=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(ut||{}),Qt,we;function tf(){if(we==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return we=!1,we;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)we=!0;else{let t=Element.prototype.scrollTo;t?we=!/\{\s*\[native code\]\s*\}/.test(t.toString()):we=!1}}return we}function nf(){if(typeof document!="object"||!document)return ut.NORMAL;if(Qt==null){let t=document.createElement("div"),r=t.style;t.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Qt=ut.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Qt=t.scrollLeft===0?ut.NEGATED:ut.INVERTED),t.remove()}return Qt}function of(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Be,go=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function sf(){if(Be)return Be;if(typeof document!="object"||!document)return Be=new Set(go),Be;let t=document.createElement("input");return Be=new Set(go.filter(r=>(t.setAttribute("type",r),t.type===r))),Be}var mf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var Ns=new h("MATERIAL_ANIMATIONS"),bo=null;function Ls(){return c(Ns,{optional:!0})?.animationsDisabled||c(Mr,{optional:!0})==="NoopAnimations"?"di-disabled":(bo??=c(Zt).matchMedia("(prefers-reduced-motion)").matches,bo?"reduced-motion":"enabled")}function Ue(){return Ls()!=="enabled"}function yf(t){return t==null?"":typeof t=="string"?t:`${t}px`}function _f(t){return t!=null&&`${t}`!="false"}var Y=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Y||{}),or=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Y.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},yo=Pe({passive:!0,capture:!0}),ar=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,yo)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,yo)))}_delegateEventHandler=r=>{let e=Q(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},dt={enterDuration:225,exitDuration:150},Ps=800,vo=Pe({passive:!0,capture:!0}),_o=["mousedown","touchstart"],Do=["mouseup","mouseleave","touchend","touchcancel"],ks=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),lt=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ar;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=te(n)),o&&o.get(se).load(ks)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},dt),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let a=n.radius||Bs(r,e,i),s=r-i.left,u=e-i.top,d=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${s-a}px`,m.style.top=`${u-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let f=window.getComputedStyle(m),v=f.transitionProperty,_=f.transitionDuration,A=v==="none"||_==="0s"||_==="0s, 0s"||i.width===0&&i.height===0,x=new or(this,m,n,A);m.style.transform="scale3d(1, 1, 1)",x.state=Y.FADING_IN,n.persistent||(this._mostRecentTransientRipple=x);let g=null;return!A&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let b=()=>{g&&(g.fallbackTimer=null),clearTimeout(G),this._finishRippleTransition(x)},M=()=>this._destroyRipple(x),G=setTimeout(M,d+100);m.addEventListener("transitionend",b),m.addEventListener("transitioncancel",M),g={onTransitionEnd:b,onTransitionCancel:M,fallbackTimer:G}}),this._activeRipples.set(x,g),(A||!d)&&this._finishRippleTransition(x),x}fadeOutRipple(r){if(r.state===Y.FADING_OUT||r.state===Y.HIDDEN)return;let e=r.element,n=C(C({},dt),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=Y.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=te(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,_o.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Do.forEach(e=>{this._triggerElement.addEventListener(e,this,vo)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===Y.FADING_IN?this._startFadeOutTransition(r):r.state===Y.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=Y.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=Y.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=ot(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ps;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!at(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===Y.VISIBLE||r.config.terminateOnPointerUp&&r.state===Y.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(_o.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Do.forEach(e=>r.removeEventListener(e,this,vo)),this._pointerUpEventsRegistered=!1))}};function Bs(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var sr=new h("mat-ripple-global-options"),Nf=(()=>{class t{_elementRef=c(B);_animationsDisabled=Ue();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(S),n=c(L),i=c(sr,{optional:!0}),o=c(j);this._globalOptions=i||{},this._rippleRenderer=new lt(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,C(C({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,i){n&2&&ve("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Us={capture:!0},js=["focus","mousedown","mouseenter","touchstart"],cr="mat-ripple-loader-uninitialized",ur="mat-ripple-loader-class-name",Eo="mat-ripple-loader-centered",en="mat-ripple-loader-disabled",wo=(()=>{class t{_document=c(y);_animationsDisabled=Ue();_globalRippleOptions=c(sr,{optional:!0});_platform=c(L);_ngZone=c(S);_injector=c(j);_eventCleanups;_hosts=new Map;constructor(){let e=c(Re).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>js.map(n=>e.listen(this._document,n,this._onInteraction,Us)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(cr,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(ur))&&e.setAttribute(ur,n.className||""),n.centered&&e.setAttribute(Eo,""),n.disabled&&e.setAttribute(en,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(en,""):e.removeAttribute(en)}_onInteraction=e=>{let n=Q(e);if(n instanceof HTMLElement){let i=n.closest(`[${cr}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ur)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??dt.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??dt.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(en),rippleConfig:{centered:e.hasAttribute(Eo),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},u=new lt(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&u.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:u,hasSetUpEvents:d}),e.removeAttribute(cr)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ao=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var zs=["mat-icon-button",""],$s=["*"],Vs=new h("MAT_BUTTON_CONFIG");function Co(t){return t==null?void 0:gn(t)}var tn=(()=>{class t{_elementRef=c(B);_ngZone=c(S);_animationsDisabled=Ue();_config=c(Vs,{optional:!0});_focusMonitor=c(Ht);_cleanupClick;_renderer=c(He);_rippleLoader=c(wo);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(se).load(Ao);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(Dt("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),jr(i.color?"mat-"+i.color:""),ve("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",K],disabled:[2,"disabled","disabled",K],ariaDisabled:[2,"aria-disabled","ariaDisabled",K],disabledInteractive:[2,"disabledInteractive","disabledInteractive",K],tabIndex:[2,"tabIndex","tabIndex",Co],_tabindex:[2,"tabindex","_tabindex",Co]}})}return t})(),Hs=(()=>{class t extends tn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ge],attrs:zs,ngContentSelectors:$s,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(We(),de(0,"span",0),re(1),de(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Gs=new h("cdk-dir-doc",{providedIn:"root",factory:()=>c(y)}),Ws=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function dr(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Ws.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var To=(()=>{class t{get value(){return this.valueSignal()}valueSignal=pe("ltr");change=new ue;constructor(){let e=c(Gs,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(dr(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lh=(()=>{class t{_isInitialized=!1;_rawDir="";change=new ue;get dir(){return this.valueSignal()}set dir(e){let n=this.valueSignal();this.valueSignal.set(dr(e)),this._rawDir=e,n!==this.valueSignal()&&this._isInitialized&&this.change.emit(this.valueSignal())}get value(){return this.dir}valueSignal=pe("ltr");ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=O({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(n,i){n&2&&Dt("dir",i._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[zr([{provide:To,useExisting:t}])]})}return t})(),nn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({})}return t})();var Io=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({imports:[nn]})}return t})();var Ks=["matButton",""],So=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Fo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zs=["mat-mini-fab",""],Ys=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,Mo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ah=(()=>{class t extends tn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Xs(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?Mo.get(this._appearance):null,o=Mo.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ge],attrs:Ks,ngContentSelectors:Fo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(We(So),de(0,"span",0),re(1),ln(2,"span",1),re(3,1),mn(),re(4,2),de(5,"span",2)(6,"span",3)),n&2&&ve("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Xs(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var Js=new h("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>lr}),lr={color:"accent"};var Ch=(()=>{class t extends tn{_options=c(Js,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||lr,this.color=this._options.color||lr.color}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=X({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[Ge],attrs:Zs,ngContentSelectors:Fo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(We(So),de(0,"span",0),re(1),ln(2,"span",1),re(3,1),mn(),re(4,2),de(5,"span",2)(6,"span",3)),n&2&&ve("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[Ys],encapsulation:2,changeDetection:0})}return t})();var Th=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=U({type:t});static \u0275inj=k({imports:[Io,nn]})}return t})();export{ie as a,Ro as b,xe as c,Yr as d,Xr as e,Lo as f,na as g,pi as h,ra as i,ia as j,sa as k,ua as l,da as m,ma as n,fa as o,ga as p,vi as q,_i as r,yu as s,Ln as t,Na as u,ae as v,Bi as w,jn as x,ji as y,cs as z,us as A,Kd as B,Vn as C,To as D,lh as E,nn as F,ot as G,at as H,Wn as I,Q as J,L as K,Zn as L,Hi as M,te as N,Ht as O,ls as P,se as Q,Kt as R,fs as S,Xn as T,Zt as U,Jn as V,Yl as W,to as X,oo as Y,so as Z,Is as _,Ss as $,Fs as aa,mo as ba,Qn as ca,er as da,nr as ea,xs as fa,Os as ga,Km as ha,mf as ia,Ls as ja,Ue as ka,Ao as la,ut as ma,tf as na,nf as oa,of as pa,sf as qa,yf as ra,_f as sa,sr as ta,Nf as ua,Io as va,wo as wa,Hs as xa,Ah as ya,Ch as za,Th as Aa};
