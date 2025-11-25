import React from 'react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: '👥', color: '#4f46e5' },
    { title: 'Active Sessions', value: '56', icon: '🔗', color: '#10b981' },
    { title: 'Revenue', value: '$12,345', icon: '💰', color: '#f59e0b' },
    { title: 'Pending Tasks', value: '23', icon: '📋', color: '#ef4444' },
  ];

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{ borderLeftColor: stat.color }}
          >
            <div className="card-icon">{stat.icon}</div>
            <div className="card-content">
              <h3>{stat.title}</h3>
              <p className="card-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
