import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import Row from './Row.js';

//import Video from 'react-native-video';
const data2 = [
  {
    "description" : "24:25",
    "id" : "014a7e4b-a234-4345-9338-00b46e2fbcb5",
    "mediaType" : "VIDEO",
    "mediaUrl" : "https://firebasestorage.googleapis.com/v0/b/super-jornada-polozi.appspot.com/o/media%2Fe145f617-ee95-4933-b85e-eaf8973d149c?alt=media",
    "name" : "Episódio 09",
    "thumbUrl" : ""
  },
  {
    "description" : "17:15",
    "id" : "01b5e3d1-271e-421a-ae42-239bd4576854",
    "mediaType" : "VIDEO",
    "mediaUrl" : "https://firebasestorage.googleapis.com/v0/b/super-jornada-polozi.appspot.com/o/media%2Fcff57953-364f-4ef2-8a4b-b5efdaa1e14e?alt=media",
    "name" : "#18 Contágio Social",
    "thumbUrl" : ""
  },
  {
    "description" : "07:51",
    "id" : "02458a79-37e9-4c98-a060-0e6348e781a7",
    "mediaType" : "VIDEO",
    "mediaUrl" : "https://firebasestorage.googleapis.com/v0/b/super-jornada-polozi.appspot.com/o/media%2Fc5860632-7710-470a-9911-6d4c77c712b9?alt=media",
    "name" : "Pq meu casamento está acabando?",
    "thumbUrl" : ""
  }
];

// const data = [{data: 'ok1'}, {data: 'ok22'}]

class ExplorarScreen extends React.Component {

  componentDidMount () {
      
  }

  static navigationOptions = ({ navigation }) => {
    const {params} = navigation.state
    //console.log(navigation.state)
    return {
      headerTitle: (params ? 'Olá '+params.firebase.user.displayName.split(' ')[0] : 'teste'),
    }
  }

  state = {
    dataSource: data2,
  }

  render() {
    return (
      <ScrollView>

        <FlatList
          horizontal={true}
          data={this.state.dataSource}
          keyExtractor={(item, index) => item.name}
          //data={[{key: 'a'}, {key: 'b'}]}
          //renderItem={({item}) => <Row key={item.key} />}
          renderItem={({item}) => (<Row {...item} />)} 
        />

      </ScrollView>
    );
  }
}

export default ExplorarScreen;
