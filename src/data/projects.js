export const projects = [
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform',
    subtitle: 'Admin Panel + Customer Website',
    shortDescription:
      'End-to-end e-commerce system where the admin panel is the single source of truth for all customer-facing content — products, categories, banners, and header messages — with zero hardcoding.',
    role: 'Solo Project · End-to-End',
    filters: ['React', 'Laravel', 'MySQL'],
    tech: ['React.js', 'Laravel', 'MySQL'],
    highlights: [
      'Admin panel as the single source of truth for products, categories, banners, and header messages',
      'Token-based authentication and a real-time sales dashboard',
      'Full CRUD for categories/subcategories with image support, bulk and individual product discounts, and low-stock filtering',
      'Order status management across pending, processing, shipped, delivered, and cancelled',
      'Customer site with dynamic heroes, animated header messages, smart category navigation, and a 3D animated category showcase',
      'Shopping cart with auto-calculated billing and free-shipping logic',
      'Dual checkout: guest checkout and account-based checkout with saved addresses and live order tracking',
    ],
    caseStudy: {
      problem:
        'Businesses need a maintainable storefront and admin without hardcoding content or splitting product data across disconnected tools.',
      approach:
        'Designed and built the full stack solo — database schema, REST APIs, admin UX, and customer storefront — so every public surface is driven by admin-managed data.',
      outcome:
        'A complete, deployable e-commerce ecosystem covering catalog, discounts, inventory signals, orders, guest and account checkout, and live order tracking.',
    },
    github: '',
  },
  {
    id: 'business-automation',
    title: 'Internal Business Automation System',
    subtitle: 'Document Workflow in Google Workspace',
    shortDescription:
      'End-to-end document workflow system built within Google Workspace using Google Apps Script — PDF generation, automated emails, Drive storage, and secure multi-role dashboards.',
    role: 'Google Apps Script Developer · Deviotech',
    filters: ['Google Apps Script'],
    tech: ['Google Apps Script', 'Google Drive', 'Google Workspace'],
    highlights: [
      'Dynamic PDF generation from form data with a draft/submit flow before finalization',
      'Automated email dispatch on form submission to eliminate manual follow-up',
      'Google Drive integration for file and image uploads, with links stored for structured access',
      'Secure login with role-based access control (RBAC)',
      'Post-login dashboard with summary cards linking to detailed data views',
      'On-demand PDF download from the dashboard for record exporting',
    ],
    caseStudy: {
      problem:
        'Internal teams were stuck in manual document, email, and file-handling loops that did not scale and lacked clear access control.',
      approach:
        'Built the workflow inside Google Workspace with Apps Script — form intake, draft/submit PDFs, Drive storage, RBAC login, and a dashboard for ops visibility.',
      outcome:
        'A production internal system that automates PDFs and email, centralizes uploads, and gives role-aware access to summaries and exports.',
    },
    github: '',
  },
]
