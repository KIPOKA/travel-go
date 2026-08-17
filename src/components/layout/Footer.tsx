import { APP_NAME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
        © {new Date().getFullYear()} {APP_NAME}
      </div>
    </footer>
  )
}
