import React, { useId } from "react";
import "./Input.css";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    className = "",
    error,
    icon,
    required = false,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}

        <input
          id={id}
          ref={ref}
          type={type}
          className={`input-field ${icon ? "with-icon" : ""} ${
            error ? "input-error" : ""
          } ${className}`}
          {...props}
        />
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
});

export default Input;
