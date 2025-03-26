import ActiveBg1 from "@/components/shared/active-bg/ActiveBg1";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ServiceItem from "@/components/shared/services/ServiceItem";
import getALlServices from "@/libs/getALlServices";

const Services1 = () => {
  const services = getALlServices();
  return (
    <section id="services">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-30 overflow-x-hidden">
        <div className="container">
          {/* <!-- section heading --> */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>My Expertise</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Computer Science student with a strong foundation in web/mobile
              software development, algorithms, and problem-solving. Authorized
              to work in the USA under OPT/CPT. Committed to delivering
              innovative solutions and contributing effectively to collaborative
              projects.
            </p>
          </div>
          {/* <!-- services --> */}
          <div className="services-widget relative">
            {services?.length
              ? services?.map((service, idx) => (
                  <ServiceItem key={idx} service={service} />
                ))
              : ""}

            {/* <!-- bg animation --> */}
            <ActiveBg1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
