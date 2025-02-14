import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

const App = () => {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP Component"}/>
            <PageTitle title={"My Friends"}/>
            <div>Article 1</div>
            <Rating value={0}/>
            <Accordion title={"Films"}/>
            <Accordion title={"Games"}/>
            <div>Article 2</div>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}
const PageTitle = (props: any) => {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App
