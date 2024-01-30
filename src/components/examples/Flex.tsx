import { Flex as FlexCore } from "@mint-ui/core";
import React from "react";
import styled from "styled-components";
import { Frame } from "../common/Frame";

const Flex = styled(FlexCore)<{bg?:string;}>`
  border:1px solid lightgray;
  ${({bg})=>bg?`background-color: ${bg};`:''}
`;

const BASE_HEIGHT = '250px';

export function FlexBasic(){
  return <Frame>
    <FlexCore flexGap="10px">

      <Flex flexHeight={BASE_HEIGHT}>
        <Flex flexAlign="center">1</Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

    </FlexCore>
  </Frame>
}

export function FlexDirection(){
  return <Frame>
    <FlexCore flexGap="10px">

      <div>FlexDirection : Column</div>
      <Flex flexHeight={BASE_HEIGHT}>
        <Flex flexAlign="center">1</Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

      <div>FlexDirection : Row</div>
      <Flex rowDirection flexHeight={BASE_HEIGHT}>
        <Flex flexAlign="center">1</Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

    </FlexCore>
  </Frame>
}

export function FlexSize(){
  return <Frame>
    <FlexCore flexGap="10px">

      <div>Flex : Column</div>
      <Flex flexHeight={BASE_HEIGHT}>
        <Flex flexSize="150px" flexAlign="center">1</Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

      <div>Flex : Row</div>
      <Flex rowDirection flexHeight={BASE_HEIGHT}>
        <Flex flexSize="150px" flexAlign="center">1</Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

    </FlexCore>
  </Frame>
}

export function FlexSizeFitContent(){
  return <Frame>
    <FlexCore flexGap="10px">

      <div>Flex : Column</div>
      <Flex flexHeight={BASE_HEIGHT}>
        <Flex flexSize="fit-content" flexAlign="center">
          <Flex flexHeight="170px" bg="lightgreen">170px child</Flex>
        </Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

      <div>Flex : Row</div>
      <Flex rowDirection flexHeight={BASE_HEIGHT}>
        <Flex flexSize="fit-content" flexAlign="center">
          <Flex flexWidth="170px" bg="lightgreen">170px child</Flex>
        </Flex>
        <Flex flexAlign="center">2</Flex>
        <Flex flexAlign="center">3</Flex>
      </Flex>

    </FlexCore>
  </Frame>
}

export function FlexAlign(){
  return <Frame>
    <FlexCore flexGap="10px">

      <Flex flexHeight="500px" style={{flexWrap:'wrap', alignContent:'flex-start'}}>

        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="left-top">left-top</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="left-center">left-center</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="left-bottom">left-bottom</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="center-top">center-top</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="center">center</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="center-bottom">center-bottom</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="right-top">right-top</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="right-center">right-center</Flex>
        <Flex flexSize="33.3%" flexWidth="33.3%" flexAlign="right-bottom">right-bottom</Flex>

      </Flex>

    </FlexCore>
  </Frame>
}