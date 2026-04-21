// Landing page — Atomic 79

function Hero() {
  return (
    <section style={{
      position: 'relative',
      padding: '80px 32px 60px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 24, alignItems: 'center' }}>
            <span className="chip chip-accent">● LIVE</span>
            <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>
              บทความใหม่ทุกวันพุธ · ติดตามแล้ว <strong style={{ color: 'var(--ink)' }}>128,400</strong> คน
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 5.5vw, 68px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            margin: 0,
            color: 'var(--ink)',
          }}>
            เริ่มเรื่องเงิน<br />
            <span style={{ color: 'var(--accent)' }}>ไม่ต้องรู้เยอะ</span><br />
            แค่รู้ให้ถูก
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.6, color: 'var(--ink-2)',
            maxWidth: 520, marginTop: 24,
          }}>
            เพจความรู้การเงินที่อธิบายเรื่องยากให้เข้าใจใน 3 นาที
            ตั้งแต่ออมเงินครั้งแรกจนถึงลงทุนอย่างมั่นใจ · ฟรีสำหรับทุกคน
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <a href="#subscribe" className="btn btn-primary btn-lg">
              สมัครรับอีเมลฟรี →
            </a>
            <a href="blog-listing.html" className="btn btn-ghost btn-lg">
              เริ่มอ่านบทความ
            </a>
          </div>
          <div style={{
            display: 'flex', gap: 28, marginTop: 40,
            paddingTop: 24, borderTop: '1px dashed var(--line-strong)',
          }}>
            {[
              { n: '128k+', l: 'ผู้ติดตาม' },
              { n: '340+', l: 'บทความ' },
              { n: '4.9★', l: 'รีวิวจากสมาชิก' },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 600 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Featured visual — stack of cards */}
          <div style={{
            position: 'relative',
            aspectRatio: '4/5',
            background: 'var(--bg-elev)',
            borderRadius: 28,
            border: '1px solid var(--line)',
            padding: 28,
            boxShadow: 'var(--shadow-lg)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
              <span className="chip">💡 บทความน่าอ่าน</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>
                #TRENDING
              </span>
            </div>
            <Placeholder label="cover · เริ่มออม 5 ขั้น" aspect="16/10" style={{ borderRadius: 16 }} />
            <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.3, margin: '18px 0 8px', letterSpacing: '-0.01em' }}>
              เริ่มออมครั้งแรก ทำยังไงให้ไม่ท้อใน 30 วัน
            </h3>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, margin: 0 }}>
              คู่มือง่ายๆ สำหรับมือใหม่ เริ่มจากอ่าน 3 นาที แล้วลงมือจริง
            </p>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--line)',
            }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--placeholder)' }} />
              <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>โดย <strong style={{ color: 'var(--ink)' }}>ทีม Atomic</strong></span>
              <span style={{ fontSize: 13, color: 'var(--ink-3)', marginLeft: 'auto' }}>อ่าน 3 นาที</span>
            </div>
          </div>
          {/* floating badge */}
          <div style={{
            position: 'absolute', top: -18, right: -18,
            background: 'var(--accent-2)', color: 'var(--ink)',
            padding: '14px 18px', borderRadius: 18,
            fontWeight: 600, fontSize: 14,
            boxShadow: 'var(--shadow)',
            transform: 'rotate(6deg)',
          }}>
            เริ่มใน 3 นาที ✨
          </div>
          <div style={{
            position: 'absolute', bottom: 24, left: -28,
            background: 'var(--bg-elev)', border: '1px solid var(--line)',
            padding: '12px 16px', borderRadius: 14,
            fontSize: 13,
            boxShadow: 'var(--shadow)',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ fontSize: 20 }}>💬</span>
            <div>
              <div style={{ fontWeight: 600 }}>"เข้าใจเรื่องกองทุนครั้งแรก"</div>
              <div style={{ color: 'var(--ink-3)', fontSize: 12 }}>— มิว, นักศึกษา ปี 3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryStrip() {
  return (
    <section style={{
      padding: '36px 32px',
      maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 20,
      }}>
        <h2 style={{ fontSize: 20, margin: 0, fontWeight: 600 }}>เลือกเรื่องที่อยากรู้</h2>
        <a href="blog-listing.html" style={{ fontSize: 14, color: 'var(--accent)', textDecoration: 'none' }}>
          ดูทั้งหมด →
        </a>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12,
      }}>
        {A79_CATEGORIES.map(c => (
          <a key={c.slug} href={`blog-listing.html?cat=${c.slug}`} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 10, padding: '20px 12px',
            background: 'var(--bg-elev)', border: '1px solid var(--line)',
            borderRadius: 16, textDecoration: 'none', color: 'var(--ink)',
            transition: 'transform 0.12s ease, border-color 0.12s ease',
          }}
          onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'var(--line)'; }}
          >
            <div style={{ fontSize: 28 }}>{c.emoji}</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{c.label}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function FeaturedArticles() {
  const posts = [
    { tag: 'ออมเงิน', title: 'DCA คืออะไร? ทำจริงแค่เดือนละ 500 บาทได้ไหม', read: '4 นาที', author: 'ทีม Atomic' },
    { tag: 'ลงทุน', title: 'กองทุนรวมสำหรับมือใหม่ เลือกยังไงไม่ให้ขาดทุน', read: '6 นาที', author: 'พี่ต้น' },
    { tag: 'ภาษี', title: 'ยื่นภาษีครั้งแรก ต้องเตรียมอะไรบ้าง (2026)', read: '5 นาที', author: 'ทีม Atomic' },
    { tag: 'ประกัน', title: 'ประกันสุขภาพแบบไหนที่ Freelance ต้องมี', read: '7 นาที', author: 'คุณแนน' },
  ];
  return (
    <section style={{ padding: '60px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
        <div>
          <h2 style={{ fontSize: 36, margin: 0, letterSpacing: '-0.01em', fontWeight: 700 }}>
            บทความแนะนำ
          </h2>
          <p style={{ color: 'var(--ink-2)', margin: '8px 0 0' }}>
            คัดมาให้จากคนที่อ่านและใช้จริง
          </p>
        </div>
        <a href="blog-listing.html" className="btn btn-ghost btn-sm">ดูทั้งหมด →</a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 24 }}>
        {/* featured big card */}
        <a href="blog-article.html" className="card" style={{
          textDecoration: 'none', color: 'inherit',
          gridRow: 'span 2', display: 'flex', flexDirection: 'column',
        }}>
          <Placeholder label="cover · featured" aspect="4/3" style={{ borderRadius: 0, flexShrink: 0 }} />
          <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <span className="chip chip-accent">⭐ EDITOR'S PICK</span>
              <span className="chip">ลงทุน</span>
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 14px' }}>
              เงินเดือน 25k จะเริ่มลงทุนยังไงดี? คู่มือฉบับมนุษย์เงินเดือน
            </h3>
            <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              แบ่งเงินเดือนเป็นก้อนๆ ตามเป้าหมายจริง ไม่ต้องตีโพยตีพาย
              แค่ 3 ขั้นตอนก็เริ่มต้นได้
            </p>
            <div style={{
              marginTop: 'auto', paddingTop: 24,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--placeholder)' }} />
              <div style={{ fontSize: 14 }}>
                <div style={{ fontWeight: 600 }}>พี่โอ</div>
                <div style={{ color: 'var(--ink-3)' }}>15 เม.ย. 2026 · อ่าน 8 นาที</div>
              </div>
            </div>
          </div>
        </a>
        {posts.map((p, i) => (
          <a key={i} href="blog-article.html" className="card" style={{
            textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column',
          }}>
            <Placeholder label={`cover · ${p.tag}`} aspect="16/9" style={{ borderRadius: 0, flexShrink: 0 }} />
            <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="chip" style={{ alignSelf: 'flex-start' }}>{p.tag}</span>
              <h3 style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.35, margin: '12px 0 10px', letterSpacing: '-0.005em' }}>
                {p.title}
              </h3>
              <div style={{
                marginTop: 'auto', fontSize: 13, color: 'var(--ink-3)',
                display: 'flex', gap: 10,
              }}>
                <span>{p.author}</span>
                <span>·</span>
                <span>อ่าน {p.read}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Personas() {
  const people = [
    {
      emoji: '🎓',
      name: 'น้องมิว',
      who: 'นักศึกษา · อายุ 22',
      quote: 'อยากเริ่มออมแต่ไม่รู้จากตรงไหน',
      tags: ['ออมเงิน', 'ลงทุนครั้งแรก'],
    },
    {
      emoji: '💼',
      name: 'พี่โอ',
      who: 'มนุษย์เงินเดือน · อายุ 28',
      quote: 'มีเงินออมแล้ว ต่อไปควรทำไง',
      tags: ['กองทุน', 'ETF', 'ประกัน'],
    },
    {
      emoji: '🎨',
      name: 'คุณแม่แนน',
      who: 'Freelance / SME · อายุ 34',
      quote: 'รายได้ไม่แน่นอน วางแผนยังไง',
      tags: ['ภาษี', 'Emergency Fund'],
    },
  ];
  return (
    <section style={{ padding: '60px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <h2 style={{ fontSize: 36, margin: '0 0 8px', letterSpacing: '-0.01em', fontWeight: 700 }}>
        เราเขียนให้ใคร?
      </h2>
      <p style={{ color: 'var(--ink-2)', margin: '0 0 32px' }}>
        เลือกโปรไฟล์ที่ใกล้เคียงคุณ แล้วไปดูเส้นทางที่เหมาะสม
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {people.map(p => (
          <div key={p.name} className="card" style={{ padding: 28 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: 'var(--bg-sunken)',
              display: 'grid', placeItems: 'center',
              fontSize: 30, marginBottom: 18,
            }}>{p.emoji}</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{p.name}</div>
            <div style={{ color: 'var(--ink-3)', fontSize: 13, marginBottom: 16, fontFamily: 'var(--font-mono)' }}>{p.who}</div>
            <div style={{
              padding: '14px 16px',
              background: 'var(--bg-sunken)',
              borderRadius: 12,
              fontStyle: 'italic',
              fontSize: 15,
              marginBottom: 16,
              color: 'var(--ink-2)',
            }}>
              "{p.quote}"
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
              {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: 12, padding: '3px 10px' }}>{t}</span>)}
            </div>
            <a href="blog-listing.html" style={{
              fontSize: 14, color: 'var(--accent)', textDecoration: 'none', fontWeight: 500,
            }}>ดูเส้นทางของ {p.name} →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubscribeBlock() {
  return (
    <section id="subscribe" style={{
      padding: '0 32px',
      maxWidth: 1200, margin: '80px auto 0',
    }}>
      <div style={{
        padding: '64px 48px',
        background: 'var(--ink)',
        color: 'var(--bg)',
        borderRadius: 28,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -40,
          width: 260, height: 260, borderRadius: '50%',
          background: 'var(--accent)', opacity: 0.8,
        }} />
        <div style={{
          position: 'absolute', bottom: -80, right: 160,
          width: 180, height: 180, borderRadius: '50%',
          background: 'var(--accent-2)', opacity: 0.6,
        }} />
        <div style={{ position: 'relative', maxWidth: 560 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'color-mix(in oklab, var(--bg) 80%, transparent)',
            letterSpacing: '0.1em',
          }}>NEWSLETTER · EVERY WEDNESDAY</span>
          <h2 style={{
            fontSize: 44, fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.1,
            margin: '16px 0 16px',
          }}>
            ทุกวันพุธ<br />มีเรื่องเงินที่ใช้ได้จริง
          </h2>
          <p style={{
            fontSize: 17, lineHeight: 1.6,
            color: 'color-mix(in oklab, var(--bg) 85%, transparent)',
            margin: '0 0 28px',
          }}>
            สมัครฟรี · ยกเลิกเมื่อไหร่ก็ได้ · เราไม่สแปมและไม่ขายข้อมูล
          </p>
          <form onSubmit={e => { e.preventDefault(); alert('สมัครเรียบร้อย (mockup)'); }}
            style={{ display: 'flex', gap: 10, maxWidth: 480 }}>
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              style={{
                flex: 1, padding: '16px 20px',
                borderRadius: 999, border: 'none',
                fontSize: 15, fontFamily: 'inherit',
                background: 'var(--bg)', color: 'var(--ink)',
                outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '16px 28px', borderRadius: 999,
              background: 'var(--accent)', color: 'var(--accent-on)',
              border: 'none', fontWeight: 600, fontSize: 15,
              fontFamily: 'inherit', cursor: 'pointer',
            }}>สมัครฟรี</button>
          </form>
          <div style={{
            display: 'flex', gap: 20, marginTop: 24,
            fontSize: 13, color: 'color-mix(in oklab, var(--bg) 75%, transparent)',
          }}>
            <span>✓ ใช้เวลาอ่าน 3 นาที</span>
            <span>✓ เคล็ดลับทำได้จริง</span>
            <span>✓ ฟรี 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Landing() {
  const [theme, setTheme] = React.useState(window.__A79_THEME || 'sunrise');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <>
      <A79Nav active="home" />
      <Hero />
      <CategoryStrip />
      <FeaturedArticles />
      <Personas />
      <SubscribeBlock />
      <A79Footer />
      <A79Tweaks theme={theme} setTheme={setTheme} />
    </>
  );
}

Object.assign(window, { Landing });
