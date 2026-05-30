import{a as ni,b as ai}from"./chunk-LVYI3CSG.js";import{h as bi,i as yi}from"./chunk-LKIRZ6YL.js";import{a as Qt}from"./chunk-DZHZUGCV.js";import{a as Ut}from"./chunk-SJQ2JHDL.js";import{a as oi,b as ri,c as ci,d as li,e as di,f as si,g as mi,h as pi,i as _i,j as hi,k as ui,l as gi,m as Ci,n as fi,o as vi}from"./chunk-EG5QDNHL.js";import{g as ei}from"./chunk-ZLMQ4AM6.js";import{e as Kt,i as ti,j as ii}from"./chunk-OCYMLZK7.js";import{Aa as Zt,Ba as Wt,Ca as Yt,Da as Xt,Fa as Jt,K as j,T as ot,V as $,W as rt,ba as jt,e as $t,fa as qt,ja as ct,l as Vt,ma as lt,o as Lt,p as Nt,pa as q,qa as U,ya as Gt}from"./chunk-BRMSKLYN.js";import{$ as R,A as Y,Aa as mt,Bc as At,Ca as O,Fc as Rt,Ha as St,Hb as z,Hc as Ot,Ib as g,Jb as C,Lb as Ct,Mb as ft,Nb as vt,Ob as _,Pb as r,Qb as c,Qc as Bt,Rb as M,Rc as Pt,Sb as Z,Sc as u,Tb as L,Tc as zt,Ub as it,Vb as S,Wb as I,Wc as at,Ya as pt,Yb as x,Zb as Dt,Zc as D,_c as Ht,ab as l,ac as f,ba as F,cc as o,da as p,dc as et,e as G,ec as H,fb as It,fc as Tt,g as wt,gb as _t,gc as nt,hc as T,ic as E,ja as b,jb as ht,ka as y,kb as ut,kc as Et,la as st,lc as Mt,na as X,nc as kt,oa as J,oc as A,pc as N,qb as k,qc as s,ra as Q,rb as B,rc as h,sa as V,sb as P,sc as v,va as tt,vb as gt,wb as w,za as K,zc as Ft}from"./chunk-ES3NKZF7.js";import{g as xt}from"./chunk-TSRGIXR5.js";var Ri=["chart"],Bn=(()=>{class i{constructor(){this.chart=u(),this.annotations=u(),this.colors=u(),this.dataLabels=u(),this.series=u(),this.stroke=u(),this.labels=u(),this.legend=u(),this.markers=u(),this.noData=u(),this.parsing=u(),this.fill=u(),this.tooltip=u(),this.plotOptions=u(),this.responsive=u(),this.xaxis=u(),this.yaxis=u(),this.forecastDataPoints=u(),this.grid=u(),this.states=u(),this.title=u(),this.subtitle=u(),this.theme=u(),this.autoUpdateSeries=u(!0),this.chartReady=Pt(),this.chartInstance=tt(null),this.chartElement=zt.required("chart"),this.ngZone=p(V),this.isBrowser=Nt(p(St)),this._destroyed=!1,this._injector=p(X),this.waitingForConnectedRef=null}ngOnChanges(t){this.isBrowser&&this.hydrate(t)}ngOnDestroy(){this.destroy(),this._destroyed=!0}get isConnected(){return this.chartElement()?.nativeElement.isConnected}hydrate(t){if(this.waitingForConnectedRef)return;if(this.chartInstance()&&this.autoUpdateSeries()&&Object.keys(t).filter(n=>n!=="series").length===0){this.updateSeries(this.series(),!0);return}_t({read:()=>this.createElement()},{injector:this._injector})}importApexCharts(){return import("./chunk-22U2XI7I.js")}createElement(){return xt(this,null,function*(){let{default:t}=yield this.importApexCharts();if(window.ApexCharts||=t,this._destroyed)return;if(!this.isConnected){this.waitForConnected();return}let e={};["annotations","chart","colors","dataLabels","series","stroke","labels","legend","fill","tooltip","plotOptions","responsive","markers","noData","parsing","xaxis","yaxis","forecastDataPoints","grid","states","title","subtitle","theme"].forEach(m=>{let yt=this[m]();yt&&(e[m]=yt)}),this.destroy();let d=this.ngZone.runOutsideAngular(()=>new t(this.chartElement().nativeElement,e));this.chartInstance.set(d),this.render(),this.chartReady.emit({chartObj:d})})}render(){if(this.isConnected)return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.render());this.waitForConnected()}updateOptions(t,e,n,d){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateOptions(t,e,n,d))}updateSeries(t,e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateSeries(t,e))}appendSeries(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendSeries(t,e))}appendData(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendData(t))}highlightSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.highlightSeries(t))}toggleSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleSeries(t))}showSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.showSeries(t))}hideSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.hideSeries(t))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.resetSeries())}zoomX(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.zoomX(t,e))}toggleDataPointSelection(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleDataPointSelection(t,e))}destroy(){this.chartInstance()?.destroy(),this.chartInstance.set(null)}setLocale(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.setLocale(t))}paper(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.paper())}addXaxisAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addXaxisAnnotation(t,e,n))}addYaxisAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addYaxisAnnotation(t,e,n))}addPointAnnotation(t,e,n){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addPointAnnotation(t,e,n))}removeAnnotation(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.removeAnnotation(t,e))}clearAnnotations(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.clearAnnotations(t))}dataURI(t){return this.chartInstance()?.dataURI(t)}waitForConnected(){this.waitingForConnectedRef||(this.waitingForConnectedRef=It({read:()=>{this.isConnected&&(this.waitingForConnectedRef.destroy(),this.waitingForConnectedRef=null,this.createElement())}},{injector:this._injector}))}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=k({type:i,selectors:[["apx-chart"]],viewQuery:function(e,n){e&1&&Et(n.chartElement,Ri,5),e&2&&Mt()},inputs:{chart:[1,"chart"],annotations:[1,"annotations"],colors:[1,"colors"],dataLabels:[1,"dataLabels"],series:[1,"series"],stroke:[1,"stroke"],labels:[1,"labels"],legend:[1,"legend"],markers:[1,"markers"],noData:[1,"noData"],parsing:[1,"parsing"],fill:[1,"fill"],tooltip:[1,"tooltip"],plotOptions:[1,"plotOptions"],responsive:[1,"responsive"],xaxis:[1,"xaxis"],yaxis:[1,"yaxis"],forecastDataPoints:[1,"forecastDataPoints"],grid:[1,"grid"],states:[1,"states"],title:[1,"title"],subtitle:[1,"subtitle"],theme:[1,"theme"],autoUpdateSeries:[1,"autoUpdateSeries"]},outputs:{chartReady:"chartReady"},features:[K],decls:2,vars:0,consts:[["chart",""]],template:function(e,n){e&1&&it(0,"div",null,0)},encapsulation:2,changeDetection:0})}}return i})();var Pn=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=B({type:i})}static{this.\u0275inj=R({})}}return i})();var Bi=["mat-sort-header",""],Pi=["*",[["","matSortHeaderIcon",""]]],zi=["*","[matSortHeaderIcon]"];function Hi(i,a){i&1&&(st(),Z(0,"svg",3),it(1,"path",4),L())}function $i(i,a){i&1&&(Z(0,"div",2),H(1,1,null,Hi,2,0),L())}var xi=new F("MAT_SORT_DEFAULT_OPTIONS"),W=(()=>{class i{_defaultOptions;_initializedStream=new wt(1);sortables=new Map;_stateChanges=new G;active;start="asc";get direction(){return this._direction}set direction(t){this._direction=t}_direction="";disableClear;disabled=!1;sortChange=new Q;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=Vi(t.start||this.start,e),d=n.indexOf(this.direction)+1;return d>=n.length&&(d=0),n[d]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(e){return new(e||i)(ut(xi,8))};static \u0275dir=P({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",D],disabled:[2,"matSortDisabled","disabled",D]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[K]})}return i})();function Vi(i,a){let t=["asc","desc"];return i=="desc"&&t.reverse(),a||t.push(""),t}var wi=(()=>{class i{_sort=p(W,{optional:!0});_columnDef=p(oi,{optional:!0});_changeDetectorRef=p(at);_focusMonitor=p(ot);_elementRef=p(O);_ariaDescriber=p(lt,{optional:!0});_renderChanges;_animationsDisabled=q();_recentlyCleared=tt(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription="Sort";disableClear;constructor(){p($).load(U);let t=p(xi,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=Y(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),e=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?e:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,n){e&1&&f("click",function(){return n._toggleOnInteraction()})("keydown",function(m){return n._handleKeydown(m)})("mouseleave",function(){return n._recentlyCleared.set(null)}),e&2&&(z("aria-sort",n._getAriaSortAttribute()),A("mat-sort-header-disabled",n._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",D],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",D]},exportAs:["matSortHeader"],attrs:Bi,ngContentSelectors:zi,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(e,n){e&1&&(et(Pi),Z(0,"div",0)(1,"div",1),H(2),L(),g(3,$i,3,0,"div",2),L()),e&2&&(A("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before",n.arrowPosition==="before")("mat-sort-header-descending",n._sort.direction==="desc")("mat-sort-header-ascending",n._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",n._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",n._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",n._animationsDisabled),z("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),l(3),C(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2,changeDetection:0})}return i})(),Si=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=R({imports:[j]})}return i})();var Ni=i=>({"d-none":i});function ji(i,a){if(i&1){let t=x();r(0,"mat-header-cell")(1,"mat-checkbox",9),f("change",function(n){b(t);let d=o();return y(n?d.masterToggle():null)}),c()()}if(i&2){let t=o();l(),_("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("ngClass","tbl-checkbox")}}function qi(i,a){if(i&1){let t=x();r(0,"mat-cell")(1,"mat-checkbox",10),f("click",function(n){return n.stopPropagation()})("change",function(n){let d=b(t).$implicit,m=o();return y(n?m.selection.toggle(d):null)}),c()()}if(i&2){let t=a.$implicit,e=o();l(),_("checked",e.selection.isSelected(t))("ngClass","tbl-checkbox")}}function Gi(i,a){}function Qi(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(3).$implicit;l(2),h(t.label)}}function Ki(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(4);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),M(3,"img",18),r(4,"span",15),s(5),c()()}if(i&2){let t=a.$implicit,e=o(3).$implicit;_("matTooltip",t.name),l(2),v("",e.label,":"),l(),_("src",t.img,pt),l(2),v(" ",t.name," ")}}function Zi(i,a){if(i&1&&(S(0,11),w(1,Qi,3,1,"mat-header-cell",12)(2,Ki,6,4,"mat-cell",13),I()),i&2){let t=o(2).$implicit;_("matColumnDef",t.def)}}function Ui(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(4).$implicit;l(2),h(t.label)}}function Wi(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(5);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"mat-icon",19),s(4,"call"),c(),r(5,"span",15),s(6),c()()}if(i&2){let t=a.$implicit,e=o(4).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function Yi(i,a){if(i&1&&(S(0,11),w(1,Ui,3,1,"mat-header-cell",12)(2,Wi,7,3,"mat-cell",13),I()),i&2){let t=o(3).$implicit;_("matColumnDef",t.def)}}function Xi(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(5).$implicit;l(2),h(t.label)}}function Ji(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(6);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"mat-icon",20),s(4,"mail"),c(),r(5,"span",15),s(6),c()()}if(i&2){let t=a.$implicit,e=o(5).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function te(i,a){if(i&1&&(S(0,11),w(1,Xi,3,1,"mat-header-cell",12)(2,Ji,7,3,"mat-cell",13),I()),i&2){let t=o(4).$implicit;_("matColumnDef",t.def)}}function ie(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(6).$implicit;l(2),h(t.label)}}function ee(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(7);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"mat-icon",21),s(4,"place"),c(),r(5,"span",15),s(6),c()()}if(i&2){let t=a.$implicit,e=o(6).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(4),v(" ",t[e.def])}}function ne(i,a){if(i&1&&(S(0,11),w(1,ie,3,1,"mat-header-cell",12)(2,ee,7,3,"mat-cell",13),I()),i&2){let t=o(5).$implicit;_("matColumnDef",t.def)}}function ae(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(7).$implicit;l(2),h(t.label)}}function oe(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(8);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"button",22),f("click",function(n){return n.stopPropagation()}),M(4,"app-feather-icons",23),c()()}if(i&2){let t=a.$implicit,e=o(7).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(2),N("tbl-fav-edit"),_("icon","file-text")}}function re(i,a){if(i&1&&(S(0,11),w(1,ae,3,1,"mat-header-cell",12)(2,oe,5,5,"mat-cell",13),I()),i&2){let t=o(6).$implicit;_("matColumnDef",t.def)}}function ce(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(8).$implicit;l(2),h(t.label)}}function le(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(9);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"button",24),f("click",function(n){return n.stopPropagation()}),s(4,"Details"),c()()}if(i&2){let t=a.$implicit,e=o(8).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":")}}function de(i,a){if(i&1&&(S(0,11),w(1,ce,3,1,"mat-header-cell",12)(2,le,5,2,"mat-cell",13),I()),i&2){let t=o(7).$implicit;_("matColumnDef",t.def)}}function se(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(9).$implicit;l(2),h(t.label)}}function me(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function pe(i,a){if(i&1&&(r(0,"div")(1,"span",28),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function _e(i,a){if(i&1&&(r(0,"div")(1,"span",29),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function he(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ue(i,a){if(i&1&&(r(0,"div")(1,"span",30),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ge(i,a){if(i&1&&(r(0,"div")(1,"span",30),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function Ce(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function fe(i,a){if(i&1&&(r(0,"div")(1,"span",31),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ve(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function be(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function ye(i,a){if(i&1&&(r(0,"div")(1,"span",29),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function xe(i,a){if(i&1&&(r(0,"div")(1,"span",29),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.status)}}function we(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,m=o(10);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"div"),g(4,me,3,1,"div")(5,pe,3,1,"div")(6,_e,3,1,"div")(7,he,3,1,"div")(8,ue,3,1,"div")(9,ge,3,1,"div")(10,Ce,3,1,"div")(11,fe,3,1,"div")(12,ve,3,1,"div")(13,be,3,1,"div")(14,ye,3,1,"div")(15,xe,3,1,"div"),c()()}if(i&2){let t,e=a.$implicit,n=o(9).$implicit;l(2),v("",n.label,":"),l(2),C((t=e.status)==="Paid"?4:t==="Not Paid"?5:t==="Partially Paid"?6:t==="Issue"?7:t==="Return"?8:t==="In Progress"?9:t==="Completed"?10:t==="Pending"?11:t==="Approve"?12:t==="Confirmed"?13:t==="Reject"?14:t==="Not Started"?15:-1)}}function Se(i,a){if(i&1&&(S(0,11),w(1,se,3,1,"mat-header-cell",12)(2,we,16,2,"mat-cell",25),I()),i&2){let t=o(8).$implicit;_("matColumnDef",t.def)}}function Ie(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(10).$implicit;l(2),h(t.label)}}function De(i,a){i&1&&(r(0,"div")(1,"mat-icon",20),s(2,"keyboard_double_arrow_up"),c()())}function Te(i,a){i&1&&(r(0,"div")(1,"mat-icon",32),s(2,"keyboard_arrow_up"),c()())}function Ee(i,a){i&1&&(r(0,"div")(1,"mat-icon",19),s(2,"keyboard_arrow_down"),c()())}function Me(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(11);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),g(3,De,3,0,"div"),g(4,Te,3,0,"div"),g(5,Ee,3,0,"div"),r(6,"span",15),s(7),c()()}if(i&2){let t=a.$implicit,e=o(10).$implicit;_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(),C(t[e.def]==="High"?3:-1),l(),C(t[e.def]==="Medium"?4:-1),l(),C(t[e.def]==="Low"?5:-1),l(2),h(t[e.def])}}function ke(i,a){if(i&1&&(S(0,11),w(1,Ie,3,1,"mat-header-cell",12)(2,Me,8,6,"mat-cell",13),I()),i&2){let t=o(9).$implicit;_("matColumnDef",t.def)}}function Fe(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(11).$implicit;l(2),h(t.label)}}function Ae(i,a){if(i&1&&(r(0,"div")(1,"span",27),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.gender)}}function Re(i,a){if(i&1&&(r(0,"div")(1,"span",30),s(2),c()()),i&2){let t=o().$implicit;l(2),h(t.gender)}}function Oe(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,m=o(12);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"div"),g(4,Ae,3,1,"div")(5,Re,3,1,"div"),c()()}if(i&2){let t,e=a.$implicit,n=o(11).$implicit;l(2),v("",n.label,":"),l(2),C((t=e.gender)==="Male"?4:t==="Female"?5:-1)}}function Be(i,a){if(i&1&&(S(0,11),w(1,Fe,3,1,"mat-header-cell",12)(2,Oe,6,2,"mat-cell",25),I()),i&2){let t=o(10).$implicit;_("matColumnDef",t.def)}}function Pe(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(12).$implicit;l(2),h(t.label)}}function ze(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,m=o(13);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"mat-icon",33),s(4,"calendar_today"),c(),r(5,"span",15),s(6),Rt(7,"date"),c()()}if(i&2){let t=a.$implicit,e=o(12).$implicit;l(2),v("",e.label,":"),l(4),v(" ",Ot(7,2,t[e.def],"MM/dd/yyyy")," ")}}function He(i,a){if(i&1&&(S(0,11),w(1,Pe,3,1,"mat-header-cell",12)(2,ze,8,5,"mat-cell",25),I()),i&2){let t=o(11).$implicit;_("matColumnDef",t.def)}}function $e(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(13).$implicit;l(2),h(t.label)}}function Ve(i,a){if(i&1&&(r(0,"li",36),M(1,"img",38),c()),i&2){let t=a.$implicit,e=a.$index;_("ngClass",At(3,Ni,e>=3)),l(),_("src","assets/images/user/"+t.avatar,pt)("alt",t.name)}}function Le(i,a){if(i&1&&(r(0,"li",37)(1,"span",39),s(2),c()()),i&2){let t=o(2).$implicit;l(2),v("+",t.employeesTeam.length-3)}}function Ne(i,a){if(i&1&&(r(0,"ul",34),ft(1,Ve,2,5,"li",36,Ct),g(3,Le,3,1,"li",37),c()),i&2){let t=o().$implicit;l(),vt(t.employeesTeam),l(2),C(t.employeesTeam.length>3?3:-1)}}function je(i,a){i&1&&(r(0,"span",35),s(1," No employees in team. "),c())}function qe(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,m=o(14);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"span",15),g(4,Ne,4,1,"ul",34),g(5,je,2,0,"span",35),c()()}if(i&2){let t=a.$implicit,e=o(13).$implicit;l(2),v("",e.label,":"),l(2),C((t.employeesTeam==null?null:t.employeesTeam.length)>0?4:-1),l(),C((t[e.def]==null||t[e.def].employeesTeam==null?null:t[e.def].employeesTeam.length)===0?5:-1)}}function Ge(i,a){if(i&1&&(S(0,11),w(1,$e,3,1,"mat-header-cell",12)(2,qe,6,3,"mat-cell",25),I()),i&2){let t=o(12).$implicit;_("matColumnDef",t.def)}}function Qe(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(14).$implicit;l(2),h(t.label)}}function Ke(i,a){if(i&1){let t=x();r(0,"mat-cell",16),f("contextmenu",function(n){let d=b(t).$implicit,m=o(15);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),M(3,"mat-progress-bar",40),c()}if(i&2){let t=a.$implicit,e=o(14).$implicit,n=o();_("matTooltip",t[e.def]),l(2),v("",e.label,":"),l(),_("value",t[e.def])("color",n.getProgressBarColor(t[e.def]))}}function Ze(i,a){if(i&1&&(S(0,11),w(1,Qe,3,1,"mat-header-cell",12)(2,Ke,4,4,"mat-cell",13),I()),i&2){let t=o(13).$implicit;_("matColumnDef",t.def)}}function Ue(i,a){if(i&1&&(r(0,"mat-header-cell",14)(1,"span",15),s(2),c()()),i&2){let t=o(14).$implicit;l(2),h(t.label)}}function We(i,a){if(i&1){let t=x();r(0,"mat-cell",26),f("contextmenu",function(n){let d=b(t).$implicit,m=o(15);return y(m.onContextMenu(n,d))}),r(1,"span",17),s(2),c(),r(3,"span",15),s(4),c()()}if(i&2){let t=a.$implicit,e=o(14).$implicit;l(2),v("",e.label,":"),l(2),h(t[e.def])}}function Ye(i,a){if(i&1&&(S(0,11),w(1,Ue,3,1,"mat-header-cell",12)(2,We,5,2,"mat-cell",25),I()),i&2){let t=o(13).$implicit;_("matColumnDef",t.def)}}function Xe(i,a){if(i&1&&g(0,Ze,3,1,"ng-container",11)(1,Ye,3,1,"ng-container",11),i&2){let t=o(12).$implicit;C(t.type==="progressBar"?0:1)}}function Je(i,a){if(i&1&&g(0,Ge,3,1,"ng-container",11)(1,Xe,2,1),i&2){let t=o(11).$implicit;C(t.type==="team"?0:1)}}function tn(i,a){if(i&1&&g(0,He,3,1,"ng-container",11)(1,Je,2,1),i&2){let t=o(10).$implicit;C(t.type==="date"?0:1)}}function en(i,a){if(i&1&&g(0,Be,3,1,"ng-container",11)(1,tn,2,1),i&2){let t=o(9).$implicit;C(t.def==="gender"?0:1)}}function nn(i,a){if(i&1&&g(0,ke,3,1,"ng-container",11)(1,en,2,1),i&2){let t=o(8).$implicit;C(t.type==="priority"?0:1)}}function an(i,a){if(i&1&&g(0,Se,3,1,"ng-container",11)(1,nn,2,1),i&2){let t=o(7).$implicit;C(t.def==="status"?0:1)}}function on(i,a){if(i&1&&g(0,de,3,1,"ng-container",11)(1,an,2,1),i&2){let t=o(6).$implicit;C(t.type==="button"?0:1)}}function rn(i,a){if(i&1&&g(0,re,3,1,"ng-container",11)(1,on,2,1),i&2){let t=o(5).$implicit;C(t.type==="file"?0:1)}}function cn(i,a){if(i&1&&g(0,ne,3,1,"ng-container",11)(1,rn,2,1),i&2){let t=o(4).$implicit;C(t.type==="address"?0:1)}}function ln(i,a){if(i&1&&g(0,te,3,1,"ng-container",11)(1,cn,2,1),i&2){let t=o(3).$implicit;C(t.type==="email"?0:1)}}function dn(i,a){if(i&1&&g(0,Yi,3,1,"ng-container",11)(1,ln,2,1),i&2){let t=o(2).$implicit;C(t.type==="phone"?0:1)}}function sn(i,a){if(i&1&&g(0,Zi,3,1,"ng-container",11)(1,dn,2,1),i&2){let t=o().$implicit;C(t.def==="name"?0:1)}}function mn(i,a){if(i&1&&g(0,Gi,0,0)(1,sn,2,1),i&2){let t=a.$implicit;C(t.type==="check"||t.type==="actionBtn"?0:1)}}function pn(i,a){i&1&&(r(0,"mat-header-cell",41),s(1,"Actions"),c())}function _n(i,a){if(i&1){let t=x();r(0,"mat-cell",41)(1,"button",42),f("click",function(n){return n.stopPropagation()})("click",function(){let n=b(t).$implicit,d=o();return y(d.editCall(n))}),M(2,"app-feather-icons",23),c(),r(3,"button",42),f("click",function(n){return n.stopPropagation()})("click",function(){let n=b(t).$implicit,d=o();return y(d.deleteItem(n))}),M(4,"app-feather-icons",23),c()()}i&2&&(l(2),N("tbl-fav-edit"),_("icon","edit"),l(2),N("tbl-fav-delete"),_("icon","trash-2"))}function hn(i,a){i&1&&M(0,"mat-header-row")}function un(i,a){if(i&1){let t=x();r(0,"mat-row",43),f("click",function(){let n=b(t).$implicit,d=o();return y(d.editCall(n))}),c()}i&2&&(kt("cursor","pointer"),_("@rowsAnimation",void 0))}var Sa=(()=>{class i{constructor(){this.dataSource=u([]),this.columnDefinitions=u([]),this.selection=new Kt(!0,[]),this.displayedColumns=[]}ngOnInit(){this.dataSourceTable=new Ci(this.dataSource()),this.setDisplayedColumns(),this.dataSourceTable.sort=this.sort}setDisplayedColumns(){this.displayedColumns=[...this.columnDefinitions().filter(t=>t.visible!==!1).map(t=>t.def)]}isAllSelected(){let t=this.selection.selected.length,e=this.dataSourceTable.data.length;return t===e}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSourceTable.data.forEach(t=>this.selection.select(t))}editCall(t){}deleteItem(t){}onContextMenu(t,e){}getProgressBarColor(t){return t<50?"warn":t>=50&&t<=70?"accent":"primary"}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-table-card"]],viewQuery:function(e,n){if(e&1&&nt(W,5),e&2){let d;T(d=E())&&(n.sort=d.first)}},inputs:{dataSource:[1,"dataSource"],columnDefinitions:[1,"columnDefinitions"]},decls:11,vars:3,consts:[["mat-table","","matSort","",1,"mat-cell","advance-table",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","actions"],["class","pr-0",4,"matHeaderCellDef"],["class","pr-0",4,"matCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],["color","primary",3,"change","checked","indeterminate","ngClass"],["color","primary",3,"click","change","checked","ngClass"],[3,"matColumnDef"],["mat-sort-header","",4,"matHeaderCellDef"],[3,"matTooltip","contextmenu",4,"matCellDef"],["mat-sort-header",""],[1,"truncate-text"],[3,"contextmenu","matTooltip"],[1,"mobile-label"],["alt","image",1,"table-img",3,"src"],[1,"tbl-icon","material-icons-outlined","col-green"],[1,"tbl-icon","material-icons-outlined","col-red"],[1,"tbl-icon","material-icons-outlined","col-blue"],["mat-icon-button","","color","accent",1,"tbl-action-btn",3,"click"],[3,"icon"],["mat-button","","color","primary",3,"click"],[3,"contextmenu",4,"matCellDef"],[3,"contextmenu"],[1,"badge","badge-solid-green"],[1,"badge","badge-solid-red"],[1,"badge","badge-solid-orange"],[1,"badge","badge-solid-purple"],[1,"badge","badge-solid-blue"],[1,"tbl-icon","material-icons-outlined","col-orange"],[1,"tbl-icon","material-icons-outlined","col-brown"],[1,"list-unstyled","order-list"],[1,"no-data"],[1,"avatar","avatar-sm",3,"ngClass"],[1,"avatar","avatar-sm"],[1,"rounded-circle",3,"src","alt"],[1,"badge"],["mode","determinate",3,"value","color"],[1,"pr-0"],["mat-icon-button","","color","accent",3,"click"],["matRipple","",3,"click"]],template:function(e,n){e&1&&(r(0,"table",0),S(1,1),w(2,ji,2,3,"mat-header-cell",2)(3,qi,2,2,"mat-cell",3),I(),ft(4,mn,2,1,null,null,Ct),S(6,4),w(7,pn,2,0,"mat-header-cell",5)(8,_n,5,6,"mat-cell",6),I(),w(9,hn,1,0,"mat-header-row",7)(10,un,1,3,"mat-row",8),c()),e&2&&(_("dataSource",n.dataSource()),l(4),vt(n.columnDefinitions()),l(5),_("matHeaderRowDef",n.displayedColumns),l(),_("matRowDefColumns",n.displayedColumns))},dependencies:[gi,ri,li,pi,di,ci,_i,si,mi,hi,ui,Si,W,wi,ai,ni,ii,ti,Lt,$t,yi,bi,vi,fi,Jt,Xt,Yt,Ut,Vt],styles:["[_nghost-%COMP%]     .mat-column-stdId{max-width:90px}[_nghost-%COMP%]     .mat-column-employeesTeam{min-width:130px}[_nghost-%COMP%]     .mat-column-id{max-width:90px}[_nghost-%COMP%]     .mat-column-name{min-width:150px}"],data:{animation:[Qt]}})}}return i})();var Ii="mat-badge-content",gn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,n){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return i})(),za=(()=>{class i{_ngZone=p(V);_elementRef=p(O);_ariaDescriber=p(lt);_renderer=p(ht);_animationsDisabled=q();_idGenerator=p(ct);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=p(jt);_document=p(J);constructor(){let t=p($);t.load(gn),t.load(rt)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Ii),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Ii}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,n){e&2&&A("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small",n.size==="small")("mat-badge-medium",n.size==="medium")("mat-badge-large",n.size==="large")("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",D],disabled:[2,"matBadgeDisabled","disabled",D],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",D]}})}return i})(),Ha=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=R({imports:[qt,j]})}return i})();var Cn=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],fn=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function vn(i,a){i&1&&(r(0,"span",3),H(1,1),c())}function bn(i,a){i&1&&(r(0,"span",6),H(1,2),c())}var yn=new F("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Di=new F("MatChipAvatar"),Ti=new F("MatChipTrailingIcon"),Ei=new F("MatChipEdit"),Mi=new F("MatChipRemove"),ki=new F("MatChip"),Fi=(()=>{class i{_elementRef=p(O);_parentChip=p(ki);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){p($).load(U),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=P({type:i,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,n){e&2&&(z("disabled",n._getDisabledAttribute())("aria-disabled",n.disabled),A("mdc-evolution-chip__action--primary",n._isPrimary)("mdc-evolution-chip__action--secondary",!n._isPrimary)("mdc-evolution-chip__action--trailing",!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,"disabled","disabled",D],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:Ht(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return i})(),xn=(()=>{class i extends Fi{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(n){return(t||(t=mt(i)))(n||i)}})();static \u0275dir=P({type:i,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,n){e&1&&f("click",function(m){return n._handleClick(m)})("keydown",function(m){return n._handleKeydown(m)}),e&2&&(z("tabindex",n._getTabindex()),A("mdc-evolution-chip__action--presentational",!1))},features:[gt]})}return i})();var ho=(()=>{class i{_changeDetectorRef=p(at);_elementRef=p(O);_tagName=p(Bt);_ngZone=p(V);_focusMonitor=p(ot);_globalRippleOptions=p(Gt,{optional:!0});_document=p(J);_onFocus=new G;_onBlur=new G;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=q();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(ct).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new Q;destroyed=new Q;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(Wt);_injector=p(X);constructor(){let t=p($);t.load(U),t.load(rt),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Y(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let n=e._elementRef.nativeElement;return n===t||n.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,n,d){if(e&1&&Tt(d,Di,5)(d,Ei,5)(d,Ti,5)(d,Mi,5)(d,Di,5)(d,Ti,5)(d,Ei,5)(d,Mi,5),e&2){let m;T(m=E())&&(n.leadingIcon=m.first),T(m=E())&&(n.editIcon=m.first),T(m=E())&&(n.trailingIcon=m.first),T(m=E())&&(n.removeIcon=m.first),T(m=E())&&(n._allLeadingIcons=m),T(m=E())&&(n._allTrailingIcons=m),T(m=E())&&(n._allEditIcons=m),T(m=E())&&(n._allRemoveIcons=m)}},viewQuery:function(e,n){if(e&1&&nt(xn,5),e&2){let d;T(d=E())&&(n.primaryAction=d.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,n){e&1&&f("keydown",function(m){return n._handleKeydown(m)}),e&2&&(Dt("id",n.id),z("role",n.role)("aria-label",n.ariaLabel),N("mat-"+(n.color||"primary")),A("mdc-evolution-chip",!n._isBasicChip)("mdc-evolution-chip--disabled",n.disabled)("mdc-evolution-chip--with-trailing-action",n._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",n.leadingIcon)("mdc-evolution-chip--with-primary-icon",n.leadingIcon)("mdc-evolution-chip--with-avatar",n.leadingIcon)("mat-mdc-chip-with-avatar",n.leadingIcon)("mat-mdc-chip-highlighted",n.highlighted)("mat-mdc-chip-disabled",n.disabled)("mat-mdc-basic-chip",n._isBasicChip)("mat-mdc-standard-chip",!n._isBasicChip)("mat-mdc-chip-with-trailing-icon",n._hasTrailingIcon())("_mat-animation-noopable",n._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",D],highlighted:[2,"highlighted","highlighted",D],disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Ft([{provide:ki,useExisting:i}])],ngContentSelectors:fn,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,n){e&1&&(et(Cn),M(0,"span",0),r(1,"span",1)(2,"span",2),g(3,vn,2,0,"span",3),r(4,"span",4),H(5),M(6,"span",5),c()()(),g(7,bn,2,0,"span",6)),e&2&&(l(3),C(n.leadingIcon?3:-1),l(4),C(n._hasTrailingIcon()?7:-1))},dependencies:[Fi],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return i})();var uo=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=B({type:i});static \u0275inj=R({providers:[ei,{provide:yn,useValue:{separatorKeyCodes:[13]}}],imports:[Zt,j]})}return i})();export{Bn as a,Pn as b,W as c,Si as d,Sa as e,za as f,Ha as g,ho as h,uo as i};
