// Andiamo a creare un componente react scritto da zero
// la andiamo a creare a FUNZIONE
// Esitono componenti:
// a funzione -> più semplicei da scrivere, meno "capaci"
// a classe -> un po' più complessi ma più potenti

// Il nome della funzione e il nome del file devono essere gli stessi e devono essere in PascalCase
const sole = "Luna"
const Title = function () {
  return (
    <div>
      <h2>Che bella giornata di {sole}</h2>
    </div>
  )
}

// Il componente è definito, adesso va esportato in modo da poterlo utilizzare
// in App

export default Title

// Di solito una struttura valida è:
// - UN COMPONENTE PER FILE
// - UN EXPORT DEFAULT PER IL SINGOLO COMPONENTE
