import React from 'react'
import { products } from '../data/sampleData'
import { Product } from './smallComps/Product'

export function BodyComponent(){
    // console.log(products)
    return <>
        <main className="main u-margin-top-md">

        <h2>About this project</h2>
        <p className="u-margin-top-sm"> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
    <br/>
    <br/>
    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
    to allow notepads, pens, and USB sticks to be stored under the stand.</p>

    {products.map((product,index)=> (
        <Product props={product} key={index} />
    ))}
    
        </main>
    </>
}