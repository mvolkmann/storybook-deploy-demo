const i=String.raw,c=document.createElement("template");c.innerHTML=i`
  <p style="color: green">
    <span class="salutation"></span>, <span class="name"></span>!
  </p>
`;class h extends HTMLElement{#e="Hello";#t="World";#o;#n;static get observedAttributes(){return["name"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,n,t){e==="name"&&(this.name=t)}connectedCallback(){this.shadowRoot?.appendChild(c.content.cloneNode(!0)),this.#o=this.shadowRoot?.querySelector(".salutation"),this.#n=this.shadowRoot?.querySelector(".name"),this.name=this.getAttribute("name")||this.#t,this.salutation=this.getAttribute("salutation")||this.#e,this.shadowRoot?.addEventListener("click",()=>{const e=this.#e==="Hello"?"Goodbye":"Hello";this.salutation=e})}get name(){return this.#t}get salutation(){return this.#e}set name(e){this.#n&&(this.#n.textContent=e),e!==this.#t&&(this.#t=e,this.setAttribute("name",e))}set salutation(e){this.#o&&(this.#o.textContent=e),e!==this.#e&&(this.#e=e,this.setAttribute("salutation",e))}}customElements.define("hello-goodbye",h);const{expect:o,userEvent:l}=__STORYBOOK_MODULE_TEST__,d={component:"hello-goodbye"},s={play:async({canvasElement:r})=>{const n=r.ownerDocument.body.querySelector("hello-goodbye");if(o(n).toBeInTheDocument(),!n)return;const t=n.shadowRoot?.querySelector("p");o(t).toBeInTheDocument(),t&&(o(t).toHaveTextContent("Hello"),await l.click(t),o(t).toHaveTextContent("Goodbye"),await l.click(t),o(t).toHaveTextContent("Hello"))}},a={args:{name:"Earth"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const body = canvasElement.ownerDocument.body;
    const helloGoodbye = body.querySelector("hello-goodbye");
    expect(helloGoodbye).toBeInTheDocument();
    if (!helloGoodbye) return;
    const p = helloGoodbye.shadowRoot?.querySelector("p");
    expect(p).toBeInTheDocument();
    if (!p) return;
    expect(p).toHaveTextContent("Hello");
    await userEvent.click(p);
    expect(p).toHaveTextContent("Goodbye");
    await userEvent.click(p);
    expect(p).toHaveTextContent("Hello");
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Earth"
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","Named"];export{s as Default,a as Named,u as __namedExportsOrder,d as default};
