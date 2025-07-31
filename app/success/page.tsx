"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";

export default function Success() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    const response = localStorage.getItem("userdata");
    if (response) {
      try {
        const parsed = JSON.parse(response);
        setUsername(parsed.name);
      } catch (err) {
        console.error("Error parsing userdata from localStorage:", err);
      }
    }
    confetti({
      particleCount: 250,
      spread: 200,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fbba12, #60bb41)",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          position: "absolute",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          width: "100%",
          height: "100%",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <nav
          style={{
            position: "absolute",
            top: 20,
            left: 20,
          }}
        >
          <Link href="/">
            <Image
              src="/ImagesData/logo.png"
              width={120}
              height={120}
              alt="Logo"
            />
          </Link>
        </nav>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          🎉 Congratulations {username}!
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#f0f0f0",
            maxWidth: "40rem",
            marginBottom: "2rem",
          }}
        >
          Your Business Is Now Live on Swipe Savvy!
          <br />
          Make the most of it with a limited-time upgrade — first month free +
          50% off for life.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#1c5495",
              padding: "1rem",
              borderRadius: "0.75rem",
              width: "18rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.25rem",
                color: "#ffffff",
              }}
            >
              Free Plan(Current Plan)
            </h2>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.2rem",
                marginTop: "0.5rem",
                color: "#ffffff",
              }}
            >
              <li>Listed in Swipe Savvy</li>
              <li>Rewards-ready listing</li>
            </ul>
          </div>

          <div
            style={{
              backgroundColor: "#ffe5ec",
              padding: "1rem",
              borderRadius: "0.75rem",
              width: "18rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontWeight: "700",
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
              }}
            >
              Shop Savvy (Upgrade)
            </h2>
            <ul
              style={{
                listStyle: "disc",
                marginLeft: "1.2rem",
                marginBottom: "1rem",
              }}
            >
              <li>Featured placement in app</li>
              <li>Run 2x rewards promotions</li>
              <li>Sync listing with Google, Yelp & more</li>
              <li>Analytics & performance reports</li>
            </ul>

            <p style={{ marginBottom: "1rem", fontWeight: "500" }}>
              💸 Try FREE for 30 days — then $34.50/mo
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <button
                style={{
                  backgroundColor: "#d6336c",
                  color: "#ffffff",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  border: "none",
                }}
                onClick={() => {
                  window.location.href = "https://stripe.com";
                }}
              >
                Yes, Upgrade Me
              </button>

              <button
                style={{
                  color: "#333",
                  padding: "0.5rem 1rem",
                  backgroundColor: "transparent",
                  border: "1px solid #ccc",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/")}
              >
                ➡️ No Thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
