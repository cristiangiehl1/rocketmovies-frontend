// icons
import {FiArrowLeft} from "@react-icons/all-files/fi/FiArrowLeft"

// modules
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import { api } from "../../services/api"

// styles
import { Container } from "./styles";

// components
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Note } from "../../components/Note"


export function Preview() {

    const [data, setData] = useState(null);
   
    const params = useParams();

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }
    

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
            // console.log(response);
        }

        fetchMovie();

    }, [])


    return(
        <Container>
            <Header searchChange={() => {}}/>
            <ButtonText
                    title="Voltar"
                    className="teste"
                    icon={FiArrowLeft}
                    onClick={handleBack}
            />
            {     
                data &&       
                <main>
                    <Note 
                        data={data}
                    />  
                </main>
            }
        </Container>
    )
}