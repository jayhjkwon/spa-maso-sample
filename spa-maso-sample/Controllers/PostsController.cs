using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using SpaMasoSample.Models;

namespace SpaMasoSample.Controllers
{
    public class PostsController : ApiController
    {
        private readonly BlogContext _db = new BlogContext();

        // GET api/Posts
        public IEnumerable<Post> GetPosts()
        {
            var posts = _db.Posts
                            .Include(p => p.Tags)
                            .Include(p => p.Comments)
                            .OrderByDescending(p => p.DateCreated)
                            .AsEnumerable();
            return posts;
        }

        // GET api/Posts/5
        public Post GetPost(int id)
        {
            var post = _db.Posts.Include(p => p.Tags).Include(p => p.Comments).FirstOrDefault(p => p.Id.Equals(id));
            if (post == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return post;
        }

        // POST api/Posts
        public HttpResponseMessage PostPost(Post post)
        {
            post.DateCreated = DateTime.Now;
            UpdateTag(post);
            _db.Posts.Add(post);
            _db.SaveChanges();

            var response = Request.CreateResponse(HttpStatusCode.Created, post);
            response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = post.Id }));
            return response;
        }

        // PUT api/Posts/5
        public HttpResponseMessage PutPost(Post post)
        {
            //_db.Entry(post).State = EntityState.Modified;
            var postDb = _db.Posts.Find(post.Id);
            postDb.Tags = post.Tags;
            _db.Entry(postDb).CurrentValues.SetValues(post);
            UpdateTag(postDb);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // DELETE api/Posts/5
        public HttpResponseMessage DeletePost(int id)
        {
            var post = _db.Posts.Find(id);
            if (post == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            _db.Posts.Remove(post);

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            return Request.CreateResponse(HttpStatusCode.OK, post);
        }

        // update or insert tag depend if tag exist or not
        private void UpdateTag(Post post)
        {
            var tagList = post.Tags.ToList();
            post.Tags.Clear();

            foreach (var tag in tagList)
            {
                var tagText = tag.TagText.Trim();

                if (!string.IsNullOrWhiteSpace(tagText))
                {
                    var tagDb = _db.Tags.FirstOrDefault(t => t.TagText == tagText);
                    if (tagDb != null)
                    {
                        post.Tags.Add(tagDb);
                    }
                    else
                    {
                        post.Tags.Add(new Tag { TagText = tagText });
                    }
                }
            }
        }

        protected override void Dispose(bool disposing)
        {
            _db.Dispose();
            base.Dispose(disposing);
        }
    }
}