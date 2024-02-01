import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import {userProfileData} from '../../constants/data';
import { deleteUser } from '../../store/reducers/adminPortal/adminPortalSlice';
import StyledAdminPortal from './StyledAdminPortal';
const AdminPortal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userData.userData);
    const [filterData, setFilterData] = useState(userData);
    const [searchData, setSearchData] = useState('')
    const handleDelete = (index) => {
        const adminUserDataTemp = userData.filter((item, indexTemp) => index !== indexTemp)
        dispatch(deleteUser(adminUserDataTemp));
        const filterDataTemp = filterData.filter((item, indexTemp) => index !== indexTemp);
        setFilterData(filterDataTemp);
    }
    const handleFilter = (event) => {
        if (event) {
            let searchTerm = event.target.value;
            setSearchData(searchTerm)
            const filterDataTemp = userData.filter((item) => item.fullName.includes(searchTerm));
            setFilterData(filterDataTemp);
        }
    }
    const handleNavigation = (path) => {
        navigate(path);
    }
    return (
        <StyledAdminPortal>
            <div className="adminPortalWrap">
                <div className="titleWrap">
                    <span className='horizontalLine'>
                        Admin Portal
                    </span>
                </div>
                <div className='adminPortalContentWrap'>
                    <div className='addUserButtonWrap'>
                        <Button
                            variant='contained'
                            onClick={() => handleNavigation('/signUp')}
                        >
                            Add User
                        </Button>
                    </div>
                    <div className='searchBoxWrap'>
                        <TextField
                            fullWidth
                            name='searchBox'
                            placeholder='Search Box'
                            value={searchData}
                            onChange={(event) => handleFilter(event)}
                        />
                    </div>
                    <div className='userCardsWrap'>
                        {filterData &&
                            filterData?.map((item, index) => (
                                <div key={index} className='userCardWrap'>
                                    <div className='topButtonWrap'>
                                        <Button
                                            className='deleteIconWrap'
                                            onClick={() => handleDelete(index)}
                                            disabled={index === 0}
                                            startIcon={<DeleteIcon style={{ color: 'red' }} />}
                                        >
                                        </Button>
                                        <span className='previewIconWrap'>
                                            <VisibilityIcon style={{ color: '#533d3d' }} />
                                        </span>
                                    </div>
                                    <div className='userImageWrap'>
                                        {item.image ? item.image : <PersonIcon sx={{ height: '4rem', width: '4rem' }} />}
                                    </div>
                                    <div className='userDatilsWrap'>
                                        <div className='nameWrap'>
                                            Name:- {item.fullName}
                                        </div>
                                        <div className='usernameWrap'>
                                            UserName:- {item.username}
                                        </div>
                                        <div className='emailWrap'>
                                            Email:- {item.email}
                                        </div>
                                        <div className='passwordWrap'>
                                            Password:- {item.password}
                                        </div>
                                    </div>
                                    <div className='editButtonWrap'>
                                        <EditIcon />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </StyledAdminPortal>
    )
}

export default AdminPortal;