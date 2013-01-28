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
            var tag1 = new Tag {Id = 1, TagText = "aspnet-webapi"};
            var tag2 = new Tag {Id = 2, TagText = "javascript"};
            var tag3 = new Tag {Id = 3, TagText = "knockoutjs"};
            var tag4 = new Tag { Id = 4, TagText   = "NodeJS" };
            var tag5 = new Tag { Id = 5, TagText   = "Asp" };
            var tag6 = new Tag { Id = 6, TagText   = "BASIC" };
            var tag7 = new Tag { Id = 7, TagText   = "C" };
            var tag8 = new Tag { Id = 8, TagText   = "C++" };
            var tag9 = new Tag { Id = 9, TagText   = "Clojure" };
            var tag10 = new Tag { Id = 10, TagText = "COBOL" };
            var tag11 = new Tag { Id = 11, TagText = "ColdFusion" };
            var tag12 = new Tag { Id = 12, TagText = "Erlang" };
            var tag13 = new Tag { Id = 13, TagText = "Fortran" };
            var tag14 = new Tag { Id = 14, TagText = "Groovy" };
            var tag15 = new Tag { Id = 15, TagText = "Haskell" };
            var tag16 = new Tag { Id = 16, TagText = "Java" };
            var tag17 = new Tag { Id = 17, TagText = "JavaScript" };
            var tag18 = new Tag { Id = 18, TagText = "Lisp" };
            var tag19 = new Tag { Id = 19, TagText = "Perl" };
            var tag20 = new Tag { Id = 20, TagText = "PHP" };
            blog.Tags.Add(tag1);                      
            blog.Tags.Add(tag2);                      
            blog.Tags.Add(tag3);                      
            blog.Tags.Add(tag4);                      
            blog.Tags.Add(tag5);
            blog.Tags.Add(tag6);
            blog.Tags.Add(tag7);
            blog.Tags.Add(tag8);
            blog.Tags.Add(tag9);
            blog.Tags.Add(tag10);
            blog.Tags.Add(tag11);
            blog.Tags.Add(tag12);
            blog.Tags.Add(tag13);
            blog.Tags.Add(tag14);
            blog.Tags.Add(tag15);
            blog.Tags.Add(tag16);
            blog.Tags.Add(tag17);
            blog.Tags.Add(tag18);
            blog.Tags.Add(tag19);
            blog.Tags.Add(tag20);

            var post1 = 
                new Post
                    {
                        Id          = Guid.NewGuid(),
                        Title       = "A Few New Things Coming To JavaScript",
                        Content     = string.Join(" ", gen.GenerateParagraphs(2)),
                        DateCreated = DateTime.Now,
                        Comments    = new List<Comment>
                            {
                                new Comment
                                    {
                                        CommenterName = "Sungki Kim",
                                        CommentText   = "I hava a question, can I email to you? I work too much, even weekend I have to go to the company. Are there any opportunities in your company?",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                    {
                                        CommenterName = "Sujin Lee",
                                        CommentText   = "Hello Ray, this is really great post, Awesome. I love U",
                                        CommentTime   = DateTime.Now
                                    },
                                new Comment
                                {
                                    CommenterName = "Keungyoung Kim",
                                    CommentText   = "How are you doing, Ray? I love to go to Luxembourg ASAP. Anyway when do we start MyStory.SPA project?",
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
                    Id          = Guid.NewGuid(),
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
                    Id          = Guid.NewGuid(),
                    Title       = "Understanding MVVM – A Guide For JavaScript Developers",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now
                };
            post3.Tags.Add(tag3);
            blog.Posts.Add(post3);

            var post4 = 
                new Post
                {
                    Id          = Guid.NewGuid(),
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
                    Id          = Guid.NewGuid(),
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
                    Id          = Guid.NewGuid(),
                    Title       = "Design Patterns in Javascript",
                    Content     = string.Join(" ", gen.GenerateParagraphs(5)),
                    DateCreated = DateTime.Now
                };
            post6.Tags.Add(tag3);
            blog.Posts.Add(post6);

            var post7 =
                new Post
                {
                    Id          = Guid.NewGuid(),
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