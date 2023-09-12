/*    */ package com.runrev.android;
/*    */ 
/*    */ import android.content.Intent;
/*    */ import android.net.Uri;
/*    */ import android.telephony.SmsManager;
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
/*    */ public class TextMessaging
/*    */ {
/*    */   protected Engine m_engine;
/* 30 */   static SmsManager m_sms_manager = null;
/*    */ 
/*    */   
/*    */   public TextMessaging(Engine paramEngine) {
/* 34 */     this.m_engine = paramEngine;
/*    */   }
/*    */ 
/*    */   
/*    */   public Intent canSendTextMessage() {
/* 39 */     Intent intent = new Intent("android.intent.action.VIEW");
/* 40 */     intent.putExtra("address", "555");
/* 41 */     intent.putExtra("sms_body", "message");
/* 42 */     intent.setData(Uri.parse("smsto:555"));
/* 43 */     return intent;
/*    */   }
/*    */ 
/*    */   
/*    */   public Intent composeTextMessage(String paramString1, String paramString2) {
/* 48 */     Intent intent = new Intent("android.intent.action.VIEW");
/* 49 */     intent.putExtra("address", paramString1);
/* 50 */     intent.putExtra("sms_body", paramString2);
/* 51 */     intent.setData(Uri.parse("smsto:" + paramString1));
/* 52 */     return intent;
/*    */   }
/*    */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/TextMessaging.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */