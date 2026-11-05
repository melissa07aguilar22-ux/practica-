const QUESTIONS = [{"q": "¿Qué significan las siglas EPA según tu material de estudio?", "a": "Electricidad, Plomería y Albañilería", "wrong": ["Equipo, Protección y Almacenaje", "Energía, Pintura y Acabados", "Exhibición, Precio y Atención"]}, {"q": "¿Qué representa el escorpión en EPA?", "a": "Resistencia y adaptación. Sus pinzas de agarre son llaves inglesas, que representan el trabajo manual que hacen nuestros clientes para mejorar sus hogares y la frase «Háganlo por ustedes mismos».", "wrong": ["Rapidez y fuerza; representa únicamente el trabajo de los colaboradores.", "Protección y seguridad; sus pinzas representan herramientas eléctricas.", "Orden y limpieza; representa el cuidado de los anaqueles."]}, {"q": "¿Cuáles son los parámetros del surtido?", "a": "Pongo y repongo; de frente y al frente; ordeno lo ordenado; todo tiene su anaquel; garantizo el libre tránsito.", "wrong": ["Recibo y despacho; limpio y acomodo; reviso precios; cierro pasillos.", "Pongo y repongo; vendo y cobro; reviso cajas; garantizo promociones.", "Ordeno lo nuevo; retiro lo antiguo; lleno bodegas; bloqueo pasillos."]}, {"q": "¿Cuáles son los 6 pasos para la venta?", "a": "Saludo al cliente; exploro sus necesidades; muestro los atributos del producto; vendo proyectos; cierro la venta; me despido.", "wrong": ["Saludo; cobro; despacho; facturo; empaco; me despido.", "Saludo; exploro necesidades; muestro atributos; vendo proyectos; cierro la venta; me despido.", "Recibo al cliente; ofrezco descuentos; busco inventario; cobro; entrego; me despido."]}, {"q": "¿Cuáles son los pilares de la cultura EPA?", "a": "Sonreímos, somos anfitriones y cuidamos nuestra presentación personal.", "wrong": ["Honestidad, igualdad y constancia.", "Puntualidad, rapidez y productividad.", "Sonreímos, vendemos y ofrecemos descuentos."]}, {"q": "¿Cuáles son los 3 tipos de tarimas?", "a": "EPA, Origen y Cerámica.", "wrong": ["Ferretería, Construcción y Decoración.", "Regular, Oportunidad y Liquidación.", "Bodega, Pasillo y Exhibición."]}, {"q": "La tarima EPA se coloca en bodega aérea.", "a": "Verdadero", "wrong": ["Falso", "Solo si contiene cerámica.", "Solo durante inventario."]}, {"q": "¿Qué es barrido?", "a": "Reporte que sale del AS400 o inventario, para saneamiento de área y comparar el kárdex con el reporte.", "wrong": ["Conteo físico de productos dañados para darlos de baja.", "Proceso para trasladar mercancía entre tiendas.", "Reporte de ventas diarias por cajero."]}, {"q": "¿Qué es merma?", "a": "Es la diferencia entre el inventario lógico y físico, determinada por medio de toma física de inventario.", "wrong": ["Producto vendido con descuento por temporada.", "Diferencia entre el precio de compra y el precio de venta.", "Mercancía trasladada de una tienda a otra."]}, {"q": "¿Qué es UFI y cuánto vale?", "a": "Unidad Financiera Institucional; vale 15 dólares.", "wrong": ["Unidad de Facturación Interna; vale 10 dólares.", "Unidad Financiera Institucional; vale 20 dólares.", "Unidad de Flujo de Inventario; vale 15 dólares."]}, {"q": "¿Cuánto debe valer un producto de impulso?", "a": "Menos de un UFI o igual a un UFI.", "wrong": ["Más de dos UFI.", "Exactamente dos UFI.", "Menos de cinco UFI, sin incluir el valor de un UFI."]}, {"q": "¿Cuáles son los tipos de anaqueles?", "a": "Oportunidad, Liquidación y Regular.", "wrong": ["EPA, Origen y Cerámica.", "Ferretería, Construcción y Decoración.", "Entrada, Salida y Bodega."]}, {"q": "¿Qué colores identifican los anaqueles de oportunidad, liquidación y regular, respectivamente?", "a": "Amarillo y azul; rojo y blanco; blanco.", "wrong": ["Rojo y blanco; amarillo y azul; verde.", "Amarillo y rojo; blanco y azul; celeste.", "Azul y blanco; verde y amarillo; rojo."]}, {"q": "¿Cuáles son los valores EPA?", "a": "Honradez, Igualdad y Constancia.", "wrong": ["Respeto, Servicio y Puntualidad.", "Sonreír, ser anfitrión y cuidar la presentación personal.", "Resistencia, adaptación y compromiso."]}, {"q": "¿Cuál es la misión de EPA?", "a": "Ofrecer la mejor opción a nuestros clientes en surtido, precio y servicio en el mercado de la construcción, decoración y remodelación del hogar.", "wrong": ["Ser la red de súper ferreterías líder en satisfacción de clientes y colaboradores.", "Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.", "Mejores hogares para mejores ciudadanos."]}, {"q": "¿Cuál es la visión de EPA?", "a": "Ser la red de súper ferreterías líder en satisfacción de los clientes, colaboradores, accionistas, proveedores y comunidades donde operamos.", "wrong": ["Ofrecer la mejor opción en surtido, precio y servicio para el hogar.", "Servir al cliente de manera que nos prefiera.", "Convertirnos en la única tienda de materiales de construcción."]}, {"q": "¿Qué es rebaja a cero?", "a": "Proceso por el cual se elimina físicamente y del sistema toda mercancía averiada en tienda no apta para la venta.", "wrong": ["Descuento total aplicado a productos de temporada.", "Proceso para reducir el precio de un producto hasta agotar existencias.", "Traslado de mercancía averiada a otra tienda."]}, {"q": "¿Qué es un kardex?", "a": "Es un suministro de inventario que se utiliza para el conteo de la mercancía en el área de almacenaje, en el cual se coloca el código interno del producto y su respectiva cantidad.", "wrong": ["Un reporte de ventas que muestra los precios y descuentos.", "Un documento para solicitar productos a otra tienda.", "Una etiqueta que contiene únicamente el código de barras."]}, {"q": "¿Cómo se llena un kardex?", "a": "Primero el código del producto; luego la ficha del empleado; después la cantidad existente; nombre del colaborador; y fecha de modificación del kardex.", "wrong": ["Primero la fecha; luego el precio; después el código de barras y el nombre del cliente.", "Código del producto; precio de venta; proveedor; fecha de compra y firma del cliente.", "Nombre del colaborador; código externo; descuento; cantidad vendida y fecha de vencimiento."]}, {"q": "¿Qué elementos componen un código de producto EPA?", "a": "14 (categoría) + 25 (línea o familia) + 016 (consecutivo del artículo).", "wrong": ["14 (línea) + 016 (categoría) + 25 (consecutivo).", "25 (categoría) + 14 (consecutivo) + 016 (proveedor).", "016 (categoría) + 25 (línea) + 14 (consecutivo)."]}, {"q": "¿Cómo se llama la hoja de uso interno?", "a": "Predefinitivo.", "wrong": ["Kardex.", "Comanda.", "Planograma."]}, {"q": "¿Cuáles son los colores del kardex por área?", "a": "Ferretería: rosado; Construcción: blanco; Remodelación: celeste; Decoración: verde.", "wrong": ["Ferretería: blanco; Construcción: rosado; Remodelación: verde; Decoración: celeste.", "Ferretería: verde; Construcción: celeste; Remodelación: blanco; Decoración: rosado.", "Ferretería: amarillo; Construcción: azul; Remodelación: rojo; Decoración: blanco."]}, {"q": "¿Qué significa AST?", "a": "Análisis de Seguridad de Trabajo.", "wrong": ["Área de Servicio Técnico.", "Autorización de Salida de Tienda.", "Análisis de Surtido y Tarimas."]}, {"q": "¿Qué características tienen los anaqueles de oportunidad, liquidación y regular?", "a": "Oportunidad: precio anterior, fechas de inicio y fin, rótulo amarillo con franja azul. Liquidación: precio anterior, rótulo blanco y rojo y leyenda «Hasta agotar existencia». Regular: incluye IVA, unidad de venta, precio en dólares, descripción, referencia del proveedor, fechas de emisión y actualización, código EPA y código externo.", "wrong": ["Oportunidad: rótulo blanco y rojo. Liquidación: amarillo y azul con fechas. Regular: solo precio y código de barras.", "Oportunidad: precio anterior y fechas, rótulo amarillo con franja azul. Liquidación: precio anterior, rótulo blanco y rojo y «Hasta agotar existencia». Regular: incluye IVA, unidad, precio, descripción, referencia del proveedor, fechas, código EPA y código externo.", "Oportunidad: solo precio actual. Liquidación: solo código EPA. Regular: precio anterior y fecha de vencimiento."]}, {"q": "¿Cuál es la razón de ser de EPA?", "a": "Mejores hogares para mejores ciudadanos.", "wrong": ["Servir al cliente conectado desde cualquier lugar.", "Mejores precios para mejores colaboradores.", "Construir más tiendas para más comunidades."]}, {"q": "¿Cuál es la misión de ventas?", "a": "Servir al cliente de manera que nos prefiera.", "wrong": ["Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.", "Ofrecer la mejor opción en surtido, precio y servicio.", "Mejores hogares para mejores ciudadanos."]}, {"q": "¿Cuál es la misión de ventas en línea?", "a": "Servir al cliente conectado desde cualquier lugar de manera que nos prefiera.", "wrong": ["Servir al cliente de manera que nos prefiera.", "Ofrecer productos únicamente en la tienda física.", "Ser la red líder en satisfacción de proveedores."]}, {"q": "¿Qué categorías pertenecen al Área 1: Ferretería?", "a": "6 Jardinería; 10 Automotriz; 12 Herramientas manuales; 14 Herramientas eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad.", "wrong": ["2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.", "20 Madera; 21 Puertas; 26 Plomería; 28 Materiales eléctricos; 30 Construcción.", "7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas."]}, {"q": "¿Qué categorías pertenecen al Área 2: Construcción?", "a": "20 Madera; 21 Puertas; 26 Plomería; 28 Materiales eléctricos; 30 Construcción.", "wrong": ["6 Jardinería; 10 Automotriz; 12 Herramientas manuales; 14 Herramientas eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad.", "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.", "7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas."]}, {"q": "¿Qué categorías pertenecen al Área 3: Remodelación?", "a": "7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas.", "wrong": ["20 Madera; 21 Puertas; 26 Plomería; 28 Materiales eléctricos; 30 Construcción.", "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.", "6 Jardinería; 10 Automotriz; 12 Herramientas manuales; 14 Herramientas eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad."]}, {"q": "¿Qué categorías pertenecen al Área 4: Decoración?", "a": "2 Pintura; 4 Decoración; 8 Vivero; 15 Iluminación.", "wrong": ["7 Hogar; 9 Muebles; 11 Recipientes; 22 Pisos; 23 Electrodomésticos; 24 Baños; 25 Cocinas.", "20 Madera; 21 Puertas; 26 Plomería; 28 Materiales eléctricos; 30 Construcción.", "6 Jardinería; 10 Automotriz; 12 Herramientas manuales; 14 Herramientas eléctricas; 16 Electricidad; 18 Ferretería; 19 Cerrajería; 27 Seguridad."]}, {"q": "¿Qué es merchandising?", "a": "Una estrategia de promoción de ventas que, mediante técnicas visuales, pone al cliente en contacto con el producto y su precio, facilitando la compra.", "wrong": ["Un sistema para registrar entradas y salidas de inventario.", "El proceso de trasladar mercancía entre tiendas.", "Un documento que detalla el precio de un bien o servicio."]}, {"q": "¿Qué es una venta entre tiendas?", "a": "Es el proceso en que se traslada mercancía de una tienda a otra con el propósito de cumplir con las necesidades de compra del cliente.", "wrong": ["La venta de productos al por mayor a un solo cliente.", "El traslado de mercancía desde bodega hasta el área de exhibición.", "La devolución de productos averiados al proveedor."]}, {"q": "¿Qué es un pedido especial?", "a": "Es todo producto cuya existencia física y punto de pedido son cero, y cuya solicitud está sujeta a un catálogo donde se especifican sus dimensiones, colores y formas.", "wrong": ["Un producto en oferta que se vende hasta agotar existencia.", "Un producto que siempre debe mantenerse en bodega aérea.", "Una solicitud de mercancía para mantenimiento de las tiendas."]}, {"q": "¿Qué es una venta por volumen?", "a": "Venta de artículos con monto total mayor a 100 UFI y cantidad pedida mayor o igual a 2 veces el punto de pedido.", "wrong": ["Venta con monto mayor a 15 UFI y cantidad igual al punto de pedido.", "Venta con monto total menor a 100 UFI y cantidad de una unidad.", "Venta de cualquier producto cuando el cliente compra dos artículos."]}, {"q": "¿Qué son los usos internos?", "a": "Proceso a través del cual se solicita mercancía para realizar trabajos de mantenimiento, instalación y mejora en las unidades operativas y oficina central.", "wrong": ["Proceso para vender mercancía a los colaboradores con descuento.", "Solicitud de productos sin existencia física para clientes.", "Traslado de productos entre tiendas para completar una venta."]}, {"q": "¿Qué es la elaboración de cotizaciones?", "a": "Documento en el que se detalla el precio de un bien o servicio para el proceso de compra o negociación; lo solicita el cliente para conocer el valor de un pedido de mercancía.", "wrong": ["Reporte que compara el inventario lógico con el inventario físico.", "Documento que autoriza la eliminación de mercancía averiada.", "Registro del código interno y cantidad de productos almacenados."]}, {"q": "¿Qué es retail?", "a": "Consiste en todas las actividades que se relacionan directamente con la comercialización de productos o servicios uniformes a grandes cantidades de clientes.", "wrong": ["Técnica visual para acomodar productos en un anaquel.", "Proceso de traslado de productos entre tiendas.", "Sistema para contar mercancía en el área de almacenaje."]}, {"q": "¿Qué es un planograma?", "a": "Esquema de exhibición o acomodo de la mercancía que especifica cómo exhibir el surtido, el mobiliario necesario, la iluminación y los apoyos visuales.", "wrong": ["Reporte del AS400 usado para comparar el kardex con el inventario.", "Documento que contiene los precios de productos para una negociación.", "Proceso para solicitar mercancía de mantenimiento."]}, {"q": "Al mobiliario de exhibición se le llama rack.", "a": "Verdadero", "wrong": ["Falso", "Solo se llama rack al mobiliario de bodega aérea.", "Solo se llama rack al anaquel de liquidación."]}, {"q": "¿Cuándo se debe elaborar una comanda?", "a": "Cuando el producto no tiene código de barra o viñeta; requiere corte (cable, lazos, cadena, poliducto, madera, puertas, etc.); es pintura preparada; es pesado; es para domicilio; o es poliducto para cliente retira.", "wrong": ["Únicamente cuando el cliente paga en efectivo o solicita factura.", "Solo para productos pequeños que se encuentran en caja.", "Cuando cualquier producto tiene descuento o pertenece a liquidación."]}, {"q": "¿Cuáles son los tipos de entrega de productos?", "a": "Despacho por caja, despacho por Construcción, domicilio y cliente retira.", "wrong": ["Despacho por bodega, mensajería, proveedor y devolución.", "Despacho por caja, venta en línea, liquidación y retiro de proveedor.", "Domicilio, venta entre tiendas, pedido especial y uso interno."]}];

