// Business logic
const blogRepo = require("../repository/blog_repository");

class BlogService {
  //create
  async createBlog(data) {
    return await blogRepo.createBlog(data);
  }
  // get
  async getBlogs() {
    return await blogRepo.getBlogs();
  }
  // get by id
  async getBlogById(id) {
    return await blogRepo.getBlogById(id);
  }
  // update
  async updateBlog(id) {
    return await blogRepo.updateBlog(id);
  }
  //delete
  async deleteBlog(id) {
    return await blogRepo.deleteBlog(id);
  }
}

module.exports = new BlogService();
