const Caution = ({ message }) => {
  return (
    <>
      {/* eslint-disable-next-line */}
      <span
        style={{ fontSize: "13px", display: "inline-block", marginLeft: "1em" }}
      >
        ⚠️ {message} ⚠️
      </span>
    </>
  );
};

export default Caution;
