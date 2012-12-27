using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class Post
    {
        public Post()
        {
            this.Tags = new List<Tag>();
            this.Comments = new List<Comment>();
        }
        public int Id { get; set; }

        [Required]
        [MaxLength(125)]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public DateTime DateCreated { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}