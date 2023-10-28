import PropTypes from "prop-types";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function CardHomePage({ color, title}) {
  return (
    <div className="min-w-max mx-10 group  p-5 rounded-xl mt-20 bg-neutral-100 shadow-2xl hover:scale-105 hover:cursor-pointer transition-all duration-150">
      <div className="w-full h-8 relative flex justify-center">
        <div className={`flex justify-center items-center w-16 h-16 rounded-full opacity-75 group-hover:opacity-100 ${color === "blue" ? "bg-blue-300": "bg-yellow-300"} opacity-95 absolute -top-10`}>
          <AiOutlineAppstoreAdd className="text-2xl" />
        </div>
      </div>
      <h3 className="w-full text-center font-medium text-base text-neutral-800 opacity-75 group-hover:opacity-100">
        {title}
      </h3>
    </div>
  );
}

CardHomePage.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardHomePage;
