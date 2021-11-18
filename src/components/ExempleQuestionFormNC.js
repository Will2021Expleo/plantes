/**
 * EXEMPLE DE FORMULAIRE NON CONTROLE EN REACT
 */

import React from "react";

function handleSubmit(e) {
  e.preventDefault(); //prevendefault pour empecher au bouton submit de rafraichir la page
  alert(e.target["my_input"].value);
}

const QuestionFormNC = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="my_input" defaultValue="tapez votre texte" />
      <button type="submit">Entrer</button>
    </form>
  );
};

export default QuestionFormNC;
