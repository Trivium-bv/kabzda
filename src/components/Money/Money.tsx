import {useState} from "react";
import {NewComponent} from "../New_component/NewComponent.tsx";

export type FilterType = 'all' | 'rubles' | 'dollar'
export type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const Money = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money
    if (filter === 'rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent onClickFilterHandler={onClickFilterHandler} money={money} currentMoney={currentMoney}/>
        </>
    )

}