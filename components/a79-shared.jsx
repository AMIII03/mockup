// Shared components for Atomic 79 mockup
// — Logo, Nav, Footer, Placeholders

const A79_CATEGORIES = [
  { slug: 'save', label: 'ออมเงิน', emoji: '🐷' },
  { slug: 'invest', label: 'ลงทุน', emoji: '📈' },
  { slug: 'insurance', label: 'ประกัน', emoji: '🛡️' },
  { slug: 'tax', label: 'ภาษี', emoji: '🧾' },
  { slug: 'debt', label: 'หนี้', emoji: '💳' },
  { slug: 'stocks', label: 'หุ้น & ETF', emoji: '📊' },
];

function A79Logo({ size = 22 }) {
  return (
    <a href="index.html" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      textDecoration: 'none', color: 'var(--ink)',
    }}>
      <div style={{
        width: size * 1.6, height: size * 1.6,
        borderRadius: 10,
        background: 'var(--ink)',
        color: 'var(--bg)',
        display: 'grid', placeItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: size * 0.78,
        letterSpacing: '-0.02em',
      }}>
        79
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontWeight: 700, fontSize: size, letterSpacing: '-0.01em' }}>Atomic 79</span>
        <span style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 3, fontFamily: 'var(--font-mono)' }}>การเงินที่เริ่มได้</span>
      </div>
    </a>
  );
}

function A79Nav({ active, onThemeToggle, currentTheme = 'sunrise' }) {
  const links = [
    { href: 'landing.html', label: 'หน้าแรก', key: 'home' },
    { href: 'blog-listing.html', label: 'บทความ', key: 'blog' },
    { href: 'course.html', label: 'คอร์ส', key: 'course' },
    { href: 'community.html', label: 'ชุมชน', key: 'community' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in oklab, var(--bg) 85%, transparent)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', gap: 32,
      }}>
        <A79Logo />
        <div style={{ display: 'flex', gap: 4, flex: 1, marginLeft: 24 }}>
          {links.map(l => (
            <a key={l.key} href={l.href} style={{
              padding: '8px 14px',
              borderRadius: 10,
              textDecoration: 'none',
              color: active === l.key ? 'var(--ink)' : 'var(--ink-2)',
              background: active === l.key ? 'var(--bg-sunken)' : 'transparent',
              fontWeight: active === l.key ? 600 : 500,
              fontSize: 15,
            }}>{l.label}</a>
          ))}
        </div>
        <a href="login.html" style={{
          color: 'var(--ink-2)', textDecoration: 'none', fontSize: 14,
        }}>เข้าสู่ระบบ</a>
        <a href="landing.html#subscribe" className="btn btn-primary btn-sm">
          สมัครฟรี
        </a>
      </div>
    </nav>
  );
}

function A79Footer() {
  return (
    <footer style={{
      marginTop: 80,
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-sunken)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '56px 32px 40px',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <A79Logo />
          <p style={{ color: 'var(--ink-2)', fontSize: 14, marginTop: 16, maxWidth: 320 }}>
            เพจความรู้การเงินที่อธิบายเรื่องยากให้เข้าใจใน 3 นาที ฟรีสำหรับทุกคน
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            {['FB', 'IG', 'YT', 'TT'].map(s => (
              <div key={s} style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'var(--bg-elev)', border: '1px solid var(--line)',
                display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-2)',
              }}>{s}</div>
            ))}
          </div>
        </div>
        {[
          { title: 'หมวดหมู่', items: ['ออมเงิน', 'ลงทุน', 'ประกัน', 'ภาษี', 'หนี้'] },
          { title: 'เกี่ยวกับ', items: ['ทีมงาน', 'ติดต่อเรา', 'ร่วมงาน', 'สื่อมวลชน'] },
          { title: 'อื่นๆ', items: ['นโยบายความเป็นส่วนตัว', 'ข้อตกลง', 'Disclaimer'] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontWeight: 600, marginBottom: 14, fontSize: 14 }}>{col.title}</div>
            {col.items.map(i => (
              <div key={i} style={{ fontSize: 14, color: 'var(--ink-2)', marginBottom: 8 }}>{i}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid var(--line)',
        padding: '20px 32px',
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 13, color: 'var(--ink-3)',
        fontFamily: 'var(--font-mono)',
      }}>
        <span>© 2026 ATOMIC 79 · ALL RIGHTS RESERVED</span>
        <span>MADE WITH ☕ IN BANGKOK</span>
      </div>
    </footer>
  );
}

function Placeholder({ label, aspect = '16/9', style = {}, children }) {
  return (
    <div className="ph" style={{ aspectRatio: aspect, width: '100%', ...style }}>
      {children || label}
    </div>
  );
}

// Tweaks panel — lets user switch between the 3 theme variants
function A79Tweaks({ theme, setTheme }) {
  const [open, setOpen] = React.useState(false);
  const [available, setAvailable] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    setAvailable(true);
    return () => window.removeEventListener('message', handler);
  }, []);

  const setThemeAndPersist = (t) => {
    setTheme(t);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: t } }, '*');
  };

  if (!open) return null;
  const themes = [
    { id: 'sunrise', name: 'Sunrise', desc: 'ครีมอุ่น + ส้มคอรัล', swatch: ['#F5EEE0', '#E68566', '#2A2F45'] },
    { id: 'chalk', name: 'Chalk', desc: 'ขาวนวล + เขียวเข้ม (editorial)', swatch: ['#FAFAF8', '#2C7A57', '#1B1C1F'] },
    { id: 'mint', name: 'Mint', desc: 'มิ้นท์อ่อน + เขียว/พีช', swatch: ['#E6F1EC', '#2D7562', '#F2B58F'] },
  ];
  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 1000,
      background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
      borderRadius: 16, padding: 18, width: 280,
      boxShadow: 'var(--shadow-lg)', fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <strong style={{ fontSize: 14 }}>Tweaks</strong>
        <span style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)' }}>THEME</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {themes.map(t => (
          <button key={t.id} onClick={() => setThemeAndPersist(t.id)} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 10, borderRadius: 10,
            background: theme === t.id ? 'var(--bg-sunken)' : 'transparent',
            border: `1px solid ${theme === t.id ? 'var(--accent)' : 'var(--line)'}`,
            cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
          }}>
            <div style={{ display: 'flex' }}>
              {t.swatch.map((c, i) => (
                <div key={i} style={{
                  width: 16, height: 22, background: c,
                  marginLeft: i === 0 ? 0 : -4,
                  border: '1.5px solid var(--bg-elev)',
                  borderRadius: 4,
                }} />
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{t.desc}</div>
            </div>
          </button>
        ))}
      </div>
      <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.5 }}>
        เปลี่ยนธีมสีของทั้งเว็บ · บันทึกอัตโนมัติ
      </div>
    </div>
  );
}

Object.assign(window, {
  A79_CATEGORIES,
  A79Logo, A79Nav, A79Footer, Placeholder, A79Tweaks,
});
