import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ img,name,options}) => {

const [showDesc,setShowDesc]=useState(false);


  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-4 text-center"
      onClick={()=>setShowDesc(!showDesc)}
    >
      {!showDesc && (
           <Container>
           <Image width="70%" src={img}></Image>
           <h3 className="display-6">{name}</h3>
         </Container>
         )}
 

 { showDesc && (
    <ol>
    {options.map((item)=>{
      return (
        <li>{item}</li>
      )
    })
  }
  </ol>)}
   

    </Container>
  );
};

export default Language;
