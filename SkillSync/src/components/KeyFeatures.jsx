import KeyFeatureCard from "./KeyFeatureCard";
import GoalIcon from "../assets/icon.svg"
import ManIcon from "../assets/man-icon.svg"
import AnalyticsIcon from "../assets/analytics-icon.svg"



function KeyFeatures() {

    return(
        <>
            <div className="key-features">
                <div className="svg-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E6EFFE" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
                </div>

                <div className="key-features-content">
                    <h2>Why Choose SkillSync</h2>
                    <div className="all-features">
                        <KeyFeatureCard icon={GoalIcon} feature="Personalized Learning Paths" description="Al-driven skill development tailored to industry demands and your career goals."/>
                        <KeyFeatureCard icon={ManIcon} feature="Smart Matching" description="Advanced algorithms connect the right talent with the right opportunities."/>
                        <KeyFeatureCard icon={AnalyticsIcon} feature="Real-time Analytics" description="Data-driven insights to track progress and optimize hiring decisions."/>
                    </div>
                </div>

                <div className="svg-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E6EFFE" fill-opacity="1" d="M0,160L120,133.3C240,107,480,53,720,53.3C960,53,1200,107,1320,133.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                </div>
            </div>
        </>
    );
}

export default KeyFeatures