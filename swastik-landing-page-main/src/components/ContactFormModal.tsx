import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  "Web Development",
  "Mobile App Development",
  "Graphics Designing",
  "Digital Marketing",
  "Social Media Marketing",
  "Game Development",
  "Other",
];

const budgetRanges = [
  "Under ₹5,000",
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹20,000",
  "₹20,000 – ₹30,000",
  "₹30,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.description) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const mailtoBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Company: ${formData.company || "N/A"}
Service: ${formData.service}
Budget: ${formData.budget || "N/A"}
Timeline: ${formData.timeline || "N/A"}

Project Description:
${formData.description}
      `.trim();

      const mailtoLink = `mailto:swastiktechnologyandsolutions@gmail.com?subject=${encodeURIComponent(
        `New Project Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(mailtoBody)}`;

      window.open(mailtoLink, "_blank");

      toast({ title: "Opening your email client...", description: "Please send the pre-filled email to complete your inquiry." });
      
      setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", timeline: "", description: "" });
      onOpenChange(false);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Start Your Project</DialogTitle>
          <DialogDescription>Tell us about your project and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" placeholder="Your Company" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Service Required *</Label>
            <Select value={formData.service} onValueChange={(v) => handleChange("service", v)}>
              <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Budget Range</Label>
              <Select value={formData.budget} onValueChange={(v) => handleChange("budget", v)}>
                <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Expected Timeline</Label>
              <Input id="timeline" placeholder="e.g. 2 months" value={formData.timeline} onChange={(e) => handleChange("timeline", e.target.value)} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description *</Label>
            <Textarea id="description" placeholder="Describe your project idea, goals, and any specific requirements..." className="min-h-[100px]" value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>

          <Button type="submit" variant="hero" className="w-full py-6 text-base" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
