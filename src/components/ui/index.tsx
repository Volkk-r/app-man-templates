import { useEffect, useId } from 'react';
import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'danger' };
export function Button({ variant = 'primary', type = 'button', className = '', ...props }: ButtonProps) {
  const style = variant === 'danger' ? 'danger-button' : variant;
  return <button type={type} className={`button ${style} ${className}`} {...props} />;
}
type InputProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; hint?: string };
export function Input({ label, error, hint, id, ...props }: InputProps) {
  const generatedId = useId(); const inputId = id || generatedId;
  return <label className="field" htmlFor={inputId}><span>{label}</span><input id={inputId} aria-invalid={!!error} {...props}/>{hint && <small>{hint}</small>}{error && <span className="field-error">{error}</span>}</label>;
}
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string };
export function Textarea({ label, error, id, ...props }: TextareaProps) {
  const generatedId = useId(); const inputId = id || generatedId;
  return <label className="field" htmlFor={inputId}><span>{label}</span><textarea id={inputId} aria-invalid={!!error} {...props}/>{error && <span className="field-error">{error}</span>}</label>;
}
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & { label: string };
export function Checkbox({ label, ...props }: CheckboxProps) {
  return <label className="check"><input type="checkbox" {...props}/>{label}</label>;
}
type ModalProps = { isOpen: boolean; title: string; children: ReactNode; onClose: () => void };
export function Modal({ isOpen, title, children, onClose }: ModalProps) {
  const titleId = useId();
  useEffect(() => { if (!isOpen) return; const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); }; window.addEventListener('keydown', handleKey); return () => window.removeEventListener('keydown', handleKey); }, [isOpen, onClose]);
  if (!isOpen) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId} onClick={event => event.stopPropagation()}><h2 id={titleId}>{title}</h2>{children}</div></div>;
}
export function Loader({ text = 'Загрузка…' }: { text?: string }) { return <p className="loading" role="status">{text}</p>; }
export function Alert({ children, type = 'error' }: { children: ReactNode; type?: 'error' | 'success' }) { return <div className={`alert ${type}`} role={type === 'error' ? 'alert' : 'status'}>{children}</div>; }
