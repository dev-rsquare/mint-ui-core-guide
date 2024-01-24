import { Flex, Form, Select } from "@mint-ui/core";
import React from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function SelectBasic(){

  const [data, setData] = useState({
    aaa: 'a',
  })

  return <Frame>
    <div>data.aaa = {String(data.aaa)}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData}>
      <Flex rowDirection flexGap="10px">
        <Flex>
          <div>
            select
          </div>
          <div>
            <Select
            targetId='aaa'
            item={[
              {label:'A', value:'a'},
              {label:'B', value:'b'},
              {label:'C', value:'c'},
            ]}
            />
          </div>
          <div>
            select (radio type)
          </div>
          <div>
            <Select
            targetId='aaa'
            type="radio"
            item={[
              {label:'A', value:'a'},
              {label:'B', value:'b'},
              {label:'C', value:'c'},
            ]}
            />
          </div>
        </Flex>
      </Flex>
    </Form>
  </Frame>
}