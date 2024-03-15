export class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    shadow.appendChild(wrapper);
  }
}
