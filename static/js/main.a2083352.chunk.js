(this["webpackJsonpnames-engine"]=this["webpackJsonpnames-engine"]||[]).push([[0],{172:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(49),l=n.n(c),o=n(2),r=n(3),i=n(21),h=n(5),d=n(4),u=(n(54),n(0)),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"searchBox",children:Object(u.jsx)("input",{className:"search",type:"text",onChange:this.props.onChange,placeholder:"Type Keywords"})})}}]),n}(s.a.Component),j=(n(56),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"nameBox",children:Object(u.jsx)("a",{className:"domainLink",href:"https://in.godaddy.com/domainsearch/find?checkAvail=1&tmskey=1dom_03&domainToCheck="+this.props.val,target:"_blank",rel:"noreferrer",children:this.props.val})})}}]),n}(s.a.Component)),b=(n(57),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleScrollDown=function(){document.getElementById("namesBox").scrollBy(0,50)},e.handleScrollUp=function(){document.getElementById("namesBox").scrollBy(0,-50)},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{id:"namesBox",className:"namesBox ".concat(!0===this.props.scrollEndValue?"scrollEnd":"scrollNotEnd"),children:this.props.namesList.map((function(e){return Object(u.jsx)(j,{val:e})}))}),Object(u.jsx)("button",{className:this.props.scrollingButton?"scrollUp":"noScrollUp",onClick:this.handleScrollUp,children:Object(u.jsx)("i",{className:"far fa-hand-point-up"})}),Object(u.jsx)("button",{className:this.props.scrollingButton?"scrollDown":"noScrollDown",onClick:this.handleScrollDown,children:Object(u.jsx)("i",{className:"far fa-hand-point-down"})})]})}}]),n}(s.a.Component)),p=(n(58),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:this.props.showMadeBy?"showMadeBy":"notShowMadeBy",children:[Object(u.jsx)("h3",{className:"author",children:"Made By:"}),Object(u.jsx)("h2",{className:"authorName",children:"Abdul Ghani"}),Object(u.jsxs)("a",{className:"linkedin",href:"https://www.linkedin.com/in/abdulghani07/",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fab fa-linkedin"})," abdulghani07"]}),Object(u.jsxs)("a",{className:"github",href:"https://github.com/Abdulghani007?tab=repositories",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fab fa-github"})," Abdulghani007"]}),Object(u.jsxs)("a",{className:"github",href:"https://github.com/Abdulghani007/Names-Engine/",target:"_blank",rel:"noreferrer",children:[Object(u.jsx)("i",{className:"fab fa-github-square"})," Names Engine!"]})]})}}]),n}(s.a.Component)),g=(n(59),n.p+"static/media/header_image.3c07908e.jpg"),O=n(60),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleScroll=function(){-1!==a.state.scrollTimer&&(a.setState({scrollEnd:!1}),clearTimeout(a.state.scrollTimer)),a.setState({scrollTimer:window.setTimeout((function(){a.setState({scrollEnd:!0}),console.log(a.state.scrollEnd)}),2e3)})},a.state={value:"",names:[],handleExpanded:!0,handleFont:!0,scrollTimer:-1,scrollEnd:!1,scrollingButton:!1,showMadeBy:!0},a.handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value,n=t?O(t):[];this.setState({value:t,handleExpanded:!(t.length>0),handleFont:!(t.length>0),names:n,scrollingButton:t.length>0,showMadeBy:!(t.length>0)})}},{key:"componentDidMount",value:function(){document.getElementById("namesBox").addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.getElementById("namesBox").removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"title_image ".concat(this.state.handleExpanded?"title_image_expanded":"title_image_contracted"),src:g,alt:"picture"}),Object(u.jsx)("h1",{className:"title ".concat(this.state.handleFont?"title_expanded":"title_contracted"),children:"Names Engine!"}),Object(u.jsx)(m,{onChange:this.handleChange}),Object(u.jsx)(b,{onScroll:this.handleScroll,scrollEndValue:this.state.scrollEnd,scrollingButton:this.state.scrollingButton,namesList:this.state.names}),Object(u.jsx)(p,{showMadeBy:this.state.showMadeBy})]})})}}]),n}(s.a.Component);l.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){}},[[172,1,2]]]);
//# sourceMappingURL=main.a2083352.chunk.js.map