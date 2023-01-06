import { Productcard } from "./Productcard";

export function Prodlist({ prods }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {prods.map((el) => (
        <Productcard produit={el} />
      ))}
    </div>
  );
}
