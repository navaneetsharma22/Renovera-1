import { cn } from "@/lib/utils";
import { footerData } from "./footerData";

const SVG_ICONS = {
  Instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  Pinterest: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.254 2.656 7.915 6.467 9.387-.09-.79-.17-2.006.035-2.87l1.196-5.06s-.305-.612-.305-1.517c0-1.42.825-2.48 1.854-2.48.874 0 1.296.656 1.296 1.444 0 .878-.56 2.193-.848 3.41-.24.978.49 1.774 1.455 1.774 1.747 0 3.09-1.844 3.09-4.5 0-2.355-1.693-4.004-4.11-4.004-2.793 0-4.432 2.096-4.432 4.258 0 .877.338 1.82.76 2.332.083.1.095.19.07.29l-.246 1.018c-.035.14-.118.17-.26.104-1.127-.524-1.83-2.167-1.83-3.493 0-2.84 2.063-5.45 5.955-5.45 3.125 0 5.556 2.228 5.556 5.197 0 3.106-1.956 5.6-4.67 5.6-1.077 0-2.092-.56-2.438-1.223l-.666 2.54c-.24 1.055-.89 2.37-1.332 3.18C10.51 21.873 11.242 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  ),
  Linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  Youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  ),
  Behance: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6H13.5C14.8261 6 16.0979 6.52678 17.0355 7.46447C17.9732 8.40215 18.5 9.67392 18.5 11C18.5 12.0125 18.1927 12.9622 17.6534 13.7547C18.4552 14.4965 18.9959 15.5262 18.9959 16.6341C18.9959 18.0935 18.4162 19.4932 17.3842 20.5252C16.3522 21.5572 14.9525 22.1369 13.4931 22.1369H7V6Z"></path>
      <path d="M7 13.5H13.5"></path>
    </svg>
  )
};

export function SocialLinks({ className }) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h4 className="text-sm font-bold uppercase tracking-widest text-[#FAFAFA]">
        Follow Us
      </h4>
      <div className="flex items-center gap-4">
        {footerData.social.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#FAFAFA] hover:bg-[#C5A059] hover:text-[#09090B] hover:border-[#C5A059] transition-all duration-300 group"
          >
            <span className="group-hover:scale-110 transition-transform duration-300">
              {SVG_ICONS[social.icon]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
