import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start gap-[155px] max-w-full text-left text-59xl text-color-primary-dark-brown font-frank-ruhl-libre lg:gap-[77px] mq750:gap-[39px] mq450:gap-[19px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[344px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[78px] capitalize font-bold font-inherit inline-block max-w-full z-[1] mq450:text-28xl mq450:leading-[47px] mq1050:text-43xl mq1050:leading-[62px]">
              Discover the optimal shoe style for yourself
            </h1>
            <div className="h-[100px] w-[100px] relative overflow-hidden shrink-0 hidden" />
          </div>
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[35px] w-[186px] absolute !m-[0] right-[17px] bottom-[-6px] [filter:blur(41px)] bg-gray-100 z-[1]" />
            <button className="cursor-pointer [border:none] py-4 px-[61px] bg-color-primary-dark-brown rounded-sm flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-dimgray-100">
              <div className="relative text-lg leading-[32px] uppercase font-black font-lato text-color-secondary-white text-left inline-block min-w-[101px]">
                SHOP NOW
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[406px] flex-1 relative min-w-[348px] max-w-full mq750:min-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[84px] max-h-full w-[372px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/shoes-1@2x.png"
        />
        <img
          className="absolute top-[58.1px] left-[0px] w-[536px] h-[334.5px] z-[2]"
          alt=""
          src="/heroimage.svg"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
