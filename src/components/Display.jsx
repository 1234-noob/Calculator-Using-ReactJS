const Display = ({ displayValue }) => {
  return (
    <>
      <div className=" h-fit p-15 m-2">
        <input
          type="text"
          className="w-[90%] mx-[5%] h-14 my-2.5 outline-none border-2 text-4xl px-3 bg-white"
          readOnly
          value={displayValue}
        />
      </div>
    </>
  );
};

export default Display;
