import React from 'react';
import capitalize from 'shared/helpers/capitalize';

import BaseCard from '../BaseCard/BaseCard';

import './StatsCard.css';

function Stat({ title, value }) {
  function getBgColor(val) {
    if (val > (255 / 2)) return '#abfea3';
    if (val > (255 / 4)) return '#fdfaa5';
    return '#fda5a4';
  }

  return (
    <div className="stat-wrapper">
      <span className="stat-title">{title.split('-').map((word) => capitalize(word)).join(' ')}</span>
      <span className="stat-line" style={{ width: +value / 1.3, backgroundColor: getBgColor(+value) }} />
      <span className="stat-value">{value}</span>
    </div>
  );
}

function StatsCard({ pokemonType, stats }) {
  return (
    <BaseCard customClasses={`pokemon-stats-container ${pokemonType}`}>
      {
        stats.map((entry) => <Stat title={entry?.stat?.name} value={entry?.base_stat} />)
      }
    </BaseCard>
  );
}

export default StatsCard;
