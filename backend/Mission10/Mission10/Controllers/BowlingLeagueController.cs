using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10.Data;

namespace Mission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlingLeagueContext _bowlingContext;

        public BowlingLeagueController(BowlingLeagueContext context)
        {
            _bowlingContext = context;
        }

        [HttpGet(Name = "GetBowler")]
        public IActionResult Get()
        {
            // Get bowlers from Marlins and Sharks teams
            var bowlers = _bowlingContext.Bowlers
                            .Include(b => b.Team) // Join with Teams table
                            .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks") // Filter teams
                            .Select(b => new
                            {
                                b.BowlerFirstName,
                                b.BowlerMiddleInit,
                                b.BowlerLastName,
                                TeamName = b.Team.TeamName,
                                b.BowlerAddress,
                                b.BowlerCity,
                                b.BowlerState,
                                b.BowlerZip,
                                b.BowlerPhoneNumber
                            })
                            .ToList();

            return Ok(bowlers);
        }
    }
}
