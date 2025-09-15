import React, { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, AlertTriangle as TriangleAlert } from 'lucide-react';

interface FormEmailProps {
  isDarkMode: boolean;
  translations: {
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
}

export const FormEmail: React.FC<FormEmailProps> = ({ isDarkMode, translations: t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [lastSentTime, setLastSentTime] = useState<number | null>(null);

  // Verifica si ya se envió un mensaje recientemente (en memoria)
  useEffect(() => {
    if (lastSentTime) {
      const diff = Date.now() - lastSentTime;
      const msLeft = 2 * 60 * 60 * 1000 - diff;
      console.log("Tiempo transcurrido en ms:", diff);

      if (diff < 2 * 60 * 60 * 1000) {
        setIsSubmitted(true);
        if (msLeft > 0) {
          setTimeLeft(msLeft);
        }
      }
    }
  }, [lastSentTime]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (timeLeft !== null && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev > 1000) {
            return prev - 1000;
          } else {
            clearInterval(interval);
            setIsSubmitted(false);
            setLastSentTime(null);
            return null;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null); 
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); 

    // Verifica si ya se envió un mensaje recientemente
    if (lastSentTime) {
      const diff = Date.now() - lastSentTime;
      if (diff < 2 * 60 * 60 * 1000) {
        const msLeft = 2 * 60 * 60 * 1000 - diff;
        setTimeLeft(msLeft);
        setIsSubmitting(false);
        return;
      }
    }

    // Configuración de EmailJS - REEMPLAZA CON TUS CREDENCIALES
    const SERVICE_ID = "service_nshbb8s";
    const TEMPLATE_ID = "template_eyndijh";
    const PUBLIC_KEY = "ln4IheS1yP-YhnysU";

    try {
      // Preparar los datos del formulario
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Tu Nombre' // Cambia esto por tu nombre
      };

      // Enviar usando la API de EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: templateParams
        })
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Error ${response.status}: ${errorText || 'Error de red desconocido'}`);
      }

      const responseData = await response.text();
      console.log('Email sent successfully:', responseData);

      setIsSubmitting(false);
      setIsSubmitted(true);
      setLastSentTime(Date.now()); // Guardar en estado en lugar de localStorage
      
      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (err) {
      console.error("Error al enviar email:", err);
      setError(`Error al intentar enviar el mensaje: ${err instanceof Error ? err.message : String(err)}`);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:shadow-2xl ${
      isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-rose-200/40'
    }`}>
      <h3 className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-slate-800'
      }`}>
        {t.title}
      </h3>
      
      {timeLeft !== null && timeLeft > 0 ? (
        <div className="text-center py-12">
          <TriangleAlert className={`h-16 w-16 mx-auto mb-4 ${
            isDarkMode ? 'text-yellow-400' : 'text-amber-500'
          }`} />
          <h4 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            Ya enviaste un mensaje. Podrás volver a enviar en {formatTime(timeLeft)}.
          </h4>
          <p className={`transition-all duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-slate-600'
          }`}>
            Gracias por contactarme. Te responderé pronto.
          </p>
        </div>
      ) : isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h4 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}>
            ¡Mensaje enviado!
          </h4>
          <p className={`transition-all duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-slate-600'
          }`}>
            Gracias por contactarme. Te responderé pronto.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-slate-700'
              }`}>
                {t.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                    : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                }`}
                placeholder={t.namePlaceholder}
              />
            </div>
            
            <div>
              <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-slate-700'
              }`}>
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                    : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
                }`}
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>
          
          <div>
            <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-slate-700'
            }`}>
              {t.subject}
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange} 
              required
              className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/10 border-white/20 text-white focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                  : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
              }`}
            >
              <option value="" className="bg-white text-slate-00">
    Selecciona un asunto
  </option>
  <option value="Oportunidad laboral" className="bg-white text-slate-700">
    Oportunidad laboral
  </option>
  <option value="Consulta general" className="bg-white text-slate-700">
    Consulta general
  </option>
  <option value="Otro" className="bg-white text-slate-700">
    Otro
  </option>
</select>
          </div>
          
          <div>
            <label className={`block font-semibold mb-3 text-lg transition-all duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-slate-700'
            }`}>
              {t.message}
            </label>
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className={`w-full px-6 py-4 border rounded-2xl focus:ring-2 outline-none transition-all duration-300 resize-none backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/20 focus:ring-purple-500 focus:border-transparent' 
                  : 'bg-white/80 border-rose-200/30 text-slate-800 placeholder-slate-500 focus:bg-white focus:ring-rose-500 focus:border-transparent'
              }`}
              placeholder="Cuéntame sobre tu proyecto o consulta..."
            />
          </div>
          
          {error && (
            <div className="text-center p-4 rounded-xl bg-red-500/10 text-red-400 font-medium border border-red-500/30 transition-all duration-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`group w-full text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 hover:shadow-2xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 hover:shadow-purple-500/25' 
                : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-500 hover:shadow-rose-500/25'
            }`}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-pink-500 to-rose-500'
            }`}></div>
            <span className="relative z-10 flex items-center space-x-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>{t.send}</span>
                </>
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}; 