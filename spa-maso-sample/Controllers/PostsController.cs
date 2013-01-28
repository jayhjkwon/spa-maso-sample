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
        public Post GetPost(string id)
        {
            var post = _db.Posts.Include(p => p.Tags).Include(p => p.Comments).FirstOrDefault(p => p.Id == new Guid(id));
            if(post!=null) return post;
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
        }

        // POST api/Posts
        public HttpResponseMessage PostPost(Post post)
        {
            post.DateCreated = DateTime.Now;
            UpdateTag(post);
            post.Id = Guid.NewGuid();
            _db.Posts.Add(post);
            _db.SaveChanges();

            var response = Request.CreateResponse(HttpStatusCode.Created, post);
            response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = post.Id }));
            return response;
        }

        // DELETE api/Posts/5
        public HttpResponseMessage DeletePost(string id)
        {
            var post = _db.Posts.FirstOrDefault(p => p.Id == new Guid(id));
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

        // PUT api/Posts/5
        public HttpResponseMessage PutPost(Post post)
        {
            _db.Posts.Remove(_db.Posts.Include(p => p.Tags).Include(p => p.Comments).SingleOrDefault(p => p.Id == post.Id));
            post.Id = post.Id;
            UpdateTag(post);
            _db.Posts.Add(post);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK);
        }


        // update or insert tag depend if tag exist or not
        private Post UpdateTag(Post post)
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
                        post.Tags.Add(new Tag{ TagText = tagText });
                    }
                }
            }

            return post;
        }

        protected override void Dispose(bool disposing)
        {
            _db.Dispose();
            base.Dispose(disposing);
        }
    }
}