function LayoutMenuToogle({ onLayoutVisible, layoutVisible }) {
  return (
    <div className="layout__menu-toggle" onClick={onLayoutVisible}>
      <i
        className="menu-toggle__icon fa-solid fa-bars"
        style={{ opacity: layoutVisible ? 0 : 1 }}
      ></i>
      <i
        className="menu-toggle__icon fa-solid fa-xmark"
        style={{ opacity: layoutVisible ? 1 : 0 }}
      ></i>
    </div>
  );
}

export default LayoutMenuToogle;
