import React, { useState } from 'react';

const App = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#eee' }}>
          This is the detailed information that appears when you click the button!
        </div>
      )}
    </div>
  );
};

export default App;
