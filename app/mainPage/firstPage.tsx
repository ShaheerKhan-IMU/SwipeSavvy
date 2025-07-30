"use client";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "../UI/testimonials";
import SearchBox from "../UI/searchBox";

const First = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/ImagesData/hero.jpeg')",
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            position: "absolute",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <div>
              <nav
                className="nav"
                style={{
                  padding: 20,
                  borderRadius: 1,
                }}
              >
                <Link href="http://localhost:3000/">
                  <Image
                    src="/ImagesData/logo.png"
                    width={150}
                    height={150}
                    alt="Logo.png"
                  />
                </Link>
              </nav>
            </div>

            <div>
              <h1
                style={{
                  marginLeft: "300px",
                  fontSize: "48px",
                  fontWeight: "bold",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                EXCLUSIVE INVITE 🎉
              </h1>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              You've Been Selected for a Free Loyalty Listing
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <p style={{ color: "white" }}>
              Your business has been recognized for its outstanding reputation.
              Join the Swipe Savvy Rewards Network — completely free.
            </p>
          </div>
          <SearchBox />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default First;
