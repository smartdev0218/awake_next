import { Paper } from '@material-ui/core'
import styled from 'styled-components'

import { colors } from 'config'

const Card = styled(Paper)`
  min-height: 350px;
  padding: 0 30px;
  margin-bottom: 24px;
  border-radius: 20px !important;
  display: flex;
  flex-direction: column;
  flex: 1;

  .form-container {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    padding: 40px 0 32px 0;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-container {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    border-top: solid 1px ${colors.borderColor};  
  }

  p {
    font-size: 14px;
    line-height: 25.4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    color: ${colors.textColor};
    text-align: center;
  }

  .title {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${colors.darkBlue}
  }

  .subtitle {
    font-size: 14px;
    line-height: 25.4px;
    color: ${colors.textColor};
    margin: 8px 0 4px 0;
  }

  .orange-text {
    color: ${colors.orangeColor};

    &:hover {
      cursor: pointer;
    }
  }

  .phonenumber {
    font-size: 14px;
    line-height: 25.4px;
    font-weight: 500;
    color: ${colors.darkBlue};
  },
`

export default Card
