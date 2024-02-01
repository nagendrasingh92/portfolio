import { iconData } from '../../constants/data';
import StyledAboutPageWrapper from './StyledAboutPage';
import GitHubIconComp from '../../assets/svg/GitHubIconComp';
import { useSelector } from 'react-redux';

const AboutPage = () => {
    const themeMode = useSelector((state) => state.themeMode.mode);

    return (
        <>
            <StyledAboutPageWrapper>
                <div className="aboutPageWrap">
                    <div className="titleWrap">
                        <span className='horizontalLine'>
                            About Me
                        </span>
                    </div>
                    <div className='contentWrap'>
                        Welcome to my portfolio! I am a passionate and results-driven frontend developer with a
                        strong foundation in React.js. With a keen eye for detail and a commitment to delivering
                        high-quality user experiences, I thrive on transforming ideas into interactive and responsive
                        web applications.
                        I am always eager to collaborate on exciting projects and contribute to innovative solutions.
                        Let&apos;s connect and discuss how I can bring your ideas to life through the power of React.js!
                        Feel free to explore my projects and contact me for any inquiries or opportunities.
                        Thank you for visiting!
                    </div>
                    <div className='titleWrap'>
                        My Tech Stack
                    </div>
                    <div className='cardsWrap'>
                        {
                            iconData.map((item, index) => (
                                <div key={index} className='cardWrap'>
                                    <span className='cardImageWrap'>
                                        <img src={item} alt={item} />
                                    </span>
                                </div>
                            ))
                        }
                        <div className='cardWrap'>
                            <span className='cardImageWrap'>
                                <GitHubIconComp color={themeMode === 'default' ? 'black' : 'white'} />
                            </span>
                        </div>
                    </div>
                </div>
            </StyledAboutPageWrapper>
        </>
    )
}
export default AboutPage;