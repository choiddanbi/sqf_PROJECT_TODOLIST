import React from 'react';
import MonthGroup from '../MonthGroup/MonthGroup';

function YearGroup({ calendarData }) {
    const calendarDataEntries = Object.entries(calendarData);
    return (
        <ul>
            {
                calendarDataEntries?.map(([ year, months ]) => {
                    return <li key={year}>
                        <h2>{year}년</h2>
                        <MonthGroup months={months} />
                    </li>
                })
            }
        </ul>
    );
}

export default YearGroup;