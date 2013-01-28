using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class PostAndTag
    {
        public int PostId { get; set; }
        public Post Post { get; set; }

        public int TagId { get; set; }
        public Tag Tag { get; set; }
    }
}