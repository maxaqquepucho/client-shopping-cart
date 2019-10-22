import React from 'react'
import { Container, ListContainer, Item } from './style'
export const CostDelevery = (props) => {

   

    const costs = () => {
        let product = localStorage.getItem('productSelected')
        let shipping = "0.00",
            allshipping = "0.00",
            taxes = "0.00",
            total = "0.00"
        
        if (product) {
            product = JSON.parse(product)

            shipping = parseFloat(product.price) + ( parseFloat(product.price) * 0.1 )
            shipping =  product.productsCount ? shipping.toFixed(2): '0.00'

            allshipping =  (shipping * product.productsCount).toFixed(2)
            taxes = (allshipping * 0.18).toFixed(2)
            total =( parseFloat(allshipping) + parseFloat(taxes) ).toFixed(2)
            


        }

       
        return {
            shipping,
            allshipping,
            taxes,
            total
        }
    }

    let { shipping, allshipping, taxes, total } = costs()
    
    return (
        <Container>
            <ListContainer>
                <Item>Products <span>${ allshipping }</span> </Item>
                <Item shippingCost={ false }>Shipping Cost <span>${ shipping || 0.00  }</span> </Item>
                <Item>Taxes <span>${ taxes }</span> </Item>
                <Item last minCost>Total <span>${ total }</span> </Item>
            </ListContainer>
        </Container>
    )
}

