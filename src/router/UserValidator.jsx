import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { usuarioEncontrado } from '../store/portfolio/data/dataSlice';

// Función para simular una llamada a una API
const checkUserExists = async (userId) => {

  // Aquí deberías hacer una llamada a tu API para verificar si el usuario existe
  // Por ejemplo:
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data.exists; // Suponiendo que la API devuelve { exists: true/false }
};

const UserValidator = ({ children }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [isValidUser, setIsValidUser] = useState(null);
  const {usuarioId} = useSelector(state => state.data)

  useEffect(() => {
        const validateUser = async () => {
    //  const userExists = await checkUserExists(userId);
        const userExists = usuarioId === parseInt(userId);
        
        if (userExists){
            dispatch(usuarioEncontrado({usuarioId:userId}))
        }
        
        setIsValidUser(userExists);
    };

    validateUser();
  }, [userId]);

  

  if (isValidUser === null) {
    return <div>Loading...</div>; // O algún tipo de spinner o mensaje de carga
  }

  if (!isValidUser) {
    return <Navigate to="/index" />; // Redirige a una página 404 o similar
  }

  return <>{children}</>; // Renderiza el contenido protegido
};

export default UserValidator;