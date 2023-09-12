/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.media.MediaPlayer;
/*     */ import android.media.RingtoneManager;
/*     */ import android.net.Uri;
/*     */ import android.os.Vibrator;
/*     */ import android.util.Log;
/*     */ import java.io.IOException;
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
/*     */ public class Alert
/*     */ {
/*     */   protected Engine m_engine;
/*  32 */   static MediaPlayer m_beep_manager = null;
/*  33 */   static Vibrator m_vibrate_manager = null;
/*  34 */   Uri m_alert_sound = null;
/*     */   static boolean m_prepared = false;
/*  36 */   static int m_beep_count = 0;
/*     */ 
/*     */   
/*     */   public Alert(Engine paramEngine) {
/*  40 */     this.m_engine = paramEngine;
/*     */     
/*  42 */     if (m_beep_manager == null) {
/*     */       
/*  44 */       m_beep_manager = new MediaPlayer();
/*     */       
/*  46 */       m_beep_manager.setOnCompletionListener(new MediaPlayer.OnCompletionListener()
/*     */           {
/*     */             public void onCompletion(MediaPlayer param1MediaPlayer)
/*     */             {
/*  50 */               Alert.m_beep_count--;
/*  51 */               if (Alert.m_beep_count > 0) {
/*  52 */                 Alert.m_beep_manager.start();
/*     */               }
/*     */             }
/*     */           });
/*  56 */       m_beep_manager.setOnErrorListener(new MediaPlayer.OnErrorListener()
/*     */           {
/*     */             public boolean onError(MediaPlayer param1MediaPlayer, int param1Int1, int param1Int2)
/*     */             {
/*  60 */               return false;
/*     */             }
/*     */           });
/*     */       
/*  64 */       m_beep_manager.setOnPreparedListener(new MediaPlayer.OnPreparedListener()
/*     */           {
/*     */             public void onPrepared(MediaPlayer param1MediaPlayer)
/*     */             {
/*  68 */               Alert.m_prepared = true;
/*  69 */               Alert.m_beep_manager.start();
/*     */             }
/*     */           });
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void doBeep(int paramInt) throws IOException {
/*  78 */     if (paramInt > 0) {
/*  79 */       m_beep_count += paramInt;
/*     */     }
/*  81 */     if (m_beep_manager != null) {
/*     */ 
/*     */       
/*  84 */       if (this.m_alert_sound == null) {
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */         
/*  90 */         this.m_alert_sound = RingtoneManager.getDefaultUri(2);
/*  91 */         if (this.m_alert_sound == null)
/*     */         {
/*  93 */           this.m_alert_sound = RingtoneManager.getDefaultUri(1);
/*     */         }
/*     */       } 
/*  96 */       if (this.m_alert_sound != null && m_beep_count > 0 && !m_beep_manager.isPlaying())
/*     */       {
/*  98 */         if (!m_prepared) {
/*     */           
/* 100 */           m_beep_manager.setAudioStreamType(4);
/* 101 */           m_beep_manager.setDataSource(this.m_engine.getContext(), this.m_alert_sound);
/* 102 */           m_beep_manager.setLooping(false);
/* 103 */           m_beep_manager.prepare();
/*     */         }
/*     */         else {
/*     */           
/* 107 */           m_beep_manager.start();
/*     */         } 
/*     */       }
/*     */     } 
/*     */   }
/*     */ 
/*     */ 
/*     */   
/*     */   public void doVibrate(int paramInt) {
/* 116 */     if (m_vibrate_manager == null)
/* 117 */       m_vibrate_manager = (Vibrator)this.m_engine.getContext().getSystemService("vibrator"); 
/* 118 */     if (m_vibrate_manager != null)
/*     */       
/*     */       try {
/*     */         
/* 122 */         long[] arrayOfLong = new long[paramInt * 2];
/* 123 */         for (byte b = 0; b < paramInt; b++) {
/*     */           
/* 125 */           arrayOfLong[b * 2] = 100L;
/* 126 */           arrayOfLong[b * 2 + 1] = 400L;
/*     */         } 
/* 128 */         m_vibrate_manager.vibrate(arrayOfLong, -1);
/*     */       }
/* 130 */       catch (Exception exception) {
/*     */         
/* 132 */         Log.i("revandroid", exception.toString());
/*     */       }  
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/Alert.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */