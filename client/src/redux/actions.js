export const login = (user) => (dispatch) =>{
    return fetch('http://localhost:3000/auth/login',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
        credentials: "include"
    })
        .then(r=>r.json())
        .then(user=>{
            dispatch(setUser(user));
            return true;
        });
};

export const signUp = (user) => ()=> {
    console.log("singup",user);
    return fetch('http://localhost:3000/auth/signup',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r=>r.json())
        .then(user=>{
            console.log(user);
            return user
        })
        .catch(err=>console.error(err))
};

export function setUser(user){
    return {
        type: "LOGGEDIN",
        user
    };
}