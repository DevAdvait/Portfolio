import { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import axios from "axios";

export default function Blogs() {
  return (
    <>
      <FormComponent />
      <ListComponent />
    </>
  );
}
const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server to save the blog
      const response = await axios.post("/blogs", {
        title,
        description,
        content,
      });

      setModalMessage(response.data.message);
      setShowModal(true);
      // Clear the form inputs
      setTitle("");
      setDescription("");
      setContent("");
    } catch (error) {
      setModalMessage("An error occurred while saving the blog.");
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <Form
        onSubmit={handleSubmit}
        style={{
          color: "white",
          rowGap: "1rem",
          display: "flex",
          flexDirection: "column",
          margin:"1rem auto"
        }}
      >
        <Form.Group controlId="title">
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Content"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const ListComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <img
            src={blog.posterUrl}
            alt="Blog Poster"
            className="poster-image"
          />
          <div className="blog-details">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
