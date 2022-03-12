import React from 'react'
import Select from 'react-select';
import options from '../data/Options.json'

const Menu = () => {
  return (
    <div>
        <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      />
      <p>Popular Categories</p>
      
    </div>
  )
}

export default Menu