(this["webpackJsonpnames-engine"]=this["webpackJsonpnames-engine"]||[]).push([[0],{171:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(49),r=n.n(s),i=n(4),l=n(5),o=n(21),h=n(7),d=n(6),u=(n(54),n(0)),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"searchBox",children:Object(u.jsx)("input",{className:"search",type:"text",onChange:this.props.onChange,placeholder:"Enter Keywords..."})})}}]),n}(c.a.Component),m=(n(56),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"nameBox",children:Object(u.jsx)("a",{className:"domainLink",href:"https://in.godaddy.com/domainsearch/find?checkAvail=1&tmskey=1dom_03&domainToCheck="+this.props.val,target:"_blank",rel:"noreferrer",children:this.props.val})})}}]),n}(c.a.Component)),p=(n(57),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"namesBox",children:this.props.namesList.map((function(e){return Object(u.jsx)(m,{val:e})}))})}}]),n}(c.a.Component)),b=(n(58),n.p+"static/media/header_image.3c07908e.jpg"),O=n(59),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={value:"",names:[],handleExpanded:!0,handleFont:!0},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value?O(e.target.value):[];this.setState({value:e.target.value,handleExpanded:!(e.target.value.length>0),handleFont:!(e.target.value.length>0),names:t})}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"title_image ".concat(this.state.handleExpanded?"title_image_expanded":"title_image_contracted"),src:b,alt:"picture"}),Object(u.jsx)("h1",{className:"title ".concat(this.state.handleFont?"title_expanded":"title_contracted"),children:"Names Engine!"}),Object(u.jsx)(j,{onChange:this.handleChange}),Object(u.jsx)(p,{namesList:this.state.names})]})})}}]),n}(c.a.Component);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){}},[[171,1,2]]]);
//# sourceMappingURL=main.6572a248.chunk.js.map