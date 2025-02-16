type TopCarType = {
    manufacturer: string,
    model: string,
    key?: number
}

export const Cars = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
    <table>
        <tr>
            <th>Manufacturer</th>
            <th>Model</th>
        </tr>
        {topCars.map((topCar: TopCarType) => {
            return (
                <tr key={Object.keys(topCar)}>
                    <td>{topCar.manufacturer}</td>
                    <td>{topCar.model}</td>
                </tr>
            )
        })}
         </table>
    )
}