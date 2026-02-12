import{k as p}from"./iframe-Dk-jk-hK.js";import"./preload-helper-PPVm8Dsz.js";const u=String.raw,r=document.createElement("template");r.innerHTML=u`
  <style>
    button {
      display: inline-flex;
      flex-direction: column;
      gap: 0.5rem;

      background-color: black;
      border-radius: 1.5rem;
      padding: 0.5rem;
    }
    div {
      --size: 3rem;
      border: none;
      border-radius: 50%;
      font-weight: bold;
      padding: 0.5rem;
      height: var(--size);
      width: var(--size);

      opacity: 0.4;
      &.on {
        opacity: 1;
      }
    }
    .stop {
      background-color: red;
    }
    .yield {
      background-color: yellow;
    }
    .go {
      background-color: lawngreen;
    }
  </style>
  <button aria-label="traffic light" type="button">
    <div class="stop"></div>
    <div class="yield"></div>
    <div class="go"></div>
  </button>
`;class o extends HTMLElement{static states=["stop","yield","go"];#t="stop";#s=new Map;static get observedAttributes(){return["state"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,a,i){t==="state"&&(this.state=i)}connectedCallback(){const t=this.getAttribute("state")??"";this.#t=o.states.includes(t)?t:"stop",this.shadowRoot?.appendChild(r.content.cloneNode(!0));const a=this.shadowRoot?.querySelectorAll("div")??[];o.states.forEach((i,h)=>{this.#s.set(i,a[h])}),this.addEventListener("click",()=>this.next()),this.#e(!0)}get state(){return this.#t}set state(t){t!==this.#t&&(this.#e(!1),this.#t=t,this.#e(!0),this.setAttribute("state",t))}next(){this.#e(!1);const t=this.#t;this.#t=t==="stop"?"yield":t==="yield"?"go":"stop",this.#e(!0),this.dispatchEvent(new CustomEvent("state-change",{detail:{state:this.state},bubbles:!0,composed:!0}))}#e(t){this.#s.get(this.#t)?.classList.toggle("on",t)}}customElements.define("traffic-light",o);const n="traffic-light",{args:g,argTypes:c,template:m}=p(n),{state:d}=c;d.control="radio";d.options=["stop","yield","go"];const v={component:n,args:g,argTypes:c,render:l=>m(l)},b=String.raw,e={},s={render:()=>b`<traffic-light state="yield" />`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  //args: { state: "yield" },
  render: () => html\`<traffic-light state="yield" />\`
}`,...s.parameters?.docs?.source}}};const w=["Default","Specified"];export{e as Default,s as Specified,w as __namedExportsOrder,v as default};
