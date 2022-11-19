import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS
} from "../constants/productsConstants";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })
        const { data } = await axios.get('/products')   //Agrega a la ruta URL base, definida en "proxy" en package.json
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            //payload: error.response.data.message
        })
    }
}

//clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}