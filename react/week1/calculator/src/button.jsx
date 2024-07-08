const Button = ({ value, onClick }) => {
    return (
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        {value}
      </button>
    );
  };
  export default Button;