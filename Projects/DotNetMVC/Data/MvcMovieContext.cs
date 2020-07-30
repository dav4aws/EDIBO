using Microsoft.EntityFrameworkCore;
using DotNetMVC.Models;

namespace DotNetMVC.Data
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext (DbContextOptions<MvcMovieContext> options)
            : base(options)
        {
        }

        public DbSet<Movie> Movie { get; set; }
    }
}