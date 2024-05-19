// modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// api
import { api } from "../../services/api";

// Icons
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"; 
import { FiMail } from "@react-icons/all-files/fi/FiMail"; 
import { FiLock } from "@react-icons/all-files/fi/FiLock"; 
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft"; 

// Styles
import { Container,  Form, BackgroundImg } from "./styles";

// Components
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password || !passwordConfirm) {
           return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password, passwordConfirm })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar.");
                }
            })       
    }

    function handleBack() {
        navigate("/")
    }




    return(
        <Container>  
            <BackgroundImg />
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                
                <h2>Faça seu login</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={CgProfile}
                    label="Name"
                    id="name"
                    onChange={e => setName(e.target.value)}
                />
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
                <Input
                    placeholder="Confirme a sua senha"
                    type="password"
                    icon={FiLock}
                    label="passwordConfirm"
                    id="passwordConfirm"
                    onChange={e => setPasswordConfirm(e.target.value)}
                />
                <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                />
                <ButtonText 
                    title="Voltar para o login" 
                    icon={FiArrowLeft} 
                    onClick={handleBack}
                />
            </Form>  
        </Container>
    )
}