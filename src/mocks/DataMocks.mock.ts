import {
  ListAttractionsDataModel,
  ListEventDataModel,
} from "../model/interfaces";

// DADOS MOCK DE PONTOS TURISTICOS
export const ListAttractionsData: any = [
  {
    id: 1,
    name: "Praia da Matinha",
    city: "Tucurui-Pará",
    photo:
      "https://static.portaldacidade.com/unsafe/842x0/https://s3.amazonaws.com/tucurui.portaldacidade.com/img/news/editor/editor-60f57b5fada7e.png",
    category: "Pontos Turisticos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    facebook: "",
    instagram: "",
    whatsapp: "",
    map: "https://goo.gl/maps/VTsrfYWNaoqGfWxu5",
    galery: [
      "https://static.portaldacidade.com/unsafe/https://s3.amazonaws.com/tucurui.portaldacidade.com/img/news/2022-07/veraneio-em-tucurui-inicia-com-musica-ao-vivo-e-muita-diversao-nas-praias-da-reg-62cc1d745f036.jpg",
      "https://i0.wp.com/www.zedudu.com.br/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-04-at-18.59.38-1-e1625455704418.jpeg?fit=1080%2C607&ssl=1",
      "https://static.portaldacidade.com/unsafe/https://s3.amazonaws.com/tucurui.portaldacidade.com/img/news/2022-07/veraneio-continua-e-banhistas-lotam-as-praias-no-fim-de-semana-em-tucurui-62d5b651881a4.jpg",
    ],
  },
  {
    id: 2,
    name: "Orla Municipal",
    city: "Tucurui-Pará",
    photo:
      "https://agenciapara.com.br/midias/2022/grandes/15569_40f59d4d-018f-9f5c-a45a-e7b5c62b9cd6.jpg",
    category: "Pontos Turisticos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    facebook: "",
    instagram: "",
    whatsapp: "",
    map: "https://goo.gl/maps/W5ae2nvZMVmqhnG79",
    galery: [
      "https://agenciapara.com.br/midias/2022/grandes/15569_67f54e37-7da1-accf-1292-d29787e73841.jpg",
      "https://agenciapara.com.br/midias/2022/grandes/15569_727feff8-0c8f-aeff-a417-661e3febeb17.jpg",
      "https://agenciapara.com.br/midias/2022/grandes/15569_33f7b6ac-a206-a678-e117-e0a7c8d57847.jpg",
    ],
  },
  {
    id: 3,
    name: "Trapixe do Bola",
    photo: "https://10619-2.s.cdn12.com/rests/original/110_505213112.jpg",
    category: "Pontos Turisticos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    facebook: "https://www.facebook.com/trapixe.do.bola/",
    instagram: "https://www.instagram.com/trapixe_do_bola/",
    whatsapp: "",
    map: "https://goo.gl/maps/JfDHrD4oWBZahBqi8",
    city: "Breu Branco-Pará",
    galery: [
      "https://10619-2.s.cdn12.com/rests/original/110_505213107.jpg",
      "https://10619-2.s.cdn12.com/rests/original/110_503102784.jpg",
      "https://10619-2.s.cdn12.com/rests/original/110_505213110.jpg",
    ],
  },
  {
    id: 4,
    name: "Janelas Para Tuc",
    photo:
      "https://instagram.ftur1-1.fna.fbcdn.net/v/t51.2885-15/288860051_1081955429071613_1867539188052891531_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.ftur1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gE0HRSU70lEAX9HJD8N&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg2NDAyMzcyNTYzNDM5NzUwNA%3D%3D.2-ccb7-5&oh=00_AfA-1rZ1cLA41TQzXnBGQ2nKxQTi4FAw9VVviv1twsMOdg&oe=6496D7FD&_nc_sid=a1ad6c",
    category: "Pontos Turisticos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    facebook: "https://www.facebook.com/janelasparatuc/?locale=pt_BR",
    instagram: "https://www.instagram.com/janelasparatuc/",
    whatsapp: "",
    map: "https://goo.gl/maps/QAwfPUxGTGcFZjZT7",
    city: "Breu Branco-Pará",
    galery: [
      "https://instagram.ftur1-1.fna.fbcdn.net/v/t51.2885-15/352831715_978114136696498_3331071253954058882_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.ftur1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VcLa-5a-yBcAX_D8qs9&edm=AAAAAAABAAAA&ccb=7-5&ig_cache_key=MzEyMjgzODEzOTIxMTEzMTM4Mg%3D%3D.2-ccb7-5&oh=00_AfCmSduP-vZ4zgxNL5hZ38iqTe7_DSlIiaVNZYANUTjZ_w&oe=6497BB0F",
      "https://instagram.ftur1-1.fna.fbcdn.net/v/t51.2885-15/350807026_952559959223692_7113616322643145463_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.ftur1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=sSdL3gKlMj0AX-ICt6g&edm=AAAAAAABAAAA&ccb=7-5&ig_cache_key=MzExNzA5MDMzODcyODc1NTIwOA%3D%3D.2-ccb7-5&oh=00_AfAGEWiWoOUtM_cd9MsSphD6kZocnf5y5GOwzExTLX4gBA&oe=6497EEE7",
      "https://instagram.ftur1-1.fna.fbcdn.net/v/t51.2885-15/302465386_514916157107374_1612636100804830373_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.ftur1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=TLVV0VW0_RwAX_Yk8A9&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MjkxOTE0NjQ0NTY2NTQ0ODkxMQ%3D%3D.2-ccb7-5&oh=00_AfDsiyfruFm3ZWa3pU3NsfU_lGxIPIUwu972ZZOXjzmQIQ&oe=64982B0B&_nc_sid=a1ad6c",
    ],
  },
];

