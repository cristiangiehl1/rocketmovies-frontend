import { Link } from "react-router-dom"

import { Container, Rating } from "./styles";

import star from "../../assets/star.svg";
import starNoFill from "../../assets/star-no-fill.svg";


export function Movie({ data, ...rest }) {
    
    const rating = data.rating

    const starsArray = Array.from({ length: 5 }, (_, index) => {
        return index <= rating ? star : starNoFill;
    })



    return (
        <Container {...rest}>
            <Link to={data.link}> 
                <h2>{data.title}</h2>
                <Rating>
                    {
                    starsArray.map((starImage, index) => (
                            <img key={index} src={starImage} alt="Star" />
                        ))
                    }
                </Rating>
                <p>{data.description}</p>
                {data.tags && (
                    <footer>
                        {data.tags.map(tag => (
                            <span key={tag.id}>
                                {tag.name}
                            </span>
                        ))}
                    </footer>
                )}
            </Link>
        </Container>
    );
}