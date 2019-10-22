import React from "react";
import ReactDOM from 'react-dom';

import {
    ItemList,
    ProductData,
    ImageContainer,
    AddButtonProduct, AddRemove
} from "./style";

import AddIcon from '../../../assets/images/AddIcon.svg'
import RemoveIcon from '../../../assets/images/RemoveIcon.svg'
export class ItemProduct extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        showMiniModal: false,
        count: 0
    }

    saveLocalStorage = (productsCount) => {
        
        const obj = Object.assign(this.props.product,{
            productId: this.props.product.id,
            productsCount
        })

        localStorage.setItem('productSelected', JSON.stringify(obj))


    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }    
    componentWillUnmount() {

        document.removeEventListener('click', this.handleClickOutside, true);
    }    
    handleClickOutside = event => {

        console.log(event.target);
        
        const domNode = ReactDOM.findDOMNode(this);
    
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                showMiniModal: false
            });
        }
        
        

    }    

    handleClickAddRemove = () => {
        
        this.props.setProductId(this.props.product.id)
        const add = parseInt(this.props.countProducts) + 1
        this.props.setCountProducts(add)
        this.saveLocalStorage(add)
    }

    handleFirstAdd = () => {
        
        this.props.setProductId(this.props.product.id)
        this.props.setShowAddProducts(true)
        const add = parseInt(this.props.countProducts) + 1

        let pCount = this.state.count + 1

        this.setState({
           showMiniModal: true,
           count: pCount
        })

        this.props.setCountProducts(add);
        this.saveLocalStorage(add)
    }

    BtnAddDelete = () => {

        return (
            <div className="d-flex flex-column align-items-center">
                {
                    this.state.count == 0 
                        ? <AddButtonProduct onClick={this.handleFirstAdd} >
                            <img src={AddIcon} width={18} alt="" />
                        </AddButtonProduct>
                        : <AddButtonProduct onClick={() => this.setState({ showMiniModal: true }) } >
                            {this.props.countProducts}
                        </AddButtonProduct>
                }
                
                { this.state.count != 0 
                    ? <small >delete</small>
                    : null
                }
            </div>
        )
    }

    handleInputCount = (e) => {
        
        this.props.setProductId(this.props.product.id)
        console.log(e.target.value);
        this.props.setCountProducts(e.target.value);
        this.saveLocalStorage(e.target.value)
    }

    subtract = () => {
        
        this.props.setProductId(this.props.product.id)
        if (this.props.countProducts == 0) {           
            return
        }

        let num = parseInt(this.props.countProducts) - 1
        this.props.setCountProducts(num)
        this.saveLocalStorage(num)
        if (num == 0) {
            this.setState({
                count: 0
            })
            return
        }
        
    }

    add = () => {
        
        this.props.setProductId(this.props.product.id)
        let num = parseInt(this.props.countProducts) + 1
        this.props.setCountProducts(num)
        this.saveLocalStorage(num)
    }

    addRemoveProducts = () => {
        return (
            <AddRemove>
                <div className="d-flex flex-column align-items-center">
                    <section >
                        <button onClick={ this.subtract }>
                            <img src={RemoveIcon} width={18} alt="" />
                        </button>
                        <input type="text" onChange={this.handleInputCount} value={this.props.countProducts} />
                        <button onClick={ this.add } >
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
            <ItemList ref='area'>
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
                {this.state.showMiniModal ? this.addRemoveProducts() : null}

            </ItemList>
        )
    }
}