import React from "react";
import "../Content/Content.css";
import fimg from "../Content/f.jpg";
import simg from "../Content/s.jpg";
import thimg from "../Content/th.jpg";
import GirlImg from "../Content/Girl.jpg";

const Content = () =>{

    return (
        <>
        <section className="Content">
            <div className="Title-Cont">
                <h2>Inspiration Collection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="Images">
                <img src={fimg} alt="furniture"/>
                <img src={simg} alt="furniture"/>
                <img src={thimg} alt="furniture"/>
            </div>
            <div className="second-Cont">
                <div className="discription">
                    <h2>Beautify Your Space</h2>
                    <p>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <button>LEARN MORE</button>
                </div>
                <div className="img">
                    <img src={GirlImg} alt="Girl" />
                </div>
            </div>
            <div className="third-Cont">
                <div className="title-cont2">
                    <h2>Browse The Range</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Content;