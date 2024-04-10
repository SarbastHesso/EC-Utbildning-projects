using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EcommerceWebApi.Data;
using EcommerceWebApi.Entities;
using EcommerceWebApi.Models.ProductModels;
using Newtonsoft.Json;

namespace EcommerceWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly SqlContext _context;

        public ProductsController(SqlContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductGetAll>>> GetProducts()
        {
            var products = new List<ProductGetAll>();

            if (products == null)
            {
                return NotFound();
            }

            foreach (var product in await _context.Products.ToListAsync())
                products.Add(new ProductGetAll
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price,
                    ImageUrl = product.ImageUrl
                });
            return products;
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductGetAll>> GetProduct(int id)
        {
            var _product = await _context.Products.FindAsync(id);

            var product = new ProductGetAll
            {
                Id = _product.Id,
                Name = _product.Name,
                Description = _product.Description,
                Price = _product.Price,
                ImageUrl = _product.ImageUrl
            };

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, ProductUpdate model)
        {
            var product = await _context.Products.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (product == null)
            {
                return BadRequest();
            }
            else
            {
                if (!string.IsNullOrEmpty(model.Name) && !string.IsNullOrEmpty(model.Description) && !string.IsNullOrEmpty(model.ImageUrl))
                {
                    product.Name = model.Name;
                    product.Description = model.Description;
                    product.Price = model.Price;
                    product.ImageUrl = model.ImageUrl;

                    _context.Entry(product).State = EntityState.Modified;

                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (DbUpdateConcurrencyException)
                    {
                        if (!ProductExists(id))
                        {
                            return NotFound();
                        }
                        else
                        {
                            throw;
                        }
                    }

                    return NoContent();
                }
                return new BadRequestObjectResult(JsonConvert.SerializeObject(new { message = $"All required field must contain values." }));
            }
            
        }

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(ProductCreate model)
        {
            if (!string.IsNullOrEmpty(model.Name) && !string.IsNullOrEmpty(model.Description) && !string.IsNullOrEmpty(model.ImageUrl))
            {
                var _product = await _context.Products.Where(x => x.Name.ToLower() == model.Name.ToLower()).FirstOrDefaultAsync();
                
                if (_product == null)
                {
                    var product = new Product
                    {
                        Name = model.Name,
                        Description = model.Description,
                        Price = model.Price,
                        ImageUrl = model.ImageUrl
                    };
                    _context.Products.Add(product);
                    await _context.SaveChangesAsync();

                    return CreatedAtAction("GetProduct", new { id = product.Id }, product);

                }
                return new ConflictObjectResult(JsonConvert.SerializeObject(new { message = $"A product by the name: {model.Name} already exists." }));
            }

            return new BadRequestObjectResult(JsonConvert.SerializeObject(new {message = $"All required field must contain values." }));
            
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
