using System;
using Microsoft.AspNetCore.Identity;

namespace API.Models
{
	public class ApplicationUser : IdentityUser
	{
		// extend the IdentityUser and add more field
		public string Name { get; set; }
	}
}

