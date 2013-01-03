using SpaMasoSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SpaMasoSample.Controllers
{
    public class TagsController : ApiController
    {
        private readonly BlogContext _db = new BlogContext();

        // GET api/tags
        public IEnumerable<Tag> Get()
        {
            return _db.Tags.AsEnumerable();
        }


        protected override void Dispose(bool disposing)
        {
            _db.Dispose();
            base.Dispose(disposing);
        }
    }
}
