import bootstrapIcon from '../assets/svg/bootstrapIcon.svg';
import cssIcon from '../assets/svg/cssIcon.svg';
import gitHubIcon from '../assets/svg/gitHubIcon.svg';
import gitIcon from '../assets/svg/gitIcon.svg';
import htmlIcon from '../assets/svg/htmlIcon.svg';
import jsIcon from '../assets/svg/jsIcon.svg';
import reactIcon from '../assets/svg/reactIcon.svg';
import sassIcon from '../assets/svg/sassIcon.svg';
import vsCodeIcon from '../assets/svg/vsCodeIcon.svg';
import signInImage from '../assets/images/signIn.png';
import signUpImage from '../assets/images/signUp.png';
import adminPortalImage from '../assets/images/adminPortal.png';
import underConstruction from '../assets/images/underConstruction.jpg';

const iconData = [
    vsCodeIcon,
    htmlIcon,
    cssIcon,
    jsIcon,
    sassIcon,
    bootstrapIcon,
    gitHubIcon,
    gitIcon,
    reactIcon,
]
const userProfileData = [
    {
        id: 1,
        fullName: 'admin',
        username: 'admin123',
        password: '123456789',
        email: 'admin123@gmail.com',
        image: '',
    },
    {
        id: 2,
        fullName: 'guest',
        username: 'guest123',
        password: '123456789',

        email: 'guest123@g.com',
        image: '',
    },
    {
        id: 3,
        fullName: 'test1',
        username: 'test123',
        password: '123456789',
        email: 'test123@g.com',
        image: '',
    },
    {
        id: 4,
        fullName: 'test2',
        username: 'test223',
        password: '123456789',
        email: 'test223@g.com',
        image: '',
    },
    {
        id: 5,
        fullName: 'test3',
        username: 'test323',
        password: '123456789',
        email: 'test323@g.com',
        image: '',
    },
    {
        id: 6,
        fullName: 'test4',
        username: 'test423',
        password: '123456789',
        email: 'test423@g.com',
        image: '',
    },

]
const publicLayoutNavBarData = [
    'About', 'Resume', 'Portfolio', 'Contact',
]

const portfolioData = [
    {
        name: 'adminPortal',
        icon: adminPortalImage,
        title: 'Admin Portal'
    },
    {
        name: 'signIn',
        icon: signInImage,
        title: 'Sigin page'
    },
    {
        name: 'signUp',
        icon: signUpImage,
        title: 'Signup page'
    },
    {
        name: '',
        icon: underConstruction,
        title: 'Calculator'
    },
    {
        name: '',
        icon: underConstruction,
        title: 'Number Game'
    },
    {
        name: '',
        icon: underConstruction,
        title: 'Todo List'
    },
    {
        name: '',
        icon: underConstruction,
        title: 'Weather find'
    },
    {
        name: '',
        icon: underConstruction,
        title: 'E-commorse'
    },
]

export {
    portfolioData,
    userProfileData,
    iconData,
    publicLayoutNavBarData,
}