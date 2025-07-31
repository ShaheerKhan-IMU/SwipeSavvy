import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`verify?business=${encodeURIComponent(query)}`);
    }
    console.log(query);
  };

  return (
    <div
      style={{
        width: "550px",
        height: "280px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "25px",
        marginTop: "50px",
        marginLeft: "440px",
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
          Swipe Savvy Card 💳
        </h1>

        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            marginTop: "50px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Enter your business name or phone number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flexGrow: 1,
              padding: "12px 16px",
              border: "none",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "0 20px",
              fontSize: "18px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            🔍
          </button>
        </div>
        <p style={{ marginTop: "20px", textAlign: "center" }}>
          We’ll find your business and you can confirm the correct one in the
          next step.
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
