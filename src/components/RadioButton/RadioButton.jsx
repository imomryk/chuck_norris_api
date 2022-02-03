import { useDispatch } from "react-redux";
import { SET_SEARCHFORM_ACTIVE_ELEM } from "../../store/types";

export const RadioButton = ({ label, text, checked }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor={label} className="radioContainer">
      {text}
      <input
        type="radio"
        name="searchform"
        id={label}
        value={label}
        defaultChecked={checked}
        onChange={() => {
          dispatch({ type: SET_SEARCHFORM_ACTIVE_ELEM, payload: label });
        }}
      />
      <span className="checkmark"></span>
    </label>
  );
};
