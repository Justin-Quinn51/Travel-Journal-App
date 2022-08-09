import Header from "./components/Header"
import Place from "./components/Place"
import data from "./data"

function App() {
const places = data.map(place => {
  return (
    <div className="App">
      <Place
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
