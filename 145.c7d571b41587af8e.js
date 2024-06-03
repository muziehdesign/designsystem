"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[145],{9145:(re,F,r)=>{r.r(F),r.d(F,{DropdownMenuGuidelinesComponent:()=>ae});var t=r(4438),h=r(6039),l=r(7336),k=r(1413),w=r(7786),D=r(8359),S=r(7673),A=r(5007),T=r(9172),x=r(5558),R=r(6697),E=r(6977),b=r(5964),B=r(1986),O=r(177),y=r(6600),X=r(6939),m=r(9969),H=r(8203),p=r(7987),G=r(6860),Y=r(7333);const z=["mat-menu-item",""],Q=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],V=["mat-icon, [matMenuItemIcon]","*"];function K(a,N){1&a&&(t.qSk(),t.j41(0,"svg",2),t.nrm(1,"polygon",3),t.k0s())}const Z=["*"];function $(a,N){if(1&a){const e=t.RV6();t.j41(0,"div",0),t.bIt("keydown",function(i){t.eBV(e);const s=t.XpG();return t.Njj(s._handleKeydown(i))})("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.closed.emit("click"))})("@transformMenu.start",function(i){t.eBV(e);const s=t.XpG();return t.Njj(s._onAnimationStart(i))})("@transformMenu.done",function(i){t.eBV(e);const s=t.XpG();return t.Njj(s._onAnimationDone(i))}),t.j41(1,"div",1),t.SdG(2),t.k0s()()}if(2&a){const e=t.XpG();t.HbH(e._classList),t.Y8G("id",e.panelId)("@transformMenu",e._panelAnimationState),t.BMQ("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const P=new t.nKC("MAT_MENU_PANEL");let C=(()=>{class a{constructor(e,n,i,s,o){this._elementRef=e,this._document=n,this._focusMonitor=i,this._parentMenu=s,this._changeDetectorRef=o,this.role="menuitem",this.disabled=!1,this.disableRipple=!1,this._hovered=new k.B,this._focused=new k.B,this._highlighted=!1,this._triggersSubmenu=!1,s?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<n.length;i++)n[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static#e=this.\u0275fac=function(n){return new(n||a)(t.rXU(t.aKT),t.rXU(O.qQ),t.rXU(h.FN),t.rXU(P,8),t.rXU(t.gRc))};static#t=this.\u0275cmp=t.VBU({type:a,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator"],hostVars:8,hostBindings:function(n,i){1&n&&t.bIt("click",function(o){return i._checkDisabled(o)})("mouseenter",function(){return i._handleMouseEnter()}),2&n&&(t.BMQ("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),t.AVh("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[t.Mj6.HasDecoratorInputTransform,"disabled","disabled",t.L39],disableRipple:[t.Mj6.HasDecoratorInputTransform,"disableRipple","disableRipple",t.L39]},exportAs:["matMenuItem"],standalone:!0,features:[t.GFd,t.aNF],attrs:z,ngContentSelectors:V,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(n,i){1&n&&(t.NAR(Q),t.SdG(0),t.j41(1,"span",0),t.SdG(2,1),t.k0s(),t.nrm(3,"div",1),t.DNE(4,K,2,0,":svg:svg",2)),2&n&&(t.R7$(3),t.Y8G("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),t.R7$(),t.vxM(4,i._triggersSubmenu?4:-1))},dependencies:[y.r6],encapsulation:2,changeDetection:0})}return a})();const W=new t.nKC("MatMenuContent"),I={transformMenu:(0,m.hZ)("transformMenu",[(0,m.wk)("void",(0,m.iF)({opacity:0,transform:"scale(0.8)"})),(0,m.kY)("void => enter",(0,m.i0)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,m.iF)({opacity:1,transform:"scale(1)"}))),(0,m.kY)("* => void",(0,m.i0)("100ms 25ms linear",(0,m.iF)({opacity:0})))]),fadeInItems:(0,m.hZ)("fadeInItems",[(0,m.wk)("showing",(0,m.iF)({opacity:1})),(0,m.kY)("void => *",[(0,m.iF)({opacity:0}),(0,m.i0)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let J=0;const q=new t.nKC("mat-menu-default-options",{providedIn:"root",factory:function ee(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let g=(()=>{class a{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}set panelClass(e){const n=this._previousPanelClass,i={...this._classList};n&&n.length&&n.split(" ").forEach(s=>{i[s]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(s=>{i[s]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,n,i,s){this._elementRef=e,this._ngZone=n,this._changeDetectorRef=s,this._elevationPrefix="mat-elevation-z",this._baseElevation=8,this._directDescendantItems=new t.rOR,this._classList={},this._panelAnimationState="void",this._animationDone=new k.B,this.closed=new t.bkB,this.close=this.closed,this.panelId="mat-menu-panel-"+J++,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this.overlapTrigger=i.overlapTrigger,this.hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new h.Bu(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,T.Z)(this._directDescendantItems),(0,x.n)(e=>(0,w.h)(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const i=e.toArray(),s=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[s]&&!i[s].disabled?n.setActiveItem(s):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,T.Z)(this._directDescendantItems),(0,x.n)(n=>(0,w.h)(...n.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const n=e.keyCode,i=this._keyManager;switch(n){case l._f:(0,l.rp)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case l.UQ:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case l.LE:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===l.i7||n===l.n6)&&i.setFocusOrigin("keyboard"),void i.onKeydown(e)}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,R.s)(1)).subscribe(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const n=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${n}`,s=Object.keys(this._classList).find(o=>o.startsWith(this._elevationPrefix));if(!s||s===this._previousElevation){const o={...this._classList};this._previousElevation&&(o[this._previousElevation]=!1),o[i]=!0,this._previousElevation=i,this._classList=o}}setPositionClasses(e=this.xPosition,n=this.yPosition){this._classList={...this._classList,"mat-menu-before":"before"===e,"mat-menu-after":"after"===e,"mat-menu-above":"above"===n,"mat-menu-below":"below"===n},this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,T.Z)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}static#e=this.\u0275fac=function(n){return new(n||a)(t.rXU(t.aKT),t.rXU(t.SKi),t.rXU(q),t.rXU(t.gRc))};static#t=this.\u0275cmp=t.VBU({type:a,selectors:[["mat-menu"]],contentQueries:function(n,i,s){if(1&n&&(t.wni(s,W,5),t.wni(s,C,5),t.wni(s,C,4)),2&n){let o;t.mGM(o=t.lsd())&&(i.lazyContent=o.first),t.mGM(o=t.lsd())&&(i._allItems=o),t.mGM(o=t.lsd())&&(i.items=o)}},viewQuery:function(n,i){if(1&n&&t.GBs(t.C4Q,5),2&n){let s;t.mGM(s=t.lsd())&&(i.templateRef=s.first)}},hostVars:3,hostBindings:function(n,i){2&n&&t.BMQ("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[t.Mj6.None,"aria-label","ariaLabel"],ariaLabelledby:[t.Mj6.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[t.Mj6.None,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[t.Mj6.HasDecoratorInputTransform,"overlapTrigger","overlapTrigger",t.L39],hasBackdrop:[t.Mj6.HasDecoratorInputTransform,"hasBackdrop","hasBackdrop",e=>null==e?null:(0,t.L39)(e)],panelClass:[t.Mj6.None,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],standalone:!0,features:[t.Jv_([{provide:P,useExisting:a}]),t.GFd,t.aNF],ngContentSelectors:Z,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mat-mdc-elevation-specific",3,"keydown","click","id"],[1,"mat-mdc-menu-content"]],template:function(n,i){1&n&&(t.NAR(),t.DNE(0,$,3,7,"ng-template"))},styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-divider{color:var(--mat-menu-divider-color);margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:var(--mat-menu-item-trailing-spacing);padding-right:var(--mat-menu-item-leading-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]),.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon])[dir=rtl]{padding-left:var(--mat-menu-item-with-icon-trailing-spacing);padding-right:var(--mat-menu-item-with-icon-leading-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[I.transformMenu,I.fadeInItems]},changeDetection:0})}return a})();const j=new t.nKC("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{const a=(0,t.WQX)(p.hJ);return()=>a.scrollStrategies.reposition()}}),ne={provide:j,deps:[p.hJ],useFactory:function te(a){return()=>a.scrollStrategies.reposition()}},L=(0,G.BQ)({passive:!0});let ie=(()=>{class a{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,n,i,s,o,c,d,f,_){this._overlay=e,this._element=n,this._viewContainerRef=i,this._menuItemInstance=c,this._dir=d,this._focusMonitor=f,this._ngZone=_,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=D.yU.EMPTY,this._hoverSubscription=D.yU.EMPTY,this._menuCloseSubscription=D.yU.EMPTY,this._changeDetectorRef=(0,t.WQX)(t.gRc),this._handleTouchStart=v=>{(0,h.w6)(v)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new t.bkB,this.onMenuOpen=this.menuOpened,this.menuClosed=new t.bkB,this.onMenuClose=this.menuClosed,this._scrollStrategy=s,this._parentMaterialMenu=o instanceof g?o:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,L)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,L),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const e=this.menu;if(this._menuOpen||!e)return;const n=this._createOverlay(e),i=n.getConfig(),s=i.positionStrategy;this._setPosition(e,s),i.hasBackdrop=null==e.hasBackdrop?!this.triggersSubmenu():e.hasBackdrop,n.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof g&&(e._startAnimation(),e._directDescendantItems.changes.pipe((0,E.Q)(e.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof g?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,b.p)(i=>"void"===i.toState),(0,R.s)(1),(0,E.Q)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let n=0,i=e.parentMenu;for(;i;)n++,i=i.parentMenu;e.setElevation(n)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){const n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new p.rR({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(i=>{const s="start"===i.connectionPair.overlayX?"after":"before",o="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(s,o)):e.setPositionClasses(s,o)})}_setPosition(e,n){let[i,s]="before"===e.xPosition?["end","start"]:["start","end"],[o,c]="above"===e.yPosition?["bottom","top"]:["top","bottom"],[d,f]=[o,c],[_,v]=[i,s],M=0;if(this.triggersSubmenu()){if(v=i="before"===e.xPosition?"start":"end",s=_="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const U=this._parentMaterialMenu.items.first;this._parentInnerPadding=U?U._getHostElement().offsetTop:0}M="bottom"===o?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(d="top"===o?"bottom":"top",f="top"===c?"bottom":"top");n.withPositions([{originX:i,originY:d,overlayX:_,overlayY:o,offsetY:M},{originX:s,originY:d,overlayX:v,overlayY:o,offsetY:M},{originX:i,originY:f,overlayX:_,overlayY:c,offsetY:-M},{originX:s,originY:f,overlayX:v,overlayY:c,offsetY:-M}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,S.of)(),s=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,b.p)(o=>o!==this._menuItemInstance),(0,b.p)(()=>this._menuOpen)):(0,S.of)();return(0,w.h)(e,i,s,n)}_handleMousedown(e){(0,h._G)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const n=e.keyCode;(n===l.Fm||n===l.t6)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===l.LE&&"ltr"===this.dir||n===l.UQ&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,b.p)(e=>e===this._menuItemInstance&&!e.disabled),(0,B.c)(0,A.$)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof g&&this.menu._isAnimating?this.menu._animationDone.pipe((0,R.s)(1),(0,B.c)(0,A.$),(0,E.Q)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new X.VA(e.templateRef,this._viewContainerRef)),this._portal}static#e=this.\u0275fac=function(n){return new(n||a)(t.rXU(p.hJ),t.rXU(t.aKT),t.rXU(t.c1b),t.rXU(j),t.rXU(P,8),t.rXU(C,10),t.rXU(H.dS,8),t.rXU(h.FN),t.rXU(t.SKi))};static#t=this.\u0275dir=t.FsC({type:a,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(n,i){1&n&&t.bIt("click",function(o){return i._handleClick(o)})("mousedown",function(o){return i._handleMousedown(o)})("keydown",function(o){return i._handleKeydown(o)}),2&n&&t.BMQ("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[t.Mj6.None,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[t.Mj6.None,"matMenuTriggerFor","menu"],menuData:[t.Mj6.None,"matMenuTriggerData","menuData"],restoreFocus:[t.Mj6.None,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],standalone:!0})}return a})(),se=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=t.$C({type:a});static#n=this.\u0275inj=t.G2t({providers:[ne],imports:[O.MD,y.pZ,y.yE,p.z_,Y.Gj,y.yE]})}return a})();var u=r(2815),oe=r(6542);let ae=(()=>{class a{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275cmp=t.VBU({type:a,selectors:[["app-dropdown-menu-guidelines"]],standalone:!0,features:[t.aNF],decls:28,vars:1,consts:[["menu","matMenu"],[1,"prose"],[1,"example"],["ngbDropdown","",1,"d-inline-block"],["id","dropdownBasic1","ngbDropdownToggle","",1,"button","button-secondary"],["key","chevron-down",1,"ml-4"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1"],["ngbDropdownItem",""],[1,"button","button-secondary",3,"matMenuTriggerFor"],["key","dots-horizontal"],["mat-menu-item",""]],template:function(n,i){if(1&n&&(t.j41(0,"header")(1,"h1"),t.EFF(2,"Dropdown menu"),t.k0s(),t.j41(3,"p",1),t.EFF(4,"Use a dropdown menu to group related commands."),t.k0s()(),t.j41(5,"div",2)(6,"div",3)(7,"button",4),t.EFF(8,"Toggle dropdown "),t.nrm(9,"mz-svg-icon",5),t.k0s(),t.j41(10,"div",6)(11,"button",7),t.EFF(12,"Action - 1"),t.k0s(),t.j41(13,"button",7),t.EFF(14,"Another Action"),t.k0s(),t.j41(15,"button",7),t.EFF(16,"Something else is here"),t.k0s()()()(),t.j41(17,"div",2)(18,"button",8),t.nrm(19,"mz-svg-icon",9),t.k0s(),t.j41(20,"mat-menu",null,0)(22,"button",10),t.EFF(23,"Lock"),t.k0s(),t.j41(24,"button",10),t.EFF(25,"Unlock"),t.k0s(),t.j41(26,"button",10),t.EFF(27,"Activate"),t.k0s()()()),2&n){const s=t.sdS(21);t.R7$(18),t.Y8G("matMenuTriggerFor",s)}},dependencies:[se,g,C,ie,u.UN,u.tg,u.do,u.U0,u._H,u.Eu,oe.DM]})}return a})()}}]);