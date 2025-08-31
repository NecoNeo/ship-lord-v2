import { useEffect, useRef } from 'react';
interface OverviewProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Overview: React.FC<OverviewProps> = () => {
  const hasDataFetched = useRef(false);

  // const cols = [];

  useEffect(() => {
    if (hasDataFetched.current) return;
  }, []);

  return <div></div>;
};

export default Overview;
