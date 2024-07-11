import * as React from "react";
import { createComponent } from "@toolpad/studio/browser";

export interface MyComponent1Props {
  msg: string;
}

function MyComponent1({ msg }: MyComponent1Props) {
  return <div>{msg}</div>;
}

export default createComponent(MyComponent1, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
