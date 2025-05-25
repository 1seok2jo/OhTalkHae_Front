import { MessageSquare, Users, Smile, Bell, Settings } from "lucide-react";

export default function Sidebar({ active, onChange }) {
  return (
    <nav className="sidebar">
      <button onClick={() => onChange('friends')} className={active==='friends'? 'active':''}><Users size={24}/></button>
      <button onClick={() => onChange('chats')}   className={active==='chats'?   'active':''}><MessageSquare size={24}/></button>
      <button onClick={() => onChange('shop')}    className={active==='shop'?    'active':''}><Smile size={24}/></button>
      <button onClick={() => onChange('alerts')}  className={active==='alerts'?  'active':''}><Bell size={24}/></button>
      <button onClick={() => onChange('settings')}className={active==='settings'?'active':''}><Settings size={24}/></button>
    </nav>
  )
}