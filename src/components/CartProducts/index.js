import React from "react";
import { Empty, ContainerCartProduct } from "./styles";
import SvgEmptyLogo from './SvgEmptyLogo'
import { ListProducts } from '../ListProducts'

// if the cart is empty
function empty() {
    return(
        <Empty>
            <SvgEmptyLogo className="mb-2" />
            <h6>Your cart is empty</h6>
            <p>Seems like you havent shosen what you buy...</p>
        </Empty>
    )
}

// function renderList(props) {
    
// }

export const CartProduct = props => {
    console.log(props.products);
    
    return (
        <ContainerCartProduct>
            {   !props.products.length    
                ? empty()
                : <ListProducts products={ props.products }
                showAddProducts={ props.showAddProducts } 
                setShowAddProducts = {props.setShowAddProducts}
                countProducts={ props.countProducts }
                setCountProducts={ props.setCountProducts }
                />
            }           
        </ContainerCartProduct>
    )
}
