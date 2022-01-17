import * as React from "react";
import PropTypes from 'prop-types'
import { ChromePicker } from "react-color";
import reactCSS from "reactcss";
import {Menu} from "@styled-icons/evaicons-solid/Menu" ;
import {Speaker2} from "@styled-icons/fluentui-system-filled/Speaker2";
import {MicFill} from "@styled-icons/bootstrap/MicFill";

const ColorPickerComponent = (props) => {

  //TODO: keep styles outside of the main component and propagate props
    const styles = reactCSS({
      default: {
        color: {
          width: "30px",
          height: "30px",
          color: `rgba(${props.colorize.color.rgb.r}, 
              ${props.colorize.color.rgb.g}, 
              ${props.colorize.color.rgb.b}, 
              ${props.colorize.color.rgb.a})`,
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
        <div style={styles.swatch} onClick={props.onClick}>
          <Menu style={styles.color}/>
        </div>
          {props.open && (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={props.onClose} />
            <ChromePicker
              color={props.colorize.color.rgb}
              onChange={props.onChange}
            />
          </div>
        )}
      </div>
    );
}

ColorPickerComponent.propTypes= {
  open: PropTypes.bool.isRequired,
  colorize: PropTypes.object,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

export default ColorPickerComponent;