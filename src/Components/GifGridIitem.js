

import React from 'react';
 const GifGridItem = ({title,url})=>{

    return(
        <div className='card animate__bounce'>
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
        
    );

}
export default GifGridItem;