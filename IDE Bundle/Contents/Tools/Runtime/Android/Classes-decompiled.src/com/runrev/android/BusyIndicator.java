/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.app.ProgressDialog;
/*    */ import android.content.DialogInterface;
/*    */ import android.view.KeyEvent;
/*    */ import java.util.ArrayList;
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ 
/*    */ public class BusyIndicator
/*    */ {
/*    */   protected Engine m_engine;
/*    */   protected ArrayList<ProgressDialog> m_dialog;
/*    */   protected int m_progress_dialog_array_pos;
/*    */   
/*    */   public BusyIndicator(Engine paramEngine) {
/* 35 */     this.m_engine = paramEngine;
/* 36 */     this.m_progress_dialog_array_pos = -1;
/* 37 */     this.m_dialog = new ArrayList<>();
/*    */   }
/*    */ 
/*    */ 
/*    */   
/*    */   public void showBusyIndicator(String paramString) {
/* 43 */     this.m_progress_dialog_array_pos++;
/* 44 */     this.m_dialog.add(new ProgressDialog(this.m_engine.getContext()));
/*    */     
/* 46 */     ProgressDialog progressDialog = ProgressDialog.show(this.m_engine.getContext(), "", paramString, true);
/* 47 */     this.m_dialog.set(this.m_progress_dialog_array_pos, progressDialog);
/*    */     
/* 49 */     progressDialog.setOnKeyListener(new DialogInterface.OnKeyListener()
/*    */         {
/*    */           public boolean onKey(DialogInterface param1DialogInterface, int param1Int, KeyEvent param1KeyEvent)
/*    */           {
/* 53 */             if (param1Int == 4 && param1KeyEvent.getAction() == 0 && param1KeyEvent.getRepeatCount() == 0) {
/*    */ 
/*    */               
/* 56 */               for (ProgressDialog progressDialog : BusyIndicator.this.m_dialog) {
/* 57 */                 progressDialog.dismiss();
/*    */               }
/* 59 */               Engine.doBackPressed();
/* 60 */               return true;
/*    */             } 
/* 62 */             return false;
/*    */           }
/*    */         });
/*    */   }
/*    */ 
/*    */   
/*    */   public void hideBusyIndicator() {
/* 69 */     if (this.m_dialog.get(this.m_progress_dialog_array_pos) != null) {
/*    */ 
/*    */       
/* 72 */       ((ProgressDialog)this.m_dialog.get(this.m_progress_dialog_array_pos)).dismiss();
/* 73 */       this.m_progress_dialog_array_pos--;
/*    */     } 
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/BusyIndicator.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */