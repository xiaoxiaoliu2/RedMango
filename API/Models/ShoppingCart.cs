using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
	public class ShoppingCart
	{
        public int Id { get; set; }
        public string UserId { get; set; }
        public ICollection<CartItem> CartItems { get; set; }   // one shopping cart can have many cartitem

        [NotMapped]
        public double CartTotal { get; set; }
        [NotMapped]
        public string StripePaymentIntentId { get; set; }
        [NotMapped]
        public string ClientSecret { get; set; }
    }
}

