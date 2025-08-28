import { useEffect, useRef, useState } from "react";

interface OverviewProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Overview: React.FC<OverviewProps> = ({ children, variant = 'primary', ...props }) => {
  const hasDataFetched = useRef(false);

  const cols = [
  ]

  useEffect(() => {
    if (hasDataFetched.current) return;
  }, [])

  return (
    <div>
    </div>
  );
};

export default Overview;
