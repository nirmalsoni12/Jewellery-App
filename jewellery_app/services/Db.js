import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// 🔹 local cache (offline support)
let localItems = [];

// ➕ ADD ITEM
export const addItem = async (item) => {
  try {
    // firebase save
    const docRef = await addDoc(collection(db, "items"), item);

    // local save
    localItems.push({ id: docRef.id, ...item });

    return { success: true };
  } catch (error) {
    console.log("DB Error:", error);
    return { success: false };
  }
};

// 📥 GET ITEMS
export const getItems = async () => {
  try {
    const snapshot = await getDocs(collection(db, "items"));

    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    localItems = items; // update cache

    return items;
  } catch (error) {
    console.log("Fetch Error:", error);

    // fallback → local data
    return localItems;
  }
};

// 🔍 SEARCH ITEMS
export const searchItems = async (query) => {
  const items = await getItems();

  return items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};
