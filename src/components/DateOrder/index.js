import React from 'react'
import SvgCar from './SvgCar'
import { Container, DeleveryDate } from "./style";
import Moment from 'react-moment';

export const DateOrder = () => {

    function getTomorrowDate () {
        const today = new Date()
        const tomorrow = new Date(today)
       return tomorrow.setDate(tomorrow.getDate() + 1)        
    }

    return (
        <Container>
            <SvgCar className="mr-2" />
            <span>Buy now and get it by </span> &nbsp;
            <DeleveryDate>
                <Moment format="MM/DD/YY">
                    { getTomorrowDate() }
                </Moment>
            </DeleveryDate>
        </Container>
    )
}