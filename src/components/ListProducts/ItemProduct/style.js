import styled from "styled-components";

export const ItemList = styled.li`
    display: flex;
    padding: 5px 0 5px 0;
    border-bottom: solid 1px #DDDDDD;
    position: relative;     
`

export const ProductData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p {
        margin-bottom: 0px;
        font-size: 1em;
        color: #333333;
        
    }
    span {
        color: #FF2D55;
        font-size: 1rem;
    }
`

export const ImageContainer = styled.div`
    padding: 0 7px 0 7px;      
`

export const AddButtonProduct = styled.button`
    background: #FF8000;
    border: none;
    padding: 5px;
    border-radius: 100%;
    width: 32px;
    color: white;
    :focus {
        outline: none;
    }
`

const colorOrange = '#FF8000';
export const AddRemove = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: flex-end;
    justify-content: center;

    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100%;
    padding: 0 15px 0 15px;

    section {       
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 5px;
        background-color: ${ colorOrange };
        width: 140px;
        button {
            background-color: transparent;
            border: none;
            padding: 7px 10px 7px 10px;
            :focus {
                outline: none
            }
        }

        input {
            background-color: transparent;
            border: none;
            width: 50px;
            color: white;
            text-align: center;
            :focus {
                outline: none
            }
        }
    }
`




