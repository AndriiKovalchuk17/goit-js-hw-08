var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var o=r("kEUo3");const l=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]');document.querySelector('textarea[name="message"]');l.addEventListener("input",(0,o.throttle)((e=>{const t={email:n.value,message:message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.addEventListener("submit",(e=>{if(e.preventDefault(),""===n.value||""===message.value)return alert("Заповніть всі поля!");console.log({email:n.value,message:message.value}),l.reset(),localStorage.removeItem("feedback-form-state")}));const s=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get State error: ",e.massage)}})("feedback-form-state");s&&(n.value=s.email,message.value=s.message);
//# sourceMappingURL=03-feedback.35873071.js.map
