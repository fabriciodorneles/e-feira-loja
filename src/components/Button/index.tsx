import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<InputProps> = ({ children, ...props }) => (
    <Container type="button" {...props}>
        {children}
    </Container>
);

export default Button;
