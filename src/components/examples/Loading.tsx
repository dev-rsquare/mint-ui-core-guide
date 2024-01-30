import { Loading } from "@mint-ui/core";
import React from "react";
import { Frame } from "../common/Frame";

export function LoadingBasic(){
  return <Frame>
    <Loading width={100} height={100} baseColor="lightgray" primaryColor="red" thickness={7} />
  </Frame>
}