import styled, { css } from 'styled-components'

export const Button = styled.button`
    font-size: .9em;
    width: 100%;
    padding: 10px 0 10px 0;
    background-color: #FF8000;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 3px;
    font-weight: 600;

    :focus {
        outline: none;
    }
    :hover {
        background-color: #ea7600;
    }

    ${
    props => props.desebled && css`
        {
            background: #F7F7F7 ;
            border: solid 1px #DDDDDD;
            color: #C1C1C1;
            font-weight: 5;
            cursor: no-drop !important;

            
        }
        `
    }
`