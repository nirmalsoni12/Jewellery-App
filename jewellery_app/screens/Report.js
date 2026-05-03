import {View,FlatList} from 'react-native';
import {useEffect,useState} from 'react';
import {collection,getDocs} from 'firebase/firestore';
import { getItems } from '../services/db';
import {db} from '../services/firebase';
import ItemCard from '../components/ItemCard';

export default function Report(){
  const [items,setItems]=useState([]);
  useEffect(()=>{load()},[]);
  const load = async () => {
    const data = await getItems();
    setItems(data);
  };
  return(
    <FlatList
      data={items}
      renderItem={({item})=><ItemCard item={item}/>}
    />
  );
}
