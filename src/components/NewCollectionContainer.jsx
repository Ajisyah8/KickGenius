import CardNewCollection from "./CardNewCollection";
import PropTypes from "prop-types";

const NewCollectionContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1152px] flex flex-col items-end justify-start gap-[119px] max-w-full text-center text-49xl text-color-primary-dark-brown font-frank-ruhl-libre lg:gap-[59px] mq750:gap-[30px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[139px] pr-[13px] pl-0 box-border max-w-full mq750:pb-[90px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[81px] pl-20 box-border max-w-full lg:pl-10 lg:pr-10 lg:box-border">
            <div className="flex-1 flex flex-col items-end justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
                <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-22xl mq1050:text-35xl">
                  New Collection
                </h1>
              </div>
              <div className="self-stretch relative text-xl leading-[180%] capitalize font-lato z-[1] mq450:text-base mq450:leading-[29px]">
                Sepatu dengan kualitas terbaik di indonesia kini hadir untuk
                anda.
              </div>
            </div>
          </div>
          <div className="w-[1139px] h-[417px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[25px] max-w-full text-lg font-lato">
            <CardNewCollection
              image="/image@2x.png"
              longSleeve="Sepatu pria impor"
            />
            <CardNewCollection
              image="/image-1@2x.png"
              longSleeve={`Nike pria & wanita`}
            />
            <div className="self-stretch w-[363px] shrink-0 flex flex-row items-end justify-center py-[42px] px-5 box-border relative max-w-full z-[3]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-2@2x.png"
              />
              <div className="h-[60px] w-[317px] relative bg-color-secondary-white hidden z-[1]" />
              <div className="relative uppercase font-black z-[2]">
                Sepatu olahraga
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[530px] flex flex-col items-start justify-start gap-[35px] max-w-full text-left mq750:gap-[17px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[78px] capitalize font-bold font-inherit z-[1] mq450:text-22xl mq450:leading-[47px] mq1050:text-35xl mq1050:leading-[62px]">
          <p className="m-0">KickGenius</p>
          <p className="m-0">isHere</p>
        </h1>
        <div className="w-[450px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-xl font-lato">
          <div className="flex-1 relative leading-[180%] capitalize inline-block max-w-full z-[1] mq450:text-base mq450:leading-[29px]">
            KickGenius adalah website yang dimana anda ingin mencari snickers
            yang anda inginkan dari jordan, nike, new balance, vans dan lain
            sebagainya.
          </div>
        </div>
      </div>
      <div className="w-[791px] flex flex-row items-start justify-end py-0 px-[26px] box-border max-w-full text-21xl">
        <div className="flex-1 flex flex-row items-start justify-start pt-8 px-10 pb-0 box-border max-w-full z-[2]">
          <div className="h-[173px] w-[739px] relative bg-color-secondary-white hidden max-w-full" />
          <div className="flex-1 flex flex-row items-start justify-between pt-0 pb-[39px] pr-[26px] pl-[34px] box-border relative max-w-full gap-[20px] mq750:flex-wrap">
            <div className="h-[118px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [filter:blur(95px)] bg-gray-200" />
            <div className="flex flex-col items-start justify-start py-0 pr-[18px] pl-0">
              <b className="relative leading-[78px] capitalize inline-block min-w-[92px] shrink-0 z-[2] mq450:text-5xl mq450:leading-[47px] mq1050:text-13xl mq1050:leading-[62px]">
                2023
              </b>
              <div className="flex flex-row items-start justify-start py-0 pr-3 pl-2.5 mt-[-8px] text-lg font-lato">
                <div className="relative leading-[180%] capitalize inline-block min-w-[70px] shrink-0 z-[2]">
                  Founded
                </div>
              </div>
            </div>
            <div className="h-[79px] flex flex-col items-start justify-start pt-[23px] pb-0 pr-[9px] pl-0 box-border">
              <div className="w-px flex-1 relative box-border opacity-[0.12] z-[2] border-r-[1px] border-solid border-color-primary-dark-brown" />
            </div>
            <div className="w-[126px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[81px] capitalize shrink-0 z-[2] mq450:text-5xl mq450:leading-[47px] mq1050:text-13xl mq1050:leading-[62px]">
                <b>8900</b>
                <b className="font-lato">+</b>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-[7px] mt-[-11px] text-lg font-lato">
                <div className="relative leading-[180%] capitalize inline-block min-w-[102px] shrink-0 z-[2]">
                  Product Sold
                </div>
              </div>
            </div>
            <div className="h-[79px] flex flex-col items-start justify-start pt-[23px] pb-0 pr-2 pl-0 box-border">
              <div className="w-px flex-1 relative box-border opacity-[0.12] z-[2] border-r-[1px] border-solid border-color-primary-dark-brown" />
            </div>
            <div className="w-[120px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[81px] capitalize shrink-0 z-[2] mq450:text-5xl mq450:leading-[47px] mq1050:text-13xl mq1050:leading-[62px]">
                <b>3105</b>
                <b className="font-lato">+</b>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[3px] mt-[-11px] text-lg font-lato">
                <div className="relative leading-[180%] capitalize inline-block min-w-[105px] shrink-0 z-[2]">
                  Best Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewCollectionContainer.propTypes = {
  className: PropTypes.string,
};

export default NewCollectionContainer;
