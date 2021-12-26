import axios from "axios";
import { API_BASE_URL } from "./app-config";

const url = API_BASE_URL



export const boardList = async () => {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (e) {
        console.log(e)
    }

}

export const boardDetail = async (id) =>{

    try{
        const res= await axios.get(`${url}/board/`+id)
        return res.data
    }catch(e){
        console.log(e)
    }

}

export const boarCreate = async (data) => {
    try{
        const res = await axios.post(`${url}/board`,data)
        return res.data
    }catch(e){
        console.log(e)
    }
}

export const boardUpdate = async (id,data) =>{
    try{
        const res = await axios.put(`${url}/board/${id}`,data)
        return res.data
    } catch(e){
        console.log(e)
    }
}

export const boardDelete = async(id) =>{
    try{
        const res = await axios.delete(`${url}/board/${id}`)
        return res.data
    }catch (e){
        console.log(e)
    }
}