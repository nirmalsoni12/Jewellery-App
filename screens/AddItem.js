import {View,Button,Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import { addItem } from '../services/db';
import { db } from '../services/firebase';
import { useState } from 'react';

export default function AddItem(){
  const [image,setImage]=useState(null);

  const pick=async()=>{
    const r=await ImagePicker.launchImageLibraryAsync();
    if(!r.canceled) setImage(r.assets[0].uri);
  };

  const save=async()=>{
    await addDoc(collection(db,"items"),{
      name:"Gold Ring",
      gw:10,
      nw:9,
      image
    });
    alert("Saved");
  };

  return(
    <View>
      <Button title="Pick Image" onPress={pick}/>
      {image && <Image source={{uri:image}} style={{height:200}}/>}
      <Button title="Save" onPress={save}/>
    </View>
  );
}
