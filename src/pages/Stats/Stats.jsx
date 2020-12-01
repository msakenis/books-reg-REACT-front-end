import React, { useState, useEffect, useContext } from 'react';
import * as S from './Stats.style';
import { HighlightIdContext } from '../../contexts/HighlightId.context';
import { HeaderBase } from '../../components';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

function Stats() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');
  const selectedId = useContext(HighlightIdContext);

  selectedId.setId(3);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/stats/users`, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [token]);

  return (
    <>
      <S.StatsPage />

      <S.StatsBox>
        <HeaderBase />
        <S.ChartBox>
          <h3>New users registered:</h3>
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="monthName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="newUsers" stroke="#8884d8" />
          </LineChart>
        </S.ChartBox>
      </S.StatsBox>
    </>
  );
}

export default Stats;
