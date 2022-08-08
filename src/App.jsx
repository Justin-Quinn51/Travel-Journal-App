import Header from "./components/Header"
import Body from "./components/Body"
import data from "./data"

function App() {
const places = data.map(place => {
  return (
    <div className="App">
      <Body 
        key={place.id}
        place={place}
      />
    </div>
   )
  })

  return (
    <div>
      <Header />
      <section>
          {places}
      </section>
    </div>
  )
}

export default App
