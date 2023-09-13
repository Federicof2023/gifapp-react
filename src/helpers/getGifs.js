

export const getGifs = async(categoria) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jrgiUtaaysX9SKId5KcpbGKKYPXfqpFd&q=${categoria}&limit=30`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url

    }));
   
 
   
    return gifs;
  };
  