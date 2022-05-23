import styled from 'styled-components';

export const DetailsOrderDiv = styled.div`
    width: 60%; 
    height: min-content;
    margin-left: auto;
    margin-right: auto; 
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-top:4em;
    padding-left: 1em;
    padding-right: 1em;
    p {
        font-weight: bold;
        font-size: 18px;
    }
`;

export const InfoOrderDeshboard = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    background-color: #f3b50b;
    border-radius: 4em;
    margin-bottom: 2em;
    color: white;
`;

export const MarkSenddButton = styled.button`
    border-style: none;
    color: white;
    background-color: green;
    border-radius: 4em;
    height: 3em;
    width: 8em;
    padding: 2px;
    font-weight:bold;
    font-size: 16px;
    :hover {
        transform: scale(1.1);
    }

    :disabled {
        :hover {
            transform: scale(1.0);
        }

        background-color: #8a8a8ab8;
        color:#c4c4c4b8;
    }
`;