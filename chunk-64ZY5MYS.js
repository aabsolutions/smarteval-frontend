import{a as Kt,b as Zt,c as Ut,f as Wt,g as $t}from"./chunk-I4VVNLXK.js";import{b as Ht}from"./chunk-NMVON7QV.js";import{a as Yt,b as te}from"./chunk-5TVENN7J.js";import{l as Jt}from"./chunk-7XYHTZBP.js";import{g as Xt}from"./chunk-WSMHGNGB.js";import{h as Gt,i as Qt}from"./chunk-G533CEJ2.js";import{Ca as qt,F as Ft,H as N,Q as Rt,S as F,T as H,_ as Tt,ca as Bt,fa as zt,g as Dt,ga as V,ja as Lt,ma as q,na as st,p as Et,r as Pt,s as At,va as jt,xa as Nt,ya as Vt}from"./chunk-DJXIJRV5.js";import{$ as x,$c as rt,A as G,Aa as Z,Ca as C,Da as mt,Fc as at,Ha as ut,Hb as P,Hc as ot,Ib as _,Jb as v,Lb as X,Mb as J,Nb as Y,Ob as I,Pb as d,Qb as l,Qc as It,R as B,Rb as w,Rc as Ot,S as ht,Sb as vt,Sc as r,T as D,Tb as ft,Tc as St,Ub as bt,Wc as ct,Ya as gt,Zb as yt,_c as g,ab as s,ac as j,ba as y,cc as p,da as o,dc as tt,e as T,ec as A,fb as _t,fc as et,gb as U,gc as Ct,hc as m,ic as u,jb as W,kc as wt,lc as xt,na as z,oa as L,oc as O,pc as Mt,qb as b,qc as f,ra as Q,rb as k,rc as S,sa as M,sb as E,sc as it,tc as nt,va as pt,vb as $,za as K,zc as kt}from"./chunk-L3WKU6WW.js";import{g as lt}from"./chunk-TSRGIXR5.js";var le=["chart"],Ve=(()=>{class n{constructor(){this.chart=r(),this.annotations=r(),this.colors=r(),this.dataLabels=r(),this.series=r(),this.stroke=r(),this.labels=r(),this.legend=r(),this.markers=r(),this.noData=r(),this.parsing=r(),this.fill=r(),this.tooltip=r(),this.plotOptions=r(),this.responsive=r(),this.xaxis=r(),this.yaxis=r(),this.forecastDataPoints=r(),this.grid=r(),this.states=r(),this.title=r(),this.subtitle=r(),this.theme=r(),this.autoUpdateSeries=r(!0),this.chartReady=Ot(),this.chartInstance=pt(null),this.chartElement=St.required("chart"),this.ngZone=o(M),this.isBrowser=At(o(ut)),this._destroyed=!1,this._injector=o(z),this.waitingForConnectedRef=null}ngOnChanges(t){this.isBrowser&&this.hydrate(t)}ngOnDestroy(){this.destroy(),this._destroyed=!0}get isConnected(){return this.chartElement()?.nativeElement.isConnected}hydrate(t){if(this.waitingForConnectedRef)return;if(this.chartInstance()&&this.autoUpdateSeries()&&Object.keys(t).filter(i=>i!=="series").length===0){this.updateSeries(this.series(),!0);return}U({read:()=>this.createElement()},{injector:this._injector})}importApexCharts(){return import("./chunk-22U2XI7I.js")}createElement(){return lt(this,null,function*(){let{default:t}=yield this.importApexCharts();if(window.ApexCharts||=t,this._destroyed)return;if(!this.isConnected){this.waitForConnected();return}let e={};["annotations","chart","colors","dataLabels","series","stroke","labels","legend","fill","tooltip","plotOptions","responsive","markers","noData","parsing","xaxis","yaxis","forecastDataPoints","grid","states","title","subtitle","theme"].forEach(a=>{let R=this[a]();R&&(e[a]=R)}),this.destroy();let c=this.ngZone.runOutsideAngular(()=>new t(this.chartElement().nativeElement,e));this.chartInstance.set(c),this.render(),this.chartReady.emit({chartObj:c})})}render(){if(this.isConnected)return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.render());this.waitForConnected()}updateOptions(t,e,i,c){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateOptions(t,e,i,c))}updateSeries(t,e){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.updateSeries(t,e))}appendSeries(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendSeries(t,e))}appendData(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.appendData(t))}highlightSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.highlightSeries(t))}toggleSeries(t){return this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleSeries(t))}showSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.showSeries(t))}hideSeries(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.hideSeries(t))}resetSeries(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.resetSeries())}zoomX(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.zoomX(t,e))}toggleDataPointSelection(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.toggleDataPointSelection(t,e))}destroy(){this.chartInstance()?.destroy(),this.chartInstance.set(null)}setLocale(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.setLocale(t))}paper(){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.paper())}addXaxisAnnotation(t,e,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addXaxisAnnotation(t,e,i))}addYaxisAnnotation(t,e,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addYaxisAnnotation(t,e,i))}addPointAnnotation(t,e,i){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.addPointAnnotation(t,e,i))}removeAnnotation(t,e){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.removeAnnotation(t,e))}clearAnnotations(t){this.ngZone.runOutsideAngular(()=>this.chartInstance()?.clearAnnotations(t))}dataURI(t){return this.chartInstance()?.dataURI(t)}waitForConnected(){this.waitingForConnectedRef||(this.waitingForConnectedRef=_t({read:()=>{this.isConnected&&(this.waitingForConnectedRef.destroy(),this.waitingForConnectedRef=null,this.createElement())}},{injector:this._injector}))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=b({type:n,selectors:[["apx-chart"]],viewQuery:function(e,i){e&1&&wt(i.chartElement,le,5),e&2&&xt()},inputs:{chart:[1,"chart"],annotations:[1,"annotations"],colors:[1,"colors"],dataLabels:[1,"dataLabels"],series:[1,"series"],stroke:[1,"stroke"],labels:[1,"labels"],legend:[1,"legend"],markers:[1,"markers"],noData:[1,"noData"],parsing:[1,"parsing"],fill:[1,"fill"],tooltip:[1,"tooltip"],plotOptions:[1,"plotOptions"],responsive:[1,"responsive"],xaxis:[1,"xaxis"],yaxis:[1,"yaxis"],forecastDataPoints:[1,"forecastDataPoints"],grid:[1,"grid"],states:[1,"states"],title:[1,"title"],subtitle:[1,"subtitle"],theme:[1,"theme"],autoUpdateSeries:[1,"autoUpdateSeries"]},outputs:{chartReady:"chartReady"},features:[K],decls:2,vars:0,consts:[["chart",""]],template:function(e,i){e&1&&bt(0,"div",null,0)},encapsulation:2,changeDetection:0})}}return n})();var qe=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=k({type:n})}static{this.\u0275inj=x({})}}return n})();var ee="mat-badge-content",he=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
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
`],encapsulation:2,changeDetection:0})}return n})(),ni=(()=>{class n{_ngZone=o(M);_elementRef=o(C);_ariaDescriber=o(Lt);_renderer=o(W);_animationsDisabled=q();_idGenerator=o(V);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=o(Tt);_document=o(L);constructor(){let t=o(F);t.load(he),t.load(H)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(ee),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${ee}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=E({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,i){e&2&&O("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",g],disabled:[2,"matBadgeDisabled","disabled",g],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",g]}})}return n})(),ie=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=x({imports:[Bt,N]})}return n})();var pe=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],me=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function ue(n,h){n&1&&(d(0,"span",3),A(1,1),l())}function ge(n,h){n&1&&(d(0,"span",6),A(1,2),l())}var _e=["*"];var ve=new y("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),ne=new y("MatChipAvatar"),ae=new y("MatChipTrailingIcon"),oe=new y("MatChipEdit"),ce=new y("MatChipRemove"),se=new y("MatChip"),de=(()=>{class n{_elementRef=o(C);_parentChip=o(se);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){o(F).load(st),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=E({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(e,i){e&2&&(P("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),O("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",g],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:rt(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),fe=(()=>{class n extends de{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Z(n)))(i||n)}})();static \u0275dir=E({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(e,i){e&1&&j("click",function(a){return i._handleClick(a)})("keydown",function(a){return i._handleKeydown(a)}),e&2&&(P("tabindex",i._getTabindex()),O("mdc-evolution-chip__action--presentational",!1))},features:[$]})}return n})();var be=(()=>{class n{_changeDetectorRef=o(ct);_elementRef=o(C);_tagName=o(It);_ngZone=o(M);_focusMonitor=o(Rt);_globalRippleOptions=o(jt,{optional:!0});_document=o(L);_onFocus=new T;_onBlur=new T;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=q();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=o(V).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new Q;destroyed=new Q;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=o(Vt);_injector=o(z);constructor(){let t=o(F);t.load(st),t.load(H),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=G(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(e=>{let i=e._elementRef.nativeElement;return i===t||i.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let e=t!==null;e!==this._hasFocusInternal&&(this._hasFocusInternal=e,e?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(e,i,c){if(e&1&&et(c,ne,5)(c,oe,5)(c,ae,5)(c,ce,5)(c,ne,5)(c,ae,5)(c,oe,5)(c,ce,5),e&2){let a;m(a=u())&&(i.leadingIcon=a.first),m(a=u())&&(i.editIcon=a.first),m(a=u())&&(i.trailingIcon=a.first),m(a=u())&&(i.removeIcon=a.first),m(a=u())&&(i._allLeadingIcons=a),m(a=u())&&(i._allTrailingIcons=a),m(a=u())&&(i._allEditIcons=a),m(a=u())&&(i._allRemoveIcons=a)}},viewQuery:function(e,i){if(e&1&&Ct(fe,5),e&2){let c;m(c=u())&&(i.primaryAction=c.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(e,i){e&1&&j("keydown",function(a){return i._handleKeydown(a)}),e&2&&(yt("id",i.id),P("role",i.role)("aria-label",i.ariaLabel),Mt("mat-"+(i.color||"primary")),O("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",g],highlighted:[2,"highlighted","highlighted",g],disableRipple:[2,"disableRipple","disableRipple",g],disabled:[2,"disabled","disabled",g]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[kt([{provide:se,useExisting:n}])],ngContentSelectors:me,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(e,i){e&1&&(tt(pe),w(0,"span",0),d(1,"span",1)(2,"span",2),_(3,ue,2,0,"span",3),d(4,"span",4),A(5),w(6,"span",5),l()()(),_(7,ge,2,0,"span",6)),e&2&&(s(3),v(i.leadingIcon?3:-1),s(4),v(i._hasTrailingIcon()?7:-1))},dependencies:[de],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return n})();var Ai=(()=>{class n{_elementRef=o(C);_changeDetectorRef=o(ct);_dir=o(Ft,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new T;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new mt;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(B(null),ht(()=>G(...this._chips.map(t))))}_originatesFromChip(t){let e=t.target;for(;e&&e!==this._elementRef.nativeElement;){if(e.classList.contains("mat-mdc-chip"))return!0;e=e.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(B(this._chips)).subscribe(t=>{let e=[];t.forEach(i=>i._getActions().forEach(c=>e.push(c))),this._chipActions.reset(e),this._chipActions.notifyOnChanges()}),this._keyManager=new zt(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(D(this._destroyed)).subscribe(({chip:t})=>{let e=t._getSourceAction(document.activeElement);e&&this._keyManager.updateActiveItem(e)}),this._dir?.change.pipe(D(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(B(null),D(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(D(this._destroyed)).subscribe(t=>{let i=this._chips.toArray().indexOf(t.chip),c=t.chip._hasFocus(),a=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),R=c||a;this._isValidIndex(i)&&R&&(this._lastDestroyedFocusedChipIndex=i)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),e=this._chips.toArray()[t];e.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():e.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["mat-chip-set"]],contentQueries:function(e,i,c){if(e&1&&et(c,be,5),e&2){let a;m(a=u())&&(i._chips=a)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(e,i){e&1&&j("keydown",function(a){return i._handleKeydown(a)}),e&2&&P("role",i.role)},inputs:{disabled:[2,"disabled","disabled",g],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:rt(t)]},ngContentSelectors:_e,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(e,i){e&1&&(tt(),vt(0,"div",0),A(1),ft())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return n})();var Fi=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=x({providers:[Xt,{provide:ve,useValue:{separatorKeyCodes:[13]}}],imports:[Nt,N]})}return n})();function ye(n,h){if(n&1&&(d(0,"div",8),w(1,"img",17),l()),n&2){let t=p().$implicit;s(),I("src",t.avatar,gt)("alt",t.name)}}function Ce(n,h){if(n&1&&(d(0,"div",9),f(1),l()),n&2){let t=p().$implicit;s(),it(" ",t.name.charAt(0)," ")}}function we(n,h){if(n&1&&(d(0,"div",18)(1,"mat-icon"),f(2),l()()),n&2){let t=h.$implicit,e=p(3);I("ngClass",e.getBadgeColor(t))("matTooltip",e.getBadgeTooltip(t)),s(2),S(t)}}function xe(n,h){if(n&1&&(d(0,"div",14),J(1,we,3,3,"div",18,X),l()),n&2){let t=p().$implicit;s(),Y(t.badges)}}function Me(n,h){if(n&1&&(d(0,"div",19),w(1,"i",21),d(2,"span"),f(3),l()()),n&2){let t=p(2).$implicit;s(3),S(t.subject)}}function ke(n,h){if(n&1&&(d(0,"div",20)(1,"mat-icon"),f(2),l(),d(3,"span"),f(4),at(5,"number"),l()()),n&2){let t=p(2).$implicit,e=p();I("ngClass",e.getImprovementColor(t.improvement)),s(2),S(e.getImprovementIcon(t.improvement)),s(2),nt("",t.improvement>0?"+":"","",ot(5,4,t.improvement,"1.2-2"),"%")}}function Ie(n,h){if(n&1&&(d(0,"div",16),_(1,Me,4,1,"div",19),_(2,ke,6,7,"div",20),l()),n&2){let t=p().$implicit;s(),v(t.subject?1:-1),s(),v(t.improvement!==void 0?2:-1)}}function Oe(n,h){if(n&1&&(d(0,"div",4)(1,"div",5)(2,"span",6),f(3),l()(),d(4,"div",7),_(5,ye,2,2,"div",8),_(6,Ce,2,1,"div",9),l(),d(7,"div",10)(8,"div",11)(9,"h3",12),f(10),l(),d(11,"div",13),_(12,xe,3,0,"div",14),d(13,"div",15)(14,"span"),f(15),at(16,"number"),l()()()(),_(17,Ie,3,2,"div",16),l()()),n&2){let t=h.$implicit,e=p();s(),I("ngClass","rank-"+t.rank),s(2),S(t.rank),s(2),v(t.avatar?5:-1),s(),v(t.avatar?-1:6),s(4),S(t.name),s(2),v(t.badges&&t.badges.length>0?12:-1),s(3),nt("",ot(16,9,t.score,e.scoreFormat),"",e.scoreSuffix),s(2),v(t.subject||t.improvement!==void 0?17:-1)}}var Zi=(()=>{class n{constructor(){this.title="Top Performing Students",this.students=[],this.maxStudents=5,this.scoreSuffix="%",this.scoreFormat="1.2-2",this.displayedColumns=["rank","student","subject","score","badges"],this.defaultStudents=[{id:1,name:"Emma Thompson",avatar:"assets/images/user/user1.jpg",score:98,rank:1,subject:"Mathematics",improvement:5,badges:["star","trending_up","emoji_events"]},{id:2,name:"James Wilson",avatar:"assets/images/user/user8.jpg",score:96,rank:2,subject:"Science",improvement:3,badges:["star","emoji_events"]},{id:3,name:"Sophia Garcia",avatar:"assets/images/user/user9.jpg",score:95,rank:3,subject:"English",improvement:7,badges:["trending_up","emoji_events"]},{id:4,name:"Liam Johnson",avatar:"assets/images/user/user2.jpg",score:93,rank:4,subject:"History",improvement:2,badges:["star"]},{id:5,name:"Olivia Brown",avatar:"assets/images/user/user7.jpg",score:91,rank:5,subject:"Art",improvement:4,badges:["trending_up"]},{id:6,name:"Noah Martinez",avatar:"assets/images/user/user5.jpg",score:90,rank:6,subject:"Physics",improvement:1,badges:[]},{id:7,name:"Ava Davis",avatar:"assets/images/user/user11.jpg",score:89,rank:7,subject:"Chemistry",improvement:0,badges:[]}]}ngOnInit(){(!this.students||this.students.length===0)&&(this.students=this.defaultStudents),this.students=this.students.slice(0,this.maxStudents)}getBadgeTooltip(t){return{star:"Outstanding Performance",trending_up:"Significant Improvement",emoji_events:"Top Achiever",military_tech:"Excellence Award",workspace_premium:"Premium Student",psychology:"Critical Thinker",lightbulb:"Creative Thinker",groups:"Team Player",public:"Community Contributor"}[t]||"Achievement Badge"}getBadgeColor(t){return{star:"gold",trending_up:"green",emoji_events:"purple",military_tech:"blue",workspace_premium:"teal",psychology:"orange",lightbulb:"amber",groups:"indigo",public:"brown"}[t]||"primary"}getImprovementIcon(t){return t===void 0?"":t>5?"trending_up":t>0?"arrow_upward":t<0?"arrow_downward":"remove"}getImprovementColor(t){return t===void 0?"":t>0?"positive":t<0?"negative":""}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=b({type:n,selectors:[["app-top-students-card"]],inputs:{title:"title",students:"students",maxStudents:"maxStudents",scoreSuffix:"scoreSuffix",scoreFormat:"scoreFormat"},decls:9,vars:1,consts:[[1,"top-students-card"],[1,"header-style"],[1,"fas","fa-trophy","me-1"],[1,"students-container"],[1,"student-card"],[1,"student-rank",3,"ngClass"],[1,"rank-number"],[1,"student-avatar"],[1,"avatar-container"],[1,"avatar-container","no-image"],[1,"student-info"],[1,"student-name-row"],[1,"student-name"],[1,"right-elements",2,"display","flex","gap","8px","align-items","center"],[1,"badges-row",2,"margin-top","0"],[1,"score-chip"],[1,"student-details"],[3,"src","alt"],[1,"badge-chip",3,"ngClass","matTooltip"],[1,"subject-chip"],[1,"improvement-chip",3,"ngClass"],[1,"fas","fa-book","me-1"]],template:function(e,i){e&1&&(d(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title"),w(3,"i",2),f(4),l()(),d(5,"mat-card-content")(6,"div",3),J(7,Oe,18,12,"div",4,X),l()()()),e&2&&(s(4),it(" ",i.title," "),s(3),Y(i.students))},dependencies:[Pt,Dt,$t,Kt,Ut,Wt,Zt,Jt,qt,Qt,Gt,ie,te,Yt,Ht,Et],styles:[".top-students-card[_ngcontent-%COMP%]   .students-container[_ngcontent-%COMP%]{padding:0}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px 20px;border-bottom:1px solid rgba(0,0,0,.06);transition:all .3s ease}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]:hover{background-color:#00000005;transform:translateY(-2px);box-shadow:0 4px 8px #0000000d}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]:last-child{border-bottom:none}.top-students-card[_ngcontent-%COMP%]   .student-rank[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-width:40px;height:40px;border-radius:50%;margin-right:16px;font-weight:600;color:#fff;box-shadow:0 4px 8px #00000026}.top-students-card[_ngcontent-%COMP%]   .student-rank.rank-1[_ngcontent-%COMP%]{background:linear-gradient(135deg,gold,#ffc107)}.top-students-card[_ngcontent-%COMP%]   .student-rank.rank-2[_ngcontent-%COMP%]{background:linear-gradient(135deg,#45ff79,#30d13c)}.top-students-card[_ngcontent-%COMP%]   .student-rank.rank-3[_ngcontent-%COMP%]{background:linear-gradient(135deg,#ff5722,#f44336)}.top-students-card[_ngcontent-%COMP%]   .student-rank.rank-4[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-5[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-6[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-7[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-8[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-9[_ngcontent-%COMP%], .top-students-card[_ngcontent-%COMP%]   .student-rank.rank-10[_ngcontent-%COMP%]{background:linear-gradient(135deg,#5b74ff,#2d4bf7)}.top-students-card[_ngcontent-%COMP%]   .student-rank[_ngcontent-%COMP%]   .rank-number[_ngcontent-%COMP%]{font-size:1.1rem}.top-students-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]{margin-right:16px}.top-students-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:#5c6bc0;color:#fff;font-weight:500;box-shadow:0 4px 8px #0000001a;border:2px solid white}.top-students-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.top-students-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]   .avatar-container.no-image[_ngcontent-%COMP%]{font-size:1.5rem}.top-students-card[_ngcontent-%COMP%]   .student-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:8px}.top-students-card[_ngcontent-%COMP%]   .student-name-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.top-students-card[_ngcontent-%COMP%]   .student-name-row[_ngcontent-%COMP%]   .student-name[_ngcontent-%COMP%]{margin:0;font-size:1.1rem;font-weight:500}.top-students-card[_ngcontent-%COMP%]   .student-name-row[_ngcontent-%COMP%]   .score-chip[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:0 12px;border-radius:20px;background:linear-gradient(135deg,#f44336,#f44336);color:#fff;font-weight:600;font-size:.9rem;box-shadow:0 2px 4px #0000001a}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .subject-chip[_ngcontent-%COMP%]{display:flex;align-items:center;padding:4px 10px;border-radius:16px;background-color:#3f51b51a;color:#3f51b5;font-size:.85rem;font-weight:500}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .subject-chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:4px;font-size:.8rem}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .improvement-chip[_ngcontent-%COMP%]{display:flex;align-items:center;padding:4px 10px;border-radius:16px;font-size:.85rem;font-weight:500}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .improvement-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;width:16px;height:16px;margin-right:4px}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .improvement-chip.positive[_ngcontent-%COMP%]{background-color:#4caf501a;color:#4caf50}.top-students-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]   .improvement-chip.negative[_ngcontent-%COMP%]{background-color:#f443361a;color:#f44336}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]{display:flex;gap:8px;margin-top:4px}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background-color:#0000000d;transition:all .2s ease}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:24px}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.gold[_ngcontent-%COMP%]{background-color:#ffd70026;color:gold}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.green[_ngcontent-%COMP%]{background-color:#4caf5026;color:#4caf50}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.purple[_ngcontent-%COMP%]{background-color:#9c27b026;color:#9c27b0}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.blue[_ngcontent-%COMP%]{background-color:#2196f326;color:#2196f3}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.teal[_ngcontent-%COMP%]{background-color:#00968826;color:#009688}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.orange[_ngcontent-%COMP%]{background-color:#ff980026;color:#ff9800}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.amber[_ngcontent-%COMP%]{background-color:#ffc10726;color:#ffc107}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.indigo[_ngcontent-%COMP%]{background-color:#3f51b526;color:#3f51b5}.top-students-card[_ngcontent-%COMP%]   .badges-row[_ngcontent-%COMP%]   .badge-chip.brown[_ngcontent-%COMP%]{background-color:#79554826;color:#795548}.top-students-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:none}@media(max-width:768px){.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:16px;gap:12px}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-rank[_ngcontent-%COMP%]{margin-right:0;margin-bottom:8px}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]{margin-right:0;margin-bottom:8px;align-self:center}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-avatar[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]{width:60px;height:60px}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-info[_ngcontent-%COMP%]{width:100%}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-name-row[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:8px}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-name-row[_ngcontent-%COMP%]   .score-chip[_ngcontent-%COMP%]{align-self:flex-start}.top-students-card[_ngcontent-%COMP%]   .student-card[_ngcontent-%COMP%]   .student-details[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}  .dark .top-students-card .student-card{border-bottom:1px solid rgba(255,255,255,.1)!important}"]})}}return n})();export{Ve as a,qe as b,ni as c,ie as d,be as e,Ai as f,Fi as g,Zi as h};
