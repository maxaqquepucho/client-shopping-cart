import React from 'react'
import { Link } from '@reach/router'
import IMG_FINISH_ORDER from '../../assets/images/finishOrder.svg'


export const FinishOrder = () => (
    <div className="container pt-5">
        <div className="col mt-5">
            <div className="row justify-content-center">
                <div className="col col-sm-7 col-md-6 col-lg-5 col-xl-4 d-flex flex-column text-center">
                    <h3 className="mb-3">Thank you</h3>
                    <span className="mb-3">Your order <strong>P0001</strong> has been registered </span>
                    <Link to="/" >Continue shopping </Link>
                    <div className="mt-4">
                        <img src={ IMG_FINISH_ORDER } width={70 + '%'} height={70 + '%'} alt="image finish order"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)