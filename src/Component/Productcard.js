import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Productcard({ produit }) {
  return (
    <div>
      <Card style={{ width: "18rem", marginTop: "20px" }}>
        <Card.Img variant="top" src={produit.img} />
        <Card.Body>
          <Card.Title>{produit.name}</Card.Title>
          <Card.Text>{produit.price} Dt</Card.Text>
          <Card.Text>{produit.category}</Card.Text>
          <Card.Text>{produit.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
