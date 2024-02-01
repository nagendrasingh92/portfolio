import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setThemeMode } from '../../store/reducers/themeMode/themeModeSlice';
import { headerNavBarData } from '../../constants/data';
import sunGifImage from '../../assets/gif/sun.gif';
import moonGifImage from '../../assets/gif/moon.gif'
import StyledHeader from './StyledHeader';
// scroll start
const HideOnScroll = (props) => {
    const { children, window } = props;
    // const thresholdValue = 300;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        // threshold: thresholdValue,
    });
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
// scroll end
//Main function start
const StickyHeader = (props) => {
    const [currentMode, setCurrentMode] = useState(false);
    const themeMode = useSelector((state) => state.themeMode.mode);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    const handleNavigate = (route) => {
        switch (route) {
            case 'About':
                navigate('/');
                break;
            case 'Resume':
                navigate('/resume');
                break;
            case 'Portfolio':
                navigate('/portfolio');
                break;
            case 'Blog':
                navigate('/blog');
                break;
            case 'Contact':
                navigate('/contact');
                break;
            default:
                break;
        }
    }
    console.log('hiout', currentMode)

    const handleModeChange = () => {
        console.log('hi', currentMode)
        setCurrentMode(!currentMode)
        dispatch(setThemeMode(currentMode ? 'default' : 'dark'));
    }
    return (
        <StyledHeader>
            <div className="stickyWrap">
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar
                        className='appBarWrap'
                    >
                        <Toolbar>
                            <div className={`stickyHeaderWrap`}>
                                <span className="personalDetailsWrap">
                                    <span className="profileImageWrap">
                                        <PersonIcon />
                                    </span>
                                    <span>
                                        <div className="nameWrap">
                                            Nagendra Singh
                                        </div>
                                        <div className="subDetailsWrap">
                                            Web developer
                                        </div>
                                    </span>
                                </span>
                                <div className='navBarWrap'>
                                    {
                                        headerNavBarData?.map((item, index) => (
                                            <Button
                                                key={index}
                                                variant="standard"
                                                sx={{
                                                    textTransform: 'none',
                                                    textDecoration: 'none',
                                                    fontSize: '1.4rem',
                                                    position: 'relative',
                                                    '&:hover': {
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '1rem',
                                                    },
                                                    '&.active': {
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '1rem',
                                                    },
                                                }}
                                                onClick={() => handleNavigate(item)}
                                            >
                                                {item}
                                            </Button>
                                        ))
                                    }
                                    <div className='modeChangeWrap' onClick={() => handleModeChange()}>
                                        {
                                            themeMode === 'dark' ? <img src={moonGifImage} /> : <img src={sunGifImage} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </div>
        </StyledHeader>
    )
}

export default StickyHeader;