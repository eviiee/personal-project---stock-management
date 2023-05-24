import NormalButton from "../buttons/NormalButton"
import './card.css'

export default function ProductCard(prop){

    const imgSrc = prop.data['img']
    const pname = prop.data['pname']
    const summary = prop.data['summary']

    return <>
        <div className='productcard'>
            <img className='productcard_img' src={imgSrc}></img>
            <div className='productcard_info'>
                <div className='productcard_info_name'>{pname}</div>
                <div className='productcard_info_summary'>{summary}</div>
            </div>
        </div>
    </>
}