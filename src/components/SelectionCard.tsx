/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom'

export type selectionCardTypes = {
    image: string,
    name: string,
    element: string,
}

const SelectionCard = ({ image, name, element}: selectionCardTypes) => {
    const card = css`
        margin: 10px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        border: 1px solid #E5E5E5;
        background-color: white;
        text-decoration: none;
        color: black;
        &:hover {
            cursor: pointer;
            box-shadow: 1px 1px 5px grey;
            transform: scale(1.01);
            -webkit-transition:  box-shadow .1s ease-in;
        }   
    `

    return (
        <Link css={card} to={`/pokemon/${name}`}>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{element}</p>
        </Link>
    )
}

export default SelectionCard;