import axios from 'axios';

const URL = '';

export const addFormDetails = async(data)=>{
    try {
        return await axios.post(`${URL}/add`,data);
    }catch(error) {
        console.log("Error info: "+error);
    } 
}

export const fetchFormDetails  = async(data) =>{
    try {
        return await axios.get(`${URL}/details`);
    } catch (error) {
        console.log("Error Info: "+error);
    }
}