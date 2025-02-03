import { Card, Col, Row } from "antd";

const Blog = () => {
  const data = [
    { id: 1, title: "Card 1", description: "This is card 1" },
    { id: 2, title: "Card 2", description: "This is card 2" },
    { id: 3, title: "Card 3", description: "This is card 3" },
    { id: 4, title: "Card 4", description: "This is card 4" },
    { id: 5, title: "Card 5", description: "This is card 5" },
    { id: 6, title: "Card 6", description: "This is card 6" },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#B94C62",
        }}
      >
        <h2>Read Blogs</h2>
      </div>
      <div style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          {data.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Card title={item.title} bordered={false}>
                {item.description}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Blog;
