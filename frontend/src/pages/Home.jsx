import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png"
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      {/*======== HERO SECTION ============== */}
      <>
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ======= hero content========= */}
              <div>
                <div className="lg:w-[570px]">
                  <h1>We help patients live a healthy, longer life.</h1>
                  <p className="text__para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto neque perferendis doloribus quo eligendi blanditiis at
                    debitis rem nobis illum explicabo quibusdam,
                  </p>

                  <button className="btn text-sm p-3">
                    Request an Appointment
                  </button>
                </div>

                {/* ============= hero counter =============== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block"></span>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block"></span>
                    <p className="text__para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
              {/* =========== hero content ============ */}

              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={heroImg01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========== hero section end ===================== */}
        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text__para text-center">
                world-class care for everyone. Our health System offers
                unmatched, expert health care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon1} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers 
                    unmatched, expert health care.
                  </p>
                  <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid ">
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] "></div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
