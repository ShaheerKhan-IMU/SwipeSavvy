"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    website: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    router.push("/terms");
    const request = localStorage.setItem("userdata", JSON.stringify(form));
  };

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
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Step #2
              </div>
            </div>
          </div>
          <div
            style={{
              width: "550px",
              height: "375px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "25px",
              marginTop: "100px",
              marginLeft: "440px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", maxWidth: "40rem" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Create Your Swipe Savvy Account
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1rem",
                  }}
                >
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                    }}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                    }}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                    }}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    required
                    type="password"
                    placeholder="Password"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                    }}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <input
                    type="url"
                    placeholder="Website or Social Link (optional)"
                    style={{
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.375rem",
                      gridColumn: "span 2",
                    }}
                    onChange={(e) =>
                      setForm({ ...form, website: e.target.value })
                    }
                  />
                </div>

                <label style={{ display: "block", marginTop: "1rem" }}>
                  <input
                    required
                    type="checkbox"
                    style={{ marginRight: "0.5rem" }}
                  />
                  I am the owner or authorized representative of this business.
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: "1rem",
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1d4ed8")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2563eb")
                  }
                >
                  ➡️ Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
