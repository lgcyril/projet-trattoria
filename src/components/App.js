import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

function App() {
  const title =
    "La maison TRATTORIA est heureuse de vous accueillir pour une dégustation raffinée de produits frais venant de l'Italie et de la Sicile.";

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison TRATTORIA" className="tra-logo" />
        <h1 className="tra-title">{title.toUpperCase()}</h1>
      </Banner>
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
