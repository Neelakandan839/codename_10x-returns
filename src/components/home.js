import React, { useState, useRef, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import { Swiper, SwiperSlide } from "swiper/react";
import Dialog from "@mui/material/Dialog";
import GoogleMapReact from "google-map-react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import { getData, postData } from "../utils";
import "swiper/css";
import "swiper/css/pagination";

import landing_img from "../images/db.webp";
import landing_img_xs from "../images/mb.webp";
import offer_xs from "../images/offer-xs.webp";
import logo from "../images/logo.webp";
import offer from "../images/offer.webp";
import amenities from "../images/amenities.webp";
import alliance_logo from "../images/alliance_logo.png";
import gallery_img1 from "../images/1.webp";
import gallery_img2 from "../images/2.webp";
import gallery_img3 from "../images/3.webp";
import gallery_img4 from "../images/4.webp";
import gallery_img5 from "../images/5.webp";
import gallery_img6 from "../images/6.webp";
import gallery_img7 from "../images/7.webp";
import gallery_img8 from "../images/8.webp";
import gallery_img9 from "../images/9.webp";

const Img = styled("img")({
  margin: "0",
  maxWidth: "100%",
  maxHeight: "100%",
});

const galleryImgList = [
  gallery_img1,
  gallery_img2,
  gallery_img3,
  gallery_img4,
  gallery_img5,
  gallery_img6,
  gallery_img7,
  gallery_img8,
  gallery_img9,
];

const HomePage = () => {
  const [openEnquiry, setOpenEnquiry] = useState(false);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid item xs={12}>
        <Navbar setOpenEnquiry={setOpenEnquiry} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: { xs: "60px", sm: "80px", position: "relative" },
          marginBottom: { xs: "30px", sm: "0" },
        }}
      >
        <Img
          sx={{
            width: "100%",
            height: "100%",
            display: { xs: "none", sm: "block" },
          }}
          alt="landing_img"
          src={landing_img}
        />
        <Img
          sx={{
            width: "100%",
            height: "60%",
            marginBottom: "30px",
            display: { xs: "block", sm: "none" },
          }}
          alt="landing_img_xs"
          src={landing_img_xs}
        />
        <UserDetails />
      </Grid>
      <Grid
        container
        item
        xs={12}
        display="flex"
        justifyContent="center"
        style={{ margin: "50px 0" }}
      >
        <Grid item xs={10} md={7}>
          <Img
            sx={{
              width: "100%",
              height: "100%",
              display: { xs: "none", sm: "block" },
            }}
            alt="offer"
            src={offer}
          />
          <Img
            sx={{
              width: "100%",
              height: "100%",
              display: { xs: "block", sm: "none" },
            }}
            alt="offer"
            src={offer_xs}
          />
        </Grid>
      </Grid>
      <Box component="section" id="overview" style={{ margin: "50px 0" }}>
        <Overview />
      </Box>
      <Box
        component="section"
        id="configurations"
        style={{ margin: "50px 0", width: "100%" }}
      >
        <Configurations />
      </Box>
      <Box
        component="section"
        id="gallery"
        style={{ margin: "50px 0", width: "100%" }}
      >
        <Gallery />
      </Box>
      <Box
        component="section"
        id="location"
        style={{
          margin: "50px 0",
          background: `url(${amenities})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
        <Location setOpenEnquiry={setOpenEnquiry} />
      </Box>

      <Box
        component="section"
        id="aboutUs"
        style={{ marginTop: "50px", width: "100%" }}
      >
        <AboutUs />
      </Box>
      <PrivacyPolicy />
      <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          background: "#272727",
          padding: "10px",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Typography
          component="h1"
          onClick={() => setOpenEnquiry(true)}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          <EmailIcon sx={{ fontSize: 20, color: "#fff", marginRight: "5px" }} />{" "}
          ENQUIRE NOW
        </Typography>
      </Grid>
      <Enquiry openEnquiry={openEnquiry} setOpenEnquiry={setOpenEnquiry} />
      <Grid
        item
        xs={3}
        sx={{
          marginBottom: "20px",
          display: { xs: "none", sm: "flex" },
          position: "fixed",
          bottom: 0,
          right: "20px",
        }}
      >
        <Button
          onClick={() => setOpenEnquiry(true)}
          style={{
            width: "100%",
            height: "50px",
            background: "#49484b",
            textTransform: "capitalize",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "18px",
            border: "2px solid #ffffff",
          }}
          variant="contained"
        >
          I'm interested
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomePage;

const Navbar = (setOpenEnquiry) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <AppBar
      sx={{
        width: "100%",
        position: "fixed",
      }}
    >
      <Container
        maxWidth="100%"
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#ffffff",
          padding: 0,
          boxShadow: "0 0 15px #000000",
          height: { xs: "50px", sm: "70px" },
        }}
      >
        <Grid container display="flex" alignItems="center" width="100%">
          <Grid
            item
            xs={2}
            sm={1}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              sx={{
                width: { xs: "80%", md: "50%" },
                height: "60%",
              }}
            >
              <Img
                style={{ width: "100%", height: "100%" }}
                alt="logo"
                src={logo}
              />
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={9}
            sm={10}
            sx={{ visibility: { xs: "hidden", md: "visible" } }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                href="#overview"
                underline="none"
                sx={{
                  padding: "0 10px",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  Overview
                </Typography>
              </Link>

              <Link
                href="#configurations"
                underline="none"
                sx={{
                  padding: "0 10px",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  Configurations
                </Typography>
              </Link>

              <Link
                href="#gallery"
                underline="none"
                sx={{
                  padding: "0 10px",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  Gallery
                </Typography>
              </Link>

              <Link
                href="#location"
                underline="none"
                sx={{
                  padding: "0 10px",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  Location
                </Typography>
              </Link>
              <Link
                href="#aboutUs"
                underline="none"
                sx={{
                  padding: "0 10px",
                  textTransform: "capitalize",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  About Us
                </Typography>
              </Link>
              <Link
                href="#eBrochure"
                onClick={() => setOpenEnquiry?.setOpenEnquiry(true)}
                underline="none"
                sx={{
                  padding: "0 10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "14px", xl: "16px" },
                    color: "#3a3a3c",
                    ":hover": {
                      color: "#8a7007",
                    },
                  }}
                >
                  eBrochure
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={1}
            display="flex"
            alignItems="center"
            paddingLeft="0"
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                color: "#000000",
              }}
            >
              <IconButton
                onClick={() => setDrawerState(!drawerState)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Drawer
        drawerState={drawerState}
        setDrawerState={setDrawerState}
        setOpenEnquiry={setOpenEnquiry}
      />
    </AppBar>
  );
};

function Drawer({ drawerState, setDrawerState, setOpenEnquiry }) {
  return (
    <Collapse
      in={drawerState}
      sx={{
        width: "100%",
      }}
    >
      <Grid
        container
        item
        rowSpacing={5}
        padding="15px"
        sx={{
          background: "#3a3a3c",
          marginTop: "0",
        }}
      >
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#overview"
            onClick={() => setDrawerState(false)}
            underline="none"
            sx={{
              padding: "0 10px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              Overview
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#configurations"
            onClick={() => setDrawerState(false)}
            underline="none"
            sx={{
              padding: "0 10px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              Configurations
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#gallery"
            onClick={() => setDrawerState(false)}
            underline="none"
            sx={{
              padding: "0 10px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              Gallery
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#location"
            onClick={() => setDrawerState(false)}
            underline="none"
            sx={{
              padding: "0 10px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              Location
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#aboutUs"
            onClick={() => setDrawerState(false)}
            underline="none"
            sx={{
              padding: "0 10px",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              About Us
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          sm={12}
          xs={12}
          textAlign="center"
          style={{ padding: "10px" }}
        >
          <Link
            href="#eBrochure"
            onClick={() => {
              setOpenEnquiry?.setOpenEnquiry(true);
              setDrawerState(false);
            }}
            underline="none"
            sx={{
              padding: "0 10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 16,
                color: "#fff",
                ":hover": {
                  color: "#8a7007",
                },
              }}
            >
              eBrochure
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Collapse>
  );
}

const Overview = () => {
  return (
    <Grid container item xs={12} display="flex" justifyContent="center">
      <Grid
        item
        xs={10}
        sm={7}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            width: { xs: "100%", sm: "32%" },
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 200,
            color: "#3a3a3c",
            borderBottom: "2px solid #3a3a3c",
          }}
        >
          Overview
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} display="flex" justifyContent="center">
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "16px",
            fontWeight: 300,
            color: "#3a3a3c",
            lineHeight: "28px",
          }}
        >
          Overview 10X Returns is approved by DTCP. 10X Returns plots come with
          clear titles. District Town & Country Planning Approval (DTCP) is an
          approval Government gives to property outside Chennai metro limits. A
          DTCP approved layout is required to follow minimum standards of
          development regarding the road width and space allotted for public
          such as parks. That makes it a risk-free investment. Located exactly
          on 6-Lane Oragadam Main Road, 10X Returns is set to earn 30% to 100%
          more than interior locations. For proximity to arterial roads keeps
          you ahead of others in time and space. The 200 ft. Oragadam Main Road
          connects you to Chennai city and its suburbs.
        </Typography>
      </Grid>
    </Grid>
  );
};

const data = [
  {
    title: "Invest in a Great Brand",
    subTitle: "",
    list: [
      "South India’s well established real estate developers with operations in Chennai, Hyderabad and Bangalore. Alliance and Urbanrise believes in building relationships based on trust and commitment to quality.",
    ],
  },
  {
    title: "Invest in Clear Titles.",
    subTitle: "",
    list: [
      " 10X returns is a DTCP approved plot.",
      "Ready to build villa plots and it comes with clear title and transparency that Alliance is reputed for.",
    ],
  },
  {
    title: "Invest in a Great Location.",
    subTitle: "",
    list: [
      "Located bang on State Highway SH-57 on a 6 Lane Highway.",
      " The Aerospace park, in which 30 areospace companies that are setting up units takes the Oragadam-Sriperambadur belt to a new high and this is part of the Phase One plan alone.",
      "Oragadam is home to auto majors including Daimler-Benz, Renault-Nissan, Ford, Hyundai and others.",
    ],
  },
  {
    title: "Invest in a Great Location.",
    subTitle: "",
    list: [
      "Well connected by road and rail, Oragadam is regarded the biggest automobile hub in not just Chennai or India, But, the whole of South Asia.",
      " Emerging as the next giant residential hub. It is estimated to have a workforce of over 1 Million by 2035. It is soon set to have all facilities of a cosmopolitan city of Intl standards.",
    ],
  },
  {
    title: "Invest in a Great Product.",
    subTitle: "",
    list: [
      "A PLUG & BUILD LAYOUT – 30 Acres of Well developed layout of plots equipped with black top roads, street lights, Well-planned underground sewage and Water and EB connection up to the plot.",
    ],
  },
  {
    title: "High potential for fast Appreciation",
    subTitle:
      "Property set to earn over 30% to 100% more than interior locations.",
    list: [
      "Located exactly on 6-lane Oragadam main road.",
      "Proximity to arterial roads keeos you ahead of others in time and space.",
      "The 200ft Oragadam main road connects you to Chennai city and its suburbs.",
    ],
  },
];

const Configurations = () => {
  const sliderRef = useRef();
  const [currentExpIdx, setCurrentExpIdx] = useState(0);
  return (
    <Grid
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      style={{ background: "#f5f5f5" }}
    >
      <Grid
        item
        xs={10}
        sm={7}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 200,
            color: "#3a3a3c",
            borderBottom: "2px solid #3a3a3c",
          }}
        >
          Why Invest in 10X Returns?
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={10}
        justifyContent="center"
        padding="50px 0"
        sx={{
          ":nthChild(odd)": {
            background: "#ededed",
          },
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            const currIdx = swiper.activeIndex;
            setCurrentExpIdx(currIdx);
          }}
          onSwiper={(sw) => {
            sliderRef.current = sw;
          }}
          className="mySwiper"
        >
          {(data || []).map((item, index) => (
            <SwiperSlide key={index} style={{ width: "100%" }}>
              <Grid
                item
                key={index}
                xs={12}
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                style={{
                  aspectRatio: "4/3",
                  padding: "20px 10px",
                }}
              >
                <Typography
                  component="h1"
                  style={{
                    textAlign: "center",
                    padding: "10px 0",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#3a3a3c",
                  }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  key={index}
                  component="p"
                  style={{
                    textAlign: "center",
                    padding: "10px 0",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#3a3a3c",
                  }}
                >
                  {item?.subTitle || ""}
                </Typography>
                {(item?.list || []).map((li, index) => (
                  <Typography
                    key={index}
                    component="li"
                    style={{
                      textAlign: "center",
                      padding: "10px 0",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#3a3a3c",
                    }}
                  >
                    {li || ""}
                  </Typography>
                ))}
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{ display: { xs: "flex", sm: "none" } }}
        justifyContent="center"
      >
        <Button
          onClick={() => sliderRef?.current?.slidePrev()}
          style={{
            width: "50px",
            height: "50px",
            background: "#f5f5f5",
            textTransform: "capitalize",
            color: currentExpIdx === 0 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ‹
        </Button>
        <Button
          onClick={() => sliderRef?.current?.slideNext()}
          disabled={currentExpIdx === 5}
          style={{
            width: "50px",
            height: "50px",
            background: "#f5f5f5",
            textTransform: "capitalize",
            color: currentExpIdx === 5 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ›
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={8}
        sm={11}
        md={8}
        justifyContent="center"
        padding="50px 0"
        sx={{
          ":nthChild(odd)": {
            background: "#ededed",
          },
          display: { xs: "none", sm: "flex" },
        }}
      >
        {(data || []).map((item, index) => (
          <Grid
            item
            key={index}
            xs={4}
            sm={6}
            md={4}
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            style={{
              aspectRatio: "4/3",
              // background: "#ededed",
              padding: "20px",
              borderRight: "1px solid #3a3a3c",
            }}
          >
            <Typography
              component="h1"
              style={{
                textAlign: "center",
                padding: "10px 0",
                fontSize: "20px",
                fontWeight: 400,
                color: "#3a3a3c",
              }}
            >
              {item?.title}
            </Typography>
            <Typography
              key={index}
              component="p"
              style={{
                textAlign: "center",
                padding: "10px 0",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#3a3a3c",
              }}
            >
              {item?.subTitle || ""}
            </Typography>
            {(item?.list || []).map((li, index) => (
              <Typography
                key={index}
                component="li"
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#3a3a3c",
                }}
              >
                {li || ""}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const Gallery = () => {
  const sliderRef = useRef();
  const [currentExpIdx, setCurrentExpIdx] = useState();
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    if (sliderRef.current.width <= 425) {
      setSlidesPerView(1);
    }
  }, [sliderRef?.current?.width]);
  return (
    <Grid container item xs={12} display="flex" justifyContent="center">
      <Grid
        item
        xs={12}
        sm={7}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            width: "32%",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 200,
            color: "#3a3a3c",
            borderBottom: "2px solid #3a3a3c",
          }}
        >
          Gallery
        </Typography>
      </Grid>
      <Grid item xs={11} md={8} display="flex" justifyContent="center">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            const currIdx = swiper.activeIndex;
            setCurrentExpIdx(currIdx);
          }}
          onSwiper={(sw) => {
            sliderRef.current = sw;
          }}
          className="mySwiper"
        >
          {(galleryImgList || []).map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ height: "300px", width: "300px" }}
            >
              <Grid
                item
                xs={12}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid #000000",
                }}
              >
                <Img
                  style={{ width: "100%", height: "100%" }}
                  alt={`gallery_img${index}`}
                  src={item}
                />
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item xs={8} display="flex" justifyContent="center">
        <Button
          onClick={() => sliderRef?.current?.slidePrev()}
          style={{
            width: "50px",
            height: "50px",
            background: "#fff",
            textTransform: "capitalize",
            color: currentExpIdx === 0 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ‹
        </Button>
        <Button
          onClick={() => sliderRef?.current?.slideNext()}
          disabled={currentExpIdx === 6}
          style={{
            width: "50px",
            height: "50px",
            background: "#fff",
            textTransform: "capitalize",
            color: currentExpIdx === 6 ? "grey" : "#000000",
            fontWeight: "bold",
            fontSize: "60px",
            boxShadow: "none",
          }}
          variant="contained"
        >
          ›
        </Button>
      </Grid>
    </Grid>
  );
};

const Location = (setOpenEnquiry) => {
  return (
    <Grid
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      height="100%"
      style={{ background: "#000000c4", padding: { xs: "20px", sm: "70px" } }}
    >
      <Grid
        item
        xs={10}
        md={7}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            width: { xs: "100%", sm: "32%" },
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 200,
            color: "#ffffff",
            borderBottom: "2px solid grey",
          }}
        >
          Location
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={8}
        display="flex"
        justifyContent="center"
        style={{ margin: "50px 0" }}
      >
        <Grid
          item
          xs={11}
          md={4}
          style={{
            background: "#ffffff",
            padding: "20px",
          }}
        >
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "24px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Industries Surrounding 10 X Returns:
          </Typography>
          <Typography
            component="p"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#000000",
            }}
          >
            Apollo Tyres, Nsk, Renault Nissan, Daimler- Benz, Hyundai, Komatsu,
            Delphi, Tvs, Royal Enfield, Sanmina-Sci, Foxconn, Flextronics,
            Allison, Samsung, Nokia Etc
          </Typography>
        </Grid>
        <Grid
          item
          xs={11}
          md={4}
          style={{
            background: "#ffffff",
            padding: "20px",
          }}
        >
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "24px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Educational institutions Surrounding 10 X Returns:
          </Typography>
          <Typography
            component="p"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#000000",
            }}
          >
            Apollo Polytechnic College, Sri Krishna Engineering College,
            Dhaanish Ahamed Engineering college, Raasi college of Engineering
            college, P.S.TempleGreen Vidhyashram (CBSE)
          </Typography>
        </Grid>
        <Grid
          item
          xs={11}
          md={4}
          style={{
            background: "#ffffff",
            padding: "20px",
          }}
        >
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "24px",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Distance from 10X Returns to Key locations:
          </Typography>
          <Typography
            component="p"
            style={{
              textAlign: "center",
              padding: "10px 0",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#000000",
            }}
          >
            Oragadam Junction: 3KM Bangalore Highway NH4: 7 KM Rajiv Gandhi
            Memorial : 8 KM GST Road NH45 Singaperumal Kovil: 15 KM Tambaram: 25
            KM Chennai International Airport: 30 KM Vallakotai Murugan temple:
            0.5 KM
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={7}
        sx={{ marginBottom: "20px", display: { xs: "flex", sm: "none" } }}
      >
        <Button
          onClick={() => setOpenEnquiry?.setOpenEnquiry(true)}
          style={{
            width: "100%",
            height: "40px",
            background: "#49484b",
            textTransform: "capitalize",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "18px",
            border: "2px solid #ffffff",
          }}
          variant="contained"
        >
          download brochure
        </Button>
      </Grid>
    </Grid>
  );
};

const AnyReactComponent = ({ text }) => <Box component="div">{text}</Box>;

const AboutUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Grid container item xs={12} display="flex" justifyContent="center">
      <Grid
        item
        xs={10}
        sm={7}
        display="flex"
        justifyContent="center"
        style={{ padding: "20px 0" }}
      >
        <Typography
          component="h1"
          style={{
            width: { xs: "100%", sm: "32%" },
            textAlign: "center",
            padding: "10px 0",
            fontSize: "40px",
            fontWeight: 200,
            color: "#3a3a3c",
            borderBottom: "2px solid #3a3a3c",
          }}
        >
          About Alliance
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sm={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ marginBottom: "50px" }}
      >
        <Typography
          component="p"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "16px",
            fontWeight: 300,
            color: "#3a3a3c",
            lineHeight: "28px",
          }}
        >
          Alliance, a name to reckon with among property developers in Chennai
          is the brainchild of a visionary team of experts from the real estate
          industry. Alliance has established operations in the major cities of
          South India - Chennai, Hyderabad, Bangalore, and Mysore, and is an
          avid contributor to India’s high growth real estate industry. The
          organization currently has 3.5 crore sq. ft. (35 million sq. ft.) of
          projects worth ₹14,000 cr under exaction at different stages, and is
          steadfastly progressing to realize its dream of acquiring the top
          position of world’s premier real estate developer.
        </Typography>
        <Typography
          component="p"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "16px",
            fontWeight: 300,
            color: "#3a3a3c",
            lineHeight: "28px",
          }}
        >
          Alliance,the most sought after amongst the Property Developers in
          Chennai, employs the latest construction, skilled manpower, quality
          materials, and high standards of testing to deliver exceptional
          quality, luxurious futuristic apartment communities, independent
          villas, and well laid Villa plots. Alliance construction has earned
          the fame of standing the trails of time with excellent planning and
          design that guarantees fine exterior finish and leak-proof interiors.
          Alliance adheres to premium quality standards and this has helped them
          establish a bond of faith with their clients and has positioned them
          at the pedestal of greatest real-estate developers and land promoters
          in South India.
        </Typography>
      </Grid>
      <Grid container item xs={12} display="flex" justifyContent="flex-end">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            background: "#24bbdc",
            height: "500px",
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ background: "#000000b5" }}
        >
          <Grid item xs={12}>
            <Typography
              component="h1"
              style={{
                textAlign: "center",
                padding: "10px 0",
                fontSize: "40px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={10} sm={12}>
            <Typography
              component="p"
              style={{
                textAlign: "center",
                padding: "10px 0",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              Please enter the details below to get in touch with us !
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={10}
            sm={8}
            display="flex"
            justifyContent="center"
            style={{
              borderRadius: "5px",
              padding: "20px",
            }}
          >
            <Grid container item xs={12} style={{ margin: "10px 0" }}>
              <Grid
                item
                xs={2}
                sm={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PersonIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                sm={11}
                style={{
                  margin: "10px 0",
                }}
              >
                <TextField
                  type="text"
                  id="outlined-basic1"
                  placeholder="Full Name"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} style={{ margin: "10px 0" }}>
              <Grid
                item
                xs={2}
                sm={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PhoneIphoneIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                sm={11}
                style={{
                  margin: "10px 0",
                  background: "#000",
                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="number"
                  id="outlined-basic2"
                  placeholder="Phone*"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} style={{ margin: "10px 0" }}>
              <Grid
                item
                xs={2}
                sm={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  background: "#000",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <EmailIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                sm={11}
                style={{
                  margin: "10px 0",
                  background: "#000",
                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="email"
                  id="outlined-basic3"
                  placeholder="Email"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={6} sm={3} style={{ paddingTop: "30px" }}>
              <Button
                style={{
                  width: "100%",
                  height: "50px",
                  background: "#db9f26",
                  textTransform: "capitalize",
                  color: "#3a3a3c",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "2px solid #ffc652",
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        padding="20px 0"
        style={{ background: "#f5f5f5" }}
      >
        <Grid item xs={5} sm={2} md={1}>
          <Img
            style={{ width: "100%" }}
            alt="alliance_logo"
            src={alliance_logo}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        display="flex"
        justifyContent="center"
        style={{ background: "#f5f5f5" }}
      >
        <Grid item xs={9} sm={6} md={3}>
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              padding: "30px 0",
              fontSize: "14px",
              fontWeight: 300,
              color: "#3a3a3c",
              lineHeight: "28px",
            }}
          >
            Site Address: (SH 57), Vallam Village, Closer to Vallakottai Murugan
            Temple, On Automobile Corridor, Inbetween Singaperumal Koil and
            Sriperumbadur road, Oragadam.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        style={{ background: "#f5f5f5" }}
      >
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "30px 0",
            fontSize: "14px",
            fontWeight: 300,
            color: "#3a3a3c",
          }}
        >
          COPYRIGHT © 2021 ALL RIGHTS RESERVED.
        </Typography>
      </Grid>
    </Grid>
  );
};

const PrivacyPolicy = () => {
  return (
    <Grid
      container
      item
      xs={12}
      display="flex"
      justifyContent="center"
      style={{ background: "#434343", paddingBottom: "30px" }}
    >
      <Grid item xs={11} md={7} display="flex" justifyContent="center">
        <Typography
          component="h1"
          style={{
            width: "32%",
            textAlign: "center",
            padding: "10px 0",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Privacy Policy:
        </Typography>
      </Grid>
      <Grid item xs={11} md={8} display="flex" justifyContent="center">
        <Typography
          component="p"
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            fontSize: "13px",
            fontWeight: 300,
            color: "#ffffff",
            lineHeight: "19px",
          }}
        >
          We collect information from you when you register on our site or fill
          out a form. When filling out a form on our site, for any of the
          above-mentioned reasons, you may be asked to enter your: name, e-mail
          address and phone number. You may, however, visit our site
          anonymously. Any of the information we collect from you is to
          personalize your experience, to improve our website and to improve
          customer service. Any data collected will not be shared with any 3rd
          party.
        </Typography>
      </Grid>
    </Grid>
  );
};

const UserDetails = () => {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: null,
    email: "",
  });

  const handleFormSubmit = async (formData) => {
    await postData(formData);
  };

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "#607d8b",
        padding: "10px",
        borderRadius: "30px",
        position: { xs: "static", sm: "absolute" },
        right: { xs: "20px", md: "50px" },
        top: { xs: 0, md: "100px" },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ borderBottom: "1px solid #c594a8", width: "100%" }}
      >
        <Typography
          component="h1"
          style={{
            textAlign: "center",
            padding: "10px 0",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#ecc215",
          }}
        >
          Get A Call Back
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={10}
        display="flex"
        justifyContent="center"
        style={{
          borderRadius: "5px",
        }}
      >
        <Grid container item xs={12} style={{ margin: "5px 0" }}>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              margin: "10px 0",
              height: "40px",
              width: "50px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              background: "#000",
            }}
          >
            <PersonIcon sx={{ fontSize: 25, color: "#fff" }} />
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              margin: "10px 0",
            }}
          >
            <TextField
              type="text"
              id="outlined-basic1"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  name: e.target.value,
                });
              }}
              placeholder="Full Name"
              style={{
                background: "#ffffff",
                width: "100%",
                borderRadius: "5px",
              }}
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ margin: "5px 0" }}>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              margin: "10px 0",
              height: "40px",
              width: "50px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              background: "#000",
            }}
          >
            <PhoneIphoneIcon sx={{ fontSize: 25, color: "#fff" }} />
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              margin: "10px 0",
              background: "#000",
              borderRadius: "5px",
            }}
          >
            <TextField
              type="number"
              id="outlined-basic2"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  phoneNumber: e.target.value,
                });
              }}
              placeholder="Phone*"
              style={{
                background: "#ffffff",
                width: "100%",
                borderRadius: "5px",
              }}
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ margin: "5px 0" }}>
          <Grid
            item
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              margin: "10px 0",
              height: "40px",
              width: "50px",
              background: "#000",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <EmailIcon sx={{ fontSize: 25, color: "#fff" }} />
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              margin: "10px 0",
              background: "#000",
              borderRadius: "5px",
            }}
          >
            <TextField
              type="email"
              id="outlined-basic3"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  email: e.target.value,
                });
              }}
              placeholder="Email"
              style={{
                background: "#ffffff",
                width: "100%",
                borderRadius: "5px",
              }}
              InputProps={{
                sx: {
                  height: "40px",
                },
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ marginBottom: "10px" }}>
          <Button
            onClick={() => handleFormSubmit(userData)}
            style={{
              width: "100%",
              height: "40px",
              background: "#db9f26",
              textTransform: "capitalize",
              color: "#3a3a3c",
              fontWeight: "bold",
              fontSize: "18px",
              border: "2px solid #ffc652",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Enquiry = (openEnquiry, setOpenEnquiry) => {
  const closeTab = () => {
    openEnquiry?.setOpenEnquiry(false);
  };
  return (
    <Dialog
      open={openEnquiry?.openEnquiry}
      onClose={closeTab}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        background: "rgba(0, 0, 0, 0.88)",
        height: "60vh",
        ".MuiDialog-paper": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          background: "black",
          maxWidth: { xs: "md", sm: "sm" },
          height: { xs: "100%", sm: "70%" },
          width: "100%",
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Grid
        container
        item
        xs={12}
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "15%", background: "#272727", padding: "0 20px" }}
        >
          <Typography
            component="h1"
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            {" "}
            I'm interested
          </Typography>
          <CloseIcon
            onClick={closeTab}
            sx={{ fontSize: 35, color: "#fff", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "85%", background: "#fff", padding: "20px" }}
        >
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              component="p"
              style={{
                fontSize: "14px",
                color: "#000",
              }}
            >
              Please enter the details below to get the detailed pricing
              information.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={11}
            display="flex"
            justifyContent="center"
            style={{
              borderRadius: "5px",
            }}
          >
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PersonIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0",
                }}
              >
                <TextField
                  type="text"
                  id="outlined-basic1"
                  placeholder="Full Name"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  background: "#000",
                }}
              >
                <PhoneIphoneIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0",

                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="number"
                  id="outlined-basic2"
                  placeholder="Phone*"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} style={{ margin: "5px 0" }}>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  margin: "10px 0",
                  height: "40px",
                  width: "50px",
                  background: "#000",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <EmailIcon sx={{ fontSize: 25, color: "#fff" }} />
              </Grid>
              <Grid
                item
                xs={10}
                style={{
                  margin: "10px 0",

                  borderRadius: "5px",
                }}
              >
                <TextField
                  type="email"
                  id="outlined-basic3"
                  placeholder="Email"
                  style={{
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  InputProps={{
                    sx: {
                      height: "40px",
                    },
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={6} sx={{ marginBottom: "10px" }}>
              <Button
                style={{
                  width: "100%",
                  height: "40px",
                  background: "#db9f26",
                  textTransform: "capitalize",
                  color: "#3a3a3c",
                  fontWeight: "bold",
                  fontSize: "18px",
                  border: "2px solid #ffc652",
                }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
