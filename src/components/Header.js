import React from "react";

const Header = (props) => {
  const { search, onInputChange,onSearch} = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <i className="fas fa-hamburger"></i> Delicious Recipe's
      </h1>
      <div className="input-group my-5 w-50 mx-auto">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipes..."
          value={search}
          onChange={onInputChange}
        />
        <button type="button" className="btn btn-warning" onClick ={onSearch}>
          Search Recipe
        </button>
      </div>
    </div> 
  );
};
export default Header;
 