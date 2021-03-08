import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../reducers/productReducer';

export function ProductSmall(props){
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const selectedProduct = useSelector(state => state.product.payload);

    const {heading, pledgeAmount, description, amountLeft} = props.props;
    useEffect(()=> {
        if(selectedProduct === heading){
            console.log(selectedProduct)
            console.log(selected)
            setSelected(true)
            console.log(selected)
        } else {
            setSelected(false)
        }
    })

    return <>
    <input type="radio" class="form__radio-input" id={heading} name="reward"/>
    <label htmlFor={heading} className="form_label" onClick={()=> dispatch(selectProduct(heading))}>
        <div className={selected ? 'products_container--small products_container--small-selected':'products_container--small'}>
            <div className="form__radio-label">
                <span className="form__radio-button" id="radioButton">
                   <span className="form__radio-button-inner_circle" style={selected ? {opacity:'1'}:{opacity:'0'}}>&nbsp;</span>
                </span>
            </div>
            <div className="">
                <div className="products_container_row products_container_row--inline">
                <h2 className="products_header_heading--small">{heading}</h2>
                <p className="products_header--pledge" style={{margin:'1rem 0 0 5rem'}}>Pledge ${pledgeAmount} or more</p>
                <h2 className="products_details--bold" style={{marginLeft:'5rem'}}>{amountLeft} <span className="products_details--small">left</span></h2>
                </div>
                <div className="products_container_row">
                    <p className="products_description--text--small">{description}</p>
                </div>      
            </div>
        </div>
    </label>

    </>
}