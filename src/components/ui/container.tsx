import { ReactNode } from "react";

type TComponent = {
  children: ReactNode;
};

export const Container = ({ children }: TComponent) => {
  return (
    <div className="w-full md:w-[80%] h-screen mx-auto"> {children}</div>
  );
};
