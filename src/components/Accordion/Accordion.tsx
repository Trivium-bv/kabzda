type AccordionPropsType = {
    title: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {/*{props.collapsed === false && <AccordionBody/>}*/}
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

const AccordionBody = () => {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}