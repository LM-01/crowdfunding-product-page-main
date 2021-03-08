import React from 'react'
import { useDispatch } from 'react-redux'
import { products } from '../../data/sampleData'
import { closeModal } from '../../reducers/modalReducer'
import { ProductSmall } from '../smallComps/Product_small'

export function BackProject(){
    const dispatch = useDispatch()

    return <>
        <div className="backProject">  
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
        <h2>Back this project</h2>
        <span className="products_container_close" onClick={()=> dispatch(closeModal())}>&nbsp;</span>
        </div>
        
        <p className="u-margin-top-sm u-margin-bottom-sm">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            {products.map((product,index)=> (
            <ProductSmall props={product} key={index} />
        ))}
        </div>
    </>
}