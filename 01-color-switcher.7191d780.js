const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{timerId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(()=>{document.body.style.backgroundColor="",e.disabled=!1,t.disabled=!0,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.7191d780.js.map
