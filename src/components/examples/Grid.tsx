import React, { useState } from "react";
import { Frame } from "../common/Frame";
import { Flex, Grid } from "@mint-ui/core";

export function GridBasic(){

  const [ data ] = useState(Array.from(Array(10000)).map((_, idx)=>({item1:idx, item2:idx, item3:idx})))

  return <Frame>
    <Flex flexHeight="200px">
      데이터 갯수 : {data.length}
      <Grid
      headers={[
        {label:'항목1', targetId:'item1'},
        {label:'항목2', targetId:'item2'},
        {label:'항목3', targetId:'item3'},
      ]}
      data={data}
      />
    </Flex>
  </Frame>
}

export function GridHeaderSpan(){

  const [ data ] = useState(Array.from(Array(10)).map((_, idx)=>({item1:idx, item2:idx, item3:idx})))

  return <Frame>
    <Flex flexHeight="200px">
      데이터 갯수 : {data.length}
      <Grid
      headers={[
        {label:'항목1', targetId:'item1', width:100},
        {label:'항목2', targetId:'item2', width:150},
        {label:'항목3', targetId:'item3'},
      ]}
      data={data}
      gridStyle={{
        headerHeight: '90px',
        headerSpan: [
          [
            { label: '전체 병합' },
          ],
          [
            { spanCount: 2, label: '항목1 과 항목2' },
            { label: '항목3' },
          ],
        ],
      }}
      />
    </Flex>
  </Frame>
}