import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {
  const { usuarioLog } = useSelector(state => state.data);

  return !usuarioLog ? children : <Navigate to={"/home"} />;
};
