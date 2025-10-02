

import p1_img from '../assets/women1.jfif'
import p2_img from '../assets/men1.webp'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/men2.jpg'
import p5_img from '../assets/men3.webp'
import p6_img from '../assets/women3.jpg'
import p7_img from '../assets/men4.jfif'
import p8_img from '../assets/women4.webp'
import p9_img from '../assets/men5.webp'
import p10_img from '../assets/women5.webp'
import p11_img from '../assets/men6.webp'
import p12_img from '../assets/women6.webp'
import p13_img from '../assets/men7.jfif'
import p14_img from '../assets/women7.webp'
import p15_img from '../assets/men8.jpg'
import p16_img from '../assets/women8.jfif'
// import p17_img from '../assets/p1.jpg'
// import p18_img from '../assets/p1.jpg'
// import p19_img from '../assets/p1.jpg'
// import p20_img from '../assets/p1.jpg'
import p21_img from '../assets/kid1.jpg'
// import p22_img from '../assets/p1.jpg'
import p23_img from '../assets/kid2.jfif'
// import p24_img from '../assets/p1.jpg'
import p25_img from '../assets/kid3.jfif'
// import p26_img from '../assets/p1.jpg'
import p27_img from '../assets/kid4.webp'
// import p28_img from '../assets/p1.jpg'
import p29_img from '../assets/kid5.jfif'
// import p30_img from '../assets/p1.jpg'
import p31_img from '../assets/kid6.jfif'
// import p32_img from '../assets/p1.jpg'
import p33_img from '../assets/kid7.webp'
// import p34_img from '../assets/p1.jpg'
import p35_img from '../assets/kid8.jfif'
// import p36_img from '../assets/p1.jpg'



let all_product = [
    {
        id: 1,
        name: "Kurti",
        category: "women",
        image: p1_img,
        price: 50.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 80.5 - 50.0
    },
    {
        id: 2,
        name: "Jeans",
        category: "men",
        image: p2_img,
        price: 60.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 90.5 - 60.0
    },
    {
        id: 3,
        name: "Saree",
        category: "women",
        image: p3_img,
        price: 75.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 120.0 - 75.0
    },
    {
        id: 4,
        name: "Jacket",
        category: "men",
        image: p4_img,
        price: 90.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 140.0 - 90.0
    },
    {
        id: 5,
        name: "T-Shirt",
        category: "men",
        image: p5_img,
        price: 45.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 70.0 - 45.0
    },
    {
        id: 6,
        name: "Dress",
        category: "women",
        image: p6_img,
        price: 85.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 130.0 - 85.0
    },
    {
        id: 7,
        name: "Hoodie",
        category: "men",
        image: p7_img,
        price: 95.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 150.0 - 95.0
    },
    {
        id: 8,
        name: "Leggings",
        category: "women",
        image: p8_img,
        price: 55.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 100.0 - 55.0
    },
    {
        id: 9,
        name: "Shirt",
        category: "men",
        image: p9_img,
        price: 70.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 110.0 - 70.0
    },
    {
        id: 10,
        name: "Jumpsuit",
        category: "women",
        image: p10_img,
        price: 88.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 135.0 - 88.0
    },
    {
        id: 11,
        name: "Sweater",
        category: "men",
        image: p11_img,
        price: 92.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 145.0 - 92.0
    },
    {
        id: 12,
        name: "Gown",
        category: "women",
        image: p12_img,
        price: 99.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 160.0 - 99.0
    },
    {
        id: 13,
        name: "Shorts",
        category: "men",
        image: p13_img,
        price: 40.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 65.0 - 40.0
    },
    {
        id: 14,
        name: "Top",
        category: "women",
        image: p14_img,
        price: 52.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 85.0 - 52.0
    },
    {
        id: 15,
        name: "Kurta",
        category: "men",
        image: p15_img,
        price: 78.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 115.0 - 78.0
    },
    {
        id: 16,
        name: "Skirt",
        category: "women",
        image: p16_img,
        price: 73.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 110.0 - 73.0
    },
    {
        id: 21,
        name: "Denim Shirt",
        category: "Kids",
        image: p21_img,
        price: 85.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 140.0 - 85.0
    },
    {
        id: 23,
        name: "Cargo Pants",
        category: "Kids",
        image: p23_img,
        price: 88.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 130.0 - 88.0
    },
    {
        id: 25,
        name: "Trousers",
        category: "Kids",
        image: p25_img,
        price: 76.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 120.0 - 76.0
    },
    {
        id: 27,
        name: "Tank Top",
        category: "Kids",
        image: p27_img,
        price: 49.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 80.0 - 49.0
    },
    {
        id: 29,
        name: "Formal Pants",
        category: "Kids",
        image: p29_img,
        price: 98.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 160.0 - 98.0
    },
    {
        id: 31,
        name: "Leather Jacket",
        category: "Kids",
        image: p31_img,
        price: 150.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 250.0 - 150.0
    },
    {
        id: 33,
        name: "Gym Shorts",
        category: "Kids",
        image: p33_img,
        price: 55.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 90.0 - 55.0
    },
    {
        id: 35,
        name: "Casual Blazer",
        category: "Kids",
        image: p35_img,
        price: 105.0,
        sizes: ["S", "M", "L", "XL", "XXL"],
        discount: 170.0 - 105.0
    },
];

export default all_product;
