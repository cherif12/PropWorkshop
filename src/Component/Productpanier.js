import Button from "react-bootstrap/Button";

export function Productpanier({ newprop, handleAlertProp }) {
  return (
    <tr>
      <td>
        <Button onClick={() => handleAlertProp(newprop.name)} variant="success">
          Success
        </Button>{" "}
      </td>
      <td>{newprop.name}</td>
      <td>{newprop.price}</td>
      <td>{newprop.qtsAch}</td>
      <td>{Number(newprop.price) * Number(newprop.qtsAch)}</td>
    </tr>
  );
}
