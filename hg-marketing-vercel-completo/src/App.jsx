import { useState } from 'react';
import './App.css';

const WHATSAPP = 'https://wa.me/52566298911';

function Icon({ children }) {
  return <span className="icon">{children}</span>;
}

const solutions = {
  'Negocios locales': {
    icon: '⌂',
    text: 'Restaurantes, barberías, tiendas, talleres, clínicas, gimnasios, agencias locales, etc.',
    goal: 'Presencia clara, contenido útil y campañas para generar consultas sin complicar la operación.',
    packs: [
      ['Diagnóstico Express', 'Desde $1,500 MXN', ['Auditoría de redes y presencia digital', 'Revisión de WhatsApp comercial', 'Oportunidades rápidas de venta', 'Plan de acción de 30 días']],
      ['Presencia que Vende', '$6,000–$9,000 MXN / mes', ['8 piezas mensuales: posts o carruseles', '12 historias mensuales', '4 ideas de reels guionadas', 'Copies comerciales y dirección visual']],
      ['Clientes por Anuncios', '$8,000–$15,000 MXN + pauta', ['Campañas Meta Ads', 'Objetivo mensajes o formularios', 'Optimización semanal', '2 creativos base incluidos']]
    ]
  },
  'Profesionistas': {
    icon: '◎',
    text: 'Dentistas, abogados, coaches, arquitectos, psicólogos, asesores, consultores, etc.',
    goal: 'Una marca personal clara para explicar lo que haces, ganar confianza y atraer mejores clientes.',
    packs: [
      ['Marca Personal Pro', '$5,000–$12,000 MXN', ['Propuesta de valor personal', 'Bio profesional para redes', 'Optimización de perfil', 'Kit visual base + 4 piezas']],
      ['Impulso a Servicios', '$7,000–$14,000 MXN', ['Oferta de servicio clara', 'Campañas para agenda o WhatsApp', 'Copies de conversión', '6 piezas mensuales + funnel básico']],
      ['Acompañamiento Lite', 'Plan mensual ajustable', ['Revisión mensual de estrategia', 'Ideas de contenido', 'Ajustes de comunicación', 'Seguimiento de oportunidades']]
    ]
  },
  'Marcas en crecimiento': {
    icon: '▣',
    text: 'Ecommerce, importadoras, franquicias pequeñas, marcas con equipo comercial, empresas familiares, etc.',
    goal: 'Ordenar marketing, campañas y comunicación para crecer con más estructura.',
    packs: [
      ['Meta Ads Prospectos', '$8,000–$15,000 MXN + pauta', ['Setup de campañas', 'Audiencias y remarketing', 'Pruebas creativas', 'Reporte ejecutivo']],
      ['Acompañamiento Mensual', 'Desde $12,000 MXN / mes', ['Planeación mensual', 'Supervisión de campañas', 'Revisión de KPIs', 'Recomendaciones comerciales']],
      ['Growth Personalizado', 'Cotización según alcance', ['Estrategia integral', 'Funnel comercial', 'Contenido + pauta', 'Optimización continua']]
    ]
  }
};

const cases = {
  'Sector motociclismo multimarca': {
    context: 'Comunicación para marcas con objetivos B2B, B2C, posicionamiento y generación de demanda.',
    reto: 'Mantener claridad entre marcas, públicos y objetivos comerciales sin perder consistencia visual.',
    acciones: ['Estructura editorial por marca y objetivo', 'Copies comerciales con enfoque de valor', 'Campañas digitales orientadas a demanda', 'Dirección creativa para piezas premium'],
    evidencia: ['Piezas publicadas', 'Calendarios editoriales', 'Capturas de campañas autorizadas', 'Métricas generales de pauta']
  },
  'Lead generation inmobiliario': {
    context: 'Campañas orientadas a mensajes y prospectos dentro de un sector competido.',
    reto: 'Mejorar eficiencia y reducir costos de contacto sin perder calidad de prospecto.',
    acciones: ['Optimización de segmentación', 'Testing de creativos y copies', 'Ajuste de objetivos', 'Lectura de CPL, CPC y mensajes'],
    evidencia: ['Antes/después de CPL o CPC', 'Capturas de Ads Manager', 'Creativos usados', 'Resumen de aprendizajes']
  },
  'Negocios locales con WhatsApp': {
    context: 'Campañas simples para negocios que necesitan convertir redes en conversaciones.',
    reto: 'Redes activas, pero sin camino claro hacia contacto o venta.',
    acciones: ['Oferta más clara', 'CTA directo a WhatsApp', 'Campañas locales de mensajes', 'Recomendaciones de seguimiento'],
    evidencia: ['Capturas de conversaciones sin datos personales', 'Anuncios activos', 'Volumen de mensajes', 'Piezas creativas usadas']
  }
};

