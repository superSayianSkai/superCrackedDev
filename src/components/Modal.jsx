const Modal = ({ setOpenModal }) => {
  return (
    <div className=" absolute mx-auto inset-0 flex items-center justify-center  overflow-hidden ">
      <div className=" rounded-full inset-0 bg-black absolute opacity-90 scale left-[50%] md:left-[52%] top-[16%] sm:top-[21%] md:top-[45%] -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export default Modal;
