import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "#0", name: "Dribbble."},
        {link: "#0", name: "Behance."},
        {link: "#0", name: "Linkedin."},
        {link: "#0", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  flex flex-row space-x-16', className)}>
            <div className="nav__info menu-col second-col w-1/3">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Studio</h5>
                    <p>
                        26-30 New Damietta <br/> El-Mahalla El-Kubra, SK1 66LM
                    </p>

                </div>
            </div>
            <div className="nav-social nav-content menu-col second-col w-1/3">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
            <div className="nav-social nav-conten menu-col second-col w-1/3">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Contact Us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;