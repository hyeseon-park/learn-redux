import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { testApi } from "service/testApi";
import { useHistory } from "react-router";

const Div = styled.div`
  height: 200px;
  background-color: #baabda;
  border: 1px solid purple;
`;

const Test1 = () => {
  const history = useHistory();
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
      testApi
        .getOrder(152801, 1)
        .then((result) => {
          if (result.data.meta.errCode === 0) {
            setList(result.data.data.list);
          } else {
            console.log(result);
          }
        })
        .catch((error) => {
          alert("서버가 혼잡하여 통신이 원활하지 않습니다. 다시 시도해주세요.");
        });
    } catch (error) {
      history.push({ pathname: "/error" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {list.map((item, idx) => (
        <Div key={idx} onClick={() => history.push("/test2")}>
          {item.goodsName}
        </Div>
      ))}
    </>
  );
};

export default Test1;
