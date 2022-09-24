

// initial state
export const initialState = {
    user : JSON.parse(localStorage.getItem('users')) || [],
    loading : false
}