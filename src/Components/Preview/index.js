import React from "react";
import {selectText } from '../../redux/textSlice';
import { useSelector } from 'react-redux';


function Preview() {
      const StateText = useSelector(selectText);
  return (
      <div className="col-md-5 holder">
      <div className="text-panel-right" id="preview" dangerouslySetInnerHTML={{ __html: StateText.toString().replace(/,/g,"") }}>
            {/* {selectText} */}
            {/* {StateText} */}
      </div>
    </div>
  );
}

export default Preview;
