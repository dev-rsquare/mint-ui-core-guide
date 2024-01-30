"use strict";(self.webpackChunkmint_ui_core_guide=self.webpackChunkmint_ui_core_guide||[]).push([[7802],{7317:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>k});var n=e(7462),l=e(7294),r=e(3905),i=e(5257),u=e(927);function o(){const[t,a]=(0,l.useState)({aaa:"1"});return l.createElement(u.R,null,l.createElement("div",null,"data.aaa = ",t.aaa),l.createElement("div",null,"---------------------"),l.createElement(i.l0,{formId:"my-form",data:t,setData:a},l.createElement(i.kC,{flexGap:"10px"},l.createElement("span",null,"aaa :",l.createElement(i.II,{targetId:"aaa",validCharacter:["1","2","3"],maxLength:3})))),l.createElement(i.zx,{type:"submit",form:"my-form"},"\uc804\uc1a1"))}const p={},m="Input",d={unversionedId:"guides/component-input",id:"guides/component-input",title:"Input",description:"Form \ucef4\ud3ec\ub10c\ud2b8\uc640 \uac19\uc774 \uc0ac\uc6a9\ub418\ub294 input \ud615\uc2dd\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/guides/component-input.mdx",sourceDirName:"guides",slug:"/guides/component-input",permalink:"/mint-ui-core-guide/docs/guides/component-input",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Form",permalink:"/mint-ui-core-guide/docs/guides/component-form"},next:{title:"Check",permalink:"/mint-ui-core-guide/docs/guides/component-check"}},s={},k=[{value:"\uc18d\uc131 \uc124\uba85",id:"\uc18d\uc131-\uc124\uba85",level:2},{value:"targetId",id:"targetid",level:3},{value:"(optional) validValue",id:"optional-validvalue",level:3},{value:"FormValidFunction \uc758 \ud30c\ub77c\ubbf8\ud130 \uc124\uba85",id:"formvalidfunction-\uc758-\ud30c\ub77c\ubbf8\ud130-\uc124\uba85",level:4},{value:"(optional) validCharacter",id:"optional-validcharacter",level:3}],c={toc:k},g="wrapper";function N(t){let{components:a,...e}=t;return(0,r.kt)(g,(0,n.Z)({},c,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input"},"Input"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mint-ui-core-guide/docs/guides/component-form"},"Form")," \ucef4\ud3ec\ub10c\ud2b8\uc640 \uac19\uc774 \uc0ac\uc6a9\ub418\ub294 input \ud615\uc2dd\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. "),(0,r.kt)("p",null,"\uae30\ubcf8 \uc0ac\uc6a9\uc740 input \uacfc \uac19\uc9c0\ub9cc Form \uacfc \uad00\ub828\ub41c \uc5ec\ub7ec\uac00\uc9c0 mint-ui \ub9cc\uc758 \ud2b9\uc131\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export function InputBasic(){\n\n  const [data, setData] = useState({\n    aaa:'1',\n  })\n\n  return <Frame>\n    <div>data.aaa = {data.aaa}</div>\n    <div>---------------------</div>\n    <Form data={data} setData={setData}>\n      <Flex flexGap=\"10px\">\n        <span>\n          aaa : \n          {/* data.aaa \uc640 \ubc14\uc778\ub529 */}\n          {/* 1, 2, 3 \uae00\uc790\ub9cc \uc785\ub825 \ud5c8\uc6a9 */}\n          {/* maxLength = 3 */}\n          <Input targetId='aaa' \n          validCharacter={['1','2','3']} \n          maxLength={3}\n          />\n        </span> \n      </Flex>\n    </Form>\n  </Frame>\n}\n")),(0,r.kt)(o,{mdxType:"InputBasic"}),(0,r.kt)("p",null,"input \uc5d8\ub808\uba3c\ud2b8\uc758 \uc18d\uc131\uc744 \ub3d9\uc77c\ud558\uac8c \uac00\uc9c0\ubbc0\ub85c maxLength \uc640 \uac19\uc740 input \uc758 \uc18d\uc131\ub3c4 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc18d\uc131-\uc124\uba85"},"\uc18d\uc131 \uc124\uba85"),(0,r.kt)("h3",{id:"targetid"},"targetId"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"targetId = keyof T\n")),(0,r.kt)("p",null,"Form \uc5d0 \ubc14\uc778\ub529\ub41c T \ud0c0\uc785\uc5d0 \ub300\ud55c \uc18d\uc131\uc744 targetId \uc5d0 \uc9c0\uc815\ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc18d\uc131\uacfc input \uc774 \ubc14\uc778\ub529\ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"optional-validvalue"},"(optional) validValue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"validValue = FormValidationTypes = RegExp|FormValidFunction|string[];\n\nFormValidFunction = (target:HTMLInputElement|HTMLTextAreaElement, value:string|number, onSubmit:boolean, formDefaultShowMessage:FormDefaultShowMessage)=>string|undefined;\n")),(0,r.kt)("p",null,"Form \ucef4\ud3ec\ub10c\ud2b8\uc758 useMintFormValidation \uc635\uc158\uc774 true \uc77c\ub54c \uc0ac\uc6a9\ub418\ub294 \uc18d\uc131\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"Input \uc5d0 \ub4e4\uc5b4\uc624\ub294 \uc0ac\uc6a9\uc790\uc785\ub825\uac12\uc744 \uc815\ud569\uc131 \uccb4\ud06c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud06c\uac8c 2\uac00\uc9c0 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"onInput \uc774\ubca4\ud2b8 \ub0b4\uc5d0\uc11c"),(0,r.kt)("li",{parentName:"ul"},"form submit \uc774\ubca4\ud2b8 \ub0b4\uc5d0\uc11c")),(0,r.kt)("p",null,"\uc544\ub798\ub294 validValue \uc758 \ud0c0\uc785\ubcc4 \uc124\uba85\uc785\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegExp"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc785\ub825\ub41c \uc815\uaddc\uc2dd\uc73c\ub85c test \ub97c \uccb4\ud06c\ud558\uc5ec \uacb0\uacfc\ub97c \uc720\ud6a8\uc131\uc744 \ud310\ub2e8\ud569\ub2c8\ub2e4. \ub9cc\uc57d /\\d+/ \ub85c \uc785\ub825\ud55c \uacbd\uc6b0 /\\d+/.test(value) \uc758 \uacb0\uacfc\uac00 false \uc774\uba74 \uc624\ub958\uc785\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FormValidFunction"),(0,r.kt)("td",{parentName:"tr",align:null},"\ud568\uc218\uc758 \uacb0\uacfc\uac00 string \uc774\uba74 \ud574\ub2f9 string \uc744 \uc624\ub958\uba54\uc2dc\uc9c0\ub85c \ud558\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc785\ub825\ub41c string \uc5d0 \uc18d\ud558\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h4",{id:"formvalidfunction-\uc758-\ud30c\ub77c\ubbf8\ud130-\uc124\uba85"},"FormValidFunction \uc758 \ud30c\ub77c\ubbf8\ud130 \uc124\uba85"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ud30c\ub77c\ubbf8\ud130"),(0,r.kt)("th",{parentName:"tr",align:null},"\ud0c0\uc785"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},"HTMLInputElement or HTMLTextAreaElement"),(0,r.kt)("td",{parentName:"tr",align:null},"\uccb4\ud06c \ub300\uc0c1 \uc5d8\ub808\uba3c\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string or number"),(0,r.kt)("td",{parentName:"tr",align:null},"\uccb4\ud06c\ub300\uc0c1 \uac12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSubmit"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc815\ud569\uc131 \uccb4\ud06c \ud0c0\uc774\ubc0d\uc774 submit \uc778\uc9c0 \uc5ec\ubd80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formDefaultShowMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"(message:string, positionBaseElement:HTMLElement)=>void"),(0,r.kt)("td",{parentName:"tr",align:null},"\uba54\uc2dc\uc9c0\uc640 \ub300\uc0c1 \uc5d8\ub808\uba3c\ud2b8\ub97c \ub118\uae30\uba74 \uc989\uc2dc \uadf8 \uc704\uce58\uc5d0 \ud1a0\uc2a4\ud2b8\uba54\uc2dc\uc9c0\ub97c \ub744\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"optional-validcharacter"},"(optional) validCharacter"),(0,r.kt)("p",null,"validValue \uc640 \uac19\uc740 \ud0c0\uc785\uc744 \uac00\uc9c0\uc9c0\ub9cc \uba87\uac00\uc9c0 \ub2e4\ub978\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ub418\ub294 \ud0c0\uc774\ubc0d\uc774 onInput \uc73c\ub85c \ud55c\uc815\ub418\uace0, \uccb4\ud06c\ub300\uc0c1\uc774 onInput \uc2dc\uc5d0 \ub4e4\uc5b4\uc628 data \ud544\ub4dc (\ud0c0\uc774\ud551\ub41c \uae00\uc790) \uc5d0 \ud55c\uc815\ub429\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud0c0\uc774\ud551\ub41c \uae00\uc790\ub97c \uccb4\ud06c\ud558\uc5ec \uc624\ub958\uc778 \uacbd\uc6b0 value \uc5d0 \uc544\uc598 \ub2f4\uae30\uc9c0 \uc54a\ub3c4\ub85d \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"useMintFormValidation \ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294\uacbd\uc6b0\uc5d0\ub3c4 \uc801\uc6a9\ub429\ub2c8\ub2e4.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ubd99\uc5ec\ub123\uae30(onPaste) \ud558\ub294 \uacbd\uc6b0\uc5d0\ub3c4 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4.")))}N.isMDXComponent=!0}}]);