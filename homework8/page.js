// app/page.js
"use client"; // Needed for client-side interactivity
import { useState, useEffect } from "react";

export default function Home() {
  // ------------------ Counter Components ------------------
  const Counter = ({ increment, color }) => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + increment > 10 ? 0 : count + increment);
    };
    return (
      <div style={{ marginBottom: "15px" }}>
        <p>Count: {count}</p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: color,
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          +{increment}
        </button>
      </div>
    );
  };

  // ------------------ GitHub Info ------------------
  const GithubInfo = () => (
    <p>
      View this project on GitHub:{" "}
      <a href="https://github.com/yourusername/your-repo" target="_blank">
        GitHub Repository
      </a>
      . For my final project, I’m interested in ________ and plan to showcase ________.
    </p>
  );

  // ------------------ Store Component ------------------
  const Store = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      async function fetchProducts() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      }
      fetchProducts();
    }, []);

    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: "6px", marginBottom: "10px" }}
        />
        <table border="1" cellPadding="6">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>
                  <img src={p.image} width="50" />
                </td>
                <td>${p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // ------------------ Main Page ------------------
  return (
    <div>
      <h1>NextJS Assignment</h1>

      <h2>Counters</h2>
      <Counter increment={1} color="lightblue" />
      <Counter increment={2} color="lightgreen" />

      <h2>GitHub Info</h2>
      <GithubInfo />

      <h2>Product Store</h2>
      <Store />
    </div>
  );
}
