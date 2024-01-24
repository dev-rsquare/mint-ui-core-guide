import { Button, Flex, Form, TextArea } from "@mint-ui/core";
import React from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function TextareaBasic(){

  const [data, setData] = useState({
    aaa:'a',
  })

  return <Frame>
    <div>data.aaa = {data.aaa}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData}>
      <Flex flexGap="10px">
        <span>
          aaa : 
          {/* data.aaa 와 바인딩 */}
          {/* a~z 글자만 입력 허용 */}
          {/* maxLength = 30 */}
          <TextArea targetId='aaa' 
          validCharacter={/[a-z]/} 
          maxLength={30}
          />
        </span> 
      </Flex>
    </Form>
    <Button type="submit" form="my-form">전송</Button>
  </Frame>
}