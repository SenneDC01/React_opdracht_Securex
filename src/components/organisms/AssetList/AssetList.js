import React from "react";

export default function AssetList({ assets, title }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      {assets.length > 0 ? (
        <ul>
          {assets.map((asset) => (
            <li key={asset.number}>
              {asset.brand} - {asset.model} - Start Date: {asset.startDate} -
              End Date: {asset.endDate}
            </li>
          ))}
        </ul>
      ) : (
        <p>No assets to display.</p>
      )}
    </div>
  );
}
