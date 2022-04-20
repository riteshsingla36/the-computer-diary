import React, { useState } from "react";
import Card from "./Card";
import CardQuiz from "./CardQuiz";
import CardYoutube from "./CardYoutube";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import QuizIcon from "@mui/icons-material/Quiz";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

const Home = () => {
  const [value, setValue] = useState(0);
  const arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1,
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="image">
        <img src="https://trajectory.imgix.net/blog/bad-hero-message_190726_164138.png?auto=compress%2Cformat&fit=clip&q=40&w=1170&s=b1542179020a1e59bee0948b55953823" />
      </div>
      <div className="upper">
        <span>
          <LibraryBooksIcon />
        </span>
        <span className="black">&nbsp;&nbsp;Trending</span>{" "}
        <span className="green"> Books</span>
      </div>

      <Box
        sx={{
          maxWidth: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {arr.map((ele) => {
            return <Card />;
          })}
        </Tabs>
      </Box>

      <div className="upper">
        <span>
          <QuizIcon />
        </span>
        <span className="black">&nbsp;&nbsp;Trending</span>{" "}
        <span className="green"> Quizzes</span>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {arr.map((ele) => {
            return <CardQuiz />;
          })}
        </Tabs>
      </Box>

      <div className="upper">
        <span>
          <OndemandVideoIcon />
        </span>
        <span className="black">&nbsp;&nbsp;Trending</span>{" "}
        <span className="green"> Videos</span>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {arr.map((ele) => {
            return <CardYoutube />;
          })}
        </Tabs>
      </Box>
    </div>
  );
};

export default Home;
