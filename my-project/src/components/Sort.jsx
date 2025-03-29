import React from 'react';
import { Button } from '@mui/material';

const Sort = ({ setSort }) => {
    const handleSort = (criteria) => {
        setSort(criteria);
    };

    return (
        <div className="mb-4 flex gap-2">
            <Button 
                onClick={() => handleSort('date')} 
                variant="outlined" 
                className="border-blue-500 text-blue-500 hover:bg-blue-100"
            >
                Sort by Date
            </Button>
            <Button 
                onClick={() => handleSort('priority')} 
                variant="outlined" 
                className="border-green-500 text-green-500 hover:bg-green-100"
            >
                Sort by Priority
            </Button>
        </div>
    );
};

export default Sort;