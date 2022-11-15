import React, { useEffect, useState, CSSProperties } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddItem from "../../components/AddItem";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table/Index";
import DotLoader from "react-spinners/DotLoader";
import { authPost, __getData } from "../../__lib__/helpers/HttpService";
import { Toaster, toast } from "react-hot-toast";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const BuyingItem = () => {
  const [loading, setLoading] = useState(true);
  const [needs, setNeeds] = useState(null);
  const [items, setItems] = useState([]);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  useEffect(() => {
    __getData("/items", __u__.token)
      .then((res) => {
        setLoading(false);
        setNeeds(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    authPost("/remove-items", { _ids: items }, __u__.token).then((res) => {
      console.log(res);
      if (res.success) {
        toast.success(`${res.message}`);
        __getData("/items", __u__.token).then((res) => {
          setNeeds(res);
        });
      }
    });
  };
  console.log(__u__.token);
  console.log("needs-needs", needs);
  return (
    <div>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <DotLoader color="#3b9df1" loading={loading} cssOverride={override} />

      {!loading && needs && needs.length > 0 && (
        <>
          <Title>
            <h3>Needs</h3>

            <Button>
              {items.length > 0 && (
                <img
                  style={{ cursor: "pointer" }}
                  onClick={handleDelete}
                  src="/img/icon/trash-icon.png"
                  alt=""
                />
              )}
              <Link to="/add-new-item">Add New</Link>
            </Button>
          </Title>
          <Table needs={needs} items={items} setItems={setItems} />
          <ArrowRight>
            <Link className="active" to="/">
              <img src="/img/icon/arrow-right.png" alt="" />
            </Link>
            <Link to="/add-new-item">
              <img src="/img/icon/arrow-right.png" alt="" />
            </Link>
          </ArrowRight>
        </>
      )}

      {!loading && needs && needs.length === 0 && (
        <>
          <Title3>
            <h3>Needs</h3>
          </Title3>
          <AddItem />
        </>
      )}
    </div>
  );
};

export default BuyingItem;

const Title = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 62px;
    color: #0e3746;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
const Title3 = styled(Title)`
  h3 {
    line-height: 0;
    color: #0e3746;
    margin-top: 45px;
    margin-bottom: 10px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 35px;
  }
  a {
    background: rgba(34, 145, 241, 0.14);
    border-radius: 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #2291f1;
    text-decoration: none;
    padding: 12px 24px;
  }
  @media only screen and (max-width: 688px) {
    a {
      font-size: 6px;
    }
  }
`;
const ArrowRight = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  a:first-child {
    transform: rotate(180deg);
    margin-right: 15px;
  }
  a.active {
    opacity: 0.5;
  }
`;
