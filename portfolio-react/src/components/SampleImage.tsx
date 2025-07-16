import React from 'react';

const SampleImage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
        alt="Sample"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
      />
    </div>
  );
};

export default SampleImage;
