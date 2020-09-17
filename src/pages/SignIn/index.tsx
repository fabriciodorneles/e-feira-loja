import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <Link to="/">
                <img src={logoImg} alt="EFeira" />
            </Link>
            <form>
                <h1>Login</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button type="submit">Entrar</Button>
                <a href="forgot"> Esqueci minha senha</a>
            </form>

            <a href="signup">
                <FiLogIn />
                Criar Conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
