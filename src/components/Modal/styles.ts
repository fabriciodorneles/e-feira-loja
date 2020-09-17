import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    right: auto;
    bottom: auto;
    border-radius: 8px;
    background: #f0f0f5;
    color: #000000;
    width: 450px;
    border: none;
    @media (max-width: 750px) {
        width: 450px;
    }
    @media (max-width: 500px) {
        width: 330px;
        padding: 8px;
    }
`;