const $ = (id) => document.getElementById(id);
const home = $('home'), quiz = $('quiz'), results = $('results');
let session = [], index = 0, mode = 'study', secondsLeft = 0, totalSeconds = 0;
let timerId = null, soundOn = true, answered = false, score = 0, history = [];

$('totalQuestions').textContent = QUESTIONS.length;
$('count').querySelector('option[value="all"]').textContent = `Todas (${QUESTIONS.length})`;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function playTone(kind) {
  if (!soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    const good = kind === 'good';
    osc.type = 'sine';
    osc.frequency.setValueAtTime(good ? 660 : 190, ctx.currentTime);
    if (good) osc.frequency.setValueAtTime(880, ctx.currentTime + .12);
    gain.gain.setValueAtTime(.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + .02);
    gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .28);
    osc.start(); osc.stop(ctx.currentTime + .3);
    osc.onended = () => ctx.close();
  } catch (e) { /* El navegador puede bloquear audio hasta una interacción. */ }
}

function flash(kind) {
  const el = $('flash');
  el.className = `flash ${kind}`;
  setTimeout(() => el.className = 'flash', 700);
}

function startSession() {
  mode = $('mode').value;
  const requested = $('count').value;
  session = shuffle(QUESTIONS).slice(0, requested === 'all' ? QUESTIONS.length : Number(requested));
  index = 0; score = 0; history = []; answered = false;
  totalSeconds = Number($('duration').value) * 60;
  secondsLeft = totalSeconds;
  home.classList.add('hidden'); results.classList.add('hidden'); quiz.classList.remove('hidden');
  $('sessionTitle').textContent = mode === 'study' ? 'Modo estudio' : 'Modo examen';
  $('modePill').textContent = mode === 'study' ? 'ESTUDIO' : 'EXAMEN';
  $('chooseHint').textContent = mode === 'study' ? 'Selecciona la respuesta correcta · Recibirás retroalimentación inmediata' : 'Selecciona la respuesta correcta · Revisa tus respuestas al finalizar';
  clearInterval(timerId); updateTimer(); timerId = setInterval(tick, 1000);
  renderQuestion();
  window.scrollTo({top:0,behavior:'smooth'});
}

