import styles from "./page.module.scss";
import MyInput from "./../Components/UI/MyInput/myInput";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <MyInput />
      </section>
    </main>
  );
}
