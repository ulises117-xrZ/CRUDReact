import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import db from "../firebase/firebase";

 export default async function addTask(task, id) {
    try{
        await setDoc(doc(db, `tareas`, id), {
            id: id,
          nameTarea: task,
        });

    }catch(e){
        console.log(e);
    }
}


