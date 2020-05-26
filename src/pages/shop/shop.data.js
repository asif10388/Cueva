const SHOP_DATA = [
  {
    id: 1,
    title: 'Earphones',
    routeName: 'earphones',
    items: [
      {
        id: 1,
        name: 'Remax RM-512',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-9/95691298_4095210913822455_903475142699515904_n.jpg?_nc_cat=104&_nc_sid=c48759&_nc_oc=AQnhFduhxQS3XD5kwYEUtS2YnpTJI3naW8c6lXq2M0fY0iMtJUsjA7uXE_pmSxl4FkI&_nc_ht=scontent.fdac13-1.fna&oh=14daf4bf0023d5208b5b767316614ca2&oe=5EF36F58',
        price: 200
      },
      {
        id: 2,
        name: 'Uiisii HM12',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99296883_4014691255268508_2208173911009394688_n.jpg?_nc_cat=101&_nc_sid=c48759&_nc_oc=AQlYf852ddJLKT69QNDwOPw43gD8oWwuUSJ7wshDiC3gcFFFmv78zsH7Iep8Gi_k1V4&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=7603009b48a6a09f9027b1c054195733&oe=5EF1E5BC',
        price: 399.00
      },
      {
        id: 3,
        name: 'Plexton G30',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99006505_3292380980812571_5770148310018949120_n.jpg?_nc_cat=100&_nc_sid=c48759&_nc_oc=AQnxEyLhPMOPMH1mu99qTlyHFRyIuDpmPmUwRg2P1oavM9HHPLva55Hr5OY-u0XG8Xg&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=c3796008d389d69c79b672c23356b14e&oe=5EF15729',
        price: 1549.00

      },
      {
        id: 4,
        name: 'UiiSii C100',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/86362748_2664720523641169_1710334158556889088_n.jpg?_nc_cat=101&_nc_sid=c48759&_nc_oc=AQl0-zH6raSfwoo6eqO3HSXQRNxMyBD7Atx8PTQn5PCXMQnYzgf74taSym1b1-Dh8tk&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=8f5a28e177074dfd0689f26641656486&oe=5EF2D93B',
        price: 180.00
      },
      {
        id: 5,
        name: 'QKZ CK1',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/58282156_2302345863155916_2524526070862970880_n.jpg?_nc_cat=105&_nc_sid=c48759&_nc_oc=AQnRFAsR9L0r-fgIGXMUj1vW197dNPWd8Zp5E8G80clKZ2TPkm5kjPlJFx3lGrUUzn8&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=efcfc2c5fc73f6f9fed58681c9a800d3&oe=5EF38B14',
        price: 399.00
      },
      {
        id: 6,
        name: 'RIVO EM-101',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-9/97677861_3057294691031764_4955630817716994048_n.jpg?_nc_cat=103&_nc_sid=c48759&_nc_oc=AQnJuoZRO78L_rgaQWo6z9OWCV6X6keNuQFAmX2uv6zehNVuoD8mGWq8DOlmSaC8Duo&_nc_ht=scontent.fdac13-1.fna&oh=ba0689bf93a7e94f3116d8459fccc4ed&oe=5EF35FE7',
        price: 350.00

      },
      {
        id: 7,
        name: 'EINSEAR T2',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99257487_2752094404912847_3190994739096715264_n.jpg?_nc_cat=103&_nc_sid=c48759&_nc_oc=AQmibWs7wtAO5NlUy9Y9BY1edks-kSROh5PEfZnO7kA_UJnSRZZd1pbRF8IPES8DHa4&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=b1ea44ab1bc9505448ebe027cd5e19dc&oe=5EF1FD4F',
        price: 1020.00

      },
      {
        id: 8,
        name: 'Eisear Cut',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99029541_3008139932607645_2916234960933224448_n.jpg?_nc_cat=110&_nc_sid=c48759&_nc_oc=AQmStX0RRs0vTrelYBKTwZ1e38i3mWhQDnppc2i8pC4nFFwu58jvtq2_beosW8fHyFo&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=52a2055a363fc61c6d41eb4e995f7f57&oe=5EF41075',
        price: 650.00

      },
      {
        id: 9,
        name: 'UiiSii HM13',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/98366503_3498498693500697_8845994533528272896_n.jpg?_nc_cat=109&_nc_sid=c48759&_nc_oc=AQkBxFQUmj03JO2PZ0vgr1DYkCuuec_MaaqNIQv8AhOjPJum8_qWKxOurcE7nuMJOyo&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=8182583d6868ec98d1f9b7b72cda7f69&oe=5EF20C09',
        price: 399.00
      }
    ]
  },
  {
    id: 2,
    title: 'Cables',
    routeName: 'cable',
    items: [
      {
        id: 10,
        name: 'Oneplus Mclaren Dash/Warp',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99040702_2859432124091950_3885168905622126592_n.jpg?_nc_cat=104&_nc_sid=c48759&_nc_oc=AQltOqlvMvssIbU8dJb6gdtLd3ndxmudqpAcnUpN2fCZ3XJRKyxVKGMxe_9RcsELGXU&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=6971a67a4259b2efde275d0594a4cc67&oe=5EF32D83',
        price: 490.00

      },
      {
        id: 11,
        name: 'Remax RC 044m',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/99123668_2796315347134406_8795302709570830336_n.png?_nc_cat=104&_nc_sid=c48759&_nc_oc=AQnAYznKpMvoxFoO9eaThvgS-jX2UzbzYf1EYXtoLfqp7Fgq15Eq9WyoCBEOq2HlPgg&_nc_ht=scontent.fdac13-1.fna&oh=c8d545933bff871f969a4229c5082904&oe=5EF30FDA',
        price: 180.00
      },
    ]
  },
  {
    id: 3,
    title: 'Earpods',
    routeName: 'earpods',
    items: [
      {
        id: 18,
        name: 'Xiaomi Redmi Airdots',
        imageUrl: 'https://scontent.fdac13-1.fna.fbcdn.net/v/t45.5328-0/p180x540/83224471_2841524242537789_6662095657416785920_n.jpg?_nc_cat=110&_nc_sid=c48759&_nc_oc=AQmBFmWdDNvD_ZtyK4c0tpOrPx2u8I6qMkde3bx6vBBiAxMs-MBiRW4oQQ7AkIsmluo&_nc_ht=scontent.fdac13-1.fna&_nc_tp=6&oh=f829f7728dd9fce6ea09410627e0da63&oe=5EF380C3',
        price: 1550.00
      },
    ]
  },
  {
    id: 4,
    title: 'Wifi Routers',
    routeName: 'routers',
    items: [
    ]
  },
  {
    id: 5,
    title: 'Keyboards',
    routeName: 'keyboards',
    items: [
    ]
  }
];

export default SHOP_DATA;
