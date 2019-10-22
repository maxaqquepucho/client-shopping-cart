import React from "react";
import { ItemList, 
        ProductData, 
        ImageContainer, 
        AddButtonProduct, AddRemove } from "./style";

import AddIcon from '../../../assets/images/AddIcon.svg'
import RemoveIcon from '../../../assets/images/RemoveIcon.svg'
export class ItemProduct extends React.Component {
    

    handleClickAddRemove = () => {
       // props.setShowAddProducts(true)
        const add = parseInt(this.props.countProducts) + 1
        this.props.setCountProducts(add)
    }

    BtnAddDelete = () => {

        return (
            <div className="d-flex flex-column align-items-center">
                {
                    !this.props.showAddProducts
                    ? <AddButtonProduct >
                        <img src={ AddIcon }  width={ 18 } alt="" />
                    </AddButtonProduct>
                    : <AddButtonProduct >
                        { this.props.countProducts }
                    </AddButtonProduct>
                }
                {/* <AddButtonProduct>
                    <img src={ AddIcon }  width={ 18 } alt="" />
                </AddButtonProduct> */}
                {/* <small >
                    delete
                </small> */}
            </div>
        )
    }

    addRemoveProducts = () => {
        return (
            <AddRemove>
                <div className="d-flex flex-column align-items-center">
                    <section >                    
                        <button>
                            <img src={RemoveIcon} width={18} alt="" />
                        </button>
                        <input type="text" />
                        <button>
                            <img src={AddIcon} width={18} alt="" />
                        </button>                    
                    </section>
                    <small className="mt-1" >
                        delete
                    </small>
                </div>
            </AddRemove>
        )
    }
 
    render() {
        const product = this.props.product

        return (
            <ItemList>
                <div className="col-3">
                    <ImageContainer className="row">
                        <img src={product.img} width={100 + '%'} alt="" />
                    </ImageContainer>
                </div>
                <ProductData className="col-6">
                    <p>{product.name}</p>
                    <span>${product.price}</span>
                </ProductData>
                <div className="col-3 d-flex align-items-center">
                    { this.BtnAddDelete() }
                </div>
                {  this.props.showAddProducts ?  this.addRemoveProducts(): null }
    
            </ItemList>
        )
    }
}