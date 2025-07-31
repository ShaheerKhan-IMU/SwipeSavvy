"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Terms() {
  const router = useRouter();

  const handleAgree = () => {
    router.push("/success");
  };
  const [open, setOpen] = useState(false);

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
                <Link href="/">
                  <Image
                    src="/ImagesData/logo.png"
                    width={150}
                    height={150}
                    alt="Logo.png"
                  />
                </Link>
              </nav>
            </div>
          </div>
          <div
            style={{
              paddingLeft: "15%",
              paddingRight: "15%",
              marginTop: "-3.5%",
            }}
          >
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Step #3
              </div>
            </div>
          </div>
          <div
            style={{
              width: "550px",
              maxHeight: "350px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "25px",
              marginTop: "100px",
              marginLeft: "440px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  📜 Just One More Step
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Please review and agree to our terms before activating your
                  account.
                </p>

                <div style={{ width: "100%" }}>
                  <button
                    onClick={() => setOpen(!open)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      backgroundColor: "#f3f4f6", // Tailwind gray-100
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                      padding: "0.75rem 1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    View Terms and Conditions
                    {open ? "............➖🔼" : "............➕🔽"}
                  </button>
                  {open && (
                    <div
                      style={{
                        maxHeight: "6rem",
                        overflowY: "auto",
                        border: "1px solid #ccc",
                        borderRadius: "0 0 0.375rem 0.375rem",
                        padding: "1rem",
                        backgroundColor: "#ffffff",
                        fontSize: "0.9rem",
                      }}
                    >
                      Welcome to Swipe Savvy! By using our platform, you agree
                      to our Terms and Privacy Policy. You’re responsible for
                      keeping your account secure and using our services
                      respectfully. We may update our terms or suspend accounts
                      that violate them. Swipe Savvy isn’t liable for indirect
                      damages. By clicking “Activate My Free Listing,” you
                      confirm your agreement. Thank you for being part of our
                      community!
                    </div>
                  )}
                </div>

                <label>
                  <input
                    type="checkbox"
                    required
                    style={{ marginRight: "0.5rem" }}
                  />
                  I have read and agree to the Swipe Savvy Merchant Agreement
                  and Privacy Policy.
                </label>
                <button
                  onClick={handleAgree}
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "#16a34a",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Activate My Free Listing
                </button>

                <p style={{ marginTop: "1rem" }}>
                  We'll ship your Swipe Savvy window sticker and POS signage
                  within 5–7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
