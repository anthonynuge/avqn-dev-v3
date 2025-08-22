import React from "react";
import Button from "../components/ui/Button";

const Navbar = () => {
  return (
    <nav className="fixed h-12 w-full app-container">
      <div className="flex h-full justify-end items-center gap-24">
        <div className="hidden">Houston, Texas</div>
        <Button className="ml-auto uppercase h-6" size="sm">
          [C] CONTACT
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
