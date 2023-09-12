/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.app.PendingIntent;
/*     */ import android.content.Intent;
/*     */ import android.nfc.NdefMessage;
/*     */ import android.nfc.NdefRecord;
/*     */ import android.nfc.NfcAdapter;
/*     */ import android.nfc.Tag;
/*     */ import android.nfc.tech.Ndef;
/*     */ import java.util.HashMap;
/*     */ import java.util.Map;
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ public class NFCModule
/*     */ {
/*     */   public static final String TAG = "revandroid.NFCModule";
/*     */   private Engine m_engine;
/*     */   private NfcAdapter m_nfc;
/*     */   private boolean m_enable_dispatch;
/*     */   
/*     */   public static native void doTagReceived(Map<String, Object> paramMap);
/*     */   
/*     */   public NFCModule(Engine paramEngine) {
/*  61 */     this.m_engine = paramEngine;
/*  62 */     this.m_nfc = NfcAdapter.getDefaultAdapter(paramEngine.getContext());
/*  63 */     this.m_enable_dispatch = false;
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   public void onPause() {
/*  72 */     if (this.m_enable_dispatch)
/*     */     {
/*  74 */       stopDispatch();
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   public void onResume() {
/*  80 */     if (this.m_enable_dispatch) {
/*  81 */       startDispatch();
/*     */     }
/*     */   }
/*     */   
/*     */   public void onNewIntent(Intent paramIntent) {
/*  86 */     if (isAvailable())
/*     */     {
/*  88 */       handleIntent(paramIntent);
/*     */     }
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean isAvailable() {
/*  94 */     return (this.m_nfc != null);
/*     */   }
/*     */ 
/*     */   
/*     */   public boolean isEnabled() {
/*  99 */     return (this.m_nfc != null && this.m_nfc.isEnabled());
/*     */   }
/*     */ 
/*     */   
/*     */   public void setDispatchEnabled(boolean paramBoolean) {
/* 104 */     if (this.m_enable_dispatch == paramBoolean) {
/*     */       return;
/*     */     }
/* 107 */     this.m_enable_dispatch = paramBoolean;
/* 108 */     if (this.m_enable_dispatch) {
/* 109 */       startDispatch();
/*     */     } else {
/* 111 */       stopDispatch();
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void startDispatch() {
/* 120 */     if (isEnabled()) {
/*     */       
/*     */       try {
/*     */         
/* 124 */         Intent intent = new Intent(this.m_engine.getActivity().getApplicationContext(), this.m_engine.getActivity().getClass());
/* 125 */         intent.setFlags(536870912);
/*     */         
/* 127 */         PendingIntent pendingIntent = PendingIntent.getActivity(this.m_engine.getActivity().getApplicationContext(), 0, intent, 0);
/* 128 */         this.m_nfc.enableForegroundDispatch(this.m_engine.getActivity(), pendingIntent, null, (String[][])null);
/*     */       }
/* 130 */       catch (SecurityException securityException) {}
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void stopDispatch() {
/* 139 */     if (isEnabled()) {
/*     */       
/*     */       try {
/*     */         
/* 143 */         this.m_nfc.disableForegroundDispatch(this.m_engine.getActivity());
/*     */       }
/* 145 */       catch (SecurityException securityException) {}
/*     */     }
/*     */   }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*     */   private void handleIntent(Intent paramIntent) {
/* 154 */     String str = paramIntent.getAction();
/*     */ 
/*     */     
/* 157 */     if ("android.nfc.action.NDEF_DISCOVERED".equals(str) || "android.nfc.action.TECH_DISCOVERED"
/* 158 */       .equals(str) || "android.nfc.action.TAG_DISCOVERED"
/* 159 */       .equals(str)) {
/*     */       
/* 161 */       HashMap<Object, Object> hashMap = new HashMap<>();
/*     */ 
/*     */       
/* 164 */       Tag tag = (Tag)paramIntent.getParcelableExtra("android.nfc.extra.TAG");
/*     */       
/* 166 */       hashMap.put("id", tag.getId());
/*     */       
/* 168 */       Ndef ndef = Ndef.get(tag);
/*     */       
/* 170 */       if (ndef != null) {
/*     */         
/* 172 */         NdefMessage ndefMessage = ndef.getCachedNdefMessage();
/* 173 */         if (ndefMessage != null) {
/*     */           
/* 175 */           HashMap<Object, Object> hashMap1 = new HashMap<>();
/*     */           
/* 177 */           boolean bool = true;
/* 178 */           for (NdefRecord ndefRecord : ndefMessage.getRecords()) {
/*     */             
/* 180 */             HashMap<Object, Object> hashMap2 = new HashMap<>();
/* 181 */             hashMap2.put("tnf", Integer.valueOf(ndefRecord.getTnf()));
/*     */             
/* 183 */             if ((ndefRecord.getId()).length != 0)
/* 184 */               hashMap2.put("id", ndefRecord.getId()); 
/* 185 */             if ((ndefRecord.getType()).length != 0)
/* 186 */               hashMap2.put("type", ndefRecord.getType()); 
/* 187 */             if ((ndefRecord.getPayload()).length != 0) {
/* 188 */               hashMap2.put("payload", ndefRecord.getPayload());
/*     */             }
/* 190 */             hashMap1.put(Integer.toString(bool), hashMap2);
/*     */           } 
/*     */           
/* 193 */           hashMap.put("ndef", hashMap1);
/*     */         } 
/*     */       } 
/*     */       
/* 197 */       doTagReceived((Map)hashMap);
/*     */     } 
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/NFCModule.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */