import { useState } from "react";
import { Button } from "./BlogComponents/Button";
import { Input } from "./BlogComponents/Input";
import { TextArea } from "./BlogComponents/TextArea";

export default function BlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`${BASE_URL}/api/blog`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Blog posted successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        alert("Failed to post blog");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      alert("An error occurred. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#C6B198] rounded-3xl shadow-lg mt-10 transition duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create a Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Blog Title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gray-700 text-gray-300 placeholder-gray-400"
        />

        <TextArea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="bg-gray-700 text-gray-300 placeholder-gray-400"
        />

        <div className="flex items-center space-x-4">
          <Input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="bg-gray-700 text-gray-300"
          />
          {image && (
            <button
              type="button"
              onClick={() => setImage(null)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
            >
              Cancel
            </button>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#796855] text-gray-300 font-semibold py-2 rounded hover:bg-[#3d3428] transition duration-300"
        >
          Post Blog
        </Button>
      </form>
    </div>
  );
}