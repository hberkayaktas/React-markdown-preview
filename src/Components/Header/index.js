import React from "react";
import {setTextState} from '../../redux/textSlice';
import {useDispatch} from 'react-redux';
function Header() {
  const dispatch = useDispatch();
  const Text = `
Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

* apples
* oranges
* pears

Numbered list:

  1. ayaykkabı
  2. pastel boya
  3. makas

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
  `
  const handlePress = (takeValue) =>{
    //console.log(takeValue);
   
    dispatch(setTextState(takeValue));
}
  return (
    <div className="row justify-content-end pt-1">
      <button className="Ask" onClick={(e) => handlePress(Text)}>?</button>
    </div>
  );
}

export default Header;
