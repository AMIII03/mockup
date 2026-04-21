// Login / Sign up page

function LoginPage() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  const [mode, setMode] = React.useState('login'); // login | signup
  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <A79Nav active={null} />

      <main style={{
        flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
      }}>
        {/* left — form */}
        <div style={{
          padding: '56px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: '100%', maxWidth: 420 }}>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 10px', lineHeight: 1.15 }}>
              {mode === 'login' ? 'ยินดีต้อนรับกลับ!' : 'มาเริ่มกันเลย 👋'}
            </h1>
            <p style={{ color: 'var(--ink-2)', fontSize: 16, margin: '0 0 32px' }}>
              {mode === 'login'
                ? 'เข้าสู่ระบบเพื่ออ่านต่อที่ค้างไว้'
                : 'สมัครฟรีใน 30 วินาที · ไม่ต้องใช้บัตรเครดิต'}
            </p>

            {/* social */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {[
                { p: 'Google', icon: 'G' },
                { p: 'Facebook', icon: 'f' },
                { p: 'Line', icon: 'L' },
              ].map(s => (
                <button key={s.p} style={{
                  padding: '14px 18px', borderRadius: 12,
                  background: 'var(--bg-elev)', border: '1px solid var(--line-strong)',
                  fontSize: 15, fontWeight: 500, color: 'var(--ink)',
                  cursor: 'pointer', fontFamily: 'inherit',
                  display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center',
                }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    background: 'var(--bg-sunken)', display: 'grid', placeItems: 'center',
                    fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13,
                  }}>{s.icon}</span>
                  ดำเนินการต่อด้วย {s.p}
                </button>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 14,
              margin: '24px 0', color: 'var(--ink-3)', fontSize: 13,
            }}>
              <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
              หรือใช้อีเมล
              <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
            </div>

            <form onSubmit={e => { e.preventDefault(); window.location.href = 'profile.html'; }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {mode === 'signup' && (
                <div>
                  <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6, display: 'block' }}>ชื่อที่แสดง</label>
                  <input type="text" placeholder="เช่น น้องมิว" style={fieldStyle} />
                </div>
              )}
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6, display: 'block' }}>อีเมล</label>
                <input type="email" placeholder="you@example.com" style={fieldStyle} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-2)', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                  <span>รหัสผ่าน</span>
                  {mode === 'login' && <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>ลืมรหัสผ่าน?</a>}
                </label>
                <input type="password" placeholder="••••••••" style={fieldStyle} />
              </div>
              {mode === 'signup' && (
                <label style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--ink-2)', alignItems: 'flex-start', marginTop: 4 }}>
                  <input type="checkbox" defaultChecked style={{ marginTop: 3 }} />
                  <span>ฉันยอมรับ <a href="#" style={{ color: 'var(--accent)' }}>ข้อตกลง</a> และ <a href="#" style={{ color: 'var(--accent)' }}>นโยบายความเป็นส่วนตัว</a></span>
                </label>
              )}
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                {mode === 'login' ? 'เข้าสู่ระบบ' : 'สมัครสมาชิกฟรี'}
              </button>
            </form>

            <div style={{ marginTop: 24, fontSize: 14, color: 'var(--ink-2)', textAlign: 'center' }}>
              {mode === 'login' ? 'ยังไม่มีบัญชี?' : 'มีบัญชีอยู่แล้ว?'}{' '}
              <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} style={{
                background: 'none', border: 'none', color: 'var(--accent)',
                fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14,
                textDecoration: 'underline',
              }}>
                {mode === 'login' ? 'สมัครฟรี' : 'เข้าสู่ระบบ'}
              </button>
            </div>
          </div>
        </div>

        {/* right — hero panel */}
        <div style={{
          background: 'var(--ink)',
          color: 'var(--bg)',
          padding: '56px 48px',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 320, height: 320, borderRadius: '50%',
            background: 'var(--accent)', opacity: 0.7,
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -40,
            width: 200, height: 200, borderRadius: '50%',
            background: 'var(--accent-2)', opacity: 0.5,
          }} />
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em',
              color: 'color-mix(in oklab, var(--bg) 70%, transparent)',
            }}>MEMBER · UNLOCK</span>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '16px 0 24px' }}>
              เข้าร่วมกับอีก 128k+ คน<br />ที่เริ่มเรื่องเงินไปแล้ว
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 32 }}>
              {[
                { icon: '📚', t: 'บทความทั้งหมดฟรี', d: 'อ่านได้ไม่จำกัด เข้าถึงทุกบทเรียน' },
                { icon: '💬', t: 'ชุมชนถาม-ตอบ', d: 'ที่ปรึกษาและเพื่อนเรียนรู้' },
                { icon: '📊', t: 'เครื่องมือคำนวณ', d: 'Template จัดการเงินแจกฟรี' },
              ].map(x => (
                <div key={x.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'color-mix(in oklab, var(--bg) 15%, transparent)',
                    display: 'grid', placeItems: 'center', fontSize: 20,
                    flexShrink: 0,
                  }}>{x.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16 }}>{x.t}</div>
                    <div style={{ fontSize: 14, color: 'color-mix(in oklab, var(--bg) 75%, transparent)', marginTop: 2 }}>{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 40, padding: '18px 20px',
              background: 'color-mix(in oklab, var(--bg) 10%, transparent)',
              borderRadius: 14, fontSize: 14, lineHeight: 1.6,
              border: '1px solid color-mix(in oklab, var(--bg) 20%, transparent)',
            }}>
              <div style={{ fontStyle: 'italic', marginBottom: 8 }}>
                "หลังสมัครไม่กี่เดือน เริ่มมีเงินออมครั้งแรกในชีวิต"
              </div>
              <div style={{ fontSize: 13, color: 'color-mix(in oklab, var(--bg) 70%, transparent)' }}>
                — มิว, นักศึกษา ปี 3
              </div>
            </div>
          </div>
        </div>
      </main>

      <A79Tweaks theme={theme} setTheme={setTheme} />
    </div>
  );
}

const fieldStyle = {
  width: '100%', padding: '14px 16px', borderRadius: 12,
  border: '1px solid var(--line-strong)', fontSize: 15, fontFamily: 'inherit',
  background: 'var(--bg-elev)', color: 'var(--ink)', outline: 'none',
  boxSizing: 'border-box',
};

Object.assign(window, { LoginPage });
