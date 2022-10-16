import { useState } from 'react'

const AddItem = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [quantity, setQuantity] = useState('')
    const [complete, setComplete] = useState(false)

    const onSubmit = (e) => {
        //So it doesn't submit on page
        e.preventDefault()

        if (!text) {
            alert('Please add an item')
            return
        }

        onAdd({ text, quantity, complete })

        setText('')
        setQuantity('')
        setComplete(false)
    }

  return (
    <form className='add-form' action="" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Item</label>
            <input type="text" placeholder='Add item' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="">Quantity</label>
            <input type="text" placeholder='Add quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Complete</label>
            <input type="checkbox" checked={complete} value={complete} onChange={(e) => setComplete(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='Save Item' className='btn btn-block'/>
    </form>
  )
}

export default AddItem