import React, { useState, useEffect, useContext } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Flex } from '@looker/components';
import styled, {keyframes} from 'styled-components'

export function IconSvg() {
  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
    >
      <svg version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 33.7 33.7" enableBackground="new 0 0 33.7 33.7" width="50px">
        <g> 
          <g>
            <path fill="#00A1DF" d="M28.8,33.7H5c-3.6,0-5-3-5-5V5c0-3.6,3-5,5-5h23.8c3.6,0,5,3,5,5v23.8C33.7,32.4,30.8,33.7,28.8,33.7z     M5,4C4,4,4,4.6,4,5v23.8c0,1,0.6,1,1,1h23.8c1,0,1-0.6,1-1V5c0-1-0.6-1-1-1H5z" />
          </g>
        </g>
      </svg>

    </Flex>
  );
}