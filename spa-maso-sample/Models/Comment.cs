using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required]
        public string CommenterName { get; set; }

        public DateTime CommentTime { get; set; }

        [Required]
        public string CommentText { get; set; }

        public int PostId { get; set; }
        public virtual Post Post { get; set; }
    }
}