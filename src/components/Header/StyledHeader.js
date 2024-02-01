import { styled } from '@mui/material/styles';

const StyledHeader = styled('div')(
  ({ theme }) => `
    .appBarWrap{
        background: ${theme.palette.customColor.background.paper};   
    }
    .stickyHeaderWrap {
        color: ${theme.palette.customColor.text.main};
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: left;
      
        .personalDetailsWrap {
          display: flex;
          align-items: center;
      
          .profileImageWrap {
            margin-right: 1rem;
            height: 3rem;
            width: 3rem;
      
            svg {
              height: 3rem;
              width: 3rem;
            }
          }
      
          .nameWrap {
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px;
          }
      
          .subDetailsWrap {
            display: flex;
            align-items: center;
          }
        }
      }
      
      .navBarWrap {
        display: flex;
        align-items: center;
      
        .modeChangeWrap {
          border-radius: 60%;
          height: 2rem;
          width: 2rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
      
          img {
            height: 4rem;
            border-radius: 50%;
          }
        }
      }
      
      @media (max-width: 1024px) {}
`)

export default StyledHeader;