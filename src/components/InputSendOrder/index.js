import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import { navigate } from '@reach/router'
import moment from 'moment'

import { Button } from './style'
import { Loading } from '../../components/Loading'

const ADD_ORDER = gql`
mutation CreateOrderProduct( $input: OrderProductInput) {
        createOrderProduct (input: $input) {
            id,
            orderProduct,
            productsCount,
            productsCost,
            shippingCost,
            taxes,
            total,
            productId,
            deleveryDate
        }
}
`
export const InputSendOrder =  props => {

    function costs () {
        let product = localStorage.getItem('productSelected')

        let shippingCost = 0.00
        let taxes = 0.00
        let  total = 0.00
        
        let productsCount  = 0
        let productsCost = 0.00
        let productId = null
        let deleveryDate = '2019-10-05'

         console.log('ddsds',product);
         
        if (product) {              

            product = JSON.parse(product)
            productsCount  = product.productsCount
            productId = parseInt(product.productId)

            shippingCost = parseFloat(product.price) + (parseFloat(product.price) * 0.1)
            shippingCost =  parseFloat(product.productsCount) ? shippingCost.toFixed(2) : 0.00

            productsCost = (shippingCost * parseFloat(product.productsCount)).toFixed(2)
            taxes = ( productsCost * 0.18 ).toFixed(2);
            total = ( parseFloat(productsCost) + ( parseFloat(taxes) ) ).toFixed(2)
        } 
        const returnObj = {
            
            productsCount: productsCount,
            productsCost:  parseFloat(productsCost),
            shippingCost: parseFloat(shippingCost),            
            taxes: parseFloat(taxes),
            total: parseFloat(total),
            productId: productId,
            deleveryDate: deleveryDate
        };

        return returnObj

    }

    const [CreateOrderProduct, { loading } ] = useMutation(ADD_ORDER);
    let { total } = costs =  costs()

    let disabledBtn = true
    if (total >= 50) {
        disabledBtn = false
    }

    async function handleSendOrder () {
        if (total <= 50) {
            return
        }   
        try {

            costs.deleveryDate = getTomorrowDate()

            const res = await CreateOrderProduct(
                { variables:  { input: costs } }
            )
            console.log(res.data);
            
            localStorage.removeItem('productSelected')
            return navigate(`/finishOrder/${ res.data.createOrderProduct.orderProduct }`)

        } catch (error) {
            console.error(error);
        }
    }

    const getTomorrowDate = () => {
        let today = new Date()
        let tomorrow = new Date(today)
        tomorrow = tomorrow.setDate(tomorrow.getDate() + 1)        
        tomorrow = moment(tomorrow).format("YYYY-MM-DD")
        return tomorrow
    }
   
    return (
        <div>
            <Button desebled={disabledBtn} onClick={ handleSendOrder } >
                Complete order
            </Button>
            {  loading ? <Loading />: null }
        </div>
    )
}