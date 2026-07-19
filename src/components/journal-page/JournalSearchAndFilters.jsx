"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { journalPageData } from "./journalData";

export function JournalSearchAndFilters({ 
  searchQuery, setSearchQuery,
  activeCategory, setActiveCategory,
  activeRoom, setActiveRoom,
  activeStyle, setActiveStyle,
  className 
}) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className={cn("sticky top-[72px] z-40 bg-[#FAFAFA]/95 backdrop-blur-md border-y border-[#E4E4E7]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row items-center gap-4 py-4 md:py-6">
          
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#52525B]" />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E4E4E7] rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all placeholder:text-[#52525B]/50"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-[#E4E4E7] rounded-full py-3 text-sm font-bold uppercase tracking-widest"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            {isMobileFiltersOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
            {isMobileFiltersOpen ? "Close Filters" : "Filters"}
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap items-center gap-3 ml-auto">
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="bg-transparent border-none text-xs font-bold uppercase tracking-widest text-[#52525B] focus:outline-none focus:ring-0 cursor-pointer hover:text-[#09090B] transition-colors"
            >
              {journalPageData.filters.categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <span className="text-[#E4E4E7]">|</span>

            <select 
              value={activeRoom}
              onChange={(e) => setActiveRoom(e.target.value)}
              className="bg-transparent border-none text-xs font-bold uppercase tracking-widest text-[#52525B] focus:outline-none focus:ring-0 cursor-pointer hover:text-[#09090B] transition-colors"
            >
              {journalPageData.filters.rooms.map(room => (
                <option key={room} value={room}>{room}</option>
              ))}
            </select>

            <span className="text-[#E4E4E7]">|</span>

            <select 
              value={activeStyle}
              onChange={(e) => setActiveStyle(e.target.value)}
              className="bg-transparent border-none text-xs font-bold uppercase tracking-widest text-[#52525B] focus:outline-none focus:ring-0 cursor-pointer hover:text-[#09090B] transition-colors"
            >
              {journalPageData.filters.styles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Mobile Filters Dropdown */}
        {isMobileFiltersOpen && (
          <div className="md:hidden py-4 border-t border-[#E4E4E7] flex flex-col gap-4">
             <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Category</span>
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full bg-white border border-[#E4E4E7] rounded-md p-2 text-sm"
              >
                {journalPageData.filters.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Room</span>
              <select 
                value={activeRoom}
                onChange={(e) => setActiveRoom(e.target.value)}
                className="w-full bg-white border border-[#E4E4E7] rounded-md p-2 text-sm"
              >
                {journalPageData.filters.rooms.map(room => <option key={room} value={room}>{room}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Style</span>
              <select 
                value={activeStyle}
                onChange={(e) => setActiveStyle(e.target.value)}
                className="w-full bg-white border border-[#E4E4E7] rounded-md p-2 text-sm"
              >
                {journalPageData.filters.styles.map(style => <option key={style} value={style}>{style}</option>)}
              </select>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
