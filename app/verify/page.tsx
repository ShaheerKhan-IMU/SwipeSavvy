"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Verify() {
  const searchParams = useSearchParams();
  const businessQuery = searchParams.get("business") || "";
  const router = useRouter();
  const [business, setBusiness] = useState<any>(null);

  const apiKey = "AIzaSyBQ3RH7SbmPFpee6g2yext-zL45YtGv9Fo";

  useEffect(() => {
    const fetchBusinessData = async () => {
      if (!businessQuery) return;

      const response = await fetch(
        "https://places.googleapis.com/v1/places:searchText",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask":
              "places.displayName,places.formattedAddress,places.location,places.photos,places.id,places.nationalPhoneNumber",
          },
          body: JSON.stringify({
            textQuery: businessQuery,
            maxResultCount: 1,
            languageCode: "en",
          }),
        }
      );

      const result = await response.json();
      const place = result?.places?.[0];

      if (place) {
        const photoReference = place.photos?.[0]?.name;
        const photoUrl = photoReference
          ? `https://places.googleapis.com/v1/${photoReference}/media?maxHeightPx=400&key=${apiKey}`
          : "https://via.placeholder.com/150";

        setBusiness({
          name: place.displayName?.text,
          address: place.formattedAddress,
          phone: place.nationalPhoneNumber || "Not available",
          image: photoUrl,
        });
      }
    };

    fetchBusinessData();
  }, [businessQuery]);

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
                style={{ width: "25%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Step #1
              </div>
            </div>
          </div>
          <div
            style={{
              width: "550px",
              maxHeight: "600px",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "25px",
              marginTop: "100px",
              marginLeft: "440px",
              overflowY: "auto",
            }}
          >
            <div>
              <Image
                src="/ImagesData/logo.png"
                width={150}
                height={150}
                alt="Logo.png"
              />
            </div>
            <div>
              <h1
                style={{
                  marginLeft: "200px",
                  marginTop: "-40px",
                  fontSize: "25px",
                  fontWeight: "bold",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                Verification 💳
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {business && (
                  <div>
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        marginTop: "0.8rem",
                      }}
                    >
                      Is This Your Business?
                    </h2>

                    <p style={{ marginBottom: "1rem" }}>
                      We found the following match for your entry. Please
                      confirm before proceeding.
                    </p>

                    <img
                      src={business.image}
                      alt={business.name}
                      style={{
                        borderRadius: "0.5rem",
                        marginBottom: "1rem",
                        width: "100%",
                      }}
                    />

                    <div style={{ marginBottom: "1rem" }}>
                      <p>
                        <strong>Name:</strong> {business.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {business.address}
                      </p>
                      <p>
                        <strong>Phone:</strong> {business.phone}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        onClick={() =>
                          router.push(
                            `/form?business=${encodeURIComponent(
                              business.name
                            )}`
                          )
                        }
                        style={{
                          backgroundColor: "#16a34a",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                        }}
                      >
                        ➡️ Yes, This Is Me
                      </button>

                      <button
                        onClick={() => router.push("/")}
                        style={{
                          backgroundColor: "#9ca3af",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.375rem",
                          cursor: "pointer",
                        }}
                      >
                        ↩️ No, Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
