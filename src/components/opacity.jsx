const Opacity = ({ show, handleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 z-20 bg-black/80 ${show ? "animate-show" : ""}`}
      onClick={handleSidebar}
    />
  );
};

export default Opacity;
