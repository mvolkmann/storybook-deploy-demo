import{k as f}from"./iframe-ace2wiL_.js";import"./preload-helper-PPVm8Dsz.js";const u=String.raw,c=document.createElement("template");c.innerHTML=u`
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
`;const l=["stop","yield","go"],n=e=>l.includes(e);class m extends HTMLElement{#t="stop";#s=new Map;static get observedAttributes(){return["state"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,r,s){t==="state"&&n(s)&&(this.state=s)}connectedCallback(){const t=this.getAttribute("state")??"";this.#t=n(t)?t:"stop",this.shadowRoot?.appendChild(c.content.cloneNode(!0));const r=this.shadowRoot?.querySelectorAll("div")??[];l.forEach((s,g)=>{this.#s.set(s,r[g])}),this.addEventListener("click",()=>this.next()),this.#e(!0)}get state(){return this.#t}set state(t){t!==this.#t&&(this.#e(!1),this.#t=t,this.#e(!0),this.setAttribute("state",t))}next(){this.#e(!1);const t=this.#t;this.#t=t==="stop"?"yield":t==="yield"?"go":"stop",this.#e(!0),this.dispatchEvent(new CustomEvent("state-change",{detail:{state:this.state},bubbles:!0,composed:!0}))}#e(t){this.#s.get(this.#t)?.classList.toggle("on",t)}}customElements.define("traffic-light",m);const{expect:a,userEvent:y}=__STORYBOOK_MODULE_TEST__,d="traffic-light",{args:b,argTypes:h,template:v}=f(d),{state:p}=h;p.control="radio";p.options=["stop","yield","go"];const E={component:d,args:b,argTypes:h,render:e=>v(e)},i={play:async({canvasElement:e})=>{const t=e.querySelector("traffic-light");a(t).toBeInTheDocument(),t&&(a(t.state).toBe("stop"),await y.click(t),a(t.state).toBe("yield"),t.next(),a(t.state).toBe("go"),t.state="stop")}},o={args:{state:"yield"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const trafficLight = canvasElement.querySelector("traffic-light") as TrafficLight;
    expect(trafficLight).toBeInTheDocument();
    if (!trafficLight) return;
    expect(trafficLight.state).toBe("stop");
    await userEvent.click(trafficLight);
    expect(trafficLight.state).toBe("yield");
    trafficLight.next();
    expect(trafficLight.state).toBe("go");
    trafficLight.state = "stop";
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "yield"
  } as Partial<Meta>
}`,...o.parameters?.docs?.source}}};const S=["Primary","Specified"];export{i as Primary,o as Specified,S as __namedExportsOrder,E as default};
