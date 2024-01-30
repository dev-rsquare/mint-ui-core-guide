import { Dropdown, DropdownControl, Flex } from "@mint-ui/core";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Frame } from "../common/Frame";

function DropdownIcon({open}:{open?:boolean}){
  return <Flex flexSize="20px" flexAlign='center' style={{width:'15px', height:'15px', overflow:'hidden', transform:open?'':'translate(-7px, 4px)'}}>
  <div style={{width:'10px', height:'10px', background:'gray', transform:open?'translateX(-10px)  rotate(45deg)':'translateY(-7px) rotate(45deg)'}} />
</Flex>
}

const MyDropdown = forwardRef<DropdownControl, {list:string[]}>(({list}, ref)=>{

  const control = useRef<DropdownControl>();

  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const down = ()=>{
      setOpen(false)
    }
    window.addEventListener('mousedown', down);
    return ()=>{
      window.removeEventListener('mousedown', down);
    }
  }, [])

  useImperativeHandle(ref, () => (control.current), []);

  return <Dropdown
  ref={control}
  fitContextToTitle 
  containerWidth='200px'
  title='선택'
  style={{ width: '100%', height:'40px', background:open? '#f4f2f2' : 'white' }}
  icon={<DropdownIcon open={open} />}
  dropdownGap={5}
  onClick={()=>{
    setOpen(control.current?.getShowState());
  }}
  >
    <div style={{ width: '100%', background: 'white', border: '1px solid black', padding: '5px 10px' }}>
      {list.map((name)=>{
        return <div>{name}</div>
      })}
    </div>
  </Dropdown>
})

export function DropdownBasic(){

  return <Frame>
    <Flex rowDirection flexGap="10px">
      <MyDropdown list={['선택1','선택2','선택3']} />
      <MyDropdown list={['두번째 선택1','두번째 선택2','두번째 선택3']} />
      <MyDropdown list={['세번째 선택1']} />
    </Flex>
  </Frame>
}