import { FiSearch } from "@react-icons/all-files/fi/FiSearch"

// modules
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// variables/functions
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

// styles
import { Container, Profile } from "./styles";

// components



export function Header({ searchChange }) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const[search, setSearch] = useState("");
    const[searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();


    async function handleSearchChange(event) {
        const value = event.target.value
        setSearch(value)
        searchChange(value);    
    }

    useEffect(() => {
        async function fetchSearch() {

            if(!search) {
                return
            }
        
            const response = await api.get(`/notes?title=${search}`);

            if(response.data.notesWithTags.length === 0 && search.length > 5) {
                searchChange("") 
                setSearch("")
                return alert("Esse título não está cadastrado nas suas notas.")
            }
            setSearchInput(response.data.notesWithTags[0].id)  

            // console.log("chamando o useEffect");
            // console.log("Valor do input => " + search);
            // console.log(setSearchInput);
            // console.log(response.data.notesWithTags);      
            // console.log("Resultado do título da 1ª posição do array => " + response.data.notesWithTags[0].title);             
            // console.log("ID do título da 1ª posição do array => " + response.data.notesWithTags[0].id);
            // console.log("Tamanho do array => " + response.data.notesWithTags.length);                             
        }
        fetchSearch();

    }, [search])

    async function handleSearchButtonClick() {
        if(!search) {
            return alert("Digite um título válido para poder pesquisar.")
        }
        navigate(`/preview/${searchInput}`)
        window.location.reload();                                 
    }

    

    return (
        <Container>
            <h2>RocketMovies</h2>

            <div className="searchBar">
                <input
                    placeholder="Pesquisar pelo título"
                    label="Pesquisar pelo título"
                    id="search"
                    value={search}
                    onChange={handleSearchChange}
                />
                <button type="button" onClick={handleSearchButtonClick}><FiSearch /></button>
            </div>

            <Profile>
                <div>
                    <p><strong>{user.name}</strong></p>
                    <button onClick={signOut}>Sair</button>
                </div>
                <Link to="/profile"><img src={avatarUrl} alt={user.name} /></Link>
            </Profile>

        </Container>
    );
}