function tick() {
  secondsLeft--; updateTimer();
  if (secondsLeft <= 0) finishSession(true);
}

function updateTimer() {
  const m = Math.floor(secondsLeft / 60).toString().padStart(2,'0');
  const s = (secondsLeft % 60).toString().padStart(2,'0');
  $('timer').textContent = `${m}:${s}`;
  $('timer').parentElement.classList.toggle('warning', secondsLeft <= 60);
}

function renderQuestion() {
  answered = false;
  const item = session[index];
  $('questionNumber').textContent = `PREGUNTA ${String(index+1).padStart(2,'0')}`;
  $('questionText').textContent = item.q;
  $('progressText').textContent = `Pregunta ${index+1} de ${session.length}`;
  const pct = Math.round(index / session.length * 100);
  $('progressPercent').textContent = `${pct}%`;
  $('progressBar').style.width = `${pct}%`;
  $('feedback').className = 'feedback hidden';
  $('nextBtn').disabled = true;
  $('nextBtn').innerHTML = index === session.length - 1 ? 'Finalizar <span>✓</span>' : 'Siguiente <span>→</span>';
  const options = shuffle([item.a, ...item.wrong]).map((label, i) => ({label, correct: label === item.a}));
  const container = $('options'); container.innerHTML = '';
  options.forEach((option, i) => {
    const button = document.createElement('button');
    button.className = 'option'; button.type = 'button';
    const letter = document.createElement('span'); letter.className = 'letter'; letter.textContent = String.fromCharCode(65+i);
    const text = document.createElement('span'); text.textContent = option.label;
    button.append(letter, text);
    button.addEventListener('click', () => chooseAnswer(option, button));
    container.appendChild(button);
  });
}

