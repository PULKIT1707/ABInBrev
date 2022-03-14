import React from 'react'
import Select from 'react-select';
import options from '../data/Options.json'
import MenuIconButton from './MenuIconButton';

const Menu = () => {
  return (
    <div className='menuBar'>
        <Select
        // value={selectedOption}
        // onChange={this.handleChange}
        options={options}
      />
      <p>Popular Categories</p>
      <MenuIconButton/>
      <p>Explore All Brands</p>
    </div>
  )
}

export default Menu