function TwModal(props) {
  const { children, open, doClose } = props;

  return (
    <div
      className={`modal fixed top-0 left-0 w-full h-full bg-[#0002] z-10 ${
        open ? "scale-100" : "scale-0"
      }`}
      onClick={doClose}
    >
      <div
        className={`modal-content relative top-10
         rounded-lg w-4/5 max-w-xl mx-auto bg-white transition-transform duration-300 z-20 ${
          open ? "scale-100" : "scale-0"
        }`}
        onClick={e=>e.stopPropagation()}
      >
        <span
          className="close absolute top-0 right-3 w-min text-4xl font-bold cursor-pointer text-red-500"
          onClick={doClose}
        >
          &times;
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default TwModal;