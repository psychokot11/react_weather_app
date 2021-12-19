import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="search" placeholder="enter the city" autocomplete="off" />
      </form>
    </div>
  );
}
