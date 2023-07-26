import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IType } from "../../../models/deviceInterface/IType";
import { IBrand } from "../../../models/deviceInterface/IBrand";
import { IDevice } from "../../../models/deviceInterface/IDevice";
import { brands, devices, types } from "../../../utils/consts";

interface IDeviceState {
    type: IType[];
    brand: IBrand[];
    device: IDevice[];
    selectedBrand: IBrand;
    selectedType: IType;
    cartDevice: any[];
}

const initialState: IDeviceState = {
    type: types,
    brand: brands,
    device: devices,
    selectedBrand: {} as IBrand,
    selectedType: {} as IType,
    cartDevice: [],
};

export const deviceSlicer = createSlice({
    name: "device",
    initialState,
    reducers: {
        setSelectedBrand(state, action: PayloadAction<IBrand>) {
            state.selectedBrand = action.payload;
        },
        setSelectedType(state, action: PayloadAction<IType>) {
            state.selectedType = action.payload;
        },
        setCartDevice(state, action: PayloadAction<any[]>) {
            state.cartDevice = action.payload;
        },
        setType(state, action: PayloadAction<IType[]>) {
            state.type = action.payload;
        },
        setBrand(state, action: PayloadAction<IBrand[]>) {
            state.brand = action.payload;
        },
        setDevice(state, action: PayloadAction<IDevice[]>) {
            state.device = action.payload;
        },
    },
});

export default deviceSlicer.reducer;
