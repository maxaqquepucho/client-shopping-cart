import React, { useState } from "react";

//components
import { CartProduct } from "../../components/CartProducts";
import { InputSearch } from '../../components/InputSearch'
import { CostDelevery } from '../../components/CostDelevery'
import { DateOrder } from '../../components/DateOrder'
import { InputSendOrder } from "../../components/InputSendOrder";

export const Home = () => {
    const [ productName, setProductName ] = useState('')
    const [ countProducts, setCountProducts ] = useState(0)
    const [ showAddProducts, setShowAddProducts ] = useState(false)

    const data = [
        {
            id: '1',
            img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080013_f.jpg',
            name: 'Gaseosa coca cola',
            price: '20.50'
        },
        {
            id: '2',
            img: 'http://www.corporacionliderperu.com/shop/18928-thickbox_default/laive-leche-uht-x-1-lt-0-lactosa.jpg',
            name: 'Leche Laive',
            price: '30.50'
        },
        {
            id: '3',
            img: 'https://www.ketal.com.bo/21033-large_default/galleta-mabels-wafer-chocolate-110gr.jpg',
            name: 'Galletas Mavel',
            price: '40.00'
        },
        {
            id: '4',
            img: 'http://www.corporacionliderperu.com/shop/29351-thickbox_default/dia-galletas-vainilla-x-250-gr.jpg',
            name: 'Galletas Vainilla',
            price: '$20'
        }

    ]



    function inputSeachChange(e) {
        setProductName(e.target.value)
        console.log(e.target.value); 
    }

    return (
        <div className="container" >
            <div className="col" >
                <div className="row mt-5">
                    <div className="col-6">
                        <InputSearch inputSeachChange={ inputSeachChange } productName={ productName } />
                    </div>
                    <div className="col-6"></div>                    
                </div>
                <div className="row">
                    <div className="col-6">                        
                        <CartProduct products={ data } 
                        showAddProducts={ showAddProducts } 
                        setShowAddProducts = {setShowAddProducts}
                        countProducts={ countProducts }
                        setCountProducts={ setCountProducts }
                        />   
                    </div>
                    <div className="col-6">
                        <DateOrder />
                        <div className="mb-3">
                            <CostDelevery />
                        </div>
                        <InputSendOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}