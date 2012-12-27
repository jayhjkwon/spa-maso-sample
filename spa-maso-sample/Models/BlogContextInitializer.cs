using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class BlogContextInitializer : DropCreateDatabaseAlways<BlogContext>
    {
        protected override void Seed(BlogContext context)
        {
            // create sample data
            var blog = new BlogContext();
            var gen = new NLipsum.Core.LipsumGenerator();

            // tags
            var tag1 = new Tag {Id = 1, TagText = "asp.net"};
            var tag2 = new Tag {Id = 2, TagText = "javascript"};
            var tag3 = new Tag {Id = 3, TagText = "knockoutjs"};
            var tag4 = new Tag { Id = 4, TagText = "nodejs" };
            blog.Tags.Add(tag1);
            blog.Tags.Add(tag2);
            blog.Tags.Add(tag3);
            blog.Tags.Add(tag4);

            var post1 = 
                new Post
                    {
                        Id          = 1,
                        Title       = "A Few New Things Coming To JavaScript",
                        Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                        DateCreated = DateTime.Now,
                        Comments    = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Scott Hanselman",
                                        CommentText   = "Hello Ray, this is really great post.",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Scott Guthrie",
                                        CommentText   = "I hava a question, can I email to you?",
                                        CommentTime   = DateTime.Now
                                    }
                            }
                    };
            post1.Tags.Add(tag1);
            post1.Tags.Add(tag2);
            post1.Tags.Add(tag3);
            post1.Tags.Add(tag4);
            blog.Posts.Add(post1);

            var post2 = 
                new Post
                {
                    Id          = 2,
                    Title       = "Writing Fast, Memory-Efficient JavaScript",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Comments = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Scott Hanselman",
                                        CommentText   = "Hello Ray, this is really great post.",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Scott Guthrie",
                                        CommentText   = "I hava a question, can I email to you?",
                                        CommentTime   = DateTime.Now
                                    }
                            }
                };
            post2.Tags.Add(tag1);
            post2.Tags.Add(tag2);
            blog.Posts.Add(post2);

            var post3 = 
                new Post
                {
                    Id          = 3,
                    Title       = "Understanding MVVM – A Guide For JavaScript Developers",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now
                };
            post3.Tags.Add(tag3);
            blog.Posts.Add(post3);

            var post4 = 
                new Post
                {
                    Id          = 4,
                    Title       = "Node.js development with WebMatrix 2 and Express",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Comments = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Scott Hanselman",
                                        CommentText   = "Hello Ray, this is really great post.",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Scott Guthrie",
                                        CommentText   = "I hava a question, can I email to you?",
                                        CommentTime   = DateTime.Now
                                    }
                            }
                };
            post4.Tags.Add(tag1);
            post4.Tags.Add(tag2);
            post4.Tags.Add(tag3);
            blog.Posts.Add(post4);

            var post5 = 
                new Post
                {
                    Id          = 5,
                    Title       = "Knockout.js with Steven Sanderson",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Comments = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Scott Hanselman",
                                        CommentText   = "Hello Ray, this is really great post.",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Scott Guthrie",
                                        CommentText   = "I hava a question, can I email to you?",
                                        CommentTime   = DateTime.Now
                                    }
                            }
                };
            blog.Posts.Add(post5);

            var post6 =
                new Post
                {
                    Id          = 6,
                    Title       = "Design Patterns in Javascript",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now
                };
            post6.Tags.Add(tag3);
            blog.Posts.Add(post6);

            var post7 =
                new Post
                {
                    Id          = 7,
                    Title       = "Building Mobile JavaScript WebApps With Backbone.js",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Comments = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Scott Hanselman",
                                        CommentText   = "Hello Ray, this is really great post.",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Scott Guthrie",
                                        CommentText   = "I hava a question, can I email to you?",
                                        CommentTime   = DateTime.Now
                                    }
                            }
                };
            blog.Posts.Add(post7);

            blog.SaveChanges();
        }
    }
}