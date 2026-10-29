# Project rules

- Keep repair request validation, device options, and ticket generation in `src/lib/repair-request.ts` so the contact form and its rule tests share one source.
- Submit the contact form directly to FormSubmit with its default CAPTCHA enabled; it handles email forwarding without adding an application server or storage. Include ticket identifiers in both the form payload and email subject, and never describe submission as confirmed inbox delivery.