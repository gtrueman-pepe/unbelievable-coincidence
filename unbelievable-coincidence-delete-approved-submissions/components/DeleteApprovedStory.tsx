'use client';
import {deleteApprovedStory} from '@/app/admin/actions';

export function DeleteApprovedStory({id,title}:{id:string;title:string}){
  return <form action={deleteApprovedStory} className="delete-story" onSubmit={event=>{if(!window.confirm(`Permanently delete “${title}”?\n\nThis removes the published story, ratings, original submission, and its decision-email history. This cannot be undone.`))event.preventDefault();}}><input type="hidden" name="id" value={id}/><button type="submit">Delete permanently</button></form>;
}
