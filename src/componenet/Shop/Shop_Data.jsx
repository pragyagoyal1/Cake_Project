import cake1 from '../../images/shop/WhatsApp Image 2024-01-28 at 18.38.16_f46dbb53.jpg'
import cake2 from '../../images/shop/pina.jpg'
import cake3 from '../../images/shop/CHOCO TRUFFLE CAKE.jpg'
import cake4 from '../../images/shop/fruit__nuts_cake_b.png'
import cake5 from '../../images/shop/Rasmalai Cake.jpg'
import cake6 from '../../images/shop/Double Chocolatee.webp'
import cupcake1 from '../../images/shop/product-1.jpg'
import cupcake2 from '../../images/shop/product-2.jpg'
import cupcake3 from '../../images/shop/product-3.jpg'
import cupcake4 from '../../images/shop/product-4.jpg'
import cupcake5 from '../../images/shop/product-5.jpg'
import cupcake6 from '../../images/shop/product-6.jpg'
import bread1 from '../../images/shop/bread/Croissants.jpg'
import bread6 from '../../images/shop/bread/Focaccia.jpg'
import bread2 from '../../images/shop/bread/SanwichBread.webp'
import bread3 from '../../images/shop/bread/Leopard.jpeg'
import bread4 from '../../images/shop/bread/multigrain.jpg'
import bread5 from '../../images/shop/bread/bun.jpg'
import donut1 from '../../images/shop/donut/donut1.jpg'
import donut2 from '../../images/shop/donut/donut2.jpg'
import donut3 from '../../images/shop/donut/donut3.jpg'
import donut4 from '../../images/shop/donut/donut4.jpg'
import donut5 from '../../images/shop/donut/donut5.jpg'
import donut6 from '../../images/shop/donut/donut6.jpg'
import rolls1 from '../../images/shop/roll/roll1.jpg'
import rolls2 from '../../images/shop/roll/roll2.jpg'
import rolls3 from '../../images/shop/roll/roll3.jpg'
import rolls4 from '../../images/shop/roll/roll4.jpg'
import rolls5 from '../../images/shop/roll/roll5.jpg'
import rolls6 from '../../images/shop/roll/roll6.jpg'
import cookies1 from '../../images/shop/cookies/cookies1.jpg'
import cookies2 from '../../images/shop/cookies/cookies2.jpg'
import cookies3 from '../../images/shop/cookies/cookies3.jpg'
import cookies4 from '../../images/shop/cookies/cookies4.jpg'
import cookies5 from '../../images/shop/cookies/cookies5.jpg'
import cookies6 from '../../images/shop/cookies/cookies6.jpg'

