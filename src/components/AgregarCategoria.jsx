import { useState } from "react";


// eslint-disable-next-line react/prop-types
export const AgregarCategoria = ({ onNuevaCategoria }) => {

  const [inputValue, setInputValue] = useState('');



  const handleInputChange = ({ target }) => {
         setInputValue(target.value);
  };




  const onSubmit = (e) => {
    e.preventDefault();
    // valido que el usuario ingrese minimo 2 caracteres //
    if (inputValue.trim().length <= 1) return;

    onNuevaCategoria(inputValue.trim())
    setInputValue('')
    
  };

  return (

    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Busca tus gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
