import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormField from './FormField';
import styles from './styles.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'This is not valid email format'
    ),
  password: yup
    .string()
    .required('This field is required')
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      'Password should be 8 chars minimum and at least 1 number'
    ),
});

function LoginForm() {
  const handleClosedFeature = () => {
    toast.info(
      'This feature is currently closed. Try login with Google or Facebook',
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
      }
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = () => {
    reset({
      email: '',
      password: '',
    });

    handleClosedFeature();
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
      <ToastContainer />
      <FormField
        name="email"
        label="Email address"
        placeholder="Your email"
        register={register}
        errors={errors}
      />

      <FormField
        name="password"
        label="Password"
        placeholder="Your password"
        register={register}
        errors={errors}
      />

      <div className={styles.form__remember}>
        <input type="checkbox" id="Remember" />
        <label htmlFor="Remember" className={styles.form__remember__label}>
          Remember Your Password
        </label>
      </div>

      <button className={styles.form__btn} type="submit">
        log in
      </button>
    </form>
  );
}

export default LoginForm;
