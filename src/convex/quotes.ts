import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Store a quote request submitted through the estimate form.
 * These stay in the demo's own database — they are never sent to
 * Best Quality Painting Ltd. or to any third party.
 */
export const submitQuoteRequest = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    projectType: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("quoteRequests", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      projectType: args.projectType,
      message: args.message,
      submittedAt: Date.now(),
    });
  },
});

/**
 * List submitted quote requests, newest first.
 * Used by the demo workspace to show incoming requests.
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("quoteRequests")
      .withIndex("by_submittedAt")
      .order("desc")
      .collect();
  },
});