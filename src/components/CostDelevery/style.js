import styled, { css } from 'styled-components'

export const Container = styled.div`
    background-color: white;
`
export const ListContainer = styled.ul`
    margin: 0;
    font-size: 1em;
    list-style: none;
    padding: 10px;
`
export const Item = styled.li`
    padding: 5px;
    display: flex;
    justify-content: space-between;

    ${
    props => props.shippingCost && css`
        {
            background: yellow;
        }
        `
    }

    ${
    props => props.last && css`
        {
            margin-top: 10px;
            font-weight: 600;
        }
        `
    }

    ${
    props => props.minCost && css`
        {
            span {
                color: #FF2D55
            }
        }
        `
    }


`