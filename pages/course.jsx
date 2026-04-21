// Course / Membership page

function CoursePage() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  const [billing, setBilling] = React.useState('monthly');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      desc: 'เริ่มต้นเรียนรู้ด้วยตัวเอง',
      features: ['อ่านบทความทั้งหมด', 'Newsletter รายสัปดาห์', 'เข้ากลุ่ม Facebook ชุมชน', 'ดูคลิปสั้นทุกตอน'],
      cta: 'สมัครฟรี',
      highlight: false,
    },
    {
      name: 'Member',
      price: { monthly: 199, yearly: 1990 },
      desc: 'สำหรับคนที่อยากเอาจริง',
      features: ['ทุกอย่างใน Free', 'คอร์สออนไลน์ 12 คอร์ส', 'ไลฟ์ Q&A ทุกเดือน', 'Template คำนวณการเงิน', 'Priority ในชุมชน'],
      cta: 'เริ่มแพลน Member',
      highlight: true,
      badge: 'ยอดนิยม',
    },
    {
      name: 'Pro',
      price: { monthly: 499, yearly: 4990 },
      desc: 'สำหรับคนที่ต้องการที่ปรึกษา',
      features: ['ทุกอย่างใน Member', '1-on-1 coach เดือนละ 1 ครั้ง', 'Portfolio review', 'Early access คอร์สใหม่', 'Priority support'],
      cta: 'เริ่มแพลน Pro',
      highlight: false,
    },
  ];

  const courses = [
    { level: 'เริ่มต้น', title: 'ออมเงินครั้งแรก 101', lessons: 8, time: '2 ชม.' },
    { level: 'เริ่มต้น', title: 'แบ่งเงินเดือนอย่างมีระบบ', lessons: 6, time: '1.5 ชม.' },
    { level: 'กลาง', title: 'กองทุนรวมสำหรับมือใหม่', lessons: 12, time: '3 ชม.' },
    { level: 'กลาง', title: 'วางแผนภาษีฉบับมนุษย์เงินเดือน', lessons: 10, time: '2.5 ชม.' },
    { level: 'สูง', title: 'ลงทุน ETF ต่างประเทศ', lessons: 14, time: '4 ชม.' },
    { level: 'สูง', title: 'การเงินสำหรับ Freelance / SME', lessons: 16, time: '5 ชม.' },
  ];

  return (
    <>
      <A79Nav active="course" />

      <section style={{ padding: '64px 32px 40px', maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <span className="chip chip-accent">🎓 Atomic Academy</span>
        <h1 style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '20px 0 20px' }}>
          อยากจริงจัง?<br />เรามีคอร์สให้เรียน
        </h1>
        <p style={{ fontSize: 19, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto', lineHeight: 1.55 }}>
          คอร์สออนไลน์จากทีม Atomic 79 · เรียนได้ทุกที่ · มีใบประกาศ · คืนเงินได้ 7 วัน
        </p>
      </section>

      {/* billing toggle + pricing */}
      <section style={{ padding: '24px 32px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', padding: 4, borderRadius: 999,
            background: 'var(--bg-sunken)', border: '1px solid var(--line)',
          }}>
            {['monthly', 'yearly'].map(b => (
              <button key={b} onClick={() => setBilling(b)} style={{
                padding: '10px 22px', borderRadius: 999,
                border: 'none', cursor: 'pointer',
                background: billing === b ? 'var(--bg-elev)' : 'transparent',
                color: 'var(--ink)', fontWeight: billing === b ? 600 : 400,
                fontSize: 14, fontFamily: 'inherit',
                boxShadow: billing === b ? 'var(--shadow-sm)' : 'none',
              }}>
                {b === 'monthly' ? 'รายเดือน' : 'รายปี (ประหยัด 17%)'}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {plans.map(p => (
            <div key={p.name} className="card" style={{
              padding: 32, position: 'relative',
              borderColor: p.highlight ? 'var(--accent)' : 'var(--line)',
              borderWidth: p.highlight ? 2 : 1,
              background: p.highlight ? 'var(--bg-elev)' : 'var(--bg-elev)',
              transform: p.highlight ? 'scale(1.02)' : 'none',
              boxShadow: p.highlight ? 'var(--shadow-lg)' : 'none',
            }}>
              {p.badge && (
                <span style={{
                  position: 'absolute', top: -12, left: 24,
                  background: 'var(--accent)', color: 'var(--accent-on)',
                  padding: '4px 14px', borderRadius: 999,
                  fontSize: 12, fontWeight: 600,
                }}>{p.badge}</span>
              )}
              <div style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                {p.name.toUpperCase()}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '16px 0 4px' }}>
                <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em' }}>
                  ฿{p.price[billing].toLocaleString()}
                </span>
                <span style={{ color: 'var(--ink-3)', fontSize: 14 }}>
                  /{billing === 'monthly' ? 'เดือน' : 'ปี'}
                </span>
              </div>
              <p style={{ color: 'var(--ink-2)', margin: '0 0 24px', fontSize: 14 }}>{p.desc}</p>
              <button className={p.highlight ? 'btn btn-primary' : 'btn btn-ghost'} style={{ width: '100%', justifyContent: 'center', marginBottom: 24 }}>
                {p.cta}
              </button>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {p.features.map(f => (
                  <li key={f} style={{ padding: '8px 0', fontSize: 14, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                    <span style={{ color: 'var(--ink-2)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* course catalog */}
      <section style={{ padding: '60px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 8px' }}>
          คอร์สทั้งหมดในแพลน Member
        </h2>
        <p style={{ color: 'var(--ink-2)', margin: '0 0 32px' }}>
          6 คอร์สหลัก + 6 workshop · รวม 18 ชั่วโมงเรียน
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {courses.map((c, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <Placeholder label={`${c.title}`} aspect="16/10" style={{ borderRadius: 0 }} />
              <div style={{ padding: 20 }}>
                <span className="chip" style={{ fontSize: 11 }}>{c.level}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, margin: '12px 0 10px', lineHeight: 1.3 }}>{c.title}</h3>
                <div style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--ink-3)' }}>
                  <span>📺 {c.lessons} บทเรียน</span>
                  <span>⏱ {c.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '40px 32px 80px', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 24px', textAlign: 'center' }}>
          คำถามที่พบบ่อย
        </h2>
        {[
          { q: 'ยกเลิกแพลนได้เมื่อไหร่?', a: 'ยกเลิกได้ตลอดเวลาผ่านหน้าจัดการบัญชี จะใช้ได้จนถึงสิ้นรอบบิล' },
          { q: 'คืนเงินได้ไหม?', a: 'หากไม่พอใจ คืนเงินเต็มจำนวนภายใน 7 วันแรก ไม่ต้องถามเหตุผล' },
          { q: 'ต้องมีพื้นฐานการเงินก่อนไหม?', a: 'ไม่จำเป็น คอร์สเริ่มต้นออกแบบมาสำหรับคนที่ไม่มีความรู้การเงินมาก่อน' },
          { q: 'เรียนจบในเวลาเท่าไหร่?', a: 'คอร์สส่วนใหญ่ใช้เวลา 2-5 ชม. เรียนตามจังหวะของตัวเองได้' },
        ].map((f, i) => (
          <details key={i} style={{
            padding: '18px 24px', borderRadius: 14,
            background: 'var(--bg-elev)', border: '1px solid var(--line)',
            marginBottom: 10,
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 16 }}>{f.q}</summary>
            <p style={{ margin: '12px 0 0', color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.a}</p>
          </details>
        ))}
      </section>

      <A79Footer />
      <A79Tweaks theme={theme} setTheme={setTheme} />
    </>
  );
}

Object.assign(window, { CoursePage });
