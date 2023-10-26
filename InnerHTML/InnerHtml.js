import React from "react";

export default function InnerHtml() {
  const a = `<p>Hello World</p>`;
  return <div dangerouslySetInnerHTML={{__html:a}}></div>;
}
