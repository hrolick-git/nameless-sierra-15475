import React from 'react';
import classNames from "classnames";
import Button from '../Button'

const Sort = ({
                  sortKey,
                  onSort,
                  children,
                  activeSortKey,
                  arrowSort
              }) => {
    const sortClass = classNames(
        'button-row',
        {'button-active': sortKey === activeSortKey}
    );
    const arrowSortClass = classNames(
        {'display-none': sortKey !== activeSortKey},
        {'fas': sortKey === activeSortKey},
        {'fa-long-arrow-alt-up': arrowSort === false},
        {'fa-long-arrow-alt-down': arrowSort === true}
    );

    return (
        <Button
            className={sortClass}
            onClick={() => onSort(sortKey)}
        >
            {children} <i className={arrowSortClass}></i>
        </Button>

    );
}
export default Sort;