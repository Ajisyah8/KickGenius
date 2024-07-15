import NavigationBar from "../components/NavigationBar";
import FrameComponent from "../components/FrameComponent";
import NewCollectionContainer from "../components/NewCollectionContainer";

const MarketplaceSepatu = () => {
  return (
    <div className="w-full relative bg-color-secondary-white overflow-hidden flex flex-col items-end justify-start pt-1.5 pb-[373px] pr-0 pl-[3px] box-border gap-[93px] leading-[normal] tracking-[normal] mq750:gap-[46px] mq450:gap-[23px]">
      <div className="w-[100px] h-[100px] relative overflow-hidden shrink-0 hidden z-[0]" />
      <div className="self-stretch flex flex-col items-start justify-start pt-[19px] pb-[219px] pr-[95px] pl-[124px] box-border relative gap-[123px] max-w-full z-[1] mq750:gap-[61px] mq750:pl-[62px] mq750:pr-[47px] mq750:box-border mq450:gap-[31px] mq450:pl-5 mq450:pr-5 mq450:pb-[92px] mq450:box-border mq1050:pt-5 mq1050:pb-[142px] mq1050:box-border">
        <img
          className="w-full  absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bg.svg"
        />
        <NavigationBar />
        <FrameComponent />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <NewCollectionContainer />
      </div>
      <div className="w-full h-[2134px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[0px] left-[-809px] w-[2695px] h-[3230px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[-134px] [transform:scale(1.083)]"
            alt=""
            src="/-backgroung.svg"
          />
        </div>
        <img
          className="absolute top-[1099px] left-[151px] w-[530px] h-[662px] object-cover z-[1]"
          alt=""
          src="/rectangle-143@2x.png"
        />
        <div className="absolute top-[1624px] left-[89px] bg-color-primary-lightbrown box-border w-[182px] h-[182px] z-[2] border-[1px] border-solid border-color-primary-lightbrown" />
        <img
          className="absolute top-[1059px] left-[588px] w-[133px] h-[107px] z-[2]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="absolute top-[681px] left-[1082px] w-[285px] h-[285px]">
          <div className="absolute top-[0px] left-[0px] bg-antiquewhite w-full h-full" />
          <img
            className="absolute top-[142px] left-[118px] w-[133px] h-[107px] z-[2]"
            alt=""
            src="/vector.svg"
          />
        </div>
        <img
          className="absolute top-[1819px] left-[-18px] w-[100px] h-[100px] z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-149.svg"
        />
        <img
          className="absolute top-[1819px] left-[-33px] w-[1476px] h-[315px] object-cover z-[2]"
          alt=""
          src="/rectangle-150@2x.png"
        />
      </div>
    </div>
  );
};

export default MarketplaceSepatu;
