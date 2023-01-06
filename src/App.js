import "./App.css";
import { Navigationbar } from "./Component/Navigationbar";
import { Prodlist } from "./Component/Prodlist";
import { Cart } from "./Component/Cart";
import { Pagefooter } from "./Component/Pagefooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { user, list } from "./data";
import Toast from "react-bootstrap/Toast";

function App() {
  console.log(list);
  function handleClick(nameProduct) {
    return (
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{nameProduct}</Toast.Body>
      </Toast>
    );
    // console.log(nameProduct);
  }
  return (
    <>
      <Navigationbar userprops={user}>
        <img
          width="80px"
          style={{
            borderRadius: "50%",
          }}
          src={user.img}
          alt="1"
        />
      </Navigationbar>
      <Prodlist prods={list} />
      <Cart prods={list} handleAlert={handleClick} />
      <Pagefooter name={user.name} props2="test" />
    </>
  );
}

export default App;
