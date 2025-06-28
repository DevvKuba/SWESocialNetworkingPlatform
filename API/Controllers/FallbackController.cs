using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class FallbackController : Controller
    {
        public ActionResult Index()
        {
            // for any routing that can't be handled on the api, redirects to index.html to utilise angular routing
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html");
            var fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "text/html");

            //return PhysicalFile(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "index.html"), "text/html");
        }
    }
}
