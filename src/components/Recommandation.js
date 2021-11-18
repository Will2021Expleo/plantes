import React from "react";
import "../styles/Recommandation.css";

const currentMonth = new Date().getMonth() + 1; //on récupéère la date en cours +1 dans le mois avec la variable "currentMonth" (+1 parce que en js le premier mois correspont à 0)
const isSpring = currentMonth + 1 >= 2 && currentMonth + 1 <= 5; //on a un booléen qui correspond au printemps
console.log("Nous sommes au: " + currentMonth + "ème mois"); //popur vérifer le mois en cours (Novembre)

const Recommandation = () => {
  if (!isSpring) {
    return <div className="lmj-recom">Ce n'est pas le moment de rempoter</div>;
  }
  return <div className="lmj-recom">C'est le printemps, rempotez</div>;
};

export default Recommandation;
