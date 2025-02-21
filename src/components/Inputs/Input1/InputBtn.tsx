import {ChangeEvent, useState} from 'react';

type addMessageType = {
    addMessage: (title: string) => void
}

export const InputBtn = (props: addMessageType) => {
    const [title,setTitle] = useState('');

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }
    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}