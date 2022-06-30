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
      setText("Then, we have his body, covered by a fluffy fur. For long time platypus was hunt for his fur, to use it a coat or other kind cloth. Today the species is protected and no one hunt it anymore. An other particularity of his fur, is that it sweat some milk to feed his baby. In fact, we say that platypus are mammal, but they don’t have real mammal, to feed they baby, platypus sweat some milk on their belly. Funny ");
      setTitle("Fur");
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