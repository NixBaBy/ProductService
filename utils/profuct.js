const products = [
  {
    img: "https://cbu01.alicdn.com/img/ibank/O1CN01sgLEuG1Y3smJ41GKk_!!2215812213004-0-cib.jpg",
    tittle:
      "Нүдний шил нэг удаагийн арчих цаасан линз зөөврийн шил даавуу гар утасны дэлгэцийн камер тусгай толин тусгал алчуур",
    price: "18,000",
    id: "1",
  },

  {
    img: "https://w.ladicdn.com/s750x1050/6513a52323c204001244ad79/db54a48543fe503a4b568f4f622ac60c1036111488581006449649en224065dcb3fc5772c900a9236bcfcfa9e-20241029074132-xklvo-20241120044650-m0u6x.jpg",
    tittle:
      " Эрэгтэйчүүдэд зориулсан өнгөлөгч  Арьсны хорт бодисыг гадагшлуулж, арьсыг чангалж, аюулгүй, хоргүй байгалийн гаралтай найрлагатай",
    price: "18,000",
    id: "2",
  },
];

const productDetail = [
  {
    img: "https://cbu01.alicdn.com/img/ibank/O1CN01sgLEuG1Y3smJ41GKk_!!2215812213004-0-cib.jpg",
    tittle:
      "Нүдний шил нэг удаагийн арчих цаасан линз зөөврийн шил даавуу гар утасны дэлгэцийн камер тусгай толин тусгал алчуур",
    firstPrice: "35,000  MNT",
    secondPrice: "18,000  MNT",
    userPhoto: "http://localhost:3000/userPhoto1.jpg",
    orderPrices1: "Нүдний шилний салфетик 2ш цэнхэр 18'000",
    orderPrices2: "Нүдний шилний салфетик 3ш цэнхэр 19'000",
    orderPrices3: "Нүдний шилний салфетик 4ш цэнхэр 20'000",
    id: "1",
    userCommends: [
      {
        name: "Babula",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png",
        commend:
          "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ.",
        img2: "https://bcbsfepvision.com/wp-content/uploads/2021/03/cleaning-glasses.jpg",
        img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJmzbDLYm6AoM3Og99XctBrpRaIJBuuH2RA&s",
        id: "1.1",
      },
      {
        name: "Joy",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png",
        commend:
          "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш.",
        img2: "https://i.guim.co.uk/img/media/24d04befa13208669862f59b45af28d9083b696f/0_131_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=344e05253783f1e7fb7538a99f5bc074",
        img3: "https://cdn.thelabrepair.com/wp-content/uploads/the-lab-phone-cleaning-1200x800.jpg",
        id: "1.2",
      },
      {
        name: "Marga",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png",
        commend:
          "Эхний удаагийн  хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Загалтуулахгүй маш цэвэрхэн болж байна",
        img2: "https://kungs.fi/wp-content/uploads/2021/04/IMG_5452-kypara-vinkki-01-v3-e1529574661737-1024x522-1.jpg",

        img3: "https://mcn-images.bauersecure.com/wp-images/25823/420x280/motorcycle-helmet-advice-cl.jpg",
        id: "1.3",
      },
    ],
  },

  {
    img: "https://w.ladicdn.com/s750x1050/6513a52323c204001244ad79/db54a48543fe503a4b568f4f622ac60c1036111488581006449649en224065dcb3fc5772c900a9236bcfcfa9e-20241029074132-xklvo-20241120044650-m0u6x.jpg",
    tittle:
      " Эрэгтэйчүүдэд зориулсан өнгөлөгч  Арьсны хорт бодисыг гадагшлуулж, арьсыг чангалж, аюулгүй, хоргүй байгалийн гаралтай найрлагатай",
    firstPrice: "70,000  MNT",
    secondPrice: "38,000  MNT",
    userPhoto: "http://localhost:3000/userPhoto1.jpg",
    orderPrices1: "Нүдний шилний салфетик 2ш цэнхэр 18'000",
    orderPrices2: "Нүдний шилний салфетик 3ш цэнхэр 19'000",
    orderPrices3: "Нүдний шилний салфетик 4ш цэнхэр 20'000",
    id: "2",
    userCommends: [
      {
        name: "Babula",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png",
        commend:
          "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ.",
        img2: "https://bcbsfepvision.com/wp-content/uploads/2021/03/cleaning-glasses.jpg",
        img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJmzbDLYm6AoM3Og99XctBrpRaIJBuuH2RA&s",
        id: "2.1",
      },
      {
        name: "Joy",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png",
        commend:
          "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш.",
        img2: "https://i.guim.co.uk/img/media/24d04befa13208669862f59b45af28d9083b696f/0_131_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=344e05253783f1e7fb7538a99f5bc074",
        img3: "https://cdn.thelabrepair.com/wp-content/uploads/the-lab-phone-cleaning-1200x800.jpg",
        id: "2.2",
      },
      {
        name: "Marga",
        day: "Өнөөдөр",
        img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png",
        commend:
          "Эхний удаагийн  хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Загалтуулахгүй маш цэвэрхэн болж байна",
        img2: "https://kungs.fi/wp-content/uploads/2021/04/IMG_5452-kypara-vinkki-01-v3-e1529574661737-1024x522-1.jpg",

        img3: "https://mcn-images.bauersecure.com/wp-images/25823/420x280/motorcycle-helmet-advice-cl.jpg",
        id: "2.3",
      },
    ],
  },
];
// const userCommends = [
//   [
//     {
//       name: "Babula",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png",
//       commend:
//         "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ.",
//       img2: "https://bcbsfepvision.com/wp-content/uploads/2021/03/cleaning-glasses.jpg",
//       img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJmzbDLYm6AoM3Og99XctBrpRaIJBuuH2RA&s",
//       id: "2",
//     },
//     {
//       name: "Joy",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png",
//       commend:
//         "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш.",
//       img2: "https://i.guim.co.uk/img/media/24d04befa13208669862f59b45af28d9083b696f/0_131_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=344e05253783f1e7fb7538a99f5bc074",
//       img3: "https://cdn.thelabrepair.com/wp-content/uploads/the-lab-phone-cleaning-1200x800.jpg",
//       id: "2",
//     },
//     {
//       name: "Marga",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png",
//       commend:
//         "Эхний удаагийн  хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Загалтуулахгүй маш цэвэрхэн болж байна",
//       img2: "https://kungs.fi/wp-content/uploads/2021/04/IMG_5452-kypara-vinkki-01-v3-e1529574661737-1024x522-1.jpg",

