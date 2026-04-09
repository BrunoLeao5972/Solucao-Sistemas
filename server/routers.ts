import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getProducts, getProductBySlug, getTestimonials, createTestimonial } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(async () => {
      return await getProducts();
    }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return await getProductBySlug(input.slug);
      }),
  }),

  testimonials: router({
    list: publicProcedure.query(async () => {
      return await getTestimonials();
    }),
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        company: z.string().min(1),
        text: z.string().min(10),
        imageUrl: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        return await createTestimonial({
          name: input.name,
          company: input.company,
          text: input.text,
          imageUrl: input.imageUrl,
          approved: 0,
        });
      }),
  }),
});

export type AppRouter = typeof appRouter;
