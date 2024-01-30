import { Flex, Form, Radio } from "@mint-ui/core";
import React, { useRef } from "react";
import { useState } from "react";
import { Frame } from "../common/Frame";

export function RadioBasic(){

  const value1 = useRef({value:'1'});
  const value2 = useRef({value:'2'});

  const [data, setData] = useState({
    aaa: 'a',
    bbb: value1.current
  })

  return <Frame>
    <div>data.aaa = {String(data.aaa)}</div>
    <div>data.bbb = {JSON.stringify(data.bbb)}</div>
    <div>---------------------</div>
    <Form formId="my-form" data={data} setData={setData}>
      <Flex rowDirection flexGap="10px">
        <Flex>
          <div>
            string value
          </div>
          <div>
            a : <Radio
            targetId='aaa'
            radioValue='a'
            />
            b : <Radio
            targetId='aaa'
            radioValue='b'
            />
          </div>
          <div>
            object value
          </div>
          <div>
            value1 : <Radio
            targetId='bbb'
            radioValue={value1.current}
            />
            value2 : <Radio
            targetId='bbb'
            radioValue={value2.current}
            />
          </div>
        </Flex>
      </Flex>
    </Form>
  </Frame>
}