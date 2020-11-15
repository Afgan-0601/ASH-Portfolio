import Styled from 'styled-components'
import { detailColor, black } from './GlobalStyle'

export const StyledSinglePost = Styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 10% 0;
opacity: ${(props) => (props.menu === 1 ? '.3' : 1)};

.card {
    width: 65%;
    box-shadow: 0 0 15px rgba(0,0,0,.2);
    border-radius: 15px;
    padding: 10px 50px;

    .title {
        h1 {
            color: ${detailColor};
        }
    }

    .image {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        z-index: 3000;

        img {
            width: 80%;
            border-radius: 15px;
            margin: 20px;
        }
    }

    .text {
        div {

            h3 {
                color: ${detailColor};
            }

            h4, p {
                color: ${black};
                
            }
        }
    }

    .author {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 25px 0;
     
         .name {
             font-size: 12px;      
             margin: 2px;
             padding: 0;
             color: ${black};
         }
    }
}

ol {
    li {
        margin-top: 15px;
    }
}

@media screen and (max-width: 500px) {
    .card {
        width: 90%;
        margin: 50px 0;
        padding: 10px 15px;

        .image {
            img {
                border-radius: 0;
            }
        }
    }
}

`
