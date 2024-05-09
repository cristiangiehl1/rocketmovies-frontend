import { FiPlus } from "@react-icons/all-files/fi/FiPlus"; 



import { Container, PageTitle, Content, Linkk } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";


export function Home() {
    return (
        <Container>
            <Header />
            <PageTitle>
                <h1>Meus filmes</h1>
                <Linkk to="/new"> 
                    <FiPlus /> 
                    Adicionar filme
                </Linkk>
            </PageTitle>

            <Content>
            <Movie data={{
                link: "/preview/1",
                title: 'Interestelar',
                description: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar. As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar. As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar. ',
                tags: [
                    {id: '1', name: 'Ficção Cientifíca'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'}
                ]
            }}/>  
            
            <Movie data={{
                link: "/preview/1",
                title: 'Interestelar',
                description: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
                tags: [
                    {id: '1', name: 'Ficção Cientifíca'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'}
                ]
            }}/>    

            <Movie data={{
                link: "/preview/1",
                title: 'Interestelar',
                description: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.',
                tags: [
                    {id: '1', name: 'Ficção Cientifíca'},
                    {id: '2', name: 'Drama'},
                    {id: '3', name: 'Família'}
                ]
            }}/>                                         
            </Content>                     
        </Container>
    )
}