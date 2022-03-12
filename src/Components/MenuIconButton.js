import { Button } from '@mui/material'
import '../css/style.css'
import React from 'react'

const MenuIconButton = () => {
  return (
    <div>
        {/* <Button><div className="fa-icons"><i class="fa-solid fa-vest">My Style</i></div></Button>
        <Button><div className="fa-icons"><i class="fa-solid fa-utensils">My Eats</i></div></Button>
        <Button><div className="fa-icons"><i class="fa-solid fa-backpack">My Travel</i></div></Button>
        <Button><div className="fa-icons"><i class="fa-solid fa-files-medical">My Wellbeing</i></div></Button>
        <Button><div className="fa-icons"><i class="fa-solid fa-laptop-mobile">My Tech</i></div></Button> */}
        <Button><i class="fa-solid fa-vest">My Style</i></Button>
        <Button><i class="fa-solid fa-utensils">My Eats</i></Button>
        <Button><i class="fa-solid fa-backpack">My Travel</i></Button>
        <Button><i class="fa-solid fa-files-medical">My Wellbeing</i></Button>
        <Button><i class="fa-solid fa-laptop-mobile">My Tech</i></Button>
    </div>
  )
}

export default MenuIconButton