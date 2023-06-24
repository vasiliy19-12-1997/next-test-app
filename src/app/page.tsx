import CarForm from "@/app/Client/Components/CarForm/carForm";
import styles from "./page.module.scss";
import CarList from "./Client/Components/CarList/carList";
import { Provider } from "react-redux";
import { store } from "./Client/Store/store";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <CarList />
      </section>
    </main>
  );
}
