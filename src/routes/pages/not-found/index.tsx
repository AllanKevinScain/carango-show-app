import { Link, useNavigate } from "react-router";

export const NotFoundPage = () => {
  const router = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-900/10 border border-blue-900/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.001 10h2v5h-2z" />
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Página não encontrada
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            A página que você está procurando não existe, foi removida ou o link
            está incorreto. Mas não se preocupe — vamos te levar de volta.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm font-medium transition-transform active:scale-95"
            >
              <span className="bg-blue-900/10 text-blue-900 px-2 py-1 rounded">
                Home
              </span>
              Voltar para o início
            </Link>

            <button
              onClick={() => router(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              Voltar
            </button>
          </div>

          <small className="text-xs text-gray-400">
            Se o problema persistir, entre em contato com o{" "}
            <a
              href="https://github.com/Flamarionfp"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              suporte.
            </a>
          </small>
        </section>

        <figure className="order-first md:order-last flex items-center justify-center">
          <div className="w-full max-w-md">
            <svg
              viewBox="0 0 600 400"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#e0f2fe" />
                  <stop offset="1" stopColor="#bfdbfe" />
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="600"
                height="400"
                rx="20"
                fill="url(#g)"
              />
              <g transform="translate(50,40)">
                <text
                  x="80"
                  y="170"
                  fontSize="120"
                  fontWeight="700"
                  fill="#1e293b"
                >
                  404
                </text>
                <text x="80" y="210" fontSize="18" fill="#0f172a">
                  Oops — página não encontrada
                </text>
              </g>
            </svg>
          </div>
        </figure>
      </div>
    </main>
  );
};
