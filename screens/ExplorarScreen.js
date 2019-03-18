import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import Row from './Row.js';

//import Video from 'react-native-video';

const data = [{data: 'ok1'}, {data: 'ok22'}]

class ExplorarScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {headerTitle: 'Explorar'}
  }

  state = {
    dataSource: data,
  }
  render() {
    return (
      <ScrollView>

        <FlatList
          horizontal={true}
          data={this.state.dataSource}
          keyExtractor={(item, index) => item.data}
          //data={[{key: 'a'}, {key: 'b'}]}
          //renderItem={({item}) => <Row key={item.key} />}
          renderItem={({item}) => (<Row {...item} />)} 
        />

      </ScrollView>
    );
  }
}

export default ExplorarScreen;
