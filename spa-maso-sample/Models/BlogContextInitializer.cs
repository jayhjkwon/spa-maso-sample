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

            blog.Posts.Add(
                new Post
                    {
                        Title       = "A Few New Things Coming To JavaScript",
                        Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                        DateCreated = DateTime.Now,
                        Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                    }
                );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Writing Fast, Memory-Efficient JavaScript",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Understanding MVVM – A Guide For JavaScript Developers",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Node.js development with WebMatrix 2 and Express",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Knockout.js with Steven Sanderson",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Design Patterns in Javascript",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.Posts.Add(
                new Post
                {
                    Title       = "Building Mobile JavaScript WebApps With Backbone.js",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now,
                    Tags        = new List<Tag>
                            {
                                new Tag {Id = 1, TagText = "asp.net"},
                                new Tag {Id = 2, TagText = "javascript"},
                                new Tag {Id = 3, TagText = "knockoutjs"}
                            },
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
                }
            );

            blog.SaveChanges();
        }
    }
}