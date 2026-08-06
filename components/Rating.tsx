'use client';
import {useState} from 'react';

const labels=['Amazing!','Jawdropping!!','Gobsmacked!!!','I need proof!?!','NO.DO.NOT.BELIEVE'];
export function Rating({storyId,initialCount,initialTotal}:{storyId:string,initialCount:number,initialTotal:number}){
  const [count,setCount]=useState(initialCount);const [total,setTotal]=useState(initialTotal);const [open,setOpen]=useState(false);const [message,setMessage]=useState('');const [busy,setBusy]=useState(false);
  const average=count?(total/count).toFixed(1):'—';
  async function rate(rating:number){setBusy(true);setMessage('');const response=await fetch('/api/rate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({storyId,rating})});const data=await response.json();if(response.ok){setCount(data.count);setTotal(data.total);setMessage(`Rated ${rating}: ${labels[rating-1]}`);setOpen(false);}else setMessage(data.error||'The rating could not be saved.');setBusy(false);}
  return <section className="rating" aria-label="Story rating"><div className="rating-summary">Rated: <strong>{count}</strong> {count===1?'time':'times'} <span>·</span> Average Rating: <strong>{average}</strong></div><div className="rating-control"><span>Rate with </span><button type="button" className="meter-trigger" aria-expanded={open} onClick={()=>setOpen(!open)}>Unbelievalometer</button>{open&&<div className="meter-options">{labels.map((label,i)=><button type="button" key={label} disabled={busy} onClick={()=>rate(i+1)}><b>{i+1}.</b> {label}</button>)}</div>}</div>{message&&<p className="rating-message" aria-live="polite">{message}</p>}</section>;
}
