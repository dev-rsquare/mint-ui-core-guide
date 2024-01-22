import { Button, Carousel, CarouselHanlderProps, Flex } from '@mint-ui/core';
import React, { useRef, useState } from 'react';

import { Frame } from '../common/Frame';

export function CarouselBasic() {

  const [ handleState, setHandleState ] = useState<CarouselHanlderProps>({
    move: () => {},
    moveto: () => {},
  });

  const dataset = useRef([
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F205A183C4E5DA86331',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1868733C4E5DA86408',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F185EC93C4E5DA86624',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F1211CE464E5E49C215',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F140829464E5E49D02D',
  ]);

  return (
    <Frame>
      <Carousel
        width={1024}
        height={768}
        total={dataset.current.length}
        // infinite
        onLoad={setHandleState}
        render={(i) => (
          <img width='100%' height='100%' src={dataset.current[i]} />
        )}
      />
      <Flex rowDirection>
        <Button onClick={(() => handleState.move('left'))}>왼쪽</Button>
        <Button onClick={(() => handleState.move('right'))}>오른쪽</Button>
      </Flex>

      <Flex rowDirection>
        <Button onClick={(() => handleState.moveto(0))}>0번째 이미지</Button>
        <Button onClick={(() => handleState.moveto(1))}>1번째 이미지</Button>
        <Button onClick={(() => handleState.moveto(2))}>2번째 이미지</Button>
        <Button onClick={(() => handleState.moveto(3))}>3번째 이미지</Button>
        <Button onClick={(() => handleState.moveto(4))}>4번째 이미지</Button>
      </Flex>
    </Frame>
  );
}