const CakeData = [
    { id: 1, image: cake1, item: ' CAKE ' ,title: 'Black Forest Cake (1 KG)', price: 549, quantity:1},
    { id: 2, image: cake2, item: ' CAKE ' ,title: 'Pineapple Cake (1 KG)', price: 650, quantity:1 },
    { id: 3, image: cake3, item: ' CAKE ' ,title: 'Choco Truffle Cake (1 KG)', price: 600, quantity:1 },
    { id: 4, image: cake4, item: ' CAKE ' ,title: 'Fruit N Nut Cake (1/2 KG)', price: 300, quantity:1 },
    { id: 5, image: cake5, item: ' CAKE ' ,title: 'Rasmali Cake (1/2 KG)', price: 400, quantity:1 },
    { id: 6, image: cake6, item: ' CAKE ' ,title: 'Double Choco Chip Cake (1/2 KG)', price: 350, quantity:1 },
];
const CupCakeData = [
    { id: 11, image: cupcake1, item: ' CuoCAKE ' ,title: 'Pinapple Cupcake', price: 50, quantity:1},
    { id: 12, image: cupcake2, item: ' CupCAKE ' ,title: 'black forest cupcake', price: 40, quantity:1 },
    { id: 13, image: cupcake3, item: ' CupCAKE ' ,title: 'truffle cupcake', price: 50, quantity:1 },
    { id: 14, image: cupcake4, item: ' CupCAKE ' ,title: 'rainbow cupcake', price: 30, quantity:1 },
    { id: 15, image: cupcake5, item: ' CupCAKE ' ,title: 'fruit cupcake', price: 60, quantity:1 },
    { id: 16, image: cupcake6, item: ' CupCAKE ' ,title: 'white forest cupcake', price: 60, quantity:1 },
];
const BreadData = [
    { id: 21, image: bread1, item: ' Bread ' ,title: 'Croissants Bread (SMALL)', price: 100, quantity:1},
    { id: 22, image: bread2, item: ' Bread ' ,title: 'SanwichBread Bread (SMALL)', price: 120, quantity:1 },
    { id: 23, image: bread3, item: ' Bread ' ,title: 'Leopard Bread (SMALL)', price: 100, quantity:1 },
    { id: 24, image: bread4, item: ' Bread ' ,title: 'multigrain Bread (BIG)', price:150, quantity:1 },
    { id: 25, image: bread5, item: ' Bread ' ,title: 'bun Bread (BIG)', price: 170, quantity:1 },
    { id: 26, image: bread6, item: ' Bread ' ,title: 'Focaccia Bread (SMALL)', price: 70, quantity:1 },
];
const DonutData = [
    { id: 31, image: donut1, item: ' donut ' ,title: 'Black Forest donut', price: 50, quantity:1},
    { id: 32, image: donut2, item: ' donut ' ,title: 'Pineapple donut', price: 60, quantity:1 },
    { id: 33, image: donut3, item: ' donut ' ,title: 'Choco Truffle donut', price: 40, quantity:1 },
    { id: 34, image: donut4, item: ' donut ' ,title: 'Fruit N Nut donut', price: 45, quantity:1 },
    { id: 35, image: donut5, item: ' donut ' ,title: 'Rasmali donut', price: 50, quantity:1 },
    { id: 36, image: donut6, item: ' donut ' ,title: 'Double Choco Chip donut', price: 60, quantity:1 },
];
const CookiesData = [
    { id: 41, image: cookies1, item: ' CuoCAKE ' ,title: 'Pinapple cookies(1/2 KG)', price: 199, quantity:1},
    { id: 42, image: cookies2, item: ' cookies ' ,title: 'black forest cookies(1/2 KG)', price: 249, quantity:1 },
    { id: 43, image: cookies3, item: ' cookies ' ,title: 'truffle cookies (1/2 KG)', price: 219, quantity:1 },
    { id: 44, image: cookies4, item: ' cookies ' ,title: 'rainbow cookies (1/2 KG)', price: 199, quantity:1 },
    { id: 45, image: cookies5, item: ' cookies ' ,title: 'fruit cookies (1/2 KG)', price: 229, quantity:1 },
    { id: 46, image: cookies6, item: ' cookies ' ,title: 'white forest cookies (1/2 KG)', price: 189, quantity:1 },
];
const RollsData = [
    { id: 51, image: rolls1, item: ' rolls ' ,title: 'Croissants rolls', price: 99, quantity:1},
    { id: 52, image: rolls2, item: ' rolls ' ,title: 'Sanwichrolls rolls', price: 119, quantity:1 },
    { id: 53, image: rolls3, item: ' rolls ' ,title: 'Leopard rolls', price: 109, quantity:1 },
    { id: 54, image: rolls4, item: ' rolls ' ,title: 'multigrain rolls', price: 99, quantity:1 },
    { id: 55, image: rolls5, item: ' rolls ' ,title: 'bun rolls', price: 89, quantity:1 },
    { id: 56, image: rolls6, item: ' rolls ' ,title: 'Focaccia rolls', price: 109, quantity:1 },
];


export {CakeData, CupCakeData, BreadData,DonutData, CookiesData ,RollsData};