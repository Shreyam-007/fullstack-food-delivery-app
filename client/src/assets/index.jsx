// export {default as LoginBg} from "./img/login-bg.png";
// export {default as Logo} from "./img/logo.png";
// export {default as Avatar} from "./img/avatar.png";
// export {default as Mango} from "./img/mango.png";
// export {default as Delivery} from "./img/delivery.png";
// export {default as HeroBg} from "./img/heroBg.png";
// export {default as Bill} from "./img/bill.png";

const IMAGES = {

    Logo : new URL('./img/logo1.png', import.meta.url).href,
    Avatar : new URL('./img/avatar.png', import.meta.url).href,
    Mango : new URL('./img/mango.png', import.meta.url).href,
    Delivery : new URL('./img/delivery.png', import.meta.url).href,
    HeroBg : new URL('./img/heroBg.png', import.meta.url).href,
    Bill : new URL('./img/bill.png', import.meta.url).href,
}

export default IMAGES