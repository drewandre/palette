import React from 'react';

const SearchField = props => {
  return (
    <form className="palette-search">
      <input
        className='text-center'
        autoComplete='off'
        onChange={props.handlerFunction}
        type='text'
        placeholder={props.placeholder}
      />
    </form>
  );
}

export default SearchField;
