using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SpaMasoSample.Models
{
    public class BlogContext : DbContext
    {
        public BlogContext()
        {
            Configuration.ProxyCreationEnabled  = false;
            Configuration.LazyLoadingEnabled    = false;
            Configuration.ValidateOnSaveEnabled = false;

            Database.SetInitializer(new BlogContextInitializer());
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Post>()
                .HasMany(p => p.Tags)
                .WithMany(t => t.Posts)
                .Map(m =>
                    {
                        m.ToTable("TagPosts");
                        m.MapLeftKey("PostId");
                        m.MapRightKey("TagId");
                    });
        }
    }
}