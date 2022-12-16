import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import InboxItem from "./inbox-item";

const MAILS = [
    {
        id: 1,
        from: 'uwu@com',
        to: 'owo@com',
        subject: 'uwu',
        body: 'owo',
        date: '2021-10-10',
    },
    {
        id: 2,
        from: 'uwu@com',
        to: 'owo@com',
        subject: 'uwu',
        body: 'owo',
        date: '2021-10-10',
    },
    {
        id: 3,
        from: 'uwu@com',
        to: 'owo@com',
        subject: 'uwu',
        body: 'owo',
        date: '2021-10-10',

    },
]

const Inbox = ({loginData, setLoginData}) => {

    const [mails, setMails] = React.useState(MAILS);

    useEffect(() => {
        const getMails = async () => {
            const response = await fetch('http://localhost:5000/pop');
            const data = await response.json();
            setMails(data);
        }

        getMails();
    }, []);

    return (
        <Container>
            <h1>Bandeja de entrada</h1>
            <InboxItem data={MAILS[0]} />
            <InboxItem data={MAILS[0]} />
            <InboxItem data={MAILS[0]} />
        </Container>
        )
}

export default Inbox;