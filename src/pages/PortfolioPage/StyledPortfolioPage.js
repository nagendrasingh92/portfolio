import { styled } from '@mui/material/styles';

const StyledPortfolioPage = styled('div')(
    ({ theme }) => `
    .portfolioPageWrap {
        text-align: left;
        padding: 2rem 1.7rem;
        color: ${theme.palette.customColor.text.main};

        .titleWrap {
            font-weight: 800;
            font-size: 1.8rem;
            margin-bottom: 4rem;
      
            .horizontalLine {
                padding-bottom: 0.7rem;
                border-bottom: 0.2rem solid grey;
            }
        }
      
        .cardsWrap {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
      
            .cardWrap {
                flex: 0 1 24%;
                aspect-ratio: 1;
                overflow: hidden;
                border-radius: 0.8rem;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                transition: transform 0.3s ease;

                &:hover {
                    transform: scale(1.05);
                }

                .imageWrap {
                    width: 100%;
        
                    img {
                        width: 100%;
                        height: 14rem;
                    }
                }
            }
        }
    } 
`)

export default StyledPortfolioPage;