import {View,Button} from 'react-native';
export default function Dashboard({navigation}){
  return(
    <View style={{flex:1,justifyContent:'center'}}>
      <Button title="Add Item" onPress={()=>navigation.navigate('AddItem')}/>
      <Button title="Report" onPress={()=>navigation.navigate('Report')}/>
      <Button title="Search" onPress={()=>navigation.navigate('Search')}/>
    </View>
  );
}
