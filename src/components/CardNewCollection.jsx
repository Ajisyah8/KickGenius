import PropTypes from "prop-types";

const CardNewCollection = ({ className = "", image, longSleeve }) => {
  return (
    <div
      className={`h-[417px] w-[363px] relative shrink-0 max-w-full z-[1] text-center text-lg text-color-primary-dark-brown font-lato ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="absolute h-[14.39%] w-[87.33%] top-[80.34%] right-[6.34%] bottom-[5.28%] left-[6.34%] bg-color-secondary-white z-[1]" />
      <div className="absolute top-[84.65%] left-[25.62%] uppercase font-black z-[2]">
        {longSleeve}
      </div>
    </div>
  );
};

CardNewCollection.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  longSleeve: PropTypes.string,
};

export default CardNewCollection;
