import styles from "./Input.module.scss";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <>
      <input className={styles.input} placeholder={placeholder} />
    </>
  );
};

export default Input;
