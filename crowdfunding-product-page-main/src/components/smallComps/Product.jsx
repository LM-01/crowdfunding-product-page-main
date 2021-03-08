import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../reducers/modalReducer';
import { selectProduct } from '../../reducers/productReducer';

export function Product(props){
    const dispatch = useDispatch();

    const {heading, pledgeAmount, description, amountLeft} = props.props
    return <>
        <div className="products_container">
        <div className="products_container_row">
            <h2 className="products_header--heading">{heading}</h2>
            <p className="products_header--pledge">Pledge ${pledgeAmount} or more</p>
        </div>
        <div className="products_container_row">
            <p className="products_description--text">{description}</p>
        </div>
        <div className="products_container_row">
            <h2 className="products_details--bold">{amountLeft} <span className="products_details--small">left</span></h2>
            <button className="primary-btn" onClick={()=> {
                dispatch(selectProduct(heading));
                dispatch(openModal('backProject'))
            }}>Select Reward</button>
        </div>
    </div>
    </>
}