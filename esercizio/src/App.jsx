import "./App.css"
import Button from "./components/Button"
import ImageComponent from "./components/ImageComponent"
function App() {
  return (
    <>
      <div className="wrap-container">
        <ImageComponent link="https://placebear.com/200/300" alt="placebear Image" />
        <Button buttonName="Sono un bottone" />
        <ImageComponent link="https://placecats.com/200/300" alt="placecat Image" />
        <Button buttonName="Anche io sono un bottone" />
        <ImageComponent link="https://placedog.net/200/300" alt="placedogs Image" />
        <Button buttonName="Terzo bottone" />
        <ImageComponent link="https://placebear.com/200/300" alt="Another placebear Image" />
        <Button buttonName="Quarto bottone" />
      </div>
    </>
  )
}

export default App
