import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1_1}>
          <View style={styles.view_image}>
            <Image source={require('./assets/book.png')}></Image>
          </View>
          <View style={styles.view_info}>
            <Text style={{fontSize: 15,fontWeight: 'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontSize: 15,fontWeight: 'bold'}}>Cung cấp bởi Tiki Trading </Text>
            <Text style={styles.price}>141.800đ</Text>
            <Text style={styles.oldPrice}>141.000đ</Text>
            <View style={styles.view_trade}>
              <View style={styles.action_view}>
                <Button color={'#C4C4C4'} title='-'></Button>
                <Text style={styles.number}>1</Text>
                <Button color={'#C4C4C4'} title='+'></Button>
              </View>
              <Text style={styles.link}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.view1_2}>
          <Text style={{fontSize: 15,fontWeight: 'bold'}}>Mã giảm giá đã lưu</Text>
          <Text style={styles.link}>Xem tại đây</Text>
        </View>
        <View style={styles.view1_3}>
          <View><Text style={styles.saleCode}>Mã giảm giá</Text></View>
          <Button color={'#0A5EB7'} title='Áp Dụng'></Button>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={{fontWeight: 'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.link}>Nhập tại đây</Text>
      </View>
      <View style={styles.view3}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Tạm tính</Text>
        <Text style={styles.preTotal}>141.800đ</Text>
      </View>
      <View style={styles.view4}>
        <View style={styles.trade}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thành tiền</Text>
          <Text style={styles.Total}>141.800đ</Text>
        </View>
        <Button color={'red'} title='TIẾN HÀNH ĐẶT HÀNG'></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  view1: {
    // flex:1,
    height: 250,
    // height: 300,
    padding: 20,
    flexDirection:'column',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  view1_1: {
    // flex: 1,
    flexDirection: 'row',
  },
  view_image: {
    borderWidth:2,
    borderColor: 'pink'
  },
  view_trade: {
    flexDirection: 'row'
  },
  view_info: {
    marginLeft: 12
  },
  view_trade : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  action_view: {
    width: 80,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  price : {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  oldPrice : {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    textDecorationLine: 'line-through'
  },
  number: {
    // padding: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15
  },
  view1_2: {
    width: 250,
    marginTop: 15,
    flexDirection: 'row',
    // alignItems:'center',
    justifyContent: 'space-between'
  },
  view1_3: {
    marginTop: 15,
    width: 200,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  saleCode: {
    borderWidth: 1,
    padding: 6
    
  },
  view2: {
    marginTop: 20,
    // flex:1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  view3: {
    marginTop: 20,
    // flex:1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  preTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },
  view4: {
    marginTop: 190,
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  trade: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
});
