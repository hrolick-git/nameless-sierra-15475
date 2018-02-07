import {sortBy} from "lodash";
import Button from "../components/Button";
import React from 'react';

export const DEFAULT_QUERY = 'react';
export const DEFAULT_HPP = '10';
export const PATH_BASE = 'https://hn.algolia.com/api/v1';
export const PATH_SEARCH = '/search';
export const PARAM_SEARCH = 'query=';
export const PARAM_PAGE = 'page=';
export const PARAM_HPP = 'hitsPerPage=';

export const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};


export const Loading = () =>
    <div className='loading-spinner'>
        <i className='fas fa-sync fa-spin'></i>
    </div>

export const withLoading = (Component) => ({isLoading, ...rest}) =>
    isLoading
        ? <Loading/>
        : <Component {...rest} />

export const ButtonWithLoading = withLoading(Button);

export const updateSearchTopStoriesState = (hits, page) => (prevState) => {
    const { searchKey, results } = prevState;
    const oldHits = results && results[searchKey]
        ? results[searchKey].hits
        : [];
    const updatedHits = [
        ...oldHits,
        ...hits
    ];
    return {
        results: {
            ...results,
            [searchKey]: { hits: updatedHits, page }
        },
        isLoading: false
    };
};