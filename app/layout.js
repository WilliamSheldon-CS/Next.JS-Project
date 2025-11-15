// app/layout.js
export const metadata = {
  title: "NextJS Assignment",
  description: "CSCI 331 Homework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", padding: "20px" }}>
        {children}
      </body>
    </html>
  );
}
