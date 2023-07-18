import React from 'react'
import Products from './Products'

import products from '../Data/Data'

function Menu() {


    return (
        <div>
          <Products item={products}/>
        </div>

    )
}

export default Menu