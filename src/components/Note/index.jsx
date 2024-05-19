import {FiClock} from "@react-icons/all-files/fi/FiClock"

import { Container, Rating } from "./styles";

import star from "../../assets/star.svg";
import starNoFill from "../../assets/star-no-fill.svg";

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { api } from "../../services/api";


export function Note({ data, ...rest }) {

    const rating = data.rating

    const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder
    

    const starsArray = Array.from({ length: 5 }, (_, index) => {
        return index <= rating ? star : starNoFill;
    })



   return (
        <Container {...rest}>
            <div className="title">
                <h1>{data.title}</h1>
                <Rating>
                    {
                        starsArray.map((starImage, index) => (
                                <img key={index} src={starImage} alt="Star" />
                            ))
                    }
                </Rating>
            </div>
            <div className="movieInfos">
                <img src={avatarUrl} alt={`foto de ${data.name}`} />
                <span>Por {data.name}</span>
                <span><FiClock /> {data.create_at}</span>
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

