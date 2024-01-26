import { FlipText } from "@mint-ui/core";
import { Frame } from "../common/Frame";
import React from "react";

export function FlipTextBasic(){
  return <Frame>
    <FlipText
      value='123,456,789'
      fontWeight={700}
      fontFamily='Pretendard'
      color='#3F3E6C'
      fontSize='60px'
      characterWidth='33px'
      characterHeight='70px'
      delayBetweenCharacter={200}
      transitionSpeed={1500}
      flipCount={10}
    />
  </Frame>
}

export function FlipTextBasic2(){
  return <Frame>
    <FlipText
      value='나는 1플립텍스트3 이다.'
      fontWeight={700}
      fontFamily='Pretendard'
      color='#3F3E6C'
      fontSize='60px'
      characterWidth='33px'
      characterHeight='70px'
      delayBetweenCharacter={200}
      transitionSpeed={1500}
      flipCount={10}
    />
  </Frame>
}