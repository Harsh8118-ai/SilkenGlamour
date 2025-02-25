import { useState } from "react";
import { Button } from "./BlogComponents/Button";
import { Input } from "./BlogComponents/Input";
import { TextArea } from "./BlogComponents/TextArea";
import { Camera, XCircle } from "lucide-react";
import { toast } from 'react-toastify';


export default function BlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Title is required!");
      return;
    }
    else if (!content.trim()) {
      toast.error("Content is required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(`${BASE_URL}/blog`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Blog posted successfully!");
        setTitle("");
        setContent("");
        setImage(null);
        setPreview(null);

        setTimeout(() => {
          window.location.reload();  // ✅ Refresh the page after success
        }, 500);

      } else {
        toast.error("Failed to post blog");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error("An error occurred. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#C6B198] rounded-3xl shadow-lg mt-10 transition duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create a Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Image Upload Section */}
        <div className="relative w-full flex flex-col items-center">
          {preview ? (
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-gray-500">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 bg-red-700 bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition"
              >
                <XCircle size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-48 h-48 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer hover:bg-BGColorYellow hover:text-gray-300 transition">
              <Camera size={40} className="text-gray-600 hover:text-gray-300 mb-2" />
              <span className="text-gray-600 hover:text-gray-300">Upload Image</span>
              <Input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>


        <Input
          type="text"
          placeholder="Blog Title"
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



        <div className="text-center">
          <Button
            type="submit"
            className=" text-gray-300 font-semibold py-2 px-8 rounded transition duration-300"
          >
            Post Blog
          </Button>
        </div>

      </form>
    </div>
  );
}
