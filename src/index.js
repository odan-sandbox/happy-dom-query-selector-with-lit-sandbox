import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();
const { MyElement } = await import("./my-element.js");

window.customElements.define("my-element", MyElement);
window.document.body.innerHTML = "<my-element />";

const el = window.document.querySelector("my-element");

const host = el.shadowRoot?.querySelector(":host");

// happy-dom@13.8.5 => host is null
// happy-dom@13.8.4 => host is not null
console.log(host === null);
