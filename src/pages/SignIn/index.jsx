import { FiMail } from "@react-icons/all-files/fi/FiMail"; 
import { FiLock } from "@react-icons/all-files/fi/FiLock"; 

import { Container,  Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignIn() {
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
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    label="password"
                    id="password"
                />
                <Button title="Entrar"/>
                <ButtonText title="Criar conta" link="/register"/>
            </Form>
            <BackgroundImg />
        </Container>
    )
}