import { Text } from "@mint-ui/core";
import { Frame } from "../common/Frame";
import React from "react";

export function TextBasic(){
  return <Frame>
    <Text text='나는 텍스트 입니다. 이 텍스트는 200px 까지만 표시됩니다.'
    size={16}
    weight={700}
    color="red"
    font="pretendard"
    textWidth='200px'
    ellipsis
    />
  </Frame>
}