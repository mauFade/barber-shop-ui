import React from "react";
import Baseboard from "./Baseboard";

interface PageProps {
  children: React.ReactNode;
}

const Page = (props: PageProps) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <main>{props.children}</main>
      <Baseboard />
    </div>
  );
};

export default Page;
