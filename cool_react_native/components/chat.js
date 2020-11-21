import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  StatusBar,
} from 'react-native'

const DATA = [
  {
    id: '1',
    title: '1 First Item',
  },
  {
    id: '2',
    title: '2 Second Item',
  },
  {
    id: '3',
    title: '3 Third Item',
  },
  {
    id: '4',
    title: '4 First Item',
  },
  {
    id: '5',
    title: '5 Second Item',
  },
  {
    id: '6',
    title: '6 Third Item',
  },
  {
    id: '7',
    title: '7 First Item',
  },
  {
    id: '8',
    title: '8 Second Item',
  },
  {
    id: '9',
    title: '9 Third Item',
  },
  {
    id: '10',
    title: '10 First Item',
  },
  {
    id: '11',
    title: '11 Second Item',
  },
  {
    id: '12',
    title: '12 Third Item',
  },
]

class Chat extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              key={item.key}
              underlayColor="null"
              onPress={() => this._onPress(item)}>
              <View style={styles.groupItem}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      'https://yt3.ggpht.com/ytc/AAUvwnhN5kgme30N4jdO6ttsVD7ikpWfWJRNmgrGu2LzIg=s900-c-k-c0x00ffffff-no-rj',
                  }}
                />
                <View style={styles.groupInfo}>
                  <View style={styles.groupInfo1}>
                    <Text style={styles.titleName}>{item.title}</Text>
                    <Text style={styles.titleDate}>21/06/1993</Text>
                  </View>
                  <Text style={styles.titleContent}>noi dung gan nhat</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: StatusBar.currentHeight || 0,
  },
  tinyLogo: {
    width: 55,
    borderRadius: 55 / 2,
    height: 55,
  },
  groupItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    height: 70,
    marginVertical: 1.0,
    marginHorizontal: 15,
  },
  groupInfo: {
    flex: 1,
  },
  groupInfo1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleName: {
    fontSize: 18,
    marginLeft: 10,
  },
  titleDate: {
    fontSize: 10,
  },
  titleContent: {
    fontSize: 15,
    marginLeft: 10,
  },
})

export default Chat
