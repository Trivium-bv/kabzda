type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    adress: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

export const ManComponent = ({title, man, ...props}: PropsType) => {
    //const {title, man} = props;
    //const {title, man, ...restProps} = props;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.food}</div>
        </div>
    )
}