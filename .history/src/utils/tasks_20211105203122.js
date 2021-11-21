import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import db from "../firebase/firebase";

export default async function addTask(task, id) {
    try{
        await setDoc(doc(db, `tareas/noCompleted/${id}`), {
          task: task,
          state: false,
          id: id,
        });

    }catch(e){
        console.log(e);
    }
}
