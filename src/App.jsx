import React, { useState } from "react";

export default function MatrixGrid() {
  const [clickedOrder, setClickedOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill("white"));

  const handleClick = (index) => {
    if (clickedOrder.includes(index)) return;

    const newClickedOrder = [...clickedOrder, index];
    const newColors = [...colors];
    newColors[index] = "green";
    setClickedOrder(newClickedOrder);
    setColors(newColors);

    if (newClickedOrder.length === 9) {
      newClickedOrder.forEach((idx, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const updated = [...prevColors];
            updated[idx] = "orange";
            return updated;
          });
        }, (i + 1) * 500);
      });
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Matrix Program</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridGap: "10px",
          margin: "50px auto",
          width: "max-content",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "10px",
          backgroundColor: "lightgray",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:active": {
            backgroundColor: "lightgreen",
          },
        }}
      >
        {colors.map((color, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: color,
              border: "1px solid black",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "lightblue",
              },
              "&:active": {
                backgroundColor: "lightgreen",
              },
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            {idx + 1}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => {
            setClickedOrder([]);
            setColors(Array(9).fill("white"));
          }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "darkblue")
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "blue")}
          onFocus={(e) => (e.currentTarget.style.backgroundColor = "darkblue")}
          onBlur={(e) => (e.currentTarget.style.backgroundColor = "blue")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
