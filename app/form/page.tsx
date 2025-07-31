"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Form() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const businessName = searchParams.get("business") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    website: "",
    owner_type: false,
    business: businessName,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const { error } = await supabase.from("users").insert([form]);

    if (error) {
      setIsSubmitting(false);

      if (error.code === "23505" || error.message.includes("duplicate key")) {
        alert("This email is already registered. Please use a different one.");
      } else {
        console.error("Error saving data:", error.message);
        alert("Something went wrong while saving your data.");
      }
    } else {
      localStorage.setItem("userdata", JSON.stringify(form));
      router.push("/terms");
    }
  };
  useEffect(() => {
    if (businessName) {
      setForm((prev) => ({ ...prev, business: businessName }));
    }
  }, [businessName]);

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
                    placeholder="Password - at least 8 characters and include letters, numbers, and special characters"
                    minLength={8}
                    pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':\\\|,.<>\/?]).{8,}"
                    title="Password must be at least 8 characters and include letters, numbers, and special characters"
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
                    type="text"
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
                    type="checkbox"
                    required
                    checked={form.owner_type}
                    onChange={(e) =>
                      setForm({ ...form, owner_type: e.target.checked })
                    }
                    style={{ marginRight: "0.5rem" }}
                  />
                  I am the owner or authorized representative of this business.
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: "1rem",
                    backgroundColor: isSubmitting ? "#9ca3af" : "#2563eb",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#1d4ed8";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "#2563eb";
                    }
                  }}
                >
                  {isSubmitting ? "Submitting..." : "➡️ Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
