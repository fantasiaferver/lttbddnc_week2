import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import {useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function Screen2({ navigation }) {
    const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
    var blue = require('../assets/blue.png');
    var silve = require('../assets/white.png');
    var red = require('../assets/red.png');
    var black = require('../assets/black.png');
    var image = { blue, silve, red, black };
    var [link, setLink] = useState(image.blue);
    // var [title_color, setTitle_color] = useState("");
    var [color, setColor] = useState("");
    // var [provide, setProvide] = useState("");
    var [provider, setProvider] = useState("");
    var [cost, setCost] = useState("");
    var [i, seti] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.contain_title}>
                <Image style={{width: 115, height: 140, marginRight: 10}} source={link}></Image>
                <View style={styles.contain_info}>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>{title}</Text>
                    <View style={styles.contain_color}>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Màu: </Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{color}</Text>
                    </View>
                    <View style={styles.contain_made}>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Cung cấp bởi: </Text>
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{provider}</Text>
                    </View>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>{cost}</Text>
                </View>
            </View>
                <View style={styles.contain_selectColor}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Chọn 1 màu bên dưới</Text>
                    <TouchableOpacity onPressIn={onPress1} style={styles.boxColorWhite}></TouchableOpacity>
                    <TouchableOpacity onPressIn={onPress2} style={styles.boxColorRed}></TouchableOpacity>
                    <TouchableOpacity onPressIn={onPress3} style={styles.boxColorBlack}></TouchableOpacity>
                    <TouchableOpacity onPressIn={onPress4} style={styles.boxColorBlue}></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home', { message: link, })} activeOpacity={0.5} style={{ marginTop: 60, flexDirection: "row", borderRadius: 10, borderWidth: 0.8, width: 332, height: 50, alignSelf: 'center', justifyContent: 'center', marginVertical: 30, backgroundColor: '#1789ff' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 16, lineHeight: 21, fontWeight: 'bold', color: 'white' }}>XONG</Text>
                </TouchableOpacity>
                </View>
          <StatusBar style="auto" />
        </View>
      );
      function onPress1() {
        return (
            // setTitle_color(title_color = "Màu: "),
            setColor(color = "Bạc"),
            // setProvide(provide = "Cung cấp bởi ")
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.silve),
            seti(i = 1)
        );
    }
    function onPress2() {
        return (
            // setTitle_color(title_color = "Màu: "),
            setColor(color = "Đỏ"),
            // setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.red),
            seti(i = 2)
        );
    }
    function onPress3() {
        return (
            // setTitle_color(title_color = "Màu: "),
            setColor(color = "Đen"),
            // setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.black),
            seti(i = 3)
        );
    }
    function onPress4() {
        return (
            // setTitle_color(title_color = "Màu: "),
            setColor(color = "Xanh"),
            // setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.blue),
            seti(i = 4)
        );
    }
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 30,
          backgroundColor: '#fff',
          alignItems: 'center',
        //   justifyContent: 'space-between',
        },
        contain_made: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5
        },
        contain_color: {
            alignItems: 'center',
            marginBottom: 5,
            flexDirection: 'row'
        },
        contain_info: {
            flex: 1,
            marginBottom: 20,
            // flexDirection: 'row'
            // marginBottom: 5
        },
        contain_title: {
            flexDirection: 'row',
        },
        contain_selectColor: {
            width: 1000,
            flex: 1,
            paddingTop: 60,
            backgroundColor: '#DFF6FF',
            justifyContent: 'center',
            alignItems: 'center'
        },
        boxColorWhite: {
            marginTop: 10,
            width: 100,
            height: 100,
            backgroundColor: 'gray'
        },
        boxColorRed: {
            marginTop: 10,
            width: 100,
            height: 100,
            backgroundColor: 'red'
        },
        boxColorBlack: {
            marginTop: 10,
            width: 100,
            height: 100,
            backgroundColor: 'black'
        },
        boxColorBlue: {
            marginTop: 10,
            width: 100,
            height: 100,
            backgroundColor: 'blue'
        },
       
      });
    
    
    
    
    

