export const HeaderSubtitle = ({ subtitle,className="" }) => {
  return (
    <header className={`services__header ${className}`}>
      <h2 className="services__header-title">{subtitle}</h2>
    </header>
  );
};
