import React from 'react';
import PropTypes from "prop-types";

const Search = ({value, onChange, onSubmit, children}) => {
    let input;
    return (
        <form onSubmit={onSubmit}>
            <span>{children}: </span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                ref={(node) => input = node}
            />
            <button type='submit' className='button-inline button-submit'>
                {children}
            </button>
        </form>
    );
}

export default Search;

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
};
