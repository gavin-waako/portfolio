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
            <HeadingPrimary>Courses Done</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Java Programming I, Python Programming, Data Structures,
              Introduction to Computation (Discrete Mathematics), Calculus I,
              Systems Programming with C, Computer Architecture and Assembly
              Language, Intro to Computer Science, Pre-Calculus Mathematics, and
              Pre-Calculus CoreQ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
