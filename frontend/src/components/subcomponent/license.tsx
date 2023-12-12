const License: React.FC = () => {
  const htmlContent = `
    <a href="https://github.com/AlvaroPenaRuiz/campus_restaurant_manager">
      Campus Restaurant Manager
    </a> by
    <a href="https://github.com/AlvaroPenaRuiz/">
      Álvaro Pena Ruiz
    </a> is licensed under
    <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">
      CC BY-SA 4.0
      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
      <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1">
    </a>
  `;

  return <p className="license" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default License;
