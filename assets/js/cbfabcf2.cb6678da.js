"use strict";(self.webpackChunkmint_ui_core_guide=self.webpackChunkmint_ui_core_guide||[]).push([[217],{9134:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>v,contentTitle:()=>g,default:()=>R,frontMatter:()=>y,metadata:()=>k,toc:()=>A});var a=t(7462),o=t(7294),i=t(3905),r=t(5257),m=t(8458),s=t(927);const c=m.F4`
  from {
    opacity:0;
    transform:scale(0);
  }
  to {
    opacity:1;
    transform:scale(1);
  }
`,p=m.F4`
  from {
    opacity:1;
    transform:translateX(0px);
  }
  to {
    opacity:1;
    transform:translateX(300px);
  }
`,l=m.F4`
  from {
    opacity:1;
    transform:translateX(300px);
  }
  to {
    opacity:1;
    transform:translateX(0%);
  }
`,f=m.F4`
  from {
    opacity:1;
    transform:scale(1);
  }
  to {
    opacity:0;
    transform:scale(0);
  }
`,u=(0,m.ZP)(r.LH)`
  position:relative;
  opacity:0;
  ${c} ${f} ${p} ${l}
`;function d(){const n=(0,o.useRef)({name:"start",animation:`${c.getName()} 1s forwards`}),e=(0,o.useRef)({name:"move-right",animation:`${p.getName()} 0.7s forwards`}),t=(0,o.useRef)({name:"move-left",animation:`${l.getName()} 0.5s forwards`}),a=(0,o.useRef)({name:"end",animation:`${f.getName()} 1.5s forwards`}),[i,r]=(0,o.useState)(n.current);return o.createElement(s.R,null,o.createElement(u,{config:i,animationEnd:o=>{"start"===o.name?r(e.current):"move-right"===o.name?r(t.current):"move-left"===o.name?r(a.current):"end"===o.name&&r(n.current)}},o.createElement("div",{style:{background:"red",borderRadius:"100%",width:"50px",height:"50px"}})))}const y={},g="Animator",k={unversionedId:"guides/component-animator",id:"guides/component-animator",title:"Animator",description:"css \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc815\uc758\ud558\uace0 \ucee8\ud2b8\ub864\ud558\uae30 \uc27d\uac8c \ud574\uc8fc\ub294 \ub798\ud37c \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \ud2b9\ud788 styled-components \uc758 keyframes \uc744 \uc774\uc6a9\ud574\uc57c \ud560\ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4.",source:"@site/docs/guides/component-animator.mdx",sourceDirName:"guides",slug:"/guides/component-animator",permalink:"/mint-ui-core-guide/docs/guides/component-animator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accordion",permalink:"/mint-ui-core-guide/docs/guides/component-accordion"},next:{title:"Autocomplete",permalink:"/mint-ui-core-guide/docs/guides/component-autocomplete"}},v={},A=[{value:"\uc18d\uc131 \uc124\uba85",id:"\uc18d\uc131-\uc124\uba85",level:2},{value:"(optional) config",id:"optional-config",level:3},{value:"(optional) animationEnd",id:"optional-animationend",level:3}],h={toc:A},N="wrapper";function R(n){let{components:e,...t}=n;return(0,i.kt)(N,(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animator"},"Animator"),(0,i.kt)("p",null,"css \uc560\ub2c8\uba54\uc774\uc158\uc744 \uc815\uc758\ud558\uace0 \ucee8\ud2b8\ub864\ud558\uae30 \uc27d\uac8c \ud574\uc8fc\ub294 \ub798\ud37c \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \ud2b9\ud788 styled-components \uc758 keyframes \uc744 \uc774\uc6a9\ud574\uc57c \ud560\ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import styled, { keyframes } from \"styled-components\";\n\nconst popupKeyframe = keyframes`\n  from {\n    opacity:0;\n    transform:scale(0);\n  }\n  to {\n    opacity:1;\n    transform:scale(1);\n  }\n`;\nconst moveRightKeyframe = keyframes`\n  from {\n    opacity:1;\n    transform:translateX(0px);\n  }\n  to {\n    opacity:1;\n    transform:translateX(300px);\n  }\n`;\nconst moveLeftKeyframe = keyframes`\n  from {\n    opacity:1;\n    transform:translateX(300px);\n  }\n  to {\n    opacity:1;\n    transform:translateX(0%);\n  }\n`;\nconst hideKeyframe = keyframes`\n  from {\n    opacity:1;\n    transform:scale(1);\n  }\n  to {\n    opacity:0;\n    transform:scale(0);\n  }\n`;\ntype MyAnimationType = 'start'|'move-right'|'move-left'|'end';\nconst MyAnimatorWrapper = styled(Animator<MyAnimationType>)`\n  position:relative;\n  opacity:0;\n  ${popupKeyframe} ${hideKeyframe} ${moveRightKeyframe} ${moveLeftKeyframe}\n`;\n\nexport function AnimatorBasic(){\n\n  const start = useRef<AnimationConfig<MyAnimationType>>({ name: 'start', animation: `${popupKeyframe.getName()} 1s forwards` });\n  const moveRight = useRef<AnimationConfig<MyAnimationType>>({ name: 'move-right', animation: `${moveRightKeyframe.getName()} 0.7s forwards` });\n  const moveLeft = useRef<AnimationConfig<MyAnimationType>>({ name: 'move-left', animation: `${moveLeftKeyframe.getName()} 0.5s forwards` });\n  const end = useRef<AnimationConfig<MyAnimationType>>({ name: 'end', animation: `${hideKeyframe.getName()} 1.5s forwards` });\n  const [ animation, setAnimation ] = useState<AnimationConfig<MyAnimationType>>(start.current);\n\n  return <Frame>\n    <MyAnimatorWrapper config={animation} animationEnd={(ani)=>{\n      if(ani.name === 'start'){\n        setAnimation(moveRight.current);\n      }else if(ani.name === 'move-right'){ \n        setAnimation(moveLeft.current);\n      }else if(ani.name === 'move-left'){ \n        setAnimation(end.current);\n      }else if(ani.name === 'end'){ \n        setAnimation(start.current);\n      }\n    }}>\n      <div style={{background:'red', borderRadius: '100%', width:'50px', height:'50px'}}></div>\n    </MyAnimatorWrapper>\n  </Frame>\n}\n")),(0,i.kt)(d,{mdxType:"AnimatorBasic"}),(0,i.kt)("h2",{id:"\uc18d\uc131-\uc124\uba85"},"\uc18d\uc131 \uc124\uba85"),(0,i.kt)("h3",{id:"optional-config"},"(optional) config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud0c0\uc785 : AnimationConfig"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"interface AnimationConfig<T> = {\n  name:T;\n  animation:string;\n}\n")),(0,i.kt)("p",null,"css \uc560\ub2c8\uba54\uc774\uc158\uc758 \ub0b4\ubd80 \uc774\ub984\uacfc animation \uc18d\uc131\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"name \uc5d0\ub294 \uc774\ub984\uc758 \uc885\ub958\ub97c \ud0c0\uc785\uc73c\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac00\uc7a5 \ucc98\uc74c\uc758 \uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 \uc815\uc758\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"type MyAnimationType = 'start'|'move-right'|'move-left'|'end';\n")),(0,i.kt)("p",null,"animation \uc740 css \uc758 animation \uc815\uc758\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"animation: `${moveRightKeyframe.getName()} 0.7s forwards`\n")),(0,i.kt)("h3",{id:"optional-animationend"},"(optional) animationEnd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\ud0c0\uc785 : (config:AnimationConfig) => void"))),(0,i.kt)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc5c8\uc744\ub54c \ud638\ucd9c\ub429\ub2c8\ub2e4.  \ud30c\ub77c\ubbf8\ud130\ub85c \ud604\uc7ac \uc7ac\uc0dd\uc911\uc778 \uc560\ub2c8\uba54\uc774\uc158\uc758 config \uc815\ubcf4\uac00 \uc81c\uacf5\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ud2b9\uc815 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc885\ub8cc\ub418\uc5c8\uc744\ub54c \uc5b4\ub5a4 \ud589\ub3d9\uc744 \ud574\uc57c\ud558\ub294 \uacbd\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc608\ub97c \ub4e4\uc5b4 \ud2b9\uc815 \uc560\ub2c8\uba54\uc774\uc158\uc774 \ub05d\ub098\uace0 \uc2e4\uc81c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud574\uc81c\ucc98\ub9ac \ud558\uace0 \uc2f6\uc73c\uba74 animationEnd \uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8 \ud574\uc81c \ub85c\uc9c1\uc744 \ub123\uc73c\uba74 \ub429\ub2c8\ub2e4."))}R.isMDXComponent=!0}}]);