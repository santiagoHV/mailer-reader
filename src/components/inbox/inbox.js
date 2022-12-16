import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import InboxItem from "./inbox-item";
import {useNavigate} from "react-router-dom";

const Inbox = ({loginData, setLoginData}) => {
    const navigate = useNavigate();

    const [mails, setMails] = React.useState([]);

    useEffect(() => {
        const getMails = async () => {
            const response = await fetch('http://localhost:5000/pop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(loginData)
                    });
            const data = await response.json();

            if(data.message === 'error'){
                alert('error');
                navigate('/');
            }else{
                setMails(data);
            }
        }

        getMails();
    }, []);

    return (
        <Container>
            <h1>Bandeja de entrada</h1>
            {mails.map((mail) => (
                <InboxItem data={mail} />
            ))}
        </Container>
        )
}

export default Inbox;