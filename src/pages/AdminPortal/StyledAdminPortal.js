import { styled } from '@mui/material/styles';

const StyledAdminPortal = styled('div')(
    ({ theme }) => `  
    .adminPortalWrap{
        text-align: left;
        padding: 2rem 1.7rem;
        color: ${theme.palette.customColor.text.main};

        .titleWrap{
            font-weight: 800;
            font-size: 1.8rem;
            margin-bottom: 3rem;

            .horizontalLine{
                padding-bottom: 0.7rem;
                border-bottom: 0.2rem solid grey;
            }
        }

        .adminPortalContentWrap{
            border: 1px solid red;
            padding: 0.5rem;
            border-radius: 1rem;

            .addUserButtonWrap{
                text-align: right;
                margin:1rem 2rem 0rem 0rem; 
            }

            .searchBoxWrap{
                margin: 2rem 4rem;
            }

            .userCardsWrap{
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                justify-content: center;
                text-align: center;

                .userCardWrap{
                    flex: 0 1 27%;
                    border: 1px solid red;
                    // aspect-ratio: 1;
                    overflow: hidden;
                    border-radius: 0.8rem;

                    .topButtonWrap{
                        display: flex;
                        justify-content: space-between;
                        background:#007aff ;

                        .previewIconWrap{
                            margin: 0.3rem
                        }
                    }

                    .userImageWrap{
                        width: 100%;
                        
                        img{
                            width: 100%;
                            height: 10rem;
                        }
                    }

                    .userDatilsWrap{
                        text-align: left;
                        padding: 1rem;
                    }
                    
                    .editButtonWrap{
                        background-color: rgb(29, 150, 29);
                    }
                }
            }
        }
    }
`)

export default StyledAdminPortal;