import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { GifGrid } from "./components/GifGrid";






export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(['Homer']);

  const onAgregarCategoria = (nuevaCategoria) => {
    if (categorias.includes(nuevaCategoria)) return;

    setCategorias([nuevaCategoria, ...categorias]);
  };

  return (
    <>
      <h1 className="title-class"> GifApp </h1>

      <AgregarCategoria
        onNuevaCategoria={(value) => onAgregarCategoria(value)}
      />

      {categorias.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};

export default GifExpertApp;
