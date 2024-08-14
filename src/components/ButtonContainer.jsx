const ButtonContainer = ({ onButtonClick, button }) => {
  return (
    <>
      <div className="bg-amber-600 h-fit m-5 flex justify-center flex-wrap">
        {button.map((button) => (
          <button
            value={button}
            className="bg-amber-400 w-20 h-20 text-2xl m-3 font-semibold rounded-2xl"
            onClick={onButtonClick}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
