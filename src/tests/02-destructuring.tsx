type LessonType = {
    title: string
}

type ManType = {
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
}

export const ManComponent = ({title, man}: PropsType) => {
    //const {title, man} = props;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>
    )
}