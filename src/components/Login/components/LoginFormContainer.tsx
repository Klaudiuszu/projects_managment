import { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from 'react-router-dom';

const LoginFormContainer = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [isValid, setIsValid] = useState({
        name: true,
        password: true,
    });

    const navigate = useNavigate();

    const handleNameValue = (e:any) => {
        const newValue = e.target.value;
        const isNameValid = /^[a-zA-Z]+$/.test(newValue);

        setIsValid({...isValid, name: isNameValid});

        setName(newValue);
    }

    const handlePassValue = (e:any) => {
        const newValue = e.target.value;
        const isPassValid = /[A-Z]/.test(newValue) && /[0-9]/.test(newValue);

        setIsValid({...isValid, password: isPassValid});

        setPassword(newValue);
    }

    const handleSubmit = () => {
        isValid.name && console.log("send login data", {name, password})

        
        if(isValid.name) {
            console.log("send login data:", { name, password });
            navigate("/Home");
        }
    }
    
    return (
        <>
            <LoginForm
                passValue={password}
                isValid={isValid}
                nameValue={name}
                handleNameValue={handleNameValue}
                handlePassValue={handlePassValue}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default LoginFormContainer;