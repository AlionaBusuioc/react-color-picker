import React, { useState } from "react";
import CustomCulorPicker from "./CustomCulorPicker";

const CustomCulorPickerMain = () => {
    const [colorize, setColorize] = useState({
        color: {
            rgb:{
                r: 33,
                b: 143,
                g: 34,
                a: 1, 
            },
            hex:'#21228f',
            hsl:{
                a: 1,
                h: 239,
                l: 0,
                s: 5,
            }
      }
    })

 const onChange = (event) => {
    console.log(event);
    setColorize({ color: event });
  };
    return (
      <div>
        <CustomCulorPicker onColorSelect={onChange} />
      </div>
    );
}
export default CustomCulorPickerMain;

