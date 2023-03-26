import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="page-header">
      <div className="breadcrumbs">
        <Link href={""}>Page / Page 1 </Link>
      </div>
    </header>
  );
}

export default Header;
