"use client";

import Image from "next/image";
import { SearchManufacturer } from "..";

import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
