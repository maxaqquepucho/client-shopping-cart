import React from "react";
import { SearchInput, Container } from "./style";

export const InputSearch = (props) => {
    

    return (
        <Container >
            <SearchInput type="text"
             onChange={ (e) => props.inputSeachChange(e.target.value) } 
             value={ props.productName } 
              
             placeholder={ 'search Products123456' } />
        </Container>
    )
}