type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType) => {

    const oClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={oClickHandler}>{props.name}</button>
        </div>
    )
}