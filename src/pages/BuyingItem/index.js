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
import ReactPaginate from "react-paginate";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "200px",
  borderColor: "red",
};

const BuyingItem = () => {
  const [navLink, setNavLink] = useState("active");
  const [loading, setLoading] = useState(true);
  const [needs, setNeeds] = useState([]);
  const [paids, setPaids] = useState([]);
  const [items, setItems] = useState([]);
  const itemsPerPage = 3;
  const [activePost, setActivePost] = useState(itemsPerPage);
  const { users } = useSelector((state) => state);
  const { __u__ } = users;

  useEffect(() => {
    __getData("/items", __u__.token)
      .then((res) => {
        setLoading(false);
        setNeeds(res.needs);
        setPaids(res.paids);
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

  const handlePagination = (state) => {
    if (navLink === "active") {
      if (state === "next") {
        if (activePost + itemsPerPage >= needs.length) {
          setActivePost(needs.length);
        } else {
          setActivePost(activePost + itemsPerPage);
        }
      } else {
        if (needs.length > itemsPerPage) {
          if (activePost - itemsPerPage >= itemsPerPage) {
            const _rem = needs.length % itemsPerPage;
            if (_rem > 0) {
              setActivePost(activePost - _rem);
            } else {
              setActivePost(activePost - itemsPerPage);
            }
          }
        }
      }
    }
  };

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
          <TableNavList>
            <li
              onClick={() => setNavLink("active")}
              className={navLink === "active" ? "active" : ""}
            >
              Active ({needs.length})
            </li>
            <li
              onClick={() => setNavLink("paid")}
              className={navLink === "paid" ? "active" : ""}
            >
              Paid ({paids.length})
            </li>
          </TableNavList>
          <Table
            active={navLink === "active" ? true : false}
            activePost={activePost}
            needs={
              navLink === "active"
                ? needs.slice(activePost - itemsPerPage, activePost)
                : paids
            }
            items={items}
            setItems={setItems}
          />

          <ArrowRight>
            {/* <Link className="active" to="/"> */}
            <img
              onClick={() => handlePagination("prev")}
              style={{ transform: "scaleX(-1)", marginRight:"5px" }}
              src="/img/icon/arrow-right.png"
              alt="right-arrow"
            />
            {/* </Link> */}
            {/* <Link to="/add-new-item"> */}
            <img
              onClick={() => handlePagination("next")}
              src="/img/icon/arrow-right.png"
              alt="left arrow"
            />
            {/* </Link> */}
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
  img {
    cursor: pointer;
  }
`;
const TableNavList = styled.ul`
  margin-top: 10px;
  margin-left: 40px;
  li {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: rgba(14, 55, 70, 0.4);
    border-right: 2px solid rgba(14, 55, 70, 0.4);
    display: inline-block;
    margin-right: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
    cursor: pointer;
  }
  li:last-child {
    border-right: none;
  }
  li.active {
    color: #2291f1;
  }
`;
