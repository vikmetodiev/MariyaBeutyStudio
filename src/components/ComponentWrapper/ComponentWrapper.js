import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Galery from "./components/galery/Galery";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import React from "react";
const ComponentWrapper = () => {
  const [value, setValue] = React.useState(0);
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="position-relative">
      <Header />
      <div className={"component-layout"}>
        <Home />
      </div>
      <div className={"component-layout"}>
        <About />
      </div>
      <div className={"component-layout"}>
        <Services
          a11yProps={a11yProps}
          handleChange={handleChange}
          value={value}
        />
      </div>
      <div>
        <Galery handleChange={handleChange} />
      </div>
      <div className={"component-layout"}>
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default ComponentWrapper;
