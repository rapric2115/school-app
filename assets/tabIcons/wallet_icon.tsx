import React from 'react';
import Svg, { Path } from 'react-native-svg';

function wallet(props: any) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M17 17.396H3a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z"
    />
    <Path
      fill={props.color}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 11.396a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M16 4.396V3a2 2 0 0 0-2.515-1.932L2.485 4A2 2 0 0 0 1 5.933v.463"
    />
  </Svg>
  )
}

export default wallet