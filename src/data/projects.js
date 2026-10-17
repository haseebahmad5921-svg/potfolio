export const projects = [
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'Admin Panel + Customer Website · Laravel & React',
    shortDescription:
      'Solo full-stack e-commerce system built with React, Laravel, and MySQL — admin panel as the single source of truth for products, categories, banners, and orders, with a dynamic customer storefront and dual checkout.',
    role: 'Solo Project · End-to-End (Laravel + React + MySQL)',
    featured: true,
    filters: ['React', 'Laravel', 'MySQL'],
    tech: ['React.js', 'Laravel', 'MySQL'],
    highlights: [
      'Token-based authentication and a real-time sales dashboard in the admin panel',
      'Full CRUD for products and categories/subcategories with image handling',
      'Bulk and individual product discounts, plus low-stock filtering',
      'Order status management across pending, processing, shipped, delivered, and cancelled',
      'Customer site fully driven by admin data — zero hardcoding of catalog or marketing content',
      'Smart category navigation and a 3D animated category showcase',
      'Shopping cart with auto-calculated billing and free-shipping logic',
      'Dual checkout: guest checkout and account-based checkout with saved addresses and live order tracking',
      'Owned database design, UI/UX, REST API integration, and deployment logic end-to-end',
    ],
    caseStudy: {
      problem:
        'Businesses need a maintainable storefront and admin without hardcoding content or splitting product data across disconnected tools.',
      approach:
        'Designed and built the full Laravel + React stack solo — MySQL schema, REST APIs with token auth, admin UX, and customer storefront — so every public surface is driven by admin-managed data.',
      outcome:
        'A complete, deployable e-commerce ecosystem covering catalog, discounts, inventory signals, orders, guest and account checkout, and live order tracking — the flagship proof of my Laravel + React full-stack skills.',
    },
    github: '',
    reviewUrl: 'https://lnkd.in/p/dsZyZkwJ',
    reviewLabel: 'View LinkedIn Post',
  },
  {
    id: 'business-automation',
    title: 'Internal Business Automation System',
    subtitle: 'Document Workflow in Google Workspace · Deviotech',
    shortDescription:
      'Production document workflow system built at Deviotech with Google Apps Script — PDF generation, automated emails, Drive storage, RBAC login, and multi-role dashboards maintained for 1.5+ years.',
    role: 'Google Apps Script Developer · Deviotech',
    featured: false,
    filters: ['Google Apps Script'],
    tech: ['Google Apps Script', 'Google Drive', 'Google Workspace'],
    highlights: [
      'Dynamic PDF generation from form data with a draft/submit flow before finalization',
      'Automated email dispatch on form submission to eliminate manual follow-up',
      'Google Drive integration for file and image uploads, with links stored for structured access',
      'Secure login with role-based access control (RBAC)',
      'Post-login dashboard with summary cards linking to detailed data views',
      'On-demand PDF download from the dashboard for record exporting',
      'Maintained in production for 1.5+ years with ongoing iteration',
    ],
    caseStudy: {
      problem:
        'Internal teams were stuck in manual document, email, and file-handling loops that did not scale and lacked clear access control.',
      approach:
        'Built the workflow inside Google Workspace with Apps Script — form intake, draft/submit PDFs, Drive storage, RBAC login, and a dashboard for ops visibility.',
      outcome:
        'A production internal system that automates PDFs and email, centralizes uploads, and gives role-aware access to summaries and exports — proof of shipping and maintaining real business software.',
    },
    github: '',
    reviewUrl: '',
  },
]
