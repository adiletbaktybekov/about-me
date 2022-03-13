import React from 'react';
import photo from "./components/About/img/photo_2022-02-08_15-47-07.jpg"
const About = () => {
    return (
        <div>
            <div className="container">
                <div className="ssd d-flex justify-content-center my-5">
                    <div className="contents-admins-me">
                        <div className="row flex-row">
                            <div className="col-6 mx-5 my-5">
                                <h3>ksxdclop</h3>
                                <img src={photo} alt=""/>
                            </div>
                            <div className="col-6  mx-5 my-5">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;