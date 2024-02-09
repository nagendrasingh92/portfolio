import { styled } from '@mui/material/styles';

const StyledSignupPage = styled('div')(
    ({ theme }) => `
    .signupPageWrap {
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

        .signupPageContentWrap {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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

            .signupFormContent {
                
                .inputFieldWrap {
                    margin-bottom: 2rem;
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

export default StyledSignupPage;