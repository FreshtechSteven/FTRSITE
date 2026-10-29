import { describe, expect, test } from "bun:test";
import { createRepairTicket, repairEmailSubject, repairOptions, repairRequestSchema } from "./repair-request";

const request = { name: "Test Customer", email: "customer@example.com", phone: "2152540554", device: "Computer repair" };

describe("repair request rules", () => {
  test("keeps name required", () => {
    expect(repairRequestSchema.safeParse({ ...request, name: "" }).success).toBe(false);
  });
  test("keeps email required", () => {
    expect(repairRequestSchema.safeParse({ ...request, email: "" }).success).toBe(false);
  });
  test("allows an optional callback number and validates it when provided", () => {
    expect(repairRequestSchema.safeParse({ ...request, phone: "" }).success).toBe(true);
    expect(repairRequestSchema.parse(request).phone).toBe("2152540554");
    expect(repairRequestSchema.safeParse({ ...request, phone: "not a number" }).success).toBe(false);
  });
  test("offers requested electronics and Other", () => {
    for (const device of ["Computer repair", "iPhone repair", "Android phone repair", "Other"]) {
      expect(repairOptions).toContain(device);
      expect(repairRequestSchema.safeParse({ ...request, device }).success).toBe(true);
    }
    expect(repairRequestSchema.safeParse({ ...request, device: "unlisted" }).success).toBe(false);
  });
  test("creates distinct individual ticket numbers included in the email subject", () => {
    const first = createRepairTicket();
    const second = createRepairTicket();
    expect(first).toMatch(/^FT-[0-9A-F-]{36}$/);
    expect(first).not.toBe(second);
    expect(repairEmailSubject(first)).toContain(first);
  });
});