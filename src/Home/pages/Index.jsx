import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usuarioEncontrado } from '../../store/portfolio/data/dataSlice';

export const Index = () => {
    const [dimensiones, setDimensiones] = useState({ width: 0, height: 0 });
    const navigate = useNavigate();
    const {usuarioLog} = useSelector(state => state.data)
    const dispatch = useDispatch();
    const contenedorRef = useRef(null);
    const solapaRef = useRef(null);
    const btnRef = useRef(null);
    
    const ajustarTriangulo = () => {

        if (contenedorRef.current && solapaRef.current && btnRef.current) {
            const ancho = contenedorRef.current.offsetWidth;
            const altura = contenedorRef.current.offsetHeight;
        
            solapaRef.current.style.borderLeft = `${ancho / 2}px solid transparent`;
            solapaRef.current.style.borderRight = `${ancho / 2}px solid transparent`;
            solapaRef.current.style.borderTop = `${altura / 2}px solid var(--color-secondary)`; // Ajusta la proporción del triángulo según el ancho
            btnRef.current.style.top = `${(altura / 2) -45}px`;
        
            setDimensiones({ width: ancho, height: altura });
        }
    };

    useEffect(() => {
        // Ajusta el triángulo al montar el componente y al redimensionar
        ajustarTriangulo();
        window.addEventListener('resize', ajustarTriangulo);

        // Limpia el evento de redimensionamiento al desmontar
        return () => {
            window.removeEventListener('resize', ajustarTriangulo);
        };
    }, []);

    const HandleShowCv = () => {
        const usuario= {usuarioId:1}       
        navigate(`/user/${usuario.usuarioId}`);
    }

  return (
    <div className="index__page">
        <div className="sobre" ref={contenedorRef}>
           <div className="sobre__solapa" id="triangulo" ref={solapaRef}></div>
           <button className='sobre__btn' ref={btnRef} onClick={HandleShowCv}> Entrar </button>
           <input
              type="text"
              className="form__input sobre__input"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              required
              placeholder="Ingrese su nombre"
            />
            
            <span className='sobre__register'> No tienes un cv creado? <a href="#">Crea uno!</a> </span>
           
        </div>
    </div>

  )
}
