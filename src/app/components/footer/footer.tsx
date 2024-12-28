import '@/app/components/footer/footer.scss'

export default function Footer() {
  return (
    <footer className="main-footer">
      <small>© {(new Date().getFullYear())}, Ewa Szymanska</small>
    </footer>
  );
}
