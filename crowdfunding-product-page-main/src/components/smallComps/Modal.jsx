import React from 'react';
import { useSelector, useStore, useDispatch } from 'react-redux';
import {closeModal} from '../../reducers/index'
import { ThankYou } from '../modalScreens/thankYou';

export function Modal(){
    const {showModal, payload} = useSelector(state => state.modal);
    console.log(payload)
    const dispatch = useDispatch();
    return <>
        <div className={showModal ?'popup popup--show':'popup'} id="popup">
            <div className="popup__content">
                {payload==='thankYou'&&<ThankYou/>}
                {/* <button onClick={()=> {dispatch(closeModal("TEST"))}}>CLOSE</button> */}
            </div>
        </div>
    </>
}