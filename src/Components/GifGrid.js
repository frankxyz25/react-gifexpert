import React, { } from 'react'

import GifGridItem from './GifGridIitem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

   const {data:images, loading}=useFetchGifs(category);
   
 return (
      <>
      <h3 className='animate__flash'>{category}</h3>
      <p>{loading && 'Cargando'}</p>
      <div className='card-grid'>
        
          <ol> 
            {
              images.map(
                (img) =>(
                   <GifGridItem
                  key={img.id}
                  {...img}
                  />)
              )
            }
          </ol>
        </div>
      </>
    
     )
}
