
import { Case, Lawyer, JobPosting, Article, Statute, BriefRequest, ComplianceResource } from './types';

export const COURTS = [
  'Supreme Court of Nigeria',
  'Court of Appeal',
  'Federal High Court',
  'High Court of Lagos State',
  'National Industrial Court'
];

export const MOCK_CASES: Case[] = [
  {
    id: '1',
    title: 'Attorney General of Lagos State v. Dosunmu',
    citation: '(1989) LGR 564',
    court: 'Supreme Court of Nigeria',
    judge: 'Oputa, JSC',
    date: '1989-07-31',
    summary: 'A landmark decision on the jurisdiction of courts during military regimes and the effect of ouster clauses on executive acts and existing laws.',
    tags: ['Jurisdiction', 'Constitutional Law', 'Ouster Clauses', 'Land Law'],
    parties: ['Attorney General of Lagos State', 'Justice L. J. Dosunmu'],
    fullText: `OPUTA, J.S.C. (Delivering the Lead lodgment): This is an appeal from a reserved judgment of the Court of Appeal delivered on the 1st day of September, 1988...`
  },
  {
    id: '2',
    title: 'Gani Fawehinmi v. Akilu',
    citation: '(1987) LGR 002',
    court: 'Supreme Court of Nigeria',
    judge: 'Eso, JSC',
    date: '1987-12-18',
    summary: 'Established the principle of locus standi in criminal matters, expanding the right of private citizens to prosecute crimes.',
    tags: ['Criminal Procedure', 'Human Rights', 'Locus Standi'],
    parties: ['Gani Fawehinmi', 'Col. Halilu Akilu'],
    fullText: `IN THE SUPREME COURT OF NIGERIA...`
  },
  {
    id: '3',
    title: 'First Bank of Nigeria Plc v. Abba',
    citation: '(1998) LGR 003',
    court: 'Court of Appeal',
    judge: 'Edozie, JCA',
    date: '1998-05-15',
    summary: 'Commercial banking law case regarding the liability of banks in customer transactions and negligence regarding insurance premiums.',
    tags: ['Banking Law', 'Commercial Law', 'Contract', 'Insurance'],
    parties: ['First Bank of Nigeria Plc', 'Alhaji Mai Abba'],
    fullText: `EDOZIE, J.C.A. (Delivering the Leading Judgment)...`
  }
];

export const MOCK_STATUTES: Statute[] = [
  { id: 's1', title: 'Companies and Allied Matters Act 2020', type: 'Act', year: '2020', category: 'Corporate', downloadUrl: '#' },
  { id: 's2', title: 'Land Use Act 1978', type: 'Act', year: '1978', category: 'Real Property', downloadUrl: '#' },
  { id: 's3', title: 'Evidence Act 2011 (as amended)', type: 'Act', year: '2011', category: 'Litigation', downloadUrl: '#' },
  { id: 's4', title: 'Criminal Code Act', type: 'Act', year: '2004', category: 'Criminal Law', downloadUrl: '#' },
  { id: 's5', title: 'Interpretation Act', type: 'Act', year: '2004', category: 'General', downloadUrl: '#' }
];

export const MOCK_RULES: Statute[] = [
  { id: 'r1', title: 'Supreme Court Rules 1985 (as amended)', type: 'Rule', year: '1985', category: 'Apex Court', downloadUrl: '#' },
  { id: 'r2', title: 'Court of Appeal Rules 2021', type: 'Rule', year: '2021', category: 'Appellate', downloadUrl: '#' },
  { id: 'r3', title: 'Federal High Court (Civil Procedure) Rules 2019', type: 'Rule', year: '2019', category: 'Federal', downloadUrl: '#' },
  { id: 'r4', title: 'Lagos State High Court (Civil Procedure) Rules 2019', type: 'Rule', year: '2019', category: 'State - Lagos', downloadUrl: '#' }
];

export const MOCK_REGULATIONS: Statute[] = [
  { id: 'reg1', title: 'NMDPRA Midstream and Downstream Petroleum Operations Regulations 2023', type: 'Form', year: '2023', category: 'Energy', downloadUrl: '#' },
  { id: 'reg2', title: 'CBN Prudential Guidelines for Deposit Money Banks', type: 'Form', year: '2020', category: 'Banking', downloadUrl: '#' },
  { id: 'reg3', title: 'Money Laundering (Prevention and Prohibition) Regulations 2022', type: 'Form', year: '2022', category: 'AML/CFT', downloadUrl: '#' },
  { id: 'reg4', title: 'Terrorism (Prevention and Prohibition) (Implementation of UN Sanctions) Regulations', type: 'Form', year: '2023', category: 'Security', downloadUrl: '#' },
  { id: 'reg5', title: 'CBN Guidelines on International Money Transfer Services', type: 'Form', year: '2021', category: 'Finance', downloadUrl: '#' }
];

