export const Lesson_callback = () => {
    const onNameChanged = () => {
        console.log('name changed');
    }
    const focusLostHandler = () => {
        console.log('focus lost');
    }

    const deleteUser = () => {

        alert('user have been deleted');
    }

    const saveUser = () => {
        alert('user has been saved');
    }
    return <div>
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}>hi</textarea>
        </div>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>

}