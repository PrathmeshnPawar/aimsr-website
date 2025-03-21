using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("/admission/contactform")]
    public class ContactFormController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactFormController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactForm>>> GetContactForms()
        {
            return await _context.ContactForms.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ContactForm>> GetContactForm(int id)
        {
            var contactForm = await _context.ContactForms
                .FirstOrDefaultAsync(c => c.Id == id);

            if (contactForm == null)
            {
                return NotFound();
            }

            return contactForm;
        }

        [HttpPost]
        public async Task<ActionResult<ContactForm>> CreateContactForm(ContactForm contactForm)
        {
            _context.ContactForms.Add(contactForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactForm), new { id = contactForm.Id }, contactForm);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContactForm(int id, ContactForm contactForm)
        {
            if (id != contactForm.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactFormExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactForm(int id)
        {
            var contactForm = await _context.ContactForms.FindAsync(id);
            if (contactForm == null)
            {
                return NotFound();
            }

            _context.ContactForms.Remove(contactForm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactFormExists(int id)
        {
            return _context.ContactForms.Any(e => e.Id == id);
        }
    }
}
