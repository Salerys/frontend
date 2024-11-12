import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../../utils/api';
import CategorySelect from './CategorySelect';
import TagSelect from './TagSelect';
import PostForm from './PostForm';
import NavigationButton from '../../components/NavigationButton';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const userId = localStorage.getItem('user_id');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tags);
    try {
      await api.post('/api/post/create/', {
        author: userId,
        title,
        content,
        category,
        tags: tags.map((tag) => ({ name: tag })),
      });

      setShowSuccessModal(true);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setTags([]);
  };

  return (
    <>
      <PostForm
        show={showSuccessModal}
        handleClose={() => setShowSuccessModal(false)}
      />

      <Form onSubmit={handleSubmit} className="mb-4 ps-3">
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

        {/* Category and Tag Select Components */}
        <CategorySelect category={category} setCategory={setCategory} />
        <TagSelect tags={tags} setTags={setTags} />

        <div className="mt-3">
          <Button variant="primary" type="submit" className="me-2">
            Create
          </Button>
          <Button variant="secondary" onClick={resetForm} className="me-2">
            Cancel
          </Button>
          <NavigationButton variant="secondary" url="/" name="Back" />
        </div>
      </Form>
    </>
  );
}

export default CreatePost;
