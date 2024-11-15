import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BankIcon = (props: any) => {
  return (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#777"
      d="M0 20.833v-6.25h6.25v-4.166l8.333 7.291L6.25 25v-4.167H0ZM41.667 7.708v2.709h-25V7.708L29.167 0l12.5 7.708ZM16.667 25h25v4.167h-25V25Zm10.416-12.5h4.167v10.417h-4.167V12.5Zm-8.333 0h4.167v10.417H18.75V12.5Zm16.667 0h4.166v10.417h-4.166V12.5Z"
    />
  </Svg>
  )
}

export default BankIcon;