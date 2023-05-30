import React from 'react';
import styled from "styled-components";

const StiledLegend = styled.div`
  display: grid;
  grid-template-rows: repeat(24, .40rem);
  margin-top: .30rem;
  div {
    color: #c0c0c0;
    font-size: .14rem;
    text-align: center;
  }
  
`

const Legend = () => {
    const getLegend = () => {
        const hours = []
        for(let i = 0; i < 24; i += 1){
            hours.push(<div key={i}>{`${i + 1}:00`}</div>)
        }
        return hours
    }

    return (
        <StiledLegend>
            {getLegend()}
        </StiledLegend>
    );
};

export default Legend;