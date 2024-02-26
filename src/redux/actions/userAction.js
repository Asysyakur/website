import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

export const GetUser = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/user").then((response) => {
            dispatch({type:"GET_USER",payload:response.data});
        });
    },[dispatch])
};

export const addUser = (userData) => async (dispatch) => {
    try {
        await axios.post("http://127.0.0.1:8000/registers", userData);
        alert("User ditambahkan!");
        dispatch({type:"ADD_USER", payload:userData});
        window.location.replace('/');
    } catch (error) {
        console.error("Error saat mengirim formulir:", error);
    }
}; 
export const deleteUser = (id) => async (dispatch) => {
    try {
        axios.delete(`http://127.0.0.1:8000/user/${id}`).then(() => {
        dispatch({type:"DELETE_USER", payload:id});
        alert("user deleted!");
        window.location.replace('/');
        });
    } catch (error) {
        console.error("Error saat mengirim formulir:", error);
    }
}; 

export const getIdUser = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/user/${id}`);
        const userData = response.data.user;
        dispatch({type:"GET_USER", payload: userData})
    } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error di sini, misalnya dengan menampilkan pesan error pada UI
    }
}; 

export const editUser = (id,userData) => async (dispatch) => {
    try {
        await axios.put(`http://127.0.0.1:8000/user/${id}`, userData);
        console.log(userData)
        dispatch({ type: "EDIT_USER", payload: userData });
        window.location.replace("/");
        } catch (error) {
        console.error("Error Update:", error);
        }
}; 
