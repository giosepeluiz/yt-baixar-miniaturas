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

export const Warning = (props) => {
  return (
    props.validate !== 0 && (
      <section className={styles.warning}>
        <div className={(props.validate === -1 ? styles.red : styles.yellow)}>
          {message(props.validate)}
        </div>
      </section>
    )
  );
};
