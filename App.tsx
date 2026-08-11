import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  Cloud,
  Database,
  HeartHandshake,
  Info,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Mail,
  PawPrint,
  ScrollText,
  Send,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

const EFFECTIVE_DATE = 'August 7, 2026';
const CONTACT_EMAIL = 'valestudios@proton.me';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-collected', label: 'Information collected' },
  { id: 'how-we-use', label: 'How we use information' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'firebase', label: 'Firebase services' },
  { id: 'storage-security', label: 'Storage & security' },
  { id: 'sharing', label: 'Data sharing' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'children', label: "Children's privacy" },
  { id: 'third-parties', label: 'Third-party services' },
  { id: 'changes', label: 'Policy changes' },
];

function MetaHead() {
  useEffect(() => {
    document.title = 'Privacy Policy | PawRoutine';
    const description =
      'A clear, plain-language privacy policy for PawRoutine, the Android dog routine tracker for pet owners worldwide.';
    const setMeta = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('og:title', 'Privacy Policy | PawRoutine', true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'PawRoutine', true);
    setMeta('twitter:card', 'summary', false);
    setMeta('twitter:title', 'Privacy Policy | PawRoutine', false);
    setMeta('twitter:description', description, false);
  }, []);
  return null;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img src="/logo.png" alt="" />
    </span>
  );
}

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="policy-section reveal" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-kicker">{number} / PawRoutine policy</div>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  );
}

