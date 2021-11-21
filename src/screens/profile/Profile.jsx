import React from "react";
import "./profile.css";
import {BiImageAdd} from 'react-icons/bi';
import {Button} from 'react-bootstrap';
import {CgLogOut} from 'react-icons/cg';
import { useAuth } from "../../Context/authProvider";
export default function Profile() {
    const authContext = useAuth();
  return (
    <div className="contenedor">
      <div className="svgImage">
        <div className = "svgImage__photoAndset">
        <img
        style = {{width: "200px", height: "200px"}}
        src  = "https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
        // src = "https://media.revistavanityfair.es/photos/6142d7a2676699d3bfcd1584/1:1/w_1764,h_1764,c_limit/254577.jpg"
          alt="usertatata"
        />
        <Button variant = "success" className = "photoAndset__set"><BiImageAdd /></Button>
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
