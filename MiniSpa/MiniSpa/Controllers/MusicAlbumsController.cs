﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MiniSpa.Controllers
{
    public class MusicAlbumsController : Controller
    {
        //
        // GET: /MusicAlbums/

        public ActionResult Index()
        {
            return View();
        }

        public PartialViewResult List()
        {
            return PartialView();
        }

        public PartialViewResult Edit()
        {
            return PartialView();
        }

        public PartialViewResult Detail()
        {
            return PartialView();
        }
    }
}
