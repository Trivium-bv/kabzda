import {useState} from 'react';
import {Button} from './Button.tsx';
import {Input} from './Input.tsx';

export const MainInput2 = () => {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const [title, setTitle] = useState('');
    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}