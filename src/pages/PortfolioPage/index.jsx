import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../../constants/data';
import StyledPortfolioPage from './StyledPortfolioPage';

const PortfolioPage = () => {
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        switch (route) {
            case 'signIn':
                navigate('/signin');
                break;
            case 'signUp':
                navigate('/signup');
                break;
            case 'todoList':
                navigate('/todo_list');
                break;
            case 'adminPortal': {
                navigate('/admin_portal');
                break;
            }
            default:
                break;
        }
    }
    return (
        <StyledPortfolioPage>
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
        </StyledPortfolioPage>
    )
}

export default PortfolioPage;