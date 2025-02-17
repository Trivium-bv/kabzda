import {FilterType, MoneyType} from "../Money/Money.tsx";

type PropsType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

export const NewComponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((money, index) => {
                    return (
                        <li key={index}>
                            <span>{money.banknots}</span>
                            <span>{money.value}</span>
                            <span>{money.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("rubles")}>rubles</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </>
    )
}