import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import {useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function Screen1({ navigation }) {
    const route = useRoute();

    var blue = require('../assets/blue.png');
    var [link, setLink] = useState(blue);

    // useEffect(() => {
    //     if (route.params != null)
    //       setLink(route.params.message)
    //   });

  return (
    <View style={styles.container}>
      <View style={styles.contain_image}>
        <Image source={link}></Image>
      </View>
      <View style={styles.contain_info}>
        <Text style={styles.phoneName}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.contain_rating}>
          <View style={styles.star}>
            <Image source={require('../assets/star.png')}></Image>
            <Image source={require('../assets/star.png')}></Image>
            <Image source={require('../assets/star.png')}></Image>
            <Image source={require('../assets/star.png')}></Image>
            <Image source={require('../assets/star.png')}></Image>
          </View>
          <Text style={styles.totalRating}>
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View style={styles.contain_price}>
          <Text style={styles.price}>
            1.790.000 đ
          </Text>
          <Text style={styles.oldPrice}>
            1.790.000 đ
          </Text>
        </View>
        <View style={styles.contain_more}>
          <Text style={styles.more}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <View style={styles.contain_howico}>
            <Image source={require('../assets/howico.png')}></Image>
          </View>          
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Option')} activeOpacity={0.5}>
          <View style={styles.btn_changeColor}>
            <Text>4 MÀU-CHỌN MÀU</Text>
          </View>
        </TouchableOpacity> 
      </View>
      <TouchableOpacity>
      <View style={styles.btn_selectBuy}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>CHỌN MUA</Text>
        </View>
      </TouchableOpacity>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain_image: {
    // flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start', 
    
  },
  contain_rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10
  },
  star: {
    flexDirection: 'row'
  },
  phoneName: {
    fontSize: 16
  },
  contain_price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  oldPrice: {
    fontSize: 18,
    textDecorationLine:'line-through',
    color: 'gray',
    fontWeight:'bold',
    marginRight: 30
  },
  contain_more: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  more: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 20
  },
  btn_changeColor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderTopColor: 'gray',
    padding: 10,
    marginBottom: 10
  },
  btn_selectBuy: {
    // flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    // borderWidth: 1,
    // borderTopColor: 'gray'
    backgroundColor: 'red',
    padding: 15
  }
});
