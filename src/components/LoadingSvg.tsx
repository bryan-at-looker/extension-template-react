import React, { useState, useEffect, useContext } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Flex } from '@looker/components';
import styled, {keyframes} from 'styled-components'

export function LoadingSvg() {
  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      paddingBottom="10%"
    >
      <StyledSvg version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 180 33.7" enableBackground="new 0 0 180 33.7" width="350px">
        <g>
          <path fill="#00A1DF" d="M98.7,30c0.2,0,0.4-0.2,0.4-0.4v-3.8c0-0.2-0.2-0.4-0.4-0.4h-0.8c-1.1,0-1.6-0.5-1.6-1.8V4.2   c0-0.2-0.2-0.4-0.4-0.4h-4.6c-0.2,0-0.4,0.2-0.4,0.4v20c0,4.1,1.6,5.9,5.7,5.9H98.7z M87.2,30c0.2,0,0.4-0.2,0.4-0.4v-3.8   c0-0.2-0.2-0.4-0.4-0.4h-0.8c-1.1,0-1.6-0.5-1.6-1.8V4.2c0-0.2-0.2-0.4-0.4-0.4h-4.6c-0.2,0-0.4,0.2-0.4,0.4v20   c0,4.1,1.6,5.9,5.7,5.9H87.2z M74.3,29.8c0.2,0,0.4-0.2,0.4-0.4V11.7c0-0.2-0.2-0.4-0.4-0.4h-4.6c-0.2,0-0.4,0.2-0.4,0.4v17.7   c0,0.2,0.2,0.4,0.4,0.4H74.3z M74.3,8.3c0.2,0,0.4-0.2,0.4-0.4V4.2c0-0.2-0.2-0.4-0.4-0.4h-4.6c-0.2,0-0.4,0.2-0.4,0.4v3.8   c0,0.2,0.2,0.4,0.4,0.4H74.3z M56.8,15.6h-4.3c-0.2,0-0.2-0.1-0.2-0.2V8.9c0-0.2,0.1-0.2,0.2-0.2h4.3c2.4,0,3.8,1.4,3.8,3.5   C60.6,14.3,59.2,15.6,56.8,15.6 M51.9,29.8c0.2,0,0.4-0.2,0.4-0.4v-8.7c0-0.2,0.1-0.2,0.2-0.2h4.6c5.6,0,9.1-3.4,9.1-8.3   c0-5-3.4-8.4-9.1-8.4H47c-0.2,0-0.4,0.2-0.4,0.4v25.2c0,0.2,0.2,0.4,0.4,0.4H51.9z" />
          <path fill="#00A1DF" d="M179.8,29.8c0.2,0,0.3-0.2,0.2-0.4l-6.5-11.2l5.7-6.5c0.2-0.2,0.1-0.4-0.2-0.4h-4.9c-0.3,0-0.5,0.1-0.7,0.4   l-5.3,6.5v-14c0-0.2-0.2-0.4-0.4-0.4h-4.6c-0.2,0-0.4,0.2-0.4,0.4v25.2c0,0.2,0.2,0.4,0.4,0.4h4.6c0.2,0,0.4-0.2,0.4-0.4v-5.1   L170,22l4.1,7.5c0.2,0.3,0.3,0.4,0.6,0.4H179.8z M152.7,30.2c3.2,0,5.7-1.5,7-3.5c0.1-0.2,0.1-0.4-0.1-0.5l-3.3-2.2   c-0.2-0.2-0.4-0.1-0.6,0.1c-0.8,1.1-1.6,1.6-2.9,1.6c-1.4,0-2.4-0.7-2.9-2c-0.3-0.8-0.3-1.6-0.3-3.2c0-1.5,0.1-2.4,0.3-3.2   c0.4-1.3,1.5-2,2.9-2c1.3,0,2.1,0.5,2.9,1.6c0.2,0.2,0.3,0.2,0.6,0.1l3.3-2.2c0.2-0.2,0.2-0.3,0.1-0.5c-1.3-2-3.8-3.5-7-3.5   c-3.9,0-6.9,1.8-8,5.2c-0.4,1.1-0.6,2.5-0.6,4.4c0,1.9,0.2,3.3,0.6,4.4C145.8,28.4,148.8,30.2,152.7,30.2 M132.6,26.2   c-1.8,0-2.7-0.7-2.7-2c0-1.5,1-2.1,3.3-2.1h2.6c0.2,0,0.2,0.1,0.2,0.2v1.3C136,25.4,134.9,26.2,132.6,26.2 M140.7,29.8   c0.2,0,0.4-0.2,0.4-0.4V17.6c0-4.6-2.2-6.7-8.2-6.7c-3.1,0-5.3,0.7-6.9,1.8c-0.2,0.1-0.2,0.3-0.1,0.5l1.7,3   c0.1,0.2,0.3,0.2,0.5,0.1c0.9-0.7,2.3-1.2,4.1-1.2c2.9,0,3.8,0.8,3.8,2.5v0.7c0,0.2-0.1,0.2-0.2,0.2h-3.3c-4.6,0-7.7,1.9-7.7,6   c0,3.9,2.9,5.7,6.2,5.7c2.5,0,4.1-0.8,5.1-2h0v1.2c0,0.2,0.2,0.4,0.4,0.4H140.7z M114,15.7h-4.3c-0.2,0-0.2-0.1-0.2-0.2V8.9   c0-0.2,0.1-0.2,0.2-0.2h4.3c2.4,0,3.8,1.4,3.8,3.5C117.8,14.3,116.4,15.7,114,15.7 M109.1,29.8c0.2,0,0.4-0.2,0.4-0.4v-8.7   c0-0.2,0.1-0.2,0.2-0.2h4.6c5.6,0,9.1-3.4,9.1-8.3c0-5-3.4-8.4-9.1-8.4h-10.1c-0.2,0-0.4,0.2-0.4,0.4v25.2c0,0.2,0.2,0.4,0.4,0.4   H109.1z" />
          <g>
            <path fill="#00A1DF" d="M28.8,33.7H5c-3.6,0-5-3-5-5V5c0-3.6,3-5,5-5h23.8c3.6,0,5,3,5,5v23.8C33.7,32.4,30.8,33.7,28.8,33.7z     M5,4C4,4,4,4.6,4,5v23.8c0,1,0.6,1,1,1h23.8c1,0,1-0.6,1-1V5c0-1-0.6-1-1-1H5z" />
          </g>
        </g>
      </StyledSvg>

    </Flex>
  );
}

const keyframe1 = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0.2;
  }
  40% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  60% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  100% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0.2;
  }
  
`

const StyledSvg = styled.svg`
	-webkit-animation: ${keyframe1} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;
	        animation: ${keyframe1} 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both;
`