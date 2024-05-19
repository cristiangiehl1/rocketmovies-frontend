// icons
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft"; 

//
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

// styles
import { Container, Form } from "./style";

// components
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";


export function CreateMovie() {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");


    const ratingNumber = parseFloat(rating)

     const navigate = useNavigate();

    function handleAddTags() {
        if(newTag === "") {
            return alert("Não é possível adicionar marcadores vazios.")
        }

        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveLink(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewMovieNote() {
        if(!title) {
            return alert("Digite o título do filme.")
        }
        
        if(!rating || isNaN(ratingNumber)) {
            return alert("Digite a pontuação do filme.")
        }

        if(ratingNumber < 0 || ratingNumber > 5) {
            return alert("A pontuação deve ser um número entre 0 e 5.")
        }
        
        if(newTag) {
            return alert("Você deixou uma tag no campo para adicionar, mas não adicionou")
        }

        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        });
        
        alert("Filme criado com sucesso.")

        handleBack();    
    }

    async function handleRemove() {
        if(!title) {
            return alert("Digite o nome do filme que deseja excluir.")
        }        

        const confirm = window.confirm("Deseja realmente excluir o filme?")

        if(confirm) {
            const response = await api.get(`/notes?title=${title}`);

            if (response.data.notesWithTags.length === 0) {
                setTitle("");
                return alert("Você não possui esse filme cadastrado no seu banco de dados.")
            }

            const id = response.data.notesWithTags[0].id

            await api.delete(`/notes/${id}`)     
            handleBack();             
        }
    }

    function handleBack() {
        navigate(-1);
    }

    
    return(
        <Container>
            <Header searchChange={() => {}}/>
            <main>
                <Form>
                    <ButtonText 
                        title="Voltar" 
                        icon={FiArrowLeft} 
                        onClick={handleBack}
                    />

                    <h1>Novo filme</h1>

                    <div>
                        <Input
                            placeholder="Título"
                            type="text"
                            label="Título"
                            id="title"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            type="text"
                            label="Sua nota (de 0 a 5)"
                            id="rating"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <h2>Marcadores</h2>

                    <div className="tags">
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                key={String(index)} 
                                value={tag}
                                onClick={() => handleRemoveLink(tag)}
                            />   
                            ))
                        }
                        
                        <NoteItem 
                            isNew 
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTags}
                        />                           
                    </div>
                    <div>
                        <Button 
                            $isDelete 
                            title="Excluir filme"
                            onClick={handleRemove}
                        />
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewMovieNote}
                        />
                    </div>
         
                </Form>
            </main>

        </Container>
    )
}