import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import db from "../firebase/firebase";

export default async function addTask(task, id) {
  await setDoc(doc(db, `tareas`, "noComplet"),{
      task: task,
      state: false,
      id: id,
  });
}
