import React, { useState } from "react";

export default function Island({ island, setIsland, visitors }) {
  return (
    <div className="Island" onClick={() => setIsland(island)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {visitors[island.id - 1]}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
