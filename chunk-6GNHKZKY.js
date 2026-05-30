import{e as K,g as W,h as X}from"./chunk-WYDDLRAH.js";import{n as Y,o as tt}from"./chunk-EG5QDNHL.js";import{d as Q}from"./chunk-ZLMQ4AM6.js";import{Ca as q,Fa as J,K as U,ja as Z,xa as T}from"./chunk-BRMSKLYN.js";import{$ as S,Gb as A,Hb as p,Ib as g,Jb as u,Lb as V,Mb as N,Nb as R,Ob as l,Pb as n,Qb as r,Rb as f,Wc as H,Yb as C,Zc as D,_ as B,_c as z,ab as o,ac as c,ba as L,cc as d,da as h,e as O,g as k,ja as _,ka as b,la as v,ma as F,mc as j,oc as G,qb as y,qc as x,ra as E,rb as I,rc as $,sc as M}from"./chunk-ES3NKZF7.js";function it(i,m){if(i&1&&(n(0,"mat-option",17),x(1),r()),i&2){let t=m.$implicit;l("value",t),o(),M(" ",t," ")}}function at(i,m){if(i&1){let t=C();n(0,"mat-form-field",14)(1,"mat-select",16,0),c("selectionChange",function(e){_(t);let s=d(2);return b(s._changePageSize(e.value))}),N(3,it,2,2,"mat-option",17,V),r(),n(5,"div",18),c("click",function(){_(t);let e=j(2);return b(e.open())}),r()()}if(i&2){let t=d(2);l("appearance",t._formFieldAppearance)("color",t.color),o(),l("value",t.pageSize)("disabled",t.disabled),A("aria-labelledby",t._pageSizeLabelId),l("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),o(2),R(t._displayedPageSizeOptions)}}function nt(i,m){if(i&1&&(n(0,"div",15),x(1),r()),i&2){let t=d(2);o(),$(t.pageSize)}}function ot(i,m){if(i&1&&(n(0,"div",3)(1,"div",13),x(2),r(),g(3,at,6,7,"mat-form-field",14),g(4,nt,2,1,"div",15),r()),i&2){let t=d();o(),p("id",t._pageSizeLabelId),o(),M(" ",t._intl.itemsPerPageLabel," "),o(),u(t._displayedPageSizeOptions.length>1?3:-1),o(),u(t._displayedPageSizeOptions.length<=1?4:-1)}}function rt(i,m){if(i&1){let t=C();n(0,"button",19),c("click",function(){_(t);let e=d();return b(e._buttonClicked(0,e._previousButtonsDisabled()))}),v(),n(1,"svg",8),f(2,"path",20),r()()}if(i&2){let t=d();l("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),p("aria-label",t._intl.firstPageLabel)}}function st(i,m){if(i&1){let t=C();n(0,"button",21),c("click",function(){_(t);let e=d();return b(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),v(),n(1,"svg",8),f(2,"path",22),r()()}if(i&2){let t=d();l("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),p("aria-label",t._intl.lastPageLabel)}}var lt=(()=>{class i{changes=new O;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let s=t*a,P=s<e?Math.min(s+a,e):s+a;return`${s+1} \u2013 ${P} of ${e}`};static \u0275fac=function(a){return new(a||i)};static \u0275prov=B({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),dt=50;var pt=new L("MAT_PAGINATOR_DEFAULT_OPTIONS"),ct=(()=>{class i{_intl=h(lt);_changeDetectorRef=h(H);_formFieldAppearance;_pageSizeLabelId=h(Z).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new k(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>z(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new E;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=h(pt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:s,hidePageSize:P,showFirstLastButtons:w}=a;e!=null&&(this._pageSize=e),s!=null&&(this._pageSizeOptions=s),P!=null&&(this.hidePageSize=P),w!=null&&(this.showFirstLastButtons=w)}this._formFieldAppearance=a?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:dt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=y({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",z],length:[2,"length","length",z],pageSize:[2,"pageSize","pageSize",z],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",D],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",D],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",D]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(a,e){a&1&&(n(0,"div",1)(1,"div",2),g(2,ot,5,4,"div",3),n(3,"div",4)(4,"div",5),x(5),r(),g(6,rt,3,5,"button",6),n(7,"button",7),c("click",function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),v(),n(8,"svg",8),f(9,"path",9),r()(),F(),n(10,"button",10),c("click",function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),v(),n(11,"svg",8),f(12,"path",11),r()(),g(13,st,3,5,"button",12),r()()()),a&2&&(o(2),u(e.hidePageSize?-1:2),o(3),M(" ",e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length)," "),o(),u(e.showFirstLastButtons?6:-1),o(),l("matTooltip",e._intl.previousPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),p("aria-label",e._intl.previousPageLabel),o(3),l("matTooltip",e._intl.nextPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),p("aria-label",e._intl.nextPageLabel),o(3),u(e.showFirstLastButtons?13:-1))},dependencies:[K,W,Q,q,Y],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return i})(),Tt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=I({type:i});static \u0275inj=S({imports:[J,X,tt,ct]})}return i})();var Bt=(()=>{class i{get vertical(){return this._vertical}set vertical(t){this._vertical=T(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=T(t)}_inset=!1;static \u0275fac=function(a){return new(a||i)};static \u0275cmp=y({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(a,e){a&2&&(p("aria-orientation",e.vertical?"vertical":"horizontal"),G("mat-divider-vertical",e.vertical)("mat-divider-horizontal",!e.vertical)("mat-divider-inset",e.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(a,e){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),Lt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=I({type:i});static \u0275inj=S({imports:[U]})}return i})();export{Bt as a,Lt as b,ct as c,Tt as d};
