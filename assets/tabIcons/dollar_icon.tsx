import React from 'react'
import Svg, { Path } from 'react-native-svg';

const dolarIcon = (props: any) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 20a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 12.933a2.82 2.82 0 0 0 3 2.57c2.42 0 3-1.39 3-2.57s-1-2.43-3-2.43-3-.79-3-2.4a2.75 2.75 0 0 1 3-2.6 2.89 2.89 0 0 1 3 2.6M10.5 17v-1.3m0-11.7v1.499"
    />
  </Svg>
  )
}

export default dolarIcon;