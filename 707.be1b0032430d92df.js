"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[707],{6707:(dt,D,d)=>{d.r(D),d.d(D,{ModalGuidelinesComponent:()=>ot});var t=d(4438);let N=(()=>{class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(a){return new(a||i)};static#i=this.\u0275cmp=t.VBU({type:i,selectors:[["app-modal-add-order"]],decls:7,vars:0,consts:[[1,"form"],[1,"field"],[1,"field-label"],["type","text",1,"field-control"]],template:function(a,o){1&a&&(t.j41(0,"h2"),t.EFF(1,"Add order"),t.k0s(),t.j41(2,"form",0)(3,"label",1)(4,"span",2),t.EFF(5,"Order number"),t.k0s(),t.nrm(6,"input",3),t.k0s()())}})}return i})();var c=d(7987),A=d(177),b=d(6039),h=d(2529),w=d(4085),O=d(6939),p=d(1413),z=d(7786),U=d(9030),_=d(5964),x=d(6697),G=d(9172),F=d(7336),T=d(6600);function X(i,n){}d(9969);class v{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const y="mdc-dialog--open",k="mdc-dialog--opening",E="mdc-dialog--closing";let M=(()=>{class i extends h.sU{constructor(e,a,o,r,s,m,g,V,nt){super(e,a,o,r,s,m,g,nt),this._animationMode=V,this._animationStateChanged=new t.bkB,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?L(this._config.enterAnimationDuration)??150:0,this._exitAnimationDuration=this._animationsEnabled?L(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(R,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(k,y)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(y),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(y),this._animationsEnabled?(this._hostElement.style.setProperty(R,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(E)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(k,E)}_waitForAnimationToComplete(e,a){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(a,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{"function"==typeof requestAnimationFrame?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}attachComponentPortal(e){const a=super.attachComponentPortal(e);return a.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),a}static#t=this.\u0275fac=function(a){return new(a||i)(t.rXU(t.aKT),t.rXU(b.GX),t.rXU(A.qQ,8),t.rXU(v),t.rXU(b.Z7),t.rXU(t.SKi),t.rXU(c.yY),t.rXU(t.bc$,8),t.rXU(b.FN))};static#i=this.\u0275cmp=t.VBU({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(a,o){2&a&&(t.Mr5("id",o._config.id),t.BMQ("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),t.AVh("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},standalone:!0,features:[t.Vt3,t.aNF],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(a,o){1&a&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,X,0,0,"ng-template",2),t.k0s()())},dependencies:[O.I3],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto;outline:0;transform:scale(0.8)}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--closing .mdc-dialog__surface{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{opacity:1}.mdc-dialog--open .mdc-dialog__surface{transform:none}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__container .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{width:100%;height:100%}.mat-mdc-dialog-component-host{display:contents}.mat-mdc-dialog-container{--mdc-dialog-container-elevation: var(--mdc-dialog-container-elevation-shadow);outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, 4px)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87))}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6))}.mat-mdc-dialog-container .mdc-dialog__container{transition:opacity linear var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container .mdc-dialog__surface{transition:transform var(--mat-dialog-transition-duration, 0ms) 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container,.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__surface{transition:none}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-title{padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2})}return i})();const R="--mat-dialog-transition-duration";function L(i){return null==i?null:"number"==typeof i?i:i.endsWith("ms")?(0,w.OE)(i.substring(0,i.length-2)):i.endsWith("s")?1e3*(0,w.OE)(i.substring(0,i.length-1)):"0"===i?0:null}var u=function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i}(u||{});class C{constructor(n,e,a){this._ref=n,this._containerInstance=a,this._afterOpened=new p.B,this._beforeClosed=new p.B,this._state=u.OPEN,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),a._animationStateChanged.pipe((0,_.p)(o=>"opened"===o.state),(0,x.s)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe((0,_.p)(o=>"closed"===o.state),(0,x.s)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,z.h)(this.backdropClick(),this.keydownEvents().pipe((0,_.p)(o=>o.keyCode===F._f&&!this.disableClose&&!(0,F.rp)(o)))).subscribe(o=>{this.disableClose||(o.preventDefault(),function S(i,n,e){return i._closeInteractionType=n,i.close(e)}(this,"keydown"===o.type?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe((0,_.p)(e=>"closing"===e.state),(0,x.s)(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=u.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=u.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}const Y=new t.nKC("MatMdcDialogData"),$=new t.nKC("mat-mdc-dialog-default-options"),I=new t.nKC("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{const i=(0,t.WQX)(c.hJ);return()=>i.scrollStrategies.block()}});let Q=0,f=(()=>{class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(e,a,o,r,s,m,g,V){this._overlay=e,this._defaultOptions=r,this._scrollStrategy=s,this._parentDialog=m,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new p.B,this._afterOpenedAtThisLevel=new p.B,this.dialogConfigClass=v,this.afterAllClosed=(0,U.v)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,G.Z)(void 0))),this._dialog=a.get(h.lG),this._dialogRefConstructor=C,this._dialogContainerType=M,this._dialogDataToken=Y}open(e,a){let o;(a={...this._defaultOptions||new v,...a}).id=a.id||"mat-mdc-dialog-"+Q++,a.scrollStrategy=a.scrollStrategy||this._scrollStrategy();const r=this._dialog.open(e,{...a,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:a},{provide:h.Pe,useValue:a}]},templateContext:()=>({dialogRef:o}),providers:(s,m,g)=>(o=new this._dialogRefConstructor(s,a,g),o.updatePosition(a?.position),[{provide:this._dialogContainerType,useValue:g},{provide:this._dialogDataToken,useValue:m.data},{provide:this._dialogRefConstructor,useValue:o}])});return o.componentRef=r.componentRef,o.componentInstance=r.componentInstance,this.openDialogs.push(o),this.afterOpened.next(o),o.afterClosed().subscribe(()=>{const s=this.openDialogs.indexOf(o);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(a=>a.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let a=e.length;for(;a--;)e[a].close()}static#t=this.\u0275fac=function(a){return new(a||i)(t.KVO(c.hJ),t.KVO(t.zZn),t.KVO(A.aZ,8),t.KVO($,8),t.KVO(I),t.KVO(i,12),t.KVO(c.Sf),t.KVO(t.bc$,8))};static#i=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),et=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#i=this.\u0275mod=t.$C({type:i});static#e=this.\u0275inj=t.G2t({providers:[f],imports:[h.Ph,c.z_,O.jc,T.yE,T.yE]})}return i})();var at=d(2815);let ot=(()=>{class i{constructor(e,a){this.modalService=e,this.dialog=a}ngOnInit(){}open(){this.dialog.open(N).afterClosed().subscribe(e=>{console.log("result: ",e)})}ngOnDestroy(){this.modal?.dismiss()}static#t=this.\u0275fac=function(a){return new(a||i)(t.rXU(at.Bq),t.rXU(f))};static#i=this.\u0275cmp=t.VBU({type:i,selectors:[["app-modal-guidelines"]],standalone:!0,features:[t.aNF],decls:38,vars:0,consts:[[1,"prose"],[1,"example"],[1,"button","button-primary",3,"click"],[1,"list-inside","list-disc"],[1,"text-block"],["href","https://atlassian.design/components/modal-dialog/usage#content-guidelines"]],template:function(a,o){1&a&&(t.j41(0,"header")(1,"h1"),t.EFF(2,"Modal"),t.k0s(),t.j41(3,"p",0),t.EFF(4,"Use a modal to capture information or acknowledgement from users immediately without having users lose context."),t.k0s()(),t.j41(5,"article")(6,"h2"),t.EFF(7,"Example"),t.k0s(),t.j41(8,"div",1)(9,"button",2),t.bIt("click",function(){return o.open()}),t.EFF(10,"Open"),t.k0s()()(),t.j41(11,"article")(12,"h2"),t.EFF(13,"Best practices"),t.k0s(),t.j41(14,"ul",3)(15,"li"),t.EFF(16,"Modals are invasive and should only be used sparingly"),t.k0s(),t.j41(17,"li"),t.EFF(18,"Modals should be used for short-term tasks"),t.k0s(),t.j41(19,"li"),t.EFF(20,"Avoid multiple steps inside a modal"),t.k0s(),t.j41(21,"li"),t.EFF(22,"Avoid modal dialogs for complex decision making"),t.k0s(),t.j41(23,"li"),t.EFF(24,"There should be at most one modal open at a given time"),t.k0s()(),t.j41(25,"h3"),t.EFF(26,"Content guidelines"),t.k0s(),t.j41(27,"p",4),t.EFF(28,"Guidelines are from "),t.j41(29,"a",5),t.EFF(30,"Atlassian's content guidelines"),t.k0s()(),t.j41(31,"ul",3)(32,"li"),t.EFF(33,"Modal dialog title should use sentence case and prioritize keywords"),t.k0s(),t.j41(34,"li"),t.EFF(35,"Modal dialog body should only contain valuable and relevant information that is both helpful and concise"),t.k0s(),t.j41(36,"li"),t.EFF(37,"Label elements with action verbs that indicate what happens when the element is selected. For example, label a select menu with Choose a user instead of Users."),t.k0s()()())},dependencies:[et]})}return i})()}}]);