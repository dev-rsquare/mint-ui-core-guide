import React, { useEffect, useState } from "react";
import { Frame } from "../common/Frame";
import { Button, Flex, ModalWrapper } from "@mint-ui/core";

export function ModalBasic(){

  const [ open, setOpen ] = useState(false);
  useEffect(()=>{
    console.log('open', open);
    
  }, [open])

  return <Frame>
    <Button onClick={()=>{
      console.log('open click');
      setOpen(true)
    }}>팝업 오픈</Button>
    <ModalWrapper dimmer="dimmed" open={open} onClose={()=>{
      console.log('close');
      // setOpen(false)
    }}>
      <Flex debug flexWidth='300px' flexHeight='400px' flexAlign="center" style={{background:'white'}}>
        modal content
      </Flex>
    </ModalWrapper>   
  </Frame>
}