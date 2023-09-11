import React, { useState } from "react";

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import Button from "UI/Button";
import { IoIosArrowForward } from "react-icons/io";
import deviceImg from "assets/device-pile.png";
const netflixAccordion = [
  {
    title: "What is Netflix?",
    info: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    title: "How much does Netflix cost?",
    info: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP70 to EGP165 a month. No extra costs, no contracts.",
  },
  {
    title: "Where can I watch?",
    info: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    title: "Can I cancel anytime?",
    info: "Yes, you can cancel your Netflix subscription at any time. There are no cancellation fees or commitments. Simply sign in to your account on the Netflix website and follow the instructions to cancel.",
  },
  {
    title: "Is Netflix available worldwide?",
    info: "Yes, Netflix is available in over 190 countries worldwide. However, the content library may vary depending on your location. Netflix offers a localized experience in many regions, with subtitles, dubs, and content specific to certain countries.",
  },
  {
    title: "What are Netflix Originals?",
    info: "Netflix Originals are TV shows, movies, documentaries, and other content produced or co-produced by Netflix. These exclusive productions are created or acquired by Netflix and are available exclusively on the Netflix platform. Netflix Originals have gained popularity for their high-quality content and unique storytelling.",
  },
];

const LoginScreen = () => {
  const [emailValue, setEmailValue] = useState("");
  const [isEmailEmpty, setIsEmailEmpty] = useState(" ");
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg,#00000018,#000), url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/44982273-2989-4ef0-a090-261291899eba/EG-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        position={"relative"}
        className={
          "flex items-center justify-center px-4 py-20  lg:px-20  lg:py-40  "
        }
      >
        <Box
          className={"py-16"}
          sx={{ maxWidth: "900px", textAlign: "center", color: "#fff" }}
        >
          <Typography className="font-bold text-4xl lg:text-7xl" variant="h2">
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography variant="h5" className="my-4 text-xl lg:text-2xl">
            Plans now start at EGP70/month.
          </Typography>
          <Typography variant="h7">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");
            }}
            className={"w-full flex mt-8"}
            action=""
          >
            <FormControl
              sx={{
                backgroundColor: "#fff",

                "& .MuiInputBase-root": { mt: "0" },
                "& .MuiInputBase-root:after,& .MuiInputBase-root:before": {
                  display: "none",
                },
                "& .Mui-focused.MuiFormLabel-root,& .MuiFormLabel-filled.MuiFormLabel-root":
                  {
                    top: "10px",
                    color: "#8c8c8c",
                  },
              }}
              className="flex-1"
            >
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                onBlur={(e) => {
                  setIsEmailEmpty(
                    e.target.value.length === 0
                      ? "Email is required!"
                      : !e.target.value.includes("@")
                      ? "Please enter a valid email address"
                      : " "
                  );
                }}
                onFocus={(e) => {
                  setIsEmailEmpty(" ");
                }}
                id="my-input"
                type="email"
                aria-describedby="my-helper-text"
                sx={{ "& .MuiInputBase-input": { p: "1rem" } }}
              />
            </FormControl>
            <Button
              title={"GET STARTED"}
              icon={<IoIosArrowForward />}
              type={"red"}
              className={"bold rounded-none"}
              reverse
            />
          </form>

          <FormHelperText
            sx={{ color: "#ffa00a", fontWeight: "500", fontSize: "1rem" }}
            id="my-helper-text"
          >
            {isEmailEmpty}
          </FormHelperText>
        </Box>
      </Box>
      <Box
        p={"4.5rem 0"}
        m={"0 auto"}
        className={"max-w-7xl p-8"}
        // sx={{ maxWidth: "calc(66.66666666666666% - 6rem)" }}
      >
        <Box className={"flex flex-col lg:flex-row items-center gap-y-16"}>
          <Box className="flex-1 text-slate-50 text-center">
            <Typography variant="h2">Watch everywhere.</Typography>
            <Typography variant="p">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </Typography>
          </Box>
          <Box className="flex-1">
            <Box position={"relative"}>
              <img className="w-full" src={deviceImg} alt="" />
              <Box
                position={"absolute"}
                sx={{
                  zIndex: "-1",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  maxWidth: "63%",
                  maxHeight: "47%",
                  top: "34%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <video width="750" height="500" muted autoPlay loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <video width="750" height="500" autoplay loop>
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          />
        </video> */}
      </Box>
      <Box className={"p-4 "}>
        <h2 className="text-center text-2xl lg:text-6xl font-semibold text-slate-50 my-8">
          Frequently Asked Questions
        </h2>
        <Box className={"max-w-screen-xl mx-auto"}>
          {netflixAccordion.map((acc, idx) => {
            return (
              <Accordion
                key={idx}
                expanded={expanded === idx}
                onChange={handleAccordionChange(idx)}
                className="mb-2 p-5"
                sx={{
                  backgroundColor: "rgb(45,45,45)",
                  borderRadius: "0 !important",
                  "&:hover": { backgroundColor: "rgb(78,78,78)" },
                }}
              >
                <AccordionSummary
                  sx={{
                    "& svg": {
                      color: "#fff",
                      width: "2.5rem",
                      height: "2.5rem",
                    },
                  }}
                  expandIcon={expanded === idx ? <ClearIcon /> : <AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    className="text-2xl font-normal"
                    sx={{ flexShrink: 0, color: "#fff" }}
                  >
                    {acc.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontSize: "1.5rem", color: "#fff" }}>
                    {acc.info}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default LoginScreen;
