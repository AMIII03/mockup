// Profile / Dashboard — หน้าหลังบ้านหลังจาก login

function ProfilePage() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  const [tab, setTab] = React.useState('overview');
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const user = {
    name: 'น้องมิว',
    email: 'mew@example.com',
    joined: 'มี.ค. 2026',
    plan: 'Member',
    points: 1240,
    streak: 12,
  };

  const stats = [
    { n: '28', l: 'บทความที่อ่าน', hint: '+4 สัปดาห์นี้' },
    { n: '3', l: 'คอร์สกำลังเรียน', hint: '40% เฉลี่ย' },
    { n: '12', l: 'วัน streak', hint: '🔥 ทำต่อเนื่อง' },
    { n: '1,240', l: 'แต้มสะสม', hint: 'Member Tier' },
  ];

  const courses = [
    { title: 'ออมเงินครั้งแรก 101', progress: 75, lesson: '6 / 8 บทเรียน', next: 'บทที่ 7: ตั้งเป้าหมายระยะยาว' },
    { title: 'แบ่งเงินเดือนอย่างมีระบบ', progress: 50, lesson: '3 / 6 บทเรียน', next: 'บทที่ 4: สูตร 50-30-20' },
    { title: 'กองทุนรวมสำหรับมือใหม่', progress: 15, lesson: '2 / 12 บทเรียน', next: 'บทที่ 3: NAV คืออะไร' },
  ];

  const bookmarks = [
    { cat: 'ลงทุน', title: 'เงินเดือน 25k จะเริ่มลงทุนยังไง? คู่มือฉบับมนุษย์เงินเดือน', date: '18 เม.ย.' },
    { cat: 'ออมเงิน', title: 'เริ่มออมครั้งแรก ทำยังไงให้ไม่ท้อใน 30 วัน', date: '15 เม.ย.' },
    { cat: 'ภาษี', title: 'ยื่นภาษีครั้งแรก ต้องเตรียมอะไรบ้าง (2026)', date: '10 เม.ย.' },
  ];

  const activity = [
    { icon: '📖', text: 'อ่านบทความ "DCA คืออะไร?" จบ', time: '2 ชม.ที่แล้ว' },
    { icon: '💬', text: 'ตอบกระทู้ "ขอคำแนะนำ เริ่มทำงานปีแรก"', time: '5 ชม.ที่แล้ว' },
    { icon: '🎓', text: 'เรียนจบบทที่ 6 ของ "ออมเงินครั้งแรก 101"', time: 'เมื่อวาน' },
    { icon: '🔖', text: 'บันทึกบทความ "Emergency Fund ควรมีกี่เดือน"', time: '2 วันที่แล้ว' },
    { icon: '🏆', text: 'ได้แต้ม +50 จาก 7-day streak', time: '3 วันที่แล้ว' },
  ];

  const goals = [
    { emoji: '🏖', name: 'Emergency Fund', target: 60000, current: 24500 },
    { emoji: '🏠', name: 'ดาวน์บ้าน', target: 500000, current: 82000 },
    { emoji: '🚗', name: 'รถคันแรก', target: 200000, current: 35000 },
  ];

  const tabs = [
    { id: 'overview', label: 'ภาพรวม', icon: '📊' },
    { id: 'courses', label: 'คอร์สของฉัน', icon: '🎓' },
    { id: 'bookmarks', label: 'บันทึก', icon: '🔖' },
    { id: 'goals', label: 'เป้าหมาย', icon: '🎯' },
    { id: 'settings', label: 'ตั้งค่า', icon: '⚙️' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-sunken)' }}>
      {/* top bar (dashboard-style, slimmer than public nav) */}
      <header style={{
        background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)',
        padding: '12px 24px',
        display: 'flex', alignItems: 'center', gap: 20,
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <A79Logo size={20} />
        <span style={{ fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', marginLeft: 12, letterSpacing: '0.08em' }}>
          / หลังบ้าน
        </span>
        <div style={{ flex: 1 }} />
        <input type="text" placeholder="🔍 ค้นหาบทความ / คอร์ส..." style={{
          width: 280, padding: '9px 14px', borderRadius: 10,
          border: '1px solid var(--line-strong)', background: 'var(--bg)',
          fontSize: 13, fontFamily: 'inherit', color: 'var(--ink)', outline: 'none',
        }} />
        <button style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'var(--bg)', border: '1px solid var(--line-strong)',
          cursor: 'pointer', fontSize: 16, position: 'relative',
        }}>
          🔔
          <span style={{
            position: 'absolute', top: 6, right: 6,
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--accent)',
          }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 12, borderLeft: '1px solid var(--line)' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'var(--accent-on)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14 }}>
            มิว
          </div>
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: 11, color: 'var(--accent)' }}>● {user.plan}</div>
          </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', maxWidth: 1360, margin: '0 auto' }}>
        {/* sidebar */}
        <aside style={{ padding: '28px 16px 28px 24px', position: 'sticky', top: 61, alignSelf: 'start' }}>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', padding: '0 12px 10px' }}>
            เมนูหลัก
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 14px', borderRadius: 10,
                border: 'none', cursor: 'pointer',
                background: tab === t.id ? 'var(--bg-elev)' : 'transparent',
                color: tab === t.id ? 'var(--ink)' : 'var(--ink-2)',
                fontWeight: tab === t.id ? 600 : 400,
                fontSize: 14, fontFamily: 'inherit',
                textAlign: 'left',
                boxShadow: tab === t.id ? 'var(--shadow-sm)' : 'none',
              }}>
                <span style={{ fontSize: 16 }}>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </nav>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', padding: '20px 12px 10px' }}>
            ลิงก์
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { label: 'กลับไปเว็บหลัก', href: 'landing.html', icon: '🏠' },
              { label: 'ชุมชน', href: 'community.html', icon: '💬' },
              { label: 'ออกจากระบบ', href: 'login.html', icon: '🚪' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 14px', borderRadius: 10,
                color: 'var(--ink-2)', textDecoration: 'none', fontSize: 14,
              }}>
                <span style={{ fontSize: 16 }}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </nav>

          {/* upgrade nudge */}
          <div style={{
            marginTop: 24, padding: 16, borderRadius: 14,
            background: 'var(--ink)', color: 'var(--bg)',
          }}>
            <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', opacity: 0.7, letterSpacing: '0.08em' }}>UPGRADE</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginTop: 6 }}>อยากได้ 1-on-1 coach?</div>
            <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4, lineHeight: 1.5 }}>ลองแพลน Pro 499/เดือน</div>
            <a href="course.html" style={{
              display: 'inline-block', marginTop: 10,
              padding: '6px 12px', borderRadius: 999,
              background: 'var(--accent)', color: 'var(--accent-on)',
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
            }}>ดูรายละเอียด →</a>
          </div>
        </aside>

        {/* main */}
        <main style={{ padding: '28px 24px 60px' }}>
          {tab === 'overview' && <>
            {/* hero greeting */}
            <div style={{
              background: 'var(--bg-elev)',
              border: '1px solid var(--line)', borderRadius: 22,
              padding: '32px 32px', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 28, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 180, height: 180, borderRadius: '50%',
                background: 'var(--accent)', opacity: 0.12,
              }} />
              <div style={{
                width: 80, height: 80, borderRadius: 20,
                background: 'var(--accent)', color: 'var(--accent-on)',
                display: 'grid', placeItems: 'center',
                fontSize: 32, fontWeight: 700, flexShrink: 0,
              }}>
                มิว
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                  สวัสดีตอนเช้า 🌤
                </div>
                <h1 style={{ fontSize: 32, fontWeight: 700, margin: '4px 0 8px', letterSpacing: '-0.01em' }}>
                  ยินดีต้อนรับกลับ, {user.name}!
                </h1>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', display: 'flex', gap: 20 }}>
                  <span>● สมาชิก <strong style={{ color: 'var(--accent)' }}>{user.plan}</strong></span>
                  <span>🔥 {user.streak} วัน streak</span>
                  <span>⭐ {user.points.toLocaleString()} แต้ม</span>
                </div>
              </div>
              <a href="blog-listing.html" className="btn btn-primary">อ่านต่อที่ค้างไว้ →</a>
            </div>

            {/* stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 24 }}>
              {stats.map(s => (
                <div key={s.l} style={{
                  background: 'var(--bg-elev)', border: '1px solid var(--line)',
                  borderRadius: 16, padding: '20px 22px',
                }}>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.l}</div>
                  <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '-0.02em', marginTop: 4, color: 'var(--ink)' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 4 }}>{s.hint}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20 }}>
              {/* continue learning */}
              <div style={{
                background: 'var(--bg-elev)', border: '1px solid var(--line)',
                borderRadius: 18, padding: 24,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>เรียนต่อ</h2>
                  <a href="#" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>ดูทั้งหมด</a>
                </div>
                {courses.map((c, i) => (
                  <div key={i} style={{
                    padding: '14px 0',
                    borderBottom: i < courses.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <div style={{ fontWeight: 600, fontSize: 15 }}>{c.title}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>{c.progress}%</div>
                    </div>
                    <div style={{ height: 6, background: 'var(--bg-sunken)', borderRadius: 999, overflow: 'hidden', marginBottom: 8 }}>
                      <div style={{ width: `${c.progress}%`, height: '100%', background: 'var(--accent)' }} />
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{c.lesson}</span>
                      <span>▶ {c.next}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* activity */}
              <div style={{
                background: 'var(--bg-elev)', border: '1px solid var(--line)',
                borderRadius: 18, padding: 24,
              }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>กิจกรรมล่าสุด</h2>
                {activity.map((a, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 12, padding: '10px 0',
                    borderBottom: i < activity.length - 1 ? '1px dashed var(--line)' : 'none',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                      background: 'var(--bg-sunken)', display: 'grid', placeItems: 'center', fontSize: 15,
                    }}>{a.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, lineHeight: 1.45 }}>{a.text}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* bookmarks preview */}
            <div style={{
              marginTop: 20,
              background: 'var(--bg-elev)', border: '1px solid var(--line)',
              borderRadius: 18, padding: 24,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>บทความที่บันทึกไว้</h2>
                <button onClick={() => setTab('bookmarks')} style={{ background: 'none', border: 'none', fontSize: 13, color: 'var(--accent)', cursor: 'pointer', fontFamily: 'inherit' }}>ดูทั้งหมด →</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                {bookmarks.map((b, i) => (
                  <a key={i} href="blog-article.html" style={{
                    padding: 16, borderRadius: 14,
                    background: 'var(--bg-sunken)', border: '1px solid var(--line)',
                    textDecoration: 'none', color: 'inherit',
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                    <span className="chip" style={{ alignSelf: 'flex-start', fontSize: 11, padding: '2px 10px' }}>{b.cat}</span>
                    <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{b.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', marginTop: 'auto' }}>บันทึกเมื่อ {b.date}</div>
                  </a>
                ))}
              </div>
            </div>
          </>}

          {tab === 'courses' && (
            <div>
              <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.01em' }}>คอร์สของฉัน</h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {courses.map((c, i) => (
                  <div key={i} style={{
                    background: 'var(--bg-elev)', border: '1px solid var(--line)',
                    borderRadius: 16, overflow: 'hidden',
                  }}>
                    <Placeholder label={c.title} aspect="16/8" style={{ borderRadius: 0 }} />
                    <div style={{ padding: 20 }}>
                      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{c.title}</div>
                      <div style={{ height: 6, background: 'var(--bg-sunken)', borderRadius: 999, overflow: 'hidden', marginBottom: 10 }}>
                        <div style={{ width: `${c.progress}%`, height: '100%', background: 'var(--accent)' }} />
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 14 }}>{c.lesson} · {c.progress}%</div>
                      <button className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>เรียนต่อ ▶</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'bookmarks' && (
            <div>
              <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.01em' }}>บทความที่บันทึกไว้</h1>
              <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 16 }}>
                {bookmarks.map((b, i) => (
                  <a key={i} href="blog-article.html" style={{
                    display: 'flex', gap: 16, alignItems: 'center',
                    padding: '18px 22px', textDecoration: 'none', color: 'inherit',
                    borderBottom: i < bookmarks.length - 1 ? '1px solid var(--line)' : 'none',
                  }}>
                    <span className="chip" style={{ fontSize: 11 }}>{b.cat}</span>
                    <div style={{ flex: 1, fontWeight: 600 }}>{b.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)' }}>{b.date}</div>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--ink-3)' }}>🔖</button>
                  </a>
                ))}
              </div>
            </div>
          )}

          {tab === 'goals' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, letterSpacing: '-0.01em' }}>เป้าหมายการเงิน</h1>
                <button className="btn btn-primary btn-sm">+ เป้าหมายใหม่</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {goals.map((g, i) => {
                  const pct = Math.round((g.current / g.target) * 100);
                  return (
                    <div key={i} style={{
                      background: 'var(--bg-elev)', border: '1px solid var(--line)',
                      borderRadius: 18, padding: 24,
                    }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>{g.emoji}</div>
                      <div style={{ fontSize: 18, fontWeight: 700 }}>{g.name}</div>
                      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>
                        ฿{g.current.toLocaleString()} / ฿{g.target.toLocaleString()}
                      </div>
                      <div style={{ height: 10, background: 'var(--bg-sunken)', borderRadius: 999, overflow: 'hidden', margin: '14px 0 10px' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: 'var(--accent)' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                        <span style={{ color: 'var(--ink-2)' }}>ความคืบหน้า</span>
                        <strong style={{ color: 'var(--accent)' }}>{pct}%</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === 'settings' && (
            <div>
              <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 20px', letterSpacing: '-0.01em' }}>ตั้งค่า</h1>
              <div style={{ background: 'var(--bg-elev)', border: '1px solid var(--line)', borderRadius: 16, padding: 28, maxWidth: 640 }}>
                <h3 style={{ margin: '0 0 14px', fontSize: 16 }}>ข้อมูลบัญชี</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <label style={{ fontSize: 13, color: 'var(--ink-2)' }}>
                    ชื่อที่แสดง
                    <input defaultValue={user.name} style={{ display: 'block', width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line-strong)', marginTop: 6, fontSize: 14, fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--ink)' }} />
                  </label>
                  <label style={{ fontSize: 13, color: 'var(--ink-2)' }}>
                    อีเมล
                    <input defaultValue={user.email} style={{ display: 'block', width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line-strong)', marginTop: 6, fontSize: 14, fontFamily: 'inherit', background: 'var(--bg)', color: 'var(--ink)' }} />
                  </label>
                </div>
                <h3 style={{ margin: '28px 0 14px', fontSize: 16 }}>การแจ้งเตือน</h3>
                {[
                  { l: 'Newsletter รายสัปดาห์', d: true },
                  { l: 'แจ้งเตือนกระทู้ที่ติดตาม', d: true },
                  { l: 'โปรโมชั่นและคอร์สใหม่', d: false },
                ].map((n, i) => (
                  <label key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', fontSize: 14 }}>
                    <input type="checkbox" defaultChecked={n.d} />
                    {n.l}
                  </label>
                ))}
                <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                  <button className="btn btn-primary">บันทึก</button>
                  <button className="btn btn-ghost">ยกเลิก</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <A79Tweaks theme={theme} setTheme={setTheme} />
    </div>
  );
}

Object.assign(window, { ProfilePage });
