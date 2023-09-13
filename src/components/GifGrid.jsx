import { GifItems } from "./GifItems";
import { useFetchGifs } from "../hooks/useFetchGifs";



// eslint-disable-next-line react/prop-types
export const GifGrid = ({ categoria }) => {

  const { images, isLoading } = useFetchGifs(categoria);


  return (
    <>
      <h3>{categoria}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItems key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
