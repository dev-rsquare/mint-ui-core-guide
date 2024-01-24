import { Button, Flex, Form, Input } from "@mint-ui/core";
import React from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function InputBasic(){

  const [data, setData] = useState({
    aaa:'1',
  })

  return <Frame>
    <div>data.aaa = {data.aaa}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData}>
      <Flex flexGap="10px">
        <span>
          aaa : 
          {/* data.aaa 와 바인딩 */}
          {/* 1, 2, 3 글자만 입력 허용 */}
          {/* min=1 max=1000 */}
          <Input targetId='aaa' 
          validCharacter={['1','2','3']} 
          maxLength={3}
          />
        </span> 
      </Flex>
    </Form>
    <Button type="submit" form="my-form">전송</Button>
  </Frame>
}