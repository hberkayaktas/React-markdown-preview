import {useState} from "react";
import {setTextState} from '../../redux/textSlice';
import {useDispatch} from 'react-redux';

function InputTaker() {
      const dispatch = useDispatch();
      const [text, setText] = useState("");
      const handlePress = (takeValue) =>{
            //console.log(takeValue);
            setText(takeValue);
            dispatch(setTextState(takeValue));
      }
  return (
    <div className="col-md-5 holder p-0">
      <textarea id="textInput" value={text} onChange={(e) => handlePress(e.target.value)} defaultValue={" "} />
    </div>
  );
}

export default InputTaker;
