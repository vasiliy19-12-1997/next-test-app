import styles from "./page.module.scss";
import MyInput from "./../Components/UI/MyInput/myInput";
import AddForm from "@/Components/AddForm/addForm";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <AddForm />
      </section>
    </main>
  );
}
