import styles from "../styles/Warning.module.scss";

const message = (value) => {
  switch (value) {
    case 2:
      return "A URL digitada é inválida, não corresponde a uma URL do Youtube!";
    case -1:
      return "Opa! O que foi digitado não é uma URL...";
    default:
      return null;
  }
};

const Warning = (props) => {
  const { validate } = props;
  return (
    validate !== 0 && (
      <section className={styles.warning}>
        <div className={validate === -1 ? styles.red : styles.yellow}>{message(validate)}</div>
      </section>
    )
  );
};

export default Warning;
