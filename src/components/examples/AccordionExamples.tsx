import { Accordion } from '@mint-ui/core';
import React from 'react';

import { Frame } from '../common/Frame';

export function AccordionBasic() {
  return (
    <Frame>
      <Accordion title='여기를 클릭하세요'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu aliquet erat.
        Proin a lorem nec nisl malesuada rhoncus id quis orci.
        In non velit ultrices libero viverra vulputate.
        Etiam augue mi, tempor et mauris porttitor, ornare accumsan diam.
      </Accordion>
    </Frame>
  );
}

export function AccordionOpen() {
  return (
    <Frame>
      <Accordion title='여기를 클릭하세요' open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu aliquet erat.
        Proin a lorem nec nisl malesuada rhoncus id quis orci.
        In non velit ultrices libero viverra vulputate.
        Etiam augue mi, tempor et mauris porttitor, ornare accumsan diam.
      </Accordion>
    </Frame>
  );
}

export function AccordionIcon() {
  return (
    <Frame>
      {/* eslint-disable-next-line react/no-unstable-nested-components */}
      <Accordion title='여기를 클릭하세요' icon={(isOpen) => <div>{isOpen ? '-' : '+'}</div>}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu aliquet erat.
        Proin a lorem nec nisl malesuada rhoncus id quis orci.
        In non velit ultrices libero viverra vulputate.
        Etiam augue mi, tempor et mauris porttitor, ornare accumsan diam.
      </Accordion>
    </Frame>
  );
}

function TimeNow() {
  return <div>현재시간:{new Date().toString()}</div>;
}
export function AccordionHiddenMode() {
  return (
    <Frame>
      <Accordion title='클릭해도 시간이 변하지 않습니다.' hideMode='hidden'>
        <TimeNow />
      </Accordion>
    </Frame>
  );
}

export function AccordionHiddenModeNone() {
  return (
    <Frame>
      <Accordion title='클릭할때마다 시간이 변합니다.' hideMode='none'>
        <TimeNow />
      </Accordion>
    </Frame>
  );
}