import React, { useRef, useState } from "react";
import { Frame } from "../common/Frame";
import { Button, Flex, Toast, ToastControl } from "@mint-ui/core";
import styled from "styled-components";

export function ToastBasic(){
  const control = useRef<ToastControl|null>(null);
  const divRef = useRef<HTMLDivElement|null>(null);
  return <Frame>
    <Flex>
      <Button onClick={() => {
        divRef.current && control.current?.showMessage('메시지다!!!', divRef.current, 0, 30);
      }}
      >열기
      </Button>
    </Flex>
    <Flex>
      <div ref={divRef}>여기에 토스트가 뜹니다.</div>
    </Flex>
    <Toast ref={control} 
    timeToShow={2000}
    />
  </Frame>
}

export function ToastCustom(){
  const control = useRef<ToastControl|null>(null);
  const divRef = useRef<HTMLDivElement|null>(null);

  const [msg, setMsg] = useState('');
  const showCustomMessage = (msg:string) => {
    setMsg(msg);
    divRef.current && control.current?.showMessage(msg, divRef.current, 0, 30);
  }

  return <Frame>
    <Flex>
      <Button onClick={() => {
        showCustomMessage('커스텀메시지다!!!');
      }}
      >열기
      </Button>
    </Flex>
    <Flex>
      <div ref={divRef}>여기에 toastBody 가 뜹니다.</div>
    </Flex>
    <Toast ref={control}
    toastBody={<div style={{border:'1px solid red', borderRadius: '10px', padding:'5px 10px', background: 'orange'}}>{msg}</div>}
    timeToShow={2000}
    />
  </Frame>
}

export function ToastIcon(){
  const control = useRef<ToastControl|null>(null);
  const divRef = useRef<HTMLDivElement|null>(null);
  return <Frame>
    <Flex>
      <Button onClick={() => {
        divRef.current && control.current?.showMessage('아이콘이 있는 메시지입니다.', divRef.current, 0, 30);
      }}
      >열기
      </Button>
    </Flex>
    <Flex>
      <div ref={divRef}>여기에 토스트가 뜹니다.</div>
    </Flex>
    <Toast ref={control} 
    timeToShow={2000}
    toastIcon={<div style={{width:'15px', height:'15px', borderRadius:'100%', background:'red'}}></div>}
    />
  </Frame>
}

const StyledAnimation = styled.div`
  @keyframes slidein {
    from {
      transform: translateX(50%);
      opacity: 0;
    }

    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes slideout {
    from {
      transform: translateX(0%);
      opacity: 1;
    }

    to {
      transform: translateX(50%);
      opacity: 0;
    }
  }
`;
export function ToastAnimation(){
  const control = useRef<ToastControl|null>(null);
  const divRef = useRef<HTMLDivElement|null>(null);
  return <Frame>
    <Flex>
      <Button onClick={() => {
        divRef.current && control.current?.showMessage('메시지다!!!', divRef.current, 0, 30);
      }}
      >열기
      </Button>
    </Flex>
    <Flex>
      <div ref={divRef}>여기에 토스트가 뜹니다.</div>
    </Flex>
    <StyledAnimation>
      <Toast ref={control} 
      timeToShow={2000}
      showAnimation='slidein 1s' hideAnimation='slideout 0.7s'
      />
    </StyledAnimation>
  </Frame>
}