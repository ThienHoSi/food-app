import styles from './FormField.module.scss';

function LoginFormField(props) {
  const { name, label, icon, placeholder, errors, register } = props;

  return (
    <div className={styles.form}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.form__wrapper}>
        {icon}
        <input
          {...register(name)}
          type={name}
          id={label}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <span className={styles.form__error}>{errors[name]?.message}</span>
    </div>
  );
}

export default LoginFormField;
