import React, { useState } from "react";
import { Phone, Mail } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type Props = {
  message?: string;
  resortName?: string;
};

const ContactCTAs = ({ message, resortName }: Props) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", contactNumber: "", email: "", checkin: "", checkout: "", people: 1, message: "" });
  const [mailBtnBg, setMailBtnBg] = useState('linear-gradient(90deg,#1D74F2 0%,#1AC5FB 100%)');
  const subject = `Booking inquiry: ${resortName ?? "Resort"}`;
  const whatsappMessage = message ?? `Hi, I want to book a stay at ${resortName ?? "your resort"} in Dandeli.`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nContact Number: ${form.contactNumber}\nEmail: ${form.email}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nPeople: ${form.people}\n\nMessage:\n${form.message}`;
    const mailto = `mailto:dandelibudgetfriendlyresort@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <AnimateOnScroll animationType="slideUp" delay={0}>
        <div className="bg-card rounded-xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-2xl font-bold">Need help booking?</h3>
            <p className="text-muted-foreground mt-1">Use the contact options to reach us immediately.</p>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-stretch">
            <WhatsAppButton message={whatsappMessage} className="w-full sm:w-auto" />

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="tel:+918217885207" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-3 rounded-full font-semibold shadow-medium hover:bg-primary/90 transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </Button>

            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center text-white"
              style={{ backgroundImage: mailBtnBg, transition: 'background 150ms ease', backgroundSize: '200% 100%' }}
              onClick={() => setOpen(true)}
              onMouseEnter={() => setMailBtnBg('linear-gradient(90deg,#1766D9 0%,#14A6E0 100%)')}
              onMouseLeave={() => setMailBtnBg('linear-gradient(90deg,#1D74F2 0%,#1AC5FB 100%)')}
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>Mail Me</span>
            </Button>
          </div>
        </div>
      </div>
      </AnimateOnScroll>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-background rounded-xl shadow-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium mb-1">Contact Number</label>
                <input type="tel" name="contactNumber" id="contactNumber" required value={form.contactNumber} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} className="w-full pl-10 px-3 py-2 rounded-lg border border-muted bg-muted/10 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium mb-1">Check-in date & time</label>
                  <input type="datetime-local" name="checkin" id="checkin" value={form.checkin} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium mb-1">Check-out date & time</label>
                  <input type="datetime-local" name="checkout" id="checkout" value={form.checkout} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              <div>
                <label htmlFor="people" className="block text-sm font-medium mb-1">Number of people</label>
                <input type="number" name="people" id="people" min={1} value={form.people as any} onChange={(e) => setForm({ ...form, people: Number(e.target.value) })} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea name="message" id="message" required rows={3} value={form.message} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input type="text" value={subject} disabled className="w-full px-3 py-2 rounded-lg border border-muted bg-muted/30" />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                <Button type="submit" variant="default">Send Mail</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactCTAs;

