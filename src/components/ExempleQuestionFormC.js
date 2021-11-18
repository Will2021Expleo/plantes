import React, { useState } from "react"; //on rajoute useState

const QuestionFormC = () => {
  const [inputValue, setInputValue] = useState("posez votre question ici"); //Déclaration de l'état inital de inputValue et setInputValue pour lui donner une valeur par défaut

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
};

export default QuestionFormC;
/**
 * Ici, je passe une fonction en callback à  onChange   pour qu'elle sauvegarde dans mon state local la valeur de mon input. J'accède à la valeur tapée dans l'input avec  e.target.value.

 inputValue   a maintenant accès au contenu de mon input à tout moment. Je peux donc créer un bouton qui déclenche une alerte qui affiche le contenu de mon input, comme ici :
 */
