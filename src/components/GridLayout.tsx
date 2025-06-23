import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  rows?: number;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({ 
  children, 
  rows = 3, 
  className = "" 
}) => {
  const gridRowsClass = `grid-rows-${rows}`;
  
  return (
    <div className={`h-full w-full grid ${gridRowsClass} gap-6 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Sub-grid components for specific layouts
interface GridRowProps {
  children: React.ReactNode;
  className?: string;
  span?: number;
}

export const GridRow: React.FC<GridRowProps> = ({ 
  children, 
  className = "",
  span = 1 
}) => {
  const rowSpanClass = `row-span-${span}`;
  
  return (
    <div className={`${rowSpanClass} flex flex-col h-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// 3-column grid for Row 2
interface ThreeColumnGridProps {
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  className?: string;
}

export const ThreeColumnGrid: React.FC<ThreeColumnGridProps> = ({
  leftComponent,
  centerComponent,
  rightComponent,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-3 gap-4 h-full ${className}`}>
      <div className="col-span-1 flex items-center justify-center">
        {leftComponent}
      </div>
      <div className="col-span-1 flex items-center justify-center">
        {centerComponent}
      </div>
      <div className="col-span-1 flex items-center justify-center">
        {rightComponent}
      </div>
    </div>
  );
};

// 2-column grid for Row 3 (expandable to 4x2 later)
interface TwoColumnGridProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  className?: string;
}

export const TwoColumnGrid: React.FC<TwoColumnGridProps> = ({
  leftComponent,
  rightComponent,
  className = ""
}) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-6 h-full ${className}`}>
      <div className="col-span-1 h-full">
        {leftComponent}
      </div>
      <div className="col-span-1 h-full">
        {rightComponent}
      </div>
    </div>
  );
};

export default GridLayout; 