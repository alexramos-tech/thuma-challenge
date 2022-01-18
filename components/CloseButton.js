const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 0 }}>
      <span role="img" aria-label={`remove item link`}>
        ❌
      </span>
    </button>
  );
}

export default CloseButton;
