import React from "react";

const Footer = ({ footerDatas }) => {
  return (
    <footer className="footer">
      {footerDatas?.map((footerData) => {
        return (
          <div className="article">
            <h2>{footerData.title}</h2>

            <ul>
              {footerData.lists.map((list) => (
                <li>{list}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
