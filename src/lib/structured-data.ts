export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://inqwise.com/#organization",
    "name": "Inqwise",
    "url": "https://inqwise.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://inqwise.com/logo.svg",
      "width": "180",
      "height": "180"
    },
    "description": "Professional technology solutions with creativity and innovation. We deliver cutting-edge software development, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bat Yam",
      "addressCountry": "Israel"
    },
    "email": "contacts@inqwise.com",
    "sameAs": [
      "https://discord.gg/inqwise",
      "https://linkedin.com/company/inqwise",
      "https://github.com/inqwise"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contacts@inqwise.com",
      "availableLanguage": ["English", "Hebrew"]
    }
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://inqwise.com/#website",
    "url": "https://inqwise.com",
    "name": "Inqwise - Technology Solutions",
    "publisher": {
      "@id": "https://inqwise.com/#organization"
    }
  };
}

export function getWebPageSchema(pageUrl: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://inqwise.com${pageUrl}#webpage`,
    "url": `https://inqwise.com${pageUrl}`,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://inqwise.com/#website"
    },
    "about": {
      "@id": "https://inqwise.com/#organization"
    },
    "inLanguage": "en-US"
  };
}

export function getServiceSchema(serviceName: string, description: string, url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@id": "https://inqwise.com/#organization"
    },
    "areaServed": "Worldwide",
    "url": url || "https://inqwise.com/services"
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://inqwise.com${item.url}`
    }))
  };
}

export function getFAQSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

export function getTechArticleSchema(
  title: string, 
  description: string, 
  keywords: string[],
  datePublished?: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "keywords": keywords.join(", "),
    "author": {
      "@id": "https://inqwise.com/#organization"
    },
    "publisher": {
      "@id": "https://inqwise.com/#organization"
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString()
  };
}
