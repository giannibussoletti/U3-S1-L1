import "./App.css"
import Post from "./components/Post"
function App() {
  return (
    <>
      <Post
        image="https://placebear.com/50/50"
        name="Gianni Rossi"
        date="13 Feb 2025"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorem pariatur! Aliquid molestias laborum accusamus repellat, nihil eius doloribus. Ab libero, sed officia enim at ipsum autem rem fuga blanditiis!"
        like={20}
        comments={50}
      />
      <Post
        image="https://placebear.com/51/51"
        name="Federico Bianchi"
        date="20 Gen 2025"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorem pariatur! Aliquid molestias laborum accusamus repellat, nihil eius doloribus. Ab libero, sed officia enim at ipsum autem rem fuga blanditiis!"
        like={4}
        comments={3}
      />
      <Post
        image="https://placebear.com/52/52"
        name="Marco Proietti"
        date="15 Giu 2023"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorem pariatur! Aliquid molestias laborum accusamus repellat, nihil eius doloribus. Ab libero, sed officia enim at ipsum autem rem fuga blanditiis!"
        like={2}
        comments={5}
      />
      <Post
        image="https://placebear.com/53/53"
        name="Alessandro Verdi"
        date="20 Dic 2024"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorem pariatur! Aliquid molestias laborum accusamus repellat, nihil eius doloribus. Ab libero, sed officia enim at ipsum autem rem fuga blanditiis!"
        like={20}
      />
    </>
  )
}

export default App
