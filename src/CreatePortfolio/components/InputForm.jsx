export const InputForm = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText 
}) => {
  return (
    <div className="form__group">
      <input
        type={type}
        className="form__input"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
      {
        error &&  <span className="form__error"> {helperText} </span>
      }
     
    </div>
  );
};
