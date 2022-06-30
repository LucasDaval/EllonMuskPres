import styles from "./App.module.css";
import imagePlatypus from "./images/platypus.svg";
import Modal from "./modal/modal";
import {useState} from "react";

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [element, setElement] = useState("head");


  const showModal = (element) => {
    setElement(element);
    setOpenModal(true);

  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Click on a body part to learn more about it</h1>
      {
        openModal ?
        <Modal closeModal={closeModal} element={element}/> : null
      }

      <div className={styles.wrapper}>

        <div className={styles.layers}>
          <div className={styles.firstLine}>
            <div className={styles.headWrapper}>
              <div onClick={() => showModal("head")} className={styles.head}/>
              <div onClick={() => showModal("duck")} className={styles.duck}/>
            </div>
            <div onClick={() => showModal("fur")} className={styles.fur}/>
            <div onClick={() => showModal("tail")} className={styles.tail}/>
          </div>

          <div className={styles.secondLine}>
            <div onClick={() => showModal("feet")} className={styles.feet}/>
            <div onClick={() => showModal("spur")} className={styles.spur}/>
          </div>
        </div>
        <img className={styles.imagePlatypus} src={imagePlatypus} alt={"platypus"}/>
      </div>
    </div>
  );
}

export default App;
