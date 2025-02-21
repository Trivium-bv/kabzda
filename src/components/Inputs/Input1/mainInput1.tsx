import {useState} from 'react';
import {InputBtn} from './InputBtn.tsx';



export const MainInput1 = () => {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    return (
        <div>

            <InputBtn addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}