import MenuBookIcon from '@mui/icons-material/MenuBook';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material';
import StyledResumePage from './StyledResumePage';
const ResumePage = () => {
    return (
        <StyledResumePage>
            <div className="resumePageWrap">
                <div className="titleWrap">
                    <span className='horizontalLine'>
                        Resume
                    </span>
                </div>
                <div className='section'>
                    <div className='titleGroupWrap'>
                        <span className='iconWrap'>
                            <MenuBookIcon />
                        </span>
                        <span className='titleWrap'>
                            Experience
                        </span>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            Software Engineering Trainee:- Dianapps Technologies Pvt. Ltd.
                        </div>
                        <div className='durationWrap'>
                            2023 - Present
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            TBS Expert:- Chegg India Pvt. Ltd.
                        </div>
                        <div className='durationWrap'>
                            2022 - 2023
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            Q & A Expert:- Chegg India Pvt. Ltd.
                        </div>
                        <div className='durationWrap'>
                            2020 - 2022
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='titleGroupWrap'>
                        <span className='iconWrap'>
                            <MenuBookIcon />
                        </span>
                        <span className='titleWrap'>
                            Education
                        </span>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            B.Tech:- M.L.V. Govt. Textile & Engg. College, Bhilwara
                        </div>
                        <div className='durationWrap'>
                            2010 - 2014
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            Sr. Secondary:- Bal Niketan Gandhi Seva Sadan, Rajsamand
                        </div>
                        <div className='durationWrap'>
                            2009 - 2010
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                    <div className='sectionDetailsWrap'>
                        <div className='titleWrap'>
                            Secondary:- Gayatri vidhya mandir school, Rajasamand
                        </div>
                        <div className='durationWrap'>
                            2007 - 2008
                        </div>
                        <div className='descriptionWrap'>
                        </div>
                    </div>
                </div>
                <div className='downloadButtonWrap'>
                    <a
                        href='https://drive.google.com/file/d/1nExGY3nw-zHPzdpRUUnrxsW_VYPhPTF6/view?usp=sharing'
                        download="myResume.pdf"
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button

                            variant="contained"
                            startIcon={<FileDownloadIcon />}
                            sx={{
                                borderRadius: '1rem',
                                cursor: 'pointer',
                                textTransform: 'none',
                            }}
                        >
                            Download Resume
                        </Button>
                    </a>
                </div>
            </div>
        </StyledResumePage>
    )
}

export default ResumePage