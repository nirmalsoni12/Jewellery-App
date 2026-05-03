import {View,Text,Image} from 'react-native';
export default function ItemCard({item}){
  return(
    <View style={{backgroundColor:'#222',margin:10,padding:12,borderRadius:10}}>
      {item.image && <Image source={{uri:item.image}} style={{height:120}}/>}
      <Text style={{color:'#fff'}}>{item.name}</Text>
      <Text style={{color:'#aaa'}}>GW:{item.gw} NW:{item.nw}</Text>
    </View>
  );
}
