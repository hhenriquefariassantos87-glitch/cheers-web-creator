import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const cardapios: { id: string; title: string; drinks: string[] }[] = [
  {
    id: "Cardápio Premium",
    title: "Cardápio Premium",
    drinks: [
      "Caipirinha", "Caipiroska", "Saquerita", "Mojito", "Moscow Mule",
      "Caipiríssima", "Campari Tonic", "Fitzgerald", "Piña Colada",
      "Aperol Spritz", "Negroni", "Gin & Tônica (e variações)", "Drink Surpresa",
    ],
  },
  {
    id: "Cardápio para Todos",
    title: "Cardápio para Todos (sem álcool)",
    drinks: [
      "Caipi Fake", "Pink Lemonade", "Kiss on the Beach", "Espanholinha",
      "Praia Australiana", "Italian Soda", "Piña Descolada",
      "Batidinha (sem álcool)", "Baby Kiss", "Mojitinho",
    ],
  },
  {
    id: "Seleção Especial",
    title: "Seleção Especial",
    drinks: [
      "Caipirinha", "Caipiroska", "Saquerita", "Espanhola",
      "Sex on the Beach", "Tropical Drink", "Brazuca Sour", "Lagoa Azul",
      "Caipi Fake", "Kiss on the Beach", "Lagoa Azul (sem álcool)", "Drink Surpresa",
    ],
  },
  {
    id: "Favoritos do Público",
    title: "Favoritos do Público",
    drinks: [
      "Caipirinha", "Caipiroska", "Saquerita", "Batida", "Espanhola",
      "Caipi Fake", "Espanholinha", "Drink Surpresa",
    ],
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", plano: "", cardapio: "", tipoEvento: "", data: "", convidados: "", mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\nPlano: ${form.plano}\nCardápio: ${form.cardapio}\nTipo de Evento: ${form.tipoEvento}\nData: ${form.data}\nConvidados: ${form.convidados}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5513974277006?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const selectedCardapio = cardapios.find((c) => c.id === form.cardapio);

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
          Entre em <span className="text-gradient-gold">Contato</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-body">Telefone</div>
                  <div className="text-foreground font-body">+55 13 97427-7006</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-body">Email</div>
                  <div className="text-foreground font-body">kaerbartender@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-body">Localização</div>
                  <div className="text-foreground font-body">São Paulo, SP</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-body">Horário</div>
                  <div className="text-foreground font-body">Segunda a Domingo: 9h - 22h</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
                value={form.plano}
                onChange={(e) => setForm({ ...form, plano: e.target.value })}
              >
                <option value="">Selecione o plano</option>
                <option value="Até 50 convidados">Até 50 convidados</option>
                <option value="Acima de 50 convidados">Acima de 50 convidados</option>
              </select>
              <select
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
                value={form.tipoEvento}
                onChange={(e) => setForm({ ...form, tipoEvento: e.target.value })}
              >
                <option value="">Tipo de evento</option>
                <option value="Casamento">Casamento</option>
                <option value="Aniversário">Aniversário</option>
                <option value="Festa Corporativa">Festa Corporativa</option>
                <option value="Formatura">Formatura</option>
                <option value="Confraternização">Confraternização</option>
                <option value="Chá de Bebê">Chá de Bebê</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <select
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
              value={form.cardapio}
              onChange={(e) => setForm({ ...form, cardapio: e.target.value })}
            >
              <option value="">Selecione o cardápio</option>
              {cardapios.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
            {selectedCardapio && (
              <div className="bg-card/60 border border-primary/20 rounded-lg p-4">
                <p className="font-display text-primary text-sm mb-3 uppercase tracking-wide">
                  {selectedCardapio.title}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {selectedCardapio.drinks.map((d) => (
                    <span key={d} className="font-body text-xs text-foreground/70">
                      • {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <input
              type="date"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
              value={form.data}
              onChange={(e) => setForm({ ...form, data: e.target.value })}
            />
            <input
              type="number"
              placeholder="Número de convidados"
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
              value={form.convidados}
              onChange={(e) => setForm({ ...form, convidados: e.target.value })}
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary resize-none"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
