/**
 * Fonctions et composants à base de classes
 */
//Les fonctions :
function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

//les classes
class Welcome1 extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));
//==> Résultat : Bonjour Sara
/****************************************************************************** */
// Composition de plusieurs composants
function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
/**
 * Résultat:
Bonjour Sara
Bonjour Cahal
Bonjour Edite
*/
/****************************************************************************** */
