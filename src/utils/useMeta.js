// src/utils/useMeta.js
import { useEffect } from "react";

/**
 * Dynamically updates <title> and <meta> tags
 * @param {object} meta
 * @param {string} meta.title - Page title
 * @param {string} meta.description - Meta description
 * @param {string} meta.image - Social preview image
 * @param {string} meta.url - Canonical URL
 */
export default function useMeta({ title, description, image, url }) {
    useEffect(() => {
        const siteTitle = title || "Rohit Bansode | Full Stack Web Developer";
        const desc =
            description ||
            "Building fast, modern full-stack applications using React, Node.js, and MongoDB.";
        const canonical = url || window.location.href;
        const img =
            image || "https://rohitbansode.dev/preview.jpg";

        // --- Document title ---
        document.title = siteTitle;

        // --- Description ---
        updateMeta("description", desc);

        // --- Canonical URL ---
        updateLink("canonical", canonical);

        // --- Open Graph Tags ---
        updateProperty("og:title", siteTitle);
        updateProperty("og:description", desc);
        updateProperty("og:image", img);
        updateProperty("og:url", canonical);

        // --- Twitter Tags ---
        updateProperty("twitter:title", siteTitle);
        updateProperty("twitter:description", desc);
        updateProperty("twitter:image", img);
        updateProperty("twitter:card", "summary_large_image");
    }, [title, description, image, url]);
}

/* ----------------- Internal helpers ----------------- */
function updateMeta(name, content) {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
    }
    tag.content = content;
}

function updateProperty(property, content) {
    if (!content) return;
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

function updateLink(rel, href) {
    if (!href) return;
    let link = document.querySelector(`link[rel="${rel}"]`);
    if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
    }
    link.href = href;
}
