import React, { useState, useMemo } from 'react';
import './ExploreChallengesPage.css';
import ChallengeCard from '../../components/challenge/ChallengeCard';
import ChallengeFilters from '../../components/challenge/ChallengeFilters';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import { challenges } from '../../data/challenges';

const ExploreChallengesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    district: 'All',
    priority: 'All',
    status: 'All'
  });
  const [sortBy, setSortBy] = useState('newest');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const filteredChallenges = useMemo(() => {
    let result = [...challenges];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.description.toLowerCase().includes(q) ||
        c.location.district.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (filters.category !== 'All') {
      result = result.filter(c => c.category === filters.category);
    }

    // District filter
    if (filters.district !== 'All') {
      result = result.filter(c => c.location.district === filters.district);
    }

    // Priority filter
    if (filters.priority !== 'All') {
      result = result.filter(c => c.priority === filters.priority);
    }

    // Status filter
    if (filters.status !== 'All') {
      result = result.filter(c => c.status === filters.status);
    }

    // Sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'priority':
        const priorityScore = { 'High': 3, 'Medium': 2, 'Low': 1 };
        result.sort((a, b) => priorityScore[b.priority] - priorityScore[a.priority]);
        break;
      case 'beneficiaries':
        result.sort((a, b) => b.metrics.beneficiaries - a.metrics.beneficiaries);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, filters, sortBy]);

  return (
    <div className="explore-page">
      <div className="explore-header">
        <div className="container">
          <h1 className="explore-title">Challenge Marketplace</h1>
          <p className="explore-subtitle">Discover and solve real-world problems affecting communities across Jharkhand.</p>
          <div className="explore-search">
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search challenges by keyword, location..."
            />
          </div>
        </div>
      </div>

      <div className="explore-main container">
        <div className="mobile-filter-toggle">
          <Button variant="outline" onClick={() => setShowFiltersMobile(!showFiltersMobile)}>
            {showFiltersMobile ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        <div className={`explore-sidebar ${showFiltersMobile ? 'show' : ''}`}>
          <ChallengeFilters 
            filters={filters} 
            onFilterChange={handleFilterChange} 
          />
        </div>

        <div className="explore-content">
          <div className="content-header">
            <div className="result-count">
              Showing <strong>{filteredChallenges.length}</strong> challenges
            </div>
            <div className="sort-control">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="priority">Highest Priority</option>
                <option value="beneficiaries">Most Beneficiaries</option>
              </select>
            </div>
          </div>

          {filteredChallenges.length > 0 ? (
            <div className="challenges-grid-layout">
              {filteredChallenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No challenges found</h3>
              <p>Try adjusting your filters or search query.</p>
              <Button variant="outline" onClick={() => {
                setSearchQuery('');
                setFilters({category: 'All', district: 'All', priority: 'All', status: 'All'});
              }}>Clear Filters</Button>
            </div>
          )}

          {filteredChallenges.length > 0 && (
            <div className="pagination">
              <Button variant="outline">Load More Challenges</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreChallengesPage;