// DADOS MOCK DE EVENTOS
export const ListEventData: ListEventDataModel[] = [
  {
    id: 1,
    name: "Gusttavo Lima",
    city: "Tucurui - Pará",
    place: "Parque de Exposições de Tucurui",
    date: "20/10/2023",
    photo:
      "https://www.turismosantos.com.br/static/files_turismosantos/styles/evento-full/public/gusttavo%20lima.jpg?itok=EJCqXSc_",
    category: "Eventos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    prohibited: "Pago",
    outlets:
      "https://www.ticketmaster.com/gusttavo-lima-tickets/artist/1666932",
    map: "https://goo.gl/maps/5JmeFzoXxuBWo4Mn8",
  },
  {
    id: 2,
    place: "Parque de Exposições de Tucurui",
    city: "Tucurui - Pará",
    name: "Gusttavo Lima",
    date: "20/10/2023",
    photo:
      "https://www.turismosantos.com.br/static/files_turismosantos/styles/evento-full/public/gusttavo%20lima.jpg?itok=EJCqXSc_",
    category: "Eventos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    prohibited: "Pago",
    outlets:
      "https://www.ticketmaster.com/gusttavo-lima-tickets/artist/1666932",
    map: "https://goo.gl/maps/5JmeFzoXxuBWo4Mn8",
  },
  {
    id: 3,
    place: "Parque de Exposições de Tucurui",
    city: "Tucurui - Pará",
    date: "20/10/2023",
    name: "Gusttavo Lima",
    photo:
      "https://www.turismosantos.com.br/static/files_turismosantos/styles/evento-full/public/gusttavo%20lima.jpg?itok=EJCqXSc_",
    category: "Eventos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    prohibited: "Gratis",
    outlets:
      "https://www.ticketmaster.com/gusttavo-lima-tickets/artist/1666932",
    map: "https://goo.gl/maps/5JmeFzoXxuBWo4Mn8",
  },
  {
    id: 4,
    place: "Parque de Exposições de Tucurui",
    city: "Tucurui - Pará",
    name: "Gusttavo Lima",
    date: "20/10/2023",
    photo:
      "https://www.turismosantos.com.br/static/files_turismosantos/styles/evento-full/public/gusttavo%20lima.jpg?itok=EJCqXSc_",
    category: "Eventos",
    description: `is simply dummy text of the printing and typesetting industry.`,
    prohibited: "Pago",
    outlets:
      "https://www.ticketmaster.com/gusttavo-lima-tickets/artist/1666932",
    map: "https://goo.gl/maps/5JmeFzoXxuBWo4Mn8",
  },
];
