import React from 'react';

const SearchField = props => {
  return (
    <form>
      <input
        className="palette-search"
        autoComplete='off'
        onChange={props.handlerFunction}
        type='text'
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default SearchField;
