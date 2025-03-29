import React from 'react';
import { TextField } from '@mui/material';

const Filter = ({ setFilter }) => {
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="mb-4 w-full">
            <TextField
                label="Filter Tasks"
                variant="outlined"
                onChange={handleFilterChange}
                className="w-full bg-white rounded-lg shadow-md"
            />
        </div>
    );
};

export default Filter;