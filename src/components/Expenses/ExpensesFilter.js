import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const handleYearSelection = (event) => {
        console.log("event", event)
        if (event.target) {
        props.onYearSelection(event.target.value);
    }
        //console.log(typeof props.onYearSelection)
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={(event) => handleYearSelection(event)}>
                    <option value=''>Select year</option>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;