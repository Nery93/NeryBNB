import Header from "./components/Header"
import Item from "./components/Item"
function App() {

  return (
    <>
      <Header />

      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 max-w-7xl mx-auto'>

          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          
        </div>
      </section>

    </>
  )
}

export default App
