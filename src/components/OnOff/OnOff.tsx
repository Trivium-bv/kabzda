import './onOff.css'

type ActivateType = {
    activate: boolean
}

export const OnOff = (props: ActivateType) => {
    return (
        <div className='div'>
            {props.activate ? <span className="onBtnActive">on</span> : <span className="onBtnNotActive">on</span>}
            {!props.activate ? <span className="offBtnActive">off</span> : <span className="offBtnNotActive">off</span>}
            {props.activate ? <span className='onIndicatorActive'></span> : <span className='offIndicator'></span>}
        </div>
    )
}