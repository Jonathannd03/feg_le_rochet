import React from "react";
import { Card, Image } from "semantic-ui-react";

const Cards = (child) => {
  return (
    <>
      <Card>
        <Image src={child.bild} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{child.title}</Card.Header>
          <Card.Description>{child.content}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default Cards;
