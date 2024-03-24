import useAlert from "../hooks/useAlert";

const Alert = ({ alert, showAlert, hideAlert }) => {
  const handleClick = () => {
    hideAlert();
  };
  console.log("alert", alert);

  return (
    <div className="absolute inset-x-0 top-16 flex justify-center items-center z-50">
      <div
        className={`mx-auto p-4 max-w-xs w-full rounded-lg shadow-2xl border border-transparent backdrop-filter backdrop-blur-lg
                      ${
                        alert.type === "danger"
                          ? "bg-orange-500 bg-opacity-90 "
                          : "bg-blue-500 bg-opacity-90 border-blue-600"
                      }
                      text-white font-semibold text-lg text-center space-y-2`}
        role="alert"
        style={{
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.1), inset 0 -2px 2px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>{alert.message}</p>
        <button
          type="button"
          className="mt-3 px-5 py-2 rounded-md text-sm font-medium shadow-sm transform active:scale-95 transition-transform 
                     bg-white bg-opacity-10 hover:bg-opacity-20"
          onClick={handleClick}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
