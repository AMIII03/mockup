// Blog article page

function BlogArticle() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  return (
    <>
      <A79Nav active="blog" />

      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 32px 40px' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 24 }}>
          <a href="blog-listing.html" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>บทความ</a>
          {' / '}
          <a href="blog-listing.html?cat=invest" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>ลงทุน</a>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <span className="chip chip-accent">⭐ EDITOR'S PICK</span>
          <span className="chip">ลงทุน</span>
          <span className="chip">มือใหม่</span>
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 20px' }}>
          เงินเดือน 25k จะเริ่มลงทุนยังไง? คู่มือฉบับมนุษย์เงินเดือน
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 32px' }}>
          แบ่งเงินเดือนเป็นก้อนๆ ตามเป้าหมายจริง ไม่ต้องตีโพยตีพาย
          แค่ 3 ขั้นตอนก็เริ่มต้นได้ · อ่านครั้งเดียว ทำได้เลยเดือนนี้
        </p>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          paddingBottom: 24, borderBottom: '1px solid var(--line)', marginBottom: 32,
        }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--placeholder)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>พี่โอ · ทีม Atomic 79</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>15 เม.ย. 2026 · อ่าน 8 นาที</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ghost btn-sm">🔖 บันทึก</button>
            <button className="btn btn-ghost btn-sm">↗ แชร์</button>
          </div>
        </div>
      </article>

      <Placeholder label="hero image · เงินเดือน 25k ลงทุน" aspect="21/9" style={{
        maxWidth: 1000, margin: '0 auto', borderRadius: 22,
      }} />

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '48px 32px', fontSize: 18, lineHeight: 1.75, color: 'var(--ink)' }}>
        <p style={{ margin: '0 0 24px', fontSize: 20, lineHeight: 1.7 }}>
          สวัสดีครับทุกคน วันนี้พี่โอจะมาเล่าให้ฟังแบบตรงๆ ไม่มีศัพท์ยากเลยนะครับ
          ว่าถ้าเราเงินเดือน 25,000 บาท จะเริ่มลงทุนยังไงให้ไม่กระทบชีวิตประจำวัน
          แต่ก็ยังขยับตัวเองไปข้างหน้าได้
        </p>

        <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.01em', margin: '48px 0 16px', lineHeight: 1.2 }}>
          1. แบ่งเงินเดือนเป็น 3 ก้อนก่อน
        </h2>
        <p style={{ margin: '0 0 20px' }}>
          ก่อนจะไปถึงลงทุน เราต้องรู้ก่อนว่าเดือนนี้เงินจะไหลไปไหนบ้าง
          วิธีที่ง่ายที่สุดคือแบ่งเป็นสัดส่วน 50-30-20
        </p>

        <div style={{
          background: 'var(--bg-sunken)', border: '1px solid var(--line)',
          borderRadius: 18, padding: 28, margin: '24px 0',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)', marginBottom: 12, letterSpacing: '0.08em' }}>
            ตัวอย่างเงินเดือน 25,000 บาท
          </div>
          {[
            { pct: 50, label: 'ค่าใช้จ่ายจำเป็น (ที่พัก อาหาร เดินทาง)', amount: '12,500' },
            { pct: 30, label: 'ค่าใช้จ่ายไลฟ์สไตล์ (กินเที่ยว ช้อปปิ้ง)', amount: '7,500' },
            { pct: 20, label: 'ออม + ลงทุน', amount: '5,000' },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '14px 0', borderBottom: i < 2 ? '1px dashed var(--line-strong)' : 'none',
            }}>
              <div style={{
                width: 48, fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600,
                color: i === 2 ? 'var(--accent)' : 'var(--ink)',
              }}>{r.pct}%</div>
              <div style={{ flex: 1, fontSize: 15 }}>{r.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 500 }}>฿{r.amount}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.01em', margin: '48px 0 16px', lineHeight: 1.2 }}>
          2. สร้าง Emergency Fund ก่อนเริ่มลงทุน
        </h2>
        <p style={{ margin: '0 0 20px' }}>
          ข้อนี้สำคัญมาก! อย่าข้ามเด็ดขาด เราควรมีเงินสำรองฉุกเฉินอย่างน้อย 3-6 เท่าของค่าใช้จ่ายต่อเดือน
          ก่อนที่จะไปลงทุนอะไรเสี่ยง เพราะถ้าเกิดเหตุการณ์ไม่คาดฝัน เราจะได้ไม่ต้องขายพอร์ตเสียหาย
        </p>

        <blockquote style={{
          margin: '32px 0',
          padding: '24px 32px',
          borderLeft: '4px solid var(--accent)',
          background: 'color-mix(in oklab, var(--accent) 8%, transparent)',
          borderRadius: '0 14px 14px 0',
          fontSize: 20, fontStyle: 'italic', lineHeight: 1.6, color: 'var(--ink)',
        }}>
          "การลงทุนที่ดีที่สุด คือการลงทุนที่เราสบายใจพอจะทำต่อเนื่องได้นานๆ"
        </blockquote>

        <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.01em', margin: '48px 0 16px', lineHeight: 1.2 }}>
          3. เริ่มลงทุนด้วย DCA เดือนละ 2,000 บาท
        </h2>
        <p style={{ margin: '0 0 20px' }}>
          เริ่มเล็กๆ ก่อนก็ได้ครับ กองทุนรวมดัชนี (Index Fund) เป็นจุดเริ่มต้นที่ดีสำหรับมือใหม่
          เพราะค่าธรรมเนียมต่ำ กระจายความเสี่ยง และไม่ต้องเลือกหุ้นรายตัว
        </p>
        <p style={{ margin: '0 0 20px' }}>
          ใช้วิธี DCA (Dollar Cost Averaging) คือลงทุนในจำนวนเท่าๆ กันทุกเดือน ไม่ว่าราคาจะขึ้นหรือลง
          ข้อดีคือเราไม่ต้องจับจังหวะตลาด และสร้างวินัยการออมได้ดีมาก
        </p>

        <div style={{
          padding: 24, borderRadius: 16,
          border: '2px dashed var(--line-strong)',
          margin: '32px 0',
        }}>
          <div style={{ fontWeight: 600, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 20 }}>📝</span> สรุปสั้นๆ
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.7 }}>
            <li>แบ่งเงินเดือนด้วยสูตร 50-30-20</li>
            <li>สร้าง Emergency Fund 3-6 เดือนก่อน</li>
            <li>เริ่ม DCA กองทุนรวมดัชนีเดือนละ 2,000</li>
            <li>ทบทวนพอร์ตทุก 6 เดือน</li>
          </ul>
        </div>

        {/* tags & share */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 40 }}>
          {['#เริ่มลงทุน', '#มนุษย์เงินเดือน', '#DCA', '#กองทุนรวม', '#มือใหม่'].map(t => (
            <span key={t} className="chip" style={{ fontSize: 13 }}>{t}</span>
          ))}
        </div>
      </article>

      {/* related */}
      <section style={{ background: 'var(--bg-sunken)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 24px', letterSpacing: '-0.01em' }}>อ่านต่อ</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { tag: 'ลงทุน', title: 'DCA คืออะไร? ทำจริงแค่เดือนละ 500 บาทได้ไหม', read: 4 },
              { tag: 'ออมเงิน', title: 'Emergency Fund ควรมีกี่เดือน ถึงจะอุ่นใจ', read: 4 },
              { tag: 'ภาษี', title: 'ยื่นภาษีครั้งแรก ต้องเตรียมอะไรบ้าง (2026)', read: 5 },
            ].map((p, i) => (
              <a key={i} href="blog-article.html" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Placeholder label={`cover · ${p.tag}`} aspect="16/9" style={{ borderRadius: 0 }} />
                <div style={{ padding: 20 }}>
                  <span className="chip">{p.tag}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.35, margin: '12px 0 8px' }}>{p.title}</h3>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>อ่าน {p.read} นาที</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <A79Footer />
      <A79Tweaks theme={theme} setTheme={setTheme} />
    </>
  );
}

Object.assign(window, { BlogArticle });
