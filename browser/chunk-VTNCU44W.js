import{n as V,o as L}from"./chunk-XAGPP3NS.js";import"./chunk-S7ZBELIU.js";import"./chunk-KW42OSGD.js";import"./chunk-4J7264TK.js";import{q as T}from"./chunk-DXKQPQSL.js";import{k as x,s as z}from"./chunk-7DT3MKEW.js";import{Cb as l,Db as s,Ib as h,Nb as u,Pb as S,Yb as c,_b as w,ab as p,fc as v,hc as M,na as I,nc as y,rb as C,tb as f,xa as a,ya as m}from"./chunk-BXRIWIV5.js";import"./chunk-EQDQRRRY.js";var E=i=>({"scroll-item-selected":i});function D(i,n){if(i&1){let d=h();l(0,"div",3),u("click",function(){let r=a(d).$implicit,e=S();return m(e.onItemSelected(r))}),c(1),s()}if(i&2){let d=n.$implicit,t=S();f("ngClass",M(2,E,t.selectedItem===d)),p(),w("Custom Content: ",d.label,"")}}var N=(()=>{let n=class n{constructor(){this.items=[],this.isLoading=!1,this.page=0,this.pageSize=10,this.selectedItem=null,this.loadMoreItems()}loadMoreItems(){this.isLoading||(this.isLoading=!0,setTimeout(()=>{let t=Array.from({length:this.pageSize},(r,e)=>{let o=new Date;return o.setHours(o.getHours()-(e+this.page*this.pageSize*24)),{id:`item-${this.page*this.pageSize+e}`,label:"Date: "+o.toLocaleString()}});this.items=[...this.items,...t],this.page++,this.isLoading=!1},1e3))}onItemSelected(t){this.selectedItem=t,console.log("Item selected:",t)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=I({type:n,selectors:[["app-infinite-scroll"]],standalone:!0,features:[v],decls:17,vars:6,consts:[["itemTemplate",""],[1,"demo","bg-white","p-5"],[3,"itemSelected","loadMore","items","isLoading","containerHeight"],[1,"scroll-item",3,"click","ngClass"]],template:function(r,e){if(r&1){let o=h();l(0,"header")(1,"h1"),c(2,"Infinite scroll component"),s(),l(3,"p"),c(4," The InfiniteScrollComponent provides an efficient way to display a dynamically-loading list of items, enabling a seamless infinite scroll experience. This component supports content projection, allowing for extensive customization of item displays. It is designed to handle the dynamic loading of additional items as the user scrolls to the bottom of the container. External control over item loading and event handling for item selection is also supported. "),s()(),l(5,"article")(6,"h1"),c(7,"Infinite scroll custom content"),s(),l(8,"div",1)(9,"mz-infinite-scroll",2),u("itemSelected",function(g){return a(o),m(e.onItemSelected(g))})("loadMore",function(){return a(o),m(e.loadMoreItems())}),C(10,D,2,4,"ng-template",null,0,y),s()()(),l(12,"article")(13,"h1"),c(14,"Infinite scroll default content"),s(),l(15,"div",1)(16,"mz-infinite-scroll",2),u("itemSelected",function(g){return a(o),m(e.onItemSelected(g))})("loadMore",function(){return a(o),m(e.loadMoreItems())}),s()()()}r&2&&(p(9),f("items",e.items)("isLoading",e.isLoading)("containerHeight","300px"),p(7),f("items",e.items)("isLoading",e.isLoading)("containerHeight","300px"))},dependencies:[z,x,T,L,V]});let i=n;return i})();export{N as InfiniteScrollGuidelinesComponent};
