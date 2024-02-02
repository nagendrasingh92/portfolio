import { styled } from '@mui/material/styles';

const StyledSigninPage = styled('div')(
    ({ theme }) => `
    .signinPageWrap {
        text-align: left;
        padding: 2rem 1.7rem;
        color: ${theme.palette.customColor.text.main};

        .titleWrap {
            font-weight: 800;
            font-size: 1.8rem;
            margin-bottom: 3rem;
    
            .horizontalLine {
                padding-bottom: 0.7rem;
                border-bottom: 0.2rem solid grey;
            }
        }
    
        .signinPageContentWrap {
            border: 1px solid red;
            border-radius: 0.7rem;
            margin: 4rem;
            padding: 2rem 5rem;
    
            .headerButtonWrap {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 3rem;
    
                .buttonWrap {
                    width: 30%;
                }
            }
    
            .signinFormContent {
                .inputFieldWrap {
                    margin-bottom: 2rem;
                    .MuiOutlinedInput-root {
                        background-color: white;
                    }
            
                    .MuiInputLabel-root {
                        color: ${theme.palette.customColor.text.dark} !important;
                    }
            
                    .MuiOutlinedInput-input {
                        &::placeholder {
                            color: ${theme.palette.customColor.text.dark};
                        }
                    }
                }
            }
        }
    
        .hintWrap {
            margin-top: 1rem;
            color: red;
            font-weight: bold;
        }
    }
`)

export default StyledSigninPage;