'use strict';
(() => {
  const video = document.getElementById('taty-video');
  if (!video) return;

  // Pessoas com preferência por movimento reduzido veem o retrato final estático.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
    video.poster = document.getElementById('taty-poster-final').href;
    video.load();
    return;
  }

  // O vídeo é executado uma vez; fica parado no último quadro até a página recarregar.
  video.loop = false;
  video.addEventListener('ended', () => { video.pause(); }, {once:true});

  // Se autoplay for bloqueado, mantém uma imagem real e não exibe controles.
  video.play().catch(() => {
    video.removeAttribute('autoplay');
    video.pause();
    video.poster = document.getElementById('taty-poster-final').href;
    video.load();
  });
})();
