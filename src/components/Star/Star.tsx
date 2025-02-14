type StarPropType = {
    selected: boolean
}

export const Star = (props: StarPropType) => {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}