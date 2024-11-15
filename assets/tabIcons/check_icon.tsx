import Svg, { Path } from 'react-native-svg';
import React from 'react'

const check_icon = (props: any) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} style={{justifyContent: 'center', alignSelf: 'center', width: 15, height: 15}}>
      <Path
        fill="#000"
        d="M6 10.17 2.53 6.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L17.29 1.71A.996.996 0 1 0 15.88.3L6 10.17Z"
      />
    </Svg>
  )
}

export default check_icon;