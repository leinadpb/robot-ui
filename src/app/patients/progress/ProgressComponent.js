import React from 'react';
import styled from 'styled-components';

export const Bar = styled.div`
  width: 12px;
  height: 48px;
  background: ${(props) => props.color};
`;

export const Bars = styled.div`
  width: 100%;
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  padding-left: 28px;
  margin-bottom: 12px;
  span {
    font-weight: 600;
    color: white;
    font-size: 1.15rem;
  }
`;

const totalBars = [1, 7.14, 14.28, 21.42, 28.56, 35.7, 42.84, 49.98, 57.12, 64.26, 71.4, 78.54, 85.68, 92.82, 99.99];

const ProgressComponent = ({ title, colorActive, colorInactive, current, onChange }) => {
  const changeProgress = (pct, idx) => {
    if (!!onChange) {
      onChange(pct, idx);
    }
  };
  return (
    <Wrapper>
      <Title>
        <span>{title}</span>
      </Title>
      <Bars>
        {totalBars.map((pct, idx) => {
          return <Bar key={idx} onClick={() => changeProgress(pct, idx)} color={current >= pct ? colorActive : colorInactive} />;
        })}
      </Bars>
    </Wrapper>
  );
};

export default ProgressComponent;
