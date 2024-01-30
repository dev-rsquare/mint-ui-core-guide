import { Check, Flex, Form } from "@mint-ui/core";
import React from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function CheckBasic(){

  const [data, setData] = useState({
    aaa:false,
    bbb:[],
  })

  return <Frame>
    <div>data.aaa = {String(data.aaa)}</div>
    <div>data.bbb = {JSON.stringify(data.bbb)}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData}>
      <Flex rowDirection flexGap="10px">
        <Flex>
          <span>
            aaa checked <Check targetId='aaa'/>
          </span>
        </Flex>
        <Flex>
          <div>
            bbb multi check
          </div>
          <div>
            1:<Check targetId='bbb' value={1}/>
            2:<Check targetId='bbb' value={2}/>
            3:<Check targetId='bbb' value={3}/>
          </div>
        </Flex>
      </Flex>
    </Form>
  </Frame>
}