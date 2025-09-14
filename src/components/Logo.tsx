interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = "", size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`logo-text ${sizeClasses[size]} ${className}`}>
      <span className="text-foreground">ManageMe</span>
      <span className="logo-dot">.</span>
      <span className="text-foreground">Money</span>
    </div>
  );
};

export default Logo;