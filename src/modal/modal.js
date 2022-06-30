import styles from "./modal.module.css";
import {useEffect, useState} from "react";


const Modal = (props) => {

  const [text, setText] = useState("head");
  const [title, setTitle] = useState("head");

  useEffect(() => {
    if (props.element === "head") {
      setText("Platypus have a really cute head, with very small eyes, for an animal that spend most of his time under the water, he can’t swim with the eyes open, one of the reason why he use electrolocation to find his prey.");
      setTitle("Head");
    } else if (props.element === "duck") {
      setText("So, with his head he have a duck beak, that he use for all kind of stuff, to dig there nest, find some food when it’s deeply underground. Beak are not usual for mammal which usually have teeth.\n");
      setTitle("Beak");
    } else if (props.element === "fur") {
      setText("\'If WFP can describe on this Twitter thread exactly how $6B will solve world hunger, I will sell Tesla stock right now and do it.\'");
      setTitle("Ellon Musk \r October 31, 2021");
    } else if (props.element === "tail") {
      setText("He have a nice beaver tail, that he use as a motor under water or on ground to grab some stuff ( wood, dirt, mud ) to create his nest.");
      setTitle("Tail");
    } else if (props.element === "feet") {
      setText("He have to kind of feet, two for swimming and to help him to navigate under water. And the two other are used when his on ground to dig or to walk. A real transformer. \n"
      );
      setTitle("Feet");
    } else if (props.element === "spur") {
      setText("Behind his two back feet, we can find 2 venomous spur to defend or attack when needed. Not enough dangerous to kill a man but can kill small animal like fish or small dogs. \n");
      setTitle("Spur");
    } else {
      setText("Platypus have a really cute head, with very small eyes, for an animal that spend most of his time under the water, he can’t swim with the eyes open, one of the reason why he use electrolocation to find his prey.");
      setTitle("Head");
    }
  }, [props.element])

  return (
    <div className={styles.wrapperBody}>
      <div className={styles.headModal}>
        <p onClick={() => props.closeModal()}>
          Close
        </p>
      </div>
      <div className={styles.pWrapper}>
        <h2>
          {
            title
          }
        </h2>
        <p>
          {
            text
          }
        </p>
      </div>
    </div>
  )
}


export default Modal