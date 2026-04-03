import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", plano: "", data: "", convidados: "", mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\nPlano: ${form.plano}\nData: ${form.data}\nConvidados: ${form.convidados}\nMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5511982844587?text=${encodeURIComponent(msg)}`, "_blank");
  };

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
                  <div className="text-foreground font-body">(11) 98284-4587</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-body">Email</div>
                  <div className="text-foreground font-body">contato@absbartenders.com.br</div>
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
                <option value="Básico">Básico</option>
                <option value="Premium">Premium</option>
                <option value="Luxo">Luxo</option>
              </select>
              <input
                type="date"
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary"
                value={form.data}
                onChange={(e) => setForm({ ...form, data: e.target.value })}
              />
            </div>
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
