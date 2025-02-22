const Blog = require("../models/blog-model");
const imagekit = require("../utils/imagekitConfig");

// Function to upload image to ImageKit
const uploadImage = async (fileBuffer, fileName) => {
  try {
    const result = await imagekit.upload({
      file: fileBuffer,
      fileName: fileName,
      folder: "/blog-images",
    });
    return result.url;
  } catch (error) {
    console.error("Image Upload Error:", error);
    return null;
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    let imageUrl = null;

    if (req.file) {
      imageUrl = await uploadImage(req.file.buffer, req.file.originalname);
    }

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newBlog = await Blog.create({ title, content, image: imageUrl });
    res.status(201).json({ message: "Blog posted successfully", newBlog });
  } catch (error) {
    res.status(500).json({ message: "Error posting blog", error });
  }
};

// 🔹 FIX: Add this function to retrieve all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    let imageUrl = undefined;

    if (req.file) {
      imageUrl = await uploadImage(req.file.buffer, req.file.originalname);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, ...(imageUrl && { image: imageUrl }) },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

// 🔹 FIX: Ensure all functions are correctly exported
module.exports = { 
  createBlog, 
  getAllBlogs, 
  getBlogById, 
  deleteBlog, 
  updateBlog 
};
