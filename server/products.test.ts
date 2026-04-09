import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("products router", () => {
  it("should return empty products list initially", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const products = await caller.products.list();
    expect(Array.isArray(products)).toBe(true);
  });

  it("should handle getBySlug with invalid slug", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const product = await caller.products.getBySlug({ slug: "non-existent-product" });
    expect(product).toBeUndefined();
  });
});

describe("testimonials router", () => {
  it("should return empty testimonials list initially", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    const testimonials = await caller.testimonials.list();
    expect(Array.isArray(testimonials)).toBe(true);
  });

  it("should validate testimonial input", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.testimonials.create({
        name: "",
        company: "Test Company",
        text: "Test testimonial",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should require minimum text length", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: {} as any,
      res: {} as any,
    });

    try {
      await caller.testimonials.create({
        name: "John Doe",
        company: "Test Company",
        text: "Short",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });
});
