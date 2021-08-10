import React from "react";
import {Card} from "react-bootstrap";

const Cardd = ({ user }) => {
  return (
    <div >
    <Card border="info" style={{ width: '18rem' ,backgroundColor:'blue'}}>
    <Card.Header>{user.id}</Card.Header>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
            <span>{user.username}</span>
            <span><p>{user.email} </p></span> 
            <span>{user.phone}</span>        
      </Card.Text>
    </Card.Body>
  </Card>
               
    </div>
  );
};

export default Cardd;