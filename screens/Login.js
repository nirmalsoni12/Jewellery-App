import {View,Text,Button} from 'react-native';
export default function Login({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Admin Login</Text>
      <Button title="Enter" onPress={()=>navigation.navigate('Dashboard')}/>
    </View>
  );
}
