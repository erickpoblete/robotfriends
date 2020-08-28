import React from 'react';


const Card = ({ name, id, email}) => {
    return (
        <div className='bg-light-blue dib br4 pa3 ma2 grow shadow-5 bw2 tc'>
            <img alt='Robot' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;