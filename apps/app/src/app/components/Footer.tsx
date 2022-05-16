const Footer = () => {
  const currentYear = new Date().getFullYear();
  let yearDisplay = '2022';
  if (currentYear !== 2022) {
    yearDisplay = `2022-${currentYear.toString()}`;
  }
  return (
    <div className="footer">
      <a href="https://jonlervold.com">jonlervold.com</a> {`//`} {yearDisplay}
    </div>
  );
};

export default Footer;