//       img3: "https://mcn-images.bauersecure.com/wp-images/25823/420x280/motorcycle-helmet-advice-cl.jpg",
//       id: "2",
//     },
//   ],
//   [
//     {
//       name: "Babula",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/3-20241012043956-8soqd.png",
//       commend:
//         "Сайн бүтээгдэхүүн, яг зураг болон тайлбарласан шиг. Хурдан хүргэлт, болгоомжтой савлагаа. Дэлгүүрийн тойм маш их алдартай. Цаашид ч дэмжинэ.",
//       img2: "https://bcbsfepvision.com/wp-content/uploads/2021/03/cleaning-glasses.jpg",
//       img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJmzbDLYm6AoM3Og99XctBrpRaIJBuuH2RA&s",
//       id: "1",
//     },
//     {
//       name: "Joy",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/2-20241012043956-8vxtu.png",
//       commend:
//         "Тус компанийн бүтээгдэхүүн маш сайн. Бүтээгдэхүүний чанар сайн. Худалдан авах нь зүйтэй. Хурдан хүргэлт.. 5* дэлгүүрт түргэн шуурхай хүргэлт: Ням гарагийн өглөө (амралтын өдөр), Даваа гарагийн үдээс хойш.",
//       img2: "https://i.guim.co.uk/img/media/24d04befa13208669862f59b45af28d9083b696f/0_131_5472_3283/master/5472.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=344e05253783f1e7fb7538a99f5bc074",
//       img3: "https://cdn.thelabrepair.com/wp-content/uploads/the-lab-phone-cleaning-1200x800.jpg",
//       id: "1",
//     },
//     {
//       name: "Marga",
//       day: "Өнөөдөр",
//       img1: "https://w.ladicdn.com/s400x400/6513a52323c204001244ad79/4-20241012043956-szqgr.png",
//       commend:
//         "Эхний удаагийн  хүргэлт супер буухиа хүргэлтээс хамаагүй дээр. Загалтуулахгүй маш цэвэрхэн болж байна",
//       img2: "https://kungs.fi/wp-content/uploads/2021/04/IMG_5452-kypara-vinkki-01-v3-e1529574661737-1024x522-1.jpg",

//       img3: "https://mcn-images.bauersecure.com/wp-images/25823/420x280/motorcycle-helmet-advice-cl.jpg",
//       id: "1",
//     },
//   ],
// ];
module.exports = {
  products,
  productDetail,
  // userCommends,
};
