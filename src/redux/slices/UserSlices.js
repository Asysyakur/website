import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [{name:"",email:""}],
    },
    reducers: {
        addUser:(state, action)=>{
            state.data.push(action.payload)
            console.log(action.payload)
        },
    },
});

export const {addUser} = userSlice.actions;

export const addUserAsync = (userData) => async (dispatch) => {
    try {
        await axios.post("http://127.0.0.1:8000/registers", userData);
        alert("User ditambahkan!");
        window.location.replace('/');
        dispatch(addUser(userData));

        // Pastikan alert ini tidak diblokir oleh browser
    } catch (error) {
        console.error("Error saat mengirim formulir:", error);
        // Handle error di sini, misalnya dengan menampilkan pesan error pada UI
    }
};
export default userSlice.reducer;
