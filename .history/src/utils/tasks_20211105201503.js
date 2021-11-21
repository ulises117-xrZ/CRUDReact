import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import db from "../firebase/firebase";

export default async function addTask(col) {
  await setDoc(doc(db, `${col}`));
}
