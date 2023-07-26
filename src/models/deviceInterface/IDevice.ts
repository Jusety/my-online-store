import { IDescription } from "./IDescription";

export interface IDevice {
    id: number;
    name: string;
    type: string;
    brand: string;
    rating: number;
    price: number;
    description?: IDescription[];
    img: string;
}
