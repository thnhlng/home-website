import styles from "./Fleuron.module.scss";

type Props = {
  className?: string;
};

export function Fleuron({ className }: Props) {
  return (
    <span
      className={className ? `${styles.fleuron} ${className}` : styles.fleuron}
      aria-hidden="true"
    >
      <span className={styles.diamond} />
    </span>
  );
}
