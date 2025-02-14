const App = () => {
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    )
}
const AppTitle = () => {
    console.log("AppTitle rendering")
    return <>This is APP Component</>
}

const Rating = () => {
    console.log("Rating rendering")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
const Accordion = () => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

const Star = () => {
    console.log("Star rendering")
    return (
        <div>
            <div>star</div>
        </div>
    )
}

const AccordionTitle = () => {
    console.log("AccordionTitle rendering")
    return (
        <h3> Menu </h3>
    )
}

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App
