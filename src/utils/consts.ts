import { IBrand } from "../models/deviceInterface/IBrand";
import { IDevice } from "../models/deviceInterface/IDevice";
import { IType } from "../models/deviceInterface/IType";
import { generateId } from "./generateId";

//фотки сделать к каждому бренду и типу(через ссылку на фото), мб к сделать css для layout deviceItem в shop

export const types: IType[] = [
    { id: generateId(), name: "Phone" },
    { id: generateId(), name: "Microwave" },
    { id: generateId(), name: "Laptop" },
    { id: generateId(), name: "Fridge" },
    { id: generateId(), name: "TV" },
    { id: generateId(), name: "Screen" },
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
];

export const devices: IDevice[] = [
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
        img: "D:/webtips/my-online-store/src/assets/s23_ultra.jpg",
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
        rating: 10,
        price: 100000,
        img: "https://www.google.com/search?q=s23+samsung&sxsrf=APwXEdc474amh_Fx02K6m9bJW3ocFt_AQA:1684509531787&source=lnms&tbm=isch&sa=X&ved=2ahUKEwii8YyC14H_AhXKk4sKHZ2ODfkQ_AUoA3oECAEQBQ&biw=1440&bih=757&dpr=1#imgrc=NRaB8ApQd0_I-M",
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
        img: "https://www.google.com/search?q=s23+samsung&sxsrf=APwXEdc474amh_Fx02K6m9bJW3ocFt_AQA:1684509531787&source=lnms&tbm=isch&sa=X&ved=2ahUKEwii8YyC14H_AhXKk4sKHZ2ODfkQ_AUoA3oECAEQBQ&biw=1440&bih=757&dpr=1#imgrc=NRaB8ApQd0_I-M",
    },
    {
        id: generateId(),
        name: "Microwave_name",
        type: "Microwave",
        brand: "LG",
        description: [
            { id: 1, title: "Main color", def: "Black" },
            { id: 2, title: "Published date", def: 2021 },
        ],
        rating: 10,
        price: 100000,
        img: "https://www.google.com/search?q=s23+samsung&sxsrf=APwXEdc474amh_Fx02K6m9bJW3ocFt_AQA:1684509531787&source=lnms&tbm=isch&sa=X&ved=2ahUKEwii8YyC14H_AhXKk4sKHZ2ODfkQ_AUoA3oECAEQBQ&biw=1440&bih=757&dpr=1#imgrc=NRaB8ApQd0_I-M",
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
        img: "https://www.google.com/search?q=s23+samsung&sxsrf=APwXEdc474amh_Fx02K6m9bJW3ocFt_AQA:1684509531787&source=lnms&tbm=isch&sa=X&ved=2ahUKEwii8YyC14H_AhXKk4sKHZ2ODfkQ_AUoA3oECAEQBQ&biw=1440&bih=757&dpr=1#imgrc=NRaB8ApQd0_I-M",
    },
];
