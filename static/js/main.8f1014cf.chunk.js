(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,i){},32:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),a=i(9),s=i.n(a),o=(i(31),i(32),i(4)),q=i(22),r=i(0);var l=function(e){var t=e.open,i=e.handleClick;return Object(r.jsx)("div",{className:"burger",children:Object(r.jsx)(q.HamburgerButton,{open:t,onClick:function(){return i(!1,"0s")},width:45,height:25,strokeWidth:3,animationDuration:.5})})},A=i(3),h=i(23),d=i.n(h),m=i(15),u=i.n(m),p=i(24),j=function(e){return new Promise((function(t,i){isNaN(e)&&i(new Error("Not a valid number")),setTimeout(t,e)}))},b=function(){var e=Object(p.a)(u.a.mark((function e(){var t,i,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("photo-flash"),i=document.getElementById("about-pic-1"),n=document.getElementById("about-pic-2"),c=document.getElementById("about-pic-3"),i.style.display="block",n.style.display="block",c.style.display="block",e.next=9,j(1e3);case 9:return t.style.animation="pour1 0.2s",i.style.display="none",e.next=13,j(600);case 13:return t.style.animation="pour2 0.2s",n.style.display="none",e.next=17,j(600);case 17:t.style.animation="pour3 0.2s",c.style.display="none";case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var y=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],c=t[1],a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.2s",n=document.getElementById("navbar"),a=document.getElementById("nav-dot");switch(!0===i?(n.style.animation="slideOut 0.5s ".concat(t),n.style.animationFillMode="backwards"):(n.style.animation="slideIn 0.5s ".concat(t),n.style.animationFillMode="forwards"),n.style.animation=!1===i?"slideIn 0.5s ".concat(t):"slideOut 0.5s ".concat(t),n.style.animationFillMode=!1===i?"forwards":"backwards",e){case 0:a.style.top="70px";break;case 1:a.style.top="167px";break;case 2:a.style.top="265px";break;case 3:a.style.top="365px"}c((function(e){return!e}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"gray-bar"}),Object(r.jsx)(l,{open:i,handleClick:a}),Object(r.jsx)("div",{className:"menu",id:"navbar",children:Object(r.jsxs)("div",{className:"position-relative",children:[Object(r.jsx)("div",{id:"nav-dot"}),Object(r.jsxs)(d.a,{items:["home","work","about","contact"],offset:-200,onUpdate:function(e){var t=document.getElementById("nav-dot");switch(e.id){case"home":t.style.top="70px";break;case"work":!function(e){var t=document.querySelectorAll(".line-work");e.style.top="167px",window.matchMedia("(max-width: 600px)").matches?t.forEach((function(e){return e.style.width="75px"})):t.forEach((function(e){return e.style.width="160px"}))}(t);break;case"about":!function(e){var t=document.querySelectorAll(".line-about");e.style.top="265px",t.forEach((function(e){return e.style.width="160px"})),b()}(t);break;case"contact":!function(e){var t=document.querySelectorAll(".touch > h1"),i=document.querySelectorAll(".phone"),n=document.querySelectorAll(".email"),c=document.querySelector(".bar");t.forEach((function(e){return e.style.marginRight="0"})),i.forEach((function(e){return e.style.marginLeft="0"})),n.forEach((function(e){return e.style.marginLeft="0"})),c.style.height="100%",e.style.top="365px"}(t)}},children:[Object(r.jsx)("li",{className:!0,children:Object(r.jsx)(A.Link,{activeClass:"active",to:"home",smooth:!0,onClick:function(){return a(0)},children:"Home"})}),Object(r.jsx)("li",{className:!0,children:Object(r.jsx)(A.Link,{activeClass:"active",to:"work",offset:-75,smooth:!0,onClick:function(){return a(1)},children:"Work"})}),Object(r.jsx)("li",{className:!0,children:Object(r.jsx)(A.Link,{activeClass:"active",to:"about",offset:-75,smooth:!0,onClick:function(){return a(2)},children:"Bio"})}),Object(r.jsx)("li",{className:!0,children:Object(r.jsx)(A.Link,{activeClass:"active",to:"contact",smooth:!0,onClick:function(){return a(3)},children:"Contact"})})]})]})})]})};var g=function(){return Object(r.jsxs)("div",{className:"section row about mt-5 d-flex justify-content-center",children:[Object(r.jsxs)("div",{className:"section-title col-12 text-center d-flex justify-content-center align-items-center",children:[Object(r.jsx)("div",{className:"line-about"}),Object(r.jsx)("h1",{className:"mx-1 mx-sm-2 mx-lg-3",children:"Bio"}),Object(r.jsx)("div",{className:"line-about"})]}),Object(r.jsx)("div",{className:"col-12 col-lg-5 my-4 my-lg-0",children:Object(r.jsxs)("div",{className:"mx-auto position-relative",id:"about-pic-box",onClick:b,children:[Object(r.jsx)("div",{className:"about-pic",id:"about-pic-1"}),Object(r.jsx)("div",{className:"about-pic",id:"about-pic-2"}),Object(r.jsx)("div",{className:"about-pic",id:"about-pic-3"}),Object(r.jsx)("div",{className:"about-pic",id:"about-pic-4"}),Object(r.jsx)("div",{id:"photo-flash"})]})}),Object(r.jsxs)("div",{className:"col-12 col-lg-5",children:[Object(r.jsx)("h2",{className:"bio-heading",children:"A Little About How I Got Here"}),Object(r.jsx)("p",{className:"mt-4",children:"In past lives I worked as a creative director, an outdoor guide, and even a farm hand. Being a creative director taught me how to approach problems from every possible angle until a solution presents itself. The guide life taught me that I need to be intellectually stimulated to find fulfillment in my work. And farming taught me that working in an air conditioned environment is severely underrated."}),Object(r.jsx)("p",{className:"my-4",children:'At the start of the pandemic I discovered The Odin Project, an open-source curriculum written by developers that teaches (almost) everything one needs to be a capable full-stack developer. Projects range from some pretty serious hand holding in the beginning to "Go on kid. Make Facebook. You\'ll figure it out." I got hooked. Big time. '}),Object(r.jsx)("p",{children:" I spent every day of the pandemic getting stuck until I figured out how to get unstuck. I made hundreds, if not thousands, of mistakes and learned from every one of them. Coding invigorates me in a way few things ever have. The logical part of my brain loves the process; the creative side of my brain loves the chaos."}),Object(r.jsx)("p",{className:"mt-4",children:"If you need me, I'll be posted up in a coffee shop with an espresso and Topo Chico perusing Stack Overflow. Until then."})]})]})};var w=function(){return Object(r.jsxs)("div",{className:"section home row",children:[Object(r.jsx)("div",{className:"col-12 col-lg-6 d-flex justify-content-center align-items-center",children:Object(r.jsx)("div",{className:"prof-pic-box",children:Object(r.jsx)("div",{id:"prof-pic"})})}),Object(r.jsxs)("div",{className:"col-12 col-lg-6 home-title",children:[Object(r.jsxs)("div",{className:"title-box",children:[Object(r.jsx)("h1",{children:"Hey."}),Object(r.jsx)("h1",{children:"I'm Brendon."}),Object(r.jsx)("h1",{children:"But you can call me hired."})]}),Object(r.jsx)("div",{className:"title-bar-box d-flex",children:Object(r.jsx)("div",{className:"title-bar align-self-start"})})]})]})};var f=function(){return Object(r.jsxs)("div",{className:"section row contact",id:"safari-only",children:[Object(r.jsx)("div",{className:"col-12 mx-auto contact-info-container d-flex justify-content-center ",children:Object(r.jsxs)("div",{className:"row w-100 d-flex justify-content-center",children:[Object(r.jsxs)("div",{className:"col-5 touch",children:[Object(r.jsx)("h1",{children:"Let's"}),Object(r.jsx)("h1",{children:"Get"}),Object(r.jsx)("h1",{children:"In"}),Object(r.jsx)("h1",{children:"Touch"})]}),Object(r.jsx)("div",{className:"col-2 d-flex justify-content-center bar-box",children:Object(r.jsx)("div",{className:"bar"})}),Object(r.jsxs)("div",{className:"col-5 contact-info-box",children:[Object(r.jsxs)("a",{href:"tel:4023107243",children:[Object(r.jsx)("p",{className:"phone",children:"402"}),Object(r.jsx)("p",{className:"phone",children:"310"}),Object(r.jsx)("p",{className:"phone",children:"7243"})]}),Object(r.jsxs)("a",{href:"mailto:contact-infobrendonhenning@gmail.com",className:"mt-3",children:[Object(r.jsx)("p",{className:"email",children:"brendon"}),Object(r.jsx)("p",{className:"email",children:"henning"}),Object(r.jsx)("p",{className:"email",children:"@gmail.com"})]})]})]})}),Object(r.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(r.jsxs)("div",{className:"align-self-end end-p-box",children:[Object(r.jsx)("p",{children:"I'm always looking for ways to improve."}),Object(r.jsx)("p",{className:"pt-2",children:" If you have a suggestion on how I could do that or would like to discuss a job/project opportunity, I'd love to chat."})]})})]})};var x=function(e){var t=e.project,i=e.handleClick;return Object(r.jsxs)("div",{className:"project-box d-flex mb-3 mb-lg-4",children:[Object(r.jsx)("img",{className:"project-thumb",src:t.getThumb(),alt:"Screenshot of project",onClick:function(){return i(t)}}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:"project-title",onClick:function(){return i(t)},children:t.getTitle()}),Object(r.jsxs)("div",{className:"d-flex",children:[Object(r.jsx)("a",{className:"project-links mr-3",href:t.getLive(),target:"_blank",rel:"noopener noreferrer",children:"Live Preview"}),Object(r.jsx)("a",{className:"project-links",href:t.getSource(),target:"_blank",rel:"noopener noreferrer",children:"Source Code"})]})]})]})};var O=function(e){var t=e.project;return"Apathetic Facebook"===t.getTitle()||"To-Do List"===t.getTitle()||"Newsweek"===t.getTitle()||"TNW Magazine"===t.getTitle()||"Shopping Cart"===t.getTitle()?Object(r.jsx)("img",{src:t.getPhoneMock(),alt:"Mockup on mobile device",className:"phone-mock"}):null};var v=function(e){var t=e.project,i=e.vis,c=e.closePreview;return Object(n.useEffect)((function(){var e=document.querySelector(".preview-container"),t=document.querySelector("body");e.style.display=!0===i?"block":"none",t.style.overflowY=!0===i?"hidden":"scroll"})),Object(r.jsx)("div",{className:"col-12 preview-container",id:"Chess"===t.getTitle()?"chess-preview":"",children:Object(r.jsxs)("div",{className:"preview-box d-flex align-items-center",children:[Object(r.jsx)("button",{id:"close-btn",onClick:c,children:"X"}),Object(r.jsxs)("div",{className:"mock-box",children:[Object(r.jsx)("img",{src:t.getMock(),className:"big-thumb",alt:"project preview"}),Object(r.jsx)(O,{project:t})]}),Object(r.jsxs)("div",{className:"preview-content",children:[Object(r.jsx)("h1",{className:"preview-title",children:t.getTitle()}),Object(r.jsx)("p",{className:"my-4 project-desc",children:t.getDesc()}),Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:t.getLive(),className:"project-links mr-4",target:"_blank",rel:"noopener noreferrer",children:"See It In Action"}),Object(r.jsx)("a",{href:t.getSource(),className:"project-links",target:"_blank",rel:"noopener noreferrer",children:"View Source Code"})]})]})]})})},k=i.p+"static/media/ruby.c1f0bdb0.png",N=i(25),I=i(26),T=i.p+"static/media/facebook.2d613aa2.png",V=i.p+"static/media/waldo.5583075f.png",C=i.p+"static/media/beans.d65e3cd9.png",W=i.p+"static/media/cv.71b8eb2b.png",K=i.p+"static/media/tnw.117d8a6f.png",L=i.p+"static/media/newsweek.b5199e11.png",Y=i.p+"static/media/chess.ac795665.png",S=i.p+"static/media/mastermind.d0748576.png",J=i.p+"static/media/waldomock.2f5a3989.png",M=i.p+"static/media/fbMock.d99cfeb9.png",G=i.p+"static/media/cvMock.6e0d9866.png",E=i.p+"static/media/chessMock.677ee9a5.png",B=i.p+"static/media/mastermindMock.08ff47a3.png",U=i.p+"static/media/beansMock.b89c1799.png",H=i.p+"static/media/tnwMock.8b955bc3.png",R=i.p+"static/media/toDoMock.aef89d32.png",z=i.p+"static/media/newsweekMock.7adc2789.png",Z=i.p+"static/media/fbPhone.ac966048.png",F=i.p+"static/media/newsweekPhoneMock.62e227fd.png",X=i.p+"static/media/tnwPhoneMock.b6bbcd5d.png",Q=i.p+"static/media/toDoPhoneMock.5aa0854e.png",P=i.p+"static/media/beansPhoneMock.a8ca9604.png",D=function(e,t,i,n,c,a){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",o=function(){return e},q=function(){return t},r=function(){return i},l=function(){return n},A=function(){return c},h=function(){return a},d=function(){return s};return{getTitle:o,getThumb:q,getLive:l,getMock:r,getPhoneMock:d,getSource:A,getDesc:h}},_=[D("Apathetic Facebook",T,M,"https://apathetic-facebook.herokuapp.com","https://github.com/bhenning83/apathetic_facebook","The moms have taken over Facebook and it was about time someone built a new one. This app is built with Ruby on Rails and features the whole shibang: user authentication, API calls, error handling, sessions tracking...sign up (fake emails/passwords will work) and come say hi.",Z),D("Chess",Y,E,"https://replit.com/@bhenning83/chess?v=1","https://github.com/bhenning83/chess","I told a friend I was writing a chess game and he said, 'Oh wow. So you would need to know how to play chess to make that?' ...yes, Trevor. I also needed to know the logic behind being able to move the pieces around the board, determing legal vs illegal moves, taking opponent pieces, and determining check and checkmate. The game is played entirely in the console; the live preview runs the game in an online simulated console. The save game feature utilizes local storage and will only work when run locally. To use this feature, head to my Github repo, fork it, clone it, bundle install it, and run it locally."),D("Mastermind",S,B,"https://replit.com/@bhenning83/mastermind?v=1","https://github.com/bhenning83/mastermind","This program allows the user to play Mastermind against the computer, either as the mastermind or the code breaker. When playing as the mastermind, the computer uses intelligence to guess your code. And yes, I have lost against my own program. The game is played entirely in the console; the live preview runs the game in an online simulated console."),D("Where's Waldo",V,J,"https://brendons-wheres-waldo.herokuapp.com/","https://github.com/bhenning83/wheres-waldo","This app is built in Ruby on Rails and uses React for the user interface. API calls are made from the front end to access data in the backend (character coordinates, high scores, player names, etc.). I never advocate for cheating, but in the interest of allowing you to see the full functionality of the app, just hit the 'W' key at any time to access the high scores."),D("Shopping Cart",C,U,"https://bhenning83.github.io/shopping-cart/","https://github.com/bhenning83/shopping-cart","No, I won't take your money. Yet. Built in React, this project was an opportunity to practice the functionality of adding products to a shopping cart. If you happen to be a coffee roaster, let's collab. I have some ideas.",P),D("To-Do List","data:image/png;base64,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",R,"https://bhenning83.github.io/to-do-list/","https://github.com/bhenning83/to-do-list","I had to work through a long list of tasks to bring this app to life. Oh the irony. The app allows the user to toggle between viewing in task mode or in project mode. It's written entirely in Vanilla JS, and it uses local storage, so your tasks are loaded in with each session. Might I suggest adding 'Reach Out to Brendon Henning' to your list.",Q),D("CV Generator",W,G,"https://bhenning83.github.io/cv-project/","https://github.com/bhenning83/cv-project","Forms galore. Or forms horror, depending on how you feel. I went both ways while building this one. This was built in React and was a great exercise in form validation."),D("TNW Magazine",K,H,"https://bhenning83.github.io/TNW-magazine/","https://github.com/bhenning83/TNW-magazine","The goal here was to recreate TNW's magazine layout with media queries to make it responsive. Sure, you can view it on your desktop. But I went through all that hard work, so you could at least check it out on mobile as well.",X),D("Newsweek",L,z,"https://bhenning83.github.io/newsweek/","https://github.com/bhenning83/newsweek","If you were wondering what was happening on June 23, 2020, look no further. Using Bootstrap, I recreated Newsweek's magazine. It's easy to forget it's not the real site, so don't get frustrated when none of the links or buttons work.",F)],$=i(64);var ee=function(){var e=Object(n.useState)(_[0]),t=Object(o.a)(e,2),i=t[0],c=t[1],a=Object(n.useState)(!1),s=Object(o.a)(a,2),q=s[0],l=s[1],A=function(e){c(e),l((function(e){return!e}))};return Object(r.jsxs)("div",{className:"section row work",children:[Object(r.jsxs)("div",{className:"section-title col-12 text-center d-flex justify-content-center align-items-center",children:[Object(r.jsx)("div",{className:"line-work"}),Object(r.jsx)("h1",{className:"mx-2 mx-sm-2 mx-lg-3",children:"A Few Projects"}),Object(r.jsx)("div",{className:"line-work"})]}),Object(r.jsxs)("div",{className:"col-12 col-xl-4 cat",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center mx-auto mb-2",children:[Object(r.jsx)("h2",{className:"cat-title mr-3",children:"Ruby"}),Object(r.jsx)("img",{src:k,alt:"Ruby Logo",className:"lang-logo"})]}),[_[0],_[1],_[2]].map((function(e){return Object(r.jsx)(x,{project:e,handleClick:A})}))]}),Object(r.jsxs)("div",{className:"col-12 col-xl-4 cat",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center mx-auto mb-2",children:[Object(r.jsx)("h2",{className:"cat-title mr-3",children:"JavaScript"}),Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAAAnFBMVEUAAAD/ySj/yyf/yif/yij/xyz/yij/zir/yij//wD/ySr/yyf/yij/yij/yif/yij/yij/yyf/yyj/yyj/yyj/yij/yij/yij/yij/yij/yyj/yij/yij/yij/yif/yij/yij/yif/yif/yij/yyf/yif/yif/yij/yif/yij/yij/yij/yij/yij/yij/yij/yij/yij/yij/yigUOexNAAAAM3RSTlMAgIgI/AT4DOwBEfArdlVD9BtwPBY4M+fZ08uouKF7TtxnvZsls0nijcatXCDBz5WSYmwL7xUKAAAQI0lEQVR42uzBAQ0AAAwCIDvZv9tr3A0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFDG5acyLj+VcfmpjMtPZVx+KuPyUxmXn8q4/FTG5acyLj+VcfmpjMtPZVx+KuPyUxmXn8q4/FTG5acyLj+VcfmpjMtPZVx+KuPyUxmXn8q4/FTG5acyLj+VYw8OaAAAABCE2cn+3awBm79cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmHqyYWpJxemnlyYenJh6smFqScXpp5cmHpyYerJhaknF6aeXJh6cmEae3BAAwAAgCDMTvbvZg3Z+Cu4fKrg8qmCy6cKLp8quHyq4PKpgsunCi6fKrh8quDyqYLLpwounyq4fKrg8qmCy6cKLp8quHyq4PKpgsunCi6fKrh8quDyqYLLpwounyq4fKrg8qmCy6cKLp8quHyq4PKpgsunCi6fKrh8quDyqYLL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",alt:"JavaScript Logo",className:"lang-logo"})]}),[_[3],_[4],_[5],_[6]].map((function(e){return Object(r.jsx)(x,{project:e,handleClick:A})}))]}),Object(r.jsxs)("div",{className:"col-12 col-xl-4 cat",children:[Object(r.jsxs)("div",{className:"d-flex align-items-center mx-auto mb-2",children:[Object(r.jsx)("h2",{className:"cat-title mr-3",children:"Responsive Design"}),Object(r.jsx)(N.a,{icon:I.a,id:"pencilruler",size:"2x"})]}),[_[7],_[8]].map((function(e){return Object(r.jsx)(x,{project:e,handleClick:A},$())}))]}),Object(r.jsx)(v,{project:i,vis:q,closePreview:function(){l((function(e){return!e}))}})]})};var te=function(){return Object(r.jsx)("div",{className:"container-fluid m-0",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(A.Element,{name:"home",id:"home",children:Object(r.jsx)(w,{})}),Object(r.jsx)(A.Element,{name:"work",id:"work",children:Object(r.jsx)(ee,{})}),Object(r.jsx)(A.Element,{name:"about",id:"about",children:Object(r.jsx)(g,{})}),Object(r.jsx)(A.Element,{name:"contact",id:"contact",children:Object(r.jsx)(f,{})}),Object(r.jsx)(y,{})]})})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(te,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.8f1014cf.chunk.js.map