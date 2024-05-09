import {FiClock} from "@react-icons/all-files/fi/FiClock"

import { Container, Rating } from "./styles";

import star from "../../assets/star.svg";
import starNoFill from "../../assets/star-no-fill.svg";



export function Note({ data, ...rest }) {
   return (
        <Container {...rest}>
            <div className="title">
                <h1>{data.title}</h1>
                <Rating>
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={starNoFill} alt="Nota do filme" />
                </Rating>
            </div>
            <div className="movieInfos">
                <img src={data.user_profile} alt={`foto de ${data.user}`} />
                <span>Por {data.user}</span>
                <span><FiClock /> {data.created_at}</span>
            </div>
            <div className="tags">
                    {
                        data.tags.map(tag => <span key={tag.id}>{tag.name}</span>)
                    }
            </div>
            <p>
                { data.description }
            </p>

    


        </Container>
   )   
}

