

// user added acitons
export const userAdded = (payload) => {

    let data = [];
    if(localStorage.getItem('users')){
        data = JSON.parse(localStorage.getItem('users'))
    }

    data.push(payload);
    localStorage.setItem('users', JSON.stringify(data));

    return ({
        type : 'USER_ADDED',
        payload : data
    });
}


// user remove acitons
export const userRemove = (payload) => {
    
    localStorage.setItem('users', JSON.stringify(payload));

    return ({
        type : 'USER_REMOVE',
        payload : payload
    });
}


// user remove acitons
export const userUpdated = (payload) => {
    
    localStorage.setItem('users', JSON.stringify(payload));

    return ({
        type : 'USER_UPDATED',
        payload : payload
    });
}