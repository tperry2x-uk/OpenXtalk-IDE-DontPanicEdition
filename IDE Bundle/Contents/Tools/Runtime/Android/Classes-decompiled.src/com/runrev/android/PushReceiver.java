/*     */ package com.runrev.android;
/*     */ 
/*     */ import android.content.BroadcastReceiver;
/*     */ import android.content.Context;
/*     */ import android.content.Intent;
/*     */ import android.util.Log;
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
/*     */ public class PushReceiver
/*     */   extends BroadcastReceiver
/*     */ {
/*     */   public static final String TAG = "revandroid.PushReceiver";
/*     */   
/*     */   public void onReceive(Context paramContext, Intent paramIntent) {
/*  30 */     Log.i("revandroid.PushReceiver", "received action:" + paramIntent.getAction());
/*  31 */     if (paramIntent.getAction().equals("com.google.android.c2dm.intent.REGISTRATION")) {
/*     */       
/*  33 */       handleRegistration(paramContext, paramIntent);
/*     */     }
/*  35 */     else if (paramIntent.getAction().equals("com.google.android.c2dm.intent.RECEIVE")) {
/*     */       
/*  37 */       handleMessage(paramContext, paramIntent);
/*     */     }
/*     */     else {
/*     */       
/*  41 */       Log.i("revandroid.PushReceiver", "unhandled intent: " + paramIntent);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   private void handleRegistration(Context paramContext, Intent paramIntent) {
/*  47 */     String str1 = paramIntent.getStringExtra("error");
/*  48 */     String str2 = paramIntent.getStringExtra("unregistered");
/*  49 */     String str3 = paramIntent.getStringExtra("registration_id");
/*  50 */     if (str1 != null) {
/*     */ 
/*     */       
/*  53 */       Log.i("revandroid.PushReceiver", "registration error: " + str1);
/*  54 */       NotificationModule.handleRemoteRegistrationError(paramContext, str1);
/*     */     }
/*  56 */     else if (str2 != null) {
/*     */ 
/*     */       
/*  59 */       NotificationModule.handleRemoteUnregistration(paramContext);
/*     */     }
/*  61 */     else if (str3 != null) {
/*     */ 
/*     */       
/*  64 */       NotificationModule.handleRemoteRegistration(paramContext, str3);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   private void handleMessage(Context paramContext, Intent paramIntent) {
/*  70 */     String str1 = paramIntent.getStringExtra("body");
/*  71 */     String str2 = paramIntent.getStringExtra("title");
/*  72 */     String str3 = paramIntent.getStringExtra("payload");
/*     */     
/*  74 */     if (str1 == null)
/*  75 */       str1 = "Notification received"; 
/*  76 */     if (str2 == null)
/*  77 */       str2 = Utils.getLabel(paramContext); 
/*  78 */     if (str3 == null) {
/*  79 */       str3 = "";
/*     */     }
/*  81 */     boolean bool = false;
/*  82 */     int i = 0;
/*     */     
/*  84 */     String str4 = paramIntent.getStringExtra("play_sound");
/*     */     
/*  86 */     if (str4 != null) {
/*  87 */       bool = Boolean.valueOf(str4).booleanValue();
/*     */     }
/*     */     
/*     */     try {
/*  91 */       str4 = paramIntent.getStringExtra("badge_value");
/*  92 */       if (str4 != null) {
/*  93 */         i = Integer.valueOf(str4).intValue();
/*     */       }
/*  95 */     } catch (NumberFormatException numberFormatException) {
/*     */       
/*  97 */       i = 0;
/*     */     } 
/*     */     
/* 100 */     NotificationModule.handleRemoteMessage(paramContext, str1, str2, str3, bool, i);
/*     */   }
/*     */ }


/* Location:              /Users/paul/Desktop/OpenXTalk 1.963.1rc3.app/Contents/Tools/Runtime/Android/Classes.jar!/com/runrev/android/PushReceiver.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.1.3
 */