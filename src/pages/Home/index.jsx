// icons
import { FiPlus } from "@react-icons/all-files/fi/FiPlus"; 

// 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

// styles
import { Container, PageTitle, Content, Linkk } from "./styles";

// components
import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";


export function Home() {

    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([])

    const navigate = useNavigate();

    function handleDetails(id) {
            navigate(`/preview/${id}`)
        }


    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/notes?title=${searchMovie}`);
            
            setMovies(response.data.notesWithTags)       
        }
        fetchMovies();

    }, [searchMovie]);

    return (
        <Container>
            <Header  
                searchChange={setSearchMovie}              
            />
            <PageTitle>
                <h1>Meus filmes</h1>
                <Linkk to="/new"> 
                    <FiPlus /> 
                    Adicionar filme
                </Linkk>
            </PageTitle>

            <Content>
            {
                movies.map(movie => (                
                <Movie 
                    key={String(movie.id)}
                    data={movie}  
                    onClick={() => handleDetails(movie.id)}
                />
                ))
            }                                     
            </Content>                     
        </Container>
    )
}