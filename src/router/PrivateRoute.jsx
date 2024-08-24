import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
const { usuarioLog } = useSelector(state => state.data);

  const { pathname, search } = useLocation();
//   const lastPath = pathname + search;

//   localStorage.setItem("lastPath", lastPath);

  return usuarioLog ? children : <Navigate to={"/index"} />;
};
