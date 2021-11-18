import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
  console.log("ceci est un clic"); //on déclare la fonction "handleClick " et qui fera un console.log dans la console
  alert(`Vous voulez acheter: ${plantName}? Très bon choix!`);
}

// props de PlantItem : id, cover, name, water, light ==>
function PlantItem({ cover, name, water, light, price }) {
  return (
    //on indique un argument dans une fonction directement dans onClick pour afficher le nom de ce qu'on a cliqué "name"
    <li className="lmj-plant-item" onClick={() => handleClick}>
      <span className="lmj-plant-item-price">{price}€</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
