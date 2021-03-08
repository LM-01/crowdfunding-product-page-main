import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../reducers/modalReducer'

export function ThankYou(){
    const dispatch = useDispatch()

    return <>
        <div className="thanks-container">
            <div className="thanks-container-checkmark"></div>
            <h2 className="u-margin-top-md">Thanks for your support!</h2>
            <p className="u-margin-top-sm">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaing is completed</p>
            <button className="u-margin-top-sm primary-btn" onClick={()=>dispatch(closeModal("test"))}>Got it!</button>
        </div>
    </>
}