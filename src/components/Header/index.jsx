import { Container, Profile } from "./styles";

import { Link } from "react-router-dom"

import { Input } from "../Input";

export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>

            <Input 
                placeholder="Pesquisar pelo título" 
                label="Pesquisar pelo título" 
                id="search" 
            />

            <Profile>
                <div>
                    <p><strong>Cristian Giehl</strong></p>
                    <button>Sair</button>
                </div>
                <Link to="/profile"><img src="https://github.com/cristiangiehl1.png" alt="Foto do usuário" /></Link>
            </Profile>

        </Container>
    );
}