'use client'
import { useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personal, manifesto, projects, skills, honors, leadership } from '../lib/content'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioPage() {

  useEffect(() => {
    const M = innerWidth < 768
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const clamp = (v: number, n: number, x: number) => Math.min(x, Math.max(n, v))

    /* ═══ GRAIN ═══ */
    const grainEl = document.getElementById('grain') as HTMLCanvasElement | null
    if (grainEl) {
      const gx = grainEl.getContext('2d')!
      let grainTimer: ReturnType<typeof setTimeout>
      const gr = () => {
        const m = gx.createImageData(256, 256)
        const d = m.data
        for (let i = 0; i < d.length; i += 4) {
          const v = Math.random() * 255
          d[i] = d[i + 1] = d[i + 2] = v
          d[i + 3] = 255
        }
        gx.putImageData(m, 0, 0)
        grainTimer = setTimeout(gr, 80)
      }
      gr()
    }

    /* ═══ CURSOR ═══ */
    const cr = document.getElementById('cr')!
    const cdd = document.getElementById('cdd')!
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my
    let cursorRaf: number
    if (!M) {
      document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY
        cdd.style.left = mx + 'px'; cdd.style.top = my + 'px'
      })
      const ac = () => {
        rx = lerp(rx, mx, .1); ry = lerp(ry, my, .1)
        cr.style.left = rx + 'px'; cr.style.top = ry + 'px'
        cursorRaf = requestAnimationFrame(ac)
      }
      ac()
      document.querySelectorAll('a,button,.sk,.nlnk,.pjcta').forEach(el => {
        el.addEventListener('mouseenter', () => cr.classList.add('h'))
        el.addEventListener('mouseleave', () => cr.classList.remove('h'))
      })
      document.querySelectorAll('.pj').forEach(el => {
        el.addEventListener('mouseenter', () => cr.classList.add('v'))
        el.addEventListener('mouseleave', () => cr.classList.remove('v'))
      })
    }

    /* ═══ THREE.JS — TUNNEL ═══ */
    const cv = document.getElementById('tunnel') as HTMLCanvasElement
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, .1, 400)
    cam.position.set(0, 0, 5)
    const ren = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true })
    ren.setSize(innerWidth, innerHeight)
    ren.setPixelRatio(Math.min(devicePixelRatio, 2))

    const N = M ? 1200 : 3000
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)
    const sz = new Float32Array(N)
    const C1 = new THREE.Color('#c4a882')
    const C2 = new THREE.Color('#6b5caa')
    const C3 = new THREE.Color('#3a7fb8')

    for (let i = 0; i < N; i++) {
      const a = Math.random() * Math.PI * 2, z = -Math.random() * 280
      const br = 6 + Math.sin(z * .03) * 2.5 + Math.cos(z * .018) * 1.8
      const r = br + (Math.random() - .5) * 4
      pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.sin(a) * r; pos[i * 3 + 2] = z
      const f = (-z) / 280
      const c = f < .5 ? C1.clone().lerp(C2, f * 2) : C2.clone().lerp(C3, (f - .5) * 2)
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
      sz[i] = Math.random() * 2.5 + .4
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('aCol', new THREE.BufferAttribute(col, 3))
    geo.setAttribute('aSz', new THREE.BufferAttribute(sz, 1))

    const mat = new THREE.ShaderMaterial({
      uniforms: { uT: { value: 0 }, uV: { value: 0 } },
      vertexShader: `
attribute float aSz;attribute vec3 aCol;
varying vec3 vC;varying float vD;
uniform float uT,uV;
void main(){
vC=aCol;
vec3 p=position;
p.x+=sin(p.z*.02+uT*.12)*.9;
p.y+=cos(p.z*.018+uT*.1)*.7;
p.xy*=1.+uV*.005;
vec4 mv=modelViewMatrix*vec4(p,1.);
vD=-mv.z;
float nf=smoothstep(0.,12.,-mv.z);
float ff=smoothstep(160.,50.,-mv.z);
gl_PointSize=aSz*(200./ -mv.z)*nf*ff;
gl_Position=projectionMatrix*mv;
}`,
      fragmentShader: `
varying vec3 vC;varying float vD;
void main(){
float d=length(gl_PointCoord-.5);
if(d>.5)discard;
float a=(1.-smoothstep(0.,.5,d))*.3;
float df=smoothstep(0.,25.,vD)*smoothstep(160.,45.,vD);
gl_FragColor=vec4(vC,a*df);
}`,
      transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
    })
    scene.add(new THREE.Points(geo, mat))

    /* spine particles */
    const SN = M ? 50 : 150
    const sp = new Float32Array(SN * 3)
    const sc = new Float32Array(SN * 3)
    const ss = new Float32Array(SN)
    for (let i = 0; i < SN; i++) {
      sp[i * 3] = (Math.random() - .5) * 1.5
      sp[i * 3 + 1] = (Math.random() - .5) * 1.5
      sp[i * 3 + 2] = -Math.random() * 280
      sc[i * 3] = .82; sc[i * 3 + 1] = .76; sc[i * 3 + 2] = .62
      ss[i] = Math.random() * 1.2 + .3
    }
    const sg = new THREE.BufferGeometry()
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3))
    sg.setAttribute('aCol', new THREE.BufferAttribute(sc, 3))
    sg.setAttribute('aSz', new THREE.BufferAttribute(ss, 1))
    const spine = new THREE.Points(sg, mat)
    scene.add(spine)

    let glx = 0, gly = 0, svel = 0, lsy = 0, cfov = 65
    document.addEventListener('mousemove', (e) => {
      glx = (e.clientX / innerWidth) * 2 - 1
      gly = -(e.clientY / innerHeight) * 2 + 1
    })

    let renderRaf: number
    const renderLoop = () => {
      renderRaf = requestAnimationFrame(renderLoop)
      const t = performance.now() * .001
      mat.uniforms.uT.value = t
      const dy = scrollY - lsy; lsy = scrollY
      svel = lerp(svel, Math.abs(dy), .04)
      mat.uniforms.uV.value = svel

      const tH = document.documentElement.scrollHeight - innerHeight
      const fr = tH > 0 ? scrollY / tH : 0

      scene.children[0].rotation.z = t * .01 + fr * .4
      spine.rotation.z = t * .008

      cam.position.z = lerp(cam.position.z, 5 - fr * 250, .06)
      cam.position.x = lerp(cam.position.x, glx * 2, .015)
      cam.position.y = lerp(cam.position.y, gly * 1.5, .015)
      cam.rotation.z = Math.sin(t * .06) * .005

      cfov = lerp(cfov, 65 + clamp(svel * .25, 0, 15), .04)
      cam.fov = cfov; cam.updateProjectionMatrix()
      ren.render(scene, cam)
    }
    renderLoop()

    const onResize = () => {
      cam.aspect = innerWidth / innerHeight
      cam.updateProjectionMatrix()
      ren.setSize(innerWidth, innerHeight)
    }
    window.addEventListener('resize', onResize)

    /* ═══ SPLIT TEXT ═══ */
    document.querySelectorAll('.il').forEach(p => {
      const el = p as HTMLElement
      const t = el.dataset.t
      if (!t) return
      delete el.dataset.t
      t.split('').forEach(c => {
        const s = document.createElement('span')
        s.className = 'ic'
        s.textContent = c === ' ' ? '\u00A0' : c
        el.appendChild(s)
      })
    })

    /* CHANGE 1 — Vihan's name */
    function mkN(t: string, el: HTMLElement | null) {
      if (!el) return
      t.split('').forEach(c => {
        const s = document.createElement('span')
        s.className = 'nch'
        s.textContent = c
        el.appendChild(s)
      })
    }
    mkN('VIHAN',  document.getElementById('nl1'))
    mkN('GOENKA', document.getElementById('nl2'))

    const nchs = document.querySelectorAll('.nch')
    nchs.forEach(c => gsap.set(c, {
      x: (Math.random() - .5) * innerWidth * .6,
      y: (Math.random() - .5) * innerHeight * .4,
      rotation: (Math.random() - .5) * 100,
      opacity: 0,
      scale: .3 + Math.random() * .4
    }))

    const abH = document.getElementById('abH')
    if (abH) {
      abH.innerHTML = abH.innerHTML.replace(/(\S+)/g, '<span class="w"><span class="wi">$1</span></span>')
    }

    document.querySelectorAll('.ctli').forEach(l => {
      const t = l.textContent || ''
      l.textContent = ''
      t.split('').forEach(c => {
        const s = document.createElement('span')
        s.className = 'ctch'
        s.textContent = c === ' ' ? '\u00A0' : c
        l.appendChild(s)
      })
    })

    /* ═══ INTRO — auto types on load ═══ */
    gsap.timeline({ delay: .5 })
      .to('.ic', { opacity: 1, duration: .02, stagger: .03, ease: 'none' })
      .to('#icue', { opacity: 1, duration: .5 }, '+=.3')
      .to('#ibar', { opacity: 1, duration: .3 })

    /* ═══ OPENING — scroll drives portal + name ═══ */
    const portal = document.getElementById('portal')!
    const po = { r: 0 }
    const maxR = Math.hypot(innerWidth, innerHeight) / 2 + 50

    const oTl = gsap.timeline()
    oTl
      .to('#intro', { opacity: 0, scale: .96, duration: .12 }, 0)
      .set('#intro', { display: 'none' }, .15)
      .to(po, {
        r: maxR, duration: .38, ease: 'power2.inOut',
        onUpdate() {
          const r = po.r; if (r < 1) return
          portal.style.background = `radial-gradient(circle at 50% 50%,transparent ${r}px,#08080a ${r + 2}px)`
        },
        onComplete() { portal.style.display = 'none' }
      }, .12)
      .to(nchs, { x: 0, y: 0, rotation: 0, opacity: 1, scale: 1, duration: .2, stagger: { each: .008, from: 'random' }, ease: 'power3.out' }, .50)
      .to('#role', { opacity: 1, duration: .04 }, .68)
      /* FIX 1 — fade name out 60%→66% of scroll, scale to 0.85 */
      .to(nchs, { opacity: 0, scale: 0.85, duration: .06, ease: 'power2.in' }, .55)
      .to('#nav', {
        opacity: 1, duration: .02,
        onComplete() { document.getElementById('nav')?.classList.add('on') }
      }, .72)
      .to(nchs, {
        duration: .14, ease: 'power2.in',
        x: (i: number) => { const a = (i / nchs.length) * Math.PI * 2; return Math.cos(a) * 400 },
        y: (i: number) => { const a = (i / nchs.length) * Math.PI * 2; return Math.sin(a) * 400 },
        scale: 4, opacity: 0, rotation: () => (Math.random() - .5) * 50
      }, .78)
      .to('#role', { opacity: 0, scale: .8, duration: .06 }, .78)

    ScrollTrigger.create({ trigger: '#opening', start: 'top top', end: '+=350%', pin: true, scrub: .5, animation: oTl })

    /* ═══ MANIFESTO ═══ */
    document.querySelectorAll('.mr').forEach(row => {
      const el = row as HTMLElement
      const sp = parseFloat(el.dataset.s || '1')
      const txt = el.querySelector('.mt')
      gsap.fromTo(el, { y: 100 * sp }, { y: -100 * sp, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: .3 } })
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 95%', end: 'bottom 5%', scrub: true } })
      tl.fromTo(txt, { opacity: 0, x: sp > 1 ? -30 : 30 }, { opacity: 1, x: 0, duration: .35 })
        .to(txt, { opacity: 1, duration: .3 })
        .to(txt, { opacity: 0, x: sp > 1 ? 30 : -30, duration: .35 })
    })

    /* ═══ WORK ═══ */
    const pjIds = ['#pj1', '#pj2', '#pj3', '#pj4']
    const wds = document.querySelectorAll('.wd')
    const wTl = gsap.timeline()

    pjIds.forEach((sel, i) => {
      const el = document.querySelector(sel)!
      const nm = el.querySelectorAll('.pjnm span')
      const cta = el.querySelector('.pjcta')

      if (i > 0) {
        wTl.fromTo(el, { opacity: 0, yPercent: 6 }, { opacity: 1, yPercent: 0, duration: .15, ease: 'power2.inOut' }, i * .8 + .05)
        wTl.fromTo(nm, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .1, stagger: .012, ease: 'power3.out' }, i * .8 + .12)
        wTl.fromTo(cta, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .05 }, i * .8 + .18)
      } else {
        wTl.fromTo(nm, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .12, stagger: .012, ease: 'power3.out' }, .02)
        wTl.fromTo(cta, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .06 }, .08)
      }
      if (i < pjIds.length - 1) wTl.to(el, { opacity: 0, yPercent: -6, duration: .15, ease: 'power2.inOut' }, (i + 1) * .8 - .02)
    })

    ScrollTrigger.create({
      trigger: '#work', start: 'top top', end: '+=280%', pin: true, scrub: .3, animation: wTl,
      onUpdate: (s) => { const idx = Math.min(3, Math.floor(s.progress * 4)); wds.forEach((d, i) => d.classList.toggle('on', i === idx)) }
    })

    /* project num parallax on mouse */
    if (!M) {
      document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.pj').forEach(p => {
          const bg = p.querySelector('.pjnum') as HTMLElement | null
          if (!bg) return
          const xo = (e.clientX / innerWidth - .5) * -8, yo = (e.clientY / innerHeight - .5) * -5
          bg.style.transform = `translate(${xo}px,${yo}px)`
        })
      })
    }

    /* ═══ ABOUT ═══ */
    gsap.to('#about .slbl', { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '#about', start: 'top 85%' } })
    gsap.to('.wi', { y: 0, duration: 1, stagger: .02, ease: 'power4.out', scrollTrigger: { trigger: '.abh', start: 'top 80%' } })
    gsap.to('.skills', { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '.skills', start: 'top 88%' } })

    /* CHANGE 2 — honors + leadership */
    gsap.to('.honors',    { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '.honors',    start: 'top 88%' } })
    gsap.to('.leadership',{ opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '.leadership', start: 'top 88%' } })

    /* ═══ CONTACT ═══ */
    gsap.to('#contact .slbl', { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '#contact', start: 'top 85%' } })
    gsap.to('.ctli', { y: 0, duration: 1.2, stagger: .1, ease: 'power4.out', scrollTrigger: { trigger: '#ctH', start: 'top 80%' } })
    gsap.to('#ctB', { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '#ctB', start: 'top 90%' } })
    gsap.to('#ctLinks', { opacity: 1, y: 0, duration: .8, scrollTrigger: { trigger: '#ctLinks', start: 'top 90%' } })

    ScrollTrigger.create({
      trigger: '#contact', start: 'top 60%',
      onEnter() { document.getElementById('ctG')?.classList.add('on') },
      onLeaveBack() { document.getElementById('ctG')?.classList.remove('on') }
    })

    /* letter repel */
    if (!M) {
      const chs = document.querySelectorAll('.ctch')
      document.addEventListener('mousemove', (e) => {
        chs.forEach(ch => {
          const r = ch.getBoundingClientRect()
          const cx = r.left + r.width / 2, cy = r.top + r.height / 2
          const dx = cx - e.clientX, dy = cy - e.clientY
          const dist = Math.hypot(dx, dy)
          const el = ch as HTMLElement
          if (dist < 120) {
            const f = Math.pow((120 - dist) / 120, 1.5)
            const ang = Math.atan2(dy, dx)
            el.style.transform = `translate(${Math.cos(ang) * f * 18}px,${Math.sin(ang) * f * 12}px)`
            el.style.color = `rgba(196,168,130,${.3 + f * .7})`
          } else { el.style.transform = ''; el.style.color = '' }
        })
      })
    }

    /* magnetic btn */
    const ctB = document.getElementById('ctB')
    if (ctB && !M) {
      ctB.addEventListener('mousemove', (e) => {
        const r = ctB.getBoundingClientRect()
        ctB.style.transition = 'transform .06s'
        ctB.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .35}px,${(e.clientY - r.top - r.height / 2) * .35}px)`
      })
      ctB.addEventListener('mouseleave', () => {
        ctB.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)'
        ctB.style.transform = ''
      })
    }

    /* nav smooth scroll */
    document.querySelectorAll('.nlnk').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault()
        const href = (a as HTMLAnchorElement).getAttribute('href')
        if (href) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      })
    })

    /* CHANGE 4 — cleanup */
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      cancelAnimationFrame(renderRaf)
      cancelAnimationFrame(cursorRaf)
      window.removeEventListener('resize', onResize)
      ren.dispose()
    }
  }, [])

  return (
    <>
      <canvas id="tunnel" />
      <canvas id="grain" width="256" height="256" />
      <div id="portal" />

      {/* Intro overlay */}
      <div id="intro">
        {personal.introLines.map((line, i) => (
          <p key={i} className="il" data-t={line} />
        ))}
        <span id="icue">Scroll to enter</span>
        <div id="ibar" />
      </div>

      {/* Custom cursor */}
      <div className="cr" id="cr" />
      <div className="cd" id="cdd" />

      {/* Nav */}
      <nav id="nav">
        <div className="nlogo">{personal.logo}</div>
        <ul className="nlinks">
          <li><a className="nlnk" href="#work">Work</a></li>
          <li><a className="nlnk" href="#about">About</a></li>
          <li><a className="nlnk" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Opening — name reveal */}
        <section id="opening">
          <div className="nline" id="nl1" />
          <div className="nline" id="nl2" />
          <p className="role" id="role">{personal.role}</p>
        </section>

        <div className="breather" />

        {/* Manifesto */}
        <section id="manifesto">
          {manifesto.map((row, i) => (
            <div
              key={i}
              className="mr"
              data-s={String(row.speed)}
              style={{ textAlign: row.align as React.CSSProperties['textAlign'] }}
            >
              <span className={`mt ${row.size}${row.gold ? ' gl' : ''}`}>{row.text}</span>
            </div>
          ))}
        </section>

        <div className="breather" />

        {/* Work */}
        <section id="work">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`pj ${p.bg}`}
              id={p.id}
              style={i === 0 ? { opacity: 1 } : {}}
            >
              <span className="pjnum">{p.num}</span>
              <h3 className="pjnm">
                {p.name.split('').map((c, j) => <span key={j}>{c}</span>)}
              </h3>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="pjcta">
                View on GitHub <span className="pjcta-l" />
              </a>
            </div>
          ))}
          <div className="wdots">
            {projects.map((_, i) => (
              <div key={i} className={`wd${i === 0 ? ' on' : ''}`} />
            ))}
          </div>
        </section>

        <div className="breather" />

        {/* About */}
        <section id="about">
          <div className="slbl">About</div>
          <div className="abg">
            <h2
              className="abh"
              id="abH"
              dangerouslySetInnerHTML={{ __html: personal.bioHeadline }}
            />
            <div>
              <div className="skills">
                {skills.map(s => (
                  <span key={s} className="sk"><span>{s}</span></span>
                ))}
              </div>
              <div className="honors">
                {honors.map((h, i) => (
                  <div key={i} className="hn">
                    <div className="hn-label">{h.label}</div>
                    <div className="hn-sub">{h.sub}</div>
                  </div>
                ))}
              </div>
              <div className="leadership">
                {leadership.map((l, i) => (
                  <div key={i} className="ld">
                    <div className="ld-left">
                      <div className="ld-role">{l.role} — {l.org}</div>
                      <div className="ld-org">{l.period}</div>
                    </div>
                    <div className="ld-right">{l.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="ctglow" id="ctG" />
          <div className="slbl">Contact</div>
          <h2 id="ctH">
            <div className="ctl"><span className="ctli">Let&apos;s build</span></div>
            <div className="ctl"><span className="ctli">something</span></div>
            <div className="ctl"><span className="ctli">together.</span></div>
          </h2>
          <div className="ctlinks" id="ctLinks">
            <a href={personal.linkedinHref} target="_blank" rel="noopener noreferrer" className="ctlink">
              LinkedIn ↗
            </a>
            <a href={personal.githubHref} target="_blank" rel="noopener noreferrer" className="ctlink">
              GitHub ↗
            </a>
          </div>

          <a href={`mailto:${personal.email}`} className="ctbtn" id="ctB">
            <span>{personal.email}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </section>

        <footer>
          <span>© 2025 Vihan Goenka</span>
          <span>
            <a href={personal.linkedinHref} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' · '}
            <a href={personal.githubHref} target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </span>
        </footer>
      </main>
    </>
  )
}
