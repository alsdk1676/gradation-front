import styled from 'styled-components'
import { EN_H2, EN_H6, H1, H10, H2, H3, H4, H5, H6, H7, H8 } from '../../../styles/common';
import { Link } from 'react-router-dom';
const primary = "#EE3333";
const gray900 = "#6E7476";
const gray500 = "#C0C5C7";
const black = "#333333";
const white = "#FBFCFC"

const S = {};

S.DetailWrap = styled.div`
  display: flex;
  gap: 130px;
  margin-top: 100px;
`;

S.Left = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

S.Name = styled.div`
  ${H2};
  margin-top: 20px;
  text-align: center;
`;

S.University = styled.p`
  ${H6};
  margin-top: 20px;
`;

S.Button = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 50px;
  border-radius: 2px;
  border: 1px solid ${primary};
  background-color: ${primary};
  gap: 4px;

  p {
    ${H5};
    color: ${white};
  }
`;

S.MessageIcon = styled.img`
  width: 20px;
  height: 20px;
`

S.SNSWrap = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

S.SnS = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 28px;
  text-decoration: none;
  color: inherit; 

  p {
    ${EN_H6};
  }
`

S.SnSText = styled.p`
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`

S.SnSIcon = styled.img`
  width: 20px;
  height: 20px;

`

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

S.Right = styled.div`
`;

S.Container = styled.div`
`

S.WriterIntroWrap = styled.div`
  width: 840px;
  margin-bottom: 60px;
`
S.Title = styled.p`
  ${H3};
  margin-bottom: 20px;
  display: inline-block;
`
S.WriterIntro = styled.p`
  ${H8};
`
S.Category = styled.div`
  margin-bottom: 60px;
`;

S.History = styled.div`
  display: inline-block;
  margin: 0 60px 30px 0;
`;

S.Arts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  column-gap: 120px;
  row-gap: 72px;
  justify-content: center;
`

S.Art = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  text-decoration: none;
  color: inherit;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`


S.Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

S.Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
`
S.H2 = styled.p`
  ${H2}
  font-size: 16px;
  font-weight: 300;
  color: ${white};
`

S.H4 = styled.p`
  ${H4}
  font-size: 24px;
  font-weight: 200;
  color: ${white};
`


// 페이지네이션
S.PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 160px 0 0 0;
`

S.PagenationButton = styled.div`
  width: 9px;
  height: 20px;
  color: ${(props) => (props.$active ? '#FF3333' : '#6E7476')};
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;

  &:hover {
    color: #333333;
  }
`

S.PagenationIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export default S;
