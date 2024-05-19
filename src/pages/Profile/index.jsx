// modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg";

import { api } from "../../services/api"

// icons
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiLock } from "@react-icons/all-files/fi/FiLock";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { FiCamera } from "@react-icons/all-files/fi/FiCamera";

// styles
import { Container, Form, Avatar } from "./styles";

// components
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    const navigate = useNavigate();

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }
        
        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile });
        handleBack();
        
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <header>
               <ButtonText 
                    icon={FiArrowLeft} 
                    title="Voltar"
                    onClick={handleBack} 
                />
            </header>
            <Form>
                <Avatar>
                    <img 
                        src={avatar} 
                        alt={name}
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                   
                    <input
                        id="avatar"
                        type="file"
                        onChange={handleChangeAvatar}
                    />                    
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}                    
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}                   
                />
                
                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}                    

                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}                   
                /> 

                <Button title="Salvar" onClick={handleUpdate}/>               

            </Form>
        </Container>
    )
}