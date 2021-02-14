import React from 'react'

const AddButton = ({text}) => {
 return <button style={{backgroundColor: 'blue'}} onClick={() => console.log('working')}>{text}</button>
}

export default AddButton;