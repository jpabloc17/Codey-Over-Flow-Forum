import React from "react";
import { Body } from "./Body";
import { Header } from "./Header";

export function Card({ commentObject }) {
  const { profileImg, username, comment } = commentObject;
  return (
    <div className="card">
      <Header profileImg={profileImg} userName={username} />
      <Body comment={comment} />
    </div>
  );
}
