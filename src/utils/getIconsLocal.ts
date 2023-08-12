import BankSvg from '../../assets/icons/bank.svg'
import AmbulanceSvg from '../../assets/icons/ambulance.svg'
import BeachTenisSvg from '../../assets/icons/beach-tenis.svg'
import DrinksSvg from '../../assets/icons/drinks.svg'
import GymSvg from '../../assets/icons/gym.svg'
import HamburgerSvg from '../../assets/icons/hamburger.svg'
import HotelSvg from '../../assets/icons/hotel.svg'
import PharmaciaSvg from '../../assets/icons/pharmacia.svg'
import ShoppingSvg from '../../assets/icons/shopping.svg'



export const iconsLocal = (opt: string) => {
    switch (opt) {
      case "bank":
        return BankSvg;
      case "ambulance":
        return AmbulanceSvg;
      case "beachtenis":
        return BeachTenisSvg;
      case "drinks":
        return DrinksSvg;
      case "gym":
        return GymSvg;
      case "hamburger":
        return HamburgerSvg;
      case "hotel":
        return HotelSvg;
      case "pharmacia":
        return PharmaciaSvg;
      case "shopping":
        return ShoppingSvg;
    }
  };