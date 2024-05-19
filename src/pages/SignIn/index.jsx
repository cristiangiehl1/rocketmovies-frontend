import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { FiMail } from "@react-icons/all-files/fi/FiMail"; 
import { FiLock } from "@react-icons/all-files/fi/FiLock"; 

import { Container,  Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"


import { useAuth } from "../../hooks/auth";

export function SignIn() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    function handleSignIn() {
        signIn({email, password});
    }

    function handleNav() {
        navigate("/register")
    }

    return(
        <Container>  
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                
                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    label="E-mail"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    label="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={handleSignIn}/>
                <ButtonText 
                    title="Criar conta" 
                    onClick={handleNav}
                />
            </Form>
            <BackgroundImg />
        </Container>
    )
}