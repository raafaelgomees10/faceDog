import React, { useState } from "react";
import * as S from "./styles.js";
import { useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

const Graphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((prev, next) => prev + next, 0)
    );
    setGraph(graphData);
  }, [data]);
  return (
    <S.Section className="animeLeft">
      <S.Total>
        <p>Acessos: {total}</p>
      </S.Total>
      <S.GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2 },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </S.GraphItem>
      <S.GraphItem>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"></VictoryBar>
        </VictoryChart>
      </S.GraphItem>
    </S.Section>
  );
};

export default Graphs;
