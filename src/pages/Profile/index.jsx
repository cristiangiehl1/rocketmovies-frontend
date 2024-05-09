import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiLock } from "@react-icons/all-files/fi/FiLock";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiCamera } from "@react-icons/all-files/fi/FiCamera";

import { Container, Form, Avatar } from "./styles";

import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
    return (
        <Container>
            <header>
               <ButtonText icon={FiArrowLeft} title="Voltar" link="/"/>
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/cristiangiehl1.png" 
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                   
                    <input
                        id="avatar"
                        type="file"
                    />                    
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                
                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                /> 

                <Button title="Salvar"/>               

            </Form>
        </Container>
    )
}