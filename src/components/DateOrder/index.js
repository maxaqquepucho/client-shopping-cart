import React from 'react'
import SvgCar from './SvgCar'
import { Container, DeleveryDate } from "./style";

export const DateOrder = () => {
    return (
        <Container>
            <SvgCar className="mr-2" />
            <span>Buy now and get it by </span> &nbsp;
            <DeleveryDate>05/24/19</DeleveryDate>
        </Container>
    )
}