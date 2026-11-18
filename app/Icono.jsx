const trazos = {
  regalo: "M3 8h18v4H3z M5 12v9h14v-9 M12 8v13 M12 8C4 8 5 2 8 3c2 0 4 5 4 5Zm0 0s2-5 4-5c4-1 4 5-4 5Z",
  chat: "M21 11a9 9 0 0 1-13 8l-5 2 1.5-5A9 9 0 1 1 21 11Z M8 10h8 M8 13h5",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z M17 7h.1",
  enviar: "m3 10 18-7-6 18-4-7-8-4Z M11 14 21 3",
  correo: "M3 5h18v14H3z M3 6l9 7 9-7",
};
export default function Icono({ nombre }) {
  return <svg className="icono" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={trazos[nombre]} /></svg>;
}
