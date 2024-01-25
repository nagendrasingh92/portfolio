import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from '../../../services/api_config';

export const fetchProductsData = createAsyncThunk('productPage/fetchProductsData', async(skip) => {
    try{
        const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch products data');
    }
});