import './App.css'
import { useState } from 'react'
import bakeryData from './assets/bakery-data.json'
import BakeryItem from './components/BakeryItem'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach(item => {
  item.image = process.env.PUBLIC_URL + '/' + item.image
})
/* ############################################################## */

function App () {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, changeCart] = useState([])
  const [total, changeTotal] = useState(0)
  const handleClick = (item) => {
    changeCart([...cart, item.name])
    changeTotal(total + item.price)
  }
  return (
    <div className='App'>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((
        item,
        index // TODO: map bakeryData to BakeryItem components
      ) => (
        
        <div><button onClick={() =>handleClick(item)}><BakeryItem info={item}/></button></div>
        // replace with BakeryItem component
      ))}
      <div>
        <h2>Cart</h2>
        <ol> 
          {cart.map((
            item,
            index
          ) => (
            <li> {item}</li>
          ))}
        </ol>
        {total}
      </div>
    </div>
  )
}

export default App
