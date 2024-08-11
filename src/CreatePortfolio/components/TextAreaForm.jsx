

export const TextAreaForm = ({
    name,value,onChange,required,placeholder,error,helperText
}) => {
  return (
    <div className="form__group form__group--textarea">
        <textarea
        className="form__input form__input--textarea"
        name={name}
        value={value}
        onChange={onChange}
        required ={required}
        placeholder={placeholder}
        ></textarea>
        <label htmlFor="message" className="form__label">
            Presentación
        </label>
        {
        (error) && <span className="form__error"> {helperText} </span>
        }    
    </div>
  )
}
