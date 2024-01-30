import React, { useState } from "react";
import { Frame } from "../common/Frame";
import { Table } from "@mint-ui/core";

export function TableBasic(){

  const [ data, setData ] = useState({
    selected: false,
    name: 'my name',
    etc: '그리드를 연구할 때는 번호가 매겨진 라인부터 시작하는 것이 가장 논리적일 겁니다.\n왜냐하면, 그리드 레이아웃을 쓸 때마다 거기엔 항상 번호가 매겨진 라인이 있기 때문입니다.\n행과 열의 각 라인에는 번호가 매겨져 있으며, 라인에 번호를 매길 때는 1번부터 시작합니다.\n그리드 라인은 문서의 작성 모드를 기준으로 번호가 매겨진다는 것을 명심하십시오.\n영어와 같이 왼쪽에서 오른쪽으로 읽히는 언어로 쓰인 문서에서는 1번 라인이 그리드의 맨 왼쪽에 위치합니다.\n반대로 오른쪽에서 왼쪽으로 읽히는 언어의 문서에서는 1번 라인이 그리드의 맨 오른쪽에 위치하게 됩니다.\n문서 작성 모드와 그리드 사이의 상호 작용에 대해서는 나중에 자세히 알아보겠습니다.',
    form3: '01',
  });

  return <Frame>
    <div style={{marginBottom:'15px'}}>{JSON.stringify(data)}</div>
    <Table
    formId='my-form'
    data={data}
    setData={(d)=>{
      setData(d)
    }}
    headers={[
      {
        label: '선택',
        targetId: 'selected',
        editable: true,
        formType: 'check',
        width: 100,
      },
      {
        label: '이름',
        targetId: 'name',
        textAlign: 'center',
      },
      {
        label: '입력 select',
        targetId: 'form3',
        editable: true,
        formType: 'select',
        required: true,
        item:[
          {label:'선택1', value:'01'},
          {label:'선택2', value:'02'},
        ]
      },
      {
        label: '비고',
        targetId: 'etc',
        colSpan: 3,
        textAlign: 'left',
        required: true,
        whiteSpace: 'pre-wrap',
        onChange: (param) => {
          console.log('비고 changed', param);
        },
      },
    ]}
    columnCountPerRow={3}
    tableStyle={{ tableWidth: '100%', labelWidth: '100px' }}
    />
  </Frame>
}