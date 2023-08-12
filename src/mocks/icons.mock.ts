// import bank from '../../assets/icons/bank.svg'
// import ambulance from '../../assets/icons/ambulance.svg'
// import beachTenis from '../../assets/icons/beach-tenis.svg'
// import drinks from '../../assets/icons/drinks.svg'
// import gym from '../../assets/icons/gym.svg'
// import hamburger from '../../assets/icons/hamburger.svg'
// import hotel from '../../assets/icons/hotel.svg'
// import pharmacia from '../../assets/icons/pharmacia.svg'
// import shopping from '../../assets/icons/shopping.svg'

export interface PropsModel{
    name: string;
    icon: string;
}


export const iconsData:PropsModel[] = [
    {
        name: "Bancos",
        icon: 'landmark',
    },
    {
        name: "Pubs & Restaurantes",
        icon: 'beer'
    },
    {
        name: "Hoteis",
        icon: 'hotel'
    },
    {
        name: "Farmácias",
        icon: 'briefcase-medical'
    },
    {
        name: "Beach Tênis",
        icon: 'baseball-ball'
    },
    {
        name: "Supermecados/Mercearias",
        icon: 'shopping-basket'
    },
    {
        name: "Hamburgerias",
        icon: 'hamburger'
    },
    {
        name: "Academias",
        icon: 'dumbbell'
    },
    {
        name: "Hospitais e Postos de Saúde",
        icon: 'ambulance'
    },
]