export const MOCK_TEMPLATES: Statute[] = [
  { id: 't1', title: 'Deed of Assignment', type: 'Template', year: '2024', category: 'Property', downloadUrl: '#' },
  { id: 't2', title: 'Contract of Employment', type: 'Template', year: '2023', category: 'Employment', downloadUrl: '#' },
  { id: 't3', title: 'Power of Attorney', type: 'Template', year: '2024', category: 'General', downloadUrl: '#' }
];

export const MOCK_LAWYERS: Lawyer[] = [
  { id: '1', name: 'Abdulhafeez Olayinka Mohammad', firm: 'Legalguru Nigeria', practiceAreas: ['Commercial Litigation', 'Energy Law', 'Arbitration'], location: 'Lagos/Abuja', rating: 5.0, verified: true },
  { id: '2', name: 'Wisdom Abiala', firm: 'Lawgrit Legal Associates', practiceAreas: ['Intellectual Property', 'TechLaw', 'Entertainment Law'], location: 'Lagos', rating: 4.9, verified: true },
  { id: '3', name: 'Zainab Abdullahi', firm: 'NorthStar Chambers', practiceAreas: ['Islamic Finance', 'Family Law', 'Real Estate'], location: 'Kano', rating: 4.7, verified: true },
  { id: '4', name: 'Chuka Okoro', firm: 'Riverside Attorneys', practiceAreas: ['Maritime Law', 'Oil & Gas', 'Environmental Law'], location: 'Port Harcourt', rating: 4.8, verified: true },
  { id: '5', name: 'Funke Adekoya, SAN', firm: 'AELEX', practiceAreas: ['Arbitration', 'Litigation'], location: 'Lagos', rating: 5.0, verified: true },
  { id: '6', name: 'Bolanle Peters', firm: 'In-House Counsel Ltd', practiceAreas: ['Corporate Governance', 'M&A', 'Taxation'], location: 'Lagos', rating: 4.6, verified: true },
  { id: '7', name: 'Musa Yakubu', firm: 'Federal Ministry of Justice', practiceAreas: ['Constitutional Law', 'Public Policy', 'Human Rights'], location: 'Abuja', rating: 4.5, verified: true }
];

export const MOCK_JOBS: JobPosting[] = [
  { id: '1', title: 'Senior Associate (Dispute Resolution)', company: 'Aluko & Oyebode', location: 'Lagos', type: 'Full-time', postedDate: '2 days ago', description: 'Seeking a 7-10 year PQE lawyer with extensive experience in commercial litigation and high-stakes arbitration.' },
  { id: '2', title: 'Legal Counsel (In-House)', company: 'Flutterwave', location: 'Lagos (Remote)', type: 'Full-time', postedDate: '1 day ago', description: 'Join our legal team to handle product compliance, licensing, and international regulatory frameworks across Africa.' },
  { id: '3', title: 'Company Secretary / Compliance Officer', company: 'Dangote Group', location: 'Lagos', type: 'Full-time', postedDate: '3 days ago', description: 'Manage board secretarial duties and ensure regulatory compliance with SEC, NSE, and other industry regulators.' },
  { id: '4', title: 'Legal Intern', company: 'Templars', location: 'Lagos/Abuja', type: 'Contract', postedDate: '5 days ago', description: 'Opportunities for recent graduates to gain experience in Corporate, Energy, and Finance law departments.' },
  { id: '5', title: 'Regional Legal Manager', company: 'MTN Nigeria', location: 'Abuja', type: 'Full-time', postedDate: '4 days ago', description: 'Oversee legal operations and government relations for the northern region.' },
  { id: '6', title: 'Junior Counsel', company: 'Wole Olanipekun & Co', location: 'Lagos', type: 'Full-time', postedDate: '1 week ago', description: 'Focus on research, drafting, and appearance in trial and appellate courts.' }
];

export const MOCK_ARTICLES: Article[] = [
  { id: '1', title: 'Navigating the 2024 Fintech Regulatory Landscape', excerpt: 'An in-depth analysis of the Central Bank of Nigeria\'s new licensing requirements for digital payment service providers and its impact on startup scalability.', author: 'Chidi Okechukwu', date: 'March 10, 2025', category: 'Fintech', readTime: '8 min' },
  { id: '2', title: 'Maritime Liens and Ship Arrest: A Practical Guide', excerpt: 'Understanding the complexities of the Admiralty Jurisdiction Act and the procedural steps for enforcing maritime claims in Nigerian territorial waters.', author: 'Oluwaseun Ajayi', date: 'Feb 22, 2025', category: 'Maritime', readTime: '12 min' },
  { id: '3', title: 'Artificial Intelligence and the Nigerian Judiciary', excerpt: 'How emerging AI tools are being integrated into legal research and the ethical considerations for judicial officers and legal practitioners.', author: 'Wisdom Abiala', date: 'Jan 15, 2025', category: 'Legal Tech', readTime: '6 min' },
  { id: '4', title: 'The Evolving Nature of Fundamental Human Rights Enforcement', excerpt: 'A review of recent appellate court decisions regarding the scope of the FREP Rules and the limitations of court intervention in law enforcement actions.', author: 'Musa Yakubu', date: 'Dec 05, 2024', category: 'Constitutional Law', readTime: '10 min' },
  { id: '5', title: 'Arbitration Clauses: Pitfalls in Commercial Drafting', excerpt: 'Common mistakes in drafting dispute resolution clauses that lead to protracted litigation before the actual arbitration begins.', author: 'Funke Adekoya, SAN', date: 'Nov 18, 2024', category: 'Arbitration', readTime: '7 min' },
  { id: '6', title: 'IP Protection in Nollywood: Securing Creative Rights', excerpt: 'Exploring the copyright frameworks available to Nigerian filmmakers and the rising challenges of digital piracy in the streaming era.', author: 'Zainab Abdullahi', date: 'Oct 30, 2024', category: 'Entertainment Law', readTime: '9 min' }
];

