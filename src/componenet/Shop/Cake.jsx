
import { CupCakeData } from './Shop_Data'
import { BreadData } from './Shop_Data'
import {CakeCard} from './CakeCard'
import './Shop.css'
import { CakeData } from './Shop_Data'
import cart_data from '../Shopping cart/data'
const Cake = () => {
    
    return (
        <>
            <div className="row">
                {CakeData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const CupCake = () => {
   
    return (
        <>
            <div className="row">
                {CupCakeData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const Bread = () => {
   
    return (
        <>
            <div className="row">
                {BreadData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
export {Cake,Bread,CupCake};



