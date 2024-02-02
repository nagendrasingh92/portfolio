import { styled } from '@mui/material/styles';

const StyledAboutPageWrapper = styled('div')(
  ({ theme }) => `
  .aboutPageWrap {
    color: ${theme.palette.customColor.text.main};
    text-align: left;
    padding: 2rem 1.7rem;

    .titleWrap {
      font-weight: 800;
      font-size: 1.8rem;
      
      .horizontalLine {
        padding-bottom: 0.7rem;
        border-bottom: 0.2rem solid grey;
      }
    }
      
    .contentWrap {
      margin: 2rem 0;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.7;
    }
  
    .cardsWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 2rem;
  
      .cardWrap {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        flex: 0 1 calc(19% - 1em);
        border-radius: 1rem;
        aspect-ratio: 1;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: transform 0.3s ease;
        flex-direction: column;

        &:hover {
          transform: scale(1.05);
        }

        .cardImageWrap{
          height: 70%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .iconTitleWrap{
          font-size: 1.6rem;
          
        }
      }
    }
    @media screen and (max-width: 1200px){

      .cardsWrap {

        .cardWrap {

          .cardImageWrap{

            img{
              height: 70%;
            }
          }
  
          .iconTitleWrap{
            font-size: 1.3rem;
            
          }
        }
      }
    }
    @media screen and (max-width: 1000px){

      .cardsWrap {

        .cardWrap {
          flex: 0 1 calc(28% - 1rem);
          .cardImageWrap{
            img{
              height: 70%;
            }
            svg{
              height: 70%;
            }
          }
  
          .iconTitleWrap{
            font-size: 1.3rem;
            
          }
        }
      }
    }

    @media screen and (max-width: 700px){

      .cardsWrap {

        .cardWrap {
          flex: 0 1 calc(40% - 1rem);
          .cardImageWrap{
            img{
              height: 70%;
            }
            svg{
              height: 70%;
            }
          }
  
          .iconTitleWrap{
            font-size: 1.3rem;
            
          }
        }
      }
    }
  }
`)

export default StyledAboutPageWrapper;