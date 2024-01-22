import { AnimationConfig, Animator } from "@mint-ui/core";
import React from "react";
import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Frame } from "../common/Frame";

const popupKeyframe = keyframes`
  from {
    opacity:0;
    transform:scale(0);
  }
  to {
    opacity:1;
    transform:scale(1);
  }
`;
const moveRightKeyframe = keyframes`
  from {
    opacity:1;
    transform:translateX(0px);
  }
  to {
    opacity:1;
    transform:translateX(300px);
  }
`;
const moveLeftKeyframe = keyframes`
  from {
    opacity:1;
    transform:translateX(300px);
  }
  to {
    opacity:1;
    transform:translateX(0%);
  }
`;
const hideKeyframe = keyframes`
  from {
    opacity:1;
    transform:scale(1);
  }
  to {
    opacity:0;
    transform:scale(0);
  }
`;
type MyAnimationType = 'start'|'move-right'|'move-left'|'end';
const MyAnimatorWrapper = styled(Animator<MyAnimationType>)`
  position:relative;
  opacity:0;
  ${popupKeyframe} ${hideKeyframe} ${moveRightKeyframe} ${moveLeftKeyframe}
`;

export function AnimatorBasic(){

  const start = useRef<AnimationConfig<MyAnimationType>>({ name: 'start', animation: `${popupKeyframe.getName()} 1s forwards` });
  const moveRight = useRef<AnimationConfig<MyAnimationType>>({ name: 'move-right', animation: `${moveRightKeyframe.getName()} 0.7s forwards` });
  const moveLeft = useRef<AnimationConfig<MyAnimationType>>({ name: 'move-left', animation: `${moveLeftKeyframe.getName()} 0.5s forwards` });
  const end = useRef<AnimationConfig<MyAnimationType>>({ name: 'end', animation: `${hideKeyframe.getName()} 1.5s forwards` });
  const [ animation, setAnimation ] = useState<AnimationConfig<MyAnimationType>>(start.current);

  return <Frame>
    <MyAnimatorWrapper config={animation} animationEnd={(ani)=>{
      if(ani.name === 'start'){
        setAnimation(moveRight.current);
      }else if(ani.name === 'move-right'){ 
        setAnimation(moveLeft.current);
      }else if(ani.name === 'move-left'){ 
        setAnimation(end.current);
      }else if(ani.name === 'end'){ 
        setAnimation(start.current);
      }
    }}>
      <div style={{background:'red', borderRadius: '100%', width:'50px', height:'50px'}}></div>
    </MyAnimatorWrapper>
  </Frame>
}