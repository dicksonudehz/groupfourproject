import Image1container3 from "./images/Image2.png";
import Image1container4 from "./images/Macbook.png";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import "./homepagethree.css";
import MenuIcon from "@mui/icons-material/Menu";

function Homepagethree() {
  return (
    <>
      <div className="mainContainerThree">
        <img src={Image1container3} alt="a illustration content" />
        <div className="ContentContainerThree">
          <div className="navContainertThree">
            <span>Startup 3</span>
            <div className="navIconcon">
            <MenuIcon className="navIcon"/>
            </div>
            <input type="checkbox" className="checkboxed"/>
            <div className="navLinks">
              <ul>
                <li>tour</li>
                <li>prices</li>
                <li>about</li>
                <li>F.A.Q</li>
                <li>support</li>
              </ul>
              <button className="link">buy $38</button>
            </div>
          </div>
          <div className="bodyContentContainer">
            {/* left container content */}
            <div className="leftMainContent">
              <div className="topLeftContainer">
                <h1>
                  suit up your
                  <br /> start up
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Inventore ex rerum nesciunt culpa vitae? Velit iure eligendi,
                  <br />
                  earum laborum accusantium unde ullam omnis id explicabo
                  suscipit
                  <br />
                  veniam provident magnam perferendis?
                </p>
              </div>
              <div className="listBodyContent">
                <div className="leftBodyContent">
                  <SettingsSuggestIcon className="icon" />
                  <h3>Base on Bootstrap 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipisicing elit.
                    <br />
                    Inventore ex rerum nesciunt
                    <br />
                    culpa vitae? Velit iure
                    <br />
                    eligendi,
                  </p>
                </div>
                <div className="rightBodyContent">
                  <AddModeratorIcon className="icon" />
                  <h3>Base on Bootstrap 6</h3>
                  <p>
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipisicing elit.
                    <br />
                    Inventore ex rerum nesciunt
                    <br />
                    culpa vitae? Velit iure
                    <br />
                    eligendi,
                  </p>
                </div>
              </div>
            </div>
            <div className="rightMainContent">
              <img src={Image1container4} alt="illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepagethree;
