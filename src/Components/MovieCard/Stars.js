import {AiTwotoneStar} from 'react-icons/ai'

const Stars = (props) => {

    return (
        <div className='movie-card-stars'>
            <AiTwotoneStar className='movie-card-rating-icon' size={30}/>
            <h3 className='movie-card-rating'>{props.stars}</h3>
            
            
        </div>
    )
}

export default Stars