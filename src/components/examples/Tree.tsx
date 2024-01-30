import React, { useState } from "react";
import { Frame } from "../common/Frame";
import { Tree, TreeNode } from "@mint-ui/core";

interface MyData {
  name:string;
}

const makeTestData = (cnt:number, limit:number, level:number):TreeNode<MyData>[] => (level < limit ? Array.from(Array(cnt)).map((_, idx) => ({
  checked: 'none',
  show: false,
  children: makeTestData(cnt, limit, level + 1),
  referenceData: { name: `data ${level} - ${idx}` },
})) : []);

export function TreeBasic(){
  
  const [ data, setData ] = useState<TreeNode<MyData>[]>(makeTestData(3, 6, 1));

  return <Frame>
    <Tree
        data={data}
        setData={setData}
        treeStyle={{
          itemPaddingPixel: '30px',
          treeItemGapPixel: '0px',
          checkboxColor: '#1AAA84',
          treeContainerPadding: '10px 5px',
        }}
        useDefaultCheck
        renderItemContent={(item, processToggle) => (
          <>
            {/* 더블클릭시에 토글되도록 처리 */}
            <div onDoubleClick={processToggle} style={{ userSelect: 'none', padding: '10px' }}>{item.referenceData?.name}</div>
          </>
        )}
      />
  </Frame>
}