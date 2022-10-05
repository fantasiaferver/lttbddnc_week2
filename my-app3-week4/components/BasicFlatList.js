import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import flatListData from '../FlatListData';





export default function BasicFlatList() {
  return (
    <View style={styles.container}>
      <FlatList style={{}}
        data={flatListData}
        renderItem={
          ({ item, index }) => {
            return (
              <View style={styles.viewItem}>
                  {/* <Image source={require('./assets/ca_nau_nau.png')}></Image> */}
                  <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                    <Text>Shop: {item.shop}</Text>
                  </View>
                  <View style={{width: 100, height: 40, backgroundColor:'red', justifyContent: 'center', alignItems:'center'}}><Text style={{color: 'white'}}>Chat</Text></View>
              </View>
            )
          }
        }
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5EFE6',
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem:{
    color:TouchableWithoutFeedback,
    padding: 10
  },
  viewItem: {
    // flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
    // marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#DFF6FF',
    // width: '100%',
    height: 100
  }
});