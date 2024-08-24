import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Index } from "../Home/pages/Index";
import { PortafolioRouter } from "./PortafolioRouter";
import UserValidator from "./UserValidator";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/user/:userId"
         element={
            <UserValidator>
            <div className="layout"> <PortafolioRouter /> </div>
          </UserValidator> 
          }>
        </Route>   

        <Route
          path="/index/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="" element={<Index
                 />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="layout"> <PortafolioRouter /> </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
