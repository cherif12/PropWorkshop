import Table from "react-bootstrap/Table";
import { Productpanier } from "./Productpanier";

export function Cart({ prods, handleAlert }) {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((el) =>
            el.qtsAch ? (
              <Productpanier newprop={el} handleAlertProp={handleAlert} />
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
