import { z } from "zod";

export const repairOptions = [
  "Computer repair",
  "Laptop repair",
  "iPhone repair",
  "Android phone repair",
  "Tablet / iPad repair",
  "Gaming console repair",
  "Gaming PC repair / custom build",
  "Consumer electronics repair",
  "Device maintenance & upgrades",
  "Data recovery",
  "Software troubleshooting",
  "Hardware diagnostics",
  "Other",
] as const;

export const repairRequestSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).refine(
    (value) => value === "" || (/^[+\d\s().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7 && value.replace(/\D/g, "").length <= 15),
    "Please enter a valid phone number",
  ),
  device: z.enum(repairOptions, { errorMap: () => ({ message: "Please select a device or service" }) }),
});

export function createRepairTicket() {
  return `FT-${crypto.randomUUID().toUpperCase()}`;
}

export function repairEmailSubject(ticket: string) {
  return `FreshTech Repair request — ${ticket}`;
}