
import { iconData } from '../../constants/data';
import './index.scss';

const AboutPage = () => {
    return (
        <div className="aboutPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    About Me
                </span>
            </div>
            <div className='contentWrap'>
                I serve as the Creative Director and UI/UX Designer based in Sydney,
                Australia, specializing in both web development and print media.
                My passion lies in transforming intricate challenges into elegant,
                intuitive designs.

                In the realm of web development, I derive satisfaction from crafting
                websites that seamlessly blend functionality with user-friendliness,
                all while exuding visual appeal. My commitment is to not only build
                your website but to ensure it stands out for its usability and aesthetic appeal.
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
            </div>
        </div>
    )
}
export default AboutPage;