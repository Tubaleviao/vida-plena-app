import React from 'react';
import { Image} from 'react-native';
import { MdPerson } from 'react-icons/md'

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/shark.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
} 

export default LogoTitle