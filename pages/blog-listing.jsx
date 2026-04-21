// Blog listing page

function BlogListing() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  const [activeCat, setActiveCat] = React.useState('all');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const posts = [
    { id: 1, cat: 'save', tag: 'ออมเงิน', title: 'เริ่มออมครั้งแรก ทำยังไงให้ไม่ท้อใน 30 วัน', desc: 'คู่มือง่ายๆ สำหรับมือใหม่ที่อยากเริ่มเก็บเงินจริงจัง', read: 3, author: 'ทีม Atomic', date: '18 เม.ย.', featured: true },
    { id: 2, cat: 'invest', tag: 'ลงทุน', title: 'เงินเดือน 25k จะเริ่มลงทุนยังไง? คู่มือฉบับมนุษย์เงินเดือน', desc: 'แบ่งเงินเดือนเป็นก้อนๆ ตามเป้าหมายจริง ไม่ต้องตีโพยตีพาย', read: 8, author: 'พี่โอ', date: '15 เม.ย.', featured: true },
    { id: 3, cat: 'invest', tag: 'ลงทุน', title: 'DCA คืออะไร? ทำจริงแค่เดือนละ 500 บาทได้ไหม', desc: 'รู้จัก DCA แบบครบจบในบทเดียว พร้อมตัวอย่างจริง', read: 4, author: 'ทีม Atomic', date: '12 เม.ย.' },
    { id: 4, cat: 'tax', tag: 'ภาษี', title: 'ยื่นภาษีครั้งแรก ต้องเตรียมอะไรบ้าง (2026)', desc: 'รวมเอกสารและ step-by-step สำหรับคนเริ่มยื่นปีแรก', read: 5, author: 'ทีม Atomic', date: '10 เม.ย.' },
    { id: 5, cat: 'insurance', tag: 'ประกัน', title: 'ประกันสุขภาพแบบไหนที่ Freelance ต้องมี', desc: 'ไม่มีสวัสดิการ ไม่ใช่ปัญหา ถ้ารู้จักเลือกให้ถูก', read: 7, author: 'คุณแนน', date: '8 เม.ย.' },
    { id: 6, cat: 'invest', tag: 'หุ้น & ETF', title: 'ETF กับกองทุนรวม ต่างกันยังไง?', desc: 'เปรียบเทียบแบบชัดๆ พร้อมตารางสรุป', read: 6, author: 'พี่ต้น', date: '5 เม.ย.' },
    { id: 7, cat: 'debt', tag: 'หนี้', title: 'หนี้บัตรเครดิต ปลดได้ใน 12 เดือน (จริง)', desc: 'วิธีจัดลำดับชำระหนี้ที่ใช้ได้จริง', read: 5, author: 'ทีม Atomic', date: '2 เม.ย.' },
    { id: 8, cat: 'save', tag: 'ออมเงิน', title: 'Emergency Fund ควรมีกี่เดือน ถึงจะอุ่นใจ', desc: 'สูตรคำนวณเงินสำรองสำหรับแต่ละช่วงชีวิต', read: 4, author: 'พี่โอ', date: '28 มี.ค.' },
    { id: 9, cat: 'stocks', tag: 'หุ้น & ETF', title: 'อ่านงบการเงินเบื้องต้นใน 10 นาที', desc: '3 ตัวเลขที่นักลงทุนมือใหม่ควรดูก่อนซื้อหุ้น', read: 10, author: 'พี่ต้น', date: '25 มี.ค.' },
  ];

  const filtered = activeCat === 'all' ? posts : posts.filter(p => p.cat === activeCat);
  const [first, ...rest] = filtered;

  return (
    <>
      <A79Nav active="blog" />
      <header style={{ padding: '48px 32px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', letterSpacing: '0.1em' }}>THE BLOG · {filtered.length} ARTICLES</span>
        <h1 style={{ fontSize: 52, fontWeight: 700, letterSpacing: '-0.02em', margin: '12px 0 16px', lineHeight: 1.1 }}>
          บทความทั้งหมด
        </h1>
        <p style={{ color: 'var(--ink-2)', fontSize: 18, maxWidth: 620, margin: 0 }}>
          เรื่องเงินที่ใช้ได้จริง เริ่มต้นจากบทความเดียว · อ่านฟรีทุกคน
        </p>
        {/* category tabs */}
        <div style={{ display: 'flex', gap: 8, marginTop: 32, flexWrap: 'wrap' }}>
          {[{ slug: 'all', label: 'ทั้งหมด' }, ...A79_CATEGORIES.map(c => ({ slug: c.slug, label: c.label, emoji: c.emoji }))].map(c => (
            <button key={c.slug} onClick={() => setActiveCat(c.slug)} style={{
              padding: '10px 18px', borderRadius: 999,
              border: `1px solid ${activeCat === c.slug ? 'var(--ink)' : 'var(--line)'}`,
              background: activeCat === c.slug ? 'var(--ink)' : 'var(--bg-elev)',
              color: activeCat === c.slug ? 'var(--bg)' : 'var(--ink)',
              fontSize: 14, fontWeight: 500, cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              {c.emoji && <span style={{ marginRight: 6 }}>{c.emoji}</span>}{c.label}
            </button>
          ))}
        </div>
      </header>

      <main style={{ padding: '0 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        {first && (
          <a href="blog-article.html" className="card" style={{
            display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0,
            textDecoration: 'none', color: 'inherit', marginBottom: 48,
          }}>
            <Placeholder label={`featured · ${first.tag}`} aspect="4/3" style={{ borderRadius: 0 }} />
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
                <span className="chip chip-accent">⭐ EDITOR'S PICK</span>
                <span className="chip">{first.tag}</span>
              </div>
              <h2 style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em', margin: '0 0 16px' }}>
                {first.title}
              </h2>
              <p style={{ color: 'var(--ink-2)', fontSize: 17, lineHeight: 1.6, margin: '0 0 24px' }}>{first.desc}</p>
              <div style={{ fontSize: 14, color: 'var(--ink-3)' }}>
                โดย <strong style={{ color: 'var(--ink)' }}>{first.author}</strong> · {first.date} · อ่าน {first.read} นาที
              </div>
            </div>
          </a>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {rest.map(p => (
            <a key={p.id} href="blog-article.html" className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
              <Placeholder label={`cover · ${p.tag}`} aspect="16/10" style={{ borderRadius: 0, flexShrink: 0 }} />
              <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="chip" style={{ alignSelf: 'flex-start' }}>{p.tag}</span>
                <h3 style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.35, margin: '12px 0 10px', letterSpacing: '-0.005em' }}>{p.title}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.55, margin: '0 0 14px', flex: 1 }}>{p.desc}</p>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', display: 'flex', gap: 8, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
                  <span>{p.author}</span><span>·</span><span>{p.date}</span><span style={{ marginLeft: 'auto' }}>{p.read} นาที</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <button className="btn btn-ghost btn-lg">โหลดเพิ่ม →</button>
        </div>
      </main>

      <A79Footer />
      <A79Tweaks theme={theme} setTheme={setTheme} />
    </>
  );
}

Object.assign(window, { BlogListing });
