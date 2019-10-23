import styled from 'styled-components'

export const ContainerCartProduct = styled.div`
    background: white;
    min-height: 180px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const  Empty = styled.div`
    /* background-color: #ccc; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h6 {
        font-weight: 600;
        /* color: red; */
    }

    p {
        font-size: .9em;
    }

    padding: 0 20px 0 20px;
`
