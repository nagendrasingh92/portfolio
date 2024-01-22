import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { portfolioData } from '../../constants/data'; 
import './index.scss';

const PortfolioPage = () => {
    const navigate = useNavigate();
    const currentUserData = useSelector((state) => state.currentUserData.currentUserData);

    const handleNavigate = (route) => {
        switch (route) {
            case 'signIn':
                navigate('/signin');
                break;
            case 'signUp':
                navigate('/signup');
                break;
            case 'adminPortal':{
                console.log('hi',currentUserData)
                if(currentUserData[0].id === 1){
                    navigate('/admin_portal');
                } else {
                    navigate('/portfolio');
                }
                
                break;
            }
                
            default:
                break;
        }
    }
    return (
        <div className="portfolioPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Portfolio
                </span>
            </div>
            <div className='cardsWrap'>
                {portfolioData &&
                    portfolioData.map((item, index) => (
                        <div key={index} className='cardWrap' onClick={() => handleNavigate(item.name)}>
                            <div className='imageWrap'>
                                <img src={item.icon} alt={item.name} />
                            </div>
                            <div className='nameWrap'>
                                {item.title}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PortfolioPage;