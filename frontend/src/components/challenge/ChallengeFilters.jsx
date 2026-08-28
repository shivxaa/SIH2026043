import React from 'react';
import './ChallengeFilters.css';

const ChallengeFilters = ({ filters, onFilterChange, onClear }) => {
  return (
    <div className="challenge-filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button onClick={onClear} className="btn-clear">Clear All</button>
      </div>
      <div className="filter-group">
        <label>Category</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)} value={filters.category || ''}>
          <option value="">All Categories</option>
          <option value="education">Education</option>
          <option value="health">Healthcare</option>
          <option value="agriculture">Agriculture</option>
        </select>
      </div>
      <div className="filter-group">
        <label>District</label>
        <select onChange={(e) => onFilterChange('district', e.target.value)} value={filters.district || ''}>
          <option value="">All Districts</option>
          <option value="ranchi">Ranchi</option>
          <option value="dhanbad">Dhanbad</option>
        </select>
      </div>
    </div>
  );
};

export default ChallengeFilters;
