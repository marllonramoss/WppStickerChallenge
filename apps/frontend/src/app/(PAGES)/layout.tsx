import Navbar from "@/components/Navbar";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout = ({ children }: layoutProps) => {
  return (
    <div className="bg-red-300">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
