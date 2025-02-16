// import {Accordion} from "./components/Accordion/Accordion.tsx";
// import {Rating} from "./components/Rating/Rating.tsx";
// import {Cars} from "./components/Cars/Cars.tsx";
import {Button} from "./components/Button/Button.tsx";

const App = () => {

    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("Im stupped button")
    }
    return (
        <div>
            {/*<PageTitle title={"This is APP Component"}/>*/}
            {/*<PageTitle title={"My Friends"}/>*/}
            {/*<div>Article 1</div>*/}
            {/*<Rating value={0}/>*/}
            {/*<Accordion title={"Films"} collapsed={true}/>*/}
            {/*<Accordion title={"Games"} collapsed={false}/>*/}
            {/*<div>Article 2</div>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Cars />*/}
            <Button name={"Button 1"} callBack={() => Button1Foo("Im Vasya", 21, "Minsk")}/>
            <Button name={"Button 2"} callBack={() => Button2Foo("Im Ivan")}/>
            <Button name={"Button 3"} callBack={Button3Foo}/>
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }
//
// const PageTitle = (props: PageTitlePropsType) => {
//     console.log("PageTitle rendering")
//     return <h1>{props.title}</h1>
// }

export default App
