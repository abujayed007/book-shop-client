import { Button, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const BookCard = (book: {
  _id: string;
  book: any;
  title: string;
  author: string;
  year: number;
  image: string;
  price: number;
  category: string;
  quantity: string;
  inStock: number;
  description: string;
}) => (
  <Link to="/login">
    <Card
      hoverable
      style={{
        width: "100%",
        maxWidth: "350px", // Maximum width for larger screens
        height: "auto",
        margin: "10px",
        borderRadius: "15px", // Rounded corners
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for a professional look
        transition: "all 0.3s ease", // Smooth hover transition
        display: "flex",
        flexDirection: "column", // Ensure content stacks vertically
      }}
      cover={
        <img
          alt={book.book.title}
          src={book.book.image}
          style={{
            height: "150px",
            width: "100%",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px", // Rounded top corners for the image
          }}
        />
      }
    >
      <Meta
        title={book.book.title}
        description={book.book.author}
        style={{
          padding: "10px 15px",
          textAlign: "center",
          fontWeight: "bold",
        }} // Center the text for better alignment
      />
      <div style={{ padding: "15px", flex: 1 }}>
        <Meta
          title={book.title}
          description={book.author}
          style={{
            marginBottom: "15px",
            fontWeight: "bold",
            fontSize: "18px",
            colorAdjust: "exact",
          }}
        />
        <p style={{ margin: "10px 0", fontSize: "16px", color: "blueviolet" }}>
          <strong>Price:</strong> ${book.book.price}
        </p>
        {/* <p style={{ margin: "10px 0", fontSize: "14px" }}>
        <strong>Category:</strong> {book.book.category}
      </p> */}
        <p style={{ margin: "10px 0", fontSize: "14px", color: "green" }}>
          <strong>Quantity:</strong> {book.book.quantity}
        </p>
        {/* <p style={{ margin: "10px 0", fontSize: "14px" }}>
        <strong>In Stock:</strong> {book.book.inStock ? "Yes" : "No"}
      </p> */}
        <p style={{ margin: "10px 0", fontSize: "14px", color: "#555" }}>
          <strong>Description:</strong> {book.book.description.slice(0, 50)}...
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="primary" style={{ width: "48%" }}>
            Add to Cart
          </Button>
          <Button
            type="default"
            style={{ width: "48%" }}
            onClick={() => alert("Show more details")}
          >
            Details
          </Button>
        </div>
      </div>
    </Card>
  </Link>
);

export default BookCard;
