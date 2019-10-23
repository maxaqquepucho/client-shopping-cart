import React, { useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

//components
import { CartProduct } from "../../components/CartProducts";
import { InputSearch } from '../../components/InputSearch'
import { CostDelevery } from '../../components/CostDelevery'
import { DateOrder } from '../../components/DateOrder'
import { InputSendOrder } from "../../components/InputSendOrder";
import { Loading } from '../../components/Loading'


export const Home = () => {
    const [productName, setProductName] = useState('')
    let [countProducts, setCountProducts] = useState(0)
    const [showAddProducts, setShowAddProducts] = useState(false)
    const [productId, setProductId] = useState(null)
    const [products, setProducts] = useState([])

    let dataProduct = []

    
    

    const FIND_PRODUCTS = gql`
        query find_Products($name: String!){
            findProducts(name: $name) {
              id
              name
              price
              img
          }
        } 
    
    `
    let { loading, error, data } = useQuery(FIND_PRODUCTS, { variables: { name: productName } });
   
    if (loading == false  ) {
        dataProduct = data.findProducts
    }

    let localProduct = localStorage.getItem('productSelected')


    if (localProduct) {
        
        localProduct = JSON.parse(localProduct)
        
        if (localProduct.productCount == 0) {
            return
        }
        
        dataProduct = [localProduct]
    }



    function inputSeachChange(name) {
        setProductName(name)
        
    }
   
    
    
     
    if (error) return `Error! ${error.message}`;
    

    return (
        <div className="container" >
            <div className="col" >
                <div className="row mt-5 ">
                    <div className="col-6">
                        <InputSearch inputSeachChange={inputSeachChange} productName={productName} />
                    </div>
                    <div className="col-6"></div>
                </div>
                <div className="row ">
                    <div className="mb-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        {
                            !loading 
                            ?
                            <CartProduct products={dataProduct}
                                showAddProducts={showAddProducts}
                                setShowAddProducts={setShowAddProducts}
                                countProducts={countProducts}
                                setCountProducts={setCountProducts}
                                productId={productId}
                                setProductId={setProductId}
                            />
                            : <Loading />
                        }
                    </div>
                    <div className="mb-5  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <DateOrder />
                        <div className="mb-3">
                            <CostDelevery
                                countProducts={countProducts}
                                setCountProducts={setCountProducts}
                                productId={productId}
                                setProductId={setProductId}
                                products={dataProduct}
                            />
                        </div>
                        <InputSendOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}