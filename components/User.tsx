import styles from "./User.module.css";

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function User({ name, username, email }: Props) {
  return (
    <div className={styles.User}>
      {name} - {username} - {email}
    </div>
  );
}
