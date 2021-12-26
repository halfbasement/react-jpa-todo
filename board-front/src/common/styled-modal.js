import styled from "styled-components";

export const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.50);
z-index: 0;
`;

export const ModalForm = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 50rem;
padding: 16px;

background: rgb(0,0,5,0.40);
border-radius: 10px;

text-align: center;
`;
