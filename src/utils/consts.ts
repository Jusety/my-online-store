import { IBrand } from "../models/deviceInterface/IBrand";
import { IDevice } from "../models/deviceInterface/IDevice";
import { IType } from "../models/deviceInterface/IType";
import { generateId } from "./generateId";

export const types: IType[] = [
    { id: generateId(), name: "Phone" },
    { id: generateId(), name: "Microwave" },
    { id: generateId(), name: "Laptop" },
    { id: generateId(), name: "Fridge" },
    { id: generateId(), name: "TV" },
    { id: generateId(), name: "Monitor" },
    { id: generateId(), name: "Washing machine" },
    { id: generateId(), name: "Vacuum cleaner" },
];

export const brands: IBrand[] = [
    { id: generateId(), name: "Samsung" },
    { id: generateId(), name: "DEXP" },
    { id: generateId(), name: "Xiaomi" },
    { id: generateId(), name: "Sony" },
    { id: generateId(), name: "LG" },
    { id: generateId(), name: "HUAWEI" },
    { id: generateId(), name: "Apple" },
    { id: generateId(), name: "AOC" },
];

export const devices: IDevice[] = [
    {
        id: generateId(),
        name: "IPhone 14 pro max",
        type: "Phone",
        brand: "Apple",
        description: [
            { id: 1, title: "Main color", def: "Black" },
            { id: 2, title: "Published date", def: 2022 },
            { id: 3, title: "Memory", def: "256 GB" },
        ],
        rating: 9.6,
        price: 120439,
        img: "/assets/14promax.jpeg",
    },
    {
        id: generateId(),
        name: "I2790VQ 27",
        type: "Monitor",
        brand: "AOC",
        description: [
            { id: 1, title: "Main color", def: "Gray" },
            { id: 2, title: "Published date", def: 2022 },
            { id: 3, title: "Quality", def: "1920 X 1080" },
        ],
        rating: 8.2,
        price: 17990,
        img: "/assets/mon.png",
    },
    {
        id: generateId(),
        name: "A5",
        type: "Phone",
        brand: "Xiaomi",
        description: [
            { id: 1, title: "Main color", def: "Black" },
            { id: 2, title: "Published date", def: 2023 },
        ],
        rating: 4,
        price: 100000,
        img: "/assets/A5.jpg",
    },
    {
        id: generateId(),
        name: "UE32T5300AUXRU",
        type: "TV",
        brand: "Samsung",
        description: [
            { id: 1, title: "Main color", def: "Black" },
            { id: 2, title: "Published date", def: 2021 },
            { id: 3, title: "Quality", def: "Full HD" },
            { id: 4, title: "Size", def: "32`" },
        ],
        rating: 6.7,
        price: 32459,
        img: "/assets/tv.avif",
    },
    {
        id: generateId(),
        name: "MS-2336GIH",
        type: "Microwave",
        brand: "LG",
        description: [
            { id: 1, title: "Main color", def: " Gray" },
            { id: 2, title: "Published date", def: 2021 },
        ],
        rating: 7,
        price: 13000,
        img: "/assets/micro.png",
    },
    {
        id: generateId(),
        name: "Galaxy S23",
        type: "Phone",
        brand: "Samsung",
        description: [
            { id: 1, title: "Main color", def: "Black" },
            { id: 2, title: "Published date", def: 2023 },
        ],
        rating: 10,
        price: 100000,
        img: "/assets/s23_ultra.jpg",
    },
    {
        id: generateId(),
        name: "RF-TD210NMA/W",
        type: "Fridge",
        brand: "DEXP",
        description: [
            { id: 1, title: "Main color", def: "White" },
            { id: 2, title: "Published date", def: 2018 },
        ],
        rating: 5,
        price: 2000,
        img: "/assets/fridge.jpg",
    },
    {
        id: generateId(),
        name: "XCLEA H30",
        type: "Vacuum cleaner",
        brand: "HUAWEI",
        description: [
            { id: 1, title: "Main color", def: "White" },
            { id: 2, title: "Published date", def: 2022 },
            { id: 3, title: "Battery", def: "5200mAh" },
        ],
        rating: 9,
        price: 80320,
        img: "/assets/vacc.jpg",
    },
];
