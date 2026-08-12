import type { Plugin } from "vite";
import { education } from "./src/data/education";
import { experience } from "./src/data/experience";
import { profile } from "./src/data/profile";
import { skills } from "./src/data/skills";
import { socials } from "./src/data/socials";

const escape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/**
 * The terminal is client-rendered, so crawlers without JS see an empty div.
 * This injects the same content as plain HTML at build time — one source of
 * truth (src/data), no duplicated copy to keep in sync.
 */
export const seo = (): Plugin => ({
  name: "inject-seo",
  transformIndexHtml() {
    const person = {
      "@type": "Person",
      "@id": `${profile.siteUrl}/#person`,
      name: profile.name,
      alternateName: profile.nickname,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      url: profile.siteUrl,
      address: { "@type": "PostalAddress", addressLocality: profile.location },
      sameAs: socials.map(({ url }) => url),
      knowsAbout: skills.flatMap(({ items }) => items),
      alumniOf: education.map(({ title, desc }) => ({
        "@type": "EducationalOrganization",
        name: `${title} — ${desc}`,
      })),
      worksFor: experience.map(({ company }) => ({
        "@type": "Organization",
        name: company,
      })),
    };

    // A ProfilePage wrapping the Person is what Google expects for a personal
    // site; the WebSite node makes the name of the site itself indexable.
    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "ProfilePage",
          "@id": `${profile.siteUrl}/#page`,
          url: profile.siteUrl,
          name: `${profile.name} — ${profile.role}`,
          mainEntity: { "@id": `${profile.siteUrl}/#person` },
          inLanguage: "en",
        },
        {
          "@type": "WebSite",
          url: profile.siteUrl,
          name: `${profile.name} — terminal portfolio`,
          publisher: { "@id": `${profile.siteUrl}/#person` },
        },
      ],
    };

    const fallback = `
      <h2>${escape(profile.name)} — ${escape(profile.role)}</h2>
      <p>${escape(profile.location)} · <a href="mailto:${profile.email}">${profile.email}</a> ·
        <a href="${profile.resumeUrl}">Resume (PDF)</a></p>
      <h3>Experience</h3>
      <ul>
        ${experience
          .map(
            ({ role, company, meta, desc }) => `<li>
              <strong>${escape(role)}, ${escape(company)}</strong><br />
              <em>${escape(meta)}</em><br />${escape(desc)}
            </li>`
          )
          .join("")}
      </ul>
      <h3>Skills</h3>
      <ul>
        ${skills
          .map(
            ({ group, items }) =>
              `<li><strong>${escape(group)}:</strong> ${escape(items.join(", "))}</li>`
          )
          .join("")}
      </ul>
      <h3>Education</h3>
      <ul>
        ${education
          .map(({ title, desc }) => `<li>${escape(title)} — ${escape(desc)}</li>`)
          .join("")}
      </ul>
      <h3>Links</h3>
      <ul>
        ${socials
          .map(({ title, url }) => `<li><a href="${url}">${escape(title)}</a></li>`)
          .join("")}
      </ul>
    `;

    return [
      {
        tag: "script",
        attrs: { type: "application/ld+json" },
        children: JSON.stringify(graph),
        injectTo: "head" as const,
      },
      {
        tag: "noscript",
        attrs: { class: "seo-fallback" },
        children: fallback,
        injectTo: "body" as const,
      },
    ];
  },
});
