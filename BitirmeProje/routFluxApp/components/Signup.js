import React , {components} from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

//import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { Component } from 'react/cjs/react.production.min'

export default class Login extends Component{
    
    render() {

        /*const textInputChange = (val) => {
            if( val.trim().length >= 4 ) {
                setData({
                    ...data,
                    username: val,
                    check_textInputChange: true,
                    isValidUser: true
                });
            } else {
                setData({
                    ...data,
                    username: val,
                    check_textInputChange: false,
                    isValidUser: false
                });
            }
        }

        const handlePasswordChange = (val) => {
            if( val.trim().length >= 8 ) {
                setData({
                    ...data,
                    password: val,
                    isValidPassword: true
                });
            } else {
                setData({
                    ...data,
                    password: val,
                    isValidPassword: false
                });
            }
        }
        const updateSecureTextEntry = () => {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }*/
    
        return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                 <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}>
                 </FontAwesome>
                 <TextInput
                    placeholder='Your Email'
                    style={styles.textInput}
                    autoCapitalize='none'
                    >
                 </TextInput>
                 <Feather
                    name="check-circle"
                    color="green"
                    size={2}>
                 </Feather>
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                 <Feather
                    name="lock"
                    color="#05375a"
                    size={20}>
                 </Feather>
                 <TextInput
                    placeholder='Your Password'
                    style={styles.textInput}
                    secureTextEntry={false}
                    autoCapitalize='none'
                    >
                 </TextInput>
                 
                 <Feather
                    name="eye-off"
                    color="gray"
                    size={20}>
                 </Feather>
                </View>
                <Text style={[styles.text_footer,{marginTop:35}]}>Confirm Password</Text>
                <View style={styles.action}>
                 <Feather
                    name="lock"
                    color="#05375a"
                    size={20}>
                 </Feather>
                 <TextInput
                    placeholder='Confirm Your Password'
                    style={styles.textInput}
                    secureTextEntry={false}
                    autoCapitalize='none'
                    >
                 </TextInput>
                 
                 <Feather
                    name="eye-off"
                    color="gray"
                    size={20}>
                 </Feather>
                </View>
                <View style={styles.button}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}>
                    <Text style={[styles.textSign, {color:'#fff' }]}>Sign Up</Text>
                </LinearGradient>
                <TouchableOpacity
                    onPress={() => alert('sign in')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
                    <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
        )
        }
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });