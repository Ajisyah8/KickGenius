import PropTypes from "prop-types";

const NavigationBar = ({ className = "" }) => {
  return (
    <header
      className={`w-[1205px] flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <img
          className="h-[117px] w-[139px] relative object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/pngtreeshoes-sneakers-icon-logo-vector-6866359-1@2x.png"
        />
        <div className="w-[792px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px]">
            <nav className="m-0 w-[416px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full mq450:w-0 mq1050:hidden">
              <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-base text-color-primary-dark-brown font-lato mq450:hidden">
                <a className="[text-decoration:none] relative tracking-[0.12em] uppercase font-black text-[inherit] inline-block min-w-[57px] z-[1]">
                  Home
                </a>
                <a className="[text-decoration:none] relative tracking-[0.12em] uppercase font-black text-[inherit] inline-block min-w-[66px] z-[1]">
                  About
                </a>
                <a className="[text-decoration:none] relative tracking-[0.12em] uppercase font-black text-[inherit] inline-block min-w-[92px] z-[1]">
                  Snickers
                </a>
                <a className="[text-decoration:none] relative tracking-[0.12em] uppercase font-black text-[inherit] inline-block min-w-[74px] z-[1]">
                  Trends
                </a>
              </nav>
            </nav>
            <div className="w-[183.7px] flex flex-row items-start justify-start gap-[39.9px]">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-[35.8px] h-[35.2px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/cart.svg"
                />
              </div>
              <button className="cursor-pointer py-3 pr-[29px] pl-[30px] bg-[transparent] flex flex-row items-start justify-start z-[1] border-[1px] border-solid border-color-primary-dark-brown hover:bg-dimgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <a className="[text-decoration:none] relative text-sm tracking-[0.05em] uppercase font-bold font-lato text-color-primary-dark-brown text-left inline-block min-w-[47px]">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
};

export default NavigationBar;
