//import { AxiosResponse } from "axios"
import axiosInstance from "../config/axios.config"
import { ApiResponse } from "../models/api-response.model"
import { Product } from "../models/product.model"
import { from, defer } from "rxjs";
import { CancelToken } from "axios";
//import { Observable } from "@reduxjs/toolkit";

export const getAllProducts = () => {
    return axiosInstance.get<ApiResponse<Product[]>>('')

}
export const getProductById = (id: number, token: CancelToken | undefined) => {
    const obs = defer(
        () => from(
            axiosInstance.get<ApiResponse<Product>>(`/${id}`, { cancelToken: token })
        )
    )
    return obs
    //return axiosInstance.get<ApiResponse<Product>>(`/${id}`)
}
export const addProduct = (product: Product) => {
    return axiosInstance.post<ApiResponse<Product>>('', product)
}
export const updateProduct = (product: Product, id: number) => {
    return axiosInstance.put<ApiResponse<Product>>(`/${id}`, product)
}
export const deleteProduct = (id: number) => {
    return axiosInstance.delete<ApiResponse<Product>>(`/${id}`)
}