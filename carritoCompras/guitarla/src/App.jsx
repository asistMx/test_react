import { useEffect, useState } from 'react'
import Guitar from './components/Guitar'
import {db} from './components/db.js'
import Header from './components/Header.jsx'
import { useCart } from './hooks/useCart.js'

function App() {



     const {cart, addToCart, removeFromCart, addGuitar, substractGuitar, clearCart, isEmpty, cartTotal} = useCart()

     
    const [auth, setAuth] = useState(false)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState(db)


 

  return (
    <>
    <Header 
        cart={cart} 
        removeFromCart={removeFromCart} 
        addGuitar={addGuitar}
        substractGuitar={substractGuitar}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
           {data.map((guitar) => ( 
            <Guitar 
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
                />
            ))}
           
          

        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
