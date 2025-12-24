import { useFormContext, Controller } from "react-hook-form";
import styles from "../log.module.scss";

const InputController = ({
  name,
  rules,
  type = "text",
  id,
  autoComplete,
  label,
  containerClassName = "",
}) => {
  const { control, formState: { errors } } = useFormContext();
  
  
  return (
    <div className={containerClassName}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            placeholder=" "
            className={`${styles.input} ${
              errors[name] ? styles.inputError : ""
            }`}
            type={type}
            id={id}
            autoComplete={autoComplete}
          />
        )}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {errors[name] && (
        <span className={styles.errorMessage}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export default InputController;