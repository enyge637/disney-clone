import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT0wD5XL1YAv0-1oV4ep-nWBc4i7eA-Grb_ET6foPnIxmd-ZXd33QALAJVf43QocjgsKC3JzvOdP-JWhCzRsGZACZn0PlWwEPEgmdh5wByoXzZyEcCsp9SrZ03Vyqt6-qemqzzQIjb6gPAioLppAQnQ3tFI.webp?r=e54" />
        </Wrap>
        <Wrap>
          <img src="https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABet7938E2HEgGMrv1KDyoF-wwnXwTBD6-5yKNrFSLLArxTzcG6fHobcBismMOJwOsVtjhT0E7ZEFtIJbkmC9CORRG2jibEMELbH8RthKjJnAlhrr0yQpW04OE4I3.jpg?r=91f" />
        </Wrap>
        <Wrap>
          <img src="https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZRTY9EkT5huCxXlDBd1A_P_ZIQ5SMBrIuq8yah2AyFboFOn7b-yOo5kG_ieJJfibx8hyRqHrjdH7n8xuR-mJNab3QSs2WZnGkFcs8hRLK3SZbdi6z02rbMr9-eR.jpg?r=43d" />
        </Wrap>
        <Wrap>
          <img src="https://occ-0-3673-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVWfHo38uamBAovP2-8HrunQRcM4rVt37ShAlTAW19wGD3r-qggyoiOT8c5edh5Va6O6dqGioFIeUc7_0X0kdIEjkqA.webp?r=8ee" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scaleX(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
