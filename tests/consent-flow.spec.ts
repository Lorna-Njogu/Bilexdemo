import { expect, test } from "@playwright/test";

test("booking form requires consent before continuing", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/contact");
  await page.getByLabel("Name").fill("Test Buyer");
  await page.getByLabel("Company / Representative").fill("Test Company");
  await page.getByLabel("Email").fill("buyer@example.com");
  await page.getByLabel("Phone or WhatsApp").fill("+254700000000");
  await page.getByLabel("Sample / Material Details").fill("Gold sample");
  await page.getByLabel("Appointment Window").fill("Tomorrow morning");
  await page.getByLabel("Message").fill("Testing appointment request");
  await page.getByRole("button", { name: "Book Appointment" }).click();

  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByText("I have read and agree to the consent terms")).toBeVisible();
  await expect(page.getByRole("button", { name: "Accept and Continue" })).toBeDisabled();

  await page.getByLabel("I have read and agree to the consent terms").check();
  await expect(page.getByRole("button", { name: "Accept and Continue" })).toBeEnabled();
});
