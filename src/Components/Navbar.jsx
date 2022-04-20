import React from "react";
import "../Css/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="right">
        <span>
          <img
            src="https://yt3.ggpht.com/uqhlCbK-0k_lH_sdE3O8KSOehcJKbxv7FfiYNgunEjhwk9XZ0YdxHpgBgc-DgnQFpXqh-xgZHg=s176-c-k-c0x00ffffff-no-rj"
            alt=""
            onClick={() => navigate("/")}
          />
          <span className="name-init">The&nbsp;Computer</span>{" "}
          <span className="name-end">&nbsp;Diary</span>
        </span>

        <span className="search">
          <input type="search" placeholder="Search Quiz or Ebook Name" />
          <button>
            <SearchIcon className="search-btn" />
          </button>
        </span>
      </div>

      <div className="left">
        <span>Ebooks</span>
        <span>Quiz</span>
        <span>Videos</span>
        {localStorage.getItem("user") ? (
          <span>
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </span>
        ) : (
          <span>
            <button onClick={() => navigate("/login")}>Login</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
