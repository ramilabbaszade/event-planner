import React from "react";
import Icon from "@material-ui/core/Icon";


const IconButton = (props) => {
  return (
    <div style={props.style} className="btn">
        {<Icon style={{ fontSize: 16,marginRight:'5px'}} >
            {props.icon}
        </Icon>}
      {props.title}
    </div>
  );
};

export default IconButton;
