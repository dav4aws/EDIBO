using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DotNetWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyValuesController : ControllerBase
    {
        private static readonly string[] Char = new[]
        {
            "Cool", "Not Smart", "Normal", "Smart", "Cute"
        };

        private static readonly string[] Vards = new[]{
            "Janis", "Peteris", "Anatolijs", "Karlis", "Darvins", "Malaka", "Chebureks"
        };

        private readonly ILogger<MyValuesController> _logger;

        public MyValuesController(ILogger<MyValuesController> logger)
        {
            _logger = logger;
        }


        public class MyValues
        {
            public string name { get; set; }

            public int age { get; set; }

            public string character { get; set; }

            public string img { get; set; }

        }

        [HttpGet]
        public IEnumerable<MyValues> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new MyValues
            {
                name = Vards[rng.Next(Vards.Length)],
                age = rng.Next(1, 60),
                character = Char[rng.Next(Char.Length)],
                img = "https://randomuser.me/api/portraits/men/"+rng.Next(1,99)+".jpg"
            })
            .ToArray();
        }


        // // Get value
        // [HttpGet]
        // public ActionResult<IEnumerable<string>> GetAction(){
        //     return new JsonResult(vards : "name");
        // }


        // // GET value/id
        // [HttpGet("{id")]

        // public ActionResult<string> Get(int id){
        //     return "My value";
        // }

        // //POST value
        // [HttpPost]
        // public void Post([FromBody] string value){
        // }

        // // PUT value/id
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody] string value){
        // }

        // //DELETE value/id
        // [HttpDelete("{id}")]
        // public void Delete(int id){

        // }

    }
}
