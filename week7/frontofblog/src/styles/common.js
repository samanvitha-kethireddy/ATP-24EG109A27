// src/styles/common.js

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#fdfcff] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#ffffff] rounded-2xl p-7 border border-[#f1e8ff] hover:border-[#e4d4ff] hover:bg-[#faf7ff] transition-all duration-200 cursor-pointer";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-semibold text-[#2a2438] tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-semibold text-[#2a2438] tracking-tight";
export const subHeadingClass = "text-lg font-medium text-[#2a2438]";
export const bodyText = "text-[#6b6b8a] leading-relaxed";
export const mutedText = "text-sm text-[#a1a1c2]";
export const linkClass = "text-[#7c6cff] hover:text-[#5b4ee6] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#7c6cff] text-white font-medium px-5 py-2 rounded-full hover:bg-[#5b4ee6] transition-all duration-200 cursor-pointer text-sm";

export const secondaryBtn =
  "border border-[#e5dbff] text-[#2a2438] font-medium px-5 py-2 rounded-full hover:bg-[#f6f2ff] transition-all duration-200 cursor-pointer text-sm";

export const ghostBtn =
  "text-[#7c6cff] font-medium hover:text-[#5b4ee6] transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[#ffffff] border border-[#f0e6ff] rounded-2xl p-10 max-w-4xl mx-auto";

export const formTitle = "text-2xl font-semibold text-[#2a2438] tracking-tight text-center mb-7";

export const labelClass = "text-xs font-medium text-[#7a7a9a] mb-1.5 block";

export const inputClass =
  "w-full bg-[#ffffff] border border-[#e5dbff] rounded-xl px-4 py-2.5 text-[#2a2438] text-sm placeholder:text-[#b2b2d6] focus:outline-none focus:border-[#7c6cff] focus:ring-2 focus:ring-[#7c6cff]/20 transition";

export const formGroup = "mb-4";

export const submitBtn =
  "w-full bg-[#7c6cff] text-white font-medium py-2.5 rounded-full hover:bg-[#5b4ee6] transition-all duration-200 cursor-pointer mt-2 text-sm";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[#ffffffcc] backdrop-blur-xl border-b border-[#f0e6ff] px-8 h-[52px] flex items-center sticky top-0 z-50";

export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";

export const navBrandClass = "text-base font-semibold text-[#2a2438] tracking-tight";

export const navLinksClass = "flex items-center gap-7";

export const navLinkClass = "text-[0.8rem] text-[#8a88a8] hover:text-[#2a2438] transition-colors";

export const navLinkActiveClass = "text-[0.8rem] text-[#7c6cff] font-medium";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

export const articleCardClass =
  "bg-[#ffffff] border border-[#f1e8ff] p-7 hover:bg-[#faf7ff] hover:border-[#e4d4ff] transition-all duration-200 flex flex-col gap-2.5 cursor-pointer";

export const articleTitle = "text-base font-semibold text-[#2a2438] leading-snug";

export const articleExcerpt = "text-sm text-[#6b6b8a] leading-relaxed";

export const articleMeta = "text-xs text-[#a1a1c2]";

export const articleBody = "text-[#6b6b8a] leading-[1.85] text-[0.95rem] max-w-2xl";

export const timestampClass = "text-xs text-[#a1a1c2] flex items-center gap-1.5";

export const tagClass =
  "text-[0.65rem] font-semibold text-[#7c6cff] uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";

export const articleHeader = "mb-10 flex flex-col gap-4";

export const articleCategory =
  "text-[0.7rem] font-semibold uppercase tracking-widest text-[#7c6cff]";

export const articleMainTitle =
  "text-4xl font-semibold text-[#2a2438] leading-tight";

export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#f0e6ff] py-4 text-sm text-[#7a7a9a]";

export const authorInfo =
  "flex items-center gap-2 font-medium text-[#2a2438]";

export const articleContent =
  "text-[#2a2438] leading-[1.9] text-[1rem] whitespace-pre-line mt-8";

export const articleFooter =
  "border-t border-[#f0e6ff] mt-12 pt-6 text-sm text-[#a1a1c2]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-6";

export const editBtn =
  "bg-[#7c6cff] text-white text-sm px-4 py-2 rounded-full hover:bg-[#5b4ee6] transition";

export const deleteBtn =
  "bg-[#ff8fab] text-white text-sm px-4 py-2 rounded-full hover:bg-[#ff6f91] transition";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#c7f9cc] text-[#2d6a4f]";

export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#ffd6e0] text-[#b23a48]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#ffe3e8] text-[#b23a48] border border-[#ffc2d1] rounded-xl px-4 py-3 text-sm";

export const successClass =
  "bg-[#e0f7fa] text-[#006d77] border border-[#b2ebf2] rounded-xl px-4 py-3 text-sm";

export const loadingClass =
  "text-[#7c6cff]/70 text-sm animate-pulse text-center py-10";

export const emptyStateClass =
  "text-center text-[#a1a1c2] py-16 text-sm";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-12 flex flex-col gap-6";

export const commentCard =
  "bg-[#ffffff] border border-[#f1e8ff] rounded-2xl p-5 transition hover:bg-[#faf7ff]";

export const commentHeader = "flex items-center justify-between mb-2";

export const commentUser = "text-sm font-semibold text-[#2a2438]";

export const commentTime = "text-xs text-[#a1a1c2]";

export const commentText =
  "text-[#2a2438] text-sm leading-relaxed mt-1";

export const avatar =
  "w-9 h-9 rounded-full bg-[#ede9ff] text-[#7c6cff] flex items-center justify-center text-sm font-semibold";

export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#f0e6ff] my-10";