export default function App() {
  const [activeSolution, setActiveSolution] = useState('Negocios locales');
  const [activeCase, setActiveCase] = useState('Sector motociclismo multimarca');
  const solution = solutions[activeSolution];
  const selectedCase = cases[activeCase];

  return (
    <main>
      <a className="floating" href={WHATSAPP}>WhatsApp</a>

      <section className="hero card">
        <div className="heroText">
          <div className="brandRow">
            <div className="logoWrap"><img src="/logo.png" alt="HG Logo" /></div>
            <div>
              <p className="overline">Héctor Gutiérrez</p>
              <p className="muted small">Estrategia, criterio y ejecución</p>
            </div>
          </div>

          <h1>Marketing con dirección y resultados.</h1>
          <p className="lead">Para negocios, profesionistas y marcas que buscan crecer con orden, presencia y resultados.</p>
          <p className="muted">Te ayudo a convertir lo que hoy tienes en una comunicación más sólida, una oferta mejor presentada y acciones de marketing que sí sumen al negocio.</p>

          <div className="actions">
            <a className="button primary" href={WHATSAPP}>Platiquemos por WhatsApp</a>
            <a className="button ghost" href="mailto:hdmkt@gmail.com">Enviar correo</a>
          </div>
        </div>

        <div className="miniGrid">
          <div><Icon>▤</Icon><b>Creatividad con intención</b><span>Contenido</span></div>
          <div><Icon>↗</Icon><b>Resultados medibles</b><span>Ads / Performance</span></div>
          <div><Icon>◎</Icon><b>Presencia profesional</b><span>Marca / Confianza</span></div>
          <div><Icon>✦</Icon><b>Tecnología útil</b><span>IA aplicada</span></div>
        </div>
      </section>

      <section className="three">
        <div className="card"><Icon>▤</Icon><h3>Contenido que conecta</h3><p> Cada pieza debe atraer atención, explicar valor y facilitar el siguiente paso.</p></div>
        <div className="card"><Icon>↗</Icon><h3>Ajuste constante</h3><p>Reviso resultados, detecto oportunidades y optimizo lo que sí mueve negocio.</p></div>
        <div className="card"><Icon>✦</Icon><h3>IA con criterio</h3><p>Herramientas modernas para avanzar más rápido sin perder estrategia ni calidad.</p></div>
      </section>

      <section className="card section">
        <p className="overline">Metodología · AI Powered</p>
        <h2>IA con criterio.</h2>
        <p className="muted wide">Uso IA como acelerador creativo, no como sustituto de estrategia. El objetivo es producir más rápido, probar mejor y mantener una línea visual sólida.</p>
        <div className="four">
          {[
            ['⌕', '01 Diagnóstico', 'Entiendo oferta, cliente, competencia y urgencia comercial.'],
            ['✦', '02 Sistema creativo', 'Hooks, mensajes, formatos y dirección visual con intención.'],
            ['▣', '03 Producción ágil', 'Flujos IA + herramientas pro para avanzar sin improvisar.'],
            ['↗', '04 Optimización', 'Lectura de datos, ajustes y siguientes pruebas.']
          ].map(([icon, title, text]) => <div className="step" key={title}><Icon>{icon}</Icon><b>{title}</b><p>{text}</p></div>)}
        </div>
      </section>

      <section className="section">
        <p className="overline">Servicios</p>
        <h2>Cómo puedo ayudarte.</h2>
        <p className="muted wide">No todos necesitan lo mismo. Algunos necesitan claridad; otros contenido constante; otros campañas. Aquí puedes revisar qué incluye cada ruta.</p>

        <div className="tabs">
          {Object.keys(solutions).map(name => (
            <button key={name} onClick={() => setActiveSolution(name)} className={activeSolution === name ? 'active' : ''}>
              <Icon>{solutions[name].icon}</Icon><b>{name}</b><span>{solutions[name].text}</span>
            </button>
          ))}
        </div>

        <div className="card detail">
          <div className="detailHead">
            <div><p className="overline">Detalle de solución</p><h3>{activeSolution}</h3><p className="muted">{solution.goal}</p></div>
            <a className="button primary" href={WHATSAPP}>Cotizar esta solución</a>
          </div>
          <div className="packs">
            {solution.packs.map(([name, price, items]) => (
              <div className="pack" key={name}><h4>{name}</h4><p className="muted">{price}</p>{items.map(i => <p className="check" key={i}>✓ {i}</p>)}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <p className="overline">Portafolio</p>
        <h2>Experiencia aplicada.</h2>
        <p className="muted wide">Proyectos donde la estrategia, la creatividad y la ejecución tuvieron un objetivo comercial claro.</p>

        <div className="three">
          <div className="card"><h3>Campañas con intención visual</h3><p>Concepto, mensaje y diseño orientado a impacto comercial.</p></div>
          <div className="card"><h3>Piezas con estructura comercial</h3><p>Contenido pensado para atraer, explicar y convertir.</p></div>
          <div className="card"><h3>Marca + estrategia comercial</h3><p>Campañas, lectura de métricas y decisiones con objetivo.</p></div>
        </div>

        <div className="caseGrid">
          <div className="caseTabs">
            {Object.keys(cases).map(name => <button key={name} className={activeCase === name ? 'active' : ''} onClick={() => setActiveCase(name)}>{name}<span>Ver detalle</span></button>)}
          </div>
          <div className="caseDetail">
            <p className="overline">Proyecto seleccionado</p>
            <h3>{activeCase}</h3>
            <p>{selectedCase.context}</p>
            <div className="caseCols">
              <div><b>Reto</b><p>{selectedCase.reto}</p></div>
              <div><b>Acciones</b>{selectedCase.acciones.map(a => <p key={a}>• {a}</p>)}</div>
            </div>
            <div className="evidence"><b>Resultados y activos del proyecto:</b>{selectedCase.evidencia.map(e => <p key={e}>• {e}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="card cta">
        <div>
          <p className="overline">Contacto</p>
          <h2>Hablemos de tu proyecto.</h2>
          <p className="muted">Podemos comenzar con una base sólida, detectar oportunidades reales y construir crecimiento paso a paso.</p>
          <div className="actions"><a className="button primary" href={WHATSAPP}>WhatsApp</a><a className="button ghost" href="mailto:hdmkt@gmail.com">hdmkt@gmail.com</a></div>
        </div>
        <div className="ctaBox">
          <Icon>↗</Icon><p className="overline">Siguiente paso</p><h3>Diagnóstico inicial</h3>
          <p>Revisamos tu negocio, detectamos oportunidades y definimos el camino más rentable para crecer juntos.</p>
          <a href={WHATSAPP}>Solicitar diagnóstico →</a>
        </div>
      </section>
    </main>
  );
}
