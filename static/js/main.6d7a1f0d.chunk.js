(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.f819993c.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.50edc339.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.8696741e.jpeg"},function(e,t,n){e.exports=n.p+"static/media/4.411aa6ca.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.3ecc74fe.jpg"},function(e,t,n){e.exports=n.p+"static/media/6.de3c3d2a.jpg"},function(e,t,n){e.exports=n.p+"static/media/7.4a232a29.jpg"},function(e,t,n){e.exports=n.p+"static/media/8.9ff5148d.jpg"},function(e,t,n){e.exports=n.p+"static/media/9.989eb88a.jpg"},,,function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),i=n.n(c),r=(n(23),n(3)),s=n(4),l=n(15),m=n(5),u=n(16);n(24);var d=function(e){return o.a.createElement("div",{className:"card",onClick:function(){return e.comboFunction(e.id)}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name,src:e.image})))};n(25);var f=function(e){return o.a.createElement("div",{className:"wrapper"},e.children)};n(26);var p=function(e){return o.a.createElement("h1",{className:"title"},e.children)},g=n(6),h=n.n(g),v=n(7),k=n.n(v),b=n(8),j=n.n(b),w=n(9),E=n.n(w),x=n(10),y=n.n(x),C=n(11),N=n.n(C),O=n(12),F=n.n(O),T=n(13),I=n.n(T),S=n(14),B=n.n(S),J=[{id:1,image:h.a},{id:2,image:k.a},{id:3,image:j.a},{id:4,image:E.a},{id:5,image:y.a},{id:6,image:N.a},{id:7,image:F.a},{id:8,image:I.a},{id:9,image:B.a}],M=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={tomatoes:J,count:0},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e},n.shuffleTomatoes=function(){console.log("shuffflleee");var e=n.shuffle(n.state.tomatoes.slice());n.setState({tomatoes:e})},n.handleIncrement=function(e){console.log(e),n.setState({count:n.state.count+1})},n.comboFunction=function(e){n.handleIncrement(e),n.handleClick(e),n.shuffleTomatoes()},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){e&&this.setState({clicked:!0}),console.log("button clicked")}},{key:"render",value:function(){var e=this;return o.a.createElement(f,null,o.a.createElement(p,null,"Clicky Tomatoes"),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-text"},"Click Count: ",this.state.count)),this.state.tomatoes.map(function(t){return o.a.createElement(d,{id:t.id,key:t.id,image:t.image,comboFunction:e.comboFunction,clickedTomato:t.clicked})}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.6d7a1f0d.chunk.js.map