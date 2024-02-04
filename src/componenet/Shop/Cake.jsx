
import { CookiesData, CupCakeData, DonutData } from './Shop_Data'
import { BreadData } from './Shop_Data'
import {CakeCard} from './CakeCard'
import './Shop.css'
import { CakeData } from './Shop_Data'
import { RollsData } from './Shop_Data'

const Cake = () => {
    
    return (
        <>
            <div className="row product">
                {CakeData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const CupCake = () => {
   
    return (
        <>
            <div className="row product">
                {CupCakeData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const Bread = () => {
   
    return (
        <>
            <div className="row product">
                {BreadData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const Donut = () => {
   
    return (
        <>
            <div className="row product">
                {DonutData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const Rolls = () => {
   
    return (
        <>
            <div className="row product">
                {RollsData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
const Cookies = () => {
   
    return (
        <>
            <div className="row product">
                {CookiesData.map((product) => (
                    <CakeCard key={product.id} {...product} />
                ))}


            </div>
        </>)
}
export {Cake,Bread,CupCake ,Cookies, Donut,Rolls};



