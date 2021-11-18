import { useState, useEffect } from "react"; //useState   est un hook qui permet d’ajouter le state local React à des composants fonctions.
//Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React.
import "../styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  // const monstreraPrice = 8;
  // const lierrePrice = 10;
  // const bouquetPrice = 15;
  // const [cart, updateCart] = useState(0); //==> pour agir sur le nombre d'élément dans le panier
  /**
   * on peut créer un state  cart  . Avec  useState  , nous devons  déclarer en même temps une fonction pour mettre à jour ce state ( updateCart  ), et lui attribuer une valeur initiale, qui sera ici de 0 :
   */

  const [isOpen, setIsOpen] = useState(true); //pour afficher ou masque le panier : état initial = false (masqué)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ ${total}€ d'achats 💸💸`;
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer le panier
      </button>

      {cart.length > 0 ? (
        <div>
          <h2>Panier </h2>
          {/* <div>
        Monstrera: {monstreraPrice}€ */}
          {/* <li>Lierre : {lierrePrice}€</li>
        <li>Bouquet de fleurs : {bouquetPrice}€</li> */}
          {/* <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div> */}
          {/* Total : {monstreraPrice + lierrePrice + bouquetPrice}€ */}
          {cart.map(({ name, price, amount }, index) => (
            <div key={`${name}-${index}`}>
              {name} {price}€ x {amount}
            </div>
          ))}

          {/* 
      <h3>Total : {monstreraPrice * cart}€</h3> */}
          <h3>Total : {total}€</h3>
          {/* boutton pour vider le panier  */}
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div className="lmj-textContent">Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
};

export default Cart;