function Home() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-116px 0px -68% 0px', threshold: 0 },
      );
      observer.observe(element);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="site-shell min-h-[100dvh]">
      <MetaHead />
      <header className="site-header">
        <div className="content-width header-inner">
          <a className="brand" href="#top" data-testid="link-brand" aria-label="PawRoutine privacy policy home">
            <BrandMark />
            <span className="brand-name">PawRoutine</span>
          </a>
          <div className="header-meta">
            <span className="header-date">Policy / v. 01</span>
          </div>
        </div>
      </header>

      <div id="top">
        <section className="hero content-width" aria-labelledby="page-title">
          <div className="hero-grid">
            <div className="reveal">
              <div className="eyebrow"><span className="eyebrow-line" /> The careful details</div>
              <h1 id="page-title">Privacy, with <em>care.</em></h1>
              <p className="hero-lede">
                PawRoutine helps people care for the dogs they love. This policy explains, in plain language,
                what information we collect, why we use it, and the choices you have.
              </p>
              <div className="hero-actions">
                <button className="button-primary" type="button" onClick={() => scrollToSection('introduction')} data-testid="button-read-policy">
                  Read the policy <ChevronRight size={15} />
                </button>
              </div>
            </div>
            <div className="hero-art reveal reveal-delay" aria-label="A visual summary of PawRoutine's commitment to privacy">
              <div className="art-card">
                <div className="art-top">
                  <span>Your routine, your trust</span>
                  <div className="art-pulse"><ShieldCheck size={18} /></div>
                </div>
                <div className="art-content">
                  <p>Simple records for the moments that make caring feel easier.</p>
                   <div className="art-row"><span className="art-dot" /><span>Morning walk</span></div>
                   <div className="art-row"><span className="art-dot" /><span>Fresh water</span></div>
                </div>
              </div>
              <div className="art-note"><HeartHandshake size={15} /> Built for real life</div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Privacy commitments">
          <div className="content-width trust-items">
            <div className="trust-item">
              <ShieldCheck className="trust-icon" size={19} />
              <div><strong>Plain-language policy</strong><span>No legal fog. Just clear answers.</span></div>
            </div>
            <div className="trust-item">
              <LockKeyhole className="trust-icon" size={19} />
              <div><strong>Your data stays yours</strong><span>We do not sell or rent personal information.</span></div>
            </div>
            <div className="trust-item">
              <HeartHandshake className="trust-icon" size={19} />
              <div><strong>Made for pet parents</strong><span>Support from a real, reachable team.</span></div>
            </div>
          </div>
        </section>

        <div className="content-width policy-layout">
          <aside className="toc" aria-label="Table of contents">
            <span className="toc-label">On this page</span>
            <nav className="toc-nav">
              {sections.map((section) => (
                <a
                  key={section.id}
                  className={`toc-link ${activeSection === section.id ? 'is-active' : ''}`}
                  href={`#${section.id}`}
                  data-testid={`link-toc-${section.id}`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="toc-bottom"><Info size={14} /> Effective {EFFECTIVE_DATE}</div>
          </aside>

          <article className="policy-content">
            <PolicySection id="introduction" number="01" title="A note from PawRoutine">
              <p>Welcome to PawRoutine. We are building a gentle, practical Android app for pet owners who want to keep track of the routines that help their dogs feel their best.</p>
              <p>This Privacy Policy explains how Vale Studios (“we,” “us,” or “our”) handles information when you use PawRoutine. It applies to the PawRoutine mobile application and related services worldwide.</p>
              <div className="intro-callout">
                <p><strong>The short version:</strong> we collect what helps PawRoutine work, use it to provide and improve the service, and do not sell your personal information.</p>
                <ShieldCheck size={27} color="hsl(var(--primary))" aria-hidden="true" />
              </div>
            </PolicySection>

            <PolicySection id="information-collected" number="02" title="Information we collect">
              <p>We aim to collect only information that is useful for giving you a reliable routine tracker. Depending on how you use the app, this may include:</p>
              <div className="policy-cards">
                <div className="policy-card"><CircleUserRound className="policy-card-icon" size={19} /><h3>Google Sign-In details</h3><p>Your name, email address, profile image, and Google account identifier when you choose to sign in with Google.</p></div>
                <div className="policy-card"><ClipboardList className="policy-card-icon" size={19} /><h3>Dog profiles & routines</h3><p>Names and details you add about your dogs, plus routines, walks, habits, reminders, and notes you choose to record.</p></div>
                <div className="policy-card"><Smartphone className="policy-card-icon" size={19} /><h3>Device information</h3><p>Basic device and app information such as device model, operating system version, app version, and language.</p></div>
                <div className="policy-card"><BarChart3 className="policy-card-icon" size={19} /><h3>Analytics & diagnostics</h3><p>Aggregated usage analytics and crash reports that help us understand performance and fix problems.</p></div>
              </div>
              <p style={{ marginTop: '1.5rem' }}>We do not intentionally collect sensitive personal information, precise location, contacts, photos, or microphone recordings as part of the core PawRoutine experience.</p>
            </PolicySection>

            <PolicySection id="how-we-use" number="03" title="How we use information">
              <p>We use the information described above for a small number of clear purposes:</p>
              <ul>
                <li>To create and manage your account and keep you signed in.</li>
                <li>To save, sync, and display the dog profiles, routines, walks, habits, and notes you create.</li>
                <li>To provide app features, notifications, support, and a consistent experience across your devices.</li>
                <li>To understand general usage patterns, improve PawRoutine, and plan thoughtful product updates.</li>
                <li>To detect, investigate, and resolve crashes, bugs, security issues, or misuse.</li>
                <li>To comply with applicable law and respond to lawful requests.</li>
              </ul>
              <p style={{ marginTop: '1.3rem' }}>We do not use your dog’s information to build advertising profiles or make decisions about you.</p>
            </PolicySection>

            <PolicySection id="authentication" number="04" title="Authentication, made simple">
              <p>PawRoutine uses Google Sign-In so you can access your account without creating or remembering a separate PawRoutine password. Google handles the sign-in flow. We receive the account information needed to identify your PawRoutine account and do not receive your Google password.</p>
              <p>You can review Google’s own privacy practices in <a className="text-link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" data-testid="link-google-privacy">Google’s Privacy Policy <ArrowUpRight size={12} /></a>.</p>
            </PolicySection>

            <PolicySection id="firebase" number="05" title="Firebase services">
              <p>PawRoutine uses selected Firebase services from Google to provide its core experience and keep the app dependable. Each service has a specific job:</p>
              <div className="provider-list">
                <div className="provider"><div className="provider-icon"><KeyRound size={16} /></div><div><h3>Firebase Authentication</h3><p>Handles Google Sign-In and securely identifies your PawRoutine account.</p></div></div>
                <div className="provider"><div className="provider-icon"><Database size={16} /></div><div><h3>Cloud Firestore</h3><p>Stores your account data, dog profiles, routines, walks, habits, and notes so they can sync with the app.</p></div></div>
                <div className="provider"><div className="provider-icon"><BarChart3 size={16} /></div><div><h3>Firebase Analytics</h3><p>Provides aggregated information about how the app is used, helping us improve clarity and reliability.</p></div></div>
                <div className="provider"><div className="provider-icon"><LifeBuoy size={16} /></div><div><h3>Firebase Crashlytics</h3><p>Reports technical crash details and device context so we can diagnose and fix issues.</p></div></div>
              </div>
              <p style={{ marginTop: '1.5rem' }}>Firebase services process information on our behalf under their applicable terms and privacy documentation.</p>
            </PolicySection>

            <PolicySection id="storage-security" number="06" title="Storage & security">
              <p>Your PawRoutine account data is stored using Cloud Firestore. We use Firebase Authentication and Firebase’s security features to help protect account access and data in transit and at rest.</p>
              <p>No online service can promise absolute security. We work to use appropriate technical and organizational safeguards, limit access to what is needed, and address security concerns when we find them.</p>
              <div className="policy-cards">
                <div className="policy-card"><Cloud className="policy-card-icon" size={19} /><h3>Cloud-backed</h3><p>Your routine information can sync reliably rather than living only on one phone.</p></div>
                <div className="policy-card"><LockKeyhole className="policy-card-icon" size={19} /><h3>Access controlled</h3><p>Account data is intended to be available to the account that created it.</p></div>
              </div>
            </PolicySection>

            <PolicySection id="sharing" number="07" title="Data sharing">
              <p><strong>We do not sell or rent your personal information.</strong> We may share or allow access to information only when it is needed to operate PawRoutine, including with:</p>
              <ul>
                <li>Service providers such as Google Firebase that host, authenticate, analyze, and monitor the app for us.</li>
                <li>Professional advisers or authorities when disclosure is required by law, legal process, or to protect rights, safety, and security.</li>
                <li>A successor in the unlikely event of a merger, acquisition, or transfer of the service, subject to appropriate privacy protections.</li>
              </ul>
              <p style={{ marginTop: '1.3rem' }}>We do not share your dog profiles, routines, walks, habits, or notes with advertisers for their own marketing.</p>
            </PolicySection>

            <PolicySection id="your-rights" number="08" title="Your choices & rights">
              <p>Depending on where you live, you may have rights to access, correct, delete, or receive a copy of personal information associated with your account. You may also have the right to object to or restrict certain processing.</p>
              <div className="rights-box">
                <a className="text-link" href={`mailto:${CONTACT_EMAIL}?subject=PawRoutine%20privacy%20request`} data-testid="link-rights-email">Email {CONTACT_EMAIL} <Send size={13} /></a>
              </div>
              <p style={{ marginTop: '1.3rem' }}>You can also stop using PawRoutine at any time. To ask us to delete your account information, contact us. Some information may be retained where required by law or for legitimate security and record-keeping purposes.</p>
            </PolicySection>

            <PolicySection id="children" number="09" title="Children’s privacy">
              <p>PawRoutine is intended for a general audience of pet owners and is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us so we can review and delete it where appropriate.</p>
            </PolicySection>

            <PolicySection id="third-parties" number="10" title="Third-party services">
              <p>PawRoutine relies on Google Sign-In and Firebase services described in this policy. These services are operated by Google and may have their own terms, privacy policies, and data practices. We encourage you to review them:</p>
              <ul>
                <li><a className="text-link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" data-testid="link-google-policy">Google Privacy Policy <ArrowUpRight size={12} /></a></li>
                <li><a className="text-link" href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" data-testid="link-firebase-policy">Firebase Privacy and Security <ArrowUpRight size={12} /></a></li>
              </ul>
              <p style={{ marginTop: '1.3rem' }}>Links to third-party services do not mean we control their policies or practices.</p>
            </PolicySection>

            <PolicySection id="changes" number="11" title="Policy changes">
              <p>We may update this Privacy Policy as PawRoutine changes or as legal requirements develop. When we make a meaningful change, we will update the effective date at the top of this policy and, where appropriate, provide additional notice in the app.</p>
              <p>We encourage you to check this page from time to time. Your continued use of PawRoutine after an update means the revised policy applies to your use of the service.</p>
            </PolicySection>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', color: 'hsl(var(--muted-foreground))', fontSize: '.7rem' }}>
                <ScrollText size={14} /> Effective date: <strong style={{ color: 'hsl(var(--foreground))' }}>{EFFECTIVE_DATE}</strong>
              </div>
              <button className="button-soft" type="button" onClick={copyEmail} data-testid="button-copy-email">
                {copied ? <Check size={14} /> : <Mail size={14} />}
                {copied ? 'Email copied' : 'Copy support email'}
              </button>
            </div>
          </article>
        </div>
      </div>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <div className="footer-copy">© 2026 Vale Studios · PawRoutine privacy policy</div>
          <div className="footer-mark"><BrandMark /> Care, kept simple.</div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
