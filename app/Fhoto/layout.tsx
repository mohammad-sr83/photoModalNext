import React from "react";

export default function Layout(props: {
  Modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.Modal}
    </>
  );
}