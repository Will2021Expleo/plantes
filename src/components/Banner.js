import "../styles/Banner.css"; //on importe le css du fichier Banner.css
// import logo from "../assets/logo.png"; // on importe le logo enregistré dans le dossier assets
import Recommandation from "./Recommandation";

function Banner({ children }) {
  // const title = "La maison jungle"; // on passse le titre du site en variables

  //Le code ci-dessous est crée dans le composant "recommendation"
  // const currentMonth = new Date().getMonth() + 1; //on récupéère la date en cours +1 dans le mois avec la variable "currentMonth" (+1 parce que en js le premier mois correspont à 0)
  // const isSpring = currentMonth + 1 >= 2 && currentMonth + 1 <= 5; //on a un booléen qui correspond au printemps
  // console.log("Nous sommes au: " + currentMonth + "ème mois"); //popur vérifer le mois en cours (Novembre)

  // const recommendation = isSpring ? (
  //   <div>C'est le printemps, rempotez</div>
  // ) : (
  //   <div>Ce n'est pas le moment de rempoter</div>
  // );

  return (
    <div className="lmj-banner">
      {children}
      {/* <div className="lmj-banner-row"> */}
      {/* <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>; */}
      {/* </div> */}
      {/* <div className="lmj-spring"> */}
      {
        // Le contenu ci-dessous est remplacé par une variable: recommendation
        // isSpring ? (
        //   <div>C'est le printemps, rempotez</div>
        // ) : (
        //   <div>Ce n'est pas le moment de rempoter</div>
        // )
        <Recommandation />
      }
      {/* </div> */}
    </div>
  );
}

export default Banner;
