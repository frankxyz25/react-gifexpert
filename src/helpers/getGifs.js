
    export const getGifs = async (category)=>{
        const url=`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI (category)}&api_key=RJEPnelZuS0ilu5fX0KGFj7P4Cue3d5O`
        const resp = await fetch(url);
        const {data} = await resp.json();

         const gifs = data.map(
             arrayImg =>{
               return {
                id:arrayImg.id,
                title:arrayImg.title,
                url:arrayImg.images?.downsized.url 
              }
         }
       );

    return gifs;
    }