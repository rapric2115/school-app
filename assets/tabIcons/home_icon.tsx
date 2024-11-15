import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props: any) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke = {props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 15.75v-8.5a.999.999 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8v8.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"
    />
  </Svg>
  )
}

export default HomeIcon;