/**
 * Recebe os formulários do site e grava na planilha (aba "Contatos").
 * Como instalar: veja docs/FORMULARIO-GOOGLE.md
 */
const SHEET_NAME = 'Contatos';
const HEADERS = ['data_hora', 'tipo', 'nome', 'email', 'telefone', 'empresa', 'interesse', 'mensagem',
  'aceite_comunicacoes', 'aceite_politica', 'maior_18', 'versao_politica', 'origem', 'status'];
const MAX_LEN = 500;

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);

    // Antispam: campo-isca preenchido por robôs
    if (d.website) return ok_();

    const email = clean_(d.email).toLowerCase();
    const nome = clean_(d.nome);
    if (!nome || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return ok_();

    // Sem aceite da política e declaração de maioridade, NÃO grava (princípio da necessidade/consentimento)
    if (d.aceite_politica !== 'sim' || d.maior_18 !== 'sim') return ok_();

    const tipo = d.tipo === 'expositor' ? 'expositor' : 'lista-de-espera';
    // Para a lista de novidades o aceite de comunicações é obrigatório
    if (tipo === 'lista-de-espera' && d.aceite_comunicacoes !== 'sim') return ok_();

    const sheet = getSheet_();
    sheet.appendRow([
      new Date(), tipo, nome, email, clean_(d.telefone), clean_(d.empresa), clean_(d.interesse), clean_(d.mensagem),
      d.aceite_comunicacoes === 'sim' ? 'sim' : 'nao', 'sim', 'sim', clean_(d.versao_politica), clean_(d.origem), 'ativo',
    ]);
  } catch (err) {
    console.error(err);
  } finally {
    lock.releaseLock();
  }
  return ok_();
}

function doGet() { return ok_(); }

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Limpa o texto e impede "injeção de fórmula" (células que começam com = + - @)
function clean_(v) {
  let s = String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, MAX_LEN);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
