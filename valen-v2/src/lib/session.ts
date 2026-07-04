// VALEN — Auth session config
// Uses iron-session to store a signed, encrypted cookie.
// The admin password is set via the ADMIN_PASSWORD env variable.
// The session secret is set via the SESSION_SECRET env variable.

import { SessionOptions } from "iron-session";

export interface SessionData {
  isAdmin?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET || "valen-super-secret-key-change-this-in-production-min32chars",
  cookieName: "valen_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};

/** The admin password — set ADMIN_PASSWORD env var on Vercel */
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "valen2025";
