import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{name}'s personal shopping tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    name: 'Guest'
}

Header.propTypes = {
    name: PropTypes.string,
}

export default Header