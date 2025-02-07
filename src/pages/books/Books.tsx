import Search from "antd/es/input/Search";
import BookCard from "../../components/layout/Main/BookCard";
import { useGetAllBooksQuery } from "../../redux/api/booksApi";
import { Row, Col } from "antd";

const Books = () => {
  const { data } = useGetAllBooksQuery(undefined);

  return (
    <div>
      <div>
        <Search style={{ marginTop: "50px", marginBottom: "40px" }} />
      </div>
      <Row gutter={[16, 16]} style={{ padding: "50px" }}>
        {data?.data?.map((book) => (
          <Col key={book._id} xs={24} sm={24} md={12} lg={8}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Books;
