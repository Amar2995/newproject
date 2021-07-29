import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'

function Login() {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function ValidateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div className="container">
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <h1 className="text-center">Login</h1>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                           autoFocus
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group size="lg" controlId="password">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                           autoFocus
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="m" className="btn" type="submit" disabled={!ValidateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
