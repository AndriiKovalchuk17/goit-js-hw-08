!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("1WSnx"),o=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),s=(document.querySelector('textarea[name="message"]'),"feedback-form-state");o.addEventListener("input",(0,n.throttle)((function(e){var t={email:l.value,message:message.value};localStorage.setItem(s,JSON.stringify(t))}),500)),o.addEventListener("submit",(function(e){if(e.preventDefault(),""===l.value||""===message.value)return alert("Заповніть всі поля!");console.log({email:l.value,message:message.value}),o.reset(),localStorage.removeItem(s)}));var u=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get State error: ",e.massage)}}(s);u&&(l.value=u.email,message.value=u.message)}();
//# sourceMappingURL=03-feedback.d334f12e.js.map
