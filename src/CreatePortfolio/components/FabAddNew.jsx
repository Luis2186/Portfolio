import { addHours } from "date-fns";
import { setActiveService } from "../../store/portfolio/data/dataSlice";
import { useDispatch } from "react-redux";

export const FabAddNew = ({setSelectedIconClassName}) => {
    const dispatch= useDispatch();

    const handleClickNew = ()=>{
        dispatch(setActiveService({
            id: 0,
            title: "",
            description:"",
            iconClassName: "",
        }))
        setSelectedIconClassName("");
    }

  return (
    <button 
    type="button"
        className="btnAddIcon"
        onClick={handleClickNew}
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
