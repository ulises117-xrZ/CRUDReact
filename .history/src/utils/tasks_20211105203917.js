import { collection, setDoc, getDocs, doc } from "firebase/firestore";
import db from "../firebase/firebase";

 async function addTask(task, id) {
    try{
        await setDoc(doc(db, `tareas`, id), {
          task: task,
          completed: false,
          id: id,
        });

    }catch(e){
        console.log(e);
    }
}

const readData = async ()=>{

}

