import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="w-1/2">
      <div className="text-sky-400 font-extrabold text-4xl">TEST FORM</div>
      {children}
    </main>
  );
};

export default layout;