function chooseAnswer(option, selectedButton) {
  if (answered) return;
  if (mode === 'exam') {
    answered = true;
    document.querySelectorAll('.option').forEach(btn => btn.disabled = true);
    selectedButton.classList.add('selected');
    if (option.correct) score++;
    history.push({q:session[index].q, chosen:option.label, answer:session[index].a, correct:option.correct});
    $('nextBtn').disabled = false;
    return;
  }
  answered = true;
  document.querySelectorAll('.option').forEach(btn => {
    btn.disabled = true;
    const label = btn.querySelector('span:last-child').textContent;
    if (label === session[index].a) btn.classList.add('correct');
  });
  if (option.correct) {
    score++; selectedButton.classList.add('correct'); flash('green'); playTone('good');
    showFeedback(true, '¡Excelente! Respuesta correcta.', session[index].a);
  } else {
    selectedButton.classList.add('incorrect'); flash('red'); playTone('bad');
    showFeedback(false, '¡Sigue practicando! Esta vez no era la respuesta correcta.', session[index].a);
  }
  history.push({q:session[index].q, chosen:option.label, answer:session[index].a, correct:option.correct});
  $('nextBtn').disabled = false;
}

function showFeedback(good, message, answer) {
  const box = $('feedback');
  box.className = `feedback ${good ? 'good' : 'bad'}`;
  const strong = document.createElement('strong'); strong.textContent = message;
  const detail = document.createElement('span'); detail.textContent = `Respuesta correcta: ${answer}`;
  box.replaceChildren(strong, detail);
}

