import { styled } from '@mui/material/styles';

const StyledContactPage = styled('div')(
    ({ theme }) => `
    .contactPageWrap{
        text-align: left;
        padding: 2rem 1.7rem;
        color: ${theme.palette.customColor.text.main};

        
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

        .titleWrap{
            font-weight: 800;
            font-size: 1.8rem;
            margin-bottom: 3rem;

            .horizontalLine{
                padding-bottom: 0.7rem;
                border-bottom: 0.2rem solid grey;
            }
        }

        .contactFormWrap{
            .inputFiledWrap{
                width: 100%;
                display: flex;
                gap: 1rem;
                margin-bottom: 4rem;

                .nameWrap{
                    width: 100%;
                }

                .emailWrap{
                    width: 100%;
                }
            }

            .textAreaWrap{
                margin-bottom: 1.5rem;
            }
        }

        .buttonWrap{
            text-align: right;
        }
    }
`)

export default StyledContactPage;