export const MOCK_BRIEFS: BriefRequest[] = [
  { id: '1', title: 'Mention at High Court Ikeja', court: 'High Court', location: 'Lagos', date: '2025-05-20', fee: '₦150,000', status: 'Open', requester: 'Lawson & Co' },
  { id: '2', title: 'Adjournment / Mention in Kano', court: 'Federal High Court', location: 'Kano', date: '2025-05-22', fee: '₦85,000', status: 'Open', requester: 'Bello & Co' },
  { id: '3', title: 'Filing of Court Processes', court: 'CAC / High Court', location: 'Abuja (FCT)', date: '2025-05-18', fee: '₦45,000', status: 'Assigned', requester: 'Capital Legal' },
  { id: '4', title: 'Fundamental Rights Application', court: 'Federal High Court', location: 'Port Harcourt', date: '2025-05-25', fee: '₦350,000', status: 'Open', requester: 'Rivers Counsel' },
  { id: '5', title: 'Probate Registry Follow-up', court: 'High Court (Probate)', location: 'Ibadan', date: '2025-05-19', fee: '₦75,000', status: 'Open', requester: 'Oluwole Chambers' },
  { id: '6', title: 'Criminal Matter (Bail Application)', court: 'Magistrate Court', location: 'Enugu', date: '2025-05-15', fee: '₦120,000', status: 'Completed', requester: 'Coal City Law' },
  { id: '7', title: 'Pre-Trial Conference representation', court: 'High Court', location: 'Uyo', date: '2025-05-28', fee: '₦200,000', status: 'Open', requester: 'Akwa Ibom Legal' },
  { id: '8', title: 'Chambers Motion for Substituted Service', court: 'High Court', location: 'Lagos', date: '2025-05-10', fee: '₦95,000', status: 'Completed', requester: 'Commercial Solictors' }
];

export const MOCK_COMPLIANCE_RESOURCES: ComplianceResource[] = [
  { id: '1', title: 'Law Firm AML/CFT Checklist', description: 'Step-by-step guide for legal practitioners to comply with SCUML requirements.', type: 'Checklist', category: 'AML' },
  { id: '2', title: 'NDPR Compliance Audit Manual', description: 'Comprehensive manual for performing Data Protection audits under the NDPR.', type: 'Guide', category: 'Regulatory' },
  { id: '3', title: 'Beneficial Ownership Register Guide', description: 'Understanding the CAC requirements for Persons with Significant Control (PSC).', type: 'Guide', category: 'Corporate' },
  { id: '4', title: 'Company Secretary Compliance Calendar', description: 'Annual filing deadlines for CAC, FIRS, and State Tax Authorities.', type: 'Tool', category: 'Corporate' },
  { id: '5', title: 'Expatriate Quota & CERPAC Guide', description: 'Regulatory requirements for hiring foreign nationals in Nigeria.', type: 'Guide', category: 'Regulatory' },
  { id: '6', title: 'NMDPRA Operational Permit Checklist', description: 'Mandatory documentation for midstream petroleum operations.', type: 'Checklist', category: 'Regulatory' }
];

export const MOCK_COMPLIANCE_ARTICLES = [
  { id: 'ca1', title: 'The Impact of the 2024 Finance Act on Tech Startups', excerpt: 'Analyzing the new tax exemptions and reporting obligations for digital economies.', author: 'Ayo Salami', date: 'Jan 15, 2025' },
  { id: 'ca2', title: 'Navigating SCUML Reporting for High-Value Transactions', excerpt: 'A guide on reporting requirements for designated non-financial businesses.', author: 'Bolanle Peters', date: 'Feb 02, 2025' },
  { id: 'ca3', title: 'Corporate Governance: The Role of the Board in Risk Management', excerpt: 'Best practices for compliance with the SEC and FRCN codes.', author: 'Dr. Emeka Obi', date: 'Dec 20, 2024' }
];
