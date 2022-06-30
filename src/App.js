import styles from "./App.module.css";
import imageEM from "./images/EM.png";
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
      {
        openModal ?
        <Modal closeModal={closeModal} element={element}/> : null
      }

      <div className={styles.wrapper}>

        <div className={styles.layers}>
          <div className={styles.firstLine}>
            <div className={styles.headWrapper}>
              <div className={styles.head}/>
              <div className={styles.duck}/>
            </div>
            <div onClick={() => showModal("fur")} className={styles.fur}/>
          </div>
        </div>
        <img className={styles.imageEM} src={imageEM} alt={"Ellon Musk"}/>
      </div>
    </div>
  );
}

export default App;
