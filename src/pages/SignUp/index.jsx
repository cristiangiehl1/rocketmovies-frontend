import { CgProfile } from "@react-icons/all-files/cg/CgProfile"; 
import { FiMail } from "@react-icons/all-files/fi/FiMail"; 
import { FiLock } from "@react-icons/all-files/fi/FiLock"; 
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft"; 

import { Container,  Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
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
                />
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
                <Button title="Cadastrar"/>
                <ButtonText title="Voltar para o login" icon={FiArrowLeft} link="/"/>
            </Form>  
        </Container>
    )
}