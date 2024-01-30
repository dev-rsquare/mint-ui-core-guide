import { Flex, useContextMenu } from "@mint-ui/core";
import React from "react";
import { Frame } from "../common/Frame";

export function ContextMenuBasic(){

  const { contextElement, show } = useContextMenu(
  <div style={{border:'1px solid gray', background:'#efefef', padding:'10px 15px'}}>
    <div>뒤로</div>
    <div>앞으로</div>
    <div>새로고침</div>
  </div>)

  return <Frame>
    {contextElement} {/* useContextMenu 를 통해 얻은 element 를 삽입 */}
    <Flex flexHeight="300px" flexAlign="center" 
    style={{border:'1px solid gray'}}
    onContextMenu={(e)=>{
      e.preventDefault();
      show(`${e.clientX}px`, `${e.clientY}px`);
    }}>
      여기서 우클릭하면 ContextMenu 가 뜹니다.
    </Flex>
  </Frame>
}