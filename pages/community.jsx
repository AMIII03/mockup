// Community page

function CommunityPage() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const channels = [
    { name: 'Facebook Group', members: '42,380', desc: 'กลุ่มปิด ถาม-ตอบ แลกเปลี่ยนประสบการณ์', icon: 'FB' },
    { name: 'Line Open Chat', members: '8,920', desc: 'คุยสดเรียลไทม์ · มี mod ทุกวัน 8 โมง', icon: 'LN' },
    { name: 'Discord Server', members: '3,150', desc: 'ห้องย่อยแยกตามหัวข้อ · voice chat', icon: 'DC' },
  ];

  const threads = [
    { title: 'ขอคำแนะนำ เริ่มทำงานปีแรก เงินเดือน 18k ควรแบ่งยังไง', cat: 'ออมเงิน', replies: 42, likes: 128, time: '2 ชม.', author: 'ใหม่ 👋' },
    { title: 'รีวิวกองทุน SSF/RMF ที่ลงปีนี้ (พร้อมตัวเลขจริง)', cat: 'ลงทุน', replies: 87, likes: 312, time: '6 ชม.', author: 'nut_invest' },
    { title: 'ยื่นภาษีปีนี้ ติดอะไรถามได้ 🧾', cat: 'ภาษี', replies: 156, likes: 98, time: '1 วัน', author: 'พี่มิน CPA', pinned: true },
    { title: 'Freelance ควรซื้อประกันแบบไหนดี? แชร์ประสบการณ์', cat: 'ประกัน', replies: 63, likes: 204, time: '2 วัน', author: 'freelance_life' },
    { title: 'ปลดหนี้บัตรเครดิตสำเร็จใน 8 เดือน! วิธีที่ใช้', cat: 'หนี้', replies: 94, likes: 521, time: '3 วัน', author: 'debt_free_me' },
  ];

  const members = [
    { name: 'พี่ต้น', role: 'Top Contributor', points: 2840 },
    { name: 'nut_invest', role: 'Mentor', points: 2120 },
    { name: 'debt_free_me', role: 'Rising Star', points: 1680 },
    { name: 'คุณแนน', role: 'Mentor', points: 1520 },
  ];

  return (
    <>
      <A79Nav active="community" />

      <section style={{ padding: '48px 32px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="chip chip-accent">● 54,450 สมาชิก</span>
            <h1 style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05, margin: '16px 0 16px' }}>
              ชุมชน<br />ที่ถามอะไรก็ไม่อาย
            </h1>
            <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 28px', maxWidth: 500 }}>
              แลกเปลี่ยนเรื่องเงินกับคนที่ผ่านเส้นทางเดียวกัน
              · ไม่มีการขายของ · ไม่มีคำถามโง่
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href="login.html" className="btn btn-primary btn-lg">เข้าร่วมชุมชนฟรี</a>
              <a href="#channels" className="btn btn-ghost btn-lg">ดูช่องทาง</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              { n: '54k+', l: 'สมาชิก', color: 'var(--accent)' },
              { n: '12k+', l: 'คำถาม-ตอบ', color: 'var(--accent-2)' },
              { n: '< 2 ชม.', l: 'เวลาตอบเฉลี่ย', color: 'var(--ink)' },
              { n: '98%', l: 'พอใจชุมชน', color: 'var(--success)' },
            ].map(s => (
              <div key={s.l} className="card" style={{ padding: 24 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 36, fontWeight: 600,
                  color: s.color, letterSpacing: '-0.01em',
                }}>{s.n}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* channels */}
      <section id="channels" style={{ padding: '40px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 24px' }}>
          เลือกช่องทางที่ถนัด
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {channels.map(c => (
            <div key={c.name} className="card" style={{ padding: 28 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'var(--ink)', color: 'var(--bg)',
                display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-mono)', fontWeight: 700,
              }}>{c.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginTop: 16 }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', marginTop: 4 }}>
                {c.members} สมาชิก
              </div>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, margin: '12px 0 20px', lineHeight: 1.6 }}>{c.desc}</p>
              <button className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center' }}>เข้าร่วม →</button>
            </div>
          ))}
        </div>
      </section>

      {/* discussions + sidebar */}
      <section style={{ padding: '40px 32px 60px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>กระทู้ล่าสุด</h2>
              <button className="btn btn-primary btn-sm">+ ตั้งกระทู้ใหม่</button>
            </div>
            <div className="card">
              {threads.map((t, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  borderBottom: i < threads.length - 1 ? '1px solid var(--line)' : 'none',
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--placeholder)', flexShrink: 0,
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                      {t.pinned && <span className="chip chip-accent" style={{ fontSize: 11, padding: '2px 8px' }}>📌 ปัก</span>}
                      <span className="chip" style={{ fontSize: 11, padding: '2px 8px' }}>{t.cat}</span>
                      <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{t.author} · {t.time}ที่แล้ว</span>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>{t.title}</div>
                    <div style={{ display: 'flex', gap: 18, fontSize: 13, color: 'var(--ink-3)' }}>
                      <span>💬 {t.replies} ความเห็น</span>
                      <span>❤️ {t.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="card" style={{ padding: 22, marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                🏆 สมาชิกของเดือน
              </div>
              {members.map((m, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 12, alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: i < members.length - 1 ? '1px dashed var(--line)' : 'none',
                }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'var(--placeholder)',
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{m.role}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>
                    {m.points}
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 22, background: 'var(--bg-sunken)' }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>กฎของชุมชน</div>
              <ol style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                <li>ให้เกียรติทุกคน ไม่มีคำถามโง่</li>
                <li>ห้ามขายของ / โฆษณา</li>
                <li>ไม่แชร์ข้อมูลส่วนตัวของผู้อื่น</li>
                <li>ช่วยกันเมื่อมีคนถาม</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <A79Footer />
      <A79Tweaks theme={theme} setTheme={setTheme} />
    </>
  );
}

Object.assign(window, { CommunityPage });
