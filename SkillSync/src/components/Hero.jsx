import BlueButtonLarge from "./BlueButtonLarge";
import HollowButtonLarge from "./HollowButtonLarge";


function Hero() {

    return(
        <>
            <div className="hero-content">

                <div className="hero-info">
                    <h1>
                        Bridging the Gap Between <span className="hero-info-heading-color">Talent</span> and <span className="hero-info-heading-color">Opportunity</span>
                    </h1>
                    <p>
                        Empowering students with industry-ready skills and connecting companies with exceptional talent through our Al-driven platform
                    </p>
                </div>
                <div className="hero-buttons">
                    <BlueButtonLarge buttonName="Student Login"/>
                    <HollowButtonLarge buttonName="Company Login"/>
                </div>

            </div>

        </>
    );
}

export default Hero