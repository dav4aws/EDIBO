using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DotNetWebApi.Controllers
{
    [ApiController]
    [Route("value")]
    public class MyValuesController : ControllerBase
    {
        // Get value
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction(){
            return new string[] {"Davids","July", "2020", "EDIBO", "RTU"};
        }

        // GET value/id
        [HttpGet("{id")]

        public ActionResult<string> Get(int id){
            return "My value";
        }

        //POST value
        [HttpPost]
        public void Post([FromBody] string value){
        }

        // PUT value/id
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value){
        }

        //DELETE value/id
        [HttpDelete("{id}")]
        public void Delete(int id){

        }

    }
}
