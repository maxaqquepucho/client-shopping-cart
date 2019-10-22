import React, { useState } from "react";
import { SearchInput, Container } from "./style";

export const InputSearch = (props) => {
    

    return (
        <Container >
            <SearchInput type="text"
             onChange={ (e) => props.inputSeachChange(e) } 
             value={ props.productName } 
              
             placeholder={ 'search Products' } />
        </Container>
    )
}