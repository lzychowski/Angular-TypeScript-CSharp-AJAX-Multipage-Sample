using System;
using System.Web.Mvc;
using HallData.EMS.Web.Controllers;

namespace Web.Controllers
{
	[RoutePrefix("customers")]
	public class CustomerController : BaseController
	{

		[HttpGet]
		[Route("{id}", Name = "CustomerDisplay")]
		public ActionResult CustomerDisplay(Guid id)
		{
			ViewBag.RouteValueDictionary = GetRouteData(Url);
			return View("~/CustomerDisplay.cshtml");
		}

	}
}