import React from "react";
import { useDispatch } from "react-redux";
import { ACCESSORIES, BACKGROUNDS, EARS, EYES, HAIR, LEG, MOUTH, NECK } from "../constant/constant";
import { detailsActions } from "../store/details-slice";
import classes from "./Randomize.module.css";

const Randomize = () => {
  const dispatch = useDispatch();

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  const randomizeImage = () => {
    dispatch(detailsActions.onChangeDetail({
      name: ACCESSORIES.name,
      value: ACCESSORIES.values[getRandom(ACCESSORIES.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: BACKGROUNDS.name,
      value: BACKGROUNDS.values[getRandom(BACKGROUNDS.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: EARS.name,
      value: EARS.values[getRandom(EARS.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: EYES.name,
      value: EYES.values[getRandom(EYES.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: HAIR.name,
      value: HAIR.values[getRandom(HAIR.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: LEG.name,
      value: LEG.values[getRandom(LEG.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: MOUTH.name,
      value: MOUTH.values[getRandom(MOUTH.values.length)]
    }))
    dispatch(detailsActions.onChangeDetail({
      name: NECK.name,
      value: NECK.values[getRandom(NECK.values.length)]
    }))
  };
  
  return (
    <button
      className={`${classes.radomizedBtn} ${classes.btnDisplay}`}
      onClick={randomizeImage}
    >
      <svg
        className={classes.randomIcon}
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        viewBox='0 0 512 512'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z'></path>
      </svg>
      Randomize
    </button>
  );
};

export default Randomize;
