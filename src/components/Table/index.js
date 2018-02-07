import React, {Component} from 'react';

import {
    SORTS
} from '../../constants';

import Button from '../Button'
import Sort from '../../components/Sort'
import PropTypes from "prop-types";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortKey: 'NONE',
            isSortReverse: false,
        };
        this.onSort = this.onSort.bind(this);
    }

    onSort(sortKey) {
        const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
        this.setState({sortKey, isSortReverse});
    }

    render() {
        const {
            list,
            onDismiss,
        } = this.props;
        const {
            sortKey,
            isSortReverse,
        } = this.state;
        const sortedList = SORTS[sortKey](list);
        const reverseSortedList = isSortReverse
            ? sortedList.reverse()
            : sortedList;
        return (
            <div className='table'>
                <div className='table-header'>
            <span className='large-column'>
                <Sort
                    sortKey={'TITLE'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                    arrowSort={isSortReverse}
                >
                    Title
                </Sort>
            </span>
                    <span className='mid-column'>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                    arrowSort={isSortReverse}
                >
                    Author
                </Sort>
            </span>
                    <span className='small-column'>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                    arrowSort={isSortReverse}
                >
                    Comments
                </Sort>
            </span>
                    <span className='small-column'>
                <Sort
                    sortKey={'POINTS'}
                    onSort={this.onSort}
                    activeSortKey={sortKey}
                    arrowSort={isSortReverse}
                >
                    Points
                </Sort>
            </span>
                    <span className='small-column'>
                <span className='button-row'>
                    Arvhive
                </span>
            </span>
                </div>

                {reverseSortedList.map(item =>
                    <div key={item.objectID} className='table-row'>
                        <span className='large-column'>
                            <a className='hits-title-link' target='_blank' href={item.url}>{item.title}</a>
                        </span>
                        <span className='mid-column hits-author'>{item.author}</span>
                        <span className='small-column'>{item.num_comments}</span>
                        <span className='small-column'>{item.points}</span>
                        <span className='small-column'>
                            <Button
                                className='button-inline'
                                onClick={() => onDismiss(item.objectID)}
                            >
                                Dismiss
                            </Button>
                        </span>
                    </div>
                )}
            </div>

        );
    }
}
export default Table;

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
            author: PropTypes.string,
            url: PropTypes.string,
            num_comments: PropTypes.number,
            points: PropTypes.number
        })
    ).isRequired,
    onDismiss: PropTypes.func,
};
