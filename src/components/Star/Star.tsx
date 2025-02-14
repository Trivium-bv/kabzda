export const Star = (props: any) => {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}