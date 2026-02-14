import{k as h}from"./iframe-ace2wiL_.js";import"./preload-helper-PPVm8Dsz.js";const d=String.raw,i=document.createElement("template");i.innerHTML=d`
  <p style="color: green">
    <span class="salutation"></span>, <span class="name"></span>!
  </p>
`;class p extends HTMLElement{#t="World";#e="Hello";#o;#n;static get observedAttributes(){return["name","salutation"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,o,l){e==="name"?this.name=l:e==="salutation"&&(this.salutation=l)}connectedCallback(){this.shadowRoot?.appendChild(i.content.cloneNode(!0)),this.#o=this.shadowRoot?.querySelector(".salutation"),this.#n=this.shadowRoot?.querySelector(".name"),this.name=this.getAttribute("name")||this.#t,this.salutation=this.getAttribute("salutation")||this.#e,this.addEventListener("click",()=>{const e=this.#e==="Hello"?"Goodbye":"Hello";this.salutation=e})}get name(){return this.#t}get salutation(){return this.#e}set name(e){this.#n&&(this.#n.textContent=e),e!==this.#t&&(this.#t=e,this.setAttribute("name",e))}set salutation(e){this.#o&&(this.#o.textContent=e),e!==this.#e&&(this.#e=e,this.setAttribute("salutation",e))}}customElements.define("hello-goodbye",p);const{expect:t,userEvent:r}=__STORYBOOK_MODULE_TEST__,c="hello-goodbye";let{args:u,argTypes:m,template:y}=h(c);const g={component:c,args:u,argTypes:m,render:n=>y(n)},a={play:async({canvasElement:n})=>{const e=n.querySelector("hello-goodbye");if(t(e).toBeInTheDocument(),!e)return;t(e.salutation).toBe("Hello"),t(e.name).toBe("World");const o=e.shadowRoot?.querySelector("p");t(o).toBeInTheDocument(),o&&(t(o).toHaveTextContent("Hello"),await r.click(e),t(o).toHaveTextContent("Goodbye"),await r.click(e),t(o).toHaveTextContent("Hello"))}},s={args:{name:"Earth"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const helloGoodbye = canvasElement.querySelector("hello-goodbye") as HelloGoodbye;
    expect(helloGoodbye).toBeInTheDocument();
    if (!helloGoodbye) return;
    expect(helloGoodbye.salutation).toBe("Hello");
    expect(helloGoodbye.name).toBe("World");
    const p = helloGoodbye.shadowRoot?.querySelector("p");
    expect(p).toBeInTheDocument();
    if (!p) return;
    expect(p).toHaveTextContent("Hello");
    await userEvent.click(helloGoodbye);
    expect(p).toHaveTextContent("Goodbye");
    await userEvent.click(helloGoodbye);
    expect(p).toHaveTextContent("Hello");
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Earth"
  } as Partial<Meta>
}`,...s.parameters?.docs?.source}}};const x=["Primary","Named"];export{s as Named,a as Primary,x as __namedExportsOrder,g as default};
