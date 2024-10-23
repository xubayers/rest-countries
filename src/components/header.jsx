import React from "react";

export default function Header({ changeHandler, searchedText }) {
  return (
    <div className="grid grid-cols-10">
      <div className="titleMenu">
        <details className="relative">
          <summary className="menu">
            <ion-icon name="filter-circle-outline"></ion-icon>
          </summary>
          <ul className="menuList">
            <li className="menuItem">Log In</li>
          </ul>
        </details>
        <h2 className="text-xl">See the World</h2>
      </div>
      <input
        type="text"
        className="inp col-span-7"
        value={searchedText}
        onChange={(e) => changeHandler(e.target.value)}
        placeholder="Search country"
      />
    </div>
  );
}
