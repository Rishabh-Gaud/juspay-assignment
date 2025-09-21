const WorldMap = ({ isDark }) => {
  return (
    <div 
      className="relative w-full h-full rounded-lg"
      style={{ background: 'var(--Primary-Light, rgba(255, 255, 255, 0.05))' }}
    >
      <img 
        src="/world-map.png" 
        alt="World Map with Revenue Locations"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};

export default WorldMap;