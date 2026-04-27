// un file JS/JSX che comincia con una lettera maiuscola (o che genericamente segue 1a nomenclatura
// PascalCase) è un COMPONENTE REACT!
// Un componente REACT ha estensione .js/.jsx

// Un componente react è un frammento di interfaccia
//  può venire scritto in due formule: come CLASSE o come FUNZIONE.
// La formula più semplice è quella descritta in questo file

//Il contenuto di questi componenti viene scritto in una sintassi simile ad HTML chiamato JSX
// JSX è retrocompatibile con l'HTML ma con l'agevolazione del poter inserire direttamente JS al suo interno
// Inserendo un paio di graffe è possibile inserire del JS all'interno della struttura
// siccome alcune parole sono riservate in JS bisogna usare dei tag alternativi
// class --> className
// for-->forHMTL
// tutti i listener diventano camelCase
// onclick --> onClick

import "./App.css"
// come inserisco Title dentro App
// prima lo importo
import Title from "./components/Title"

function App() {
  // la regola dice che un'espressione JSX (come il valore di un return) può contenere UN SOLO VALORE
  // quindi va inserito tutto all'interno di un "contenitore Virtuale"
  // Che serve a far rispettare la regola del singolo valore. Si chiama REACT FRAGMENT
  return (
    <>
      <Title />
    </>
  )
}

export default App

// Al termine di ogni file JSX il file va ESPORTATO il componente React definito
// in modo da rendererlo disponibile all'interno dell'app vite negli altri file/componenti
