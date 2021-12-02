import React, { useState, useEffect } from "react";
import "./profile.css";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { CgLogOut } from "react-icons/cg";
import { useAuth } from "../../Context/authProvider";
const storage = getStorage();
export default function Profile() {
  let urlDescarga = "";
  const [profileP, setprofileP] = useState('');
  const authContext = useAuth();
  useEffect(() => {
    async function callProfile(){
        const archivoRef = sRef(
          storage,
          `profile/${authContext.usuario.email}`
        );
        const data  = await getDownloadURL(archivoRef);

          localStorage.setItem('task', data.toString());
          const name = localStorage.getItem('task');
          name ? 
          setprofileP(name) : setprofileP('');
  
    }
    callProfile();
      return ()=>{
        setprofileP('');
        localStorage.removeItem('task');
      }
  }, []);
  const handleWatchFile = async (archivo) => {
    console.log(archivo[0]);
    //detectar el size del archivo
    if (parseInt(archivo[0].size / 1000) < 2024) {
      setprofileP(archivo[0].name);
      alert("archivo subido correctamente");
      //subir el archivo a firebase storage
      try {
        const archivoRef = sRef(
          storage,
          `profile/${authContext.usuario.email}`
        );
        await uploadBytesResumable(archivoRef, archivo[0]);
        //obtener url
        urlDescarga = await getDownloadURL(archivoRef);
        console.log(urlDescarga);
        localStorage.setItem('task', urlDescarga.toString());
        setprofileP(urlDescarga);
      } catch (e) {
        alert(e);
      }
    } else {
      console.log(typeof archivo[0].size);
      alert("el archivo es muy grande");
      setprofileP("https://media.revistavanityfair.es/photos/6142d7a2676699d3bfcd1584/1:1/w_1764,h_1764,c_limit/254577.jpg");
    }
  };
  return (
    <div className="contenedor">
      <div className="svgImage">
        <div className="svgImage__photoAndset">
          <img
            style={{ width: "200px", height: "200px" }}
            src={profileP}
            // src = "https://media.revistavanityfair.es/photos/6142d7a2676699d3bfcd1584/1:1/w_1764,h_1764,c_limit/254577.jpg"
            alt="usertatata"
          />
          <div className="upload">
            <input
              type="file"
              accept="images/*"
              id="file"
              onChange={(e) => handleWatchFile(e.target.files)}
            />
            <label htmlFor="file" id="file-label">
              <BiImageAdd />
            </label>
          </div>
        </div>
      </div>
      <p>Hello im the profile</p>
      <Button
        className="mt-4 mb-4"
        variant="warning"
        type="submit"
        onClick={() => {
          authContext.logOut();
        }}
      >
        <CgLogOut />
        Logout
      </Button>
    </div>
  );
}
