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
        // Get api/values

        [HttpGet]
        public ActionResult<IEnumerable<string>> GetAction(){
            return new string[] {"Davids","July", "2020", "EDIBO", "RTU"};
        }
    }
}
