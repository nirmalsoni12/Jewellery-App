import {View,Button} from 'react-native';
import { searchItems } from '../services/db';
import {matchItems} from '../services/matcher';

export default function Search(){
  const test=()=>{
    const r=matchItems(
      {name:"Gold Ring",gw:10,nw:9},
      [{name:"Gold Ring",gw:11,nw:9}]
    );
    alert("Score: "+r.score);
  };
  return <View><Button title="Test Match" onPress={test}/></View>;
}
