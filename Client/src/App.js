import { useState } from 'react'
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'

function App() {
    const [showAddItem, setShowAddItem] = useState(false)

    const [items, setItems] = useState([
      {
          id: 1,
          text: 'Apples',
          quantity: 5,
          complete: false,
      },
      {
          id: 2,
          text: 'Butter',
          quantity: 1,
          complete: false,
      },
      {
          id: 3,
          text: 'Bread',
          quantity: 1,
          complete: false,
      }
    ])

    //Add Item
    const addItem = (item) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newItem = { id, ...item }
      setItems([...items, newItem])
    }

    //Delete Item
    const deleteItem = (id) => {
      setItems(items.filter((item) => item.id !== id))
    }

    //Toggle completion
    const toggleCompletion = (id) => {
      setItems(items.map((item) => item.id === id ? { ...item, complete: !item.complete } : item))
    }

    return (
      <div className="container">
        <Header onAdd={() => setShowAddItem(!showAddItem)} showAdd={showAddItem} /> 
        {showAddItem && <AddItem onAdd={addItem} />}
        {items.length > 0 ? <Items items={items} onDelete={deleteItem} onToggle={toggleCompletion}/> : 'Ready to start? Just add!'}
      </div>
    );
}

export default App;