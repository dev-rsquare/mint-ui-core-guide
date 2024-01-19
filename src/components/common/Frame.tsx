import { Flex } from '@mint-ui/core';
import React from 'react';

export function Frame({ children }) {
  return (
    <Flex style={{ padding: '5px', margin: '30px 0px' }}>
      <Flex style={{ padding: '30px', border: '1px solid var(--ifm-color-emphasis-300)' }}>
        {children}
      </Flex>
    </Flex>
  );
}