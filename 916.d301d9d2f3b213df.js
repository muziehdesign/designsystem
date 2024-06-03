"use strict";(self.webpackChunkkitchensink_ui=self.webpackChunkkitchensink_ui||[]).push([[916],{3916:(b,c,l)=>{l.r(c),l.d(c,{FormComponent:()=>_});var F=l(177),o=l(9417),g=l(6542),u=l(7673),h=l(1986),p=l(980),e=l(4438);const f=["addressForm"];function E(t,m){1&t&&(e.j41(0,"small",64),e.nrm(1,"mz-svg-icon",65),e.EFF(2," Invalid value "),e.k0s())}function j(t,m){1&t&&(e.j41(0,"small",64),e.nrm(1,"mz-svg-icon",65),e.EFF(2," Invalid value "),e.k0s())}function k(t,m){1&t&&(e.j41(0,"small",64),e.nrm(1,"mz-svg-icon",65),e.EFF(2," Invalid value(s) "),e.k0s())}function w(t,m){1&t&&(e.j41(0,"div",66),e.nrm(1,"mz-svg-icon",67),e.EFF(2," Saved! "),e.k0s())}function C(t,m){1&t&&(e.j41(0,"div",68),e.nrm(1,"mz-svg-icon",65),e.EFF(2," Unexpected error, try submitting the form again. "),e.k0s())}let _=(()=>{class t{constructor(){this.model={unexpectedError:!1},this.isLoading=!1,this.submitCount=0}ngOnInit(){}onFormChange(){1==this.isSuccessful&&(this.isSuccessful=void 0)}onSubmit(){this.submitCount++,console.log("is submitting event only when is not busy",this.isLoading),this.isSuccessful=void 0,!this.addressForm.invalid&&(this.isLoading=!0,(0,u.of)(null).pipe((0,h.c)(1500),(0,p.j)(()=>this.isLoading=!1)).subscribe(d=>{this.isSuccessful=0==this.model.unexpectedError}))}displayError(d){return this.addressForm?.form.controls[d]?.invalid&&(this.addressForm?.form.controls[d]?.touched||this.addressForm?.submitted)}static#e=this.\u0275fac=function(a){return new(a||t)};static#s=this.\u0275cmp=e.VBU({type:t,selectors:[["app-form"]],viewQuery:function(a,s){if(1&a&&e.GBs(f,7),2&a){let i;e.mGM(i=e.lsd())&&(s.addressForm=i.first)}},standalone:!0,features:[e.aNF],decls:306,vars:15,consts:[["addressForm","ngForm"],[1,"prose"],["href","https://atlassian.design/components/form/usage"],[1,"example"],[1,"form",3,"ngSubmit","change"],[1,"description"],[1,"field"],[1,"field-label"],[1,"text-red-500"],["type","text","name","recipientName","required","",1,"field-control",3,"ngModelChange","ngModel"],["class","field-error",4,"ngIf"],[1,"help-text"],["type","text","name","address1","required","",1,"field-control",3,"ngModelChange","ngModel"],["type","text","name","address2",1,"field-control",3,"ngModelChange","ngModel"],[1,"grid","grid-cols-3","gap-x-4"],["type","text","name","city","required","",1,"field-control",3,"ngModelChange","ngModel"],["name","state","required","",1,"field-control",3,"ngModelChange","ngModel"],["type","text","name","zipCode","required","",1,"field-control",3,"ngModelChange","ngModel"],[1,"fieldset"],["type","text","name","navigationInstructions",1,"field-control",3,"ngModelChange","ngModel"],["type","text","name","securityCode",1,"field-control",3,"ngModelChange","ngModel"],[1,"field","field-checkbox"],["type","checkbox","name","unexpectedError",1,"field-control",3,"ngModelChange","ngModel"],[1,"footer"],["class","form-message success",4,"ngIf"],["class","form-message failed text-danger",4,"ngIf"],["mzButton","","variant","primary",3,"busy"],[1,"text-block"],[1,"list-outside","list-decimal","ml-4"],[1,"mb-2"],[1,"list-outside","list-decimal","ml-8"],[1,"list-disc","list-inside","text-block"],[1,"list-inside","list-disc","text-block"],[1,"list-inside","list-disc","text-block","ml-8"],[1,"list-inside","list-disc"],["href","https://atlassian.design/patterns/forms"],["href","https://www.nngroup.com/articles/errors-forms-design-guidelines/"],["href","https://www.nngroup.com/articles/error-message-guidelines/"],["href","https://www.nngroup.com/articles/web-form-design/"],["href","https://uxdesign.cc/title-case-vs-sentence-case-in-ux-writing-212087192261"],["href","https://uxplanet.org/why-letter-casing-is-important-to-consider-during-design-decisions-50402acd0a4e"],["href","https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/target-size.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"],["href","https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html"],[1,"list-disc","list-inside"],[1,"field-error"],["key","exclamation","type","solid"],[1,"form-message","success"],["key","check-circle","type","solid"],[1,"form-message","failed","text-danger"]],template:function(a,s){if(1&a){const i=e.RV6();e.j41(0,"header")(1,"h1"),e.EFF(2,"Form"),e.k0s(),e.j41(3,"p",1),e.EFF(4,"Use a form to collect information from the user. Guidelines here are on top of "),e.j41(5,"a",2),e.EFF(6,"Atlassian Design System's on forms."),e.k0s()()(),e.j41(7,"article")(8,"h2"),e.EFF(9,"Example"),e.k0s(),e.j41(10,"div",3)(11,"form",4,0),e.bIt("ngSubmit",function(){return e.eBV(i),e.Njj(s.onSubmit())})("change",function(){return e.eBV(i),e.Njj(s.onFormChange())}),e.j41(13,"header")(14,"h3"),e.EFF(15,"Add delivery address"),e.k0s(),e.j41(16,"div",5),e.EFF(17,"Add a new delivery address to your profile."),e.k0s()(),e.j41(18,"label",6)(19,"span",7),e.EFF(20,"Recipent name "),e.j41(21,"span",8),e.EFF(22,"*"),e.k0s()(),e.j41(23,"input",9),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.recipientName,n)||(s.model.recipientName=n),e.Njj(n)}),e.k0s(),e.DNE(24,E,3,0,"small",10),e.j41(25,"small",11),e.EFF(26,"This is what instruction text would look like"),e.k0s()(),e.j41(27,"label",6)(28,"span",7),e.EFF(29,"Address 1 "),e.j41(30,"span",8),e.EFF(31,"*"),e.k0s()(),e.j41(32,"input",12),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.address1,n)||(s.model.address1=n),e.Njj(n)}),e.k0s(),e.DNE(33,j,3,0,"small",10),e.k0s(),e.j41(34,"label",6)(35,"span",7),e.EFF(36,"Address 2"),e.k0s(),e.j41(37,"input",13),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.address2,n)||(s.model.address2=n),e.Njj(n)}),e.k0s()(),e.j41(38,"div",14)(39,"label",6)(40,"span",7),e.EFF(41,"City "),e.j41(42,"span",8),e.EFF(43,"*"),e.k0s()(),e.j41(44,"input",15),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.city,n)||(s.model.city=n),e.Njj(n)}),e.k0s()(),e.j41(45,"label",6)(46,"span",7),e.EFF(47,"State "),e.j41(48,"span",8),e.EFF(49,"*"),e.k0s()(),e.j41(50,"select",16),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.state,n)||(s.model.state=n),e.Njj(n)}),e.j41(51,"option"),e.EFF(52,"UT"),e.k0s(),e.j41(53,"option"),e.EFF(54,"NY"),e.k0s()()(),e.j41(55,"label",6)(56,"span",7),e.EFF(57,"Zip code "),e.j41(58,"span",8),e.EFF(59,"*"),e.k0s()(),e.j41(60,"input",17),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.zipCode,n)||(s.model.zipCode=n),e.Njj(n)}),e.k0s()(),e.DNE(61,k,3,0,"small",10),e.k0s(),e.j41(62,"fieldset",18)(63,"legend"),e.EFF(64,"Delivery instructions"),e.k0s(),e.j41(65,"label",6)(66,"span",7),e.EFF(67,"Navigation instructions"),e.k0s(),e.j41(68,"input",19),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.navigationInstructions,n)||(s.model.navigationInstructions=n),e.Njj(n)}),e.k0s(),e.j41(69,"small",11),e.EFF(70,"Provide details such as nearby landmark to help find the address."),e.k0s()(),e.j41(71,"label",6)(72,"span",7),e.EFF(73,"Security code"),e.k0s(),e.j41(74,"input",20),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.securityCode,n)||(s.model.securityCode=n),e.Njj(n)}),e.k0s(),e.j41(75,"small",11),e.EFF(76,"Security code for the door"),e.k0s()()(),e.j41(77,"fieldset",18)(78,"legend"),e.EFF(79,"Form scenario"),e.k0s(),e.j41(80,"label",21)(81,"input",22),e.mxI("ngModelChange",function(n){return e.eBV(i),e.DH7(s.model.unexpectedError,n)||(s.model.unexpectedError=n),e.Njj(n)}),e.k0s(),e.j41(82,"span",7),e.EFF(83,"Unexpected error"),e.k0s()()(),e.j41(84,"div",23),e.DNE(85,w,3,0,"div",24)(86,C,3,0,"div",25),e.j41(87,"button",26),e.EFF(88," Add delivery address "),e.k0s()()()()(),e.j41(89,"article")(90,"h2"),e.EFF(91,"Usage"),e.k0s(),e.j41(92,"h3"),e.EFF(93,"Anatomy"),e.k0s(),e.j41(94,"div",27)(95,"ol",28)(96,"li",29)(97,"strong"),e.EFF(98,"Form title"),e.k0s(),e.j41(99,"p"),e.EFF(100,"Concise text that describes the form. Use appropriate heading element based on where form is on page."),e.k0s()(),e.j41(101,"li",29)(102,"strong"),e.EFF(103,"Form description"),e.k0s(),e.j41(104,"p"),e.EFF(105,"Optional. Use a form description to provide additional context."),e.k0s()(),e.j41(106,"li",29)(107,"strong"),e.EFF(108,"Form section"),e.k0s(),e.j41(109,"p"),e.EFF(110,"Use form sections to group information that are logically related. There can be multiple form sections in one form. They should be grouped using "),e.j41(111,"code"),e.EFF(112,"<fieldset>"),e.k0s(),e.EFF(113,", with "),e.j41(114,"code"),e.EFF(115,"<legend>"),e.k0s(),e.EFF(116," as the headline. "),e.k0s()(),e.j41(117,"li",29)(118,"strong"),e.EFF(119,"Field"),e.k0s(),e.j41(120,"p"),e.EFF(121,"A field is an entry in the form."),e.k0s(),e.j41(122,"ol",30)(123,"li")(124,"strong"),e.EFF(125,"Label"),e.k0s(),e.j41(126,"p"),e.EFF(127,"Use a label to communicate what the field is for. Use sentence casing."),e.k0s()(),e.j41(128,"li")(129,"strong"),e.EFF(130,"Required field"),e.k0s(),e.j41(131,"p"),e.EFF(132,"Use asterisk to indicate a required field."),e.k0s()(),e.j41(133,"li")(134,"strong"),e.EFF(135,"Help text"),e.k0s(),e.j41(136,"p"),e.EFF(137,"Use help text to provide instructions so that users don't have to guess."),e.k0s()(),e.j41(138,"li")(139,"strong"),e.EFF(140,"Error message"),e.k0s(),e.j41(141,"p"),e.EFF(142,"Use field error message to communicate that associated field needs correction."),e.k0s()()()(),e.j41(143,"li",29)(144,"strong"),e.EFF(145,"Form footer"),e.k0s(),e.j41(146,"p"),e.EFF(147,"Use footer section to communicate available actions. It should always contain exactly one primary action button, and form errors above button."),e.k0s()()()(),e.j41(148,"h3"),e.EFF(149,"Layout"),e.k0s(),e.j41(150,"div",27),e.EFF(151," Use one column layout. "),e.k0s(),e.j41(152,"h3"),e.EFF(153,"Best practices"),e.k0s(),e.j41(154,"p"),e.EFF(155,"A form is a conversation between the system and the user. Practice good communication -- be helpful, concise, and timely."),e.k0s(),e.j41(156,"ul",31)(157,"li"),e.EFF(158,"Use sentence casing for labels"),e.k0s(),e.j41(159,"li"),e.EFF(160,"Use clear and concise text for labels to make things clear and simple to understand"),e.k0s(),e.j41(161,"li"),e.EFF(162,"Button text should state the action that the button performs when clicked."),e.k0s(),e.j41(163,"li"),e.EFF(164,"Avoid multiple action buttons. Forms usually should have 1-2 buttons."),e.k0s(),e.j41(165,"li"),e.EFF(166,"Avoid reset button, and cancel button to avoid misclicks, unless they add value."),e.k0s(),e.j41(167,"li"),e.EFF(168,"Avoid placeholder attributes due to accessibility concerns."),e.k0s(),e.j41(169,"li"),e.EFF(170,"Never disable a submit button."),e.k0s(),e.j41(171,"li"),e.EFF(172,"Present fields in a single column layout to keep users in flow."),e.k0s(),e.j41(173,"li"),e.EFF(174,"Use logical grouping and sequencing for form field arrangements."),e.k0s(),e.j41(175,"li"),e.EFF(176,"Use `autocomplete` to help users auto-fill their personal information"),e.k0s()(),e.j41(177,"h3"),e.EFF(178,"Error messages"),e.k0s(),e.j41(179,"ul",32)(180,"li"),e.EFF(181,"Error message should be clear, precise, and constructive to help user understand what the error is and how to correct it."),e.k0s(),e.j41(182,"li"),e.EFF(183,"Place error message right underneath the field being validated. Keeping them close makes the error noticeable and helps user make the association."),e.k0s(),e.j41(184,"li"),e.EFF(185," Validate and display error messages as soon as user completes input to provide quick feedback "),e.j41(186,"ul",33)(187,"li"),e.EFF(188,"Always perform simple validations on client side"),e.k0s()()()(),e.j41(189,"h3"),e.EFF(190,"Button positioning"),e.k0s(),e.j41(191,"ul",32)(192,"li"),e.EFF(193,"Buttons should be sorted by importance from left to right for pages. Primary button should always be first button."),e.k0s(),e.j41(194,"li"),e.EFF(195,"Buttons should be sorted by importance from right to left for modals and multi-step forms and modal. Primary button should always be last."),e.k0s()(),e.j41(196,"h3"),e.EFF(197,"References"),e.k0s(),e.j41(198,"ul",34)(199,"li")(200,"a",35),e.EFF(201,"Atlassian Design System Forms Patterns"),e.k0s()(),e.j41(202,"li")(203,"a",36),e.EFF(204,"How to Report Errors in Forms: 10 Design Guidelines"),e.k0s()(),e.j41(205,"li")(206,"a",37),e.EFF(207,"Error Message Guidelines"),e.k0s()(),e.j41(208,"li")(209,"a",38),e.EFF(210,"Website Forms Usability: Top 10 Recommendations"),e.k0s()(),e.j41(211,"li")(212,"a",39),e.EFF(213,"Title case vs sentence case in UX writing"),e.k0s()(),e.j41(214,"li")(215,"a",40),e.EFF(216,"Why letter casing is important to consider during design decisions"),e.k0s()()()(),e.j41(217,"article")(218,"h2"),e.EFF(219,"Accessibility guidelines applied"),e.k0s(),e.j41(220,"ul",34)(221,"li")(222,"a",41),e.EFF(223,"Understanding Success Criterion 1.3.1: Info and Relationships"),e.k0s()(),e.j41(224,"li")(225,"a",42),e.EFF(226,"Understanding Success Criterion 1.3.2: Meaningful Sequence"),e.k0s()(),e.j41(227,"li")(228,"a",43),e.EFF(229,"Understanding Success Criterion 1.3.5: Identify Input Purpose"),e.k0s()(),e.j41(230,"li")(231,"a",44),e.EFF(232,"Understanding Success Criterion 1.4.1: Use of Color"),e.k0s()(),e.j41(233,"li")(234,"a",45),e.EFF(235,"Understanding Success Criterion 2.1.1: Keyboard"),e.k0s()(),e.j41(236,"li")(237,"a",46),e.EFF(238,"Understanding Success Criterion 2.1.3: Keyboard (No Exception)"),e.k0s()(),e.j41(239,"li")(240,"a",47),e.EFF(241,"Understanding Success Criterion 2.4.3: Focus Order"),e.k0s()(),e.j41(242,"li")(243,"a",48),e.EFF(244,"Understanding Success Criterion 2.4.6: Headings and Labels"),e.k0s()(),e.j41(245,"li")(246,"a",49),e.EFF(247,"Understanding Success Criterion 2.4.7: Focus Visible"),e.k0s()(),e.j41(248,"li")(249,"a",50),e.EFF(250,"Understanding Success Criterion 2.4.10: Section Headings"),e.k0s()(),e.j41(251,"li")(252,"a",51),e.EFF(253,"Understanding Success Criterion 2.5.3: Label in Name"),e.k0s()(),e.j41(254,"li")(255,"a",52),e.EFF(256,"Understanding Success Criterion 2.5.5: Target Size"),e.k0s()(),e.j41(257,"li")(258,"a",53),e.EFF(259,"Understanding Success Criterion 3.1.5: Reading Level"),e.k0s()(),e.j41(260,"li")(261,"a",54),e.EFF(262,"Understanding Success Criterion 3.2.1: On Focus"),e.k0s()(),e.j41(263,"li")(264,"a",55),e.EFF(265,"Understanding Success Criterion 3.2.4: Consistent Identification"),e.k0s()(),e.j41(266,"li")(267,"a",56),e.EFF(268,"Understanding Success Criterion 3.2.5: Change on Request"),e.k0s()(),e.j41(269,"li")(270,"a",57),e.EFF(271,"Understanding Success Criterion 3.3.1: Error Identification"),e.k0s()(),e.j41(272,"li")(273,"a",58),e.EFF(274,"Understanding Success Criterion 3.3.2: Labels or Instructions"),e.k0s()(),e.j41(275,"li")(276,"a",59),e.EFF(277,"Understanding Success Criterion 3.3.3: Error Suggestion"),e.k0s()(),e.j41(278,"li")(279,"a",60),e.EFF(280,"Understanding Success Criterion 3.3.6: Error Prevention (All)"),e.k0s()(),e.j41(281,"li")(282,"a",61),e.EFF(283,"Understanding Success Criterion 4.1.3: Status Messages"),e.k0s()()(),e.j41(284,"h3"),e.EFF(285,"Pending"),e.k0s(),e.j41(286,"ul",34)(287,"li")(288,"a",62),e.EFF(289,"https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html"),e.k0s()()()(),e.j41(290,"article")(291,"h2"),e.EFF(292,"Work in progress"),e.k0s(),e.j41(293,"p"),e.EFF(294,"Form is still work in progress, with the following known TODOs."),e.k0s(),e.j41(295,"ul",63)(296,"li"),e.EFF(297,"Autofocus the first field by default."),e.k0s(),e.j41(298,"li"),e.EFF(299,"Finalize styles"),e.k0s(),e.j41(300,"li"),e.EFF(301,"Define field widths to use"),e.k0s(),e.j41(302,"li"),e.EFF(303,"Accessible readonly form"),e.k0s(),e.j41(304,"li"),e.EFF(305,"Form validation framework"),e.k0s()()()}2&a&&(e.R7$(23),e.R50("ngModel",s.model.recipientName),e.R7$(),e.Y8G("ngIf",s.displayError("recipientName")),e.R7$(8),e.R50("ngModel",s.model.address1),e.R7$(),e.Y8G("ngIf",s.displayError("address1")),e.R7$(4),e.R50("ngModel",s.model.address2),e.R7$(7),e.R50("ngModel",s.model.city),e.R7$(6),e.R50("ngModel",s.model.state),e.R7$(10),e.R50("ngModel",s.model.zipCode),e.R7$(),e.Y8G("ngIf",s.displayError("city")||s.displayError("state")||s.displayError("zipCode")),e.R7$(7),e.R50("ngModel",s.model.navigationInstructions),e.R7$(6),e.R50("ngModel",s.model.securityCode),e.R7$(7),e.R50("ngModel",s.model.unexpectedError),e.R7$(4),e.Y8G("ngIf",1==s.isSuccessful),e.R7$(),e.Y8G("ngIf",0==s.isSuccessful),e.R7$(),e.Y8G("busy",s.isLoading))},dependencies:[g._f,F.MD,F.bT,o.YN,o.qT,o.xH,o.y7,o.me,o.Zm,o.wz,o.BC,o.cb,o.YS,o.vS,o.cV,g.DM]})}return t})()}}]);