

import React from 'react';


const Picture = (props) => (
  <div className={"picture"}>
    <img className={"img"} src={props.imgSrc} alt={""} />
  </div>
);

export default Picture;