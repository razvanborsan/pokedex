import React from 'react';
import BaseCard from '../BaseCard/BaseCard';

import './StatsCard.css';

function Stat({ title, value }) {
  const updatedVal = (value * 190) / 255;

  function getBgColor(val) {
    if (val > 127.5) return '#abfea3';
    if (val > 65) return '#fdfaa5';
    return '#fda5a4';
  }

  return (
    <div className="stat-wrapper">
      <span className="stat-title">{title}</span>
      <span className="stat-line" style={{ width: updatedVal, backgroundColor: getBgColor(value) }} />
      <span className="stat-value">{value}</span>
    </div>
  );
}

function StatsCard({ pokemonType }) {
  return (
    <BaseCard customClasses={`pokemon-stats-container ${pokemonType}`}>
      <Stat title="HP" value="124" />
      <Stat title="Attack" value="69" />
      <Stat title="Defense" value="255" />
      <Stat title="Speed" value="33" />
      <Stat title="Special Attack" value="85" />
      <Stat title="Special Defense" value="188" />
    </BaseCard>
  );
}

export default StatsCard;