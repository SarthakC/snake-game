(window["webpackJsonpsnake-game"]=window["webpackJsonpsnake-game"]||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(7),c=n(2),u=n(19),l=n(13),d=n(12),h=n(4),p=n(5),g=n(8),f=n(6),m=n(9),y=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"renderSnake",value:function(){this.props.SnakeBodyCoordinates.map(function(e,t){var n={top:"".concat(e[1],"%"),left:"".concat(e[0],"%")};return r.a.createElement("div",{className:"dot",key:t,style:n})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderSnake)}}]),t}(a.Component)),O=Object(s.b)(function(e){return console.log(e),e})(y),v=function(e){var t={left:"".concat(e.coordinates[0],"%"),top:"".concat(e.coordinates[1],"%")};return r.a.createElement("div",{className:"dot red-bg",style:t})},b=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},k=function(e,t){return[2*b(e/2,t/2),2*b(e/2,t/2)]},S=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"276937759348-m72vbhcpceoav4qaumn4tlstgtnbchua.apps.googleusercontent.com",scope:"email profile"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null==this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),j=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(S),w=function(e){return r.a.createElement("div",{className:"ui menu"},r.a.createElement("div",{className:"header item"},e.title),r.a.createElement("div",{className:"item"},e.score),r.a.createElement("div",{className:"item"},e.prevHighScore),r.a.createElement("div",{className:"right menu"},r.a.createElement(j,null)))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I={direction:null,speed:200,targetCoordinates:k(0,98),snakeBodyCoordinates:[[0,0],[2,0],[4,0]],show:{display:"block"},hidden:{display:"none"},pulse:2},N=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state=E({},I,{},{prevHighScore:0}),n.keyPress=function(e){switch((e=e||window.event).keyCode){case 38:n.setState({direction:"UP"});break;case 40:n.setState({direction:"DOWN"});break;case 37:n.setState({direction:"LEFT"});break;case 39:n.setState({direction:"RIGHT"})}},n.moveSnake=function(){var e=n.state.pulse,t=Object(l.a)(n.state.snakeBodyCoordinates),a=t[t.length-1];switch(n.state.direction){case"RIGHT":a=[a[0]+e,a[1]];break;case"LEFT":a=[a[0]-e,a[1]];break;case"UP":a=[a[0],a[1]-e];break;case"DOWN":a=[a[0],a[1]+e]}t.push(a),t.shift(),n.setState({snakeBodyCoordinates:t})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.onkeydown=this.keyPress,setInterval(this.moveSnake,this.state.speed)}},{key:"componentDidUpdate",value:function(){this.checkBorderCollision(),this.checkSelfCollision(),this.checkHitTarget()}},{key:"checkBorderCollision",value:function(){var e=this.state.snakeBodyCoordinates[this.state.snakeBodyCoordinates.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.endGame()}},{key:"checkSelfCollision",value:function(){var e=this,t=Object(l.a)(this.state.snakeBodyCoordinates),n=t[t.length-1];t.pop(),t.forEach(function(t){n[0]===t[0]&&n[1]==t[1]&&e.endGame()})}},{key:"checkHitTarget",value:function(){var e=this.state.snakeBodyCoordinates[this.state.snakeBodyCoordinates.length-1],t=this.state.targetCoordinates;if(e[0]===t[0]&&e[1]===t[1]){var n=k(0,98);this.setState({targetCoordinates:n}),this.snakeLengthIncrease()}}},{key:"snakeLengthIncrease",value:function(){var e=Object(l.a)(this.state.snakeBodyCoordinates);e.unshift([]),this.setState({snakeBodyCoordinates:e})}},{key:"endGame",value:function(){var e=this.state.prevHighScore,t=this.state.snakeBodyCoordinates.length-3;e=t>e?t:this.state.prevHighScore;var n=E({},I,{},{prevHighScore:e});this.setState(n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"centered ui"},r.a.createElement(w,{title:"Snake Game Using React",score:"Your Score is: ".concat(this.state.snakeBodyCoordinates.length-3),prevHighScore:"Current High Score is: ".concat(this.state.prevHighScore)}),r.a.createElement("div",{className:"ui equal width grid"},r.a.createElement("div",{className:"centered row"},r.a.createElement("div",{className:"arena",style:this.state.show},r.a.createElement(O,{SnakeBodyCoordinates:this.state.snakeBodyCoordinates}),r.a.createElement(v,{coordinates:this.state.targetCoordinates})))))}}]),t}(a.Component);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D={isSignedIn:null,userId:null},H=Object(c.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return B({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return B({},e,{isSignedIn:!1,userId:null});default:return e}}}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,_=Object(c.e)(H,G(Object(c.a)(u.a)));i.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(N,null)),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2d45ae38.chunk.js.map