import { useState, useEffect } from "react";
import axios from "axios";

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog");
        setBlogs(response.data);
        setFilteredBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Extract unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on category and search query
  useEffect(() => {
    let filtered = blogs;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to first page after filter change
  }, [selectedCategory, searchQuery, blogs]);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      {/* Category Filter */}
      <select
        className="w-full p-2 border rounded-md mb-4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* Blog List */}
      {selectedBlog ? (
        <div className="p-4 border rounded-lg shadow-lg">
          <button onClick={() => setSelectedBlog(null)} className="text-blue-500 underline mb-2">← Back</button>
          {selectedBlog.image && <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-64 object-cover mb-4 rounded-lg" />}
          <h3 className="text-xl font-semibold">{selectedBlog.title}</h3>
          <p className="text-gray-700 mt-2">{selectedBlog.content}</p>
        </div>
      ) : (
        currentBlogs.map((blog) => (
          <div key={blog._id} className="border p-4 rounded-lg mb-4 shadow-lg">
            {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-2 rounded-lg" />}
            <h3
              className="text-xl font-semibold text-blue-500 cursor-pointer hover:underline"
              onClick={() => setSelectedBlog(blog)}
            >
              {blog.title}
            </h3>
            <p className="text-gray-600">{blog.category}</p>
          </div>
        ))
      )}

      {/* Pagination */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="font-semibold">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => (indexOfLastBlog < filteredBlogs.length ? prev + 1 : prev))}
          disabled={indexOfLastBlog >= filteredBlogs.length}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogView;
