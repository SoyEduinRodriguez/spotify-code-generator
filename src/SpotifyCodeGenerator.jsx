import { useState } from "react";

export default function SpotifyCodeGenerator() {
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [codeUrl, setCodeUrl] = useState("");

  const generateCode = () => {
    try {
      const url = new URL(spotifyUrl);
      const segments = url.pathname.split("/");
      const type = segments[1]; // e.g., track, album, playlist
      const id = segments[2];
      const uri = `spotify:${type}:${id}`;
      const codeImgUrl = `https://scannables.scdn.co/uri/plain/png/ffffff/000000/000000/640/${uri}`;
      setCodeUrl(codeImgUrl);
    } catch (error) {
      alert("Por favor ingresa un enlace de Spotify válido");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Generador de Spotify Codes 🎵</h1>
      <p className="text-muted-foreground text-sm">
        Pega un enlace de canción, álbum o playlist de Spotify y descarga el código en alta calidad, ¡con tu estilo!
      </p>
      <input
        className="w-full border border-gray-300 p-2 rounded"
        placeholder="https://open.spotify.com/track/..."
        value={spotifyUrl}
        onChange={(e) => setSpotifyUrl(e.target.value)}
      />
      <button
        onClick={generateCode}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Generar Código
      </button>
      {codeUrl && (
        <div className="mt-4">
          <img src={codeUrl} alt="Spotify Code" className="rounded-md shadow" />
          <a
            href={codeUrl}
            download="spotify_code.png"
            className="mt-2 block text-sm underline text-blue-500"
          >
            Descargar PNG
          </a>
        </div>
      )}
    </div>
  );
}
