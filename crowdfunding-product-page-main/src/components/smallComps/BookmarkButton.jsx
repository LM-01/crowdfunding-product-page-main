import React, { useState } from 'react';

export function BookmarkButton(){
    const [bookmarked, setBookmarked] = useState(false)
    return <>
    <button className={bookmarked ? "main_button main_button--bookmark main_button--bookmark--active":"main_button main_button--bookmark"} onClick={()=> setBookmarked(!bookmarked)}>
        <div className="main_button--bookmark-icon">
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill={bookmarked ? "hsl(176, 72%, 28%)":"#2F2F2F"} cx="28" cy="28" r="28"/><path fill={bookmarked ? "white":"#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
            <span className="main_button--bookmark-text">
            {bookmarked ? "Bookmarked":"Bookmark"}</span></div>
    </button>
    
    </>
}