import React from "react";

export function Header(props) {
  return (
    <>
      <img src={props.profileImg} />
      <h1>{props.userName}</h1>
    </>
  );
}
