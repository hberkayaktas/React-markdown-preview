import React from "react";
import {selectText,itemSafhali } from '../../redux/textSlice';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

function Preview() {
      const StateText = useSelector(selectText);
      const itemSafhaliIn = useSelector(itemSafhali);
  return (
      <div className="col-md-5 holder">
      <div className="text-panel-right" id="preview" /* dangerouslySetInnerHTML={{ __html: StateText.toString().replace(/,/g,"") }} */>
            {/* {selectText} */}
            {/* {StateText} */}
            <ReactMarkdown>{itemSafhaliIn}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;
