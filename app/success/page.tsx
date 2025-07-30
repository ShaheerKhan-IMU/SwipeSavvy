// "use client";
// import { useEffect, useState } from "react";

// export default function Success() {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const response = localStorage.getItem("userdata");
//     if (response) {
//       try {
//         const parsed = JSON.parse(response);
//         setUsername(parsed.name);
//       } catch (err) {
//         console.error("Error parsing userdata from localStorage:", err);
//       }
//     }
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh", // min-h-screen
//         display: "flex", // flex
//         flexDirection: "column", // flex-col
//         justifyContent: "center", // justify-center
//         alignItems: "center", // items-center
//         backgroundColor: "#ffffff", // bg-white
//         textAlign: "center", // text-center
//         padding: "1.5rem", // p-6
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "2.25rem", // text-4xl
//           lineHeight: "2.5rem",
//           fontWeight: "700", // font-bold
//           marginBottom: "1rem", // mb-4
//         }}
//       >
//         Congratulations {username} 🎉 <br/><br/>Your Business Is Now Live on Swipe Savvy!
//       </h1>

//       <p
//         style={{
//           marginBottom: "1.5rem", // mb-6
//           fontSize: "1rem",
//           lineHeight: "1.5rem",
//         }}
//       >
//         Make the most of it with a limited-time upgrade — first month free + 50%
//         off for life.
//       </p>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row", // flex-col (mobile)
//           gap: "1rem", // gap-4
//           width: "100%", // w-full
//           maxWidth: "48rem", // max-w-3xl
//         }}
//       >
//         {/* Free Plan Box */}
//         <div
//           style={{
//             backgroundColor: "#d1fae5", // bg-green-100
//             padding: "1rem", // p-4
//             borderRadius: "0.5rem", // rounded
//             boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // shadow
//             width: "100%", // w-full
//           }}
//         >
//           <h2 style={{ fontWeight: "700" /* font-bold */ }}>
//             Free Plan Active
//           </h2>
//           <ul
//             style={{
//               listStyle: "disc",
//               marginLeft: "1rem",
//               marginTop: "0.5rem",
//             }}
//           >
//             <li>Listed in Swipe Savvy</li>
//             <li>Rewards-ready listing</li>
//           </ul>
//         </div>

//         {/* Upgrade Plan Box */}
//         <div
//           style={{
//             backgroundColor: "#fef3c7", // bg-yellow-100
//             padding: "1rem", // p-4
//             borderRadius: "0.5rem", // rounded
//             boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", // shadow
//             width: "100%", // w-full
//           }}
//         >
//           <h2 style={{ fontWeight: "700" /* font-bold */ }}>Upgrade Offer</h2>
//           <ul
//             style={{
//               listStyle: "disc",
//               marginLeft: "1rem",
//               marginTop: "0.5rem",
//             }}
//           >
//             <li>Featured placement</li>
//             <li>Run 2x rewards promotions</li>
//             <li>Sync with Google, Yelp, Facebook</li>
//             <li>Performance analytics</li>
//           </ul>

//           <p style={{ marginTop: "0.5rem" }}>
//             💸 Try it FREE for 30 days — then $34.50/mo
//           </p>

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginTop: "1rem", // mt-4
//             }}
//           >
//             <button
//               style={{
//                 backgroundColor: "#ef4444", // bg-red-500
//                 color: "#ffffff", // text-white
//                 padding: "0.5rem 1rem", // px-4 py-2
//                 borderRadius: "0.375rem", // rounded
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               🔥 Yes, Upgrade Me
//             </button>

//             <button
//               style={{
//                 color: "#4b5563", // text-gray-600
//                 padding: "0.5rem 1rem", // px-4 py-2
//                 backgroundColor: "transparent",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               ➡️ No Thanks
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "1.5rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          fontWeight: "700",
          marginBottom: "1rem",
        }}
      >
        Congratulations {username} 🎉 <br />
        <br />
        Your Business Is Now Live on Swipe Savvy!
      </h1>

      <p
        style={{
          marginBottom: "1.5rem",
          fontSize: "1rem",
          lineHeight: "1.5rem",
        }}
      >
        Make the most of it with a limited-time upgrade — first month free + 50%
        off for life.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          width: "100%",
          maxWidth: "48rem",
          flexWrap: "wrap",
        }}
      >
        {/* Free Plan Box */}
        <div
          style={{
            backgroundColor: "#d1fae5",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <h2 style={{ fontWeight: "700", fontSize: "1.25rem" }}>
            Your current plan is: Free Plan
          </h2>
          <ul
            style={{
              listStyle: "disc",
              marginLeft: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <li>Listed in Swipe Savvy</li>
            <li>Rewards-ready listing</li>
          </ul>
        </div>

        {/* Upgrade Plan Box */}
        <div
          style={{
            backgroundColor: "#fef3c7",
            padding: "1rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontWeight: "700",
              fontSize: "1.25rem",
              marginBottom: "0.5rem",
            }}
          >
            Upgrade to Shop Savvy and unlock:
          </h2>
          <ul
            style={{
              listStyle: "disc",
              marginLeft: "1rem",
              marginBottom: "1rem",
            }}
          >
            <li>Featured placement in our app</li>
            <li>Run 2x rewards promotions</li>
            <li>Sync your listing across Google, Yelp, Facebook & more</li>
            <li>Access analytics and performance reports</li>
          </ul>

          <p style={{ marginBottom: "1rem" }}>
            💸 Try it FREE for 30 days — then $34.50/mo
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
                backgroundColor: "#ef4444",
                color: "#ffffff",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "https://stripe.com"; // Update to your actual Stripe link
              }}
            >
              Yes, Upgrade Me
            </button>

            <button
              style={{
                color: "#4b5563",
                padding: "0.5rem 1rem",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              ➡️ No Thanks
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "3rem",
          width: "100%",
          maxWidth: "48rem",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            paddingBottom: "0.5rem",
          }}
        >
          What other merchants say
        </h2>
      </div>
    </div>
  );
}
