import Footer from "../../components/footer/Footer";
import Body from "../../components/body/Body";
import Header from "../../components/header/Header";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <Header
        leftText={"ABOUT US"}
        centerText={"REGISTER"}
        rightText={"LOGIN"}
      />
      <Body
        content={"SOME PLACEHOLDER TEXT THAT TAKES UP SPACE"}
        content2={"SOME PLACEHOLDER TEXT THAT TAKES UP SPACE"}
        content3={"SOME PLACEHOLDER TEXT THAT TAKES UP SPACE"}
        content4={"SOME PLACEHOLDER TEXT THAT TAKES UP SPACE"}
      />
      <Footer
        leftText={"Our Partners: Name1, Name2, Name3"}
        centerText={"Page designed by _____"}
        address={"Street mcStreetFace 58, Prague, Czech Republic"}
      />
    </>
  );
};

export default HomePage;
