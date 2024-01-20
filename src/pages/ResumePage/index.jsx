import MenuBookIcon from '@mui/icons-material/MenuBook';
import './index.scss';
const ResumePage = () => {
    return (
        <div className="aboutPageWrap">
            <div className="titleWrap">
                <span className='horizontalLine'>
                    Resume
                </span>
            </div>
            <div className='section'>
                <div className='titleWrap'>
                    <span className='iconWrap'>
                        <MenuBookIcon />
                    </span>
                    <span>
                        Education
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ResumePage