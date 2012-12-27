using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class Tag
    {
        public Tag()
        {
            this.Posts = new List<Post>();
        }
        public int Id { get; set; }

        [MaxLength(125)]
        public string TagText { get; set; } 
        public virtual ICollection<Post> Posts { get; set; }
    }
}