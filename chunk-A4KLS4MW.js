import{a as Di,b as Ti}from"./chunk-3G7PC2PR.js";import{a as Xt}from"./chunk-DZHZUGCV.js";import{a as ii}from"./chunk-OPR62QPU.js";import{a as di,b as si}from"./chunk-APBGYWUF.js";import{a as Si,b as Ii}from"./chunk-NB4DA772.js";import{a as mi,b as pi,c as _i,d as hi,e as ui,f as gi,g as Ci,h as fi,i as vi,j as bi,k as yi,l as xi,m as wi}from"./chunk-U65IQPAE.js";import{g as li}from"./chunk-VYBH6FOW.js";import{b as ri,c as ci}from"./chunk-2RXOYYNJ.js";import{C as lt,E as V,F as dt,L as Zt,P as Ut,S as Wt,T as st,W as mt,Z as Q,_ as J,ba as Yt,da as ti,ea as ei,fa as ni,ga as ai,ia as oi}from"./chunk-I5NEBV7N.js";import{e as Jt}from"./chunk-EU2GYLL2.js";import{F as Kt,H as G,g as jt,n as qt,q as Gt,r as Qt}from"./chunk-R5FBSQFN.js";import{$ as O,A as K,Aa as ht,Bc as zt,Ca as A,Da as Mt,Fc as Ht,Ha as kt,Hb as P,Hc as $t,Ib as g,Jb as C,Lb as bt,Mb as yt,Nb as xt,Ob as _,Pb as r,Qb as c,Qc as Vt,R as et,Rb as k,Rc as Lt,S as Et,Sb as j,Sc as u,T as Z,Tb as $,Tc as Nt,Ub as rt,Vb as S,Wb as I,Wc as X,Ya as ut,Yb as x,Zb as At,Zc as D,_c as St,ab as l,ac as f,ba as F,cc as o,da as p,dc as Y,e as L,ec as z,fb as Ft,fc as wt,g as Tt,gb as gt,gc as ct,hc as T,ic as E,ja as b,jb as Ct,ka as y,kb as ft,kc as Rt,la as _t,lc as Ot,na as nt,nc as Bt,oa as at,oc as R,pc as q,qb as M,qc as m,ra as U,rb as B,rc as h,sa as N,sb as H,sc as v,va as ot,vb as vt,wb as w,za as W,zc as Pt}from"./chunk-W2F4OVTZ.js";import{g as Dt}from"./chunk-TSRGIXR5.js";var $i=["chart"],jn=(()=>{class i{constructor(){this.chart=u(),this.annotations=u(),this.colors=u(),this.dataLabels=u(),this.series=u(),this.stroke=u(),this.labels=u(),this.legend=u(),this.markers=u(),this.noData=u(),this.parsing=u(),this.fill=u(),this.tooltip=u(),this.plotOptions=u(),this.responsive=u(),this.xaxis=u(),this.yaxis=u(),this.forecastDataPoints=u(),this.grid=u(),this.states=u(),this.title=u(),this.subtitle=u(),this.theme=u(),this.autoUpdateSeries=u(!0),this.chartReady=Lt(),this.chartInstance=ot(null),this.chartElement=Nt.required("chart"),this.ngZone=p(N),this.isBrowser=Qt(p(kt)),this._destroyed=!1,this._injector=p(nt),this.waitingForConnectedRef=null}ngOnChanges(t){this.isBrowser&&this.hydrate(t)}ngOnDestroy(){this.destroy(),this._destroyed=!0}get isConnected(){return this.chartElement()?.nativeElement.isConnected}hydrate(t){if(this.waitingForConnectedRef)return;if(this.chartInstance()&&this.autoUpdateSeries()&&Object.keys(t).filter(n=>n!=="series").length===0){this.updateSeries(this.series(),!0);return}gt({read:()=>this.createElement()},{injector:this._injector})}importApexCharts(){return import("./chunk-22U2XI7I.js")}createElement(){return Dt(this,null,function*(){let{default:t}=yield this.importApexCharts();if(window.ApexCharts||=t,this._destroyed)return;if(!this.isConnected){this.waitForConnected();return}let e={};["annotations","chart","colors","dataLabels","series","stroke","labels","legend","fill","tooltip","plotOptions","responsive","markers","noData","parsing","xaxis","yaxis","forecastDataPoints","grid","states","title","subtitle","theme"].forEach(s=>{let it=this[s]();it&&(e[s]=it)}),this.destroy();let d=this.ngZone.runOutsideAngular(()=>new t(this.chartElement().nativeElement,e));this.chartInstance.set(d),this.render(),this.chartReady.emit({chartObj:d})})}render(){if(this.isConnected)return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.render());this.waitForConnected()}updateOptions(t,e,n,d){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateOptions(t,e,n,d))}updateSeries(t,e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateSeries(t,e))}appendSeries(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendSeries(t,e))}appendData(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendData(t))}highlightSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.highlightSeries(t))}toggleSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleSeries(t))}showSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.showSeries(t))}hideSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.hideSeries(t))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.resetSeries())}zoomX(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.zoomX(t,e))}toggleDataPointSelection(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleDataPointSelection(t,e))}destroy(){this.chartInstance()?.destroy(),this.chartInstance.set(null)}setLocale(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.setLocale(t))}paper(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.paper())}addXaxisAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addXaxisAnnotation(t,e,n))}addYaxisAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addYaxisAnnotation(t,e,n))}addPointAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addPointAnnotation(t,e,n))}removeAnnotation(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.removeAnnotation(t,e))}clearAnnotations(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.clearAnnotations(t))}dataURI(t){return this.chartInstance()?.dataURI(t)}waitForConnected(){this.waitingForConnectedRef||(this.waitingForConnectedRef=Ft({read:()=>{this.isConnected&&(this.waitingForConnectedRef.destroy(),this.waitingForConnectedRef=null,this.createElement())}},{injector:this._injector}))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=M({type:i,selectors:[["apx-chart"]],viewQuery:function(e,n){e&1&&Rt(n.chartElement,$i,5),e&2&&Ot()},inputs:{chart:[1,"chart"],annotations:[1,"annotations"],colors:[1,"colors"],dataLabels:[1,"dataLabels"],series:[1,"series"],stroke:[1,"stroke"],labels:[1,"labels"],legend:[1,"legend"],markers:[1,"markers"],noData:[1,"noData"],parsing:[1,"parsing"],fill:[1,"fill"],tooltip:[1,"tooltip"],plotOptions:[1,"plotOptions"],responsive:[1,"responsive"],xaxis:[1,"xaxis"],yaxis:[1,"yaxis"],forecastDataPoints:[1,"forecastDataPoints"],grid:[1,"grid"],states:[1,"states"],title:[1,"title"],subtitle:[1,"subtitle"],theme:[1,"theme"],autoUpdateSeries:[1,"autoUpdateSeries"]},outputs:{chartReady:"chartReady"},features:[W],decls:2,vars:0,consts:[["chart",""]],template:function(e,n){e&1&&rt(0,"div",null,0)},encapsulation:2,changeDetection:0})}}return i})();var qn=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=B({type:i})}static{this.\u0275inj=O({})}}return i})();var Li=["mat-sort-header",""],Ni=["*",[["","matSortHeaderIcon",""]]],ji=["*","[matSortHeaderIcon]"];function qi(i,a){i&1&&(_t(),j(0,"svg",3),rt(1,"path",4),$())}function Gi(i,a){i&1&&(j(0,"div",2),z(1,1,null,qi,2,0),$())}var Ei=new F("MAT_SORT_DEFAULT_OPTIONS"),tt=(()=>{class i{_defaultOptions;_initializedStream=new Tt(1);sortables=new Map;_stateChanges=new L;active;start="asc";get direction(){return this._direction}set direction(t){this._direction=t}_direction="";disableClear;disabled=!1;sortChange=new U;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=Qi(t.start||this.start,e),d=n.indexOf(this.direction)+1;return d>=n.length&&(d=0),n[d]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(e){return new(e||i)(ft(Ei,8))};static \u0275dir=H({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",D],disabled:[2,"matSortDisabled","disabled",D]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[W]})}return i})();function Qi(i,a){let t=["asc","desc"];return i=="desc"&&t.reverse(),a||t.push(""),t}var Mi=(()=>{class i{_sort=p(tt,{optional:!0});_columnDef=p(mi,{optional:!0});_changeDetectorRef=p(X);_focusMonitor=p(lt);_elementRef=p(A);_ariaDescriber=p(mt,{optional:!0});_renderChanges;_animationsDisabled=Q();_recentlyCleared=ot(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription="Sort";disableClear;constructor(){p(V).load(J);let t=p(Ei,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=K(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),e=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?e:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,n){e&1&&f("click",function(){return n._toggleOnInteraction()})("keydown",function(s){return n._handleKeydown(s)})("mouseleave",function(){return n._recentlyCleared.set(null)}),e&2&&(P("aria-sort",n._getAriaSortAttribute()),R("mat-sort-header-disabled",n._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",D],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",D]},exportAs:["matSortHeader"],attrs:Li,ngContentSelectors:ji,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(e,n){e&1&&(Y(Ni),j(0,"div",0)(1,"div",1),z(2),$(),g(3,Gi,3,0,"div",2),$()),e&2&&(R("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before",n.arrowPosition==="before")("mat-sort-header-descending",n._sort.direction==="desc")("mat-sort-header-ascending",n._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",n._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",n._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",n._animationsDisabled),P("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),l(3),C(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),ki=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=O({imports:[G]})}return i})();var Zi=i=>({"d-none":i});function Ui(i,a){if(i&1){let t=x();r(0,"mat-header-cell")(1,"mat-checkbox",9),f("change",function(n){b(t);let d=o();return y(n?d.masterToggle():null)}),c()()}if(i&2){let t=o();l(),_("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("ngClass","tbl-checkbox")}}function Wi(i,a){if(i&1){let t=x();r(0,"mat-cell")(1,"mat-checkbox",10),f("click",function(n){return n.stopPropagation()})("change",function(n){let d=b(t).$implicit,s=o();return y(n?s.selection.toggle(d):null)}),c()()}if(i&2){let t=a.$implicit,e=o();l(),_("checked",e.selection.isSelected(t))("ngClass","tbl-checkbox")}}function Yi(i,a){}function Xi(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(3).$implicit;l(2),h(t.label)}}function Ji(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(4);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),k(3,"img",18),r(4,"span",15),m(5),c()()}if(i&2){let t=a.$implicit,e=o(3).$implicit;_("matTooltip",t.name),l(2),v("",e.label,":"),l(),_("src",t.img,ut),l(2),v(" ",t.name," ")}}function te(i,a){if(i&1&&(S(0,11),w(1,Xi,3,1,"mat-header-cell",12)(2,Ji,6,4,"mat-cell",13),I()),i&2){let t=o(2).$implicit;_("matColumnDef",t.def)}}function ie(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(4).$implicit;l(2),h(t.label)}}function ee(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(5);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"mat-icon",19),m(4,"call"),c(),r(5,"span",15),m(6),c()()}if(i&2){let t=a.$implicit,e=o(4).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function ne(i,a){if(i&1&&(S(0,11),w(1,ie,3,1,"mat-header-cell",12)(2,ee,7,3,"mat-cell",13),I()),i&2){let t=o(3).$implicit;_("matColumnDef",t.def)}}function ae(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(5).$implicit;l(2),h(t.label)}}function oe(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(6);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"mat-icon",20),m(4,"mail"),c(),r(5,"span",15),m(6),c()()}if(i&2){let t=a.$implicit,e=o(5).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function re(i,a){if(i&1&&(S(0,11),w(1,ae,3,1,"mat-header-cell",12)(2,oe,7,3,"mat-cell",13),I()),i&2){let t=o(4).$implicit;_("matColumnDef",t.def)}}function ce(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(6).$implicit;l(2),h(t.label)}}function le(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(7);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"mat-icon",21),m(4,"place"),c(),r(5,"span",15),m(6),c()()}if(i&2){let t=a.$implicit,e=o(6).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function de(i,a){if(i&1&&(S(0,11),w(1,ce,3,1,"mat-header-cell",12)(2,le,7,3,"mat-cell",13),I()),i&2){let t=o(5).$implicit;_("matColumnDef",t.def)}}function se(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(7).$implicit;l(2),h(t.label)}}function me(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(8);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"button",22),f("click",function(n){return n.stopPropagation()}),k(4,"app-feather-icons",23),c()()}if(i&2){let t=a.$implicit,e=o(7).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(2),q("tbl-fav-edit"),_("icon","file-text")}}function pe(i,a){if(i&1&&(S(0,11),w(1,se,3,1,"mat-header-cell",12)(2,me,5,5,"mat-cell",13),I()),i&2){let t=o(6).$implicit;_("matColumnDef",t.def)}}function _e(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(8).$implicit;l(2),h(t.label)}}function he(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(9);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"button",24),f("click",function(n){return n.stopPropagation()}),m(4,"Details"),c()()}if(i&2){let t=a.$implicit,e=o(8).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":")}}function ue(i,a){if(i&1&&(S(0,11),w(1,_e,3,1,"mat-header-cell",12)(2,he,5,2,"mat-cell",13),I()),i&2){let t=o(7).$implicit;_("matColumnDef",t.def)}}function ge(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(9).$implicit;l(2),h(t.label)}}function Ce(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function fe(i,a){if(i&1&&(r(0,"div")(1,"span",28),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ve(i,a){if(i&1&&(r(0,"div")(1,"span",29),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function be(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ye(i,a){if(i&1&&(r(0,"div")(1,"span",30),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function xe(i,a){if(i&1&&(r(0,"div")(1,"span",30),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function we(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Se(i,a){if(i&1&&(r(0,"div")(1,"span",31),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Ie(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function De(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Te(i,a){if(i&1&&(r(0,"div")(1,"span",29),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Ee(i,a){if(i&1&&(r(0,"div")(1,"span",29),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Me(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,s=o(10);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"div"),g(4,Ce,3,1,"div")(5,fe,3,1,"div")(6,ve,3,1,"div")(7,be,3,1,"div")(8,ye,3,1,"div")(9,xe,3,1,"div")(10,we,3,1,"div")(11,Se,3,1,"div")(12,Ie,3,1,"div")(13,De,3,1,"div")(14,Te,3,1,"div")(15,Ee,3,1,"div"),c()()}if(i&2){let t,e=a.$implicit,n=o(9).$implicit;l(2),v("",n.label,":"),l(2),C((t=e.status)==="Paid"?4:t==="Not Paid"?5:t==="Partially Paid"?6:t==="Issue"?7:t==="Return"?8:t==="In Progress"?9:t==="Completed"?10:t==="Pending"?11:t==="Approve"?12:t==="Confirmed"?13:t==="Reject"?14:t==="Not Started"?15:-1)}}function ke(i,a){if(i&1&&(S(0,11),w(1,ge,3,1,"mat-header-cell",12)(2,Me,16,2,"mat-cell",25),I()),i&2){let t=o(8).$implicit;_("matColumnDef",t.def)}}function Fe(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(10).$implicit;l(2),h(t.label)}}function Ae(i,a){i&1&&(r(0,"div")(1,"mat-icon",20),m(2,"keyboard_double_arrow_up"),c()())}function Re(i,a){i&1&&(r(0,"div")(1,"mat-icon",32),m(2,"keyboard_arrow_up"),c()())}function Oe(i,a){i&1&&(r(0,"div")(1,"mat-icon",19),m(2,"keyboard_arrow_down"),c()())}function Be(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(11);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),g(3,Ae,3,0,"div"),g(4,Re,3,0,"div"),g(5,Oe,3,0,"div"),r(6,"span",15),m(7),c()()}if(i&2){let t=a.$implicit,e=o(10).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(),C(t[e.def]==="High"?3:-1),l(),C(t[e.def]==="Medium"?4:-1),l(),C(t[e.def]==="Low"?5:-1),l(2),h(t[e.def])}}function Pe(i,a){if(i&1&&(S(0,11),w(1,Fe,3,1,"mat-header-cell",12)(2,Be,8,6,"mat-cell",13),I()),i&2){let t=o(9).$implicit;_("matColumnDef",t.def)}}function ze(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(11).$implicit;l(2),h(t.label)}}function He(i,a){if(i&1&&(r(0,"div")(1,"span",27),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.gender)}}function $e(i,a){if(i&1&&(r(0,"div")(1,"span",30),m(2),c()()),i&2){let t=o().$implicit;l(2),h(t.gender)}}function Ve(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,s=o(12);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"div"),g(4,He,3,1,"div")(5,$e,3,1,"div"),c()()}if(i&2){let t,e=a.$implicit,n=o(11).$implicit;l(2),v("",n.label,":"),l(2),C((t=e.gender)==="Male"?4:t==="Female"?5:-1)}}function Le(i,a){if(i&1&&(S(0,11),w(1,ze,3,1,"mat-header-cell",12)(2,Ve,6,2,"mat-cell",25),I()),i&2){let t=o(10).$implicit;_("matColumnDef",t.def)}}function Ne(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(12).$implicit;l(2),h(t.label)}}function je(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,s=o(13);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"mat-icon",33),m(4,"calendar_today"),c(),r(5,"span",15),m(6),Ht(7,"date"),c()()}if(i&2){let t=a.$implicit,e=o(12).$implicit;l(2),v("",e.label,":"),l(4),v(" ",$t(7,2,t[e.def],"MM/dd/yyyy")," ")}}function qe(i,a){if(i&1&&(S(0,11),w(1,Ne,3,1,"mat-header-cell",12)(2,je,8,5,"mat-cell",25),I()),i&2){let t=o(11).$implicit;_("matColumnDef",t.def)}}function Ge(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(13).$implicit;l(2),h(t.label)}}function Qe(i,a){if(i&1&&(r(0,"li",36),k(1,"img",38),c()),i&2){let t=a.$implicit,e=a.$index;_("ngClass",zt(3,Zi,e>=3)),l(),_("src","assets/images/user/"+t.avatar,ut)("alt",t.name)}}function Ke(i,a){if(i&1&&(r(0,"li",37)(1,"span",39),m(2),c()()),i&2){let t=o(2).$implicit;l(2),v("+",t.employeesTeam.length-3)}}function Ze(i,a){if(i&1&&(r(0,"ul",34),yt(1,Qe,2,5,"li",36,bt),g(3,Ke,3,1,"li",37),c()),i&2){let t=o().$implicit;l(),xt(t.employeesTeam),l(2),C(t.employeesTeam.length>3?3:-1)}}function Ue(i,a){i&1&&(r(0,"span",35),m(1," No employees in team. "),c())}function We(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,s=o(14);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"span",15),g(4,Ze,4,1,"ul",34),g(5,Ue,2,0,"span",35),c()()}if(i&2){let t=a.$implicit,e=o(13).$implicit;l(2),v("",e.label,":"),l(2),C((t.employeesTeam==null?null:t.employeesTeam.length)>0?4:-1),l(),C((t[e.def]==null||t[e.def].employeesTeam==null?null:t[e.def].employeesTeam.length)===0?5:-1)}}function Ye(i,a){if(i&1&&(S(0,11),w(1,Ge,3,1,"mat-header-cell",12)(2,We,6,3,"mat-cell",25),I()),i&2){let t=o(12).$implicit;_("matColumnDef",t.def)}}function Xe(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(14).$implicit;l(2),h(t.label)}}function Je(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,s=o(15);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),k(3,"mat-progress-bar",40),c()}if(i&2){let t=a.$implicit,e=o(14).$implicit,n=o();_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(),_("value",t[e.def])("color",n.getProgressBarColor(t[e.def]))}}function tn(i,a){if(i&1&&(S(0,11),w(1,Xe,3,1,"mat-header-cell",12)(2,Je,4,4,"mat-cell",13),I()),i&2){let t=o(13).$implicit;_("matColumnDef",t.def)}}function en(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),m(2),c()()),i&2){let t=o(14).$implicit;l(2),h(t.label)}}function nn(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,s=o(15);return y(s.onContextMenu(n,d))}),r(1,"span",17),m(2),c(),r(3,"span",15),m(4),c()()}if(i&2){let t=a.$implicit,e=o(14).$implicit;l(2),v("",e.label,":"),l(2),h(t[e.def])}}function an(i,a){if(i&1&&(S(0,11),w(1,en,3,1,"mat-header-cell",12)(2,nn,5,2,"mat-cell",25),I()),i&2){let t=o(13).$implicit;_("matColumnDef",t.def)}}function on(i,a){if(i&1&&g(0,tn,3,1,"ng-container",11)(1,an,3,1,"ng-container",11),i&2){let t=o(12).$implicit;C(t.type==="progressBar"?0:1)}}function rn(i,a){if(i&1&&g(0,Ye,3,1,"ng-container",11)(1,on,2,1),i&2){let t=o(11).$implicit;C(t.type==="team"?0:1)}}function cn(i,a){if(i&1&&g(0,qe,3,1,"ng-container",11)(1,rn,2,1),i&2){let t=o(10).$implicit;C(t.type==="date"?0:1)}}function ln(i,a){if(i&1&&g(0,Le,3,1,"ng-container",11)(1,cn,2,1),i&2){let t=o(9).$implicit;C(t.def==="gender"?0:1)}}function dn(i,a){if(i&1&&g(0,Pe,3,1,"ng-container",11)(1,ln,2,1),i&2){let t=o(8).$implicit;C(t.type==="priority"?0:1)}}function sn(i,a){if(i&1&&g(0,ke,3,1,"ng-container",11)(1,dn,2,1),i&2){let t=o(7).$implicit;C(t.def==="status"?0:1)}}function mn(i,a){if(i&1&&g(0,ue,3,1,"ng-container",11)(1,sn,2,1),i&2){let t=o(6).$implicit;C(t.type==="button"?0:1)}}function pn(i,a){if(i&1&&g(0,pe,3,1,"ng-container",11)(1,mn,2,1),i&2){let t=o(5).$implicit;C(t.type==="file"?0:1)}}function _n(i,a){if(i&1&&g(0,de,3,1,"ng-container",11)(1,pn,2,1),i&2){let t=o(4).$implicit;C(t.type==="address"?0:1)}}function hn(i,a){if(i&1&&g(0,re,3,1,"ng-container",11)(1,_n,2,1),i&2){let t=o(3).$implicit;C(t.type==="email"?0:1)}}function un(i,a){if(i&1&&g(0,ne,3,1,"ng-container",11)(1,hn,2,1),i&2){let t=o(2).$implicit;C(t.type==="phone"?0:1)}}function gn(i,a){if(i&1&&g(0,te,3,1,"ng-container",11)(1,un,2,1),i&2){let t=o().$implicit;C(t.def==="name"?0:1)}}function Cn(i,a){if(i&1&&g(0,Yi,0,0)(1,gn,2,1),i&2){let t=a.$implicit;C(t.type==="check"||t.type==="actionBtn"?0:1)}}function fn(i,a){i&1&&(r(0,"mat-header-cell",41),m(1,"Actions"),c())}function vn(i,a){if(i&1){let t=x();r(0,"mat-cell",41)(1,"button",42),f("click",function(n){return n.stopPropagation()})("click",function(){let n=b(t).$implicit,d=o();return y(d.editCall(n))}),k(2,"app-feather-icons",23),c(),r(3,"button",42),f("click",function(n){return n.stopPropagation()})("click",function(){let n=b(t).$implicit,d=o();return y(d.deleteItem(n))}),k(4,"app-feather-icons",23),c()()}i&2&&(l(2),q("tbl-fav-edit"),_("icon","edit"),l(2),q("tbl-fav-delete"),_("icon","trash-2"))}function bn(i,a){i&1&&k(0,"mat-header-row")}function yn(i,a){if(i&1){let t=x();r(0,"mat-row",43),f("click",function(){let n=b(t).$implicit,d=o();return y(d.editCall(n))}),c()}i&2&&(Bt("cursor","pointer"),_("@rowsAnimation",void 0))}var Aa=(()=>{class i{constructor(){this.dataSource=u([]),this.columnDefinitions=u([]),this.selection=new Jt(!0,[]),this.displayedColumns=[]}ngOnInit(){this.dataSourceTable=new wi(this.dataSource()),this.setDisplayedColumns(),this.dataSourceTable.sort=this.sort}setDisplayedColumns(){this.displayedColumns=[...this.columnDefinitions().filter(t=>t.visible!==!1).map(t=>t.def)]}isAllSelected(){let t=this.selection.selected.length,e=this.dataSourceTable.data.length;return t===e}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSourceTable.data.forEach(t=>this.selection.select(t))}editCall(t){}deleteItem(t){}onContextMenu(t,e){}getProgressBarColor(t){return t<50?"warn":t>=50&&t<=70?"accent":"primary"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=M({type:i,selectors:[["app-table-card"]],viewQuery:function(e,n){if(e&1&&ct(tt,5),e&2){let d;T(d=E())&&(n.sort=d.first)}},inputs:{dataSource:[1,"dataSource"],columnDefinitions:[1,"columnDefinitions"]},decls:11,vars:3,consts:[["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],["color","primary",3,"change","checked","indeterminate","ngClass"],["color","primary",3,"click","change","checked","ngClass"],[3,"matColumnDef"],["mat-sort-header","",4,"matHeaderCellDef"],[3,"matTooltip","contextmenu",4,"matCellDef"],["mat-sort-header",""],[1,"truncate-text"],[3,"contextmenu","matTooltip"],[1,"mobile-label"],["alt","image",1,"table-img",3,"src"],[1,"tbl-icon","material-icons-outlined","col-green"],[1,"tbl-icon","material-icons-outlined","col-red"],[1,"tbl-icon","material-icons-outlined","col-blue"],["mat-icon-button","","color","accent",1,"tbl-action-btn",3,"click"],[3,"icon"],["mat-button","","color","primary",3,"click"],[3,"contextmenu",4,"matCellDef"],[3,"contextmenu"],[1,"badge","badge-solid-green"],[1,"badge","badge-solid-red"],[1,"badge","badge-solid-orange"],[1,"badge","badge-solid-purple"],[1,"badge","badge-solid-blue"],[1,"tbl-icon","material-icons-outlined","col-orange"],[1,"tbl-icon","material-icons-outlined","col-brown"],[1,"list-unstyled","order-list"],[1,"no-data"],[1,"avatar","avatar-sm",3,"ngClass"],[1,"avatar","avatar-sm"],[1,"rounded-circle",3,"src","alt"],[1,"badge"],["mode","determinate",3,"value","color"],[1,"pr-0"],["mat-icon-button","","color","accent",3,"click"],["matRipple","",3,"click"]],template:function(e,n){e&1&&(r(0,"table",0),S(1,1),w(2,Ui,2,3,"mat-header-cell",2)(3,Wi,2,2,"mat-cell",3),I(),yt(4,Cn,2,1,null,null,bt),S(6,4),w(7,fn,2,0,"mat-header-cell",5)(8,vn,5,6,"mat-cell",6),I(),w(9,bn,1,0,"mat-header-row",7)(10,yn,1,3,"mat-row",8),c()),e&2&&(_("dataSource",n.dataSource()),l(4),xt(n.columnDefinitions()),l(5),_("matHeaderRowDef",n.displayedColumns),l(),_("matRowDefColumns",n.displayedColumns))},dependencies:[xi,pi,hi,fi,ui,_i,vi,gi,Ci,bi,yi,ki,tt,Mi,si,di,ci,ri,Gt,jt,Ti,Di,Ii,Si,oi,ai,ni,ii,qt],styles:["[_nghost-%COMP%]     .mat-column-stdId{max-width:90px}[_nghost-%COMP%]     .mat-column-employeesTeam{min-width:130px}[_nghost-%COMP%]     .mat-column-id{max-width:90px}[_nghost-%COMP%]     .mat-column-name{min-width:150px}"],data:{animation:[Xt]}})}}return i})();var Fi="mat-badge-content",xn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return i})(),Ga=(()=>{class i{_ngZone=p(N);_elementRef=p(A);_ariaDescriber=p(mt);_renderer=p(Ct);_animationsDisabled=Q();_idGenerator=p(st);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(Zt);_document=p(at);constructor(){let t=p(V);t.load(xn),t.load(dt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Fi),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Fi}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&R("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",D],disabled:[2,"matBadgeDisabled","disabled",D],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",D]}})}return i})(),Qa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=O({imports:[Ut,G]})}return i})();var wn=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Sn=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function In(i,a){i&1&&(r(0,"span",3),z(1,1),c())}function Dn(i,a){i&1&&(r(0,"span",6),z(1,2),c())}var Tn=["*"];var En=new F("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ai=new F("MatChipAvatar"),Ri=new F("MatChipTrailingIcon"),Oi=new F("MatChipEdit"),Bi=new F("MatChipRemove"),Pi=new F("MatChip"),zi=(()=>{class i{_elementRef=p(A);_parentChip=p(Pi);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){p(V).load(J),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=H({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,n){e&2&&(P("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),R("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",D],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:St(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),Mn=(()=>{class i extends zi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(n){return(t||(t=ht(i)))(n||i)}})();static \u0275dir=H({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,n){e&1&&f("click",function(s){return n._handleClick(s)})("keydown",function(s){return n._handleKeydown(s)}),e&2&&(P("tabindex",n._getTabindex()),R("mdc-evolution-chip__action--presentational",!1))},features:[vt]})}return i})();var kn=(()=>{class i{_changeDetectorRef=p(X);_elementRef=p(A);_tagName=p(Vt);_ngZone=p(N);_focusMonitor=p(lt);_globalRippleOptions=p(Yt,{optional:!0});_document=p(at);_onFocus=new L;_onBlur=new L;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Q();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(st).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new U;destroyed=new U;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(ei);_injector=p(nt);constructor(){let t=p(V);t.load(J),t.load(dt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=K(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let n=e._elementRef.nativeElement;return n===t||n.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,n,d){if(e&1&&wt(d,Ai,5)(d,Oi,5)(d,Ri,5)(d,Bi,5)(d,Ai,5)(d,Ri,5)(d,Oi,5)(d,Bi,5),e&2){let s;T(s=E())&&(n.leadingIcon=s.first),T(s=E())&&(n.editIcon=s.first),T(s=E())&&(n.trailingIcon=s.first),T(s=E())&&(n.removeIcon=s.first),T(s=E())&&(n._allLeadingIcons=s),T(s=E())&&(n._allTrailingIcons=s),T(s=E())&&(n._allEditIcons=s),T(s=E())&&(n._allRemoveIcons=s)}},viewQuery:function(e,n){if(e&1&&ct(Mn,5),e&2){let d;T(d=E())&&(n.primaryAction=d.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,n){e&1&&f("keydown",function(s){return n._handleKeydown(s)}),e&2&&(At("id",n.id),P("role",n.role)("aria-label",n.ariaLabel),q("mat-"+(n.color||"primary")),R("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",D],highlighted:[2,"highlighted","highlighted",D],disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Pt([{provide:Pi,useExisting:i}])],ngContentSelectors:Sn,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,n){e&1&&(Y(wn),k(0,"span",0),r(1,"span",1)(2,"span",2),g(3,In,2,0,"span",3),r(4,"span",4),z(5),k(6,"span",5),c()()(),g(7,Dn,2,0,"span",6)),e&2&&(l(3),C(n.leadingIcon?3:-1),l(4),C(n._hasTrailingIcon()?7:-1))},dependencies:[zi],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var bo=(()=>{class i{_elementRef=p(A);_changeDetectorRef=p(X);_dir=p(Kt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new L;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Mt;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(et(null),Et(()=>K(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-mdc-chip"))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(et(this._chips)).subscribe(t=>{let e=[];t.forEach(n=>n._getActions().forEach(d=>e.push(d))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new Wt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(Z(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(Z(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(et(null),Z(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Z(this._destroyed)).subscribe(t=>{let n=this._chips.toArray().indexOf(t.chip),d=t.chip._hasFocus(),s=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),it=d||s;this._isValidIndex(n)&&it&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=M({type:i,selectors:[["mat-chip-set"]],contentQueries:function(e,n,d){if(e&1&&wt(d,kn,5),e&2){let s;T(s=E())&&(n._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(e,n){e&1&&f("keydown",function(s){return n._handleKeydown(s)}),e&2&&P("role",n.role)},inputs:{disabled:[2,"disabled","disabled",D],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:St(t)]},ngContentSelectors:Tn,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,n){e&1&&(Y(),j(0,"div",0),z(1),$())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var yo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=O({providers:[li,{provide:En,useValue:{separatorKeyCodes:[13]}}],imports:[ti,G]})}return i})();export{jn as a,qn as b,tt as c,ki as d,Aa as e,Ga as f,Qa as g,kn as h,bo as i,yo as j};
