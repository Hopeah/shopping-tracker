import { FaTimes } from 'react-icons/fa'

const Item = ({ item, onDelete, onToggle }) => {
  return (
    <div className={`item ${item.complete ? 'complete' : ''}`} onDoubleClick={() => onToggle(item.id)}>
        <h3>{item.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => onDelete(item.id)}/></h3>
        <p>{item.quantity}</p>
    </div>
  )
}

export default Item