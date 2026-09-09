/**
 * Life Mais Saúde — Rastreamento de Leads (GA4 / Google Ads)
 * Dispara eventos no GA4 (G-R4CH5Y0F7W) para:
 *  - contato_whatsapp : clique em qualquer link wa.me / api.whatsapp.com
 *  - contato_telefone : clique em link tel:
 *  - generate_lead    : envio do formulário (detectado via redirect ?enviado=1 do FormSubmit)
 *
 * No Google Ads: vincular a conta ao GA4 e importar esses eventos como conversões
 * (GA4: Administrador > Eventos > marcar como evento-chave; Ads: Metas > Conversões > Importar do GA4).
 */
(function () {
  'use strict';

  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  // ── Cliques em WhatsApp e telefone (delegação: pega todos os links, inclusive o botão flutuante)
  document.addEventListener('click', function (e) {
    var el = e.target;
    while (el && el !== document && !(el.tagName === 'A' && el.href)) el = el.parentNode;
    if (!el || el === document || !el.href) return;

    var href = el.href;
    var label = (el.getAttribute('aria-label') || el.textContent || '').trim().slice(0, 80);

    if (href.indexOf('wa.me') !== -1 || href.indexOf('api.whatsapp.com') !== -1) {
      track('contato_whatsapp', {
        link_url: href.split('?')[0],
        link_text: label,
        page_path: location.pathname
      });
    } else if (href.indexOf('tel:') === 0) {
      track('contato_telefone', {
        phone_number: href.replace('tel:', ''),
        page_path: location.pathname
      });
    }
  }, true);

  // ── Envio de formulário: FormSubmit redireciona para /?enviado=1
  //    Guard com sessionStorage para não duplicar em refresh/voltar.
  if (/[?&]enviado=1/.test(location.search)) {
    var KEY = 'lms_lead_enviado';
    if (!sessionStorage.getItem(KEY)) {
      sessionStorage.setItem(KEY, '1');
      track('generate_lead', {
        lead_source: 'formulario_site',
        page_path: location.pathname
      });
    }
    // Limpa a URL para não re-disparar se o usuário copiar/recarregar o link
    if (window.history && history.replaceState) {
      history.replaceState(null, '', location.pathname);
    }
  }
})();
