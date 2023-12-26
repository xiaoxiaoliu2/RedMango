using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
	public class CartItem
	{
        public int Id { get; set; }
        public int MenuItemId { get; set; }
        [ForeignKey("MenuItemId")]       // one menuitem can be in many shopping cart
        public MenuItem MenuItem { get; set; } = new();
        public int Quantity { get; set; }
        public int ShoppingCartId { get; set; }
    }
}

