(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),l=a(3),o=a(4),s=a(6),u=a(5),b=a(7);a(13);var m=function(e){var t=e.tabs,a=e.handleTabSelect,n=e.activeTab,r=function(e){return n===e?"active item":"item"};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"ui pointing secondary menu"},t.map(function(e,t){return c.a.createElement("a",{className:r(t),onClick:function(){return a(t)}},e.title)})),c.a.createElement("div",{className:"ui segment active tab"},t[n].content))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],activetab:0},a.handleTabSelect=function(e){a.setState({activetab:e})},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,a=e.activetab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,t.length," ","tabs"),c.a.createElement(m,{tabs:t,handleTabSelect:this.handleTabSelect,activeTab:a}))}}]),t}(c.a.Component);i.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.9815b7e7.chunk.js.map