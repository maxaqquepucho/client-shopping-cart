import React, { useState } from 'react'
import { Container, ListContainer, Item } from './style'
export const CostDelevery = () => {
    return (
        <Container>
            <ListContainer>
                <Item>Products <span>$0.00</span> </Item>
                <Item shippingCost={ false }>Shipping Cost <span>$0.00</span> </Item>
                <Item>Taxes <span>$0.00</span> </Item>
                <Item last minCost>Total <span>$0.00</span> </Item>
            </ListContainer>
        </Container>
    )
}

