import{k as d}from"./iframe-ace2wiL_.js";import"./preload-helper-PPVm8Dsz.js";const h=String.raw,m=document.createElement("template");m.innerHTML=h`<p style="color: blue">Hello, <span></span>!</p>`;class p extends HTMLElement{#e="World";#t;static get observedAttributes(){return["name"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,r,t){e==="name"&&(this.name=t)}connectedCallback(){this.shadowRoot?.appendChild(m.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("span"),this.name=this.getAttribute("name")||this.#e}get name(){return this.#e}set name(e){this.#t&&(this.#t.textContent=e),e!==this.#e&&(this.#e=e,this.setAttribute("name",e))}}customElements.define("hello-world",p);const{expect:n}=__STORYBOOK_MODULE_TEST__,c="hello-world";let{args:u,argTypes:y,template:x}=d(c);const f={component:c,args:u,argTypes:y,render:o=>x(o)},a={play:({canvasElement:o})=>{const e=o.querySelector("hello-world");if(n(e).toBeInTheDocument(),!e)return;function r(i){const s=e.shadowRoot?.querySelector("p");n(s).toBeInTheDocument(),n(s).toHaveTextContent(`Hello, ${i}!`)}let t="Earth";e.setAttribute("name",t),n(e).toHaveProperty("name",t),r(t),t="Moon",e.name=t,n(e).toHaveAttribute("name",t),r(t),t="World",e.setAttribute("name",t),r(t)}},l={args:{name:"Earth"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: ({
    canvasElement
  }) => {
    const helloWorld = canvasElement.querySelector("hello-world") as HelloWorld;
    expect(helloWorld).toBeInTheDocument();
    if (!helloWorld) return;
    function verifyText(name: string) {
      const p = helloWorld!.shadowRoot?.querySelector("p");
      expect(p).toBeInTheDocument();
      expect(p).toHaveTextContent(\`Hello, \${name}!\`);
    }

    // Set the "name" attribute.
    let name = "Earth";
    helloWorld.setAttribute("name", name);
    expect(helloWorld).toHaveProperty("name", name);
    verifyText(name);

    // Set the "name" property.
    name = "Moon";
    helloWorld.name = name;
    expect(helloWorld).toHaveAttribute("name", name);
    verifyText(name);
    name = "World";
    helloWorld.setAttribute("name", name);
    verifyText(name);
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Earth"
  } as Partial<Meta>
}`,...l.parameters?.docs?.source}}};const W=["Primary","Named"];export{l as Named,a as Primary,W as __namedExportsOrder,f as default};
