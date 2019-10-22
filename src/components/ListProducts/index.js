import React from 'react'
import { List} from "./style";
//components
import { ItemProduct } from "./ItemProduct";

export const ListProducts = props => {

    const renderList = (props) => {
        return props.products.map( product => {
            return  <ItemProduct product={ product } key={ product.id }
                    showAddProducts={ props.showAddProducts } 
                    setShowAddProducts = {props.setShowAddProducts}
                    countProducts={ props.countProducts }
                    setCountProducts={ props.setCountProducts }
                />
        })
    }

    return (
        <div>
            <List>
               { renderList(props) }
            </List>            
        </div>
    )
}