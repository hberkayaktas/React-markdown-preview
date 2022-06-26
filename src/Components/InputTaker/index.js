import {useState} from "react";
import {setTextState} from '../../redux/textSlice';
import {useDispatch, useSelector} from 'react-redux';
import {itemSafhali } from '../../redux/textSlice';
function InputTaker() {
      const dispatch = useDispatch();
      const itemSafhali1 = useSelector(itemSafhali);
     // const [text, setText] = useState(StateText);
      const handlePress = (takeValue) =>{
            //console.log(takeValue);
          //  setText(takeValue);
            dispatch(setTextState(takeValue));
      }
  return (
    <div className="col-md-5 holder p-0">
      <textarea id="textInput" value={itemSafhali1} onChange={(e) => handlePress(e.target.value)} defaultValue={" "} />
    </div>
  );
}

export default InputTaker;
