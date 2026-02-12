import{k as i}from"./iframe-NpmsPLzH.js";import"./preload-helper-PPVm8Dsz.js";const d=String.raw,m=document.createElement("template");m.innerHTML=d`<p style="color: blue">Hello, <span></span>!</p>`;class p extends HTMLElement{#e="World";#t;static get observedAttributes(){return["name"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,r,t){e==="name"&&(this.name=t)}connectedCallback(){this.shadowRoot?.appendChild(m.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("span"),this.name=this.getAttribute("name")||this.#e}get name(){return this.#e}set name(e){this.#t&&(this.#t.textContent=e),e!==this.#e&&(this.#e=e,this.setAttribute("name",e))}}customElements.define("hello-world",p);const{expect:n}=__STORYBOOK_MODULE_TEST__,c="hello-world";let{args:u,argTypes:y,template:T}=i(c);const b={component:c,args:u,argTypes:y,render:o=>T(o)},a={play:({canvasElement:o})=>{const e=o.querySelector("hello-world");if(n(e).toBeInTheDocument(),!e)return;function r(h){const s=e.shadowRoot?.querySelector("p");n(s).toBeInTheDocument(),n(s).toHaveTextContent(`Hello, ${h}!`)}let t="World";r(t),t="Earth",e.setAttribute("name",t),n(e).toHaveProperty("name",t),r(t),t="Moon",e.name=t,n(e).toHaveAttribute("name",t),r(t)}},l={args:{name:"Earth"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

    // The "name" attribute is not set yet.
    let name = "World";
    verifyText(name);

    // Set the "name" attribute.
    name = "Earth";
    helloWorld.setAttribute("name", name);
    expect(helloWorld).toHaveProperty("name", name);
    verifyText(name);

    // Set the "name" property.
    name = "Moon";
    helloWorld.name = name;
    expect(helloWorld).toHaveAttribute("name", name);
    verifyText(name);
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Earth"
  }
  //render: () => html\`<hello-world name="Earth" />\`,
}`,...l.parameters?.docs?.source}}};const H=["Default","Named"];export{a as Default,l as Named,H as __namedExportsOrder,b as default};
