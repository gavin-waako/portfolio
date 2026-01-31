const HeadingSecondary = ({ children, className }) => {
  return (
    <h3
      className={`text-xl md:text-2xl lg:text-3xl bg-gradient-text-light dark:bg-gradient-text bg-clip-text leading-tight text-transparent mb-10px wow fadeInUp ${
        className ? className : ""
      }`}
      data-wow-delay=".3s"
    >
      {children ? children : ""}
    </h3>
  );
};

export default HeadingSecondary;
