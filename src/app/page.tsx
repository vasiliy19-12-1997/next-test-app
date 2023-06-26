import CarList from "./Client/Components/CarList/carList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <CarList />
      </section>
    </main>
  );
}
