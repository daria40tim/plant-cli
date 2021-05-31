import axios from "axios"
import { DIRS_FAIL, DIRS_REQUEST, DIRS_SUCCESS, IMAGE_FAIL, IMAGE_REQUEST, IMAGE_SUCCESS } from "../constants/ocrConstants"

export const listOcrDetails = (index, dir) => async(dispatch) => {
  try {

    dispatch({type: IMAGE_REQUEST})


    const config = {
      headers: {
          'Content-Type': 'application/json',

      },
      mode: 'cors'
  }

    const { data } = await axios.post(`http://127.0.0.1:8000/api/ocr/img`, {index, dir}, config)

    dispatch({
      type: IMAGE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: IMAGE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}


export const listAllDirs = () => async(dispatch) => {
  try {

    dispatch({type: DIRS_REQUEST})


    const config = {
      headers: {
          'Content-Type': 'application/json',
      },
      mode: 'cors'
  }

    const { data } = await axios.get(`http://127.0.0.1:8000/api/ocr/dirs`, config)

    dispatch({
      type: DIRS_SUCCESS,
      payload: data.data
    })
  } catch (error) {
    dispatch({
      type: DIRS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}