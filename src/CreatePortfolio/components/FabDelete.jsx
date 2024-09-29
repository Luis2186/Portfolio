
export const FabDelete = ({hasEventSelected=false, onDeleteService}) => {

    const handleClickDelete = ()=>{
        onDeleteService();
    }

  return (
    <button 
        className="btnDeleteIcon"
        onClick={handleClickDelete}
        style={{
            display: hasEventSelected ? '' : 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
