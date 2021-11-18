import Sun from "../assets/sun.svg"; //import de l'image "sun"
import Water from "../assets/water.svg"; //import de l'image "water"

//création d'une variable pour la quantité d'eaux ou de lumières : quantityLabel
const quantityLabel = {
  1: "peu",
  2: "modérement",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    //au click on affiche une alerte avec un message en fonction de la quantité
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
