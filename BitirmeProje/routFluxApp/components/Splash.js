
import { NavigationContainer } from '@react-navigation/native';
import React , {components} from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
//import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Component } from 'react/cjs/react.production.min'

export default class Splash extends Component{
    //const Splash = ({navigation}) => {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>Hang Out With!</Text>
                    </View>
                <View 
                    //animation="fadeInUpBig"
                    //duration="1500"
                    style={styles.footer}>
                    <Text style={styles.title}>Let's Chat with People of The World!</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                    <TouchableOpacity onPress={() => alert('click')}>
                        <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}>
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    </View>
            </View>
            
        )
    }
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#009387'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
          width: height_logo,
          height: height_logo
      },
      title: {
          color: '#05375a',
          fontSize: 30,
          fontWeight: 'bold'
      },
      text: {
          color: 'grey',
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30
      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row'
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
      }
    

});
