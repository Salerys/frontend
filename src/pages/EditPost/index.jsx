import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import NavigationButton from '../../components/NavigationButton';
import api from '../../utils/api';

function EditPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await api.get(`/api/posts/${postId}/`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/post/${postId}/update/`, {
        title,
        content,
        category: 'test',
        keywords: 'test',
      });
      console.log('Post updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
        <div className="mt-3">
          <Button variant="primary" type="submit" className="me-2">
            Update
          </Button>
          <Button variant="secondary" onClick={resetForm} className="ml-2 me-2">
            Reset
          </Button>
          <NavigationButton variant="secondary" url="/" name="Back" />
        </div>
    </Form>
  );
}

export default EditPost;
