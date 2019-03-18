explorar old:


        <Video
          ref={r=>this.vid=r}
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/super-jornada-polozi.appspot.com/o/media%2Fe145f617-ee95-4933-b85e-eaf8973d149c?alt=media' }}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width: 200, height: 200 }}
        />
        <TouchableHighlight onPress={()=>this.vid.presentFullscreenPlayer()}>
          <Text style={{color: 'yellow'}}>Full Screen</Text>
        </TouchableHighlight>





        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri: 'https://firebasestorage.googleapis.com/v0/b/super-jornada-polozi.appspot.com/o/media%2Fe145f617-ee95-4933-b85e-eaf8973d149c?alt=media',
            },
          }}
          switchToLandscape={()=> changeScreenOrientation(ScreenOrientation.Orientation.LANDSCAPE)}
          switchToPortrait={()=> changeScreenOrientation()}
          isPortrait={true}
          playFromPositionMillis={0}
        />

        const changeScreenOrientation = orientation => {
  ScreenOrientation.allowAsync(orientation);
  /*
  https://docs.expo.io/versions/latest/sdk/screen-orientation/
  
  ALL -- All 4 possible orientations
  ALL_BUT_UPSIDE_DOWN -- All but reverse portrait, could be all 4 orientations on certain Android devices.
  PORTRAIT -- Portrait orientation, could also be reverse portrait on certain Android devices.
  PORTRAIT_UP -- Upside portrait only.
  PORTRAIT_DOWN -- Upside down portrait only.
  LANDSCAPE -- Any landscape orientation.
  LANDSCAPE_LEFT -- Left landscape only.
  LANDSCAPE_RIGHT -- Right landscape only.
  */
}

const changeScreen = screen => {
  if(Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS == screen.fullscreenUpdate){
    changeScreenOrientation(ScreenOrientation.Orientation.PORTRAIT)
  }
  /*
  https://docs.expo.io/versions/latest/sdk/video/#__next

  Expo.Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT: describing that the fullscreen player is about to present
  Expo.Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT: describing that the fullscreen player just finished presenting
  Expo.Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS: describing that the fullscreen player is about to dismiss
  Expo.Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS: describing that the fullscreen player just finished dismissing
  */
}