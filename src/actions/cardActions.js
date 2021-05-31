import {CARD_CREATE_REQUEST, CARD_CREATE_SUCCESS, CARD_CREATE_FAIL, CARD_GET_ALL_REQUEST, CARD_GET_ALL_SUCCESS, CARD_GET_ALL_FAIL } from "../constants/cardConstants"
import axios from "axios"

export const listCreateCard = (type, power, pr_v, sec_v, date, author, mes, shield, tested, bid, conn_type, coil_num, info, pic, dir, file, last, d_id) => async(dispatch) => {
    try {
      dispatch({type: CARD_CREATE_REQUEST})
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    }
  
      await axios.post(`http://127.0.0.1:8000/api/cards/`, {type, power, pr_v, sec_v, date, author, mes, shield, tested, bid, conn_type, coil_num, info, pic, dir, file, last, d_id}, config)
  
      dispatch({
        type: CARD_CREATE_SUCCESS,
        payload: true
      })
    } catch (error) {
      dispatch({
        type: CARD_CREATE_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }


  export const listCards = () => async(dispatch) => {
    try {
  
      
      dispatch({type: CARD_GET_ALL_REQUEST})
  
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    }
  
      const { data } = await axios.get('http://127.0.0.1:8000/api/cards/',config)
  
      dispatch({
        type: CARD_GET_ALL_SUCCESS,
        payload: data.data
      })
    } catch (error) {
      dispatch({
        type: CARD_GET_ALL_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
    }
  }