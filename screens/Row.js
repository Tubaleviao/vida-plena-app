import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Video, ScreenOrientation } from 'expo';
import { Card, Title, Caption, Paragraph } from 'react-native-paper';

//import Video from 'react-native-video';

const allowLandscape = () => {
  ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
}

const changeScreen = screen => {
  if(Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS == screen.fullscreenUpdate){
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT)
  }
}

const Row = props => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{props.name}</Title>
      <Caption>Omega Ruby</Caption>
      <Video
        onFullscreenUpdate={screen => changeScreen(screen)}
        ref={r=>this.vid=r}
        source={{ uri: props.mediaUrl }}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        style={{ width: 200, height: 200 }}
      />
      <TouchableHighlight onPress={()=>{this.vid.presentFullscreenPlayer(); allowLandscape();}}>
        <Text style={{color: 'yellow'}}>Full Screen</Text>
      </TouchableHighlight>   
    </Card.Content>
  </Card>
)

const styles = StyleSheet.create({
  card: {
    flex:1,
    margin: 4,
  },
});

export default Row;
