import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Mù Cang Chải, Yên Bái",
    city: "Yên Bái",
    distance: 300,
    address: 'SomeWhere',
    price: '4,690,000',
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "jhon doe",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Pù Luông, Thanh Hóa",
    city: "Thanh Hóa",
    distance: 400,
    address: 'SomeWhere',
    price: '2,790,000 ',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Tràng An, Ninh Bình",
    city: "Ninh Bình",
    distance: 500,
    address: 'SomeWhere',
    price: '3,890,000',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Vịnh Hạ Long, Quảng Ninh",
    city: "Quảng Ninh",
    distance: 500,
    address: 'SomeWhere',
    price: '4,490,000',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Hội An, Quảng Nam",
    city: "Quảng Nam",
    distance: 500,
    address: 'SomeWhere',
    price: '2,490,000',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Đà Lạt, Lâm Đồng",
    city: "Lâm Đồng",
    distance: 500,
    address: 'SomeWhere',
    price: '3,390,000',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Côn Đảo, Bà Rịa - Vũng Tàu",
    city: "Bà Rịa - Vũng Tàu",
    distance: 500,
    address: 'SomeWhere',
    price: '3,190,000',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Phú Quốc, Kiên Giang",
    city: "Kiên Giang",
    distance: 500,
    address: 'SomeWhere',
    price: '4,790,000 ',
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
