import React from "react";
import NewsletterWidget from "./NewsletterWidget";
import TagsWidget from "./TagsWidget";
import SocialWidget from "./SocialWidget";
import "./Sidebar.css";

export default function Sidebar({activeTag,onTagChange}) {
  return (
    <aside className="sidebar">
      {/* <NewsletterWidget /> */}
      <TagsWidget 
      activeTag = {activeTag}
      onTagChange = {onTagChange}
      />
      <SocialWidget />
    </aside>
  );
}
