import { Autocomplete, Form, SuggestedItem } from '@mint-ui/core';
import React, { useEffect, useState } from 'react';

import { Frame } from '../common/Frame';

interface SampleData {
  name: string;
  value: string;
}

function getData(cnt:number):SuggestedItem<SampleData>[] {
  return Array.from(Array(cnt)).map((_, idx) => ({
    label: `name:${idx}`,
    value: {
      name: `name:${idx}`,
      value: `value:${idx}`,
    },
  } as SuggestedItem<SampleData>));
}

// 테스트 데이터
const data = getData(100);

// 가상 api
async function search(value: string) {
  return data.filter((item) => item.label.indexOf(value) >= 0);
}

export function AutocompleteBasic() {
  const [ searchData, setSearchData ] = useState({ value: '' });

  const handleKeyInput = (value: string) => {
    if (value) {
      return search(value);
    }
    return [];
  };

  useEffect(() => {
    console.log('changed', searchData);
  }, [ searchData ]);

  return (
    <Frame>
      <Form
        data={searchData}
        setData={setSearchData}
        onFormSubmit={(() => {
          console.log('form submit');
        })}
        formId='aaaa'
      >
        <Autocomplete
          width='200px'
          placeholder='숫자를 검색해주세요.'
          targetId='value'
          onKeyInput={(value) => handleKeyInput(value)}
          onSelectItem={(v) => {
            console.log('선택됨', v);
            setSearchData({ value: v.value.name });
          }}
          onSubmit={(e) => e.stopPropagation()}
        />
      </Form>
    </Frame>
  );
}

export function AutocompleteRenderer() {
  const [ searchData, setSearchData ] = useState({ value: '' });

  const handleKeyInput = (value: string) => {
    if (value) {
      return search(value);
    }
    return [];
  };

  useEffect(() => {
    console.log('changed', searchData);
  }, [ searchData ]);

  return (
    <Frame>
      <Form
        data={searchData}
        setData={setSearchData}
        onFormSubmit={(() => {
          console.log('form submit');
        })}
        formId='aaaa'
      >
        <Autocomplete
          width='200px'
          placeholder='숫자를 검색해주세요.'
          targetId='value'
          onKeyInput={(value) => handleKeyInput(value)}
          onSelectItem={(v) => {
            console.log('선택됨', v);
            setSearchData({ value: v.value.name });
          }}
          itemRenderer={(item, idx)=>{
            return <div>{`${item.label} - ${idx}`}</div>
          }}
        />
      </Form>
    </Frame>
  );
}

export function AutocompleteMaxWidth() {
  const [ searchData, setSearchData ] = useState({ value: '' });

  const handleKeyInput = (value: string) => {
    if (value) {
      return search(value);
    }
    return [];
  };

  useEffect(() => {
    console.log('changed', searchData);
  }, [ searchData ]);

  return (
    <Frame>
      <Form
        data={searchData}
        setData={setSearchData}
        onFormSubmit={(() => {
          console.log('form submit');
        })}
        formId='aaaa'
      >
        <Autocomplete
          width='200px'
          placeholder='숫자를 검색해주세요.'
          targetId='value'
          onKeyInput={(value) => handleKeyInput(value)}
          onSelectItem={(v) => {
            console.log('선택됨', v);
            setSearchData({ value: v.value.name });
          }}
          itemRenderer={(item, idx)=>{
            return <div>{`${item.label} - ${idx}ssssssssssssssssssss`}</div>
          }}
          itemMaxWidth='200px'
        />
      </Form>
    </Frame>
  );
}