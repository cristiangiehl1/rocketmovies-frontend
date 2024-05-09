import { Container, Rating } from "./styles";
import star from "../../assets/star.svg";
import starNoFill from "../../assets/star-no-fill.svg";

import { Link } from "react-router-dom"



export function Movie({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Link to={data.link}> 
                <h2>{data.title}</h2>
                <Rating>
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={star} alt="Nota do filme" />
                    <img src={starNoFill} alt="Nota do filme" />
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