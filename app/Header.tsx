import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500">
      <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
    </div>
  );
};

export default Header;