function nextQuestion() {
  if (!answered) return;
  if (index < session.length - 1) { index++; renderQuestion(); }
  else finishSession(false);
}

function finishSession(timeUp=false) {
  clearInterval(timerId); quiz.classList.add('hidden'); results.classList.remove('hidden');
  const pct = Math.round(score / session.length * 100);
  $('score').textContent = `${pct}%`;
  $('correctCount').textContent = score;
  $('wrongCount').textContent = session.length - score;
  const used = totalSeconds - secondsLeft;
  $('timeUsed').textContent = `${String(Math.floor(used/60)).padStart(2,'0')}:${String(used%60).padStart(2,'0')}`;
  $('resultTitle').textContent = pct >= 85 ? '¡Excelente trabajo!' : pct >= 60 ? '¡Vas por buen camino!' : '¡Sigue practicando!';
  $('resultMessage').textContent = timeUp ? 'El tiempo terminó. Aquí tienes el resumen de tu examen.' : 'Terminaste tu sesión. Revisa tus respuestas y sigue mejorando.';
  $('resultIcon').textContent = pct >= 60 ? '✦' : '↗';
  $('review').innerHTML = '';
  history.forEach((item, i) => {
    const row = document.createElement('div'); row.className = `review-item ${item.correct ? 'ok' : 'no'}`;
    const q = document.createElement('b'); q.textContent = `${i+1}. ${item.q}`;
    const chosen = document.createElement('div'); chosen.className = 'review-answer'; chosen.textContent = `Tu respuesta: ${item.chosen}`;
    const answer = document.createElement('div'); answer.className = 'review-answer'; answer.textContent = `Correcta: ${item.answer}`;
    row.append(q, chosen, answer); $('review').appendChild(row);
  });
  $('progressBar').style.width = '100%';
  window.scrollTo({top:0,behavior:'smooth'});
}

function goHome() {
  clearInterval(timerId); quiz.classList.add('hidden'); results.classList.add('hidden'); home.classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

$('startBtn').addEventListener('click', startSession);
$('nextBtn').addEventListener('click', nextQuestion);
$('exitBtn').addEventListener('click', () => { if (confirm('¿Quieres salir de esta sesión? Se perderá el progreso actual.')) goHome(); });
$('retryBtn').addEventListener('click', startSession);
$('homeBtn').addEventListener('click', goHome);
$('soundToggle').addEventListener('click', () => {
  soundOn = !soundOn;
  $('soundToggle').textContent = soundOn ? '🔊 Sonido activado' : '🔇 Sonido desactivado';
  $('soundToggle').setAttribute('aria-pressed', String(soundOn));
  if (soundOn) playTone('good');
});
