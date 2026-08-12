import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react'
import { company, offices } from '../data/company'

const initial = { name: '', email: '', phone: '', company: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', text: '' })
  const [sending, setSending] = useState(false)

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ type: '', text: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setStatus({ type: 'ok', text: data.message })
      setForm(initial)
    } catch (err) {
      setStatus({
        type: 'err',
        text: err.message || 'Unable to send. Please email us directly.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section-pad py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-mist/75 leading-relaxed">
            Reach our offices nationwide—or send an inquiry and the Fayakoon team will
            follow up.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 text-sand transition hover:text-copper-bright"
            >
              <Mail size={16} className="text-copper" />
              {company.email}
            </a>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-sand transition hover:text-copper-bright"
            >
              <Phone size={16} className="text-copper" />
              {company.phone} · {company.phoneAlt}
            </a>
            <a
              href={`https://${company.website}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sand transition hover:text-copper-bright"
            >
              <Globe size={16} className="text-copper" />
              {company.website}
            </a>
          </div>

          <div className="mt-12 space-y-6">
            {offices.map((office) => (
              <div key={office.city} className="border-l border-mist/20 pl-4">
                <h3 className="display text-2xl text-sand">{office.city}</h3>
                <p className="mt-2 flex gap-2 text-sm text-mist/70">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-copper" />
                  {office.address}
                </p>
                <p className="mt-1 text-sm text-mist/80">{office.phones.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 lg:col-span-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={onChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
            />
            <Field label="Phone" name="phone" value={form.phone} onChange={onChange} />
            <Field
              label="Company"
              name="company"
              value={form.company}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={onChange}
              className="w-full border border-mist/15 bg-ink-soft/80 px-4 py-3 text-sand outline-none transition focus:border-copper"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copper-bright disabled:opacity-60"
          >
            {sending ? 'Sending…' : 'Send Inquiry'}
            <Send size={14} />
          </button>
          {status.text && (
            <p
              className={`text-sm ${
                status.type === 'ok' ? 'text-mist' : 'text-red-300'
              }`}
            >
              {status.text}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-steel">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-mist/15 bg-ink-soft/80 px-4 py-3 text-sand outline-none transition focus:border-copper"
      />
    </div>
  )
}
