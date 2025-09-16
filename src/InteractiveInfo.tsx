import React, { useState } from 'react';

const InteractiveInfo = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h2>Interactive Infographic</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <p>This is the detailed information that appears when you click the button!</p>
      )}
    </div>
  );
};

export default InteractiveInfo;
