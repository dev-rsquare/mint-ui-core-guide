import React, { useState } from "react";
import { Frame } from "../common/Frame";
import { Flex, VirtualList } from "@mint-ui/core";

export function VirtualListBasic(){

  const [ data ] = useState(Array.from(Array(100000)).map((_, idx)=>({name:`idx-${idx}`})))
  
  const renderRows = (idx:number) => {
    return <Flex key={`row-${idx}`} flexAlign='center' flexHeight='40px'>{data[idx].name}</Flex>;
  }

  return <Frame>
    <Flex flexHeight="35px">data 갯수 : {data.length}</Flex>
    <Flex flexHeight="400px">
      <VirtualList
      itemRenderer={renderRows}
      length={data.length}
      />
    </Flex>
  </Frame>
}