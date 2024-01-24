import { Button, Flex, Form, Input } from "@mint-ui/core";
import React from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function FormBasic(){

  const [data, setData] = useState({
    aaa:'a',
    bbb:'b',
  })

  return <Frame>
    <div>data.aaa = {data.aaa}</div>
    <div>data.bbb = {data.bbb}</div>
    <div>---------------------</div>
    <Form data={data} setData={setData}>
      <Flex flexGap="10px">
        <span>aaa : <Input targetId='aaa' /></span> {/* data.aaa 와 바인딩 */}
        <span>bbb : <Input targetId='bbb' /></span> {/* data.bbb 와 바인딩 */}
      </Flex>
    </Form>
  </Frame>
}

export function FormMintValidate(){

  const [data, setData] = useState({
    aaa:'',
  })

  const [msg, setMsg] = useState('');

  return <Frame>
    <div>data.aaa = {data.aaa}</div>
    <div>validate message = {msg}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData} useMintFormValidation 
    onFormInvalid={(targetId:keyof T, validationMessage:string)=>{
      setMsg(validationMessage);
    }}>
      <Flex flexGap="10px">
        <span>숫자만입력 : <Input targetId='aaa' validValue={(target:HTMLInputElement|HTMLTextAreaElement, value:string|number, onSubmit:boolean, formDefaultShowMessage)=>{
          
          // submit 이 아니면 유효성 체크 안함
          if(!onSubmit){
            return undefined;
          }
          
          // 유효성 체크
          let msg:string|undefined = undefined;
          if(String(value).length < 1 || String(value).length > 3){
            msg = '3자리까지 입력!!!'
          }else if(Number.isNaN(Number(value))){
            msg = '숫자만 입력!!!'
          }
          
          // 메시지 팝업
          msg && formDefaultShowMessage(msg, target);

          // onFormInvalid 로 메시지 리턴
          return msg;

        }} /></span> {/* data.aaa 와 바인딩 */}
      </Flex>
    </Form>
    <Button type="submit" form="my-form" onClick={()=>{
      setMsg('');
    }} >전송</Button>
  </Frame>
}