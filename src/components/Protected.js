import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(()=>{
        let isUserloggedIn = false;
        if(!isUserloggedIn){
            navigate('/');
            isUserloggedIn = true;
        } 
    },[])
    return (
        <Component/>
    )
}

export default Protected;