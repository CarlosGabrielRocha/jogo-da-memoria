(()=>{"use strict";function e(e,t){for(var n,o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];var r=document.createElement(e);return t&&(r.id=t),o&&(n=r.classList).add.apply(n,o),r}var t=e("section","","meteor-container"),n=e("div","meteor");document.body.appendChild(t),t.appendChild(n),setInterval((function(){n.classList.toggle("meteor")}),15e3),function e(t,n,o,i){t.innerText="",t.style.height=window.getComputedStyle(t).fontSize;for(var r=n.split(""),c=function(e){setTimeout((function(){t.innerText+=r[e-1],t.classList.toggle("caret")}),e*(1e3*o))},l=1;l<=r.length;l++)c(l);setTimeout((function(){e(t,n,o,i)}),r.length*(1e3*o)+1e3*i)}(document.querySelector("h1.typing"),"Welcome!",.4,1)})();