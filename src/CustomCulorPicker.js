import React, {useState} from "react";
import { ChromePicker } from "react-color";
import reactCSS from "reactcss";
import styled from "styled-components";
import {Menu} from "@styled-icons/evaicons-solid/Menu" ;
import {Speaker2} from "@styled-icons/fluentui-system-filled/Speaker2";
import {MicFill} from "@styled-icons/bootstrap/MicFill";

const ColorPickerComponent = () => {
  const [colorPicker, setColorPicker] = useState(
    {
      viewPicker: false,
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
    }
  );

 const handleOnClick = () => {
    setColorPicker({
      viewPicker: !colorPicker.viewPicker,
    });
  };

 const handleOnClose = () => {
    setColorPicker({
      viewPicker: false,
    });
  };

 const handleOnChange = (color) => {
    setColorPicker({
      color: {
        rgb:color.rgb,
        hex:color.hex,
        hsl:color.hsl
    },
    });
    // Passing the selected color to parent component
    // setTimeout(() => {
    //   // SetTimeout added to update color correctly
    //   this.props.onColorSelect(color);
    // });
    setTimeout((props) => {
      // SetTimeout added to update color correctly
      props.onColorSelect(colorPicker.color);
    });

  };

    const styles = reactCSS({
      default: {
        color: {
          width: "30px",
          height: "30px",
        color: `rgba(${colorPicker.color.rgb.r}, ${colorPicker.color.rgb.g}, ${colorPicker.color.rgb.b}, ${colorPicker.color.rgb.a})`,
        },
        swatch: {
          padding: "10px",
          background: "white",
          borderRadius: "2px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.2)",
          cursor: "pointer",
          display: "inline-block",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
        popover: {
          position: "absolute",
          zIndex: "4",
        },
      },
    });

    return (
      <div>
          <Speaker2 style={styles.color}/>
          <br />
          <MicFill style={styles.color}/>
          <br /> <br />
        <div style={styles.swatch} onClick={handleOnClick}>
          <Menu style={styles.color}/>
        </div>
          {colorPicker.viewPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={handleOnClose} />
            <ChromePicker
              color={colorPicker.color.rgb}
              onChange={handleOnChange}
            />
          </div>
        ) : null}
      </div>
    );
}

export default ColorPickerComponent;