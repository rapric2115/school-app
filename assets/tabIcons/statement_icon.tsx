import React from 'react';
import Svg, { Path } from 'react-native-svg';

const statement = (props: any) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 12.25h2.813a1.688 1.688 0 0 0 0-3.375h-1.126a1.687 1.687 0 1 1 0-3.375H19M10 10H5.5m11.25-4.5V4.375m0 9v-1.126M10 14.5H5.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.25 1H2.125A1.125 1.125 0 0 0 1 2.125V21.25l2.632-1.125 2.622 1.125 2.621-1.125 2.621 1.125 2.621-1.125 2.633 1.125v-3.375"
    />
  </Svg>
  )
}

export default statement