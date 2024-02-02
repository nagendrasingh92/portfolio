import { styled } from '@mui/material/styles';

const StyledResumePage = styled('div')(
    ({ theme }) => `
    .resumePageWrap {
        text-align: left;
        padding: 2rem 1.7rem;
        color: ${theme.palette.customColor.text.main};

        .titleWrap {
            font-weight: 800;
            font-size: 1.8rem;
    
            .horizontalLine {
                padding-bottom: 0.7rem;
                border-bottom: 0.2rem solid grey;
            }
        }
    
        .section {
            margin-top: 3rem;
    
            .titleGroupWrap {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                margin-bottom: 1rem;
                position: relative;
                z-index: 1;
    
                .iconWrap {
                    border: 1px solid black;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    padding: 0.6rem;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 0.6rem;
                    background: ${theme.palette.customColor.background.paper};   
                }
    
                .titleWrap {
                    font-weight: 500;
                }
            }
    
            .sectionDetailsWrap {
                margin-left: 4.3rem;
                position: relative;
                margin-bottom: 1.5rem;
    
                .titleWrap {
                    position: relative;
                    font-weight: 700;
                    font-size: 1.2rem;
                }
    
                .titleWrap::before {
                    position: absolute;
                    content: "";
                    top: 0.2rem;
                    left: -3.5rem;
                    width: 1rem;
                    height: 1rem;
                    background: black;
                    border-radius: 50%;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    border: 1px solid white;
                }
                .durationWrap {
                    font-weight: 600;
                    font-size: 1.1rem;
                }
    
                &:not(:last-child)::before {
                    content: "";
                    position: absolute;
                    top: -1.1rem;
                    left: -3.03rem;
                    width: 0.1rem;
                    height: 6.8rem;
                    background: ${theme.palette.customColor.text.main};
                }
            }
        }
    
        .downloadButtonWrap {
            text-align: right;
        }
    }
`)

export default StyledResumePage;