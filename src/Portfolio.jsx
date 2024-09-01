
import { FormPortfolio } from "./CreatePortfolio/pages/FormPortfolio";
import { FormServices } from "./CreatePortfolio/pages/FormServices";
import { AppRouter } from "./router/AppRouter";

function Portfolio() {
    return (
    <>
        {
            // <AppRouter /> 
            // <FormPortfolio/>
            <FormServices/>
        }
    </>
  );
}

export default Portfolio;
