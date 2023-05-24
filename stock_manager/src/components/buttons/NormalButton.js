import './buttons.css'

export default function NormalButton(prop){
    return(
        <>
            <button className='button'>{prop.prompt}</button>
        </>
    )
}