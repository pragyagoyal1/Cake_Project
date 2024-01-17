import './Shop.css'
import { CakeData } from './Shop_Data'
import { CupCakeData } from './Shop_Data'
import { BreadData } from './Shop_Data'
import CakeCard from './CakeCard'
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
export {Cake ,CupCake ,Bread};



